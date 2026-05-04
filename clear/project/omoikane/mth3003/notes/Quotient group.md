# Quotient group

For a [[Normal subgroup]] $N\trianglelefteq G$, the **quotient group** (or **factor group**) $G/N$ is the set of [[Coset]]

$$
G/N=\{gN:g\in G\},
$$

made into a group by the operation

$$
(g_{1}N)(g_{2}N)=(g_{1}g_{2})N.
$$

The well-definedness of this multiplication is exactly the condition that $N$ be normal - see [[Normal subgroup]].

## Properties

- **Identity:** $eN=N$.
- **Inverses:** $(gN)^{-1}=g^{-1}N$.
- **Order:** $|G/N|=[G:N]=|G|/|N|$ (when $G$ is finite).
- **Natural surjection:** the map $\pi\colon G\to G/N$, $\pi(g)=gN$, is a surjective [[Homomorphism]] with [[Kernel]] $N$.

## First Isomorphism Theorem

For any homomorphism $\theta\colon G\to H$:

$$
G/\ker(\theta)\cong\mathrm{Im}(\theta).
$$

So every quotient group is "an image of $G$ under some homomorphism" - and conversely. Quotients and images are dual ways of saying the same thing.

See [[Isomorphism theorems]] for the second and third versions.

## Examples

- $\mathbb{Z}/n\mathbb{Z}\cong C_{n}$ - integers mod $n$ form a cyclic group.
- $\mathbb{R}/\mathbb{Z}\cong S^{1}$ (the circle group).
- $S_{n}/A_{n}\cong C_{2}$ (signature).
- $\mathrm{GL}_{n}(\mathbb{R})/\mathrm{SL}_{n}(\mathbb{R})\cong\mathbb{R}^{*}$ (determinant).
- $G/G=\{e\}$ (trivial quotient).
- $G/\{e\}=G$ (no information thrown away).

## Geometric Interpretation

$G/N$ is what you get by "collapsing each coset of $N$ to a single point" - the algebraic structure that survives after that collapse. If $N$ measures a notion of equivalence, $G/N$ is "$G$ up to that equivalence".
