# MTH3008 Lecture 16

> [!quote]
> ...

Last time we began Chapter 7 on tensor fields, setting up vector fields, local bases, and the machinery of covariant differentiation - deriving the differential of a vector in Cartesian, fixed general, and local basis coordinate systems. This lecture picks up where we left off, introducing Christoffel symbols to package the geometry of the local basis, then deriving their connection to the metric tensor and extending covariant differentiation to tensors of arbitrary rank.

## Covariant Derivatives - Recap

Recall from Lecture 15 that the **[[Covariant Differentiation]]** of the covariant and contravariant components of a vector $\mathbf{A}$ are

$$
A_{i,k} = \frac{\partial A_i}{\partial x^k} + A_j \frac{\partial \mathbf{e}^j}{\partial x^k} \cdot \mathbf{e}_i, \qquad A^i_{\ ,k} = \frac{\partial A^i}{\partial x^k} + A^j \frac{\partial \mathbf{e}_j}{\partial x^k} \cdot \mathbf{e}^i.
$$

Each expression splits into a partial derivative of the component plus a correction term that accounts for how the basis vectors themselves change from point to point. Those correction terms are crying out for a name.

## Christoffel Symbols

### Definition - Second Kind

We define the **[[Christoffel Symbols]]** $\Gamma^i_{jk}$ by

$$
\boxed{\Gamma^i_{\ jk} = \mathbf{e}^i \cdot \frac{\partial \mathbf{e}_j}{\partial x^k}}
$$

These are the contravariant components of $\frac{\partial \mathbf{e}_j}{\partial x^k}$ expanded in the basis $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$. In other words, $\Gamma^i_{\ jk}$ are the **[[Christoffel Symbols]]** of the rate of change of the basis vectors:

$$
\frac{\partial \mathbf{e}_j}{\partial x^k} = \Gamma^i_{\ jk}\, \mathbf{e}_i.
$$

This follows directly from the definition: dotting both sides of the expansion $\frac{\partial \mathbf{e}_j}{\partial x^k} = A^1 \mathbf{e}_1 + A^2 \mathbf{e}_2 + A^3 \mathbf{e}_3$ with $\mathbf{e}^i$ picks out $A^i = \Gamma^i_{\ jk}$ via the reciprocity relation $\mathbf{e}^i \cdot \mathbf{e}_m = \delta^i_m$.

### Definition - First Kind

We can equally expand $\frac{\partial \mathbf{e}_j}{\partial x^k}$ with respect to the dual basis $\mathbf{e}^1, \mathbf{e}^2, \mathbf{e}^3$. The coefficients of that expansion are the **[[Christoffel Symbols]]** $\Gamma_{ijk}$:

$$
\frac{\partial \mathbf{e}_j}{\partial x^k} = \Gamma_{ijk}\, \mathbf{e}^i
$$

so that

$$
\boxed{\Gamma_{ijk} = \mathbf{e}_i \cdot \frac{\partial \mathbf{e}_j}{\partial x^k}}
$$

> [!note]
> The two kinds differ only in which basis is used for the dot product: $\mathbf{e}^i$ (upper index, second kind) versus $\mathbf{e}_i$ (lower index, first kind). The vector being differentiated is always $\mathbf{e}_j$.

### Covariant Derivatives in Terms of Christoffel Symbols

Substituting the definitions into the covariant derivative expressions gives the clean forms

$$
\boxed{A_{i,k} = \frac{\partial A_i}{\partial x^k} - \Gamma^j_{\ ik}\, A_j}
$$

$$
\boxed{A^i_{\ ,k} = \frac{\partial A^i}{\partial x^k} + \Gamma^i_{\ jk}\, A^j}
$$

> [!warning]
> Watch the signs and index placement carefully. The covariant component $A_{i,k}$ picks up a *minus* sign with $\Gamma^j_{\ ik}$, while the contravariant component $A^i_{\ ,k}$ picks up a *plus* sign with $\Gamma^i_{\ jk}$. The free index on the Christoffel symbol matches the position (up or down) of the component being differentiated.

### Fixed Basis as a Sanity Check

If the basis is fixed (constant everywhere), then $\frac{\partial \mathbf{e}_j}{\partial x^k} = \mathbf{0}$ and all Christoffel symbols vanish:

$$
\Gamma^i_{\ jk} = \mathbf{e}^i \cdot \frac{\partial \mathbf{e}_j}{\partial x^k} = 0.
$$

The covariant derivatives then collapse to ordinary partial derivatives:

