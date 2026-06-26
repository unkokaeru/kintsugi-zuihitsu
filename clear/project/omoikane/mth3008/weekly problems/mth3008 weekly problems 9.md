# MTH3008 Weekly Problems 9

> **Original Documents**: [[mth3008 weekly problem sheet 9.pdf]] / `[[mth3008 weekly problem sheet 9 handwritten solutions.pdf]]` / [[mth3008 weekly problem sheet 9 solutions.pdf]]
>
> **Vibes**: More Christoffel-symbol marathon, now with a final payoff - the [[Riemann-Christoffel Tensor]] for two surfaces. Every problem reduces to "find the diagonal metric, read off $\partial g_{ii}/\partial x^{k}$, drop into 8.1's four cases." The curvature calculations in 9.4 and 9.6 follow the unit-sphere template from lecture 18.
>
> **Used Techniques**:
> - [[Christoffel Symbols]] formula restricted to orthogonal coordinates (8.1 cases).
> - Raising with $g^{ii}=1/g_{ii}$ (diagonal).
> - [[Riemann-Christoffel Tensor]] formula $R^{r}_{ijk}=\partial_{j}\Gamma^{r}_{ki}-\partial_{k}\Gamma^{r}_{ij}+\Gamma^{p}_{ik}\Gamma^{r}_{pj}-\Gamma^{p}_{ij}\Gamma^{r}_{pk}$.
> - In 2D, only $R^{1}_{212}$ is independent (all others either vanish or are related by antisymmetry).

---

## 9.1. Christoffel Symbols for Exponential Coordinate Scaling

> [!question]
> For $\mathbf{r}=e^{u}\mathbf{i}_{1}+e^{v}\mathbf{i}_{2}+w\mathbf{i}_{3}$ with $(u,v,w)$ coords, find all $\Gamma_{ijk}$ and $\Gamma^{i}_{jk}$.

**Basis.** $\mathbf{e}_{1}=e^{u}\mathbf{i}_{1}$, $\mathbf{e}_{2}=e^{v}\mathbf{i}_{2}$, $\mathbf{e}_{3}=\mathbf{i}_{3}$. Orthogonal.

**Metric.** $g_{11}=e^{2u}$, $g_{22}=e^{2v}$, $g_{33}=1$. Inverse: $g^{11}=e^{-2u}$, $g^{22}=e^{-2v}$, $g^{33}=1$.

**Nonzero metric derivatives.** $\partial g_{11}/\partial u=2e^{2u}$, $\partial g_{22}/\partial v=2e^{2v}$; every other derivative is zero.

**First-kind** (8.1 case $i=j=k$):

$$
\boxed{\Gamma_{111}=e^{2u},\qquad \Gamma_{222}=e^{2v}.}
$$

(No $\Gamma_{iik}$ or $\Gamma_{ijj}$ survive because every cross-derivative $\partial g_{ii}/\partial x^{k\neq i}$ vanishes.)

**Second-kind**:

$$
\boxed{\Gamma^{1}_{11}=e^{-2u}\cdot e^{2u}=1,\qquad \Gamma^{2}_{22}=e^{-2v}\cdot e^{2v}=1.}
$$

All others zero.

---

## 9.2. Christoffel Symbols for a Mixed Exponential-Trigonometric-Logarithmic Map

> [!question]
> For $\mathbf{r}(u,v,w)=(e^{u},\sin v,\ln(1+w))$, find all Christoffel symbols.

**Basis.** $\mathbf{e}_{1}=e^{u}\mathbf{i}_{1}$, $\mathbf{e}_{2}=\cos v\mathbf{i}_{2}$, $\mathbf{e}_{3}= \frac{1}{1+w}\mathbf{i}_{3}$. Orthogonal.

**Metric.** $g_{11}=e^{2u}$, $g_{22}=\cos^{2}v$, $g_{33}=(1+w)^{-2}$. Inverse: $g^{11}=e^{-2u}$, $g^{22}=\sec^{2}v$, $g^{33}=(1+w)^{2}$.

**Nonzero metric derivatives.** $\partial g_{11}/\partial u=2e^{2u}$; $\partial g_{22}/\partial v=-2\sin v\cos v$; $\partial g_{33}/\partial w=-2(1+w)^{-3}$.

**First-kind** - only diagonal cases survive:

$$
\boxed{\Gamma_{111}=e^{2u},\qquad \Gamma_{222}=-\sin v\cos v,\qquad \Gamma_{333}=- \frac{1}{(1+w)^{3}}.}
$$

**Second-kind**:

