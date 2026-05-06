# Report Bullet Outline: Formal Methods in Mathematics

## 2. Trust and Verification in Software Engineering

### 2.2 Why Each Layer Exists

- Each layer was added because the previous layers missed a specific error class
- Key failures referenced:
	- Therac-25: race conditions and weak safety interlocks became lethal [17]
	- Ariane 5 Flight 501: unprotected 64-bit float to 16-bit signed integer conversion in reused inertial-reference software; inquiry board recommended fuller testing and review of software assumptions [19]
	- Intel Pentium FDIV flaw (1994): $475m pretax charge [20]
	- AWS TLA+: formal specification of critical distributed-system designs before production [21]
- Cost of failure determines how aggressively a new layer is deployed

### 2.3 The Cumulative Effect

- By 2026: working programmers trust code that has passed through the layers; trust is in the chain, not the author
- Senior engineers reviewing PRs do not re-derive correctness - they confirm types pass, tests meaningful, CI green, design fits codebase
- This is the trust model mathematics is missing

---

## 3. Trust and Verification in Mathematical Practice

- Mathematics has had one layer in the Section 2 sense: write proof → referees read → journal accepts/rejects → enters literature
- No analogue of types, CI, or fuzzing; peer review carries the entire trust weight
- Worked when proofs were human-scaled (fit in journals, verifiable in a sitting or two)
- Famous 19th-century exceptions: Kempe's 1879 four-colour "proof" (flaw spotted by Heawood 11 years later); Russell's paradox in Frege's Grundgesetze

### 3.1 Scale

- Feit-Thompson [7]: 255 pages of dense character theory - no individual reads it carefully
- Community trusts that relevant experts read relevant pieces, which is right often enough not to collapse, but…
- Feit-Thompson Coq formalisation (~6 person-years, 150,000 lines) found no substantive error in the 1963 original - itself a substantive finding

### 3.2 Specialisation

- Modern mathematics has the same fragmentation problem as modern software - subfield specialists cannot audit adjacent specialists
- Wiles' 1993 Fermat's Last Theorem announcement contained a gap collaborators did not catch immediately; required Taylor's joint work; repaired 1994 version is the canonical proof [23]
- A less famous gap might still be there

### 3.3 Speed

- Rate of results entering literature has accelerated; rate of careful audit has not
- Needham-Schroeder: all three pressures (scale, specialisation, speed) interacted - published 1978, accepted as secure, broken 1995 via formal analysis when Lowe arrived with FDR and a different tool [11]

### 3.4 What Mathematics Has Tried

- Bourbaki's foundational rewrite: improved legibility but not mechanical checking - the layer remained human
- Hilbert's programme: same limitation
- Geuvers [2] surveys the long formalisation push from Automath (1967) forward
- What proof assistants offer that earlier projects could not: mechanisation - checked line by line by a small kernel that does not tire, skim, or assume reputability

---

## 4. Artificial Intelligence and Mechanical Checking

- The framing (maths has one layer, programming has six) holds independently of AI - but three AI-era developments sharpen it

### 4.1 Speed

- LLMs can produce mathematical text faster than any human referee can check it
- Candidate-to-check throughput ratio: programming circa 2010 fixed slow CI by improving CI, not slowing developers; maths today must speed up the check (i.e., mechanical checking), not slow the LLM

### 4.2 Hallucination

- LLMs confidently assert false statements; in maths: plausible-looking inferences that do not follow, misquoted lemmas, citations to non-existent papers
- Failure mode is alien to heuristics human reviewers have developed - reviewers expect errors from misunderstanding, not from no understanding at all
- Danger: false statement in the shape of a valid one - exactly what peer review is least equipped to catch at speed

### 4.3 Where AI Is Helping (three Concrete examples)

- **PFR / Tao's blueprint methodology [10]**: Marton's PFR conjecture decomposed in advance into a lemma graph, discharged in parallel by dozens of contributors with mathlib automation; Lean's kernel re-checked each lemma before it counted; weeks not years
- **AlphaProof and AlphaGeometry 2 on IMO 2024 [15]**: DeepMind RL-trained models emitted Lean tactic scripts; Lean's kernel certified four of six problems at silver-medal level; outputs explicitly LLM-generated and explicitly human-untrusted; credibility comes from mechanical certification
- **Lean-Copilot and proof autoformalisation [16]**: tools translate between informal maths and Lean; still can be confidently wrong; without kernel unusable, with kernel useful
- Thread through all three: the kernel did the work peer review could not, at the speed AI required

### 4.4 Where AI Is Hurting

- Mathematical content produced by LLMs without kernel checking: invalid proof steps, misquoted lemmas, bibliographically plausible but unsupporting citations
- AI can produce candidate arguments faster than humans can audit
- AlphaProof outputs are trustworthy only *after* Lean's kernel checks them [15]; chatbot outputs are dangerous because nothing does - the difference is whether a kernel sits between the model and the literature

### 4.5 The Pressure Point

- Inflection: AI capable of producing publishable-looking mathematics *and* publishable-looking errors now exists; the only reliable filter is mechanical proof checking
- Peer review remains valuable for taste, framing, significance, exposition - but it is no longer load-bearing for correctness when the proposer is not human
- Programming went through this transition ~10 years earlier: when linters/compilers/CI outpaced reviewers, reviewers stopped checking what tools could check and focused on what they could not

---

## 5. Logical and Type-Theoretic Background

### 5.1 Propositional and First-Order Logic

- Propositional logic: atomic variables, connectives `∧ ∨ ⟹ ¬`, Hilbert-style proof system (three axiom schemas + modus ponens per Mendelson [4, ch. 1])
- Formula: built recursively from atoms and connectives
- Semantics: valuation assigning True/False to atoms, extended homomorphically
- Proof: finite sequence of formulae, each an axiom instance or derived by an inference rule
- Hilbert-style used here (over natural deduction/sequent calculus): sparse rules (A1, A2, A3 + MP in Mendelson), natural setting for Glivenko's theorem [4, ch. 1]
- **Soundness**: every provable formula is a tautology
- **Completeness** (propositional, Post): every tautology is provable
- These two properties pin syntax to semantics - grounds the toy and Lean formalisations
- First-order logic adds quantifiers `∀ ∃`; Ayala-Rincón and de Moura [1] cover propositional and first-order deduction in parallel; both theorems here are pure propositional, so toy stays propositional-only

### 5.2 Type Theory

- Type theory: treats proofs as structured data, propositions as types those data inhabit - the basis of every modern proof assistant
- Simply-typed λ-calculus (Church): variables, λ-abstractions, applications; types assigned by formation rules; Nederpelt and Geuvers [9, chs. 2-4] is the reference used; Pierce [13, ch. 9] is the PL-theoretic companion
- **Dependent types**: type form varies with a value (e.g., `Vec n` depends on `n`); lifts type theory from PL tool to foundation for mathematics
- **Calculus of Inductive Constructions (CIC)**: dependent-type theory underneath both Coq [6] and Lean 4 [5]; both are roughly implementations of CIC with different elaboration and tactic layers
- Kernel-level proof checking (Harper [14]): fix small trusted type-checker → elaborate user-written term to fully-explicit core syntax → run type-checker; whether kernel accepts or rejects is the single point of trust

### 5.3 The Curry-Howard Correspondence

- "Propositions as types, proofs as programs"

