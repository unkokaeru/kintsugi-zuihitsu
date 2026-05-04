"""AST-level smoke tests: constructors, equality, hashing, rendering."""

from formal_toy.ast import Arrow, Bot, Var, neg, not_not


def test_var_equality() -> None:
    assert Var(0) == Var(0)
    assert Var(0) != Var(1)


def test_arrow_is_nested() -> None:
    a = Var(0)
    b = Var(1)
    c = Var(2)
    # Constructor is strictly binary; nesting is explicit.
    built = Arrow(a, Arrow(b, c))
    assert built.lhs == a
    assert built.rhs == Arrow(b, c)


def test_neg_expands() -> None:
    a = Var(5)
    assert neg(a) == Arrow(a, Bot())


def test_not_not_is_double_negation() -> None:
    a = Var(3)
    assert not_not(a) == Arrow(Arrow(a, Bot()), Bot())


def test_hashable() -> None:
    """Proof objects need formulae to be hashable."""
    formulas = {Var(0), Var(0), Arrow(Var(1), Bot())}
    assert len(formulas) == 2


def test_render_implication() -> None:
    a = Var(0)
    b = Var(1)
    # Right-associative.
    assert str(Arrow(a, Arrow(b, a))) == "p0 ⟹ p1 ⟹ p0"


def test_render_negation() -> None:
    a = Var(0)
    assert str(neg(a)) == "~p0"


def test_render_parens_on_left() -> None:
    a = Var(0)
    b = Var(1)
    c = Var(2)
    # (a ⟹ b) ⟹ c must parenthesise the left child.
    assert str(Arrow(Arrow(a, b), c)) == "(p0 ⟹ p1) ⟹ p2"
