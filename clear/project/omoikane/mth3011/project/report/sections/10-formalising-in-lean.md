# The Same Theorems in Lean 4

-9 proved the two theorems in the toy. §10 proves them again in Lean 4, the industrial counterpoint. The point of doing both is not redundancy but contrast: §11 will measure where each tool's affordances helped and where they got in the way. Both formalisations live in `project/formalisations/lean/formal_methods/FormalMethods/`. The development uses no mathlib dependency - it relies only on `List`, `Nat`, and `Prop` from Lean core. Keeping the build self-contained matches the propositional-only scope and makes the dependency tree auditable in full.

## 10.1 Shared Infrastructure

`FormalMethods/Basic.lean` defines the propositional formula type and the notation used throughout:

```lean
inductive Formula : Type where
  | var   : Nat → Formula
  | bot   : Formula
  | arrow : Formula → Formula → Formula
  deriving Repr, DecidableEq

abbrev Formula.neg    (A : Formula) : Formula := Formula.arrow A Formula.bot
abbrev Formula.notNot (A : Formula) : Formula := Formula.neg (Formula.neg A)

infixr:25 " ⟹ " => Formula.arrow
prefix:40 "~"   => Formula.neg
```

This is the same shape as the toy's `Formula` ADT (§8.3). Implication and falsum are the only primitive connectives; negation and double negation are definitional abbreviations. Both languages, picking the same minimal vocabulary, end up with similar core data structures - which is itself a finding for §11.

## 10.2 Theorem 1: Deduction Theorem

**Statement.** For a Hilbert-style propositional calculus with axioms A1, A2, A3 and modus ponens: if `Γ ∪ {A} ⊢ B` then `Γ ⊢ A ⟹ B`.

In Lean, `Hilbert` is an inductive relation on `List Formula → Formula → Prop` with five constructors (`assumption`, `axiom₁`-`axiom₃`, `modusPonens`), defined in `FormalMethods/DeductionTheorem.lean`. The deduction theorem is then:

```lean
theorem deduction {Γ : List Formula} {A B : Formula}
    (h : (A :: Γ) ⊢ B) : Γ ⊢ (A ⟹ B)
```

