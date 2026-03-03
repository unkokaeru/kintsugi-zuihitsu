# MTH3007B Weekly Problems 5

> **Vibes**: …
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

We first set up our environment with standard numerical and plotting libraries.

```python runnable
import matplotlib.pyplot as plt
import numpy as np
import numpy.typing as npt
from typing import Callable
```

To solve the second-order ODE, we reduce it to a system of two first-order equations. Letting $y_1(t) = y(t)$ and $y_2(t) = y'(t)$, the equation $y''(t) + 6y(t) = 0$ gives the system $\dot{y}_1 = y_2$ and $\dot{y}_2 = -6y_1$. We represent this state vector mathematically as $\mathbf{y} = \begin{bmatrix} y_1 \\ y_2 \end{bmatrix}$.

```python runnable
def system_derivatives(
    _time: float,
    state: npt.NDArray[np.float64],
) -> npt.NDArray[np.float64]:
    """Compute derivatives for the system form of y'' + 6y = 0.
    
    Parameters
    ----------
    _time : float
        Current time value.
    state : npt.NDArray[np.float64]
        State vector containing [y1, y2].
        
    Returns
    -------
    npt.NDArray[np.float64]
        Derivative vector [dy1/dt, dy2/dt].
    """
    y_1, y_2 = state, state
    return np.array([y_2, -6.0 * y_1], dtype=np.float64)
```

We also define the exact analytical solution to compute errors later.

```python runnable
def exact_solution(time_values: npt.NDArray[np.float64]) -> npt.NDArray[np.float64]:
    """Evaluate the exact analytical solution.
    
    Parameters
    ----------
    time_values : npt.NDArray[np.float64]
        Time values for evaluation.
        
    Returns
    -------
    npt.NDArray[np.float64]
        Exact solution values.
    """
    sqrt_six = np.sqrt(6.0)
    return -(sqrt_six / 2.0) * np.sin(sqrt_six * time_values) + 2.0 * np.cos(sqrt_six * time_values)
```

The forward Euler method updates the state vector using the explicit formula $\boxed{\mathbf{y}_{n+1} = \mathbf{y}_n + h \cdot g(t_n, \mathbf{y}_n)}$. To prevent shape mismatches during array assignment, we ensure the calculated derivatives are explicitly flattened.

```python runnable
def explicit_euler_system(
    derivative_function: Callable[[float, npt.NDArray[np.float64]], npt.NDArray[np.float64]],
    initial_values: npt.NDArray[np.float64],
    time_start: float,
    time_end: float,
    time_step: float,
) -> tuple[npt.NDArray[np.float64], npt.NDArray[np.float64]]:
    """Solve an ODE system using the explicit Euler method.
    
    Parameters
    ----------
    derivative_function : Callable
        Function returning the derivative vector.
    initial_values : npt.NDArray[np.float64]
        Initial state vector.
    time_start : float
        Start time.
    time_end : float
        End time.
    time_step : float
        Step size.
        
    Returns
    -------
    tuple[npt.NDArray[np.float64], npt.NDArray[np.float64]]
        Time values and corresponding solution vectors.
    """
    number_of_steps = int(round((time_end - time_start) / time_step))
    time_values = np.linspace(time_start, time_end, number_of_steps + 1)
    
    number_of_equations = len(initial_values)
    solution_values = np.zeros((number_of_steps + 1, number_of_equations), dtype=np.float64)
    solution_values[0, :] = initial_values

    for step_index in range(number_of_steps):
        current_time = time_values[step_index]
        current_values = solution_values[step_index, :]
        
        derivatives = derivative_function(current_time, current_values)
        solution_values[step_index + 1, :] = current_values + time_step * np.ravel(derivatives)

    return time_values, solution_values
```

Applying the method over $0 \le t \le 5$, we extract $y(t)$ (the first component) to display the results and visualise the local errors.

```python runnable
initial_values = np.array([2.0, -3.0], dtype=np.float64)
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

print(f"Q5.1.3: Forward Euler y(5) = {euler_y_at_5:.6f}")
print(f"        Exact y(5)         = {exact_y_at_5:.6f}")
print(f"        Error at t=5       = {euler_error:.6f}")

fig, ax = plt.subplots(figsize=(8, 5))
ax.plot(time_values, exact_y, "k-", linewidth=2, label="Exact")
ax.plot(time_values, euler_y, "b--", linewidth=1.5, label="Forward Euler")
ax.set(xlabel="Time $t$", ylabel="$y(t)$", title=f"Forward Euler vs Exact ($h = {time_step}$)")
ax.legend()
ax.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()
```

