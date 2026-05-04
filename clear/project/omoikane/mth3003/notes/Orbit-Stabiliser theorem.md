# Orbit-Stabiliser theorem

> [!important] Orbit-Stabiliser Theorem
> Let $G$ be a group acting on a set $X$ via $\lambda$. For all $x\in X$,
> $$
> \boxed{|Gx|=[G:\mathrm{Stab}_{G}(x)].}
> $$
> If $G$ is finite,
> $$
> |Gx|=\frac{|G|}{|\mathrm{Stab}_{G}(x)|}.
> $$

The size of the [[Orbit]] of $x$ equals the index of its [[Stabiliser]].

## Proof Sketch

Let $S=\mathrm{Stab}_{G}(x)$. Define a map $G/S\to Gx$ by $gS\mapsto \lambda(g)x$. This is

- **Well-defined**: $g_{1}S=g_{2}S\iff g_{1}^{-1}g_{2}\in S\iff \lambda(g_{1}^{-1}g_{2})x=x\iff \lambda(g_{1})x=\lambda(g_{2})x$.
- **Surjective**: by definition of $Gx$.
- **Injective**: by the same equivalence.

So it's a bijection. Hence $|Gx|=|G/S|=[G:S]$. $\blacksquare$

## Applications

1. **Compute orbit sizes** by computing stabilisers.
2. **Rule out transitive actions**: if $|X|\nmid |G|$, no transitive action of $G$ on $X$ exists. (Corollary: $D_{10}$ cannot act transitively on a triangle.)
3. **Class equation** in conjugation actions: $|G|=|Z(G)|+\sum |G|/|C_{G}(g_{i})|$, summing over non-central conjugacy classes.
4. **Sylow theorems**: the proofs of [[Sylow's theorems]] all use Orbit-Stabiliser at key steps.

## Example: $S_{4}$ on $\{1,2,3,4\}$

- Action transitive, so $|G\cdot 1|=4$.
- $\mathrm{Stab}_{S_{4}}(1)\cong S_{3}$, $|\cdot|=6$.
- Check: $4=24/6$. ✓

## Example: $S_{n}$ on Pairs

$S_{n}$ acts on $\{1,\ldots,n\}\times\{1,\ldots,n\}$ via $\lambda(g)(i,j)=(gi,gj)$. The orbit of $(1,1)$ is the diagonal $\{(i,i):i\in[n]\}$, so $|G\cdot(1,1)|=n$. The stabiliser is $\mathrm{Sym}(\{2,\ldots,n\})$ of size $(n-1)!$. Orbit-Stabiliser: $n!/(n-1)!=n$. ✓

## Companion Theorem

The [[Orbit counting theorem]] complements Orbit-Stabiliser: while OS gives the size of an orbit, the orbit counting theorem gives the *number* of orbits.
