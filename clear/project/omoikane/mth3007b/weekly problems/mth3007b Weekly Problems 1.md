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

Then we can specify each of the variables for our specific ODE…

```python runnable
coefficient_a = 22.0
coefficient_b = 1.0
initial_value = 1.0
time_start = 0.0
time_end = 1.0
small_time_step = 0.01
big_time_step = 0.1

def derivative_function(time: float, solution_value: float) -> float:
    return general_derivative_function(time, solution_value, coefficient_a, coefficient_b)
```

Which allows us to finally get the two solutions!

```python runnable
_, small_explicit_solution_values = explicit_euler_method(
    derivative_function, initial_value, time_start, time_end, small_time_step
)
_, big_explicit_solution_values = explicit_euler_method(
    derivative_function, initial_value, time_start, time_end, big_time_step
)

print(small_explicit_solution_values[-1])

print(big_explicit_solution_values[-1])
```

Resulting in two very different answers: approximately 0.043 and 6.2, respectively.

---

## 1.4. Formula Implementation (Implicit Euler Method)

> [!question]
> Implement the implicit Euler method in Python to solve the ODE from the [[#1.3. Formula Implementation (Explicit Euler Method)|previous question]].

Using the same cached code from the previous question, we can jump straight into the new method function…

```python runnable
def implicit_euler_method(
    derivative_function: Callable[[float, float], float],
    initial_value: float,
    time_start: float,
    time_end: float,
    time_step: float,
    max_iterations: int = 100,
    tolerance: float = 1e-10,
) -> tuple[npt.NDArray[np.float64], npt.NDArray[np.float64]]:
    """Solve an ODE using the implicit Euler method.

    The implicit Euler method uses the approximation:
    y_{n+1} = y_n + h * f(t_{n+1}, y_{n+1})

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
        current_time = time_values[step_index + 1]
        previous_value = solution_values[step_index]

        next_value_guess = previous_value
        for _ in range(max_iterations):
            residual = (
                next_value_guess
                - previous_value
                - time_step * derivative_function(current_time, next_value_guess)
            )
            perturbation = 1e-8 * max(abs(next_value_guess), 1.0)
            derivative_approx = (
                1.0
                - time_step
                * (
                    derivative_function(
                        current_time, next_value_guess + perturbation
                    )
                    - derivative_function(current_time, next_value_guess)
                )
                / perturbation
            )
            correction = residual / derivative_approx
            next_value_guess -= correction
            if abs(correction) < tolerance:
                break

        solution_values[step_index + 1] = next_value_guess

    return time_values, solution_values
```

Which is quite a bit more mathematical than the last, given the implicit relation. This time, we can jump straight to the two solutions…

```python runnable
_, small_implicit_solution_values = implicit_euler_method(
    derivative_function, initial_value, time_start, time_end, small_time_step
)
_, big_implicit_solution_values = implicit_euler_method(
    derivative_function, initial_value, time_start, time_end, big_time_step
)

print(small_implicit_solution_values[-1])

print(big_implicit_solution_values[-1])
```

Resulting in two very similar answers, rounding to 0.43.

---

## 1.5. Error Calculation Against Analytical Solution

> [!question]
> For the [[#1.3. Formula Implementation (Explicit Euler Method)|same ODE]] from the previous two questions, compare the errors between the implicit and explicit Euler methods and plot each solution against time, along with the analytical solution:
>
> $$
> y(t)=e^{-at}\left( y_{0}+ \frac{b}{a^2} \right)+ \frac{bt}{a}- \frac{b}{a^2}
> $$

We can now develop a function to find the analytical solution, directly from the question…

```python runnable
def analytical_solution(
    time: float | npt.NDArray[np.float64],
    initial_value: float,
    coefficient_a: float,
    coefficient_b: float,
) -> npt.NDArray[np.float64]:
    """Compute the analytical solution to dy/dt = b*t - a*y.

    The analytical solution is:
    y(t) = exp(-a*t) * (y_0 + b/a^2) + b*t/a - b/a^2

    Args:
        time: Time value(s) at which to evaluate the solution.
        initial_value: Initial condition y(0).
        coefficient_a: Coefficient a in the ODE.
        coefficient_b: Coefficient b in the ODE.

    Returns:
        Analytical solution value(s) at the given time(s).
    """
    exponential_term = np.exp(-coefficient_a * time)
    constant_term = initial_value + coefficient_b / (coefficient_a**2)
    linear_term = coefficient_b * time / coefficient_a
    offset_term = coefficient_b / (coefficient_a**2)

    return exponential_term * constant_term + linear_term - offset_term
```

Hence, we may then create a function to compute the error across all solutions:

```python runnable
def compute_error(
    numerical_solution: npt.NDArray[np.float64],
    analytical_solution_values: npt.NDArray[np.float64],
) -> tuple[npt.NDArray[np.float64], float, float]:
    """Compute the error between numerical and analytical solutions.

    Args:
        numerical_solution: Numerical solution values.
        analytical_solution_values: Analytical solution values.

    Returns:
        Tuple of (absolute_error, max_absolute_error, root_mean_square_error).
    """
    absolute_error = np.abs(numerical_solution - analytical_solution_values)
    max_absolute_error = np.max(absolute_error)
    root_mean_square_error = np.sqrt(np.mean(absolute_error**2))

    return absolute_error, max_absolute_error, root_mean_square_error
```

Now we need to compute the time values for our numerical solutions and the analytical solution:

```python runnable
small_time_values = np.linspace(time_start, time_end, len(small_explicit_solution_values))
big_time_values = np.linspace(time_start, time_end, len(big_explicit_solution_values))

small_analytical_values = analytical_solution(
    small_time_values, initial_value, coefficient_a, coefficient_b
)
big_analytical_values = analytical_solution(
    big_time_values, initial_value, coefficient_a, coefficient_b
)
```

We can now compute the errors for all methods:

```python runnable
(
    small_error_explicit,
    small_max_error_explicit,
    small_rmse_explicit,
) = compute_error(small_explicit_solution_values, small_analytical_values)

(
    small_error_implicit,
    small_max_error_implicit,
    small_rmse_implicit,
) = compute_error(small_implicit_solution_values, small_analytical_values)

(
    big_error_explicit,
    big_max_error_explicit,
    big_rmse_explicit,
) = compute_error(big_explicit_solution_values, big_analytical_values)

(
    big_error_implicit,
    big_max_error_implicit,
    big_rmse_implicit,
) = compute_error(big_implicit_solution_values, big_analytical_values)
```

Let's now display the error stats...

```python runnable
print("=" * 70)
print("ERROR ANALYSIS")
print("=" * 70)

print(f"\nWith Δt = {small_time_step}:")
print("  Explicit Euler:")
print(f"    Max Absolute Error: {small_max_error_explicit:e}")
print(f"    RMSE: {small_rmse_explicit:e}")
print("  Implicit Euler:")
print(f"    Max Absolute Error: {small_max_error_implicit:e}")
print(f"    RMSE: {small_rmse_implicit:e}")

print(f"\nWith Δt = {big_time_step}:")
print("  Explicit Euler:")
print(f"    Max Absolute Error: {big_max_error_explicit:e}")
print(f"    RMSE: {big_rmse_explicit:e}")
print("  Implicit Euler:")
print(f"    Max Absolute Error: {big_max_error_implicit:e}")
print(f"    RMSE: {big_rmse_implicit:e}")
```

Already, we can see a difference between the implicit and explicit methods, as expected.