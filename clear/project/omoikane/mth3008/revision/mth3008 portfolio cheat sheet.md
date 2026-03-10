# **MTH3008** Tensor Analysis, Final Exam Cheat Sheet

> [!TIP] Created by William Fayers
> Good luck and have fun!! :))

## 0. Reference Tables & Foundational Material

### Suffix Notation Dictionary

| Vector/Matrix form             | Suffix form                                  | Notes                          |
| :----------------------------- | :------------------------------------------- | :----------------------------- |
| Dot product $a \cdot b$        | $a_j b_j$                                    | Scalar (0 free indices)        |
| Cross product $(a \times b)_i$ | $\epsilon_{ijk} a_j b_k$                     | Vector (1 free index, $i$)     |
| Matrix mult. $(AB)_{ij}$       | $A_{ik} B_{kj}$                              | Rank-2 (2 free indices, $i,j$) |
| Transpose $(A^T)_{ij}$         | $A_{ji}$                                     | Swap indices                   |
| Trace $\text{Tr}(A)$           | $A_{ii}$                                     | Sum over diagonal              |
| Gradient $[\nabla f]_i$        | $\partial f / \partial x_i$                  | Vector                         |
| Divergence $\nabla \cdot u$    | $\partial u_j / \partial x_j$                | Scalar                         |
| Curl $[\nabla \times u]_i$     | $\epsilon_{ijk} \partial u_k / \partial x_j$ | Vector                         |

### Key Rules & Identities

1. **Index Counting**: Dummy indices appear exactly twice per term (summed over 1 to 3). Free indices appear exactly once per term. Every term in an equation must have the exact same free indices.
2. **Kronecker Delta $\delta_{ij}$**:
	- Definition: $1$ if $i=j$, $0$ otherwise.
	- Substitution: $\delta_{ij}a_j = a_i$.
	- Collapse: $\delta_{ij}\delta_{jk} = \delta_{ik}$.
	- Trace: $\delta_{ii} = 3$.
3. **Alternating Tensor $\epsilon_{ijk}$**:
	- Definition: $\epsilon_{ijk}=\begin{cases}0 & \text{if any of }i,j,k \text{ are equal} \\ +1 & \text{if }(i,j,k)=(1,2,3),(2,3,1), \text{or }(3,1,2)\text{ - even permutation} \\ -1 & \text{if }(i,j,k)=(1,3,2),(2,1,3), \text{or }(3,2,1)\text{ - odd permutation}\end{cases}$.
	- Permutations: $\epsilon_{ijk} = \epsilon_{jki} = \epsilon_{kij}$ (cyclic, keep sign). $\epsilon_{ijk} = -\epsilon_{jik}$ (swap two, flip sign).
4. **The $\delta-\epsilon$ Identity**:
	- $\epsilon_{ijk}\epsilon_{klm} = \delta_{il}\delta_{jm} - \delta_{im}\delta_{jl}$; (first/second X second/third, first/third X second/second)
	- *Always cyclically permute so the shared dummy index is in the 3rd position before applying.*
5. **The Kill Rule**: Symmetric $\times$ Antisymmetric $= 0$.
	- If $S_{jk} = S_{kj}$, then $\epsilon_{ijk}S_{jk} = 0$.
	- Example: mixed partials commute ($\partial_j\partial_k = \partial_k\partial_j$), so $\epsilon_{ijk}\partial_j\partial_k f = 0$.

---

## Question Topics (ordered by Frequency × marks)

### 1. Dual Bases & Components (Covariant/Contravariant)

**Given**: A basis $e_1, e_2, e_3$.

1. **Method (Find Dual Basis $e^1, e^2, e^3$)**:
	- Compute the three cross products: $e_2 \times e_3$, $e_3 \times e_1$, $e_1 \times e_2$.
		- Cross product, $\begin{pmatrix}a \\ b \\ c\end{pmatrix}\times\begin{pmatrix}d \\ e \\f\end{pmatrix} = \begin{pmatrix}\begin{vmatrix}b & e \\ c & f\end{vmatrix} \\-\begin{vmatrix}a & d \\ c & f\end{vmatrix} \\\begin{vmatrix}a & d \\ b & e\end{vmatrix}\end{pmatrix}$, i.e., cover 1st, 2nd (but neg.), 3rd.
	- Compute volume $V = e_1 \cdot (e_2 \times e_3)$.
	- Divide each cross product by $V$: $e^1 = \frac{e_2 \times e_3}{V}$, $e^2 = \frac{e_3 \times e_1}{V}$, $e^3 = \frac{e_1 \times e_2}{V}$.
