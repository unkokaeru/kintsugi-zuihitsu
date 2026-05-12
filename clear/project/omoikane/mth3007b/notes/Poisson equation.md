# Poisson Equation

The **Poisson equation** is a generalisation of the [[Laplace equation]] that includes a nonzero source term:

$$
\nabla^2 u = g
$$

where $g$ is a known function of position. In 2D:

$$
\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = g(x, y)
$$

When $g = 0$ everywhere, the Poisson equation reduces to the Laplace equation. The Poisson equation arises in problems such as electrostatics (where $g$ is proportional to charge density) and steady-state heat conduction with internal heat generation.

Like the Laplace equation, the Poisson equation has no time variable and requires only [[Boundary conditions]] for a unique solution. It can be discretised using the same [[Laplacian difference equation]] stencil, with the source term $g$ added to the right-hand side at each grid point. [[Liebmann's method]] can then be applied to solve the resulting linear system iteratively.

[[Laplace equation]] | [[Laplacian difference equation]] | [[Liebmann's method]] | [[Boundary conditions]]
