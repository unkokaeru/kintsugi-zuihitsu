# **MTH3008** Tensor Analysis, Final Exam Cheat Sheet

> [!TIP] Created by William Fayers
> Covers the whole course, with emphasis on Ch 5-7 (lectures 10-18) - the material **not** already in the [[mth3008 portfolio cheat sheet]]. For Ch 1-4 basics (suffix notation, [[Kronecker Delta]] / [[Alternating Tensor]] identities, differential operators, local coordinate transforms), see the portfolio sheet.

## 0. Quick Reference

### Suffix-Notation Dictionary (condensed)

| Object | Suffix form |
|---|---|
| Dot product | $a_{j}b_{j}$ |
| Cross product $(a\times b)_{i}$ | $\epsilon_{ijk}a_{j}b_{k}$ |
| Matrix product $(AB)_{ij}$ | $A_{ik}B_{kj}$ |
| Trace | $A_{ii}$ |
| Kronecker identity | $\epsilon_{ijk}\epsilon_{i \ell m}=\delta_{j \ell}\delta_{km}-\delta_{jm}\delta_{k \ell}$ |
| $\partial x_{j}/\partial x_{i}$ | $\delta_{ij}$ (Cartesian) |

### The "Kill Rule"

**Symmetric × Antisymmetric = 0.** Used everywhere: $\epsilon_{ijk}S_{jk}=0$ when $S_{jk}=S_{kj}$; $\epsilon_{ijk}\partial_{j}\partial_{k}f=0$ from equality of mixed partials.

---

## 1. Tensor Transformation Laws

### Cartesian (rotation Matrix $L_{ij}$)

- Coordinates: $x_{i}'=L_{ij}x_{j}$, inverse $x_{i}=L_{ji}x_{j}'$.
- Orthogonality: $L_{ij}L_{kj}=\delta_{ik}=L_{ji}L_{jk}$, $L^{T}=L^{-1}$, $|L|=1$.
- Basis: $L_{ij}=\mathbf{e}_{i}'\cdot \mathbf{e}_{j}$, and $\mathbf{e}_{i}'=L_{ij}\mathbf{e}_{j}$.
- Jacobian: $\frac{\partial x_{i}'}{\partial x_{j}}=L_{ij}$ and $\frac{\partial x_{i}}{\partial x_{j}'}=L_{ji}$.

**Rank-$r$ rule** (one $L$ per free index):

$$
T_{i_{1}\dots i_{r}}'=L_{i_{1}m_{1}}\dots L_{i_{r}m_{r}}T_{m_{1}\dots m_{r}}
$$

For rank 2 this is the matrix equation $T'=LTL^{T}$.

### Generalised Coordinates

Two kinds of transformation coefficient:

$$
L_{i'}^{k}= \frac{\partial x^{k}}{\partial x'^{i}} \quad (\text{covariant}),\qquad L_{k}^{i'}= \frac{\partial x'^{i}}{\partial x^{k}} \quad (\text{contravariant})
$$

with $L_{i'}^{k}L_{k}^{j'}=\delta_{i}^{j}$.

**Transformation per index level**: each covariant index contracts with $L_{i'}^{\ell}$; each contravariant index contracts with $L_{\ell}^{i'}$.

### The Quotient Rule

If $T_{ij}b_{j}$ (or similar contraction) is a tensor for **every** vector $\mathbf{b}$, then $T_{ij}$ is a tensor. Used to prove tensor character indirectly when the direct check is hard.

---

## 2. Bases, Dual Bases, Metric Tensor

### Dual Basis Construction

Given $\{\mathbf{e}_{i}\}$ with volume $V=\mathbf{e}_{1}\cdot(\mathbf{e}_{2}\times \mathbf{e}_{3})$:

$$
\mathbf{e}^{i}= \frac{\mathbf{e}_{j}\times \mathbf{e}_{k}}{V}\qquad \text{(cyclic }i,j,k)
$$

Satisfies $\mathbf{e}^{i}\cdot \mathbf{e}_{k}=\delta^{i}_{k}$. For orthonormal bases, $\mathbf{e}^{i}=\mathbf{e}_{i}$.

### Metric Tensor

- **Covariant**: $g_{ik}=\mathbf{e}_{i}\cdot \mathbf{e}_{k}$.
- **Contravariant**: $g^{ik}=\mathbf{e}^{i}\cdot \mathbf{e}^{k}=[g_{ik}]^{-1}$.
- **Mixed**: $g_{i}^{\cdot k}=\delta_{i}^{k}$.