$$
\boxed{\Gamma^{1}_{11}=1,\qquad \Gamma^{2}_{22}=-\tan v,\qquad \Gamma^{3}_{33}=- \frac{1}{1+w}.}
$$

All others zero.

---

## 9.3. Orthogonal Coordinates with Given Scale Factors

> [!question]
> Orthogonal system $(a,b,c)$ with $h_{1}=e^{a+b}$, $h_{2}=\sqrt{1+a^{2}}$, $h_{3}=ab$. Find all Christoffel symbols.

**Metric.** $g_{ii}=h_{i}^{2}$:

$$
g_{11}=e^{2(a+b)},\qquad g_{22}=1+a^{2},\qquad g_{33}=a^{2}b^{2}.
$$

$g^{11}=e^{-2(a+b)}$, $g^{22}=1/(1+a^{2})$, $g^{33}=1/(a^{2}b^{2})$.

**Nonzero derivatives.**

- $\partial g_{11}/\partial a=\partial g_{11}/\partial b=2e^{2(a+b)}$
- $\partial g_{22}/\partial a=2a$
- $\partial g_{33}/\partial a=2ab^{2}$, $\partial g_{33}/\partial b=2a^{2}b$

**First-kind** (8.1 cases), nonzero only:

$$
\Gamma_{111}=e^{2(a+b)},\quad \Gamma_{112}=\Gamma_{121}=e^{2(a+b)},\quad \Gamma_{122}=-a,\quad \Gamma_{133}=-ab^{2},
$$

$$
\Gamma_{211}=-e^{2(a+b)},\quad \Gamma_{212}=\Gamma_{221}=a,\quad \Gamma_{233}=-a^{2}b,
$$

$$
\Gamma_{313}=\Gamma_{331}=ab^{2},\quad \Gamma_{323}=\Gamma_{332}=a^{2}b.
$$

**Second-kind** via $\Gamma^{i}_{jk}=\Gamma_{ijk}/g_{ii}$ (no sum, diagonal metric):

$$
\boxed{\Gamma^{1}_{11}=1,\quad \Gamma^{1}_{12}=\Gamma^{1}_{21}=1,\quad \Gamma^{1}_{22}=-ae^{-2(a+b)},\quad \Gamma^{1}_{33}=-ab^{2}e^{-2(a+b)},}
$$

$$
\boxed{\Gamma^{2}_{11}=- \frac{e^{2(a+b)}}{1+a^{2}},\quad \Gamma^{2}_{12}=\Gamma^{2}_{21}= \frac{a}{1+a^{2}},\quad \Gamma^{2}_{33}=- \frac{a^{2}b}{1+a^{2}},}
$$

$$
\boxed{\Gamma^{3}_{13}=\Gamma^{3}_{31}= \frac{1}{a},\quad \Gamma^{3}_{23}=\Gamma^{3}_{32}= \frac{1}{b}.}
$$

All others zero.

---

## 9.4. Christoffel Symbols and Curvature of the Unit Sphere

> [!question]
> Sphere parametrised by $\mathbf{r}=(\sin a\cos b,\sin a\sin b,\cos a)$, $0<a<\pi$, $0<b<2\pi$.
> (1) Compute $\Gamma^{i}_{jk}$. (2) Show the surface has non-zero curvature.

**1) Christoffel symbols.** As a 2D surface (only $a,b$ matter).

$\mathbf{e}_{1}=(\cos a\cos b,\cos a\sin b,-\sin a)$, $\mathbf{e}_{2}=(-\sin a\sin b,\sin a\cos b,0)$.

Metric: $g_{11}=1$, $g_{22}=\sin^{2}a$, $g_{12}=0$. Inverse: $g^{11}=1$, $g^{22}=\csc^{2}a$.

Nonzero derivative: $\partial g_{22}/\partial a=2\sin a\cos a$.

First-kind: $\Gamma_{122}=-\sin a\cos a$, $\Gamma_{212}=\Gamma_{221}=\sin a\cos a$.

Second-kind:

$$
\boxed{\Gamma^{1}_{22}=-\sin a\cos a,\qquad \Gamma^{2}_{12}=\Gamma^{2}_{21}=\cot a.}
$$

All others zero.

**2) Riemann-Christoffel tensor.** Compute the key component $R^{1}_{212}=\partial_{1}\Gamma^{1}_{22}-\partial_{2}\Gamma^{1}_{21}+\Gamma^{p}_{22}\Gamma^{1}_{p1}-\Gamma^{p}_{21}\Gamma^{1}_{p2}$:

