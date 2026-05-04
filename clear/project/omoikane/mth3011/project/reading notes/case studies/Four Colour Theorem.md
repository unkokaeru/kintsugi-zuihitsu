# Four Colour Theorem

## Citation

Gonthier, G. (2012). *A Computer-Checked Proof of the Four Colour Theorem*, in *Handbook of the History of Logic, Vol. 9: Computational Logic*, Elsevier. IEEE reference [8].

## Claim of the Paper

Appel and Haken's 1976 proof that every planar map can be four-coloured was the first major computer-assisted proof in modern mathematics, and immediately controversial - the case-analysis component (roughly 1,500 reducible configurations, checked by a bespoke C program) was not humanly auditable. Gonthier's Coq formalisation, completed around 2005 and published in the Handbook volume cited, discharges *both* the combinatorial case analysis *and* the mathematical reasoning around it as formally checked Coq proofs.

## Formalisation Details

- **Tool:** Coq.
- **Scale:** approximately 60,000 lines of Coq code.
- **Effort:** multi-year project led by Gonthier, with substantial supporting infrastructure.
- **Completion:** circa 2005 (Handbook publication 2012).
- **Key technique:** the case analysis is encoded as a decidable computation the Coq kernel evaluates directly, so the "1,500 configurations" step of Appel–Haken becomes a kernel-level reduction rather than an unauditable external program.

## What It Demonstrates for My Project

For proofs whose shape is "check these many cases", formal methods' overhead is near-free once the mathematical framework is in place - the case-analysis step becomes a decidable computation the kernel evaluates. Contrast with Feit–Thompson, where the proof's mathematical depth dominates. Together these two Coq verifications bracket the cost spectrum of formalisation: mechanical case enumeration at the cheap end, structural mathematical argument at the expensive end. This distinction feeds §8's overhead-justified-or-not argument.

It also closes the epistemic loop that Appel–Haken opened: a computer-assisted proof can itself be verified by a different computer system, with a much smaller trusted base than the original's C implementation.

## Citable: yes

Author (Gonthier) holds a PhD and is a senior researcher at Microsoft Research; published in a respected Elsevier volume (Handbook of the History of Logic). Fits Yuri's source-reliability bar.

## Quotes & Page References

- Opening: Gonthier positions the formalisation as a response to the "not humanly auditable" objection to Appel–Haken.
- §3: the `reflect` / `move=>` Ssreflect idioms used throughout; common with the Feit–Thompson work.
