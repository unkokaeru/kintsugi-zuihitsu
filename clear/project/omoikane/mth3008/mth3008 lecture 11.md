# MTH3008 Lecture 11

In the last lecture we finished vectors in generalised coordinates, focusing on how **covariant components** and **contravariant components** transform and how the **metric tensor** mediates between them. Today we upscale all of that to **second-rank tensor** and higher-order objects in non-Cartesian coordinates, keeping very close track of where each index lives. The main new subtlety is the appearance of **mixed tensor** components and how symmetry behaves under index raising and lowering.

## Recap: Dual Bases and Vector Components

> [!important] Dual bases and components
> Two bases $e_{1},e_{2},e_{3}$ and $e^{1},e^{2},e^{3}$ are **dual** if $e^{i}\cdot e_{k} = 0$ for $i\neq k$ and $e^{i}\cdot e_{i} = 1$.
> Any vector $\mathbf{A}$ can be expanded as $\mathbf{A} = A^{i} e_{i} = A_{i} e^{i}$, where $A^{i}$ are the **contravariant components** and $A_{i}$ are the **covariant components**.

Given a non-orthonormal basis $\{e_{i}\}$, the dual basis $\{e^{i}\}$ is defined by $e^{i}\cdot e_{k} = \delta^{i}_{k}$, and one way to construct $e^{i}$ in $\mathbb{R}^{3}$ is

$$
e^{i} = \frac{e_{j}\times e_{k}}{e_{i}\cdot (e_{j}\times e_{k})},
$$

with $(i,j,k)$ a cyclic permutation of $(1,2,3)$. This ensures that the matrix of dot products between $\{e^{i}\}$ and $\{e_{k}\}$ is exactly the identity, so extracting components via contraction works as in the orthonormal case.

The **metric tensor** on this basis is defined by

$$
g_{ik} = e_{i}\cdot e_{k},\qquad g^{ik} = e^{i}\cdot e^{k}, 
$$

And we use it to convert between covariant and contravariant components:

$$
\boxed{A_{i} = g_{ik} A^{k},\qquad A^{i} = g^{ik} A_{k}.}
$$

> [!warning] Vector vs suffix notation
> In these notes $\mathbf{A}$ and its components $A^{i},A_{i}$ are the same geometric object. The whole point of tensor notation is to separate the geometric object from how it looks in a particular coordinate system, so mixing up $A_{i}$ and $A^{i}$ in a calculation will usually break tensorial transformation rules.

## Second-rank Tensors: Covariant, Contravariant and Mixed Components

A **second-rank tensor** $\mathbf{A}$ on a $3$‑dimensional space is determined by $3\times 3=9$ components once we pick a basis. In a generalised coordinate system, we can represent those components in four natural ways:

- **Covariant components** $A_{ik}$,
- **Contravariant components** $A^{ik}$,
- **Mixed components** $A^{\;\;k}_{i}$,
- **Mixed components** $A^{i}_{\;\;k}$.

> [!note] Dot-notation for mixed components
> Slides use a dot to emphasise index order, e.g. $A_{\;\;\cdot k}^{i}$ or $A_{i}^{\;\;\cdot k}$, which we will write informally as $A^{\;\;k}_{i}$ and $A^{i}_{\;\;k}$. The dot reminds you which index is covariant and which is contravariant in each position.

### Transformations of Second-rank Components

Given a change of basis with matrices $L^{\;\;i'}_{k}$ for contravariant components and $L^{\;\;k}_{i'}$ for covariant components, the transformation laws are:

