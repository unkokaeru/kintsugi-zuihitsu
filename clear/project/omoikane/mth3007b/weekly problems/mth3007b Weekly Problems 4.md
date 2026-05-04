# MTH3007b Weekly Problems 4

> **Vibes**: Stiff systems and chaotic attractors - stability bounds keep things from blowing up, then the Lorenz system makes butterflies cause storms!
>
> **Used Techniques**:
> 	- Stability analysis of the explicit Euler method.
> 	- Explicit Euler method for systems of ODEs.
> 	- Lorenz system visualisation (phase portraits).

## 4.1. Solving an ODE

> [!question]
> What is the upper bound for the integration step-size to maintain stability using the explicit Euler method, for $\frac{dy}{dt}=-200000y+200000e^{-t}-e^{-t}$.
>
> Give a numerical answer and motivation for solution.

The explicit Euler method applied to $\frac{dy}{dt} = -ay + f(t)$ gives the recurrence:

$$
y_{n+1} = y_n + \Delta t \left(-a y_n + f(t_n)\right) = (1 - a\Delta t)\, y_n + \Delta t \, f(t_n)
$$

For stability we need the amplification factor to satisfy $|1 - a\Delta t| \leq 1$, which requires:

$$
a \Delta t \leq 2 \quad \Longrightarrow \quad \Delta t \leq \frac{2}{a}
$$

Here $a = 200000$, so we can quickly compute the bound:

```python runnable
stiff_coefficient = 200000.0
max_step_size = 2.0 / stiff_coefficient
print(f"Δt_max = 2/a = 2/{stiff_coefficient:f} = {max_step_size}")
```

Giving us $\Delta t_{\max} = \frac{2}{200000} = 0.00001$ - a tiny step size, highlighting how **stiff** this ODE is for explicit methods.

---

## 4.2. Solving a System of ODEs

> [!question]
> Implement a numerical solver for the Lorenz equations:
>
> $$
> \begin{cases}\frac{dx}{dt}=-\sigma x+\sigma y \\\frac{dy}{dt}=rx-y-xz \\\frac{dz}{dt}=-bz+xy\end{cases}
> $$
>
> Use the explicit Euler method with the parameters $\sigma=10,b=2.666667,r=28$, initial conditions $x(0)=y(0)=z(0)=5.1$, and integrate from $t=0$ to $t=20$ with integration time-step of $\Delta t=0.004$.
>
> Then, plot $x$ against $t$ and $x$ against $y$, before finding the numerical answer for $y(20)$ to 7 significant figures.

First, we should do all required imports.

```python runnable
import micropip
await micropip.install("numpy")

from collections.abc import Callable
import numpy as np
import numpy.typing as npt
```

The explicit Euler method generalises to vector-valued ODEs as:

$$
\mathbf{y}_{n+1} = \mathbf{y}_n + \Delta t \cdot \mathbf{g}(t_n, \mathbf{y}_n)
$$

So we can implement a system-level version of the method...

```python runnable
def explicit_euler_system(
    derivative_function: Callable[
        [float, npt.NDArray[np.float64]], npt.NDArray[np.float64]
    ],
    initial_values: npt.NDArray[np.float64],
    time_start: float,
    time_end: float,
    time_step: float,
) -> tuple[npt.NDArray[np.float64], npt.NDArray[np.float64]]:
    """Solve a system of ODEs using the explicit Euler method.

    Args:
        derivative_function: Function g(t, y) that computes dy/dt as a vector.
        initial_values: Initial condition vector y(t_0).
        time_start: Starting time t_0.
        time_end: Ending time t_max.
        time_step: Time step size h (Delta t).

    Returns:
        Tuple of (time_values, solution_values) where solution_values has
        shape (number_of_steps + 1, number_of_equations).
    """
    number_of_steps = int((time_end - time_start) / time_step)
    time_values = np.linspace(time_start, time_end, number_of_steps + 1)
    number_of_equations = len(initial_values)
    solution_values = np.zeros((number_of_steps + 1, number_of_equations))
    solution_values[0] = initial_values

    for step_index in range(number_of_steps):
        current_time = time_values[step_index]
        current_values = solution_values[step_index]
        derivatives = derivative_function(current_time, current_values)
        solution_values[step_index + 1] = current_values + time_step * derivatives

    return time_values, solution_values
```

Then we can write the Lorenz system derivatives as a Python function, just to make things a bit neater...

```python runnable
def lorenz_derivatives(
    _time: float,
    state: npt.NDArray[np.float64],
    sigma: float = 10.0,
    b: float = 2.666667,
    r: float = 28.0,
) -> npt.NDArray[np.float64]:
    """Compute the derivatives for the Lorenz system.

    Args:
        _time: Current time (unused, system is autonomous).
        state: Current state vector [x, y, z].
        sigma: Lorenz parameter sigma.
        b: Lorenz parameter b.
        r: Lorenz parameter r.

    Returns:
        Derivative vector [dx/dt, dy/dt, dz/dt].
    """
    x, y, z = state
    dxdt = -sigma * x + sigma * y
    dydt = r * x - y - x * z
    dzdt = -b * z + x * y
    return np.array([dxdt, dydt, dzdt])
```

Now we can specify each of the variables for our specific problem...

```python runnable
sigma = 10.0
b = 2.666667
r = 28.0
initial_conditions = np.array([5.1, 5.1, 5.1])
time_step = 0.004

def lorenz(
    t: float, state: npt.NDArray[np.float64]
) -> npt.NDArray[np.float64]:
    return lorenz_derivatives(t, state, sigma, b, r)
```

Which allows us to solve the system and find $y(20)$!

```python runnable
time_values, solution_values = explicit_euler_system(
    lorenz, initial_conditions, 0.0, 20.0, time_step
)

print(f"y(20) = {solution_values[-1, 1]:g}")
```

Now let's visualise the chaotic behaviour. First, importing `matplotlib`:

```python runnable
await micropip.install("matplotlib")
import matplotlib.pyplot as plt
```

Then plotting $x$ against $t$:

```python runnable
fig, ax = plt.subplots(figsize=(10, 6))
ax.plot(time_values, solution_values[:, 0], "b-", linewidth=0.5)
ax.set_xlabel("Time t")
ax.set_ylabel("x(t)")
ax.set_title(f"Lorenz System: x vs t (Explicit Euler, Δt = {time_step})")
ax.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()
```

And the phase portrait of $x$ against $y$:

```python runnable
fig, ax = plt.subplots(figsize=(10, 8))
ax.plot(
    solution_values[:, 0], solution_values[:, 1], "b-", linewidth=0.3, alpha=0.7
)
ax.set_xlabel("x")
ax.set_ylabel("y")
ax.set_title(f"Lorenz System: x vs y (Explicit Euler, Δt = {time_step})")
ax.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()
```

Both plots clearly show the **chaotic behaviour** of the Lorenz system - the trajectory oscillates unpredictably between two lobes of the famous butterfly attractor, sensitive to initial conditions as expected.
