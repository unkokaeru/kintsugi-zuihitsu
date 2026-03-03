# MTH3008 Lecture 10

> [!quote] Paula Lins
> …

This lecture continues Chapter 4, building directly on last time's introduction of the rotation-based transformation law. We now consolidate what it means for a quantity to *be* a tensor, establish the **quotient rule** as a shortcut for proving tensor character, and introduce the **symmetric/antisymmetric decomposition** - a canonical way to split any second-rank tensor.

## Tensors: Rank and Transformation Law

A **tensor** in an orthogonal coordinate system is defined by how its components transform under a coordinate rotation $L_{ij}$. The general rule is one factor of $L$ per free index:

$$
T'_{ij} = L_{im} L_{jn} T_{mn}, \qquad T'_{ijk} = L_{im} L_{jn} L_{kp} T_{mnp}, \qquad \text{etc.}
$$

On the right-hand side, the original component indices ($m, n, p, \ldots$) are **dummy** (summed over), while the primed indices ($i, j, k, \ldots$) are **free** - so both sides carry the same free indices and the equation balances.

> [!important] Rank of a Tensor
> The **[[rank]]** (or **order**) of a tensor is the number of free indices. A rank-$r$ tensor in 3D has $3^r$ components and transforms with exactly $r$ factors of the rotation matrix.

### Example: Kronecker Delta is a Rank-2 Tensor

We need to verify $\delta'_{ij} = L_{ik} L_{jm} \delta_{km}$. Using orthogonality of $L$:

$$
L_{ik} L_{jm} \delta_{km} = L_{ik} L_{jk} = \delta_{ij}.
$$

Since $\delta_{ij}$ is defined identically in every coordinate system, $\delta'_{ij} = \delta_{ij}$, so the law holds. $\boxed{}$

### Example: Gradient of a Vector is a Rank-2 Tensor

We want to show $\dfrac{\partial u'_i}{\partial x'_j} = L_{ik} L_{j\ell} \dfrac{\partial u_k}{\partial x_\ell}$.

**Step 1 - Product rule:**

