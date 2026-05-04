# MTH3008 Lecture 20

> [!quote]
> ...

We've completed all seven chapters of the course. Today is a synthesis revision: we collect the headline results of Chapters 1-4 (suffix notation, Kronecker delta, alternating tensor, vector differential operators, local coordinate transformations, and tensors in orthogonal Cartesian systems), and work through two assessment-style problems - one from a past coursework, one from a past portfolio test - to consolidate the techniques.

## Suffix Notation, Kronecker Delta, and Alternating Tensor

### Vector vs. Suffix Notation

Suffix notation is **local** - it refers to a single component of a tensor. Vector notation is **global** - it refers to the whole object.

| Object | Vector notation | Suffix notation |
|---|---|---|
| Vector | $\mathbf{v}=(v_{1},v_{2},v_{3})$ | $v_{i}$ |
| Scalar multiple | $\lambda\mathbf{v}=(\lambda v_{1},\lambda v_{2},\lambda v_{3})$ | $\lambda v_{i}$ |

A **free index** appears exactly once in each term and labels a component (e.g. $v_{i}$ - three values $v_{1},v_{2},v_{3}$). A **dummy index** appears exactly twice in a term and indicates summation under the Einstein convention. The dot product is the canonical example:

$$
\mathbf{a}\cdot\mathbf{b}=a_{1}b_{1}+a_{2}b_{2}+a_{3}b_{3}=\sum_{i=1}^{3}a_{i}b_{i}=a_{i}b_{i}.
$$

### [[Kronecker Delta]]

$$
\delta_{ij}=\begin{cases}1&\text{if }i=j\\ 0&\text{if }i\neq j.\end{cases}
$$

Key properties:

- **Substitution tensor:** $\delta_{ij}a_{j}=a_{i}$ (the repeated index gets "swallowed"). Likewise $\delta_{ji}a_{i}=a_{j}$.
- **Dot product via $\delta$:** $\mathbf{a}\cdot\mathbf{b}=\delta_{ij}a_{i}b_{j}$.

### [[Alternating Tensor]]

$$
\epsilon_{ijk}=\begin{cases}0 & \text{if any of }i,j,k\text{ are equal}\\ +1 & \text{if }(i,j,k)\in\{(1,2,3),(2,3,1),(3,1,2)\}\\ -1 & \text{if }(i,j,k)\in\{(1,3,2),(2,1,3),(3,2,1)\}.\end{cases}
$$

Symmetries:

- **Cyclic:** $\epsilon_{ijk}=\epsilon_{jki}=\epsilon_{kij}$.
- **Antisymmetric on swap:** $\epsilon_{ijk}=-\epsilon_{jik}$ (and similarly for any other index swap).

Applications:

$$
(\mathbf{a}\times\mathbf{b})_{i}=\epsilon_{ijk}a_{j}b_{k},\qquad |M|=\epsilon_{ijk}M_{1i}M_{2j}M_{3k}=\epsilon_{ijk}M_{i1}M_{j2}M_{k3},\qquad \mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})=\epsilon_{ijk}a_{i}b_{j}c_{k}.
$$

### Practice: 2023-24 Coursework

> [!question] Coursework 23-24
> Let $\mathbf{a},\mathbf{b},\mathbf{c},\mathbf{d}$ be vectors. Use suffix notation to show
> $$
> ((\mathbf{a}\times\mathbf{b})\times\mathbf{c})\cdot\mathbf{d}=-(\mathbf{a}\cdot\mathbf{d})(\mathbf{b}\cdot\mathbf{c})+(\mathbf{a}\cdot\mathbf{c})(\mathbf{b}\cdot\mathbf{d}).
> $$

**Solution.** Write $\mathbf{u}=\mathbf{a}\times\mathbf{b}$, so $u_{m}=\epsilon_{mpq}a_{p}b_{q}$. Then $(\mathbf{u}\times\mathbf{c})_{i}=\epsilon_{imn}u_{m}c_{n}=\epsilon_{imn}\epsilon_{mpq}a_{p}b_{q}c_{n}$, and contracting with $\mathbf{d}$:

$$
((\mathbf{a}\times\mathbf{b})\times\mathbf{c})\cdot\mathbf{d}=\epsilon_{imn}\epsilon_{mpq}a_{p}b_{q}c_{n}d_{i}.
$$

Using the cyclic symmetry $\epsilon_{imn}=-\epsilon_{min}$, then applying the **$\epsilon$-$\delta$ identity** $\epsilon_{min}\epsilon_{mpq}=\delta_{ip}\delta_{nq}-\delta_{iq}\delta_{np}$:

