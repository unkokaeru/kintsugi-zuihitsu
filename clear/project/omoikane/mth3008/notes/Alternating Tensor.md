# Alternating Tensor

> [!tip] Relevant parts to questions…
> - Using the definition that $\epsilon_{ijk}=\begin{cases}0 & \text{if any of }i,j,k \text{ are equal} \\ +1 & \text{if }(i,j,k)=(1,2,3),(2,3,1), \text{or }(3,1,2) \\ -1 & \text{if }(i,j,k)=(1,3,2),(2,1,3), \text{or }(3,2,1)\end{cases}$, i.e., 1 if $(i,j,k)$ is an even permutation of $(1,2,3)$, -1 if it's an odd permutation, or 0 if any.
> - Using $\mathbf{a}\times \mathbf{b}=\epsilon_{ijk}a_{j}b_{k}$.
> - Using the property of $\epsilon_{ijk}$ that you can swap two indices to switch its polarity between $+1$ and $-1$.

The **Alternating Tensor** is defined as $\epsilon_{ijk}=\begin{cases}0 & \text{if any of }i,j,k \text{ are equal} \\ +1 & \text{if }(i,j,k)=(1,2,3),(2,3,1), \text{or }(3,1,2) \\ -1 & \text{if }(i,j,k)=(1,3,2),(2,1,3), \text{or }(3,2,1)\end{cases}$, i.e., 1 if $(i,j,k)$ is an **even permutation** of $(1,2,3)$, -1 if it's an **odd permutation**, or 0 if any.

By this definition, the Alternating Tensor has the following properties:

- $\epsilon_{ijk}$ is **unchanged** if indices are reordered by a **cyclic permutation**, i.e., $\epsilon_{ijk}=\epsilon_{jki}=\epsilon_{kij}$.
- $\epsilon_{ijk}$ is **changed** if any two of the suffices are **interchanged**, i.e., $\epsilon_{ijk}=-\epsilon_{jik}$; that is, the alternating tensor is **anti-symmetric**.

The Alternating Tensor can then be used to write multiple operations, for instance:

1. Cross product of two vectors, $\mathbf{a} \times \mathbf{b}=\begin{vmatrix}\mathbf{i} & \mathbf{j} & \mathbf{k} \\a_{1} & a_{2} & a_{3} \\b_{1} & b_{2} & b_{3}\end{vmatrix}=\begin{vmatrix}a_{2} & a_{3} \\b_{2} & b_{3}\end{vmatrix} \mathbf{i}-\begin{vmatrix}a_{1} & a_{3} \\b_{1} & b_{3}\end{vmatrix} \mathbf{j}+\begin{vmatrix}a_{1} & a_{2} \\b_{1} & b_{2}\end{vmatrix} \mathbf{k}$, using the Alternating Tensor::$(\mathbf{a}\times \mathbf{b})_{i}=\epsilon_{ijk}a_{j}b_{k}$.
2. Determinant of $3 \times 3$ matrices, using the Alternating Tensor::$\epsilon_{pqr}|M|=\epsilon_{ijk}M_{pi}M_{qj}M_{rk}$, which can be simplified by using either rows or columns.
3. The scalar triple product, $\mathbf{a}\cdot(\mathbf{b}\times \mathbf{c})$, using the Alternating Tensor::$\mathbf{a}\cdot(\mathbf{b}\times \mathbf{c})=\epsilon_{ijk}a_{i}b_{j}c_{k}$.
