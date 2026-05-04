# Fundamental Theorem of Finite Abelian Groups

> [!important] Theorem
> Every finite abelian group $G$ is isomorphic to a direct product of cyclic groups of prime-power order:
> $$
> G\cong C_{p_{1}^{r_{1}}}\times C_{p_{2}^{r_{2}}}\times\cdots\times C_{p_{k}^{r_{k}}},
> $$
> where the $p_{i}$ are (not necessarily distinct) primes. The decomposition is unique up to reordering.

## What It Says

Every finite abelian group factors uniquely as a direct product of cyclic prime-power pieces. So the only finite abelian groups, up to isomorphism, are pinned down by the multi-set of prime-power orders.

## Counting Abelian Groups of a Given Order

Number of abelian groups of order $p^{n}$ = number of integer partitions of $n$.

| $|G|$ | Factorisation | Abelian groups (up to isomorphism) |
|---|---|---|
| $4$ | $2^{2}$ | $C_{4}$, $C_{2}\times C_{2}$ |
| $8$ | $2^{3}$ | $C_{8}$, $C_{4}\times C_{2}$, $C_{2}\times C_{2}\times C_{2}$ |
| $9$ | $3^{2}$ | $C_{9}$, $C_{3}\times C_{3}$ |
| $12$ | $2^{2}\cdot 3$ | $C_{4}\times C_{3}\cong C_{12}$, $C_{2}\times C_{2}\times C_{3}\cong C_{2}\times C_{6}$ |
| $16$ | $2^{4}$ | $C_{16}$, $C_{8}\times C_{2}$, $C_{4}\times C_{4}$, $C_{4}\times C_{2}\times C_{2}$, $C_{2}^{4}$ |

## Proof Sketch

Two steps:

1. **Sylow decomposition.** An abelian $G$ has all subgroups normal, so its Sylow $p$-subgroups are normal and pairwise have trivial intersection. Hence
$$
G\cong P_{p_{1}}\times P_{p_{2}}\times\cdots\times P_{p_{k}},
$$
where $P_{p_{i}}$ is the Sylow $p_{i}$-subgroup.
2. **Each $p$-group decomposes into cyclic factors.** A finite abelian $p$-group factors as $C_{p^{r_{1}}}\times C_{p^{r_{2}}}\times\cdots$ (induction on order, using a maximal-cyclic-subgroup argument).

The uniqueness up to reordering follows from comparing prime-power-component counts in any two decompositions.

## Equivalent Formulation: Invariant Factors

Equivalently, $G\cong C_{n_{1}}\times C_{n_{2}}\times\cdots\times C_{n_{s}}$ with $n_{1}\mid n_{2}\mid \cdots \mid n_{s}$. The $n_{i}$ are the **invariant factors** of $G$. The two formulations (prime-power decomposition vs invariant factors) are interchangeable via the Chinese Remainder Theorem.

## Significance

Combined with [[Cayley's theorem]] and the fact that $C_{n}$ embeds in $S_{n}$, this gives a complete classification of finite abelian groups in terms of integer partitions. The non-abelian classification is vastly harder (the Classification of Finite Simple Groups, 1980s).

See also [[Internal direct product]] for the detection mechanism.
