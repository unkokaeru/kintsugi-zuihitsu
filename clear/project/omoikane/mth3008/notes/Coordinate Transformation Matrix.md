# Coordinate Transformation Matrix

> [!tip] Relevant parts to questions...
> - Using $x_{i}'=L_{ij}x_{j}$ (forward) and $x_{i}=L_{ji}x_{j}'$ (inverse).
> - Using $L_{ij}=\mathbf{e}_{i}'\cdot \mathbf{e}_{j}$ to read off entries from two bases.
> - Using orthogonality $L_{ij}L_{kj}=\delta_{ik}=L_{ji}L_{jk}$ to cancel pairs of $L$s into a [[Kronecker Delta]].
> - Using $|L|=1$ and $L^{-1}=L^{T}$ to sanity-check $L$.

The **Coordinate Transformation Matrix** (or **rotation matrix**) $L$ encodes a rigid rotation between two orthonormal bases $\{\mathbf{e}_{j}\}$ and $\{\mathbf{e}_{i}'\}$. Its entries are defined as the dot products of new and old basis vectors:

$$
\boxed{L_{ij}=\mathbf{e}_{i}'\cdot \mathbf{e}_{j}}
$$

Equivalently, $L_{ij}$ is the cosine of the angle between $\mathbf{e}_{i}'$ and $\mathbf{e}_{j}$. Because every coordinate is just a dot product of the position vector with a basis vector ($x_{i}'=\mathbf{e}_{i}'\cdot \mathbf{r}$), the same matrix transforms coordinates:

$$
\boxed{x_{i}'=L_{ij}x_{j}}
$$

In 2D, rotating the axes by an angle $\theta$ gives the familiar form:

$$
L=\begin{bmatrix}\cos\theta & \sin\theta \\ -\sin\theta & \cos\theta\end{bmatrix}
$$

## Properties

Because $L$ represents a rotation, it has the following tightly-linked properties:

- **Orthogonal**::$L^{T}=L^{-1}$, so $LL^{T}=L^{T}L=I$; in suffix form, $L_{ij}L_{kj}=\delta_{ik}=L_{ji}L_{jk}$.
- **Unit determinant**::$|L|=1$ (a rigid rotation neither scales nor reflects).
- **Inverse is a rotation by $-\theta$**::the new-to-old transform is just the transpose, i.e., $x_{i}=L_{ji}x_{j}'$.
- **Each $\mathbf{e}_{i}'$ expands as $\mathbf{e}_{i}'=L_{ij}\mathbf{e}_{j}$**::the rows of $L$ are the coefficients of the new basis in terms of the old.

## Applications

1. **Transforming coordinates**, using $x_{i}'=L_{ij}x_{j}$ forward and $x_{i}=L_{ji}x_{j}'$ backward.
2. **Transforming vectors**, via $v_{i}'=L_{ij}v_{j}$ (the defining property of a **vector**).
3. **Transforming higher-rank objects**, with one factor of $L$ per free index; e.g., $T_{ij}'=L_{im}L_{jn}T_{mn}$ for a rank-2 [[Tensor Transformation Rule]].
4. **Deriving the [[Jacobian]]**::$\frac{\partial x_{i}'}{\partial x_{j}}=L_{ij}$ and $\frac{\partial x_{i}}{\partial x_{j}'}=L_{ji}$, which bridges index calculus and rotations.

> [!example]
> Given the orthonormal basis $\{\mathbf{i},\mathbf{j},\mathbf{k}\}$ and a new basis $\mathbf{e}_{1}'=\mathbf{i}$, $\mathbf{e}_{2}'=\mathbf{j}$, $\mathbf{e}_{3}'=\mathbf{k}$ rotated about $\mathbf{k}$ by $\theta$, read off $L_{ij}=\mathbf{e}_{i}'\cdot \mathbf{e}_{j}$ to get $L=\begin{pmatrix}\cos\theta & \sin\theta & 0 \\ -\sin\theta & \cos\theta & 0 \\ 0 & 0 & 1\end{pmatrix}$. The point $(1,0,0)$ transforms to $x_{i}'=L_{ij}x_{j}=\boxed{(\cos\theta,-\sin\theta,0)}$.

> Rotation matrix in, tensor transformation out.
