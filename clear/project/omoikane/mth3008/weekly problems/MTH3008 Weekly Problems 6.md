# MTH3008 Weekly Problems 6

> **Original Documents**: [[mth3008 weekly problem sheet 6.pdf|Problem Sheet]] / [[mth3008 weekly problem sheet 6 handwritten solutions.pdf|My Handwritten Solutions]] / [[mth3008 weekly problem sheet 6 solutions.pdf|Provided Solutions]]
>
> **Vibes**: …
>
> **Used Techniques**:
>   - …

***

## 6.1. Composition Of Coordinate Transformation Matrices

> [!question]
> Using the alternative definitions of the transformation coefficients $L^{k}{}_{i'}$ and $L^{i'}{}_{k}$, namely
>
> $$
> L^{k}{}_{i'} = \frac{\partial x^{k}}{\partial x^{\prime i}},\qquad
> L^{i'}{}_{k} = \frac{\partial x^{\prime i}}{\partial x^{k}},
> $$
>
> show that
>
> $$
> L^{i}{}_{k'} L^{k'}{}_{j} = \delta^{i}{}_{j},
> $$
>
> where $\delta^{i}{}_{j}$ is the usual Kronecker delta written in the notation appropriate for generalised coordinate systems. [file:1]

…

---

## 6.2. Contraction Of Covariant And Contravariant Tensors

> [!question]
> Let $A_{ik\ell}$ be a covariant tensor of order $3$ and $B^{pqmn}$ a contravariant tensor of order $4$. Prove that the object with components
>
> $$
> A_{ik\ell} B^{k\ell mn}
> $$
>
> is a mixed tensor of order $3$ with one covariant index and two contravariant indices. [file:1]
> In particular, verify that it transforms with one factor of the inverse transformation for the lower index and two factors of the direct transformation for the upper indices.

…

---

## 6.3. Valid Relations Between Associated Tensors

> [!question]
> For each of the following proposed relations between associated tensors, decide whether it is correct, and justify your answer in each case. [file:1]
> (You may assume $g_{ij}$ and $g^{ij}$ are the components of the metric tensor and its inverse, and that repeated indices are summed.)
>
> 1. $T^{p}{}_{q} = g^{r}{}_{p}\, T_{rq}$.
> 2. $S^{pq} = g^{rp} g^{sq} S_{rs}$.
> 3. $W^{p}{}_{\cdot rs} = g^{s}{}_{q}\, W^{pq}{}_{\cdot\cdot s}$.
> 4. $V^{qm}{}_{\cdot tk}{}^{\cdot\cdot n} = g^{p}{}_{k}\, g^{s}{}_{n}\, g^{r}{}_{m}\, V^{q\cdot st}{}_{\cdot r}{}^{\cdot\cdot p}$.
> 
> Explain in each case how the indices are being raised or lowered and whether the resulting index structure matches on both sides.

…

---

## 6.4. Changing Tensor Components Under A Non‑Orthonormal Basis

> [!question]
> In a Cartesian coordinate system $K$ with orthonormal basis $\{\mathbf{i}_{1}, \mathbf{i}_{2}, \mathbf{i}_{3}\}$, consider the second‑order tensor $P$ whose components satisfy [file:1]
>
> $$
> [P_{ik}] = [P^{ik}] = [P^{\ \ k}_{\! i}] = [P^{\ i}_{\ \ k}] =
> \begin{pmatrix}
> 1 & 1 & -1 \\
> 2 & 3 & 0 \\
> 0 & -2 & 1
> \end{pmatrix}.
> $$
>
> Let $K'$ be a new coordinate system with basis vectors
>
> $$
> \mathbf{e}_{1} = \mathbf{i}_{1},\qquad
> \mathbf{e}_{2} = \mathbf{i}_{1} - \mathbf{i}_{2},\qquad
> \mathbf{e}_{3} = \mathbf{i}_{1} + \mathbf{i}_{2} + 2 \mathbf{i}_{3}.
> $$
>
> 1. Compute the dual basis vectors $\mathbf{e}^{1}, \mathbf{e}^{2}, \mathbf{e}^{3}$ corresponding to $\mathbf{e}_{1}, \mathbf{e}_{2}, \mathbf{e}_{3}$.
> 2. Using part (1) where possible, express the covariant components $P_{i'k'}$, the contravariant components $P^{i'k'}$, and the mixed components $P^{\ \ k'}_{\! i'}$ of $P$ in the coordinate system $K'$.

…

---

## 6.5. Tensor Component Transformation With A Different Basis Change

> [!question]
> In a Cartesian coordinate system $K$ with orthonormal basis $\{\mathbf{i}_{1}, \mathbf{i}_{2}, \mathbf{i}_{3}\}$, consider the second‑order tensor $P$ whose components satisfy [file:1]
>
> $$
> [P_{ik}] = [P^{ik}] = [P^{\ \ k}_{\! i}] = [P^{\ i}_{\ \ k}] =
> \begin{pmatrix}
> 2 & 0 & 0 \\
> 2 & 0 & -1 \\
> 1 & 0 & 0
> \end{pmatrix}.
> $$
>
> Let $K'$ be a new coordinate system with basis vectors
>
> $$
> \mathbf{e}_{1} = \mathbf{i}_{1} - \mathbf{i}_{2},\qquad
> \mathbf{e}_{2} = \mathbf{i}_{2},\qquad
> \mathbf{e}_{3} = \mathbf{i}_{1} + 2 \mathbf{i}_{3}.
> $$
>
> 1. Compute the dual basis vectors $\mathbf{e}^{1}, \mathbf{e}^{2}, \mathbf{e}^{3}$.
> 2. Using part (1) where possible, express the covariant components $P_{i'k'}$, the contravariant components $P^{i'k'}$, and the mixed components $P^{\ \ k'}_{\! i'}$ of $P$ in the coordinate system $K'$.

…

---

## 6.6. Transforming Components Using Metric And Dual Basis

> [!question]
> In a Cartesian coordinate system $K$ with orthonormal basis $\{\mathbf{i}_{1}, \mathbf{i}_{2}, \mathbf{i}_{3}\}$, consider the second‑order tensor $B$ with components [file:1]
>
> $$
> [B_{ik}] = [B^{ik}] = [B^{\ \ k}_{\! i}] = [B^{\ i}_{\ \ k}] =
> \begin{pmatrix}
> 0 & 1 & 0 \\
> -1 & 0 & 1 \\
> 0 & 0 & 1
> \end{pmatrix}.
> $$
>
> Let $K'$ be a new coordinate system with basis vectors
>
> $$
> \mathbf{e}_{1} = \mathbf{i}_{1} - \mathbf{i}_{2},\qquad
> \mathbf{e}_{2} = \mathbf{i}_{1} + 4 \mathbf{i}_{2} + \mathbf{i}_{3},\qquad
> \mathbf{e}_{3} = \mathbf{i}_{1} + 3 \mathbf{i}_{2} + \mathbf{i}_{3}.
> $$
>
> 1. Compute the covariant components $B_{i'k'}$ of $B$ in the system $K'$.
> 2. Compute the dual basis vectors $\mathbf{e}^{1}, \mathbf{e}^{2}, \mathbf{e}^{3}$.
> 3. Using the metric tensor in $K'$, compute the contravariant components $B^{i'k'}$.

…
