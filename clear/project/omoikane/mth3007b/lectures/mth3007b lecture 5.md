# MTH3007b Lecture 5

> [!quote] Me, in the lecture
> zzzzz...

Lecture 4 formalised stability and convergence, analysed the Richardson method, and extended explicit RK methods to systems of ODEs. This session covers three further topics: computing definite integrals by recasting them as ODEs, reducing higher-order ODEs to first-order systems, and an introduction to partial differential equations including the derivation and implementation of the FTCS scheme for the diffusion equation.

## Numerical Integration via ODE

### The Core Idea

A definite integral $F(z) = \int_a^z f(s)\,ds$ satisfies the ODE

$$
\frac{dF}{dz} = f(z), \qquad F(a) = 0
$$

This is an initial value problem: $g(z, F) = f(z)$ (the right-hand side does not depend on $F$). Any ODE solver from previous sessions can therefore compute $F(b) = \int_a^b f(s)\,ds$.

> [!important]
> This converts numerical integration into a special case of ODE solving. Higher-order ODE methods give higher-order quadrature rules.

### Example

Integrate $f(t) = -2t^3 + 12t^2 - 20t + 8.5$ from $t = 0$ to $t_{\text{max}} = 1$. Set $dF/dt = f(t)$, $F(0) = 0$, and apply any ODE solver to obtain $F(1)$.

## Higher-Order ODEs

### Reduction to First-Order System

