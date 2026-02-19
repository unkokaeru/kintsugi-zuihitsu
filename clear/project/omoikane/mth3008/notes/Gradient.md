# Gradient

The **gradient of a scalar field** is $\nabla f=\left( \frac{\partial f}{\partial x_{1}} ,\frac{\partial f}{\partial x_{2}},\frac{\partial f}{\partial x_{3}}\right)$, where the $i$-th component of the gradient is the partial derivative with respect to $x_{i}$, hence in **suffix notation** is $[\nabla f]_{i}= \frac{\partial f}{\partial x_{i}}$. Practically, to find these gradients then you simply calculate each component, often then specifying a value at a specific point.

> [!example]
> Find the gradient $\nabla \phi$ of $\phi(x_{1},x_{2},x_{3})= \frac{1}{2}x_{2}^2x_{3}^3-3x_{1}x_{2}+x_{2}^5x_{3}+1$ at the point $P=(3,1,0)$…
>
> First, the general gradient is $\nabla \phi=\left( -3x_{2},x_{2}x_{3}^3-3x_{1}+6x_{2}^4x_{3}, \frac{3}{2}x_{2}^2x_{3}^2+x_{2}^5 \right)$, by finding the partial derivatives for each component. Then, at the point $P$, we find that $\nabla \phi\big|_{P}=(-3,-9,1)=\boxed{-3\mathbf{i}-9\mathbf{j}+\mathbf{k}}$.
