# Case Studies: Formal Methods at Work

Five landmark formalisations, chosen to span tools (Coq, Isabelle/HOL, Lean 4, CSP/FDR), eras (1995-2024), and purposes (pure mathematics, foundational logic, security-protocol verification). Each case is presented with the same shape: claim, formalisation details, what it demonstrates for the report's thesis. Full reading notes back these summaries in `project/reading notes/case studies/`.

The order is deliberate. §7.1 (Feit-Thompson) and §7.2 (Four Colour) bracket the cost spectrum of formalisation. §7.3 (Gödel) shows the meta-level reach. §7.4 (PFR) is the AI-era exemplar that §4 set up. §7.5 (Needham-Schroeder) closes with the falsification case - where formal methods caught what peer review had missed for seventeen years.

## 7.1 The Feit-Thompson Odd Order Theorem [7]

Feit-Thompson (1963) states that every finite group of odd order is solvable - a 255-page argument that anchors the classification of finite simple groups. Between 2006 and 2012, a Microsoft Research / INRIA team led by Georges Gonthier produced a machine-checked Coq proof, using Ssreflect and the Mathematical Components library they developed in parallel. The final artefact runs **~150,000 lines**, **~4,000 definitions**, **~13,000 lemmas**, across roughly **six person-years**.

The verification's reach goes beyond "the original was correct". The formalisation *reorganised* the classification infrastructure - character theory, local analysis, the structure of minimal simple groups - exposing dependencies between chapters of the informal proof that had been implicit. No substantive mathematical error surfaced in the 1963 original, which at this length is itself a substantive finding under the §3 frame. For §12's cost-benefit argument, the case shows the scale of library investment: the 150,000-line figure is not the cost of the proof, it is the proof *plus* the Mathematical Components infrastructure that lets the proof be stated at all.

## 7.2 The Four Colour Theorem [8]

Appel and Haken's 1976 proof that every planar map can be four-coloured was the first major computer-assisted proof, and immediately controversial: the case-analysis component (roughly 1,500 configurations) could not be checked by hand. Gonthier's Coq formalisation, completed around 2005 and published in the Handbook of Logic volume cited, discharges both the combinatorial case analysis and the surrounding mathematics as checked Coq proofs, in roughly **60,000 lines**.

The formalisation closes the epistemic loop Appel and Haken opened: a computer-assisted proof can itself be verified by another computer system, with a far smaller trusted base than the original C implementation. For proofs whose shape is "check these many cases", the marginal cost of formalisation, once the mathematical framework is in place, is near-zero - the case analysis becomes a decidable computation the kernel evaluates. This contrasts sharply with Feit-Thompson, where the proof's mathematical depth dominated. Together the two Coq verifications bracket the cost spectrum: mechanical case enumeration at the cheap end, structural mathematical argument at the expensive end.

## 7.3 Gödel's Incompleteness Theorems, Formalised [3]

Paulson's 2014 Isabelle/HOL formalisation is the first complete machine-checked proof of both of Gödel's incompleteness theorems, stated over hereditarily finite sets rather than Peano arithmetic. The ambient-theory choice simplifies the coding of syntax while keeping the results substantively equivalent: any Gödelian coding of arithmetic interprets into the theory of hereditarily finite sets.

What the formalisation surfaced is subtler than a bug hunt. Traditional informal treatments lean on assumptions about syntactic substitution that are rarely made fully explicit; the formalisation has no choice but to discharge them, and so makes them visible. The result also shows that proof assistants do not collapse at the meta-level: theorems *about* the limits of formal systems are themselves formally checkable. This is the case that prevents §12.4's Gödel caveat from being read as a defeat - no consistent system proves its own consistency, but a small auditable kernel captures the practical benefit without needing the theoretical impossibility.

## 7.4 The PFR Conjecture in Lean 4 [10]

Marton's Polynomial Freiman-Ruzsa conjecture was resolved by Tao, Gowers, Green, and Manners in late 2023. Within **three weeks** of the preprint, a Tao-coordinated community effort had formalised the complete proof in Lean 4 [10], via a *blueprint* methodology: the paper is decomposed in advance into a dependency graph of lemmas, each annotated with its proof sketch, and individual contributors discharge them in parallel with mathlib-scale automation behind them. Some lemmas were filled in with explicit AI assistance.

This is the case that connects most directly to §4's AI inflection. Two observations fall out. First, Lean 4 plus mathlib is mature enough to track active research in real time: Feit-Thompson took six years, Four Colour took several, Gödel took Paulson's career attention, PFR took three weeks. Second, the blueprint methodology is itself reusable infrastructure - it changes what "formalise a proof" means operationally, from one author's multi-year project to a distributed effort measured in weeks. PFR is the strongest argument among the five case studies that formal methods have crossed a threshold from specialist rigour-enhancement to everyday mathematical infrastructure. §12 returns to it as the per-commit-CI shift transposed to mathematics.

## 7.5 Needham-Schroeder And Formal Protocol Verification [11], [12]

The Needham-Schroeder public-key protocol (1978) was accepted as secure for seventeen years until Lowe's 1995 CSP+FDR analysis produced an explicit man-in-the-middle attack trace [11]. Lowe's paper presents both the attack and a small repair (adding the responder's identity to the second protocol message). Smyth's PhD thesis [12] generalises the methodology into a Dolev-Yao framework and surveys the wider cryptographic-protocol verification literature.

This is the only case study where the original was *wrong*, and the formal method's contribution was to *falsify* rather than re-verify. The seventeen-year gap matters for the headline question: in safety-critical or security-critical settings, the cost of missing the kind of error informal peer review let through for two decades is not a rounding error. This sets up §12.1's industrial-axis argument: Intel FDIV ($475M correction cost), AWS's TLA+ and model checking for core S3 storage, NASA's PVS for flight-system certification - all point the same way. Where mistakes are expensive and errors accumulate, formal verification is not a tax but an insurance premium.

## 7.6 Scale Comparison

The five cases span tool, era, and kind-of-finding. The table below summarises; full entries live in `project/reading notes/case studies/`.

| Result                  | Year    | Tool                | Size (LoC)      | Effort                            | Kind of finding                |
|-------------------------|---------|---------------------|-----------------|-----------------------------------|--------------------------------|
| Feit-Thompson Odd Order | 2012    | Coq / Ssreflect     | ~150,000        | ~6 person-years                   | Re-verification at scale       |
| Four Colour Theorem     | ~2005   | Coq                 | ~60,000         | multi-year                        | Closed the Appel-Haken loop    |
| Gödel incompleteness    | 2014    | Isabelle/HOL        | several kLoC    | single-person, months             | Surfaced informal subtleties   |
| PFR conjecture          | 2024    | Lean 4 + blueprint  | (distributed)   | ~3 weeks (dozens of contributors) | Real-time formalisation        |
| Needham-Schroeder       | 1995    | CSP + FDR           | small           | short                             | Falsified a 17-year-old result |
