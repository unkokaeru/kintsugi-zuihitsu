# Boundary conditions

Three flavours of boundary conditions for PDEs on a domain $\Omega$ with boundary $\partial\Omega$:

## Dirichlet

The unknown $u$ is **prescribed** at the boundary:

$$
u(t,\mathbf{r})\big|_{\mathbf{r}\in\partial\Omega}=f_{2}(\mathbf{r}).
$$

For the [[Heat equation]], this corresponds to a temperature-clamped wall (e.g. an isothermal heat reservoir).

In a finite-difference scheme: pin the boundary grid values to the prescribed value at every time step.

## Neumann

The **derivative** of $u$ in the outward-normal direction is prescribed:

$$
\frac{\partial u(t,\mathbf{r})}{\partial \mathbf{n}}\bigg|_{\mathbf{r}\in\partial\Omega}=f_{3}(\mathbf{r}).
$$

For heat: prescribed heat flux. The special case $f_{3}=0$ is an **insulated** boundary - no flux through the wall.

In a finite-difference scheme: introduce an **imaginary point** outside the domain and use a central-difference approximation of the derivative to express that point in terms of the interior. Substituting back into the boundary-row equation eliminates the imaginary point. For $\partial u/\partial x|_{x_{L}}=d$ on a uniform grid:

$$
u_{-1}=u_{1}-2\,\Delta x\,d,
$$

so the boundary-row equation $u_{1}-2u_{0}+u_{-1}=0$ becomes $-2u_{0}+2u_{1}=2\Delta x\,d$.

## Mixed (Robin)

A linear combination of $u$ and its normal derivative is prescribed:

$$
\alpha_{1}u+\alpha_{2}\frac{\partial u}{\partial \mathbf{n}}=f(\mathbf{r}).
$$

Physical interpretation: convective heat transfer (heat flux proportional to temperature difference). Or different parts of the boundary can have different conditions - e.g. one face Dirichlet, another Neumann.

## Counting

A second-order PDE in space needs two boundary conditions per spatial dimension. The [[Heat equation]] with one space dimension on $[x_{L},x_{R}]$ needs one BC at each end. (Plus an initial condition because the equation is first-order in time.) Steady-state Laplace/Poisson equations need *only* boundary conditions - no initial condition.
