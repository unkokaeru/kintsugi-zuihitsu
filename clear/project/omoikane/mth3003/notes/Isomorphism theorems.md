# Isomorphism theorems

Three foundational results relating quotients, [[Homomorphism]], and subgroup structure.

## First Isomorphism Theorem

> [!important] First Isomorphism Theorem
> Let $\theta\colon G\to H$ be a [[Homomorphism]]. Then
> $$
> \boxed{G/\ker(\theta)\cong\mathrm{Im}(\theta).}
> $$

**Mnemonic.** "Quotient by the kernel = image."

**Why it matters.** Every surjective homomorphism $G\to H$ is essentially a [[Quotient group]] map: $H\cong G/\ker(\theta)$. Quotients and images are two views of the same thing.

## Second Isomorphism Theorem

> [!important] Second Isomorphism Theorem
> Let $G$ be a group, $H\leq G$, $N\trianglelefteq G$. Then
> $$
> \boxed{H/(H\cap N)\cong (HN)/N.}
> $$

**Picture.** Mod out $H$ by the part of $H$ lying in $N$, and you get the same as taking the larger group $HN$ and modding by $N$.

## Third Isomorphism Theorem

> [!important] Third Isomorphism Theorem
> Let $G$ be a group with $N\trianglelefteq G$ and $H\trianglelefteq G$ with $N\leq H$. Then $H/N\trianglelefteq G/N$, and
> $$
> \boxed{(G/N)\big/(H/N)\cong G/H.}
> $$

**Mnemonic.** "Quotients telescope" - taking a quotient by $N$ then by $H/N$ is the same as taking a quotient by $H$ directly.

## Worked Application

For $G=\mathrm{GL}_{2}(\mathbb{R})$, $K=\mathrm{SL}_{2}(\mathbb{R})$, $P=\{M:\det(M)>0\}$:
- $G/K\cong\mathbb{R}^{*}$ (First Iso, applied to $\det$).
- $P/K\cong\mathbb{R}_{>0}$.
- $G/P\cong C_{2}$.
- Third Iso: $(G/K)/(P/K)\cong G/P$, i.e. $\mathbb{R}^{*}/\mathbb{R}_{>0}\cong C_{2}$. ✓

## Significance

Together, the three theorems describe how subgroup lattices and quotient lattices interact. They reduce many group-theoretic questions to a sequence of "factor and identify" steps.
