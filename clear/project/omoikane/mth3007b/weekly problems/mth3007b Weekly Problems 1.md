# MTH3007b Weekly Problems 1

## 1.1. Key Definitions in Numerical Methods

> [!question]
> What is meant by each of the following terms?
>
> 1. Local truncation error
> 2. Global truncation error
> 3. Order of an algorithm
> 4. Finite difference method

**[[Local truncation error]]** (LTE) is the error introduced in a single step of a numerical method, assuming the previous value is exact. It measures how well the discrete update rule approximates the true differential equation over one step. For a method with step size $dt$, LTE is typically expressed as a power of $dt$.

**[[Global truncation error]]** (GTE) is the accumulated error over all steps from $t_0$ to $t_{\text{max}}$. It accounts for the propagation of each local error through the integration. Since there are $\sim 1/dt$ steps, GTE is typically one order lower in $dt$ than the LTE.

**[[Order of a method|Order of an algorithm]]** describes how the global truncation error scales with the step size $dt$. A method is said to be $p$-th order if

$$
\text{GTE} = O(dt^p)
$$

so halving $dt$ reduces the error by a factor of $2^p$.

**[[Finite differences|finite difference method]]** is a technique for approximating derivatives by replacing them with algebraic difference quotients on a discrete grid. For example, the forward difference approximation to $dy/dt$ at $t_n$ is

$$
\frac{dy}{dt}\bigg|_{t_n} \approx \frac{y_{n+1} - y_n}{dt}
$$

where $dt$ is the grid spacing. Substituting such approximations into a differential equation converts it into an algebraic recurrence relation that can be solved on a computer.

---

## 1.2. Implicit vs. Explicit Relations

> [!question]
> What is the difference between an implicit and an explicit relation?

An **explicit relation** expresses the unknown quantity directly in terms of known quantities. In the context of numerical ODE solvers, the update for $y_{n+1}$ depends only on values already computed (e.g. $y_n$, $t_n$):

$$
y_{n+1} = y_n + dt \cdot g(t_n, y_n)
$$

This can be evaluated directly with no further solving required.

An **implicit relation** involves the unknown on both sides, so the equation must be solved (algebraically or iteratively) to find $y_{n+1}$. For example, the backward (implicit) Euler method gives:

$$
y_{n+1} = y_n + dt \cdot g(t_{n+1}, y_{n+1})
$$

Since $g$ appears evaluated at $y_{n+1}$, this is an implicit equation for $y_{n+1}$. For linear ODEs this can often be rearranged algebraically; for nonlinear ODEs a root-finding method (e.g. Newton-Raphson) is needed. Implicit methods are generally more stable than explicit ones, especially for stiff equations.

---

## 1.3. Explicit Euler Implementation

> [!question]
> Implement the **explicit (forward) Euler** method for the ODE $\dot{y} = bt - ay$ with $b = 1$, $a = 22$, $y(0) = 1$, $t_{\max} = 1$. Run with $dt = 0.01$ and $dt = 0.1$ and report $y(1)$ in each case.

The **[[Explicit Euler method]]** advances the solution by:

$$
y_{n+1} = y_n + dt \cdot g(t_n, y_n)
$$

where $g(t, y) = bt - ay$.

```python
import numpy as np
import matplotlib.pyplot as plt

forcing_coefficient = 1.0
decay_rate = 22.0

def g(t: float, y: float) -> float:
    return forcing_coefficient * t - decay_rate * y

time_start = 0.0
time_end = 1.0
initial_value = 1.0

for time_step in [0.01, 0.1]:
    number_of_steps = int(round((time_end - time_start) / time_step))
    t_values = np.zeros(number_of_steps + 1)
    y_values = np.zeros(number_of_steps + 1)
    t_values[0] = time_start
    y_values[0] = initial_value
    for step_index in range(number_of_steps):
        t_values[step_index + 1] = t_values[step_index] + time_step
        y_values[step_index + 1] = (
            y_values[step_index] + time_step * g(t_values[step_index], y_values[step_index])
        )
    print(f"dt={time_step}: y(t_end) = {y_values[number_of_steps]:.7f}")
```

Results from the PDF:

| $dt$ | $y(1)$ (Explicit Euler) |
|------|------------------------|
| 0.01 | 0.04338843 |
| 0.1 | 6.2479177 |

The large $dt = 0.1$ result is wildly wrong because $a = 22$ makes this ODE **stiff**: the stability condition for explicit Euler requires $|1 - a \cdot dt| \leq 1$, giving $dt \leq 2/22 \approx 0.091$. At $dt = 0.1$ the method is unstable.

