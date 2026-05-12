# MTH3007b Lecture 5

> [!quote] Me, in the lecture
> zzzzz...

Lecture 4 formalised stability and convergence, analysed the Richardson method, and extended explicit RK methods to systems of ODEs. This session covers three further topics: computing definite integrals by recasting them as ODEs, reducing higher-order ODEs to first-order systems, and an introduction to **[[partial differential equations]]** (PDEs) including the derivation and implementation of the FTCS scheme for the diffusion equation.

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

This is a system of two first-order ODEs in $\mathbf{z} = (z_1, z_2)^T$, of exactly the form treated in Lecture 4.

### General n-th Order Case

An $n$-th order ODE $y^{(n)} = f(t, y, y', \ldots, y^{(n-1)})$ reduces to a first-order system of $n$ equations by introducing $z_k = y^{(k-1)}$ for $k = 1, \ldots, n$:

$$
z_1' = z_2, \quad z_2' = z_3, \quad \ldots, \quad z_{n-1}' = z_n, \quad z_n' = f(t, z_1, \ldots, z_n)
$$

All initial conditions $y(t_0), y'(t_0), \ldots, y^{(n-1)}(t_0)$ become initial conditions for the components $z_k(t_0)$.

## Introduction to PDEs

### Classification

An **[[ordinary differential equation]]** (ODE) involves derivatives with respect to a single independent variable. A **[[partial differential equation]]** (PDE) involves partial derivatives with respect to two or more independent variables (typically space and time, or multiple spatial coordinates).

The **order** of a PDE is the order of the highest partial derivative appearing in it.

### Side Conditions

Solutions to PDEs require **[[side conditions]]** to be uniquely specified. These fall into two categories:

- **[[Initial conditions]]**: specify the solution at a starting time $t = t_0$ (for time-dependent problems)
- **[[Boundary conditions]]**: specify the solution (or its derivatives) on the spatial boundary of the domain for all time

A problem with both initial and boundary conditions is an **initial-boundary value problem (IBVP)**.

### Types of Boundary Conditions

> [!important]
> Three standard types of boundary condition:
> - **Dirichlet BC**: specifies the value of $u$ on the boundary, e.g. $u(0,t) = 0$
> - **Neumann BC**: specifies the normal derivative of $u$ on the boundary, e.g. $\partial_x u(0,t) = 0$
> - **Mixed BC**: a linear combination of $u$ and its normal derivative

## The Diffusion (Heat) Equation

### Formulation

The **[[diffusion equation]]** (or heat equation) in one spatial dimension is

$$
\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}
$$

where $\alpha > 0$ is the **[[diffusivity]]**. This is a second-order PDE in $x$ and first-order in $t$.

### Related Equations

- **[[Laplace equation]]**: $\partial^2 u/\partial x^2 = 0$ - the steady-state ($\partial_t u = 0$) limit of the diffusion equation; no time dependence
- **[[Poisson equation]]**: $\partial^2 u/\partial x^2 = -\rho(x)$ - Laplace equation with a source term $\rho$

## Finite Difference Discretisation

### Spatial Grid

Discretise the spatial domain $[0, L]$ with grid spacing $dx$, so $x_n = n\,dx$ for $n = 0, 1, \ldots, N_x - 1$. Similarly discretise time with step $dt$.

### Second-Derivative Stencil

The **[[second-derivative finite difference stencil]]** (three-point central difference) approximates $\partial^2 u/\partial x^2$ at interior point $x_n$:

$$
\frac{\partial^2 u}{\partial x^2}\bigg|_{x_n} \approx \frac{u_{n+1} - 2u_n + u_{n-1}}{dx^2}
$$

This is the 1D Poisson finite difference approximation for $\partial_{xx} u$.

### FTCS Scheme

**[[FTCS]]** stands for Forward-Time Central-Space. Applying a forward difference in time and the central stencil in space to the diffusion equation:

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
L=10.0
xmax=L
dx=0.5
Nx=int(np.round(xmax/dx)+1)
tmax=1.0
t=0
dt=0.001
Nt=int(np.round(tmax/dt)+1)
alpha=1.0
r=alpha*dt/(dx*dx)
u=np.zeros(Nx)
# Set initial condition
for i in range(Nx):
    u[i]=np.sin(np.pi*i*dx/L)
# Set boundary conditions
u[0]=0.0
u[Nx-1]=0.0
for it in range(Nt-1):
    unext=np.zeros(Nx)
    unext[0]=u[0]
    unext[Nx-1]=u[Nx-1]
    for i in range(1,Nx-1):
        unext[i]=u[i]+r*(u[i+1]-2*u[i]+u[i-1])
    u=1.0*unext
```

> [!note]
> The line `u=1.0*unext` copies `unext` into `u` (multiplying by `1.0` forces a copy rather than a reference assignment in some contexts). The boundary values are set once on `u` before the loop and then copied into `unext[0]` and `unext[Nx-1]` each iteration.

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