The proof is by induction on the derivation of `B`. The subtlety: `A :: Γ` is a compound term in the first index of `Hilbert`, and Lean 4's `induction` tactic cannot generalise a compound index directly. The standard fix is to prove a helper `deduction_aux` with an equality hypothesis `Γ' = H :: Γ`, induct on that, then specialise:

```lean
private theorem deduction_aux {Γ' : List Formula} {B : Formula}
    (h : Γ' ⊢ B) :
    ∀ (Γ : List Formula) (H : Formula), Γ' = H :: Γ → Γ ⊢ (H ⟹ B) := by
  induction h with
  | assumption hmem =>
      intro Γ H hΓ
      subst hΓ
      rcases List.mem_cons.mp hmem with heq | hmem'
      · subst heq
        exact arrow_self _ _
      · exact Hilbert.modusPonens (Hilbert.axiom₁ _ H) (Hilbert.assumption hmem')
  | axiom₁ P Q =>
      intro Γ H hΓ
      subst hΓ
      exact Hilbert.modusPonens
        (Hilbert.axiom₁ (P ⟹ (Q ⟹ P)) H)
        (Hilbert.axiom₁ P Q)
  -- axiom₂, axiom₃ analogous - see §14.B.1 for the full listing
  | modusPonens _ _ ih_imp ih_ant =>
      intro Γ H hΓ
      subst hΓ
      have step₁ := Hilbert.modusPonens
        (Hilbert.axiom₂ H _ _)
        (ih_imp Γ H rfl)
      exact Hilbert.modusPonens step₁ (ih_ant Γ H rfl)

theorem deduction {Γ A B} (h : (A :: Γ) ⊢ B) : Γ ⊢ (A ⟹ B) :=
  deduction_aux h Γ A rfl
```

The full file is 139 lines: inductive definition, `arrow_self` helper (the textbook `Γ ⊢ A ⟹ A`, via A1, A2, MP), a weakening lemma, the main proof. Induction-case names `P`, `Q`, `R` are chosen to avoid shadowing the outer theorem's `A` - a small ergonomic detail that matters in practice, because reusing the letter makes `subst` eliminate in the wrong direction during the assumption case.

Compare the toy version (§9.1): the toy's `deduction_transform` carries the same argument but at the meta-level - Python recursion over the structural cases of a `Proof` value. Lean stays inside the object logic. Both are correct.

## 10.3 Theorem 2: Glivenko's Theorem

**Statement (Glivenko 1929).** For any propositional formula `A` and context `Γ`: `Γ ⊢_CL A` iff `Γ ⊢_INT ¬¬A`.

The intuitionistic system `IntProof` lives in `FormalMethods/Glivenko.lean` and replaces `axiom₃` with *ex falso quodlibet* (`⊥ ⟹ A`); A1, A2, and modus ponens are shared with the classical `Hilbert`. The file reuses `Hilbert` from `DeductionTheorem.lean` as the classical system, avoiding a duplicate inductive.

The forward direction is by induction on the classical derivation. Four of five cases are light: `assumption`, `axiom₁`, `axiom₂` fold into a single application of `dni` (double-negation introduction); `modusPonens` uses `dn_distrib` (distribution of `¬¬` over `⟹`) then two applications of MP; only `axiom₃` needs the dedicated lemma `dn_axiom₃`. The reverse direction uses `int_to_cl` (lifting intuitionistic derivations to classical ones, using A3 to classically derive `⊥ ⟹ A`) and `cl_dne` (classical double-negation elimination from A3).

```lean
theorem glivenko_forward {Γ : List Formula} {A : Formula}
    (h : Hilbert Γ A) : Γ ⊢ᴵ ~(~A) := by
  induction h with
  | assumption hmem =>
      exact dni_of_proof (IntProof.assumption hmem)
  | axiom₁ P Q =>
      exact dni_of_proof (IntProof.axiom₁ P Q)
  | axiom₂ P Q R =>
      exact dni_of_proof (IntProof.axiom₂ P Q R)
  | axiom₃ P Q =>
      exact dn_axiom₃ _ P Q
  | modusPonens _ _ ih_imp ih_ant =>
      exact IntProof.modusPonens
        (IntProof.modusPonens (dn_distrib _ _ _) ih_imp)
        ih_ant
```

The three helper lemmas carry the weight. `dni` is a short hypothesis-stack-then-peel construction using the intuitionistic deduction theorem. `neg_imp_neg_conseq` and `neg_imp_dn_ant` - not named in the textbook but unavoidable for the forward direction's `axiom₃` case - extract `¬B` and `¬¬A` respectively from `¬(A ⟹ B)`. `dn_distrib` stacks five hypotheses onto `Γ`, derives `⊥` via MP chains, and peels them off with the intuitionistic deduction theorem (`int_deduction`) five times.

`dn_axiom₃` - the intuitionistic proof of `¬¬((~B ⟹ ~A) ⟹ (A ⟹ B))` - is the single hardest piece in the file. The construction uses `neg_imp_dn_ant` and `neg_imp_neg_conseq` applied twice each to produce `¬¬(~B ⟹ ~A)`, `¬(A ⟹ B)`, `¬¬A`, and `¬B` under the hypothesis `¬X` where `X = (~B ⟹ ~A) ⟹ (A ⟹ B)`. From these, a short internal derivation builds `¬(~B ⟹ ~A)`, which MP'd against `¬¬(~B ⟹ ~A)` yields `⊥`; one more `int_deduction` peels `¬X` to produce `¬¬X`.

The full Glivenko file is 323 lines. The bundled biconditional:

```lean
theorem glivenko {Γ : List Formula} {A : Formula} :
    Hilbert Γ A ↔ (Γ ⊢ᴵ ~(~A)) :=
  ⟨glivenko_forward, glivenko_reverse⟩
```

The toy's `glivenko_translate` (§9.2) walks the same five cases of the classical proof, with the same one-line collapse for four of them and the same heavy lifting on the AxiomA3 case. The names, the lemma decomposition, and the order of moves match step for step.

## 10.4 Reflections on the Lean Side

Two observations from writing these proofs that inform §11.

First, Lean's automation did not shorten them. `decide`, `tauto`, and `simp` were no help against Hilbert-style axiomatic derivations - they target goals with computational or algebraic content, not "apply this specific axiom instance". The file is explicit `Hilbert.axiom₁`/`axiom₂`/`axiom₃` plus `modusPonens` calls throughout. Not a complaint: it is the right outcome for this target, and it makes the cross-tool comparison cleaner than it would be if one side were half-automation.

Second, the "prove a helper with a generic-context equality, then specialise" pattern recurs between the deduction theorem and the intuitionistic deduction theorem inside Glivenko. They are essentially the same proof with one inductive swapped for another. Macro-generating the boilerplate would remove the duplication, but at the cost of readability as mathematical text. For a project whose point is pedagogical visibility, the explicit duplication is the right trade.

Full listings are in §14.B: 462 lines for the two theorem files, 508 including shared `Basic.lean`.
