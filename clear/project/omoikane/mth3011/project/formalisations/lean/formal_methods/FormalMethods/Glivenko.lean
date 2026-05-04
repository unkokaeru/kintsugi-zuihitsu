import FormalMethods.Basic
import FormalMethods.DeductionTheorem

/-!
# Theorem 2 — Glivenko's Theorem

**Statement (Glivenko 1929).** For any propositional formula `A` and context `Γ`:

  `Γ ⊢_CL A`   iff   `Γ ⊢_INT ¬¬A`

where `⊢_CL` is derivability in classical propositional logic and
`⊢_INT` in intuitionistic propositional logic. The classical system here
is the `Hilbert` inductive defined in `DeductionTheorem.lean` (A1, A2, A3,
modus ponens). The intuitionistic system replaces A3 with *ex falso
quodlibet* (`⊥ ⟹ A`).

## Proof outline

The forward direction proceeds by induction on the classical derivation;
each case produces a double-negated derivation using three intuitionistic
helpers:

1. `dni`         — `Γ ⊢ᴵ A ⟹ ¬¬A`
2. `dn_distrib`  — `Γ ⊢ᴵ ¬¬(A ⟹ B) ⟹ (¬¬A ⟹ ¬¬B)`
3. `dn_axiom₃`   — `Γ ⊢ᴵ ¬¬((~B ⟹ ~A) ⟹ (A ⟹ B))`

The reverse direction lifts the intuitionistic proof into a classical one
(`int_to_cl`), then eliminates the double negation classically using
`cl_dne`, which is derivable from A3.

All helpers are built on an intuitionistic deduction theorem (`int_deduction`),
proved by the same generic-context trick used in `DeductionTheorem.lean`.
-/

namespace FormalMethods.Glivenko

open Formula
open FormalMethods.Deduction (Hilbert arrow_self weaken weaken_cons deduction)

/-- Intuitionistic Hilbert-style propositional proof system. Replaces the
    classical axiom A3 with *ex falso quodlibet* (`⊥ ⟹ A`); A1, A2, and
    modus ponens are shared with the classical system. -/
inductive IntProof : List Formula → Formula → Prop where
  | assumption  {Γ : List Formula} {A : Formula} (h : A ∈ Γ) : IntProof Γ A
  | axiom₁      {Γ : List Formula} (A B : Formula) :
      IntProof Γ (A ⟹ (B ⟹ A))
  | axiom₂      {Γ : List Formula} (A B C : Formula) :
      IntProof Γ ((A ⟹ (B ⟹ C)) ⟹ ((A ⟹ B) ⟹ (A ⟹ C)))
  | exFalso     {Γ : List Formula} (A : Formula) :
      IntProof Γ (Formula.bot ⟹ A)
  | modusPonens {Γ : List Formula} {A B : Formula} :
      IntProof Γ (A ⟹ B) → IntProof Γ A → IntProof Γ B

/-- Intuitionistic derivability notation. -/
notation:30 Γ " ⊢ᴵ " A => IntProof Γ A

/-! ## Intuitionistic infrastructure

The same five utilities available for the classical Hilbert system:
`arrow_self`, weakening, weakening-by-cons, the deduction theorem
(helper + public form). Proofs mirror their classical analogues verbatim. -/

theorem int_arrow_self (Γ : List Formula) (A : Formula) : Γ ⊢ᴵ A ⟹ A := by
  have h₁ : Γ ⊢ᴵ A ⟹ ((A ⟹ A) ⟹ A) := IntProof.axiom₁ A (A ⟹ A)
  have h₂ : Γ ⊢ᴵ (A ⟹ ((A ⟹ A) ⟹ A)) ⟹ ((A ⟹ (A ⟹ A)) ⟹ (A ⟹ A)) :=
    IntProof.axiom₂ A (A ⟹ A) A
  have h₃ : Γ ⊢ᴵ (A ⟹ (A ⟹ A)) ⟹ (A ⟹ A) := IntProof.modusPonens h₂ h₁
  have h₄ : Γ ⊢ᴵ A ⟹ (A ⟹ A) := IntProof.axiom₁ A A
  exact IntProof.modusPonens h₃ h₄

