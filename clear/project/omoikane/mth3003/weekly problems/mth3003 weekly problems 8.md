# MTH3003 Weekly Problems 8

> **Original Documents**: [[mth3003 weekly problem sheet 8.pdf]] / `[[mth3003 weekly problem sheet 8 handwritten solutions.pdf]]` / [[mth3003 weekly problem sheet 8 solutions.pdf]]
>
> **Vibes**: All eight problems are about [[Group action]]s - verifying actions, computing orbits and stabilisers in $S_{3}$, and proving that stabilisers are subgroups. Foundational drilling on the group-action axioms.
>
> **Used Techniques**:
>  - **Group action axioms** (i) $\lambda(e)x=x$, (ii) $\lambda(gh)x=\lambda(g)(\lambda(h)x)$.
>  - **Regular action**: $\lambda(g)x=gx$ on $X=G$.
>  - **Conjugation action**: $\lambda(g)x=gxg^{-1}$ on $X=G$. Stabiliser is the **centraliser**.
>  - **Quick Subgroup Test** for showing $\mathrm{Stab}_{G}(x)\leq G$.
>  - **Closure check**: an action requires $\lambda(g)x\in X$ - easy to forget!

***

## 8.1. Verify Regular Action Is a Group Action

> [!question]
> Check that the regular action satisfies the definition of a group action by verifying that both parts (1) and (2) of the group action definition hold.

**Solution.** Take $X=G$, $\lambda(g)x=gx$.

(1) For all $x\in X=G$: $\lambda(e)x=ex=x$. ✓

(2) For all $f,g\in G$, $x\in X=G$: $\lambda(fg)x=(fg)x=f(gx)=\lambda(f)(\lambda(g)x)$. ✓

So the regular action is an action. $\blacksquare$

---

## 8.2. Verify Conjugation Action Is a Group Action

> [!question]
> Check that the conjugation action satisfies the definition of a group action.

**Solution.** Take $X=G$, $\lambda(g)x=gxg^{-1}$.

(1) $\lambda(e)x=exe^{-1}=x$. ✓

(2) Using $(fg)^{-1}=g^{-1}f^{-1}$:

$$
\lambda(fg)x=(fg)x(fg)^{-1}=fgxg^{-1}f^{-1}=f(gxg^{-1})f^{-1}=\lambda(f)(\lambda(g)x).\;\checkmark
$$

So conjugation is an action. $\blacksquare$

---

## 8.3. Action of $S_{6}$ on $2$-Subsets

> [!question]
> Let $G = S_{6}$ and let $X$ be the set of 2-element subsets of $\{1,\ldots,6\}$. Define $\lambda(g)\{i,j\}=\{gi,gj\}$. Prove $\lambda$ is an action.

**Solution.** Three checks.

(0) **Closure.** $\lambda(g)\{i,j\}=\{gi,gj\}\in X$ (still a 2-subset of $\{1,\ldots,6\}$ since $g$ is a bijection on $\{1,\ldots,6\}$).

(1) For all $\{i,j\}\in X$: $\lambda(e)\{i,j\}=\{ei,ej\}=\{i,j\}$. ✓

(2) For all $g,h\in S_{6}$, $\{i,j\}\in X$:

$$
\lambda(gh)\{i,j\}=\{(gh)i,(gh)j\}=\{g(hi),g(hj)\}=\lambda(g)\{hi,hj\}=\lambda(g)(\lambda(h)\{i,j\}).\;\checkmark
$$

So $\lambda$ is an action and $X$ is a $G$-set. $\blacksquare$

---

## 8.4. Translation Action of $(\mathbb{Z},+)$ on $\mathbb{N}$

> [!question]
> Let $G=(\mathbb{Z},+)$, $X=\mathbb{N}$, $\lambda(z)n=z+n$. Decide whether $\lambda$ is an action.

**Solution.** **Not** an action. The closure condition $\lambda(z)n\in X$ fails.

**Counterexample.** Take $z=-5\in G$, $n=1\in X$. Then $\lambda(z)n=-5+1=-4\notin\mathbb{N}$. So $\lambda(z)n$ is not always in $X$ - the map fails to be defined on all of $G\times X$ with codomain in $X$.

> [!note]
> If we replaced $X=\mathbb{N}$ with $X=\mathbb{Z}$, the map would be an action (the shift action of $\mathbb{Z}$ on itself). Closure must be checked, even when the operations look natural.

---

## 8.5. Orbit and Stabiliser of $(1\,2\,3)$ under Regular Action of $S_{3}$

> [!question]
> Let $G=S_{3}$ act on itself via the regular action. Compute the orbit and stabiliser of $(1\,2\,3)$.

**Solution.** Compute $\lambda(g)(1\,2\,3)=g\cdot(1\,2\,3)$ for each $g\in S_{3}$:

- $e\cdot(1\,2\,3)=(1\,2\,3)$
- $(1\,2)\cdot(1\,2\,3)=(2\,3)$
- $(1\,3)\cdot(1\,2\,3)=(1\,2)$
- $(2\,3)\cdot(1\,2\,3)=(1\,3)$
- $(1\,2\,3)\cdot(1\,2\,3)=(1\,3\,2)$
- $(1\,3\,2)\cdot(1\,2\,3)=e$

