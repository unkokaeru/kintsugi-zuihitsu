# Tensor Addition

> [!tip] Relevant parts to questions...
> - Tensors with the **same rank and index structure** can be added componentwise.
> - Tensors with **different ranks** or **different index positions** cannot.
> - The proof is always the same: factor the common $L$-matrices out of the sum.

**Tensor Addition** is defined componentwise. Given two tensors $A$ and $B$ of the same rank and **same index structure** (covariant, contravariant, or mixed in the same way), their sum is the tensor whose components are

$$
\boxed{C_{ik}=A_{ik}+B_{ik}}
$$

(and analogously for any index arrangement). The result is a tensor of the same rank and structure.

## Why the Sum is a Tensor

Because both $A$ and $B$ transform with the **same** pattern of $L$-matrices, the transformation matrix factors out of the sum:

$$
C_{ik}'=A_{ik}'+B_{ik}'=L_{i'}^{m}L_{k'}^{n}A_{mn}+L_{i'}^{m}L_{k'}^{n}B_{mn}=L_{i'}^{m}L_{k'}^{n}(A_{mn}+B_{mn})=L_{i'}^{m}L_{k'}^{n}C_{mn}
$$

So $C_{ik}$ obeys the covariant rank-2 transformation law. The identical argument - extracting the common $L$s - works for any matching index structure and any rank.

## When Addition Fails

> [!warning] Different structures don't add
> $A_{ik}+B^{ik}$ is **not** a tensor: one term transforms with $L_{i'}^{m}L_{k'}^{n}$, the other with $L_{m}^{i'}L_{n}^{k'}$, and those matrices cannot be factored out. The sum has no tensor transformation law.
>
> Similarly, you cannot add tensors of **different ranks** (e.g. $A_{ik}+B_{k}$) - the dimensional shape itself disagrees.

## Properties

- **Commutative and associative**::$A+B=B+A$ and $(A+B)+C=A+(B+C)$, directly from scalar arithmetic on each component.
- **Cartesian collapse**::all flavours coincide in Cartesian coordinates, so the structure-matching restriction quietly disappears there.
- **Generalises to many summands**::$P_{ijk}=A_{ijk}+B_{ijk}+C_{ijk}$ for any number of terms, provided every term shares rank and structure.

## Applications

1. **Building new tensors of the same shape**, by linear combination::e.g. the stress tensor as a sum of contributions.
2. **Decompositions** into structurally simpler parts, such as the symmetric/antisymmetric split (see [[Symmetry and Antisymmetry]]).
3. **Cartesian matrix addition** is the special case of rank-2 tensor addition in an orthonormal basis.

> [!example] Ordinary matrix addition
> Let $M_{ij}=\begin{pmatrix}0&-2&-3\\1&2&5\\1&3&4\end{pmatrix}$ and $N_{ij}=\begin{pmatrix}7&8&9\\6&5&4\\1&2&3\end{pmatrix}$. The sum is
>
> $[C_{ij}]=[M_{ij}]+[N_{ij}]=\boxed{\begin{pmatrix}7&6&6\\7&7&9\\2&5&7\end{pmatrix}}$. The tensor character is preserved automatically - it is just entry-wise arithmetic.

> Same rank + same structure → can add; factor out the $L$s.
