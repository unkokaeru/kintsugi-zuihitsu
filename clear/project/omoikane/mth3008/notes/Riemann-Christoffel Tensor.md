# Riemann-Christoffel Tensor

> [!tip] Relevant parts to questions...
> - Definition::$\nabla_{j}\nabla_{k}A_{i}-\nabla_{k}\nabla_{j}A_{i}=R^{r}_{ijk}A_{r}$ - the failure of second covariant derivatives to commute.
> - Formula::$R^{r}_{ijk}= \frac{\partial \Gamma^{r}_{ki}}{\partial x^{j}}- \frac{\partial \Gamma^{r}_{ij}}{\partial x^{k}}+\Gamma^{p}_{ik}\Gamma^{r}_{pj}-\Gamma^{p}_{ij}\Gamma^{r}_{pk}$.
> - **$R^{r}_{ijk}=0$ everywhere $\iff$ the space is Euclidean** (flat).
> - Tensor character comes from the [[Quotient Rule]]: $A_{r}$ is arbitrary.

The **Riemann-Christoffel Tensor** $R^{r}_{ijk}$ measures how much a space **fails to be Euclidean** - equivalently, how much second [[Covariant Differentiation]] fail to commute.

## Motivation: When Derivatives Stop Commuting

Ordinary partial derivatives always commute: $\frac{\partial^{2}f}{\partial x^{j}\partial x^{k}}= \frac{\partial^{2}f}{\partial x^{k}\partial x^{j}}$. In a curved space, however, their covariant counterparts do not:

$$
\nabla_{j}\nabla_{k}A_{i}\neq \nabla_{k}\nabla_{j}A_{i}
$$

The failure is a tensor - it is $R^{r}_{ijk}A_{r}$.

## Definition

$$
\boxed{\nabla_{j}\nabla_{k}A_{i}-\nabla_{k}\nabla_{j}A_{i}=R^{r}_{ijk}A_{r}}
$$

Explicitly, the coordinate formula is:

$$
\boxed{R^{r}_{ijk}= \frac{\partial \Gamma^{r}_{ki}}{\partial x^{j}}- \frac{\partial \Gamma^{r}_{ij}}{\partial x^{k}}+\Gamma^{p}_{ik}\Gamma^{r}_{pj}-\Gamma^{p}_{ij}\Gamma^{r}_{pk}}
$$

Two terms from the derivatives of Christoffel symbols, two bilinear in Christoffel symbols.

## Tensor Character

The left-hand side $\nabla_{j}\nabla_{k}A_{i}-\nabla_{k}\nabla_{j}A_{i}$ is a difference of tensors (each covariant derivative is a tensor), hence itself a tensor. Since $A_{r}$ is arbitrary, the [[Quotient Rule]] confirms $R^{r}_{ijk}$ is a tensor (rank 4: three covariant, one contravariant).

> [!warning] Index placement matters
> The signs and ordering in the formula depend on convention. Always check against the definition $R^{r}_{ijk}A_{r}=\nabla_{j}\nabla_{k}A_{i}-\nabla_{k}\nabla_{j}A_{i}$ to verify you have the right sign.

## Criterion for Euclidean Space

$$
\boxed{R^{r}_{ijk}=0\ \text{throughout the space}\iff \text{the space is Euclidean (flat)}}
$$

- **Euclidean $\mathbb{R}^{3}$** - zero curvature, $R^{r}_{ijk}=0$.
- **Unit sphere** - positive curvature, $R^{r}_{ijk}\neq 0$.
- **Hyperbolic space** - negative curvature, $R^{r}_{ijk}\neq 0$.

## Properties

- **Rank 4** (three lower, one upper), with $3^{4}=81$ components in 3D, but most vanish in practice due to symmetries of the Christoffel symbols.
- **Antisymmetric in the last two indices**::$R^{r}_{ijk}=-R^{r}_{ikj}$ (immediate from the defining commutator).
- **Tensor built from non-tensors**::$R^{r}_{ijk}$ **is** a tensor even though it is constructed from Christoffel symbols (which are not tensors). The non-tensorial pieces cancel in the combination.
- **Contracting gives the Ricci tensor**::$R_{ij}=R^{r}_{irj}$ is a second-rank tensor used in general relativity.

## Applications

1. **Detecting curvature** - in principle, compute $R^{r}_{ijk}$; if any component is non-zero, the space is curved.
2. **Proving a space is Euclidean** - harder direction - by showing *all* components vanish.
3. **General relativity**::Einstein's field equations relate the [[Ricci's Theorem]] contraction $R_{ij}$ to stress-energy.

> [!example] Unit sphere has non-zero curvature
> For the unit sphere with coordinates $(\phi,\theta)$, position vector $\mathbf{r}=\sin \phi\cos \theta\mathbf{i}_{1}+\sin \phi\sin \theta\mathbf{i}_{2}+\cos \phi\mathbf{i}_{3}$. The metric has $g_{11}=1$, $g_{22}=\sin^{2}\phi$, $g_{12}=0$.
>
> Non-zero Christoffel symbols: $\Gamma^{1}_{22}=-\sin \phi\cos \phi$, $\Gamma^{2}_{12}=\Gamma^{2}_{21}=\cot \phi$.
>
> Computing the key component:
>
> $R^{1}_{212}= \frac{\partial}{\partial \phi}\Gamma^{1}_{22}-\Gamma^{2}_{21}\Gamma^{1}_{22}=(-\cos^{2}\phi+\sin^{2}\phi)+\cos^{2}\phi=\boxed{\sin^{2}\phi}$
>
> Since $R^{1}_{212}\neq 0$, the sphere is **not** Euclidean - confirming its positive curvature.

> Partials commute; covariant derivatives commute **iff** the space is flat. The gap is $R^{r}_{ijk}$.
