# MTH3007b Lecture 1

> [!quote] Me, in the lecture
> zzzzz...

This session opens the module by establishing the core framework for numerically solving ordinary differential equations. We derive the **[[Explicit Euler method]]** from first principles via finite differences, examine its errors, then introduce the **[[Implicit Euler method]]** as a stability-motivated alternative. There is no previous lecture to connect to - this is the starting point.

## The Finite Difference Approach

The starting point for all ODE solvers in this module is the **[[Finite differences]]** approach. Rather than working with the derivative $\dot{y} = g(t, y)$ as a limit, we approximate it using a discrete grid of time points.

Partition time into steps of size $dt$, so $t_n = t_0 + n \cdot dt$. The forward difference approximation to the first derivative at $t_n$ is

$$
\frac{dy}{dt}\bigg|_{t_n} \approx \frac{y_{n+1} - y_n}{dt}
$$

This is the foundation of the explicit Euler method.

## Explicit Euler Method

### Derivation

Starting from $\dot{y} = g(t, y)$ and replacing the left-hand side with the forward difference:

$$
\frac{y_{n+1} - y_n}{dt} = g(t_n, y_n)
$$

Rearranging gives the **[[Explicit Euler method]]** (also called the forward Euler method):

> [!important]
> The explicit Euler update rule:
> $y_{n+1} = y_n + dt \cdot g(t_n, y_n)$

The method is called "explicit" because $y_{n+1}$ is expressed directly in terms of known quantities at step $n$ - no equation needs to be solved.

### Algorithm

The practical implementation stores the full solution array:

```python runnable
import numpy as np

initial_value = 1.0
time_step = 0.01
time_start = 0.0
time_end = 10.0
number_of_steps = int(round(time_end / time_step))
y_values = np.zeros(number_of_steps + 1)
t_values = np.zeros(number_of_steps + 1)
y_values[0] = initial_value
t_values[0] = time_start
for step_index in range(number_of_steps):
    t_values[step_index + 1] = t_values[step_index] + time_step
    y_values[step_index + 1] = y_values[step_index] * (1 + time_step)
```

> [!note]
> `int(round(time_end/time_step))` is used rather than bare integer division because floating-point division can produce results like $9.999\ldots$ which would truncate incorrectly.

A more general version using a right-hand-side function $g(t, y)$:

```python runnable
import numpy as np

time_start = 0.0
time_end = 1.0
time_step = 0.01
initial_value = 1.0
number_of_steps = int(round((time_end - time_start) / time_step))
t_values = np.zeros(number_of_steps + 1)
y_values = np.zeros(number_of_steps + 1)
t_values[0] = time_start
y_values[0] = initial_value

decay_rate = 22.0
forcing_coefficient = 1.0

def g(t: float, y: float) -> float:
    return forcing_coefficient * t - decay_rate * y

for step_index in range(number_of_steps):
    t_values[step_index + 1] = t_values[step_index] + time_step
    y_values[step_index + 1] = y_values[step_index] + time_step * g(t_values[step_index], y_values[step_index])

print("y(t_end) =", y_values[number_of_steps])
```

## Errors in Explicit Euler

### Local Truncation Error

The **[[Local truncation error]]** is the error introduced in a single step, assuming the previous value $y_n$ is exact. Expanding $y(t_{n+1})$ as a Taylor series:

$$
y(t_{n+1}) = y(t_n) + dt \cdot y'(t_n) + \frac{dt^2}{2} y''(t_n) + \cdots
$$

The explicit Euler step uses only the first two terms. The error per step is therefore

$$
\text{LTE} = \frac{dt^2}{2} y''(t_n) + O(dt^3) = O(dt^2)
$$

### Global Truncation Error

The **[[Global truncation error]]** (GTE) accumulates over all steps from $t_0$ to $t_{\text{max}}$. The number of steps is $N \sim t_{\text{max}}/dt$, so

$$
\text{GTE} \sim N \cdot \text{LTE} \sim \frac{t_{\text{max}}}{dt} \cdot O(dt^2) = O(dt)
$$

> [!important]
> Explicit Euler is a **first-order method**: global error $\sim O(dt)$. Halving $dt$ halves the error.

### Example: $dy/dt = y$, $y(0) = 1$

