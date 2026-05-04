# MTH3008 Lecture 6

Following up on our introduction to coordinate systems in the last lecture, we will now extend the concept of local coordinate transforms into 3D space, and formalise our definitions of vectors and scalars.

## 3D Local Coordinate Transforms

Let $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$ be our original basis vectors, such that the position vector is $\mathbf{r} = x_1\mathbf{e}_1 + x_2\mathbf{e}_2 + x_3\mathbf{e}_3 = x_j\mathbf{e}_j$.

If we rotate these basis vectors by an angle $\theta$, we obtain a new basis $\mathbf{e}_1', \mathbf{e}_2', \mathbf{e}_3'$, giving a new position vector $\mathbf{r}' = x_j'\mathbf{e}_j'$.

To find a formula for $x_i'$ in terms of $x_k$, we can take the dot product of the new basis vector with the position vector:

$x_i' = \mathbf{e}_i' \cdot \mathbf{r} = \mathbf{e}_i' \cdot (x_j\mathbf{e}_j) = (\mathbf{e}_i' \cdot \mathbf{e}_j)x_j$

From this, we conclude that the entries of the transformation matrix $L$ are precisely the dot products of the new and old basis vectors (which represents the cosine of the angle between them):

$\boxed{L_{ij} = \mathbf{e}_i' \cdot \mathbf{e}_j}$

This matrix allows us to switch between coordinate systems using our familiar formula: $x_i' = L_{ij}x_j$. This formula also tells us that the coefficients of the expansion of $\mathbf{e}_i'$ in terms of the original basis are simply the entries of $L$:

$\mathbf{e}_i' = L_{i1}\mathbf{e}_1 + L_{i2}\mathbf{e}_2 + L_{i3}\mathbf{e}_3$

### Properties of the 3D Transformation Matrix

Just like in 2D, the 3D transformation matrix $L$ is orthogonal, meaning $L^T L = I = LL^T$, or in [[Suffix Notation]]: $L_{ij}L_{kj} = \delta_{ik} = L_{ji}L_{jk}$.

Using $x_i' = L_{ik}x_k$, we can derive partial derivatives relating the two coordinate systems:

$\frac{\partial x_i'}{\partial x_j} = \sum_{k=1}^3 \frac{\partial (L_{ik}x_k)}{\partial x_j} = \sum_{k=1}^3 \left( \frac{\partial L_{ik}}{\partial x_j}x_k + L_{ik}\frac{\partial x_k}{\partial x_j} \right) = \sum_{k=1}^3 L_{ik}\delta_{kj} = L_{ij}$

Hence, we get two incredibly important relations for switching between coordinate derivatives:

$\boxed{\frac{\partial x_i'}{\partial x_j} = L_{ij} \quad \text{and} \quad \frac{\partial x_i}{\partial x_j'} = L_{ji}}$

## Formal Definitions of Scalars and Vectors

The fundamental idea of a coordinate system is that the physical quantity itself (like temperature or the size of a room) does not change just because you look at it from a different origin or angle. We can use our transformation matrix $L$ to formally define these objects.

A quantity $s$ is a **scalar** if it is unchanged by a coordinate transformation:

$\boxed{s' = s}$

A quantity $\mathbf{v}$ is a **vector** if its components transform according to the rotation matrix under a change of coordinate axes:

$\boxed{v_i' = L_{ij}v_j}$

> [!example] Example 1: Proving the dot product is a scalar
> We must show that $(\mathbf{a} \cdot \mathbf{b})' = \mathbf{a} \cdot \mathbf{b}$, meaning $(a_i b_i)' = a_i b_i$.
> As $\mathbf{a}$ and $\mathbf{b}$ are vectors, they transform as $a_i' = L_{ij}a_j$ and $b_i' = L_{ik}b_k$.
> $(\mathbf{a} \cdot \mathbf{b})' = a_i' b_i' = (L_{ij}a_j)(L_{ik}b_k) = L_{ij}L_{ik}a_j b_k$
> Using the orthogonality property $L_{ij}L_{ik} = \delta_{jk}$:
> $= \delta_{jk} a_j b_k = a_k b_k = \mathbf{a} \cdot \mathbf{b}$. $\quad\boxed{}$

> [!example] Example 2: Proving the gradient of a scalar field is a vector
> Let $f$ be a scalar field. We must show that $[\nabla f]_i' = L_{ij}[\nabla f]_j$.
> We know $[\nabla f]_i = \frac{\partial f}{\partial x_i}$. Since $f$ is a scalar, $f = f'$.
> $[\nabla f]_i' = \frac{\partial f'}{\partial x_i'} = \frac{\partial f}{\partial x_i'}$
> Applying the chain rule:
> $= \frac{\partial f}{\partial x_j} \frac{\partial x_j}{\partial x_i'}$
> Using our previously derived relation $\frac{\partial x_j}{\partial x_i'} = L_{ij}$:
> $= L_{ij} \frac{\partial f}{\partial x_j} = L_{ij}[\nabla f]_j$. $\quad\boxed{}$

---

## Pre-Lecture Notes from [[mth3008 lecture notes 6.pdf]]

- Recap of coordinate systems: definitions of orthogonal and orthonormal bases, and generalised coordinate systems.
- Recap of Cartesian coordinate systems in 2D and the rotation matrix $L_{ij}$.
- Extension of Cartesian coordinate systems into 3D:
	- Rotating 3D basis vectors $\mathbf{e}_i$ yields new vectors $\mathbf{e}_i'$.
	- The entries of the transformation matrix are the dot products of the old and new basis vectors: $L_{ij} = \mathbf{e}_i' \cdot \mathbf{e}_j$.
	- The matrix is orthogonal: $L_{ij}L_{kj} = \delta_{ik}$.
	- Derivation of partial derivatives: $\frac{\partial x_i'}{\partial x_j} = L_{ij}$ and $\frac{\partial x_i}{\partial x_j'} = L_{ji}$.
- Formal definitions using transformation rules:
	- Scalars remain unchanged under transformation: $s' = s$.
	- Vectors transform according to the rotation matrix: $v_i' = L_{ij}v_j$.
- Examples proving these definitions:
	- Proved that the dot product of two vectors evaluates to a scalar because the transformation matrices cancel out to form a Kronecker delta.
	- Proved that the gradient of a scalar field $\nabla f$ acts as a vector using the chain rule and the derived partial derivative relations.
- Next lecture will cover dual bases.