$$
\epsilon_{imn}\epsilon_{mpq}=-(\delta_{ip}\delta_{nq}-\delta_{iq}\delta_{np})=\delta_{iq}\delta_{np}-\delta_{ip}\delta_{nq}.
$$

So

$$
((\mathbf{a}\times\mathbf{b})\times\mathbf{c})\cdot\mathbf{d}=(\delta_{iq}\delta_{np}-\delta_{ip}\delta_{nq})a_{p}b_{q}c_{n}d_{i}=a_{n}b_{i}c_{n}d_{i}-a_{i}b_{n}c_{n}d_{i}.
$$

Recognising the dot products: $a_{n}c_{n}=\mathbf{a}\cdot\mathbf{c}$, $b_{i}d_{i}=\mathbf{b}\cdot\mathbf{d}$, $a_{i}d_{i}=\mathbf{a}\cdot\mathbf{d}$, $b_{n}c_{n}=\mathbf{b}\cdot\mathbf{c}$:

$$
\boxed{((\mathbf{a}\times\mathbf{b})\times\mathbf{c})\cdot\mathbf{d}=(\mathbf{a}\cdot\mathbf{c})(\mathbf{b}\cdot\mathbf{d})-(\mathbf{a}\cdot\mathbf{d})(\mathbf{b}\cdot\mathbf{c}).}
$$

## Vector Differential Operators

The standard trio in Cartesian coordinates:

$$
[\nabla f]_{i}=\frac{\partial f}{\partial x_{i}},\qquad \nabla\cdot\mathbf{u}=\frac{\partial u_{j}}{\partial x_{j}},\qquad [\nabla\times\mathbf{u}]_{i}=\epsilon_{ijk}\frac{\partial u_{k}}{\partial x_{j}}.
$$

> [!note] Compact derivative shorthand
> Many calculations use $\partial_{j}=\partial/\partial x_{j}$. Then divergence is $\partial_{j}u_{j}$ and curl is $\epsilon_{ijk}\partial_{j}u_{k}$.

### Position Vector

Let $\mathbf{r}=(x_{1},x_{2},x_{3})$ with magnitude $r=|\mathbf{r}|=\sqrt{x_{1}^{2}+x_{2}^{2}+x_{3}^{2}}$. The standard results are:

$$
\nabla r=\frac{\mathbf{r}}{r},\qquad \nabla\cdot\mathbf{r}=3,\qquad \nabla\times\mathbf{r}=\mathbf{0}.
$$

These are easy to derive in suffix notation:

- **Gradient.** $\partial r/\partial x_{i}=x_{i}/r$, since $r^{2}=x_{j}x_{j}$ gives $2r(\partial r/\partial x_{i})=2x_{i}$.
- **Divergence.** $\partial x_{j}/\partial x_{j}=\delta_{jj}=3$.
- **Curl.** $\epsilon_{ijk}\partial_{j}x_{k}=\epsilon_{ijk}\delta_{jk}=0$ (sum of an antisymmetric and symmetric tensor).

## Local Coordinate Transformation

### Bases and Coordinate Systems

A **basis** $\mathbf{v}_{1},\mathbf{v}_{2},\mathbf{v}_{3}$ is a set of vectors that is

- **linearly independent:** the only $\lambda_{1}\mathbf{v}_{1}+\lambda_{2}\mathbf{v}_{2}+\lambda_{3}\mathbf{v}_{3}=\mathbf{0}$ has $\lambda_{1}=\lambda_{2}=\lambda_{3}=0$;
- **spanning:** every vector $\mathbf{v}$ is some linear combination $\mu_{1}\mathbf{v}_{1}+\mu_{2}\mathbf{v}_{2}+\mu_{3}\mathbf{v}_{3}$.

A coordinate system is **orthogonal** if $\mathbf{v}_{i}\cdot\mathbf{v}_{j}=0$ whenever $i\neq j$. It is **orthonormal** if additionally $|\mathbf{v}_{i}|=1$ for all $i$. The standard Cartesian basis $\hat{\mathbf{i}}=(1,0,0),\hat{\mathbf{j}}=(0,1,0),\hat{\mathbf{k}}=(0,0,1)$ is the canonical orthonormal basis.

### [[Coordinate Transformation Matrix]]

Switching between two coordinate systems with bases $\mathbf{e}_{1},\mathbf{e}_{2},\mathbf{e}_{3}$ (for $(x_{1},x_{2},x_{3})$) and $\mathbf{e}'_{1},\mathbf{e}'_{2},\mathbf{e}'_{3}$ (for $(x'_{1},x'_{2},x'_{3})$) is governed by the matrix

