# Tensor Transformation Rule

> [!tip] Relevant parts to questions...
> - Using $T_{ij}'=L_{im}L_{jn}T_{mn}$ (rank 2), $T_{ijk}'=L_{im}L_{jn}L_{kp}T_{mnp}$ (rank 3), etc.: **one $L$ per free index**.
> - Verifying tensor character by applying the rule and cancelling $L$s via orthogonality $L_{ij}L_{kj}=\delta_{ik}$.
> - Recognising dummy vs free indices on both sides: primed indices are free, original indices are dummy.

The **Tensor Transformation Rule** generalises the vector rule $v_{i}'=L_{ij}v_{j}$ to tensors of any [[rank]]. A tensor of rank $r$ picks up exactly $r$ factors of the [[Coordinate Transformation Matrix]] $L$, one per free index:

$$
\boxed{T_{i_{1}i_{2}\dots i_{r}}'=L_{i_{1}m_{1}}L_{i_{2}m_{2}}\dots L_{i_{r}m_{r}}T_{m_{1}m_{2}\dots m_{r}}}
$$

For the most common cases:

- **Rank 0 (scalar)**::$s'=s$ - no $L$ factors, invariant.
- **Rank 1 (vector)**::$v_{i}'=L_{ij}v_{j}$ - one factor of $L$.
- **Rank 2**::$T_{ij}'=L_{im}L_{jn}T_{mn}$ - two factors of $L$, one per index. In matrix form: $T'=LTL^{T}$.
- **Rank 3**::$T_{ijk}'=L_{im}L_{jn}L_{kp}T_{mnp}$ - three factors.

This rule is the **definition** of a tensor: anything that transforms this way *is* a tensor, and anything that doesn't, isn't.

## Properties

- **Free vs dummy indices**::the primed indices on the left are **free**, while the unprimed indices on the right are **dummy** (summed). Both sides carry the same free indices.
- **Dimensional count**::in 3D, a rank-$r$ tensor has $3^{r}$ components.
- **Symmetry is frame-independent**::if $T_{ij}=T_{ji}$ in one frame, then $T_{ij}'=T_{ji}'$ in every frame. The rule preserves [[Symmetry and Antisymmetry]].
- **Cartesian-specific**::this rule assumes $L$ is a constant rotation matrix. In generalised coordinates it is replaced by the more general rule with separate covariant/contravariant factors (see [[Mixed Components]]).

## Applications

1. **Verifying a quantity is a tensor** by direct application::e.g. the [[Kronecker Delta]] $\delta_{ij}$ is rank-2 since $L_{ik}L_{jm}\delta_{km}=L_{ik}L_{jk}=\delta_{ij}=\delta_{ij}'$.
2. **Proving the [[Gradient]] of a vector field is a rank-2 tensor**, via product + chain rule::$\frac{\partial u_{i}'}{\partial x_{j}'}=L_{ik}L_{j \ell} \frac{\partial u_{k}}{\partial x_{\ell}}$.
3. **Matrix form for rank-2**::$T'=LTL^{T}$ is the quickest way to compute $T_{ij}'$ numerically when $L$ and $T$ are given as matrices.
4. **Shortcut via the [[Quotient Rule]]**::if contracting $T$ with an arbitrary tensor produces a tensor, then $T$ itself is a tensor - no need to verify the transformation rule directly.

> [!example] Kronecker delta is a rank-2 tensor
> We need $\delta_{ij}'=L_{ik}L_{jm}\delta_{km}$. Applying the rule:
>
> $L_{ik}L_{jm}\delta_{km}=L_{ik}L_{jk}=\delta_{ij}$, using orthogonality.
>
> Since $\delta_{ij}$ is defined identically in every frame, $\delta_{ij}'=\delta_{ij}=\boxed{L_{ik}L_{jm}\delta_{km}}$. ✓

> One $L$ per free index; dummies sum.
