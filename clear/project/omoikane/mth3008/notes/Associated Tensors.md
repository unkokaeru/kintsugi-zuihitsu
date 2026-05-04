# Associated Tensors

> [!tip] Relevant parts to questions...
> - Identify the dummy index on the RHS - that's what gets replaced.
> - Use $g_{pq}$ to **lower**, $g^{pq}$ to **raise**.
> - For each index you're moving, contract with one factor of the [[Metric Tensor]].

Two tensors are **Associated Tensors** if one is obtained from the other by raising or lowering its indices with the [[Metric Tensor]]. Every tensor in a generalised coordinate system has a whole family of associated tensors - covariant, contravariant, and mixed - and they are all considered the **same** tensor expressed in different components.

## The Raising/Lowering Recipe

To raise or lower an index:

1. Identify the repeated (dummy) index on the right-hand side.
2. Contract with $g_{pq}$ (to lower) or $g^{pq}$ (to raise): the metric **replaces** that dummy index with the new free index.
3. The position of the indices in the metric tells you whether the new index ends up raised or lowered.

## First-Rank

$$
\boxed{A_{p}=g_{pq}A^{q},\qquad A^{p}=g^{pq}A_{q}}
$$

The dummy $q$ is absorbed by the metric and replaced by the free index $p$, either raised or lowered according to the position of the $p$ in the metric.

## Rank 2

All four flavours of components of a second-rank tensor $A_{ik},A^{ik},A_{i}^{\;k},A^{i}_{\;k}$ are associated:

$$
\begin{aligned}
A_{ik} &= g_{i\ell}g_{km}A^{\ell m} = g_{k\ell}A_{i}^{\;\ell} = g_{i\ell}A^{\ell}_{\;k}\\
A^{ik} &= g^{i\ell}g^{km}A_{\ell m} = g^{i\ell}A_{\ell}^{\;k} = g^{k\ell}A^{i}_{\;\ell}\\
A_{i}^{\;k} &= g^{k\ell}A_{i\ell} = g_{i\ell}A^{\ell k}\\
A^{i}_{\;k} &= g^{i\ell}A_{\ell k} = g_{k\ell}A^{i\ell}
\end{aligned}
$$

Once you know **any one** flavour and the metric, you know all four.

## Higher Ranks

The pattern is entirely mechanical: one factor of $g$ per index being raised/lowered. For example, raising both indices of $A_{rs}$ gives $A^{pq}=g^{rp}g^{sq}A_{rs}$, while lowering the second contravariant index of $A^{pq}_{\;\;\;s}$ gives $A^{p}_{\;rs}=g_{rq}A^{pq}_{\;\;\;s}$.

## Properties

- **Same object, different components**::moving an index does not change the underlying tensor, just the basis it is expressed against.
- **Cartesian collapse**::since $g_{ij}=\delta_{ij}$ in Cartesian coordinates, all flavours coincide: $A_{ij}=A^{ij}=A_{i}^{\;j}=A^{i}_{\;j}$.
- **Symmetry can break under moves**::see [[Symmetry and Antisymmetry]] - raising an index of a symmetric covariant tensor does not necessarily produce a symmetric contravariant tensor.

## Applications

1. **Building contravariant components from covariant ones** (and vice versa), without recomputing from scratch - just apply the metric.
2. **Simplifying contractions**::pair a raised index with a lowered one so you can contract cleanly (e.g., $A_{i}B^{i}$).
3. **Tensor-algebra shortcuts**::many identities are easier to prove in one flavour and transported to the others by raising/lowering.

> [!example] Raising the first index of $A_{rq}$
> $A_{rq}$ has two covariant indices. To raise the first, multiply by $g^{rp}$ (dummy index $r$, new free index $p$, raised):
>
> $A^{p}_{\;q}=g^{rp}A_{rq}$. ✓ The dummy $r$ is gone; $p$ is now the first index and is contravariant.

> Pick the dummy; metric raises or lowers it.
