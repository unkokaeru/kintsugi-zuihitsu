# MTH3007b Weekly Problems 3

> **Original Documents**: [[mth3007b weekly problem sheet 3.pdf|Problem Sheet]] / [[mth3007b weekly problem sheet 3 solutions.pdf|Provided Solutions]]
>
> **Vibes**: ...
>
> **Used Techniques**:
>   - ...

---

> [!note]
> The original exercises for session 3 are posted on Blackboard (assessment section). The problems below cover the core session 3 content: deriving and implementing RK4, the implicit trapezoid method, and comparing their accuracy.

---

## 3.1. Implementing RK4

> [!question]
> Implement the **fourth-order Runge-Kutta method** (RK4) for $\dot{y} = bt - ay$ with $b = 1$, $a = 22$, $y(0) = 1$, $t_{\max} = 1$.

**[[RK4]]** is the standard four-stage explicit Runge-Kutta method. It evaluates the slope function $g(t, y)$ at four points per step and combines them with weights $1/6, 2/6, 2/6, 1/6$:

$$
k_1 = g(t_n,\; y_n)
$$

$$
k_2 = g\!\left(t_n + \tfrac{dt}{2},\; y_n + \tfrac{dt}{2}k_1\right)
$$

$$
k_3 = g\!\left(t_n + \tfrac{dt}{2},\; y_n + \tfrac{dt}{2}k_2\right)
$$

$$
k_4 = g(t_n + dt,\; y_n + dt\,k_3)
$$

$$
y_{n+1} = y_n + \frac{dt}{6}(k_1 + 2k_2 + 2k_3 + k_4)
$$

This is a fourth-order method: GTE $= O(dt^4)$. Each halving of $dt$ reduces the error by $2^4 = 16$.

```python
import numpy as np

b = 1.0; a = 22.0; t0 = 0.0; tmax = 1.0; y0 = 1.0

def g(t, y):
    return b * t - a * y

def y_exact(t):
    return np.exp(-a * t) * (y0 + b / a**2) + b * t / a - b / a**2

def rk4_step(g, t, y, dt):
    k1 = g(t, y)
    k2 = g(t + dt / 2, y + dt * k1 / 2)
    k3 = g(t + dt / 2, y + dt * k2 / 2)
    k4 = g(t + dt, y + dt * k3)
    return y + dt / 6 * (k1 + 2 * k2 + 2 * k3 + k4)

def run_rk4(dt):
    Nint = int(round((tmax - t0) / dt))
    t = t0; y = y0
    for n in range(Nint):
        y = rk4_step(g, t, y, dt)
        t += dt
    return y

y_true = y_exact(tmax)
print(f"Exact y(1) = {y_true:.10f}")
print(f"{'dt':>10} {'error':>14} {'ratio':>8}")
prev_error = None
for dt in [0.1, 0.05, 0.025, 0.0125]:
    y_num = run_rk4(dt)
    error = abs(y_num - y_true)
    ratio = prev_error / error if prev_error is not None else float('nan')
    print(f"{dt:>10.4f} {error:>14.6e} {ratio:>8.2f}")
    prev_error = error
```

The error ratio should converge to $\approx 16$, confirming fourth-order convergence.

---

## 3.2. Implicit Trapezoid Method

> [!question]
> Derive and implement the **implicit trapezoid method** for $\dot{y} = bt - ay$ with $b = 1$, $a = 22$, $y(0) = 1$, $t_{\max} = 1$.

The **[[implicit trapezoid method]]** averages the slopes at both ends of the step:

$$
y_{n+1} = y_n + \frac{dt}{2}\bigl[g(t_n, y_n) + g(t_{n+1}, y_{n+1})\bigr]
$$

For $g(t, y) = bt - ay$ this becomes:

$$
y_{n+1} = y_n + \frac{dt}{2}\bigl[(bt_n - ay_n) + (bt_{n+1} - ay_{n+1})\bigr]
$$

Collecting $y_{n+1}$ terms on the left:

$$
y_{n+1}\!\left(1 + \frac{a\,dt}{2}\right) = y_n\!\left(1 - \frac{a\,dt}{2}\right) + \frac{dt\,b}{2}(t_n + t_{n+1})
$$

