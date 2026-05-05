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
class Formula: ...

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
    ctx: tuple[Formula, ...]
    formula: Formula

@dataclass(frozen=True, slots=True)
class AxiomA1(Proof):
    ctx: tuple[Formula, ...]
    a: Formula
    b: Formula

@dataclass(frozen=True, slots=True)
class AxiomA2(Proof):
    ctx: tuple[Formula, ...]
    a: Formula
    b: Formula
    c: Formula

@dataclass(frozen=True, slots=True)
class AxiomA3(Proof):
    ctx: tuple[Formula, ...]
    a: Formula
    b: Formula

@dataclass(frozen=True, slots=True)
class ExFalso(Proof):
    ctx: tuple[Formula, ...]
    a: Formula

@dataclass(frozen=True, slots=True)
class ModusPonens(Proof):
    ctx: tuple[Formula, ...]
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
