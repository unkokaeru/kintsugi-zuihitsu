# Gradient

> [!tip] Relevant parts to questions...
> - In suffix form: $[\nabla f]_{i}=\partial f/\partial x_{i}$.
> - **Radial function**: $\nabla f(r)=f'(r)\,\mathbf{r}/r$, derived from $\partial r/\partial x_{i}=x_{i}/r$.
> - **Tensor character**: $\nabla f$ is a rank-1 tensor because $\partial/\partial x_{i}'=L_{ij}\partial/\partial x_{j}$ (chain rule + Cartesian Jacobian).

The **gradient of a scalar field** is

$$
\nabla f=\left( \frac{\partial f}{\partial x_{1}} ,\frac{\partial f}{\partial x_{2}},\frac{\partial f}{\partial x_{3}}\right)
$$

In **suffix notation**: $[\nabla f]_{i}= \partial f/\partial x_{i}$. To compute, just take partial derivatives component-by-component, optionally evaluated at a point.

> [!example]
> Find $\nabla \phi$ of $\phi(x_{1},x_{2},x_{3})= \frac{1}{2}x_{2}^2x_{3}^3-3x_{1}x_{2}+x_{2}^5x_{3}+1$ at $P=(3,1,0)$.
>
> $\nabla \phi=\left( -3x_{2},\;x_{2}x_{3}^3-3x_{1}+5x_{2}^4x_{3},\; \frac{3}{2}x_{2}^2x_{3}^2+x_{2}^5 \right)$
> At $P$: $\boxed{\nabla \phi|_{P}=-3\mathbf{i}-9\mathbf{j}+\mathbf{k}}$.

### Radial Functions $f(r)$

For $r=\|\mathbf{r}\|=(x_{j}x_{j})^{1/2}$:

$$
\frac{\partial r}{\partial x_{i}}= \frac{1}{2}(x_{j}x_{j})^{-1/2}\cdot 2x_{i}= \frac{x_{i}}{r}
$$

So by chain rule, $[\nabla f(r)]_{i}=f'(r)\,\dfrac{\partial r}{\partial x_{i}}=f'(r)\,\dfrac{x_{i}}{r}$, i.e.,

$$
\boxed{\nabla f(r)=f'(r) \frac{\mathbf{r}}{r}}
$$

> Scalar in, vector out.
