# Heat Equation

The **heat equation** (also called the diffusion equation) describes how a quantity $u$ (e.g. temperature) diffuses through space over time.

In 1D:

$$
\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}
$$

where $\alpha > 0$ is the **diffusion coefficient**.

## Initial and Boundary Conditions

The heat equation requires:

- An **initial condition**: $u(0, x) = f_0(x)$ specifying the profile at $t = 0$.
- **[[Boundary conditions]]**: fixing $u$ (Dirichlet) or $\partial u / \partial x$ (Neumann) at the spatial boundaries for all $t$.

## Numerical Schemes

The heat equation is discretised in space using the [[Finite differences|centred second derivative]] and in time using either:

- [[FTCS scheme]]: forward difference in time (explicit, conditionally stable)
- [[BTCS scheme]]: backward difference in time (implicit, unconditionally stable)

The solution of the [[Wiener process|Wiener process]] (Brownian motion) is also a diffusion equation solution: the PDF of $W(t)$ is Gaussian with variance $t$, which satisfies the heat equation with $\alpha = 1/2$ and a delta-function initial condition.

[[FTCS scheme]] | [[BTCS scheme]] | [[Boundary conditions]] | [[Finite differences]] | [[Laplace equation]] | [[Wiener process]]
