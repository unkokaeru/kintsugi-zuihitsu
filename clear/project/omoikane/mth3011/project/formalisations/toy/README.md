# formal-toy (Python)

Minimal propositional-logic proof assistant for the MTH3011 project. Mirrors
the Lean 4 formalisations in `../lean/formal_methods/` rule-for-rule, so §07 of
the report can compare the two tools on the same two theorems: the deduction
theorem and Glivenko's theorem.

## Install

```bash
cd project/formalisations/toy
python -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate
pip install -e ".[dev]"
```

Requires Python 3.11+ for PEP-634 structural pattern matching.

## Verify

```bash
python -m mypy --strict src/       # type checker - must be clean
python -m pytest -q                # full test suite - must be green
```

The two commands together are the toy's correctness statement: `mypy --strict`
proves the kernel's `match` is exhaustive over the `Proof` ADT, and the
pytest suite exercises each rule plus both theorems (including re-checking
every transformer's output with the kernel).

## Run the REPL

```bash
python -m formal_toy
```

Commands:

* `:parse <formula>` - parse and echo.
* `:glivenko <formula>` - where `<formula>` is the body of an A3 instance
  `(~Q -> ~P) -> (P -> Q)`, build the classical proof, translate it to an
  intuitionistic proof of the double negation, and re-check both with the
  kernel.
* `:help`, `:quit`.

Formulae: `p0`, `p1`, `…` for atomic variables, `_|_` or `⊥` for falsum,
`~A` for negation, `A -> B` for implication (right-associative).

## Architecture

```
src/formal_toy/
├── ast.py              # Formula + Proof ADTs (frozen dataclasses)
├── parser.py           # Lark grammar → Formula
├── kernel.py           # check(proof, calculus) - the trusted core
├── calculus.py         # CLASSICAL / INTUITIONISTIC rule tables
├── repl.py             # python -m formal_toy
└── theorems/
    ├── deduction.py    # deduction_transform(proof, hyp, calculus)
    └── glivenko.py     # dni, dn_distrib, dn_axiom_three, glivenko_translate
```

Kernel is ~100 lines of Python, one `match` statement over six proof-rule
constructors. Every other module treats the kernel as a black box - any
proof produced by a transformer (deduction, glivenko) is handed back to the
kernel for verification before the toy accepts it. Tests in `tests/` do the
same: every transformer-output assertion goes through `check()`.

## Limitations

Propositional-only - no quantifiers, no equality, no arithmetic. No
automation (every inference is written out). Parser is formula-only; proofs
are written as Python dataclass values in `theorems/`.

The scope matches the two shortlisted theorems for the project; growing it
further is discussed as future work in report §08.
