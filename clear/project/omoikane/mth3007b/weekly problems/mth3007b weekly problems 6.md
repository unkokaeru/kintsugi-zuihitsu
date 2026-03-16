# MTH3007B Weekly Problems 6

> **Vibes**: …
>
> **Used Techniques**:
>   - …

***

## 6.1. Explicit Scheme for 1D Heat Equation

> [!question]
> Consider a rod of length $L = 10\ \text{cm}$ with heat diffusion coefficient $\alpha = 0.735\ \text{cm}^2\text{s}^{-1}$.
> Assume boundary conditions $u(t) = 100^\circ\text{C}$ and $u(t) = 25^\circ\text{C}$ for all $t \geq 0$.
> The initial condition at $t = 0$ is $u(0,x) = 0^\circ\text{C}$ for $0 < x < 10$, with the boundaries fixed at the given temperatures.
> Take spatial step $\Delta x = 0.2\ \text{cm}$ and time step $\Delta t = 0.01\ \text{s}$ and solve the one-dimensional heat equation
>
> $$
> \frac{\partial u}{\partial t} = \alpha\,\frac{\partial^2 u}{\partial x^2}
> $$
>
> using the explicit (forward Euler in time, central difference in space) finite-difference scheme.
>
> 1. Implement the explicit scheme with the given parameters, enforcing the boundary conditions at each time step and using the recurrence
> 
> $$
>    u_j^{n+1} = u_j^{n} + \alpha\,\frac{\Delta t}{\Delta x^2}\,\bigl(u_{j-1}^{n} - 2u_j^{n} + u_{j+1}^{n}\bigr),
>    $$
>
> for interior grid points $j$.
> 2. Plot $u(t,x)$ as a function of $x$ at $t = 0\ \text{s}$, $t = 6\ \text{s}$, and $t = 12\ \text{s}$ on a single graph, and include this plot together with your code in the extra material.
> 3. Determine the temperature of the rod at time $t = 12\ \text{s}$ and position $x = 4\ \text{cm}$, i.e. compute $u(12\ \text{s}\ \text{cm})$, from your numerical solution.
>
> …

…