$$
\boxed{L_{ij}=\mathbf{e}'_{i}\cdot\mathbf{e}_{j}.}
$$

Component-wise, $x'_{i}=L_{ij}x_{j}$, i.e. coordinates transform via $L$.

> [!note] Properties of $L$
> - $L_{ij}$ equals the cosine of the angle between $\mathbf{e}'_{i}$ and $\mathbf{e}_{j}$.
> - For two **orthonormal** bases, $L$ is **orthogonal**: $L^{T}L=L L^{T}=I$. Equivalently, $L_{ij}L_{kj}=\delta_{ik}=L_{ji}L_{jk}$.
> - The inverse transformation is $x_{i}=L_{ji}x'_{j}$, so $\partial x'_{i}/\partial x_{j}=L_{ij}$ and $\partial x_{i}/\partial x'_{j}=L_{ji}$ (see [[Jacobian]]).

### Example: Constructing $L$

> [!example]
> Let $K$ be Cartesian with orthonormal basis $\mathbf{i}_{1},\mathbf{i}_{2},\mathbf{i}_{3}$, and let $K'$ have basis
> $$
> \mathbf{e}_{1}=\mathbf{i}_{1}+\mathbf{i}_{2}+\mathbf{i}_{3},\quad \mathbf{e}_{2}=2\mathbf{i}_{2},\quad \mathbf{e}_{3}=\mathbf{i}_{1}+3\mathbf{i}_{2}.
> $$
> Find the rotation matrix $L=[L_{ij}]$.

**Method 1 (read off coefficients).** Since $\mathbf{i}_{1},\mathbf{i}_{2},\mathbf{i}_{3}$ is the Cartesian basis,

$$
\begin{pmatrix}\mathbf{e}_{1}\\\mathbf{e}_{2}\\\mathbf{e}_{3}\end{pmatrix}=\begin{pmatrix}1&1&1\\0&2&0\\1&3&0\end{pmatrix}\begin{pmatrix}\mathbf{i}_{1}\\\mathbf{i}_{2}\\\mathbf{i}_{3}\end{pmatrix}\implies L=\begin{pmatrix}1&1&1\\0&2&0\\1&3&0\end{pmatrix}.
$$

**Method 2 (definition).** Compute each $L_{ij}=\mathbf{e}_{i}\cdot\mathbf{i}_{j}$:

$$
L_{11}=1,\;L_{12}=1,\;L_{13}=1,\qquad L_{21}=0,\;L_{22}=2,\;L_{23}=0,\qquad L_{31}=1,\;L_{32}=3,\;L_{33}=0.
$$

> [!warning]
> The basis $K'$ here is **not orthonormal** (e.g. $|\mathbf{e}_{1}|=\sqrt{3}\neq 1$, and $\mathbf{e}_{1}\cdot\mathbf{e}_{3}=4\neq 0$), so the resulting $L$ is **not** an orthogonal matrix. The "$L^{T}L=I$" property assumes a rotation between two **orthonormal** bases. The two methods above still give the correct change-of-basis matrix, but the orthogonality identity does not hold here.

## Tensors in Orthogonal (Cartesian) Coordinates

### Formal Definition of a Vector

A quantity $v_{i}$ is a **vector** if its components transform under rotation as

$$
\boxed{v'_{i}=L_{ij}v_{j}.}
$$

This is the **transformation rule of a vector**. Together with $L^{T}=L^{-1}$, it gives the orthogonality identity

$$
L_{ij}L_{kj}=\delta_{ik}=L_{ji}L_{jk}.
$$

See also [[Basis Transformation]].

### [[Tensor Transformation Rule]]

A quantity is a **tensor** if **each free index** transforms according to the vector rule. Examples:

- Rank 2: $T'_{ij}=L_{im}L_{jn}T_{mn}$
- Rank 3: $T'_{ijk}=L_{im}L_{jn}L_{kp}T_{mnp}$
- Rank 4: $T'_{ijk\ell}=L_{im}L_{jn}L_{kp}L_{\ell q}T_{mnpq}$

> [!important] Definition
> The **[[rank]]** (or **order**) of a tensor is the number of free indices.

### Practice: 2023-24 Portfolio Test

> [!question] Portfolio Test 23-24
> Suppose $T_{ijk\ell m}$ is a rank-five tensor. Using the formal definition (the transformation rule), show that $T_{ijkjk}$ is a rank-one tensor.

**Solution.** Apply the rank-five rule:

$$
T'_{ijk\ell m}=L_{ip}L_{jq}L_{kr}L_{\ell s}L_{mt}\,T_{pqrst}.
$$

Setting $\ell=j$ and $m=k$ on both sides (i.e. contracting the second-and-fourth and third-and-fifth indices),

$$
T'_{ijkjk}=L_{ip}L_{jq}L_{kr}L_{js}L_{kt}\,T_{pqrst}.
$$

Group the $L$'s with shared dummy indices: $L_{jq}L_{js}$ and $L_{kr}L_{kt}$. By the orthogonality identity,

$$
L_{jq}L_{js}=\delta_{qs},\qquad L_{kr}L_{kt}=\delta_{rt}.
$$

Substituting,

$$
T'_{ijkjk}=L_{ip}\,\delta_{qs}\delta_{rt}\,T_{pqrst}=L_{ip}\,T_{pqrqr}.
$$

Defining $S_{p}=T_{pqrqr}$ (the contracted object on the right), we have

$$
\boxed{T'_{ijkjk}=L_{ip}S_{p}=L_{ip}\,T_{pqrqr}.}
$$

This is exactly the rank-one transformation rule. So $T_{ijkjk}$ is a rank-one tensor (a vector). $\blacksquare$

> [!note] Why this works
> Each pair of contracted indices contributes a factor $L\cdot L^{T}=I$, removing two free indices and two factors of $L$. A rank-$n$ tensor with $p$ contracted index-pairs contracts down to a rank-$(n-2p)$ tensor. Here $n=5,\;p=2$, so the result has rank $5-4=1$.

## Where We Came From

This lecture covered the foundational mechanics of Chapters 1-4. The course's natural progression from here:

- **Chapter 5** (lectures 7-10): dual basis $\mathbf{e}^{i}$, [[Covariant and Contravariant Components]] of vectors and second-rank tensors, the [[Metric Tensor]] $g_{ij}$, [[Quotient Rule]].
- **Chapter 6** (lectures 11-14): tensors in generalised (curvilinear) coordinates, [[Symmetry and Antisymmetry]], tensor algebra ([[Tensor Addition]], [[Outer Product]], [[Contraction]]).
- **Chapter 7** (lectures 15-19): [[Local Basis]], [[Covariant Differentiation]], [[Christoffel Symbols]], [[Ricci's Theorem]], [[Riemann-Christoffel Tensor]], [[Ricci Tensor]].

Lectures 21-22 (if delivered) continue the revision through these later chapters; the final exam covers the whole course with emphasis on Chapters 5-7.

---

## Pre-Lecture Notes from [[mth3008 lecture notes 20.pdf]]

- **Chapters 1-4 revision** - single sweep through the foundational notation and tensors in Cartesian systems
- **Suffix notation:** local (one component) vs. vector notation (whole object); free vs. dummy indices; Einstein summation
- **Kronecker delta** $\delta_{ij}$ as substitution tensor: $\delta_{ij}a_{j}=a_{i}$; dot product $\mathbf{a}\cdot\mathbf{b}=\delta_{ij}a_{i}b_{j}$
- **Alternating tensor** $\epsilon_{ijk}$: cyclic invariant, sign-flips on swap; cross product $(\mathbf{a}\times\mathbf{b})_{i}=\epsilon_{ijk}a_{j}b_{k}$, determinant, scalar triple product
- **$\epsilon$-$\delta$ identity:** $\epsilon_{ijk}\epsilon_{ipq}=\delta_{jp}\delta_{kq}-\delta_{jq}\delta_{kp}$, the workhorse of suffix-notation algebra (Coursework 23-24)
- **Differential operators:** gradient $[\nabla f]_{i}=\partial_{i}f$, divergence $\partial_{j}u_{j}$, curl $\epsilon_{ijk}\partial_{j}u_{k}$; standard position-vector results $\nabla r=\mathbf{r}/r$, $\nabla\cdot\mathbf{r}=3$, $\nabla\times\mathbf{r}=\mathbf{0}$
- **Coordinate systems:** basis = linearly independent + spanning; orthogonal vs. orthonormal
- **Transformation matrix** $L_{ij}=\mathbf{e}'_{i}\cdot\mathbf{e}_{j}$; orthogonality $L^{T}L=I$ (assumes orthonormal bases), equivalently $L_{ij}L_{kj}=\delta_{ik}$; coordinates transform via $x'_{i}=L_{ij}x_{j}$
- **Worked example:** transformation matrix between Cartesian $\mathbf{i}_{1,2,3}$ and a general (non-orthonormal) basis - computed two ways, by reading off coefficients and by definition
- **Vector definition (formal):** quantity with $v'_{i}=L_{ij}v_{j}$
- **Tensor definition (formal):** each free index obeys the vector rule; rank = number of free indices; rank-$n$ tensor with $p$ contracted index-pairs becomes rank-$(n-2p)$ (Portfolio Test 23-24)
- **Next lecture:** Chapter 5 revision - dual basis, covariant/contravariant components, tensors in generalised coordinates, symmetries
