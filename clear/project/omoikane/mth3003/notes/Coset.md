# Coset

For a [[Subgroup]] $H\leq G$ and an element $g\in G$:

- The **left coset** of $H$ by $g$ is $gH=\{gh:h\in H\}\subseteq G$.
- The **right coset** is $Hg=\{hg:h\in H\}\subseteq G$.

In an abelian group (or for normal subgroups in general acted on a particular way) left and right cosets coincide. In general they need not.

## Properties

1. Either $gH=g'H$ or $gH\cap g'H=\emptyset$ - cosets **partition** $G$.
2. $g_{1}H=g_{2}H\iff g_{1}^{-1}g_{2}\in H$.
3. All cosets have the same size: $|gH|=|H|$.
4. The number of distinct cosets is the **index** $[G:H]=|G|/|H|$ (for finite $G$).

(Fact 3 + the partition give [[Lagrange's theorem]]: $|H|\mid |G|$.)

## Quotient Construction

If $H$ is **[[Normal subgroup]]** ($H\trianglelefteq G$), the cosets form a group under $(g_{1}H)(g_{2}H)=(g_{1}g_{2})H$ - the **[[Quotient group]]** $G/H$.

For non-normal $H$ this product is not well-defined: two different representatives $g_{1}h$ and $g_{1}h'$ give different products $(g_{1}h\cdot g_{2})H$.

## Geometric Picture

Cosets of $H$ in $G$ are the "horizontal slices" of $G$ partitioned by the equivalence $g_{1}\sim g_{2}\iff g_{1}^{-1}g_{2}\in H$. Each slice has the same size $|H|$, and there are $[G:H]$ of them.

## Examples

- $G=\mathbb{Z},\,H=2\mathbb{Z}$: two cosets, the even integers $0+2\mathbb{Z}$ and the odd integers $1+2\mathbb{Z}$.
- $G=S_{3},\,H=\langle(1\,2)\rangle$: three left cosets $\{e,(1\,2)\}, \{(1\,2\,3),(1\,3)\}, \{(1\,3\,2),(2\,3)\}$. Right cosets are different.
- $G=\mathbb{R},\,H=\mathbb{Z}$: cosets are $r+\mathbb{Z}$ for $r\in[0,1)$ - the quotient $\mathbb{R}/\mathbb{Z}\cong S^{1}$ (the circle).
