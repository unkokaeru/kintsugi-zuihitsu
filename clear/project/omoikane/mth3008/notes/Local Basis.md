# Local Basis

> [!tip] Relevant parts to questions...
> - A local basis $\mathbf{e}_{j}=\mathbf{e}_{j}(x^{1},x^{2},x^{3})$ **varies with position** - so $d\mathbf{e}_{j}\neq 0$.
> - The key differential identity: $d\mathbf{A}=\mathbf{e}^{j}dA_{j}+A_{j}d\mathbf{e}^{j}=\mathbf{e}_{j}dA^{j}+A^{j}d\mathbf{e}_{j}$.
> - The extra basis-derivative term is what [[Christoffel Symbols]] package up.
> - Fixed bases (Cartesian, rigid generalised) collapse $d\mathbf{e}_{j}=0$; local bases (spherical, cylindrical, curved surfaces) do not.

A **Local Basis** is a basis $\{\mathbf{e}_{1}(\mathbf{x}),\mathbf{e}_{2}(\mathbf{x}),\mathbf{e}_{3}(\mathbf{x})\}$ that **depends on position**. In cylindrical, spherical, or any curvilinear coordinate system, the basis vectors point in different directions at different points - so they carry position as an argument.

This is the key contrast with all earlier material:

- **Fixed basis** (e.g. Cartesian $\mathbf{i},\mathbf{j},\mathbf{k}$)::$d\mathbf{e}_{j}=0$. Differentials of vectors collapse to differentials of components.
- **Local basis** (e.g. cylindrical $\hat{\boldsymbol{\rho}},\hat{\boldsymbol{\phi}},\hat{\mathbf{z}}$)::$d\mathbf{e}_{j}\neq 0$. The basis itself contributes to any derivative.

## The Differential of a Vector Field

Expand $\mathbf{A}=A_{j}\mathbf{e}^{j}=A^{j}\mathbf{e}_{j}$. By the product rule:

$$
\boxed{d\mathbf{A}=\mathbf{e}^{j}dA_{j}+A_{j}d\mathbf{e}^{j}=\mathbf{e}_{j}dA^{j}+A^{j}d\mathbf{e}_{j}}
$$

Two terms instead of one. The first differentiates the **components**; the second accounts for the **changing basis**. Forgetting the second is the single most common mistake in [[Covariant Differentiation]].

## Partial Derivatives

Since $d\mathbf{A}=\frac{\partial \mathbf{A}}{\partial x^{k}}dx^{k}$, the partial derivative inherits the same two-term structure:

$$
\frac{\partial \mathbf{A}}{\partial x^{k}}= \frac{\partial A_{j}}{\partial x^{k}}\mathbf{e}^{j}+A_{j} \frac{\partial \mathbf{e}^{j}}{\partial x^{k}}= \frac{\partial A^{j}}{\partial x^{k}}\mathbf{e}_{j}+A^{j} \frac{\partial \mathbf{e}_{j}}{\partial x^{k}}
$$

The basis-derivative term $\frac{\partial \mathbf{e}_{j}}{\partial x^{k}}$ is the geometric fingerprint of the local basis - and is precisely what the [[Christoffel Symbols]] $\Gamma^{i}_{jk}$ package as coefficients in the basis expansion $\frac{\partial \mathbf{e}_{j}}{\partial x^{k}}=\Gamma^{i}_{jk}\mathbf{e}_{i}$.

## Properties

- **Derived from a parametrisation**::given $\mathbf{r}(x^{1},x^{2},x^{3})$, the local basis is $\mathbf{e}_{i}= \frac{\partial \mathbf{r}}{\partial x^{i}}$.
- **[[Metric Tensor]] inherits position-dependence**::$g_{ij}(\mathbf{x})=\mathbf{e}_{i}(\mathbf{x})\cdot \mathbf{e}_{j}(\mathbf{x})$ is now a field, not a constant.
- **Fixed is a special case**::if $\frac{\partial \mathbf{e}_{j}}{\partial x^{k}}=0$ everywhere, all Christoffel symbols vanish and covariant differentiation collapses to ordinary partial differentiation.

## Applications

1. **Physically-motivated coordinates** (spherical, cylindrical, oblique) all use local bases.
2. **Curved manifolds** (the surface of a sphere, hyperbolic plane) *only* admit local bases - no rigid basis can cover them.
3. **Setting up covariant differentiation** correctly - the two-term differential is the starting point for every proof in Chapter 7.

> [!example] Cylindrical basis varies with $\theta$
> $\mathbf{e}_{1}=\cos \theta\mathbf{i}_{1}+\sin \theta\mathbf{i}_{2}$ (radial), so $\frac{\partial \mathbf{e}_{1}}{\partial \theta}=-\sin \theta\mathbf{i}_{1}+\cos \theta\mathbf{i}_{2}\neq \mathbf{0}$.
> The radial basis **genuinely rotates** as you move around the $z$-axis - a local basis in action. $\boxed{\frac{\partial \mathbf{e}_{1}}{\partial \theta}\neq \mathbf{0}}$ ✓

> Fixed basis: basis derivatives vanish. Local basis: basis derivatives are the story.
