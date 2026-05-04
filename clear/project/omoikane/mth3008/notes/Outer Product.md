# Outer Product

> [!tip] Relevant parts to questions...
> - Outer product: multiply all components index-by-index; $C_{ik \ell m}=A_{ik}B_{\ell m}$.
> - **Rank of product = sum of ranks** of the factors.
> - **Structures concatenate**: a covariant factor and a mixed factor give a covariant-then-mixed product.
> - Non-commutative in general: $A_{ik}B_{\ell m}\neq B_{ik}A_{\ell m}$.

The **Outer Product** (or **tensor product**, written $\otimes$) combines two tensors into a higher-rank tensor by multiplying their components index by index. For two rank-2 covariant tensors:

$$
\boxed{\mathbf{C}=\mathbf{A}\otimes \mathbf{B},\qquad C_{ik \ell m}=A_{ik}B_{\ell m}}
$$

The result is a rank-4 tensor. No summation - every combination of indices produces a distinct component.

## Why the Outer Product is a Tensor

Each factor transforms independently, so the combined transformation simply stacks the $L$-matrices:

$$
C_{ik \ell m}'=A_{ik}'B_{\ell m}'=(L_{i'}^{n}L_{k'}^{p}A_{np})(L_{\ell '}^{r}L_{m'}^{s}B_{rs})=L_{i'}^{n}L_{k'}^{p}L_{\ell '}^{r}L_{m'}^{s}C_{nprs}
$$

which is the transformation law for a rank-4 covariant tensor. One $L$ per free index, as always (see [[Tensor Transformation Rule]]).

## Structure Concatenation

Unlike addition, the outer product does **not** require matching structures. The result's structure is the **concatenation** of the factors' structures:

- $A_{ij}\otimes B^{\cdot \ell}_{k}=C^{\cdot\cdot\cdot \ell}_{ijk}$ (covariant + mixed → mixed)
- $A^{\cdot j}_{i}\otimes B^{\cdot \ell}_{k}=C^{\cdot j\cdot \ell}_{i\cdot k}$
- $D^{\cdot\cdot k}_{ij}\otimes E^{\ell \cdot n}_{\cdot m}=F^{\cdot\cdot k\ell \cdot n}_{ij\cdot\cdot m}$

## Properties

- **Rank addition**::$\text{rank}(A\otimes B)=\text{rank}(A)+\text{rank}(B)$.
- **Non-commutative**::$A_{ik}B_{\ell m}\neq B_{ik}A_{\ell m}$ in general - the *positions* of indices are swapped, which matters.
- **Associative**::$(A\otimes B)\otimes C=A\otimes (B\otimes C)$.
- **Distributes over addition**::$A\otimes(B+C)=A\otimes B+A\otimes C$.

## Visualisation

For rank-1 tensors (vectors), the outer product builds a matrix:

$$
\mathbf{v}_{1}\otimes \mathbf{v}_{2}=\begin{pmatrix}2\\0\end{pmatrix}\otimes\begin{pmatrix}1 & 7\end{pmatrix}=\begin{pmatrix}2 & 14 \\ 0 & 0\end{pmatrix}
$$

For two matrices, the outer product is the **Kronecker product**, producing a block structure.

## Applications

1. **Building higher-rank tensors** from simpler ones - e.g. the stress-energy tensor from products of velocity components.
2. **Combining tensors of mismatched structure** where addition would fail.
3. **Setting up a contraction** - form the outer product, then [[Contraction]] over chosen index pairs to form an inner product.

> [!example] Outer product of different-rank tensors
> Let $A_{ijk}$ be rank-3 covariant and $B^{\ell m}$ rank-2 contravariant. Their outer product
>
> $C^{\cdot\cdot\cdot \ell m}_{ijk}=A_{ijk}B^{\ell m}$
>
> is a rank-5 tensor with three covariant and two contravariant indices. $\boxed{\text{rank}=3+2=5}$.

> Multiply every pair of components; rank adds; structures concatenate.