$$
A_{i,k} = \frac{\partial A_i}{\partial x^k}, \qquad A^i_{\ ,k} = \frac{\partial A^i}{\partial x^k}.
$$

This is exactly what we expect - in a Cartesian system, differentiation of components is just partial differentiation.

## Christoffel Symbols and the Metric Tensor

### Raising and Lowering with the Metric

The two kinds of Christoffel symbol are related by the **[[metric tensor]]** in the same way that covariant and contravariant components of any object are related - by raising or lowering indices:

$$
\boxed{\Gamma_{ijk} = g_{i\ell}\, \Gamma^\ell_{\ jk}, \qquad \Gamma^i_{\ jk} = g^{i\ell}\, \Gamma_{\ell kj}}
$$

This is a direct consequence of the definitions and the metric relations $g_{i\ell} = \mathbf{e}_i \cdot \mathbf{e}_\ell$ and $g^{i\ell} = \mathbf{e}^i \cdot \mathbf{e}^\ell$.

### Deriving the First Kind from the Metric Tensor

The Christoffel symbols of the first kind enjoy a symmetry in their last two indices: $\Gamma_{ijk} = \Gamma_{ikj}$. This follows because

$$
\Gamma_{ijk} = \mathbf{e}_i \cdot \frac{\partial \mathbf{e}_j}{\partial x^k}
$$

and the local basis vectors satisfy $\mathbf{e}_j = \frac{\partial \mathbf{r}}{\partial x^j}$, so $\frac{\partial \mathbf{e}_j}{\partial x^k} = \frac{\partial^2 \mathbf{r}}{\partial x^k \partial x^j} = \frac{\partial^2 \mathbf{r}}{\partial x^j \partial x^k} = \frac{\partial \mathbf{e}_k}{\partial x^j}$, giving $\Gamma_{ijk} = \Gamma_{ikj}$.

Using this symmetry, we can write $\Gamma_{ijk} = \frac{1}{2}(\Gamma_{ijk} + \Gamma_{ikj})$ and expand via the definition:

$$
\Gamma_{ijk} = \frac{1}{2}\left(\mathbf{e}_i \cdot \frac{\partial \mathbf{e}_j}{\partial x^k} + \mathbf{e}_i \cdot \frac{\partial \mathbf{e}_k}{\partial x^j}\right).
$$

The trick is to use the product rule to introduce metric tensor components. Since $g_{ij} = \mathbf{e}_i \cdot \mathbf{e}_j$, we have

$$
\frac{\partial g_{ij}}{\partial x^k} = \frac{\partial \mathbf{e}_i}{\partial x^k} \cdot \mathbf{e}_j + \mathbf{e}_i \cdot \frac{\partial \mathbf{e}_j}{\partial x^k},
$$

so each dot product $\mathbf{e}_i \cdot \frac{\partial \mathbf{e}_j}{\partial x^k}$ can be rewritten as $\frac{\partial g_{ij}}{\partial x^k} - \mathbf{e}_j \cdot \frac{\partial \mathbf{e}_i}{\partial x^k}$. Applying this systematically:

$$
\Gamma_{ijk} = \frac{1}{2}\left(\frac{\partial g_{ij}}{\partial x^k} + \frac{\partial g_{ik}}{\partial x^j} - \mathbf{e}_j \cdot \frac{\partial \mathbf{e}_i}{\partial x^k} - \mathbf{e}_k \cdot \frac{\partial \mathbf{e}_i}{\partial x^j}\right).
$$

The two leftover dot products recombine via the product rule as $\frac{\partial}{\partial x^i}(\mathbf{e}_j \cdot \mathbf{e}_k) = \frac{\partial g_{jk}}{\partial x^i}$, yielding the final result:

$$
\boxed{\Gamma_{ijk} = \frac{1}{2}\left(\frac{\partial g_{ij}}{\partial x^k} + \frac{\partial g_{ik}}{\partial x^j} - \frac{\partial g_{jk}}{\partial x^i}\right)}
$$

This is a major result: the Christoffel symbols of the first kind are determined entirely by the metric tensor and its partial derivatives.

### Formula for the Second Kind

Combining the first-kind formula with the index-raising relation $\Gamma^i_{\ jk} = g^{i\ell}\, \Gamma_{\ell kj}$ gives

$$
\boxed{\Gamma^i_{\ jk} = \frac{1}{2}\, g^{i\ell}\left(\frac{\partial g_{\ell j}}{\partial x^k} + \frac{\partial g_{\ell k}}{\partial x^j} - \frac{\partial g_{jk}}{\partial x^\ell}\right)}
$$

