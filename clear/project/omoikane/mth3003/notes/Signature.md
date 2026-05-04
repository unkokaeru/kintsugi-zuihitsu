# Signature

The **signature** (or **sign**) of a permutation $g\in S_{n}$ is

$$
\sigma(g)=\prod_{i<j}\frac{g(i)-g(j)}{i-j}\;\in\;\{\pm 1\},
$$

or equivalently, expressed via cycle decomposition: if $g=c_{1}c_{2}\cdots c_{m}$ in disjoint cycles with $|c_{k}|=r_{k}$,

$$
\boxed{\sigma(g)=\prod_{k=1}^{m}(-1)^{r_{k}-1}.}
$$

So a cycle of length $r$ has signature $(-1)^{r-1}$ - odd-length cycles are even, even-length cycles are odd.

## Easier Mental Recipe

Signature $=+1$ iff the number of **even-length cycles** in the disjoint-cycle decomposition is **even**. (Each even-length cycle contributes a factor of $-1$.)

## Properties

- $\sigma$ is a [[Homomorphism]] $S_{n}\to\{\pm 1\}$ (multiplicative group, $\cong C_{2}$).
- $\sigma$ is surjective for $n\geq 2$ (any transposition has signature $-1$).
- $\ker(\sigma)=A_{n}$, the [[Alternating group]].
- $\sigma(g^{-1})=\sigma(g)$ (cycles reverse but lengths preserved).
- $\sigma(g h g^{-1})=\sigma(h)$ - conjugation preserves signature (preserves cycle structure).

## Even and Odd Permutations

- **Even** ($\sigma=+1$): in $A_{n}$.
- **Odd** ($\sigma=-1$): not in $A_{n}$ - the "other half" of $S_{n}$.

## In Action

A transposition $(i\,j)$ is a 2-cycle, signature $-1$. Any permutation can be written as a product of transpositions; the parity of the number of transpositions equals the signature.

## Examples

- $\sigma(e)=+1$.
- $\sigma((1\,2))=-1$.
- $\sigma((1\,2\,3))=+1$ (3-cycle has length 3, $(-1)^{2}=+1$).
- $\sigma((1\,2\,3)(4\,5))=(+1)(-1)=-1$.
- $\sigma((1\,2)(3\,4)(5\,6)(7\,8))=(-1)^{4}=+1$.

## Determinant Connection

The signature equals the determinant of the corresponding permutation matrix: $\sigma(g)=\det(P_{g})$. This is the geometric origin of the sign - it tracks orientation reversal under permutation of basis vectors.
