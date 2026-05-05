# 1. Introduction: The Trust Problem

In August 2012, Knight Capital lost $440 million in forty-five minutes. The cause was old code reactivated by a deployment nobody had run in the new configuration. The engineering response was the response engineering always gives to errors of this kind: more tests, stricter types, tighter CI, additional review gates between intent and production. Programming has spent half a century building defence in depth around the fact that humans write buggy code and compilers will run anything that parses.

Mathematics has not, by and large, responded the same way. A proof passes peer review and enters the literature; the next reader is expected to take the chain of reasoning on trust, modulo their own ability to follow it. This worked when proofs fit comfortably in one head. It strains when they do not.

Two episodes make the strain concrete. The Needham-Schroeder public-key protocol was published in 1978 and accepted as secure on its design rationale and the usual peer review; the error went unnoticed for seventeen years, until Gavin Lowe's 1995 formal analysis produced an explicit man-in-the-middle attack [11]. The Feit-Thompson theorem (1963), 255 pages anchoring the classification of finite simple groups [7], had no end-to-end individual verification at all until a Microsoft Research / INRIA team produced a 150,000-line machine-checked proof in 2012 [7]. Between them sits the general claim: when a proof outruns one reviewer's capacity, errors hide for a long time, and the cost of missing them ranges from embarrassment to fatality depending on what the proof underwrites.

A new wrinkle changes the calculus. Large language models now produce both proofs and code at a speed no human reviewer can match, with a failure mode - confident hallucination - that human reviewers are not well calibrated to catch. DeepMind's AlphaProof and AlphaGeometry [15] have reached medal-level performance on Olympiad problems by emitting Lean tactic scripts and re-checking each one. The PFR conjecture's three-week formalisation in Lean 4 [10] is the visible head of the same trend in research mathematics: dozens of contributors decomposed Tao, Gowers, Green, and Manners' preprint into a blueprint of lemmas and discharged them in parallel, sometimes with AI assistance, with each lemma re-checked by Lean's kernel before counting. The kernel is the part of the system that turns "AI suggested a proof" into "the proof checks out". Without something playing that role, AI-in-mathematics is faster peer review with the same single point of failure.

Proof assistants - Lean [5], Coq [6], Isabelle/HOL, Agda, PVS - are mathematics' counterpart to the layers programmers have spent decades building. A small trusted kernel checks each inference rule by rule; everything outside the kernel - a tactic, a piece of automation, an LLM suggestion - has to produce a proof term the kernel will accept. This is what unit tests are to programming, what type checkers are to programming, what CI is to programming, rolled into one binary verdict that the writer cannot fool.

The thesis of this report is that mathematics is now in the position programming was in around 1990. The tools exist. The cost of using them has fallen. The case for adopting them has tipped from "academic rigour" to "infrastructure that catches the kinds of error a human reader misses, especially when the candidate proof came from a language model". Demonstrating this requires more than survey. The report builds a proof assistant from scratch, formalises two theorems inside it, and formalises the same two theorems in industrial-strength Lean 4 for a side-by-side comparison. The build is deliberately small - around 1,000 lines of Python with a 96-line kernel - so that the trusted core is readable in a single sitting. By the end of §8 the reader has, in effect, watched a proof assistant get assembled from first principles.

The two theorems are the **Deduction Theorem** for propositional logic, a metatheorem every undergraduate logic course meets [4], and **Glivenko's theorem** (1929), which states that a propositional formula is classically provable iff its double negation is intuitionistically provable. Between them the project carries one result *about* a proof system and one result *inside* propositional logic; together they exercise a proof-tree representation, a classical-versus-intuitionistic distinction, and a translation between two related calculi.

The central question is unchanged from the project's original framing: *where do formal methods add value, and where do they add overhead without matching rigour gain?* The contribution sharpens the answer in two directions the literature alone cannot. First, the toy makes the trust chain visible at a depth reading Lean's source does not - the kernel really is a hundred lines of Python. Second, the AI angle reframes the cost-benefit calculus: when LLMs are the candidate-proof producers, the value of a kernel re-check rises sharply, and the explicit-everything design of a propositional toy is an asset rather than a limitation.

## Roadmap

-§2-4 set up the framing: programming's defence in depth, mathematics' single layer of peer review, and the AI inflection that ties them together. §5 develops the formal foundations - logic, type theory, Curry-Howard, Gödel's caveat. §6 surveys the proof-assistant ecosystem from the literature. §7 takes five landmark formalisations as evidence: Feit-Thompson [7], Four Colour [8], Paulson's mechanisation of Gödel's incompleteness theorems [3], the PFR conjecture [10], and Needham-Schroeder [11], [12]. §8 builds the toy proof assistant on the page, walking the reader through each design choice as the implementation goes in. §9 uses the toy to formalise the two shortlisted theorems; §10 formalises them again in Lean 4; §11 compares the two side by side. §12 returns to the unit-test analogy with everything assembled, and §13 closes. §14 reproduces the original Research Plan, the full listings, and the commands needed to verify both artefacts independently.

# 2. Defence in Depth: How Programming Earned Trust

The Knight Capital incident from §1 has a closing detail the introduction skipped. The deployment that triggered the loss had passed unit tests, integration tests, and a code review. What got past those layers was a configuration error: a flag named `power-peg` reactivated dormant code on seven of eight production servers. The error was caught not by any of the layers Knight had built but by the trading system running for forty-five minutes before someone could pull the plug.

Programming's response, predictably, was another layer. Industry post-mortems standardised feature flags, gated rollouts, and the "deploy to one server first" pattern Knight's process had skipped. The shape repeats: a class of error gets missed, a new layer of mechanical checking is built, and over time the layers compose into something that catches almost everything. Modern production code typically passes through five or six of them before reaching users.

## 2.1 The Layers

**Types.** The cheapest defence and the first. A Python `int` cannot be passed to a function expecting `str`; a Rust `String` cannot be passed where an `&str` is expected. The check is mechanical, runs at compile time, and rejects whole classes of error before any test runs. Pierce [13] is the canonical reference for the foundational ideas; modern industrial languages have made type systems the first thing a programmer sees and the cheapest thing to satisfy.

**Tests.** Unit tests check individual functions, integration tests check assemblies, end-to-end tests check user-visible flows. The discipline pre-dates types in some communities and post-dates them in others; the consistent shape is the same - an executable assertion the writer cannot fool because it runs against the actual code. Test-driven development, popularised in the late 1990s, made the test the *first* thing written and the implementation the part that follows.

**Continuous integration.** Every commit triggers a fresh build and the full test suite, in a clean environment, on every supported platform. The shift from "pre-release smoke test" to "per-commit verification" was the move that made trunk-based development workable at scale. CI catches integration errors that individual tests miss because individual tests run in isolation and CI runs the whole.

**Review.** Code review remains the layer that catches errors mechanical checks cannot - design issues, security implications, "this works but it is confusing later". Review is human, slow, and expensive, which is why the modern stack puts it last in the chain so reviewers can focus on what mechanical checks cannot reach.

**Fuzzing and property-based testing.** A fuzzer feeds random or constrained-random inputs into a function and looks for crashes, assertion violations, or invariant breaches. Hypothesis-style property testing makes the same idea structured: state the invariant, generate inputs, watch the invariant survive. This catches what unit tests miss because the test author cannot enumerate every possible input.

**Formal verification.** At the safety-critical end, the layers above are insufficient. NASA's PVS verifies flight-control software against a formal specification; AWS uses TLA+ for the consistency properties of S3 storage; CompCert is a C compiler with a Coq-verified front-to-back correctness proof. Formal verification is expensive, but for systems where bugs cost lives, money, or both, the cost is paid.

## 2.2 Why Each Layer Exists

The trajectory is consistent: away from "trust the writer" and towards "let a tool check it". Each layer was added because the previous layers missed something specific.

