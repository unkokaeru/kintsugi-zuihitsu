# MTH3008 Weekly Problems 8

> **Original Documents**: [[mth3008 weekly problem sheet 8.pdf]] / [[mth3008 weekly problem sheet 8 handwritten solutions.pdf]] / [[mth3008 weekly problem sheet 8 solutions.pdf]]
>
> **Vibes**: Christoffel-symbol computation at scale. Once the four orthogonal-coordinate cases from 8.1 are internalised, the later problems reduce to "find the nonzero metric derivatives, drop them into the right slot, raise with $g^{ii}$." The final problem 8.5 is a standalone proof showing the covariant derivative really is a tensor.
>
> **Used Techniques**:
> - First-kind Christoffel formula: $\Gamma_{ijk}=\frac{1}{2}(\partial_{k}g_{ij}+\partial_{j}g_{ik}-\partial_{i}g_{jk})$.
> - [[Ricci's Theorem]]: orthogonal ⇒ only $(i=j=k), (i=j\neq k), (i\neq j=k)$ and distinct-index cases matter.
> - Raising the first index with $g^{ii}=1/g_{ii}$ (diagonal metric).
> - [[Local Basis]] from $\mathbf{e}_{i}=\partial \mathbf{r}/\partial x^{i}$, then $g_{ij}=\mathbf{e}_{i}\cdot \mathbf{e}_{j}$.
> - [[Christoffel Symbols]] of $\Gamma^{i}_{jk}$ + identity $L^{k'}_{r}L^{s}_{k'}=\delta^{s}_{r}$ for the tensor-character proof.

---

## 8.1. Christoffel Symbols in Orthogonal Coordinates

> [!question]
> Simplify $\Gamma_{ijk}= \frac{1}{2}( \partial_{j}g_{ik}+ \partial_{k}g_{ij}- \partial_{i}g_{kj})$ when $g_{ij}=0$ for $i\neq j$, in the cases: (1) $i=j=k$; (2) $i=j\neq k$; (3) $i\neq j=k$; (4) all distinct.

For an orthogonal metric, every $g_{ij}$ with $i\neq j$ vanishes, and so do all of its derivatives. Evaluating the three terms in each case:

**(1) $i=j=k$.** All three terms are $\partial g_{ii}/\partial x^{i}$:

$$
\boxed{\Gamma_{iii}= \frac{1}{2} \frac{\partial g_{ii}}{\partial x^{i}}.}
$$

**(2) $i=j\neq k$.** $g_{ik}=g_{ki}=0$, so only the middle term survives:

$$
\boxed{\Gamma_{iik}= \frac{1}{2} \frac{\partial g_{ii}}{\partial x^{k}}.}
$$

**(3) $i\neq j=k$.** $g_{ij}=0$, so only the third term (with a minus) survives:

$$
\boxed{\Gamma_{ijj}=- \frac{1}{2} \frac{\partial g_{jj}}{\partial x^{i}}.}
$$

**(4) All distinct.** Every $g$ in the three terms is off-diagonal, so:

$$
\boxed{\Gamma_{ijk}=0.}
$$

These four shortcuts are used in every subsequent orthogonal-coordinate problem.

---

## 8.2. Christoffel Symbols in Spherical Coordinates

> [!question]
> In $(r,\varphi,\theta)$ with $g_{11}=1$, $g_{22}=r^{2}$, $g_{33}=r^{2}\sin^{2}\varphi$ (off-diagonal entries zero), find all $\Gamma_{ijk}$ and $\Gamma^{i}_{jk}$.

**Nonzero metric derivatives.** $\partial g_{22}/\partial r=2r$, $\partial g_{33}/\partial r=2r\sin^{2}\varphi$, $\partial g_{33}/\partial \varphi=2r^{2}\sin \varphi\cos \varphi$.

**First-kind symbols** via 8.1 cases:

- $\Gamma_{122}=- \frac{1}{2}\partial g_{22}/\partial r=-r$.
- $\Gamma_{133}=- \frac{1}{2}\partial g_{33}/\partial r=-r\sin^{2}\varphi$.
- $\Gamma_{233}=- \frac{1}{2}\partial g_{33}/\partial \varphi=-r^{2}\sin \varphi\cos \varphi$.
- $\Gamma_{221}=\Gamma_{212}= \frac{1}{2}\partial g_{22}/\partial r=r$.
- $\Gamma_{331}=\Gamma_{313}= \frac{1}{2}\partial g_{33}/\partial r=r\sin^{2}\varphi$.
- $\Gamma_{332}=\Gamma_{323}= \frac{1}{2}\partial g_{33}/\partial \varphi=r^{2}\sin \varphi\cos \varphi$.

$\Gamma_{iii}$ - all zero (diagonal metric derivatives w.r.t. own coord vanish). Fully-distinct case - zero.

**Second-kind symbols** via $\Gamma^{i}_{jk}=g^{i \ell}\Gamma_{\ell kj}$ with $g^{11}=1$, $g^{22}=1/r^{2}$, $g^{33}=1/(r^{2}\sin^{2}\varphi)$:

$$
\boxed{\Gamma^{1}_{22}=-r,\quad \Gamma^{1}_{33}=-r\sin^{2}\varphi,\quad \Gamma^{2}_{12}=\Gamma^{2}_{21}= \frac{1}{r},\quad \Gamma^{2}_{33}=-\sin \varphi\cos \varphi,\quad \Gamma^{3}_{13}=\Gamma^{3}_{31}= \frac{1}{r},\quad \Gamma^{3}_{23}=\Gamma^{3}_{32}=\cot \varphi.}
$$

All others vanish.

---

## 8.3. Exotic Polar-Type Coordinates in 2D

> [!question]
> For $\mathbf{r}=\rho^{2}\cos(2 \theta)\mathbf{i}_{1}+\rho^{2}\sin(2 \theta)\mathbf{i}_{2}$ with $(x^{1},x^{2})=(\rho,\theta)$, find the basis vectors, metric (covariant and contravariant), and all Christoffel symbols of both kinds.

**1) Basis vectors.**

$$
\mathbf{e}_{1}= \frac{\partial \mathbf{r}}{\partial \rho}=2\rho\cos(2 \theta)\mathbf{i}_{1}+2\rho\sin(2 \theta)\mathbf{i}_{2},\qquad \mathbf{e}_{2}= \frac{\partial \mathbf{r}}{\partial \theta}=-2\rho^{2}\sin(2 \theta)\mathbf{i}_{1}+2\rho^{2}\cos(2 \theta)\mathbf{i}_{2}.
$$

**2) Metric.** Dot products collapse via $\cos^{2}+\sin^{2}=1$:

