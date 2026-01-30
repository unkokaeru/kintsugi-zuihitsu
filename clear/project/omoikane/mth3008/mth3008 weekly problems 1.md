# MTH3008 Weekly Problems 1

> **Original Documents**: [[mth3008 weekly problem sheet 1.pdf|Problem Sheet]] / [[Week One Problem Solutions.pdf|My Handwritten Solutions]]
>
> **Vibes**: Fairly low difficulty, just learning how to use new algebraic methods and using new formulae; occasionally deriving them from simple summation properties and hard-to-remember matrix properties.
>
> **Used Techniques**:
> 	- Converting everything into suffix form by applying free and dummy indices.
> 	- Using $\mathbf{a}\cdot \mathbf{b}=a_{i}b_{i}$, both ways.
> 	- Using $\mathbf{A}\mathbf{B}=A_{ik}+B_{kj}$ and $(A_{ij})^{T}=A_{ji}$.
> 	- Using $\delta_{ij}a_{j}=a_{i}$.
> 	- Using the definition that $\epsilon_{ijk}=\begin{cases}0 & \text{if any of }i,j,k \text{ are equal} \\ +1 & \text{if }(i,j,k)=(1,2,3),(2,3,1), \text{or }(3,1,2) \\ -1 & \text{if }(i,j,k)=(1,3,2),(2,1,3), \text{or }(3,2,1)\end{cases}$, i.e., 1 if $(i,j,k)$ is an even permutation of $(1,2,3)$, -1 if it's an odd permutation, or 0 if any.
> 	- Using $\mathbf{a}\times \mathbf{b}=\epsilon_{ijk}a_{j}b_{k}$.
> 	- Using the property of $\epsilon_{ijk}$ that you can swap two indices to switch its polarity between $+1$ and $-1$.

## 1.1. Relate Dot Product and Angle via Suffix Notation

> [!question]
> Write in suffix notation:
> $\cos \theta = \dfrac{\mathbf{a}\cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|}$

$$
\cos \theta
= \frac{\mathbf{a} \cdot \mathbf{b}}{\lvert \mathbf{a} \rvert \lvert \mathbf{b} \rvert}
= \boxed{\frac{a_i b_i}{\sqrt{a_k a_k}\,\sqrt{b_k b_k}}}.
$$

---

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

Let

$$
A =
\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix},
\quad
B =
\begin{pmatrix}
b_{11} & b_{12} & b_{13} \\
b_{21} & b_{22} & b_{23} \\
b_{31} & b_{32} & b_{33}
\end{pmatrix}.
$$

Let $C = AB$. Then

$$
C_{ij}
= A_{i1} B_{1j} + A_{i2} B_{2j} + \dots + A_{in} B_{nj}
= \sum_{k=1}^{n} A_{ik} B_{kj}
= \boxed{A_{ik} B_{kj}}
$$

in suffix notation.

---

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

Let

$$
A =
\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix},
\quad
B =
\begin{pmatrix}
b_{11} & b_{12} & b_{13} \\
b_{21} & b_{22} & b_{23} \\
b_{31} & b_{32} & b_{33}
\end{pmatrix}.
$$

Then

$$
AB = A_{i1} B_{1j} + A_{i2} B_{2j} + \dots + A_{in} B_{nj}
= \sum_{k=1}^{n} A_{ik} B_{kj}
= A_{ik} B_{kj},
$$

and

$$
BA = B_{i1} A_{1j} + B_{i2} A_{2j} + \dots + B_{in} A_{nj}
= \sum_{k=1}^{n} B_{ik} A_{kj}
= B_{ik} A_{kj}
= A_{kj} B_{ik}.
$$

Thus

$$
AB = A_{ik} B_{kj} \neq A_{kj} B_{ik} = BA
\quad \because\quad ik \neq kj,\; kj \neq ik.\boxed{}
$$

---

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

Let

$$
A =
\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix},
\quad
B =
\begin{pmatrix}
b_{11} & b_{12} & b_{13} \\
b_{21} & b_{22} & b_{23} \\
b_{31} & b_{32} & b_{33}
\end{pmatrix}.
$$

We have

$$
(AB)^T = ((AB)_{ji}),
$$

so

$$
(AB)^T_{ij} = (AB)_{ji} = A_{jk} B_{ki}.
$$

On the other hand,

$$
(B^T A^T)_{ij} = (B^T)_{ik} (A^T)_{kj}
= B_{ki} A_{jk}
= A_{jk} B_{ki}.
$$

Therefore

$$
(AB)^T_{ij} = A_{jk} B_{ki} = (B^T A^T)_{ij},
$$

so

$$
(AB)^T = B^T A^T.\boxed{}
$$

---

## 1.5. Prove Transpose of Triple Matrix Product via Suffix Notation

