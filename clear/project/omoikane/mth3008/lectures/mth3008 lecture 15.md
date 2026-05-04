# MTH3008 Lecture 15

> [!quote]
> ...

Lecture 14 wrapped up Chapter 6: Tensor Algebra with the outer product, non-commutativity of the tensor product, and contraction. We now open Chapter 7: Tensor Fields - where the bases themselves start to move.

## Chapter 7 Overview

Chapter 7 covers:

1. Preliminary (vector fields, local bases)
2. Covariant differentiation
3. Christoffel symbols
4. Covariant differentiation of tensors
5. Ricci's theorem
6. Riemann-Christoffel tensor
7. Ricci tensor

This lecture handles items 1-3.

## Preliminary: Vector Fields and Local Bases

Up to now, most bases we have used were independent of position. The canonical basis of $\mathbb{R}^3$ is the standard example:

$$
\mathbf{e}_1 = (1,0,0), \quad \mathbf{e}_2 = (0,1,0), \quad \mathbf{e}_3 = (0,0,1).
$$

This is a **fixed basis** - it does not depend on any parameter.

A **[[Local Basis]]** assigns a vector to every point in a subset of space. Physical examples include velocity fields (fluid flow) and gravitational fields.

The key new idea: we can define a **[[local basis]]** $\mathbf{e}_1(\mathbf{x}), \mathbf{e}_2(\mathbf{x}), \mathbf{e}_3(\mathbf{x})$ that depends on position.

### Derivatives of Tensor Fields - Recap

We already know how to differentiate tensor fields of rank zero:

- Gradient: $\nabla f = \nabla_i f$, or $\nabla_i u_j = \frac{\partial u_j}{\partial x^i}$
- Divergence: $\nabla \cdot \mathbf{u} = \nabla_i u^i$
- Curl: $\nabla \times \mathbf{u} = \epsilon_{ijk} \nabla_j u_k$

We can also differentiate higher-rank tensors. For instance, $\frac{\partial \sigma_{jk}}{\partial x^i}$ is the derivative of the conductivity tensor - itself a rank 3 tensor.

## Covariant Differentiation

**[[Covariant differentiation]]** is a way to differentiate vectors and tensors in curved space while ensuring the result is still a tensor. The intuition: when you transport a vector along a curved surface, you need to adjust for the curvature. Covariant differentiation performs exactly that adjustment.

### Cartesian Coordinates

Consider a Cartesian coordinate system with orthonormal basis $\mathbf{i}_1, \mathbf{i}_2, \mathbf{i}_3$ and a vector field $\mathbf{A} = \mathbf{A}(\mathbf{r})$ with components $A_1(\mathbf{r}), A_2(\mathbf{r}), A_3(\mathbf{r})$:

$$
\mathbf{A} = A_1(\mathbf{r})\,\mathbf{i}_1 + A_2(\mathbf{r})\,\mathbf{i}_2 + A_3(\mathbf{r})\,\mathbf{i}_3 = A_j(\mathbf{r})\,\mathbf{i}_j.
$$

The differential of $\mathbf{A}$, by the product rule, is:

$$
d\mathbf{A} = d(A_j(\mathbf{r})\,\mathbf{i}_j) = \mathbf{i}_j\,dA_j(\mathbf{r}) + A_j(\mathbf{r})\,d\mathbf{i}_j.
$$

Since the Cartesian basis does not vary from point to point, $d\mathbf{i}_j = 0$ for all $j$. So:

$$
\boxed{d\mathbf{A} = \mathbf{i}_j\,dA_j(\mathbf{r}) = (dA_1(\mathbf{r}),\; dA_2(\mathbf{r}),\; dA_3(\mathbf{r}))}
$$

The differential of $\mathbf{A}$ depends only on the differentials of its components. Life is simple in Cartesian coordinates.

### General Coordinates with a Fixed Basis

Now consider a generalised coordinate system with a **fixed** basis $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$ (constants). A vector $\mathbf{A}$ expands as:

$$
\mathbf{A} = \mathbf{e}^1 A_1(\mathbf{r}) + \mathbf{e}^2 A_2(\mathbf{r}) + \mathbf{e}^3 A_3(\mathbf{r}) = \mathbf{e}_1 A^1(\mathbf{r}) + \mathbf{e}_2 A^2(\mathbf{r}) + \mathbf{e}_3 A^3(\mathbf{r}),
$$

