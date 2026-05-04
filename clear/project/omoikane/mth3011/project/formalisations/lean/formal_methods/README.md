# formal_methods (Lean 4)

Lean 4 project for the MTH3011 formalisations. Holds the two shortlisted theorems:

1. **Deduction theorem** - `FormalMethods/DeductionTheorem.lean`
2. **Glivenko's theorem** - `FormalMethods/Glivenko.lean`

Shared definitions (propositional `Formula` type, notation, abbreviations) live in `FormalMethods/Basic.lean`.

Both theorems are fully proved against Lean core only - no `mathlib` dependency, zero `sorry`, zero `axiom` outside comments. `lake build` completes cleanly.

## Structure

```
formal_methods/
├── lakefile.lean             # Lake build config; no mathlib dependency
├── lean-toolchain            # Pins Lean 4.15.0
├── .gitignore                # Ignores .lake/ build artefacts
├── Main.lean                 # Trivial executable entry point
├── FormalMethods.lean        # Root module - imports the whole library
└── FormalMethods/
    ├── Basic.lean            # Formula type, notation, neg/notNot abbreviations (46 lines)
    ├── DeductionTheorem.lean # Theorem 1: classical Hilbert system + deduction theorem (139 lines)
    └── Glivenko.lean         # Theorem 2: intuitionistic system + Glivenko biconditional (323 lines)
```

## First-Time Setup

### 1. Install `elan` (Lean version manager)

**Windows (PowerShell):**

```powershell
curl -sSfL https://raw.githubusercontent.com/leanprover/elan/master/elan-init.ps1 | powershell -Command -
```

**macOS / Linux:**

```bash
curl -sSfL https://raw.githubusercontent.com/leanprover/elan/master/elan-init.sh | sh
```

Close and re-open the terminal so `lake` and `lean` end up on `PATH`.

### 2. Install the VS Code Lean 4 extension

Search the Extensions panel for `lean4` (publisher: `leanprover`).

### 3. Build

From this directory (`project/formalisations/lean/formal_methods/`):

```bash
lake build
```

Expect: *"Build completed successfully."* - no errors, no `sorry`. The first build elaborates from scratch and takes ~20 s; incremental rebuilds after edits are sub-second.

### 4. Open in VS Code

```bash
code .
```

Open `FormalMethods/DeductionTheorem.lean`. The Lean InfoView panel should light up within ~30 seconds of opening the file for the first time.

## What Is Formalised

### Theorem 1 - Deduction Theorem

**File:** `FormalMethods/DeductionTheorem.lean`.

Statement: for the Hilbert-style classical propositional calculus with axioms A1, A2, A3 and modus ponens, if `Γ ∪ {A} ⊢ B` then `Γ ⊢ A ⟹ B`.

Contents:

- `Hilbert` inductive relation with constructors `assumption`, `axiom₁`–`axiom₃`, `modusPonens`.
- `arrow_self` identity lemma (`Γ ⊢ A ⟹ A`) - A1 + A2 + MP × 2.
- Weakening: `weaken` and `weaken_cons`.
- Private helper `deduction_aux` (the generic-context induction, with an equality hypothesis to side-step Lean's index-generalisation quirk on compound indices).
- Public `deduction` theorem.

### Theorem 2 - Glivenko's Theorem

**File:** `FormalMethods/Glivenko.lean`.

Statement (Glivenko 1929): for any propositional formula `A` and context `Γ`, `Γ ⊢_CL A` iff `Γ ⊢_INT ¬¬A`.

Contents:

- `IntProof` inductive relation - A1, A2, *ex falso quodlibet*, modus ponens.
- Parallel intuitionistic infrastructure: `int_arrow_self`, `int_weaken`, `int_weaken_cons`, `int_deduction` (with its own `int_deduction_aux`).
- Lifting `int_to_cl` (every intuitionistic derivation is classical), with `cl_exFalso` discharging `⊥ ⟹ A` from A3.
- Helpers for the forward direction: `dni`, `dni_of_proof`, `neg_imp_neg_conseq`, `neg_imp_dn_ant`, `dn_distrib`, `dn_axiom₃` (the hardest piece).
- Classical double-negation elimination `cl_dne`, derivable from A3.
- Main results: `glivenko_forward`, `glivenko_reverse`, and the bundled biconditional `glivenko`.

## Commit Cadence

One commit per completed lemma (already followed in the local history; mirror to GitHub once the repo URL is decided). Suggested message style:

- `feat(deduction): prove arrow_self lemma`
- `feat(deduction): assumption case`
- `feat(deduction): axiom cases`
- `feat(deduction): modus ponens case - deduction theorem complete`
- `feat(glivenko): int_to_cl lift`
- `feat(glivenko): dni helper`
- `feat(glivenko): dn_distrib helper`
- `feat(glivenko): dn_axiom₃ helper`
- `feat(glivenko): forward direction complete`
- `feat(glivenko): reverse direction complete`
- `feat(glivenko): glivenko's theorem complete`

## Companion Toy Proof Assistant

The same two theorems are re-proved in the Python toy proof assistant under `project/formalisations/toy/`. The comparison chapter (§07 of the report) writes up the differences. See `project/formalisations/formalisations.md` for the overall plan.
