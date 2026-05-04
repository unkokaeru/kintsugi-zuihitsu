# MTH3008 Weekly Problems 11

> **Original Documents**: [[mth3008 weekly problem sheet 11.pdf|Problem Sheet]] / [[mth3008 weekly problem sheet 11 handwritten solutions.pdf|My Handwritten Solutions]]
>
> **Vibes**: Whole-module revision in five problems. Two warm-ups (rewriting a vector identity in suffix notation; re-deriving $\nabla\times\nabla f=0$); a transformation-rule recipe for an arbitrary mixed rank-5 tensor; a full dual-basis exercise (cross products, components, transformation matrix, and second-rank tensor in the new system); and a 2D coordinate-system grind (basis, metric, arc length, both kinds of Christoffel symbols, three Riemann components). The 2D system in 11.5 is just flat $\mathbb{R}^{2}$ in disguise (set $X=e^{x}\sin\theta$, $Y=e^{x}\cos\theta$), so all Riemann components vanish.
>
> **Used Techniques**:
> - **Suffix-symmetric / antisymmetric contraction**: $\epsilon_{ijk}\partial_{j}\partial_{k}f=0$ since $\epsilon_{ijk}$ is antisymmetric in $j,k$ and $\partial_{j}\partial_{k}$ is symmetric.
> - **Transformation rule slot-by-slot**: each free index gets one $L$, using $L^{j}_{i'}$ for lower-position indices and $L^{i'}_{j}$ for upper-position indices.
> - **Dual basis recipe**: $\mathbf{e}^{i}=(\mathbf{e}_{j}\times\mathbf{e}_{k})/V$ for cyclic $(i,j,k)$, where $V=\mathbf{e}_{1}\cdot(\mathbf{e}_{2}\times\mathbf{e}_{3})$.
> - **Component formulae**: $A_{i}=\mathbf{A}\cdot\mathbf{e}_{i}$ (covariant), $A^{i}=\mathbf{A}\cdot\mathbf{e}^{i}$ (contravariant).
> - **Matrix form of the rank-2 transformation**: $A'_{ik}=L^{\ell}_{i'}L^{m}_{k'}A_{\ell m}$ becomes $A'=LAL^{T}$.
> - **Diagonal metric Christoffel shortcuts**: nonzero first-kind symbols are $\Gamma_{iik}=\Gamma_{iki}=\tfrac{1}{2}\partial_{k}g_{ii}$, $\Gamma_{ijj}=-\tfrac{1}{2}\partial_{i}g_{jj}$, plus the diagonal $\Gamma_{iii}=\tfrac{1}{2}\partial_{i}g_{ii}$.
> - **Riemann antisymmetry**: $R^{r}_{ijk}=-R^{r}_{ikj}$, so $R^{r}_{ijj}=0$ for any $r,i,j$.

---

## 11.1. Vector Equation in Suffix Notation

> [!question]
> Write the vector equation
> $$
> \mathbf{u}+(\mathbf{a}\cdot\mathbf{b})\mathbf{v}=|\mathbf{a}|^{2}(\mathbf{b}\cdot\mathbf{v})\mathbf{a}
> $$
> in suffix notation.

Translate each piece using [[Suffix Notation]] and the [[Kronecker Delta]] / dot-product identity $\mathbf{x}\cdot\mathbf{y}=x_{j}y_{j}$:

- $\mathbf{u}\to u_{i}$ (free index $i$).
- $(\mathbf{a}\cdot\mathbf{b})\mathbf{v}\to (a_{j}b_{j})v_{i}$ - the dot product is a scalar with **dummy** index $j$, multiplying the free $v_{i}$.
- $|\mathbf{a}|^{2}=\mathbf{a}\cdot\mathbf{a}\to a_{k}a_{k}$ - new dummy index $k$ to keep it disjoint from $j$.
- $(\mathbf{b}\cdot\mathbf{v})\mathbf{a}\to (b_{m}v_{m})a_{i}$ - another fresh dummy $m$.

$$
\boxed{u_{i}+(a_{j}b_{j})v_{i}=(a_{k}a_{k})(b_{m}v_{m})a_{i}.}
$$

> [!warning] Use distinct dummies
> Each contracted pair must use a **different** letter from the others. Re-using $j$ for $\mathbf{b}\cdot\mathbf{v}$ on the right would silently force $a_{j}b_{j}=b_{j}v_{j}$, which is nonsense.

---

## 11.2. Curl of a Gradient

> [!question]
> Let $f$ be a scalar field. Using suffix notation, evaluate $\nabla\times(\nabla f)$.

Recall $[\nabla f]_{k}=\partial_{k}f$ and $[\nabla\times\mathbf{u}]_{i}=\epsilon_{ijk}\partial_{j}u_{k}$. Combining:

$$
[\nabla\times(\nabla f)]_{i}=\epsilon_{ijk}\partial_{j}\partial_{k}f.
$$

The mixed partial $\partial_{j}\partial_{k}f=\partial_{k}\partial_{j}f$ is **symmetric** in $j,k$ (Schwarz/Clairaut), while $\epsilon_{ijk}=-\epsilon_{ikj}$ is **antisymmetric** in $j,k$. The contraction of a symmetric and antisymmetric tensor over the same pair vanishes:

$$
\epsilon_{ijk}\partial_{j}\partial_{k}f=\tfrac{1}{2}(\epsilon_{ijk}+\epsilon_{ikj})\partial_{j}\partial_{k}f=0.
$$

$$
\boxed{\nabla\times(\nabla f)=\mathbf{0}.}
$$

> [!note] The sym/antisym argument in one line
> Swap the dummies $j\leftrightarrow k$: $\epsilon_{ijk}\partial_{j}\partial_{k}f=\epsilon_{ikj}\partial_{k}\partial_{j}f=-\epsilon_{ijk}\partial_{j}\partial_{k}f$, so $\epsilon_{ijk}\partial_{j}\partial_{k}f=0$.

---

## 11.3. Transformation Laws

> [!question]
> Write the transformation law for the following tensors.
> (1) A rank-5 tensor in Cartesian coordinates.
> (2) A rank-5 contravariant tensor in generalised coordinates.
> (3) The rank-5 mixed tensor $T^{k\ell\cdot\cdot p}_{\cdot\cdot mn\cdot}$ in generalised coordinates.

The recipe: **one $L$ per free index**, with the kind of $L$ matching the index position.

**(1) Cartesian, rank 5.** Index position is irrelevant; one rotation matrix $L_{ij}$ does everything.

$$
\boxed{T'_{ijk\ell m}=L_{ip}L_{jq}L_{kr}L_{\ell s}L_{mt}\,T_{pqrst}.}
$$

**(2) Contravariant rank 5, generalised.** Each upper index uses $L^{i'}_{j}$:

$$
\boxed{T'^{ijk\ell m}=L^{i'}_{p}L^{j'}_{q}L^{k'}_{r}L^{\ell'}_{s}L^{m'}_{t}\,T^{pqrst}.}
$$

**(3) Mixed rank 5.** $T^{k\ell\cdot\cdot p}_{\cdot\cdot mn\cdot}$ has positions 1,2,5 upper and positions 3,4 lower. Match each:

- Position 1 (upper $k$): $L^{k'}_{a}$.
- Position 2 (upper $\ell$): $L^{\ell'}_{b}$.
- Position 3 (lower $m$): $L^{c}_{m'}$.
- Position 4 (lower $n$): $L^{d}_{n'}$.
- Position 5 (upper $p$): $L^{p'}_{e}$.

$$
\boxed{T'^{k\ell\cdot\cdot p}_{\cdot\cdot mn\cdot}=L^{k'}_{a}L^{\ell'}_{b}L^{c}_{m'}L^{d}_{n'}L^{p'}_{e}\,T^{ab\cdot\cdot e}_{\cdot\cdot cd\cdot}.}
$$

The dummy indices $a,b,c,d,e$ on the original $T$ sit in **the same positions** (1,2 upper, 3,4 lower, 5 upper) as the primed indices on the result.

---

## 11.4. Dual Basis & Tensor Transformation

Let $K$ be Cartesian with orthonormal basis $\mathbf{i}_{1},\mathbf{i}_{2},\mathbf{i}_{3}$ and $K'$ have basis

$$
\mathbf{e}_{1}=\mathbf{i}_{1}+\mathbf{i}_{3},\qquad \mathbf{e}_{2}=\mathbf{i}_{2}-\mathbf{i}_{3},\qquad \mathbf{e}_{3}=\mathbf{i}_{1}-\mathbf{i}_{2}+\mathbf{i}_{3}.
$$

### (1) Dual Basis Vectors

> [!question]
> Compute $\mathbf{e}^{1},\mathbf{e}^{2},\mathbf{e}^{3}$.

**Cross products.**

$$
\mathbf{e}_{2}\times\mathbf{e}_{3}=(0,1,-1)\times(1,-1,1)=\bigl((1)(1)-(-1)(-1),\,(-1)(1)-(0)(1),\,(0)(-1)-(1)(1)\bigr)=(0,-1,-1).
$$

$$
\mathbf{e}_{3}\times\mathbf{e}_{1}=(1,-1,1)\times(1,0,1)=\bigl((-1)(1)-(1)(0),\,(1)(1)-(1)(1),\,(1)(0)-(-1)(1)\bigr)=(-1,0,1).
$$

$$
\mathbf{e}_{1}\times\mathbf{e}_{2}=(1,0,1)\times(0,1,-1)=\bigl((0)(-1)-(1)(1),\,(1)(0)-(1)(-1),\,(1)(1)-(0)(0)\bigr)=(-1,1,1).
$$

**Volume.** $V=\mathbf{e}_{1}\cdot(\mathbf{e}_{2}\times\mathbf{e}_{3})=(1,0,1)\cdot(0,-1,-1)=0+0-1=-1$.

**Dual basis** $\mathbf{e}^{i}=(\mathbf{e}_{j}\times\mathbf{e}_{k})/V$ for cyclic $(i,j,k)$:

$$
\boxed{\mathbf{e}^{1}=(0,1,1)^{T},\qquad \mathbf{e}^{2}=(1,0,-1)^{T},\qquad \mathbf{e}^{3}=(1,-1,-1)^{T}.}
$$

**Check.** $\mathbf{e}_{1}\cdot\mathbf{e}^{1}=(1,0,1)\cdot(0,1,1)=1\checkmark$, $\mathbf{e}_{2}\cdot\mathbf{e}^{2}=(0,1,-1)\cdot(1,0,-1)=1\checkmark$, $\mathbf{e}_{3}\cdot\mathbf{e}^{3}=(1,-1,1)\cdot(1,-1,-1)=1\checkmark$, all off-diagonals zero.

### (2) Covariant Components of $\mathbf{V}=\mathbf{i}_{1}-2\mathbf{i}_{3}$

> [!question]
> Compute the covariant components of $\mathbf{V}=(1,0,-2)^{T}$.

$V_{i}=\mathbf{V}\cdot\mathbf{e}_{i}$:

$$
V_{1}=(1,0,-2)\cdot(1,0,1)=1+0-2=-1,
$$
$$
V_{2}=(1,0,-2)\cdot(0,1,-1)=0+0+2=2,
$$
$$
V_{3}=(1,0,-2)\cdot(1,-1,1)=1+0-2=-1.
$$

$$
\boxed{V_{1}=-1,\qquad V_{2}=2,\qquad V_{3}=-1.}
$$

### (3) Contravariant Components of $\mathbf{V}=\mathbf{i}_{1}-2\mathbf{i}_{3}$

> [!question]
> Compute the contravariant components.

$V^{i}=\mathbf{V}\cdot\mathbf{e}^{i}$:

$$
V^{1}=(1,0,-2)\cdot(0,1,1)=0+0-2=-2,
$$
$$
V^{2}=(1,0,-2)\cdot(1,0,-1)=1+0+2=3,
$$
$$
V^{3}=(1,0,-2)\cdot(1,-1,-1)=1+0+2=3.
$$

$$
\boxed{V^{1}=-2,\qquad V^{2}=3,\qquad V^{3}=3.}
$$

**Sanity check via reconstruction.** $V_{i}\mathbf{e}^{i}=-1(0,1,1)+2(1,0,-1)+(-1)(1,-1,-1)=(2-1,-1+1,-1-2+1)=(1,0,-2)=\mathbf{V}\checkmark$.

### (4) Transformation Matrix

> [!question]
> Find $L=[L^{j}_{i'}]$.

$L^{j}_{i'}=\mathbf{e}'_{i}\cdot\mathbf{e}^{j}$, with $K'$ the primed system. In $K$ Cartesian, $\mathbf{e}^{j}=\mathbf{i}_{j}$, so $L^{j}_{i'}=\mathbf{e}_{i}\cdot\mathbf{i}_{j}$ - i.e. just the components of $\mathbf{e}_{i}$. Reading off:

$$
\boxed{L=\begin{pmatrix}1&0&1\\0&1&-1\\1&-1&1\end{pmatrix}.}
$$

### (5) Covariant Components of $[P_{ik}]$ in $K'$

> [!question]
> Express the covariant components of the rank-2 tensor of $K$ with components
> $$
> [P_{ik}]=[P^{ik}]=[P^{\cdot k}_{i}]=[P^{i}_{\cdot k}]=\begin{pmatrix}0&1&0\\-1&0&-1\\0&0&1\end{pmatrix}
> $$
> in $K'$.

Use the rank-2 transformation $P'_{ik}=L^{\ell}_{i'}L^{m}_{k'}P_{\ell m}=(LPL^{T})_{ik}$.

**Step 1: $LP$.**

$$
LP=\begin{pmatrix}1&0&1\\0&1&-1\\1&-1&1\end{pmatrix}\begin{pmatrix}0&1&0\\-1&0&-1\\0&0&1\end{pmatrix}=\begin{pmatrix}0&1&1\\-1&0&-2\\1&1&2\end{pmatrix}.
$$

**Step 2: $(LP)L^{T}$.** With $L^{T}=L$ (it's symmetric here),

$$
(LP)L^{T}=\begin{pmatrix}0&1&1\\-1&0&-2\\1&1&2\end{pmatrix}\begin{pmatrix}1&0&1\\0&1&-1\\1&-1&1\end{pmatrix}=\begin{pmatrix}1&0&0\\-3&2&-3\\3&-1&2\end{pmatrix}.
$$

$$
\boxed{[P'_{ik}]=\begin{pmatrix}1&0&0\\-3&2&-3\\3&-1&2\end{pmatrix}.}
$$

> [!note] Why $L^{T}=L$ here
> The basis $\mathbf{e}_{1}=(1,0,1),\mathbf{e}_{2}=(0,1,-1),\mathbf{e}_{3}=(1,-1,1)$ produces an $L$ that happens to be symmetric. This is a coincidence of the chosen $\mathbf{e}_{i}$, **not** a general property - $K'$ is non-orthonormal (e.g. $\mathbf{e}_{1}\cdot\mathbf{e}_{1}=2$, $\mathbf{e}_{1}\cdot\mathbf{e}_{2}=-1$), so $L$ is **not** an orthogonal matrix.

---

## 11.5. 2D Coordinate System with $\mathbf{r}=e^{x}\sin\theta\,\mathbf{i}_{1}+e^{x}\cos\theta\,\mathbf{i}_{2}$

Coordinates $(x^{1},x^{2})=(x,\theta)$.

### (1) Basis Vectors

> [!question]
> Compute $\mathbf{e}_{1},\mathbf{e}_{2}$.

[[Local Basis|Local basis]] $\mathbf{e}_{i}=\partial\mathbf{r}/\partial x^{i}$:

$$
\mathbf{e}_{1}=\frac{\partial\mathbf{r}}{\partial x}=e^{x}\sin\theta\,\mathbf{i}_{1}+e^{x}\cos\theta\,\mathbf{i}_{2}=e^{x}(\sin\theta,\cos\theta)^{T},
$$

$$
\mathbf{e}_{2}=\frac{\partial\mathbf{r}}{\partial\theta}=e^{x}\cos\theta\,\mathbf{i}_{1}-e^{x}\sin\theta\,\mathbf{i}_{2}=e^{x}(\cos\theta,-\sin\theta)^{T}.
$$

(The system is two-dimensional - the question's mention of $\mathbf{e}_{3}$ is a typo from a 3D template.)

### (2) [[Metric Tensor|Metric Tensor]]

> [!question]
> Compute $g_{ik}$.

$g_{ik}=\mathbf{e}_{i}\cdot\mathbf{e}_{k}$:

$$
g_{11}=e^{2x}(\sin^{2}\theta+\cos^{2}\theta)=e^{2x},\qquad g_{22}=e^{2x}(\cos^{2}\theta+\sin^{2}\theta)=e^{2x},
$$
$$
g_{12}=g_{21}=e^{2x}(\sin\theta\cos\theta-\cos\theta\sin\theta)=0.
$$

$$
\boxed{[g_{ik}]=e^{2x}\begin{pmatrix}1&0\\0&1\end{pmatrix}=e^{2x}\delta_{ik}.}
$$

So the system is **orthogonal** (off-diagonals zero), with both scale factors equal: $h_{1}=h_{2}=e^{x}$. The induced metric is **conformally flat**.

### (3) Arc Length

> [!question]
> Describe the arc-length element in terms of the metric coefficients.

$$
ds^{2}=g_{ik}\,dx^{i}dx^{k}=g_{11}\,dx^{2}+g_{22}\,d\theta^{2},
$$

$$
\boxed{ds^{2}=e^{2x}\bigl(dx^{2}+d\theta^{2}\bigr).}
$$

### (4) [[Christoffel Symbols|Christoffel Symbols]] of the First Kind

> [!question]
> Determine $\Gamma_{ijk}$.

$\Gamma_{ijk}=\tfrac{1}{2}(\partial_{j}g_{ik}+\partial_{k}g_{ij}-\partial_{i}g_{jk})$.

**Nonzero metric derivatives.** Since $g_{ik}=e^{2x}\delta_{ik}$ depends only on $x=x^{1}$:

$$
\partial_{1}g_{11}=2e^{2x},\qquad \partial_{1}g_{22}=2e^{2x},\qquad \text{all }\partial_{2}g_{ik}=0,\;\partial_{i}g_{12}=0.
$$

**Going through all eight cases** (in 2D, $2^{3}=8$ symbols):

- $\Gamma_{111}=\tfrac{1}{2}\partial_{1}g_{11}=e^{2x}$,
- $\Gamma_{112}=\Gamma_{121}=\tfrac{1}{2}\partial_{2}g_{11}=0$,
- $\Gamma_{122}=-\tfrac{1}{2}\partial_{1}g_{22}=-e^{2x}$,
- $\Gamma_{211}=-\tfrac{1}{2}\partial_{2}g_{11}=0$,
- $\Gamma_{212}=\Gamma_{221}=\tfrac{1}{2}\partial_{1}g_{22}=e^{2x}$,
- $\Gamma_{222}=\tfrac{1}{2}\partial_{2}g_{22}=0$.

$$
\boxed{\Gamma_{111}=e^{2x},\quad \Gamma_{122}=-e^{2x},\quad \Gamma_{212}=\Gamma_{221}=e^{2x},\quad \text{all others }=0.}
$$

### (5) [[Christoffel Symbols|Christoffel Symbols]] of the Second Kind

> [!question]
> Determine $\Gamma^{i}_{jk}$.

For a diagonal metric, $g^{ii}=1/g_{ii}=e^{-2x}$ (no sum), and $\Gamma^{a}_{jk}=g^{ai}\Gamma_{ijk}=g^{aa}\Gamma_{ajk}$. Multiplying the first-kind table by $e^{-2x}$:

$$
\Gamma^{1}_{11}=e^{-2x}\cdot e^{2x}=1,\qquad \Gamma^{1}_{22}=e^{-2x}\cdot(-e^{2x})=-1,
$$

$$
\Gamma^{2}_{12}=\Gamma^{2}_{21}=e^{-2x}\cdot e^{2x}=1.
$$

$$
\boxed{\Gamma^{1}_{11}=1,\quad \Gamma^{1}_{22}=-1,\quad \Gamma^{2}_{12}=\Gamma^{2}_{21}=1,\quad \text{all others }=0.}
$$

### (6) [[Riemann-Christoffel Tensor|Riemann-Christoffel]] Components

> [!question]
> Compute $R^{1}_{111},\,R^{2}_{121},\,R^{1}_{222}$.

**Antisymmetry shortcut.** $R^{r}_{ijk}=-R^{r}_{ikj}$, so any component with the last two indices equal vanishes. Therefore

$$
R^{1}_{111}=0,\qquad R^{1}_{222}=0\qquad\text{(by antisymmetry, $j=k$).}
$$

**Direct computation of $R^{2}_{121}$.** Using

$$
R^{r}_{ijk}=\partial_{j}\Gamma^{r}_{ik}-\partial_{k}\Gamma^{r}_{ij}+\Gamma^{p}_{ik}\Gamma^{r}_{pj}-\Gamma^{p}_{ij}\Gamma^{r}_{pk},
$$

with $r=2,\,i=1,\,j=2,\,k=1$:

- $\partial_{2}\Gamma^{2}_{11}=\partial_{\theta}(0)=0$.
- $-\partial_{1}\Gamma^{2}_{12}=-\partial_{x}(1)=0$.
- $\Gamma^{p}_{11}\Gamma^{2}_{p2}$: $p=1$ gives $\Gamma^{1}_{11}\Gamma^{2}_{12}=1\cdot 1=1$; $p=2$ gives $\Gamma^{2}_{11}\Gamma^{2}_{22}=0$. Sum $=1$.
- $\Gamma^{p}_{12}\Gamma^{2}_{p1}$: $p=1$ gives $\Gamma^{1}_{12}\Gamma^{2}_{11}=0\cdot 0=0$; $p=2$ gives $\Gamma^{2}_{12}\Gamma^{2}_{21}=1\cdot 1=1$. Sum $=1$.

$$
R^{2}_{121}=0-0+1-1=0.
$$

$$
\boxed{R^{1}_{111}=R^{2}_{121}=R^{1}_{222}=0.}
$$

> [!note] Why everything vanishes
> Set $X=e^{x}\sin\theta$, $Y=e^{x}\cos\theta$. Then $X^{2}+Y^{2}=e^{2x}$, so $\mathbf{r}=(X,Y)$ is just flat 2D Euclidean space in disguised coordinates (a logarithmic-polar chart). Smooth and invertible on the open set where $e^{x}\neq 0$ (always true), so the induced metric is **flat** and **all** $R^{r}_{ijk}=0$. Computing one nonzero-looking component (here $R^{2}_{121}$) confirms this.