> [!question]
> Let $\mathbf{L}$, $\mathbf{M}$ and $\mathbf{N}$ be three $3 \times 3$ matrices. Show, using suffix notation, that
> $(\mathbf{L}\mathbf{M}\mathbf{N})^{T} = \mathbf{N}^{T} \mathbf{M}^{T} \mathbf{L}^{T}$.

Let $L, M, N$ be $3 \times 3$ matrices. Then

$$
(LMN)_{ij} = (LM)_{ik} N_{kj}
= (L_{i\ell} M_{\ell k}) N_{kj}
= L_{i\ell} M_{\ell k} N_{kj}.
$$

For the right-hand side,

$$
(N^T M^T L^T)_{ij}
= (N^T)_{ik} (M^T)_{k\ell} (L^T)_{\ell j}
= N_{ki} M_{\ell k} L_{j\ell}.
$$

Now rename the dummy indices to match the pattern of $(LMN)_{ij}$. Swapping dummy labels and reordering scalar factors,

$$
N_{ki} M_{\ell k} L_{j\ell}
= L_{j\ell} M_{\ell k} N_{ki}
= L_{i\ell} M_{\ell k} N_{kj}.
$$

Thus

$$
(LMN)^T_{ij} = L_{i\ell} M_{\ell k} N_{kj} = (N^T M^T L^T)_{ij},
$$

so

$$
(LMN)^T = N^T M^T L^T.\boxed{}
$$

---

## 1.6. Simplify Kronecker Delta Expression and Rewrite in Vector Form

> [!question]
> Simplify the suffix notation expression $\delta_{ij} a_{j} b_{\ell} c_{k} \delta_{i\ell}$ and write the result in vector form.

$$
\delta_{ij} a_j b_\ell c_k \delta_{i\ell}
= a_i b_\ell c_k \delta_{i\ell}
= a_i b_i c_k.
$$

Now $a_i b_i = \mathbf{a} \cdot \mathbf{b}$, so

$$
a_i b_i c_k = (\mathbf{a} \cdot \mathbf{b})\, c_k.
$$

In vector form this is

$$
\boxed{(\mathbf{a} \cdot \mathbf{b})\, \mathbf{c}}.
$$

---

## 1.7. Evaluate Alternating Tensor Components

> [!question]
> Recall the alternating tensor $\varepsilon_{ijk}$. Evaluate the following in vector notation.
> 1. $\varepsilon_{122}$
> 2. $\varepsilon_{321}$
> 3. $\varepsilon_{223} + \varepsilon_{111}$

For $\varepsilon_{ijk}$:

$$
\begin{aligned}
1.\;& \varepsilon_{123} = \boxed{1}, \\
2.\;& \varepsilon_{321} = \boxed{-1}, \\
3.\;& \varepsilon_{112} + \varepsilon_{122} = 0 + 0 = \boxed{0}.
\end{aligned}
$$

---

## 1.8. Prove Antisymmetry of the Cross Product Using Suffix Notation

> [!question]
> Use suffix notation to show that $\mathbf{a} \times \mathbf{b} = -\,\mathbf{b} \times \mathbf{a}$.

LHS:

$$
\mathbf{a} \times \mathbf{b}
= (\mathbf{a} \times \mathbf{b})_i
= \varepsilon_{ijk} a_j b_k.
$$

RHS:

$$
-\,\mathbf{b} \times \mathbf{a}
= -(\mathbf{b} \times \mathbf{a})_i
= -\,\varepsilon_{ijk} b_j a_k.
$$

Since scalar multiplication commutes and $\varepsilon_{ijk}$ is antisymmetric,

$$
-\,\varepsilon_{ijk} b_j a_k
= -\,\varepsilon_{ikj} a_j b_k
= \varepsilon_{ijk} a_j b_k.
$$

Therefore

$$
\text{LHS} = \text{RHS},
\quad\text{i.e.}\quad
\mathbf{a} \times \mathbf{b} = -\,\mathbf{b} \times \mathbf{a}.\boxed{}
$$

---

## 1.9. Convert Dot–Cross Vector Equation to Suffix Notation

> [!question]
> Write the vector equation
> $\mathbf{a} \times \mathbf{b} + (\mathbf{a} \cdot \mathbf{d}) \mathbf{c} = \mathbf{e}$
> in suffix notation.

$$
\mathbf{a} \times \mathbf{b} + (\mathbf{a} \cdot \mathbf{d})\, \mathbf{c} = \mathbf{e}.
$$

In components,

$$
(\mathbf{a} \times \mathbf{b})_i + (\mathbf{a} \cdot \mathbf{d}) c_i = e_i.
$$

Using suffix notation,

$$
(\mathbf{a} \times \mathbf{b})_i = \varepsilon_{ijk} a_j b_k,
\quad
\mathbf{a} \cdot \mathbf{d} = a_j d_j,
$$

so

$$
\boxed{\varepsilon_{ijk} a_j b_k + a_j d_j c_i = e_i}.
$$