So both kinds of Christoffel symbol are fully determined by the metric. No additional geometric data is needed.

## Worked Example - Computing Christoffel Symbols

> [!example]
> Suppose a coordinate system $(x^1, x^2, x^3) = (\rho, \phi, \theta)$ has metric tensor components $g_{11} = 1$, $g_{22} = r^2$, $g_{33} = \sin\phi\sin\theta$, and $g_{ij} = 0$ for $i \neq j$. Find all Christoffel symbols of both kinds.

### Step 1 - Identify Non-Zero Derivatives

All $g_{ij}$ are constant except $g_{22} = r^2$ (depends on $x^1 = \rho$) and $g_{33} = \sin\phi\sin\theta$ (depends on $x^2 = \phi$ and $x^3 = \theta$). So

$$
\frac{\partial g_{ij}}{\partial x^k} = 0 \quad \text{unless} \quad (i,j,k) \in \{(2,2,1),\; (3,3,2),\; (3,3,3)\}.
$$

The non-zero derivatives are:

$$
\frac{\partial g_{22}}{\partial x^1} = 2r, \qquad \frac{\partial g_{33}}{\partial x^2} = \cos\phi\sin\theta, \qquad \frac{\partial g_{33}}{\partial x^3} = \sin\phi\cos\theta.
$$

### Step 2 - First Kind Christoffel Symbols

The only possibly non-zero $\Gamma_{ijk}$ are those whose indices are some permutation of $\{2,2,1\}$, $\{3,3,2\}$, or $\{3,3,3\}$. Computing each:

$$
\Gamma_{122} = \frac{1}{2}\left(\frac{\partial g_{12}}{\partial x^2} + \frac{\partial g_{12}}{\partial x^2} - \frac{\partial g_{22}}{\partial x^1}\right) = -\frac{1}{2}(2r) = -r.
$$

$$
\Gamma_{212} = \frac{1}{2}\left(\frac{\partial g_{21}}{\partial x^2} + \frac{\partial g_{22}}{\partial x^1} - \frac{\partial g_{12}}{\partial x^2}\right) = \frac{1}{2}(2r) = r.
$$

By symmetry in the last two indices, $\Gamma_{221} = \Gamma_{212} = r$.

$$
\Gamma_{233} = -\frac{1}{2}\frac{\partial g_{33}}{\partial x^2} = -\frac{1}{2}\cos\phi\sin\theta.
$$

$$
\Gamma_{323} = \Gamma_{332} = \frac{1}{2}\frac{\partial g_{33}}{\partial x^2} = \frac{1}{2}\cos\phi\sin\theta.
$$

$$
\Gamma_{333} = \frac{1}{2}\frac{\partial g_{33}}{\partial x^3} = \frac{1}{2}\sin\phi\cos\theta.
$$

All other $\Gamma_{ijk} = 0$.

### Step 3 - Second Kind Christoffel Symbols

Use $\Gamma^i_{\ jk} = g^{i\ell}\,\Gamma_{\ell kj}$ with $g^{ii} = 1/g_{ii}$ (since the metric is diagonal):

$$
\Gamma^1_{\ 22} = g^{11}\Gamma_{122} = \frac{1}{1}(-r) = -r.
$$

$$
\Gamma^2_{\ 21} = \Gamma^2_{\ 12} = g^{22}\Gamma_{221} = \frac{1}{r^2} \cdot r = \frac{1}{r}.
$$

$$
\Gamma^2_{\ 33} = g^{22}\Gamma_{233} = -\frac{\cos\phi\sin\theta}{2r^2}.
$$

$$
\Gamma^3_{\ 23} = \Gamma^3_{\ 32} = g^{33}\Gamma_{332} = \frac{\cos\phi\sin\theta}{2\sin\phi\sin\theta} = \frac{1}{2\tan\phi}.
$$

$$
\Gamma^3_{\ 33} = g^{33}\Gamma_{333} = \frac{\sin\phi\cos\theta}{2\sin\phi\sin\theta} = \frac{1}{2\tan\theta}.
$$

All other $\Gamma^i_{\ jk} = 0$.

