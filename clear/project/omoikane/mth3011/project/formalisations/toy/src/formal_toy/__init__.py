"""Minimal propositional-logic proof assistant for the MTH3011 project."""

from formal_toy.ast import Arrow, Assumption, AxiomA1, AxiomA2, AxiomA3
from formal_toy.ast import Bot, ExFalso, Formula, ModusPonens, Proof, Var, neg, not_not
from formal_toy.calculus import CLASSICAL, INTUITIONISTIC, Calculus
from formal_toy.kernel import KernelError, check

__all__ = [
    "Arrow",
    "Assumption",
    "AxiomA1",
    "AxiomA2",
    "AxiomA3",
    "Bot",
    "CLASSICAL",
    "Calculus",
    "ExFalso",
    "Formula",
    "INTUITIONISTIC",
    "KernelError",
    "ModusPonens",
    "Proof",
    "Var",
    "check",
    "neg",
    "not_not",
]
