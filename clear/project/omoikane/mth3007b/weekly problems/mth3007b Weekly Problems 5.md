# MTH3007b Weekly Problems 5

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

time_end = 1.0
initial_value = 0.0
time_step = 0.01

def integrand(t: float, y: float) -> float:
    """RHS: dF/dt = f(t), independent of F."""
    return -2 * t ** 3 + 12 * t ** 2 - 20 * t + 8.5

# --- Forward Euler ---
number_of_steps = int(round(time_end / time_step))
t_values = np.zeros(number_of_steps + 1)
y_values = np.zeros(number_of_steps + 1)
t_values[0] = 0.0
y_values[0] = initial_value
for step_index in range(number_of_steps):
    t_values[step_index + 1] = t_values[step_index] + time_step
    y_values[step_index + 1] = (
        y_values[step_index]
        + time_step * integrand(t_values[step_index], y_values[step_index])
    )
print(f"Forward Euler (dt={time_step}): I = {y_values[number_of_steps]:.6f}")

# --- RK4 ---
def rk4_step(g, t: float, y: float, time_step: float) -> float:
    k1 = g(t, y)
    k2 = g(t + time_step / 2, y + time_step * k1 / 2)
    k3 = g(t + time_step / 2, y + time_step * k2 / 2)
    k4 = g(t + time_step, y + time_step * k3)
    return y + time_step / 6 * (k1 + 2 * k2 + 2 * k3 + k4)

current_t = 0.0
current_y = initial_value
for _ in range(int(round(time_end / time_step))):
    current_y = rk4_step(integrand, current_t, current_y, time_step)
    current_t += time_step
print(f"RK4 (dt={time_step}): I = {current_y:.6f}")
print("Analytical: I = 2.0")
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

def g_system(t: float, state: np.ndarray) -> np.ndarray:
    """RHS for y'' = y reduced to [y', y''] = [z2, z1]."""
    return np.array([state[1], state[0]])

time_step = 0.01
time_end = 5.0
number_of_steps = int(round(time_end / time_step))
state_array = np.zeros((2, number_of_steps + 1))
t_values = np.zeros(number_of_steps + 1)
state_array[0, 0] = 1.0  # y(0) = 1
state_array[1, 0] = 1.0  # y'(0) = 1

for step_index in range(number_of_steps):
    t_values[step_index + 1] = t_values[step_index] + time_step
    state_array[:, step_index + 1] = (
        state_array[:, step_index]
        + time_step * g_system(t_values[step_index], state_array[:, step_index])
    )

print(f"y(5) numerical = {state_array[0, -1]:.6f}")
print(f"y(5) exact     = {np.exp(5):.6f}")
print(f"Error = {abs(state_array[0, -1] - np.exp(5)):.4e}")
```

Note: **[[Systems of ODEs]]** follow exactly the same structure as scalar ODEs - the state vector $\mathbf{Z}$ replaces the scalar $y$, and $g$ returns a vector of derivatives. The same solvers (Euler, RK4, etc.) apply by operating componentwise.

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

where the **diffusion number** is $r = \dfrac{\alpha\,dt}{dx^2}$.

**[[FTCS scheme|FTCS stability condition]]:** The method is stable if and only if:

$$
r = \frac{\alpha\,dt}{dx^2} \leq \frac{1}{2}
$$

Equivalently: $dt \leq \dfrac{dx^2}{2\alpha}$. This is a conditional stability constraint - small $dx$ forces very small $dt$.

```python
import numpy as np
import matplotlib.pyplot as plt

diffusivity = 0.835
domain_length = 1.0
spatial_step = 0.05
number_of_spatial_nodes = int(np.round(domain_length / spatial_step) + 1)
time_step = 0.001
time_end = 0.1
number_of_time_steps = int(np.round(time_end / time_step) + 1)
stability_parameter = diffusivity * time_step / spatial_step ** 2
print(f"r = {stability_parameter:.4f}  (must be <= 0.5 for stability)")

x_values = np.linspace(0, domain_length, number_of_spatial_nodes)
u_profile = np.sin(np.pi * x_values / domain_length)
u_profile[0] = 0.0
u_profile[-1] = 0.0

for time_index in range(number_of_time_steps - 1):
    u_next = u_profile.copy()
    for node_index in range(1, number_of_spatial_nodes - 1):
        u_next[node_index] = (
            u_profile[node_index]
            + stability_parameter * (
                u_profile[node_index + 1]
                - 2 * u_profile[node_index]
                + u_profile[node_index - 1]
            )
        )
    u_profile = u_next

plt.plot(x_values, u_profile, label=f't={time_end}')
plt.xlabel('x')
plt.ylabel('u')
plt.legend()
plt.show()
```

If $r > 0.5$, the solution will oscillate and grow without bound - this is **[[Stability of a method|numerical instability]]** for FTCS.