…

---

## 5.2. RK4 for the Same Second-Order ODE IVP

> [!question]
> Consider again the initial value problem $\frac{d^{2}y(t)}{dt^{2}} + 6 y(t) = 0$, $y(0) = 2$, $y'(0) = -3$, written as a first-order system as in Question 5.1.
> 1. Implement the classical fourth-order Runge–Kutta (RK4) method with step size $h = 0.1$ for this first-order system on the interval $0 \le t \le 5$.
> 2. Using your implementation, compute the numerical approximation of $y(5)$.
> 3. On a single plot, display the RK4 approximation, the forward Euler approximation from Question 5.1, and the exact solution $y(t) = -\frac{\sqrt{6}}{2}\sin(\sqrt{6}\,t) + 2\cos(\sqrt{6}\,t)$ over $0 \le t \le 5$.
> 4. Compare the error at $t = 5$ for the forward Euler and RK4 methods, and discuss how the order of the methods is reflected in your numerical results and plots.
> 
> *Hint: Reuse your system formulation and only change the time-stepping method.*

To achieve higher global accuracy, the RK4 method evaluates the derivative at four intermediate points per step. These slopes are then averaged using the formula $\boxed{\mathbf{y}_{n+1} = \mathbf{y}_n + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)}$.

```python runnable
def rk4_system(
    derivative_function: Callable[[float, npt.NDArray[np.float64]], npt.NDArray[np.float64]],
    initial_values: npt.NDArray[np.float64],
    time_start: float,
    time_end: float,
    time_step: float,
) -> tuple[npt.NDArray[np.float64], npt.NDArray[np.float64]]:
    """Solve an ODE system using the classical RK4 method.
    
    Parameters
    ----------
    derivative_function : Callable
        Function returning the derivative vector.
    initial_values : npt.NDArray[np.float64]
        Initial state vector.
    time_start : float
        Start time.
    time_end : float
        End time.
    time_step : float
        Step size.
        
    Returns
    -------
    tuple[npt.NDArray[np.float64], npt.NDArray[np.float64]]
        Time values and corresponding solution vectors.
    """
    number_of_steps = int(round((time_end - time_start) / time_step))
    time_values = np.linspace(time_start, time_end, number_of_steps + 1)
    
    number_of_equations = len(initial_values)
    solution_values = np.zeros((number_of_steps + 1, number_of_equations), dtype=np.float64)
    solution_values[0, :] = initial_values

    for step_index in range(number_of_steps):
        current_time = time_values[step_index]
        current_values = solution_values[step_index, :]

        k_1 = np.ravel(derivative_function(current_time, current_values))
        k_2 = np.ravel(derivative_function(current_time + time_step / 2.0, current_values + (time_step / 2.0) * k_1))
        k_3 = np.ravel(derivative_function(current_time + time_step / 2.0, current_values + (time_step / 2.0) * k_2))
        k_4 = np.ravel(derivative_function(current_time + time_step, current_values + time_step * k_3))

        solution_values[step_index + 1, :] = current_values + (time_step / 6.0) * (k_1 + 2.0 * k_2 + 2.0 * k_3 + k_4)

    return time_values, solution_values
```

Running RK4 with identical inputs allows us to compare the global errors directly. The resulting plot shows how much closer the fourth-order method tracks the exact continuous solution.

```python runnable
_, rk4_solution = rk4_system(
    system_derivatives, initial_values, time_start, time_end, time_step
)

rk4_y = rk4_solution[:, 0]
rk4_y_at_5 = rk4_y[-1]
rk4_error = abs(rk4_y_at_5 - exact_y_at_5)

print(f"Q5.2.2: RK4 y(5)           = {rk4_y_at_5:.6f}")
print(f"        Error at t=5       = {rk4_error:.6f}")
print(f"Q5.2.4: Euler/RK4 ratio    = {euler_error / rk4_error:.2f}")

fig, ax = plt.subplots(figsize=(8, 5))
ax.plot(time_values, exact_y, "k-", linewidth=2, label="Exact")
ax.plot(time_values, euler_y, "b--", linewidth=1.5, label="Forward Euler")
ax.plot(time_values, rk4_y, "r-.", linewidth=1.5, label="RK4")
ax.set(xlabel="Time $t$", ylabel="$y(t)$", title=f"Methods vs Exact Solution ($h = {time_step}$)")
ax.legend()
ax.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()
```

…