- $\partial \Gamma^{1}_{22}/\partial a=-\cos^{2}a+\sin^{2}a=-\cos 2a$.
- $\partial \Gamma^{1}_{21}/\partial b=0$ (since $\Gamma^{1}_{21}=0$).
- $\Gamma^{p}_{22}\Gamma^{1}_{p1}$: both $p=1$ and $p=2$ terms vanish ($\Gamma^{1}_{11}=0$ and $\Gamma^{2}_{22}=0$).
- $\Gamma^{p}_{21}\Gamma^{1}_{p2}$: $p=2$ contributes $\Gamma^{2}_{21}\Gamma^{1}_{22}=\cot a\cdot(-\sin a\cos a)=-\cos^{2}a$.

Therefore:

$$
R^{1}_{212}=-\cos 2a-0+0-(-\cos^{2}a)=-\cos 2a+\cos^{2}a=\boxed{\sin^{2}a}.
$$

Since $\sin^{2}a\neq 0$ on the open interval $0<a<\pi$, the sphere has non-zero curvature - it is **not** Euclidean. ✓

---

## 9.5. Surface of Revolution with Unit-Speed Meridians

> [!question]
> $S$ parametrised by $\mathbf{r}(x,y)=(f(x)\cos y,f(x)\sin y,g(x))$, with $(f')^{2}+(g')^{2}=1$. Find all Christoffel symbols.

**Basis.**

$$
\mathbf{e}_{1}=(f'\cos y,f'\sin y,g'),\qquad \mathbf{e}_{2}=(-f\sin y,f\cos y,0).
$$

**Metric.** Using $(f')^{2}+(g')^{2}=1$:

$$
g_{11}=(f')^{2}+(g')^{2}=1,\qquad g_{22}=f^{2},\qquad g_{12}=0.
$$

Orthogonal; $g^{11}=1$, $g^{22}=1/f^{2}$.

**Nonzero derivative.** $\partial g_{22}/\partial x=2ff'$.

**First-kind**: $\Gamma_{122}=-ff'$, $\Gamma_{212}=\Gamma_{221}=ff'$.

**Second-kind**:

$$
\boxed{\Gamma^{1}_{22}=-ff',\qquad \Gamma^{2}_{12}=\Gamma^{2}_{21}= \frac{f'}{f}.}
$$

All others zero.

---

## 9.6. Curvature of the Surface of Revolution

> [!question]
> Using the Riemann-Christoffel tensor, determine whether the surface $S$ of problem 9.5 has zero curvature (assuming $f\neq 0$).

Apply the formula with $r=1, i=2, j=1, k=2$:

$$
R^{1}_{212}= \frac{\partial \Gamma^{1}_{22}}{\partial x}- \frac{\partial \Gamma^{1}_{21}}{\partial y}+\Gamma^{p}_{22}\Gamma^{1}_{p1}-\Gamma^{p}_{21}\Gamma^{1}_{p2}.
$$

- $\partial \Gamma^{1}_{22}/\partial x=-(f'f'+ff'')=-(f')^{2}-ff''$.
- $\partial \Gamma^{1}_{21}/\partial y=0$.
- $\Gamma^{p}_{22}\Gamma^{1}_{p1}$: all contributions vanish ($\Gamma^{1}_{11}=\Gamma^{1}_{21}=\Gamma^{2}_{22}=0$).
- $\Gamma^{p}_{21}\Gamma^{1}_{p2}$: only $p=2$ contributes, $\Gamma^{2}_{21}\Gamma^{1}_{22}=(f'/f)(-ff')=-(f')^{2}$.

Therefore:

$$
R^{1}_{212}=\bigl(-(f')^{2}-ff''\bigr)-0+0-\bigl(-(f')^{2}\bigr)=\boxed{-ff''}.
$$

**Conclusion.** Since $f\neq 0$, the surface is **Euclidean (flat) iff $f''=0$**, i.e. iff $f$ is linear in $x$. Generically $f''\neq 0$, so the surface has non-zero curvature.

> [!note] When is a surface of revolution flat?
> $f''=0$ means $f(x)=Ax+B$. Combined with $(f')^{2}+(g')^{2}=1$, this constraints $g'=\pm\sqrt{1-A^{2}}$, a constant. Two special cases:
> - $A=0$: $f$ constant ⇒ **cylinder** (radius $B$).
> - $A\neq 0$: **cone** (straight slanted meridian).
> 
> Both are developable (flat) surfaces - consistent with zero curvature. Everything else (sphere, torus, paraboloid, …) has curvature.
