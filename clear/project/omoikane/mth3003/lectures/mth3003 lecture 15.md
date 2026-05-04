# MTH3003 Lecture 15

Last lecture we proved Cayley's Theorem - every group is a permutation group via its regular action. Today we develop the two key invariants of a [[Group action]]: the **orbit** (where a point can travel) and the **stabiliser** (which group elements pin it). The two are connected by the **Orbit-Stabiliser Theorem**, which converts size questions about orbits into Lagrange-style index calculations on $G$.

## Orbits and Stabilisers

> [!important] Orbit
> Let $X$ be a $G$-set. The **orbit** of $x\in X$ is
> $$
> Gx=\{\lambda(g)x:g\in G\},
> $$
> the set of all images of $x$ under the action of $G$. If $Gx=X$ for some (equivalently, every) $x\in X$, the action is **transitive**.

> [!important] Stabiliser
> Fix $x\in X$. The **stabiliser** of $x$ is
> $$
> \mathrm{Stab}_{G}(x)=\{g\in G:\lambda(g)x=x\},
> $$
> the set of group elements that fix $x$.

Two complementary objects: the orbit lives in $X$ (where $x$ goes), the stabiliser lives in $G$ (which group elements pin $x$).

## Worked Examples

### Example: $S_{4}$ Acting on $\{1,2,3,4\}$

Take $G=S_{4}$, $X=\{1,2,3,4\}$, action $\lambda(g)i=gi$ (the natural permutation action).

- **Orbits.** $G\cdot 1=\{1,2,3,4\}=G\cdot 2=G\cdot 3=G\cdot 4$. So there is **one orbit** - the action is **transitive**.
- **Stabilisers.** $\mathrm{Stab}_{G}(1)=\{e,(2\,3\,4),(2\,4\,3),(2\,3),(2\,4),(3\,4)\}$ - the six permutations of $\{2,3,4\}$. So $\mathrm{Stab}_{G}(1)\cong S_{3}$. Similarly $\mathrm{Stab}_{G}(i)\cong S_{3}$ for any $i$.

### Example: $D_{8}$ Acting on a Cube

The natural action of $D_{8}$ on a cube splits the eight corners into two orbits of size four each - the "top" four corners and the "bottom" four. The action is **not** transitive.

For corner $1$: $\mathrm{Stab}_{D_{8}}(1)=\{e,\sigma\rho^{3}\}$ - only two symmetries fix corner $1$.

### Example: Regular Action

Take $X=G$ and $\lambda(g)x=gx$ (left multiplication). For any $x\in G$,

- **Orbit.** $Gx=\{gx:g\in G\}=G$ - the regular action is always **transitive**.
- **Stabiliser.** $gx=x\Leftrightarrow g=e$, so $\mathrm{Stab}_{G}(x)=\langle e\rangle$.

This is what makes Cayley's Theorem work: the kernel of the regular action is trivial.

### Example: Conjugation Action

Take $X=G$ and $\lambda(g)x=gxg^{-1}$.

- **Orbit of $e$.** $G\cdot e=\{geg^{-1}:g\in G\}=\{e\}$ - the identity is alone in its orbit, so the conjugation action is *not* transitive (unless $G$ is trivial).
- **Stabiliser of $x$.** $\mathrm{Stab}_{G}(x)=\{g:gxg^{-1}=x\}=\{g:gx=xg\}$ - the elements that **commute** with $x$. This special subgroup is called the **centraliser** of $x$ in $G$:
$$
C_{G}(x)=\{g\in G:gx=xg\}.
$$

> [!example] Abelian groups under conjugation
> If $G$ is abelian, every element commutes, so $gxg^{-1}=x$ for all $g,x$. Hence each conjugacy orbit is just $\{x\}$, and every element is its own centraliser: $C_{G}(x)=G$.

## Properties of Orbits and Stabilisers

> [!important] Proposition
> Let $X$ be a $G$-set and $x,y\in X$.
> 1. Either $Gx=Gy$ or $Gx\cap Gy=\emptyset$ - **orbits are either equal or disjoint**.
> 2. If $x$ and $y$ lie in the same orbit, then $Gx=Gy$.
> 3. If $Y$ is an orbit and $x\in Y$, then $Gx=Y$.
> 4. $\mathrm{Stab}_{G}(x)\leq G$ - the stabiliser is a **subgroup**.

Property 1 means the orbits **partition** $X$:

$$
X=\mathrm{Orb}_{1}\;\sqcup\;\mathrm{Orb}_{2}\;\sqcup\;\cdots\;\sqcup\;\mathrm{Orb}_{n}.
$$

Picking one representative $x_{i}$ from each $\mathrm{Orb}_{i}$ gives a **set of orbit representatives**. Once you know the partition into orbits, you've decoded the global geometry of the action.

## The Orbit-Stabiliser Theorem

