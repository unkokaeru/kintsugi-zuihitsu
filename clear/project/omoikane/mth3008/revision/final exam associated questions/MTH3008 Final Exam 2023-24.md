# MTH3008 Final Exam 2023-24

> **Original Documents**: [[mth3008 final exam 2023-24.pdf]] / [[mth3008 final exam 2023-24 solutions.pdf]]
>
> **Vibes**: ...
>
> **Used Techniques**:
>  - ...

***

## 1.1. Outer Product, Rank-Four Transformation, and Triple Cross Product

> [!question]
> (a) Compute the outer product $M \otimes N$ of the matrices
>
> $$
> M = \begin{pmatrix}
> 0 & 1 \\
> 7 & 2
> \end{pmatrix},
> \quad
> N = \begin{pmatrix}
> 1 & 0 \\
> 1 & -1 \\
> -1 & 2
> \end{pmatrix}.
> $$
>
> (b) Suppose $T_{ijk\ell}$ is a rank-four tensor.
> 1. Write down the transformation rule for $T_{ijk\ell}$ under a change of basis.
> 2. Using this transformation rule, show that the contracted quantity $T_{ijij}$ is a scalar.
> 
> (c) Let $u, v, w, z$ be vectors in $\mathbb{R}^3$. Using suffix notation, find an expression involving no cross products for
> $\bigl(u \times (v \times w)\bigr) \cdot z$.
> Write your final answer in vector notation, and show all intermediate steps of your working.

...

---

## 2.1. Dual Basis, Components, and Tensor Transformation in a New Frame

> [!question]
> In this question, let $K$ be the Cartesian coordinate system with orthonormal basis vectors $i_1, i_2, i_3$ for $\mathbb{R}^3$. Let $K'$ be a new coordinate system with basis vectors $e_1, e_2, e_3$ defined by
>
> $$
> e_1 = 2 i_1 + i_3, \quad
> e_2 = i_2, \quad
> e_3 = i_1 - i_2 + i_3.
> $$
>
> (a) Find the dual basis $e^1, e^2, e^3$ corresponding to $e_1, e_2, e_3$.
>
> (b) Consider the vector $V = 3 i_1 - 2 i_2 + i_3$. Find both the covariant and contravariant components of $V$ with respect to the basis $e_1, e_2, e_3$ and the dual basis $e^1, e^2, e^3$.
>
> (c) In the coordinate system $K$, consider the second-order tensor with components
>
> $$
> [P^i{}_k] = [P_i{}^k] = [P_{\cdot k}^i] = [P_i{}_{\cdot}{}^k]
> = \begin{pmatrix}
> 0 & 2 & 0 \\
> 3 & 0 & -1 \\
> -1 & 0 & 1
> \end{pmatrix}.
> $$
>
> Express the covariant components of this tensor in the coordinate system $K'$.

...

---

## 3.1. Parabolic Coordinates, Metric, and Christoffel Symbols

> [!question]
> Consider the three-dimensional orthogonal coordinate system $(x^1, x^2, x^3) = (\sigma, \tau, \phi)$ with position vector
>
> $$
> r = \sigma \tau\, i_1 + \frac{1}{2}(\sigma^2 - \tau^2)\, i_2 + \phi\, i_3,
> $$
>
> where $i_1, i_2, i_3$ are the Cartesian basis vectors.
>
> (a) Compute the (covariant) basis vectors $e_1, e_2, e_3$ of this coordinate system.
>
> (b) Compute the metric coefficients of the arc length and the components $g_{ii}$ of the covariant metric tensor for this parabolic coordinate system.
>
> (c) Determine the following Christoffel symbols of the first kind for this coordinate system:
> $\Gamma_{112}, \Gamma_{123}, \Gamma_{122}, \Gamma_{233}$.

...

---

## 4.1. Symmetry Properties, Non-Tensorial Derivative, and Curl of Gradient

> [!question]
> (a) Let $T_{ijk}$ be a third-rank tensor that is symmetric in its last two indices and antisymmetric in its first and second indices, that is
> $T_{ijk} = T_{ikj}$ and $T_{ijk} = -T_{jik}$ for all $i,j,k$.
> Show that all components of this tensor are zero, i.e. $T_{ijk} = 0$ for every choice of indices $i,j,k$.
>
> (b) Let $V_i$ be a (non-constant) covariant tensor field transforming according to
> $V'_i = L^k{}_i{}' V_k$. Prove that the partial derivative $\dfrac{\partial V_i}{\partial x^j}$ is not a tensor, that is, it does not satisfy the tensor transformation law. You may use the relations
>
> $$
> L^k{}_i{}' = \frac{\partial x^k}{\partial x'^i},
> \qquad
> L^{i'}{}_k = \frac{\partial x'^i}{\partial x^k}.
> $$
>
> (c) Let $f$ be a scalar field. Using suffix notation, evaluate the vector expression
> $\nabla \times (\nabla f)$.

...
