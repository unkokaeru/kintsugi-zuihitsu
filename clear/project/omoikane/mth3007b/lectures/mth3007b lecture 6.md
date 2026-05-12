# MTH3007B Lecture 6

This lecture pivots from ODEs to **partial differential equations**. We start with how PDEs differ from ODEs (multiple independent variables, mixed initial + boundary conditions), introduce the **diffusion (heat) equation** as our primary example, and review the three classes of boundary conditions (Dirichlet, Neumann, mixed). We then derive the **second-derivative finite-difference stencil** and use it to solve two related problems: the steady-state **1D Poisson equation** as a tridiagonal linear system, and the **explicit (FTCS) scheme for the 1D diffusion equation** marching forward in time.

## Recap: Classification of DEs by Conditions

To pin down a solution to an ODE we need conditions to fix integration constants. These come in two flavours.

**Initial Value Problems (IVPs).** All conditions specified at the same starting point $t_{0}$:

$$
\frac{d\mathbf{y}(t)}{dt}=\mathbf{g}(t,\mathbf{y}(t)),\qquad \mathbf{y}(t_{0})=\mathbf{y}_{0}.
$$

This is what we have been doing all term - just integrate forward.

**Boundary Value Problems (BVPs).** Conditions specified at *different* values of the independent variable. For example a second-order ODE