The Therac-25 incidents (1985-1987) - a radiation-therapy machine whose race-condition bug killed at least three patients with massive overdoses [17] - drove early adoption of safety-case methodology and concurrent-system verification. The Ariane 5 explosion (1996, $370 million destroyed) was a single integer overflow in inertial-reference software reused from Ariane 4 without re-checking the bounds; type-safe arithmetic and explicit-conversion discipline were the response. The Intel Pentium FDIV bug (1994, $475 million correction cost) was a missing entry in a lookup table for floating-point division, which formal hardware verification would have caught and which Intel adopted afterwards. Knight Capital itself joined the list and reshaped deployment practice across the industry.

In each case, an error class got past the existing checks and a mechanical layer was built afterwards to catch the same class next time. The cost-of-failure determined how aggressively the new layer was deployed. For a CRUD app, types and tests are sufficient. For flight software, model checking and formal verification are mandatory.

## 2.3 The Cumulative Effect

By 2026 the cumulative position is straightforward: a working programmer trusts code that has passed through the layers and is wary of code that has not. The trust is not in the writer but in the chain of checks the code went through. A senior engineer reviewing a pull request does not re-derive the correctness of the algorithm; they confirm that types pass, tests are present and meaningful, CI is green, and the design fits the rest of the codebase.

This is the trust model mathematics is missing. Peer review remains the only systematic layer between a proposed proof and the literature, and peer review is - by the lights of the programming model - one layer where six or seven would be standard practice. §3 takes up what mathematics has been doing instead, and where it has been working or failing, before §4 introduces the AI-era pressure that has made the gap more urgent than it has ever been.

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

# The AI Inflection

The argument so far - mathematics has one layer, programming has six, the gap is the trust differential - holds independently of recent AI developments. Three things about the last three years sharpen it.

## 4.1 Speed

Large language models can produce mathematical text at a rate no human reviewer can match. A model can emit a fifty-page paper in minutes; a referee report on a fifty-page paper takes weeks. The asymmetry is the same one programming faced when continuous integration replaced overnight builds, except that the programming side had types and tests waiting at the bottom of the funnel and the mathematics side does not.

The ratio that matters is candidate-to-check throughput. In programming circa 2010, a developer could write code faster than CI could check it on slow hardware; the response was to improve CI, not slow the developer. In mathematics today, an LLM can write proofs much faster than a human referee can check them; the response cannot be to slow the LLM, because nothing is forcing the LLM to wait. It has to be to speed up the check, which means mechanical checking.

## 4.2 Hallucination

Language models confidently assert false statements when they have learned to predict the shape of true ones. In code, this manifests as plausible-looking calls to functions that do not exist, library imports that do not resolve, and APIs hallucinated wholesale. In mathematics, it manifests as plausible-looking inferences that do not follow, citations to papers that were never written, and proofs whose steps each look reasonable in isolation while the overall argument fails to connect.

The failure mode is alien to human reasoning and therefore alien to the heuristics human reviewers have developed over centuries. A reviewer expects an error to come from a misunderstanding the author had; a hallucination comes from no understanding at all, with the same surface confidence. Hallucinated citations have surfaced widely enough in chatbot-assisted academic writing that several journals now require explicit disclosure of LLM use; the citations are structurally plausible (real authors, plausible journals, reasonable years) but point at nothing. The mathematical analogue - a proof step that looks like a valid invocation of a known lemma but is not - is exactly what peer review is least equipped to catch reliably at speed.

## 4.3 Where AI Is Helping

AI is not only a hazard; it is increasingly a co-author. Three concrete examples make the helping side tangible.

**Tao's blueprint methodology applied to PFR [10].** A research-active mathematical breakthrough - Marton's Polynomial Freiman-Ruzsa conjecture - was decomposed in advance into a graph of lemmas, each with a proof sketch, and discharged in parallel by dozens of contributors with mathlib-scale automation behind them. Some lemmas were filled in with explicit AI assistance. Lean's kernel re-checks every lemma. Three weeks from preprint to verified proof. This was not possible in 2015.

**AlphaProof and AlphaGeometry on IMO 2024 [15].** DeepMind's reinforcement-learning-trained models emitted Lean tactic scripts for International Mathematical Olympiad problems; Lean's kernel certified four of six at silver-medal level. The models' outputs are explicitly LLM-generated and explicitly human-untrusted; the certification is mechanical. The medal is real because the kernel said so.

**Lean-Copilot and proof autoformalisation [16].** A growing class of tools translates between informal mathematics and Lean, with the kernel as the trust boundary. The tools are confidently wrong some non-trivial fraction of the time. Without the kernel they would be unusable; with it they are useful.

The thread through all three is the same: the kernel did the work peer review could not, at the speed AI required.

## 4.4 Where AI Is Hurting

The flip side is mathematical content produced by LLMs that *did not* go through a kernel. Chatbot-authored proofs circulate on social media regularly, frequently make plausible errors, and occasionally get cited by people who did not check. arXiv preprints with hallucinated citations have appeared in number large enough that several journals now require explicit disclosure of LLM assistance. None of this is unique to mathematics - the legal profession has had its own hallucinated-case-law incidents - but mathematics has the additional vulnerability that its peer-review pipeline was already overloaded before LLMs joined the queue.

The asymmetry between §4.3 and §4.4 is exact and instructive. AlphaProof's outputs are trustworthy because Lean's kernel checked them. The chatbot's outputs are dangerous because nothing did. The difference is not about the model: AlphaProof and a general-purpose chatbot share architectural ancestry and would have similar raw error rates on raw mathematical claims. The difference is about whether a kernel sat between the model and the literature.

## 4.5 The Inflection

This is the inflection. AI capable of producing publishable-looking mathematics now exists; AI capable of producing publishable-looking *errors* in mathematics also exists; and the only reliable filter between the two, given the speed at which AI can produce candidates, is mechanical proof checking. Peer review remains valuable for the same things it was valuable for before - taste, framing, significance, exposition, the social construction of what mathematics is for - but it is no longer load-bearing for correctness when the proposer is not human.

The programming community went through this transition ten years earlier with a different generation of automation. When linters, compilers, and CI pipelines reached the point where they could check faster than a reviewer could read, the standards shifted. Reviewers stopped checking what tools could check, and started checking what tools could not. Mathematics is at the same threshold for proofs.

The remaining sections develop the argument in depth. §5 introduces the formal foundations a kernel rests on. §6 surveys the tools available. §7 examines five landmark cases. §8 builds a kernel from scratch on the page, so the reader can see what one looks like. §§9-11 use the kernel - and Lean's - to formalise two propositional theorems, with the comparison delivering on the central question.

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

# The Proof-Assistant Ecosystem

-5 gave the formal machinery; §6 surveys the tools that implement it. Two parts: Lean 4 in depth, because the project uses it hands-on, and the wider ecosystem in outline, because any serious answer to "where do formal methods matter?" has to acknowledge that different communities have chosen different tools.

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

| Result                  | Year  | Tool               | Size (LoC)    | Effort                            | Kind of finding                |
| ----------------------- | ----- | ------------------ | ------------- | --------------------------------- | ------------------------------ |
| Feit-Thompson Odd Order | 2012  | Coq / Ssreflect    | ~150,000      | ~6 person-years                   | Re-verification at scale       |
| Four Colour Theorem     | ~2005 | Coq                | ~60,000       | multi-year                        | Closed the Appel-Haken loop    |
| Gödel incompleteness    | 2014  | Isabelle/HOL       | several kLoC  | single-person, months             | Surfaced informal subtleties   |
| PFR conjecture          | 2024  | Lean 4 + blueprint | (distributed) | ~3 weeks (dozens of contributors) | Real-time formalisation        |
| Needham-Schroeder       | 1995  | CSP + FDR          | small         | short                             | Falsified a 17-year-old result |

# Build Your Own: A Proof Assistant From Scratch

The chapter title commits to something specific: by the end of these pages, a reader who has been following along will understand what a proof assistant does internally, because the report has built one in front of them. The toy is small enough to make this feasible. Lean's kernel is around 6,000 lines of C++ and irreducible to a tutorial; the toy is around 100 lines of Python and reducible to one.

The build below proceeds in the order it actually went in: choose the logic, represent the syntax, represent proofs, write the kernel, distinguish the calculi, add a parser, add tests. Each step is presented with the question that motivated it and the design choice that answered it. The full source lives in `project/formalisations/toy/`; this section quotes the load-bearing pieces, with full listings in §14.C.

