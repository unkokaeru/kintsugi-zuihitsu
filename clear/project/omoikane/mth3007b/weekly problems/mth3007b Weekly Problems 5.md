# MTH3007B Weekly Problems 5

> **Vibes**: Pretty chill, a natural extension of last week's work.
>
> **Used Techniques**:
>   - …

---

## 5.1. Forward Euler for Second-Order ODE IVP

> [!question]
> Consider the second-order ordinary differential equation $\frac{d^{2}y(t)}{dt^{2}} + 6 y(t) = 0$ with initial conditions $y(0) = 2$ and $y'(0) = -3$.
> 1. Rewrite this problem as a system of two first-order ordinary differential equations in a state vector $\mathbf{y}(t)$.
> 2. Implement the forward Euler method with step size $h = 0.1$ to approximate the solution from $t = 0$ to $t = 5$.
> 3. Using your implementation, compute the numerical approximation of $y(5)$.
> 4. The exact solution is $y(t) = -\frac{\sqrt{6}}{2}\sin(\sqrt{6}\,t) + 2\cos(\sqrt{6}\,t)$. Plot on the same axes the forward Euler approximation and the exact solution over $0 \le t \le 5$.
> 5. Briefly comment on the accuracy and stability of the forward Euler method for this problem and step size, referring to your plot and the error at $t = 5$.
> 
> *Hint: Choose $y_{1}(t) = y(t)$ and $y_{2}(t) = y'(t)$ to form the system.*

First of all, setting up dependencies and logging…

```python runnable
import micropip
await micropip.install(['numpy', 'matplotlib'])

import logging
from typing import Callable

import matplotlib.pyplot as plt
import numpy as np
import numpy.typing as npt

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
```

To solve the second-order ordinary differential equation computationally, we first reduce it to a system of two first-order equations. By defining the state variables as $y_1(t) = y(t)$ and $y_2(t) = y'(t)$, we obtain the derivatives $\dot{y}_1 = y_2$ and $\dot{y}_2 = -6y_1$. We can implement this autonomous system as a function, noting that the time variable is passed but remains unused.

```python runnable
def system_derivatives(
    _time: float,
    state: npt.NDArray[np.float64],
) -> npt.NDArray[np.float64]:
    """Compute derivatives for the system form of y'' + 6y = 0.

    With y1 = y and y2 = y', the system is:
        dy1/dt = y2
        dy2/dt = -6 * y1
        
    Args:
        _time: Current time value (unused; equation is autonomous).
        state: State vector containing [y1, y2].
        
    Returns:
        Derivative vector [dy1/dt, dy2/dt].
    """
    y1, y2 = state
    return np.array([y2, -6.0 * y1])
```

For later comparison and error analysis, it is also useful to define a function for the exact analytical solution provided in the question.

```python runnable
def exact_solution(time_values: npt.NDArray[np.float64]) -> npt.NDArray[np.float64]:
    """Compute the exact solution y(t) = -(sqrt(6)/2)*sin(sqrt(6)*t) + 2*cos(sqrt(6)*t).
    
    Args:
        time_values: Array of time values at which to evaluate the solution.
        
    Returns:
        Array of exact solution values corresponding to each time value.
    """
    sqrt6 = np.sqrt(6.0)
    return -(sqrt6 / 2) * np.sin(sqrt6 * time_values) + 2 * np.cos(sqrt6 * time_values)
```

Next, we can implement the forward Euler method. Because we are dealing with a system of equations, our function applies the explicit update rule $\mathbf{y}_{n+1} = \mathbf{y}_n + h \cdot g(t_n, \mathbf{y}_n)$ simultaneously to all components of the state vector.

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

    The explicit Euler method for systems uses the vector approximation:
    y_{n+1} = y_n + h * g(t_n, y_n)

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
    solution_values = initial_values

    for step_index in range(number_of_steps):
        current_time = time_values[step_index]
        current_values = solution_values[step_index]
        derivatives = derivative_function(current_time, current_values)
        solution_values[step_index + 1] = current_values + time_step * derivatives

    return time_values, solution_values
```

With our structural components in place, we can define the initial conditions and parameters to run the forward Euler approximation over the requested interval. We then calculate the errors and render the plot directly to the screen, rather than saving it to the filesystem.

```python runnable
initial_values = np.array([2.0, -3.0])
time_start = 0.0
time_end = 5.0
time_step = 0.1

time_values, euler_solution = explicit_euler_system(
    system_derivatives, initial_values, time_start, time_end, time_step
)
euler_y = euler_solution[:, 0]
exact_y = exact_solution(time_values)

euler_y_at_5 = euler_y[-1]
exact_y_at_5 = exact_y[-1]
euler_error = abs(euler_y_at_5 - exact_y_at_5)

