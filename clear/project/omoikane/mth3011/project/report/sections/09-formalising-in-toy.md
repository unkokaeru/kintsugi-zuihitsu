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
        ...
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
