# Covariant Differentiation

> [!tip] Relevant parts to questions...
> - Vectors: $A_{i,k}=\frac{\partial A_{i}}{\partial x^{k}}-\Gamma^{j}_{ik}A_{j}$, $A^{i}_{\cdot k}=\frac{\partial A^{i}}{\partial x^{k}}+\Gamma^{i}_{jk}A^{j}$.
> - **Sign rule**: lower index → $-\Gamma$, upper index → $+\Gamma$.
> - **Extension rule**: each index of a tensor contributes its own $\Gamma$ correction.
> - In a fixed basis, all $\Gamma=0$ and covariant derivatives become ordinary partials.

**Covariant Differentiation** is the correct way to differentiate tensors in a [[Local Basis]]. It modifies the ordinary partial derivative with [[Christoffel Symbols]] so that the result is itself a tensor - even when the basis vectors vary with position.

## Vectors

For the covariant and contravariant components of a vector $\mathbf{A}$:

$$
\boxed{A_{i,k}= \frac{\partial A_{i}}{\partial x^{k}}-\Gamma^{j}_{ik}A_{j}}
$$

$$
\boxed{A^{i}_{\cdot k}= \frac{\partial A^{i}}{\partial x^{k}}+\Gamma^{i}_{jk}A^{j}}
$$

The first term differentiates the components; the second term - the Christoffel correction - accounts for how the basis itself changes.

> [!warning] Sign and index placement
> The covariant component picks up a **minus**; the contravariant component picks up a **plus**. The free index on $\Gamma$ matches the component's index position (up or down). Swap them and the whole calculation collapses.

## Higher-Rank Tensors

Each index of the tensor contributes **one** Christoffel correction:

- **Rank-2 covariant** ($T_{ik}$):

$$
T_{ik,\ell}= \frac{\partial T_{ik}}{\partial x^{\ell}}-\Gamma^{m}_{i \ell}T_{mk}-\Gamma^{m}_{k \ell}T_{im}
$$

- **Rank-2 contravariant** ($T^{ik}$):

$$
T^{ik}_{\cdot\cdot,\ell}= \frac{\partial T^{ik}}{\partial x^{\ell}}+\Gamma^{i}_{m \ell}T^{mk}+\Gamma^{k}_{m \ell}T^{im}
$$

- **Rank-2 mixed** ($T^{i}_{\cdot k}$):

$$
T^{i}_{\cdot k,\ell}= \frac{\partial T^{i}_{\cdot k}}{\partial x^{\ell}}+\Gamma^{i}_{m \ell}T^{m}_{\cdot k}-\Gamma^{m}_{k \ell}T^{i}_{\cdot m}
$$

**Rule of thumb**: partial derivative + one $\Gamma$ per index ($+$ for up, $-$ for down).

## Properties

- **Always produces a tensor**: that is the entire reason for the correction. Partial derivatives of tensor components, by themselves, do **not** transform as tensors (see [[Christoffel Symbols]] - they transform with a non-tensorial extra term, and those extra terms are exactly what the covariant derivative cancels).
- **Reduces to ordinary partials in Cartesian coordinates**, since $\Gamma=0$ there.
- **Rank-raising**::$T_{ik,\ell}$ is rank 3 - the covariant derivative adds one lower index.
- **Does not commute with itself** in curved space: $\nabla_{j}\nabla_{k}A_{i}-\nabla_{k}\nabla_{j}A_{i}=R^{r}_{ijk}A_{r}$ introduces the [[Riemann-Christoffel Tensor]] (see **[[Ricci's Theorem]]** for the metric case).

## Applications

1. **Writing vector calculus identities** that work in any coordinate system. For example, $\text{div}(\mathbf{A})=A^{i}_{\cdot i}$ is valid in spherical, cylindrical, and curved spaces.
2. **Generalising ODEs/PDEs to manifolds**, by replacing $\frac{\partial}{\partial x^{i}}$ with $\nabla_{i}$ throughout.
3. **Detecting curvature**, via the non-commutativity of second covariant derivatives (see [[Riemann-Christoffel Tensor]]).

> [!example] Covariant derivative collapses in Cartesian coordinates
> In Cartesian coordinates, $\Gamma^{i}_{jk}=0$. So:
>
> $A_{i,k}= \frac{\partial A_{i}}{\partial x^{k}}-0=\boxed{\frac{\partial A_{i}}{\partial x^{k}}}$ - the covariant derivative is just the ordinary partial.
>
> This matches what we have been doing all along in standard vector calculus: it was secretly a special case of covariant differentiation.

> Partial derivative + one $\Gamma$ per index, $+$ for up, $-$ for down.
