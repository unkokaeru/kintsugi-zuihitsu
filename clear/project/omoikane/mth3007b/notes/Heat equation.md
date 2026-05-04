# Heat equation

The **heat (or diffusion) equation** is the canonical parabolic PDE:

$$
\boxed{\frac{\partial u(t,\mathbf{r})}{\partial t}=\alpha\,\nabla^{2}u(t,\mathbf{r}),}
$$

where $\alpha>0$ is the diffusion coefficient. In one spatial dimension this collapses to

$$
\frac{\partial u}{\partial t}=\alpha\,\frac{\partial^{2}u}{\partial x^{2}}.
$$

Models heat transport in solids (with $u$ the temperature and $\alpha$ thermal diffusivity), particle diffusion in stationary fluids (with $u$ the concentration), and many other "spreading" phenomena.

## Conditions Required

Both:
- **Initial condition** $u(t_{0},\mathbf{r})=f_{1}(\mathbf{r})$ - the full state at the start time.
- **Boundary conditions** on $\partial\Omega$ - typically [[Boundary conditions]] - for all $t>t_{0}$.

## Steady State

If $\partial u/\partial t\to 0$, the equation reduces to the **Laplace equation** $\nabla^{2}u=0$. Adding a source term gives the **Poisson equation** $\nabla^{2}u=g(\mathbf{r})$. Steady-state problems need only boundary conditions, no initial condition.

## Numerical Schemes

In 1D (the workhorse case for this module):
- [[FTCS scheme]] - explicit, conditionally stable ($\Delta t\leq \Delta x^{2}/(2\alpha)$).
- [[BTCS scheme]] - implicit, unconditionally stable, requires solving a tridiagonal linear system per time step.
- Crank-Nicolson - average of FTCS and BTCS, second-order accurate in both space and time, also unconditionally stable.

## Analytical Solution

For the 1D infinite-domain problem with delta initial condition $u(0,x)=\delta(x)$:

$$
u(t,x)=\frac{1}{\sqrt{4\pi\alpha t}}\exp\!\left(-\frac{x^{2}}{4\alpha t}\right).
$$

This is identical to the probability density of a [[Wiener process]] with diffusion constant $\alpha$ - the diffusion equation describes the *average* behaviour of an ensemble of Brownian walkers.
