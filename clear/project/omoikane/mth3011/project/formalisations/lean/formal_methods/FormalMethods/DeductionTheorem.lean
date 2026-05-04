import FormalMethods.Basic

/-!
# Theorem 1 — Deduction Theorem for Propositional Logic

**Statement (Mendelson ch. 1).** For a Hilbert-style propositional calculus
with axioms A1, A2, A3 and modus ponens:

  if   `Γ ∪ {A} ⊢ B`
  then `Γ ⊢ A ⟹ B`.

## The proof system

Three axiom schemas plus modus ponens over assumption contexts. A3 is the
classical contrapositive form, in Mendelson's style.

* **A1**  `A ⟹ (B ⟹ A)`
* **A2**  `(A ⟹ (B ⟹ C)) ⟹ ((A ⟹ B) ⟹ (A ⟹ C))`
* **A3**  `(~B ⟹ ~A) ⟹ (A ⟹ B)`

The theorem is proved by induction on the derivation of `B` from `A :: Γ`.
To sidestep Lean 4's index-generalisation quirks when inducting on a
hypothesis whose context index is the compound `A :: Γ`, we prove the
statement for a generic context `Γ'` with a side equation `Γ' = H :: Γ`
(using `H` rather than `A` to avoid shadowing the constructors' internal
formula binders), then specialise.
-/

namespace FormalMethods.Deduction

open Formula

/-- Hilbert-style classical propositional proof system. -/
inductive Hilbert : List Formula → Formula → Prop where
  /-- A formula in the context is derivable. -/
  | assumption  {Γ : List Formula} {A : Formula} (h : A ∈ Γ) : Hilbert Γ A
  /-- Axiom A1: `A ⟹ (B ⟹ A)`. -/
  | axiom₁      {Γ : List Formula} (A B : Formula) :
      Hilbert Γ (A ⟹ (B ⟹ A))
  /-- Axiom A2: `(A ⟹ (B ⟹ C)) ⟹ ((A ⟹ B) ⟹ (A ⟹ C))`. -/
  | axiom₂      {Γ : List Formula} (A B C : Formula) :
      Hilbert Γ ((A ⟹ (B ⟹ C)) ⟹ ((A ⟹ B) ⟹ (A ⟹ C)))
  /-- Axiom A3 (classical contrapositive): `(~B ⟹ ~A) ⟹ (A ⟹ B)`. -/
  | axiom₃      {Γ : List Formula} (A B : Formula) :
      Hilbert Γ ((~B ⟹ ~A) ⟹ (A ⟹ B))
  /-- Modus ponens. -/
  | modusPonens {Γ : List Formula} {A B : Formula} :
      Hilbert Γ (A ⟹ B) → Hilbert Γ A → Hilbert Γ B

/-- Derivability notation. -/
notation:30 Γ " ⊢ " A => Hilbert Γ A

/-! ## The `arrow_self` identity lemma

`Γ ⊢ A ⟹ A`, proved by the textbook A1 + A2 + MP × 2 recipe. Used in the
`assumption` case of the deduction theorem. -/

theorem arrow_self (Γ : List Formula) (A : Formula) : Γ ⊢ A ⟹ A := by
  have h₁ : Γ ⊢ A ⟹ ((A ⟹ A) ⟹ A) := Hilbert.axiom₁ A (A ⟹ A)
  have h₂ : Γ ⊢ (A ⟹ ((A ⟹ A) ⟹ A)) ⟹ ((A ⟹ (A ⟹ A)) ⟹ (A ⟹ A)) :=
    Hilbert.axiom₂ A (A ⟹ A) A
  have h₃ : Γ ⊢ (A ⟹ (A ⟹ A)) ⟹ (A ⟹ A) := Hilbert.modusPonens h₂ h₁
  have h₄ : Γ ⊢ A ⟹ (A ⟹ A) := Hilbert.axiom₁ A A
  exact Hilbert.modusPonens h₃ h₄

/-! ## Weakening

Every derivation extends trivially under a larger assumption context. -/

theorem weaken {Γ Δ : List Formula} {A : Formula}
    (hsub : Γ ⊆ Δ) (h : Γ ⊢ A) : Δ ⊢ A := by
  induction h with
  | assumption hmem         => exact Hilbert.assumption (hsub hmem)
  | axiom₁ P Q              => exact Hilbert.axiom₁ P Q
  | axiom₂ P Q R            => exact Hilbert.axiom₂ P Q R
  | axiom₃ P Q              => exact Hilbert.axiom₃ P Q
  | modusPonens _ _ ih₁ ih₂ => exact Hilbert.modusPonens ih₁ ih₂

/-- Weakening by prepending a single formula. -/
theorem weaken_cons {Γ : List Formula} {A B : Formula} (h : Γ ⊢ B) :
    (A :: Γ) ⊢ B :=
  weaken (fun _ hmem => List.mem_cons_of_mem _ hmem) h

/-! ## Main theorem

Helper form: induct on a derivation in a generic context `Γ'`, carrying an
equation `Γ' = H :: Γ` into each case. The public `deduction` statement just
specialises with `rfl`. -/

private theorem deduction_aux {Γ' : List Formula} {B : Formula}
    (h : Γ' ⊢ B) :
    ∀ (Γ : List Formula) (H : Formula), Γ' = H :: Γ → Γ ⊢ (H ⟹ B) := by
  induction h with
  | assumption hmem =>
      intro Γ H hΓ
      subst hΓ
      -- hmem : _ ∈ H :: Γ.
      rcases List.mem_cons.mp hmem with heq | hmem'
      · -- head case: derived formula equals H.  heq : _ = H.
        subst heq
        exact arrow_self _ _
      · -- tail case: derived formula is in Γ. Reassume + A1 + MP.
        exact Hilbert.modusPonens
          (Hilbert.axiom₁ _ H)
          (Hilbert.assumption hmem')
  | axiom₁ P Q =>
      intro Γ H hΓ
      subst hΓ
      exact Hilbert.modusPonens
        (Hilbert.axiom₁ (P ⟹ (Q ⟹ P)) H)
        (Hilbert.axiom₁ P Q)
  | axiom₂ P Q R =>
      intro Γ H hΓ
      subst hΓ
      exact Hilbert.modusPonens
        (Hilbert.axiom₁ ((P ⟹ (Q ⟹ R)) ⟹ ((P ⟹ Q) ⟹ (P ⟹ R))) H)
        (Hilbert.axiom₂ P Q R)
  | axiom₃ P Q =>
      intro Γ H hΓ
      subst hΓ
      exact Hilbert.modusPonens
        (Hilbert.axiom₁ ((~Q ⟹ ~P) ⟹ (P ⟹ Q)) H)
        (Hilbert.axiom₃ P Q)
  | modusPonens _ _ ih_imp ih_ant =>
      intro Γ H hΓ
      subst hΓ
      -- ih_imp gives  Γ ⊢ H ⟹ (C ⟹ B);  ih_ant gives  Γ ⊢ H ⟹ C.
      -- A2 + MP + MP gives Γ ⊢ H ⟹ B.
      have step₁ := Hilbert.modusPonens
        (Hilbert.axiom₂ H _ _)
        (ih_imp Γ H rfl)
      exact Hilbert.modusPonens step₁ (ih_ant Γ H rfl)

/-- **The Deduction Theorem.** -/
theorem deduction {Γ : List Formula} {A B : Formula}
    (h : (A :: Γ) ⊢ B) : Γ ⊢ (A ⟹ B) :=
  deduction_aux h Γ A rfl

end FormalMethods.Deduction
