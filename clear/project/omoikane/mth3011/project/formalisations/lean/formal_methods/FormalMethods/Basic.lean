/-!
# FormalMethods.Basic

Shared definitions for the Hilbert-style propositional calculus used in
`DeductionTheorem.lean` and `Glivenko.lean`.

Propositional formulae are built from:

* countably many atomic variables, indexed by `Nat`;
* implication `⟹` (the only truly primitive connective in a Hilbert calculus —
  `¬`, `∧`, `∨` can all be defined from it together with `⊥`);
* a falsum constant `⊥`, from which negation is defined as
  `¬A := A ⟹ ⊥`.

Keeping the surface small makes the proof-system definitions in the sibling
files genuinely short; derived connectives are introduced as `abbrev`s below
so that the statements in Mendelson-style A1–A3 still read naturally.
-/

namespace FormalMethods

/-- Propositional formulae. Implication and falsum are primitive; negation,
    conjunction, disjunction, and biconditional are derived. -/
inductive Formula : Type where
  | var   : Nat → Formula
  | bot   : Formula
  | arrow : Formula → Formula → Formula
  deriving Repr, DecidableEq

namespace Formula

/-- Negation as implication to falsum. -/
abbrev neg (A : Formula) : Formula := arrow A bot

/-- Double negation, for Glivenko. -/
abbrev notNot (A : Formula) : Formula := neg (neg A)

end Formula

/-- Right-associative infix for implication so proofs read `A ⟹ B ⟹ C`. -/
infixr:25 " ⟹ " => Formula.arrow

/-- Unicode prefix for negation. -/
prefix:40 "~" => Formula.neg

end FormalMethods
