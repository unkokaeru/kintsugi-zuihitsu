# MTH3008 Weekly Problems 1

*Notes about how hard the questions were and what to watch out for / what recurring methods were used…*

- Converting everything into suffix form by applying free and dummy indices.
- Using $\mathbf{a}\cdot \mathbf{b}=a_{i}b_{i}$, both ways.
- Using $\mathbf{A}\mathbf{B}=A_{ik}+B_{kj}$ and $(A_{ij})^{T}=A_{ji}$.
- Using $\delta_{ij}a_{j}=a_{i}$.
- Using the definition that $\epsilon_{ijk}=\begin{cases}0 & \text{if any of }i,j,k \text{ are equal} \\ +1 & \text{if }(i,j,k)=(1,2,3),(2,3,1), \text{or }(3,1,2) \\ -1 & \text{if }(i,j,k)=(1,3,2),(2,1,3), \text{or }(3,2,1)\end{cases}$, i.e., 1 if $(i,j,k)$ is an even permutation of $(1,2,3)$, -1 if it's an odd permutation, or 0 if any.

## 1.1. Relate Dot Product and Angle via Suffix Notation

> [!question]
> Write in suffix notation:
> $\cos \theta = \dfrac{\mathbf{a}\cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|}$

…

## 1.2. Verify Matrix Product Components Using Suffix Notation

> [!question]
> Consider the $3 \times 3$ matrix $\mathbf{C}$ given by the product $\mathbf{C} = \mathbf{A}\mathbf{B}$, where
>
> $$
> \mathbf{A} =
> \begin{pmatrix}
> a_{11} & a_{12} & a_{13} \\
> a_{21} & a_{22} & a_{23} \\
> a_{31} & a_{32} & a_{33}
> \end{pmatrix},
> \quad
> \mathbf{B} =
> \begin{pmatrix}
> b_{11} & b_{12} & b_{13} \\
> b_{21} & b_{22} & b_{23} \\
> b_{31} & b_{32} & b_{33}
> \end{pmatrix}.
> $$  
>
> Verify that $C_{ij} = A_{ik} B_{kj}$.

…

## 1.3. Demonstrate Non-Commutativity of Matrix Multiplication via Suffix Notation

> [!question]
> Let $\mathbf{A}$ and $\mathbf{B}$ be the $3 \times 3$ matrices
>
> $$
> \mathbf{A} =
> \begin{pmatrix}
> a_{11} & a_{12} & a_{13} \\
> a_{21} & a_{22} & a_{23} \\
> a_{31} & a_{32} & a_{33}
> \end{pmatrix},
> \quad
> \mathbf{B} =
> \begin{pmatrix}
> b_{11} & b_{12} & b_{13} \\
> b_{21} & b_{22} & b_{23} \\
> b_{31} & b_{32} & b_{33}
> \end{pmatrix}.
> $$
>
> Show, using suffix notation, that $\mathbf{A}\mathbf{B} \neq \mathbf{B}\mathbf{A}$, i.e. matrix multiplication does not commute.

…

## 1.4. Prove Transpose of a Product Using Suffix Notation

> [!question]
> Let $\mathbf{A}$ and $\mathbf{B}$ be the $3 \times 3$ matrices
>
> $$
> \mathbf{A} =
> \begin{pmatrix}
> a_{11} & a_{12} & a_{13} \\
> a_{21} & a_{22} & a_{23} \\
> a_{31} & a_{32} & a_{33}
> \end{pmatrix},
> \quad
> \mathbf{B} =
> \begin{pmatrix}
> b_{11} & b_{12} & b_{13} \\
> b_{21} & b_{22} & b_{23} \\
> b_{31} & b_{32} & b_{33}
> \end{pmatrix}.
> $$
>
> Show, using suffix notation, that $(\mathbf{A}\mathbf{B})^{T} = \mathbf{B}^{T} \mathbf{A}^{T}$, where $\mathbf{A}^{T}$ is the transpose of $\mathbf{A}$.

…

## 1.5. Prove Transpose of Triple Matrix Product via Suffix Notation

> [!question]
> Let $\mathbf{L}$, $\mathbf{M}$ and $\mathbf{N}$ be three $3 \times 3$ matrices. Show, using suffix notation, that
> $(\mathbf{L}\mathbf{M}\mathbf{N})^{T} = \mathbf{N}^{T} \mathbf{M}^{T} \mathbf{L}^{T}$.

…

## 1.6. Simplify Kronecker Delta Expression and Rewrite in Vector Form

> [!question]
> Simplify the suffix notation expression $\delta_{ij} a_{j} b_{\ell} c_{k} \delta_{i\ell}$ and write the result in vector form.

…

## 1.7. Evaluate Alternating Tensor Components

> [!question]
> Recall the alternating tensor $\varepsilon_{ijk}$. Evaluate the following in vector notation.
> 1. $\varepsilon_{122}$
> 2. $\varepsilon_{321}$
> 3. $\varepsilon_{223} + \varepsilon_{111}$

…

## 1.8. Prove Antisymmetry of the Cross Product Using Suffix Notation

> [!question]
> Use suffix notation to show that $\mathbf{a} \times \mathbf{b} = -\,\mathbf{b} \times \mathbf{a}$.

…

## 1.9. Convert Dot–Cross Vector Equation to Suffix Notation

> [!question]
> Write the vector equation
> $\mathbf{a} \times \mathbf{b} + (\mathbf{a} \cdot \mathbf{d}) \mathbf{c} = \mathbf{e}$
> in suffix notation.

…
