# Gödel Incompleteness Theorems

## Citation

Paulson, L. C. (2014). *A Machine-Assisted Proof of Gödel's Incompleteness Theorems for the Theory of Hereditarily Finite Sets*, *Review of Symbolic Logic*, vol. 7, no. 3, pp. 484–498. IEEE reference [3].

## Claim of the Paper

Gödel's first incompleteness theorem (1931) states that any consistent formal system capable of expressing elementary arithmetic contains a true sentence it cannot prove. His second goes further: such a system cannot prove its own consistency from within itself. Paulson's 2014 Isabelle/HOL formalisation is the first complete machine-checked proof of *both* theorems - including the self-referential second theorem - stated over hereditarily finite sets rather than Peano arithmetic. The choice of ambient theory simplifies the syntactic coding (substitution, Gödel numbering) while keeping the results substantively equivalent: any Gödelian coding of arithmetic interprets into the theory of hereditarily finite sets.

## Formalisation Details

- **Tool:** Isabelle/HOL.
- **Scale:** several thousand lines of Isar proof.
- **Effort:** single-researcher project over several months; Paulson had prior Isabelle work to draw on.
- **Completion year:** 2014.
- **Technique:** hereditarily finite sets as the ambient theory. Syntax and substitution defined inductively over hereditarily finite sets; provability is a corresponding inductive predicate; Gödel's fixed-point lemma is proved at the meta-level using a diagonalisation construction over the formalised syntax.

## What It Demonstrates for My Project

Three takeaways relevant to the headline question:

1. **Meta-level theorems are formally checkable.** Mechanising a theorem *about* the limits of formal systems does not collapse under its own weight - proof assistants can treat syntax, provability, and meta-reasoning as first-class objects.
2. **Informal subtleties surface on mechanisation.** Traditional informal treatments rely on assumptions about syntactic substitution that are rarely made explicit. Paulson's formalisation has no choice but to discharge those assumptions, and in doing so makes them visible.
3. **The Gödel objection is reframed rather than evaded.** No consistent system proves its own consistency - this is what it is. Proof assistants don't escape this; they relocate trust from a distributed social peer-review process to a centralised, auditable kernel. §8's Gödel caveat leans on this reframing.

## Citable: yes

Paulson holds a PhD and is a long-time Cambridge professor; the *Review of Symbolic Logic* is a peer-reviewed ASL journal. Cleanly fits Yuri's reliability bar.

## Quotes & Page References

- Abstract, p. 484: positions the work as the first complete machine-checked proof of both theorems.
- §2 (pp. 486–488): hereditarily finite sets as the alternative to Peano arithmetic; rationale for the choice.
- §5: discussion of subtleties in substitution that the formalisation forced into the open.