---

## 1.4. Implicit Euler Implementation

> [!question]
> Implement the **implicit (backward) Euler** method for the same ODE $\dot{y} = bt - ay$ with the same parameters. Run with $dt = 0.01$ and $dt = 0.1$.

The **[[Implicit Euler method]]** (backward Euler) uses:

$$
y_{n+1} = y_n + dt \cdot g(t_{n+1}, y_{n+1})
$$

For $g(t, y) = bt - ay$ this becomes:

$$
y_{n+1} = y_n + dt \cdot (bt_{n+1} - ay_{n+1})
$$

Rearranging algebraically:

$$
y_{n+1}(1 + a \cdot dt) = y_n + dt \cdot b \cdot t_{n+1}
$$

$$
y_{n+1} = \frac{y_n + dt \cdot b \cdot t_{n+1}}{1 + a \cdot dt}
$$

```python
import numpy as np

forcing_coefficient = 1.0
decay_rate = 22.0
time_start = 0.0
time_end = 1.0
initial_value = 1.0

for time_step in [0.01, 0.1]:
    number_of_steps = int(round((time_end - time_start) / time_step))
    t_values = np.zeros(number_of_steps + 1)
    y_values = np.zeros(number_of_steps + 1)
    t_values[0] = time_start
    y_values[0] = initial_value
    for step_index in range(number_of_steps):
        t_values[step_index + 1] = t_values[step_index] + time_step
        y_values[step_index + 1] = (
            y_values[step_index] + time_step * forcing_coefficient * t_values[step_index + 1]
        ) / (1.0 + decay_rate * time_step)
    print(f"dt={time_step}: y(t_end) = {y_values[number_of_steps]:.7f}")
```

Results from the PDF:

| $dt$ | $y(1)$ (Implicit Euler) |
|------|------------------------|
| 0.01 | 0.04338843 |
| 0.1 | 0.04339733 |

Note that implicit Euler remains stable for large $dt$: the amplification factor for implicit Euler is $1/(1 + a \cdot dt)$, which has magnitude less than 1 for all $a, dt > 0$. This is **[[Stability of a method|unconditional stability]]**.

---

## 1.5. Analytical Solution and Error Comparison

> [!question]
> The analytical solution to $\dot{y} = bt - ay$, $y(0) = y_0$ is $y(t) = e^{-at}\!\left(y_0 + \dfrac{b}{a^2} + \dfrac{bt}{a} - \dfrac{b}{a^2}\right)$… wait, re-read:
>
> $y(t) = e^{-at}\!\left(y_0 + \dfrac{b}{a^2}\right) + \dfrac{bt}{a} - \dfrac{b}{a^2}$
>
> Compare the errors of explicit and implicit Euler for both step sizes.

The exact analytical solution is:

$$
y(t) = e^{-at}\!\left(y_0 + \frac{b}{a^2}\right) + \frac{bt}{a} - \frac{b}{a^2}
$$

This can be verified by substituting into $\dot{y} = bt - ay$.

```python
import numpy as np

forcing_coefficient = 1.0
decay_rate = 22.0
initial_value = 1.0
time_end = 1.0

def y_exact(t: float) -> float:
    return (
        np.exp(-decay_rate * t) * (initial_value + forcing_coefficient / decay_rate ** 2)
        + forcing_coefficient * t / decay_rate
        - forcing_coefficient / decay_rate ** 2
    )

y_true = y_exact(time_end)
print(f"Exact y(1) = {y_true:.7f}")

numerical_results = {
    "Explicit Euler dt=0.01": 0.04338843,
    "Explicit Euler dt=0.1":  6.2479177,
    "Implicit Euler dt=0.01": 0.04338843,
    "Implicit Euler dt=0.1":  0.04339733,
}
for label, y_numerical in numerical_results.items():
    print(f"{label}: error = {abs(y_numerical - y_true):.6e}")
```

Key observations:

- Both methods give nearly the same answer at $dt = 0.01$, because at small step sizes their errors are dominated by the truncation error (both are first-order methods).
- Explicit Euler explodes at $dt = 0.1$ due to **[[Stability of a method|numerical instability]]** - the ODE is stiff and $dt = 0.1 > 2/a \approx 0.091$.
- Implicit Euler remains accurate even at $dt = 0.1$, demonstrating unconditional stability. The small remaining error is just first-order truncation error.