**From a parametrisation**: $\mathbf{e}_{i}=\partial \mathbf{r}/\partial x^{i}$, then $g_{ij}=\mathbf{e}_{i}\cdot \mathbf{e}_{j}$.

**Arc length**: $(ds)^{2}=g_{ik}dx^{i}dx^{k}=g^{ik}dx_{i}dx_{k}=dx_{i}dx^{i}$.

**Orthogonal shortcut**: diagonal $g$ ⇒ $g_{ii}=h_{i}^{2}$ where $h_{i}=|\mathbf{e}_{i}|$, and $g^{ii}=1/g_{ii}$ (no sum).

### Covariant and Contravariant Components

Any vector expands two ways: $\mathbf{A}=A^{i}\mathbf{e}_{i}=A_{i}\mathbf{e}^{i}$.

- $A^{i}=\mathbf{A}\cdot \mathbf{e}^{i}$ (contravariant).
- $A_{i}=\mathbf{A}\cdot \mathbf{e}_{i}$ (covariant).
- Raise/lower: $A_{i}=g_{ik}A^{k}$, $A^{i}=g^{ik}A_{k}$.
- Inner product: $\mathbf{A}\cdot \mathbf{B}=A^{i}B_{i}=A_{i}B^{i}=g_{ik}A^{i}B^{k}$.

### Rank-2 Tensor Flavours

Four flavours of components of a second-rank tensor: $A_{ik}$, $A^{ik}$, $A_{i}^{\cdot k}$, $A^{i}_{\cdot k}$. All [[Associated Tensors]] via the metric:

$$
A_{ik}=g_{i \ell}g_{km}A^{\ell m},\quad A^{ik}=g^{i \ell}g^{km}A_{\ell m},\quad A_{i}^{\cdot k}=g^{k \ell}A_{i \ell},\quad A^{i}_{\cdot k}=g^{i \ell}A_{\ell k}
$$

**Matrix form** (numerical): if $[A]$ is covariant and $[G]=[g_{ik}]$, then $[A^{ik}]=G^{-1}AG^{-T}$ etc.

