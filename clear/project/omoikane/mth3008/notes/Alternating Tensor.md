# Alternating Tensor

> [!tip] Relevant parts to questions…
> - Using the definition that $\epsilon_{ijk}=\begin{cases}0 & \text{if any of }i,j,k \text{ are equal} \\ +1 & \text{if }(i,j,k)=(1,2,3),(2,3,1), \text{or }(3,1,2) \\ -1 & \text{if }(i,j,k)=(1,3,2),(2,1,3), \text{or }(3,2,1)\end{cases}$, i.e., 1 if $(i,j,k)$ is an even permutation of $(1,2,3)$, -1 if it's an odd permutation, or 0 if any.
> - Using $\mathbf{a}\times \mathbf{b}=\epsilon_{ijk}a_{j}b_{k}$.
> - Using the property of $\epsilon_{ijk}$ that you can swap two indices to switch its polarity between $+1$ and $-1$.

The **Alternating Tensor** is defined as $\epsilon_{ijk}=\begin{cases}0 & \text{if any of }i,j,k \text{ are equal} \\ +1 & \text{if }(i,j,k)=(1,2,3),(2,3,1), \text{or }(3,1,2) \\ -1 & \text{if }(i,j,k)=(1,3,2),(2,1,3), \text{or }(3,2,1)\end{cases}$, i.e., 1 if $(i,j,k)$ is an **even permutation** of $(1,2,3)$, -1 if it's an **odd permutation**, or 0 if any.

By this definition, the Alternating Tensor has the following properties:

- $\epsilon_{ijk}$ is **unchanged** if indices are reordered by a **cyclic permutation**, i.e., $\epsilon_{ijk}=\epsilon_{jki}=\epsilon_{kij}$.
- $\epsilon_{ijk}$ is **changed** if any two of the suffices are **interchanged**, i.e., $\epsilon_{ijk}=-\epsilon_{jik}$; that is, the alternating tensor is **anti-symmetric**.

…

- Alternating tensors are naturally related to:
	- Cross product of two vectors: $\mathbf{a} \times \mathbf{b}=\begin{vmatrix}\mathbf{i} & \mathbf{j} & \mathbf{k} \\a_{1} & a_{2} & a_{3} \\b_{1} & b_{2} & b_{3}\end{vmatrix}=\begin{vmatrix}a_{2} & a_{3} \\b_{2} & b_{3}\end{vmatrix} \mathbf{i}-\begin{vmatrix}a_{1} & a_{3} \\b_{1} & b_{3}\end{vmatrix} \mathbf{j}+\begin{vmatrix}a_{1} & a_{2} \\b_{1} & b_{2}\end{vmatrix} \mathbf{k}$.
		- Similar to the dot product, we can write $(\mathbf{a}\times \mathbf{b})_{i}=\epsilon_{ijk}a_{j}b_{k}$ - the former meaning the $i$th component of the vector $\mathbf{a}\times \mathbf{b}$, and the latter where $j$ and $k$ are dummy indices indicating sums, and $i$ is a free index indicating the coordinate considered.
		- As always, this can be found by converting to vector notation, and can hence use the notation to simplify/evaluate expressions like $\mathbf{a}\times \mathbf{b}=-\mathbf{b}\times \mathbf{a}$.
	- Determinant of $3 \times 3$ matrices.
		- Using the alternating tensor, we can calculate matrix determinants, again provable using vector notation: $|M|=\epsilon_{ijk}M_{1i}M_{2j}M_{3k}$ using the rows, or $|M|=\epsilon_{ijk}M_{i1}M_{j2}M_{k3}$ using the columns.
		- This is importantly related to the formula $\epsilon_{pqr}|M|=\epsilon_{ijk}M_{pi}M_{qj}M_{rk}$.
	- The scalar triple product: $\mathbf{a}\cdot(\mathbf{b}\times \mathbf{c})$.
		- Re-writing the product in suffix notation, $(\mathbf{b}\times \mathbf{c})_{i}=\epsilon_{ijk}b_{j}c_{k}$, we can simplify it to instead be $\epsilon_{ijk}a_{i}b_{j}c_{k}$, which could also be used to prove properties of the scalar triple product (using $\epsilon_{ijk}=\epsilon_{kij}$).
- All then practised in [[mth3008 weekly problems 1|this week's problems]].
