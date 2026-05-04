# Reading Notes

Working notes on sources consumed for the project. Everything here feeds into the IEEE-numbered bibliography at [[references]] and the case-study write-ups in [[case studies]].

## Topic Map

A rough dependency order for reading:

1. **Logic** - propositional, first-order, natural deduction, sequent calculus.
2. **Type theory** - simply-typed lambda calculus → dependent types → calculus of inductive constructions.
3. **Curry-Howard correspondence** - propositions as types, proofs as programs.
4. **Proof-assistant architecture** - trusted kernels, elaboration, tactic languages; Lean 4 vs. Coq.
5. **Formalisation case studies** - Feit-Thompson, Four Colour, Gödel, PFR.
6. **Cryptographic & industrial applications** - Needham-Schroeder, Dolev-Yao, Pentium FDIV, AWS, NASA PVS.

## Reading vs. Citing

> Yuri's guidance (see [[supervision]] email archive, 2026-03-04):
>
> Read anything. **Cite only from 100%-reliable sources**: textbooks from trusted publishers, peer-reviewed papers, lecture notes or tech resources produced by mathematicians with doctorates. The `citable?` column below reflects this.

## Source Checklist

| # | Reference | Status | Citable? | Case-study notes |
|---|---|---|---|---|
| [1] | Ayala-Rincón & de Moura, *Applied Logic for Computer Scientists* (Springer, 2017) | Skimmed 2025-11-19; deep-read Dec 2025 | ✓ | Entry point for proof-assistant internals (per supervisor 2025-11-24) |
| [2] | Geuvers, *Proof Assistants: History, Ideas and Future* (Sadhana, 2009) | Read 2025-11 | ✓ | Cited in §03 ecosystem framing |
| [3] | Paulson, *Machine-Assisted Proof of Gödel's Incompleteness Theorems* (2014) | Read 2026-04 | ✓ | [[Gödel Incompleteness Theorems]] |
| [4] | Mendelson, *Introduction to Mathematical Logic*, 6th ed. (CRC Press, 2015) | Skimmed 2025-11-19 | ✓ | Source of A1–A3 axiom presentation used in §05 |
| [5] | de Moura et al., *The Lean Theorem Prover* (CADE-25, 2015) | Read 2026-01 | ✓ | Lean architecture summary in §03.2 |
| [6] | Bertot & Castéran, *Coq'Art* (Springer, 2004) | Skimmed 2025-11-19 | ✓ | Coq comparator in §03.3.1 |
| [7] | Gonthier et al., *Machine-Checked Proof of the Odd Order Theorem* (ITP 2013) | Read 2026-04 | ✓ | [[Feit-Thompson Odd Order Theorem]] |
| [8] | Gonthier, *Computer-Checked Proof of the Four Colour Theorem* (2012) | Read 2026-04 | ✓ | [[Four Colour Theorem]] |
| [9] | Nederpelt & Geuvers, *Type Theory and Formal Proof*, 2nd ed. (CUP, 2023) | Skimmed 2025-11-19; deep-read Dec 2025 | ✓ | Implementation-flavoured chapters drove the 2026-01 pivot |
| [10] | Tao, Gowers, Green, Manners, PFR preprint + Lean formalisation (2024) | Read 2026-04 | ✓ | [[PFR Conjecture]] |
| [11] | Lowe, *Breaking and Fixing Needham-Schroeder* (TACAS '96) | Read 2026-04 | ✓ | [[Needham-Schroeder Protocol]] |
| [12] | Smyth, *Formal Verification of Cryptographic Protocols* (PhD, 2011) | Skimmed (ch. 2) 2026-04 | ✓ | Dolev-Yao framing for §04.5 |
| [13] | Pierce, *Types and Programming Languages* (MIT Press, 2002) | Skimmed 2026-04 | ✓ | Cited in §06.2 language-choice rationale |
| [14] | Harper, *Practical Foundations for Programming Languages*, 2nd ed. (CUP, 2016) | Skimmed 2026-04 | ✓ | Operational-semantics framing for §02.2 kernels |

## Working Method

- Rank by accessibility: easiest → hardest (or by specialism) - see logbook practice in [[project]].
- Underline ≤10% of the logbook; distinguish direct quotes from paraphrase.
- Record page numbers for every quote.
- Meta-think: what's not justified, what are the limitations, what connects to other topics.
- Cross-reference into [[case studies]] where a source covers a landmark proof.
