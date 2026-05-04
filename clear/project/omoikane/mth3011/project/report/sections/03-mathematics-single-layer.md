# One Layer of Defence: How Mathematics Has Done It

Mathematics has, for most of its history, had one layer in the §2 sense. A proof is written; one or two referees read it; the journal accepts or rejects; the result enters the literature. The next reader is trusted to catch any further errors, and so is the reader after that. There is no analogue of types, no analogue of CI, no analogue of fuzzing. Peer review and downstream attention together carry the entire weight of trust.

This worked for a long time. Pre-twentieth-century mathematics was largely human-scaled: proofs fit in journals, journals fit in libraries, and a competent reader could verify a result in a sitting or two. The handful of famous nineteenth-century controversies - Kempe's 1879 four-colour proof, with a flaw spotted by Heawood eleven years later; Russell's paradox in Frege's formal arithmetic, surfaced just as Frege was finishing the second volume of *Grundgesetze* - were exceptions sufficient to clarify the rule. The system caught its own mistakes, eventually.

Three things have changed since.

## 3.1 Scale

The Feit-Thompson theorem [7] runs to 255 pages of dense character theory; the classification of finite simple groups, which Feit-Thompson supports, runs to tens of thousands of pages distributed across hundreds of papers and several decades of work. No individual reads such an artefact carefully. The community trusts that the relevant experts have read the relevant pieces, and the community is right often enough that the system has not collapsed. But errors do hide. Aschbacher and Smith's 2004 update to the classification was, in part, a response to a gap that turned out to be present in the original chain. The Feit-Thompson formalisation in Coq [7] - six person-years, 150,000 lines of proof code - found no substantive error in the 1963 original, but the absence of an error at that scale is itself a substantive finding, not a default.

## 3.2 Specialisation

Modern mathematics has the same fragmentation problem as modern software. Specialists in one subfield cannot, in practice, audit specialists in an adjacent one. Wiles' first announcement of the Fermat's Last Theorem proof in 1993 contained a gap that even his immediate collaborators did not catch immediately; it took Richard Taylor's joint work to repair, and the eventual 1994 proof is the one that entered the canon. The error existed because the level of specialisation had outpaced the audit network. The community pulled through, but it pulled through on the strength of the result's profile - a less famous gap might still be there.

## 3.3 Speed

The pace at which results enter the literature has accelerated, and the pace of careful audit has not. Mochizuki's Inter-Universal Teichmüller Theory papers, claiming a proof of the abc conjecture, were uploaded in 2012; the mathematical community remains divided in 2026 on whether the proof is valid. The status quo is "we cannot tell, and we have not had the bandwidth to find out". A field where this is the equilibrium is a field where the trust pipeline is overloaded.

The Needham-Schroeder protocol [11] is the cleanest case study of all three pressures interacting at once. Published in 1978, accepted as secure for seventeen years, broken by Lowe's formal analysis in 1995. The protocol was specialist enough that the cryptographers reading it took the security argument on the strength of the rationale; the result was important enough to be widely cited and built on; the field moved fast enough that nobody re-audited until Lowe arrived with FDR and a different tool. One layer of defence missed an error that compromised seventeen years of downstream work.

## 3.4 What Mathematics Has Tried

The community is not unaware of the problem. Bourbaki's project to re-found mathematics on rigorous set-theoretic foundations was, in part, an attempt to add a missing layer. So was Hilbert's programme. So is the long-running formalisation push that Geuvers [2] surveys from Automath in 1967 forward.

What proof assistants offer that the earlier projects could not is mechanisation. A Bourbaki-style foundational rewrite improves the *legibility* of mathematical practice without adding a mechanical check; the layer remains human. A formalised proof has been checked, line by line, by a small kernel that does not get tired, does not skim, and does not assume that the previous step was probably right because the author is reputable. This is the layer mathematics has been missing. It is the same layer programming added in the form of compilers and CI.

-4 takes up the AI inflection that has changed the cost-benefit calculus on installing the layer now, rather than at some indefinite future point.
