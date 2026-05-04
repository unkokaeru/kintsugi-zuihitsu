# MTH3008 Weekly Problems 3

> **Original Documents**: [[mth3008 weekly problem sheet 3.pdf]] / [[mth3008 weekly problem sheet 3 solutions.pdf]]
>
> **Vibes**: Builds directly on suffix notation for operators and coordinate transformation rules; proofs are mostly mechanical index substitution; medium difficulty, since recalling everything can be tricky.
>
> **Used Techniques**:
>  - Vector transformation law: $V'^i = L^i_j V^j$, where $L^i_j = \partial x'^i / \partial x^j$.
>  - Chain rule: $\partial / \partial x'^i = L^j_i \, \partial / \partial x^j$.
>  - Orthogonality: $L^i_j L^i_k = \delta_{jk}$.
>  - $\epsilon^{ijk}$ vanishes on any symmetric pair of indices.
>  - Mixed partials commute; $\nabla \cdot (\nabla \times v) = 0$; $\nabla^2 u = \nabla(\nabla \cdot u) - \nabla \times (\nabla \times u)$.

***

## 3.1. Showing ∇ Transforms as a Vector

> [!question]
> Use the tensor transformation law to show that the gradient operator $\nabla$ transforms as a **vector** under a change of Cartesian coordinates, and hence is itself a vector.

We need to show $\partial'_i = L^j_i \partial_j$. The $i$th component of $\nabla$ is $\partial_i = \partial/\partial x^i$. Applying the chain rule under a coordinate change gives $\partial'_i = \partial/\partial x'^i = (\partial x^j / \partial x'^i) \, \partial_j = L^j_i \, \partial_j$. This is exactly the vector transformation law, so $\nabla$ is a vector.

***

## 3.2. Laplacian of a Scalar is a Scalar

> [!question]
> Let $f$ be a scalar field. Use the tensor transformation law to show that $\nabla \cdot (\nabla f)$ transforms as a scalar under a change of Cartesian coordinates, and therefore $\nabla \cdot (\nabla f)$ is a scalar.

In suffix notation, $\nabla \cdot (\nabla f) = \partial_i \partial_i f$. Since $f$ is a scalar, $f' = f$, and since $\nabla$ is a vector (3.1), $\partial'_i = L^j_i \partial_j$. So $\partial'_i \partial'_i f = L^j_i \partial_j \, L^k_i \partial_k f = L^j_i L^k_i \, \partial_j \partial_k f = \delta_{jk} \, \partial_j \partial_k f = \partial_k \partial_k f$, using orthogonality $L^j_i L^k_i = \delta_{jk}$. The primed quantity equals the unprimed quantity, so it is a scalar.

***

## 3.3. Directional Derivative as a Scalar

> [!question]
> Let $\nabla$ and $w$ be vectors. Using the tensor transformation law and the fact that both $\nabla$ and $w$ transform as vectors, show that the quantity $w \cdot \nabla$ is a scalar under a change of Cartesian coordinates.

In suffix notation, $w \cdot \nabla = w^i \partial_i$. Since both $w$ and $\nabla$ are vectors, their components transform as $w'^i = L^i_j w^j$ and $\partial'_i = L^j_i \partial_j$. Then $w'^i \partial'_i = L^i_j w^j \, L^k_i \partial_k = L^i_j L^k_i \, w^j \partial_k = \delta_{jk} \, w^j \partial_k = w^j \partial_j$. Invariant under the transformation, so $w \cdot \nabla$ is a scalar.

***

## 3.4. Constancy of Jacobian Entries in Cartesian Rotations

> [!question]
> Consider the matrix $L_{ij} = \dfrac{\partial x^{\prime i}}{\partial x^j}$ representing the components of the Jacobian for a (Cartesian) coordinate transformation. Show that $\dfrac{\partial L_{ij}}{\partial x^{\prime i}} = 0$.

