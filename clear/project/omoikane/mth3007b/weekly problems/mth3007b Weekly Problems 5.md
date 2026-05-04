# MTH3007B Weekly Problems 5

> **Vibes**: ...
>
> **Used Techniques**:
>  - ...

***

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

... *full solution below*

***

## 5.2. RK4 for the Same Second-Order ODE IVP

> [!question]
> Consider again the initial value problem $\frac{d^{2}y(t)}{dt^{2}} + 6 y(t) = 0$, $y(0) = 2$, $y'(0) = -3$, written as a first-order system as in Question 5.1.
> 1. Implement the classical fourth-order Runge-Kutta (RK4) method with step size $h = 0.1$ for this first-order system on the interval $0 \le t \le 5$.
> 2. Using your implementation, compute the numerical approximation of $y(5)$.
> 3. On a single plot, display the RK4 approximation, the forward Euler approximation from Question 5.1, and the exact solution $y(t) = -\frac{\sqrt{6}}{2}\sin(\sqrt{6}\,t) + 2\cos(\sqrt{6}\,t)$ over $0 \le t \le 5$.
> 4. Compare the error at $t = 5$ for the forward Euler and RK4 methods, and discuss how the order of the methods is reflected in your numerical results and plots.
> 
> *Hint: Reuse your system formulation and only change the time-stepping method.*

... *full solution below*

```python runnable
"""Solutions for Session 5 - Higher Order ODEs."""

import micropip
await micropip.install('matplotlib')
await micropip.install('numpy')

import logging
from typing import Callable
import numpy as np
import numpy.typing as npt
import matplotlib.pyplot as plt

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def explicit_euler_system(
    derivative_function: Callable[
        [float, npt.NDArray[np.float64]], npt.NDArray[np.float64]
    ],
    initial_values: npt.NDArray[np.float64],
    time_start: float,
    time_end: float,
    time_step: float,
) -> tuple[npt.NDArray[np.float64], npt.NDArray[np.float64]]:
    """Solve a system of ODEs using the explicit Euler method."""
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


def rk4_system(
    derivative_function: Callable[
        [float, npt.NDArray[np.float64]], npt.NDArray[np.float64]
    ],
    initial_values: npt.NDArray[np.float64],
    time_start: float,
    time_end: float,
    time_step: float,
) -> tuple[npt.NDArray[np.float64], npt.NDArray[np.float64]]:
    """Solve a system of ODEs using the classical fourth-order Runge-Kutta method."""
    number_of_steps = int((time_end - time_start) / time_step)
    time_values = np.linspace(time_start, time_end, number_of_steps + 1)
    number_of_equations = len(initial_values)
    solution_values = np.zeros((number_of_steps + 1, number_of_equations))
    solution_values[0] = initial_values

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


def system_derivatives(
    _time: float,
    state: npt.NDArray[np.float64],
) -> npt.NDArray[np.float64]:
    """Compute derivatives for the system form of y'' + 6y = 0."""
    y1, y2 = state
    return np.array([y2, -6.0 * y1])


def exact_solution(time_values: npt.NDArray[np.float64]) -> npt.NDArray[np.float64]:
    """Compute y(t) = -(sqrt(6)/2)*sin(sqrt(6)*t) + 2*cos(sqrt(6)*t)."""
    sqrt6 = np.sqrt(6.0)
    return -(sqrt6 / 2) * np.sin(sqrt6 * time_values) + 2 * np.cos(sqrt6 * time_values)


def plot_comparison(time_values, exact_y, euler_y, rk4_y, time_step):
    """Create comparison plot of all methods."""
    fig, ax = plt.subplots(figsize=(12, 8))
    ax.plot(time_values, exact_y, "k-", linewidth=3, label="Exact")
    ax.plot(time_values, euler_y, "b--", linewidth=2, label="Forward Euler")
    ax.plot(time_values, rk4_y, "r-.", linewidth=2, label="RK4")
    ax.set_xlabel("Time t", fontsize=14)
    ax.set_ylabel("y(t)", fontsize=14)
    ax.set_title(f"Forward Euler vs RK4 vs Exact Solution (Δt = {time_step})", fontsize=16)
    ax.legend(fontsize=12)
    ax.grid(True, alpha=0.3)
    plt.tight_layout()
    plt.show()


def main():
    """Entry point for Session 5 solutions."""
    initial_values = np.array([2.0, -3.0])
    time_start = 0.0
    time_end = 5.0
    time_step = 0.1

    print("=== Session 5 - Higher Order ODEs Solutions ===\n")

    # Q5.1: Forward Euler
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
    print(f"        Error at t=5       = {euler_error:e}\n")

    # Euler vs Exact plot
    fig1, ax1 = plt.subplots(figsize=(10, 6))
    ax1.plot(time_values, exact_y, "k-", linewidth=2, label="Exact")
    ax1.plot(time_values, euler_y, "b--", linewidth=1.5, label="Forward Euler")
    ax1.set_xlabel("Time t")
    ax1.set_ylabel("y(t)")
    ax1.set_title(f"Forward Euler vs Exact Solution (Δt = {time_step})")
    ax1.legend()
    ax1.grid(True, alpha=0.3)
    plt.tight_layout()
    plt.show()

    # Q5.2: RK4
    _, rk4_solution = rk4_system(
        system_derivatives, initial_values, time_start, time_end, time_step
    )
    rk4_y = rk4_solution[:, 0]
    rk4_y_at_5 = rk4_y[-1]
    rk4_error = abs(rk4_y_at_5 - exact_y_at_5)

    print(f"Q5.2.2: RK4 y(5)          = {rk4_y_at_5:f}")
    print(f"        Error at t=5       = {rk4_error:e}")
    print(f"Q5.2.4: Euler/RK4 ratio    = {euler_error / rk4_error:e}\n")

    # All methods comparison
    plot_comparison(time_values, exact_y, euler_y, rk4_y, time_step)


main()
```