> [!note]
> The task at the end of the slides asks you to repeat this procedure for spherical coordinates with $g_{11} = 1$, $g_{22} = r^2$, $g_{33} = r^2\sin^2\phi$ - see [[mth3008 weekly problems 8#8.2. Christoffel Symbols in Spherical Coordinates]].

## Covariant Differentiation of Tensors

The covariant derivative machinery extends naturally from vectors to tensors of any rank. Recall the vector formulas:

$$
A_{i,k} = \frac{\partial A_i}{\partial x^k} - \Gamma^j_{\ ik}\, A_j, \qquad A^i_{\ ,k} = \frac{\partial A^i}{\partial x^k} + \Gamma^i_{\ jk}\, A^j.
$$

The pattern is: each covariant (lower) index generates a $-\Gamma$ term, and each contravariant (upper) index generates a $+\Gamma$ term.

### Second-Rank Tensors

For a **[[Covariant and Contravariant Components]]** of rank 2:

$$
\boxed{T_{ik,\ell} = \frac{\partial T_{ik}}{\partial x^\ell} - \Gamma^m_{\ i\ell}\, T_{mk} - \Gamma^m_{\ k\ell}\, T_{im}}
$$

Each lower index contributes its own $-\Gamma$ correction, with the dummy index $m$ contracting against the corresponding slot.

For a **[[Covariant and Contravariant Components]]** of rank 2:

$$
\boxed{T^{ik}_{\ \ ,\ell} = \frac{\partial T^{ik}}{\partial x^\ell} + \Gamma^i_{\ m\ell}\, T^{mk} + \Gamma^k_{\ m\ell}\, T^{im}}
$$

Each upper index contributes a $+\Gamma$ correction.

For a **[[Mixed Components]]** of rank 2:

$$
\boxed{T^i_{\ .k,\ell} = \frac{\partial T^i_{\ .k}}{\partial x^\ell} + \Gamma^i_{\ m\ell}\, T^m_{\ .k} - \Gamma^m_{\ k\ell}\, T^i_{\ .m}}
$$

The upper index $i$ gives $+\Gamma$ and the lower index $k$ gives $-\Gamma$.

> [!warning]
> When writing covariant derivatives of mixed tensors, the dot in $T^i_{\ .k}$ matters - it marks which slot is up and which is down. Without it, $T^i_{\ k}$ is ambiguous between $T^i_{\ .k}$ and $T^{\ i}_{k.}$, which are generally different tensors.

> [!important]
> The rule generalises to any rank: take the partial derivative, then add one Christoffel correction per index - $+\Gamma$ for each upper index, $-\Gamma$ for each lower index. Each correction replaces that index with a dummy and contracts the Christoffel symbol appropriately. These covariant derivatives transform as tensors (proof left as an exercise in the lecture slides).

---

## Pre-Lecture Notes from [[mth3008 lecture notes 16.pdf]]

- **Christoffel symbols of the second kind**: $\Gamma^i_{\ jk} = \mathbf{e}^i \cdot \frac{\partial \mathbf{e}_j}{\partial x^k}$ - expansion coefficients of $\frac{\partial \mathbf{e}_j}{\partial x^k}$ in the basis $\{\mathbf{e}_i\}$
- **Christoffel symbols of the first kind**: $\Gamma_{ijk} = \mathbf{e}_i \cdot \frac{\partial \mathbf{e}_j}{\partial x^k}$ - expansion coefficients of $\frac{\partial \mathbf{e}_j}{\partial x^k}$ in the dual basis $\{\mathbf{e}^i\}$
- Related via the metric: $\Gamma_{ijk} = g_{i\ell}\,\Gamma^\ell_{\ jk}$ and $\Gamma^i_{\ jk} = g^{i\ell}\,\Gamma_{\ell kj}$
- For a fixed basis, all Christoffel symbols vanish and covariant derivatives reduce to partials
- First kind formula from the metric: $\Gamma_{ijk} = \frac{1}{2}\!\left(\frac{\partial g_{ij}}{\partial x^k} + \frac{\partial g_{ik}}{\partial x^j} - \frac{\partial g_{jk}}{\partial x^i}\right)$
- Second kind formula: $\Gamma^i_{\ jk} = \frac{1}{2}\,g^{i\ell}\!\left(\frac{\partial g_{\ell j}}{\partial x^k} + \frac{\partial g_{\ell k}}{\partial x^j} - \frac{\partial g_{jk}}{\partial x^\ell}\right)$
- Worked example computing all Christoffel symbols for a diagonal metric with $g_{22} = r^2$, $g_{33} = \sin\phi\sin\theta$
- Covariant differentiation of rank-2 tensors: each lower index gives $-\Gamma$, each upper index gives $+\Gamma$
- Next lecture: Ricci's theorem
