# Orbit counting theorem

Also called **Burnside's lemma**, or more accurately the **Cauchy-Frobenius lemma**.

> [!important] Orbit Counting Theorem
> Let $G$ be a finite group acting on a set $Y$. The number of orbits is the average number of fixed points:
> $$
> \boxed{\#\text{orbits}=\frac{1}{|G|}\sum_{g\in G}|\mathrm{Fix}_{Y}(g)|,}
> $$
> where $\mathrm{Fix}_{Y}(g)=\{y\in Y:\lambda(g)y=y\}$.

## Proof Sketch

Count $\mathcal{P}=\{(y,g):\lambda(g)y=y\}$ in two ways.

**By $g$:** $|\mathcal{P}|=\sum_{g}|\mathrm{Fix}_{Y}(g)|$.

**By $y$:** $|\mathcal{P}|=\sum_{y}|\mathrm{Stab}_{G}(y)|$. Partition $Y$ into orbits; within each orbit, all stabilisers have the same size, and by [[Orbit-Stabiliser theorem]], $|\mathrm{Stab}|=|G|/|\text{orbit}|$. Summing over an orbit of size $k$ gives $k\cdot |G|/k=|G|$. So $|\mathcal{P}|=m|G|$ where $m$ is the number of orbits.

Equating: $m|G|=\sum_{g}|\mathrm{Fix}_{Y}(g)|$, hence the result. $\blacksquare$

## Combinatorial Application: Counting Colourings up to Symmetry

The classic use: count distinct colourings of an object under a symmetry group. Examples:

- **Edge colourings of an octagon** under $D_{16}$: $498$ distinct colourings with $3$ colours.
- **Face colourings of a cube** under the rotation group (order $24$): $57$ distinct colourings with $3$ colours.
- **Necklaces** with given bead counts: same recipe, group $D_{2n}$ acts on $n$-bead arrangements.

## Strategy

For each $g\in G$:

1. Determine the cycle structure of $g$ as a permutation of the colourable objects.
2. A colouring is fixed by $g$ iff each cycle is monochromatic (all positions in the cycle same colour).
3. So $|\mathrm{Fix}_{Y}(g)|=c^{\text{(number of cycles)}}$ where $c$ is the number of available colours.

Sum over $g\in G$ and divide by $|G|$.

## Companion

[[Orbit-Stabiliser theorem]] gives the *size* of one orbit; the Orbit Counting Theorem gives the *number* of orbits. Together they describe the orbit decomposition of any $G$-set.
