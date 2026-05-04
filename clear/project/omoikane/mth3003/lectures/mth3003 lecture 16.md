# MTH3003 Lecture 16

Last lecture we proved the [[Orbit-Stabiliser theorem]] - the number of elements an orbit covers equals the index of the stabiliser. Today we use it to prove the **Orbit Counting Theorem** (also known as Burnside's Lemma, or, more accurately, the *Cauchy-Frobenius Lemma*) - a formula for the *number* of orbits, in terms of fixed points. Two combinatorial applications follow: counting distinct edge-colourings of an octagon, and distinct face-colourings of a cube.

## Fixed-Point Sets

> [!important] Definition
> Let $Y$ be a $G$-set with action $\lambda$, and $g\in G$. The **fixed-point set** of $g$ is
> $$
> \mathrm{Fix}_{Y}(g)=\{y\in Y:\lambda(g)y=y\}\subseteq Y.
> $$

> [!warning] Don't confuse with stabiliser
> $\mathrm{Fix}_{Y}(g)\subseteq Y$: things in $Y$ fixed by *one specific* $g$.
> $\mathrm{Stab}_{G}(y)\subseteq G$: things in $G$ that fix *one specific* $y$.
> Different sets, different ambient containers.

> [!example] $S_{5}$ on $Y=\{1,2,3,4,5\}$
> $\tau=(1\,2\,5)$: $\mathrm{Fix}_{Y}(\tau)=\{3,4\}$ (only those are untouched).
> $\rho=(1\,2\,3\,4\,5)$: $\mathrm{Fix}_{Y}(\rho)=\emptyset$ (everything moves).
> $e$: $\mathrm{Fix}_{Y}(e)=Y$ (the identity fixes everything).

## The Orbit Counting Theorem

> [!important] Orbit Counting Theorem (Cauchy-Frobenius Lemma)
> Let $G$ be a *finite* group acting on a set $Y$. The number of orbits is the **average number of fixed points**:
> $$
> \boxed{\#\text{orbits}=\frac{1}{|G|}\sum_{g\in G}|\mathrm{Fix}_{Y}(g)|.}
> $$

### Proof

Count the set $\mathcal{P}=\{(y,g)\in Y\times G:\lambda(g)y=y\}$ in two different ways.

**By $g$.** For each $g\in G$, the elements $y$ with $(y,g)\in\mathcal{P}$ are precisely $\mathrm{Fix}_{Y}(g)$, so

$$
|\mathcal{P}|=\sum_{g\in G}|\mathrm{Fix}_{Y}(g)|.\tag{1}
$$

**By $y$.** For each $y\in Y$, the elements $g$ with $(y,g)\in\mathcal{P}$ are precisely $\mathrm{Stab}_{G}(y)$. By [[Orbit-Stabiliser theorem]] $|\mathrm{Stab}_{G}(y)|=|G|/|Gy|$, so

$$
|\mathcal{P}|=\sum_{y\in Y}|\mathrm{Stab}_{G}(y)|=\sum_{y\in Y}\frac{|G|}{|Gy|}.
$$

Partition $Y$ into orbits $Y=\mathrm{Orb}_{1}\sqcup\cdots\sqcup\mathrm{Orb}_{m}$. Within $\mathrm{Orb}_{i}$, $|Gy|=|\mathrm{Orb}_{i}|$ for every $y\in\mathrm{Orb}_{i}$. Hence

$$
\sum_{y\in\mathrm{Orb}_{i}}\frac{|G|}{|Gy|}=|\mathrm{Orb}_{i}|\cdot \frac{|G|}{|\mathrm{Orb}_{i}|}=|G|.
$$

Summing over orbits:

$$
|\mathcal{P}|=\sum_{i=1}^{m}|G|=m|G|.\tag{2}
$$

Equating (1) and (2):

$$
m|G|=\sum_{g\in G}|\mathrm{Fix}_{Y}(g)|\quad\Rightarrow\quad m=\frac{1}{|G|}\sum_{g\in G}|\mathrm{Fix}_{Y}(g)|.\quad\blacksquare
$$

### Trivial Sanity Check

Let $G=\{e,(1\,2),(3\,4),(1\,2)(3\,4)\}$ acting on $Y=\{1,2,3,4\}$ by $\lambda(g)y=gy$. Fixed-point counts:

- $\mathrm{Fix}_{Y}(e)=Y$, $|\cdot|=4$.
- $\mathrm{Fix}_{Y}((1\,2))=\{3,4\}$, $|\cdot|=2$.
- $\mathrm{Fix}_{Y}((3\,4))=\{1,2\}$, $|\cdot|=2$.
- $\mathrm{Fix}_{Y}((1\,2)(3\,4))=\emptyset$, $|\cdot|=0$.

Number of orbits = $\frac{1}{4}(4+2+2+0)=2$. By inspection, the orbits are $\{1,2\}$ and $\{3,4\}$. ✓

## Application: Edge-Colouring an Octagon

> [!question]
> Colour the edges of a regular octagon using three colours $\{r,b,g\}$. Two colourings are considered the same if one is a symmetry of the other (rotation or reflection). How many distinct coloured octagons are there?

**Strategy.** Let $X$ be the set of all $3^{8}=6561$ raw edge-colourings (treating the octagon's vertices as labelled $1$ through $8$ at fixed positions). The dihedral group $D_{16}$ (order 16) acts on $X$ by symmetries of the octagon. **Distinct coloured octagons = orbits of $D_{16}$ on $X$.**

Apply the Orbit Counting Theorem: count $|\mathrm{Fix}_{X}(g)|$ for each of the 16 group elements.

**Identity $e$.** Fixes everything: $|\mathrm{Fix}_{X}(e)|=3^{8}=6561$.

**Rotation $\rho$ (by 45°).** A colouring is fixed iff all 8 edges are the same colour: $|\mathrm{Fix}_{X}(\rho)|=3$.

**Higher rotation powers.** A colouring is fixed by $\rho^{k}$ iff edges in the same cycle of $\rho^{k}$ have the same colour. The number of cycles of $\rho^{k}$ on 8 edges is $\gcd(k,8)$:

| Rotation | Cycles | Fixed colourings |
|---|---|---|
| $\rho$ | 1 cycle of length 8 | $3^{1}=3$ |
| $\rho^{2}$ | 2 cycles of length 4 | $3^{2}=9$ |
| $\rho^{3}$ | 1 cycle of length 8 | $3^{1}=3$ |
| $\rho^{4}$ | 4 cycles of length 2 | $3^{4}=81$ |
| $\rho^{5}$ | 1 cycle of length 8 | $3^{1}=3$ |
| $\rho^{6}$ | 2 cycles of length 4 | $3^{2}=9$ |
| $\rho^{7}$ | 1 cycle of length 8 | $3^{1}=3$ |

**Reflections.** Eight reflections, in two types based on the line of reflection:

- **Corner-corner reflections** (4 of them) - line passes through two opposite corners. Cycle structure on edges: 4 cycles of length 2, fixed by 4 free colours: $3^{4}=81$ each.
- **Edge-edge reflections** (4 of them) - line passes through midpoints of two opposite edges. Two edges fixed (1-cycles), three pairs swapped (2-cycles): cycle count is 5, fixed by $3^{5}=243$ each.

Wait - let me recheck: an edge-edge reflection on 8 edges fixes the two edges through which the axis passes (2 fixed edges) and swaps the remaining 6 edges in 3 pairs. That gives $2+3=5$ cycles, $3^{5}=243$ fixed colourings.

**Sum and average.**

$$
\sum_{g}|\mathrm{Fix}_{X}(g)|=6561+3+9+3+81+3+9+3+4\cdot 81+4\cdot 243.
$$

$$
=6561+(3+3+3+3)+(9+9)+81+324+972=6561+12+18+81+324+972=7968.
$$

$$
\#\text{orbits}=\frac{7968}{16}=498.
$$

> [!note]
> The 6561 raw colourings collapse to $498$ distinct coloured octagons after symmetry. Most colourings have a "trivial" (size-16) orbit; only highly symmetric colourings have smaller orbits.

## Application: Face-Colouring a Cube

> [!question]
> Colour the six faces of a cube using three colours. How many distinct coloured cubes are there?

**Caveat.** A cube is a **3D** object - reflections produce a mirror image, which is genuinely different (think left/right hand). So the right group is the **rotation group** $\mathrm{Rot}(\mathcal{C})$, not the full symmetry group, of order $24$.

**Rotation classes** (review of lecture 6):

| Type | Description | Count |
|---|---|---|
| (A) | Identity | 1 |
| (B) | $90°$ face rotations | 6 |
| (C) | $180°$ face rotations | 3 |
| (D) | $120°$ corner rotations | 8 |
| (E) | $180°$ edge rotations | 6 |

Total: $1+6+3+8+6=24$. ✓

**Set $X$.** All face-colourings, $|X|=3^{6}=729$.

**Fixed-point counts.**

- (A) **Identity**: fixes everything, $|\mathrm{Fix}_{X}(g)|=3^{6}=729$.
- (B) **$90°$ face rotation**: top and bottom faces stay (each can be any colour), four side faces cyclically permuted into one orbit (must all be the same colour). 3 free choices for top, 3 for bottom, 3 for sides: $3^{3}=27$.
- (C) **$180°$ face rotation**: top fixed, bottom fixed, four side faces split into two pairs of swapped faces. 4 free colours: $3^{4}=81$.
- (D) **$120°$ corner rotation**: three top faces cycle, three bottom faces cycle. Two cycles, $3^{2}=9$.
- (E) **$180°$ edge rotation**: faces split into 3 pairs of swapped faces. $3^{3}=27$.

**Sum.**

$$
\sum_{g}|\mathrm{Fix}_{X}(g)|=1\cdot 729+6\cdot 27+3\cdot 81+8\cdot 9+6\cdot 27=729+162+243+72+162=1368.
$$

**Number of orbits.**

$$
\#\text{distinct cubes}=\frac{1368}{24}=57.
$$

So **there are exactly 57 distinct face-colourings of a cube using 3 colours**, up to rotation.

> [!note]
> If we allowed reflections (the full symmetry group of order $48$), some pairs of mirror-image cubes would be identified, and we'd get fewer orbits. The 3D-vs-2D distinction matters: in 2D the octagon allows reflections, in 3D the cube does not (without unrolling space).

---

## Pre-Lecture Notes from [[mth3003 lecture notes 16.pdf]]

- **Fixed-point set** $\mathrm{Fix}_{Y}(g)\subseteq Y$: elements of $Y$ fixed by a single $g$. Distinct from $\mathrm{Stab}_{G}(y)\subseteq G$.
- **Orbit Counting Theorem** (Cauchy-Frobenius / Burnside's Lemma): $\#\text{orbits}=\frac{1}{|G|}\sum_{g\in G}|\mathrm{Fix}_{Y}(g)|$. Average number of fixed points = number of orbits.
- **Proof technique**: count $\mathcal{P}=\{(y,g):\lambda(g)y=y\}$ in two ways - by $g$ (sum of $|\mathrm{Fix}_{Y}|$), by $y$ (using Orbit-Stabiliser, sum of $|\mathrm{Stab}|=|G|/|\text{orbit}|$, partition by orbit gives $m|G|$).
- **Octagon edge-colouring**: $D_{16}$ acting on $3^{8}$ colourings. Identity gives $3^{8}$, rotations give $3^{\gcd(k,8)}$, two types of reflections give $3^{4}$ (corner-corner) and $3^{5}$ (edge-edge). Sum/$|G|=498$ orbits.
- **Cube face-colouring**: $\mathrm{Rot}(\mathcal{C})$ (order 24, *no* reflections in 3D!). Five types of rotation contribute $729,162,243,72,162$ respectively to the fixed-point sum, totalling $1368$. Sum/$|G|=57$ orbits.
- **Key technique**: for a permutation, fixed colourings = $\#\text{colours}^{\#\text{cycles}}$. Decompose each group element's cycle structure on the colour-able set, count colourings, sum, divide by $|G|$.
- **Next lecture**: introduction to Sylow theory - refining the structural picture beyond Lagrange and Cauchy.
