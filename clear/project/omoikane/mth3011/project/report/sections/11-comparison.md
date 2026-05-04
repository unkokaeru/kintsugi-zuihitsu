# Cross-Tool Comparison

§§9-10 produced two formalisations of the same two theorems. §11 lays them alongside each other and asks where each tool's affordances paid off and where they got in the way.

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

§5's Curry-Howard correspondence and §8.5's kernel listing together capture what the family has in common. The differences sit in the layers above: how much elaboration, how aggressive the automation, how big the library. None of those layers add to soundness; they add to ergonomics. That is the trade industrial tools have made, and it is the trade the toy explicitly does not.

One pedagogical suggestion follows, offered tentatively from one student's experience: a final-year logic or type-theory course could profitably put a build-a-minimal-kernel exercise before introducing Lean or Coq proper. The shift between "I can use the tactic language" and "I know what the kernel is doing under the tactics" is larger than expected, and hard to come at from reading alone. §12.1 picks the thread up under pedagogy as one of the three settings where formal methods earn their cost.
