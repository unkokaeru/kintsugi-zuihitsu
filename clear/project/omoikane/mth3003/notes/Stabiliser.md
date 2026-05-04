# Stabiliser

For a [[Group action]] of $G$ on a set $X$, and $x\in X$, the **stabiliser** of $x$ is

$$
\boxed{\mathrm{Stab}_{G}(x)=\{g\in G:\lambda(g)x=x\}\subseteq G.}
$$

The set of group elements that fix the point $x$.

## Properties

- $\mathrm{Stab}_{G}(x)\leq G$ - always a subgroup.
- In a transitive action, all stabilisers have the same size: $|\mathrm{Stab}_{G}(x)|=|\mathrm{Stab}_{G}(y)|$ for all $x,y$.
- For points in the same orbit, the stabilisers are conjugate: if $y=\lambda(g)x$, then $\mathrm{Stab}_{G}(y)=g\,\mathrm{Stab}_{G}(x)\,g^{-1}$.

## [[Orbit-Stabiliser theorem]]

$$
|Gx|\cdot |\mathrm{Stab}_{G}(x)|=|G|\quad\text{(for finite }G\text{)}.
$$

So stabiliser size and orbit size are inversely related.

## Examples

- **Regular action** of $G$ on itself: $\mathrm{Stab}_{G}(x)=\{e\}$ for all $x$ (trivial).
- **Conjugation action** of $G$ on itself: $\mathrm{Stab}_{G}(x)=C_{G}(x)$, the **centraliser** of $x$ - elements that commute with $x$.
- **$S_{4}$ on $\{1,2,3,4\}$**, action on point $1$: $\mathrm{Stab}_{S_{4}}(1)=\mathrm{Sym}(\{2,3,4\})\cong S_{3}$, size $6$. Orbit-Stabiliser: $|S_{4}\cdot 1|=24/6=4=|\{1,2,3,4\}|$. ✓
- **$D_{2n}$ on corners of an $n$-gon**, action on corner $1$: stabiliser is $\{e,r\}$ where $r$ is the reflection through corner $1$.

## Distinction From Fixed-Point Set

Don't confuse:

- $\mathrm{Stab}_{G}(x)\subseteq G$ - group elements fixing **one specific point** $x$.
- $\mathrm{Fix}_{X}(g)\subseteq X$ - points fixed by **one specific group element** $g$.

Different ambient sets, different roles. Both appear in the [[Orbit counting theorem]].
