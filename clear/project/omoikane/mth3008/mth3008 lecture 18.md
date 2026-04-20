# MTH3008 Lecture 18

> [!quote]
> …

Last time we finished with Ricci's theorem - the covariant derivative of the metric tensor $g_{ik}$ vanishes, giving us the useful identity $\frac{\partial g_{ik}}{\partial x^\ell} = \Gamma_{ik\ell} + \Gamma_{ki\ell}$. Today we push further into Chapter 7 by asking a fundamental geometric question: how do we detect curvature? The answer leads us to the **[[Riemann-Christoffel tensor]]** and, briefly, the **[[Ricci tensor]]**.

## Defining Spaces and Curvature

So far we have worked almost entirely in ordinary **[[Euclidean space]]** $\mathbb{R}^3$, whether in Cartesian or generalised coordinates. But other spaces exist - the surface of a sphere, for instance, is a two-dimensional non-Euclidean space.

The question is: how do we distinguish between different spaces? One answer is **[[curvature]]**:

- Euclidean space has zero curvature,
- the surface of a sphere has positive curvature,
- **[[hyperbolic space]]** has negative curvature.

The goal for today: find a tensorial condition that tells us when a space is Euclidean.

## Partial Vs Covariant Derivatives

Let $\mathbf{A}$ be a vector field with components $A_i(x^1, x^2, x^3)$. Since each $A_i$ is just a function, its partial derivatives always commute:

$$
\frac{\partial}{\partial x^k}\left(\frac{\partial A_i}{\partial x^j}\right) = \frac{\partial}{\partial x^j}\left(\frac{\partial A_i}{\partial x^k}\right).
$$

But a vector field is not merely a collection of component functions - it is a geometric object whose components change under coordinate transformations. The partial derivative $\frac{\partial A_i}{\partial x^j}$ does not transform as a tensor under general coordinate changes.

This is exactly why we need the **[[covariant derivative]]**:

$$
A_{i,j} := \nabla_j A_i = \frac{\partial A_i}{\partial x^j} - \Gamma^k_{ij} A_k.
$$

The partial derivative differentiates the components; the Christoffel symbols correct for the change of basis; the result transforms as a tensor.

> [!note]
> In Euclidean space with Cartesian coordinates, $\Gamma^k_{ij} = 0$, so $\nabla_j A_i = \frac{\partial A_i}{\partial x^j}$. This is why partial and covariant derivatives appear identical in standard vector calculus.

## Non-Commutativity of Second Covariant Derivatives

Second partial derivatives always commute. Second covariant derivatives, written

$$
A_{i,\,kj} := \nabla_k \nabla_j A_i,
$$

do not commute in general:

$$
\nabla_k \nabla_j A_i \neq \nabla_j \nabla_k A_i, \qquad \text{i.e.} \quad A_{i,\,jk} \neq A_{i,\,kj}.
$$

This failure of commutativity is precisely what curvature measures. We will show that $A_{i,jk} - A_{i,kj}$ is a tensor - the Riemann-Christoffel tensor - and that a space is Euclidean if and only if this tensor vanishes.

## The Riemann-Christoffel Tensor

### Definition

We define the **[[Riemann-Christoffel tensor]]** $R^r_{ijk}$ by

$$
\boxed{\nabla_j \nabla_k A_i - \nabla_k \nabla_j A_i = R^r_{ijk} A_r}
$$

The plan: derive a coordinate formula for $R^r_{ijk}$ purely in terms of Christoffel symbols.

### Derivation

Start from the general formula for covariant differentiation of a second-rank covariant tensor:

$$
\nabla_j T_{ik} = \frac{\partial T_{ik}}{\partial x^j} - \Gamma^p_{ij} T_{pk} - \Gamma^p_{kj} T_{ip}.
$$

Apply this to $T_{ik} = \nabla_k A_i$:

$$
\nabla_j \nabla_k A_i = \frac{\partial (\nabla_k A_i)}{\partial x^j} - \Gamma^p_{ij} \nabla_k A_p - \Gamma^p_{kj} \nabla_p A_i.
$$

Now substitute $\nabla_k A_i = \frac{\partial A_i}{\partial x^k} - \Gamma^r_{ki} A_r$ into every occurrence:

$$
\nabla_j \nabla_k A_i = \frac{\partial}{\partial x^j}\left(\frac{\partial A_i}{\partial x^k} - \Gamma^r_{ki} A_r\right) - \Gamma^p_{ij}\left(\frac{\partial A_p}{\partial x^k} - \Gamma^r_{kp} A_r\right) - \Gamma^p_{kj}\left(\frac{\partial A_i}{\partial x^p} - \Gamma^r_{pi} A_r\right).
$$

Expanding fully:

