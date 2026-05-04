# MTH3003 Lecture 18

The final lecture of the course shifts gears: rather than developing more general theory, we **classify** finite abelian groups completely. The key step is showing that the **internal direct product** of two normal subgroups with trivial intersection is isomorphic to their **external direct product**. This unlocks the **Fundamental Theorem of Finite Abelian Groups**: every such group is a direct product of cyclic prime-power groups.

## External vs Internal Direct Products

### Recap: External Direct Product

Given groups $G$ and $H$, the **external direct product** $G\times H$ is the set $\{(g,h):g\in G,h\in H\}$ with componentwise multiplication

$$
(g_{1},h_{1})\cdot(g_{2},h_{2})=(g_{1}g_{2},\,h_{1}h_{2}).
$$

For finite groups, $|G\times H|=|G|\cdot |H|$.

External direct products are **easy to construct** ("here are two groups, take their pairs") but **hard to detect** when they appear inside another group. We now develop a tool to detect them.

> [!note]
> **Proposition.** $G\times H\cong H\times G$. (Swap coordinates.)

### Bridge: Lemma on Commuting Normal Subgroups

> [!important] Lemma
> Suppose $M,N\trianglelefteq G$ with $M\cap N=\{e\}$. Then for all $m\in M$ and $n\in N$,
> $$
> mn=nm.
> $$
> Elements of two normal subgroups with trivial intersection commute, even if $G$ is non-abelian!

**Proof.** Consider the **commutator** $n^{-1}mnm^{-1}$. We show it lies in both $M$ and $N$, hence in $M\cap N=\{e\}$.

- $n^{-1}mn\in M$ because $M$ is normal. So $n^{-1}mnm^{-1}=(n^{-1}mn)\cdot m^{-1}\in M$.
- $mnm^{-1}\in N$ because $N$ is normal. So $n^{-1}mnm^{-1}=n^{-1}\cdot (mnm^{-1})\in N$.

Hence $n^{-1}mnm^{-1}\in M\cap N=\{e\}$, giving $n^{-1}mnm^{-1}=e$, i.e. $mn=nm$. $\blacksquare$

### Theorem: Detecting Direct Products Internally

> [!important] Theorem
> Suppose $M,N\trianglelefteq G$ with $M\cap N=\{e\}$. Then $MN\leq G$ and
> $$
> \boxed{MN\cong M\times N.}
> $$

**Proof sketch.** Define $\theta\colon MN\to M\times N$ by $\theta(mn)=(m,n)$.

- **Well-defined.** If $g=mn=m_{1}n_{1}$ for $m,m_{1}\in M$, $n,n_{1}\in N$, then $m^{-1}m_{1}=nn_{1}^{-1}\in M\cap N=\{e\}$, so $m=m_{1}$ and $n=n_{1}$. The decomposition is unique.
- **Homomorphism.** $\theta(m_{1}n_{1})\theta(m_{2}n_{2})=(m_{1},n_{1})(m_{2},n_{2})=(m_{1}m_{2},n_{1}n_{2})$. By the lemma, $n_{1}m_{2}=m_{2}n_{1}$, so $m_{1}n_{1}m_{2}n_{2}=m_{1}m_{2}n_{1}n_{2}$, and $\theta(m_{1}n_{1}m_{2}n_{2})=(m_{1}m_{2},n_{1}n_{2})$ - matches.
- **Injective.** $\theta(m_{1}n_{1})=\theta(m_{2}n_{2})\Rightarrow (m_{1},n_{1})=(m_{2},n_{2})\Rightarrow m_{1}=m_{2},\,n_{1}=n_{2}$.
- **Surjective.** Any $(m,n)\in M\times N$ has $\theta(mn)=(m,n)$.

Hence $\theta$ is an isomorphism. $\blacksquare$

> [!important] Definition
> If $G$ has normal subgroups $M,N$ with $M\cap N=\{e\}$ and $G=MN$, then $G$ is the **internal direct product** of $M$ and $N$.

The theorem says: **internal direct products are isomorphic to external direct products**. So once we spot the internal pattern (two normal subgroups with trivial intersection whose product is everything), we conclude $G\cong M\times N$.

> [!example] Generalises immediately
> The same construction extends to any finite number of normal subgroups $M_{1},\ldots,M_{k}\trianglelefteq G$ with pairwise trivial intersections (and the right product condition): $G\cong M_{1}\times M_{2}\times\cdots\times M_{k}$.

## Applying It: Order 15 Revisited

In lecture 17 we proved every group of order 15 is cyclic by counting elements. Here is a slicker proof using the internal-direct-product theorem.

> [!example]
> Let $|G|=15$. Then $G\cong C_{3}\times C_{5}\cong C_{15}$.

**Sketch.** $|G|=3\cdot 5$. By Sylow's theorems, $G$ has unique (hence normal) Sylow $3$-subgroup $J$ (order $3$) and unique (hence normal) Sylow $5$-subgroup $K$ (order $5$). $J\cap K=\{e\}$ by Lagrange ($|J\cap K|$ divides both $3$ and $5$, so equals $1$). Hence $J K\cong J\times K\cong C_{3}\times C_{5}$. By Lagrange $|JK|=|J|\cdot |K|/|J\cap K|=15=|G|$, so $JK=G$. Thus $G\cong C_{3}\times C_{5}\cong C_{15}$ (the second isomorphism uses $\gcd(3,5)=1$). $\blacksquare$

