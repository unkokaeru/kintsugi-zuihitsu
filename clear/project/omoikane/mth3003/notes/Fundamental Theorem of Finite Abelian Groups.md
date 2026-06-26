# Fundamental Theorem of Finite Abelian Groups

> [!important] Theorem
> Every finite abelian group $G$ is isomorphic to a direct product of cyclic groups of prime-power order:
> $$
> G\cong C_{p_{1}^{r_{1}}}\times C_{p_{2}^{r_{2}}}\times\cdots\times C_{p_{k}^{r_{k}}},
> $$
> where the $p_{i}$ are (not necessarily distinct) primes. The decomposition is unique up to reordering.

## What It Says

Every finite abelian group factors uniquely as a direct product of cyclic prime-power pieces. So the only finite abelian groups, up to isomorphism, are pinned down by the multi-set of prime-power orders.

## Building Block: Products of Coprime Cyclic Groups

The factors above are written as prime powers, but you can recombine coprime ones using:

> [!important] Proposition
> Let $C_{n},C_{m}$ be finite cyclic groups. Then
> $$
> C_{n}\times C_{m}\cong C_{nm}\iff\gcd(m,n)=1.
> $$

When $\gcd(m,n)=1$, the subgroups $\langle\rho^{m}\rangle\cong C_{n}$ and $\langle\rho^{n}\rangle\cong C_{m}$ of $C_{nm}=\langle\rho\rangle$ have trivial intersection and product $C_{nm}$, so $C_{nm}$ is their [[Internal direct product]]. When $\gcd(m,n)=d>1$ no element of $C_{n}\times C_{m}$ reaches order $nm$ (every element is killed by $mn/d$), so the product is not cyclic.

> [!example]
> $C_{80}\cong C_{16}\times C_{5}$ and $C_{7}\times C_{25}\cong C_{175}$, but $C_{2}\times C_{2}\not\cong C_{4}$.

This is why the "**Warning!**" in the notes matters: the same group can be written as $C_{5^{4}}\times C_{5^{2}}\times C_{3^{2}}\times C_{3}\times C_{2}$ (prime-power form) or recombined as $C_{11250}\times C_{75}$ - both correct, just different conventions.

## Abelian $p$-Groups

The classification for a single prime is the heart of the proof:

> [!important] Theorem
> Every finite abelian group of order $p^{n}$ is isomorphic to $C_{p^{e_{1}}}\times\cdots\times C_{p^{e_{t}}}$ with $p^{e_{1}}\cdots p^{e_{t}}=p^{n}$, unique up to reordering.

So the abelian groups of order $p^{n}$ correspond exactly to the **integer partitions of $n$** (the "shapes" $(e_{1},\ldots,e_{t})$). For example, the partitions of $3$ give the three groups of order $8$.

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

## Finitely Generated Version

The theorem extends from finite to **finitely generated** abelian groups by allowing free $\mathbb{Z}$-factors:

> [!important] Fundamental Theorem of Finitely Generated Abelian Groups
> Every nontrivial finitely generated abelian group $G$ is isomorphic to
> $$
> \mathbb{Z}^{e_{0}}\times C_{p_{1}^{e_{1}}}\times\cdots\times C_{p_{n}^{e_{n}}},
> $$
> unique up to reordering. The integer $e_{0}$ is the **rank** of $G$.

The finite case is just $e_{0}=0$. The rank counts the "infinite directions"; the cyclic prime-power factors are the **torsion** part.

## Significance

Combined with [[Cayley's theorem]] and the fact that $C_{n}$ embeds in $S_{n}$, this gives a complete classification of finite abelian groups in terms of integer partitions. The non-abelian classification is vastly harder (the Classification of Finite Simple Groups, 1980s).

See also [[Internal direct product]] for the detection mechanism.

## Source Sections

- [[mth3003 11.2 abelian groups of prime power order.pdf|11.2 Abelian Groups of Prime Power Order]]
- [[mth3003 11.3 the classification theorem of finite abelian groups.pdf|11.3 The Classification Theorem of Finite Abelian Groups]]
- Worked problems: [[mth3003 weekly problems 11]] (classification of order $72$; abelian converse to Lagrange).