The exact solution is $y(t) = e^t$. The explicit Euler step gives $y_{n+1} = y_n(1 + dt)$, so after $N$ steps:

$$
y_N = y_0 (1 + dt)^N
$$

As $dt \to 0$ with $N \cdot dt = t$ fixed, $(1 + dt)^N \to e^t$, confirming convergence.

### Stability Example: $dy/dt = -ay$, $a > 0$

The exact solution decays: $y(t) = y_0 e^{-at}$. The Euler step gives

$$
y_{n+1} = y_n(1 - a \cdot dt)
$$

The factor $(1 - a \cdot dt)$ is the amplification factor. For stability we need $|1 - a \cdot dt| \leq 1$, which requires $a \cdot dt \leq 2$.

> [!warning]
> Explicit Euler applied to $\dot{y} = -ay$ is **conditionally stable**. If $a \cdot dt > 2$ the amplification factor exceeds 1 in magnitude and the solution grows without bound - even though the true solution decays.

## Implicit Euler Method

### Motivation

The instability of explicit Euler for stiff problems motivates using a backward difference instead of a forward difference. Approximating the derivative at $t_{n+1}$:

$$
\frac{y_{n+1} - y_n}{dt} = g(t_{n+1}, y_{n+1})
$$

This is the **[[Implicit Euler method]]** (backward Euler), since $y_{n+1}$ appears on both sides and must be solved for.

### Example: $dy/dt = -ay$

Substituting $g(t, y) = -ay$:

$$
\frac{y_{n+1} - y_n}{dt} = -a \cdot y_{n+1}
$$

$$
y_{n+1}(1 + a \cdot dt) = y_n \implies \boxed{y_{n+1} = \frac{y_n}{1 + a \cdot dt}}
$$

The amplification factor is $1/(1 + a \cdot dt)$, which is always less than 1 for $a > 0$ and any $dt > 0$. Backward Euler is therefore unconditionally stable for this equation.

### Example: $dy/dt = bt - ay$ (implicit update)

When $g(t, y) = bt - ay$, the implicit Euler step rearranges to:

```python runnable
# Implicit Euler update for dy/dt = b*t - a*y
# y_next = (y_now + dt * b * t_next) / (1 + a * dt)
decay_rate = 22.0
forcing_coefficient = 1.0
# example single step:
y_now = 1.0
t_next = 0.01
time_step = 0.01
y_next = (y_now + time_step * forcing_coefficient * t_next) / (1.0 + decay_rate * time_step)
```

Note that $t_{n+1}$ is known before solving - only $y_{n+1}$ is the unknown.

## Round-Off Errors

**[[Round-off error]]** arises from finite-precision floating-point arithmetic, distinct from the truncation error above.

> [!warning]
> Python integers are exact (arbitrary precision), but Python floats follow IEEE 754 double precision: roughly 15-16 significant decimal digits. Accumulating many small floating-point operations introduces round-off that can dominate if $dt$ is taken too small.

This means there is a practical lower bound on $dt$: below some threshold, reducing $dt$ no longer improves accuracy because round-off error grows faster than truncation error shrinks.

---

## Pre-Lecture Notes from [[mth3007b lecture notes 1.pdf|University Notes]]

- **Finite difference method**: replace $dy/dt$ with $(y_{n+1} - y_n)/dt$ (forward difference) to get the explicit Euler update $y_{n+1} = y_n + dt \cdot g(t_n, y_n)$
- **Local truncation error** is $O(dt^2)$ (one step); **global truncation error** is $O(dt)$ (first-order method)
- Example $\dot{y} = y$, $y(0)=1$: Euler gives $(1+dt)^N \to e^t$ - qualitatively correct but first-order convergence
- Stability of explicit Euler on $\dot{y} = -ay$: amplification factor $|1 - a\,dt|$; unstable when $a \cdot dt > 2$
- **Implicit (backward) Euler**: use backward difference, evaluate $g$ at $t_{n+1}$; requires solving for $y_{n+1}$ each step
- Backward Euler on $\dot{y} = -ay$: $y_{n+1} = y_n/(1+a\,dt)$, amplification factor always $< 1$ - unconditionally stable
- **Round-off error**: floats have ~15 significant digits; taking $dt$ too small causes round-off to dominate
- Next session: higher-order Runge-Kutta methods that achieve $O(dt^2)$ global error
