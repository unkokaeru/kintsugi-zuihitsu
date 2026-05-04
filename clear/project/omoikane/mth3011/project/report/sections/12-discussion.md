# Discussion: The Unit-Test Analogy Returns

The report opened with a programmer's response to errors - layers - and a claim that mathematics is now in the position programming was in around 1990. Six chapters of evidence later, the analogy can carry weight beyond rhetoric.

## 12.1 Where Formal Proofs Earn Their Cost

Three settings recur across the case studies and the project's own formalisations. In each, formal methods pay for their cost in a way informal methods cannot.

**Safety- and security-critical systems.** Lowe's 1995 analysis caught what informal peer review had missed in Needham-Schroeder for seventeen years [11]; Smyth [12] surveys the family of cryptographic-protocol verifications built on the same methodology. The Intel Pentium FDIV bug ($475 million correction cost), AWS's TLA+ usage on core S3 storage, and NASA's PVS-based flight-system certification each point the same direction. When an undetected error accumulates losses in the millions or risks human lives, formal verification stops being a tax and becomes an insurance premium. Programming's analogue is the test budget on a high-availability service: nobody complains about the cost when the alternative is downtime.

**Frontier research mathematics.** The PFR formalisation [10] is the case that argues most strongly for a regime change. Three weeks from preprint to complete mechanical verification, coordinated across dozens of contributors via Tao's blueprint methodology, was not possible in Gonthier's Coq era; it became possible only once Lean 4 plus mathlib reached the scale they had in 2023-2024. The relevant comparison is the speed at which programming's CI pipelines went from overnight builds to per-commit checks - an order-of-magnitude shift in feedback loop that changed what kinds of work were tractable. PFR is the same shift for proof verification.

**Pedagogy.** Building the toy assistant shifted my understanding of how proof assistants work more than the preceding six months of reading had. The shift is specifically about the kernel: a kernel is the easiest component to describe in prose (a few rules, a `match` statement) and the hardest to internalise without building one, because the design choices - how proof objects are represented, how contexts thread through modus ponens, where exhaustiveness is enforced - only become questions when you have to answer them. §8's tutorial framing aims to give the reader some of the same shift without requiring a parallel implementation. The evidence for it is anecdotal, but the anecdote is consistent.

## 12.2 Where the Overhead Is Not Justified

Two cases stand out where the analogy breaks the other way.

**Routine proof reproduction.** Reproducing a standard Lean proof in a thesis chapter, without a pedagogical point to make, adds pages but not rigour. The supervisor's 2026-03-04 email flagged exactly this: "if you reproduce some particular (existing) Lean proof in the thesis without clear purpose, this wouldn't count towards your actual work." The principle generalises - re-typesetting an existing formalisation treats the formal artefact as performance, not evidence. Programming has the same antipattern in copy-pasted test suites that re-cover already-covered code.

**Over-tooling a small target.** §7's scale table runs from "Needham-Schroeder, CSP + FDR, small, quick" to "Feit-Thompson, Coq + Ssreflect, 150,000 lines, six person-years". Needham-Schroeder is a model-checking problem, not a theorem-proving one, and a dependent-type-theory system would add overhead without rigour gain. For propositional theorems at undergraduate scale, even Lean plus mathlib can be over-tooling: the toy matched Lean's line count on both shortlisted theorems while exposing every step of the trust chain to direct audit. Right-sizing tool to target is a real engineering question, not a solved one. Programming's analogue is the perennial debate over end-to-end testing for a CRUD app.

## 12.3 The AI Thread Reconsidered

§1 framed AI as the inflection forcing the formalisation question now. Three observations follow from §§8-11 that would not have surfaced from a Lean-only project.

First, the toy's proof objects are emit-friendly for language models in a way Lean's tactic scripts are not. Tactic scripts depend on Lean's elaborator state, implicit-argument resolution, and goal-directed metaprogramming - all of which an LLM has to model in its head to produce a script that compiles. The toy's proofs are literal dataclass values: each `Proof` is a tree of named records with an explicit context. A model that emits `AxiomA1(ctx=…, a=…, b=…)` is making a claim the kernel can check in 96 lines of Python. The transparency cuts in the model's favour as much as the human auditor's.

