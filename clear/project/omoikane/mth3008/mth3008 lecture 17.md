# MTH3008 Lecture 17

> [!quote]
> …

We are back after the break (weeks 27-29), picking up Chapter 7 where Lecture 16 left off. Last time we defined the Christoffel symbols of the first and second kind, connected them to the metric tensor, and wrote down the covariant derivatives of vectors in terms of Christoffel symbols. This lecture extends covariant differentiation to rank-2 tensors, then proves a clean and powerful result - Ricci's theorem - and mines it for practical consequences.

## Recap: Covariant Derivatives and Christoffel Symbols

A quick refresher on the machinery we built in Lecture 16. In a generalised coordinate system with **[[local basis]]** $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$ that varies from point to point, any vector $\mathbf{A}$ can be expanded as

$$
\mathbf{A} = A_j \mathbf{e}^j = A^j \mathbf{e}_j.
$$

The differential of $\mathbf{A}$ picks up extra terms because the basis vectors themselves change:

$$
d\mathbf{A} = \mathbf{e}^j \, dA_j + A_j \, d\mathbf{e}^j = \mathbf{e}_j \, dA^j + A^j \, d\mathbf{e}_j.
$$

The **[[covariant derivative]]** components of $\mathbf{A}$ with respect to $x^k$ are

$$
\boxed{A_{i,k} = \frac{\partial A_i}{\partial x^k} - \Gamma^j_{\ ik} A_j, \qquad A^i_{\ ,k} = \frac{\partial A^i}{\partial x^k} + \Gamma^i_{\ jk} A^j.}
$$

Here the **[[Christoffel symbols of the second kind]]** are defined by

$$
\Gamma^i_{\ jk} = \mathbf{e}^i \cdot \frac{\partial \mathbf{e}_j}{\partial x^k},
$$

and the **[[Christoffel symbols of the first kind]]** by

$$
\Gamma_{ijk} = \mathbf{e}_i \cdot \frac{\partial \mathbf{e}_j}{\partial x^k}.
$$

They are related through the metric tensor:

$$
\Gamma_{ijk} = g_{i\ell}\,\Gamma^\ell_{\ jk}, \qquad \Gamma^i_{\ jk} = g^{i\ell}\,\Gamma_{\ell kj}.
$$

Key properties from last time:

- **Symmetry in the last two indices:** $\Gamma_{ijk} = \Gamma_{ikj}$ and $\Gamma^i_{\ jk} = \Gamma^i_{\ kj}$.
- **They are not tensors** - despite the index notation.
- **Relation to the metric:**

$$
\boxed{\Gamma_{ijk} = \frac{1}{2}\left(\frac{\partial g_{ij}}{\partial x^k} + \frac{\partial g_{ik}}{\partial x^j} - \frac{\partial g_{jk}}{\partial x^i}\right)}
$$

$$
\boxed{\Gamma^i_{\ jk} = \frac{1}{2} g^{i\ell}\left(\frac{\partial g_{\ell j}}{\partial x^k} + \frac{\partial g_{\ell k}}{\partial x^j} - \frac{\partial g_{jk}}{\partial x^\ell}\right)}
$$

## Covariant Differentiation of Tensors

We know how to covariantly differentiate vectors. What about higher-rank tensors? The rule generalises naturally: each index on the tensor contributes one Christoffel-symbol correction term.

For a **[[covariant rank-2 tensor]]** $T_{ik}$, the covariant derivative with respect to $x^\ell$ is

$$
\boxed{T_{ik,\ell} = \frac{\partial T_{ik}}{\partial x^\ell} - \Gamma^m_{\ i\ell}\, T_{mk} - \Gamma^m_{\ k\ell}\, T_{im}.}
$$

Each lower index gets a $-\Gamma$ correction that contracts the Christoffel symbol with that slot of the tensor. The pattern is systematic: a contravariant (upper) index would contribute a $+\Gamma$ term instead, just as it does for vectors.

> [!warning]
> Each index of $T_{ik}$ generates its own Christoffel correction. Miss one and the whole expression fails to transform as a tensor. For a rank-$n$ tensor, expect $n$ correction terms beyond the partial derivative.

## Ricci's Theorem

This is the centrepiece of the lecture.

