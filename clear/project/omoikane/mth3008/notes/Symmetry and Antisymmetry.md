# Symmetry and Antisymmetry

> [!tip] Relevant parts to questions...
> - A rank-2 tensor is **symmetric** if $T_{ij}=T_{ji}$, **antisymmetric** if $T_{ij}=-T_{ji}$.
> - Any tensor splits uniquely as symmetric + antisymmetric parts: $T_{ij}=\frac{1}{2}(T_{ij}+T_{ji})+\frac{1}{2}(T_{ij}-T_{ji})$.
> - Symmetry is **frame-independent** under orthogonal transformations.
> - Symmetry is defined for indices **at the same level** (both upper, or both lower).

A second-rank tensor $T_{ij}$ is:

- **Symmetric**::$T_{ij}=T_{ji}$.
- **Antisymmetric** (skew-symmetric)::$T_{ij}=-T_{ji}$ (which forces $T_{ii}=0$, no sum).

Examples from earlier notes: the [[Kronecker Delta]] $\delta_{ij}=\delta_{ji}$ is **symmetric**; the [[Alternating Tensor]] $\epsilon_{ijk}=-\epsilon_{jik}$ is **antisymmetric** in any two indices.

## Frame Independence

> [!important] Symmetry Lemma
> If $A_{ij}$ is symmetric in one Cartesian frame, it is symmetric in **every** Cartesian frame.

**Proof.** If $A_{ij}=A_{ji}$, then under a rotation:

$$
A_{ij}'=L_{ik}L_{jm}A_{km}=L_{ik}L_{jm}A_{mk}=L_{jm}L_{ik}A_{mk}=A_{ji}'
$$

The same argument with a sign flip proves antisymmetry is also frame-independent. ✓

## Symmetric/Antisymmetric Decomposition

> [!important] Decomposition Theorem
> Any rank-2 tensor $T_{ij}$ decomposes **uniquely** as
>
> $\displaystyle T_{ik}=S_{ik}+A_{ik}$, where
>
> $S_{ik}= \frac{1}{2}(T_{ik}+T_{ki})$ is the **symmetric part**,
>
> $A_{ik}= \frac{1}{2}(T_{ik}-T_{ki})$ is the **antisymmetric part**.

The decomposition is immediate from $S_{ik}+A_{ik}=T_{ik}$, and uniqueness follows because if $T=S_{1}+A_{1}=S_{2}+A_{2}$, then $S_{1}-S_{2}=A_{2}-A_{1}$ is simultaneously symmetric and antisymmetric, hence zero.

## In Generalised Coordinates

> [!warning] Symmetry lives at fixed index positions
> In a generalised coordinate system, symmetry or antisymmetry is defined only for indices at the **same level**:
>
> - $A^{\cdot\cdot \ell}_{ik}$ is symmetric in $i,k$ if $A^{\cdot\cdot \ell}_{ik}=A^{\cdot\cdot \ell}_{ki}$ (both lower).
> - $B^{ik}_{\cdot\cdot \ell}$ is antisymmetric in $i,k$ if $B^{ik}_{\cdot\cdot \ell}=-B^{ki}_{\cdot\cdot \ell}$ (both upper).
>
> You **cannot** compare symmetry between one upper and one lower index - the concept requires the same index position.

Raising or lowering a single index via the [[Metric Tensor]] can **break** symmetry, since it changes which metric components appear.

## Applications

1. **Alternating-tensor contraction kills the symmetric part**::for any $T_{jk}$, $\epsilon_{ijk}T_{jk}$ is sensitive only to the antisymmetric part (the symmetric part contracts to zero by the antisymmetry of $\epsilon$). So $\epsilon_{ijk}T_{jk}=0$ forces $T_{jk}$ to be symmetric.
2. **Moment of inertia / stress tensors** in physics are symmetric - a physical, frame-independent statement.
3. **Curl and angular velocity** correspond to the antisymmetric part of $\frac{\partial u_{i}}{\partial x_{j}}$.

> [!example] $\epsilon_{ijk}T_{jk}=0 \implies T_{ij}$ symmetric
> Fix $i=1$: $\epsilon_{1jk}T_{jk}=\epsilon_{123}T_{23}+\epsilon_{132}T_{32}=T_{23}-T_{32}=0 \implies T_{23}=T_{32}$.
>
> Repeating for $i=2$ and $i=3$ gives $T_{12}=T_{21}$ and $T_{13}=T_{31}$, so $T_{ij}=T_{ji}$. $\boxed{T_{ij}=T_{ji}}$ ✓

> Symmetric ↔ $+$ swap, antisymmetric ↔ $-$ swap. Any tensor is the sum of the two.