$$
\nabla_j \nabla_k A_i = \frac{\partial^2 A_i}{\partial x^j \partial x^k} - \Gamma^r_{ki}\frac{\partial A_r}{\partial x^j} - A_r \frac{\partial \Gamma^r_{ki}}{\partial x^j} - \Gamma^p_{ij}\frac{\partial A_p}{\partial x^k} - \Gamma^p_{kj}\frac{\partial A_i}{\partial x^p} + \left(\Gamma^p_{ij}\Gamma^r_{kp} + \Gamma^p_{kj}\Gamma^r_{pi}\right)A_r.
$$

Interchanging $j$ and $k$ gives the analogous formula for $\nabla_k \nabla_j A_i$. Now form the difference $\nabla_j \nabla_k A_i - \nabla_k \nabla_j A_i$ and examine three types of terms separately.

**Second derivatives of $A$:** These give $\frac{\partial^2 A_i}{\partial x^j \partial x^k} - \frac{\partial^2 A_i}{\partial x^k \partial x^j} = 0$ by commutativity of partial derivatives.

**First derivatives of $A$:** Collecting the terms involving $\frac{\partial A_r}{\partial x^j}$, $\frac{\partial A_p}{\partial x^k}$, $\frac{\partial A_i}{\partial x^p}$ and their $j \leftrightarrow k$ counterparts, each pair cancels by the symmetry $\Gamma^\ell_{ik} = \Gamma^\ell_{ki}$ of the Christoffel symbols.

**Remaining terms (Christoffel symbols only):** After cancellation we are left with

$$
\nabla_j \nabla_k A_i - \nabla_k \nabla_j A_i = \left(\frac{\partial \Gamma^r_{ki}}{\partial x^j} - \frac{\partial \Gamma^r_{ij}}{\partial x^k}\right)A_r + \left(\Gamma^p_{ik}\Gamma^r_{pj} - \Gamma^p_{ij}\Gamma^r_{pk}\right)A_r.
$$

### Coordinate Formula

Comparing with the definition $\nabla_j \nabla_k A_i - \nabla_k \nabla_j A_i = R^r_{ijk} A_r$, we read off:

$$
\boxed{R^r_{ijk} = \frac{\partial \Gamma^r_{ki}}{\partial x^j} - \frac{\partial \Gamma^r_{ij}}{\partial x^k} + \Gamma^p_{ik}\Gamma^r_{pj} - \Gamma^p_{ij}\Gamma^r_{pk}}
$$

> [!warning]
> The index placement on $R^r_{ijk}$ matters. The ordering of $\Gamma$ terms and partial derivatives changes depending on which convention you follow. Always check against the defining equation $R^r_{ijk}A_r = \nabla_j \nabla_k A_i - \nabla_k \nabla_j A_i$ to verify signs.

### Tensor Character

> [!important]
> $R^r_{ijk}$ is a tensor. The left-hand side $\nabla_j \nabla_k A_i - \nabla_k \nabla_j A_i$ is a difference of tensors, hence a tensor. Since $A_r$ is arbitrary, the **[[quotient rule]]** gives that $R^r_{ijk}$ is a tensor.

### Condition for Euclidean Space

For Euclidean space we need zero curvature, i.e. $A_{i,jk} = A_{i,kj}$ for all $A_i$. Since $A_{i,jk} - A_{i,kj} = R^r_{ijk} A_r$, this holds if and only if:

$$
\boxed{R^r_{ijk} = 0 \quad \Longleftrightarrow \quad \text{the space is Euclidean}}
$$

## Example: The Unit Sphere

> [!example]
> We verify that the surface of the unit sphere ($r = 1$) has non-vanishing Riemann-Christoffel tensor, confirming it is not Euclidean.

The position vector in spherical coordinates $(x^1, x^2) = (\phi, \theta)$ is

$$
\mathbf{r} = \sin\phi\cos\theta\,\mathbf{i}_1 + \sin\phi\sin\theta\,\mathbf{i}_2 + \cos\phi\,\mathbf{i}_3,
$$

giving the local basis vectors

$$
\mathbf{e}_1 = \frac{\partial \mathbf{r}}{\partial \phi} = \cos\phi\cos\theta\,\mathbf{i}_1 + \cos\phi\sin\theta\,\mathbf{i}_2 - \sin\phi\,\mathbf{i}_3,
$$

$$
\mathbf{e}_2 = \frac{\partial \mathbf{r}}{\partial \theta} = -\sin\phi\sin\theta\,\mathbf{i}_1 + \sin\phi\cos\theta\,\mathbf{i}_2.
$$

### Step 1: Metric Tensor

From $g_{ij} = \mathbf{e}_i \cdot \mathbf{e}_j$:

$$
g_{11} = 1, \qquad g_{12} = 0, \qquad g_{22} = \sin^2\phi.
$$

The contravariant components are

$$
g^{11} = 1, \qquad g^{22} = \frac{1}{\sin^2\phi}, \qquad g^{12} = 0.
$$

### Step 2: Christoffel Symbols of the First Kind