**Transformation**: $A'_{ik}=L_{i'}^{\ell}L_{k'}^{m}A_{\ell m}=(LAL^{T})_{ik}$ for covariant.

### Symmetry and Antisymmetry

- Symmetric: $T_{ij}=T_{ji}$. Antisymmetric: $T_{ij}=-T_{ji}$.
- Frame-independent in Cartesian rotations.
- **Decomposition**: $T_{ik}= \frac{1}{2}(T_{ik}+T_{ki})+\frac{1}{2}(T_{ik}-T_{ki})$.
- In generalised coords, symmetry only makes sense between indices at the **same level** (both upper or both lower).

---

## 3. Tensor Algebra

| Operation | Rule | Rank behaviour |
|---|---|---|
| **Addition** $A+B$ | $(A+B)_{ik}=A_{ik}+B_{ik}$ | Same rank & structure required |
| **Outer product** $A\otimes B$ | $(A\otimes B)_{ik \ell m}=A_{ik}B_{\ell m}$ | Rank adds; structures concatenate |
| **Contraction** | Set two indices equal (upper with lower in curvilinear) | Rank drops by 2 |
| **Inner product** | Outer product + contraction | Example: $A_{i}B^{i}$ (scalar) |

**Key identities** (useful for contraction proofs):

- $\delta_{ij}\epsilon_{ijk}=0_{k}$
- $\epsilon_{ijk}\epsilon_{i \ell m}=\delta_{j \ell}\delta_{km}-\delta_{jm}\delta_{k \ell}$
- $\epsilon_{ijk}\epsilon_{ijm}=2\delta_{km}$, $\epsilon_{ijk}\epsilon_{ijk}=6$

**Contraction preserves tensor character** via orthogonality: $L_{im}L_{in}=\delta_{mn}$ (Cartesian), or via the identity $L_{i'}^{m}L_{n}^{i'}=\delta_{n}^{m}$ (general).

---

## 4. Covariant Differentiation

In a [[Local Basis]] that varies with position, $d\mathbf{e}_{j}\neq 0$ and ordinary partial derivatives of components **don't** transform as tensors. Define the **covariant derivative**:

$$
\boxed{A_{i,k}= \frac{\partial A_{i}}{\partial x^{k}}-\Gamma^{j}_{ik}A_{j}}\qquad \boxed{A^{i}_{\cdot k}= \frac{\partial A^{i}}{\partial x^{k}}+\Gamma^{i}_{jk}A^{j}}
$$

**Sign rule**: lower index ⇒ $-\Gamma$; upper index ⇒ $+\Gamma$.

**Higher-rank tensors** - each index contributes one $\Gamma$ correction:

$$
T_{ik,\ell}= \frac{\partial T_{ik}}{\partial x^{\ell}}-\Gamma^{m}_{i \ell}T_{mk}-\Gamma^{m}_{k \ell}T_{im}
$$

$$
T^{ik}_{\cdot\cdot,\ell}= \frac{\partial T^{ik}}{\partial x^{\ell}}+\Gamma^{i}_{m \ell}T^{mk}+\Gamma^{k}_{m \ell}T^{im}
$$

$$
T^{i}_{\cdot k,\ell}= \frac{\partial T^{i}_{\cdot k}}{\partial x^{\ell}}+\Gamma^{i}_{m \ell}T^{m}_{\cdot k}-\Gamma^{m}_{k \ell}T^{i}_{\cdot m}
$$

Reduces to ordinary partials in Cartesian (all $\Gamma=0$).

---

## 5. Christoffel Symbols

### Definitions

- **Second kind**: $\Gamma^{i}_{jk}=\mathbf{e}^{i}\cdot \partial_{k}\mathbf{e}_{j}$, equivalently $\partial_{k}\mathbf{e}_{j}=\Gamma^{i}_{jk}\mathbf{e}_{i}$.
- **First kind**: $\Gamma_{ijk}=\mathbf{e}_{i}\cdot \partial_{k}\mathbf{e}_{j}$.
- **Relation**: $\Gamma_{ijk}=g_{i \ell}\Gamma^{\ell}_{jk}$, $\Gamma^{i}_{jk}=g^{i \ell}\Gamma_{\ell kj}$.

### Formula from the Metric

$$
\boxed{\Gamma_{ijk}= \frac{1}{2}\left( \frac{\partial g_{ij}}{\partial x^{k}}+ \frac{\partial g_{ik}}{\partial x^{j}}- \frac{\partial g_{jk}}{\partial x^{i}}\right)}
$$

$$
\boxed{\Gamma^{i}_{jk}= \frac{1}{2}g^{i \ell}\left( \frac{\partial g_{\ell j}}{\partial x^{k}}+ \frac{\partial g_{\ell k}}{\partial x^{j}}- \frac{\partial g_{jk}}{\partial x^{\ell}}\right)}
$$

### Orthogonal-Coordinate Shortcuts (from Problem 8.1)

If $g_{ij}=0$ for $i\neq j$:

| Case | $\Gamma_{ijk}$ |
|---|---|
| $i=j=k$ | $\frac{1}{2}\partial g_{ii}/\partial x^{i}$ |
| $i=j\neq k$ | $\frac{1}{2}\partial g_{ii}/\partial x^{k}$ |
| $i\neq j=k$ | $-\frac{1}{2}\partial g_{jj}/\partial x^{i}$ |
| all distinct | $0$ |

Raise with $\Gamma^{i}_{jk}=\Gamma_{ijk}/g_{ii}$ (no sum, diagonal).

### Key Properties

- Symmetric in the **last two** indices: $\Gamma^{i}_{jk}=\Gamma^{i}_{kj}$, $\Gamma_{ijk}=\Gamma_{ikj}$.
- Vanish for a **fixed basis** (Cartesian).
- **Not a tensor** - extra inhomogeneous term in the transformation law:

$$
\Gamma'^{i}_{jk}=L_{\ell}^{i'}L_{j'}^{m}L_{k'}^{n}\Gamma^{\ell}_{mn}+L_{m}^{i'}L_{k'}^{n} \frac{\partial L_{j'}^{m}}{\partial x^{n}}
$$

The "extra" term is exactly what cancels the non-tensorial part of $\partial_{k}A_{i}$ to leave $A_{i,k}$ as a tensor.

---

## 6. Ricci's Theorem

$$
\boxed{g_{ik,\ell}=0}
$$

The [[Metric Tensor]] is **covariantly constant**. Also $g^{ik}_{\ \ ,\ell}=0$.

**Useful rearrangement** (for reading metric derivatives off $\Gamma$):

$$
\frac{\partial g_{ik}}{\partial x^{\ell}}=\Gamma_{ik \ell}+\Gamma_{ki \ell}
$$

**Orthogonal-coordinate consequence**: $\Gamma_{ik \ell}=-\Gamma_{ki \ell}$ for $i\neq k$ (first-kind antisymmetry in the first two indices). **Not** true for second-kind symbols.

---

## 7. Riemann-Christoffel & Ricci Tensors

### Riemann-Christoffel Tensor

Defined by the failure of second covariant derivatives to commute:

$$
\boxed{\nabla_{j}\nabla_{k}A_{i}-\nabla_{k}\nabla_{j}A_{i}=R^{r}_{ijk}A_{r}}
$$

**Coordinate formula**:

$$
\boxed{R^{r}_{ijk}= \frac{\partial \Gamma^{r}_{ki}}{\partial x^{j}}- \frac{\partial \Gamma^{r}_{ij}}{\partial x^{k}}+\Gamma^{p}_{ik}\Gamma^{r}_{pj}-\Gamma^{p}_{ij}\Gamma^{r}_{pk}}
$$

### Curvature Criterion

$$
R^{r}_{ijk}=0\text{ everywhere}\iff \text{space is Euclidean (flat)}
$$

**Examples worth remembering**:

- **Unit sphere** $(a,b)$ with $g_{11}=1,g_{22}=\sin^{2}a$: $R^{1}_{212}=\sin^{2}a\neq 0$.
- **Surface of revolution** $\mathbf{r}=(f\cos y,f\sin y,g)$ with $(f')^{2}+(g')^{2}=1$: $R^{1}_{212}=-ff''$. Flat iff $f''=0$ (cylinder or cone).

### Ricci Tensor

$$
R_{ij}=R^{r}_{irj}
$$

Rank 2, symmetric, $R_{ij}=0$ in Euclidean space. Used in general relativity; in 2D it carries all curvature information.

---

## 8. Problem-Type Playbook

| If the question asks... | Use this tool |
|---|---|
| "Show $X$ is a tensor" | [[Tensor Transformation Rule]] - apply, factor $L$s, collapse via orthogonality. Or [[Quotient Rule]]. |
| "Show $X$ is not a tensor" | Find an extra term in the transformation that doesn't fit any rule (e.g. $A_{i}+B^{i}$, Christoffel symbols). |
| "Find $g_{ij}$, $h_{i}$, $ds$" | $\mathbf{e}_{i}=\partial \mathbf{r}/\partial x^{i}$, $g_{ij}=\mathbf{e}_{i}\cdot \mathbf{e}_{j}$, $h_{i}=\sqrt{g_{ii}}$, $ds^{2}=g_{ij}dx^{i}dx^{j}$. |
| "Find the dual basis" | $\mathbf{e}^{i}=(\mathbf{e}_{j}\times \mathbf{e}_{k})/V$, cyclic. Verify with $\mathbf{e}^{i}\cdot \mathbf{e}_{k}=\delta^{i}_{k}$. |
| "Find $A_{i},A^{i}$ or $P_{ik},P^{ik},P^{\cdot k}_{i}$" | Dot with basis/dual, or matrix routes: $P'=LPL^{T}$ covariant; $M^{*}P(M^{*})^{T}$ contravariant; mixtures via metric. |
| "Find Christoffel symbols" | §5 formulas. In orthogonal coords use the 4-case table. Then raise with $g^{ii}=1/g_{ii}$. |
| "Has this space zero curvature?" | Compute $R^{r}_{ijk}$ - usually only $R^{1}_{212}$ matters in 2D. Nonzero ⇒ curved. |
| "Simplify $\epsilon\epsilon$ or $\delta \epsilon$" | Cyclically permute shared index to 3rd position, apply $\epsilon\epsilon=\delta\delta-\delta\delta$, collapse $\delta$s. Kill rule if symmetric $\times$ antisymmetric. |
| "Prove a covariant derivative / Christoffel identity" | Start from definitions, use [[Ricci's Theorem]] + symmetry $\Gamma_{ijk}=\Gamma_{ikj}$ + the metric formula for $\Gamma$. |

---

> [!note] Good luck!
> The big shift from portfolio to final is moving from **Cartesian + rigid bases** to **curvilinear + local bases**: the [[Metric Tensor]] replaces the Kronecker delta, [[Covariant Differentiation]] replace partial derivatives, and [[Christoffel Symbols]] are the glue. Everything else is bookkeeping.
