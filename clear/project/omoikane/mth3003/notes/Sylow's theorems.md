# Sylow's theorems

Three theorems giving a *partial converse* to [[Lagrange's theorem]]: while Lagrange tells us only what subgroup orders are *forbidden*, Sylow tells us which prime-power orders are *guaranteed* and exactly how many subgroups of each kind there are.

## Setup

Let $G$ be a finite group and $p$ a prime. Write $|G|=p^{r}t$ with $p\nmid t$. A **Sylow $p$-subgroup** of $G$ is any subgroup of order $p^{r}$ - i.e. the largest possible $p$-subgroup.

## The Three Theorems

> [!important] First Sylow Theorem
> $G$ has at least one Sylow $p$-subgroup.

> [!important] Second Sylow Theorem
> Any two Sylow $p$-subgroups are **conjugate** in $G$. Equivalently, every $p$-subgroup of $G$ is contained in some Sylow $p$-subgroup.

> [!important] Third Sylow Theorem
> Let $a(p)$ be the number of Sylow $p$-subgroups. Then:
> 1. $a(p)\mid t$;
> 2. $a(p)\equiv 1\pmod{p}$.

## Why They Matter

- **Existence** (First): every prime divisor of $|G|$ guarantees a maximal $p$-subgroup.
- **Uniqueness up to conjugation** (Second): Sylow $p$-subgroups are structurally interchangeable.
- **Counting** (Third): $a(p)$ is constrained to a finite list of values; often pins it to $a(p)=1$.

When $a(p)=1$, the unique Sylow $p$-subgroup is **normal** (no other conjugates). This is the most common entry point for classification arguments.

## Standard Application: Order $pq$ Groups Are Often Cyclic

If $|G|=pq$ with primes $p<q$ and $p\nmid q-1$, then $a(q)=1$ and $a(p)=1$, both Sylow subgroups are normal, their intersection is trivial (Lagrange), their product is $G$, so $G$ is the [[Internal direct product]] $C_{p}\times C_{q}\cong C_{pq}$. Examples: orders $15, 33, 35, 51, 65, 77, 85, \ldots$.

When $p\mid q-1$ a non-cyclic example may exist (e.g. order $6$ allows $S_{3}$).

## Proof Strategy

- **First Sylow**: act $G$ on the set of $p^{r}$-subsets by left multiplication; use Orbit-Stabiliser and a binomial-coefficient $p$-adic argument.
- **Second / Third**: act $G$ on cosets / on the set of all Sylow $p$-subgroups by conjugation.

See lecture 17 for full statements and worked examples.

## Generalises [[Cauchy's theorem]]

Cauchy: $p\mid |G|\Rightarrow$ subgroup of order $p$. Sylow First: subgroup of order $p^{r}$ (the maximum power of $p$ in $|G|$).
