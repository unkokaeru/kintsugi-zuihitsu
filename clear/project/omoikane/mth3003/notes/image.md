# Image

For a [[Homomorphism]] $\theta\colon G\to H$, the **image** is

$$
\boxed{\mathrm{Im}(\theta)=\{\theta(g):g\in G\}\subseteq H.}
$$

The set of all output values. Always a subgroup of $H$.

## Why a Subgroup

By the [[Subgroup]], take $h_{1},h_{2}\in\mathrm{Im}(\theta)$, so $h_{i}=\theta(g_{i})$ for some $g_{i}\in G$:

- $\theta(e_{G})=e_{H}$, so $e_{H}\in\mathrm{Im}(\theta)$.
- $h_{1}h_{2}=\theta(g_{1})\theta(g_{2})=\theta(g_{1}g_{2})\in\mathrm{Im}(\theta)$.
- $h_{1}^{-1}=\theta(g_{1}^{-1})\in\mathrm{Im}(\theta)$.

So $\mathrm{Im}(\theta)\leq H$.

## $\theta$ is Surjective iff $\mathrm{Im}(\theta)=H$

By definition.

## In the First Isomorphism Theorem

$$
G/\ker(\theta)\cong\mathrm{Im}(\theta).
$$

The quotient by the kernel matches the image. So image and "$G$ modulo the kernel" carry the same information.

## Examples

- $\det\colon\mathrm{GL}_{n}(\mathbb{R})\to\mathbb{R}^{*}$: image = $\mathbb{R}^{*}$ (every nonzero real is a determinant).
- [[Signature]] $\sigma\colon S_{n}\to\{\pm 1\}$ for $n\geq 2$: image = $\{\pm 1\}$.
- Inclusion $H\hookrightarrow G$: image = $H$.
- Trivial homomorphism $\theta(g)=e_{H}$: image = $\{e_{H}\}$, kernel = $G$.
