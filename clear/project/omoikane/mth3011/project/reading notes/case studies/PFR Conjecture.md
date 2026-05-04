# PFR Conjecture

## Citation

Tao, T., Gowers, T., Green, B., & Manners, F. (2024). *Marton's Polynomial Freiman–Ruzsa Conjecture*, preprint. Lean 4 formalisation at <https://teorth.github.io/pfr/>. IEEE reference [10].

## Claim of the Paper

Marton's Polynomial Freiman–Ruzsa (PFR) conjecture concerns the structure of subsets of `F₂ⁿ` with small doubling: if `|A + A| ≤ K|A|`, then `A` is contained in a coset of a subgroup of `F₂ⁿ` whose size is polynomial in `K`. The conjecture had been open for two decades; Tao, Gowers, Green, and Manners resolved it in late 2023. Within approximately **three weeks** of the preprint appearing, a community effort coordinated by Tao had formalised the complete proof in Lean 4, making it by some margin the fastest "paper-to-verified" turnaround in modern formalised mathematics.

## Formalisation Details

- **Tool:** Lean 4 with mathlib.
- **Scale:** tens of thousands of lines; dependency graph traceable on the blueprint website.
- **Effort:** distributed across approximately twenty contributors over three weeks, rather than a single-author multi-year project.
- **Completion year:** 2023–2024.
- **Technique - the "blueprint" methodology.** The paper is decomposed in advance into an annotated dependency graph of lemmas, each one listed with a proof sketch. Contributors claim individual lemmas and discharge them in parallel, with mathlib-scale automation backing them. This is *not* a Lean feature per se; it is a workflow that happens to be enabled by Lean plus mathlib's maturity.

## What It Demonstrates for My Project

Three related observations feeding §§3 and 8:

1. **Formalisation has crossed a threshold from specialist add-on to real-time mathematical infrastructure.** Feit–Thompson took six years; Four Colour took several; Paulson's Gödel took months of focused work. PFR took three weeks. The qualitative change is not the speed but the *parallelism*: a blueprint decomposition turns a single-author project into a distributed one.
2. **Lean 4 plus mathlib is mature enough to track active research** - not just consolidate settled mathematics. For §3.2's Lean-specific argument, PFR is the single strongest evidence.
3. **The cost-benefit equation has shifted.** The "formal methods are slow" objection that was once decisive against formalising an active research result is no longer defensible post-PFR. This is a durable change, and §8's headline-question answer leans on it.

## Citable: yes

All four authors are Fields-medal-level or Fields-medal-adjacent professional mathematicians; the blueprint website and Lean repository are directly cite-able; Tao's blog and ZIPs on arxiv are downstream sources where needed. Fits Yuri's source-reliability bar.

## Quotes & Page References

- The blueprint graph itself is the single most-quotable artefact: a visible, navigable map of the proof's lemma dependencies.
- Tao's blog posts (What's New, 2023-12) frame the three-week turnaround as a surprise even to the authors.
