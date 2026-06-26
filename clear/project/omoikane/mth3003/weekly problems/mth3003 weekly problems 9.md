# MTH3003 Weekly Problems 9

> **Original Documents**: [[mth3003 weekly problem sheet 9.pdf]] / `[[mth3003 weekly problem sheet 9 handwritten solutions.pdf]]` / [[mth3003 weekly problem sheet 9 solutions.pdf]]
>
> **Vibes**: A drill on the [[Orbit-Stabiliser theorem]] and the [[Orbit counting theorem]]. Mix of computation, divisibility-style reasoning, and combinatorial applications (necklaces, fixed-point counting). Final problem is a foundational proof that orbits partition $X$.
>
> **Used Techniques**:
>  - **Orbit-Stabiliser**: $|Gx|=|G|/|\mathrm{Stab}_{G}(x)|$ for finite $G$.
>  - **Orbit counting (Burnside / Cauchy-Frobenius)**: $\#\text{orbits}=\frac{1}{|G|}\sum_{g}|\mathrm{Fix}_{Y}(g)|$.
>  - **Cycle structure of a permutation determines fixed-point set**: products of cycles fix exactly the points $g$ moves into themselves.
>  - **Standard fact**: in a transitive action, all stabilisers have the same size.

***

## 9.1. Orbits of a Cyclic Subgroup of $S_{9}$

> [!question]
> Let $G=\langle (1\,2\,3)(4\,5\,6)(7\,8\,9)\rangle\leq S_{9}$ act on $X=\{1,\ldots,9\}$. Find a set of orbit representatives and write $X$ as a disjoint union of orbits.

The generator $(1\,2\,3)(4\,5\,6)(7\,8\,9)$ has three cycles. The orbits are exactly these cycles:

$$
G\cdot 1=\{1,2,3\},\quad G\cdot 4=\{4,5,6\},\quad G\cdot 7=\{7,8,9\}.
$$

A set of orbit representatives: $\{1,4,7\}$. Disjoint union:

$$
\boxed{X=\{1,2,3\}\sqcup\{4,5,6\}\sqcup\{7,8,9\}.}
$$

---

## 9.2. Orbit-Stabiliser Calculations in a Group of Order 20

> [!question]
> $|G|=20$ acts on $X$.
> 1. If $|Gx|=4$, what is $|\mathrm{Stab}_{G}(x)|$?
> 2. If $|\mathrm{Stab}_{G}(y)|=2$, what is $|Gy|$?

**Solution.** By Orbit-Stabiliser, $|Gx|\cdot |\mathrm{Stab}_{G}(x)|=|G|=20$.

(1) $|\mathrm{Stab}_{G}(x)|=20/4=5$.

(2) $|Gy|=20/2=10$.

---

## 9.3. Orbit-Stabiliser for the Regular Pentagon and $D_{10}$

> [!question]
> $D_{10}$ acts on the corners of a regular pentagon. Find the orbit and stabiliser of corner $1$ and verify Orbit-Stabiliser.

**Orbit.** $D_{10}\cdot 1=\{1,2,3,4,5\}$ - rotation acts cyclically on the corners; the action is **transitive**.

**Stabiliser.** Of $D_{10}$'s ten elements, only the identity and the reflection through corner $1$ (which swaps the other four in pairs $(2,5)(3,4)$) fix corner $1$:

$$
\mathrm{Stab}_{D_{10}}(1)=\{e,\,(2\,5)(3\,4)\}.
$$

**Verify.** $|D_{10}\cdot 1|=5,\,|D_{10}|=10,\,|\mathrm{Stab}_{D_{10}}(1)|=2$, and $5=10/2$. ✓

---

## 9.4. Orbits as Orbits of Stabiliser Actions

> [!question]
> Let $X$ be a $G$-set, $Y$ an orbit of $G$ on $X$, and $x\in Y$. Prove $Gx=Y$.

**Solution.** $Y$ is an orbit, so $Y=Gy$ for some $y\in X$. Then $x\in Y=Gy$ means $x=\lambda(g)y$ for some $g\in G$, so $y=\lambda(g^{-1})x$.

For any $h\in G$:

- $\lambda(h)x=\lambda(h)\lambda(g)y=\lambda(hg)y\in Gy=Y$. So $Gx\subseteq Y$.
- $\lambda(h)y=\lambda(h)\lambda(g^{-1})x=\lambda(hg^{-1})x\in Gx$. So $Gy=Y\subseteq Gx$.

Hence $Gx=Y$. $\blacksquare$

---

## 9.5. Point Stabiliser Size in a Transitive Action of $A_{7}$

> [!question]
> $A_{7}$ acts transitively on $\{1,\ldots,7\}$. How many elements fix the number $1$?

**Solution.** "Elements fixing $1$" = $\mathrm{Stab}_{A_{7}}(1)$. Apply Orbit-Stabiliser:

$$
|A_{7}\cdot 1|=\frac{|A_{7}|}{|\mathrm{Stab}_{A_{7}}(1)|}.
$$

Transitive $\Rightarrow|A_{7}\cdot 1|=7$. $|A_{7}|=7!/2=2520$. So

$$
|\mathrm{Stab}_{A_{7}}(1)|=\frac{2520}{7}=\boxed{360.}
$$

---

## 9.6. Equal Stabiliser Sizes in a Transitive Action

> [!question]
> If $G$ is finite and $X$ is transitive, prove $|\mathrm{Stab}_{G}(x)|=|\mathrm{Stab}_{G}(y)|$ for all $x,y\in X$.

**Solution.** Transitivity gives $Gx=X=Gy$, so $|Gx|=|Gy|$. By Orbit-Stabiliser,

$$
\frac{|G|}{|\mathrm{Stab}_{G}(x)|}=|Gx|=|Gy|=\frac{|G|}{|\mathrm{Stab}_{G}(y)|},
$$

hence $|\mathrm{Stab}_{G}(x)|=|\mathrm{Stab}_{G}(y)|$. $\blacksquare$

---

## 9.7. Orbit Counting for the Action of $S_{4}$ on Pairs

> [!question]
> $S_{4}$ acts on $Y=\{(i,j):i,j\in\{1,2,3,4\}\}$ via $\lambda(g)(i,j)=(gi,gj)$. Find the number of orbits using the Orbit Counting Theorem.

**Fixed-point counts.** A pair $(i,j)$ is fixed by $g$ iff $gi=i$ and $gj=j$ - both $i$ and $j$ are fixed points of $g$.

- $e$: fixes all $4^{2}=16$ pairs.
- **6 transpositions** (e.g. $(1\,2)$): fix the 2 elements not moved (here $\{3,4\}$), giving $2^{2}=4$ pairs each.
- **8 3-cycles** (e.g. $(1\,2\,3)$): fix the 1 element not moved, giving $1^{2}=1$ pair each (the diagonal pair on the fixed point).
- **6 4-cycles** and **3 double-transpositions** $(1\,2)(3\,4)$ etc.: no fixed points, so $0$ fixed pairs.

Sum: $1\cdot 16+6\cdot 4+8\cdot 1+9\cdot 0=16+24+8=48$.

$$
\#\text{orbits}=\frac{48}{|S_{4}|}=\frac{48}{24}=\boxed{2.}
$$

(The two orbits are the diagonal $\{(i,i)\}$ and the off-diagonal $\{(i,j):i\neq j\}$.)

---

## 9.8. Orbit Counting for the Left Regular Action

> [!question]
> $G$ acts on itself by $\lambda(g)h=gh$. Find the number of orbits using Orbit Counting.

**Solution.** $\lambda(g)h=h\Leftrightarrow gh=h\Leftrightarrow g=e$. So $\mathrm{Fix}_{G}(g)=\emptyset$ for $g\neq e$, and $\mathrm{Fix}_{G}(e)=G$.

$$
\#\text{orbits}=\frac{1}{|G|}\left(|G|+\underbrace{0+\cdots+0}_{|G|-1\text{ times}}\right)=\frac{|G|}{|G|}=\boxed{1.}
$$

A single orbit - the regular action is always **transitive**.

---

## 9.9. Necklaces with 3 Black and 5 White Beads