The headline result, connecting orbit size to stabiliser index.

> [!important] Orbit-Stabiliser Theorem
> Let $G$ be a group and $X$ a $G$-set. For all $x\in X$,
> $$
> \boxed{|Gx|=[G:\mathrm{Stab}_{G}(x)].}
> $$
> If $G$ is finite, $|Gx|=|G|/|\mathrm{Stab}_{G}(x)|$.

### Proof

Set $S=\mathrm{Stab}_{G}(x)$. Define a map from cosets of $S$ to elements of $Gx$ by $gS\mapsto \lambda(g)x$. We show this is a well-defined bijection.

For $g,h\in G$:

$$
\lambda(g)x=\lambda(h)x\iff \lambda(h^{-1}g)x=x\iff h^{-1}g\in S\iff gS=hS.
$$

(Used: $\lambda$ is a homomorphism, the equivalence in the last step is the standard coset characterisation from earlier in the course.)

So the number of distinct elements of $Gx$ equals the number of distinct left cosets of $S$ in $G$ - that's $[G:S]$ by definition. For finite $G$, [[Lagrange's theorem]] gives $[G:S]=|G|/|S|$. $\blacksquare$

### Why This Is Powerful

The formula reduces orbit-counting to a divisibility check. Common applications:

- **Compute orbit sizes** when you know the stabiliser.
- **Show certain transitive actions don't exist** via a divisibility obstruction.

## Worked Examples of Orbit-Stabiliser

### Example: $S_{4}$ on $\{1,2,3,4\}$ Revisited

$G=S_{4}$, $|G|=24$. $|G\cdot 1|=4$ (transitive). The theorem requires $|G|/|\mathrm{Stab}_{G}(1)|=4$, i.e. $|\mathrm{Stab}_{G}(1)|=24/4=6$. We computed $\mathrm{Stab}_{G}(1)\cong S_{3}$ has six elements. ✓

### Example: No Transitive Action of a Group of Order 20 on a Set of Size 6

Suppose $|G|=20$ and $G$ acts transitively on a set $X$ with $|X|=6$. Then $|Gx|=6$ for the chosen $x$, and Orbit-Stabiliser gives

$$
6=\frac{20}{|\mathrm{Stab}_{G}(x)|},
$$

forcing $|\mathrm{Stab}_{G}(x)|=20/6$, which is not an integer. Contradiction. So no such transitive action exists.

### Example: Can $D_{10}$ Act Transitively on a Triangle?

Suppose $D_{10}$ (order $10$) acts transitively on $X=\{\text{three corners}\}$. Then $|Gx|=3$, so $|\mathrm{Stab}_{D_{10}}(x)|=10/3\notin\mathbb{Z}$. **No.**

> [!note] Pattern
> Any transitive action of $G$ on $X$ requires $|X|\bigm| |G|$. So if $|X|\nmid |G|$, no transitive action exists. Useful for ruling out symmetry types instantly.

### Example: $S_{n}$ Acting on Pairs

Let $G=S_{n}$ act on $Y\times Y$ where $Y=\{1,\ldots,n\}$, via $\lambda(g)(x,y)=(gx,gy)$.

What is $|G\cdot (1,1)|$? The stabiliser of $(1,1)$ consists of permutations fixing both coordinates, i.e. fixing $1$ - that's $\mathrm{Sym}(\{2,\ldots,n\})$, with $|.|=(n-1)!$. So

$$
|G\cdot (1,1)|=\frac{n!}{(n-1)!}=n.
$$

Indeed the orbit of $(1,1)$ is $\{(i,i):i\in Y\}$ - the diagonal, which has $n$ elements.

---

## Pre-Lecture Notes from [[mth3003 lecture notes 15.pdf]]

- **Orbit** $Gx=\{\lambda(g)x:g\in G\}\subseteq X$. **Transitive** action: $Gx=X$.
- **Stabiliser** $\mathrm{Stab}_{G}(x)=\{g\in G:\lambda(g)x=x\}\leq G$ - it's a subgroup of $G$.
- Orbits **partition** $X$: either $Gx=Gy$ or $Gx\cap Gy=\emptyset$.
- The conjugation-action stabiliser $\mathrm{Stab}_{G}(x)=C_{G}(x)$ is the **centraliser** - elements commuting with $x$.
- **[[Orbit-Stabiliser theorem]]**: $|Gx|=[G:\mathrm{Stab}_{G}(x)]=|G|/|\mathrm{Stab}_{G}(x)|$ (for finite $G$).
- **Proof technique**: bijection between cosets $gS$ of $S=\mathrm{Stab}_{G}(x)$ and elements $\lambda(g)x$ of the orbit.
- **Application**: rule out transitive actions when $|X|\nmid |G|$.
- **Next lecture**: Burnside-type orbit-counting and applications.