2. **Method (Find Covariant Components $A_i$)**:
	- Use formula: $A_i = A \cdot e_i$ (dot with the *original* basis).
3. **Method (Find Contravariant Components $A^i$)**:
	- Use formula: $A^i = A \cdot e^i$ (dot with the *dual* basis).
4. **Raising/Lowering via Metric**:
	- Covariant metric $g_{ij} = e_i \cdot e_j$.
	- Contravariant metric $g^{ij} = e^i \cdot e^j$ (this is the matrix inverse of $g_{ij}$).
	- Raise/lower: $A_i = g_{ij}A^j$, $A^i = g^{ij}A_j$.
	- *Orthogonal shortcut*: If $g_{ij}=0$ for $i \neq j$, then $A_i = g_{ii}A^i$ and $g^{ii} = 1/g_{ii}$.

### 2. Suffix Algebra ("Show that…")

**Goal**: Prove vector or matrix identities (e.g., $(AB)^T = B^TA^T$, $a \times b = -b \times a$).

1. **Method**:
	- Convert LHS into suffix notation. Assign one free index (e.g., $i$) for vectors, two ($i,j$) for matrices.
	- Convert RHS into suffix notation.
	- Relabel dummy indices in LHS to match RHS (you can change any $j$ to $k$ as long as you change both copies in the term).
	- Reorder scalar variables freely to group them properly.
	- Convert back to vector/matrix notation.
2. **Example ($C_{ik} = A_iB_k - A_kB_i$ is antisymmetric)**:
	- Evaluate transpose/swap: $C_{ki} = A_kB_i - A_iB_k$.
	- Factor minus sign: $= -(A_iB_k - A_kB_i) = -C_{ik}$.

### 3. Simplifying $\delta$ and $\epsilon$ Expressions

**Goal**: Reduce nasty suffix expressions like $\epsilon_{ijk}\epsilon_{klm}$ or $\delta_{ij}\epsilon_{ijk}$.

1. **Method**:
	- **Repeated $\epsilon$ index**: If an $\epsilon$ has two identical indices (e.g. $\delta_{ij}\epsilon_{ijk} = \epsilon_{iik}$), the term equals $0$.
	- **Product of two $\epsilon$s**:
		1. Identify the shared dummy index (e.g., $k$).
		2. Use $\epsilon_{ijk} = \epsilon_{jki} = \epsilon_{kij}$ to move $k$ to the far right of both $\epsilon$ terms.
		3. Substitute $\epsilon_{ijk}\epsilon_{lmk} = \delta_{il}\delta_{jm} - \delta_{im}\delta_{jl}$.
		4. Expand brackets.
	- **Collapsing $\delta$s**: Apply $\delta_{ab}c_b = c_a$ to absorb indices. Apply $\delta_{aa} = 3$.
2. **Standard deductions**:
	- $\epsilon_{ijk}\epsilon_{ilm} = \delta_{jl}\delta_{km} - \delta_{jm}\delta_{kl}$
	- $\epsilon_{ijk}\epsilon_{ijm} = 2\delta_{km}$
	- $\epsilon_{ijk}\epsilon_{ijk} = 6$

### 4. Proving Tensor/Vector Character via Transformation Law

**Goal**: Prove $Q$ is a scalar, vector, or tensor under coordinate rotation.

