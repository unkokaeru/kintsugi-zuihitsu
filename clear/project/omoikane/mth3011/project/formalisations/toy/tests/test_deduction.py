"""Deduction-theorem transformer — output kernel-checks to the expected formula."""

import pytest

from formal_toy.ast import (
    Arrow,
    Assumption,
    AxiomA1,
    AxiomA2,
    AxiomA3,
    ModusPonens,
    Var,
)
from formal_toy.calculus import CLASSICAL
from formal_toy.kernel import KernelError, check
from formal_toy.theorems.deduction import (
    arrow_self,
    deduction_transform,
    weaken_cons,
)


P = Var(0)
Q = Var(1)
R = Var(2)


def test_arrow_self_classically() -> None:
    proof = arrow_self(ctx=(), a=P)
    assert check(proof, CLASSICAL) == Arrow(P, P)


def test_deduction_of_assumption_head() -> None:
    # [P] ⊢ P  ↦  ⊢ P ⟹ P
    assumption = Assumption(ctx=(P,), formula=P)
    result = deduction_transform(assumption, P, CLASSICAL)
    assert result.ctx == ()
    assert check(result, CLASSICAL) == Arrow(P, P)


def test_deduction_of_assumption_tail() -> None:
    # [P, Q] ⊢ Q  ↦  [Q] ⊢ P ⟹ Q
    assumption = Assumption(ctx=(P, Q), formula=Q)
    result = deduction_transform(assumption, P, CLASSICAL)
    assert result.ctx == (Q,)
    assert check(result, CLASSICAL) == Arrow(P, Q)


def test_deduction_of_axiom() -> None:
    ax = AxiomA1(ctx=(P,), a=Q, b=R)
    # ax derives Q ⟹ (R ⟹ Q). Transforming should give P ⟹ (Q ⟹ (R ⟹ Q)).
    result = deduction_transform(ax, P, CLASSICAL)
    assert check(result, CLASSICAL) == Arrow(P, Arrow(Q, Arrow(R, Q)))


def test_deduction_of_modus_ponens() -> None:
    # Build a proof of Q in [P ⟹ Q, P]: MP of (P ⟹ Q)-as-assumption on P.
    # Transform to peel P ⟹ Q, which should give: [P] ⊢ (P ⟹ Q) ⟹ Q.
    hyp = Arrow(P, Q)
    ctx = (hyp, P)
    h_imp = Assumption(ctx=ctx, formula=hyp)
    h_ant = Assumption(ctx=ctx, formula=P)
    mp = ModusPonens(ctx=ctx, imp=h_imp, ant=h_ant)
    # mp derives Q under (P⟹Q, P).
    assert check(mp, CLASSICAL) == Q
    # Transform on hyp := (P ⟹ Q):
    result = deduction_transform(mp, hyp, CLASSICAL)
    assert result.ctx == (P,)
    assert check(result, CLASSICAL) == Arrow(hyp, Q)


def test_deduction_rejects_wrong_head() -> None:
    ax = AxiomA1(ctx=(P,), a=Q, b=R)
    with pytest.raises(KernelError, match="expected ctx to start with"):
        deduction_transform(ax, Q, CLASSICAL)


def test_weaken_cons_assumption() -> None:
    base = Assumption(ctx=(P,), formula=P)
    widened = weaken_cons(base, Q, CLASSICAL)
    assert widened.ctx == (Q, P)
    assert check(widened, CLASSICAL) == P


def test_double_deduction_matches_a2_shape() -> None:
    """Reality-check: if ``mp`` derives Q in [P ⟹ Q, P], then peeling both
    hypotheses in order yields the classical tautology
    ``(P ⟹ Q) ⟹ (P ⟹ Q)`` (trivially) when we also apply A2 explicitly —
    here we just confirm the two-step transform produces a proof of
    ``(P ⟹ Q) ⟹ (P ⟹ Q)``."""
    hyp = Arrow(P, Q)
    ctx = (hyp, P)
    h_imp = Assumption(ctx=ctx, formula=hyp)
    h_ant = Assumption(ctx=ctx, formula=P)
    mp = ModusPonens(ctx=ctx, imp=h_imp, ant=h_ant)
    # Peel hyp then P.
    step1 = deduction_transform(mp, hyp, CLASSICAL)  # [P] ⊢ hyp ⟹ Q
    # step1 derives (P⟹Q) ⟹ Q under [P]. Peeling P gives: ⊢ P ⟹ ((P⟹Q) ⟹ Q).
    step2 = deduction_transform(step1, P, CLASSICAL)
    assert step2.ctx == ()
    assert check(step2, CLASSICAL) == Arrow(P, Arrow(hyp, Q))


def test_a2_instance_round_trip() -> None:
    """Sanity: A2 is unchanged under deduction_transform modulo one peel."""
    ax = AxiomA2(ctx=(P,), a=P, b=Q, c=R)
    result = deduction_transform(ax, P, CLASSICAL)
    expected_body = Arrow(
        Arrow(P, Arrow(Q, R)),
        Arrow(Arrow(P, Q), Arrow(P, R)),
    )
    assert check(result, CLASSICAL) == Arrow(P, expected_body)
