# Levi-Civita Symbol

> [!tip] Relevant parts to questions...
> - It's the $n$-dimensional generalisation of the [[Alternating Tensor]] $\epsilon_{ijk}$.
> - In MTH3008, you mostly meet only the rank-3 form $\epsilon_{ijk}$ (see [[Alternating Tensor]]).
> - Identical rules apply: cyclic permutations preserve sign, swaps flip sign, repeated indices give zero.

The **Levi-Civita Symbol** is the generalised version of the [[Alternating Tensor]], defined for $n$ indices as

$$
\epsilon_{i_{1}i_{2}\dots i_{n}}=\begin{cases}+1 & \text{if }(i_{1},\dots,i_{n})\text{ is an even permutation of }(1,\dots,n) \\ -1 & \text{if }(i_{1},\dots,i_{n})\text{ is an odd permutation of }(1,\dots,n) \\ 0 & \text{if any two indices are equal}\end{cases}
$$

Key properties (independent of $n$):

- **Antisymmetry under swap**: interchanging any two indices flips the sign.
- **Cyclic invariance** (in 3D): $\epsilon_{ijk}=\epsilon_{jki}=\epsilon_{kij}$.
- **Repeated-index rule**: if any two of $i_{1},\dots,i_{n}$ coincide, the symbol is zero.

In this module, you exclusively work in $n=3$, so the symbol is $\epsilon_{ijk}$ - see [[Alternating Tensor]] for the full identity catalogue and worked applications.
