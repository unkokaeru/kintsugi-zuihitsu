# Kernel

For a [[Homomorphism]] $\theta\colon G\to H$, the **kernel** is

$$
\boxed{\ker(\theta)=\{g\in G:\theta(g)=e_{H}\}\subseteq G.}
$$

The set of elements that get sent to the identity. Always a [[Normal subgroup]] of $G$.

## Why Normal

For any $g\in G$ and $k\in\ker(\theta)$:

$$
\theta(g^{-1}kg)=\theta(g)^{-1}\theta(k)\theta(g)=\theta(g)^{-1}e_{H}\theta(g)=e_{H},
$$

so $g^{-1}kg\in\ker(\theta)$. Hence $\ker(\theta)\trianglelefteq G$.

## Why It Matters

The kernel measures **how far from injective** $\theta$ is:

$$
\theta\text{ is injective}\iff \ker(\theta)=\{e_{G}\}.
$$

Combined with the **First Isomorphism Theorem**:

$$
G/\ker(\theta)\cong\mathrm{Im}(\theta),
$$

the kernel is the unique normal subgroup such that quotienting it out gives an isomorphic copy of the image.

## Examples

- $\det\colon \mathrm{GL}_{n}(\mathbb{R})\to\mathbb{R}^{*}$: kernel = $\mathrm{SL}_{n}(\mathbb{R})$ (matrices of determinant 1).
- [[Signature]] $\sigma\colon S_{n}\to\{\pm 1\}$: kernel = $A_{n}$ (the [[Alternating group]]).
- Quotient map $G\to G/N$, $g\mapsto gN$: kernel = $N$.
- $\exp\colon\mathbb{C}\to\mathbb{C}^{*}$: kernel = $2\pi i\mathbb{Z}$.

## Connection to Group Actions

For a [[Group action]] $\lambda\colon G\to\mathrm{Sym}(X)$, the kernel is the set of elements fixing **every** point of $X$ - sometimes called the **kernel of the action**. Distinct from the [[Stabiliser]] of a single point.
