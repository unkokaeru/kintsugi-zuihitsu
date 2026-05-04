"""Small interactive REPL for ad-hoc theorem exploration.

Run with ``python -m formal_toy`` (preferred) or ``formal-toy`` (if installed).
Commands:

* ``:parse <formula>``       — parse a formula and echo its AST render.
* ``:glivenko <formula>``    — parse ``<formula>`` (must be an axiom-A3
  instance ``(~Q -> ~P) -> (P -> Q)``); construct the classical proof,
  translate it to an intuitionistic proof of its double negation via
  :func:`formal_toy.theorems.glivenko.glivenko_translate`, and re-check
  both with the kernel before printing.
* ``:help``                  — list these commands.
* ``:quit``                  — exit (also ``:q``, ``:exit``, EOF).

Anything else is treated as a formula, parsed, and echoed.
"""

from __future__ import annotations

import sys

from formal_toy.ast import Arrow, AxiomA3, Formula, neg, not_not
from formal_toy.calculus import CLASSICAL, INTUITIONISTIC
from formal_toy.kernel import KernelError, check
from formal_toy.parser import parse_formula
from formal_toy.theorems.glivenko import glivenko_translate


def _banner() -> str:
    return (
        "formal-toy REPL.  Type :help for commands, :quit to exit.\n"
        "Formulae: p0, p1, …   _|_ (or ⊥)   ~A   A -> B"
    )


def _help() -> str:
    return (
        "Commands:\n"
        "  :parse <formula>      parse and echo\n"
        "  :glivenko <formula>   translate an A3 instance to its double-negated\n"
        "                        intuitionistic proof\n"
        "  :help                 this message\n"
        "  :quit                 exit"
    )


def _handle(line: str) -> str:
    line = line.strip()
    if not line:
        return ""
    if line in {":q", ":quit", ":exit"}:
        raise SystemExit(0)
    if line in {":h", ":help", "?"}:
        return _help()
    if line.startswith(":parse "):
        formula = parse_formula(line[len(":parse "):])
        return f"{formula}"
    if line.startswith(":glivenko "):
        formula = parse_formula(line[len(":glivenko "):])
        return _glivenko_demo(formula)
    # Default: parse as formula and echo.
    try:
        formula = parse_formula(line)
        return f"{formula}"
    except Exception as exc:  # noqa: BLE001 — REPL wants to surface the raw message
        return f"parse error: {exc}"


def _glivenko_demo(formula: Formula) -> str:
    """Accept an A3-shaped formula and translate it.

    Not a full-featured proof-input REPL — just enough to let a reader watch
    the kernel re-check the translation's output.
    """
    match formula:
        case Arrow(
            lhs=Arrow(lhs=nq, rhs=np),
            rhs=Arrow(lhs=p, rhs=q),
        ) if nq == neg(q) and np == neg(p):
            pass
        case _:
            return (
                "expected an A3-shaped formula of the form (~Q -> ~P) -> (P -> Q); "
                f"got {formula}"
            )
    ctx: tuple[Formula, ...] = ()
    classical = AxiomA3(ctx=ctx, a=p, b=q)
    # Re-check to be transparent.
    try:
        cl_formula = check(classical, CLASSICAL)
        translated = glivenko_translate(classical)
        int_formula = check(translated, INTUITIONISTIC)
    except KernelError as exc:
        return f"kernel error: {exc}"
    return (
        f"classical (A3): {cl_formula}\n"
        f"intuitionistic ¬¬A: {int_formula}\n"
        f"expected double-negation: {not_not(cl_formula)}\n"
        "kernel accepted both derivations."
    )


def main() -> int:
    """Entry point for ``python -m formal_toy.repl`` and ``formal-toy``."""
    print(_banner())
    try:
        while True:
            try:
                line = input("toy> ")
            except EOFError:
                break
            result = _handle(line)
            if result:
                print(result)
    except SystemExit as exc:
        return int(exc.code) if isinstance(exc.code, int) else 0
    return 0


if __name__ == "__main__":
    sys.exit(main())
