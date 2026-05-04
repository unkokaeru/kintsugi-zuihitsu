# Appendix

Per supervisor advice (2026-03-04 email archived in `project/supervision.md`), lengthy code listings and original-plan material live here rather than in the main body. Pointers below; the files referenced are reproduced verbatim in the submitted PDF.

## A. Research Plan (As Submitted 2025-10-22)

The project's originally-submitted Research Plan, §§1-11, is reproduced verbatim from `project/Research Plan.md` (the live document includes a §12 Addendum documenting the 2026-01 scope pivot; only §§1-11 are reproduced here, with the pivot discussed in §1 and §12 of this report).

Sections in the original plan:

1. Project Title
2. Project Description and Introduction
3. Connection to Previous Studies
4. Literature Survey
5. References (IEEE)
6. Equipment, Facilities, and Software Requirements
7. Consumables and Costs
8. Action Plan and Timeline
9. Ethical Considerations
10. Risk Assessment
11. Arrangements for Regular Supervisory Discussions

## B. Full Lean 4 Listings

Source repository: `project/formalisations/lean/formal_methods/`. The full build uses no mathlib dependency; `lake build` completes cleanly with zero `sorry` and zero `axiom` declarations outside of comments. The three files (`FormalMethods/Basic.lean`, `FormalMethods/DeductionTheorem.lean`, `FormalMethods/Glivenko.lean`) total 508 lines.

### B.1 `FormalMethods/Basic.lean`

The shared `Formula` type, notation (`⟹`, `~`), and the `neg` / `notNot` abbreviations. 46 lines.

### B.2 `FormalMethods/DeductionTheorem.lean`

The classical Hilbert system inductive `Hilbert`, the `arrow_self` identity lemma, weakening (`weaken`, `weaken_cons`), and the deduction theorem (via a `deduction_aux` helper carrying an equality hypothesis). 139 lines.

### B.3 `FormalMethods/Glivenko.lean`

The intuitionistic system `IntProof`, the parallel intuitionistic infrastructure (`int_arrow_self`, `int_weaken`, `int_weaken_cons`, `int_deduction`), the lifting `int_to_cl`, six helper lemmas (`dni`, `dni_of_proof`, `neg_imp_neg_conseq`, `neg_imp_dn_ant`, `dn_distrib`, `dn_axiom₃`), `cl_dne`, and the main theorems (`glivenko_forward`, `glivenko_reverse`, `glivenko`). 323 lines.

## C. Full Toy Proof Assistant Listings

Source: `project/formalisations/toy/`. Total ~1,470 lines of Python (source + tests). `mypy --strict src/` is clean; `pytest -q tests/` reports 51 passed.

### C.1 Kernel (`src/formal_toy/kernel.py`)

The trusted core - one `match` over six proof-rule constructors, 96 lines including docstrings.

### C.2 AST (`src/formal_toy/ast.py`) and Parser (`src/formal_toy/parser.py`)

`Formula` and `Proof` ADTs as frozen dataclasses (162 lines), plus the Lark grammar for formulae (80 lines).

### C.3 Calculi (`src/formal_toy/calculus.py`)

`CLASSICAL` and `INTUITIONISTIC` rule tables. 54 lines.

### C.4 Theorem 1 in the Toy (`src/formal_toy/theorems/deduction.py`)

`arrow_self`, `weaken`, `weaken_cons`, and `deduction_transform`. 145 lines.

### C.5 Theorem 2 in the Toy (`src/formal_toy/theorems/glivenko.py`)

`cl_ex_falso`, `int_to_cl`, `dni`, `dni_of_proof`, `neg_imp_neg_conseq`, `neg_imp_dn_ant`, `dn_distrib`, `dn_axiom_three`, `cl_dne`, `glivenko_translate`, `glivenko_reverse`. 343 lines.

### C.6 REPL (`src/formal_toy/repl.py`)

The interactive front-end, with the four commands `:parse`, `:glivenko`, `:help`, `:quit`. 121 lines.

### C.7 Tests (`tests/`)

Five test modules (`test_ast.py`, `test_parser.py`, `test_kernel.py`, `test_deduction.py`, `test_glivenko.py`) totalling 471 lines and 51 assertions, all green.

## D. Supervision Meeting Log Excerpt

See `project/supervision.md` for the full meeting log. LO3 (time management, documentation) is evidenced by the weekly logbook entries in `project/logbook.md` and the dated meetings in `project/supervision.md`. The handwritten, signed master logbook is filed as `Logbook.pdf` in the vault.

## E. Build and Verification Commands

The two primary artefacts are verifiable from the repository with the commands below.

**Lean 4 (no mathlib dependency):**

```bash
cd project/formalisations/lean/formal_methods
lake build
# expect: "Build completed successfully." - no errors, no `sorry`.
```

**Python toy assistant (Python 3.11+):**

```bash
cd project/formalisations/toy
pip install -e ".[dev]"
python -m mypy --strict src/       # expect: Success: no issues found
python -m pytest -q                # expect: 51 passed
```

The REPL is launchable with `python -m formal_toy` (or `formal-toy` if the package has been installed with its console script).
