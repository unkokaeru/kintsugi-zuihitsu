# The Proof-Assistant Ecosystem

§5 gave the formal machinery; §6 surveys the tools that implement it. Two parts: Lean 4 in depth, because the project uses it hands-on, and the wider ecosystem in outline, because any serious answer to "where do formal methods matter?" has to acknowledge that different communities have chosen different tools.

## 6.1 What a Proof Assistant Is

A modern proof assistant decomposes into four components. The *trusted kernel*: a small type-checker that accepts or rejects fully-elaborated proof terms. This is the only part whose correctness matters for soundness, and it is kept small enough to audit - Lean 4 sits at ~6,000 lines of C++, Coq at a similar size. The *elaborator*: the bridge between what the user writes (concise, full of implicit arguments, typeclass resolution, and notation) and what the kernel sees (fully explicit core-logic terms). The *tactic language*: a metaprogramming layer for proof scripts, combining primitive tactics into larger procedures. The *library*: the accumulated corpus of formalised results on which new work builds.

The *de Bruijn criterion* [2] captures the design philosophy: trust is concentrated in the kernel, and anything produced outside it - by a tactic, by automation, by an external tool, by an LLM - must be re-checked there before counting. §8's toy follows this explicitly: every proof produced by the transformers in `formal_toy/theorems/` is re-verified by `formal_toy.kernel.check` before the toy accepts it. This is the same pattern as a CI pipeline that re-builds and re-tests every commit, regardless of how confident the author was.

## 6.2 Lean 4

Lean 4 [5] is a dependent-type-theory proof assistant developed by Leonardo de Moura and collaborators, in its current form from 2021. Its foundational theory is the Calculus of Inductive Constructions with a cumulative universe hierarchy, and its kernel size sits in line with Coq's.

Three design decisions distinguish Lean 4. First, the kernel is small and the elaborator does the heavy lifting - implicit arguments, typeclass resolution, and unification all happen at elaboration time, leaving the kernel a fully-explicit core term to type-check. Second, tactics are first-class Lean functions: macros and metaprograms are written in the same language as the object logic, collapsing the conceptual distance between "proof" and "code that produces a proof". Third, mathlib, the community library, reached roughly 1.5 million lines of formalised mathematics by late 2025, unified under a single coherent namespace rather than federated across contributor-maintained repositories in the style of Coq's AFP.

Lean 4's VS Code integration is strong: the InfoView panel renders the current proof state in real time as the cursor moves, enabling *hole-driven development* - alternating between partial proofs with `sorry` or named holes and inspecting what remains. Automation tactics like `exact?`, `polyrith`, `decide`, and `omega` dispatch common goal shapes unaided; routine parts of a proof compress from dozens of lines to single calls.

The most visible recent demonstration of Lean 4's maturity is the formalisation of Marton's Polynomial Freiman-Ruzsa conjecture [10], completed by a Tao-coordinated community effort within three weeks of the paper's release. The "blueprint" methodology used there - an annotated dependency graph of the paper's lemmas, parallelised across dozens of contributors - is itself reusable infrastructure, and §7.4 returns to it as the case study most directly tied to §4's AI thread.

## 6.3 Ecosystem

The tools below are drawn from the literature, not direct experience: hands-on scope is Lean 4 plus the Python toy. What §6.3 records is the calibration needed to place Lean alongside its neighbours and to argue in §11 and §12 about what the "proof assistant" category spans.

### 6.3.1 Coq

Coq [6] is the elder statesman: a CIC-based system developed at INRIA since 1989, behind most of the landmark twentieth-century formalisations (Feit-Thompson [7], Four Colour Theorem [8], CompCert). Its core tactic languages are Ltac (dynamically typed, untyped metaprogramming) and the newer statically-typed Ltac2. Ssreflect, the tactic language Gonthier and collaborators built for the Feit-Thompson effort, is in practice a third dialect, with a style optimised for large algebraic proofs. Mathematical Components is Coq's principal mathematics corpus; it is less unified than Lean's mathlib, with a long history of contributor-specific extensions.

### 6.3.2 Agda

Agda is a dependent-type-theory system with an ML-style syntax and a strong "programming by holes" culture - proof development as iteratively refining the holes in a partial term. Library coverage trails Lean's and Coq's, and automation is less developed; Agda's traction is pedagogical and inside type-theory research (homotopy type theory among others). This project encountered Agda only via the literature and would not reach for it without a specific pedagogical reason.

### 6.3.3 Isabelle/HOL

Isabelle/HOL leaves the dependent-type-theory family for classical higher-order logic. This makes everyday mathematical reasoning - which routinely invokes the law of excluded middle - more idiomatic than in Lean or Coq, where classical steps have to be opted into explicitly. Its Isar structured-proof language reads more like human-written prose than a tactic script, which suits longer mathematical arguments; the Archive of Formal Proofs (AFP) has accumulated over a thousand formalisations in this style. Paulson's mechanisation of Gödel's incompleteness theorems [3] is the canonical demonstration of its metamathematical reach. Sledgehammer - Isabelle's external-ATP integration that dispatches goals to E, Vampire, Z3, and others and backtranslates successful proofs - is a productivity multiplier without a direct Lean equivalent.

### 6.3.4 PVS

PVS belongs to a different tradition: industrial safety-critical verification, not research mathematics. Its headline users are NASA (flight-system certification), SRI, and a handful of aerospace and defence contractors. The logic is classical HOL with subtyping; the community is small; the tooling is commercial in flavour. PVS is in this survey because §1's Knight-Capital framing has an industrial axis that the research-maths systems do not touch, and PVS is where that axis mostly lives.

## 6.4 Is There "One Good Assistant"?

No single tool dominates every axis. Lean wins on research-mathematics momentum, community activity, mathlib's breadth, and tactic-style readability; against it, Lean is the youngest of the major systems, the version-to-version breaking changes across 2021-2024 reflect that, and industrial uptake trails the older tools. Coq wins on long-term stability, the proven record on landmark verifications, and tighter OCaml-ecosystem integration; against it, library fragmentation and a steeper tactic learning curve. Agda wins on pedagogy. Isabelle/HOL wins on the ergonomics of classical proofs. PVS wins where a specific industrial regulator expects it.

For a project asking where formal methods matter, this matters: the answer depends on which community is being asked. Research mathematics today is making the case for Lean; industrial verification is making the case for Coq, Isabelle, or PVS depending on the domain; nobody is making the case that one tool should serve every use. §12 returns to this when separating "where formal proofs earn their cost" from "where they over-tool the target".