where $A_1, A_2, A_3$ are the **[[Covariant and Contravariant Components]]** and $A^1, A^2, A^3$ are the **[[Covariant and Contravariant Components]]**.

Because the basis is fixed ($d\mathbf{e}_j = d\mathbf{e}^j = 0$), the differentials reduce to:

$$
d\mathbf{A} = d(A_j(\mathbf{r})\,\mathbf{e}^j) = \mathbf{e}^j\,dA_j(\mathbf{r}),
$$

$$
d\mathbf{A} = d(A^j(\mathbf{r})\,\mathbf{e}_j) = \mathbf{e}_j\,dA^j(\mathbf{r}).
$$

Same story as Cartesian: fixed basis means the differential only sees the components.

### Generalised Coordinates with a Local Basis

Now the real challenge. Suppose we have a generalised coordinate system with a **local basis** $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$ that varies from point to point:

$$
\mathbf{e}_j = \mathbf{e}_j(x^1, x^2, x^3), \qquad \mathbf{e}^j = \mathbf{e}^j(x^1, x^2, x^3).
$$

Any vector $\mathbf{A} = \mathbf{A}(\mathbf{r})$ still expands as $\mathbf{A} = A_j\,\mathbf{e}^j = A^j\,\mathbf{e}_j$, but now it is **not true** that $d\mathbf{e}_j = 0$. The product rule gives two terms:

$$
\boxed{d\mathbf{A} = \mathbf{e}^j\,dA_j + A_j\,d\mathbf{e}^j = \mathbf{e}_j\,dA^j + A^j\,d\mathbf{e}_j}
$$

> [!warning]
> In a local basis, $d\mathbf{e}_j \neq 0$. Forgetting the second term - the one from the varying basis - is the single most common mistake in covariant differentiation. Every identity that follows exists to handle this extra piece.

### Partial Differentiation in a Local Basis

Since $d\mathbf{A} = \frac{\partial \mathbf{A}}{\partial x^k}\,dx^k$, we can read off the partial derivative:

$$
\frac{\partial \mathbf{A}}{\partial x^k} = \frac{\partial(A_j\,\mathbf{e}^j)}{\partial x^k} = \frac{\partial A_j}{\partial x^k}\,\mathbf{e}^j + A_j\,\frac{\partial \mathbf{e}^j}{\partial x^k}
$$

$$
\frac{\partial \mathbf{A}}{\partial x^k} = \frac{\partial(A^j\,\mathbf{e}_j)}{\partial x^k} = \frac{\partial A^j}{\partial x^k}\,\mathbf{e}_j + A^j\,\frac{\partial \mathbf{e}_j}{\partial x^k}
$$

Both expressions have the same structure: the ordinary partial derivative of the components, plus a correction term from the changing basis.

### Worked Example

> [!example]
> Consider a local basis
> $\mathbf{e}^1 = 2x^1\,\mathbf{i} + x^1\,\mathbf{j} + x^3\,\mathbf{k}$, $\quad \mathbf{e}^2 = x^2\,\mathbf{j} + x^2\,\mathbf{k}$, $\quad \mathbf{e}^3 = x^3\,\mathbf{k}$.
> Find $\frac{\partial \mathbf{A}}{\partial x^1}$ for $\mathbf{A} = x^2\,\mathbf{i} + 2x^1\,\mathbf{j} + x^1 x^3\,\mathbf{k}$.

We use $\frac{\partial \mathbf{A}}{\partial x^1} = \frac{\partial A_j}{\partial x^1}\,\mathbf{e}^j + A_j\,\frac{\partial \mathbf{e}^j}{\partial x^1}$.

**First term** - differentiate the components:

$$
\frac{\partial A_j}{\partial x^1}\,\mathbf{e}^j = \frac{\partial A_1}{\partial x^1}\,\mathbf{e}^1 + \frac{\partial A_2}{\partial x^1}\,\mathbf{e}^2 + \frac{\partial A_3}{\partial x^1}\,\mathbf{e}^3 = 0 + 2\,\mathbf{e}^2 + x^3\,\mathbf{e}^3.
$$

Substituting the basis vectors: $2(x^2\,\mathbf{j} + x^2\,\mathbf{k}) + x^3(x^3\,\mathbf{k}) = 2x^2\,\mathbf{j} + (2x^2 + (x^3)^2)\,\mathbf{k}$.

