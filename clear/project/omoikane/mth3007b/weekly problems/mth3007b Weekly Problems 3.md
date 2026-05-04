# MTH3007B Weekly Problems 3

> **Vibes**: Super chill, just implement a single new method.
>
> **Used Techniques**:
>  - Finding the order of a numerical method
>  - Solving an ODE with the implicit trapezoid method

---

## 1.1. Order of an Euler Method

> [!question]
> What is the order of the implicit Euler method? (i.e., the global truncation error)

First-order, by definition.

---

## 1.2. Order of a Non-Symmetrical Method

> [!question]
> What is the order of the implicit trapezoid method? (i.e., the global truncation error)

Second-order, by definition.

---

## 1.3. Solving an ODE with the Implicit Trapezoid Method

> [!question]
> Solve the ordinary differential equation $\frac{dz(t)}{dt}=\exp(-3t)+t^2- \frac{1}{2}z(t)$ using the implicit trapezoid method up to $t=t_{\text{max}}=1$, given that $z(0)=2.5$.
>
> Then, find $z(t_{\text{max}})$ for the $\Delta t=0.001$.

First, do our imports...

```python
import micropip
await micropip.install("numpy")

from collections.abc import Callable
import numpy as np
import numpy.typing as npt
```

Then we can implement a new implicit trapezoid method function...

```python runnable
def implicit_trapezoid_method(
    derivative_function: Callable[[float, float], float],
    initial_value: float,
    time_start: float,
    time_end: float,
    time_step: float,
    max_iterations: int = 100,
    tolerance: float = 1e-10,
) -> tuple[npt.NDArray[np.float64], npt.NDArray[np.float64]]:
    """Solve an ODE using the implicit trapezoid method.

    The implicit trapezoid method (trapezoidal rule) uses the approximation:
    y_{n+1} = y_n + (h/2) * [f(t_n, y_n) + f(t_{n+1}, y_{n+1})]

    This requires solving a nonlinear equation at each step using
    fixed-point iteration.

    Args:
        derivative_function: Function f(t, y) that computes dy/dt.
        initial_value: Initial condition y(t_0).
        time_start: Starting time t_0.
        time_end: Ending time t_max.
        time_step: Time step size h (Delta t).
        max_iterations: Maximum iterations for fixed-point solver.
        tolerance: Convergence tolerance for fixed-point solver.

    Returns:
        Tuple of (time_values, solution_values) arrays.
    """
    number_of_steps = int((time_end - time_start) / time_step)
    time_values = np.linspace(time_start, time_end, number_of_steps + 1)
    solution_values = np.zeros(number_of_steps + 1)
    solution_values[0] = initial_value

    for step_index in range(number_of_steps):
        current_time = time_values[step_index]
        next_time = time_values[step_index + 1]
        previous_value = solution_values[step_index]

        # Compute the derivative at the current step
        current_derivative = derivative_function(current_time, previous_value)

        # Fixed-point iteration to solve:
        # y_{n+1} = y_n + (h/2) * [f(t_n, y_n) + f(t_{n+1}, y_{n+1})]
        next_value_guess = previous_value + time_step * current_derivative
        for _ in range(max_iterations):
            next_derivative = derivative_function(next_time, next_value_guess)
            next_value_new = (
                previous_value + (time_step / 2) * (current_derivative + next_derivative)
            )
            correction = abs(next_value_new - next_value_guess)
            next_value_guess = next_value_new
            if correction < tolerance:
                break

        solution_values[step_index + 1] = next_value_guess

    return time_values, solution_values
```

Which can then be run with the correct parameters...

```python runnable
# Problem parameters
time_start = 0.0
time_end = 1.0
initial_condition = 2.5
time_step = 0.001

# Define the derivative function
def derivative(time: float, solution_value: float) -> float:
    return np.exp(-3 * time) + time**2 - 0.5 * solution_value

# Solve using implicit trapezoid method
time_values, solution_values = implicit_trapezoid_method(
    derivative, initial_condition, time_start, time_end, time_step
)

# Find z(t_max)
z_final = solution_values[-1]

print(f"Solution at t = {time_end}: z({time_end}) = {z_final:f}")
```

Given the final solution, `Solution at t = 1.0: z(1.0) = 2.034534`.
