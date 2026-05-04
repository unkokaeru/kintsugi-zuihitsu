# MTH3008 Lecture 7

Following up on our introduction to formal definitions of vectors and scalars, we will now explore how to express vectors in generalised coordinate systems. This requires introducing the concept of dual bases and expanding vectors into their covariant and contravariant components.

## Dual Bases

Two bases $e_1, e_2, e_3$ and $e^1, e^2, e^3$ are defined as dual if each vector of one basis is perpendicular to two vectors of the other basis. In Suffix Notation, they must satisfy:

$$
 e_i \cdot e^k = \delta_i^k 
$$

Where $\delta_i^k$ is the Kronecker delta (1 if $i = k$, 0 if $i \neq k$).

To construct a dual basis from a given basis $e_1, e_2, e_3$, we note that $e^1$ must be perpendicular to $e_2$ and $e_3$, meaning it is proportional to their cross product: $e^1 = m(e_2 \times e_3)$.

To satisfy $e^1 \cdot e_1 = 1$, we substitute this in to get $m(e_1 \cdot (e_2 \times e_3)) = 1$. The term $e_1 \cdot (e_2 \times e_3)$ is exactly the volume of the parallelepiped spanned by the original basis, which we call $V$.

Thus, the general formula for constructing a dual basis is:

$$
 e^i = \frac{e_j \times e_k}{V} 
$$

Where $i, j, k$ is a cyclic permutation of $1, 2, 3$.

> [!note] Orthonormal Duals
> If a basis is orthonormal (e.g., the standard Cartesian $i_1, i_2, i_3$), its dual basis is simply itself. That is, $e^i = e_i$.

> [!example] Finding a Dual Basis
> Given the basis $e_1 = (2, 0, 1)^T$, $e_2 = (1, 3, 0)^T$, $e_3 = (0, 0, 4)^T$, find the dual basis $e^1, e^2, e^3$.
>
> First, we calculate the cross products:
>
> $e_1 \times e_2 = (-3, 1, 6)^T$
>
> $e_2 \times e_3 = (12, -4, 0)^T$
>
> $e_3 \times e_1 = (0, -8, 0)^T$
>
> Next, we find the volume $V = e_1 \cdot (e_2 \times e_3) = 2(12) + 0(-4) + 1(0) = 24$.
>
> Finally, we apply the formula $e^i = \frac{e_j \times e_k}{V}$:
>
> $e^1 = \frac{1}{24}(12, -4, 0)^T = (1/2, -1/6, 0)^T$
>
> $e^2 = \frac{1}{24}(0, -8, 0)^T = (0, -1/3, 0)^T$
>
> $e^3 = \frac{1}{24}(-3, 1, 6)^T = (-1/8, 1/24, 1/4)^T$

## Covariant and Contravariant Components

Using dual bases, any vector $A$ can be expanded with respect to either the original basis or its dual.

1. Expansion with respect to the original basis: $A = A^1 e_1 + A^2 e_2 + A^3 e_3 = A^i e_i$
2. Expansion with respect to the dual basis: $A = A_1 e^1 + A_2 e^2 + A_3 e^3 = A_i e^i$

The coefficients $A^i$ are called the **contravariant components** of $A$, while $A_i$ are the **covariant components** of $A$.

To find these coefficients practically, we take the dot product of the vector $A$ with the respective basis vectors. Because $e_i \cdot e^k = \delta_i^k$, the summation over the repeated index is perfectly absorbed by the Kronecker delta:

- **Contravariant components:** $A \cdot e^i = (A^k e_k) \cdot e^i = A^k \delta_k^i = A^i$
- **Covariant components:** $A \cdot e_i = (A_k e^k) \cdot e_i = A_k \delta^k_i = A_i$

> [!example] Finding Covariant and Contravariant Components
> Using the basis and dual basis from the previous example, find the covariant and contravariant components of the vector $J = (8, 0, 4)^T$.
>
> For the **covariant** components, we evaluate $J_i = J \cdot e_i$:
>
> $J_1 = (8, 0, 4) \cdot (2, 0, 1) = 16 + 0 + 4 = 20$
>
> $J_2 = (8, 0, 4) \cdot (1, 3, 0) = 8 + 0 + 0 = 8$
>
> $J_3 = (8, 0, 4) \cdot (0, 0, 4) = 0 + 0 + 16 = 16$
>
> For the **contravariant** components, we evaluate $J^i = J \cdot e^i$:
>
> $J^1 = (8, 0, 4) \cdot (1/2, -1/6, 0) = 4 + 0 + 0 = 4$
>
> $J^2 = (8, 0, 4) \cdot (0, -1/3, 0) = 0 + 0 + 0 = 0$
>
> $J^3 = (8, 0, 4) \cdot (-1/8, 1/24, 1/4) = -1 + 0 + 1 = 0$

---

## Pre-Lecture Notes from [[mth3008 lecture notes 7.pdf]]

- Recap of coordinate systems, orthonormal bases, transformations in 3D, and formal definitions of vectors and scalars.
- Introduction to **Dual Bases**: Two bases $e_i$ and $e^k$ are dual if $e_i \cdot e^k = \delta_i^k$.
- Constructing a dual basis requires the volume of the parallelepiped, $V = e_1 \cdot (e_2 \times e_3)$.
- The formula for a dual basis vector is $e^i = \frac{e_j \times e_k}{V}$ (where $i, j, k$ is a cyclic permutation of $1, 2, 3$).
- An orthonormal basis acts as its own dual basis.
- Vectors can be expanded in generalised coordinate systems using either basis.
- **Contravariant components** ($A^i$) correspond to the expansion $A = A^i e_i$. They are found via $A^i = A \cdot e^i$.
- **Covariant components** ($A_i$) correspond to the expansion $A = A_i e^i$. They are found via $A_i = A \cdot e_i$.
- Examples evaluated calculating dual bases from original bases and determining the corresponding covariant and contravariant components using simple dot products.
- Next lecture will cover the transformation rule, the relationship between covariant and contravariant components, and the metric tensor.
