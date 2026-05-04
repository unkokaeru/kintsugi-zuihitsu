# Ricci Tensor

> [!tip] Relevant parts to questions...
> - Defined as the contraction $R_{ij}=R^{r}_{irj}$ of the [[Riemann-Christoffel Tensor]].
> - Rank 2 (covariant), with $3^{2}=9$ components in 3D.
> - $R_{ij}=0$ in Euclidean space (since $R^{r}_{irj}=0$ there).
> - Distinct from [[Ricci's Theorem]] (which is the statement $g_{ik,\ell}=0$).

The **Ricci Tensor** is the second-rank tensor obtained by [[Contraction]] the [[Riemann-Christoffel Tensor]] over its contravariant index and one covariant index:

$$
\boxed{R_{ij}=R^{r}_{irj}}
$$

It collapses the full four-index curvature tensor into a simpler two-index object, while still carrying nontrivial geometric information.

## Properties

- **Rank 2**, covariant, so $R_{ij}$ has $3^{2}=9$ components in 3D (and $n^{2}$ in $n$-D).
- **Tensor** - it is a contraction of a tensor, so by [[Contraction]] it is itself a tensor.
- **Symmetric**::$R_{ij}=R_{ji}$ (for the Levi-Civita connection - the specific $\Gamma^{i}_{jk}$ defined from the metric).
- **Vanishes in Euclidean space**::since $R^{r}_{ijk}=0$ everywhere in a flat space, all of its contractions vanish as well. $R_{ij}=0$ is a *weaker* condition than $R^{r}_{ijk}=0$.

## Relation to the Riemann-Christoffel Tensor

The full rank-4 [[Riemann-Christoffel Tensor]] $R^{r}_{ijk}$ has $3^{4}=81$ components in 3D. The Ricci tensor is a summary - a partial invariant built by contracting.

$$
R_{ij}=R^{r}_{irj}=\sum_{r=1}^{n}R^{r}_{irj}
$$

In 2D, the Ricci tensor (and scalar curvature) carries *all* curvature information - the Riemann-Christoffel tensor has only one independent component. In higher dimensions, $R_{ij}$ loses information: spaces can be **Ricci-flat** ($R_{ij}=0$) without being Euclidean.

## Applications

1. **Einstein's field equations** in general relativity relate the Ricci tensor and scalar curvature $R=g^{ij}R_{ij}$ to the stress-energy tensor: $R_{ij}- \frac{1}{2}R g_{ij}+\Lambda g_{ij}=\kappa T_{ij}$.
2. **Characterising geometry** - manifolds of constant Ricci curvature (Einstein manifolds) are a major object of study in differential geometry.
3. **Simplified curvature checks** - if $R_{ij}\neq 0$, the space is not Euclidean (a quicker test than computing the full Riemann-Christoffel tensor).

> [!warning] Ricci-flat ≠ Euclidean (in 4D+)
> In dimensions $\geq 4$, a space with $R_{ij}=0$ can still have non-zero $R^{r}_{ijk}$. Such spaces are called **Ricci-flat** - famous examples include the Schwarzschild spacetime (a vacuum solution of GR), which is curved even though its Ricci tensor vanishes.

> Contract Riemann-Christoffel over one upper and one lower index; what remains measures "average" curvature.