**Second term** - differentiate the basis:

$$
A_j\,\frac{\partial \mathbf{e}^j}{\partial x^1} = A_1\,\frac{\partial \mathbf{e}^1}{\partial x^1} + A_2\,\frac{\partial \mathbf{e}^2}{\partial x^1} + A_3\,\frac{\partial \mathbf{e}^3}{\partial x^1} = A_1(2\,\mathbf{i} + \mathbf{j}) + 0 + 0 = 2A_1\,\mathbf{i} + A_1\,\mathbf{j}.
$$

**Combining:**

$$
\frac{\partial \mathbf{A}}{\partial x^1} = 2A_1\,\mathbf{i} + (2x^2 + A_1)\,\mathbf{j} + (2x^2 + (x^3)^2)\,\mathbf{k}.
$$

### The Covariant Derivative as a Tensor

Each partial derivative $\frac{\partial \mathbf{A}}{\partial x^k}$ is itself a vector. Denote it $\mathbf{v}_k = \frac{\partial \mathbf{A}}{\partial x^k}$. Like any vector, $\mathbf{v}_k$ has contravariant and covariant components:

$$
\mathbf{v}_k = (A_k)^i\,\mathbf{e}_i = (A_k)_i\,\mathbf{e}^i.
$$

We adopt the shorthand:

$$
A^i_{\cdot k} = (A_k)^i, \qquad A_{i,k} = (A_k)_i.
$$

These components $A^i_{\cdot k}$ and $A_{i,k}$ form a second-rank tensor called the **[[Covariant Differentiation]]**.

### Extracting the Components

To find $A_{i,k}$, expand $\mathbf{v}_k$ in the dual basis and project:

$$
\frac{\partial \mathbf{A}}{\partial x^k} = A_{1,k}\,\mathbf{e}^1 + A_{2,k}\,\mathbf{e}^2 + A_{3,k}\,\mathbf{e}^3.
$$

Taking the dot product with $\mathbf{e}_i$ and using $\mathbf{e}^j \cdot \mathbf{e}_i = \delta^j_i$:

$$
\boxed{A_{i,k} = \frac{\partial \mathbf{A}}{\partial x^k} \cdot \mathbf{e}_i}
$$

Similarly:

$$
\boxed{A^i_{\cdot k} = \frac{\partial \mathbf{A}}{\partial x^k} \cdot \mathbf{e}^i}
$$

### Summary Formulas for Covariant Differentiation

Substituting the local-basis expression for $\frac{\partial \mathbf{A}}{\partial x^k}$ into the projection formulas:

$$
\boxed{A_{i,k} = \frac{\partial A_i}{\partial x^k} + A_j\,\frac{\partial \mathbf{e}^j}{\partial x^k} \cdot \mathbf{e}_i}
$$

$$
\boxed{A^i_{\cdot k} = \frac{\partial A^i}{\partial x^k} + A^j\,\frac{\partial \mathbf{e}_j}{\partial x^k} \cdot \mathbf{e}^i}
$$

The first term is the ordinary partial derivative of the component. The second term corrects for the fact that the basis itself is changing.

## Christoffel Symbols

The correction terms above contain dot products of basis derivatives with basis vectors. These appear so frequently that they earn their own notation.

### Christoffel Symbols of the Second Kind

> [!important]
> The **[[Christoffel Symbols]]** are defined by:
> $\displaystyle \Gamma^i_{jk} = \mathbf{e}^i \cdot \frac{\partial \mathbf{e}_j}{\partial x^k}$
> and the related identity $\displaystyle \Gamma^j_{ik} = -\mathbf{e}_i \cdot \frac{\partial \mathbf{e}^j}{\partial x^k}$.
> Each symbol has 27 components (3 choices for each of the three indices).

With this notation, the covariant derivatives become:

$$
\boxed{A_{i,k} = \frac{\partial A_i}{\partial x^k} - \Gamma^j_{ik}\,A_j}
$$

$$
\boxed{A^i_{\cdot k} = \frac{\partial A^i}{\partial x^k} + \Gamma^i_{jk}\,A^j}
$$

> [!warning]
> Watch the sign: the covariant-component formula has a **minus** sign in front of $\Gamma$, while the contravariant-component formula has a **plus** sign. Mixing these up is an easy route to wrong answers.