Differentiating directly, $\partial L_{ij} / \partial x'^i = \partial^2 x'^i / (\partial x'^i \, \partial x^j)$. Since we may swap the order of partial derivatives, this equals $\partial^2 x'^i / (\partial x^j \, \partial x'^i) = (\partial / \partial x^j)(\partial x'^i / \partial x'^i)$. Now $\partial x'^i / \partial x'^i = \delta_{ii} = 3$, which is a constant, so its derivative with respect to $x^j$ is zero.

***

## 3.5. Rotation Coefficients from Inner Products

> [!question]
> Suppose $e_1, e_2, e_3$ are basis vectors for a Cartesian coordinate system, and let $e_1', e_2', e_3'$ be the images of $e_1, e_2, e_3$ under a rotation.
>
> For each $i$, the original basis vector $e_i$ has an expansion in the rotated basis
> $e_i = a_{i1} e_1' + a_{i2} e_2' + a_{i3} e_3'$.
> Find expressions for the coefficients $a_{ij}$ in terms of the inner products of $e_i$ and $e_j'$.

From $e_i = a_{ik} e'_k$, take the inner product of both sides with $e'_j$: $e_i \cdot e'_j = a_{ik} (e'_k \cdot e'_j) = a_{ik} \delta_{kj} = a_{ij}$. Hence, $a_{ij} = e_i \cdot e'_j$.

***

## 3.6. Curl of a Radial Vector Field

> [!question]
> Let $u$ be the vector field defined by $u = h(r)\, r$, where $h(r)$ is an arbitrary differentiable scalar function of $r$, and $r$ is the position vector $r = (x_1, x_2, x_3)$ with magnitude $r = |r|$.
>
> Using suffix (index) notation, show that $\nabla \times u = 0$.
> *Hint:* You may use the result from Exercise 2.8 that $\nabla h(r) = h'(r)\, r / r$.

The $i$th component of $\nabla \times u$ is $\epsilon^{ijk} \partial_j u_k = \epsilon^{ijk} \partial_j (h x_k)$. By the product rule and the hint, $\epsilon^{ijk} \partial_j (h x_k) = \epsilon^{ijk} [(h'/r) x_j x_k + h \delta_{jk}]$. The second term gives $h \epsilon^{ijk} \delta_{jk} = h \epsilon^{ijj} = 0$. For the first term, $x_j x_k$ is symmetric in $j, k$ while $\epsilon^{ijk}$ is antisymmetric in $j, k$, so $\epsilon^{ijk} x_j x_k = 0$. Hence, $\nabla \times u = 0$.

***

## 3.7. Commuting Divergence and Laplacian on a Vector Field

> [!question]
> Show that, for a sufficiently smooth vector field $u$, the identity $\nabla \cdot \nabla^2 u = \nabla^2 (\\nabla \\cdot u)$ holds in two different ways:
>
> 1. Prove the identity directly using suffix (index) notation.
> 2. First use the vector identity from the lectures $\\nabla^2 u = \\nabla (\\nabla \\cdot u) - \\nabla \\times (\\nabla \\times u)$, and then rewrite the resulting expressions using suffix notation to verify the equality.

**1.** In suffix notation, $\nabla \cdot \nabla^2 u = \partial_j (\partial_k \partial_k u_j)$. Since partial derivatives commute for smooth fields, we may reorder: $\partial_j \partial_k \partial_k u_j = \partial_k \partial_k (\partial_j u_j) = \nabla^2 (\nabla \cdot u)$.

**2.** Substituting the identity: $\nabla \cdot \nabla^2 u = \nabla \cdot [\nabla(\nabla \cdot u) - \nabla \times (\nabla \times u)] = \nabla \cdot \nabla(\nabla \cdot u) - \nabla \cdot [\nabla \times (\nabla \times u)]$. The second term is $\nabla \cdot (\nabla \times v) = 0$ for any smooth $v$ (since $\epsilon^{ijk} \partial_i \partial_j v_k = 0$ by antisymmetry), leaving $\nabla \cdot \nabla(\nabla \cdot u) = \nabla^2(\nabla \cdot u)$.

***

## 3.8. Curl and Divergence of Nonlinear Scalar Combinations

> [!question]
> Let $f$ and $g$ be scalar fields.
>
> 1. Show, using suffix (index) notation, that $\nabla \\times (f \\nabla f) = 0$.
> 2. Simplify the expression $\\nabla \\cdot (g \\nabla g)$ to an equivalent expression involving just a single differential operator acting on a single scalar field.

**1.** The $i$th component is $\epsilon^{ijk} \partial_j (f \partial_k f)$. Applying the product rule: $\epsilon^{ijk} [(\partial_j f)(\partial_k f) + f \partial_j \partial_k f]$. The second term vanishes since $\partial_j \partial_k f$ is symmetric in $j, k$. For the first term, $(\partial_j f)(\partial_k f)$ is also symmetric in $j, k$, so contraction with $\epsilon^{ijk}$ gives zero. Hence, $\nabla \times (f \nabla f) = 0$.

**2.** $\nabla \cdot (g \nabla g) = \partial_i (g \partial_i g) = (\partial_i g)(\partial_i g) + g \partial_i \partial_i g = |\nabla g|^2 + g \nabla^2 g$. Recognising that $(\partial_i g)(\partial_i g) = |\nabla g|^2 = \frac{1}{2} \nabla^2(g^2) - g \nabla^2 g$ is not simpler, the cleanest form is $\nabla \cdot (g \nabla g) = \frac{1}{2} \nabla^2(g^2)$, since $\partial_i \partial_i (g^2) = \partial_i (2g \partial_i g) = 2(\partial_i g)^2 + 2g \partial_i \partial_i g = 2|\nabla g|^2 + 2g\nabla^2 g$.