$$
g_{11}=4\rho^{2},\qquad g_{22}=4\rho^{4},\qquad g_{12}=\mathbf{e}_{1}\cdot \mathbf{e}_{2}=0.
$$

Orthogonal, so $\boxed{[g_{ij}]=\begin{pmatrix}4\rho^{2} & 0 \\ 0 & 4\rho^{4}\end{pmatrix}}$ and $\boxed{[g^{ij}]=\begin{pmatrix}1/(4\rho^{2}) & 0 \\ 0 & 1/(4\rho^{4})\end{pmatrix}}$.

**3) First-kind Christoffel symbols.** Nonzero metric derivatives: $\partial g_{11}/\partial \rho=8\rho$, $\partial g_{22}/\partial \rho=16\rho^{3}$. Apply 8.1:

$$
\Gamma_{111}= \frac{1}{2}\partial g_{11}/\partial \rho=4\rho,
$$

$$
\Gamma_{221}=\Gamma_{212}= \frac{1}{2}\partial g_{22}/\partial \rho=8\rho^{3},
$$

$$
\Gamma_{122}=- \frac{1}{2}\partial g_{22}/\partial \rho=-8\rho^{3}.
$$

All others zero.

**4) Second-kind Christoffel symbols.** Raise with $g^{ii}=1/g_{ii}$:

$$
\boxed{\Gamma^{1}_{11}= \frac{1}{\rho},\qquad \Gamma^{1}_{22}=-2\rho,\qquad \Gamma^{2}_{12}=\Gamma^{2}_{21}= \frac{2}{\rho}.}
$$

All others zero.

---

## 8.4. Time-Dependent 3D Coordinate System

> [!question]
> For $\mathbf{r}=(x^{2}-y^{2})\mathbf{i}_{1}+2xy\mathbf{i}_{2}+t\mathbf{i}_{3}$ with $(x^{1},x^{2},x^{3})=(x,y,t)$, find the basis vectors, metric, and all Christoffel symbols.

**1) Basis.**

$$
\mathbf{e}_{1}=2x\mathbf{i}_{1}+2y\mathbf{i}_{2},\qquad \mathbf{e}_{2}=-2y\mathbf{i}_{1}+2x\mathbf{i}_{2},\qquad \mathbf{e}_{3}=\mathbf{i}_{3}.
$$

**2) Metric.** $\mathbf{e}_{1}\cdot \mathbf{e}_{2}=-4xy+4xy=0$, so orthogonal. Magnitudes give:

$$
\boxed{[g_{ij}]=\begin{pmatrix}4(x^{2}+y^{2}) & 0 & 0 \\ 0 & 4(x^{2}+y^{2}) & 0 \\ 0 & 0 & 1\end{pmatrix},\qquad [g^{ij}]=\begin{pmatrix}1/(4(x^{2}+y^{2})) & 0 & 0 \\ 0 & 1/(4(x^{2}+y^{2})) & 0 \\ 0 & 0 & 1\end{pmatrix}.}
$$

**3) First-kind Christoffel symbols.** Derivatives: $\partial g_{11}/\partial x=\partial g_{22}/\partial x=8x$, $\partial g_{11}/\partial y=\partial g_{22}/\partial y=8y$; all $t$-derivatives and all derivatives of $g_{33}$ vanish.