### Fixed Basis as a Special case

If the basis is fixed, then $\frac{\partial \mathbf{e}_j}{\partial x^k} = 0$, so all Christoffel symbols vanish: $\Gamma^i_{jk} = 0$. The covariant derivatives collapse to ordinary partial derivatives:

$$
A_{i,k} = \frac{\partial A_i}{\partial x^k}, \qquad A^i_{\cdot k} = \frac{\partial A^i}{\partial x^k}.
$$

This confirms that covariant differentiation generalises ordinary differentiation - the two agree when the basis is constant.

### Christoffel Symbols as Expansion Coefficients

The Christoffel symbols $\Gamma^i_{jk}$ are the expansion coefficients of the vector $\frac{\partial \mathbf{e}_j}{\partial x^k}$ with respect to the basis $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$:

$$
\boxed{\frac{\partial \mathbf{e}_j}{\partial x^k} = \Gamma^i_{jk}\,\mathbf{e}_i}
$$

To prove this, write $\frac{\partial \mathbf{e}_j}{\partial x^k} = A^i_{jk}\,\mathbf{e}_i$ and dot both sides with $\mathbf{e}^m$:

$$
\mathbf{e}^m \cdot \frac{\partial \mathbf{e}_j}{\partial x^k} = A^i_{jk}\,(\mathbf{e}^m \cdot \mathbf{e}_i) = A^i_{jk}\,\delta^m_i = A^m_{jk}.
$$

But $\mathbf{e}^m \cdot \frac{\partial \mathbf{e}_j}{\partial x^k} = \Gamma^m_{jk}$ by definition, so $A^m_{jk} = \Gamma^m_{jk}$.

### Christoffel Symbols of the First Kind

We can also expand $\frac{\partial \mathbf{e}_j}{\partial x^k}$ in the dual basis. The resulting coefficients are the **[[Christoffel Symbols]]**:

$$
\frac{\partial \mathbf{e}_j}{\partial x^k} = \Gamma_{ijk}\,\mathbf{e}^i \qquad \Longrightarrow \qquad \boxed{\Gamma_{ijk} = \mathbf{e}_i \cdot \frac{\partial \mathbf{e}_j}{\partial x^k}}
$$

> [!note]
> First kind: all indices downstairs, dot with $\mathbf{e}_i$. Second kind: one index upstairs, dot with $\mathbf{e}^i$. The position of the index on $\Gamma$ mirrors which basis vector you project onto.

### Relation to the Metric Tensor

The two kinds of Christoffel symbol are related via the **[[metric tensor]]**. Starting from the first-kind definition and substituting the second-kind expansion:

$$
\Gamma_{ijk} = \mathbf{e}_i \cdot \frac{\partial \mathbf{e}_j}{\partial x^k} = \mathbf{e}_i \cdot (\Gamma^\ell_{jk}\,\mathbf{e}_\ell) = (\mathbf{e}_i \cdot \mathbf{e}_\ell)\,\Gamma^\ell_{jk} = g_{i\ell}\,\Gamma^\ell_{jk}.
$$

Similarly:

$$
\Gamma^i_{jk} = \mathbf{e}^i \cdot (\Gamma_{\ell jk}\,\mathbf{e}^\ell) = g^{i\ell}\,\Gamma_{\ell kj}.
$$

So the metric tensor raises and lowers the first index of the Christoffel symbol, just as it does for tensor components:

$$
\boxed{\Gamma_{ijk} = g_{i\ell}\,\Gamma^\ell_{jk}, \qquad \Gamma^i_{jk} = g^{i\ell}\,\Gamma_{\ell kj}}
$$

### Symmetry of Christoffel Symbols

Both kinds of Christoffel symbol are **symmetric in the lower two indices** $j$ and $k$:

$$
\boxed{\Gamma_{ijk} = \Gamma_{ikj}, \qquad \Gamma^i_{jk} = \Gamma^i_{kj}}
$$

The proof for the first kind uses $\mathbf{e}_i = \frac{\partial \mathbf{r}}{\partial x^i}$:

