# MTH3008 Lecture 9

Following our exploration of dual bases and coordinate transforms, we now apply contravariant and covariant components to arc length and the metric tensor. We also begin our formal introduction to tensors, generalising the transformation rules we've established for vectors.

## Arc Length and the Metric Tensor

Consider a coordinate system with basis $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$ and coordinates $x^1, x^2, x^3$. Let $ds$ be the arc length between two infinitely close points $x^i$ and $x^i + dx^i$. The vector $d\mathbf{r}$ joining these points has covariant components $dx_i$ and contravariant components $dx^i$:

$$
d\mathbf{r} = dx_i \mathbf{e}^i = dx^i \mathbf{e}_i
$$

By definition, $(ds)^2 = |d\mathbf{r}|^2 = d\mathbf{r} \cdot d\mathbf{r}$. We can write this in three different ways depending on our choice of components:

1. Using purely contravariant components: $(ds)^2 = (\mathbf{e}_i dx^i) \cdot (\mathbf{e}_k dx^k) = (\mathbf{e}_i \cdot \mathbf{e}_k) dx^i dx^k = g_{ik} dx^i dx^k$
2. Using purely covariant components: $(ds)^2 = (\mathbf{e}^i dx_i) \cdot (\mathbf{e}^k dx_k) = (\mathbf{e}^i \cdot \mathbf{e}^k) dx_i dx_k = g^{ik} dx_i dx_k$
3. Using mixed components: $(ds)^2 = (\mathbf{e}^i dx_i) \cdot (\mathbf{e}_k dx^k) = (\mathbf{e}^i \cdot \mathbf{e}_k) dx_i dx^k = g^i_{;k} dx_i dx^k = dx_i dx^i$

> [!warning] Vector vs Suffix Notation
> Be careful when writing arc length elements! A common pitfall is confusing an upper index with a power. For instance, in $dx^i$, $i$ is a contravariant index, whereas in $(ds)^2$, the $2$ is an exponent.

These expressions rely on the **metric tensor**, which determines the metric of our given space:

- $g_{ik}$: covariant metric tensor
- $g^{ik}$: contravariant metric tensor
- $g^i_{\;k}$: mixed metric tensor

$$
\boxed{(ds)^2 = g_{ik} dx^i dx^k = g^{ik} dx_i dx_k = dx_i dx^i}
$$

## Orthogonal Bases

For an orthogonal basis, basis vectors are mutually perpendicular, so $g_{ik} = \mathbf{e}_i \cdot \mathbf{e}_k = 0$ if $i \neq k$.

This gives a simple relationship between $g_{ii}$ and $g^{ii}$. Starting with $A^1 = g^{11} A_1$ and $A_1 = g_{11} A^1$:

$$
A^1 = \frac{A_1}{g_{11}} = g^{11} A_1
$$

Which leaves us with:

$$
\boxed{g_{ii} = \frac{1}{g^{ii}}}
$$

When $i = k$, we can rewrite our arc length equation using **metric coefficients** $h_i = \sqrt{g_{ii}}$:

$$
\boxed{(ds)^2 = \sum_{i=1}^3 (h_i dx^i)^2}
$$

### Deriving the Metric Tensor from Position

To find the basis vectors $\mathbf{e}_i$ from the position vector $\mathbf{r}$, we can expand $d\mathbf{r}$:

$$
(ds)^2 = d\mathbf{r} \cdot d\mathbf{r}
$$

$$
(ds)^2 = \left( \frac{\partial \mathbf{r}}{\partial x^i} dx^i \right) \cdot \left( \frac{\partial \mathbf{r}}{\partial x^k} dx^k \right)
$$

Distributing the dot product across the vectors:

$$
(ds)^2 = \left( \frac{\partial \mathbf{r}}{\partial x^i} \cdot \frac{\partial \mathbf{r}}{\partial x^k} \right) dx^i dx^k
$$

Comparing this with $(ds)^2 = (\mathbf{e}_i \cdot \mathbf{e}_k) dx^i dx^k$, we can extract our basis vectors:

$$
\boxed{\mathbf{e}_i = \frac{\partial \mathbf{r}}{\partial x^i}}
$$

We can now determine the metric tensor $g_{ij}$ explicitly.

1. Introduce the free indices $i$ and $j$ for the basis vectors: $g_{ij} = \mathbf{e}_i \cdot \mathbf{e}_j$
2. Distribute across the partial derivatives of the position vector: $g_{ij} = \frac{\partial \mathbf{r}}{\partial x^i} \cdot \frac{\partial \mathbf{r}}{\partial x^j}$
3. Introduce a dummy index $\ell$ to represent the Cartesian components of $\mathbf{r}$: $\boxed{g_{ij} = \frac{\partial r^\ell}{\partial x^i} \frac{\partial r^\ell}{\partial x^j}}$