theorem int_weaken {Γ Δ : List Formula} {A : Formula}
    (hsub : Γ ⊆ Δ) (h : Γ ⊢ᴵ A) : Δ ⊢ᴵ A := by
  induction h with
  | assumption hmem         => exact IntProof.assumption (hsub hmem)
  | axiom₁ P Q              => exact IntProof.axiom₁ P Q
  | axiom₂ P Q R            => exact IntProof.axiom₂ P Q R
  | exFalso P               => exact IntProof.exFalso P
  | modusPonens _ _ ih₁ ih₂ => exact IntProof.modusPonens ih₁ ih₂

theorem int_weaken_cons {Γ : List Formula} {A B : Formula}
    (h : Γ ⊢ᴵ B) : (A :: Γ) ⊢ᴵ B :=
  int_weaken (fun _ hmem => List.mem_cons_of_mem _ hmem) h

private theorem int_deduction_aux {Γ' : List Formula} {B : Formula}
    (h : Γ' ⊢ᴵ B) :
    ∀ (Γ : List Formula) (H : Formula), Γ' = H :: Γ → Γ ⊢ᴵ (H ⟹ B) := by
  induction h with
  | assumption hmem =>
      intro Γ H hΓ
      subst hΓ
      rcases List.mem_cons.mp hmem with heq | hmem'
      · subst heq
        exact int_arrow_self _ _
      · exact IntProof.modusPonens
          (IntProof.axiom₁ _ H)
          (IntProof.assumption hmem')
  | axiom₁ P Q =>
      intro Γ H hΓ
      subst hΓ
      exact IntProof.modusPonens
        (IntProof.axiom₁ (P ⟹ (Q ⟹ P)) H)
        (IntProof.axiom₁ P Q)
  | axiom₂ P Q R =>
      intro Γ H hΓ
      subst hΓ
      exact IntProof.modusPonens
        (IntProof.axiom₁ ((P ⟹ (Q ⟹ R)) ⟹ ((P ⟹ Q) ⟹ (P ⟹ R))) H)
        (IntProof.axiom₂ P Q R)
  | exFalso P =>
      intro Γ H hΓ
      subst hΓ
      exact IntProof.modusPonens
        (IntProof.axiom₁ (Formula.bot ⟹ P) H)
        (IntProof.exFalso P)
  | modusPonens _ _ ih_imp ih_ant =>
      intro Γ H hΓ
      subst hΓ
      have step₁ := IntProof.modusPonens
        (IntProof.axiom₂ H _ _)
        (ih_imp Γ H rfl)
      exact IntProof.modusPonens step₁ (ih_ant Γ H rfl)

/-- **Intuitionistic deduction theorem.** -/
theorem int_deduction {Γ : List Formula} {A B : Formula}
    (h : (A :: Γ) ⊢ᴵ B) : Γ ⊢ᴵ (A ⟹ B) :=
  int_deduction_aux h Γ A rfl

/-! ## Lifting intuitionistic derivations into the classical system -/

/-- Classical `⊥ ⟹ A` — needed for the `exFalso` case of `int_to_cl`. -/
private theorem cl_exFalso (Γ : List Formula) (A : Formula) :
    Hilbert Γ (Formula.bot ⟹ A) := by
  -- Recipe: ~⊥ (= arrow_self on ⊥), wrap with A1, then apply A3.
  have h_nb : Hilbert Γ (~ Formula.bot) := arrow_self Γ Formula.bot
  have h_step : Hilbert Γ ((~A) ⟹ (~ Formula.bot)) :=
    Hilbert.modusPonens (Hilbert.axiom₁ (~ Formula.bot) (~A)) h_nb
  -- A3 with P = ⊥, Q = A gives (~A ⟹ ~⊥) ⟹ (⊥ ⟹ A).
  exact Hilbert.modusPonens (Hilbert.axiom₃ Formula.bot A) h_step

/-- Every intuitionistic derivation is a classical one. -/
theorem int_to_cl {Γ : List Formula} {A : Formula} (h : Γ ⊢ᴵ A) : Hilbert Γ A := by
  induction h with
  | assumption hmem         => exact Hilbert.assumption hmem
  | axiom₁ P Q              => exact Hilbert.axiom₁ P Q
  | axiom₂ P Q R            => exact Hilbert.axiom₂ P Q R
  | exFalso P               => exact cl_exFalso _ P
  | modusPonens _ _ ih₁ ih₂ => exact Hilbert.modusPonens ih₁ ih₂

/-! ## Intuitionistic helper lemmas for the forward direction -/

/-- Double-negation introduction: `Γ ⊢ᴵ A ⟹ ¬¬A`. -/
theorem dni (Γ : List Formula) (A : Formula) : Γ ⊢ᴵ A ⟹ ~(~A) := by
  -- Context [¬A, A, Γ] derives ⊥ via MP; int_deduction twice peels the two
  -- hypotheses off.
  have h_nA  : ((~A) :: A :: Γ) ⊢ᴵ ~A :=
    IntProof.assumption (List.mem_cons_self _ _)
  have h_A   : ((~A) :: A :: Γ) ⊢ᴵ A :=
    IntProof.assumption (List.mem_cons_of_mem _ (List.mem_cons_self _ _))
  have h_bot : ((~A) :: A :: Γ) ⊢ᴵ Formula.bot :=
    IntProof.modusPonens h_nA h_A
  exact int_deduction (int_deduction h_bot)

/-- Convenience: if `Γ ⊢ᴵ A`, then `Γ ⊢ᴵ ¬¬A`. -/
theorem dni_of_proof {Γ : List Formula} {A : Formula} (h : Γ ⊢ᴵ A) : Γ ⊢ᴵ ~(~A) :=
  IntProof.modusPonens (dni Γ A) h

/-- From a negated implication, the consequent is false:
    `Γ ⊢ᴵ ~(A ⟹ B) ⟹ ~B`. -/
theorem neg_imp_neg_conseq (Γ : List Formula) (A B : Formula) :
    Γ ⊢ᴵ (~(A ⟹ B)) ⟹ ~B := by
  -- Under [B, ~(A ⟹ B), Γ] derive ⊥.  Use A1 to lift B to (A ⟹ B), then MP
  -- into ~(A ⟹ B).
  have h_B   : (B :: (~(A ⟹ B)) :: Γ) ⊢ᴵ B :=
    IntProof.assumption (List.mem_cons_self _ _)
  have h_nAB : (B :: (~(A ⟹ B)) :: Γ) ⊢ᴵ ~(A ⟹ B) :=
    IntProof.assumption (List.mem_cons_of_mem _ (List.mem_cons_self _ _))
  have h_AB  : (B :: (~(A ⟹ B)) :: Γ) ⊢ᴵ A ⟹ B :=
    IntProof.modusPonens (IntProof.axiom₁ B A) h_B
  have h_bot : (B :: (~(A ⟹ B)) :: Γ) ⊢ᴵ Formula.bot :=
    IntProof.modusPonens h_nAB h_AB
  exact int_deduction (int_deduction h_bot)

/-- From a negated implication, the antecedent is double-negated:
    `Γ ⊢ᴵ ~(A ⟹ B) ⟹ ~~A`. -/
theorem neg_imp_dn_ant (Γ : List Formula) (A B : Formula) :
    Γ ⊢ᴵ (~(A ⟹ B)) ⟹ ~(~A) := by
  -- Under [~A, ~(A ⟹ B), Γ] build A ⟹ B via exFalso then MP with ~(A ⟹ B)
  -- to derive ⊥; int_deduction twice peels.
  have h_A    : (A :: (~A) :: (~(A ⟹ B)) :: Γ) ⊢ᴵ A :=
    IntProof.assumption (List.mem_cons_self _ _)
  have h_nA   : (A :: (~A) :: (~(A ⟹ B)) :: Γ) ⊢ᴵ ~A :=
    IntProof.assumption (List.mem_cons_of_mem _ (List.mem_cons_self _ _))
  have h_bot₀ : (A :: (~A) :: (~(A ⟹ B)) :: Γ) ⊢ᴵ Formula.bot :=
    IntProof.modusPonens h_nA h_A
  have h_exf  : (A :: (~A) :: (~(A ⟹ B)) :: Γ) ⊢ᴵ Formula.bot ⟹ B :=
    IntProof.exFalso B
  have h_B    : (A :: (~A) :: (~(A ⟹ B)) :: Γ) ⊢ᴵ B :=
    IntProof.modusPonens h_exf h_bot₀
  have h_AB   : ((~A) :: (~(A ⟹ B)) :: Γ) ⊢ᴵ A ⟹ B :=
    int_deduction h_B
  have h_nAB  : ((~A) :: (~(A ⟹ B)) :: Γ) ⊢ᴵ ~(A ⟹ B) :=
    IntProof.assumption (List.mem_cons_of_mem _ (List.mem_cons_self _ _))
  have h_bot  : ((~A) :: (~(A ⟹ B)) :: Γ) ⊢ᴵ Formula.bot :=
    IntProof.modusPonens h_nAB h_AB
  exact int_deduction (int_deduction h_bot)

/-- Distribution of double negation over implication. -/
theorem dn_distrib (Γ : List Formula) (A B : Formula) :
    Γ ⊢ᴵ (~(~(A ⟹ B))) ⟹ ((~(~A)) ⟹ (~(~B))) := by
  -- Context Δ = [A, A ⟹ B, ~B, ~~A, ~~(A ⟹ B), Γ]; derive ⊥; peel 5 times.
  let Δ : List Formula :=
    A :: (A ⟹ B) :: (~B) :: (~(~A)) :: (~(~(A ⟹ B))) :: Γ
  -- All five assumption-lookups.
  have h_A     : Δ ⊢ᴵ A                := IntProof.assumption (by simp [Δ])
  have h_AB    : Δ ⊢ᴵ A ⟹ B            := IntProof.assumption (by simp [Δ])
  have h_nB    : Δ ⊢ᴵ ~B               := IntProof.assumption (by simp [Δ])
  have h_nnA   : Δ ⊢ᴵ ~(~A)            := IntProof.assumption (by simp [Δ])
  have h_nnAB  : Δ ⊢ᴵ ~(~(A ⟹ B))      := IntProof.assumption (by simp [Δ])
  have h_B     : Δ ⊢ᴵ B                := IntProof.modusPonens h_AB h_A
  have h_bot   : Δ ⊢ᴵ Formula.bot      := IntProof.modusPonens h_nB h_B
  -- Peel A: conclude ~A.
  have h_nA    : ((A ⟹ B) :: (~B) :: (~(~A)) :: (~(~(A ⟹ B))) :: Γ) ⊢ᴵ ~A :=
    int_deduction h_bot
  -- MP against ~~A to restore ⊥ (but with one less assumption).
  have h_nnA₁  : ((A ⟹ B) :: (~B) :: (~(~A)) :: (~(~(A ⟹ B))) :: Γ) ⊢ᴵ ~(~A) :=
    IntProof.assumption (by simp)
  have h_bot₁  := IntProof.modusPonens h_nnA₁ h_nA
  -- Peel (A ⟹ B): conclude ~(A ⟹ B).
  have h_nAB   : ((~B) :: (~(~A)) :: (~(~(A ⟹ B))) :: Γ) ⊢ᴵ ~(A ⟹ B) :=
    int_deduction h_bot₁
  have h_nnAB₁ : ((~B) :: (~(~A)) :: (~(~(A ⟹ B))) :: Γ) ⊢ᴵ ~(~(A ⟹ B)) :=
    IntProof.assumption (by simp)
  have h_bot₂  := IntProof.modusPonens h_nnAB₁ h_nAB
  -- Peel ~B: conclude ~~B.
  have h_nnB   : ((~(~A)) :: (~(~(A ⟹ B))) :: Γ) ⊢ᴵ ~(~B) :=
    int_deduction h_bot₂
  -- Peel ~~A.
  have h_step  : ((~(~(A ⟹ B))) :: Γ) ⊢ᴵ (~(~A)) ⟹ (~(~B)) :=
    int_deduction h_nnB
  -- Peel ~~(A ⟹ B).
  exact int_deduction h_step

/-- The hard one: `Γ ⊢ᴵ ¬¬((~B ⟹ ~A) ⟹ (A ⟹ B))`. -/
theorem dn_axiom₃ (Γ : List Formula) (A B : Formula) :
    Γ ⊢ᴵ ~(~((~B ⟹ ~A) ⟹ (A ⟹ B))) := by
  -- Let-bind X := (~B ⟹ ~A) ⟹ (A ⟹ B) for readability below.
  let X : Formula := (~B ⟹ ~A) ⟹ (A ⟹ B)
  -- Under (~X :: Γ), derive ⊥ and peel.
  -- Step 1: from ~X, neg_imp_dn_ant gives ~~(~B ⟹ ~A).
  have h_nX    : ((~X) :: Γ) ⊢ᴵ ~X :=
    IntProof.assumption (List.mem_cons_self _ _)
  have h_nnBA  : ((~X) :: Γ) ⊢ᴵ ~(~(~B ⟹ ~A)) :=
    IntProof.modusPonens (neg_imp_dn_ant ((~X) :: Γ) (~B ⟹ ~A) (A ⟹ B)) h_nX
  -- Step 2: from ~X, neg_imp_neg_conseq gives ~(A ⟹ B).
  have h_nAB   : ((~X) :: Γ) ⊢ᴵ ~(A ⟹ B) :=
    IntProof.modusPonens (neg_imp_neg_conseq ((~X) :: Γ) (~B ⟹ ~A) (A ⟹ B)) h_nX
  -- Step 3: from ~(A ⟹ B), neg_imp_dn_ant gives ~~A.
  have h_nnA   : ((~X) :: Γ) ⊢ᴵ ~(~A) :=
    IntProof.modusPonens (neg_imp_dn_ant ((~X) :: Γ) A B) h_nAB
  -- Step 4: from ~(A ⟹ B), neg_imp_neg_conseq gives ~B.
  have h_nB    : ((~X) :: Γ) ⊢ᴵ ~B :=
    IntProof.modusPonens (neg_imp_neg_conseq ((~X) :: Γ) A B) h_nAB
  -- Step 5: build ~(~B ⟹ ~A) in ((~X) :: Γ) — use ~B (derived) + (~B ⟹ ~A)
  -- (assumed below) to MP to ~A, then MP against ~~A gives ⊥; int_deduction
  -- peels (~B ⟹ ~A).
  have h_BA_in  : ((~B ⟹ ~A) :: (~X) :: Γ) ⊢ᴵ (~B) ⟹ (~A) :=
    IntProof.assumption (List.mem_cons_self _ _)
  have h_nB_in  : ((~B ⟹ ~A) :: (~X) :: Γ) ⊢ᴵ ~B :=
    int_weaken_cons h_nB
  have h_nA_in  : ((~B ⟹ ~A) :: (~X) :: Γ) ⊢ᴵ ~A :=
    IntProof.modusPonens h_BA_in h_nB_in
  have h_nnA_in : ((~B ⟹ ~A) :: (~X) :: Γ) ⊢ᴵ ~(~A) :=
    int_weaken_cons h_nnA
  have h_bot_in : ((~B ⟹ ~A) :: (~X) :: Γ) ⊢ᴵ Formula.bot :=
    IntProof.modusPonens h_nnA_in h_nA_in
  have h_neg_BA : ((~X) :: Γ) ⊢ᴵ ~(~B ⟹ ~A) := int_deduction h_bot_in
  -- Step 6: MP h_nnBA against h_neg_BA gives ⊥.
  have h_bot    : ((~X) :: Γ) ⊢ᴵ Formula.bot :=
    IntProof.modusPonens h_nnBA h_neg_BA
  -- Step 7: peel ~X.
  exact int_deduction h_bot

/-! ## Classical double-negation elimination -/

/-- Classical DNE: `Γ ⊢_CL ¬¬A ⟹ A`. Uses A3 together with the (classical
    lift of the) intuitionistic `dni` at `~A`. -/
theorem cl_dne (Γ : List Formula) (A : Formula) : Hilbert Γ (~(~A) ⟹ A) := by
  -- A3 with P = ~~A and Q = A: (~A ⟹ ~(~~A)) ⟹ (~~A ⟹ A).
  -- Premise (~A ⟹ ~(~~A)) is `dni` applied to `~A`, lifted to classical.
  have h_dni : Hilbert Γ ((~A) ⟹ ~(~(~A))) := int_to_cl (dni Γ (~A))
  exact Hilbert.modusPonens (Hilbert.axiom₃ (~(~A)) A) h_dni

/-! ## Main theorems -/

/-- **Glivenko, forward direction.** -/
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
      -- ih_imp : Γ ⊢ᴵ ~~(C ⟹ B);  ih_ant : Γ ⊢ᴵ ~~C.  Want Γ ⊢ᴵ ~~B.
      exact IntProof.modusPonens
        (IntProof.modusPonens (dn_distrib _ _ _) ih_imp)
        ih_ant

/-- **Glivenko, reverse direction.** -/
theorem glivenko_reverse {Γ : List Formula} {A : Formula}
    (h : Γ ⊢ᴵ ~(~A)) : Hilbert Γ A :=
  Hilbert.modusPonens (cl_dne Γ A) (int_to_cl h)

/-- **Glivenko's theorem.** -/
theorem glivenko {Γ : List Formula} {A : Formula} :
    Hilbert Γ A ↔ (Γ ⊢ᴵ ~(~A)) :=
  ⟨glivenko_forward, glivenko_reverse⟩

end FormalMethods.Glivenko
