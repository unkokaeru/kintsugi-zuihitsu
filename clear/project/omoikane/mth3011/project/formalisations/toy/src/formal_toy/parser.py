"""Surface-syntax parser for formulae.

Lark grammar for a compact Hilbert-compatible surface syntax:

====================  ======================================================
Concrete              Abstract
====================  ======================================================
``p0``, ``p1``, ...   :class:`Var(n)`
``_|_`` or ``⊥``      :class:`Bot`
``~A``                :class:`Arrow(A, Bot)`
``A -> B``            :class:`Arrow(A, B)` (right-associative, precedence 1)
``(A)``               :class:`A`
====================  ======================================================

Only formulae are parsed. Proof objects are written directly as Python
dataclass values in the :mod:`formal_toy.theorems` modules; the REPL accepts
formulae as arguments to top-level commands like ``:deduction`` and
``:glivenko`` but does not parse arbitrary proof terms.
"""

from __future__ import annotations

from typing import cast

from lark import Lark, Transformer, v_args

from formal_toy.ast import Arrow, Bot, Formula, Var, neg


_GRAMMAR = r"""
    ?start: implication

    ?implication: negation ("->" implication)?                        -> maybe_imp

    ?negation:    "~" negation                                        -> neg_form
                | atom

    ?atom:        VAR                                                 -> var
                | BOT                                                 -> bot
                | "(" implication ")"

    VAR: "p" INT
    BOT: "_|_" | "⊥"

    %import common.INT
    %import common.WS
    %ignore WS
"""


@v_args(inline=True)
class _Builder(Transformer[object, Formula]):
    """Build a :class:`Formula` from Lark tokens."""

    def var(self, tok: object) -> Formula:
        return Var(index=int(str(tok)[1:]))

    def bot(self, _tok: object) -> Formula:
        return Bot()

    def neg_form(self, inner: Formula) -> Formula:
        return neg(inner)

    def maybe_imp(self, lhs: Formula, rhs: Formula | None = None) -> Formula:
        if rhs is None:
            return lhs
        return Arrow(lhs=lhs, rhs=rhs)


_PARSER = Lark(_GRAMMAR, parser="lalr", transformer=_Builder(), start="start")


def parse_formula(text: str) -> Formula:
    """Parse ``text`` into a :class:`Formula`.

    Raises whatever Lark raises on malformed input (``lark.UnexpectedInput``
    and subclasses). The return type is narrowed because Lark's
    ``transformer`` path returns ``Tree | T``.
    """
    return cast(Formula, _PARSER.parse(text))
