# MTH3008 Weekly Problems 10

> **Original Documents**: [[mth3008 weekly problem sheet 10.pdf]] / [[mth3008 weekly problem sheet 10 handwritten solutions.pdf]]
>
> **Vibes**: Three Ricci-tensor calculations followed by a five-part revision sweep through the whole course (basis vectors, orthogonality, covariant components, metric, Christoffel symbols, Riemann-Christoffel tensor) on one bizarre coordinate system parametrising flat space. Every "compute the Ricci tensor" reduces to: list nonzero $\Gamma$, plug into $R_{ij}=\partial_{k}\Gamma^{k}_{ji}-\partial_{j}\Gamma^{k}_{ik}+\Gamma^{p}_{ij}\Gamma^{k}_{pk}-\Gamma^{p}_{ik}\Gamma^{k}_{pj}$. The revision exercises 10.4-10.8 all sit on the same coordinate system, so the work compounds.
>
> **Used Techniques**:
> - For an orthogonal diagonal metric, only $\Gamma_{iik}=\Gamma_{iki}=\tfrac{1}{2}\partial_{k}g_{ii}$ and $\Gamma_{ijj}=-\tfrac{1}{2}\partial_{i}g_{jj}$ survive (the four cases of [[Christoffel Symbols]]).
> - Raise with $g^{ii}=1/g_{ii}$ on a diagonal metric.
> - **Ricci formula:** $R_{ij}=\partial_{k}\Gamma^{k}_{ji}-\partial_{j}\Gamma^{k}_{ik}+\Gamma^{p}_{ij}\Gamma^{k}_{pk}-\Gamma^{p}_{ik}\Gamma^{k}_{pj}$ (sum over $k$ and $p$).
> - Antisymmetry $R^{r}_{ijk}=-R^{r}_{ikj}$ kills any component with the last two indices equal - instantly $R^{r}_{ijj}=0$.
> - When $\mathbf{r}$ is a smooth invertible map into $\mathbb{R}^{3}$ with non-singular Jacobian, the induced metric is flat and **all** $R^{r}_{ijk}=0$ - verify by computing one component.

---

## 10.1. Ricci Tensor for a 2D Exponential Metric

> [!question]
> Given the 2D metric $[g_{ij}]=\begin{pmatrix}1 & 0\\0 & e^{2x}\end{pmatrix}$ in coordinates $(x^{1},x^{2})=(x,y)$, calculate the components of the Ricci tensor $R_{ij}$.

**Inverse metric.** $g^{11}=1$, $g^{22}=e^{-2x}$.

**Nonzero metric derivative.** Only $\partial g_{22}/\partial x = 2e^{2x}$.

**Christoffel symbols (first kind).** From the four-case table for orthogonal coordinates, the only surviving symbols are those with two indices $=2$ and one index $=1$:

$$
\Gamma_{122}=-\tfrac{1}{2}\partial_{1}g_{22}=-e^{2x},\qquad \Gamma_{212}=\Gamma_{221}=\tfrac{1}{2}\partial_{1}g_{22}=e^{2x}.
$$

**Christoffel symbols (second kind).**

$$
\boxed{\Gamma^{1}_{22}=-e^{2x},\qquad \Gamma^{2}_{12}=\Gamma^{2}_{21}=e^{-2x}\cdot e^{2x}=1.}
$$

All others vanish.

**Ricci tensor.** Apply $R_{ij}=\partial_{k}\Gamma^{k}_{ji}-\partial_{j}\Gamma^{k}_{ik}+\Gamma^{p}_{ij}\Gamma^{k}_{pk}-\Gamma^{p}_{ik}\Gamma^{k}_{pj}$.

For $R_{11}$: $\partial_{k}\Gamma^{k}_{11}=0$ ($\Gamma^{k}_{11}=0$ for all $k$). $\Gamma^{k}_{1k}=\Gamma^{2}_{12}=1$, so $\partial_{1}(1)=0$. Third term: $\Gamma^{p}_{11}=0$, gives $0$. Fourth term: $\Gamma^{p}_{1k}\Gamma^{k}_{p1}$ - only nonzero when $p=k=2$, giving $\Gamma^{2}_{12}\Gamma^{2}_{21}=1$. So $R_{11}=0-0+0-1=-1$.

