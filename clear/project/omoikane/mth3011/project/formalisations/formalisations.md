# Formalisations

Working area for the project's primary deliverable - the student's own formalisations. Post-pivot (see [[Research Plan]] §12), this covers both **Lean 4** proofs of the chosen theorems *and* re-proofs in the **toy proof assistant** built from scratch for this project.

## Project Shape (Post-Pivot)

```python
learn how to use proof assistants      → Phase 1 (done)
    ↓
learn how proof assistants work        → Phase 2 (done - Ayala-Rincón + Nederpelt)
    ↓
formalise two theorems in Lean         → Phase 3 (in progress)
    ↓
build a toy propositional-logic assistant → Phase 4 (in progress)
    ↓
re-formalise the same two theorems in the toy → Phase 5 (in progress)
    ↓
compare                                → §07 of the report
```

## Theorem Selection Criteria

- **Provable in propositional logic.** Toy assistant is propositional-only (supervisor-agreed constraint; see [[logbook]] 2026-03-11). Anything requiring quantifiers, equality, or arithmetic is out-of-scope for the toy and therefore disqualified from the shortlist.
- **One metatheoretic + one classical named.** Gives the thesis breadth - a result *about* proof systems and a result *in* propositional logic.
- **Non-trivial in Lean too.** Too easy in Lean means §05 has nothing interesting to say.
- **Pedagogically demonstrable.** The verdict section wants to compare what was easy in Lean vs the toy and vice versa - theorems should exercise distinct bits of each tool.
- **Linked to undergrad work.** Ideas of Proof / Foundations & Logic course content, plus occasional number-theoretic flavour.

Yuri's 2026-03-11 email steer: *"Don't overbuild the toy. It only needs to be big enough for the chosen theorems."*

## Shortlist (Emailed to Yuri 2026-04-22)

### Theorem 1 - Deduction Theorem for Propositional Logic (metatheoretic)

**Statement.** For a Hilbert-style propositional calculus with axioms A1–A3 and modus ponens: if $\Gamma \cup \{A\} \vdash B$ then $\Gamma \vdash A \to B$.

**Why:**

- Canonical metatheorem from Mendelson [4] ch. 1 - undergrad Ideas-of-Proof core.
- Proof is by induction on the structure of the derivation of $B$ from $\Gamma \cup \{A\}$; maps cleanly onto a proof-tree representation in both Lean and the toy.
- Forces the toy's kernel to actually *represent proof objects* as inductive data, not just check single-step inferences - a genuine exercise of the design.
- Elegance for the thesis: the one theorem that lets a proof system reason about *itself*. The Curry-Howard flavour of the whole project crystallises here.

**Lean plan:** Define `Formula`, `Hilbert` (inductive proof-tree type), state `deduction : Hilbert (A :: Γ) B → Hilbert Γ (A ⟹ B)`, prove by induction on the derivation.

**Toy plan:** Same inductive definition inside Python (as `@dataclass` ADTs with structural pattern matching); prove the meta-theorem *in the metalanguage* (Python itself) as a recursive function `deduction(proof: Hilbert) -> Hilbert` that transforms derivations. Demonstrate the meta-proof runs as code, with `mypy --strict` recovering enough of the algebraic-datatype discipline to make the recursion exhaustiveness-checkable.

### Theorem 2 - Glivenko's Theorem (famous named)

**Statement.** For any propositional formula $A$: $A$ is provable in classical propositional logic iff $\neg\neg A$ is provable in intuitionistic propositional logic.

**Why:**

- Named, classical (Glivenko 1929), and genuinely famous in the Ideas-of-Proof canon - bridges the two main flavours of propositional logic.
- Clean and short enough to finish in the available time, but asks the toy assistant to carry **two** calculi (classical and intuitionistic), which is a substantive extension and gives the comparison section real content.
- Complements Theorem 1: Deduction is about proofs-as-trees; Glivenko is about the logics themselves as related systems.
- Answers a natural student question ("what does 'classical' vs 'constructive' actually *mean*?") with a formally checked result.

