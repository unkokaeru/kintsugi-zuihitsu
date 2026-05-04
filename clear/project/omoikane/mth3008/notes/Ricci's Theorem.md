# Ricci's Theorem

> [!tip] Relevant parts to questions...
> - $g_{ik,\ell}=0$: the covariant derivative of the [[Metric Tensor]] vanishes - the metric is **covariantly constant**.
> - Useful rearrangement::$\frac{\partial g_{ik}}{\partial x^{\ell}}=\Gamma_{ik \ell}+\Gamma_{ki \ell}$ - expresses metric derivatives via [[Christoffel Symbols]].
> - In **orthogonal** coordinates, this forces $\Gamma_{ik \ell}=-\Gamma_{ki \ell}$ for $i\neq k$ - first-kind antisymmetry.
> - Applies only to **first-kind** symbols; second-kind do **not** enjoy the same sign antisymmetry.

> [!important] Ricci's Theorem
> The covariant derivative of the [[Metric Tensor]] vanishes:
>
> $\displaystyle g_{ik,\ell}=0$
>
> Equivalently, the metric is **covariantly constant**. [[Covariant Differentiation]] is compatible with the inner-product structure defined by $g_{ik}$.

## Proof

Apply the rank-2 covariant-derivative formula to $T_{ik}=g_{ik}$:

$$
g_{ik,\ell}= \frac{\partial g_{ik}}{\partial x^{\ell}}-\Gamma^{m}_{i \ell}g_{mk}-\Gamma^{m}_{k \ell}g_{im}
$$

Using the metric to lower an index on $\Gamma$: $\Gamma^{m}_{i \ell}g_{mk}=\Gamma_{ki \ell}$ and $\Gamma^{m}_{k \ell}g_{im}=\Gamma_{ik \ell}$. So:

$$
g_{ik,\ell}= \frac{\partial g_{ik}}{\partial x^{\ell}}-\Gamma_{ki \ell}-\Gamma_{ik \ell}
$$

Now apply the first-kind metric formula to each Christoffel symbol and add them. The cross-terms cancel in pairs (using $g_{ki}=g_{ik}$), leaving:

$$
\Gamma_{ik \ell}+\Gamma_{ki \ell}= \frac{\partial g_{ik}}{\partial x^{\ell}}
$$

Substituting back gives $g_{ik,\ell}= \frac{\partial g_{ik}}{\partial x^{\ell}}- \frac{\partial g_{ik}}{\partial x^{\ell}}=\boxed{0}$. ✓

## Consequences

### Useful Formula for Metric Derivatives

Rearranging the proof:

$$
\boxed{\frac{\partial g_{ik}}{\partial x^{\ell}}=\Gamma_{ik \ell}+\Gamma_{ki \ell}}
$$

This lets you read metric derivatives off Christoffel symbols (or, conversely, constrain $\Gamma$ from known metric derivatives).

### Antisymmetry in Orthogonal Coordinates

In **orthogonal** coordinates, $g_{ik}=0$ for $i\neq k$, so $\frac{\partial g_{ik}}{\partial x^{\ell}}=0$ whenever $i\neq k$. The useful formula then forces:

$$
\boxed{\Gamma_{ik \ell}=-\Gamma_{ki \ell}\qquad (\text{orthogonal coords},\ i\neq k)}
$$

**First-kind** Christoffel symbols are antisymmetric in their **first two** indices when the coordinates are orthogonal. This cuts compute time in half for worked examples.

> [!warning] Second-kind symbols don't obey this
> $\Gamma^{i}_{jk}$ does **not** satisfy $\Gamma^{i}_{jk}=-\Gamma^{j}_{ik}$ in general, because raising the first index with $g^{i \ell}$ destroys the simple sign relation (the two raised symbols get multiplied by *different* metric entries).

## Properties

- **Coordinate-invariant statement**::$g_{ik,\ell}=0$ holds in every coordinate system - not just orthogonal ones.
- **Raises and lowers indices commute with $\nabla$**::because $g$ is covariantly constant, $(g^{i \ell}A_{\ell})_{,k}=g^{i \ell}A_{\ell,k}$. You can raise/lower indices through a covariant derivative freely.
- **Ricci's theorem for $g^{ik}$**::$g^{ik}_{\ \ ,\ell}=0$ too, by the same calculation applied to the contravariant metric.

## Applications

1. **Computing Christoffel symbols efficiently**, by combining Ricci's antisymmetry (orthogonal case) with the lower-index symmetry $\Gamma_{ijk}=\Gamma_{ikj}$.
2. **Pulling the metric through covariant derivatives**, to simplify tensor-calculus expressions.
3. **Setting up the [[Riemann-Christoffel Tensor]]**::the derivation in lecture 18 uses Ricci's theorem to cancel certain metric-derivative terms.

> [!example] Orthogonal $(\rho,\tau,\theta)$ with $g_{22}=\rho^{2}-\tau^{2}$
> Direct calculation gives $\Gamma_{122}=-\frac{1}{2} \frac{\partial g_{22}}{\partial \rho}=-\rho$.
>
> Ricci (orthogonal, $i=2,k=1,\ell=2$): $\Gamma_{212}=-\Gamma_{122}=\rho$. Then lower-index symmetry gives $\Gamma_{221}=\Gamma_{212}=\rho$.
>
> $\boxed{\Gamma_{122}=-\rho,\ \Gamma_{212}=\rho,\ \Gamma_{221}=\rho}$ - three symbols from a single derivative.

> Metric is covariantly constant. Orthogonal coords ⇒ first-kind antisymmetry in the first two indices.
