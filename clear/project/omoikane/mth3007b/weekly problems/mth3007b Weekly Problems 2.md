# MTH3007b Weekly Problems 2

> **Original Documents**: [[mth3007b weekly problem sheet 2.pdf|Problem Sheet]] / [[mth3007b weekly problem sheet 2 solutions.pdf|Provided Solutions]]
>
> **Vibes**: ...
>
> **Used Techniques**:
>   - ...

---

## 2.1. Error Scaling for Forward Euler

> [!question]
> You run forward Euler with $dt = 0.01$ and find an error of $0.04$ in $y(t_{\max})$. What error would you expect if you halved the step size to $dt = 0.005$?

Forward (explicit) Euler is a **[[first-order method]]**, meaning its **[[global truncation error]]** scales as $O(dt^1)$. Halving $dt$ therefore halves the error.

$$
\text{GTE} \propto dt^1
$$

So if error at $dt = 0.01$ is $0.04$:

$$
\text{error at } dt = 0.005 = 0.04 \times \frac{0.005}{0.01} = 0.04 \times \frac{1}{2} = \boxed{0.02}
$$

---

## 2.2. Error Scaling for Ralston's Method

> [!question]
> You run Ralston's method with $dt = 0.01$ and find an error of $0.03$. What error would you expect for $dt = 0.005$?

**[[Ralston's method]]** is a second-order Runge-Kutta method, so its GTE scales as $O(dt^2)$. Halving $dt$ reduces the error by a factor of $2^2 = 4$.

$$
\text{GTE} \propto dt^2
$$

So if error at $dt = 0.01$ is $0.03$:

$$
\text{error at } dt = 0.005 = 0.03 \times \left(\frac{0.005}{0.01}\right)^2 = 0.03 \times \frac{1}{4} = \boxed{0.0075}
$$

---

## 2.3. Implementing Ralston's Method and Verifying Second-Order Convergence

> [!question]
> Implement Ralston's method for $\dot{y} = bt - ay$ with $b = 1$, $a = 22$, $y(0) = 1$, $t_{\max} = 1$. Verify numerically that the method is second order by checking the error ratio as $dt$ is halved.

**[[Ralston's method]]** is a two-stage Runge-Kutta scheme with coefficients chosen to minimise the truncation error bound. The update is:

$$
k_1 = g(t_n, y_n)
$$

$$
k_2 = g\!\left(t_n + \tfrac{2}{3}dt,\; y_n + \tfrac{2}{3}dt \cdot k_1\right)
$$

$$
y_{n+1} = y_n + dt\!\left(\tfrac{1}{4}k_1 + \tfrac{3}{4}k_2\right)
$$

```python
import numpy as np

b = 1.0; a = 22.0; t0 = 0.0; tmax = 1.0; y0 = 1.0

def g(t, y):
    return b * t - a * y

def y_exact(t):
    return np.exp(-a * t) * (y0 + b / a**2) + b * t / a - b / a**2

def ralston_step(g, t, y, dt):
    k1 = g(t, y)
    k2 = g(t + 2 * dt / 3, y + 2 * dt * k1 / 3)
    return y + dt * (k1 / 4 + 3 * k2 / 4)

def run_ralston(dt):
    Nint = int(round((tmax - t0) / dt))
    t = t0; y = y0
    for n in range(Nint):
        y = ralston_step(g, t, y, dt)
        t += dt
    return y

y_true = y_exact(tmax)
print(f"{'dt':>10} {'y(1)':>14} {'error':>14} {'ratio':>8}")
prev_error = None
for dt in [0.1, 0.05, 0.025, 0.0125]:
    y_num = run_ralston(dt)
    error = abs(y_num - y_true)
    ratio = prev_error / error if prev_error is not None else float('nan')
    print(f"{dt:>10.4f} {y_num:>14.8f} {error:>14.6e} {ratio:>8.2f}")
    prev_error = error
```

The ratio column should converge to $\approx 4$ as $dt$ decreases, confirming second-order convergence - each halving of $dt$ reduces the error by a factor of $4 = 2^2$.

**Why second order?** The **[[local truncation error]]** of Ralston's method is $O(dt^3)$ per step (it matches the Taylor series up to and including the $dt^2$ term). With $\sim 1/dt$ steps, the **[[global truncation error]]** is $O(dt^2)$.
