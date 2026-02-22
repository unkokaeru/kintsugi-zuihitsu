# MTH3008 Lecture 5

Having covered the combinations of the [[Gradient]], [[Divergence]], and [[Curl]] in previous lectures, we now look at how these operators apply to products of functions, and then begin exploring coordinate systems and transformations.

## Operations on Products of Functions

Using [[Suffix Notation]], we can compute operations on products of functions, such as scalar products ($fg$), vector products ($\mathbf{u} \times \mathbf{v}$), and combinations of the two ($f\mathbf{u}$).

### Gradient of a Scalar Product

The gradient of a scalar product $fg$ is essentially an extension of the product rule for differentiation:

$[\nabla(fg)]_i = \frac{\partial}{\partial x_i}(fg) = f \frac{\partial g}{\partial x_i} + g \frac{\partial f}{\partial x_i} = [f\nabla g + g\nabla f]_i$

Hence, $\boxed{\nabla(fg) = f\nabla g + g\nabla f}$.

### Divergence of a Scalar Vector Product

Applying the product rule to the divergence of $f\mathbf{u}$:

$\nabla \cdot (f\mathbf{u}) = \frac{\partial}{\partial x_i}(f u_i) = \frac{\partial f}{\partial x_i} u_i + f \frac{\partial u_i}{\partial x_i}$

Hence, $\boxed{\nabla \cdot (f\mathbf{u}) = (\nabla f) \cdot \mathbf{u} + f(\nabla \cdot \mathbf{u})}$.

### Curl of a Scalar Vector Product

Using the [[Alternating Tensor]] definition of the cross product:

$[\nabla \times (f\mathbf{u})]_i = \epsilon_{ijk} \frac{\partial}{\partial x_j}(f u_k) = \epsilon_{ijk} \frac{\partial f}{\partial x_j} u_k + f \epsilon_{ijk} \frac{\partial u_k}{\partial x_j}$

$= \epsilon_{ijk} (\nabla f)_j u_k + f \left( \epsilon_{ijk} \frac{\partial u_k}{\partial x_j} \right)$

Hence, $\boxed{[\nabla \times (f\mathbf{u})]_i = [\nabla f \times \mathbf{u} + f (\nabla \times \mathbf{u})]_i}$.

### Divergence of a Vector Product

For the divergence of $\mathbf{u} \times \mathbf{v}$:

$\nabla \cdot (\mathbf{u} \times \mathbf{v}) = \frac{\partial}{\partial x_i}(\epsilon_{ijk} u_j v_k) = \epsilon_{ijk} \frac{\partial u_j}{\partial x_i} v_k + \epsilon_{ijk} u_j \frac{\partial v_k}{\partial x_i}$

$= \left( \epsilon_{kij} \frac{\partial u_j}{\partial x_i} \right) v_k - \left( \epsilon_{jik} \frac{\partial v_k}{\partial x_i} \right) u_j$

Hence, $\boxed{\nabla \cdot (\mathbf{u} \times \mathbf{v}) = (\nabla \times \mathbf{u}) \cdot \mathbf{v} - (\nabla \times \mathbf{v}) \cdot \mathbf{u}}$.

### Curl of a Vector Product

The curl of a vector product $\mathbf{u} \times \mathbf{v}$ is slightly more complex. Expanding using the [[Kronecker Delta]] substitution $\epsilon_{ijk} \epsilon_{k\ell m} = \delta_{i\ell}\delta_{jm} - \delta_{im}\delta_{j\ell}$:

$[\nabla \times (\mathbf{u} \times \mathbf{v})]_i = \epsilon_{ijk} \frac{\partial}{\partial x_j} (\epsilon_{k\ell m} u_\ell v_m) = (\delta_{i\ell}\delta_{jm} - \delta_{im}\delta_{j\ell}) \frac{\partial}{\partial x_j} (u_\ell v_m)$

$= \frac{\partial}{\partial x_j} (u_i v_j) - \frac{\partial}{\partial x_j} (u_j v_i)$

$= u_i \frac{\partial v_j}{\partial x_j} + v_j \frac{\partial u_i}{\partial x_j} - u_j \frac{\partial v_i}{\partial x_j} - v_i \frac{\partial u_j}{\partial x_j}$

To simplify this, we define a new operator: $\mathbf{u} \cdot \nabla = u_j \frac{\partial}{\partial x_j}$. Substituting this back in gives the final identity:

$\boxed{[\nabla \times (\mathbf{u} \times \mathbf{v})]_i = [\mathbf{u}(\nabla \cdot \mathbf{v}) + (\mathbf{v} \cdot \nabla)\mathbf{u} - (\mathbf{u} \cdot \nabla)\mathbf{v} - \mathbf{v}(\nabla \cdot \mathbf{u})]_i}$.

## Coordinate Systems

Coordinate systems are defined by a set of **basis vectors** ($\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3$) that must satisfy two conditions:

1. **Linearly Independent:** $\lambda_1\mathbf{v}_1 + \lambda_2\mathbf{v}_2 + \lambda_3\mathbf{v}_3 = \mathbf{0}$ is only true when $\lambda_1 = \lambda_2 = \lambda_3 = 0$.
2. **Span the Space:** Every vector $\mathbf{u}$ can be written as a linear combination $\mathbf{u} = \mu_1\mathbf{v}_1 + \mu_2\mathbf{v}_2 + \mu_3\mathbf{v}_3$.

