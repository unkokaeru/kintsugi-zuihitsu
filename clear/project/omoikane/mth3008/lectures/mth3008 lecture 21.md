# MTH3008 Lecture 21

> [!quote]
> ...

Continuing the revision sweep from [[mth3008 lecture 20|Lecture 20]] (Chapters 1-4): today consolidates Chapter 5 (dual bases, covariant/contravariant components of vectors and second-rank tensors), Chapter 6 (tensors in generalised coordinate systems and symmetries) on a worked example. The unifying technique is **building the dual basis from cross products**, then reading off components by dotting with the appropriate basis. Tensor algebra, the metric tensor & arc length, Christoffel symbols, Ricci's theorem, and the Riemann-Christoffel tensor are deferred to lecture 22.

## Generalised Coordinate Systems

A **generalised coordinate system** does not necessarily have an orthogonal basis. Switching between two such systems is more involved than rotating an orthonormal frame - rather than a single rotation matrix $L$ with $L^{T}=L^{-1}$, we now need separate rules for covariant and contravariant components. The starting point is the **dual basis**.

## [[Local Basis|Dual Bases]]

> [!important] Definition
> Two bases $\mathbf{e}_{1},\mathbf{e}_{2},\mathbf{e}_{3}$ and $\mathbf{e}^{1},\mathbf{e}^{2},\mathbf{e}^{3}$ are **dual** if
> $$
> \mathbf{e}_{i}\cdot\mathbf{e}^{k}=\delta_{i}^{k}=\begin{cases}1&i=k\\ 0&i\neq k.\end{cases}
> $$

### Method of Dual Basis

Given the original basis $\mathbf{e}_{i}$, the dual basis is obtained from cross products:

$$
\boxed{\mathbf{e}^{i}=\frac{\mathbf{e}_{j}\times\mathbf{e}_{k}}{\mathbf{e}_{i}\cdot(\mathbf{e}_{j}\times\mathbf{e}_{k})}=\frac{\mathbf{e}_{j}\times\mathbf{e}_{k}}{V},}
$$

where $(i,j,k)$ is a cyclic permutation of $(1,2,3)$ and $V=\mathbf{e}_{1}\cdot(\mathbf{e}_{2}\times\mathbf{e}_{3})$ is the **volume of the parallelepiped** spanned by $\mathbf{e}_{1},\mathbf{e}_{2},\mathbf{e}_{3}$. The reverse formula $\mathbf{e}_{i}=(\mathbf{e}^{j}\times\mathbf{e}^{k})/V'$ recovers the original basis from its dual.

### Example: Constructing the Dual Basis

> [!example]
> Let $K$ be Cartesian with orthonormal basis $\mathbf{i}_{1},\mathbf{i}_{2},\mathbf{i}_{3}$, and $K'$ have basis
> $$
> \mathbf{e}_{1}=2\mathbf{i}_{1}+2\mathbf{i}_{2}+\mathbf{i}_{3},\quad \mathbf{e}_{2}=\mathbf{i}_{1}+\mathbf{i}_{2},\quad \mathbf{e}_{3}=\mathbf{i}_{1}+2\mathbf{i}_{2}+4\mathbf{i}_{3}.
> $$
> Find the dual basis $\mathbf{e}^{i}$.

**Cross products.**

$$
\mathbf{e}_{2}\times\mathbf{e}_{3}=(4,-4,1)^{T},\qquad \mathbf{e}_{3}\times\mathbf{e}_{1}=(-6,7,-2)^{T},\qquad \mathbf{e}_{1}\times\mathbf{e}_{2}=(-1,1,0)^{T}.
$$

**Volume.** $V=\mathbf{e}_{3}\cdot(\mathbf{e}_{1}\times\mathbf{e}_{2})=(1,2,4)\cdot(-1,1,0)=-1+2+0=1$.

**Dual basis vectors.**

$$
\boxed{\mathbf{e}^{1}=(4,-4,1)^{T},\qquad \mathbf{e}^{2}=(-6,7,-2)^{T},\qquad \mathbf{e}^{3}=(-1,1,0)^{T}.}
$$