1. **Transformation Rules**:
	- Coordinate transform: $x'_i = L_{ij}x_j$. Inverse: $x_i = L_{ji}x'_j$.
		- Generally, $T'_{i_1\cdots i_n} = L_{i_1 j_1} \cdots L_{i_n j_n} T_{j_1 \cdots j_n}$ (one $L$ per free index).
	- Rotation matrix properties: $L_{ij}L_{kj} = \delta_{ik}$ and $L_{ji}L_{jk} = \delta_{ik}$.
	- Chain rule: $\frac{\partial}{\partial x'_i} = L_{ji} \frac{\partial}{\partial x_j}$.
2. **Method**:
	- Write the primed quantity (e.g., $(a \cdot b)' = a'_i b'_i$).
	- Substitute the transformation law for each piece (e.g., $a'_i = L_{ij}a_j$).
	- Simplify if possible (e.g., with chain rule or partial differentiation like product rule).
	- Group the $L$ matrices together.
	- Collapse $L_{ij}L_{kj}$ into $\delta_{ik}$ if possible.
	- Use $\delta_{ik}$ to collapse dummy indices and recover the unprimed quantity.
3. **Contraction reduces rank**:
	- If $T_{ij}$ is a rank-2 tensor, $T_{ii}$ is a scalar. Proof: $T'_{ii} = L_{ia}L_{ib}T_{ab} = \delta_{ab}T_{ab} = T_{aa}$.
4. **Outcome:**
	- Single term with $n$ $L$s for $n$ free indices? Rank-$n$ tensor.
	- Extra terms that don't cancel? Not a tensor.

### 5. $\nabla$ Operator Identities & Radial Functions

**Goal**: Prove complex vector calculus identities using suffix.

1. **Method**:
	- Write the expression fully in suffix form.
	- Use the product rule on derivatives: $\partial_i(A_j B_k) = (\partial_i A_j)B_k + A_j(\partial_i B_k)$.
	- If you hit $\epsilon_{ijk}\partial_j\partial_k f$, it immediately equals $0$ (kill rule).
2. **Radial Functions $f(r)$**:
	- Definition: $r = (x_j x_j)^{1/2}$.
	- Derivative of $r$: $\frac{\partial r}{\partial x_i} = \frac{x_i}{r}$.
	- Derivative of $f(r)$: $[\nabla f(r)]_i = f'(r) \frac{x_i}{r}$.

### 6. Metric Tensor, Basis Vectors & Arc Length

**Goal**: Find metric components and scale factors from coordinate definitions.

1. **Method (Find Basis $e_i$)**:
	- Write position vector $r$ strictly in terms of the new coordinates $(x^1, x^2, x^3)$ and Cartesian unit vectors $i_1, i_2, i_3$.
	- Differentiate to get bases: $e_1 = \frac{\partial r}{\partial x^1}$, $e_2 = \frac{\partial r}{\partial x^2}$, $e_3 = \frac{\partial r}{\partial x^3}$.
2. **Method (Find Metric Tensor $g_{ij}$)**:
	- Compute dot products: $g_{ij} = e_i \cdot e_j$.
	- Give the answer as a $3 \times 3$ matrix. If all off-diagonals are $0$, the basis is orthogonal.
3. **Method (Arc Length & Scale Factors)**:
	- Scale factors: $h_i = \sqrt{g_{ii}}$ (or $h_i = |e_i|$).
	- Arc length element (orthogonal case): $ds^2 = h_1^2(dx^1)^2 + h_2^2(dx^2)^2 + h_3^2(dx^3)^2$.

### 7. Expansion Coefficients / Finding $L^n_{m'}$

**Goal**: Find the coefficients to transform between bases directly.

1. **Method**:
	- You are given new basis vectors $e'_m$ in terms of Cartesian $i_n$.
	- The expansion coefficient is $L^n_{m'} = e'_m \cdot i_n$.
	- Just take the dot product! This simply extracts the $n$-th component of $e'_m$.
	- Transform covariant components of a vector $B$ into the new frame: $B'_i = L^j_{i'} B_j$.

### 8. Determinant Identities

**Goal**: Prove matrix determinant rules using the alternating tensor.

1. **Formula**: $\epsilon_{pqr}|M| = \epsilon_{ijk}M_{pi}M_{qj}M_{rk}$.
2. **Method**:
	- To get $6|M|$: Multiply both sides by $\epsilon_{pqr}$. The LHS becomes $\epsilon_{pqr}\epsilon_{pqr}|M| = 6|M|$.
	- To prove $|M^T| = |M|$: Write out the formula for $|M^T|$, swap the indices on the $M$s, then relabel the dummy indices to match the original formula.
