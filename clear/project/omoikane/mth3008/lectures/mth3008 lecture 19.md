# MTH3008 Lecture 19

> [!quote]
> ...

Last time we introduced the [[Riemann-Christoffel Tensor]] and showed that a space is Euclidean if and only if $R^{r}_{ijk}=0$. Today we continue Chapter 7 by introducing the [[Ricci Tensor]] - a contraction of the Riemann-Christoffel tensor that gives a simpler curvature summary - and then run a full revision-style example: computing the Ricci tensor in cylindrical coordinates from scratch.

## Reminder: Christoffel Symbols and the Riemann-Christoffel Tensor

We are working in a generalised coordinate system with **[[Local Basis]]** $\mathbf{e}_{1},\mathbf{e}_{2},\mathbf{e}_{3}$ varying from point to point, $\mathbf{e}_{j}=\mathbf{e}_{j}(x^{1},x^{2},x^{3})$, with dual basis $\mathbf{e}^{j}$ and metric coefficients $g_{ij}=\mathbf{e}_{i}\cdot\mathbf{e}_{j}$, $g^{ij}=\mathbf{e}^{i}\cdot\mathbf{e}^{j}$.

The **[[Christoffel Symbols]]** of the first and second kind are computed from the metric as

$$
\Gamma_{ijk}=\tfrac{1}{2}\left(\frac{\partial g_{ij}}{\partial x^{k}}+\frac{\partial g_{ik}}{\partial x^{j}}-\frac{\partial g_{jk}}{\partial x^{i}}\right),\qquad \Gamma^{i}_{\,jk}=\tfrac{1}{2}g^{i\ell}\left(\frac{\partial g_{\ell j}}{\partial x^{k}}+\frac{\partial g_{\ell k}}{\partial x^{j}}-\frac{\partial g_{jk}}{\partial x^{\ell}}\right),
$$

and are symmetric in their last two indices: $\Gamma_{ijk}=\Gamma_{ikj}$ and $\Gamma^{i}_{\,jk}=\Gamma^{i}_{\,kj}$.

