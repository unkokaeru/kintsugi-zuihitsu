# MTH3008 Final Exam 2022-23

> **Original Documents**: [[mth3008 final exam 2022-23.pdf|Exam Paper]] / [[mth3008 final exam 2022-23 solutions.pdf|Provided Solutions]]
>
> **Vibes**: …
>
> **Used Techniques**:
>   - …

***

## 1. Outer Product, Scalar Contraction, and Cross Products in Suffix Notation

> [!question]
> 1. Compute the outer product $M \otimes N$ for the matrices
> 
> $$
>    M =
>    \begin{pmatrix}
>    1 & 2 \\
>    0 & 1
>    \end{pmatrix},
>    \qquad
>    N =
>    \begin{pmatrix}
>    1 & 0 & 3 \\
>    0 & 1 & -1
>    \end{pmatrix}.
>    $$
>
> 1. Let $T_{ijk\ell}$ be a rank–four tensor. Using the tensor transformation rule, show that the contracted quantity $T_{ijij}$ is a scalar.
> 2. Using suffix notation, derive an expression for $(\mathbf{u} \times \mathbf{v}) \cdot (\mathbf{w} \times \mathbf{z})$ that involves no cross products.

…

---

## 2. Dual Basis, Components, and Tensor Transformation between Bases

> [!question]
> Work in $\mathbb{R}^3$ with the Cartesian coordinate system $K$ having orthonormal basis vectors $\mathbf{i}_1, \mathbf{i}_2, \mathbf{i}_3$.
> 1. Consider the coordinate system $K'$ with (not necessarily orthonormal) basis vectors
> 
> $$
>    \mathbf{e}_1 = \mathbf{i}_1,\qquad
>    \mathbf{e}_2 = \mathbf{i}_1 - \mathbf{i}_3,\qquad
>    \mathbf{e}_3 = \mathbf{i}_1 + \mathbf{i}_2 + \mathbf{i}_3.
>    $$
>
> Find the dual basis $\mathbf{e}^1, \mathbf{e}^2, \mathbf{e}^3$.
> 2. For the vector $\mathbf{V} = 2\mathbf{i}_1 + \mathbf{i}_2 + 2\mathbf{i}_3$, compute its contravariant and covariant components with respect to the basis $\{\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3\}$ and the dual basis $\{\mathbf{e}^1, \mathbf{e}^2, \mathbf{e}^3\}$.
> 3. In the Cartesian system $K$, consider the second–order tensor with components
>
> $$
>    [P^i{}_k] = [P_i{}^k] = [P_{\ \,k}^i] = [P^{\ \,i}_k]
>    =
>    \begin{pmatrix}
>    0 & 1 & 1\\
>    1 & 0 & -1\\
>    -1 & 1 & 1
>    \end{pmatrix}.
>    $$
>
> Express the covariant components of this tensor in the coordinate system $K'$.

…

---

## 3. Transformation Rules and Tensorial Inner Products

> [!question]
> Let $A_{ij}$ and $B_{ijk}$ be tensors in a general three–dimensional coordinate system.
> 1. Write down the transformation rules for the components $A_{ij}$ and $B_{ijk}$ under a change of coordinates.
> 2. Using these transformation rules, prove that the contracted inner product $A_{ij} B_{ikl}$ is a tensor, and state its rank.
>    1. Show that the Levi–Civita symbols satisfy the identity $\epsilon_{ijk} \epsilon_{ij\ell} = 2 \delta_{k\ell}$.
>    2. Suppose $A_{ij}$ and $B_{ijk}$ are related by
> 
> $$
>       B_{ijk} = \epsilon_{ij\ell} A_{\ell k}.
>       $$
> Using the identity from part (3)(i), derive an explicit expression for $A_{\ell k}$ in terms of $B_{ijk}$.

…

---

## 4. Parabolic Cylindrical Coordinates: Basis, Metric, and Christoffel Symbols

> [!question]
> Consider the parabolic cylindrical coordinate system $(x^1, x^2, x^3) = (\sigma, \tau, \phi)$, with position vector
>
> $$
> \mathbf{r} = \sigma \tau \cos\phi\, \mathbf{i}_1 + \sigma \tau \sin\phi\, \mathbf{i}_2 + \frac{1}{2}(\sigma^2 - \tau^2)\,\mathbf{i}_3,
> $$
>
> where $\mathbf{i}_1, \mathbf{i}_2, \mathbf{i}_3$ are the usual Cartesian basis vectors.
> 1. Compute the coordinate basis vectors $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$ associated with the parabolic coordinates $(\sigma, \tau, \phi)$.
> 2. Compute the metric coefficients for the arc length, and hence find the components of the covariant metric tensor $g_{ij}$ (in particular, $g_{ii}$) for this parabolic coordinate system.
> 3. Determine the following Christoffel symbols of the first kind for the parabolic coordinates:
> $\Gamma_{112},\; \Gamma_{123},\; \Gamma_{122},\; \Gamma_{233}$.

…