| Logical connective   | Type-theoretic counterpart            |
|----------------------|---------------------------------------|
| `A ⟹ B`              | `A → B` (function type)               |
| `A ∧ B`              | `A × B` (product)                     |
| `A ∨ B`              | `A + B` (sum)                         |
| `⊥` (falsum)         | empty type                            |
| `∀ x : T. P(x)`      | `(x : T) → P(x)` (dependent Π)       |
| `∃ x : T. P(x)`      | `Σ (x : T), P(x)` (dependent pair)   |

- Reference: Nederpelt and Geuvers [9, pt. III]
- Applied here: `deduction_transform` in the toy is a recursive function transforming proof trees - under Curry-Howard, it *is* the deduction theorem; its type signature is the theorem's statement; kernel re-check plays the role of the compiler's type check

### 5.4 Gödel's Incompleteness Theorems

- **First incompleteness theorem**: any consistent formal system capable of encoding Peano arithmetic contains true statements it cannot prove
- **Second incompleteness theorem**: such a system cannot prove its own consistency from within
- Reference: Mendelson [4, ch. 3]; first complete Isabelle/HOL formalisation by Paulson [3] (stated over hereditarily finite sets to keep syntactic coding manageable)
- Practical consequence: every kernel sits on a trusted computing base it cannot verify from inside; confidence comes from the base being small, auditable, stable
- **de Bruijn criterion**: a proof assistant is trustworthy if its kernel is small enough for a careful reader to audit by hand
	- Lean 4 kernel: ~6,000 lines C++
	- Toy kernel (Section 8): 96 lines Python, re-verified after every transformer's output
- Section 12.4 returns to this: Gödel does not let any system escape incompleteness, but a small kernel relocates trust from a distributed social process to a centralised auditable artefact

### 5.5 Short History of Proof Assistants

- de Bruijn's Automath (1967) - first proof-assistant-like system; pioneered explicit proof terms and a checker separate from the tactic engine
- LCF (Milner, 1972) - introduced tactic/goal metaphor; ML metalanguage (ancestor of OCaml)
- HOL (Gordon, 1980s) - classical higher-order-logic system
- Coq (1989) - CIC-based; reference for formalised mathematics for three decades
- Isabelle/HOL - HOL + Isar structured-proof language
- Lean (de Moura 2013; Lean 4, 2021) - CIC-based; mathlib library now the centre of gravity for contemporary formalised mathematics [2]
- Two design families:
	- Dependent type theory: Coq, Lean, Agda (descended from Automath/Coq)
	- Higher-order logic: HOL Light, Isabelle/HOL (descended from LCF/HOL)
	- PVS: classical HOL-family but with industrial-verification heritage; substantial NASA Langley use [22]
- Hands-on scope here: dependent-type-theory family (Lean 4 + toy); Section 6 draws on wider ecosystem from literature

---

## 6. Proof Assistants

### 6.1 What a Proof Assistant Is

- Four components:
  1. **Trusted kernel** - small type-checker; accepts/rejects fully-elaborated proof terms; only part whose correctness matters for soundness; Lean 4 ~6,000 lines C++, Coq similar
  2. **Elaborator** - bridge between what user writes (concise, implicit args, typeclass resolution, notation) and what kernel sees (fully explicit core-logic terms)
  3. **Tactic language** - metaprogramming layer for proof scripts
  4. **Library** - accumulated corpus of formalised results
- **de Bruijn criterion** [2]: trust concentrated in kernel; anything produced outside (tactic, automation, external tool, LLM) must be re-checked by kernel before counting
- Toy in Section 8 follows this explicitly: every proof produced by transformers is re-verified by `formal_toy.kernel.check` before the toy accepts it - same pattern as CI re-building and re-testing every commit regardless of author confidence

### 6.2 Lean 4

- Lean 4 [5]: developed by Leonardo de Moura et al., current form from 2021; CIC with cumulative universe hierarchy; kernel size comparable to Coq's
- Three distinguishing design decisions:
  1. Kernel is small; elaborator does the heavy lifting (implicit args, typeclass resolution, unification all at elaboration time)
  2. Tactics are first-class Lean functions - macros and metaprograms written in the same language as the object logic
  3. Mathlib is large, coherent, and has a single namespace and contribution process
- VS Code integration: InfoView renders proof state in real time; hole-driven development with `sorry` or named holes; automation tactics (`exact?`, `polyrith`, `decide`, `omega`) dispatch common goal shapes
- Most visible recent demonstration: PFR conjecture formalisation [10] - Tao-coordinated community effort, three weeks from preprint to complete machine verification; blueprint methodology is reusable infrastructure (Section 7.4)

### 6.3 Ecosystem (literature Only, not hands-on)

#### 6.3.1 Coq

- CIC-based, INRIA, since 1989; behind Feit-Thompson [7] and Four Colour [8]
- Tactic languages: Ltac (dynamically typed), Ltac2 (statically typed), Ssreflect (third dialect, optimised for large algebraic proofs - used for Feit-Thompson)
- Mathematical Components is principal maths corpus; less unified than Lean's mathlib

#### 6.3.2 Agda

- Dependent-type-theory; ML-style syntax; programming-by-holes culture
- Library coverage trails Lean and Coq; automation less developed
- Traction is pedagogical and in type-theory research (HoTT)
- Not the reach-for tool without a specific pedagogical reason

#### 6.3.3 Isabelle/HOL

- Classical higher-order logic - makes excluded middle idiomatic (unlike Lean/Coq, which require opting in)
- Isar structured-proof language reads more like mathematical prose than tactic scripts
- Archive of Formal Proofs (AFP): large body of formalisations
- Sledgehammer: dispatches goals to external ATPs (E, Vampire, Z3, etc.) and backtranslates successful proofs - no direct Lean equivalent; major productivity multiplier
- Paulson's Gödel incompleteness formalisation [3] is canonical demonstration of metamathematical reach

#### 6.3.4 PVS

- Industrial/safety-critical verification tradition; NASA Langley formal-methods programme [22]
- Classical HOL with subtyping; smaller community; industrial-verification flavour
- Included because Section 1's Knight-Capital framing has an industrial axis that research-maths systems do not cover

### 6.4 Tool Choice Summary

- No single tool dominates every axis
- Lean: wins on research-mathematics momentum, mathlib breadth, community activity, tactic readability; loses on maturity (youngest major system; early Lean 4 breaking changes), industrial uptake
- Coq: wins on long-term stability, proven record on landmark verifications, OCaml ecosystem integration; loses on library fragmentation, steeper tactic learning curve
- Agda: pedagogy and HoTT
- Isabelle/HOL: ergonomics of classical proofs
- PVS: where a specific industrial regulator expects it
- Answer to "where do formal methods matter?" depends on community; research maths → Lean; industrial verification → Coq/Isabelle/PVS depending on domain
- Section 12 returns to this when separating "where formal proofs earn their cost" from "where they over-tool the target"

---

## 7. Case Studies in Formal Verification

Five landmark formalisations spanning tools (Coq, Isabelle/HOL, Lean 4, CSP/FDR), eras (1995-2024), and purposes (pure maths, foundational logic, security-protocol verification). Each follows: claim → formalisation details → what it demonstrates.

### 7.1 The Feit-Thompson Odd Order Theorem [7]

- **Claim**: every finite group of odd order is solvable (Feit-Thompson, 1963, 255 pages; anchors classification of finite simple groups)
- **Formalisation**: Microsoft Research/INRIA team led by Gonthier; 2006-2012; Coq + Ssreflect + Mathematical Components library (which they developed in parallel)
- **Scale**: ~150,000 lines, ~4,000 definitions, ~13,000 lemmas, ~6 person-years
- **What it shows**:
	- Reorganised the classification infrastructure - exposed implicit dependencies between chapters
	- Found no substantive mathematical error in the 1963 original - itself a finding at this length
	- For Section 12 cost-benefit: 150,000-line figure includes the Mathematical Components infrastructure needed to *state* the proof, not just the proof itself