Since $t_{n+1} = t_n + dt$, we have $t_n + t_{n+1} = 2t_n + dt$, so:

$$
y_{n+1} = \frac{y_n\!\left(1 - \dfrac{a\,dt}{2}\right) + dt\,b\!\left(t_n + \dfrac{dt}{2}\right)}{1 + \dfrac{a\,dt}{2}}
$$

```python
import numpy as np

b = 1.0; a = 22.0; t0 = 0.0; tmax = 1.0; y0 = 1.0

def trap_step(t, y, dt, a, b):
    return (y * (1 - a * dt / 2.0) + dt * b * (t + dt / 2.0)) / (1.0 + a * dt / 2.0)

def y_exact(t):
    return np.exp(-a * t) * (y0 + b / a**2) + b * t / a - b / a**2

def run_trap(dt):
    Nint = int(round((tmax - t0) / dt))
    t = t0; y = y0
    for n in range(Nint):
        y = trap_step(t, y, dt, a, b)
        t += dt
    return y

y_true = y_exact(tmax)
print(f"{'dt':>10} {'error':>14} {'ratio':>8}")
prev_error = None
for dt in [0.1, 0.05, 0.025, 0.0125]:
    y_num = run_trap(dt)
    error = abs(y_num - y_true)
    ratio = prev_error / error if prev_error is not None else float('nan')
    print(f"{dt:>10.4f} {error:>14.6e} {ratio:>8.2f}")
    prev_error = error
```

The ratio should converge to $\approx 4$, confirming second-order convergence (the implicit trapezoid is a second-order method with unconditional stability).

---

## 3.3. Comparing Euler, RK4, and Implicit Trapezoid

> [!question]
> Compare the errors of explicit Euler, RK4, and the implicit trapezoid method for $\dot{y} = bt - ay$ at several step sizes. What do you observe?

```python
import numpy as np

b = 1.0; a = 22.0; t0 = 0.0; tmax = 1.0; y0 = 1.0

def g(t, y):
    return b * t - a * y

def y_exact(t):
    return np.exp(-a * t) * (y0 + b / a**2) + b * t / a - b / a**2

def run_euler(dt):
    Nint = int(round((tmax - t0) / dt))
    t = t0; y = y0
    for n in range(Nint):
        y = y + dt * g(t, y)
        t += dt
    return y

def rk4_step(g, t, y, dt):
    k1 = g(t, y)
    k2 = g(t + dt/2, y + dt*k1/2)
    k3 = g(t + dt/2, y + dt*k2/2)
    k4 = g(t + dt, y + dt*k3)
    return y + dt/6*(k1 + 2*k2 + 2*k3 + k4)

def run_rk4(dt):
    Nint = int(round((tmax - t0) / dt))
    t = t0; y = y0
    for n in range(Nint):
        y = rk4_step(g, t, y, dt)
        t += dt
    return y

def trap_step(t, y, dt):
    return (y*(1 - a*dt/2.0) + dt*b*(t + dt/2.0)) / (1.0 + a*dt/2.0)

def run_trap(dt):
    Nint = int(round((tmax - t0) / dt))
    t = t0; y = y0
    for n in range(Nint):
        y = trap_step(t, y, dt)
        t += dt
    return y

y_true = y_exact(tmax)
step_sizes = [0.04, 0.02, 0.01, 0.005]
print(f"{'dt':>8}  {'Euler err':>14}  {'RK4 err':>14}  {'Trap err':>14}")
for dt in step_sizes:
    e_euler = abs(run_euler(dt) - y_true)
    e_rk4   = abs(run_rk4(dt)   - y_true)
    e_trap  = abs(run_trap(dt)  - y_true)
    print(f"{dt:>8.4f}  {e_euler:>14.4e}  {e_rk4:>14.4e}  {e_trap:>14.4e}")
```

Expected observations:

- Explicit Euler errors halve as $dt$ halves (first order).
- RK4 errors decrease by a factor of $16$ per halving of $dt$ (fourth order) - far more accurate for the same step size.
- Implicit trapezoid errors decrease by a factor of $4$ per halving (second order), and remain stable even for large $dt$ since it is unconditionally stable.
- At small $dt$ all methods converge, but RK4 reaches machine precision fastest.