> [!example] Cylindrical Coordinates
> For coordinates $(r, \theta, z)$, $\mathbf{r} = r \cos \theta \, \mathbf{i}_1 + r \sin \theta \, \mathbf{i}_2 + z \, \mathbf{i}_3$.
> Finding the basis vectors gives:
> $\mathbf{e}_1 = \cos \theta \, \mathbf{i}_1 + \sin \theta \, \mathbf{i}_2$
> $\mathbf{e}_2 = -r \sin \theta \, \mathbf{i}_1 + r \cos \theta \, \mathbf{i}_2$
> $\mathbf{e}_3 = \mathbf{i}_3$
> Taking dot products gives $g_{11} = 1$, $g_{22} = r^2$, and $g_{33} = 1$. The metric coefficients are $h_1 = 1, h_2 = r, h_3 = 1$.
> $\displaystyle (ds)^2 = (dr)^2 + (r \, d\theta)^2 + (dz)^2$

> [!question]
> Find the basis vectors and metric coefficients for spherical coordinates.

## Introduction to Tensors

Scalars and vectors are special cases of **tensor** objects.

- Rank 0: Scalar ($3^0 = 1$ component)
- Rank 1: Vector ($3^1 = 3$ components)
- Rank 2: Matrix ($3^2 = 9$ components)

> [!important] Tensor Definition
> A quantity is a tensor if each of its free indices transforms under rotation according to the transformation matrix $L$. The rank of a tensor is its number of free indices.
> $\displaystyle T'_{ij} = L_{im} L_{jn} T_{mn}$

Recall that the rotation matrix $L_{ij} = \frac{\partial x'_i}{\partial x_j}$ has the property $L^T = L^{-1}$, meaning $L_{ij} L_{kj} = \delta_{ik}$.

### Proving Kronecker Delta is a Tensor

We can show that the **[[Kronecker delta]]** $\delta_{ij}$ is a rank-2 tensor. We must demonstrate that it transforms as:

$$
\delta'_{ij} = L_{ik} L_{jm} \delta_{km}
$$

1. Apply the transformation to the standard Kronecker delta:

$$
L_{ik} L_{jm} \delta_{km} = L_{ik} L_{jk}
$$

1. Utilise the rotation matrix orthogonality property ($L_{ik} L_{jk} = \delta_{ij}$):

$$
L_{ik} L_{jm} \delta_{km} = \delta_{ij}
$$

1. Since $\delta_{ij}$ is defined identically in any coordinate system, $\delta_{ij} = \delta'_{ij}$:

$$
\boxed{L_{ik} L_{jm} \delta_{km} = \delta'_{ij}}
$$

Thus, it transforms exactly as a rank-2 tensor should.

---

## Pre-Lecture Notes from [[mth3008 lecture notes 9.pdf|University Notes]]

- **Arc Length**: Defined as $(ds)^2 = d\mathbf{r} \cdot d\mathbf{r} = g_{ik} dx^i dx^k = g^{ik} dx_i dx_k = dx_i dx^i$.
- **Metric Tensor**: The quantities $g_{ik}$ (covariant), $g^{ik}$ (contravariant), and $g^i_{\;k}$ (mixed) determine the metric of the space.
- **Orthogonal Bases**: If $\mathbf{e}_i \cdot \mathbf{e}_k = 0$ for $i \neq k$, then $g_{ii} = \frac{1}{g^{ii}}$.
- **Metric Coefficients**: Defined as $h_i = \sqrt{g_{ii}}$. Arc length simplifies to $(ds)^2 = \sum_{i=1}^3 (h_i dx^i)^2$.
- **Basis Vectors**: Derived from position vector as $\mathbf{e}_i = \frac{\partial \mathbf{r}}{\partial x^i}$.
- **Cylindrical Coordinates**: Evaluated metric gives $h_1=1, h_2=r, h_3=1$, so $(ds)^2 = (dr)^2 + (r \, d\theta)^2 + (dz)^2$.
- **Tensors Overview**: Generalise scalars (rank 0, 1 component) and vectors (rank 1, 3 components). An $n$-th rank tensor in 3D has $3^n$ components.
- **Transformation Rule**: For a rank-2 tensor, $T'_{ij} = L_{im} L_{jn} T_{mn}$. Each free index brings an $L$ term.
- **Kronecker Delta**: Proven to be a rank-2 tensor because $L_{ik} L_{jm} \delta_{km} = \delta_{ij} = \delta'_{ij}$.
- **Next time**: The quotient rule, and symmetric and antisymmetric tensors.
