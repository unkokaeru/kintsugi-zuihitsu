# Cayley's theorem

> [!important] Cayley's Theorem
> Every group $G$ is isomorphic to a subgroup of a [[Symmetric group]]. Specifically, $G$ embeds into $\mathrm{Sym}(G)$ via the regular [[Group action]].

So permutation groups are not a special case of groups - they are (up to isomorphism) **all** groups.

## Proof

Let $G$ act on itself by left multiplication: $\lambda\colon G\to\mathrm{Sym}(G)$, $\lambda(g)x=gx$.

**Homomorphism check.** $\lambda(gh)x=(gh)x=g(hx)=\lambda(g)(\lambda(h)x)$. ✓

**Kernel.** $g\in\ker(\lambda)$ iff $gx=x$ for all $x\in G$, which forces $g=e$ (right-cancel by $x^{-1}$). So $\ker(\lambda)=\{e\}$.

By the **First Isomorphism Theorem**:

$$
G/\ker(\lambda)=G/\{e\}=G\;\cong\;\mathrm{Im}(\lambda)\leq\mathrm{Sym}(G).
$$

Hence $G$ is isomorphic to a subgroup of $\mathrm{Sym}(G)$. $\blacksquare$

## Significance

- For $|G|=n$, Cayley embeds $G$ into $S_{n}$. So **every finite group of order $n$ is a subgroup of $S_{n}$**.
- Justifies why we study $S_{n}$ so much in basic group theory: it contains everything.
- The embedding is rarely the most useful one in practice - $S_{n}$ has order $n!$, much larger than $n$, and the image rarely sits inside in a "nice" way.

## More Refined Embeddings

For any normal subgroup $H\trianglelefteq G$, the action by left multiplication on $G/H$ gives a homomorphism $G\to\mathrm{Sym}(G/H)$ with kernel contained in $H$. When this kernel is exactly $\{e\}$ (i.e. $H$ contains no nontrivial subgroup normal in $G$), this gives an embedding into a smaller symmetric group $S_{[G:H]}$. Useful for getting permutation representations of degree smaller than $|G|$.

## Historical Note

Cayley's theorem was published by Arthur Cayley in 1854 and is part of why early group theory was framed entirely in terms of permutation groups before the modern axiomatic definition emerged.
