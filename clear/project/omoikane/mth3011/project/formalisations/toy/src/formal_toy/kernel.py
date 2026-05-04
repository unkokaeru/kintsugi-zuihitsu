"""The trusted kernel.

:func:`check` is the only function that decides whether a proof object is
valid. Everything else in the toy — parser, REPL, theorem transformers — is
untrusted: the kernel re-checks any proof produced elsewhere before the toy
accepts it.

Design constraints (locked — see report §06):

* ``check`` is written as a single :keyword:`match` over :class:`Proof`
  constructors. ``mypy --strict`` verifies that every case is handled.
* No mutation, no globals, no imports from other toy modules except
  :mod:`formal_toy.ast` and :mod:`formal_toy.calculus`.
* Rule-set restriction is enforced before structural checking — proofs in
  rules disallowed by the calculus are rejected outright.
"""

from __future__ import annotations

from formal_toy.ast import (
    Arrow,
    Assumption,
    AxiomA1,
    AxiomA2,
    AxiomA3,
    Bot,
    ExFalso,
    Formula,
    ModusPonens,
    Proof,
    neg,
)
from formal_toy.calculus import Calculus


class KernelError(Exception):
    """Raised when a proof is malformed or inadmissible in the given calculus."""


def check(proof: Proof, calculus: Calculus) -> Formula:
    """Verify ``proof`` in ``calculus`` and return the formula it derives.

    Raises :class:`KernelError` if the proof uses a disallowed rule, an
    assumption not in its context, a mismatched modus-ponens, or an
    ill-structured axiom instance.
    """
    rule = type(proof)
    if not calculus.permits(rule):
        raise KernelError(
            f"rule {rule.__name__} is not allowed in calculus {calculus.name!r}"
        )
    match proof:
        case Assumption(ctx=ctx, formula=phi):
            if phi not in ctx:
                raise KernelError(
                    f"assumption {phi} is not in the context {list(ctx)}"
                )
            return phi
        case AxiomA1(a=a, b=b):
            # A ⟹ (B ⟹ A)
            return Arrow(a, Arrow(b, a))
        case AxiomA2(a=a, b=b, c=c):
            # (A ⟹ (B ⟹ C)) ⟹ ((A ⟹ B) ⟹ (A ⟹ C))
            return Arrow(
                Arrow(a, Arrow(b, c)),
                Arrow(Arrow(a, b), Arrow(a, c)),
            )
        case AxiomA3(a=a, b=b):
            # (~B ⟹ ~A) ⟹ (A ⟹ B)
            return Arrow(Arrow(neg(b), neg(a)), Arrow(a, b))
        case ExFalso(a=a):
            # ⊥ ⟹ A
            return Arrow(Bot(), a)
        case ModusPonens(ctx=ctx, imp=imp, ant=ant):
            if imp.ctx != ctx:
                raise KernelError(
                    "modus ponens: implication subproof has a different context "
                    f"({list(imp.ctx)}) to the conclusion ({list(ctx)})"
                )
            if ant.ctx != ctx:
                raise KernelError(
                    "modus ponens: antecedent subproof has a different context "
                    f"({list(ant.ctx)}) to the conclusion ({list(ctx)})"
                )
            imp_formula = check(imp, calculus)
            ant_formula = check(ant, calculus)
            match imp_formula:
                case Arrow(lhs=lhs, rhs=rhs) if lhs == ant_formula:
                    return rhs
                case _:
                    raise KernelError(
                        "modus ponens: implication subproof has formula "
                        f"{imp_formula}, antecedent {ant_formula}; shapes don't match"
                    )
    # mypy --strict verifies this branch is unreachable; kept for runtime safety.
    raise AssertionError(f"unknown Proof variant: {proof!r}")  # pragma: no cover