print(f"Q5.1.3: Forward Euler y(5) = {euler_y_at_5:f}")
print(f"        Exact y(5)         = {exact_y_at_5:f}")
print(f"        Error at t=5       = {euler_error:f}")

fig, ax = plt.subplots(figsize=(10, 6))
ax.plot(time_values, exact_y, "k-", linewidth=2, label="Exact")
ax.plot(time_values, euler_y, "b--", linewidth=1.5, label="Forward Euler")
ax.set(xlabel="Time t", ylabel="y(t)")
ax.set_title(f"Forward Euler vs Exact Solution (Δt = {time_step})")
ax.legend()
ax.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()
```

…

## 5.2. RK4 for the Same Second-Order ODE IVP

> [!question]
> Consider again the initial value problem $\frac{d^{2}y(t)}{dt^{2}} + 6 y(t) = 0$, $y(0) = 2$, $y'(0) = -3$, written as a first-order system as in Question 5.1.
> 1. Implement the classical fourth-order Runge–Kutta (RK4) method with step size $h = 0.1$ for this first-order system on the interval $0 \le t \le 5$.
> 2. Using your implementation, compute the numerical approximation of $y(5)$.
> 3. On a single plot, display the RK4 approximation, the forward Euler approximation from Question 5.1, and the exact solution $y(t) = -\frac{\sqrt{6}}{2}\sin(\sqrt{6}\,t) + 2\cos(\sqrt{6}\,t)$ over $0 \le t \le 5$.
> 4. Compare the error at $t = 5$ for the forward Euler and RK4 methods, and discuss how the order of the methods is reflected in your numerical results and plots.
> 
> *Hint: Reuse your system formulation and only change the time-stepping method.*

Building effortlessly upon the state vector system we formulated in the previous question, we now implement the classical fourth-order Runge-Kutta (RK4) method. This approach provides considerably greater accuracy by evaluating the derivative at four intermediate points per time step and averaging them.

```python runnable
def rk4_system(
    derivative_function: Callable[
        [float, npt.NDArray[np.float64]], npt.NDArray[np.float64]
    ],
    initial_values: npt.NDArray[np.float64],
    time_start: float,
    time_end: float,
    time_step: float,
) -> tuple[npt.NDArray[np.float64], npt.NDArray[np.float64]]:
    """Solve a system of ODEs using the classical fourth-order Runge-Kutta method.

    The RK4 method for systems uses:
    k1 = f(t_n, y_n)
    k2 = f(t_n + h/2, y_n + h/2 * k1)
    k3 = f(t_n + h/2, y_n + h/2 * k2)
    k4 = f(t_n + h, y_n + h * k3)
    y_{n+1} = y_n + (h/6) * (k1 + 2*k2 + 2*k3 + k4)

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
    solution_values = initial_values

    for step_index in range(number_of_steps):
        current_time = time_values[step_index]
        current_values = solution_values[step_index]

        k1 = derivative_function(current_time, current_values)
        k2 = derivative_function(
            current_time + time_step / 2, current_values + time_step / 2 * k1
        )
        k3 = derivative_function(
            current_time + time_step / 2, current_values + time_step / 2 * k2
        )
        k4 = derivative_function(
            current_time + time_step, current_values + time_step * k3
        )

        solution_values[step_index + 1] = current_values + (time_step / 6) * (
            k1 + 2 * k2 + 2 * k3 + k4
        )

    return time_values, solution_values
```

We finish off by feeding our same system arguments into the new RK4 solver. From there, it's simply a matter of contrasting our RK4 outputs against both the exact mathematical truth and our original Euler results, displaying everything seamlessly on a single rendered plot.

```python runnable
_, rk4_solution = rk4_system(
    system_derivatives, initial_values, time_start, time_end, time_step
)
rk4_y = rk4_solution[:, 0]
rk4_y_at_5 = rk4_y[-1]
rk4_error = abs(rk4_y_at_5 - exact_y_at_5)

print(f"Q5.2.2: RK4 y(5)           = {rk4_y_at_5:f}")
print(f"        Error at t=5       = {rk4_error:f}")
print(f"Q5.2.4: Euler/RK4 ratio    = {euler_error / rk4_error:f}")

fig, ax = plt.subplots(figsize=(10, 6))
ax.plot(time_values, exact_y, "k-", linewidth=2, label="Exact")
ax.plot(time_values, euler_y, "b--", linewidth=1.5, label="Forward Euler")
ax.plot(time_values, rk4_y, "r-.", linewidth=1.5, label="RK4")
ax.set(xlabel="Time t", ylabel="y(t)")
ax.set_title(f"Forward Euler vs RK4 vs Exact Solution (Δt = {time_step})")
ax.legend()
ax.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()
```

…