## [[Covariant and Contravariant Components]] of a Vector

### Two Expansions

A vector $\mathbf{A}$ has **two natural expansions** - one against each basis:

$$
\mathbf{A}=A^{i}\mathbf{e}_{i}\qquad\text{(contravariant components, summed against }\mathbf{e}_{i}),
$$

$$
\mathbf{A}=A_{i}\mathbf{e}^{i}\qquad\text{(covariant components, summed against }\mathbf{e}^{i}).
$$

The placement of the index encodes the basis: **upper index** $\leftrightarrow$ original basis $\mathbf{e}_{i}$ (contravariant), **lower index** $\leftrightarrow$ dual basis $\mathbf{e}^{i}$ (covariant).

> [!note] Computing components
> Dotting both expansions against $\mathbf{e}_{i}$ or $\mathbf{e}^{i}$ and using duality $\mathbf{e}_{i}\cdot\mathbf{e}^{k}=\delta_{i}^{k}$:
> $$
> A_{i}=\mathbf{A}\cdot\mathbf{e}_{i},\qquad A^{i}=\mathbf{A}\cdot\mathbf{e}^{i}.
> $$

### Example: Components of $\mathbf{J}=(2,-1,0)^{T}$

**Covariant components** $J_{i}=\mathbf{J}\cdot\mathbf{e}_{i}$:

$$
J_{1}=(2,-1,0)\cdot(2,2,1)=2,\quad J_{2}=(2,-1,0)\cdot(1,1,0)=1,\quad J_{3}=(2,-1,0)\cdot(1,2,4)=0.
$$

**Contravariant components** $J^{i}=\mathbf{J}\cdot\mathbf{e}^{i}$:

$$
J^{1}=(2,-1,0)\cdot(4,-4,1)=12,\quad J^{2}=(2,-1,0)\cdot(-6,7,-2)=-19,\quad J^{3}=(2,-1,0)\cdot(-1,1,0)=-3.
$$

**Verification.** Both expansions reproduce $\mathbf{J}$:

$$
2\mathbf{e}^{1}+\mathbf{e}^{2}+0\mathbf{e}^{3}=2(4,-4,1)+(-6,7,-2)=(2,-1,0)=\mathbf{J}.\checkmark
$$

$$
12\mathbf{e}_{1}-19\mathbf{e}_{2}-3\mathbf{e}_{3}=(24,24,12)+(-19,-19,0)+(-3,-6,-12)=(2,-1,0)=\mathbf{J}.\checkmark
$$

### Transformation Rule

> [!important] Transformation matrix in generalised coordinates
> $$
> L^{k}_{i'}=\mathbf{e}'_{i}\cdot\mathbf{e}^{k},\qquad L^{i'}_{j}=\mathbf{e}_{j}\cdot\mathbf{e}'^{i}.
> $$

The components of $\mathbf{A}$ transform between systems via:

$$
\boxed{A'_{i}=L^{j}_{i'}A_{j}\quad\text{(covariant)},\qquad A'^{i}=L^{i'}_{j}A^{j}\quad\text{(contravariant)}.}
$$

> [!note] Cartesian special case
> When both bases are orthonormal, $\mathbf{e}^{k}=\mathbf{e}_{k}$ and $\mathbf{e}'^{i}=\mathbf{e}'_{i}$, so $L^{k}_{i'}=L^{i'}_{k}=L_{ik}$ collapses to the single rotation matrix from [[mth3008 lecture 6]].

### Raising and Lowering with the [[Metric Tensor]]

Within a single coordinate system, covariant and contravariant components are linked by the metric:

$$
\boxed{A_{i}=g_{ik}A^{k},\qquad A^{i}=g^{ik}A_{k},}
$$

where

$$
g_{ik}=g_{ki}=\mathbf{e}_{i}\cdot\mathbf{e}_{k},\qquad g^{ik}=g^{ki}=\mathbf{e}^{i}\cdot\mathbf{e}^{k}.
$$

So $g_{ik}$ **lowers** an index and $g^{ik}$ **raises** one - see [[Index Raising and Lowering]].