**Orbit.** $G\cdot(1\,2\,3)=\{(1\,2\,3),(2\,3),(1\,2),(1\,3),(1\,3\,2),e\}=S_{3}=X$. The action is **transitive**. ✓

**Stabiliser.** Only $e$ fixes $(1\,2\,3)$, so $\mathrm{Stab}_{G}((1\,2\,3))=\langle e\rangle$.

> [!note]
> This generalises: for the regular action of any group on itself, the action is always transitive and every stabiliser is trivial. Compatible with $|G\cdot x|=|G|/|\mathrm{Stab}_{G}(x)|=|G|/1=|G|=|X|$ in the Orbit-Stabiliser theorem.

---

## 8.6. Orbit and Stabiliser of $(1\,2\,3)$ under Conjugation in $S_{3}$

> [!question]
> Let $G=S_{3}$ act on itself by conjugation. Compute the orbit and stabiliser of $(1\,2\,3)$.

**Solution.** Compute $\lambda(g)(1\,2\,3)=g(1\,2\,3)g^{-1}$:

- $e(1\,2\,3)e^{-1}=(1\,2\,3)$
- $(1\,2)(1\,2\,3)(1\,2)^{-1}=(1\,3\,2)$
- $(1\,3)(1\,2\,3)(1\,3)^{-1}=(1\,3\,2)$
- $(2\,3)(1\,2\,3)(2\,3)^{-1}=(1\,3\,2)$
- $(1\,2\,3)(1\,2\,3)(1\,2\,3)^{-1}=(1\,2\,3)$
- $(1\,3\,2)(1\,2\,3)(1\,3\,2)^{-1}=(1\,2\,3)$

**Orbit.** $G\cdot(1\,2\,3)=\{(1\,2\,3),(1\,3\,2)\}\neq X$. The action is **not transitive**.

**Stabiliser.** $\mathrm{Stab}_{G}((1\,2\,3))=\{e,(1\,2\,3),(1\,3\,2)\}=\langle (1\,2\,3)\rangle\cong A_{3}$.

> [!note]
> Orbit-Stabiliser sanity check: $|G|=6$, $|G\cdot x|=2$, $|\mathrm{Stab}|=3$, and $6=2\cdot 3$. ✓
>
> The stabiliser is the **centraliser** $C_{G}((1\,2\,3))$ - elements that commute with $(1\,2\,3)$. Sensibly, the cyclic subgroup it generates does commute with it, and the transpositions don't.

---

## 8.7. Stabiliser Is a Subgroup

> [!question]
> Let $X$ be a $G$-set and $x\in X$. Prove $\mathrm{Stab}_{G}(x)\leq G$.

**Solution.** Quick Subgroup Test.

**Identity.** $\lambda(e)x=x$, so $e\in\mathrm{Stab}_{G}(x)$.

**Closure.** Let $g,h\in\mathrm{Stab}_{G}(x)$, so $\lambda(g)x=x$ and $\lambda(h)x=x$. Then

$$
\lambda(gh)x=\lambda(g)(\lambda(h)x)=\lambda(g)x=x,
$$

so $gh\in\mathrm{Stab}_{G}(x)$.

**Inverse.** Let $g\in\mathrm{Stab}_{G}(x)$. Then

$$
x=\lambda(e)x=\lambda(g^{-1}g)x=\lambda(g^{-1})(\lambda(g)x)=\lambda(g^{-1})x,
$$

so $g^{-1}\in\mathrm{Stab}_{G}(x)$. $\blacksquare$

---

## 8.8. Homomorphisms into $\mathrm{Sym}(X)$ as Actions

> [!question]
> Let $\lambda \colon G \to \mathrm{Sym}(X)$ be a homomorphism. Prove $\lambda$ is an action of $G$ on $X$.

**Solution.** Verify the two action axioms.

(0) **Closure.** Since $\lambda(g)\in\mathrm{Sym}(X)$ is a permutation of $X$, $\lambda(g)x\in X$ for any $x\in X$.

(1) Homomorphisms preserve identity: $\lambda(e_{G})=e_{\mathrm{Sym}(X)}=\mathrm{id}_{X}$, so $\lambda(e_{G})x=x$ for all $x\in X$.

(2) Homomorphism property gives $\lambda(gh)=\lambda(g)\lambda(h)$ as permutations, hence $\lambda(gh)x=\lambda(g)(\lambda(h)x)$ for all $x\in X$.

So $\lambda$ is an action of $G$ on $X$. $\blacksquare$

> [!note]
> Combined with the previous direction (every action is a homomorphism into $\mathrm{Sym}(X)$, lecture 8.1), we have a **bijection**:
>
> $$
> \{\text{actions of }G\text{ on }X\}\;\longleftrightarrow\;\{\text{homomorphisms }G\to \mathrm{Sym}(X)\}.
> $$
>
> Two equivalent ways of viewing the same data.
