"""Allowable-rule tables for the two calculi the toy ships with.

The kernel's :func:`formal_toy.kernel.check` takes a :class:`Calculus` and
rejects any proof whose top-level rule is not listed in that calculus's
``allowed`` set. This is the one place where the classical/intuitionistic
distinction lives; the AST is shared.
"""

from __future__ import annotations

from dataclasses import dataclass
from typing import AbstractSet, FrozenSet, Type

from formal_toy.ast import (
    Assumption,
    AxiomA1,
    AxiomA2,
    AxiomA3,
    ExFalso,
    ModusPonens,
    Proof,
)


@dataclass(frozen=True, slots=True)
class Calculus:
    """An allow-list of proof-rule classes."""

    name: str
    allowed: FrozenSet[Type[Proof]]

    def permits(self, rule: Type[Proof]) -> bool:
        """Return ``True`` if ``rule`` is a rule of this calculus."""
        return rule in self.allowed


def _rules(*rules: Type[Proof]) -> FrozenSet[Type[Proof]]:
    """Frozenset constructor typed for a strict mypy run."""
    s: AbstractSet[Type[Proof]] = frozenset(rules)
    return frozenset(s)


CLASSICAL: Calculus = Calculus(
    name="classical",
    allowed=_rules(Assumption, AxiomA1, AxiomA2, AxiomA3, ModusPonens),
)
"""Classical propositional calculus (A1, A2, A3, MP)."""


INTUITIONISTIC: Calculus = Calculus(
    name="intuitionistic",
    allowed=_rules(Assumption, AxiomA1, AxiomA2, ExFalso, ModusPonens),
)
"""Intuitionistic propositional calculus (A1, A2, ⊥-elim, MP)."""