> [!note]
> This pattern - "Sylow subgroups are unique, hence normal, hence $G$ decomposes as their direct product" - is the workhorse of small-order group classification.

## The Fundamental Theorem of Finite Abelian Groups

For abelian groups the entire subgroup lattice cooperates: every subgroup is normal, so the conditions of the internal-direct-product theorem are automatically satisfied.

> [!important] Fundamental Theorem of Finite Abelian Groups
> Every finite abelian group $G$ is isomorphic to a direct product of cyclic groups of prime-power order:
> $$
> G\cong C_{p_{1}^{r_{1}}}\times C_{p_{2}^{r_{2}}}\times\cdots\times C_{p_{k}^{r_{k}}},
> $$
> where the $p_{i}$ are (not necessarily distinct) primes. The decomposition is **unique** up to reordering.

In particular, the only finite abelian groups of order $n$ are determined by the partitions of the multiplicities in the prime factorisation of $n$.

### Examples

| $|G|$ | Factorisation | Abelian groups, up to isomorphism |
|---|---|---|
| 4 | $2^{2}$ | $C_{4}$, $C_{2}\times C_{2}$ |
| 8 | $2^{3}$ | $C_{8}$, $C_{4}\times C_{2}$, $C_{2}\times C_{2}\times C_{2}$ |
| 9 | $3^{2}$ | $C_{9}$, $C_{3}\times C_{3}$ |
| 12 | $2^{2}\cdot 3$ | $C_{4}\times C_{3}\cong C_{12}$, $C_{2}\times C_{2}\times C_{3}\cong C_{2}\times C_{6}$ |
| 16 | $2^{4}$ | $C_{16}$, $C_{8}\times C_{2}$, $C_{4}\times C_{4}$, $C_{4}\times C_{2}\times C_{2}$, $C_{2}\times C_{2}\times C_{2}\times C_{2}$ |

The number of abelian groups of order $p^{n}$ equals the number of integer partitions of $n$.

> [!note]
> The Fundamental Theorem builds on Sylow theory: an abelian $G$ decomposes as the direct product of its (unique, since abelian!) Sylow $p$-subgroups, then each Sylow $p$-subgroup itself decomposes as a direct product of cyclic $p$-groups via more refined arguments.

## Course Synthesis

Looking back over the 18 lectures, the course has built up the following ladder:

1. **Permutations** (lectures 1-2): cycle notation, products, signature.
2. **Groups and subgroups** (3-6): axioms, generators, cyclic groups, dihedral groups, isometry groups.
3. **Cosets and Lagrange** (7-8): partition of $G$, divisibility constraints, Cauchy's theorem.
4. **Quotients, homomorphisms, isomorphism theorems** (9-11): structural maps, kernels, the three isomorphism theorems.
5. **Alternating groups and signature** (12-13): even/odd permutations, $A_{n}$.
6. **Group actions** (14): generalisation of the symmetric-group viewpoint, Cayley's theorem.
7. **Orbits and stabilisers** (15): orbit-stabiliser theorem.
8. **Burnside / counting** (16): orbit counting theorem, applications to colouring problems.
9. **Sylow theory** (17): existence, conjugacy, and counting of $p$-Sylow subgroups.
10. **Direct products and abelian classification** (18): internal-direct-product detection, fundamental theorem of finite abelian groups.

The driving theme: **groups are most usefully studied through their actions on sets, and through their decomposition into well-understood pieces** (cyclic, abelian, simple).

---

## Pre-Lecture Notes from [[mth3003 lecture notes 18.pdf]]

- **External direct product** $G\times H$: pairs with componentwise multiplication; $|G\times H|=|G|\cdot|H|$.
- **Lemma**: if $M,N\trianglelefteq G$ with $M\cap N=\{e\}$, then $mn=nm$ for all $m\in M$, $n\in N$. Proof via the commutator $n^{-1}mnm^{-1}\in M\cap N=\{e\}$.
- **Internal direct product theorem**: $M,N\trianglelefteq G$ with $M\cap N=\{e\}\Rightarrow MN\leq G$ and $MN\cong M\times N$. Detect direct products by spotting two normal subgroups with trivial intersection.
- **Definition**: $G$ is the **internal direct product** of $M$ and $N$ if $G=MN$, $M\cap N=\{e\}$, and $M,N\trianglelefteq G$.
- **Generalisation**: applies to any number of normal subgroups with pairwise trivial intersections.
- **Application**: re-prove $|G|=15\Rightarrow G\cong C_{15}$ by recognising $G\cong C_{3}\times C_{5}$.
- **Fundamental Theorem of Finite Abelian Groups**: every finite abelian group is a direct product of cyclic prime-power groups, uniquely (up to order). Number of abelian groups of order $p^{n}$ = number of partitions of $n$.
- **End of course**: see the [[mth3003 final exam cheat sheet]] for a complete formula reference.
