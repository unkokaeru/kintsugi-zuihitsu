# Internal direct product

A way of recognising that a group $G$ is **internally** built up from two of its subgroups.

> [!important] Definition
> Let $G$ be a group with [[Normal subgroup]] $M,N\trianglelefteq G$ such that
> $$
> M\cap N=\{e\}\quad\text{and}\quad MN=G.
> $$
> Then $G$ is the **internal direct product** of $M$ and $N$.

## Equivalent: $G\cong M\times N$ Externally

> [!important] Theorem
> If $M,N\trianglelefteq G$ with $M\cap N=\{e\}$, then $MN\leq G$ and
> $$
> MN\cong M\times N
> $$
> (the **external direct product**).

So internal and external direct products are isomorphic; the distinction is whether you build $M\times N$ from outside (taking pairs) or detect it inside an existing group $G$ (finding two normal subgroups with trivial intersection).

## Detection Recipe

To show $G\cong M\times N$:

1. Find $M,N\trianglelefteq G$.
2. Verify $M\cap N=\{e\}$ (often via Lagrange when $|M|$ and $|N|$ are coprime).
3. Verify $MN=G$ (often via $|MN|=|M||N|/|M\cap N|=|G|$).

Then $G\cong M\times N$ follows automatically.

## Example: Order $15$ Group is Cyclic

$|G|=15=3\cdot 5$. By [[Sylow's theorems]], $G$ has unique (hence normal) Sylow 3- and Sylow 5-subgroups $J,K$. $J\cap K=\{e\}$ by Lagrange ($\gcd(3,5)=1$). $|JK|=3\cdot 5=15=|G|$, so $JK=G$. Hence

$$
G\cong J\times K\cong C_{3}\times C_{5}\cong C_{15}.
$$

## Generalisation to More Subgroups

If $M_{1},\ldots,M_{k}\trianglelefteq G$ have pairwise trivial intersections (and the right product condition), then $G\cong M_{1}\times\cdots\times M_{k}$. In particular, every finite abelian group decomposes as a direct product of cyclic prime-power groups (the **Fundamental Theorem of Finite Abelian Groups**).

## Key Lemma

The technical heart of the theorem: if $M,N\trianglelefteq G$ with $M\cap N=\{e\}$, then $mn=nm$ for all $m\in M$, $n\in N$ - they commute. Proof: $n^{-1}mnm^{-1}\in M\cap N=\{e\}$ via the commutator argument.

This commuting is what makes the multiplication in $MN$ behave like componentwise multiplication in $M\times N$, giving the isomorphism $\theta\colon MN\to M\times N$, $\theta(mn)=(m,n)$.

## Source Sections

- [[mth3003 11.2 abelian groups of prime power order.pdf|11.2 Abelian Groups of Prime Power Order]] - uses the internal direct product to prove $C_{n}\times C_{m}\cong C_{nm}$ when $\gcd(m,n)=1$.
- See also [[Fundamental Theorem of Finite Abelian Groups]].