$$
\frac{\partial u'_i}{\partial x'_j} = \frac{\partial (L_{ik} u_k)}{\partial x'_j} = L_{ik} \frac{\partial u_k}{\partial x'_j} + u_k \underbrace{\frac{\partial L_{ik}}{\partial x'_j}}_{= \, 0}.
$$

**Step 2 - Why does $\dfrac{\partial L_{ik}}{\partial x'_j} = 0$?**

Since $L_{ik} = \dfrac{\partial x'_i}{\partial x_k}$,

$$
\frac{\partial L_{ik}}{\partial x'_j} = \frac{\partial^2 x'_i}{\partial x'_j \, \partial x_k} = \frac{\partial}{\partial x_k}\!\left(\frac{\partial x'_i}{\partial x'_j}\right) = \frac{\partial}{\partial x_k}(\delta_{ij}) = 0.
$$

**Step 3 - Chain rule:**

$$
\frac{\partial u'_i}{\partial x'_j} = L_{ik} \frac{\partial u_k}{\partial x'_j} = L_{ik} \frac{\partial u_k}{\partial x_\ell} \underbrace{\frac{\partial x_\ell}{\partial x'_j}}_{= \, L_{j\ell}} = L_{ik} L_{j\ell} \frac{\partial u_k}{\partial x_\ell}.
$$

$$
\boxed{\frac{\partial u'_i}{\partial x'_j} = L_{ik} L_{j\ell} \frac{\partial u_k}{\partial x_\ell}}
$$

So $\nabla \mathbf{u} = \partial u_i / \partial x_j$ is a rank-2 tensor. $\boxed{}$

> [!warning] $L_{ij}$ constant - Cartesian coordinates only
> The step $\partial L_{ik}/\partial x'_j = 0$ relies on $L$ being a *constant* rotation matrix. In curvilinear coordinates the analogous "transformation matrix" varies with position, so this argument completely breaks down - Chapter 5 exists precisely to handle this.

***

## The Quotient Rule

> [!important] Quotient Rule (Lemma)
> Suppose $T_{ij}$ is a quantity such that, for **any** vector $\mathbf{b}$, the combination $a_i = T_{ij} b_j$ is a vector. Then $T_{ij}$ is a rank-2 tensor.

### Proof

Label the assumptions:

- **(A1)** $b_j = L_{mj} b'_m$ (since $\mathbf{b}$ is a vector),
- **(A2)** $a_k = T_{kj} b_j$ holds in *all* coordinate systems,
- **(A3)** $a'_i = L_{ik} a_k$ (since $\mathbf{a}$ is a vector).

**Two expressions for $a'_i$:**

From (A3), (A2), and (A1):

$$
a'_i = L_{ik} a_k = L_{ik} T_{kj} b_j = L_{ik} T_{kj} L_{mj} b'_m = L_{ik} L_{mj} T_{kj} b'_m.
$$

From (A2) in the rotated frame:

$$
a'_i = T'_{im} b'_m.
$$

**Subtract and use arbitrariness of $\mathbf{b}$:**

$$
\bigl(T'_{im} - L_{ik} L_{mj} T_{kj}\bigr) b'_m = 0.
$$

Since $\mathbf{b}$ is arbitrary we may take $b'_m \neq 0$, so:

$$
\boxed{T'_{im} = L_{ik} L_{mj} T_{kj}}
$$

Confirming $T_{ij}$ is a rank-2 tensor. $\boxed{}$

> [!note] Why "quotient"?
> By analogy with the calculus quotient rule: instead of directly transforming $T$, you *infer* its tensor character from a "product" $T_{ij}b_j$. The indispensable ingredient is that $\mathbf{b}$ is **arbitrary** - this is what forces the bracket to zero, rather than just yielding $b'_m = 0$.

***

## Symmetric and Antisymmetric Tensors

> [!important] Symmetry Definitions
> A second-rank tensor $T_{ij}$ is:
> - **Symmetric** if $T_{ij} = T_{ji}$,
> - **Antisymmetric** (skew-symmetric) if $T_{ij} = -T_{ji}$.
> 
> For higher-rank tensors, symmetry is defined *with respect to a chosen pair of indices*, e.g. $\varepsilon_{ijk} = -\varepsilon_{jik}$.

The Kronecker delta is symmetric ($\delta_{ij} = \delta_{ji}$); the alternating tensor $\varepsilon_{ijk}$ is antisymmetric in any two of its indices.

### Symmetry is a Physical Property

> [!important] Symmetry Lemma
> If $A_{ij}$ is symmetric in one Cartesian frame, it is symmetric in every Cartesian frame.

**Proof:** Suppose $A_{ij} = A_{ji}$. In a rotated frame:

$$
A'_{ij} = L_{ik} L_{jm} A_{km} = L_{ik} L_{jm} A_{mk} = L_{jm} L_{ik} A_{mk} = A'_{ji}. \quad \boxed{}
$$

The identical argument (with a sign flip) proves antisymmetry is also frame-independent.

### Symmetric/Antisymmetric Decomposition

> [!important] Decomposition Theorem
> Any rank-2 tensor decomposes uniquely as $T_{ik} = S_{ik} + A_{ik}$, where
>
> $S_{ik} = \dfrac{1}{2}(T_{ik} + T_{ki})$ - the **symmetric part** of $T_{ik}$,
>
> $A_{ik} = \dfrac{1}{2}(T_{ik} - T_{ki})$ - the **antisymmetric part** of $T_{ik}$.

The decomposition is verified directly: $S_{ik} + A_{ik} = \tfrac{1}{2}(T_{ik}+T_{ki}) + \tfrac{1}{2}(T_{ik}-T_{ki}) = T_{ik}$. Uniqueness follows because if $T_{ik} = S_{ik} + A_{ik} = S'_{ik} + A'_{ik}$ then $S_{ik} - S'_{ik} = A'_{ik} - A_{ik}$ is simultaneously symmetric and antisymmetric, hence zero.

### Example: $\varepsilon_{ijk} T_{jk} = 0 \Rightarrow T_{ij}$ Symmetric

Fix $i = 1$ and expand - only terms where $(j,k)$ give nonzero $\varepsilon_{1jk}$ contribute:

$$
\varepsilon_{1jk} T_{jk} = \varepsilon_{123} T_{23} + \varepsilon_{132} T_{32} = T_{23} - T_{32} = 0 \implies T_{23} = T_{32}.
$$

Repeating for $i=2$ and $i=3$ gives $T_{12} = T_{21}$ and $T_{13} = T_{31}$, so $T_{ij} = T_{ji}$. $\boxed{}$

> [!warning] Contraction with $\varepsilon_{ijk}$ kills the symmetric part
> For any $T_{jk}$, the contraction $\varepsilon_{ijk} T_{jk}$ is sensitive **only** to the antisymmetric part of $T_{jk}$ - the symmetric part contracts to zero by the antisymmetry of $\varepsilon$. So $\varepsilon_{ijk} T_{jk} = 0$ says exactly that $T_{jk}$ has no antisymmetric part, i.e. it is symmetric.

***

## Pre-Lecture Notes from [[mth3008 lecture notes 10.pdf|University Notes]]

- **Tensor definition**: a quantity is a tensor if each free index transforms with one factor of the rotation matrix $L_{ij}$; rank = number of free indices; $3^r$ components in 3D
- **Kronecker delta**: $L_{ik}L_{jm}\delta_{km} = L_{ik}L_{jk} = \delta_{ij}$ - same in all frames, so it's a rank-2 tensor ✓
- **Gradient $\partial u_i/\partial x_j$**: product rule → $\partial L_{ik}/\partial x'_j = \partial(\delta_{ij})/\partial x_k = 0$ → chain rule → $L_{ik}L_{j\ell}\,\partial u_k/\partial x_\ell$ ✓; key: $L$ is constant in Cartesian coordinates only
- **Quotient rule**: if $T_{ij}b_j$ is a vector for *all* vectors $\mathbf{b}$, then $T_{ij}$ is a tensor; proved by equating two expressions for $a'_i$ and invoking arbitrariness of $\mathbf{b}$
- **Symmetric/antisymmetric**: $T_{ij} = T_{ji}$ / $T_{ij} = -T_{ji}$; symmetry is coordinate-independent (frame change preserves $A'_{ij} = A'_{ji}$)
- **Decomposition**: $T_{ik} = \frac{1}{2}(T_{ik}+T_{ki}) + \frac{1}{2}(T_{ik}-T_{ki})$; the two parts are called symmetrisation and antisymmetrisation
- **$\varepsilon_{ijk}T_{jk}=0$ example**: fixing each $i$ and reading off nonzero $\varepsilon$ components forces $T_{23}=T_{32}$, $T_{12}=T_{21}$, $T_{13}=T_{31}$ - so $T_{ij}$ is symmetric; geometrically, $\varepsilon$ only sees the antisymmetric part
- **Next lecture**: Chapter 5 - Local Coordinate Transforms: associated tensors, metric tensor $g_{jk} = \mathbf{e}_j \cdot \mathbf{e}_k$, higher-order tensors in generalised coordinates
