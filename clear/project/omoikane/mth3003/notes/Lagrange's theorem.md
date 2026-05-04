# Lagrange's theorem

> [!important] Lagrange's Theorem
> For any finite group $G$ and any [[Subgroup]] $H\leq G$,
> $$
> \boxed{|H|\mid |G|.}
> $$
> The order of $H$ divides the order of $G$. The quotient $|G|/|H|$ is the **index** $[G:H]$ - the number of distinct left (or right) cosets.

## Proof Outline

The left [[Coset]] of $H$ partition $G$, all have the same size $|H|$, and there are $[G:H]$ of them. Hence $|G|=|H|\cdot [G:H]$, so $|H|\mid |G|$. $\blacksquare$

## Consequences

1. **Order of an element divides the group order.** For $g\in G$, $\langle g\rangle\leq G$ and $|\langle g\rangle|=o(g)$, so $o(g)\mid |G|$.
2. **Groups of prime order are cyclic.** If $|G|=p$ prime, then any non-identity $g\in G$ has $o(g)\mid p$, so $o(g)=p$, hence $\langle g\rangle=G\cong C_{p}$.
3. **Fermat's little theorem.** Apply Lagrange in $(\mathbb{Z}/p)^{*}$ of order $p-1$: $a^{p-1}\equiv 1\pmod{p}$.
4. **No subgroup of forbidden size.** If $|G|=12$, no subgroup of order $5$ exists, since $5\nmid 12$.

## What Lagrange Doesn't Say

The **converse fails**: knowing $d\mid |G|$ does NOT guarantee a subgroup of order $d$. The classic example is $A_{4}$ (order $12$), which has no subgroup of order $6$.

The partial converse via prime powers is **[[Sylow's theorems]]**.

## Index Counting

A useful reformulation:

$$
|G|=|H|\cdot [G:H].
$$

Combined with the [[Orbit-Stabiliser theorem]] $|Gx|=[G:\mathrm{Stab}_{G}(x)]$, this often pins down orbit sizes via divisibility arguments.
