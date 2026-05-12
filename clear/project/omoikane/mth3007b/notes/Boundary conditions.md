# Boundary Conditions

**Boundary conditions** (BCs) specify the behaviour of a solution at the boundary of the domain. For PDEs, they are required to obtain a unique solution.

## Dirichlet Boundary Conditions

The value of $u$ is fixed at the boundary:

$$
u\big|_{\text{boundary}} = f
$$

## Neumann Boundary Conditions

The normal derivative of $u$ is fixed at the boundary:

$$
\frac{\partial u}{\partial n} = d
$$

In 1D, this means $u'$ is fixed at the endpoints. For a left boundary with derivative $d$, an **imaginary point** technique is used: introduce a fictitious point $u_{-1}$ and use the centred difference

$$
\frac{u_1 - u_{-1}}{2 \, dx} = d \implies u_{-1} = u_1 - 2 \, dx \cdot d
$$

This allows the interior equations to be applied at the boundary node too. The special case $d = 0$ (insulation) gives $u_{-1} = u_1$, i.e. $u_0 = u_1$.

## Mixed Boundary Conditions

A combination of Dirichlet and Neumann conditions applied at different parts of the boundary.

Boundary conditions appear in both the [[Heat equation]] (combined with initial conditions) and the [[Laplace equation]] (BCs alone determine the solution, with no initial condition).

[[Heat equation]] | [[Laplace equation]] | [[FTCS scheme]] | [[BTCS scheme]]
