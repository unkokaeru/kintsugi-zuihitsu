# **MTH3008** Tensor Analysis, Portfolio Cheat Sheet

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

## 1. Transformation Law — Tensor Character & Rank

**Goal**: Prove $Q$ is a scalar, vector, or rank-$n$ tensor under coordinate rotation.

**Transformation Rules**:
- Coordinate transform: $x'_i = L_{ij}x_j$. Inverse: $x_i = L_{ji}x'_j$.
	- Rotation (Cartesian): $T'_{i_1\cdots i_n} = L_{i_1 j_1} \cdots L_{i_n j_n} T_{j_1 \cdots j_n}$ (one $L$ per free index).
	- General coordinates: each contravariant (upper) index transforms with $\frac{\partial x'^{i'}}{\partial x^j}$ and each covariant (lower) index with $\frac{\partial x^j}{\partial x'^{i'}}$. E.g. a mixed rank-2 tensor: $T'^{i'}{}_{j'} = \frac{\partial x'^{i'}}{\partial x^k} \frac{\partial x^l}{\partial x'^{j'}} T^k{}_l$.
- Rotation matrix properties: $L_{ij}L_{kj} = \delta_{ik}$ and $L_{ji}L_{jk} = \delta_{ik}$.
- Chain rule: $\frac{\partial}{\partial x'_i} = L_{ji} \frac{\partial}{\partial x_j}$.

**Method**:
1. Write the primed quantity (e.g., $(a \cdot b)' = a'_i b'_i$).
2. Substitute the transformation law for each piece (e.g., $a'_i = L_{ij}a_j$).
3. Simplify if possible (e.g., with chain rule or partial differentiation like product rule).
4. Group the $L$ matrices together.
5. Collapse $L_{ij}L_{kj}$ into $\delta_{ik}$ if possible.
6. Use $\delta_{ik}$ to collapse dummy indices and recover the unprimed quantity.

**Key Results**:
- **Contraction reduces rank**: If $T_{ij}$ is a rank-2 tensor, $T_{ii}$ is a scalar. Proof: $T'_{ii} = L_{ia}L_{ib}T_{ab} = \delta_{ab}T_{ab} = T_{aa}$.
- **Outcome**: Single term with $n$ $L$s for $n$ free indices → rank-$n$ tensor. Extra terms that don't cancel → not a tensor.

---

## 2. Suffix Notation — Simplification & Proofs

### 2a. Simplifying $\delta$ and $\epsilon$ Expressions

**Goal**: Reduce suffix expressions like $\epsilon_{ijk}\epsilon_{klm}$ or $\delta_{ij}\epsilon_{ijk}$.

**Method**:
- **Repeated $\epsilon$ index**: If an $\epsilon$ has two identical indices (e.g. $\delta_{ij}\epsilon_{ijk} = \epsilon_{iik}$), the term equals $0$.
- **Product of two $\epsilon$s**:
	1. Identify the shared dummy index (e.g., $k$).
	2. Cyclically permute to move the shared index to the 3rd position of both $\epsilon$s (Rule 3 in §0).
	3. Apply the $\delta$–$\epsilon$ identity (Rule 4 in §0).
	4. Expand brackets and collapse $\delta$s ($\delta_{ab}c_b = c_a$, $\delta_{aa} = 3$).
- **Standard deductions**:
	- $\epsilon_{ijk}\epsilon_{ilm} = \delta_{jl}\delta_{km} - \delta_{jm}\delta_{kl}$
	- $\epsilon_{ijk}\epsilon_{ijm} = 2\delta_{km}$
	- $\epsilon_{ijk}\epsilon_{ijk} = 6$

### 2b. Suffix Algebra Proofs ("Show that…")

**Goal**: Prove vector/matrix identities (e.g., $(AB)^T = B^TA^T$, $a \times b = -b \times a$) or symmetry properties.

**Method**:
1. Convert LHS into suffix notation. Assign one free index (e.g., $i$) for vectors, two ($i,j$) for matrices.
2. Convert RHS into suffix notation.
3. Relabel dummy indices in LHS to match RHS (you can change any $j$ to $k$ as long as you change both copies in the term).
4. Reorder scalar variables freely to group them properly.
5. Convert back to vector/matrix notation.

**Example ($C_{ik} = A_iB_k - A_kB_i$ is antisymmetric)**:
- Evaluate transpose/swap: $C_{ki} = A_kB_i - A_iB_k$.
- Factor minus sign: $= -(A_iB_k - A_kB_i) = -C_{ik}$.

### 2c. $\nabla$ Operator Identities & Radial Functions

**Goal**: Prove vector calculus identities using suffix notation.

**Method**:
1. Write the expression fully in suffix form (see dictionary in §0).
2. Use the product rule on derivatives: $\partial_i(A_j B_k) = (\partial_i A_j)B_k + A_j(\partial_i B_k)$.
3. If you hit $\epsilon_{ijk}\partial_j\partial_k f$, it immediately equals $0$ (kill rule, Rule 5 in §0).

**Radial Functions $f(r)$**:
- Definition: $r = (x_j x_j)^{1/2}$.
- Derivative of $r$: $\frac{\partial r}{\partial x_i} = \frac{x_i}{r}$.
- Derivative of $f(r)$: $[\nabla f(r)]_i = f'(r) \frac{x_i}{r}$.

### 2d. Determinant Identities

**Goal**: Prove matrix determinant rules using the alternating tensor.

**Formula**: $\epsilon_{pqr}|M| = \epsilon_{ijk}M_{pi}M_{qj}M_{rk}$.

**Method**:
- To get $6|M|$: Multiply both sides by $\epsilon_{pqr}$. The LHS becomes $\epsilon_{pqr}\epsilon_{pqr}|M| = 6|M|$.
- To prove $|M^T| = |M|$: Write out the formula for $|M^T|$, swap the indices on the $M$s, then relabel the dummy indices to match the original formula.

---

## 3. Bases, Components & Geometry

### 3a. Dual Bases & Components (Covariant/Contravariant)

**Given**: A basis $e_1, e_2, e_3$.

**Find Dual Basis $e^1, e^2, e^3$**:
1. Compute the three cross products: $e_2 \times e_3$, $e_3 \times e_1$, $e_1 \times e_2$.
	- Cross product: $\begin{pmatrix}a \\ b \\ c\end{pmatrix}\times\begin{pmatrix}d \\ e \\f\end{pmatrix} = \begin{pmatrix}\begin{vmatrix}b & e \\ c & f\end{vmatrix} \\-\begin{vmatrix}a & d \\ c & f\end{vmatrix} \\\begin{vmatrix}a & d \\ b & e\end{vmatrix}\end{pmatrix}$ (cover 1st, 2nd but neg., 3rd).
2. Compute volume $V = e_1 \cdot (e_2 \times e_3)$.
3. Divide: $e^1 = \frac{e_2 \times e_3}{V}$, $e^2 = \frac{e_3 \times e_1}{V}$, $e^3 = \frac{e_1 \times e_2}{V}$.

**Find Components**:
- Covariant: $A_i = A \cdot e_i$ (dot with the *original* basis).
- Contravariant: $A^i = A \cdot e^i$ (dot with the *dual* basis).

**Raising/Lowering via Metric**:
- Covariant metric $g_{ij} = e_i \cdot e_j$. Contravariant metric $g^{ij} = e^i \cdot e^j$ (matrix inverse of $g_{ij}$).
- Raise/lower: $A_i = g_{ij}A^j$, $A^i = g^{ij}A_j$.
- *Orthogonal shortcut*: If $g_{ij}=0$ for $i \neq j$, then $A_i = g_{ii}A^i$ and $g^{ii} = 1/g_{ii}$.

### 3b. Metric Tensor, Basis Vectors & Arc Length

**Goal**: Find metric components and scale factors from coordinate definitions.

**Find Basis $e_i$**:
1. Write position vector $r$ in terms of the new coordinates $(x^1, x^2, x^3)$ and Cartesian unit vectors $i_1, i_2, i_3$.
2. Differentiate: $e_1 = \frac{\partial r}{\partial x^1}$, $e_2 = \frac{\partial r}{\partial x^2}$, $e_3 = \frac{\partial r}{\partial x^3}$.

**Find Metric Tensor $g_{ij}$**:
- Compute $g_{ij} = e_i \cdot e_j$ as a $3 \times 3$ matrix. Off-diagonals all $0$ → orthogonal.

**Arc Length & Scale Factors**:
- Scale factors: $h_i = \sqrt{g_{ii}}$ (or $h_i = |e_i|$).
- Arc length element (orthogonal): $ds^2 = h_1^2(dx^1)^2 + h_2^2(dx^2)^2 + h_3^2(dx^3)^2$.

### 3c. Expansion Coefficients / Finding $L^n_{m'}$

**Goal**: Find the coefficients to transform between bases.

**Method**:
- Given new basis vectors $e'_m$ in terms of Cartesian $i_n$.
- The expansion coefficient is $L^n_{m'} = e'_m \cdot i_n$ (just extract the $n$-th component of $e'_m$).
- Transform covariant components: $B'_i = L^j_{i'} B_j$.