For $R_{22}$:
- $\partial_{k}\Gamma^{k}_{22}$: only $\partial_{1}\Gamma^{1}_{22}=\partial_{x}(-e^{2x})=-2e^{2x}$.
- $\partial_{2}\Gamma^{k}_{2k}=\partial_{y}(\Gamma^{2}_{22})=\partial_{y}(0)=0$.
- $\Gamma^{p}_{22}\Gamma^{k}_{pk}$: $p=1$: $\Gamma^{1}_{22}\cdot\Gamma^{k}_{1k}=(-e^{2x})(1)=-e^{2x}$.
- $\Gamma^{p}_{2k}\Gamma^{k}_{p2}$: $(p,k)=(1,2)$: $\Gamma^{1}_{22}\Gamma^{2}_{12}=(-e^{2x})(1)=-e^{2x}$. $(p,k)=(2,1)$: $\Gamma^{2}_{21}\Gamma^{1}_{22}=(1)(-e^{2x})=-e^{2x}$. Sum $-2e^{2x}$.

$R_{22}=-2e^{2x}-0+(-e^{2x})-(-2e^{2x})=-e^{2x}$.

For $R_{12}$ (and $R_{21}=R_{12}$ by symmetry): every term evaluates to zero (the $\Gamma^{p}_{12}=0$ kills the third term; the fourth requires $p,k$ both giving nonzero factors, which doesn't happen for the cross indices).

$$
\boxed{R_{11}=-1,\qquad R_{22}=-e^{2x},\qquad R_{12}=R_{21}=0.}
$$

> [!note] Sanity check
> The metric $ds^{2}=dx^{2}+e^{2x}dy^{2}$ is the hyperbolic plane, with Gaussian curvature $K=-1$. In 2D, $R_{ij}=K g_{ij}$, giving $R_{11}=-1\cdot 1=-1$ and $R_{22}=-1\cdot e^{2x}=-e^{2x}$. ✓

---

## 10.2. Ricci Tensor in Spherical Coordinates

> [!question]
> Consider 3D space in spherical coordinates with arc length $ds^{2}=dr^{2}+r^{2}d\theta^{2}+r^{2}\sin^{2}\theta\,d\phi^{2}$. Compute the Ricci tensor components $R_{kk}$ for $(x^{1},x^{2},x^{3})=(r,\theta,\phi)$.

**Metric.** $g_{11}=1$, $g_{22}=r^{2}$, $g_{33}=r^{2}\sin^{2}\theta$, off-diagonal zero. Inverse $g^{11}=1$, $g^{22}=1/r^{2}$, $g^{33}=1/(r^{2}\sin^{2}\theta)$.

**Nonzero metric derivatives.** $\partial g_{22}/\partial r=2r$; $\partial g_{33}/\partial r=2r\sin^{2}\theta$; $\partial g_{33}/\partial \theta=2r^{2}\sin\theta\cos\theta$.

**Christoffel symbols (second kind).** Using $\Gamma^{i}_{jk}=g^{ii}\Gamma_{ijk}$ on a diagonal metric and the four-case table:

$$
\boxed{\Gamma^{1}_{22}=-r,\quad \Gamma^{1}_{33}=-r\sin^{2}\theta,\quad \Gamma^{2}_{12}=\Gamma^{2}_{21}=\tfrac{1}{r},\quad \Gamma^{2}_{33}=-\sin\theta\cos\theta,\quad \Gamma^{3}_{13}=\Gamma^{3}_{31}=\tfrac{1}{r},\quad \Gamma^{3}_{23}=\Gamma^{3}_{32}=\cot\theta.}
$$

All others zero.

**Ricci tensor.** Spherical coordinates are a non-singular smooth chart of Euclidean $\mathbb{R}^{3}$, so the space is flat and all components must vanish. Verifying $R_{11}$:

$$
R_{11}=\partial_{k}\Gamma^{k}_{11}-\partial_{1}\Gamma^{k}_{1k}+\Gamma^{p}_{11}\Gamma^{k}_{pk}-\Gamma^{p}_{1k}\Gamma^{k}_{p1}.
$$

- $\Gamma^{k}_{11}=0$ for all $k$, so first term is $0$.
- $\Gamma^{k}_{1k}=\Gamma^{2}_{12}+\Gamma^{3}_{13}=2/r$. So $-\partial_{r}(2/r)=2/r^{2}$.
- $\Gamma^{p}_{11}=0$, third term $=0$.
- $\Gamma^{p}_{1k}\Gamma^{k}_{p1}$: nonzero only for $(p,k)=(2,2)$: $\Gamma^{2}_{12}\Gamma^{2}_{21}=1/r^{2}$, and $(p,k)=(3,3)$: $\Gamma^{3}_{13}\Gamma^{3}_{31}=1/r^{2}$. Sum $2/r^{2}$.

$R_{11}=0+2/r^{2}+0-2/r^{2}=0$. Similar cancellations give $R_{22}=R_{33}=0$.

$$
\boxed{R_{kk}=0\quad\text{for }k=1,2,3.}
$$

---

## 10.3. Ricci Tensor for a Triple-Exponential Metric

> [!question]
> Given $g_{ij}=\mathrm{diag}(e^{2u},\,e^{2v},\,e^{2w})$ in coordinates $(x^{1},x^{2},x^{3})=(u,v,w)$, find the Ricci tensor components $R_{ij}$.

**Inverse metric.** $g^{11}=e^{-2u}$, $g^{22}=e^{-2v}$, $g^{33}=e^{-2w}$.

**Key observation.** Each diagonal $g_{ii}$ depends only on the corresponding coordinate $x^{i}$. So $\partial_{k}g_{ii}=0$ unless $k=i$. Hence the only nonzero first-kind Christoffel symbols are the diagonal ones:

$$
\Gamma_{111}=\tfrac{1}{2}\partial_{u}e^{2u}=e^{2u},\qquad \Gamma_{222}=e^{2v},\qquad \Gamma_{333}=e^{2w}.
$$

**Second kind.**

$$
\boxed{\Gamma^{1}_{11}=e^{-2u}\cdot e^{2u}=1,\qquad \Gamma^{2}_{22}=1,\qquad \Gamma^{3}_{33}=1.}
$$

All others zero.

**Ricci tensor.** This metric is $ds^{2}=e^{2u}du^{2}+e^{2v}dv^{2}+e^{2w}dw^{2}=dX^{2}+dY^{2}+dZ^{2}$ under the substitution $X=e^{u}, Y=e^{v}, Z=e^{w}$. So the space is flat. Verifying $R_{11}$:

- $\partial_{k}\Gamma^{k}_{11}=\partial_{1}\Gamma^{1}_{11}=\partial_{u}(1)=0$.
- $\Gamma^{k}_{1k}=\Gamma^{1}_{11}=1$. $\partial_{1}(1)=0$.
- $\Gamma^{p}_{11}\Gamma^{k}_{pk}$: only $p=1$ gives a nonzero factor $\Gamma^{1}_{11}=1$, and $\Gamma^{k}_{1k}=1$. Product $1$.
- $\Gamma^{p}_{1k}\Gamma^{k}_{p1}$: only $(p,k)=(1,1)$: $\Gamma^{1}_{11}\Gamma^{1}_{11}=1$.

$R_{11}=0-0+1-1=0$. Symmetric arguments give $R_{22}=R_{33}=0$, and off-diagonals vanish trivially.

$$
\boxed{R_{ij}=0\quad\text{for all }i,j.}
$$

---

## Revision Exercises (10.4-10.8)

The remaining problems all use the same coordinate system. Define

$$
f(\theta)=\sin\theta+\cos\theta,\qquad f'(\theta)=\cos\theta-\sin\theta.
$$

Useful identities: $f^{2}=1+\sin 2\theta$, $(f')^{2}=1-\sin 2\theta$, $f f'=\cos 2\theta$, $f^{2}+(f')^{2}=2$, $f''=-f$.

---

## 10.4. Basis Vectors and Orthogonality

> [!question]
> Coordinate system $(x^{1},x^{2},x^{3})=(\phi,\theta,z)$ with position vector
> $$
> \mathbf{r}=\cos\phi\,(\sin\theta+\cos\theta)\mathbf{i}_{1}+\sin\phi\,(\sin\theta+\cos\theta)\mathbf{i}_{2}+z\,\mathbf{i}_{3}.
> $$
> (1) Find basis vectors $\mathbf{e}_{1},\mathbf{e}_{2},\mathbf{e}_{3}$. (2) Show this system is orthogonal.

**(1) Basis vectors.** Using $\mathbf{e}_{i}=\partial \mathbf{r}/\partial x^{i}$ with $f=\sin\theta+\cos\theta$:

$$
\boxed{\mathbf{e}_{1}=-f\sin\phi\,\mathbf{i}_{1}+f\cos\phi\,\mathbf{i}_{2},\quad \mathbf{e}_{2}=f'\cos\phi\,\mathbf{i}_{1}+f'\sin\phi\,\mathbf{i}_{2},\quad \mathbf{e}_{3}=\mathbf{i}_{3}.}
$$

**(2) Orthogonality.**

$$
\mathbf{e}_{1}\cdot\mathbf{e}_{2}=-f f'\sin\phi\cos\phi+f f'\cos\phi\sin\phi=0,
$$

$\mathbf{e}_{1}\cdot\mathbf{e}_{3}=0$ (no $\mathbf{i}_{3}$ component in $\mathbf{e}_{1}$), $\mathbf{e}_{2}\cdot\mathbf{e}_{3}=0$. Orthogonal. $\blacksquare$

---

## 10.5. Covariant Components of $\mathbf{A}=-\mathbf{i}_{1}+\mathbf{i}_{2}$

> [!question]
> Find the covariant components $A_{i}=\mathbf{A}\cdot\mathbf{e}_{i}$ of $\mathbf{A}=-\mathbf{i}_{1}+\mathbf{i}_{2}$ with respect to the basis of 10.4.

$$
A_{1}=\mathbf{A}\cdot\mathbf{e}_{1}=(-1)(-f\sin\phi)+(1)(f\cos\phi)=f(\sin\phi+\cos\phi),
$$

$$
A_{2}=\mathbf{A}\cdot\mathbf{e}_{2}=(-1)(f'\cos\phi)+(1)(f'\sin\phi)=f'(\sin\phi-\cos\phi),
$$

$$
A_{3}=\mathbf{A}\cdot\mathbf{e}_{3}=0.
$$

$$
\boxed{A_{1}=(\sin\theta+\cos\theta)(\sin\phi+\cos\phi),\quad A_{2}=(\cos\theta-\sin\theta)(\sin\phi-\cos\phi),\quad A_{3}=0.}
$$

---

## 10.6. Metric Coefficients and Arc Length

> [!question]
> Compute the metric coefficients (scale factors) and the components of the covariant metric tensor $g_{ii}$ for the coordinate system of 10.4.

Using $g_{ii}=\mathbf{e}_{i}\cdot\mathbf{e}_{i}$:

$$
g_{11}=f^{2}\sin^{2}\phi+f^{2}\cos^{2}\phi=f^{2}=1+\sin 2\theta,
$$

$$
g_{22}=(f')^{2}\cos^{2}\phi+(f')^{2}\sin^{2}\phi=(f')^{2}=1-\sin 2\theta,
$$

$$
g_{33}=1.
$$

Off-diagonals zero (confirmed in 10.4). Scale factors $h_{i}=\sqrt{g_{ii}}$:

$$
\boxed{h_{1}=|f|,\qquad h_{2}=|f'|,\qquad h_{3}=1.}
$$

Arc length element:

$$
\boxed{ds^{2}=f^{2}\,d\phi^{2}+(f')^{2}\,d\theta^{2}+dz^{2}=(1+\sin 2\theta)d\phi^{2}+(1-\sin 2\theta)d\theta^{2}+dz^{2}.}
$$

---

## 10.7. Christoffel Symbols

> [!question]
> Determine all Christoffel symbols of the first and second kind for the coordinate system of 10.4.

**Inverse metric.** $g^{11}=1/f^{2}$, $g^{22}=1/(f')^{2}$, $g^{33}=1$.

**Nonzero metric derivatives.** Both $g_{11}=f^{2}$ and $g_{22}=(f')^{2}$ depend only on $\theta=x^{2}$:

$$
\partial_{2}g_{11}=2 f f',\qquad \partial_{2}g_{22}=2 f' f''=-2 f f'.
$$

(Using $f''=-f$.) Note $f f'=\cos 2\theta$.

**Christoffel symbols of the first kind.** Apply the four-case table:

- $\partial_{2}g_{11}\neq 0$ contributes:
 - $\Gamma_{112}=\Gamma_{121}=\tfrac{1}{2}\partial_{2}g_{11}=f f'=\cos 2\theta$,
 - $\Gamma_{211}=-\tfrac{1}{2}\partial_{2}g_{11}=-f f'=-\cos 2\theta$.
- $\partial_{2}g_{22}\neq 0$ contributes:
 - $\Gamma_{222}=\tfrac{1}{2}\partial_{2}g_{22}=-f f'=-\cos 2\theta$.

All others vanish.

**Christoffel symbols of the second kind.** Using $\Gamma^{i}_{jk}=g^{ii}\Gamma_{ijk}$ (no sum, diagonal):

$$
\Gamma^{1}_{12}=\Gamma^{1}_{21}=\frac{f f'}{f^{2}}=\frac{f'}{f},\qquad \Gamma^{2}_{11}=-\frac{f f'}{(f')^{2}}=-\frac{f}{f'},\qquad \Gamma^{2}_{22}=-\frac{f f'}{(f')^{2}}=-\frac{f}{f'}.
$$

In closed form:

$$
\boxed{\Gamma^{1}_{12}=\Gamma^{1}_{21}=\frac{\cos\theta-\sin\theta}{\sin\theta+\cos\theta},\qquad \Gamma^{2}_{11}=\Gamma^{2}_{22}=-\frac{\sin\theta+\cos\theta}{\cos\theta-\sin\theta}.}
$$

All others zero.

---

## 10.8. Riemann-Christoffel Tensor

> [!question]
> Determine $R^{1}_{122}$ and the general $R^{r}_{ijk}$ for the coordinate system of 10.4.

**Antisymmetry shortcut.** $R^{r}_{ijk}=-R^{r}_{ikj}$ (interchanging the last two indices flips sign), so any component with $j=k$ is automatically zero. In particular:

$$
\boxed{R^{1}_{122}=0\quad\text{(by antisymmetry, since the last two indices are both 2).}}
$$

**General $R^{r}_{ijk}$.** The position vector $\mathbf{r}(\phi,\theta,z)$ is a smooth map $\mathbb{R}^{3}\to\mathbb{R}^{3}$ with non-singular Jacobian on the open set where $f(\theta)\neq 0$ and $f'(\theta)\neq 0$. So this is a coordinate change on flat Euclidean space, and the induced metric is flat: **all components $R^{r}_{ijk}=0$.**

**Verification via $R^{1}_{212}$.** This is the key 2D-style component to check (since the $z$-direction decouples). With $r=1, i=2, j=1, k=2$:

$$
R^{1}_{212}=\partial_{1}\Gamma^{1}_{22}-\partial_{2}\Gamma^{1}_{21}+\Gamma^{p}_{22}\Gamma^{1}_{p1}-\Gamma^{p}_{21}\Gamma^{1}_{p2}.
$$

- $\Gamma^{1}_{22}=0$, so $\partial_{1}(0)=0$.
- $\Gamma^{1}_{21}=f'/f$. Using $f''=-f$:
  $$
  \partial_{\theta}\!\left(\frac{f'}{f}\right)=\frac{f''f-(f')^{2}}{f^{2}}=\frac{-f^{2}-(f')^{2}}{f^{2}}=-\frac{2}{f^{2}}.
  $$
  So $-\partial_{2}\Gamma^{1}_{21}=2/f^{2}$.
- $\Gamma^{p}_{22}\Gamma^{1}_{p1}$: only $p=2$ gives a nonzero factor: $\Gamma^{2}_{22}\Gamma^{1}_{21}=(-f/f')(f'/f)=-1$.
- $\Gamma^{p}_{21}\Gamma^{1}_{p2}$: only $p=1$ contributes: $\Gamma^{1}_{21}\Gamma^{1}_{12}=(f'/f)^{2}$.

Combining:

$$
R^{1}_{212}=0+\frac{2}{f^{2}}+(-1)-\frac{(f')^{2}}{f^{2}}=\frac{2-(f')^{2}}{f^{2}}-1.
$$

Using $2-(f')^{2}=2-(1-\sin 2\theta)=1+\sin 2\theta=f^{2}$:

$$
R^{1}_{212}=\frac{f^{2}}{f^{2}}-1=1-1=0.\;\checkmark
$$

$$
\boxed{R^{r}_{ijk}=0\quad\text{for all }r,i,j,k\;-\;\text{the space is flat (Euclidean) in disguise.}}
$$