Applying 8.1 case by case:

$$
\Gamma_{111}=4x,\quad \Gamma_{222}=4y,\quad \Gamma_{112}=\Gamma_{121}=4y,\quad \Gamma_{221}=\Gamma_{212}=4x,\quad \Gamma_{122}=-4x,\quad \Gamma_{211}=-4y.
$$

All others zero (any Christoffel with a $3$ anywhere involves only $g_{33}=1$ or derivatives $\partial_{t}$, both trivial).

**4) Second-kind Christoffel symbols.** Raise with $g^{11}=g^{22}=1/(4(x^{2}+y^{2}))$:

$$
\boxed{\Gamma^{1}_{11}= \frac{x}{x^{2}+y^{2}},\quad \Gamma^{1}_{12}=\Gamma^{1}_{21}= \frac{y}{x^{2}+y^{2}},\quad \Gamma^{1}_{22}=- \frac{x}{x^{2}+y^{2}},}
$$

$$
\boxed{\Gamma^{2}_{11}=- \frac{y}{x^{2}+y^{2}},\quad \Gamma^{2}_{12}=\Gamma^{2}_{21}= \frac{x}{x^{2}+y^{2}},\quad \Gamma^{2}_{22}= \frac{y}{x^{2}+y^{2}}.}
$$

All others zero.

---

## 8.5. Tensorial Nature of the Covariant Derivative

> [!question]
> Given $\Gamma^{i'}{}_{j'k'}=L^{i'}{}_{\ell}L^{m}{}_{j'}L^{n}{}_{k'}\Gamma^{\ell}{}_{mn}+L^{i'}{}_{m}L^{n}{}_{k'}\frac{\partial L^{m}{}_{j'}}{\partial x^{n}}$, show that the covariant derivative of a covariant vector is a rank-2 covariant tensor.

We want: $A_{i',j'}=L^{m}{}_{i'}L^{n}{}_{j'}A_{m,n}$.

Start from $A_{i',j'}= \frac{\partial A_{i'}}{\partial x^{j'}}-\Gamma^{k'}_{i'j'}A_{k'}$ with $A_{i'}=L^{k}{}_{i'}A_{k}$.

**Step 1 - derivative of the transformed component**, using the product rule and the chain rule on $\partial/\partial x^{j'}=L^{n}{}_{j'}\partial /\partial x^{n}$:

$$
\frac{\partial A_{i'}}{\partial x^{j'}}=L^{k}{}_{i'}L^{n}{}_{j'} \frac{\partial A_{k}}{\partial x^{n}}+A_{k}\cdot L^{n}{}_{j'} \frac{\partial L^{k}{}_{i'}}{\partial x^{n}}.
$$

**Step 2 - Christoffel contribution.** Using $A_{k'}=L^{s}{}_{k'}A_{s}$ and the given transformation of $\Gamma^{k'}_{i'j'}$, multiply and collapse $L^{k'}{}_{r}L^{s}{}_{k'}=\delta^{s}_{r}$ (the identity from 6.1):

$$
\Gamma^{k'}_{i'j'}A_{k'}=L^{m}{}_{i'}L^{n}{}_{j'}\Gamma^{r}{}_{mn}A_{r}+L^{n}{}_{j'} \frac{\partial L^{r}{}_{i'}}{\partial x^{n}}A_{r}.
$$

**Step 3 - subtract and cancel.** Combining Steps 1 and 2:

$$
A_{i',j'}=L^{k}{}_{i'}L^{n}{}_{j'} \frac{\partial A_{k}}{\partial x^{n}}+A_{k}L^{n}{}_{j'} \frac{\partial L^{k}{}_{i'}}{\partial x^{n}}-L^{m}{}_{i'}L^{n}{}_{j'}\Gamma^{r}{}_{mn}A_{r}-L^{n}{}_{j'} \frac{\partial L^{r}{}_{i'}}{\partial x^{n}}A_{r}.
$$

The **second and fourth terms cancel exactly** (they differ only in dummy-index name $k\leftrightarrow r$). What remains is

$$
A_{i',j'}=L^{m}{}_{i'}L^{n}{}_{j'}\left( \frac{\partial A_{m}}{\partial x^{n}}-\Gamma^{r}{}_{mn}A_{r}\right)=L^{m}{}_{i'}L^{n}{}_{j'}A_{m,n}.
$$

$\boxed{A_{i',j'}=L^{m}{}_{i'}L^{n}{}_{j'}A_{m,n}}$ is the rank-2 covariant transformation law. ✓

> [!note] The cancellation is exactly why Christoffel symbols exist
> The non-tensorial extra term in $\Gamma$'s transformation is precisely what cancels the non-tensorial extra term in the derivative $\partial A_{i'}/\partial x^{j'}$. Together they reconstruct a tensor - which is the whole point of [[Covariant Differentiation]].
