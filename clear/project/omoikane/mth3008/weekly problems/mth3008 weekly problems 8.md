# MTH3008 Weekly Problems 8

> **Original Documents**: [[mth3008 weekly problem sheet 8.pdf|Problem Sheet]] / [[mth3008 weekly problem sheet 8 handwritten solutions.pdf|My Handwritten Solutions]] / `[[mth3008 weekly problem sheet 8 solutions.pdf|Provided Solutions]]`
>
> **Vibes**: …
>
> **Used Techniques**:
>   - …

***

## 8.1. Christoffel Symbols in Orthogonal Coordinates

> [!question]
> The **Christoffel symbols of the first kind** $\Gamma_{ijk}$ can be written in terms of the **metric tensor** $g_{ij}$ as
> $\displaystyle \Gamma_{ijk} = \frac{1}{2}\left(\frac{\partial g_{ik}}{\partial x^{j}} + \frac{\partial g_{ij}}{\partial x^{k}} - \frac{\partial g_{kj}}{\partial x^{i}}\right).$
>
> This expression simplifies for **orthogonal coordinate systems** (that is, when $g_{ij} = 0$ for $i \neq j$).
>
> Find the simplified expressions for $\Gamma_{ijk}$ in the following cases:
> 1. $i = j = k$;
> 2. $i = j \neq k$;
> 3. $i \neq j = k$;
> 4. $i, j, k$ are all distinct.

…

---

## 8.2. Christoffel Symbols in Spherical Coordinates

> [!question]
> We consider **spherical coordinates** $(x^{1}, x^{2}, x^{3}) = (r, \varphi, \theta)$, where the **metric tensor** has components
> $\displaystyle g_{11} = 1,\quad g_{22} = r^{2},\quad g_{33} = r^{2}\sin^{2}\varphi,$
> and all other components of $g_{ij}$ are zero.
>
> Find all **Christoffel symbols of the first kind** $\Gamma_{ijk}$ and the corresponding **Christoffel symbols of the second kind** $\Gamma^{i}{}_{jk}$.

…

---

## 8.3. Exotic Polar-Type Coordinates in 2D

> [!question]
> Consider the 2D coordinates $(x^{1}, x^{2}) = (\rho, \theta)$ in the plane, where the **position vector** $\mathbf{r}$ is given by
> $\displaystyle \mathbf{r} = \rho^{2}\cos(2\theta)\,\mathbf{i}_{1} + \rho^{2}\sin(2\theta)\,\mathbf{i}_{2},$
> with $\mathbf{i}_{1}, \mathbf{i}_{2}$ the usual Cartesian basis vectors in $\mathbb{R}^{2}$.
>
> 1. Find the corresponding **coordinate basis vectors** $\mathbf{e}_{1}$ and $\mathbf{e}_{2}$.
> 2. Compute the **covariant metric tensor** $g_{ij}$ and present your answer as a $2 \times 2$ matrix. Using that $\mathbf{e}_{1}, \mathbf{e}_{2}$ form an orthogonal basis, determine the **contravariant metric tensor** $g^{ij}$.
> 3. Find all **Christoffel symbols of the first kind** $\Gamma_{ijk}$.
> 4. Find all **Christoffel symbols of the second kind** $\Gamma^{i}{}_{jk}$.

…

---

## 8.4. Time-Dependent 3D Coordinate System

> [!question]
> Consider the coordinates $(x^{1}, x^{2}, x^{3}) = (x, y, t)$ in $\mathbb{R}^{3}$, where the **position vector** $\mathbf{r}$ is given by
> $\displaystyle \mathbf{r} = (x^{2} - y^{2})\,\mathbf{i}_{1} + (2xy)\,\mathbf{i}_{2} + t\,\mathbf{i}_{3},$
> with $\mathbf{i}_{1}, \mathbf{i}_{2}, \mathbf{i}_{3}$ the usual Cartesian basis vectors.
>
> 1. Find the corresponding **coordinate basis vectors** $\mathbf{e}_{1}, \mathbf{e}_{2}, \mathbf{e}_{3}$.
> 2. Compute the **covariant metric tensor** $g_{ij}$ and the **contravariant metric tensor** $g^{ij}$, and give your final answers as $3 \times 3$ matrices.
> 3. Find all **Christoffel symbols of the first kind** $\Gamma_{ijk}$.
> 4. Find all **Christoffel symbols of the second kind** $\Gamma^{i}{}_{jk}$.

…

---

## 8.5. Tensorial Nature of the Covariant Derivative

> [!question]
> The **transformation law** for the Christoffel symbols of the second kind is
> $\displaystyle \Gamma^{i'}{}_{j'k'} = L^{i'}{}_{\ell}\,L^{m}{}_{j'}\,L^{n}{}_{k'}\,\Gamma^{\ell}{}_{mn} + L^{i'}{}_{m}\,L^{n}{}_{k'}\,\frac{\partial L^{m}{}_{j'}}{\partial x^{n}},$
> where $L^{i'}{}_{\ell}$ and $L^{m}{}_{j'}$ are the components of the coordinate transformation.
>
> Show that the **covariant derivative of a covariant vector** is a **second-rank covariant tensor**.
>
> *Hint:* You may use the identities $L^{m}{}_{k'} = \dfrac{\partial x^{m}}{\partial x^{k'}}$ and $L^{r}{}_{j'}\,L^{j'}{}_{\ell} = \delta^{r}{}_{\ell}$ that have already been established.

…
