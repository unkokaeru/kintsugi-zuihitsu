"""The two theorems formalised in the toy assistant.

:mod:`formal_toy.theorems.deduction` — the Deduction Theorem, written as a
    meta-level Python function that transforms derivations in the
    classical calculus.

:mod:`formal_toy.theorems.glivenko` — Glivenko's translation, mapping
    classical proofs of ``A`` to intuitionistic proofs of ``¬¬A``.
"""

from formal_toy.theorems.deduction import deduction_transform
from formal_toy.theorems.glivenko import (
    dn_axiom_three,
    dn_distrib,
    dni,
    glivenko_translate,
    neg_imp_dn_ant,
    neg_imp_neg_conseq,
)

__all__ = [
    "deduction_transform",
    "dn_axiom_three",
    "dn_distrib",
    "dni",
    "glivenko_translate",
    "neg_imp_dn_ant",
    "neg_imp_neg_conseq",
]
