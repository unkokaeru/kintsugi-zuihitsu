# Cauchy's theorem

> [!important] Cauchy's Theorem
> Let $G$ be a finite group and $p$ a prime dividing $|G|$. Then $G$ contains an element of order $p$ - equivalently, a subgroup of order $p$.

## Why It's Important

A **partial converse** to [[Lagrange's theorem]]. Lagrange forbids divisor sizes; Cauchy guarantees that prime divisors *are* realised by subgroup orders. Cauchy's theorem is itself a stepping-stone to [[Sylow's theorems]], which generalise it to prime *powers*.

## Examples

- $|G|=15=3\cdot 5$. By Cauchy, $G$ contains elements of orders $3$ and $5$, hence subgroups $C_{3}$ and $C_{5}$.
- $|G|=12=2^{2}\cdot 3$. By Cauchy, $G$ has elements of orders $2$ and $3$.

## Standard Proof Sketch

By induction on $|G|$ using the [[Orbit-Stabiliser theorem]]:

$$
|G|=|Z(G)|+\sum_{i}|G|/|C_{G}(g_{i})|,
$$

summed over conjugacy class representatives $g_{i}$ outside the centre. If $p\mid |G|$, either $p\mid |Z(G)|$ (and we win in the abelian centre, which is immediate) or some non-central centraliser $C_{G}(g_{i})$ has $p\mid |C_{G}(g_{i})|<|G|$, and induction applies.

## Generalisation

[[Sylow's theorems]] strengthens Cauchy: not just an element of order $p$, but a *subgroup* of order $p^{r}$ for the maximal prime-power dividing $|G|$.