A second-order ODE $y'' = f(t, y, y')$ cannot be solved directly by the methods above. The standard technique is to introduce auxiliary variables to reduce it to a first-order system.

Set $z_1 = y$ and $z_2 = y'$. Then:

$$
z_1' = z_2
$$

$$
z_2' = f(t, z_1, z_2)
$$

This is a system of two first-order ODEs in $\mathbf{z} = (z_1, z_2)^\top$, of exactly the form treated in Lecture 4. See [[Reducing a Second-Order ODE]] for the general pattern.

### General n-th Order Case

An $n$-th order ODE $y^{(n)} = f(t, y, y', \ldots, y^{(n-1)})$ reduces to a first-order system of $n$ equations by introducing $z_k = y^{(k-1)}$ for $k = 1, \ldots, n$:

$$
z_1' = z_2, \quad z_2' = z_3, \quad \ldots, \quad z_{n-1}' = z_n, \quad z_n' = f(t, z_1, \ldots, z_n)
$$

All initial conditions $y(t_0), y'(t_0), \ldots, y^{(n-1)}(t_0)$ become initial conditions for the components $z_k(t_0)$.

## Introduction to PDEs

### Classification

An ordinary differential equation involves derivatives with respect to a single independent variable. A partial differential equation (PDE) involves partial derivatives with respect to two or more independent variables (typically space and time, or multiple spatial coordinates).

The order of a PDE is the order of the highest partial derivative appearing in it.

### Side Conditions

Solutions to PDEs require side conditions to be uniquely specified. These fall into two categories:

- **Initial conditions**: specify the solution at a starting time $t = t_0$ (for time-dependent problems)
- **[[Boundary conditions]]**: specify the solution (or its derivatives) on the spatial boundary of the domain for all time

A problem with both initial and boundary conditions is an initial-boundary value problem.

### Types of Boundary Conditions

> [!important]
> Three standard types of boundary condition:
> - **Dirichlet BC**: specifies the value of $u$ on the boundary, e.g. $u(0,t) = 0$
> - **Neumann BC**: specifies the normal derivative of $u$ on the boundary, e.g. $\partial_x u(0,t) = 0$
> - **Mixed BC**: a linear combination of $u$ and its normal derivative

## The Diffusion (Heat) Equation

### Formulation

The **[[Heat equation]]** (diffusion equation) in one spatial dimension is

$$
\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}
$$

where $\alpha > 0$ is the diffusion coefficient. This is a second-order PDE in $x$ and first-order in $t$.

### Related Equations

- **[[Laplace equation]]**: $\partial^2 u/\partial x^2 = 0$ - the steady-state ($\partial_t u = 0$) limit of the diffusion equation; no time dependence
- **[[Poisson equation]]**: $\partial^2 u/\partial x^2 = -\rho(x)$ - Laplace equation with a source term $\rho$

## Finite Difference Discretisation

### Spatial Grid

Discretise the spatial domain $[0, L]$ with grid spacing $dx$, so $x_n = n\,dx$ for $n = 0, 1, \ldots, N_x - 1$. Similarly discretise time with step $dt$.

### Second-Derivative Stencil

The centred second-derivative approximation to $\partial^2 u/\partial x^2$ at interior point $x_n$ (see [[Finite differences]]):

$$
\frac{\partial^2 u}{\partial x^2}\bigg|_{x_n} \approx \frac{u_{n+1} - 2u_n + u_{n-1}}{dx^2}
$$

### FTCS Scheme

**[[FTCS scheme|FTCS]]** stands for Forward-Time Central-Space. Applying a forward difference in time and the central stencil in space to the diffusion equation:

$$
\frac{u_n^{i+1} - u_n^i}{dt} = \alpha \frac{u_{n+1}^i - 2u_n^i + u_{n-1}^i}{dx^2}
$$

Defining $r = \alpha\,dt/dx^2$:

$$
\boxed{u_n^{i+1} = (1 - 2r)\,u_n^i + r\!\left(u_{n+1}^i + u_{n-1}^i\right)}
$$

This is explicit in time: the solution at the new time level is computed directly from the current level.

> [!note]
> Index convention here: superscript $i$ is the time level, subscript $n$ is the spatial index. The boundary nodes $u_0$ and $u_{N_x-1}$ are fixed by the Dirichlet BCs and are not updated by the interior formula.

### FTCS Python Implementation

```python runnable
import numpy as np
import matplotlib.pyplot as plt

domain_length = 10.0
spatial_step = 0.5
number_of_spatial_nodes = int(np.round(domain_length / spatial_step) + 1)
time_end = 1.0
time_step = 0.001
number_of_time_steps = int(np.round(time_end / time_step) + 1)
diffusivity = 1.0
stability_parameter = diffusivity * time_step / spatial_step ** 2

u_profile = np.zeros(number_of_spatial_nodes)
for node_index in range(number_of_spatial_nodes):
    u_profile[node_index] = np.sin(np.pi * node_index * spatial_step / domain_length)
u_profile[0] = 0.0
u_profile[number_of_spatial_nodes - 1] = 0.0

for time_index in range(number_of_time_steps - 1):
    u_next = np.zeros(number_of_spatial_nodes)
    u_next[0] = u_profile[0]
    u_next[number_of_spatial_nodes - 1] = u_profile[number_of_spatial_nodes - 1]
    for node_index in range(1, number_of_spatial_nodes - 1):
        u_next[node_index] = (
            u_profile[node_index]
            + stability_parameter * (
                u_profile[node_index + 1]
                - 2 * u_profile[node_index]
                + u_profile[node_index - 1]
            )
        )
    u_profile = 1.0 * u_next
```

> [!note]
> The line `u_profile = 1.0 * u_next` copies `u_next` into `u_profile` (multiplying by `1.0` forces a copy rather than a reference assignment). The boundary values are set once on `u_profile` before the loop and then copied into `u_next[0]` and `u_next[Nx-1]` each iteration.

---

## Pre-Lecture Notes from [[mth3007b lecture notes 5.pdf|University Notes]]

- **Integration via ODE**: $F(z) = \int_a^z f(s)\,ds$ satisfies $dF/dz = f(z)$, $F(a) = 0$ - any ODE solver gives the integral
- **Higher-order ODEs**: introduce $z_1 = y, z_2 = y', \ldots$ to reduce $n$-th order ODE to first-order system of size $n$
- **PDEs**: involve partial derivatives in $\geq 2$ variables; classified by order of highest derivative
- Side conditions: initial conditions (time) + boundary conditions (space); Dirichlet (value), Neumann (derivative), or mixed
- **Diffusion equation**: $\partial_t u = \alpha\,\partial_{xx} u$; Laplace = steady state ($\partial_t = 0$); Poisson = Laplace + source
- Second-derivative stencil: $(u_{n+1} - 2u_n + u_{n-1})/dx^2$ (three-point central difference)
- **FTCS scheme**: $u_n^{i+1} = (1-2r)u_n^i + r(u_{n+1}^i + u_{n-1}^i)$ where $r = \alpha\,dt/dx^2$; explicit, second-order in space, first-order in time
- Boundary values fixed by Dirichlet BCs; interior nodes updated by FTCS formula
