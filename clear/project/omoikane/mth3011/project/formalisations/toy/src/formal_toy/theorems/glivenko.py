"""Theorem 2 — Glivenko's translation, as a Python transformer.

Glivenko's theorem (1929): for any propositional formula ``A`` and context
``Γ``, ``Γ ⊢_CL A`` iff ``Γ ⊢_INT ¬¬A``.

This module provides :func:`glivenko_translate` (forward direction, classical
→ intuitionistic of the double negation) along with the five intuitionistic
helper lemmas it needs. The reverse direction uses
:func:`cl_dne` to classically eliminate the double negation; it's trivial
once :func:`int_to_cl` and :func:`cl_dne` are in hand.

The construction parallels ``FormalMethods/Glivenko.lean`` step-for-step so
the §07 cross-tool comparison can read the two side-by-side without slippage.
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
    not_not,
)
from formal_toy.calculus import CLASSICAL, INTUITIONISTIC, Calculus
from formal_toy.kernel import KernelError, check
from formal_toy.theorems.deduction import (
    arrow_self,
    deduction_transform,
    weaken,
    weaken_cons,
)


# ---------------------------------------------------------------------------
# Classical helpers used by int_to_cl and glivenko_reverse
# ---------------------------------------------------------------------------


def cl_ex_falso(ctx: Context, a: Formula) -> Proof:
    """Classical derivation of ``ctx ⊢_CL ⊥ ⟹ A``.

    Strategy: ``arrow_self`` on ``⊥`` gives ``~⊥``. Wrap with A1 to get
    ``~A ⟹ ~⊥``. Apply A3 with P = ⊥, Q = A to get ``(~A ⟹ ~⊥) ⟹ (⊥ ⟹ A)``.
    MP to finish.
    """
    # ctx ⊢ ~⊥ (i.e. ⊥ ⟹ ⊥)
    h_nb = arrow_self(ctx, Bot())
    # ctx ⊢ ~⊥ ⟹ (~A ⟹ ~⊥)
    h_a1 = AxiomA1(ctx=ctx, a=neg(Bot()), b=neg(a))
    # ctx ⊢ ~A ⟹ ~⊥
    h_step = ModusPonens(ctx=ctx, imp=h_a1, ant=h_nb)
    # ctx ⊢ (~A ⟹ ~⊥) ⟹ (⊥ ⟹ A)
    h_a3 = AxiomA3(ctx=ctx, a=Bot(), b=a)
    return ModusPonens(ctx=ctx, imp=h_a3, ant=h_step)


def int_to_cl(proof: Proof) -> Proof:
    """Lift an intuitionistic proof to a classical one.

    The only non-trivial case is :class:`ExFalso`, which uses
    :func:`cl_ex_falso`; every other rule is shared between the two calculi.
    """
    match proof:
        case Assumption(ctx=ctx, formula=phi):
            return Assumption(ctx=ctx, formula=phi)
        case AxiomA1(ctx=ctx, a=a, b=b):
            return AxiomA1(ctx=ctx, a=a, b=b)
        case AxiomA2(ctx=ctx, a=a, b=b, c=c):
            return AxiomA2(ctx=ctx, a=a, b=b, c=c)
        case AxiomA3(ctx=ctx, a=a, b=b):
            return AxiomA3(ctx=ctx, a=a, b=b)
        case ExFalso(ctx=ctx, a=a):
            return cl_ex_falso(ctx, a)
        case ModusPonens(ctx=ctx, imp=imp, ant=ant):
            return ModusPonens(ctx=ctx, imp=int_to_cl(imp), ant=int_to_cl(ant))
    raise AssertionError(f"unknown Proof variant: {proof!r}")  # pragma: no cover


# ---------------------------------------------------------------------------
# Intuitionistic helpers for the forward direction
# ---------------------------------------------------------------------------


def _assume(ctx: Context, phi: Formula) -> Proof:
    """Sugar — ``Assumption(ctx, phi)`` after verifying membership up front."""
    if phi not in ctx:
        raise KernelError(f"{phi} is not in context {list(ctx)}")
    return Assumption(ctx=ctx, formula=phi)


def dni(ctx: Context, a: Formula) -> Proof:
    """Double-negation introduction: ``ctx ⊢ᴵ A ⟹ ¬¬A``.

    Under ``[~A, A, ctx]`` derive ``⊥`` via MP, then ``deduction_transform``
    twice to peel the two hypotheses.
    """
    ctx_inner: Context = (neg(a), a, *ctx)
    h_nA = _assume(ctx_inner, neg(a))
    h_A = _assume(ctx_inner, a)
    h_bot = ModusPonens(ctx=ctx_inner, imp=h_nA, ant=h_A)
    once = deduction_transform(h_bot, neg(a), INTUITIONISTIC)
    return deduction_transform(once, a, INTUITIONISTIC)


def dni_of_proof(proof: Proof) -> Proof:
    """Convenience: given ``ctx ⊢ᴵ A``, return ``ctx ⊢ᴵ ¬¬A``."""
    a_formula = check(proof, INTUITIONISTIC)
    h_dni = dni(proof.ctx, a_formula)
    return ModusPonens(ctx=proof.ctx, imp=h_dni, ant=proof)


def neg_imp_neg_conseq(ctx: Context, a: Formula, b: Formula) -> Proof:
    """``ctx ⊢ᴵ ~(A ⟹ B) ⟹ ~B``.

    Under ``[B, ~(A ⟹ B), ctx]`` lift ``B`` to ``A ⟹ B`` via A1, MP into
    ``~(A ⟹ B)`` to derive ``⊥``, peel twice.
    """
    nAB = neg(Arrow(a, b))
    ctx_inner: Context = (b, nAB, *ctx)
    h_B = _assume(ctx_inner, b)
    h_nAB = _assume(ctx_inner, nAB)
    h_AB = ModusPonens(
        ctx=ctx_inner, imp=AxiomA1(ctx=ctx_inner, a=b, b=a), ant=h_B
    )
    h_bot = ModusPonens(ctx=ctx_inner, imp=h_nAB, ant=h_AB)
    once = deduction_transform(h_bot, b, INTUITIONISTIC)
    return deduction_transform(once, nAB, INTUITIONISTIC)


def neg_imp_dn_ant(ctx: Context, a: Formula, b: Formula) -> Proof:
    """``ctx ⊢ᴵ ~(A ⟹ B) ⟹ ~~A``.

    Under ``[~A, ~(A ⟹ B), ctx]`` build ``A ⟹ B`` via ExFalso (so A and B
    both consistent with whatever ~A provides), MP into ``~(A ⟹ B)`` to
    derive ``⊥``, peel twice.
    """
    nAB = neg(Arrow(a, b))
    ctx_deep: Context = (a, neg(a), nAB, *ctx)
    h_A = _assume(ctx_deep, a)
    h_nA = _assume(ctx_deep, neg(a))
    h_bot0 = ModusPonens(ctx=ctx_deep, imp=h_nA, ant=h_A)
    h_exf = ExFalso(ctx=ctx_deep, a=b)
    h_B = ModusPonens(ctx=ctx_deep, imp=h_exf, ant=h_bot0)
    # Peel A: (~A, ~(A⟹B), ctx) ⊢ᴵ A ⟹ B
    h_AB = deduction_transform(h_B, a, INTUITIONISTIC)
    # MP against ~(A⟹B) to derive ⊥.
    ctx_mid = h_AB.ctx
    h_nAB_inner = _assume(ctx_mid, nAB)
    h_bot = ModusPonens(ctx=ctx_mid, imp=h_nAB_inner, ant=h_AB)
    # Peel the remaining two hypotheses.
    once = deduction_transform(h_bot, neg(a), INTUITIONISTIC)
    return deduction_transform(once, nAB, INTUITIONISTIC)


def dn_distrib(ctx: Context, a: Formula, b: Formula) -> Proof:
    """``ctx ⊢ᴵ ¬¬(A ⟹ B) ⟹ (¬¬A ⟹ ¬¬B)``.

    Same construction as the Lean proof: stack five hypotheses
    ``[A, A⟹B, ~B, ~~A, ~~(A⟹B)]`` onto ``ctx``, derive ``⊥``, peel —
    restoring ``⊥`` twice along the way via MP against ``~~A`` and
    ``~~(A⟹B)``.
    """
    AB = Arrow(a, b)
    nB = neg(b)
    nnA = not_not(a)
    nnAB = not_not(AB)
    ctx_5: Context = (a, AB, nB, nnA, nnAB, *ctx)
    h_A = _assume(ctx_5, a)
    h_AB = _assume(ctx_5, AB)
    h_nB = _assume(ctx_5, nB)
    h_B = ModusPonens(ctx=ctx_5, imp=h_AB, ant=h_A)
    h_bot = ModusPonens(ctx=ctx_5, imp=h_nB, ant=h_B)
    # Peel A: ctx_4 ⊢ ~A
    ctx_4: Context = (AB, nB, nnA, nnAB, *ctx)
    h_nA = deduction_transform(h_bot, a, INTUITIONISTIC)
    h_nnA_4 = _assume(ctx_4, nnA)
    h_bot1 = ModusPonens(ctx=ctx_4, imp=h_nnA_4, ant=h_nA)
    # Peel A⟹B: ctx_3 ⊢ ~(A⟹B)
    ctx_3: Context = (nB, nnA, nnAB, *ctx)
    h_nAB = deduction_transform(h_bot1, AB, INTUITIONISTIC)
    h_nnAB_3 = _assume(ctx_3, nnAB)
    h_bot2 = ModusPonens(ctx=ctx_3, imp=h_nnAB_3, ant=h_nAB)
    # Peel ~B: ctx_2 ⊢ ~~B
    h_nnB = deduction_transform(h_bot2, nB, INTUITIONISTIC)
    # Peel ~~A.
    h_step = deduction_transform(h_nnB, nnA, INTUITIONISTIC)
    # Peel ~~(A⟹B).
    return deduction_transform(h_step, nnAB, INTUITIONISTIC)


def dn_axiom_three(ctx: Context, a: Formula, b: Formula) -> Proof:
    """``ctx ⊢ᴵ ¬¬((~B ⟹ ~A) ⟹ (A ⟹ B))``.

    Under ``~X :: ctx`` with ``X = (~B ⟹ ~A) ⟹ (A ⟹ B)``, derive ``⊥`` via
    the five-step chain:

    1. ``neg_imp_dn_ant`` on ``~X`` gives ``~~(~B ⟹ ~A)``;
    2. ``neg_imp_neg_conseq`` on ``~X`` gives ``~(A ⟹ B)``;
    3. ``neg_imp_dn_ant`` on the output of step 2 gives ``~~A``;
    4. ``neg_imp_neg_conseq`` on the output of step 2 gives ``~B``;
    5. Under ``(~B ⟹ ~A) :: ~X :: ctx`` build ``~A`` (using the weakened
       ``~B`` and the assumed ``~B ⟹ ~A``), MP against ``~~A`` to derive
       ``⊥``; peel to give ``~(~B ⟹ ~A)``; finally MP against ``~~(~B ⟹ ~A)``
       to derive ``⊥`` under ``~X :: ctx``.

    Peel ``~X`` to finish.
    """
    BA = Arrow(neg(b), neg(a))
    AB = Arrow(a, b)
    X = Arrow(BA, AB)
    nX = neg(X)
    ctx_outer: Context = (nX, *ctx)
    # Step 1
    h_nX = _assume(ctx_outer, nX)
    h_nIAnt = ModusPonens(
        ctx=ctx_outer,
        imp=neg_imp_dn_ant(ctx_outer, BA, AB),
        ant=h_nX,
    )  # ~~(~B ⟹ ~A)
    # Step 2
    h_nAB = ModusPonens(
        ctx=ctx_outer,
        imp=neg_imp_neg_conseq(ctx_outer, BA, AB),
        ant=h_nX,
    )  # ~(A ⟹ B)
    # Step 3
    h_nnA = ModusPonens(
        ctx=ctx_outer,
        imp=neg_imp_dn_ant(ctx_outer, a, b),
        ant=h_nAB,
    )  # ~~A
    # Step 4
    h_nB = ModusPonens(
        ctx=ctx_outer,
        imp=neg_imp_neg_conseq(ctx_outer, a, b),
        ant=h_nAB,
    )  # ~B
    # Step 5
    ctx_inner: Context = (BA, *ctx_outer)
    h_BA_in = _assume(ctx_inner, BA)
    h_nB_in = weaken_cons(h_nB, BA, INTUITIONISTIC)
    h_nA_in = ModusPonens(ctx=ctx_inner, imp=h_BA_in, ant=h_nB_in)
    h_nnA_in = weaken_cons(h_nnA, BA, INTUITIONISTIC)
    h_bot_in = ModusPonens(ctx=ctx_inner, imp=h_nnA_in, ant=h_nA_in)
    h_neg_BA = deduction_transform(h_bot_in, BA, INTUITIONISTIC)  # ~(BA) under ctx_outer
    h_bot = ModusPonens(ctx=ctx_outer, imp=h_nIAnt, ant=h_neg_BA)
    # Peel ~X.
    return deduction_transform(h_bot, nX, INTUITIONISTIC)


# ---------------------------------------------------------------------------
# Classical DNE & Glivenko
# ---------------------------------------------------------------------------


def cl_dne(ctx: Context, a: Formula) -> Proof:
    """Classical double-negation elimination: ``ctx ⊢_CL ¬¬A ⟹ A``.

    A3 with P = ¬¬A, Q = A gives ``(¬A ⟹ ¬¬¬A) ⟹ (¬¬A ⟹ A)``. The premise
    ``¬A ⟹ ¬¬¬A`` is ``dni`` instantiated at ``¬A``, lifted classically.
    """
    h_dni = int_to_cl(dni(ctx, neg(a)))
    h_a3 = AxiomA3(ctx=ctx, a=not_not(a), b=a)
    return ModusPonens(ctx=ctx, imp=h_a3, ant=h_dni)


def glivenko_translate(proof: Proof) -> Proof:
    """Forward direction of Glivenko.

    Maps a classical proof of ``A`` under ``Γ`` to an intuitionistic proof
    of ``¬¬A`` under ``Γ``. Induction on the classical derivation; each
    case uses :func:`dni`, :func:`dn_distrib`, or :func:`dn_axiom_three`.
    """
    match proof:
        case Assumption(ctx=ctx_a, formula=phi):
            return dni_of_proof(Assumption(ctx=ctx_a, formula=phi))
        case AxiomA1(ctx=ctx_a, a=a_a, b=b_a):
            return dni_of_proof(AxiomA1(ctx=ctx_a, a=a_a, b=b_a))
        case AxiomA2(ctx=ctx_a, a=a_a, b=b_a, c=c_a):
            return dni_of_proof(AxiomA2(ctx=ctx_a, a=a_a, b=b_a, c=c_a))
        case AxiomA3(ctx=ctx, a=a, b=b):
            return dn_axiom_three(ctx, a, b)
        case ModusPonens(ctx=ctx, imp=imp_proof, ant=ant_proof):
            # imp_proof derives (C ⟹ B); find C, B for the A2 instance in dn_distrib.
            imp_formula = check(imp_proof, CLASSICAL)
            match imp_formula:
                case Arrow(lhs=c_form, rhs=b_form):
                    pass
                case _:  # pragma: no cover — guarded by the kernel
                    raise AssertionError(
                        f"ModusPonens's impl did not derive an arrow: {imp_formula}"
                    )
            d_imp = glivenko_translate(imp_proof)  # ~~(C ⟹ B)
            d_ant = glivenko_translate(ant_proof)  # ~~C
            h_distrib = dn_distrib(ctx, c_form, b_form)
            step1 = ModusPonens(ctx=ctx, imp=h_distrib, ant=d_imp)
            return ModusPonens(ctx=ctx, imp=step1, ant=d_ant)
        case ExFalso():
            raise KernelError(
                "glivenko_translate expects a classical proof; received an "
                "intuitionistic ExFalso rule"
            )
    raise AssertionError(f"unknown Proof variant: {proof!r}")  # pragma: no cover


def glivenko_reverse(proof: Proof) -> Proof:
    """Reverse direction: intuitionistic ``¬¬A`` to classical ``A``."""
    nnA = check(proof, INTUITIONISTIC)
    # nnA has shape ``(A ⟹ ⊥) ⟹ ⊥``; extract A.
    match nnA:
        case Arrow(lhs=Arrow(lhs=a_form, rhs=Bot()), rhs=Bot()):
            pass
        case _:
            raise KernelError(
                f"glivenko_reverse: expected input to derive ¬¬A; got {nnA}"
            )
    h_cl_nnA = int_to_cl(proof)
    h_dne = cl_dne(proof.ctx, a_form)
    return ModusPonens(ctx=proof.ctx, imp=h_dne, ant=h_cl_nnA)


__all__ = [
    "cl_dne",
    "cl_ex_falso",
    "dn_axiom_three",
    "dn_distrib",
    "dni",
    "dni_of_proof",
    "glivenko_reverse",
    "glivenko_translate",
    "int_to_cl",
    "neg_imp_dn_ant",
    "neg_imp_neg_conseq",
]