Second, the kernel re-check discipline is what AI-in-the-loop formalisation needs. PFR's blueprint methodology already relies on it implicitly: contributors discharge lemmas in parallel, and Lean's kernel certifies each before it lands. A toy-style kernel makes the discipline explicit. If a model proposes a proof, the kernel either accepts it or rejects it, and the rejection points at the failed rule. There is no slow-burn debate about correctness; the verdict is binary and immediate. This is the property programming's CI gives a pull request, ported to a proof.

Third, the size overlap between the Python and Lean formalisations of these two theorems - within a few percent on each, not orders of magnitude - is a stronger finding than expected. The industrial tool does not pay a size tax for proofs of this complexity; its overhead lives in toolchain setup and library scale, not per-theorem verbosity. For the AI-in-mathematics conversation this matters: if size is comparable, the case for the more transparent tool is harder to dismiss when the candidate proof came from a language model the reviewer cannot directly query.

## 12.4 The Gödel Caveat

Gödel's second incompleteness theorem [3, 4] keeps a permanent boundary in place: no consistent formal system powerful enough to encode arithmetic can prove its own consistency. Practically, every proof assistant sits on a trusted base it cannot verify from inside - kernel source, host-language compiler, operating system, hardware.

The project makes the size of that base concrete. The toy's kernel is 96 lines of Python; the rest of the trust chain is CPython (millions of lines, but widely audited) and the operating system. Lean's kernel is around 6,000 lines of C++; the remaining chain is the C++ compiler and the operating system. Neither is obviously safer, and both are small compared to "the traditional peer-review pipeline", which includes every human reader of the literature. The practical reply to Gödel is not that proof assistants escape incompleteness - they do not - but that they relocate trust from a distributed social process to a centralised, small, auditable artefact. Knight Capital's $440M loss did not happen because nobody had a theory of correctness; it happened because the theory was distributed across people who did not all share state. The kernel concentrates state.

## 12.5 Limitations

Four bounds readers should know.

**Scope.** Two theorems, both propositional. Nothing here is evidence about how first-order or dependently-typed formalisations compare between Lean and a toy, because the toy cannot express them.

**Time.** The comparative-analysis window was short. A longer run would have proven more theorems, widened the toy to first-order, and added Coq for a three-cornered comparison.

**Tool coverage.** Hands-on scope is Lean 4 plus the Python toy. §6's ecosystem discussion is from the literature; claims about Coq, Agda, Isabelle/HOL, and PVS are not backed by my own formalisation experience. §12.1's industrial-axis argument leans on Lowe [11], Smyth [12], and the literature on AWS / NASA, not first-hand industry exposure.

**Mathematical sophistication.** Neither theorem is mathematically deep. The argument here rests on the *comparison* between tools on these theorems, not on the theorems' content.

## 12.6 Future Directions

Four follow-ups would deepen the work.

1. **Widen the toy to first-order + naturals.** Unlocks classical number-theoretic targets (Euclid's infinitude of primes, irrationality of √2). The kernel grows by ~200 lines; the interesting work is the substitution-safe quantifier rule and the corresponding proof-object variant.
2. **Add a tactic layer.** An Ltac-style combinator language above the kernel lets users write proofs as scripts rather than literal values. The kernel's strict re-check discipline keeps the implementation direct: tactics produce proof objects, the kernel re-verifies.
3. **Verify the toy's kernel in Lean.** 96 lines is small enough to state and prove kernel correctness in Lean against a formal model of the same Hilbert calculus. Self-referential but bounded, and the result is a Lean-backed correctness guarantee for the toy.
4. **AI-assisted proof discovery on the toy.** PFR explored Lean-with-AI [10]; an analogous experiment in the toy would be smaller and more controlled. The toy's proof objects are easier for a language model to emit correctly than Lean's tactic scripts because every step is explicit, which makes the toy a candidate testbed for empirical work on LLM-assisted formalisation. This is the loose end the report most wants pulled.
