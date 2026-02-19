# MTH3007b Weekly Problems 1

> **Original Documents**: [[mth3007b weekly problem sheet 1.pdf|Problem Sheet]] / [GitHub Solutions](https://github.com/unkokaeru/mth3007/blob/main/semester%20b/sessions/session%201%20-%20introduction/solutions.py)
>
> **Vibes**: Just quick definitions then the two methods outlined in the lecture - pretty simple!
>
> **Used Techniques**:
> 	- Error/relation definitions.
> 	- Implementing explicit/implicit Euler methods.
> 	- Error calculations.

## 1.1. Definitions

> [!question]
> What is meant by the following:
> 1. Local truncation error.
> 2. Global truncation error.
> 3. Order of an algorithm.
> 4. Finite difference method.

- **Local Truncation Error**: The difference between the numerical and analytical solution after a single timestep.
- **Global Truncation Error**: The difference between the numerical and analytical solution after all timesteps.
- **Order of an Algorithm**: How the global truncation error varies with the integration step; for order $p$, then halving the step size $h$ reduces error by a factor of $2^p$.
- **Finite Difference Method**: Approximating a derivative by setting a value for $\Delta x$, instead of integrating.

---

## 1.2. Definition Comparison

> [!question]
> What is the difference between an implicit and explicit relation?

- An **explicit relation** has an isolated dependent variable.
- An **implicit relation** does not have an isolated dependent variable.

---

## 1.3. Formula Implementation (Explicit Euler Method)

> [!question]
> Implement the explicit Euler method in Python to solve the ODE $\frac{dy(t)}{dt}=bt-ay(t)$.
>
> Use variables for the coefficients, setting them to $b=1$, $a=22$, $y(0)=1$, $t_{\text{max}}=1$, and integrate with:
> 1. $\Delta t=0.01$
> 2. $\Delta t=0.1$

First, we should do all required imports.

```python runnable
import micropip
await micropip.install("numpy")

from collections.abc import Callable
import numpy as np
import numpy.typing as npt
```

Then we can write our ODE as a Python function, just to make things a bit neater…

```python runnable
def general_derivative_function(
    time: float,
    solution_value: float,
    coefficient_a: float,
    coefficient_b: float,
) -> float:
    """Compute the derivative dy/dt = b*t - a*y."""
    return coefficient_b * time - coefficient_a * solution_value
```

Then actually implement the Explicit Euler method…

```python runnable
def explicit_euler_method(
    derivative_function: Callable[[float, float], float],
    initial_value: float,
    time_start: float,
    time_end: float,
    time_step: float,
) -> tuple[npt.NDArray[np.float64], npt.NDArray[np.float64]]:
    """Solve an ODE using the explicit Euler method.

    The explicit Euler method uses the approximation:
    y_{n+1} = y_n + h * f(t_n, y_n)

    Args:
        derivative_function: Function f(t, y) that computes dy/dt.
        initial_value: Initial condition y(t_0).
        time_start: Starting time t_0.
        time_end: Ending time t_max.
        time_step: Time step size h (Delta t).

    Returns:
        Tuple of (time_values, solution_values) arrays.
    """
    number_of_steps = int((time_end - time_start) / time_step)
    time_values = np.linspace(time_start, time_end, number_of_steps + 1)
    solution_values = np.concatenate(([initial_value], np.zeros(number_of_steps)))

    for step_index in range(number_of_steps):
        current_time = time_values[step_index]
        current_value = solution_values[step_index]
        derivative = derivative_function(current_time, current_value)
        solution_values[step_index + 1] = current_value + time_step * derivative

    return time_values, solution_values
```

Then we can specify each of the variables for our specific ODE...

```python runnable
coefficient_a = 22.0
coefficient_b = 1.0
initial_value = 1.0
time_start = 0.0
time_end = 1.0
time_step = 0.01

def derivative_function(time: float, solution_value: float) -> float:
    return general_derivative_function(time, solution_value, coefficient_a, coefficient_b)

time_values, solution_values = explicit_euler_method(
    derivative_function, initial_value, time_start, time_end, time_step
)

print(f"Numerical solution using 0.01 as the timestep: {solution_values[-1]}")
```

Which for the smaller timestep gives us approximately $0.043$. We can then repeat for the larger timestep...



---

## 1.4. Formula Implementation (Implicit Euler Method)

> [!question]
> Implement the implicit Euler method in Python to solve the ODE from the [[#1.3. Formula Implementation (Explicit Euler Method)|previous question]].

…

---

## 1.5. Error Calculation Against Analytical Solution

> [!question]
> For the [[#1.3. Formula Implementation (Explicit Euler Method)|same ODE]] from the previous two questions, compare the errors between the implicit and explicit Euler methods and plot each solution against time, along with the analytical solution:
>
> $$
> y(t)=e^{-at}\left( y_{0}+ \frac{b}{a^2} \right)+ \frac{bt}{a}- \frac{b}{a^2}
> $$

…
