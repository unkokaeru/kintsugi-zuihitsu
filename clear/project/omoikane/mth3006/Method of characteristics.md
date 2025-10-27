# Method of Characteristics

- Focus on the case of two independent variables, $u = u(x, y)$.
- Along a characteristic curve (or characteristic) in the $(x, y)$ plane, the partial differential equation can be integrated directly to give the solution $u$.
- To use this method, we need the region on which we are solving the partial differential equation to be covered by characteristic curves.

## Theory

- We focus on the case $A(x, y)\frac{\partial u}{\partial x} + B(x, y)\frac{\partial u}{\partial y} = C(x, y)$ and consider the family of curves (the characteristics) defined by $\frac{dx}{A} = \frac{dy}{B}$
- The element of arc length (squared) along one of these curves is given by $ds^2 = dx^2 + dy^2$
- Since $\frac{dx}{A} = \frac{dy}{B}$, we can also write $ds = \sqrt{dx^2 + dy^2}$ and $ds:$ $1 d\theta$
- Similarly, $ds = 1 d\phi$
- If we multiply the original PDE by $ds$, we find $A ds \frac{\partial u}{\partial x} + B ds \frac{\partial u}{\partial y} = C ds$ Or using \theta$ and $\phi$ $A \frac{\partial u}{\partial x} dx + B \frac{\partial u}{\partial y} dy = C ds$
- The term in braces is the total differential of $u$, $du$, so Using $\theta$ and $\phi$ again, we also have that from which the solution $u$ can be found by integration along the characteristics.
