# MTH3007b Weekly Problems 5

> **Original Documents**: [[mth3007b weekly problem sheet 5.pdf|Problem Sheet]] / [[mth3007b weekly problem sheet 5 solutions.pdf|Provided Solutions]]
>
> **Vibes**: ...
>
> **Used Techniques**:
>   - ...

---

## 5.1. Numerical Integration via ODE

> [!question]
> Use numerical integration treated as an ODE to compute $\displaystyle\int_0^1 (-2t^3 + 12t^2 - 20t + 8.5)\,dt$ using forward Euler and RK4. Compare with the analytical answer.

The key trick: to compute $\displaystyle I = \int_0^T f(t)\,dt$, introduce a new variable $y(t)$ satisfying:

$$
\frac{dy}{dt} = f(t), \quad y(0) = 0
$$

Then $y(T) = I$. This converts integration into solving an ODE, allowing any ODE solver to be used.

Here $f(t) = -2t^3 + 12t^2 - 20t + 8.5$.

**Analytical answer:**

$$
\int_0^1 (-2t^3 + 12t^2 - 20t + 8.5)\,dt = \left[-\frac{t^4}{2} + 4t^3 - 10t^2 + 8.5t\right]_0^1 = -0.5 + 4 - 10 + 8.5 = 2.0
$$

```python
import numpy as np

def g_integral(t, y):
    return -2*t**3 + 12*t**2 - 20*t + 8.5

tmax = 1.0; y0 = 0.0

# --- Forward Euler ---
dt = 0.01
Nint = int(round(tmax / dt))
t = np.zeros(Nint + 1); y = np.zeros(Nint + 1)
t[0] = 0.0; y[0] = y0
for n in range(Nint):
    t[n + 1] = t[n] + dt
    y[n + 1] = y[n] + dt * g_integral(t[n], y[n])
print(f"Forward Euler (dt={dt}): I = {y[Nint]:.6f}")

# --- RK4 ---
def rk4_step(g, t, y, dt):
    k1 = g(t, y)
    k2 = g(t + dt/2, y + dt*k1/2)
    k3 = g(t + dt/2, y + dt*k2/2)
    k4 = g(t + dt, y + dt*k3)
    return y + dt/6*(k1 + 2*k2 + 2*k3 + k4)

Nint = int(round(tmax / dt))
t_val = 0.0; y_val = y0
for n in range(Nint):
    y_val = rk4_step(g_integral, t_val, y_val, dt)
    t_val += dt
print(f"RK4 (dt={dt}): I = {y_val:.6f}")
print(f"Analytical: I = 2.0")
```

Both methods should give values close to $2.0$. RK4 achieves higher accuracy for the same step size because the integrand is a polynomial (degree 3), which RK4 integrates exactly.

---

## 5.2. Reducing a Second-Order ODE to a First-Order System

> [!question]
> Reduce $\ddot{y} - y = 0$ to a first-order system. Implement it numerically with $y(0) = 1$, $\dot{y}(0) = 1$. Compare with the exact solution.

**Reduction to first-order system:** Introduce state variables $z_1 = y$ and $z_2 = \dot{y}$. Then:

$$
\dot{z}_1 = z_2
$$

$$
\dot{z}_2 = \dot{y} = y = z_1 \quad \text{(from } \ddot{y} = y\text{)}
$$

In vector form, with $\mathbf{Z} = (z_1, z_2)^\top$:

$$
\dot{\mathbf{Z}} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \mathbf{Z}
$$

**Exact solution:** The general solution to $\ddot{y} = y$ is $y(t) = A e^t + B e^{-t}$. Applying $y(0) = 1$ and $\dot{y}(0) = 1$ gives $A + B = 1$ and $A - B = 1$, so $A = 1$, $B = 0$. Thus:

$$
y(t) = e^t
$$

(equivalently, $y(t) = \cosh(t) + \sinh(t) = e^t$.)

```python
import numpy as np

def g_system(t, Z):
    return np.array([Z[1], Z[0]])

dt = 0.01; tmax = 5.0
Nint = int(round(tmax / dt))
Z = np.zeros((2, Nint + 1))
t = np.zeros(Nint + 1)
Z[0, 0] = 1.0; Z[1, 0] = 1.0  # y(0)=1, y'(0)=1

for n in range(Nint):
    t[n + 1] = t[n] + dt
    Z[:, n + 1] = Z[:, n] + dt * g_system(t[n], Z[:, n])

print(f"y(5) numerical = {Z[0, -1]:.6f}")
print(f"y(5) exact     = {np.exp(5):.6f}")
print(f"Error = {abs(Z[0, -1] - np.exp(5)):.4e}")
```

Note: **[[systems of ODEs]]** follow exactly the same structure as scalar ODEs - the state vector $\mathbf{Z}$ replaces the scalar $y$, and $g$ returns a vector of derivatives. The same solvers (Euler, RK4, etc.) apply by operating componentwise.

---

## 5.3. FTCS for the 1D Heat Equation

> [!question]
> Implement the **FTCS** (Forward Time, Centred Space) scheme for the 1D heat equation $\dfrac{\partial u}{\partial t} = \alpha \dfrac{\partial^2 u}{\partial x^2}$. What is the stability condition?

The **[[FTCS scheme]]** (also called the explicit Euler scheme for PDEs) discretises the heat equation as:

$$
\frac{u_i^{n+1} - u_i^n}{dt} = \alpha \frac{u_{i+1}^n - 2u_i^n + u_{i-1}^n}{dx^2}
$$

Rearranging:

$$
u_i^{n+1} = u_i^n + r\!\left(u_{i+1}^n - 2u_i^n + u_{i-1}^n\right)
$$

where the **[[diffusion number]]** is $r = \dfrac{\alpha\,dt}{dx^2}$.

**[[FTCS stability condition]]:** The method is stable if and only if:

$$
r = \frac{\alpha\,dt}{dx^2} \leq \frac{1}{2}
$$

Equivalently: $dt \leq \dfrac{dx^2}{2\alpha}$. This is a conditional stability constraint - small $dx$ forces very small $dt$.

```python
import numpy as np
import matplotlib.pyplot as plt

# Parameters
alpha = 0.835; L = 1.0; dx = 0.05; Nx = int(np.round(L / dx) + 1)
dt = 0.001; tmax = 0.1; Nt = int(np.round(tmax / dt) + 1)
r = alpha * dt / dx**2
print(f"r = {r:.4f}  (must be <= 0.5 for stability)")

# Initial condition: sinusoidal
x = np.linspace(0, L, Nx)
u = np.sin(np.pi * x / L)
u[0] = 0.0; u[-1] = 0.0  # Dirichlet BCs

for it in range(Nt - 1):
    unext = u.copy()
    for i in range(1, Nx - 1):
        unext[i] = u[i] + r * (u[i + 1] - 2 * u[i] + u[i - 1])
    u = unext

plt.plot(x, u, label=f't={tmax}')
plt.xlabel('x'); plt.ylabel('u'); plt.legend(); plt.show()
```

If $r > 0.5$, the solution will oscillate and grow without bound - this is **[[numerical instability]]** for FTCS.
