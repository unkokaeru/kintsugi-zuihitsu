# CFL condition

**Courant-Friedrichs-Lewy condition.** A *necessary* stability condition for explicit finite-difference schemes on hyperbolic PDEs (advection, wave equations): the **numerical domain of dependence** must contain the **physical domain of dependence**.

For 1D advection $\partial u/\partial t+v\,\partial u/\partial x=0$ with characteristic speed $|v|$, an explicit scheme with stencil reaching one cell per time step requires

$$
\boxed{\frac{|v|\,\Delta t}{\Delta x}\leq 1.}
$$

The dimensionless ratio $C=|v|\Delta t/\Delta x$ is the **Courant number**.

## Geometric Interpretation

Information in a hyperbolic PDE travels at finite speed $v$. In one time step, signal moves by $|v|\Delta t$ in the true PDE. The numerical scheme can only "see" up to $\Delta x$ per step. If $|v|\Delta t>\Delta x$, the scheme cannot represent the physical signal propagation - instability.

## Versus Diffusion Stability

The [[FTCS scheme]] applied to the parabolic [[Heat equation]] requires a different (and stricter) constraint $\alpha\Delta t/\Delta x^{2}\leq 1/2$ - see [[von Neumann stability]]. The diffusion bound is $\Delta t\sim\Delta x^{2}$, while the CFL bound is $\Delta t\sim\Delta x$.

## Practical Consequence

For PDE simulations with mixed advection and diffusion (e.g. convection-diffusion problems), the most restrictive of CFL and the diffusion bound dictates the time step.