$$
\frac{d^{2}y(t)}{dt^{2}}=g(t,y,y')\quad\text{with}\quad y(t_{0})=y_{0},\;\; y(t_{1})=y_{1}\;\;(t_{1}\neq t_{0}).
$$

> [!warning]
> A BVP cannot be solved by simple forward integration: at $t_{0}$ we know $y(t_{0})$ but not $y'(t_{0})$. Different techniques (shooting, finite differences, relaxation) are required.

PDEs typically combine both flavours: an initial profile in time *and* boundary values in space.

## What Makes a PDE a PDE

A **partial differential equation** is a differential equation involving *more than one* independent variable.

### The Diffusion Equation

The flagship PDE for this part of the course is the **diffusion equation** (a.k.a. heat equation):

$$
\boxed{\frac{\partial u(t,\mathbf{r})}{\partial t}=\alpha\,\nabla^{2}u(t,\mathbf{r}).}
$$

Here $\alpha>0$ is the diffusion constant, $u$ is typically temperature, and the independent variables are time $t$ and space $\mathbf{r}=(x,y,z)^{T}$.

> [!note] The Laplacian $\nabla^{2}$
> The nabla $\nabla=(\partial/\partial x,\partial/\partial y,\partial/\partial z)^{T}$ is the gradient. Its self-dot-product is the **Laplacian**:
>
> $$
> \nabla^{2}=\nabla\cdot\nabla=\frac{\partial^{2}}{\partial x^{2}}+\frac{\partial^{2}}{\partial y^{2}}+\frac{\partial^{2}}{\partial z^{2}}.
> $$
>
> In one spatial dimension ($\mathbf{r}=x$) this collapses to $\nabla^{2}=\partial^{2}/\partial x^{2}$.

The diffusion equation needs both kinds of conditions:

- **Initial condition** - full state at $t_{0}$: $u(t_{0},\mathbf{r})=f_{1}(\mathbf{r})$ (the initial temperature profile).
- **Boundary conditions** - typically on the boundary $\partial\Omega$ of the spatial domain $\Omega$, valid for all $t>t_{0}$.

## Boundary Conditions

Three flavours, classified by *what* is prescribed at the boundary.

### Dirichlet (Value Specified)

$$
u(t,\mathbf{r})\big|_{\mathbf{r}\in\partial\Omega}=f_{2}(\mathbf{r}).
$$

The unknown $u$ itself is fixed at the boundary. For heat diffusion: temperature held at the boundary.

### Neumann (Derivative Specified)

$$
\frac{\partial u(t,\mathbf{r})}{\partial \mathbf{n}}\bigg|_{\mathbf{r}\in\partial\Omega}=f_{3}(\mathbf{r}),
$$

where $\mathbf{n}$ is the outward normal to $\partial\Omega$. The *derivative* is fixed. For heat diffusion: an **insulated** body has $f_{3}=0$ (no heat flux through the surface).

### Mixed (Different Conditions on Different Parts)

A body might be insulated on one side ($\partial u/\partial \mathbf{n}=0$) and held at fixed temperature on another ($u=u_{0}$). All three boundary conditions can coexist on different parts of $\partial\Omega$.

> [!example] Heat sink on a circuit board
> A typical engineering use: temperature distribution on a PCB with a heat sink, prescribed temperatures on hot components, insulated underside, and fixed ambient on cool edges. Solving numerically gives the steady-state heat map.

## Steady State: Laplace and Poisson

If the diffusion equation reaches a **steady state**, time derivatives vanish ($\partial u/\partial t=0$). The diffusion equation becomes:

$$
\boxed{\nabla^{2}u(\mathbf{r})=0\qquad\text{(Laplace equation).}}
$$

A more general version with a source term $g(\mathbf{r})$ is the **Poisson equation**:

$$
\boxed{\nabla^{2}u(\mathbf{r})=g(\mathbf{r}).}
$$

Setting $g=0$ recovers Laplace, so a Poisson solver is automatically a Laplace solver. These steady-state problems have **only boundary conditions** - no initial conditions.

## 1D Poisson via Finite Differences

In one spatial dimension the Poisson equation is

$$
\frac{d^{2}u}{dx^{2}}=g(x).
$$

### Building the Second-Derivative Stencil

Replace each derivative by a finite difference. The forward difference for the first derivative is

$$
\frac{du}{dx}\approx \frac{u(x+\Delta x)-u(x)}{\Delta x}.
$$

Iterating once and combining gives, after a step of algebra,

$$
\frac{d^{2}u}{dx^{2}}\approx \frac{u(x+2\Delta x)-2u(x+\Delta x)+u(x)}{\Delta x^{2}}.
$$

This is asymmetric (uses points to the right). Equivalently, $df/dx=\lim_{h\to 0}(f(x)-f(x-h))/h$ - using the backward variant in one of the steps gives the **symmetric three-point stencil**:

$$
\boxed{\frac{d^{2}u}{dx^{2}}\approx \frac{u_{n+1}-2u_{n}+u_{n-1}}{\Delta x^{2}},\qquad u_{n}=u(x_{n}),\;x_{n}=n\Delta x.}
$$

We use the symmetric form from now on. For the Poisson equation it gives

$$
u_{n+1}-2u_{n}+u_{n-1}=g_{n}\Delta x^{2}.
$$

### Setting Up the Linear System

Take Dirichlet boundary conditions $u_{0}=u_{L}$ and $u_{N-1}=u_{R}$. The boundary equations and the interior equations together form $N$ equations in $N$ unknowns:

$$
\begin{cases}u_{0}=u_{L},\\u_{n+1}-2u_{n}+u_{n-1}=g_{n}\Delta x^{2}\quad\text{for }n=1,\dots,N-2,\\u_{N-1}=u_{R}.\end{cases}
$$

This packs into a sparse matrix equation $\mathbf{A}\mathbf{u}=\mathbf{g}$ where $\mathbf{A}$ is **tridiagonal** (after rescaling the boundary rows for symmetry):

$$
\begin{pmatrix}-2 & 0 & & & \\ 1 & -2 & 1 & & \\ & 1 & -2 & 1 & \\ & & \ddots & \ddots & \ddots \\ & & & 1 & -2\end{pmatrix}\!\begin{pmatrix}u_{0}\\u_{1}\\\vdots\\u_{N-1}\end{pmatrix}=\begin{pmatrix}-2u_{L}\\g_{1}\Delta x^{2}\\\vdots\\-2u_{R}\end{pmatrix}.
$$

> [!note]
> The system $\mathbf{A}\mathbf{u}=\mathbf{g}$ is solved by **Gaussian elimination** or matrix inversion (`numpy.linalg.solve` in Python). For tridiagonal $\mathbf{A}$, the **Thomas algorithm** runs in $O(N)$ - much faster than general-purpose solvers.

## Explicit Scheme for the 1D Diffusion Equation (FTCS)

Now bring back the time derivative. With $\alpha=1$ for simplicity, the 1D diffusion equation is

$$
\frac{\partial u(t,x)}{\partial t}=\frac{\partial^{2}u(t,x)}{\partial x^{2}},
$$

with Dirichlet boundary conditions $u(t,x_{L})=u_{L}$, $u(t,x_{R})=u_{R}$ and initial condition $u(t_{0},x)=f_{0}(x)$.

### Discretising on a Space-Time Grid

Choose $N_{x}$ spatial grid points $x_{n}=x_{L}+n\Delta x$ with $\Delta x=(x_{R}-x_{L})/(N_{x}-1)$, and $N_{t}$ temporal grid points $t_{i}=t_{0}+i\,\Delta t$ with $\Delta t=(t_{\max}-t_{0})/(N_{t}-1)$. Set $u_{i,n}=u(t_{i},x_{n})$.

Apply the symmetric stencil to the *spatial* derivative on the right-hand side:

$$
\frac{\partial^{2}u(t,x)}{\partial x^{2}}\approx \frac{u_{n+1}(t)-2u_{n}(t)+u_{n-1}(t)}{\Delta x^{2}}.
$$

This converts the PDE into a **system of coupled first-order ODEs** - one ODE per interior grid point:

$$
\frac{du_{n}(t)}{dt}\approx \frac{u_{n+1}(t)-2u_{n}(t)+u_{n-1}(t)}{\Delta x^{2}}.
$$

### Forward (Time) - Central (Space): the FTCS Scheme

Use the [[Explicit Euler method]] in time. Denoting $r=\Delta t/\Delta x^{2}$:

$$
\boxed{u_{i+1,n}\;\approx\;(1-2r)\,u_{i,n}+r\bigl(u_{i,n+1}+u_{i,n-1}\bigr).}
$$

This is the **FTCS** scheme - *Forward Time, Central Space*. To advance $u$ at $x_{n}$ by one time step we need the current values at three adjacent spatial points $x_{n-1},x_{n},x_{n+1}$. The boundary values $u_{i,0}=u_{L}$ and $u_{i,N-1}=u_{R}$ are pinned at every $i$ (Dirichlet).

> [!warning] Stability - preview for next lecture
> FTCS is conditionally stable: it requires $r=\Delta t/\Delta x^{2}\leq 1/2$. Halving $\Delta x$ forces a *quarter* of $\Delta t$ - very expensive. The implicit scheme (next lecture) is unconditionally stable and removes this constraint.

### Algorithm

1. Start at $t_{0}$. Set $u_{0,n}=f_{0}(x_{n})$ for all $n$ (initial condition), and pin $u_{0,0}=u_{L}$, $u_{0,N-1}=u_{R}$ (boundary conditions).
2. For each $i=0,1,2,\ldots,N_{t}-2$:
  - For each interior $n=1,\ldots,N_{x}-2$, update $u_{i+1,n}$ using the FTCS formula above.
  - Pin $u_{i+1,0}=u_{L}$ and $u_{i+1,N_{x}-1}=u_{R}$.
1. Stop at $t=t_{\max}$.

The result is a 2D array $u_{i,n}$ - temperature as a function of position and time. As $t$ increases the profile relaxes towards the steady-state Laplace solution (a straight line between $u_{L}$ and $u_{R}$ in this 1D Dirichlet case).

### Python Implementation

```python runnable
import numpy as np
from typing import Callable

def solve_1d_diffusion_ftcs(
    initial_profile: Callable[[np.ndarray], np.ndarray],
    left_boundary: float,
    right_boundary: float,
    domain_left: float,
    domain_right: float,
    final_time: float,
    number_of_space_points: int,
    number_of_time_points: int,
) -> np.ndarray:
    """
    Solve the 1D diffusion equation u_t = u_xx on [domain_left, domain_right]
    with Dirichlet boundary conditions, using the FTCS explicit scheme.

    Returns u[i, n] indexed by time-step i and space-step n.
    """
    space_step = (domain_right - domain_left) / (number_of_space_points - 1)
    time_step = final_time / (number_of_time_points - 1)
    diffusion_ratio = time_step / space_step**2

    if diffusion_ratio > 0.5:
        print(f"Warning: r = {diffusion_ratio:.3f} > 0.5 - FTCS is unstable.")

    space_grid = np.linspace(domain_left, domain_right, number_of_space_points)
    solution = np.zeros((number_of_time_points, number_of_space_points))

    solution[0, :] = initial_profile(space_grid)
    solution[:, 0] = left_boundary
    solution[:, -1] = right_boundary

    for time_index in range(number_of_time_points - 1):
        current = solution[time_index, :]
        solution[time_index + 1, 1:-1] = (
            (1 - 2 * diffusion_ratio) * current[1:-1]
            + diffusion_ratio * (current[2:] + current[:-2])
        )

    return solution
```

> [!note] Differential Analyzer (historical aside)
> Before computers, electromechanical analogue machines called *differential analyzers* solved DEs by mechanical integration with rotating discs. Bush's MIT analyzer (1931) was used during WWII for ballistics tables. The numerical schemes we develop here are the digital descendants.

---

## Pre-Lecture Notes from [[mth3007b lecture notes 6.pdf]]

- **IVP vs BVP** - IVPs supply all conditions at $t_{0}$ and integrate forward; BVPs split conditions across two endpoints and need different solution techniques (shooting, finite differences).
- **PDE = differential equation in $\geq 2$ independent variables.** Diffusion equation $\partial u/\partial t=\alpha\nabla^{2}u$, with $\nabla^{2}=\sum_{j}\partial^{2}/\partial x_{j}^{2}$, is the canonical example.
- **Three boundary-condition types**: Dirichlet (value of $u$), Neumann (normal derivative $\partial u/\partial \mathbf{n}$), and mixed (different on different parts of $\partial\Omega$). Insulation $\to$ Neumann with $f_{3}=0$.
- **Steady state** of the diffusion equation $\to$ Laplace ($\nabla^{2}u=0$); with source $\to$ Poisson ($\nabla^{2}u=g$). Both need only boundary conditions.
- **Symmetric second-derivative stencil**: $u''(x)\approx (u_{n+1}-2u_{n}+u_{n-1})/\Delta x^{2}$ - preferred over the asymmetric form because it's symmetric in the $\pm$ direction and is more accurate.
- **1D Poisson** with Dirichlet BCs becomes the tridiagonal linear system $\mathbf{A}\mathbf{u}=\mathbf{g}$, solved via Gaussian elimination or the Thomas algorithm.
- **FTCS scheme** for 1D diffusion: $u_{i+1,n}=(1-2r)u_{i,n}+r(u_{i,n+1}+u_{i,n-1})$, with $r=\Delta t/\Delta x^{2}$. Explicit, three-point spatial stencil per update.
- **Algorithm**: initialise from $f_{0}(x)$, pin boundaries every time step, sweep interior points with the FTCS formula, march in time.
- **Next lecture**: stability analysis of FTCS (the $r\leq 1/2$ criterion) and the **implicit (BTCS) scheme**, which is unconditionally stable but solves a tridiagonal system per time step.
