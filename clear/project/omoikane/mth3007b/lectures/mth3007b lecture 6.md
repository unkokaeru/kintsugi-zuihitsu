# MTH3007b Lecture 6

> [!quote] Me, in the lecture
> zzzzz...

This session opens the PDE strand of the module. We look at how partial differential equations arise, how to classify them, and how to discretise and solve the 1D diffusion equation numerically using the Forward-Time Centred-Space (FTCS) scheme.

## PDEs: Introduction and Classification

A partial differential equation (PDE) involves an unknown function of two or more variables and its partial derivatives. The classic example in this module is the **[[Heat equation]]** (also called the diffusion equation):

$$
\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}
$$

where $\alpha > 0$ is the diffusion coefficient. This governs, for example, how temperature $u(x,t)$ spreads along a rod over time.

### Initial and Boundary Conditions

To have a unique solution, a PDE needs both an initial condition (the state of $u$ at $t=0$ across the whole domain) and **[[Boundary conditions]]** at the edges of the spatial domain.

The three standard types of boundary condition are:

- **Dirichlet BC**: the value of $u$ is fixed at the boundary, e.g. $u(0,t) = u_L$.
- **Neumann BC**: the normal derivative $\partial u / \partial n$ is fixed at the boundary.
- **Mixed BC**: Dirichlet on part of the boundary and Neumann on the rest.

## The Laplace and Poisson Equations

The **[[Laplace equation]]** describes the steady state of the diffusion equation - when $\partial u / \partial t = 0$:

$$
\nabla^2 u = 0
$$

The **[[Poisson equation]]** generalises this by including a nonzero source term $g$:

$$
\nabla^2 u = g
$$

In one spatial dimension, the Poisson equation reduces to:

$$
\frac{d^2 u}{d x^2} = g(x)
$$

### Finite Difference Second Derivative

We discretise the second derivative using the standard centred stencil (see [[Finite differences]]):

$$
\frac{d^2 u}{d x^2} \approx \frac{u_{n+1} - 2u_n + u_{n-1}}{(\Delta x)^2}
$$

This follows from combining the forward and backward first-difference approximations.

## The FTCS Scheme for 1D Diffusion

**[[FTCS scheme|FTCS]]** stands for Forward-Time Centred-Space. We use a forward (explicit) difference in time and the centred stencil in space.

Starting from the diffusion equation and applying both discretisations:

$$
\frac{u_{i,n+1} - u_{i,n}}{\Delta t} = \alpha \frac{u_{i+1,n} - 2u_{i,n} + u_{i-1,n}}{(\Delta x)^2}
$$

Rearranging to get the update rule:

$$
\boxed{u_{i,n+1} = (1 - 2r)\, u_{i,n} + r\,(u_{i+1,n} + u_{i-1,n})}
$$

where the stability parameter $r$ is defined as:

$$
r = \frac{\alpha \,\Delta t}{(\Delta x)^2}
$$

Here $i$ indexes space and $n$ indexes time. The new value at each interior point is computed entirely from old (known) values - this is what makes the scheme explicit.

### Algorithm

1. Set up the spatial grid with spacing $\Delta x$ and time grid with step $\Delta t$.
2. Apply the initial condition to the array $u$.
3. Apply Dirichlet boundary conditions: fix $u[0]$ and $u[N_x - 1]$ at each time step.
4. For each time step, loop over interior points $i = 1, \ldots, N_x - 2$ and apply the FTCS update.
5. Store or plot $u$ as needed.

### Python Implementation

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

The initial condition here is $u(x,0) = \sin(\pi x / L)$ with Dirichlet conditions $u(0,t) = u(L,t) = 0$. Note that `u_profile = 1.0 * u_next` copies the array by value rather than creating an alias - this is important for correctness.

---

## Pre-Lecture Notes from [[mth3007b lecture notes 6.pdf|University Notes]]

- PDEs involve partial derivatives in two or more variables; the diffusion equation $\partial_t u = \alpha \partial_{xx} u$ is the central example.
- ICs specify $u$ at $t=0$; BCs specify behaviour at spatial boundaries throughout time.
- Dirichlet BCs fix $u$; Neumann BCs fix $\partial u / \partial n$; Mixed BCs combine both.
- Laplace equation: $\nabla^2 u = 0$ (steady state); Poisson: $\nabla^2 u = g$ (with source).
- 1D Poisson discretises via $(u_{n+1} - 2u_n + u_{n-1})/(\Delta x)^2 = g_n$.
- FTCS update: $u_{i,n+1} = (1-2r)u_{i,n} + r(u_{i+1,n} + u_{i-1,n})$ with $r = \alpha \Delta t / (\Delta x)^2$.
- The scheme is explicit: each new value depends only on known old values.
- Next session: Monte Carlo integration and an introduction to stochastic processes.