By **[[Ricci's Theorem]]** (the metric is covariantly constant), we have the useful identity

$$
\frac{\partial g_{ik}}{\partial x^{\ell}}=\Gamma_{ik\ell}+\Gamma_{ki\ell},
$$

and in **orthogonal coordinates** the off-diagonal version $\Gamma_{ik\ell}=-\Gamma_{ki\ell}$ holds.

The **[[Riemann-Christoffel Tensor]]** is defined by $R^{r}_{ijk}A_{r}=\nabla_{j}\nabla_{k}A_{i}-\nabla_{k}\nabla_{j}A_{i}$, which expands to

$$
\boxed{R^{r}_{ijk}=\frac{\partial \Gamma^{r}_{\,ki}}{\partial x^{j}}-\frac{\partial \Gamma^{r}_{\,ij}}{\partial x^{k}}+\Gamma^{p}_{\,ik}\Gamma^{r}_{\,pj}-\Gamma^{p}_{\,ij}\Gamma^{r}_{\,pk}.}
$$

It is a tensor, and a space is Euclidean iff $R^{r}_{ijk}\equiv 0$.

## The Ricci Tensor

> [!important] Definition
> The **Ricci tensor** is the contraction of the Riemann-Christoffel tensor on the upper index and the second lower index:
> $$
> \boxed{R_{ij}=R^{k}_{\,ikj}.}
> $$

Substituting the explicit formula for the Riemann-Christoffel tensor and renaming indices,

$$
R_{ij}=R^{k}_{\,ikj}=\frac{\partial \Gamma^{k}_{\,ji}}{\partial x^{k}}-\frac{\partial \Gamma^{k}_{\,ik}}{\partial x^{j}}+\Gamma^{p}_{\,ij}\Gamma^{k}_{\,pk}-\Gamma^{p}_{\,ik}\Gamma^{k}_{\,pj}.
$$

> [!note]
> $R_{ij}$ is **symmetric**: $R_{ij}=R_{ji}$. This means the Ricci tensor in 3D has at most six independent components, not nine.

The Ricci tensor inherits tensor character from the Riemann-Christoffel tensor (the contraction of a tensor is a tensor). It is the "summary" curvature object used in **general relativity** - Einstein's field equations relate $R_{ij}$ (and its trace, the scalar curvature) to the stress-energy of matter.

## Goal: Compute the Ricci Tensor in Cylindrical Coordinates

> [!example]
> Consider the three-dimensional coordinate system $(x^{1},x^{2},x^{3})=(\rho,\theta,z)$ with position vector
> $$
> \mathbf{r}=\rho\cos\theta\,\mathbf{i}_{1}+\rho\sin\theta\,\mathbf{i}_{2}+z\,\mathbf{i}_{3}.
> $$
> Find the Ricci tensor $R_{ij}$ in this coordinate system.

This is a single revision exercise that touches every concept of the previous weeks. The strategy works backwards along the dependency chain:

$$
\text{basis vectors }\mathbf{e}_{i}\;\to\; \text{metric }g_{ij},\,g^{ij}\;\to\; \text{Christoffel symbols }\Gamma^{i}_{\,jk}\;\to\; \text{Riemann-Christoffel }R^{r}_{ijk}\;\to\; \text{Ricci }R_{ij}.
$$

### Step 1: Basis Vectors

Using $\mathbf{e}_{i}=\partial \mathbf{r}/\partial x^{i}$:

$$
\mathbf{e}_{1}=\frac{\partial \mathbf{r}}{\partial \rho}=\cos\theta\,\mathbf{i}_{1}+\sin\theta\,\mathbf{i}_{2},
$$

$$
\mathbf{e}_{2}=\frac{\partial \mathbf{r}}{\partial \theta}=-\rho\sin\theta\,\mathbf{i}_{1}+\rho\cos\theta\,\mathbf{i}_{2},
$$

$$
\mathbf{e}_{3}=\frac{\partial \mathbf{r}}{\partial z}=\mathbf{i}_{3}.
$$

### Step 2: Metric Coefficients

**Off-diagonal entries.** Direct dot products give

$$
g_{12}=\mathbf{e}_{1}\cdot\mathbf{e}_{2}=-\rho\cos\theta\sin\theta+\rho\cos\theta\sin\theta=0,
$$

$$
g_{13}=\mathbf{e}_{1}\cdot\mathbf{e}_{3}=0,\qquad g_{23}=\mathbf{e}_{2}\cdot\mathbf{e}_{3}=0.
$$

By symmetry, all $g_{ij}=0$ for $i\neq j$ - the system is **orthogonal**.

**Diagonal entries.**

$$
g_{11}=\mathbf{e}_{1}\cdot\mathbf{e}_{1}=\cos^{2}\theta+\sin^{2}\theta=1,
$$

$$
g_{22}=\mathbf{e}_{2}\cdot\mathbf{e}_{2}=\rho^{2}\sin^{2}\theta+\rho^{2}\cos^{2}\theta=\rho^{2},
$$

$$
g_{33}=\mathbf{e}_{3}\cdot\mathbf{e}_{3}=1.
$$

So the metric matrices are

$$
[g_{ij}]=\begin{pmatrix}1&0&0\\0&\rho^{2}&0\\0&0&1\end{pmatrix},\qquad [g^{ij}]=\begin{pmatrix}1&0&0\\0&1/\rho^{2}&0\\0&0&1\end{pmatrix}.
$$

> [!note]
> $g_{22}=\rho^{2}\neq 1$, so the system is orthogonal but **not orthonormal**. The arc length element is $(ds)^{2}=(d\rho)^{2}+(\rho\,d\theta)^{2}+(dz)^{2}$, with scale factors $h_{1}=1,\;h_{2}=\rho,\;h_{3}=1$.

### Step 3: Christoffel Symbols of the First Kind

The only nonzero metric derivative is $\partial g_{22}/\partial x^{1}=\partial \rho^{2}/\partial \rho=2\rho$. Plugging into

$$
\Gamma_{ijk}=\tfrac{1}{2}\left(\frac{\partial g_{ij}}{\partial x^{k}}+\frac{\partial g_{ik}}{\partial x^{j}}-\frac{\partial g_{jk}}{\partial x^{i}}\right),
$$

the only surviving symbols are those with two indices equal to $2$ and one index equal to $1$. Computing the first one:

$$
\Gamma_{122}=\tfrac{1}{2}\left(\frac{\partial g_{12}}{\partial x^{2}}+\frac{\partial g_{12}}{\partial x^{2}}-\frac{\partial g_{22}}{\partial x^{1}}\right)=-\tfrac{1}{2}(2\rho)=-\rho.
$$

By Ricci's theorem in orthogonal coordinates, $\Gamma_{212}=-\Gamma_{122}=\rho$. By the symmetry of $\Gamma_{ijk}$ in $(j,k)$, $\Gamma_{221}=\Gamma_{212}=\rho$. All other $\Gamma_{ijk}=0$:

$$
\boxed{\Gamma_{122}=-\rho,\qquad \Gamma_{212}=\Gamma_{221}=\rho,\qquad \Gamma_{ijk}=0\;\text{otherwise}.}
$$

### Step 4: Christoffel Symbols of the Second Kind

Using $\Gamma^{i}_{\,jk}=g^{i\ell}\Gamma_{\ell jk}$ with the diagonal $g^{ij}$:

$$
\Gamma^{1}_{\,22}=g^{11}\Gamma_{122}=1\cdot(-\rho)=-\rho,
$$

$$
\Gamma^{2}_{\,12}=\Gamma^{2}_{\,21}=g^{22}\Gamma_{221}=\frac{1}{\rho^{2}}\cdot \rho=\frac{1}{\rho}.
$$

All others vanish:

$$
\boxed{\Gamma^{1}_{\,22}=-\rho,\qquad \Gamma^{2}_{\,12}=\Gamma^{2}_{\,21}=\frac{1}{\rho},\qquad \Gamma^{i}_{\,jk}=0\;\text{otherwise}.}
$$

### Step 5: Sample Riemann-Christoffel Component

To illustrate the calculation, compute $R^{2}_{\,121}$:

$$
R^{2}_{\,121}=\frac{\partial \Gamma^{2}_{\,11}}{\partial x^{2}}-\frac{\partial \Gamma^{2}_{\,12}}{\partial x^{1}}+\Gamma^{p}_{\,11}\Gamma^{2}_{\,p2}-\Gamma^{p}_{\,12}\Gamma^{2}_{\,p1}.
$$

Since $\Gamma^{2}_{\,11}=0$, the first term drops. Among the products, only $p=2$ in the last sum survives ($\Gamma^{2}_{\,12}\Gamma^{2}_{\,21}$), so

$$
R^{2}_{\,121}=-\frac{\partial}{\partial \rho}\left(\frac{1}{\rho}\right)-\frac{1}{\rho}\cdot\frac{1}{\rho}=\frac{1}{\rho^{2}}-\frac{1}{\rho^{2}}=0.
$$

> [!note]
> Cylindrical coordinates parametrise ordinary Euclidean $\mathbb{R}^{3}$, so we expect every Riemann-Christoffel component to vanish. The example confirms this for one representative component, and the same cancellation pattern works for all others.

### Step 6: Ricci Tensor

Since the indices range over $\{1,2,3\}$ but $\Gamma^{3}$ symbols all vanish, the contraction $R_{ij}=R^{k}_{\,ikj}$ collapses to

$$
R_{ij}=R^{1}_{\,i1j}+R^{2}_{\,i2j}.
$$

**The $R^{1}_{\,i1j}$ piece.** Expanding,

$$
R^{1}_{\,i1j}=\frac{\partial \Gamma^{1}_{\,1i}}{\partial x^{j}}-\frac{\partial \Gamma^{1}_{\,ij}}{\partial x^{1}}+\Gamma^{p}_{\,i1}\Gamma^{1}_{\,pj}-\Gamma^{p}_{\,ij}\Gamma^{1}_{\,p1}.
$$

The terms with $\Gamma^{1}_{\,1i}$ and $\Gamma^{1}_{\,p1}$ vanish (no nonzero $\Gamma^{1}$ has a $1$ in the lower indices). What remains is

$$
R^{1}_{\,i1j}=-\frac{\partial \Gamma^{1}_{\,ij}}{\partial x^{1}}+\Gamma^{2}_{\,i1}\Gamma^{1}_{\,2j}.
$$

For $i=1$ or $j=1$, both terms vanish. For $i=j=2$,

$$
R^{1}_{\,212}=-\frac{\partial \Gamma^{1}_{\,22}}{\partial \rho}+\Gamma^{2}_{\,21}\Gamma^{1}_{\,22}=-\frac{\partial(-\rho)}{\partial \rho}+\frac{1}{\rho}(-\rho)=1-1=0.
$$

So $R^{1}_{\,i1j}=0$ for all $i,j$.

**The $R^{2}_{\,i2j}$ piece.** Expanding,

$$
R^{2}_{\,i2j}=\frac{\partial \Gamma^{2}_{\,2i}}{\partial x^{j}}-\frac{\partial \Gamma^{2}_{\,ij}}{\partial x^{2}}+\Gamma^{p}_{\,i2}\Gamma^{2}_{\,pj}-\Gamma^{p}_{\,ij}\Gamma^{2}_{\,p2}.
$$

The term $\partial \Gamma^{2}_{\,ij}/\partial x^{2}=\partial \Gamma^{2}_{\,ij}/\partial \theta=0$ since none of the $\Gamma^{2}$ symbols depend on $\theta$. For $(i,j)\in\{(1,2),(2,1)\}$,

$$
R^{2}_{\,i2j}=\Gamma^{1}_{\,i2}\Gamma^{2}_{\,1j}+\Gamma^{2}_{\,i2}\Gamma^{2}_{\,2j}-\Gamma^{1}_{\,ij}\Gamma^{2}_{\,12}-\Gamma^{2}_{\,ij}\Gamma^{2}_{\,22}=0
$$

(every product term either has a vanishing factor or cancels). The remaining case $i=j=2$:

$$
R^{2}_{\,222}=\Gamma^{1}_{\,22}\Gamma^{2}_{\,12}-\Gamma^{1}_{\,22}\Gamma^{2}_{\,12}=0.
$$

Together with $R^{2}_{\,121}=0$ from Step 5, $R^{2}_{\,i2j}=0$ for all $i,j$.

### Step 7: Conclusion

Adding the two pieces,

$$
\boxed{R_{ij}=R^{1}_{\,i1j}+R^{2}_{\,i2j}=0\quad\text{for all }i,j.}
$$

The Ricci tensor vanishes identically - exactly as expected, since cylindrical coordinates parametrise flat Euclidean $\mathbb{R}^{3}$.

> [!important]
> $R_{ij}=0$ is necessary but **not sufficient** for a space to be Euclidean. The Ricci tensor is a contraction of $R^{r}_{ijk}$ and so loses information; a space can have $R_{ij}=0$ without being flat (Ricci-flat manifolds appear in vacuum solutions of general relativity). The **Riemann-Christoffel tensor**, not the Ricci tensor, is the definitive curvature test.

---

## Pre-Lecture Notes from [[mth3008 lecture notes 19.pdf]]

- **Setup:** generalised coordinates with local basis $\mathbf{e}_{j}(x^{1},x^{2},x^{3})$; Christoffel symbols computed from the metric; symmetric in last two lower indices
- **Reminder:** Ricci's theorem $\Rightarrow$ $\partial g_{ik}/\partial x^{\ell}=\Gamma_{ik\ell}+\Gamma_{ki\ell}$; in orthogonal coordinates $\Gamma_{ik\ell}=-\Gamma_{ki\ell}$
- **Riemann-Christoffel tensor:** $R^{r}_{ijk}A_{r}=\nabla_{j}\nabla_{k}A_{i}-\nabla_{k}\nabla_{j}A_{i}$, coordinate formula $R^{r}_{ijk}=\partial_{j}\Gamma^{r}_{ki}-\partial_{k}\Gamma^{r}_{ij}+\Gamma^{p}_{ik}\Gamma^{r}_{pj}-\Gamma^{p}_{ij}\Gamma^{r}_{pk}$; Euclidean iff $R^{r}_{ijk}=0$
- **Ricci tensor:** definition $R_{ij}=R^{k}_{\,ikj}$ (contraction); coordinate formula $R_{ij}=\partial_{k}\Gamma^{k}_{ji}-\partial_{j}\Gamma^{k}_{ik}+\Gamma^{p}_{ij}\Gamma^{k}_{pk}-\Gamma^{p}_{ik}\Gamma^{k}_{pj}$; symmetric tensor
- **Worked example:** cylindrical coordinates $(\rho,\theta,z)$, position $\mathbf{r}=\rho\cos\theta\,\mathbf{i}_{1}+\rho\sin\theta\,\mathbf{i}_{2}+z\,\mathbf{i}_{3}$
- **Dependency chain:** basis $\mathbf{e}_{i}$ $\to$ metric $g_{ij}$ $\to$ Christoffel $\Gamma^{i}_{jk}$ $\to$ Riemann-Christoffel $R^{r}_{ijk}$ $\to$ Ricci $R_{ij}$
- **Cylindrical results:** orthogonal but not orthonormal; $g_{11}=g_{33}=1$, $g_{22}=\rho^{2}$; only nonzero Christoffel symbols are $\Gamma^{1}_{22}=-\rho$, $\Gamma^{2}_{12}=\Gamma^{2}_{21}=1/\rho$; all $R^{r}_{ijk}=0$, hence $R_{ij}=0$ - confirming Euclidean character
- **Next lecture:** revision of Chapters 1-4 (suffix and vector notation, Kronecker delta, alternating tensor, vector differential operators, local coordinate transformation, tensors in orthogonal Cartesian coordinates)