**Lean plan:** Define `ClProof` and `IntProof` inductively; show `ClProof Γ A ↔ IntProof Γ (¬¬A)` via translation (Glivenko's translation is essentially structural induction on classical derivations, replacing `em` / LEM with double-negation shuffling).

**Toy plan:** Implement both inference systems in the toy's kernel (selectable at kernel construction time); encode the translation as a Python function `glivenko(p: ClProof) -> IntProof` whose output the kernel re-checks against the intuitionistic rule set.

### Fallback Candidates (If Yuri Rejects Either Primary)

In priority order, if one of the above is ruled out:

1. **Peirce's law ↔ Law of Excluded Middle** - classical equivalence; smaller but still propositional-canon.
2. **De Morgan's laws as tautologies** - simpler, might be too elementary; useful as a warm-up only.
3. **Craig's interpolation theorem (propositional case)** - named, classical (Craig 1957), elegant but requires a cut-elimination argument which may stretch the toy.
4. **Soundness of propositional logic** - if $\vdash A$ then $\models A$. Requires the toy to model propositional valuations as well as proof-trees.

If Yuri pushes for something with more number-theoretic flavour, the toy would need upscoping from propositional to first-order + naturals. In that case:

- **Euclid's infinitude of primes** (classical, short, number-theory adjacency) - candidate but needs first-order support.
- **Irrationality of √2** - same, needs arithmetic and a bit of divisibility.

Neither is currently in-scope; noted in case a scope-widen becomes preferable to shipping.

## Environment Initialisation

Both initialisations are run once, locally, after Lean 4 (`elan`) and Python 3.11+ are installed.

### Lean 4 (Existing-Tool Formalisation)

```bash
cd project/formalisations/lean
lake new formal_methods math
code formal_methods
```

First round-trip check:

```lean
import Mathlib
example : 2 + 2 = 4 := by rfl
example (n : ℕ) : n + 0 = n := by simp
```

### Toy Proof Assistant - Python

```bash
cd project/formalisations/toy
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install lark mypy pytest
# Scaffold the key files:
#   pyproject.toml
#   src/formal_toy/__init__.py
#   src/formal_toy/ast.py      -- Formula + Proof dataclasses (ADT-style)
#   src/formal_toy/parser.py   -- Lark grammar for surface syntax
#   src/formal_toy/kernel.py   -- verifier against Hilbert-style rules
#   src/formal_toy/repl.py     -- REPL entry point
#   tests/                     -- pytest suite
mypy --strict src/
pytest
```

The kernel design target: a few hundred lines of Python that check proof-trees against a ~6-rule Hilbert system for propositional logic, using `match` statements over `@dataclass(frozen=True)` proof-tree nodes. Intuitionistic vs classical distinguished by whether the LEM / double-negation-elimination axiom is available in the rule set the kernel is constructed with.

**Why Python, not OCaml.** OCaml's sum types + pattern-matching would be the ideologically purer choice, but unfamiliarity with the language would cost time we don't have. Python's `dataclasses` + PEP-634 structural pattern matching + `mypy --strict` recover most of the discipline (exhaustiveness-checked `match` on frozen dataclasses behaves very close to an ML sum type), and the dev velocity is much higher for a Python-fluent author. The thesis owns this tradeoff explicitly in §06.

## GitHub Repo

Repo URL: *pending decision with supervisor (see [[supervision prep]]).* Both the Lean and toy directories are local-only until a name and visibility are agreed.

Suggested commit cadence: one commit per completed lemma, with messages of the form `feat(lean): prove deduction theorem` / `feat(toy): kernel checks modus ponens`.

## Status per Selected Theorem

> Last updated 2026-04-23.

| # | Theorem | Lean | Toy | Committed | Notes |
|---|---------|------|-----|-----------|-------|
| 1 | Deduction theorem | **draft complete** 2026-04-23 - `lake build` clean, zero `sorry` | **draft complete** 2026-04-23 - `deduction_transform` transformer, kernel-checked | not yet pushed to GitHub | Revision pass pending before push |
| 2 | Glivenko's theorem | **draft complete** 2026-04-23 - `lake build` clean, zero `sorry` | **draft complete** 2026-04-23 - `glivenko_translate` + `glivenko_reverse`, kernel-checked | not yet pushed to GitHub | Revision pass pending before push |

### Verification Snapshot (2026-04-23)

- Lean: `cd project/formalisations/lean/formal_methods && lake build` → *Build completed successfully.*
- Toy: `cd project/formalisations/toy && python -m mypy --strict src/` → *Success: no issues found in 10 source files.*
- Toy: `cd project/formalisations/toy && python -m pytest -q` → *51 passed.*