$$
\begin{aligned}
A'_{ik} &= L^{\;\;\ell}_{i'}\,L^{\;\;m}_{k'}\,A_{\ell m},\\
A'^{ik} &= L^{\;\;i'}_{\ell}\,L^{\;\;k'}_{m}\,A^{\ell m},\\
A'^{\;\;k}_{i} &= L^{\;\;\ell}_{i'}\,L^{\;\;k'}_{m}\,A^{\;\;m}_{\ell},\\
A'^{i}_{\;\;k} &= L^{\;\;i'}_{\ell}\,L^{\;\;m}_{k'}\,A^{\ell}_{\;\;m},
\end{aligned}
$$

Where summation over repeated indices is understood.

> [!important] Raising and lowering indices for rank 2
> The different flavours of components of a second-rank tensor are related by the metric:
> $\displaystyle A_{ik} = g_{i\ell} g_{km} A^{\ell m} = g_{k\ell} A^{\;\;\ell}_{i} = g_{i\ell} A^{\ell}_{\;\;k},$
> $\displaystyle A^{ik} = g^{i\ell} g^{km} A_{\ell m} = g^{i\ell} A^{\;\;k}_{\ell} = g^{k\ell} A^{i}_{\;\;\ell},$
> $\displaystyle A^{\;\;k}_{i} = g^{k\ell} A_{i\ell} = g_{i\ell} A^{\ell k},$
> $\displaystyle A^{i}_{\;\;k} = g^{i\ell} A_{\ell k} = g_{k\ell} A^{i\ell}.$
> In particular, once you know any one of $A_{ik},A^{ik},A^{\;\;k}_{i},A^{i}_{\;\;k}$ and the metric, you know them all.

> [!warning] Symmetry lives at fixed index positions
> Symmetry or antisymmetry is defined with respect to indices in the **same** slot (both lower, or both upper). For example, $A^{\cdot\cdot\ell}_{ik}$ is symmetric in $i,k$ if $A^{\cdot\cdot\ell}_{ik} = A^{\cdot\cdot\ell}_{ki}$, while $B_{ik}^{\cdot\cdot\ell}$ is antisymmetric if $B_{ik}^{\cdot\cdot\ell} = -B_{ki}^{\cdot\cdot\ell}$. Raising or lowering one of these indices can destroy symmetry because it changes which metric components appear.

## Tensor Character via Contraction: Examples

### Example 1: Contraction with an Arbitrary Vector

> [!example] Covariant rank 3 from a contraction
> Let $B^{k}$ be an arbitrary contravariant vector. Suppose $A_{ijk} B^{k}$ transforms as a second‑rank **covariant** tensor. Then $A_{ijk}$ must itself transform as a third‑rank covariant tensor.

The assumption "$A_{ijk} B^{k}$ is a covariant tensor of rank $2$" means that under a change of coordinates we have

$$
A'_{ijk} B'^{k} = L^{\;\;\ell}_{i'} L^{\;\;m}_{j'} A_{\ell m n} B^{n},
$$

for all choices of $B^{n}$. Since $B^{k}$ is contravariant, its components satisfy $B'^{k} = L^{\;\;k'}_{n} B^{n}$, or equivalently $B^{n} = L^{\;\;n}_{k'} B'^{k}$.

Substituting this into the transformation of $A_{ijk} B^{k}$ gives

$$
A'_{ijk} B'^{k} = L^{\;\;\ell}_{i'} L^{\;\;m}_{j'} A_{\ell m n} L^{\;\;n}_{k'} B'^{k}.
$$

Now $B'^{k}$ is arbitrary, so we can cancel it from both sides to get the transformation law

$$
\boxed{A'_{ijk} = L^{\;\;\ell}_{i'} L^{\;\;m}_{j'} L^{\;\;n}_{k'} A_{\ell m n},}
$$

Which is exactly the covariant rank‑3 tensor rule.

### Example 2: Adding Covariant and Contravariant Vectors

> [!example] Why $A_{i} + B^{i}$ is not a tensor
> Let $A_{i}$ be a covariant tensor (a covector) and $B^{i}$ a contravariant tensor (a vector). Show that $A_{i} + B^{i}$ does **not** transform as a tensor.

We know

$$
A'_{i} = L^{\;\;k}_{i'} A_{k},\qquad B'^{i} = L^{\;\;i'}_{k} B^{k}.
$$

Therefore, the sum transforms as

$$
A'_{i} + B'^{i} = L^{\;\;k}_{i'} A_{k} + L^{\;\;i'}_{k} B^{k}.
$$

There is no way to factor out a single transformation matrix $L$ that acts on $A_{k} + B^{k}$, because one term uses the covariant rule and the other uses the contravariant rule. So $A_{i}+B^{i}$ does not obey any tensor transformation law and hence is not a tensor.

> [!warning] Pitfall: mixing index types
> You can **contract** indices of different type (e.g. $A_{i} B^{i}$ is a scalar), but you cannot **add** objects with different index types and expect a tensor. Always check that each free index appears with the same covariant/contravariant status on every term.

### Practical Question: Mixed Third-order Tensor

> [!example] Contraction producing a mixed third-order tensor
> Let $A_{ik\ell}$ be a covariant tensor of order $3$ and $B^{pqmn}$ a contravariant tensor of order $4$. Show that $C^{\;\;mn}_{i} := A_{ik\ell} B^{k\ell mn}$ is a mixed tensor of order $3$ (one covariant and two contravariant indices).

Sketch: under a change of basis, $A_{ik\ell}$ transforms with three factors of the covariant transformation matrix and $B^{pqmn}$ with four factors of the contravariant one. When we form $A_{ik\ell} B^{k\ell mn}$ we contract over $k,\ell$, which pairs two covariant indices from $A$ with two contravariant indices from $B$. This gives three free indices $(i,m,n)$, with $i$ covariant and $m,n$ contravariant, and the transformation rule is exactly that of a $(1,2)$‑type tensor $C^{\;\;mn}_{i}$.

## Worked Coordinate-change Example for a Second-rank Tensor

We now look at a fully explicit change of basis to see how to compute covariant, contravariant and mixed components in practice.

> [!example] Second-rank tensor under a non-orthonormal change of basis
> Start with a Cartesian coordinate system $K$ with orthonormal basis $\{i_{1},i_{2},i_{3}\}$ and a second-order tensor whose components in this basis are
> $\displaystyle [A_{ik}] = [A^{ik}] = [A^{\;\;k}_{i}] = [A^{i}_{\;\;k}] = \begin{pmatrix} 2 & 1 & 3 \\ 2 & 3 & 4 \\ 1 & 2 & 1 \end{pmatrix}.$
> Let $K'$ be a new coordinate system with basis vectors
> $e_{1} = i_{1},\quad e_{2} = i_{1} + i_{2},\quad e_{3} = i_{1} + i_{2} + i_{3}$.
> Compute all four types of components in $K'$.

