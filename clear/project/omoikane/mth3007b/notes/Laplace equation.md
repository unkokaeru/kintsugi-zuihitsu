# Laplace Equation

The **Laplace equation** is

$$
\nabla^2 u = 0
$$

It describes the steady-state of the [[Heat equation]] (diffusion equation): when $\partial u / \partial t = 0$, the heat equation reduces to the Laplace equation.

## 2D Form

In two spatial dimensions:

$$
\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0
$$

## Key Properties

- The Laplace equation has no time variable, so there is no initial condition.
- Only [[Boundary conditions]] are required to determine the solution uniquely.
- The solution gives the equilibrium temperature distribution inside a domain given fixed boundary temperatures.

The finite difference discretisation of the 2D Laplace equation gives the [[Laplacian difference equation]], which is solved iteratively using [[Liebmann's method]].

[[Heat equation]] | [[Laplacian difference equation]] | [[Liebmann's method]] | [[Boundary conditions]]
