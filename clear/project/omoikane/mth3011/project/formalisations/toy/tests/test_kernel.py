"""Kernel: accepts well-formed axioms + MP; rejects malformed proofs."""

import pytest

from formal_toy.ast import (
    Arrow,
    Assumption,
    AxiomA1,
    AxiomA2,
    AxiomA3,
    Bot,
    ExFalso,
    ModusPonens,
    Var,
    neg,
)
from formal_toy.calculus import CLASSICAL, INTUITIONISTIC
from formal_toy.kernel import KernelError, check


P = Var(0)
Q = Var(1)
R = Var(2)


def test_a1_classical() -> None:
    proof = AxiomA1(ctx=(), a=P, b=Q)
    assert check(proof, CLASSICAL) == Arrow(P, Arrow(Q, P))


def test_a2_classical() -> None:
    proof = AxiomA2(ctx=(), a=P, b=Q, c=R)
    expected = Arrow(
        Arrow(P, Arrow(Q, R)),
        Arrow(Arrow(P, Q), Arrow(P, R)),
    )
    assert check(proof, CLASSICAL) == expected


def test_a3_classical() -> None:
    proof = AxiomA3(ctx=(), a=P, b=Q)
    assert check(proof, CLASSICAL) == Arrow(
        Arrow(neg(Q), neg(P)),
        Arrow(P, Q),
    )


def test_a3_rejected_in_intuitionistic() -> None:
    proof = AxiomA3(ctx=(), a=P, b=Q)
    with pytest.raises(KernelError, match="not allowed"):
        check(proof, INTUITIONISTIC)


def test_exfalso_intuitionistic() -> None:
    proof = ExFalso(ctx=(), a=P)
    assert check(proof, INTUITIONISTIC) == Arrow(Bot(), P)


def test_exfalso_rejected_in_classical() -> None:
    """The classical calculus as defined excludes ExFalso as a primitive rule.

    Classically it is derivable (see `theorems/glivenko.cl_ex_falso`), but
    not a raw inference of the classical system."""
    proof = ExFalso(ctx=(), a=P)
    with pytest.raises(KernelError, match="not allowed"):
        check(proof, CLASSICAL)


def test_modus_ponens_happy() -> None:
    # (p0 ⟹ (p1 ⟹ p0)) and p0 ⟹ (p1 ⟹ p0)'s antecedent — construct A, B
    # such that imp's shape is A ⟹ B and ant proves A.
    #
    # MP on AxiomA1(P, Q) : P ⟹ (Q ⟹ P)  and Assumption(P):
    #   imp derives  P ⟹ (Q ⟹ P)
    #   ant derives  P
    #   result is    Q ⟹ P
    imp_proof = AxiomA1(ctx=(P,), a=P, b=Q)
    ant_proof = Assumption(ctx=(P,), formula=P)
    mp = ModusPonens(ctx=(P,), imp=imp_proof, ant=ant_proof)
    assert check(mp, CLASSICAL) == Arrow(Q, P)


def test_modus_ponens_shape_mismatch() -> None:
    # imp derives (P ⟹ (Q ⟹ P)); ant derives Q. Shapes don't match.
    imp_proof = AxiomA1(ctx=(Q,), a=P, b=Q)  # P ⟹ (Q ⟹ P)
    ant_proof = Assumption(ctx=(Q,), formula=Q)
    mp = ModusPonens(ctx=(Q,), imp=imp_proof, ant=ant_proof)
    with pytest.raises(KernelError, match="don't match"):
        check(mp, CLASSICAL)


def test_modus_ponens_context_mismatch() -> None:
    imp_proof = AxiomA1(ctx=(), a=P, b=Q)  # ctx ()
    ant_proof = Assumption(ctx=(P,), formula=P)  # ctx (P,)
    mp = ModusPonens(ctx=(P,), imp=imp_proof, ant=ant_proof)
    with pytest.raises(KernelError, match="different context"):
        check(mp, CLASSICAL)


def test_assumption_not_in_context() -> None:
    proof = Assumption(ctx=(Q,), formula=P)
    with pytest.raises(KernelError, match="not in the context"):
        check(proof, CLASSICAL)
