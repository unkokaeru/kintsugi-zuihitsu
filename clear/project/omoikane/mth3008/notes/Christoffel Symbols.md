# Christoffel Symbols

> [!tip] Relevant parts to questions...
> - **Second kind**::$\Gamma^{i}_{jk}=\mathbf{e}^{i}\cdot \frac{\partial \mathbf{e}_{j}}{\partial x^{k}}$; the **expansion coefficients** of $\frac{\partial \mathbf{e}_{j}}{\partial x^{k}}=\Gamma^{i}_{jk}\mathbf{e}_{i}$.
> - **First kind**::$\Gamma_{ijk}=\mathbf{e}_{i}\cdot \frac{\partial \mathbf{e}_{j}}{\partial x^{k}}$.
> - **From the metric**::$\Gamma_{ijk}=\frac{1}{2}(\partial_{k}g_{ij}+\partial_{j}g_{ik}-\partial_{i}g_{jk})$, and $\Gamma^{i}_{jk}=g^{i \ell}\Gamma_{\ell kj}$.
> - **Symmetric in $j,k$**::$\Gamma^{i}_{jk}=\Gamma^{i}_{kj}$ and $\Gamma_{ijk}=\Gamma_{ikj}$.
> - **Not a tensor** - transforms with an extra inhomogeneous term.

The **Christoffel Symbols** are the correction coefficients that make [[Covariant Differentiation]] produce tensors in a [[Local Basis]]. They package the information about how basis vectors change with position.

## Definitions

**Second kind** $\Gamma^{i}_{jk}$::the contravariant expansion coefficients of $\frac{\partial \mathbf{e}_{j}}{\partial x^{k}}$:

$$
\boxed{\Gamma^{i}_{jk}=\mathbf{e}^{i}\cdot \frac{\partial \mathbf{e}_{j}}{\partial x^{k}},\qquad \frac{\partial \mathbf{e}_{j}}{\partial x^{k}}=\Gamma^{i}_{jk}\mathbf{e}_{i}}
$$

**First kind** $\Gamma_{ijk}$::the covariant expansion coefficients (dot with $\mathbf{e}_{i}$ instead of $\mathbf{e}^{i}$):

$$
\boxed{\Gamma_{ijk}=\mathbf{e}_{i}\cdot \frac{\partial \mathbf{e}_{j}}{\partial x^{k}}}
$$

In 3D each symbol has $3^{3}=27$ components, but the symmetry $\Gamma^{i}_{jk}=\Gamma^{i}_{kj}$ reduces this to $3\cdot 6=18$ independent ones.

## Formulae from the Metric

Using $g_{ij}=\mathbf{e}_{i}\cdot \mathbf{e}_{j}$ and expanding $\frac{\partial g_{ij}}{\partial x^{k}}$ via the product rule, plus the symmetry $\Gamma_{ijk}=\Gamma_{ikj}$, we can derive each symbol **entirely from the [[Metric Tensor]]**:

$$
\boxed{\Gamma_{ijk}= \frac{1}{2}\left( \frac{\partial g_{ij}}{\partial x^{k}} + \frac{\partial g_{ik}}{\partial x^{j}} - \frac{\partial g_{jk}}{\partial x^{i}}\right)}
$$

$$
\boxed{\Gamma^{i}_{jk}= \frac{1}{2}g^{i \ell}\left( \frac{\partial g_{\ell j}}{\partial x^{k}} + \frac{\partial g_{\ell k}}{\partial x^{j}} - \frac{\partial g_{jk}}{\partial x^{\ell}}\right)}
$$

No further geometric data is needed: the metric determines everything.

## Properties

- **Symmetry in the lower two indices**::$\Gamma^{i}_{jk}=\Gamma^{i}_{kj}$ and $\Gamma_{ijk}=\Gamma_{ikj}$ - follows from the equality of mixed partials $\frac{\partial^{2}\mathbf{r}}{\partial x^{j}\partial x^{k}}=\frac{\partial^{2}\mathbf{r}}{\partial x^{k}\partial x^{j}}$.
- **Metric raises/lowers the first index**::$\Gamma_{ijk}=g_{i \ell}\Gamma^{\ell}_{jk}$ and $\Gamma^{i}_{jk}=g^{i \ell}\Gamma_{\ell kj}$.
- **Vanish for a fixed basis**::if $\frac{\partial \mathbf{e}_{j}}{\partial x^{k}}=0$, all $\Gamma=0$. This is the Cartesian special case.
- **Not a tensor** - see warning below.
- **Orthogonal-coordinate antisymmetry** (first kind only)::if $g_{ik}$ is diagonal, $\Gamma_{ik \ell}=-\Gamma_{ki \ell}$ for $i\neq k$ (consequence of [[Ricci's Theorem]]).

> [!warning] Christoffel symbols are not tensors
> Despite their index notation, they transform with an extra term:
>
> $\Gamma'^{i}_{jk}=L^{i'}_{m}L^{n}_{j'}L^{p}_{k'}\Gamma^{m}_{np}+L^{i'}_{m} \frac{\partial L^{m}_{j'}}{\partial x^{p}}L^{p}_{k'}$
>
> The second term spoils the tensor transformation law. This is expected: Christoffel symbols encode how the basis changes, which is coordinate-dependent information, not intrinsic geometry.

## Applications

1. **Computing covariant derivatives** of vectors and tensors in curvilinear coordinates.
2. **Measuring curvature** via the [[Riemann-Christoffel Tensor]] $R^{r}_{ijk}$, which is built from $\Gamma$ and its derivatives.
3. **Geodesic equations** $\ddot{x}^{i}+\Gamma^{i}_{jk}\dot{x}^{j}\dot{x}^{k}=0$ describing straight lines in curved spaces (not covered here but motivated by this machinery).

> [!example] Christoffel symbols in a diagonal metric
> For $(\rho,\phi,\theta)$ with $g_{11}=1$, $g_{22}=r^{2}$, $g_{33}=\sin \phi\sin \theta$, only three metric derivatives are nonzero. Applying the first-kind formula directly:
>
> $\Gamma_{122}=-\frac{1}{2} \frac{\partial g_{22}}{\partial \rho}=-r$, $\Gamma_{212}=\Gamma_{221}=r$.
>
> Raising the first index with $g^{11}=1,g^{22}=1/r^{2}$ gives $\Gamma^{1}_{22}=-r$ and $\Gamma^{2}_{12}=\Gamma^{2}_{21}=\boxed{1/r}$.

> Second-kind = upper, expands in $\mathbf{e}_{i}$. First-kind = all lower, expands in $\mathbf{e}^{i}$. Metric bridges them.
