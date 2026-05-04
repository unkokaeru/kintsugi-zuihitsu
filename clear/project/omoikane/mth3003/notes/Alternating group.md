# Alternating group

The **alternating group** $A_{n}$ is the [[Subgroup]] of the [[Symmetric group]] $S_{n}$ consisting of all **even permutations**:

$$
\boxed{A_{n}=\ker(\sigma)=\{g\in S_{n}:\sigma(g)=+1\},}
$$

where $\sigma\colon S_{n}\to\{\pm 1\}$ is the [[Signature]].

## Order and Structure

- $|A_{n}|=n!/2$ for $n\geq 2$ (half of $S_{n}$, since signature $\sigma\colon S_{n}\to\{\pm 1\}$ is surjective for $n\geq 2$).
- $A_{n}\trianglelefteq S_{n}$ (it's a [[Kernel]], hence [[Normal subgroup]]).
- $S_{n}/A_{n}\cong C_{2}$ (First Isomorphism Theorem with the signature).

## Cycle Shapes in $A_{n}$

A cycle of length $r$ has signature $(-1)^{r-1}$. So a permutation with cycle shape $(r_{1},r_{2},\ldots)$ has signature $\prod (-1)^{r_{i}-1}$. Equivalently, the number of **even-length cycles** must be even for $g\in A_{n}$.

| Cycle shape | $\sigma$ | In $A_{n}$? |
|---|---|---|
| $(1^{n})$ (identity) | $+1$ | ✓ |
| $(2)$ (transposition) | $-1$ | ✗ |
| $(2,2)$ (double transposition) | $+1$ | ✓ |
| $(3)$ (3-cycle) | $+1$ | ✓ |
| $(3,2)$ | $-1$ | ✗ |
| $(4)$ | $-1$ | ✗ |
| $(5)$ | $+1$ | ✓ |

## Importance

- **Simple for $n\geq 5$**: $A_{n}$ has no nontrivial proper [[Normal subgroup]] for $n\geq 5$. This is the algebraic obstruction to solving the general quintic by radicals (Galois theory).
- $A_{4}$ is **not** simple - it has the Klein four-group $V_{4}=\{e,(1\,2)(3\,4),(1\,3)(2\,4),(1\,4)(2\,3)\}$ as a normal subgroup.
- $A_{5}$ is the smallest nonabelian simple group, with $|A_{5}|=60$.

## Sizes and Examples

- $A_{2}=\{e\}$ (trivial).
- $A_{3}=\{e,(1\,2\,3),(1\,3\,2)\}\cong C_{3}$.
- $A_{4}$: 12 elements - identity, 8 three-cycles, 3 double transpositions.
- $A_{5}$: 60 elements - identity, 15 double transpositions, 20 three-cycles, 24 five-cycles.
