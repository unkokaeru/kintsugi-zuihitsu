# Index Raising and Lowering

> [!tip] Relevant parts to questions...
> - $g_{pq}$ **lowers**, $g^{pq}$ **raises**.
> - One metric factor per index you are moving.
> - The metric's dummy index pairs with the target dummy; its free index replaces it at the new level.
> - In Cartesian coordinates nothing happens - $g_{pq}=\delta_{pq}$.

The [[Metric Tensor]] performs two basic operations on a tensor's indices:

$$
\boxed{g_{pq}\text{ lowers an index},\qquad g^{pq}\text{ raises an index}.}
$$

Each contraction with a metric tensor **replaces** a dummy index with a new free index at the opposite level (raised ↔ lowered).

## The Recipe

For every index you want to raise or lower:

1. **Identify the repeated (dummy) index** on the right-hand side.
2. **Contract with one factor of the metric**: $g_{pq}$ to lower, $g^{pq}$ to raise.
3. **Replace the dummy with the new free index**, at the level dictated by the metric.

## Rank 1

$$
\boxed{A_{p}=g_{pq}A^{q},\qquad A^{p}=g^{pq}A_{q}}
$$

## Rank 2 - raising one index

Given $A_{rq}$, raise the first:

$$
A^{p}_{\cdot q}=g^{rp}A_{rq}
$$

The dummy $r$ is replaced by the raised $p$. Similarly, $A^{\cdot q}_{p}=g_{rp}A^{rq}$ lowers the first index of $A^{rq}$.

## Rank 2 - raising both indices

$$
A^{pq}=g^{rp}g^{sq}A_{rs}
$$

One metric per index being moved; dummies $r,s$ become $p,q$.

## Higher Ranks

A single expression can move several indices at once - use one factor of $g$ per index. For example:

$$
A^{qm\cdot tk}_{\cdot\cdot n}=g^{pk}g_{sn}g^{rm}A^{q\cdot st}_{\cdot r\cdot\cdot p}
$$

Here $g^{pk}$ raises $k$, $g^{rm}$ raises $m$, and $g_{sn}$ lowers $n$. The other indices $q,s,t$ stay where they are.

## Properties

- **Each move is reversible**: applying $g_{pq}$ and then $g^{pr}$ returns the original (since $g^{pr}g_{pq}=\delta^{r}_{q}$).
- **Position matters** in the metric: $g_{pq}A^{q}$ gives $A_{p}$ (with the new index in the *first* slot of $g$).
- **Orthogonal basis shortcut**::$g_{ii}=1/g^{ii}$ (no sum), so raising or lowering reduces to division/multiplication by a single scale factor.
- **Cartesian collapse**::$g_{ij}=\delta_{ij}$, so raising/lowering is the identity and all flavours coincide.

## Applications

1. **Producing [[Associated Tensors]]** in any flavour from a starting one.
2. **Making contractions well-defined**: to pair indices you need one raised with one lowered (e.g., $A^{i}B_{i}$).
3. **Converting between "physical" and "tensor" components** in curvilinear systems - physical components carry scale factors $h_{i}$ while tensor components are pure numbers.

> [!example] Lowering a mixed tensor's second index
> Given $A^{pq}_{\cdot\cdot s}$, lower $q$:
>
> $A^{p}_{\cdot rs}=g_{rq}A^{pq}_{\cdot\cdot s}$.
>
> Dummy $q$ disappears, new free index $r$ sits in the lowered position. $\boxed{A^{p}_{\cdot rs}=g_{rq}A^{pq}_{\cdot\cdot s}}$ ✓

> One metric per index you move.
