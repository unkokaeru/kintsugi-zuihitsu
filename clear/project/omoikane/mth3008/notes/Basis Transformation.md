# Basis Transformation

> [!tip] Relevant parts to questions...
> - Using $\mathbf{e}_{i}'=L_{ij}\mathbf{e}_{j}$ to expand new basis vectors in terms of the old.
> - Using $L_{ij}=\mathbf{e}_{i}'\cdot \mathbf{e}_{j}$ to read off entries of $L$.
> - Using $s'=s$ (scalar) and $v_{i}'=L_{ij}v_{j}$ (vector) as the **formal definitions** of rank-0 and rank-1 objects.

A **Basis Transformation** expresses one orthonormal basis $\{\mathbf{e}_{i}'\}$ in terms of another $\{\mathbf{e}_{j}\}$ via the [[Coordinate Transformation Matrix]] $L_{ij}$:

$$
\boxed{\mathbf{e}_{i}'=L_{ij}\mathbf{e}_{j}}
$$

This is the other face of $x_{i}'=L_{ij}x_{j}$: the coordinates and the basis vectors transform with the **same** matrix (reflecting that the underlying geometric object is unchanged - only the "point of view" has rotated).

## Formal Definitions of Scalars and Vectors

The transformation rule $\mathbf{e}_{i}'=L_{ij}\mathbf{e}_{j}$ gives us a precise, coordinate-free way to define what "scalar" and "vector" even mean:

- **Scalar**::a quantity unchanged under coordinate rotation, $s'=s$.
- **Vector**::a quantity whose components transform with exactly one factor of $L$, $v_{i}'=L_{ij}v_{j}$.

Both are special cases of a **tensor**, which transforms with one factor of $L$ for each free index. Scalars are rank-0 tensors; vectors are rank-1 tensors. See [[rank]] and the [[Tensor Transformation Rule]] for the generalisation.

## Applications

1. **Expanding a new basis in the old**, using $L$::$\mathbf{e}_{i}'=L_{i1}\mathbf{e}_{1}+L_{i2}\mathbf{e}_{2}+L_{i3}\mathbf{e}_{3}$.
2. **Verifying a quantity is a vector**, by checking $v_{i}'=L_{ij}v_{j}$::e.g. the [[Gradient]] of a scalar field, or position coordinates themselves.
3. **Proving invariance of scalar operations** such as the dot product, by transforming and cancelling two $L$s::$(\mathbf{a}\cdot \mathbf{b})'=a_{i}'b_{i}'=L_{ij}L_{ik}a_{j}b_{k}=\delta_{jk}a_{j}b_{k}=\mathbf{a}\cdot \mathbf{b}$.

> [!example] Proving $\mathbf{a}\cdot \mathbf{b}$ is a scalar
> Under a rotation, $a_{i}'=L_{ij}a_{j}$ and $b_{i}'=L_{ik}b_{k}$. Hence:
>
> $(\mathbf{a}\cdot \mathbf{b})'=a_{i}'b_{i}'=(L_{ij}a_{j})(L_{ik}b_{k})=L_{ij}L_{ik}a_{j}b_{k}$.
>
> Using orthogonality $L_{ij}L_{ik}=\delta_{jk}$ collapses the two $L$s into a [[Kronecker Delta]]:
>
> $=\delta_{jk}a_{j}b_{k}=a_{k}b_{k}=\boxed{\mathbf{a}\cdot \mathbf{b}}$. So $(\mathbf{a}\cdot \mathbf{b})'=\mathbf{a}\cdot \mathbf{b}$, confirming it is a scalar.

> Basis in, formal tensor-by-rank definition out.