### 7.2 The Four Colour Theorem [8]

- **Claim**: every planar map can be four-coloured (Appel and Haken, 1976; first major computer-assisted proof; case analysis of ~1,500 configurations could not be checked by hand)
- **Formalisation**: Gonthier; Coq; ~2005; ~60,000 lines
- **What it shows**:
	- Closes the epistemic loop Appel and Haken opened - a computer-assisted proof can be verified by another system with a far smaller trusted base than the original C implementation
	- For proofs whose shape is "check these many cases", marginal cost of formalisation is near-zero once the mathematical framework is in place - the case analysis becomes a decidable computation the kernel evaluates
	- With Feit-Thompson, brackets the cost spectrum: mechanical case enumeration (cheap end) vs structural mathematical argument (expensive end)

### 7.3 Gödel's Incompleteness Theorems, Formalised [3]

- **Claim**: Gödel's two incompleteness theorems are formally provable (Paulson, 2014; Isabelle/HOL)
- **Formalisation**: stated over hereditarily finite sets rather than Peano arithmetic (simpler coding while results remain substantively equivalent); first complete machine-checked proof of both theorems
- **What it shows**:
	- Surfaced assumptions about syntactic substitution that informal treatments leave implicit - formalisation has no choice but to discharge them
	- Proof assistants do not collapse at the meta-level: theorems *about* the limits of formal systems are formally checkable
	- Prevents Section 12.4's Gödel caveat from being read as defeat: the practical benefit (small auditable kernel) does not require escaping the theoretical impossibility

### 7.4 The PFR Conjecture in Lean 4 [10]

