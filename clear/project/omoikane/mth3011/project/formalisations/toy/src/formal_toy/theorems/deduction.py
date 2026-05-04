"""Theorem 1 — the Deduction Theorem, as a Python transformer.

Lean and the toy-assistant encode the deduction theorem at different
meta-levels: Lean states and proves it inside the object logic, whereas the
toy proves it at the *meta*-level, as a Python function that recursively
rewrites proof trees.

The trade is covered in report §07. Here: if ``proof`` derives ``B`` under
``(hyp, *rest)`` in ``calculus``, then :func:`deduction_transform(proof, hyp,
calculus)` returns a derivation of ``hyp ⟹ B`` under ``rest`` in the same
calculus. The kernel then re-checks the output — this is how we verify the
transformer in ``tests/test_deduction.py``.
"""

from __future__ import annotations

from formal_toy.ast import (
    Arrow,
    Assumption,
    AxiomA1,
    AxiomA2,
    AxiomA3,
    Bot,
    Context,
    ExFalso,
    Formula,
    ModusPonens,
    Proof,
    neg,
)
from formal_toy.calculus import Calculus
from formal_toy.kernel import KernelError, check


def arrow_self(ctx: Context, a: Formula) -> Proof:
    """Construct a proof of ``ctx ⊢ A ⟹ A`` via A1 + A2 + MP × 2."""
    h1 = AxiomA1(ctx=ctx, a=a, b=Arrow(a, a))
    h2 = AxiomA2(ctx=ctx, a=a, b=Arrow(a, a), c=a)
    h3 = ModusPonens(ctx=ctx, imp=h2, ant=h1)
    h4 = AxiomA1(ctx=ctx, a=a, b=a)
    return ModusPonens(ctx=ctx, imp=h3, ant=h4)


def weaken(proof: Proof, new_ctx: Context, calculus: Calculus) -> Proof:
    """Re-author ``proof`` under ``new_ctx`` ⊇ ``proof.ctx``.

    The new context must be a superset of the old one (membership, not
    order). Every proof-rule has an obvious weakening; :class:`Assumption`
    just re-checks membership, the other rules simply carry forward the
    same constructor parameters under the new context.
    """
    current = set(proof.ctx)
    if not current.issubset(set(new_ctx)):
        raise KernelError(
            f"weaken: new context {list(new_ctx)} does not include every "
            f"assumption of the old context {list(proof.ctx)}"
        )
    match proof:
        case Assumption(formula=phi):
            return Assumption(ctx=new_ctx, formula=phi)
        case AxiomA1(a=a, b=b):
            return AxiomA1(ctx=new_ctx, a=a, b=b)
        case AxiomA2(a=a, b=b, c=c):
            return AxiomA2(ctx=new_ctx, a=a, b=b, c=c)
        case AxiomA3(a=a, b=b):
            return AxiomA3(ctx=new_ctx, a=a, b=b)
        case ExFalso(a=a):
            return ExFalso(ctx=new_ctx, a=a)
        case ModusPonens(imp=imp, ant=ant):
            return ModusPonens(
                ctx=new_ctx,
                imp=weaken(imp, new_ctx, calculus),
                ant=weaken(ant, new_ctx, calculus),
            )
    raise AssertionError(f"unknown Proof variant: {proof!r}")  # pragma: no cover


def weaken_cons(proof: Proof, extra: Formula, calculus: Calculus) -> Proof:
    """Prepend ``extra`` to ``proof.ctx``."""
    return weaken(proof, (extra, *proof.ctx), calculus)


def deduction_transform(proof: Proof, hyp: Formula, calculus: Calculus) -> Proof:
    """Discharge the leading assumption ``hyp`` from ``proof``.

    ``proof.ctx`` must begin with ``hyp``. The returned proof has context
    equal to the remainder and derives ``hyp ⟹ (formula of proof)``.
    """
    if not proof.ctx or proof.ctx[0] != hyp:
        raise KernelError(
            f"deduction_transform: expected ctx to start with {hyp}, "
            f"got {list(proof.ctx)}"
        )
    rest: Context = proof.ctx[1:]
    match proof:
        case Assumption(formula=phi):
            if phi == hyp:
                return arrow_self(rest, hyp)
            # phi ∈ rest: derive phi by Assumption, wrap with A1 + MP.
            h_phi = Assumption(ctx=rest, formula=phi)
            h_a1 = AxiomA1(ctx=rest, a=phi, b=hyp)
            return ModusPonens(ctx=rest, imp=h_a1, ant=h_phi)
        case AxiomA1(a=a, b=b):
            ax_formula = Arrow(a, Arrow(b, a))
            return _wrap_axiom_with_a1(rest, hyp, ax_formula, AxiomA1(ctx=rest, a=a, b=b))
        case AxiomA2(a=a, b=b, c=c):
            ax_formula = Arrow(
                Arrow(a, Arrow(b, c)),
                Arrow(Arrow(a, b), Arrow(a, c)),
            )
            return _wrap_axiom_with_a1(
                rest, hyp, ax_formula, AxiomA2(ctx=rest, a=a, b=b, c=c)
            )
        case AxiomA3(a=a, b=b):
            ax_formula = Arrow(Arrow(neg(b), neg(a)), Arrow(a, b))
            return _wrap_axiom_with_a1(rest, hyp, ax_formula, AxiomA3(ctx=rest, a=a, b=b))
        case ExFalso(a=a):
            ax_formula = Arrow(Bot(), a)
            return _wrap_axiom_with_a1(rest, hyp, ax_formula, ExFalso(ctx=rest, a=a))
        case ModusPonens(imp=imp, ant=ant):
            # imp derives (C ⟹ B); ant derives C; the whole proof derives B.
            imp_formula = check(imp, calculus)
            match imp_formula:
                case Arrow(lhs=c_form, rhs=b_form):
                    pass
                case _:  # pragma: no cover — guarded by the kernel
                    raise AssertionError(
                        f"ModusPonens's impl subproof did not derive an arrow: {imp_formula}"
                    )
            # Recurse.
            d_imp = deduction_transform(imp, hyp, calculus)
            d_ant = deduction_transform(ant, hyp, calculus)
            # A2: (hyp ⟹ (C ⟹ B)) ⟹ ((hyp ⟹ C) ⟹ (hyp ⟹ B))
            h_a2 = AxiomA2(ctx=rest, a=hyp, b=c_form, c=b_form)
            step1 = ModusPonens(ctx=rest, imp=h_a2, ant=d_imp)
            return ModusPonens(ctx=rest, imp=step1, ant=d_ant)
    raise AssertionError(f"unknown Proof variant: {proof!r}")  # pragma: no cover


def _wrap_axiom_with_a1(
    ctx: Context, hyp: Formula, ax_formula: Formula, ax_proof: Proof
) -> Proof:
    """Build ``ctx ⊢ hyp ⟹ ax_formula`` given ``ctx ⊢ ax_formula``."""
    h_a1 = AxiomA1(ctx=ctx, a=ax_formula, b=hyp)
    return ModusPonens(ctx=ctx, imp=h_a1, ant=ax_proof)