> [!important]
> **[[Ricci's theorem]]**: The covariant derivative of the metric tensor vanishes:
> $\displaystyle g_{ik,\ell} = 0.$

In words: the metric tensor is covariantly constant. This is a deep statement - it says that covariant differentiation is compatible with the inner-product structure defined by $g_{ik}$.

### Proof of Ricci's Theorem

Apply the covariant derivative formula for a rank-2 covariant tensor to $T_{ik} = g_{ik}$:

$$
g_{ik,\ell} = \frac{\partial g_{ik}}{\partial x^\ell} - \Gamma^m_{\ i\ell}\, g_{mk} - \Gamma^m_{\ k\ell}\, g_{im}.
$$

Now use the index-lowering relation $\Gamma_{ijk} = g_{i\ell}\,\Gamma^\ell_{\ jk}$ to collapse the two Christoffel terms. Contracting $\Gamma^m_{\ i\ell}\, g_{mk}$ over $m$ gives $\Gamma_{ki\ell}$, and contracting $\Gamma^m_{\ k\ell}\, g_{im}$ gives $\Gamma_{ik\ell}$. So

$$
g_{ik,\ell} = \frac{\partial g_{ik}}{\partial x^\ell} - \Gamma_{ki\ell} - \Gamma_{ik\ell}.
$$

Substitute the explicit formula for first-kind Christoffel symbols:

$$
\Gamma_{ik\ell} = \frac{1}{2}\left(\frac{\partial g_{ik}}{\partial x^\ell} + \frac{\partial g_{i\ell}}{\partial x^k} - \frac{\partial g_{k\ell}}{\partial x^i}\right), \qquad \Gamma_{ki\ell} = \frac{1}{2}\left(\frac{\partial g_{ki}}{\partial x^\ell} + \frac{\partial g_{k\ell}}{\partial x^i} - \frac{\partial g_{i\ell}}{\partial x^k}\right).
$$

Add these two:

$$
\Gamma_{ik\ell} + \Gamma_{ki\ell} = \frac{1}{2}\left(\frac{\partial g_{ik}}{\partial x^\ell} + \cancel{\frac{\partial g_{i\ell}}{\partial x^k}} - \cancel{\frac{\partial g_{k\ell}}{\partial x^i}}\right) + \frac{1}{2}\left(\frac{\partial g_{ik}}{\partial x^\ell} + \cancel{\frac{\partial g_{k\ell}}{\partial x^i}} - \cancel{\frac{\partial g_{i\ell}}{\partial x^k}}\right) = \frac{\partial g_{ik}}{\partial x^\ell}.
$$

The cross-terms cancel in pairs (using $g_{ki} = g_{ik}$). Substituting back:

$$
g_{ik,\ell} = \frac{\partial g_{ik}}{\partial x^\ell} - \frac{\partial g_{ik}}{\partial x^\ell} = 0. \qquad \square
$$

## Consequences of Ricci's Theorem

### Useful Formula for Partial Derivatives of the Metric

Since $g_{ik,\ell} = 0$, we can rearrange the covariant derivative expression to get a handy identity:

$$
\boxed{\frac{\partial g_{ik}}{\partial x^\ell} = \Gamma_{ik\ell} + \Gamma_{ki\ell}.}
$$

This lets you read off partial derivatives of the metric directly from Christoffel symbols - or, conversely, constrain Christoffel symbols from known metric components.

### Antisymmetry in Orthogonal Coordinates

In **[[orthogonal coordinates]]**, the metric tensor is diagonal: $g_{ik} = 0$ for $i \neq k$. Then $\frac{\partial g_{ik}}{\partial x^\ell} = 0$ whenever $i \neq k$, so the useful formula gives

$$
\Gamma_{ik\ell} + \Gamma_{ki\ell} = 0 \quad (i \neq k),
$$

which means

$$
\boxed{\Gamma_{ik\ell} = -\Gamma_{ki\ell} \quad \text{(orthogonal coordinates, } i \neq k\text{)}.}
$$

This antisymmetry in the first two indices (for first-kind symbols) is a powerful shortcut: compute one symbol, get another for free with a sign flip.

> [!warning]
> This antisymmetry $\Gamma_{ik\ell} = -\Gamma_{ki\ell}$ holds only for Christoffel symbols of the **first** kind. The second-kind symbols $\Gamma^i_{\ jk}$ do not satisfy $\Gamma^i_{\ jk} = -\Gamma^j_{\ ik}$ in general, because raising the first index with $g^{i\ell}$ destroys the simple sign relationship. See the example below.

## Example: Orthogonal Coordinate System $(\rho, \tau, \theta)$

> [!example]
> Consider an orthogonal coordinate system $(x^1, x^2, x^3) = (\rho, \tau, \theta)$ with metric component $g_{22} = \rho^2 - \tau^2$. Find $\Gamma_{122}$, $\Gamma_{212}$, and $\Gamma_{221}$.

### Computing $\Gamma_{122}$

Use the first-kind formula directly. Since the coordinates are orthogonal, $g_{12} = 0$:

$$
\Gamma_{122} = \frac{1}{2}\left(\frac{\partial g_{12}}{\partial x^2} + \frac{\partial g_{12}}{\partial x^2} - \frac{\partial g_{22}}{\partial x^1}\right) = -\frac{1}{2}\frac{\partial g_{22}}{\partial \rho} = -\frac{1}{2}\frac{\partial}{\partial \rho}(\rho^2 - \tau^2) = -\rho.
$$

### Obtaining $\Gamma_{212}$ and $\Gamma_{221}$ via Ricci's Theorem

By the orthogonal-coordinates antisymmetry (since $1 \neq 2$):

$$
\Gamma_{212} = -\Gamma_{122} = \rho.
$$

By symmetry in the last two indices:

$$
\Gamma_{221} = \Gamma_{212} = \rho.
$$

So Ricci's theorem and index symmetry together reduce three separate computations to one.

### Why Second-Kind Symbols Break the Pattern

Now assume additionally $g_{11} = 1$. Since the system is orthogonal:

$$
g^{11} = \frac{1}{g_{11}} = 1, \qquad g^{22} = \frac{1}{g_{22}} = \frac{1}{\rho^2 - \tau^2}.
$$

Raise the first index using $\Gamma^i_{\ jk} = g^{i\ell}\,\Gamma_{\ell jk}$:

$$
\Gamma^1_{\ 22} = g^{11}\,\Gamma_{122} = 1 \cdot (-\rho) = -\rho,
$$

$$
\Gamma^2_{\ 12} = g^{22}\,\Gamma_{212} = \frac{1}{\rho^2 - \tau^2} \cdot \rho = \frac{\rho}{\rho^2 - \tau^2}.
$$

Clearly $\Gamma^1_{\ 22} \neq -\Gamma^2_{\ 12}$, confirming that the first-index antisymmetry does not carry over to second-kind symbols. What does still hold for the second kind is the symmetry in the last two indices:

$$
\Gamma^2_{\ 21} = \Gamma^2_{\ 12} = \frac{\rho}{\rho^2 - \tau^2}.
$$

---

## Pre-Lecture Notes from [[mth3008 lecture notes 17.pdf|University Notes]]

- **Recap slides (pp. 1-13):** Review of local bases, differentials of vectors, covariant derivative formulas for vectors ($A_{i,k}$ and $A^i_{\ ,k}$), definition and properties of Christoffel symbols (both kinds), their symmetry in the last two indices, their non-tensorial character, and explicit formulas relating them to metric tensor derivatives
- **Covariant derivative of rank-2 tensors (p. 16):** General formula $T_{ik,\ell} = \frac{\partial T_{ik}}{\partial x^\ell} - \Gamma^m_{\ i\ell} T_{mk} - \Gamma^m_{\ k\ell} T_{im}$ applied to the metric tensor
- **Ricci's theorem (pp. 15-18):** Statement that $g_{ik,\ell} = 0$; proof by substituting the first-kind Christoffel formula and observing pairwise cancellation of cross-terms
- **Useful formula (p. 19):** Rearrangement to $\frac{\partial g_{ik}}{\partial x^\ell} = \Gamma_{ik\ell} + \Gamma_{ki\ell}$; specialisation to orthogonal coordinates giving $\Gamma_{ik\ell} = -\Gamma_{ki\ell}$
- **Worked example (pp. 20-24):** Orthogonal system $(\rho, \tau, \theta)$ with $g_{22} = \rho^2 - \tau^2$; computation of $\Gamma_{122} = -\rho$, deduction of $\Gamma_{212} = \rho$ and $\Gamma_{221} = \rho$ via Ricci; demonstration that $\Gamma^1_{\ 22} \neq -\Gamma^2_{\ 12}$ for second-kind symbols
- **Next lecture:** Riemann-Christoffel tensor
