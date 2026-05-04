"""Parser round-trip tests."""

import pytest

from formal_toy.ast import Arrow, Bot, Var, neg
from formal_toy.parser import parse_formula


def test_parse_variable() -> None:
    assert parse_formula("p0") == Var(0)
    assert parse_formula("p42") == Var(42)


def test_parse_bottom_ascii() -> None:
    assert parse_formula("_|_") == Bot()


def test_parse_bottom_unicode() -> None:
    assert parse_formula("⊥") == Bot()


def test_parse_negation() -> None:
    assert parse_formula("~p0") == neg(Var(0))


def test_parse_implication_right_associative() -> None:
    # A -> B -> C  parses as  A -> (B -> C).
    assert parse_formula("p0 -> p1 -> p2") == Arrow(
        Var(0), Arrow(Var(1), Var(2))
    )


def test_parse_implication_parens_left() -> None:
    assert parse_formula("(p0 -> p1) -> p2") == Arrow(
        Arrow(Var(0), Var(1)), Var(2)
    )


def test_parse_negation_of_complex() -> None:
    # ~(p0 -> p1)
    assert parse_formula("~(p0 -> p1)") == neg(Arrow(Var(0), Var(1)))


def test_parse_a3_shape() -> None:
    formula = parse_formula("(~p1 -> ~p0) -> (p0 -> p1)")
    expected = Arrow(
        Arrow(neg(Var(1)), neg(Var(0))),
        Arrow(Var(0), Var(1)),
    )
    assert formula == expected


def test_parse_rejects_garbage() -> None:
    from lark.exceptions import UnexpectedInput

    with pytest.raises(UnexpectedInput):
        parse_formula("q5")  # 'q' not allowed; only 'p' followed by digits.
