# MTH3008 Weekly Problems 3

> **Original Documents**: [[mth3008 weekly problem sheet 3.pdf|Problem Sheet]] / [[mth3008 weekly problem sheet 3 handwritten solutions.pdf|My Handwritten Solutions]] / [[mth3008 weekly problem sheet 3 solutions.pdf|Provided Solutions]]
>
> **Vibes**: Tensor laws on vector ops; suffix invariance proofs; rotations, radial curls.
>
> **Used Techniques**:
>   - Transformation $ \partial'^i = L^i_j \partial_j$ (chain: $\partial x'^i / \partial x^j = L^i_j$; Lecture 6 ex.2).
>   - $\nabla \cdot (\nabla f)' = \delta^j_k \partial_j \partial^k f$; $w \cdot \nabla$ contraction invariant.
>   - Jacobian const: $\partial^2 x'^i / \partial x'^i \partial x^j =0$ (linear rotations).
>   - $a_{ij} = e_i \cdot e'_j$ (orthonormal).
>   - $\epsilon^{ijk} x_j x_k=0$ antisym; $|\nabla g|^2 + g \nabla^2 g$; $\nabla^2 u = \nabla(\nabla\cdot u) - \nabla\times(\nabla\times u)$ (L4).

***

## 3.1. Showing ∇ Transforms as a Vector

> [!question]
> Use the tensor transformation law to show that the gradient operator $\nabla$ transforms as a **vector** under a change of Cartesian coordinates, and hence is itself a vector.

$\partial'^i f = \partial_j f \cdot \frac{\partial x^j}{\partial x'^i} = L^i_{\ j} \partial_j f$ (chain rule), so $\partial'^i = L^i_{\ j} \partial_j$ (since $f$ scalar).

***

## 3.2. Laplacian of a Scalar is a Scalar

> [!question]
> Let $f$ be a scalar field. Use the tensor transformation law to show that $\nabla \cdot (\nabla f)$ transforms as a scalar under a change of Cartesian coordinates, and therefore $\nabla \cdot (\nabla f)$ is a scalar.

$(\partial'^i \partial'_i f)' = L^j_{\ i} L^i_{\ k} \partial_j \partial^k f = \delta^j_k \partial_j \partial^k f = \partial_j \partial^j f$ ($L$ orthogonal).

***

## 3.3. Directional Derivative as a Scalar

> [!question]
> Let $\nabla$ and $w$ be vectors. Using the tensor transformation law and the fact that both $\nabla$ and $w$ transform as vectors, show that the quantity $w \cdot \nabla$ is a scalar under a change of Cartesian coordinates.

$w'^i \partial'_i = (L^i_{\ j} w^j) (L^k_{\ i} \partial_k) = L^i_{\ j} L^j_{\ k} w^k \partial_j = w^j \partial_j$ ($\delta^i_i=3$, but contracts).

***

## 3.4. Constancy of Jacobian Entries in Cartesian Rotations

> [!question]
> Consider the matrix $L_{ij} = \dfrac{\partial x^{\prime i}}{\partial x^j}$ representing the components of the Jacobian for a (Cartesian) coordinate transformation. Show that $\dfrac{\partial L_{ij}}{\partial x^{\prime i}} = 0$.

$\frac{\partial L_{ij}}{\partial x'^i} = \frac{\partial^2 x'^i}{\partial x'^i \partial x^j} =0$ (second derivs vanish for linear $x'^i = L^i_k x^k$; repeated $i$ traces to dim but zero).

***

## 3.5. Rotation Coefficients from Inner Products

> [!question]
> Suppose $e_1, e_2, e_3$ are basis vectors for a Cartesian coordinate system, and let $e_1', e_2', e_3'$ be the images of $e_1, e_2, e_3$ under a rotation.
>
> For each $i$, the original basis vector $e_i$ has an expansion in the rotated basis
> $e_i = a_{i1} e_1' + a_{i2} e_2' + a_{i3} e_3'$.
> Find expressions for the coefficients $a_{ij}$ in terms of the inner products of $e_i$ and $e_j'$.

Dot $e_i \cdot e'_j = a_{ik} e'_k \cdot e'_j = a_{ij}$ (orthonormal $\{e'\}$).

***

## 3.6. Curl of a Radial Vector Field

> [!question]
> Let $u$ be the vector field defined by $u = h(r)\, r$, where $h(r)$ is an arbitrary differentiable scalar function of $r$, and $r$ is the position vector $r = (x_1, x_2, x_3)$ with magnitude $r = |r|$.
>
> Using suffix (index) notation, show that $\nabla \times u = 0$.
> *Hint:* You may use the result from Exercise 2.8 that $\nabla h(r) = h'(r)\, r / r$.

$\epsilon^{ijk} \partial_j (h x_k) = \epsilon^{ijk} [(h'/r) x_j x_k + h \delta_{jk}] = (h'/r) \epsilon^{ijk} x_j x_k =0$ ($\epsilon$ antisym, $x_j x_k$ sym).

***

## 3.7. Commuting Divergence and Laplacian on a Vector Field

> [!question]
> Show that, for a sufficiently smooth vector field $u$, the identity $\nabla \cdot \nabla^2 u = \nabla^2 (\\nabla \\cdot u)$ holds in two different ways:
>
> 1. Prove the identity directly using suffix (index) notation.
> 2. First use the vector identity from the lectures $\\nabla^2 u = \\nabla (\\nabla \\cdot u) - \\nabla \\times (\\nabla \\times u)$, and then rewrite the resulting expressions using suffix notation to verify the equality.

**1.** $\partial_i (\partial_j^2 u^i) = \partial_j^2 (\partial_i u^i)$ (partials commute).

**2.** $\nabla \cdot [\nabla (\nabla \cdot u) - \nabla \times (\nabla \times u)] = \nabla^2 (\nabla \cdot u) - \nabla \cdot (\nabla \times (\nabla \times u))$; $\nabla \cdot (\nabla \times v)=0$ any $v$ (Lecture 4).

***

## 3.8. Curl and Divergence of Nonlinear Scalar Combinations

> [!question]
> Let $f$ and $g$ be scalar fields.
>
> 1. Show, using suffix (index) notation, that $\nabla \\times (f \\nabla f) = 0$.
> 2. Simplify the expression $\\nabla \\cdot (g \\nabla g)$ to an equivalent expression involving just a single differential operator acting on a single scalar field.

**1.** $\epsilon^{ijk} \partial_j (f \partial_k f) = \epsilon^{ijk} \partial_j f \, \partial_k f =0$ (product rule; $\epsilon$ antisym vs sym).

**2.** $\partial_i (g \partial^i g) = |\nabla g|^2 + g \nabla^2 g$ (product).
