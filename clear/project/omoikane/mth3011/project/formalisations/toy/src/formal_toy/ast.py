"""Abstract syntax for formulae and proofs.

The two ADTs (`Formula` and `Proof`) are the entire vocabulary in which the
toy assistant speaks. Each is a frozen dataclass hierarchy discriminated by a
concrete subclass, so kernel dispatch is done via PEP-634 structural pattern
matching with exhaustiveness checked by ``mypy --strict``.

Formulae are built from:

* propositional variables indexed by ``int``,
* a falsum constant ``Bot``,
* binary implication ``Arrow``.

Negation ``~A`` is sugar for ``Arrow(A, Bot)`` — see :func:`neg`. Double
negation ``~~A`` is :func:`not_not`.

Proofs are inductive derivations in a Hilbert-style calculus. The six
constructors correspond, one-for-one, with the Lean ``Hilbert`` / ``IntProof``
constructors in ``project/formalisations/lean/formal_methods/``. This
deliberate parallel is what makes the §07 cross-tool comparison meaningful.
"""

from __future__ import annotations

from dataclasses import dataclass
from typing import Tuple


# ---------------------------------------------------------------------------
# Formulae
# ---------------------------------------------------------------------------


@dataclass(frozen=True, slots=True)
class Formula:
    """Base class. Concrete subclasses: :class:`Var`, :class:`Bot`, :class:`Arrow`."""

    def __str__(self) -> str:  # pragma: no cover — debugging aid
        return _render(self)


@dataclass(frozen=True, slots=True)
class Var(Formula):
    """Propositional variable, indexed by a non-negative integer."""

    index: int


@dataclass(frozen=True, slots=True)
class Bot(Formula):
    """The falsum constant ``⊥``."""


@dataclass(frozen=True, slots=True)
class Arrow(Formula):
    """Binary implication ``lhs ⟹ rhs``."""

    lhs: Formula
    rhs: Formula


def neg(a: Formula) -> Formula:
    """``~A`` ≡ ``A ⟹ ⊥``."""
    return Arrow(a, Bot())


def not_not(a: Formula) -> Formula:
    """``~~A``, the double negation of ``A``."""
    return neg(neg(a))


def _render(f: Formula) -> str:
    """Pretty-printer. Right-associative ``⟹`` with outer-implication parens."""
    match f:
        case Var(index=i):
            return f"p{i}"
        case Bot():
            return "⊥"
        case Arrow(lhs=l, rhs=Bot()):
            # Render ``A ⟹ ⊥`` as ``~A`` for readability.
            return f"~{_paren(l)}"
        case Arrow(lhs=l, rhs=r):
            return f"{_paren(l)} ⟹ {_render(r)}"
    raise AssertionError(f"unknown Formula variant: {f!r}")


def _paren(f: Formula) -> str:
    """Wrap ``f`` in parens unless it's atomic."""
    match f:
        case Var() | Bot():
            return _render(f)
        case Arrow():
            return f"({_render(f)})"
    raise AssertionError(f"unknown Formula variant: {f!r}")


# ---------------------------------------------------------------------------
# Proofs
# ---------------------------------------------------------------------------


# A context is an ordered tuple of formulae. Tuples (rather than lists) because
# `Proof` must be hashable for memoisation and equality to make sense.
Context = Tuple[Formula, ...]


@dataclass(frozen=True, slots=True)
class Proof:
    """Base class. Concrete subclasses are the six inference rules below.

    Every proof object carries its own context ``ctx`` so the kernel can be
    written as a pure structural recursion (no threaded context parameter).
    """

    ctx: Context


@dataclass(frozen=True, slots=True)
class Assumption(Proof):
    """Use a formula that already sits in the context."""

    formula: Formula


@dataclass(frozen=True, slots=True)
class AxiomA1(Proof):
    """Axiom A1: ``A ⟹ (B ⟹ A)``."""

    a: Formula
    b: Formula


@dataclass(frozen=True, slots=True)
class AxiomA2(Proof):
    """Axiom A2: ``(A ⟹ (B ⟹ C)) ⟹ ((A ⟹ B) ⟹ (A ⟹ C))``."""

    a: Formula
    b: Formula
    c: Formula


@dataclass(frozen=True, slots=True)
class AxiomA3(Proof):
    """Axiom A3 (classical contrapositive): ``(~B ⟹ ~A) ⟹ (A ⟹ B)``."""

    a: Formula
    b: Formula


@dataclass(frozen=True, slots=True)
class ExFalso(Proof):
    """*Ex falso quodlibet* (intuitionistic): ``⊥ ⟹ A``."""

    a: Formula


@dataclass(frozen=True, slots=True)
class ModusPonens(Proof):
    """Modus ponens: from ``X ⟹ Y`` and ``X`` conclude ``Y``."""

    imp: Proof
    ant: Proof
