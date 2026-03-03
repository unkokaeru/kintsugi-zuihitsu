# MTH3008 Portfolio Cheat Sheet

…

---

## Used Techniques in [[clear/project/omoikane/mth3008/weekly problems/weekly problems|Weekly Problems]]…

- Converting everything into suffix form by applying free and dummy indices.
- Using $\mathbf{a}\cdot \mathbf{b}=a_{i}b_{i}$, both ways.
- Using $\mathbf{A}\mathbf{B}=A_{ik}+B_{kj}$ and $(A_{ij})^{T}=A_{ji}$.
- Using $\delta_{ij}a_{j}=a_{i}$.
- Using the definition that $\epsilon_{ijk}=\begin{cases}0 & \text{if any of }i,j,k \text{ are equal} \\ +1 & \text{if }(i,j,k)=(1,2,3),(2,3,1), \text{or }(3,1,2) \\ -1 & \text{if }(i,j,k)=(1,3,2),(2,1,3), \text{or }(3,2,1)\end{cases}$, i.e., 1 if $(i,j,k)$ is an even permutation of $(1,2,3)$, -1 if it's an odd permutation, or 0 if any.
- Using $\mathbf{a}\times \mathbf{b}=\epsilon_{ijk}a_{j}b_{k}$.
- Using the property of $\epsilon_{ijk}$ that you can swap two indices to switch its polarity between $+1$ and $-1$.
- Definition/properties of [[Curl]], [[Divergence]], and [[Gradient]].
- Converting/simplifying [[Suffix Notation]] and vector notation using the [[Kronecker Delta]] and [[Alternating Tensor]].
- Using the fact that $r=(x_{j}x_{j})^{1/2}$.
- Partial differentiation of [[suffix notation]].
- Vector transformation law: $V'^i = L^i_j V^j$, where $L^i_j = \partial x'^i / \partial x^j$.
- Chain rule: $\partial / \partial x'^i = L^j_i \, \partial / \partial x^j$.
- Orthogonality: $L^i_j L^i_k = \delta_{jk}$.
- $\epsilon^{ijk}$ vanishes on any symmetric pair of indices.
- Mixed partials commute; $\nabla \cdot (\nabla \times v) = 0$; $\nabla^2 u = \nabla(\nabla \cdot u) - \nabla \times (\nabla \times u)$.
- Dual basis via $\mathbf{e}^i = \dfrac{\mathbf{e}_j \times \mathbf{e}_k}{V}$ with $V=\mathbf{e}_1\cdot(\mathbf{e}_2\times\mathbf{e}_3)$ (cyclic $i,j,k$).
- Covariant/contravariant components: $A_i=\mathbf{A}\cdot \mathbf{e}_i$, $A^i=\mathbf{A}\cdot \mathbf{e}^i$.
- Expansion coefficients and transform rule: $L^n_{m'}=\mathbf{e}'_m\cdot \mathbf{i}_n$, $B'_i=L^j_{i'}B_j$.
- Metric: $g_{ik}=\mathbf{e}_i\cdot \mathbf{e}_k$, and raising/lowering via $A_i=g_{ik}A^k$, $A^i=g^{ik}A_k$.
- Tensor transformation law (free vs dummy indices).
- Orthogonal matrix identity $L_{ij}L_{kj}=\delta_{ik}$ (aka "two $L$'s give a delta").
- Contraction/trace as "sum over a repeated index" + use $\delta$ to collapse sums.
- For generalised coordinates: $\mathbf{e}_i=\partial\mathbf{r}/\partial x^i$, $g_{ij}=\mathbf{e}_i\cdot\mathbf{e}_j$, and (orthogonal case) $ds^2=\sum (h_i\,dx^i)^2$ with $h_i=\sqrt{g_{ii}}$.
- Raise/lower with metric in an orthogonal basis via $A_i=g_{ii}A^i$ and $g^{ii}=1/g_{ii}$.

---

## Covered Topics in [[clear/project/omoikane/mth3008/lectures/lectures|Lectures]]

- Suffix notation - conversion.
	- Patterns with matrices.
	- Kronecker $\delta$ -> dot product.
	- Alternating tensor -> cross product / scalar triple product / matrix determinant.
- Differential operator, $\nabla$…
	- Multiplication -> gradient (grad).
	- Dot product -> divergence (div).
	- Cross product -> curl (curl).
	- Validity of combinations of the above using their domain/ranges.
	- Operations with various scalar/vector functions.
- Coordinate transformations.
	- Rotation/transformation matrix; compact with index notation, definitions, and properties.
		- In 2d, basic definition.
		- In 3d, formerly defining scalars and vectors.
	- Dual bases: definition and how to find.
		- Transformation rule.
	- Contravariant and covariant components.
		- Their relations.
		- Applications for dot products, angles between vectors, and cross products.
		- Arc length and the matrix tensor; finding basis vectors and metric coefficients for coordinate systems.