- **Claim**: Marton's Polynomial Freiman-Ruzsa conjecture (resolved by Tao, Gowers, Green, Manners, late 2023)
- **Formalisation**: within three weeks of preprint; Tao-coordinated community effort in Lean 4; blueprint methodology - paper decomposed into annotated lemma dependency graph, contributors discharge lemmas in parallel with mathlib automation; Lean's kernel certifies each before it counts
- **What it shows**:
	- Lean 4 + mathlib is mature enough to track active research in real time (Feit-Thompson: 6 years; Four Colour: multi-year; Gödel: Paulson's career attention; PFR: 3 weeks)
	- Blueprint methodology is reusable infrastructure - changes "formalise a proof" from a single-author multi-year project to a distributed weeks-long effort
	- Strongest argument among the five case studies that formal methods have crossed a threshold from specialist rigour-enhancement to everyday mathematical infrastructure
	- Connects directly to Section 4's AI argument; Section 12 returns to it as the per-commit-CI shift transposed to mathematics

### 7.5 Needham-Schroeder and Formal Protocol Verification [11], [12]

- **Claim**: the Needham-Schroeder public-key protocol (1978) was believed secure
- **Formalisation / analysis**: Lowe (1995); CSP + FDR; produced an explicit man-in-the-middle attack trace [11]; also proposed a small repair (add responder's identity to second protocol message); Smyth's PhD thesis [12] generalises the methodology into a Dolev-Yao framework
- **What it shows**:
	- Only case study here where the original argument was *wrong* - formal method's contribution was falsification, not re-verification
	- Seventeen-year gap matters: in safety-critical/security-critical settings, the cost of missing errors that peer review let through is not a rounding error
	- Sets up Section 12.1's industrial-axis argument alongside Intel FDIV [20], AWS TLA+ [21], NASA PVS [22]: where mistakes are expensive, formal verification is an insurance premium not a tax

### 7.6 Scale Comparison Table

| Result                   | Year  | Tool                | Size (LoC)    | Effort                             | Kind of finding                  |
|--------------------------|-------|---------------------|---------------|------------------------------------|----------------------------------|
| Feit-Thompson Odd Order  | 2012  | Coq / Ssreflect     | ~150,000      | ~6 person-years                    | Re-verification at scale         |
| Four Colour Theorem      | ~2005 | Coq                 | ~60,000       | multi-year                         | Closed the Appel-Haken loop      |
| Gödel incompleteness     | 2014  | Isabelle/HOL        | several kLoC  | single-person, months              | Surfaced informal subtleties     |
| PFR conjecture           | 2024  | Lean 4 + blueprint  | (distributed) | ~3 weeks (dozens of contributors)  | Real-time formalisation          |
| Needham-Schroeder        | 1995  | CSP + FDR           | small         | short                              | Falsified a 17-year-old result   |

---

## 8. Construction of a Toy Proof Assistant

- Goal: by the end of this section, the reader understands what a proof assistant does internally - the toy is built in front of them
- Lean's kernel ~6,000 lines C++ (irreducible to a tutorial); toy ~100 lines Python (reducible to one)
- Build proceeds in the actual order decisions were made: choose logic → represent syntax → represent proofs → write kernel → distinguish calculi → add parser → add tests
- Full source in `project/formalisations/toy/`; load-bearing pieces quoted in-section; full listings in Appendix C

### 8.1 Motivation for the Construction

- Reading explains *what* a kernel is; building one reveals *why* it is the way it is
- Design decisions (data structures, cases in `match`, exhaustiveness enforcement) emerge from building, not from reading
- Pierce [13]: implementation is the discipline where vague intuitions collide with the cases they must handle

### 8.2 Choosing the Logic

- First decision: what fragment of logic will the kernel check?
- Both shortlisted theorems (Deduction Theorem; Glivenko's) are pure propositional → toy stops at propositional logic
- Primitive vocabulary: variables, falsum (`⊥`), implication (`→`); negation `¬A` defined as `A → ⊥`; no conjunction or disjunction (neither shortlisted theorem needs them)
- Axiom schemas:
	- A1: `A → (B → A)`
	- A2: `(A → (B → C)) → ((A → B) → (A → C))`
	- A3 (classical): `(¬B → ¬A) → (A → B)`
	- ExFalso (intuitionistic, replaces A3): `⊥ → A`
- Classical: A1 + A2 + A3 + MP; Intuitionistic: A1 + A2 + ExFalso + MP
- Supervisor's steer (March 2026 pivot): "don't overbuild the toy; it only needs to be big enough for the chosen theorems" - REMINDER: mention the pivot/supervisor steer explicitly

### 8.3 Representing Formulae

- Formula is a tree of atoms and connectives; natural Python encoding is an algebraic data type
- `@dataclass(frozen=True)` + inheritance + PEP-634 structural pattern matching gives ~90% of ML-style sum type discipline

```python
class Formula: …

@dataclass(frozen=True, slots=True)
class Var(Formula):
    index: int          # surface: p0, p1, p2, …

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

- `frozen=True`: hashable and immutable - kernel compares formulae for equality; mutable values are a known source of subtle bugs
- `slots=True`: saves memory (toy never reaches scale where this matters, but costs nothing)
- Negation is a function, not a constructor: `¬A` and `A → ⊥` are *the same value* - gives kernel one fewer case to match

### 8.4 Representing Proofs

- Proof is also a tree: tree of inference-rule applications
- Five constructors for classical kernel, plus one for the intuitionistic-only rule:
	- `Assumption(ctx, formula)` - an assumption drawn from context
	- `AxiomA1(ctx, a, b)` - instance of axiom A1
	- `AxiomA2(ctx, a, b, c)` - instance of axiom A2
	- `AxiomA3(ctx, a, b)` - instance of axiom A3 (classical only)
	- `ExFalso(ctx, a)` - ex falso quodlibet (intuitionistic only)
	- `ModusPonens(ctx, imp, ant)` - MP application, imp and ant are sub-`Proof` objects
- Design choices:
	- `ctx` is a **tuple** (not a list) - tuples are hashable; kernel compares contexts for equality during MP
	- Every `Proof` subclass carries its own `ctx` - self-contained (no threaded state parameter); redundancy is what the kernel cross-checks
	- A `ModusPonens` whose subproofs have a different context than the conclusion is rejected
- Analogy: same shape as a typed AST in a compiler - each node carries type info the type-checker needs; proof object is a typed AST whose "type" is the formula it derives

### 8.5 Writing the Kernel

- Kernel is a single function: `check(proof: Proof, calculus: Calculus) → Formula`; raises `KernelError` on failure; body is one `match` over six proof types

```python
def check(proof: Proof, calculus: Calculus) -> Formula:
    rule = type(proof)
    if not calculus.permits(rule):
        raise KernelError(f"rule {rule.__name__} not allowed in calculus {calculus.name!r}")
    match proof:
        case Assumption(ctx=ctx, formula=phi):
            if phi not in ctx:
                raise KernelError(…)
            return phi
        case AxiomA1(a=a, b=b):
            return Arrow(a, Arrow(b, a))
        case AxiomA2(a=a, b=b, c=c):
            return Arrow(Arrow(a, Arrow(b, c)), Arrow(Arrow(a, b), Arrow(a, c)))
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

- **96 lines of Python, including docstrings; six structural cases; one `match`**
- Three design points to flag:
  1. Rule-set check runs *before* structural check - cleaner rejection of wrong-calculus proofs without recursing into subproofs
  2. `Assumption` requires the named formula to actually be in context - the kernel's only membership check
  3. `ModusPonens` requires imp and ant subproofs to share the conclusion's context exactly - weakening handled outside kernel by a dedicated transformer
- `mypy --strict` checks that the `match` is exhaustive over `Proof` - if a 7th proof rule is added without updating the kernel, mypy rejects it before tests run

### 8.6 Encoding Two Calculi

- Calculus is data, not code - a `Calculus` is a `frozenset` of permitted rule classes

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

- Entire distinction between classical and intuitionistic propositional logic in this toy: which `frozenset` was passed to `check`
- Glivenko's theorem (Section 9.2) operates exactly on this distinction
- Transparency advantage over Lean: in the toy, the two calculi are two values of the same type; in Lean they would be two different inductive types and their relationship would be implicit in lifting lemmas

### 8.7 Surface Syntax

- Proofs written as Python values; formulae parsed from strings using Lark:

```python
?start:       implication
?implication: negation ("->'" implication)? 	- > maybe_imp
?negation:    "~" negation                  	- > neg_form
            | atom
?atom:        VAR                           	- > var
            | BOT                           	- > bot
            | "(" implication ")"
VAR:          "p" INT
BOT:          "_|_" | "⊥"
```

- Four productions, two tokens, a `Transformer` subclass producing `Formula` values directly
- `?` prefix elides intermediate `Tree` wrappers
- REPL commands: `:parse <formula>`, `:glivenko <formula>`, `:help`, `:quit`
- `:glivenko` demo is the trust chain in miniature: parse → build classical proof → run Glivenko translation → re-check both classical and intuitionistic outputs with kernel; every step shown

### 8.8 Engineering: Types, Tests, Errors

- `mypy --strict` - runs against `src/`; enforces complete annotations; checks kernel `match` is exhaustive; caught two early bugs in the Glivenko transformer (pattern variables rebound across `case` branches with incompatible types)
- `pytest -q` - 51 assertions across five modules; pattern in every theorem-related test: construct proof → hand to kernel → compare kernel output to expected formula; kernel is the oracle
- Error messages aim at cause: e.g., `rule AxiomA3 not allowed in calculus 'intuitionistic'` - points at the failed rule and rejecting calculus in plain English; Lean's mismatch errors span multiple lines of elaborated types (no elaboration layer between user and kernel in the toy)

### 8.9 The Complete Artefact

- Structure:

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

- ~1,000 lines source + 470 tests; kernel is 96 lines
- Verification:
	- `python -m mypy --strict src/` → exhaustiveness + type correctness
	- `python -m pytest -q` → 51 passed
- Combination is the toy's correctness statement: types pass + tests pass = CI-equivalent

### 8.10 Consequences of the Construction

- A reader following along has seen the entire proof assistant - every line of trusted code, every design choice, every reason behind it; Lean's source does not yield this (optimised for industrial-scale, not tutorial transparency)
- Three observations to carry forward to Section 11:
  1. Kernel really is small - 96 lines; Lean's is ~60× larger because it handles a much larger logic, but the structural shape (read proof term → match against rules → return derived type or reject) is the same
  2. Calculus distinction is data, not code - Lean must encode this differently (two inductive types); relationship harder to see from outside
  3. Trust chain is fully visible - reader can audit the kernel and trust that nothing else in the toy contradicts the kernel's verdict

---

## 9. Formalising Two Theorems in the Toy Assistant

- Toy from Section 8 is a kernel + scaffolding; Section 9 puts it to work on the two shortlisted theorems
- Both are Python transformers: functions taking a proof object and returning another proof object; kernel re-checks every output
- Selection criteria: one metatheoretic result *about* the proof system (Deduction Theorem); one classical named result *inside* propositional logic (Glivenko's)

### 9.1 Theorem 1: The Deduction Theorem

- **Statement** (Mendelson [4, ch. 1]): for a Hilbert-style propositional calculus with A1, A2, A3 and MP - if `Γ ∪ {A} ⊢ B` then `Γ ⊢ A ⟹ B`
- In the toy: the theorem is at the *meta* level - a Python function transforming proof trees (contrast with Lean Section 10, where it is proved inside the object logic)
- Function signature:

```python
def deduction_transform(proof: Proof, hyp: Formula, calculus: Calculus) -> Proof:
    rest: Context = proof.ctx[1:]
    match proof:
        case Assumption(formula=phi):
            if phi == hyp:
                return arrow_self(rest, hyp)          # Γ ⊢ hyp ⟹ hyp
            h_phi = Assumption(ctx=rest, formula=phi)
            h_a1 = AxiomA1(ctx=rest, a=phi, b=hyp)
            return ModusPonens(ctx=rest, imp=h_a1, ant=h_phi)
        # axiom cases: wrap with A1 + MP
        # MP case: A2 + MP + MP (recursive calls on both subproofs)
        …
```

- Statement embedded in signature: if input's context begins with `hyp` and derives `B`, output's context is the remainder and derives `hyp ⟹ B`
- Correctness certified by re-checking output with `formal_toy.kernel.check`
- Tests (`tests/test_deduction.py`): eight cases (assumption head, assumption tail, each axiom instance, MP, weakening round-trip, A2-instance sanity check) - all green (51 passed total)
- Under Curry-Howard: `deduction_transform` *is* the deduction theorem - signature is the statement, body is the proof; Lean (Section 10.2) writes the same argument inside the object logic; toy writes it one level up in Python; both are correct

### 9.2 Theorem 2: Glivenko's Theorem

- **Statement** (Glivenko 1929): for any propositional formula `A` and context `Γ` - `Γ ⊢_CL A` iff `Γ ⊢_INT ¬¬A`
- Two functions in `formal_toy/theorems/glivenko.py`:
	- `glivenko_translate`: classical proof → intuitionistic proof of double negation (forward direction)
	- `glivenko_reverse`: back again (reverse direction)
- Forward direction recurses on structure of classical proof:

```python
def glivenko_translate(proof: Proof) -> Proof:
    match proof:
        case Assumption(…): return dni_of_proof(Assumption(…))
        case AxiomA1(…):    return dni_of_proof(AxiomA1(…))
        case AxiomA2(…):    return dni_of_proof(AxiomA2(…))
        case AxiomA3(ctx, a, b): return dn_axiom_three(ctx, a, b)   # the hard case
        case ModusPonens(ctx, imp_proof, ant_proof):
            …  # uses dn_distrib + two recursive calls
```

- Helpers (correspond name-for-name to Lean theorems in `FormalMethods/Glivenko.lean`): `dni`, `dn_distrib`, `dn_axiom_three`, `neg_imp_neg_conseq`, `neg_imp_dn_ant`, `cl_dne`
- `int_to_cl` lift: every intuitionistic derivation is a classical one (using A3 to classically derive `⊥ → A`)
- Kernel re-check certifies each output; all assertions green in `tests/test_glivenko.py`
- Round-trip test: `test_glivenko_reverse_round_trip` - translates then reverse-translates `AxiomA3(P, Q)`, confirms recovered classical formula matches original

### 9.3 What the Toy Surfaced

- Two observations feeding into Section 11:
  1. Calculus-as-data (Section 8.6) carried real weight on Glivenko - the translation boundary is mechanically type-checked; a stray `AxiomA3` in the intuitionistic output gets rejected by the kernel before the test sees it; in Lean the same boundary is enforced by which inductive type the proof inhabits (equally correct but harder to inspect)
  2. AxiomA3 case is the only one doing substantive work; the other four cases (Assumption, A1, A2, MP) collapse into one-liners via `dni_of_proof` or `dn_distrib`; Glivenko's content lives almost entirely in `dn_axiom_three` (the file's longest and hardest construction) - the toy's explicit-everything style makes this asymmetry stark in a way Lean's heavier infrastructure can hide

---

## 10. Formalising the Same Theorems in Lean 4

- Both formalisations in `project/formalisations/lean/formal_methods/FormalMethods/`
- No mathlib dependency - only `List`, `Nat`, `Prop` from Lean core; dependency tree fully auditable
- Point: Section 11 measures where each tool's affordances helped and where they got in the way

### 10.1 Shared Infrastructure

- `FormalMethods/Basic.lean` defines propositional `Formula` type:

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

- Same shape as toy's `Formula` ADT (Section 8.3): implication and falsum only; negation and double negation are definitional abbreviations
- Both languages picking the same minimal vocabulary end up with similar core data structures - a finding for Section 11

### 10.2 Theorem 1: Deduction Theorem

- **Statement**: same as Section 9.1
- `Hilbert` is an inductive relation `List Formula → Formula → Prop` with five constructors (`assumption`, `axiom₁`-`axiom₃`, `modusPonens`) in `FormalMethods/DeductionTheorem.lean`
- Lean theorem:

```lean
theorem deduction {Γ : List Formula} {A B : Formula}
    (h : (A :: Γ) ⊢ B) : Γ ⊢ (A ⟹ B)
```

- Proof: induction on derivation of `B`
- Subtlety: `A :: Γ` is a compound term in the first index of `Hilbert`; Lean 4's `induction` tactic cannot generalise a compound index directly → standard fix is a helper `deduction_aux` with an equality hypothesis `Γ' = H :: Γ`, induct on that, then specialise

```lean
private theorem deduction_aux {Γ' : List Formula} {B : Formula}
    (h : Γ' ⊢ B) :
    ∀ (Γ : List Formula) (H : Formula), Γ' = H :: Γ → Γ ⊢ (H ⟹ B)
```

- Cases: `assumption` (check membership, split on whether the assumption is `H` or from rest, apply A1 + MP if rest), `axiom₁/₂/₃` (apply A1 to wrap), `modusPonens` (apply A2 + two recursive induction hypotheses)
- Full file: 139 lines (inductive definition, `arrow_self` helper, weakening lemma, main proof)
- Ergonomic detail: case names `P`, `Q`, `R` chosen to avoid shadowing outer theorem's `A` - `subst` would eliminate in the wrong direction during the assumption case otherwise
- Contrast with toy (Section 9.1): `deduction_transform` carries the same argument at meta-level (Python recursion over structural cases); Lean stays inside the object logic; both correct

### 10.3 Theorem 2: Glivenko's Theorem

- **Statement**: same as Section 9.2
- `IntProof` (intuitionistic system) defined in `FormalMethods/Glivenko.lean` - replaces `axiom₃` with ex falso quodlibet; A1, A2, and MP shared with classical `Hilbert`; reuses `Hilbert` from `DeductionTheorem.lean` as classical system (no duplicate inductive)
- Forward direction (`glivenko_forward`) by induction on classical derivation:
	- `assumption`, `axiom₁`, `axiom₂`: fold into single application of `dni` (double-negation introduction)
	- `modusPonens`: uses `dn_distrib` (distribution of `¬¬` over `⟹`) + two MP applications
	- `axiom₃`: dedicated lemma `dn_axiom₃` - the single hardest piece in the file
- `dn_axiom₃` - intuitionistic proof of `¬¬((~B ⟹ ~A) ⟹ (A ⟹ B))`:
	- Uses `neg_imp_dn_ant` and `neg_imp_neg_conseq` applied twice each to produce `¬¬(~B ⟹ ~A)`, `¬(A ⟹ B)`, `¬¬A`, `¬B` under hypothesis `¬X` where `X = (~B ⟹ ~A) ⟹ (A ⟹ B)`
	- Short internal derivation builds `¬(~B ⟹ ~A)`, MP'd against `¬¬(~B ⟹ ~A)` yields `⊥`; one more `int_deduction` peels `¬X` to produce `¬¬X`
- Reverse direction (`glivenko_reverse`): uses `int_to_cl` (lift intuitionistic to classical using A3 for `⊥ ⟹ A`) and `cl_dne` (classical double-negation elimination from A3)
- Bundled biconditional:

```lean
theorem glivenko {Γ : List Formula} {A : Formula} :
    Hilbert Γ A ↔ (Γ ⊢ᴵ ~(~A)) :=
  ⟨glivenko_forward, glivenko_reverse⟩
```

- Full file: 323 lines; helper lemma names, decomposition, and order of moves match toy step for step

### 10.4 Reflections on the Lean Side

- **Automation did not shorten these proofs**: `decide`, `tauto`, `simp` were no help against Hilbert-style axiomatic derivations (they target computational/algebraic goals); everything is explicit `Hilbert.axiom₁/₂/₃` + `modusPonens` calls - the right outcome for this target, and cleaner for cross-tool comparison
- **Repeated structural pattern**: "prove a helper with generic-context equality, then specialise" recurs for both deduction theorem and intuitionistic deduction theorem inside Glivenko (essentially the same proof with one inductive swapped for another); macro-generating the boilerplate would remove duplication but cost readability as mathematical text - explicit duplication is the right trade for pedagogical visibility
- Full listings in Appendix B: 462 lines for two theorem files, 508 including `Basic.lean`

---

## 11. Comparison of the Two Formalisations

### 11.1 Side-by-Side Metrics

| Metric                            | Lean 4                             | Toy (Python)                        |
|-----------------------------------|------------------------------------|-------------------------------------|
| Deduction theorem LoC             | 139 (incl. aux + arrow_self)       | 145 (incl. weaken + arrow_self)     |
| Glivenko LoC                      | 323 (incl. helpers)                | 343 (incl. helpers)                 |
| Kernel size                       | ~6,000 lines C++ (core only)       | 96 lines Python                     |
| Trusted computing base            | Lean kernel + compiler toolchain   | CPython + the 96-line kernel        |
| External dependencies             | none (Lean core only)              | `lark` (parser), otherwise none     |
| Automation tactics used           | none                               | n/a                                 |
| Time to first working prototype   | ~2 days (incl. toolchain fights)   | ~2 days                             |
| Exhaustiveness guarantee          | pattern-match on inductive         | `mypy --strict` on `match`          |

- Key findings from the table:
  1. LoC figures are remarkably close - within ~5% per theorem; Python `@dataclass` + `match` is nearly as compact as Lean's inductive + tactic language at this complexity
  2. Trusted bases differ starkly: Lean's kernel ~6,000 lines C++ (before counting the compiler); toy is 96 lines Python + CPython; neither is obviously safer - CPython is far larger than Lean's kernel but far more widely audited; "trust the kernel" in practice means "trust everything beneath it too"

### 11.2 Where Each Tool Won

#### 11.2.1 Where Lean Won

- **Kernel rigour as a type-checked guarantee**: Lean's inductive definitions + kernel's native exhaustiveness check mean a malformed `Proof` is not expressible as a Lean term; toy gets the same effect operationally (`mypy --strict` + kernel re-check) but guarantee is weaker - a hand-constructed `Proof` in Python that ducks the type checker fails at runtime, not type-check time
- **Proof-state feedback**: Lean's InfoView shows current goal and hypotheses as cursor moves; toy has no analogue - `deduction_transform` debugging was done with `pytest -v` and `print()`
- **Library reuse**: no mathlib used here, but the option matters - once the target moves beyond propositional logic, mathlib is the whole reason Lean is a viable research tool

#### 11.2.2 Where the Toy Won

- **Kernel transparency**: 96 lines Python, six `case` branches, readable in a single sitting; a student can audit it by inspection; Lean's kernel cannot - not because it is badly written, but because it is ~60× larger and in C++
- **Error messages**: plain English pointing at cause (e.g., `rule AxiomA3 not allowed in calculus 'intuitionistic'`); Lean's typical mismatch spans multiple lines of elaborated types; toy wins on clarity for pedagogy
- **Build and iteration speed**: `pytest -q` in under 0.25 seconds; Lean's incremental rebuild after an edit ~30 seconds from cold; with an implementation budget measured in days, that loop mattered
- **Calculus-as-data**: classical/intuitionistic distinction is two `frozenset` values in toy, two inductive types in Lean; toy's encoding makes the relationship between calculi visible at a glance; Lean's makes it implicit in lifting lemmas

#### 11.2.3 Where the Comparison Is Scope-Dependent

- **Real mathematical content**: toy is too small for anything beyond the chosen theorems - adding quantifiers or arithmetic would require extending the kernel or re-proving everything in the extended calculus
- Lean is the right tool for research mathematics at PFR scale (Section 7.4); toy is the right tool for pedagogical transparency at propositional scale
- Choosing between them for a given target is a scope question, not a quality one

### 11.3 What This Reveals About the Kernel Idea

- Both tools share a common ancestor: a typed-core checker that reads a proof object and rejects anything not built by the allowed rules
- Coq, Lean, Agda, Isabelle, and the toy are all implementations of this idea on different design budgets (dependent types vs simply-typed; industrial-library vs standalone; C++ kernel vs Python kernel)
- Toy makes this ancestor *visible* in a way Lean cannot - with elaboration, implicit resolution, and tactic metaprogramming on top, Lean's kernel is not where the user lives; in the toy, the kernel *is* the interaction
- The differences sit in layers above the kernel: elaboration, automation, library - none of those layers add to soundness; they add to ergonomics
- Tentative pedagogical suggestion: a final-year logic or type-theory course could profitably put a "build a minimal kernel" exercise before introducing Lean or Coq; the shift between "I can use the tactic language" and "I know what the kernel is doing under the tactics" is larger than expected and hard to come at from reading alone

---

## 12. Discussion

### 12.1 Where Formal Proofs Earn Their Cost

Three settings that recur across case studies and the project's own formalisations:

**Safetyand security-critical systems**

- Lowe (1995) caught what peer review missed in Needham-Schroeder for 17 years [11]
- Smyth [12] surveys wider family of cryptographic-protocol verifications built on same methodology
- Intel Pentium FDIV bug [20]; AWS formal specification and model checking [21]; NASA Langley PVS work [22]
- When undetected error costs millions or risks lives, formal verification is an insurance premium, not a tax
- Programming analogue: test budget on a high-availability service

**Frontier research mathematics**

- PFR formalisation [10]: three weeks from preprint to complete mechanical verification
- Blueprint methodology + Lean 4 + mathlib at 2023-2024 scale made this possible
- Analogous shift: programming CI from overnight builds to per-commit checks (order-of-magnitude feedback loop shift that changed what work was tractable); PFR is the same shift for proof verification

**Pedagogy**

- Building the toy assistant shifted understanding of how proof assistants work more than six months of prior reading
- Shift specifically about the kernel: easy to describe in prose, hard to internalise without building one
- Design choices only become questions when you have to answer them
- Section 8's tutorial framing aims to give the reader some of the same shift without requiring a parallel implementation
- Evidence is anecdotal but consistent

### 12.2 Where the Overhead Is Not Justified

**Routine proof reproduction**

- Reproducing an existing Lean proof in a thesis chapter without a pedagogical point adds pages but not rigour
- Supervisor's 2026-03-04 email: "if you reproduce some particular (existing) Lean proof in the thesis without clear purpose, this wouldn't count towards your actual work" - REMINDER: this is a quote from actual supervisor communication; worth checking exact wording
- Generalises: re-typesetting an existing formalisation treats the formal artefact as performance, not evidence
- Programming antipattern analogue: copy-pasted test suites re-covering already-covered code

**Over-tooling a small target**

- Section 7 scale table runs from "Needham-Schroeder, CSP + FDR, small, quick" to "Feit-Thompson, Coq + Ssreflect, 150,000 lines, six person-years"
- Needham-Schroeder is a model-checking problem, not a theorem-proving one - dependent-type-theory system would add overhead without rigour gain
- For propositional theorems at undergraduate scale, even Lean + mathlib can be over-tooling: toy matched Lean's line count on both theorems while exposing every step of the trust chain to direct audit
- Right-sizing tool to target is a real engineering question; programming analogue: debate over end-to-end testing for a CRUD app

### 12.3 Artificial Intelligence Reconsidered

Three observations from Sections 8-11 that would not surface from a Lean-only project:

1. **Toy's proof objects are emit-friendly for LLMs**: Lean's tactic scripts depend on elaborator state, implicit-argument resolution, goal-directed metaprogramming - all of which an LLM must model; toy proofs are literal dataclass values (explicit context, named records); a model emitting `AxiomA1(ctx=…, a=…, b=…)` makes a claim checkable in 96 lines of Python; transparency benefits machine generators as much as human auditors
2. **Kernel re-check discipline is what AI-in-the-loop formalisation needs**: PFR's blueprint methodology already relies on it implicitly (contributors discharge lemmas, Lean's kernel certifies each before it lands); toy-style kernel makes the discipline explicit; kernel either accepts or rejects - verdict is binary and immediate (no slow-burn debate about correctness); this is what CI gives a pull request, ported to a proof
3. **Size overlap between Python and Lean formalisations is a stronger finding than expected**: within a few percent per theorem, not orders of magnitude; industrial tool pays no size tax for proofs of this complexity; overhead lives in toolchain setup and library scale, not per-theorem verbosity; for the AI-in-mathematics conversation: if size is comparable, the case for the more transparent tool is harder to dismiss when the candidate proof came from a language model the reviewer cannot directly query

### 12.4 The Gödel Limitation

- Gödel's second incompleteness theorem [3], [4]: no consistent formal system powerful enough to encode arithmetic can prove its own consistency
- Every proof assistant sits on a trusted base it cannot verify from inside (kernel source, host-language compiler, OS, hardware)
- Toy: kernel 96 lines Python; rest is CPython (millions of lines, widely audited) + OS
- Lean: kernel ~6,000 lines C++; rest is C++ compiler + OS
- Neither is obviously safer; both are small compared to "the traditional peer-review pipeline" (which includes every human reader of the literature)
- Practical reply to Gödel: proof assistants do not escape incompleteness, but they relocate trust from a distributed social process to a centralised, small, auditable artefact
- Knight Capital's loss did not happen because nobody had a theory of correctness - it happened because the theory was distributed across people who did not all share state; the kernel concentrates state

### 12.5 Limitations

- **Scope**: two theorems, both propositional; no evidence about first-order or dependently-typed formalisation comparisons between Lean and a toy, because the toy cannot express them
- **Time**: comparative-analysis window was short; a longer run would have proven more theorems, widened the toy to first-order, and added Coq for a three-cornered comparison
- **Tool coverage**: hands-on scope is Lean 4 + Python toy; Section 6 ecosystem discussion is from literature; claims about Coq, Agda, Isabelle/HOL, and PVS are not backed by first-hand formalisation experience; Section 12.1 industrial-axis argument leans on Lowe [11], Smyth [12], and AWS/NASA literature, not first-hand industry exposure
- **Mathematical sophistication**: neither theorem is mathematically deep; argument rests on the *comparison* between tools on these theorems, not on the theorems' content

### 12.6 Future Directions

1. **Widen toy to first-order + naturals**: unlocks classical number-theoretic targets (Euclid's infinitude of primes, irrationality of √2); kernel grows by ~200 lines; key new work is substitution-safe quantifier rule and corresponding proof-object variant
2. **Add a tactic layer**: Ltac-style combinator language above the kernel; lets users write proofs as scripts rather than literal values; kernel's strict re-check discipline keeps implementation direct (tactics produce proof objects, kernel re-verifies)
3. **Verify the toy's kernel in Lean**: 96 lines is small enough to state and prove kernel correctness in Lean against a formal model of the same Hilbert calculus; self-referential but bounded; result is a Lean-backed correctness guarantee for the toy
4. **AI-assisted proof discovery on the toy**: PFR explored Lean-with-AI [10]; analogous experiment in the toy would be smaller and more controlled; toy's explicit proof objects are easier for an LLM to emit correctly than Lean's tactic scripts (every step explicit), making the toy a candidate testbed for empirical work on LLM-assisted formalisation; described as "the loose end the report most wants pulled"

---

## 13. Conclusion

- Report opened with Knight Capital's loss of >$460m in 45 minutes due to compound deployment error - not one bad line, but an interaction of code reuse, deployment, monitoring, and control; post-mortem response was another layer [18]
- Mathematics' equivalent: proof accepted on peer review, error hidden for years; examples: Wiles' 1993 announcement needing repair [23]; Needham-Schroeder's 17 years of false security [11]; community catches errors when it does and misses them when it does not - pattern of single-layer defence
- Thesis: mathematics is now in the position programming was in around 1990 - tools exist, cost has fallen, the practical question is where to start
	- PFR [10]: the layer can keep up with active research
	- AlphaProof [15]: AI-generated proofs can be routed through the layer
	- Toy (Section 8): the layer is small enough to read in one sitting
	- None of these available in 1990; AI angle not available even in 2020
- Project's contribution: toy assistant + comparison in Section 11; three things demonstrated that reading alone could not:
  1. Kernel really is small: 96 lines Python, auditable in an afternoon
  2. Size overlap between toy and Lean on these two theorems (within ~5% each) shows industrial tool pays no per-theorem tax at this complexity; overhead is toolchain setup and library scale
  3. Explicit-everything design making toy pedagogically transparent is the same property making it LLM-emit-friendly - "the loose end Section 12.6 most wants pulled"
- Answer to headline question (*where do formal methods add value, and where do they add overhead without matching rigour gain?*):
	- **Add value**: safety-critical systems, frontier research mathematics, pedagogy, and wherever the candidate proof came from a language model
	- **Add overhead without gain**: routine proof reproduction, over-tooled small targets
	- Everywhere formal methods earn their cost, the layer becomes infrastructure that gets taken for granted once it exists - the same way programmers stopped arguing about whether to write tests once tests were the default
- Closing frame: Knight Capital lost >$460m because the deployment process had not forced the defective configuration to fail before production [18]; the fix was not better trust in the deployer, it was a new automated check; mathematics has spent decades trusting the deployer; the mechanical check is now practical enough to be part of the mathematical workflow

---

## Acknowledgements

- Gratitude to supervisor [insert supervisor name] - PLACEHOLDER - for guidance and keeping scope realistic after the mid-project pivot
- Thanks to the module team for project structure and feedback process
- Thanks to developers and maintainers of Lean, mathlib, Coq, Isabelle, and wider formal-methods ecosystem

---

## References

[1] M. Ayala-Rincón and F. L. C. de Moura, *Applied Logic for Computer Scientists: Computational Deduction and Formal Proofs*. Springer, 2017.

[2] H. Geuvers, "Proof assistants: history, ideas and future," *Sadhana*, vol. 34, pp. 3-25, 2009.

[3] L. C. Paulson, "A machine-assisted proof of Godel's incompleteness theorems for the theory of hereditarily finite sets," *Review of Symbolic Logic*, vol. 7, no. 3, pp. 484-498, 2014.

[4] E. Mendelson, *Introduction to Mathematical Logic*, 6th ed. CRC Press, 2015.

[5] L. de Moura, S. Kong, J. Avigad, F. van Doorn, and J. von Raumer, "The Lean theorem prover (system description)," in *Automated Deduction - CADE-25*, Berlin, 2015, pp. 378-388.

[6] Y. Bertot and P. Castéran, *Interactive Theorem Proving and Program Development: Coq'Art*. Springer, 2004.

[7] G. Gonthier et al., "A machine-checked proof of the odd order theorem," in *Interactive Theorem Proving*, LNCS 7998, 2013, pp. 163-179.

[8] G. Gonthier, "Formal proof - the four-color theorem," *Notices of the AMS*, vol. 55, no. 11, pp. 1382-1393, 2008.

[9] R. P. Nederpelt and H. Geuvers, *Type Theory and Formal Proof: An Introduction*, 2nd ed. Cambridge University Press, 2023.

[10] T. Tao, T. Gowers, B. Green, and F. Manners, "Marton's Polynomial Freiman-Ruzsa conjecture," preprint, 2024. Available: <https://teorth.github.io/pfr/>

[11] G. Lowe, "Breaking and fixing the Needham-Schroeder public-key protocol using FDR," in *TACAS*, LNCS 1055, 1996, pp. 147-166.

[12] B. Smyth, "Formal verification of cryptographic protocols," Ph.D. dissertation, University of Birmingham, 2011.

[13] B. C. Pierce, *Types and Programming Languages*. MIT Press, 2002.

[14] R. Harper, *Practical Foundations for Programming Languages*, 2nd ed. Cambridge University Press, 2016.

[15] Google DeepMind, "AI achieves silver-medal standard solving International Mathematical Olympiad problems," 2024. Available: <https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/>

[16] P. Song, K. Yang, and A. Anandkumar, "Lean Copilot: Large language models as copilots for theorem proving in Lean," arXiv:2404.12534, 2024.

[17] N. G. Leveson and C. S. Turner, "An investigation of the Therac-25 accidents," *Computer*, vol. 26, no. 7, pp. 18-41, 1993.

[18] U.S. Securities and Exchange Commission, "SEC charges Knight Capital with violations of market access rule," 2013. Available: <https://www.sec.gov/newsroom/press-releases/2013-222>

[19] J.-L. Lions et al., *Ariane 5 Flight 501 Failure: Report by the Inquiry Board*. ESA/CNES, 1996.

[20] Intel Corporation, *1994 Annual Report*. Intel Corporation, 1995.

[21] C. Newcombe et al., "How Amazon Web Services uses formal methods," *Communications of the ACM*, vol. 58, no. 4, pp. 66-73, 2015.

[22] NASA Langley Research Center, "Langley Formal Methods Program: Theorem Proving," 2024. Available: <https://shemesh.larc.nasa.gov/fm/pvs/>

[23] A. Wiles, "Modular elliptic curves and Fermat's last theorem," *Annals of Mathematics*, vol. 141, no. 3, pp. 443-551, 1995; R. Taylor and A. Wiles, "Ring-theoretic properties of certain Hecke algebras," *Annals of Mathematics*, vol. 141, no. 3, pp. 553-572, 1995.

---

## Appendix

### A. Research Plan (As Submitted 2025-10-22)

- Reproduces the original Research Plan verbatim from `project/Research Plan.md`, sections 1-11 only (the live document has a Section 12 Addendum documenting the 2026-01 scope pivot, discussed in Section 1 and Section 12 of the main report)
- Original sections:
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

### B. Full Lean 4 Listings

- Source: `project/formalisations/lean/formal_methods/`
- No mathlib dependency; `lake build` completes with zero `sorry` and zero `axiom` (outside comments)
- Three files total: 508 lines
	- `FormalMethods/Basic.lean` - shared `Formula` type, notation (`⟹`, `~`), `neg`/`notNot` abbreviations; 46 lines
	- `FormalMethods/DeductionTheorem.lean` - classical `Hilbert` inductive, `arrow_self`, weakening (`weaken`, `weaken_cons`), `deduction_aux`, `deduction`; 139 lines
	- `FormalMethods/Glivenko.lean` - `IntProof` inductive; intuitionistic infrastructure (`int_arrow_self`, `int_weaken`, `int_weaken_cons`, `int_deduction`); lifting `int_to_cl`; six helper lemmas (`dni`, `dni_of_proof`, `neg_imp_neg_conseq`, `neg_imp_dn_ant`, `dn_distrib`, `dn_axiom₃`); `cl_dne`; `glivenko_forward`, `glivenko_reverse`, `glivenko`; 323 lines

### C. Full Toy Proof Assistant Listings

- Source: `project/formalisations/toy/`; ~1,470 lines Python (source + tests)
- `mypy --strict src/` clean; `pytest -q tests/` reports 51 passed
	- `src/formal_toy/kernel.py` - trusted core; one `match` over six proof-rule constructors; 96 lines including docstrings
	- `src/formal_toy/ast.py` - `Formula` and `Proof` ADTs as frozen dataclasses; 162 lines
	- `src/formal_toy/parser.py` - Lark grammar for formulae; 80 lines
	- `src/formal_toy/calculus.py` - `CLASSICAL` and `INTUITIONISTIC` rule tables; 54 lines
	- `src/formal_toy/theorems/deduction.py` - `arrow_self`, `weaken`, `weaken_cons`, `deduction_transform`; 145 lines
	- `src/formal_toy/theorems/glivenko.py` - all Glivenko helpers and main functions; 343 lines
	- `src/formal_toy/repl.py` - interactive front-end, four commands; 121 lines
	- `tests/` - five test modules, 471 lines, 51 assertions, all green

### D. Supervision Meeting Log Excerpt

- Full log: `project/supervision.md`
- LO3 (time management, documentation) evidenced by weekly logbook entries in `project/logbook.md` and dated meetings in `project/supervision.md`
- Handwritten, signed master logbook filed as `Logbook.pdf` in the vault

### E. Build and Verification Commands

**Lean 4 (no mathlib dependency):**

```bash
cd project/formalisations/lean/formal_methods
lake build
# expect: "Build completed successfully."	-   no errors, no `sorry`
```

**Python toy assistant (Python 3.11+):**

```bash
cd project/formalisations/toy
pip install -e ".[dev]"
python -m mypy --strict src/       # expect: Success: no issues found
python -m pytest -q                # expect: 51 passed
```

REPL: `python -m formal_toy` (or `formal-toy` if installed with console script)

---

## Rewrite Reminders

- **British English throughout** - favour "formalisation" not "formalization", "rigour" not "rigor", "behaviour", "recognised", "colour", etc. - check all -ise/-ize and -our/-or endings
- **Avoid filler and polished transitions** - cut "it is worth noting", "in this regard", "as we can see", "it is clear that", "fundamentally", and any sentence whose only job is to gesture at the next section
- **No confident rhetorical assertions without evidence** - every strong claim (e.g., "the most compelling case") should have a case study or citation behind it; the outline flags these
- **Keep the kernel/CI analogy sharp** - the programming-vs-mathematics parallel is the report's structural spine; do not let it soften into vague analogy; revisit each section where it appears and make sure it earns its place
- **Two placeholders to fill before submission**:
  1. Supervisor name in the header and Acknowledgements - [insert supervisor name]
  2. Exact wording of supervisor's 2026-03-04 email (Section 12.2) - verify the quote before including it verbatim
- **First person is used in Section 12.1 (pedagogy) and Section 12.5 (limitations)** - decide how much of this survives in your final voice; the outline preserves these as first-person notes because they read as genuine reflection rather than rhetoric
- **Mathematical notation** - use \( … \) for inline maths and \[ … \] for display maths consistently; check `⊢`, `⟹`, `¬`, `⊥`, `∀`, `∃` render in the final document's LaTeX/Markdown environment
- **Code blocks in-text** - the outline preserves abbreviated code; when rewriting, check that every code snippet still matches the actual artefacts in the repository (kernel, AST, calculi, Lean files); do not let the prose drift from the code
- **Tone in Section 8** - this section is more tutorial-conversational than the rest; maintain it, but cut any sentence that is purely atmospheric ("by the end of these pages…") if it does not carry information
- **Citations** - all references are given as bracket numbers matching the References section; when rewriting check that every citation in context maps to the correct entry; none have been fabricated
- **Section 12.6 item 4 ("the loose end the report most wants pulled")** - this phrasing is from the original; decide if you want to keep the candour or soften it; it reads well but is a stylistic choice
- **Conclusion's closing frame** - the Knight Capital callback is used three times (intro, Section 12.4, conclusion); the report intentionally bookends with it; keep, but make sure each invocation adds something new rather than just repeating the incident
