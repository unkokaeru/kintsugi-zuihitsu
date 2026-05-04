# Feit-Thompson Odd Order Theorem

## Citation

Gonthier, G., Asperti, A., Avigad, J., Bertot, Y., Cohen, C., Garillot, F., Le Roux, S., Mahboubi, A., O'Connor, R., Ould Biha, S., Pasca, I., Rideau, L., Solovyev, A., Tassi, E., & Théry, L. (2012). *A Machine-Checked Proof of the Odd Order Theorem*, in *Interactive Theorem Proving (ITP 2013)*, LNCS 7998. IEEE reference [7].

## Claim of the Paper

The original Feit–Thompson theorem (Feit and Thompson, 1963) states that every finite group of odd order is solvable - the single result that anchors the classification of finite simple groups. The original proof runs to 255 pages in the *Pacific Journal of Mathematics* and pulls in character theory, local analysis, and the structure theory of minimal simple groups. Gonthier and his Microsoft Research / INRIA team produced the first complete machine-checked verification in Coq, published in 2012 after approximately six person-years of work beginning in 2006.

## Formalisation Details

- **Tool:** Coq with Ssreflect tactic language.
- **Scale:** approximately 150,000 lines of code, ~4,000 definitions, ~13,000 lemmas.
- **Effort:** ~6 person-years of concerted effort; a team of 15 authors listed.
- **Completion year:** 2012 (ITP 2013 publication).
- **Architectural choice:** the formalisation co-developed the *Mathematical Components* library, which has since become Coq's principal mathematical library. Ssreflect - Gonthier's tactic-language extension to Coq, with its distinctive `/` and `;` reflection idioms - was essential for managing the proof's scale.

## What It Demonstrates for My Project

Formal methods scale to proofs the size of a mathematical textbook, but only with heavy library investment. The 150,000-line figure is not the cost of the proof; it is the cost of the proof *plus* the cost of building the Mathematical Components library in which the proof can even be stated. This bracketing matters for §8's cost-benefit argument.

Equally important for pedagogy: the formalisation effort did *not* find a substantive error in the 1963 original. This is itself a finding. A result of this size being correct is not default - the presumption going in, from the proof-assistant community's perspective, was that a subtle error might well be lurking.

## Citable: yes

All 15 authors hold doctorates or professional research positions in mathematics or computer science (Microsoft Research, INRIA). Peer-reviewed ITP conference proceeding (LNCS 7998). Fits Yuri's source-reliability bar (2026-03-04 email).

## Quotes & Page References

- Page 2: "The formalisation is striking not primarily for its length (…) but for the depth of the mathematical infrastructure it required."
- Abstract: positions the Mathematical Components library as a co-deliverable.
- §2.1: the Ssreflect boolean-reflection methodology, adopted throughout the proof.