$$
\Gamma_{ijk} = \mathbf{e}_i \cdot \frac{\partial \mathbf{e}_j}{\partial x^k} = \frac{\partial \mathbf{r}}{\partial x^i} \cdot \frac{\partial}{\partial x^k}\frac{\partial \mathbf{r}}{\partial x^j} = \frac{\partial \mathbf{r}}{\partial x^i} \cdot \frac{\partial}{\partial x^j}\frac{\partial \mathbf{r}}{\partial x^k} = \mathbf{e}_i \cdot \frac{\partial \mathbf{e}_k}{\partial x^j} = \Gamma_{ikj},
$$

where we swapped the order of the mixed partial (equality of mixed partials). The second-kind symmetry follows identically.

This symmetry means $\Gamma^i_{jk}$ has at most $3 \times 6 = 18$ independent components (not 27), since the 6 comes from the symmetric pair $(j,k)$.

### Christoffel Symbols Are not Tensors

Despite having indices, Christoffel symbols do **not** transform as tensors. Under a coordinate transformation $x^i \to x'^i$ with transformation matrix $L$, the first-kind symbol transforms as:

$$
\Gamma'_{ijk} = L^\ell_{i'}\,L^m_{j'}\,L^n_{k'}\,\Gamma_{\ell mn} + L^\ell_{i'}\,L^n_{k'}\,\frac{\partial L^m_{j'}}{\partial x^n}\,g_{\ell m}.
$$

The second-kind symbol transforms as:

$$
{\Gamma^i_{jk}}' = L^{i'}_\ell\,L^m_{j'}\,L^n_{k'}\,\Gamma^\ell_{mn} + L^{i'}_m\,L^n_{k'}\,\frac{\partial L^m_{j'}}{\partial x^n}.
$$

In both cases, the second term (involving a derivative of $L$) spoils the tensor transformation law. The Christoffel symbol picks up an extra piece that a genuine tensor never would.

> [!warning]
> Christoffel symbols have indices and obey certain algebraic rules, but they are **not** tensors. They transform with an additional inhomogeneous term. This is precisely because they encode how the basis changes - information that is coordinate-system-dependent, not intrinsic.

---

## Pre-Lecture Notes from [[mth3008 lecture notes 15.pdf]]

- **Chapter 7: Tensor Fields** opens with seven topics; this lecture covers Preliminary, Covariant Differentiation, and Christoffel Symbols
- A **vector field** assigns a vector to each point in a region; a **local basis** $\mathbf{e}_j(x^1,x^2,x^3)$ varies with position, unlike a fixed basis
- In Cartesian or any fixed basis, $d\mathbf{e}_j = 0$, so $d\mathbf{A} = \mathbf{i}_j\,dA_j$ - the differential depends only on the components
- In a local basis, the product rule gives $d\mathbf{A} = \mathbf{e}^j\,dA_j + A_j\,d\mathbf{e}^j$, producing a correction term from the changing basis
- The **covariant derivative** components are $A_{i,k} = \frac{\partial \mathbf{A}}{\partial x^k} \cdot \mathbf{e}_i$ and $A^i_{\cdot k} = \frac{\partial \mathbf{A}}{\partial x^k} \cdot \mathbf{e}^i$
- **Christoffel symbols of the second kind**: $\Gamma^i_{jk} = \mathbf{e}^i \cdot \frac{\partial \mathbf{e}_j}{\partial x^k}$; these are the expansion coefficients of $\frac{\partial \mathbf{e}_j}{\partial x^k}$ in the basis $\mathbf{e}_i$
- **Christoffel symbols of the first kind**: $\Gamma_{ijk} = \mathbf{e}_i \cdot \frac{\partial \mathbf{e}_j}{\partial x^k}$; related to the second kind via $\Gamma_{ijk} = g_{i\ell}\,\Gamma^\ell_{jk}$
- Both kinds are **symmetric** in $j,k$: $\Gamma^i_{jk} = \Gamma^i_{kj}$ and $\Gamma_{ijk} = \Gamma_{ikj}$ (from equality of mixed partials)
- Christoffel symbols are **not tensors** - their transformation law contains an extra derivative term beyond the standard tensor law
- Covariant derivative formulas: $A_{i,k} = \frac{\partial A_i}{\partial x^k} - \Gamma^j_{ik}\,A_j$ and $A^i_{\cdot k} = \frac{\partial A^i}{\partial x^k} + \Gamma^i_{jk}\,A^j$
- **Next lecture**: more on Christoffel symbols and covariant differentiation of tensors