## Covariant and Contravariant Components of a Second-Rank Tensor

### The Four Flavours

A second-rank tensor has [[Mixed Components|four kinds of components]]:

- **covariant** $A_{ik}$,
- **contravariant** $A^{ik}$,
- **mixed** $A^{\cdot k}_{i}$ and $A^{i}_{\cdot k}$.

### Transformation Rules

Each free index transforms by one factor of $L$, with the position of the index dictating which $L$ to use:

$$
A'_{ik}=L^{\ell}_{i'}L^{m}_{k'}A_{\ell m},\qquad A'^{ik}=L^{i'}_{\ell}L^{k'}_{m}A^{\ell m},
$$

$$
A'^{\cdot k}_{i}=L^{\ell}_{i'}L^{k'}_{m}A^{\cdot m}_{\ell},\qquad A'^{i}_{\cdot k}=L^{i'}_{\ell}L^{m}_{k'}A^{\ell}_{\cdot m}.
$$

### Matrix Form

A clever rewrite turns the index-laden formula into a **matrix product**. For the covariant case:

$$
A'_{ik}=L^{\ell}_{i'}L^{m}_{k'}A_{\ell m}=L^{\ell}_{i'}A_{\ell m}(L^{T})^{k'}_{m}=(L\,A\,L^{T})_{ik}.
$$

So $A'=L A L^{T}$. The same trick works for $G=[g^{ik}]$ raising/lowering:

$$
A'^{ik}=g^{i\ell}g^{km}A'_{\ell m}=(G\,A'\,G^{T})_{ik},\qquad A'^{\cdot k}_{i}=(A'\,G^{T})_{ik},\qquad A'^{i}_{\cdot k}=(G\,A')_{ik}.
$$

### Example: Transforming $[A_{ik}]$

> [!example]
> Continuing with $K'$ from above, take the second-order tensor of $K$ with components
> $$
> [A_{ik}]=[A^{ik}]=[A^{\cdot k}_{i}]=[A^{i}_{\cdot k}]=\begin{pmatrix}1&0&1\\-1&0&0\\0&1&0\end{pmatrix}.
> $$
> Express its covariant components in $K'$.

**Transformation matrix.** Reading off coefficients from $\mathbf{e}_{i}=L_{ij}\mathbf{i}_{j}$:

$$
L=\begin{pmatrix}2&2&1\\1&1&0\\1&2&4\end{pmatrix}.
$$

**Covariant components.** $A'=LAL^{T}$:

$$
A'=\begin{pmatrix}2&2&1\\1&1&0\\1&2&4\end{pmatrix}\begin{pmatrix}1&0&1\\-1&0&0\\0&1&0\end{pmatrix}\begin{pmatrix}2&1&1\\2&1&2\\1&0&4\end{pmatrix}=\begin{pmatrix}0&1&2\\0&0&1\\-2&4&1\end{pmatrix}\begin{pmatrix}2&1&1\\2&1&2\\1&0&4\end{pmatrix}=\begin{pmatrix}4&1&11\\1&0&4\\5&2&14\end{pmatrix}.
$$

**Metric in $K'$.** Using $g^{ik}=\mathbf{e}^{i}\cdot\mathbf{e}^{k}$ with the dual basis from above:

$$
G=[g^{ik}]=\begin{pmatrix}22&-54&-8\\-54&89&13\\-8&13&2\end{pmatrix}.
$$

**Contravariant components.** $A'^{ik}=(G\,A'\,G)_{ik}$:

$$
[A'^{ik}]=\begin{pmatrix}56&-84&-13\\-86&128&20\\-17&26&4\end{pmatrix}.
$$

**Mixed components.**

$$
[A'^{\cdot k}_{i}]=A'\,G=\begin{pmatrix}-10&16&3\\1&-2&0\\-55&90&14\end{pmatrix},\qquad [A'^{i}_{\cdot k}]=G\,A'=\begin{pmatrix}38&17&35\\-62&-28&-56\\-9&-4&-8\end{pmatrix}.
$$

## Tensors in Generalised Coordinate Systems

### Higher-Rank Transformation

The pattern from the rank-1 and rank-2 cases generalises: **each index transforms individually, with the kind of $L$ matching the position of the index**. For a mixed rank-5 tensor:

$$
\boxed{A'^{\cdot\cdot k\ell\cdot}_{ij\cdot\cdot m}=L^{a}_{i'}L^{b}_{j'}L^{k'}_{c}L^{\ell'}_{d}L^{e}_{m'}\,A^{\cdot\cdot cd\cdot}_{ab\cdot\cdot e}.}
$$

> [!note] How to read this
> - **Original (left-side) indices** keep their position.
> - Each $L$ has **one primed index** matching the original tensor index, **one unprimed dummy index** matching the right-side tensor.
> - Lower-position indices use $L^{j}_{i'}$ (covariant rule); upper-position indices use $L^{i'}_{j}$ (contravariant rule).

### Relations Between [[Mixed Components|Components]] of a Second-Rank Tensor

Index raising/lowering with $g_{ik}$, $g^{ik}$ links all four kinds:

$$
A_{ik}=g_{i\ell}g_{km}A^{\ell m}=g_{k\ell}A^{\cdot\ell}_{i}=g_{i\ell}A^{\ell}_{\cdot k},
$$

$$
A^{ik}=g^{i\ell}g^{km}A_{\ell m}=g^{i\ell}A^{\cdot k}_{\ell}=g^{k\ell}A^{i}_{\cdot\ell},
$$

$$
A^{\cdot k}_{i}=g^{k\ell}A_{i\ell}=g_{i\ell}A^{\ell k},\qquad A^{i}_{\cdot k}=g^{i\ell}A_{\ell k}=g_{k\ell}A^{i\ell}.
$$

## [[Symmetry and Antisymmetry|Symmetries]]

### Cartesian Coordinates

In Cartesian (or orthogonal) coordinates, the index position is irrelevant, so symmetry is just an index-swap relation:

> [!important] Definition (Cartesian)
> $T_{ij}$ is **symmetric** if $T_{ij}=T_{ji}$; **antisymmetric** if $T_{ij}=-T_{ji}$.

For higher rank, symmetry/antisymmetry can apply to **any pair** of indices. Example: the [[Kronecker Delta]] is symmetric ($\delta_{ij}=\delta_{ji}$); the [[Alternating Tensor]] is antisymmetric in any pair ($\epsilon_{ijk}=-\epsilon_{jik}$ etc.).

### Generalised Coordinates

In generalised coordinates the index position matters, so symmetry only applies to **pairs of indices in the same position**:

> [!important] Definition (generalised)
> $A^{\cdot\cdot\ell}_{ik}$ is **symmetric in $i,k$** if $A^{\cdot\cdot\ell}_{ik}=A^{\cdot\cdot\ell}_{ki}$.
>
> $B^{ik}_{\cdot\cdot\ell}$ is **antisymmetric in $i,k$** if $B^{ik}_{\cdot\cdot\ell}=-B^{ki}_{\cdot\cdot\ell}$.

You cannot meaningfully ask whether $A^{\cdot k}_{i}$ is symmetric in $i,k$, because the two indices live in different positions and so transform with different $L$'s.

## Where We Came From

This lecture covered the headline mechanics of Chapters 5-6:

- **Chapter 5** (lectures 7-10): dual basis, [[Covariant and Contravariant Components|covariant/contravariant components]] of a vector, [[Metric Tensor|metric tensor]] and raising/lowering, [[Quotient Rule]].
- **Chapter 6** (lectures 11-14): [[Mixed Components|second-rank tensor flavours]], generalised-coordinate tensor transformations, [[Symmetry and Antisymmetry|symmetries]].

Lecture 22 will close out the revision with **tensor algebra** ([[Tensor Addition]], [[Outer Product]], [[Contraction]]), [[Metric Tensor|metric tensor and arc length]], [[Christoffel Symbols]] & [[Ricci's Theorem]], and the [[Riemann-Christoffel Tensor]]. The mock exam will be solved alongside.

> [!tip] Mock Exam
> The mock exam is to be solved **before** lecture 22 - the in-class walkthrough is most useful as a check on attempted work, not as first exposure.

---

## Pre-Lecture Notes from [[mth3008 lecture notes 21.pdf|University Notes]]

- **Chapter 5-6 revision** focusing on dual bases, vector & tensor components in generalised coordinates, and symmetries
- **Generalised coordinate systems**: not necessarily orthogonal; transitioning between them needs more than one rotation matrix
- **Dual basis** $\mathbf{e}^{i}$: defined by $\mathbf{e}_{i}\cdot\mathbf{e}^{k}=\delta_{i}^{k}$; constructed via $\mathbf{e}^{i}=(\mathbf{e}_{j}\times\mathbf{e}_{k})/V$ for cyclic $(i,j,k)$, with $V=\mathbf{e}_{1}\cdot(\mathbf{e}_{2}\times\mathbf{e}_{3})$
- **Worked example**: dual basis for $\mathbf{e}_{1}=2\mathbf{i}_{1}+2\mathbf{i}_{2}+\mathbf{i}_{3},\;\mathbf{e}_{2}=\mathbf{i}_{1}+\mathbf{i}_{2},\;\mathbf{e}_{3}=\mathbf{i}_{1}+2\mathbf{i}_{2}+4\mathbf{i}_{3}$ gives $V=1$ and $\mathbf{e}^{1}=(4,-4,1),\,\mathbf{e}^{2}=(-6,7,-2),\,\mathbf{e}^{3}=(-1,1,0)$
- **Covariant component** $A_{i}=\mathbf{A}\cdot\mathbf{e}_{i}$ (expand against dual basis); **contravariant component** $A^{i}=\mathbf{A}\cdot\mathbf{e}^{i}$ (expand against original basis); index position encodes which basis is used
- **Worked example**: $\mathbf{J}=(2,-1,0)^{T}$ has covariant components $(2,1,0)$ and contravariant components $(12,-19,-3)$; both expansions reproduce $\mathbf{J}$
- **Transformation matrices**: $L^{j}_{i'}=\mathbf{e}'_{i}\cdot\mathbf{e}^{j}$ (covariant rule), $L^{i'}_{j}=\mathbf{e}_{j}\cdot\mathbf{e}'^{i}$ (contravariant rule)
- **Rules**: $A'_{i}=L^{j}_{i'}A_{j}$ for covariant, $A'^{i}=L^{i'}_{j}A^{j}$ for contravariant
- **Raise/lower with metric**: $A_{i}=g_{ik}A^{k}$, $A^{i}=g^{ik}A_{k}$, where $g_{ik}=\mathbf{e}_{i}\cdot\mathbf{e}_{k}$ and $g^{ik}=\mathbf{e}^{i}\cdot\mathbf{e}^{k}$
- **Second-rank tensors**: four flavours $A_{ik}, A^{ik}, A^{\cdot k}_{i}, A^{i}_{\cdot k}$; each transforms by one $L$ per free index according to its position
- **Matrix form** via $A'=LAL^{T}$, $A'^{ik}=(GA'G)_{ik}$, $A'^{\cdot k}_{i}=(A'G)_{ik}$, $A'^{i}_{\cdot k}=(GA')_{ik}$ - turns index gymnastics into 3×3 matrix products
- **Worked example**: a $3\times 3$ tensor in $K$ transformed to $K'$, all four flavours computed by matrix products
- **Higher-rank generalisation**: each index transforms individually with one $L$; new (primed) indices on $L$ go with the original tensor's index positions, dummy (unprimed) indices on $L$ contract with the right-side tensor
- **Symmetries** (Cartesian): $T_{ij}=\pm T_{ji}$; can apply to any pair of indices for higher-rank tensors
- **Symmetries** (generalised): only meaningful for pairs of indices in the **same** position - can't sensibly ask if $A^{\cdot k}_{i}$ is symmetric in $i,k$
- **Mock exam**: to be attempted before lecture 22; class walkthrough only as effective as the prep work
- **Next lecture**: tensor algebra, arc length & metric tensor, Christoffel symbols & Ricci's theorem, Riemann-Christoffel tensor (Chapters 6-7 closeout)