Using $\Gamma_{ijk} = \frac{1}{2}\left(\frac{\partial g_{ij}}{\partial x^k} + \frac{\partial g_{ik}}{\partial x^j} - \frac{\partial g_{jk}}{\partial x^i}\right)$, the only non-zero metric derivative is

$$
\frac{\partial g_{22}}{\partial x^1} = \frac{\partial \sin^2\phi}{\partial \phi} = 2\sin\phi\cos\phi.
$$

So $\Gamma_{ijk} = 0$ unless exactly two indices are $2$ and one is $1$. Working through:

$$
\Gamma_{111} = \Gamma_{112} = \Gamma_{121} = \Gamma_{211} = \Gamma_{222} = 0,
$$

$$
\Gamma_{122} = -\sin\phi\cos\phi.
$$

Using Ricci's theorem: $0 = \frac{\partial g_{12}}{\partial x^2} = \Gamma_{122} + \Gamma_{212}$, so

$$
\Gamma_{212} = \Gamma_{221} = \sin\phi\cos\phi.
$$

### Step 3: Christoffel Symbols of the Second Kind

From $\Gamma^i_{jk} = g^{i\ell}\Gamma_{\ell jk}$:

$$
\Gamma^1_{11} = \Gamma^1_{12} = \Gamma^2_{11} = \Gamma^2_{22} = 0,
$$

$$
\Gamma^1_{22} = g^{11}\Gamma_{122} + g^{12}\Gamma_{222} = -\sin\phi\cos\phi,
$$

$$
\Gamma^2_{12} = \Gamma^2_{21} = g^{21}\Gamma_{112} + g^{22}\Gamma_{212} = \cot\phi.
$$

### Step 4: Riemann-Christoffel Tensor

Most components vanish because of the zeros among the Christoffel symbols:

$$
R^1_{111} = R^1_{112} = R^1_{121} = R^1_{211} = R^1_{122} = R^1_{221} = R^1_{222} = 0,
$$

$$
R^2_{111} = R^2_{211} = R^2_{221} = R^2_{122} = R^2_{222} = 0.
$$

The key non-zero component is $R^1_{212}$:

$$
R^1_{212} = \frac{\partial}{\partial x^1}\Gamma^1_{22} - \frac{\partial}{\partial x^2}\Gamma^1_{21} + \Gamma^p_{22}\Gamma^1_{p1} - \Gamma^p_{21}\Gamma^1_{p2}.
$$

The only surviving terms are:

$$
R^1_{212} = \frac{\partial}{\partial \phi}\Gamma^1_{22} - \Gamma^2_{21}\Gamma^1_{22}
$$

$$
= \frac{\partial}{\partial \phi}(-\sin\phi\cos\phi) - \frac{\cos\phi}{\sin\phi}(-\sin\phi\cos\phi)
$$

$$
= (-\cos^2\phi + \sin^2\phi) + \cos^2\phi
$$

$$
\boxed{R^1_{212} = \sin^2\phi}
$$

Since $R^1_{212} \neq 0$, the unit sphere is indeed a curved (non-Euclidean) space - exactly as expected.

---

## Pre-Lecture Notes from [[mth3008 lecture notes 18.pdf|University Notes]]

- **Curvature distinguishes spaces:** Euclidean $\to$ zero curvature; sphere $\to$ positive; hyperbolic $\to$ negative
- **Partial derivatives commute**, but **covariant derivatives do not** in general - the failure is measured by curvature
- **Riemann-Christoffel tensor** defined by $R^r_{ijk}A_r = \nabla_j\nabla_k A_i - \nabla_k\nabla_j A_i$
- **Coordinate formula:** $R^r_{ijk} = \frac{\partial \Gamma^r_{ki}}{\partial x^j} - \frac{\partial \Gamma^r_{ij}}{\partial x^k} + \Gamma^p_{ik}\Gamma^r_{pj} - \Gamma^p_{ij}\Gamma^r_{pk}$
- **Derivation strategy:** expand $\nabla_j\nabla_k A_i$ using the covariant derivative of a rank-2 tensor, substitute $\nabla_k A_i = \frac{\partial A_i}{\partial x^k} - \Gamma^r_{ki}A_r$, then subtract $\nabla_k\nabla_j A_i$; second-derivative terms and first-derivative terms cancel by symmetry of $\Gamma$
- **Tensor character** follows from the quotient rule since $A_r$ is arbitrary
- **Euclidean condition:** $R^r_{ijk} = 0$ throughout the space
- **Unit sphere example:** $(x^1,x^2)=(\phi,\theta)$, metric $g_{11}=1$, $g_{22}=\sin^2\phi$, $g_{12}=0$; non-zero Christoffel symbols $\Gamma^1_{22}=-\sin\phi\cos\phi$, $\Gamma^2_{12}=\cot\phi$; key result $R^1_{212}=\sin^2\phi \neq 0$, confirming positive curvature
- **Next lecture:** the Ricci tensor (contraction of the Riemann-Christoffel tensor)
