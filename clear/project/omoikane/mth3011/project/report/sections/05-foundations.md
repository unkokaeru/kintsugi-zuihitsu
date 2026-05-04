# Foundations of a Trust Layer

-§2-4 argued that mathematics needs the kind of mechanical checking programming has. §5 sets out the formal machinery a checker rests on. The treatment is compact: specialised topics are taken only to the depth later sections draw on.

## 5.1 Propositional and First-Order Logic

Propositional logic is the smallest formal system this report uses. Atomic variables range over `True` and `False`, combined with `∧`, `∨`, `⟹`, `¬`, and their derivatives. Mendelson [4, ch. 1] gives the textbook treatment used throughout. A *formula* is built recursively from atoms and connectives; its *semantics* is a valuation assigning `True`/`False` to each atom, extended homomorphically to compound formulae; a *proof* in a Hilbert-style system is a finite sequence of formulae, each either an axiom instance or derived from earlier lines by an inference rule. Hilbert-style systems are used here, over the arguably more natural sequent calculus or natural deduction, because the rules are sparse (three axiom schemas plus modus ponens, in Mendelson's formulation) and because Glivenko's theorem [4, ch. 1] is typically stated in this style.

Two metatheoretic properties justify the machinery. *Soundness*: every provable formula is a tautology. *Completeness* (propositional, due to Post): every tautology is provable. Together they pin syntax to semantics, which matters in §§9-11: the toy assistant and Lean share semantic grounding even where their surface syntaxes differ.

First-order logic adds quantifiers `∀`, `∃` ranging over a signature of constants, functions, and relations. Ayala-Rincón and de Moura [1] develop propositional and first-order deduction in parallel, emphasising the mechanical transition between them. Both theorems formalised in this project are pure propositional, which lets the toy stay propositional-only without compromising the comparison.

## 5.2 Type Theory

Where logic models propositions and proofs, *type theory* treats proofs as structured data and propositions as types those data inhabit - the perspective every modern proof assistant rests on. The simplest setting is Church's simply-typed λ-calculus: terms are variables, λ-abstractions, and applications, with types assigned by a finite set of formation rules. Nederpelt and Geuvers [9, chs. 2-4] give the reference treatment used during the foundational phase; Pierce [13, ch. 9] is the programming-language-theoretic companion.

A *dependent type* is one whose form varies with a value: `Vec n`, the type of vectors of length `n`, depends on a natural number `n`. Dependent types lift type theory from a programming-language tool to a foundation for mathematics: "every vector of length `n+1` has a head" becomes the dependent function type `∀ {n} → Vec (n+1) → α`, and the proof is a term of that type.

The *Calculus of Inductive Constructions* (CIC) is the dependent-type theory underneath both Coq [6] and Lean 4 [5], which are roughly implementations of CIC with different elaboration and tactic layers above it. Harper [14] frames kernel-level proof checking operationally: fix a small trusted type-checker, elaborate the user-written term to fully-explicit core syntax, run the type-checker. Whether the kernel accepts or rejects is the single point of trust.

## 5.3 The Curry-Howard Correspondence

"Propositions as types, proofs as programs" is the Curry-Howard correspondence. Under it: implication is function type, conjunction is product type, disjunction is sum type, universal quantification is dependent function type, existential quantification is dependent pair type. A proof of `A ⟹ B` is a function turning a proof of `A` into a proof of `B`; modus ponens is function application. The standard table:

| Logical connective  | Type-theoretic counterpart          |
|---------------------|-------------------------------------|
| `A ⟹ B`             | `A → B` (function type)             |
| `A ∧ B`             | `A × B` (product)                   |
| `A ∨ B`             | `A + B` (sum)                       |
| `⊥` (falsum)        | empty type (`Empty`, `Void`)        |
| `∀ x : T. P(x)`     | `(x : T) → P(x)` (dependent `Π`)    |
| `∃ x : T. P(x)`     | `Σ (x : T), P(x)` (dependent pair)  |

Nederpelt and Geuvers [9, pt. III] develop the correspondence systematically. It bites later in §9: the deduction theorem in the Python toy is a recursive function that transforms proof trees. Under Curry-Howard that function *is* the deduction theorem - its type signature is the theorem's statement, and the kernel's re-check plays the role of the compiler's type check.

## 5.4 Gödel's Incompleteness Theorems

Two limiting results constrain every sufficiently expressive formal system. Gödel's *first incompleteness theorem*: any consistent formal system capable of encoding Peano arithmetic contains true statements it cannot prove. His *second* goes further: such a system cannot prove its own consistency from within. Mendelson [4, ch. 3] gives the accessible textbook treatment; Paulson [3] provides the first complete Isabelle/HOL formalisation, stated over hereditarily finite sets rather than Peano arithmetic to keep the syntactic coding manageable.

The practical consequence for proof assistants is concrete. Every kernel sits on a trusted computing base - its own implementation, the host-language compiler, the machine - and cannot prove its own correctness from inside. Confidence comes from the base being small, auditable, and stable. Hence the *de Bruijn criterion*: a proof assistant is trustworthy if its kernel is small enough for a careful reader to audit by hand. Lean 4's kernel sits at ~6,000 lines of C++; the toy in §8 has a 96-line Python kernel re-verified after every transformer's output, making the trust chain explicit.

-12.4 returns to this: Gödel does not let any system escape incompleteness, but a small kernel relocates trust from a distributed social process to a centralised auditable artefact - the same move programming made when it stopped trusting "it compiles" and started trusting "it compiles, the tests pass, CI is green".

## 5.5 A Short History of Proof Assistants

The line from idea to industrial artefact runs roughly: de Bruijn's Automath (1967), the first proof-assistant-like system, pioneering explicit proof terms and a checker distinct from any tactic engine; LCF (Milner, 1972), introducing the *tactic*/*goal* metaphor and the meta-language (ML) from which OCaml descends; HOL (Gordon, 1980s), a classical higher-order-logic system; Coq (1989), CIC-based and the reference for formalised mathematics for three decades; Isabelle/HOL, pairing higher-order logic with the Isar structured-proof language; and Lean (de Moura 2013; Lean 4, 2021), a CIC-based newcomer whose mathlib library is now the centre of gravity for contemporary formalised mathematics [2].

Two design families emerge. One, descended from Automath and Coq, sits on dependent type theory: Coq, Lean, Agda. The other, descended from LCF and HOL, sits on higher-order logic: HOL Light, Isabelle/HOL. PVS sits slightly outside this taxonomy - classical HOL-family, but with an industrial-verification heritage that gave it NASA flight-system certification work. This project's hands-on scope is the dependent-type-theory family (Lean 4 plus the toy); §6 draws on the wider ecosystem from the literature to calibrate later comparison.
