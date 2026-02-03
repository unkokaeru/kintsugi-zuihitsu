# Kronecker Delta

> [!tip] Relevant parts to questions…
> - Using $\delta_{ij}a_{j}=a_{i}$.

The **Kronecker delta**, or **substitution tensor**, is defined by $\delta_{ij}=\begin{cases}1 & \text{if }i=j \\ 0 & \text{if }i\neq j\end{cases}$, where $i$ and $j$ can be 1, 2, or 3. This is effectively equivalent to the identity matrix:

$$
\delta_{ij}=\begin{bmatrix}1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1\end{bmatrix}
$$

The **Kronecker delta** hence has properties like its **continuous** equivalent, the **[[Dirac delta-function]]**::It replaces the repeated index with the free index, $\delta_{ij}a_{j}=a_{i}$, or symmetrically (using relabelling/reordering), $\delta_{ji}a_{i}=a_{j}$.

- Using the Kronecker delta in suffix notation, we can say that $\mathbf{a}\cdot \mathbf{b}=a_{i}b_{i}=a_{i}(\delta_{ij}b_{j})=\delta_{ij}a_{i}b_{j}$. Naturally, this can be checked backwards using vector notation, too.
	- Note that we have to be careful with the context for vector and suffix notation: $\delta_{ij}$ is given in vector notation, where we specify all the values at once, but $\delta_{ii}$ in suffix notation is a sum.
	- This is because it'll sum over the repeated index, for example in vector notation, $\sum_{j=1}^{3}\delta_{jj}=\delta_{11}+\delta_{22}+\delta_{33}=3$ (summing $j=1..3$ by our convention).
	- We can also hence simplify expressions with the function by using the vector conversion, like $\delta_{ij}\delta_{jk}\to \sum_{j=1}^{3}\delta_{ij}\delta_{jk}=\delta_{i1}\delta_{1k}+\delta_{i2}\delta_{2k}+\delta_{i3}\delta_{3k}\to \dots \to \delta_{ik}$; that is, the repeated index is absorbed.
	- Other expressions could be simplified, like $\delta_{\ell \ell}\delta_{mn}\delta_{pp}\delta_{nq}$ or $\delta_{ij}a_{j}b_{\ell}c_{k}\delta_{i \ell}$.
- Hence, the Kronecker delta (substitution tensor) can be used to define the dot product. Similarly, the alternating tensor can define the cross product.
	- Alternative tensor $\epsilon_{ijk}$ is defined by $\epsilon_{ijk}=\begin{cases}0 & \text{if any of }i,j,k \text{ are equal} \\ +1 & \text{if }(i,j,k)=(1,2,3),(2,3,1), \text{or }(3,1,2) \\ -1 & \text{if }(i,j,k)=(1,3,2),(2,1,3), \text{or }(3,2,1)\end{cases}$, i.e., 1 if $(i,j,k)$ is an even permutation of $(1,2,3)$, -1 if it's an odd permutation, or 0 if any index is repeated.
	- This can be visualised as three layers of matrices, $\left[\epsilon_{ij1} =\begin{bmatrix}0 & 0 & 0 \\0 & 0 & 1 \\0 & -1 & 0\end{bmatrix},\quad\epsilon_{ij2} =\begin{bmatrix}0 & 0 & -1 \\0 & 0 & 0 \\1 & 0 & 0\end{bmatrix},\quad\epsilon_{ij3} =\begin{bmatrix}0 & 1 & 0 \\-1 & 0 & 0 \\0 & 0 & 0\end{bmatrix}\right]$.
	- As for the Kronecker delta, we must be careful to distinguish suffix and vector notation.
	- Due to all of this, in vector notation, it has the properties that:
		- $\epsilon_{ijk}$ is unchanged if indices are reordered by a cyclic permutation, i.e., $\epsilon_{ijk}=\epsilon_{jki}=\epsilon_{kij}$.
		- $\epsilon_{ijk}$ is changed if any two of the suffices are interchanged, i.e., $\epsilon_{ijk}=-\epsilon_{jik}$; that is, the alternating tensor is anti-symmetric.
	- Similar to before, we can evaluate expressions involving this tensor by converting to vector notation: $\epsilon_{ijk}\epsilon_{ijk}=\sum_{i=1}^{3}\sum_{j=1}^{3}\sum_{k=1}^{3}\epsilon_{ijk}\epsilon_{ijk}=\sum_{i=1}^{3}\sum_{j=1}^{3}\sum_{k=1}^{3}\epsilon_{ijk}^{2}$, which gives a total of $3 \times {3} \times {3}=27$ terms, where only six are actually nonzero. After trivially calculating this, you hence get 6.
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