### Step 1: Build the Transformation Matrix

The basis change can be written in matrix form as

$$
\begin{pmatrix}
e_{1} \\ e_{2} \\ e_{3}
\end{pmatrix}
=
\begin{pmatrix}
1 & 0 & 0 \\
1 & 1 & 0 \\
1 & 1 & 1
\end{pmatrix}
\begin{pmatrix}
i_{1} \\ i_{2} \\ i_{3}
\end{pmatrix}.
$$

Comparing this with $e_{i'} = L^{\;\;j}_{i'} i_{j}$, we read off the coefficients

$$
L^{\;\;1}_{1'}=1,\,L^{\;\;2}_{1'}=0,\,L^{\;\;3}_{1'}=0;\quad
L^{\;\;1}_{2'}=1,\,L^{\;\;2}_{2'}=1,\,L^{\;\;3}_{2'}=0;\quad
L^{\;\;1}_{3'}=1,\,L^{\;\;2}_{3'}=1,\,L^{\;\;3}_{3'}=1.
$$

We can collect these into the matrix

$$
L = [L^{\;\;j}_{i'}] =
\begin{pmatrix}
1 & 0 & 0 \\
1 & 1 & 0 \\
1 & 1 & 1
\end{pmatrix}.
$$

### Step 2: Covariant Components via Matrix Multiplication

The covariant components transform as

$$
A'_{ik} = L^{\;\;\ell}_{i'} L^{\;\;m}_{k'} A_{\ell m}.
$$

If we view $A=[A_{ij}]$ and $L=[L^{\;\;j}_{i'}]$ as matrices, this is exactly the matrix product

$$
A' = L A L^{T}.
$$

In this example we compute

$$
A' = L A L^{T}
=
\begin{pmatrix}
1 & 0 & 0 \\
1 & 1 & 0 \\
1 & 1 & 1
\end{pmatrix}
\begin{pmatrix}
2 & 1 & 3 \\
2 & 3 & 4 \\
1 & 2 & 1
\end{pmatrix}
\begin{pmatrix}
1 & 1 & 1 \\
0 & 1 & 1 \\
0 & 0 & 1
\end{pmatrix}
=
\begin{pmatrix}
2 & 3 & 6 \\
4 & 8 & 15 \\
5 & 11 & 19
\end{pmatrix}.
$$

So in $K'$ the covariant components of $A$ are $A'_{ik}$ given by this new matrix.

### Step 3: Metric Tensor and Raised Indices

The new basis vectors $\{e_{i}\}$ are not orthonormal, so the metric tensor in $K'$ is nontrivial:

$$
G = [g_{ik}] = [e_{i}\cdot e_{k}] =
\begin{pmatrix}
2 & -1 & 0 \\
-1 & 2 & -1 \\
0 & -1 & 1
\end{pmatrix}.
$$

This matrix is symmetric and invertible, and its inverse is $[g^{ik}]$.

To get the contravariant components from the covariant ones, we use $A'^{ik} = g^{i\ell} g^{km} A'_{\ell m}$. At the matrix level this becomes

$$
[A'^{ik}] = G^{-1} A' G^{-T},
$$

And in this particular example the slides show that it suffices to compute

$$
[A'^{ik}] = G A' G^{T}
$$

Because here $G$ is built according to that convention. Similarly,

$$
[A'^{\;\;k}_{i}] = A' G^{T} = A' G,\qquad
[A'^{i}_{\;\;k}] = G A'.
$$

The takeaway is that once we have $A'$ and the metric $G$, we can obtain all other index placements by matrix multiplications with $G$ and $G^{-1}$.

## Pre-Lecture Notes from Mth3008 Lecture Notes 11.pdf|University Notes

- Recap of local coordinate transformations for vectors: **dual basis** construction, covariant vs contravariant components, transformation rules, and the role of the **metric tensor** $g_{ik}$ and $g^{ik}$.
- In a generalised (non-Cartesian) coordinate system, a **first-rank tensor** is determined by either its three covariant components $A_{i}$ or its three contravariant components $A^{i}$, with $A_{i} = g_{ik}A^{k}$ and $A^{i} = g^{ik}A_{k}$.
- For **second-rank tensor**s, we track four types of components: covariant $A_{ik}$, contravariant $A^{ik}$, and mixed $A^{\;\;k}_{i}$, $A^{i}_{\;\;k}$, each with its own transformation law under basis change.
- The metric tensor $g_{ik}$ and its inverse $g^{ik}$ give explicit formulae relating these components; contractions such as $A_{ijk}B^{k}$ can raise or lower the order while preserving tensor character, but sums like $A_{i}+B^{i}$ usually break tensorial transformation rules.
- Practical recipes: compute new covariant components via $A' = L A L^{T}$, then use the metric $G=[g_{ik}]$ to raise and lower indices and build contravariant or mixed components. Next time we focus on associated tensors, deeper properties of the metric, and higher-order tensors in generalised coordinates.
