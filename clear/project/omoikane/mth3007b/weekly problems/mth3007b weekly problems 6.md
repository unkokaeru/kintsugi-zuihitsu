# MTH3007B Weekly Problems 6

> **Vibes**: A single FTCS-explicit solve of the heat equation on a rod, plus a temperature read-out at one space-time point. Stability check first ($r=\alpha\Delta t/\Delta x^{2}=0.184<0.5$, well within the FTCS criterion), then march in time using the recurrence $u_{i+1,n}=(1-2r)u_{i,n}+r(u_{i,n+1}+u_{i,n-1})$.
>
> **Used Techniques**:
>  - [[FTCS scheme]] with $r=\alpha\Delta t/\Delta x^{2}$.
>  - Stability check: $r\leq 1/2$ (see [[Stability of a method]]).
>  - Pin Dirichlet boundary values at every time step.
>  - Steady-state sanity check: $u_{\infty}(x)$ is the linear interpolant between $u_{L}$ and $u_{R}$.

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
> 3. Determine the temperature of the rod at time $t = 12\ \text{s}$ and position $x = 4\ \text{cm}$, i.e. compute $u(12\ \text{s}, 4\ \text{cm})$, from your numerical solution.

**Stability.** $r=\alpha\Delta t/\Delta x^{2}=0.735\cdot 0.01/0.04=0.184<0.5$ ✓. The FTCS scheme is stable here.

**Setup.** $N_{x}=L/\Delta x+1=51$ grid points $x_{0}=0,\,x_{1}=0.2,\,\ldots,\,x_{50}=10$. Number of time steps $N_{t}=t_{\max}/\Delta t+1=1201$ for $t_{\max}=12$ s.

**Implementation.**

```python runnable
import numpy as np

length = 10.0
diffusion = 0.735
space_step = 0.2
time_step = 0.01
final_time = 12.0
left_temperature = 100.0
right_temperature = 25.0

number_of_space_points = int(round(length / space_step)) + 1  # 51
number_of_time_points = int(round(final_time / time_step)) + 1  # 1201
ratio = diffusion * time_step / space_step**2

assert ratio <= 0.5, f"FTCS unstable: r = {ratio:.3f} > 0.5"

solution = np.zeros((number_of_time_points, number_of_space_points))
solution[:, 0] = left_temperature
solution[:, -1] = right_temperature

for i in range(number_of_time_points - 1):
    solution[i + 1, 1:-1] = (
        (1.0 - 2.0 * ratio) * solution[i, 1:-1]
        + ratio * (solution[i, 2:] + solution[i, :-2])
    )

space_grid = np.linspace(0.0, length, number_of_space_points)
target_index = int(round(4.0 / space_step))  # x = 4 cm
print(f"u(12 s, 4 cm) = {solution[-1, target_index]:.2f} °C")
```

**Profile shapes.** At $t=0$: hard step from $100$ at $x=0$, drop to $0$ for interior, jump up to $25$ at $x=10$. At $t=6$ s: smooth concave decay from $100$ to a minimum, rising back to $25$. At $t=12$ s: closer to the steady-state line $u_{\infty}(x)=100-7.5x$ but not yet reached.

**Steady-state reference.** Linear: $u_{\infty}(x)=100+(25-100)x/10=100-7.5x$, so $u_{\infty}(4)=70^{\circ}\text{C}$.

**Result.** Running the simulation:

$$
\boxed{u(12\ \text{s},4\ \text{cm})\approx 38^{\circ}\text{C}.}
$$

The transient is dominated by the lowest Fourier mode $\sin(\pi x/L)$, which decays as $e^{-\alpha\pi^{2}t/L^{2}}=e^{-0.870}\approx 0.42$ at $t=12$ s. Hence at $x=4$ the temperature is approximately

$$
u(12,4)\approx u_{\infty}(4)+B_{1}\sin(2\pi/5)\,e^{-\alpha\pi^{2}t/L^{2}}\approx 70-79.6\cdot 0.951\cdot 0.42\approx 38^{\circ}\text{C},
$$

matching the simulation. The system is at roughly $58\%$ of the way from initial state to steady state at this point.
