# MTH3008 Final Exam 2024–25

> **Original Documents**: `[[mth3008 final exam 2024-25.pdf|Exam Paper]]` / [[mth3008 final exam 2024-25 solutions.pdf|Provided Solutions]]
>
> **Vibes**: …
>
> **Used Techniques**:
>   - …

***

## 1. Inner Products, Tensor Transformation, Determinant Zero from Repeated Rows

> [!question]
> We consider the tensor with components
> $\displaystyle [T_{ik}] =
> \begin{pmatrix}
> 1 & 0 & 2 \\
> 0 & 2 & 1 \\
> 1 & -1 & 4
> \end{pmatrix}$,
> and the vectors $A = \mathbf{i}_1 - \mathbf{i}_2 + \mathbf{i}_3$, $B = \mathbf{i}_1 - 2\mathbf{i}_2$.
>
> 1. Compute the inner product $T_{ik} A_k$.
> 2. Compute the scalar $T_{ik} A_k B_i$.
> 
> Next, let $T_{ijk}$ and $R_{ijk}$ be rank–3 tensors.
>
> 1. Using the formal transformation rule (definition) of a tensor, show that
> $\displaystyle T^i{}_{p}{}^{j} R_{ij}{}^{q}$
> is a rank–2 tensor. You must explicitly use the tensor transformation rule; solutions relying only on counting free indices are not accepted.
> 
> Finally, let $A$ be a $3 \times 3$ real matrix.
>
> 1. Using suffix notation, show that if $A$ has two identical rows, then its determinant $\lvert A \rvert$ is zero. You must give a suffix–notation proof; general linear algebra arguments (e.g. "row operations" reasoning) are not accepted.

…

---

## 2. Dual Basis, Components in a Non-Orthonormal Basis, Tensor Components under Rotation

> [!question]
> Let $K$ be the Cartesian coordinate system with orthonormal basis $\mathbf{i}_1, \mathbf{i}_2, \mathbf{i}_3$ in $\mathbb{R}^3$. Consider another coordinate system $K'$ with basis vectors
> $\displaystyle
> \mathbf{e}_1 = 3 \mathbf{i}_1 + \mathbf{i}_2 + \mathbf{i}_3,\quad
> \mathbf{e}_2 = \mathbf{i}_2,\quad
> \mathbf{e}_3 = 2 \mathbf{i}_1 + \mathbf{i}_3.$
>
> 1. Find the dual basis $\mathbf{e}^1, \mathbf{e}^2, \mathbf{e}^3$ corresponding to $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$.
> 
> 2. Let $V = \mathbf{i}_1 + \mathbf{i}_2 - 2 \mathbf{i}_3$.
>    1. Find the covariant components $V_i$ of $V$ with respect to the basis $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$.
>    2. Find the contravariant components $V^i$ of $V$ with respect to the basis $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$.
> 
> 3. Let $L = (L^{j}{}_{i'})$ denote the rotation matrix relating $K$ and $K'$.
>    1. Determine the components $L^{j}{}_{i'}$.
>    2. In the coordinate system $K$, consider the second–order tensor with components
> $\displaystyle [P_{ik}] =
> \begin{pmatrix}
> 1 & 0 & 0 \\
> 0 & 2 & -1 \\
> 0 & 0 & 3
> \end{pmatrix},$
> where we may also write $P_{ik} = P_{ki}$ or in mixed index positions as $P^{\cdot k}{}_{i}$, etc.
> Express the covariant components of this tensor in the coordinate system $K'$.
> Show all working and justify each step in your tensor–transformation formula.

…

---

## 3. Symmetry Properties of a Constructed Tensor, Scalar Triple Products in Suffix Notation, Radial Gradient Formula

> [!question]
> Let $B_{ik}$ be a second–rank tensor with $B_{ik} \neq 0$ for all $i, k \in \{1, 2, 3\}$. Define
> $\displaystyle A_{ijk} = \varepsilon_{ij\ell} B_{k\ell},$
> where $\varepsilon_{ij\ell}$ is the Levi–Civita symbol. The quantity $A_{ijk}$ is a third–rank tensor (you do not need to prove this).
>
> 1. Investigate the symmetry of $A_{ijk}$ with respect to the first and second indices. Decide whether $A_{ijk}$ is symmetric, antisymmetric, or neither in these indices, and justify your answer.
> 2. Investigate the symmetry of $A_{ijk}$ with respect to the first and third indices. Decide whether $A_{ijk}$ is symmetric, antisymmetric, or neither in these indices, and justify your answer.
> 
> Next, let $\mathbf{a}, \mathbf{b}, \mathbf{c}, \mathbf{d}$ be vectors in $\mathbb{R}^3$.
>
> 1. Using suffix notation and the Levi–Civita symbol, derive an expression without any cross products for
> $\displaystyle (\mathbf{a} \times (\mathbf{b} \times \mathbf{c})) \cdot ((\mathbf{a} \cdot \mathbf{c}) \mathbf{d}).$
> Show all intermediate steps in suffix notation, then write your final simplified result back in vector notation.
> 
> Finally, let $\mathbf{r} = (x_1, x_2, x_3)$ denote the position vector in some coordinate system on $\mathbb{R}^3$, let $r = \lvert \mathbf{r} \rvert$, and let $f$ be a scalar field depending only on $r$. Let $\nabla$ denote the gradient operator.
>
> 1. Show that
> $\displaystyle \nabla f(r) = f'(r)\, \frac{\mathbf{r}}{r}.$
> You may use the fact that $f'(r) = \dfrac{\partial f}{\partial r}$, but you must derive the gradient expression explicitly from the chain rule and the relationship between $r$ and the Cartesian coordinates.

…

---

## 4. Orthogonal Curvilinear Coordinates, Metric Tensor, Arc Length, Christoffel Symbols

> [!question]
> Consider the three–dimensional orthogonal coordinate system $(x^1, x^2, x^3) = (\rho, \varphi, \theta)$ with position vector
> $\displaystyle
> \mathbf{r} = e^{\rho} \cos \varphi \cos \theta\, \mathbf{i}_1
> - e^{\rho} \sin \varphi \cos \theta\, \mathbf{i}_2
> - e^{\rho} \sin \theta\, \mathbf{i}_3,$
> where $\mathbf{i}_1, \mathbf{i}_2, \mathbf{i}_3$ are the usual Cartesian basis vectors.
> 
> 1. Compute the coordinate basis vectors $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$ of this coordinate system (i.e. the vectors tangent to coordinate lines).
> 
> 2. Using your results:
>    1. Compute the components $g_{ik}$ of the metric tensor for this coordinate system.
>    2. Write down the line element $(\mathrm{d}s)^2$ in terms of the metric coefficients, and identify the associated scale factors (Lamé coefficients) $h_1, h_2, h_3$.
> 
> 3. Determine the following Christoffel symbols of the first kind for this coordinate system:
> $\Gamma_{111},\ \Gamma_{122},\ \Gamma_{223},\ \Gamma_{233}.$
> Express your answers in terms of $\rho$ and $\theta$ and the metric coefficients, and show all intermediate steps (including any required derivatives of the metric components).

…
