"""Glivenko's translation — the output kernel-checks against ``¬¬A``."""

import pytest

from formal_toy.ast import (
    Arrow,
    Assumption,
    AxiomA1,
    AxiomA2,
    AxiomA3,
    ModusPonens,
    Var,
    neg,
    not_not,
)
from formal_toy.calculus import CLASSICAL, INTUITIONISTIC
from formal_toy.kernel import KernelError, check
from formal_toy.theorems.glivenko import (
    cl_dne,
    cl_ex_falso,
    dn_axiom_three,
    dn_distrib,
    dni,
    glivenko_reverse,
    glivenko_translate,
    int_to_cl,
    neg_imp_dn_ant,
    neg_imp_neg_conseq,
)


P = Var(0)
Q = Var(1)
R = Var(2)


def test_dni_checks() -> None:
    proof = dni(ctx=(), a=P)
    assert check(proof, INTUITIONISTIC) == Arrow(P, not_not(P))


def test_neg_imp_neg_conseq_checks() -> None:
    proof = neg_imp_neg_conseq(ctx=(), a=P, b=Q)
    assert check(proof, INTUITIONISTIC) == Arrow(neg(Arrow(P, Q)), neg(Q))


def test_neg_imp_dn_ant_checks() -> None:
    proof = neg_imp_dn_ant(ctx=(), a=P, b=Q)
    assert check(proof, INTUITIONISTIC) == Arrow(neg(Arrow(P, Q)), not_not(P))


def test_dn_distrib_checks() -> None:
    proof = dn_distrib(ctx=(), a=P, b=Q)
    expected = Arrow(
        not_not(Arrow(P, Q)),
        Arrow(not_not(P), not_not(Q)),
    )
    assert check(proof, INTUITIONISTIC) == expected


def test_dn_axiom_three_checks() -> None:
    proof = dn_axiom_three(ctx=(), a=P, b=Q)
    # ¬¬((~Q ⟹ ~P) ⟹ (P ⟹ Q))
    a3_shape = Arrow(Arrow(neg(Q), neg(P)), Arrow(P, Q))
    assert check(proof, INTUITIONISTIC) == not_not(a3_shape)


def test_cl_ex_falso_checks() -> None:
    from formal_toy.ast import Bot

    proof = cl_ex_falso(ctx=(), a=P)
    assert check(proof, CLASSICAL) == Arrow(Bot(), P)


def test_cl_dne_checks() -> None:
    proof = cl_dne(ctx=(), a=P)
    assert check(proof, CLASSICAL) == Arrow(not_not(P), P)


def test_int_to_cl_preserves_derivation() -> None:
    # A1 is in both calculi; trivially lifts.
    int_proof = AxiomA1(ctx=(), a=P, b=Q)
    cl_proof = int_to_cl(int_proof)
    assert check(cl_proof, CLASSICAL) == check(int_proof, INTUITIONISTIC)


def test_glivenko_translate_axiom_a3() -> None:
    # Classical proof of A3: ClProof ⊢ (~Q ⟹ ~P) ⟹ (P ⟹ Q)
    classical = AxiomA3(ctx=(), a=P, b=Q)
    cl_formula = check(classical, CLASSICAL)
    # Translate.
    translated = glivenko_translate(classical)
    assert check(translated, INTUITIONISTIC) == not_not(cl_formula)


def test_glivenko_translate_axiom_a1() -> None:
    classical = AxiomA1(ctx=(), a=P, b=Q)
    cl_formula = check(classical, CLASSICAL)
    translated = glivenko_translate(classical)
    assert check(translated, INTUITIONISTIC) == not_not(cl_formula)


def test_glivenko_translate_modus_ponens() -> None:
    # Derive (Q ⟹ P) classically: MP on AxiomA1(P, Q) and Assumption(P) under ctx=(P,).
    ctx = (P,)
    imp = AxiomA1(ctx=ctx, a=P, b=Q)
    ant = Assumption(ctx=ctx, formula=P)
    mp = ModusPonens(ctx=ctx, imp=imp, ant=ant)
    cl_formula = check(mp, CLASSICAL)
    assert cl_formula == Arrow(Q, P)
    translated = glivenko_translate(mp)
    assert check(translated, INTUITIONISTIC) == not_not(Arrow(Q, P))


def test_glivenko_translate_assumption() -> None:
    ctx = (P, Q)
    assumption = Assumption(ctx=ctx, formula=P)
    translated = glivenko_translate(assumption)
    assert check(translated, INTUITIONISTIC) == not_not(P)


def test_glivenko_reverse_round_trip() -> None:
    """Forward then reverse: original classical formula is recovered."""
    classical = AxiomA3(ctx=(), a=P, b=Q)
    cl_formula = check(classical, CLASSICAL)
    translated = glivenko_translate(classical)
    back = glivenko_reverse(translated)
    assert check(back, CLASSICAL) == cl_formula


def test_glivenko_a2_instance() -> None:
    classical = AxiomA2(ctx=(), a=P, b=Q, c=R)
    cl_formula = check(classical, CLASSICAL)
    translated = glivenko_translate(classical)
    assert check(translated, INTUITIONISTIC) == not_not(cl_formula)


def test_glivenko_translate_rejects_exfalso() -> None:
    """The translation input is supposed to be classical; passing an
    intuitionistic ExFalso rule directly should surface a clear error."""
    from formal_toy.ast import ExFalso

    exf = ExFalso(ctx=(), a=P)
    with pytest.raises(KernelError, match="classical"):
        glivenko_translate(exf)
