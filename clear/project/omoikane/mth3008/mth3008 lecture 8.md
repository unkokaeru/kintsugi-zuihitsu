# MTH3008 Lecture 8

> [!quote] Paula Lins
> …

This week, we build directly on last lecture's dual bases and covariant/contravariant components. How do these components change when we switch between two different coordinate systems, and how can we convert between the covariant and contravariant components of the same vector within the same system?

## The Transformation Rule

Let $e_1, e_2, e_3$ and $e'_1, e'_2, e'_3$ be the bases of two coordinate systems. We define the **expansion coefficients** $L^j_{i'}$ as the coefficients of the expansion of each new basis vector $e'_i$ in terms of the original basis:

$$
e'_i = L^j_{i'} e_j
$$

To find an explicit formula for $L^j_{i'}$, we take the dot product of $e'_i = \sum_k L^k_{i'} e_k$ with the dual vector $e^j$, and use the dual basis identity $e_k \cdot e^j = \delta^j_k$:

$$
e'_i \cdot e^j = L^k_{i'} \delta^j_k = L^j_{i'}
$$

Similarly, the inverse expansion coefficients are $L^{j'}_i = e_i \cdot e'^j$.

The transformation rules then follow by taking dot products of the vector $A$ with the new basis vectors. For the **covariant components**, we dot $A = A^j e_j$ with $e'_i$:

$$
A'_i = A \cdot e'_i = A^j(e'_i \cdot e_j) = L^j_{i'} A_j
$$

For the **contravariant components**, we dot $A = A_j e^j$ with $e'^i$:

$$
A'^i = A \cdot e'^i = A_j(e^i \cdot e'_j) = L^{i'}_j A^j
$$

> [!note] Inverse Formulas
> The inverse transformations hold symmetrically: $A_i = L^{j'}_i A'_j$ and $A^i = L^i_{j'} A'^j$. These are verifiable by direct substitution of the transformation rules.

> [!example] Computing Expansion Coefficients and Covariant Components
> Let $K$ have orthonormal basis $i_1, i_2, i_3$, and $K'$ have basis $e'_1 = i_1$, $e'_2 = 2i_2$, $e'_3 = i_1 + i_3$. Since $L^n_{m'} = e'_m \cdot i_n$, we compute each entry directly to get:
>
> $$
> L = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 1 & 0 & 1 \end{pmatrix}
> $$
>
> Then, for a vector $B = (1, 1, 0)^T$, the covariant components in $K'$ are given by the transformation rule $B'_i = L^j_{i'} B_j$, which in matrix form is simply:
>
> $$
> B' = L \cdot B = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 1 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}
> $$

## Relating Covariant and Contravariant Components

To relate $A_i$ and $A^i$ within the same system, we introduce the **metric tensors**:

- $g_{ik} = g_{ki} = e_i \cdot e_k$ (from the original basis)
- $g^{ik} = g^{ki} = e^i \cdot e^k$ (from the dual basis)
- $g^{\phantom{i}k}_i = e^i \cdot e_k = \delta^k_i$ (the cross term — just the Kronecker delta, from the dual basis definition)

Taking the dot product of the expansions $A = A^k e_k$ and $A = A_k e^k$ with $e^i$ and $e_i$ respectively, and substituting this notation, we arrive at the index-raising and lowering formulas:

$$
A_i = g_{ik} A^k, \qquad A^i = g^{ik} A_k
$$

So $g_{ik}$ **lowers** a contravariant index to a covariant one, and $g^{ik}$ **raises** a covariant index to a contravariant one.

> [!warning] Orthonormal Systems
> In an orthonormal basis (e.g., Cartesian), $g_{ik} = \delta_{ik}$, so covariant and contravariant components are identical. The distinction between them only matters in generalised, non-orthogonal coordinate systems.

### Applications

These formulas let us rewrite standard vector operations cleanly in any generalised coordinate system.

**Dot product:** Starting from $A = A^i e_i$ and $B = B^k e_k$, and using $g_{ik} B^k = B_i$:

$$
A \cdot B = g_{ik} A^i B^k = A^i B_i = A_i B^i = g^{ik} A_i B_k
$$

**Angle between vectors:** Using the above with $|A| = \sqrt{A \cdot A} = \sqrt{A^i A_i}$:

$$
\cos(A, B) = \frac{A^i B_i}{\sqrt{A^i A_i}\sqrt{B^i B_i}}
$$

**Cross product:** Using $A = A^j e_j$, $B = B^k e_k$, and the relation $e_j \times e_k = V e^i$ (where $(i, j, k)$ is a cyclic permutation of $(1, 2, 3)$ and $V = e_i \cdot (e_j \times e_k)$), the contravariant components of $C = A \times B = C^i e_i$ are:

$$
C^i = (A^j B^k - A^k B^j)V
$$

where $(i, j, k)$ is a cyclic permutation of $(1, 2, 3)$.

---

## Pre-Lecture Notes from [[mth3008 lecture notes 8.pdf|University Notes]]

- Recap of dual bases and covariant/contravariant components from the previous lecture.
- **Transformation rule** between two coordinate systems with bases $e_i$ and $e'_i$:
  - Expansion coefficients defined as $L^j_{i'} = e'_i \cdot e^j$, with inverse $L^{j'}_i = e_i \cdot e'^j$.
  - Covariant components transform as $A'_i = L^j_{i'} A_j$.
  - Contravariant components transform as $A'^i = L^{i'}_j A^j$.
  - Inverse formulas: $A_i = L^{j'}_i A'_j$ and $A^i = L^i_{j'} A'^j$.
- **Metric tensors** relate covariant and contravariant components within a system:
  - $g_{ik} = e_i \cdot e_k$ (original basis), $g^{ik} = e^i \cdot e^k$ (dual basis), $g^{\phantom{i}k}_i = \delta^k_i$ (cross term).
  - $A_i = g_{ik} A^k$ lowers an index; $A^i = g^{ik} A_k$ raises one.
- Applications — expressing standard operations in generalised coordinates:
  - Dot product: $A \cdot B = A^i B_i = A_i B^i = g_{ik} A^i B^k$.
  - Angle: $\cos(A, B) = A^i B_i / (\sqrt{A^i A_i}\sqrt{B^i B_i})$.
  - Cross product: $C^i = (A^j B^k - A^k B^j) V$, for $(i, j, k)$ a cyclic permutation of $(1, 2, 3)$.
- In an orthonormal system, $g_{ik} = \delta_{ik}$, and covariant and contravariant components coincide.
- Next lecture will cover arc length and the metric tensor.