## 8.1 Why Build

Reading explains *what* a proof-assistant kernel is. It does not explain *why it is the way it is*. The shape of a kernel - the data structures it threads, the cases its `match` covers, where it enforces exhaustiveness - emerges from a sequence of design decisions that look obvious in retrospect and unobvious in advance. Building one even at toy scale forces those decisions into the open.

Pierce [13] makes the point in *Types and Programming Languages*: implementation is the discipline where vague intuitions collide with the cases they have to handle, and either survive or refine into something more precise. The toy that follows is a compressed version of the same exercise, scoped down to propositional logic so the whole assistant fits in a chapter and the whole kernel fits on one screen.

## 8.2 Choosing the Logic

The first decision is what fragment of logic the kernel will check. Larger fragments give expressive power; smaller fragments fit in fewer lines. The two shortlisted theorems for this project (the Deduction Theorem; Glivenko's Theorem) are both pure propositional results, so the toy can stop at propositional logic and still cover the targets.

Propositional logic with implication and falsum is sufficient. Negation `¬A` is defined as `A → ⊥`; double negation is two of those. Conjunction and disjunction can be added as derived definitions or omitted entirely - the toy omits them, because neither shortlisted theorem needs them. The full primitive vocabulary is: variables, falsum, implication.

Three axiom schemas plus modus ponens give the classical calculus: A1 (`A → (B → A)`), A2 (`(A → (B → C)) → ((A → B) → (A → C))`), A3 (`(¬B → ¬A) → (A → B)`). The intuitionistic calculus replaces A3 with *ex falso quodlibet* (`⊥ → A`). This is the smallest fragment carrying both shortlisted theorems and the smallest that distinguishes the two flavours of propositional reasoning.

The supervisor's steer during the March 2026 pivot - "don't overbuild the toy; it only needs to be big enough for the chosen theorems" - is what kept the scope here.

## 8.3 Representing Formulae

A formula is a tree of atoms and connectives. The natural Python encoding is an algebraic data type. Python does not have ML-style sum types, but `@dataclass(frozen=True)` plus inheritance plus PEP-634 structural pattern matching gives ninety percent of the discipline:

```python
class Formula: …

@dataclass(frozen=True, slots=True)
class Var(Formula):
    index: int

@dataclass(frozen=True, slots=True)
class Bot(Formula):
    pass

@dataclass(frozen=True, slots=True)
class Arrow(Formula):
    lhs: Formula
    rhs: Formula

def neg(a: Formula) -> Formula:
    return Arrow(a, Bot())

def not_not(a: Formula) -> Formula:
    return neg(neg(a))
```

`frozen=True` makes the values hashable and immutable - the kernel will compare formulae for equality, and comparing mutable values is a known source of subtle bugs. `slots=True` saves memory at scale (the toy never reaches that scale, but it costs nothing). `Var` indexes by an integer rather than a name, which keeps the parser simple - `p0`, `p1`, `p2` are the surface variable names, and the integer is the index.

Negation is a function, not a constructor. This is a design choice with consequences: a formula `¬A` and a formula `A → ⊥` are *the same value*, which gives the kernel one fewer case to match at the cost of slightly less idiomatic surface notation. The trade is worth it. The kernel is the part that has to be small; the surface notation can recover later.

## 8.4 Representing Proofs

A proof is also a tree, but a tree of inference-rule applications. The classical kernel needs five constructors plus one for the intuitionistic-only rule:

```python
@dataclass(frozen=True, slots=True)
class Assumption(Proof):
    ctx: tuple[Formula, …]
    formula: Formula

@dataclass(frozen=True, slots=True)
class AxiomA1(Proof):
    ctx: tuple[Formula, …]
    a: Formula
    b: Formula

@dataclass(frozen=True, slots=True)
class AxiomA2(Proof):
    ctx: tuple[Formula, …]
    a: Formula
    b: Formula
    c: Formula

@dataclass(frozen=True, slots=True)
class AxiomA3(Proof):
    ctx: tuple[Formula, …]
    a: Formula
    b: Formula

@dataclass(frozen=True, slots=True)
class ExFalso(Proof):
    ctx: tuple[Formula, …]
    a: Formula

@dataclass(frozen=True, slots=True)
class ModusPonens(Proof):
    ctx: tuple[Formula, …]
    imp: Proof
    ant: Proof
```

Two design choices worth pausing on. First, `ctx` (the assumption context) is a *tuple*, not a list - tuples are hashable, lists are not, and the kernel compares contexts for equality during modus ponens. Second, every `Proof` subclass carries its own `ctx`. This makes `Proof` values self-contained (no threaded state parameter) at the cost of some redundancy. The redundancy is what the kernel cross-checks: a `ModusPonens` whose subproofs have a different context than the conclusion is rejected.

A reader from the programming side will recognise the pattern. This is the same shape as a typed AST in a compiler - each node carries the type information the type-checker will need, and the type-checker walks the tree confirming consistency. A proof object is a typed AST whose "type" is the formula it derives.

## 8.5 Writing the Kernel

The kernel is a single function: given a proof and a calculus, return the formula the proof derives, or raise `KernelError`. The body is one `match` over the six proof types:

```python
def check(proof: Proof, calculus: Calculus) -> Formula:
    rule = type(proof)
    if not calculus.permits(rule):
        raise KernelError(
            f"rule {rule.__name__} not allowed in calculus {calculus.name!r}"
        )
    match proof:
        case Assumption(ctx=ctx, formula=phi):
            if phi not in ctx:
                raise KernelError(f"assumption {phi} not in context {list(ctx)}")
            return phi
        case AxiomA1(a=a, b=b):
            return Arrow(a, Arrow(b, a))
        case AxiomA2(a=a, b=b, c=c):
            return Arrow(Arrow(a, Arrow(b, c)),
                         Arrow(Arrow(a, b), Arrow(a, c)))
        case AxiomA3(a=a, b=b):
            return Arrow(Arrow(neg(b), neg(a)), Arrow(a, b))
        case ExFalso(a=a):
            return Arrow(Bot(), a)
        case ModusPonens(ctx=ctx, imp=imp, ant=ant):
            if imp.ctx != ctx or ant.ctx != ctx:
                raise KernelError("modus ponens: subproof has wrong context")
            imp_formula = check(imp, calculus)
            ant_formula = check(ant, calculus)
            match imp_formula:
                case Arrow(lhs=lhs, rhs=rhs) if lhs == ant_formula:
                    return rhs
                case _:
                    raise KernelError("modus ponens: shapes don't match")
```

This is the trusted core. 96 lines of Python, including docstrings; six structural cases; one `match`. Three things to flag.

First, the rule-set check runs *before* the structural check. A proof using `AxiomA3` in the intuitionistic calculus is rejected up front, without recursing into subproofs. This is cheaper and clearer than running the full recursion only to reject at the leaves.

Second, `Assumption` requires the named formula to actually be in the context. This is the kernel's only membership check; everything else is structural pattern matching.

Third, `ModusPonens` requires the implication subproof and the antecedent subproof to share the conclusion's context, exactly. Weakening (the operation that adds a hypothesis to a context) is handled outside the kernel by a dedicated transformer in `formal_toy.theorems.deduction`. The kernel does one job, and weakening is not it.

`mypy --strict` checks that the `match` is exhaustive over `Proof`. If a future version of the toy adds a seventh proof rule without updating the kernel, `mypy` rejects the change before the test suite runs. This is the type-system layer doing the job a unit test would do, but earlier and cheaper - exactly the §2 pattern, applied to the kernel itself.

## 8.6 Encoding Two Calculi

The calculus is data, not code. A `Calculus` is a frozenset of permitted rule classes:

```python
@dataclass(frozen=True, slots=True)
class Calculus:
    name: str
    rules: frozenset[type[Proof]]

    def permits(self, rule: type[Proof]) -> bool:
        return rule in self.rules

CLASSICAL = Calculus(
    name="classical",
    rules=frozenset({Assumption, AxiomA1, AxiomA2, AxiomA3, ModusPonens}),
)

INTUITIONISTIC = Calculus(
    name="intuitionistic",
    rules=frozenset({Assumption, AxiomA1, AxiomA2, ExFalso, ModusPonens}),
)
```

That is the entire distinction between classical and intuitionistic propositional logic in this toy: which set the kernel was passed. Glivenko's theorem (§9.2) operates exactly on this distinction, translating proofs from one rule set to the other.

This is one place where the toy's transparency exceeds Lean's. In Lean, the same two calculi would be two different inductive types, each with their own constructors, and the relationship between them would be implicit in lifting lemmas. In the toy, the calculi are two values of the same type, and the relationship is whichever `Calculus` you pass to `check`. A reader can see, at a glance, exactly what makes a proof intuitionistic rather than classical: the absence of `AxiomA3` from the rules frozenset.

## 8.7 Surface Syntax

Proofs are written as Python values; formulae are parsed from strings. The parser uses Lark with a small grammar:

```python
?start:       implication
?implication: negation ("->" implication)?      -> maybe_imp
?negation:    "~" negation                       -> neg_form
            | atom
?atom:        VAR                                -> var
            | BOT                                -> bot
            | "(" implication ")"
VAR:          "p" INT
BOT:          "_|_" | "⊥"
```

Four productions, two tokens, and a `Transformer` subclass that produces `Formula` values directly. The `?` prefix on most rules elides intermediate `Tree` wrappers - one round of debugging on first contact (Lark's default produces `Tree` nodes for every reduction, which the Transformer would otherwise have to pattern-match through).

The REPL accepts four commands: `:parse <formula>`, `:glivenko <formula>`, `:help`, `:quit`. The `:glivenko` demo is the trust chain in miniature: it parses the input, builds the classical proof, runs the Glivenko translation, and re-checks both the classical and intuitionistic outputs with the kernel. The transcript shows every step; nothing is hidden.

## 8.8 Engineering: Types, Tests, Errors

Static types are the cheapest layer. `mypy --strict` runs against `src/`, enforces complete annotations, and checks that the kernel's `match` is exhaustive. Two early bugs in the Glivenko transformer surfaced this way - pattern variables rebound across `case` branches with incompatible types, exactly the class of bug a type system catches and a careful reader does not.

Tests are the next layer. `pytest -q` runs 51 assertions across five modules. The pattern in every theorem-related test is the same: construct a proof, hand it to the kernel, compare the kernel's output to the expected formula. The kernel is the oracle; the test is the writer claiming a result and the kernel certifying it.

Error messages aim at the cause. `rule AxiomA3 not allowed in calculus 'intuitionistic'` points at the failed rule and the calculus that rejected it, in plain English. Lean's typical mismatch errors span multiple lines of elaborated types because Lean's elaborator has to reverse-engineer the user's intent through implicit-argument resolution, typeclass instances, and unification. The toy can afford simple messages because no elaboration sits between the user and the kernel.

## 8.9 The Whole Object

Pulled together, the toy is:

```python
src/formal_toy/
├── ast.py              # Formula and Proof ADTs
├── parser.py           # Lark grammar
├── calculus.py         # CLASSICAL and INTUITIONISTIC
├── kernel.py           # check(proof, calculus)
├── repl.py             # python -m formal_toy
└── theorems/
    ├── deduction.py    # deduction_transform
    └── glivenko.py     # glivenko_translate, glivenko_reverse
```

Around 1,000 lines of source plus 470 of tests. The kernel is 96 lines. Verification is two commands:

```bash
python -m mypy --strict src/    # exhaustiveness, type correctness
python -m pytest -q             # 51 passed
```

The combination is the toy's correctness statement. `mypy --strict` checks that the kernel pattern-matches every proof variant; `pytest -q` checks that every theorem transformer's output is accepted by the kernel against the expected formula. The two together are the toy-scale equivalent of a CI pipeline: types pass, tests pass, the artefact is good.

## 8.10 What This Teaches

A reader who has followed along has now seen a proof assistant in its entirety - every line of trusted code, every design choice, every reason behind every choice. This is information that reading Lean's source does not yield, because Lean's source has been optimised for industrial-scale formalisation rather than tutorial transparency. The toy makes the *common ancestor* of every proof assistant - a typed core that reads a proof object and rejects anything not built by the allowed rules - visible at a depth no industrial tool can.

Three observations follow that §11 will use as the basis for cross-tool comparison.

First, the kernel really is small. 96 lines is not a marketing figure; it is the actual file. The Lean kernel is around sixty times larger because it handles a much larger logic (dependent types, universes, inductive families, computation), but the structural shape - read a proof term, match against rules, return the derived type or reject - is the same. A reader who has understood the toy kernel has understood the central idea Lean implements at scale.

Second, the calculus distinction (classical vs intuitionistic) is data, not code. This is a design choice the toy can make because the logics are small enough to enumerate; Lean's two inductive systems have to encode the same distinction differently, and the relationship is harder to see from the outside.

Third, the trust chain is fully visible. A reader of this report can look at the kernel, see exactly what it does, and trust that nothing else in the toy can produce a `Formula` value that contradicts the kernel's verdict. This is what §1 promised: a layer of mechanical checking, transparent in every detail, that the reader can audit without specialist knowledge. §12.3 returns to this when arguing that the same explicit-everything design is what makes the toy LLM-emit-friendly: a model whose proof objects the kernel can check is a model whose outputs are auditable in a way tactic-script outputs are not.

-9 puts the toy to work on the two shortlisted theorems.

# Formalising Two Theorems in the Toy

The toy from §8 is a kernel and surrounding scaffolding; on its own it proves nothing. §9 puts it to work on the two shortlisted theorems: the Deduction Theorem (§9.1) and Glivenko's Theorem (§9.2). Both are written as Python transformers - functions that take a proof object and return another proof object - with the kernel re-checking every output to certify correctness.

The selection criteria came from `project/formalisations/formalisations.md`: one metatheoretic result *about* the proof system (the Deduction Theorem) and one classical named result *inside* propositional logic (Glivenko's). The pair exercises distinct capabilities - tree-induction on proof objects versus translation between two related calculi - which gives §11's cross-tool comparison real content.

## 9.1 Theorem 1: The Deduction Theorem

**Statement (Mendelson ch. 1).** For a Hilbert-style propositional calculus with axioms A1, A2, A3 and modus ponens: if `Γ ∪ {A} ⊢ B` then `Γ ⊢ A ⟹ B`.

In the toy the deduction theorem is not proved at the object level (as it is in Lean - see §10). It sits at the *meta* level, as a Python function that transforms proof trees:

```python
def deduction_transform(proof: Proof, hyp: Formula, calculus: Calculus) -> Proof:
    """Discharge the leading assumption `hyp` from `proof`."""
    rest: Context = proof.ctx[1:]
    match proof:
        case Assumption(formula=phi):
            if phi == hyp:
                return arrow_self(rest, hyp)
            h_phi = Assumption(ctx=rest, formula=phi)
            h_a1 = AxiomA1(ctx=rest, a=phi, b=hyp)
            return ModusPonens(ctx=rest, imp=h_a1, ant=h_phi)
        # axiom cases - wrap with A1 + MP
        # modus ponens case - A2 + MP + MP (with recursive calls on both subproofs)
        …
```

The statement "if `Γ, hyp ⊢ B` then `Γ ⊢ hyp ⟹ B`" sits in the function's signature: if the input's context begins with `hyp` and it derives some `B`, the output's context is the remainder and derives `hyp ⟹ B`. Correctness is certified by re-checking the transformer's output with `formal_toy.kernel.check`. The test module `tests/test_deduction.py` does exactly this across eight cases (assumption head, assumption tail, each axiom instance, modus ponens, weakening round-trip, an A2-instance sanity check), all green (`pytest -q`: 51 passed).

Under §5.3's Curry-Howard lens, `deduction_transform` *is* the deduction theorem: the signature is the statement, the body is the proof. Lean (§10.2) writes the same argument inside the object logic; the toy writes it one level up, in Python. Neither is more correct than the other - they are two equivalent presentations of the same theorem. §11 returns to what each view surfaces.

## 9.2 Theorem 2: Glivenko's Theorem

**Statement (Glivenko 1929).** For any propositional formula `A` and context `Γ`: `Γ ⊢_CL A` iff `Γ ⊢_INT ¬¬A`.

Glivenko is implemented as two functions in `formal_toy/theorems/glivenko.py`: `glivenko_translate` (classical to intuitionistic of the double negation) and `glivenko_reverse` (back again). The forward direction recurses on the structure of the classical proof:

```python
def glivenko_translate(proof: Proof) -> Proof:
    match proof:
        case Assumption(ctx=ctx_a, formula=phi):
            return dni_of_proof(Assumption(ctx=ctx_a, formula=phi))
        case AxiomA1(ctx=ctx_a, a=a_a, b=b_a):
            return dni_of_proof(AxiomA1(ctx=ctx_a, a=a_a, b=b_a))
        case AxiomA2(ctx=ctx_a, a=a_a, b=b_a, c=c_a):
            return dni_of_proof(AxiomA2(ctx=ctx_a, a=a_a, b=b_a, c=c_a))
        case AxiomA3(ctx=ctx, a=a, b=b):
            return dn_axiom_three(ctx, a, b)
        case ModusPonens(ctx=ctx, imp=imp_proof, ant=ant_proof):
            imp_formula = check(imp_proof, CLASSICAL)
            match imp_formula:
                case Arrow(lhs=c_form, rhs=b_form):
                    pass
            d_imp = glivenko_translate(imp_proof)
            d_ant = glivenko_translate(ant_proof)
            h_distrib = dn_distrib(ctx, c_form, b_form)
            step1 = ModusPonens(ctx=ctx, imp=h_distrib, ant=d_imp)
            return ModusPonens(ctx=ctx, imp=step1, ant=d_ant)
```

The helpers `dni`, `dn_distrib`, `dn_axiom_three`, `neg_imp_neg_conseq`, `neg_imp_dn_ant`, and `cl_dne` correspond name-for-name to Lean theorems in `FormalMethods/Glivenko.lean` (§10). The `int_to_cl` lift - every intuitionistic derivation is a classical one, with `ExFalso` mapped through `cl_ex_falso` - appears on both sides.

The kernel re-check certifies each output. For each of AxiomA3 (the hard case), AxiomA1, AxiomA2, Assumption, and ModusPonens, `tests/test_glivenko.py` translates, checks under `INTUITIONISTIC`, and compares to `not_not(cl_formula)`. All assertions green. A separate test (`test_glivenko_reverse_round_trip`) translates then reverse-translates `AxiomA3(P, Q)` and confirms the recovered classical formula matches the original.

## 9.3 What the Toy Surfaced

Two observations from working through these proofs in the toy that §11 will pick up.

First, the calculus-as-data design from §8.6 carried real weight on Glivenko. The translation is exactly "take a `Proof` constructed under `CLASSICAL` and return a `Proof` constructable under `INTUITIONISTIC` whose conclusion is the double negation of the original's". Because the calculi are `frozenset` values, the typing checks the boundary mechanically: a stray `AxiomA3` in the output gets rejected by the kernel before the test sees it. In Lean the same boundary is enforced by which inductive type the proof inhabits (§10), which works equally well but is harder to inspect from the outside.

Second, the AxiomA3 case in `glivenko_translate` is the only one that does substantive work; the other four cases (Assumption, AxiomA1, AxiomA2, ModusPonens) collapse into one-liners through `dni_of_proof` or the `dn_distrib` helper. The toy's explicit-everything style makes this asymmetry stark in a way Lean's heavier infrastructure can hide. The reader can see that Glivenko's content lives almost entirely in `dn_axiom_three`, the intuitionistic proof of `¬¬((¬B → ¬A) → (A → B))`, which is the file's longest and hardest construction.

Both observations matter for §11's cross-tool comparison and for §12.3's argument about LLM-emit-friendliness: the toy's style makes the structure of a proof transparent in a way that helps both human auditors and machine generators.

# The Same Theorems in Lean 4

-9 proved the two theorems in the toy. §10 proves them again in Lean 4, the industrial counterpoint. The point of doing both is not redundancy but contrast: §11 will measure where each tool's affordances helped and where they got in the way. Both formalisations live in `project/formalisations/lean/formal_methods/FormalMethods/`. The development uses no mathlib dependency - it relies only on `List`, `Nat`, and `Prop` from Lean core. Keeping the build self-contained matches the propositional-only scope and makes the dependency tree auditable in full.

## 10.1 Shared Infrastructure

`FormalMethods/Basic.lean` defines the propositional formula type and the notation used throughout:

```lean
inductive Formula : Type where
  | var   : Nat → Formula
  | bot   : Formula
  | arrow : Formula → Formula → Formula
  deriving Repr, DecidableEq

abbrev Formula.neg    (A : Formula) : Formula := Formula.arrow A Formula.bot
abbrev Formula.notNot (A : Formula) : Formula := Formula.neg (Formula.neg A)

infixr:25 " ⟹ " => Formula.arrow
prefix:40 "~"   => Formula.neg
```

This is the same shape as the toy's `Formula` ADT (§8.3). Implication and falsum are the only primitive connectives; negation and double negation are definitional abbreviations. Both languages, picking the same minimal vocabulary, end up with similar core data structures - which is itself a finding for §11.

## 10.2 Theorem 1: Deduction Theorem

**Statement.** For a Hilbert-style propositional calculus with axioms A1, A2, A3 and modus ponens: if `Γ ∪ {A} ⊢ B` then `Γ ⊢ A ⟹ B`.

In Lean, `Hilbert` is an inductive relation on `List Formula → Formula → Prop` with five constructors (`assumption`, `axiom₁`-`axiom₃`, `modusPonens`), defined in `FormalMethods/DeductionTheorem.lean`. The deduction theorem is then:

```lean
theorem deduction {Γ : List Formula} {A B : Formula}
    (h : (A :: Γ) ⊢ B) : Γ ⊢ (A ⟹ B)
```

The proof is by induction on the derivation of `B`. The subtlety: `A :: Γ` is a compound term in the first index of `Hilbert`, and Lean 4's `induction` tactic cannot generalise a compound index directly. The standard fix is to prove a helper `deduction_aux` with an equality hypothesis `Γ' = H :: Γ`, induct on that, then specialise:

```lean
private theorem deduction_aux {Γ' : List Formula} {B : Formula}
    (h : Γ' ⊢ B) :
    ∀ (Γ : List Formula) (H : Formula), Γ' = H :: Γ → Γ ⊢ (H ⟹ B) := by
  induction h with
  | assumption hmem =>
      intro Γ H hΓ
      subst hΓ
      rcases List.mem_cons.mp hmem with heq | hmem'
      · subst heq
        exact arrow_self _ _
      · exact Hilbert.modusPonens (Hilbert.axiom₁ _ H) (Hilbert.assumption hmem')
  | axiom₁ P Q =>
      intro Γ H hΓ
      subst hΓ
      exact Hilbert.modusPonens
        (Hilbert.axiom₁ (P ⟹ (Q ⟹ P)) H)
        (Hilbert.axiom₁ P Q)
  -- axiom₂, axiom₃ analogous - see §14.B for the full listing
  | modusPonens _ _ ih_imp ih_ant =>
      intro Γ H hΓ
      subst hΓ
      have step₁ := Hilbert.modusPonens
        (Hilbert.axiom₂ H _ _)
        (ih_imp Γ H rfl)
      exact Hilbert.modusPonens step₁ (ih_ant Γ H rfl)

theorem deduction {Γ A B} (h : (A :: Γ) ⊢ B) : Γ ⊢ (A ⟹ B) :=
  deduction_aux h Γ A rfl
```

The full file is 139 lines: inductive definition, `arrow_self` helper (the textbook `Γ ⊢ A ⟹ A`, via A1, A2, MP), a weakening lemma, the main proof. Induction-case names `P`, `Q`, `R` are chosen to avoid shadowing the outer theorem's `A` - a small ergonomic detail that matters in practice, because reusing the letter makes `subst` eliminate in the wrong direction during the assumption case.

Compare the toy version (§9.1): the toy's `deduction_transform` carries the same argument but at the meta-level - Python recursion over the structural cases of a `Proof` value. Lean stays inside the object logic. Both are correct.

## 10.3 Theorem 2: Glivenko's Theorem

**Statement (Glivenko 1929).** For any propositional formula `A` and context `Γ`: `Γ ⊢_CL A` iff `Γ ⊢_INT ¬¬A`.

The intuitionistic system `IntProof` lives in `FormalMethods/Glivenko.lean` and replaces `axiom₃` with *ex falso quodlibet* (`⊥ ⟹ A`); A1, A2, and modus ponens are shared with the classical `Hilbert`. The file reuses `Hilbert` from `DeductionTheorem.lean` as the classical system, avoiding a duplicate inductive.

The forward direction is by induction on the classical derivation. Four of five cases are light: `assumption`, `axiom₁`, `axiom₂` fold into a single application of `dni` (double-negation introduction); `modusPonens` uses `dn_distrib` (distribution of `¬¬` over `⟹`) then two applications of MP; only `axiom₃` needs the dedicated lemma `dn_axiom₃`. The reverse direction uses `int_to_cl` (lifting intuitionistic derivations to classical ones, using A3 to classically derive `⊥ ⟹ A`) and `cl_dne` (classical double-negation elimination from A3).

```lean
theorem glivenko_forward {Γ : List Formula} {A : Formula}
    (h : Hilbert Γ A) : Γ ⊢ᴵ ~(~A) := by
  induction h with
  | assumption hmem =>
      exact dni_of_proof (IntProof.assumption hmem)
  | axiom₁ P Q =>
      exact dni_of_proof (IntProof.axiom₁ P Q)
  | axiom₂ P Q R =>
      exact dni_of_proof (IntProof.axiom₂ P Q R)
  | axiom₃ P Q =>
      exact dn_axiom₃ _ P Q
  | modusPonens _ _ ih_imp ih_ant =>
      exact IntProof.modusPonens
        (IntProof.modusPonens (dn_distrib _ _ _) ih_imp)
        ih_ant
```

The three helper lemmas carry the weight. `dni` is a short hypothesis-stack-then-peel construction using the intuitionistic deduction theorem. `neg_imp_neg_conseq` and `neg_imp_dn_ant` - not named in the textbook but unavoidable for the forward direction's `axiom₃` case - extract `¬B` and `¬¬A` respectively from `¬(A ⟹ B)`. `dn_distrib` stacks five hypotheses onto `Γ`, derives `⊥` via MP chains, and peels them off with the intuitionistic deduction theorem (`int_deduction`) five times.

`dn_axiom₃` - the intuitionistic proof of `¬¬((~B ⟹ ~A) ⟹ (A ⟹ B))` - is the single hardest piece in the file. The construction uses `neg_imp_dn_ant` and `neg_imp_neg_conseq` applied twice each to produce `¬¬(~B ⟹ ~A)`, `¬(A ⟹ B)`, `¬¬A`, and `¬B` under the hypothesis `¬X` where `X = (~B ⟹ ~A) ⟹ (A ⟹ B)`. From these, a short internal derivation builds `¬(~B ⟹ ~A)`, which MP'd against `¬¬(~B ⟹ ~A)` yields `⊥`; one more `int_deduction` peels `¬X` to produce `¬¬X`.

The full Glivenko file is 323 lines. The bundled biconditional:

```lean
theorem glivenko {Γ : List Formula} {A : Formula} :
    Hilbert Γ A ↔ (Γ ⊢ᴵ ~(~A)) :=
  ⟨glivenko_forward, glivenko_reverse⟩
```

The toy's `glivenko_translate` (§9.2) walks the same five cases of the classical proof, with the same one-line collapse for four of them and the same heavy lifting on the AxiomA3 case. The names, the lemma decomposition, and the order of moves match step for step.

## 10.4 Reflections on the Lean Side

Two observations from writing these proofs that inform §11.

First, Lean's automation did not shorten them. `decide`, `tauto`, and `simp` were no help against Hilbert-style axiomatic derivations - they target goals with computational or algebraic content, not "apply this specific axiom instance". The file is explicit `Hilbert.axiom₁`/`axiom₂`/`axiom₃` plus `modusPonens` calls throughout. Not a complaint: it is the right outcome for this target, and it makes the cross-tool comparison cleaner than it would be if one side were half-automation.

Second, the "prove a helper with a generic-context equality, then specialise" pattern recurs between the deduction theorem and the intuitionistic deduction theorem inside Glivenko. They are essentially the same proof with one inductive swapped for another. Macro-generating the boilerplate would remove the duplication, but at the cost of readability as mathematical text. For a project whose point is pedagogical visibility, the explicit duplication is the right trade.

Full listings are in §14.B: 462 lines for the two theorem files, 508 including shared `Basic.lean`.

# Cross-Tool Comparison

-§9-10 produced two formalisations of the same two theorems. §11 lays them alongside each other and asks where each tool's affordances paid off and where they got in the way.

## 11.1 Side-by-Side Metrics

The table compares the two implementations on five axes. LoC includes docstrings; kernel-invocation counts are distinct calls through each top-level checker.

| Metric                            | Lean 4                            | Toy (Python)                       |
|-----------------------------------|-----------------------------------|------------------------------------|
| Deduction theorem LoC             | 139 (incl. aux + arrow_self)      | 145 (incl. weaken + arrow_self)    |
| Glivenko LoC                      | 323 (incl. helpers)               | 343 (incl. helpers)                |
| Kernel size                       | ~6,000 lines C++ (core only)      | 96 lines Python                    |
| Trusted computing base            | Lean kernel + compiler toolchain  | CPython + the 96-line kernel       |
| External dependencies             | none (Lean core only)             | `lark` (parser), otherwise none    |
| Automation tactics used           | none                              | n/a                                |
| Time to first working prototype   | ~2 days (incl. toolchain fights)  | ~2 days                            |
| Exhaustiveness guarantee          | pattern-match on inductive        | `mypy --strict` on `match`         |

Two findings to pull out. First, the LoC figures are remarkably close - within ~5% per theorem. This pushes back on the intuition that a Python encoding should run much more verbose than a dependently-typed one: at this complexity, Python `@dataclass` + `match` is nearly as compact as Lean's inductive + tactic language. Second, the trusted bases differ starkly: Lean's kernel is ~6,000 lines of C++ before counting the compiler; the toy's is 96 lines of Python plus CPython. Neither is obviously safer - CPython is far larger than Lean's kernel but also far more widely audited - and the comparison is a reminder that "trust the kernel" in practice means "trust everything beneath it too".

## 11.2 Where Each Tool Won

### 11.2.1 Where Lean Won

- **Kernel rigour as a type-checked guarantee.** Lean's inductive definitions plus its kernel's native exhaustiveness check mean a malformed `Proof` is not expressible as a Lean term. The toy gets the same effect operationally (`mypy --strict` plus kernel re-check) but the guarantee is weaker: a hand-constructed `Proof` in Python that ducks the type checker fails at runtime, not at type-check time.
- **Proof-state feedback.** Lean's InfoView shows the current goal and hypotheses as the cursor moves. The toy has no analogue - debugging `deduction_transform` was done with `pytest -v` and `print()`.
- **Library reuse.** Even though these proofs import no mathlib, the option matters: once the target moves beyond propositional logic, mathlib is the whole reason Lean is a viable research tool.

### 11.2.2 Where the Toy Won

- **Kernel transparency.** 96 lines of Python, six `case` branches, fully readable in a single sitting. A student can audit it by inspection. Lean's kernel cannot - not because it is badly written, but because it is 60x larger and in C++.
- **Error messages.** `rule AxiomA3 not allowed in calculus 'intuitionistic'` points at the cause in plain English. Lean's typical mismatch spans multiple lines of elaborated types. For pedagogy the toy wins on clarity.
- **Build and iteration speed.** The toy runs `pytest -q` in under 0.25 seconds. Lean's incremental rebuild after an edit is ~30 seconds from cold. With an implementation budget measured in days, that loop mattered.
- **Calculus-as-data.** The classical/intuitionistic distinction is two `frozenset` values in the toy, two inductive types in Lean. The toy's encoding makes the relationship between the calculi visible at a glance; Lean's makes it implicit in lifting lemmas.

### 11.2.3 Where Neither Won

Real mathematical content. The toy is too small for anything beyond the chosen theorems - adding quantifiers or arithmetic would mean either extending the kernel (cheap) or re-proving everything in the extended calculus (not cheap). Lean is the right tool for research mathematics at PFR scale (§7.4); the toy is the right tool for pedagogical transparency at propositional scale. Choosing between them for a given target is a scope question, not a quality one.

## 11.3 What This Reveals About the Kernel Idea

Both tools share a common ancestor: a typed-core checker that reads a proof object and rejects anything not built by the allowed rules. Coq, Lean, Agda, Isabelle, and the toy are all implementations of this idea on different design budgets - dependent types vs simply-typed, industrial-library vs standalone, C++ kernel vs Python kernel. The toy makes this ancestor *visible* in a way Lean cannot: with elaboration, implicit resolution, and tactic metaprogramming on top, the kernel is not where the user lives. In the toy, the kernel *is* the interaction.

-5's Curry-Howard correspondence and §8.5's kernel listing together capture what the family has in common. The differences sit in the layers above: how much elaboration, how aggressive the automation, how big the library. None of those layers add to soundness; they add to ergonomics. That is the trade industrial tools have made, and it is the trade the toy explicitly does not.

One pedagogical suggestion follows, offered tentatively from one student's experience: a final-year logic or type-theory course could profitably put a build-a-minimal-kernel exercise before introducing Lean or Coq proper. The shift between "I can use the tactic language" and "I know what the kernel is doing under the tactics" is larger than expected, and hard to come at from reading alone. §12.1 picks the thread up under pedagogy as one of the three settings where formal methods earn their cost.

# Discussion: The Unit-Test Analogy Returns

The report opened with a programmer's response to errors - layers - and a claim that mathematics is now in the position programming was in around 1990. Six chapters of evidence later, the analogy can carry weight beyond rhetoric.

## 12.1 Where Formal Proofs Earn Their Cost

Three settings recur across the case studies and the project's own formalisations. In each, formal methods pay for their cost in a way informal methods cannot.

**Safetyand security-critical systems.** Lowe's 1995 analysis caught what informal peer review had missed in Needham-Schroeder for seventeen years [11]; Smyth [12] surveys the family of cryptographic-protocol verifications built on the same methodology. The Intel Pentium FDIV bug ($475 million correction cost), AWS's TLA+ usage on core S3 storage, and NASA's PVS-based flight-system certification each point the same direction. When an undetected error accumulates losses in the millions or risks human lives, formal verification stops being a tax and becomes an insurance premium. Programming's analogue is the test budget on a high-availability service: nobody complains about the cost when the alternative is downtime.

**Frontier research mathematics.** The PFR formalisation [10] is the case that argues most strongly for a regime change. Three weeks from preprint to complete mechanical verification, coordinated across dozens of contributors via Tao's blueprint methodology, was not possible in Gonthier's Coq era; it became possible only once Lean 4 plus mathlib reached the scale they had in 2023-2024. The relevant comparison is the speed at which programming's CI pipelines went from overnight builds to per-commit checks - an order-of-magnitude shift in feedback loop that changed what kinds of work were tractable. PFR is the same shift for proof verification.

**Pedagogy.** Building the toy assistant shifted my understanding of how proof assistants work more than the preceding six months of reading had. The shift is specifically about the kernel: a kernel is the easiest component to describe in prose (a few rules, a `match` statement) and the hardest to internalise without building one, because the design choices - how proof objects are represented, how contexts thread through modus ponens, where exhaustiveness is enforced - only become questions when you have to answer them. §8's tutorial framing aims to give the reader some of the same shift without requiring a parallel implementation. The evidence for it is anecdotal, but the anecdote is consistent.

## 12.2 Where the Overhead Is Not Justified

Two cases stand out where the analogy breaks the other way.

**Routine proof reproduction.** Reproducing a standard Lean proof in a thesis chapter, without a pedagogical point to make, adds pages but not rigour. The supervisor's 2026-03-04 email flagged exactly this: "if you reproduce some particular (existing) Lean proof in the thesis without clear purpose, this wouldn't count towards your actual work." The principle generalises - re-typesetting an existing formalisation treats the formal artefact as performance, not evidence. Programming has the same antipattern in copy-pasted test suites that re-cover already-covered code.

**Over-tooling a small target.** §7's scale table runs from "Needham-Schroeder, CSP + FDR, small, quick" to "Feit-Thompson, Coq + Ssreflect, 150,000 lines, six person-years". Needham-Schroeder is a model-checking problem, not a theorem-proving one, and a dependent-type-theory system would add overhead without rigour gain. For propositional theorems at undergraduate scale, even Lean plus mathlib can be over-tooling: the toy matched Lean's line count on both shortlisted theorems while exposing every step of the trust chain to direct audit. Right-sizing tool to target is a real engineering question, not a solved one. Programming's analogue is the perennial debate over end-to-end testing for a CRUD app.

## 12.3 The AI Thread Reconsidered

-1 framed AI as the inflection forcing the formalisation question now. Three observations follow from §§8-11 that would not have surfaced from a Lean-only project.

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

# Conclusion

The report opened with Knight Capital's $440 million loss in forty-five minutes. The cause was old code that had passed unit tests, integration tests, and review, defeated by a configuration error nobody had checked. The post-mortem response was another layer.

Mathematics' equivalent error - a proof accepted on peer review, an error hidden for years - has happened repeatedly, with consequences ranging from a publication retraction (Wiles, 1993, repaired) to seventeen years of cryptographic infrastructure built on a false security claim (Needham-Schroeder). The community has caught these errors when it has caught them, and missed them when it has missed them. The pattern is the pattern of single-layer defence.

The thesis of this report is that mathematics is now in the position programming was in around 1990. The tools to add the missing layers exist. The cost of using them has fallen far enough that the question is no longer whether to do it but where to start. The PFR formalisation [10] showed that the layer can keep up with active research; AlphaProof showed that the layer can certify AI-generated proofs; the toy in §8 showed that the layer is small enough to read in one sitting. None of these were available in 1990, and one of them - the AI angle - was not available even in 2020.

The project's contribution to the case is the toy assistant and the comparison in §11. Building a proof assistant from scratch demonstrated three things reading alone could not. First, the kernel really is small: 96 lines of Python that a careful reader can audit in an afternoon. Second, the size overlap between the toy and Lean on these two theorems - within five percent on each - shows that the industrial tool pays no per-theorem tax for proofs at this complexity; its overhead lives in toolchain setup and library scale. Third, the explicit-everything design that makes the toy pedagogically transparent is the same property that makes it LLM-emit-friendly, which is the loose end §12.6 most wants pulled.

The headline question, *where do formal methods add value, and where do they add overhead without matching rigour gain?*, has the answer §12 spelled out: in safety-critical systems, at the frontier of research mathematics, in pedagogy, and now - decisively - wherever the candidate proof came from a language model. Routine proof reproduction does not need the layer; over-tooled small targets do not need the layer. Everywhere else, the layer is the kind of infrastructure that gets taken for granted once it exists, the way programmers stopped arguing about whether to write tests once tests were the default.

Knight Capital lost $440 million because nobody had run the deployment in the new configuration. The fix was not better trust in the deployer; it was a new automated check. Mathematics has spent decades trusting the deployer. The check has finally arrived.

# Appendix

Per supervisor advice (2026-03-04 email archived in `project/supervision.md`), lengthy code listings and original-plan material live here rather than in the main body. Pointers below; the files referenced are reproduced verbatim in the submitted PDF.

## A. Research Plan (As Submitted 2025-10-22)

The project's originally-submitted Research Plan, §§1-11, is reproduced verbatim from `project/Research Plan.md` (the live document includes a §12 Addendum documenting the 2026-01 scope pivot; only §§1-11 are reproduced here, with the pivot discussed in §1 and §12 of this report).

Sections in the original plan:

1. Project Title
2. Project Description and Introduction
3. Connection to Previous Studies
4. Literature Survey
5. References (IEEE)
6. Equipment, Facilities, and Software Requirements
7. Consumables and Costs
8. Action Plan and Timeline
9. Ethical Considerations
10. Risk Assessment
11. Arrangements for Regular Supervisory Discussions

## B. Full Lean 4 Listings

Source repository: `project/formalisations/lean/formal_methods/`. The full build uses no mathlib dependency; `lake build` completes cleanly with zero `sorry` and zero `axiom` declarations outside of comments. The three files (`FormalMethods/Basic.lean`, `FormalMethods/DeductionTheorem.lean`, `FormalMethods/Glivenko.lean`) total 508 lines.

### B `FormalMethods/Basic.lean`

The shared `Formula` type, notation (`⟹`, `~`), and the `neg` / `notNot` abbreviations. 46 lines.

### B `FormalMethods/DeductionTheorem.lean`

The classical Hilbert system inductive `Hilbert`, the `arrow_self` identity lemma, weakening (`weaken`, `weaken_cons`), and the deduction theorem (via a `deduction_aux` helper carrying an equality hypothesis). 139 lines.

### B `FormalMethods/Glivenko.lean`

The intuitionistic system `IntProof`, the parallel intuitionistic infrastructure (`int_arrow_self`, `int_weaken`, `int_weaken_cons`, `int_deduction`), the lifting `int_to_cl`, six helper lemmas (`dni`, `dni_of_proof`, `neg_imp_neg_conseq`, `neg_imp_dn_ant`, `dn_distrib`, `dn_axiom₃`), `cl_dne`, and the main theorems (`glivenko_forward`, `glivenko_reverse`, `glivenko`). 323 lines.

## C. Full Toy Proof Assistant Listings

Source: `project/formalisations/toy/`. Total ~1,470 lines of Python (source + tests). `mypy --strict src/` is clean; `pytest -q tests/` reports 51 passed.

### C Kernel (`src/formal_toy/kernel.py`)

The trusted core - one `match` over six proof-rule constructors, 96 lines including docstrings.

### C AST (`src/formal_toy/ast.py`) and Parser (`src/formal_toy/parser.py`)

`Formula` and `Proof` ADTs as frozen dataclasses (162 lines), plus the Lark grammar for formulae (80 lines).

### C Calculi (`src/formal_toy/calculus.py`)

`CLASSICAL` and `INTUITIONISTIC` rule tables. 54 lines.

### C Theorem 1 in the Toy (`src/formal_toy/theorems/deduction.py`)

`arrow_self`, `weaken`, `weaken_cons`, and `deduction_transform`. 145 lines.

### C Theorem 2 in the Toy (`src/formal_toy/theorems/glivenko.py`)

`cl_ex_falso`, `int_to_cl`, `dni`, `dni_of_proof`, `neg_imp_neg_conseq`, `neg_imp_dn_ant`, `dn_distrib`, `dn_axiom_three`, `cl_dne`, `glivenko_translate`, `glivenko_reverse`. 343 lines.

### C REPL (`src/formal_toy/repl.py`)

The interactive front-end, with the four commands `:parse`, `:glivenko`, `:help`, `:quit`. 121 lines.

### C Tests (`tests/`)

Five test modules (`test_ast.py`, `test_parser.py`, `test_kernel.py`, `test_deduction.py`, `test_glivenko.py`) totalling 471 lines and 51 assertions, all green.

## D. Supervision Meeting Log Excerpt

See `project/supervision.md` for the full meeting log. LO3 (time management, documentation) is evidenced by the weekly logbook entries in `project/logbook.md` and the dated meetings in `project/supervision.md`. The handwritten, signed master logbook is filed as `Logbook.pdf` in the vault.

## E. Build and Verification Commands

The two primary artefacts are verifiable from the repository with the commands below.

**Lean 4 (no mathlib dependency):**

```bash
cd project/formalisations/lean/formal_methods
lake build
# expect: "Build completed successfully." - no errors, no `sorry`.
```

**Python toy assistant (Python 3.11+):**

```bash
cd project/formalisations/toy
pip install -e ".[dev]"
python -m mypy --strict src/       # expect: Success: no issues found
python -m pytest -q                # expect: 51 passed
```

The REPL is launchable with `python -m formal_toy` (or `formal-toy` if the package has been installed with its console script).

# References

IEEE-numbered reference list for the final report. This is the single source of truth: section files cite as `[N]` where `N` matches the number below. Obsidian will handle PDF / LaTeX export at submission time - no Pandoc or external bibliography tool is in the loop.

> Sources \[1\]–\[12\] are the originally-submitted Research Plan bibliography. \[13\]–\[14\] were added after the 2026-01 pivot to support the toy-assistant implementation chapters. \[15\]–\[17\] were added during the 2026-04 restructure to back the AI-inflection (§4) and defence-in-depth (§2) framing.

\[1\] M. Ayala-Rincón and F. L. C. de Moura, *Applied Logic for Computer Scientists: Computational Deduction and Formal Proofs*, Springer, 2017.

\[2\] H. Geuvers, "Proof assistants: history, ideas and future," *Sadhana*, vol. 34, pp. 3–25, 2009.

\[3\] L. C. Paulson, "A machine-assisted proof of Gödel's incompleteness theorems for the theory of hereditarily finite sets," *Review of Symbolic Logic*, vol. 7, no. 3, pp. 484–498, 2014.

\[4\] E. Mendelson, *Introduction to Mathematical Logic*, 6th ed., CRC Press, 2015.

\[5\] L. de Moura, S. Kong, J. Avigad, F. van Doorn, and J. von Raumer, "The Lean theorem prover (system description)," in *25th International Conference on Automated Deduction (CADE-25)*, Berlin, Germany, 2015.

\[6\] Y. Bertot and P. Castéran, *Interactive Theorem Proving and Program Development: Coq'Art – The Calculus of Inductive Constructions*, Springer, 2004.

\[7\] G. Gonthier, A. Asperti, J. Avigad, Y. Bertot, C. Cohen, F. Garillot, S. Le Roux, A. Mahboubi, R. O'Connor, S. O. Biha, I. Pasca, L. Rideau, A. Solovyev, E. Tassi, and L. Théry, "A machine-checked proof of the odd order theorem," in *Interactive Theorem Proving (ITP 2013)*, LNCS 7998, 2012.

\[8\] G. Gonthier, "A computer-checked proof of the four colour theorem," in *Handbook of the History of Logic, Vol. 9: Computational Logic*, Elsevier, 2012.

\[9\] R. P. Nederpelt and H. Geuvers, *Type Theory and Formal Proof: An Introduction*, 2nd ed., Cambridge University Press, 2023.

\[10\] T. Tao, T. Gowers, B. Green, and F. Manners, "Marton's Polynomial Freiman-Ruzsa conjecture," preprint, 2024. \[Online\]. Available: <https://teorth.github.io/pfr/>

\[11\] G. Lowe, "Breaking and fixing the Needham-Schroeder public-key protocol using CSP and FDR," in *Tools and Algorithms for the Construction and Analysis of Systems (TACAS '96)*, 1995.

\[12\] B. Smyth, "Formal verification of cryptographic protocols," Ph.D. dissertation, University of Birmingham, 2011.

\[13\] B. C. Pierce, *Types and Programming Languages*, MIT Press, 2002.

\[14\] R. Harper, *Practical Foundations for Programming Languages*, 2nd ed., Cambridge University Press, 2016.

\[15\] T. H. Trinh, Y. Wu, Q. V. Le, H. He, and T. Luong, "Solving olympiad geometry without human demonstrations," *Nature*, vol. 625, no. 7995, pp. 476-481, 2024.

\[16\] P. Song, K. Yang, and A. Anandkumar, "Lean Copilot: Large language models as copilots for theorem proving in Lean," arXiv preprint arXiv:2404.12534, 2024.

\[17\] N. G. Leveson and C. S. Turner, "An investigation of the Therac-25 accidents," *Computer*, vol. 26, no. 7, pp. 18-41, 1993.