A coordinate system is **orthogonal** if its basis vectors intersect at $90^\circ$ angles ($\mathbf{v}_i \cdot \mathbf{v}_j = 0$ for $i \neq j$).

It is **orthonormal** if it is orthogonal *and* its basis vectors have a magnitude of 1 ($|\mathbf{v}_i| = 1$). A standard example is the Cartesian coordinate system: $\mathbf{i}=(1,0,0), \mathbf{j}=(0,1,0), \mathbf{k}=(0,0,1)$.

> [!warning] Generalised Coordinate Systems
> Generalised coordinate systems do not necessarily have orthogonal bases. For example, $\mathbf{v}_1=(1,0,0), \mathbf{v}_2=(2,1,0), \mathbf{v}_3=(0,0,1)$ are linearly independent and span the space, but they are not orthogonal since $\mathbf{v}_1 \cdot \mathbf{v}_2 = 2 \neq 0$.

## 2D Local Coordinate Transforms

If we define a 2D coordinate system by the plane $(x_1, x_2)$, we can rotate these axes by an angle $\theta$ to obtain a new coordinate system $(x_1', x_2')$. Any point $P$ transforms via:

$x_1' = x_1 \cos\theta + x_2 \sin\theta$

$x_2' = x_2 \cos\theta - x_1 \sin\theta$

In matrix form, this defines the **Rotation Matrix** $L$:

$$
\begin{bmatrix} x_1' \\ x_2' \end{bmatrix} = \begin{bmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}
$$

Using suffix notation, this transformation is written compactly as $\boxed{x_i' = L_{ij} x_j}$.

### Properties of the Rotation Matrix

The rotation matrix $L$ has several important properties:

- **Inverse is the Transpose:** $L^{-1} = L^T$. This is because the inverse operation is simply a rotation by $-\theta$.
- **Orthogonality:** Since $L^T = L^{-1}$, we have $LL^T = I$ and $L^T L = I$. In suffix notation: $L_{ij}L_{kj} = \delta_{ik}$ and $L_{ji}L_{jk} = \delta_{ik}$.
- **Determinant is 1:** $|L| = \cos^2\theta + \sin^2\theta = 1$.

Because of these properties, we can easily find the inverse transformation. Multiplying $x_i' = L_{ij} x_j$ by $L_{ik}$ yields:

$L_{ik}x_i' = L_{ik}L_{ij}x_j = \delta_{kj}x_j = x_k$

Hence, the inverse transformation is $\boxed{x_i = L_{ji} x_j'}$.

---

## Pre-Lecture Notes from [[mth3008 lecture notes 5.pdf|University Notes]]

- Recap of combinations of grad, div, and curl on vector and scalar fields (div grad, curl grad, grad div, div curl, curl curl).
- Application of differential operators to products of functions using suffix notation:
	- Gradient of a scalar product: $\nabla(fg) = f\nabla g + g\nabla f$.
	- Divergence of a scalar vector product: $\nabla \cdot (f\mathbf{u}) = (\nabla f) \cdot \mathbf{u} + f(\nabla \cdot \mathbf{u})$.
	- Curl of a scalar vector product: $[\nabla \times (f\mathbf{u})]_i = [\nabla f \times \mathbf{u} + f (\nabla \times \mathbf{u})]_i$.
	- Divergence of a vector product: $\nabla \cdot (\mathbf{u} \times \mathbf{v}) = (\nabla \times \mathbf{u}) \cdot \mathbf{v} - (\nabla \times \mathbf{v}) \cdot \mathbf{u}$.
	- Curl of a vector product: requires expanding with Kronecker delta and defining the operator $\mathbf{u} \cdot \nabla = u_j \frac{\partial}{\partial x_j}$.
	- Gradient of a dot product (from practical questions): $\nabla(\mathbf{u} \cdot \mathbf{v}) = \mathbf{u} \times (\nabla \times \mathbf{v}) + \mathbf{v} \times (\nabla \times \mathbf{u}) + (\mathbf{u} \cdot \nabla)\mathbf{v} + (\mathbf{v} \cdot \nabla)\mathbf{u}$.
- Introduction to Chapter 3: Local Coordinate Transforms.
	- Coordinate systems require basis vectors that are linearly independent and span the space.
	- Definitions of orthogonal (intersect at 90 degrees) and orthonormal (orthogonal and magnitude of 1) coordinate systems.
	- Cartesian system is an example of an orthonormal system.
	- Generalised coordinate systems do not need to be orthogonal.
- 2D coordinate system rotations:
	- Rotating axes by angle $\theta$ generates a transformation matrix $L$.
	- The new coordinates are defined by $x_i' = L_{ij}x_j$.
	- Properties of rotation matrix $L$: $L^{-1} = L^T$, $L_{ij}L_{kj} = \delta_{ik}$, and $|L| = 1$.
	- The inverse transformation can be easily found using the transpose: $x_i = L_{ji}x_j'$.
- Next lecture will expand rotating coordinate systems into 3D space.
