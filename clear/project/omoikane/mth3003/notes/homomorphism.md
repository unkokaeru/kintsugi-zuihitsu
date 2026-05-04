# Homomorphism

A **homomorphism** is a map $\theta\colon G\to H$ between two groups that **preserves the group operation**:

$$
\boxed{\theta(g_{1}g_{2})=\theta(g_{1})\theta(g_{2})\quad\text{for all }g_{1},g_{2}\in G,}
$$

where the multiplication on the left is in $G$ and on the right is in $H$.

## Basic Properties

For any homomorphism $\theta\colon G\to H$:

1. $\theta(e_{G})=e_{H}$ - identity goes to identity.
2. $\theta(g^{-1})=\theta(g)^{-1}$ - inverses go to inverses.
3. $\theta(g^{n})=\theta(g)^{n}$ for all $n\in\mathbb{Z}$.

Each follows from the defining property by short manipulations.

## Associated Subgroups

- The **[[Image]]** $\mathrm{Im}(\theta)=\{\theta(g):g\in G\}\leq H$.
- The **[[Kernel]]** $\ker(\theta)=\{g\in G:\theta(g)=e_{H}\}\trianglelefteq G$ (always normal).

The kernel measures *how far from injective* $\theta$ is: $\theta$ is injective iff $\ker(\theta)=\{e_{G}\}$.

## Examples

- $\det\colon \mathrm{GL}_{n}(\mathbb{R})\to\mathbb{R}^{*}$ - determinant is a homomorphism, kernel $\mathrm{SL}_{n}(\mathbb{R})$.
- $\sigma\colon S_{n}\to\{\pm 1\}$ - [[Signature]], kernel $A_{n}$.
- $\exp\colon (\mathbb{R},+)\to (\mathbb{R}_{>0},\cdot)$ - exponential is an isomorphism.
- For $H\trianglelefteq G$, the quotient map $G\to G/H$, $g\mapsto gH$, is a surjective homomorphism with kernel $H$.

## Bijective Homomorphisms

A bijective homomorphism is an **[[Isomorphism]]**. The two groups are then "the same" up to relabelling.

## First Isomorphism Theorem

For any homomorphism $\theta\colon G\to H$:

$$
G/\ker(\theta)\;\cong\;\mathrm{Im}(\theta).
$$

The factorisation through the kernel gives a canonical "abstract identification" of source and image - see [[Isomorphism theorems]].