> [!question]
> Use the Orbit Counting Theorem to count distinct necklaces with exactly 3 black and 5 white beads, considered the same under $D_{16}$.

**Setup.** $Y$ = set of octagon corner-colourings with exactly $3$ black corners. $|Y|=\binom{8}{3}=56$. $D_{16}$ acts on $Y$ by symmetries.

**Fixed-point counts** under each of the 16 symmetries.

**Identity $e$.** $|\mathrm{Fix}_{Y}(e)|=56$.

**Rotations $\rho^{i}$, $i=1,\ldots,7$.** A non-trivial rotation moves every corner; for the colouring to be fixed, all corners in each rotation-cycle must be the same colour. The rotations have cycle structures:

- $\rho,\rho^{3},\rho^{5},\rho^{7}$: one 8-cycle. All 8 corners same colour $\Rightarrow$ 0 black or 8 black, neither equals 3.
- $\rho^{2},\rho^{6}$: two 4-cycles. Need 3 black distributed in 4-blocks of identical colour - impossible (would need 0,4,8 black).
- $\rho^{4}$: four 2-cycles. Need 3 black distributed in 2-blocks - impossible.

So $|\mathrm{Fix}_{Y}(\rho^{i})|=0$ for $i=1,\ldots,7$.

**Reflections.** Two types:

- **Corner-corner** reflections (4 of them, e.g. $\sigma_{1}$): line passes through two opposite corners. Cycle structure: 2 fixed corners + 3 swapped pairs. Of the 3 black corners, can either come from (1 fixed black + 1 paired black where the pair must both be black, but pairs have 2 corners - that needs an even number from pairs) or (2 fixed black + 0 paired) - but we need exactly 3 black. So we need 1 fixed corner black + 2 of the 6 "paired" corners black, where they form a pair (both same colour). With 1 fixed corner black and 1 pair black, that's $1+2=3$. There are 2 choices for which fixed corner is black, and 3 choices for which of 3 pairs is black: $2\cdot 3=6$. Hence $|\mathrm{Fix}_{Y}(\sigma_{i})|=6$ for the 4 corner-corner reflections.
- **Edge-edge** reflections (4 of them, $\sigma_{5},\ldots,\sigma_{8}$): line passes through midpoints of two opposite edges. Cycle structure: 4 swapped pairs (no fixed corners). Need 3 black distributed across pairs - impossible (even count from pairs). $|\mathrm{Fix}_{Y}(\sigma_{i})|=0$.

**Sum and quotient.**

$$
\#\text{orbits}=\frac{1}{16}\left(56+0\cdot 7+6\cdot 4+0\cdot 4\right)=\frac{56+24}{16}=\frac{80}{16}=\boxed{5.}
$$

So **5 distinct necklaces** with 3 black and 5 white beads.

---

## 9.10. Orbits Are Either Equal or Disjoint

> [!question]
> Let $x,y\in X$. Prove that either $Gx=Gy$ or $Gx\cap Gy=\emptyset$.

**Solution.** Suppose $Gx\cap Gy\neq\emptyset$. We show $Gx=Gy$.

Pick $z\in Gx\cap Gy$. Then $z=\lambda(g_{1})x$ for some $g_{1}\in G$ and $z=\lambda(g_{2})y$ for some $g_{2}\in G$. Hence $\lambda(g_{1})x=\lambda(g_{2})y$, so $y=\lambda(g_{2}^{-1}g_{1})x$ and $x=\lambda(g_{1}^{-1}g_{2})y$.

For any $h\in G$:

$$
\lambda(h)y=\lambda(h)\lambda(g_{2}^{-1}g_{1})x=\lambda(hg_{2}^{-1}g_{1})x\in Gx,\;\;\text{so }Gy\subseteq Gx.
$$

Similarly, $\lambda(h)x=\lambda(hg_{1}^{-1}g_{2})y\in Gy$, so $Gx\subseteq Gy$. Hence $Gx=Gy$. $\blacksquare$

> [!note] Consequence
> The orbits **partition** $X$. So a $G$-set always decomposes uniquely as $X=\mathrm{Orb}_{1}\sqcup\cdots\sqcup\mathrm{Orb}_{m}$, and a transitive action is one with a single orbit.
