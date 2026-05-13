# MTH3007b Final Exam Cheat Sheet

---

## 1. Errors and Order

**Local truncation error (LTE):** error introduced in a single step due to truncating the Taylor series. For Euler: $O(\Delta t^2)$.

**Global truncation error (GTE):** accumulated error over the whole integration. Since there are $N = (t_\text{end} - t_\text{start})/\Delta t$ steps, GTE $= N \cdot \text{LTE}$. For Euler: $N \cdot O(\Delta t^2) = O(\Delta t)$.

**Order of a method:** the power of $\Delta t$ in the GTE. Euler is 1st order; midpoint/Ralston/trapezoid are 2nd order; RK4 is 4th order.

| Method | LTE | GTE (order) |
|--------|-----|-------------|
| Explicit / Implicit Euler | $O(\Delta t^2)$ | $O(\Delta t)$ — 1st |
| Midpoint, Ralston, Implicit Trapezoid | $O(\Delta t^3)$ | $O(\Delta t^2)$ — 2nd |
| RK4 | $O(\Delta t^5)$ | $O(\Delta t^4)$ — 4th |
| Monte Carlo | — | $O(N^{-1/2})$ — "half order" |

---

## 2. ODE Solvers — Scalar

For $\dot{y} = g(t, y)$, $y(t_0) = y_0$.

| Method | Update formula | Stable? |
|--------|----------------|---------|
| **Explicit Euler** | $y_{n+1} = y_n + \Delta t\,g(t_n, y_n)$ | Conditional |
| **Implicit Euler** | $y_{n+1} = y_n + \Delta t\,g(t_{n+1}, y_{n+1})$ | Unconditional |
| **Midpoint** | $y_{n+1} = y_n + \Delta t\,g\!\left(t_n + \tfrac{\Delta t}{2},\, y_n + \tfrac{\Delta t}{2}g(t_n,y_n)\right)$ | Conditional |
| **Ralston** | $k_1 = g(t_n,y_n)$; $k_2 = g\!\left(t_n + \tfrac{2\Delta t}{3},\, y_n + \tfrac{2\Delta t}{3}k_1\right)$; $y_{n+1} = y_n + \Delta t\!\left(\tfrac{k_1}{4} + \tfrac{3k_2}{4}\right)$ | Conditional |
| **Implicit Trapezoid** | $y_{n+1} = y_n + \tfrac{\Delta t}{2}\!\left[g(t_n,y_n) + g(t_{n+1},y_{n+1})\right]$ | Unconditional |
| **RK4** | See formula below | Conditional |

**RK4 in full:**

$$k_1 = g(t_n, y_n), \quad k_2 = g\!\left(t_n + \tfrac{\Delta t}{2},\, y_n + \tfrac{\Delta t}{2}k_1\right)$$

$$k_3 = g\!\left(t_n + \tfrac{\Delta t}{2},\, y_n + \tfrac{\Delta t}{2}k_2\right), \quad k_4 = g(t_n + \Delta t,\, y_n + \Delta t\, k_3)$$

$$y_{n+1} = y_n + \frac{\Delta t}{6}(k_1 + 2k_2 + 2k_3 + k_4)$$

### Closed forms for $\dot{y} = bt - ay$

These are derived by solving the implicit equations algebraically for $y_{n+1}$.

$$\text{Implicit Euler:} \quad y_{n+1} = \frac{y_n + \Delta t\, b\, t_{n+1}}{1 + a\,\Delta t}$$

$$\text{Implicit Trapezoid:} \quad y_{n+1} = \frac{y_n(1 - a\,\Delta t/2) + \Delta t\, b\,(t_n + \Delta t/2)}{1 + a\,\Delta t/2}$$

### Heun's method vs implicit trapezoid

The **implicit trapezoid** uses the true $y_{n+1}$ on the right-hand side and is implicit and symmetric.

**Heun's method** (explicit trapezoid) is different - it uses a forward-Euler predictor $\tilde{y}_{n+1} = y_n + \Delta t\,g(t_n, y_n)$ to evaluate the derivative at the next step:

$$y_{n+1} = y_n + \frac{\Delta t}{2}\!\left[g(t_n, y_n) + g(t_{n+1}, \tilde{y}_{n+1})\right]$$

Heun's method is 2nd order but is **not** symmetric. The implicit trapezoid method **is** symmetric (it is the same under the exchange $n \leftrightarrow n+1$, $\Delta t \leftrightarrow -\Delta t$).

---

## 3. Stability of ODEs and Methods

### ODE stability

An ODE is **stable** if small perturbations to initial conditions remain bounded for all $t > t_0$. For $\dot{y} = \lambda y$: stable when $\lambda < 0$ (solution decays), unstable when $\lambda > 0$ (solution grows).

### Amplification factor $G$

For the test equation $\dot{y} = \lambda y$ ($\lambda < 0$), each method produces $y_{n+1} = G\,y_n$. The method is stable when $|G| \leq 1$.

| Method | $G$ | Stable region |
|--------|-----|---------------|
| Explicit Euler | $1 + \lambda\,\Delta t$ | $\|1 + \lambda\,\Delta t\| \leq 1$; for $\lambda = -a$: $\Delta t \leq 2/a$ |
| Implicit Euler | $\dfrac{1}{1 - \lambda\,\Delta t}$ | All $\text{Re}(\lambda) < 0$ (unconditional) |
| Implicit Trapezoid | $\dfrac{1 + \lambda\,\Delta t/2}{1 - \lambda\,\Delta t/2}$ | All $\text{Re}(\lambda) < 0$ (unconditional) |
| Explicit RK methods | (more complex) | Conditional only |

### Richardson method (symmetric, but unstable)

$$\frac{y_{n+1} - y_{n-1}}{2\,\Delta t} \approx g(t_n, y_n)$$

This is 2nd order in $\Delta t$, but is **unconditionally unstable** for ODEs like $\dot{y} = -y$ - for any $\Delta t$ the numerical solution diverges. Not useful in practice.

---

## 4. Convergence, Consistency, and Lax

**Convergence:** the numerical solution approaches the exact solution as $\Delta t \to 0$.

**Consistency:** the exact solution satisfies the numerical scheme in the limit $\Delta t \to 0$.

**Lax Equivalence Theorem:** for a well-posed linear IVP/BVP and a consistent discretisation,

$$\text{stability} \iff \text{convergence}$$

Both explicit and implicit Euler are consistent, so they converge for sufficiently small $\Delta t$.

---

## 5. Systems of ODEs

Introduce state vector $\mathbf{Z} = (z_1, z_2, \ldots)^\top$ and vector field $G(t, \mathbf{Z})$. Apply any scalar method componentwise.

**Predator-prey (Lotka-Volterra), lecture parameters:**

$$\dot{x} = ax - bxy, \quad \dot{y} = -cy + dxy$$

with $a = 1.2$, $b = 0.6$, $c = 0.8$, $d = 0.3$, $x_0 = 2$, $y_0 = 1$, $\Delta t = 0.01$, $t_\text{max} = 30$.

$x$ = prey, $y$ = predator. Solutions are periodic orbits. Large $\Delta t$ breaks the orbit (explicit Euler becomes unstable).

```python
import numpy as np

prey_growth_rate = 1.2
predator_prey_interaction_prey = 0.6
predator_death_rate = 0.8
predator_prey_interaction_predator = 0.3

def system_derivative(time: float, state: np.ndarray) -> np.ndarray:
    prey, predator = state
    dprey = prey_growth_rate * prey - predator_prey_interaction_prey * prey * predator
    dpredator = (-predator_death_rate * predator
                 + predator_prey_interaction_predator * prey * predator)
    return np.array([dprey, dpredator])

number_of_steps = int(30.0 / 0.01)
state = np.array([2.0, 1.0])
for step_index in range(number_of_steps):
    state = state + 0.01 * system_derivative(0.0, state)
```

### Reducing a 2nd-order ODE

For $\ddot{y} = F(t, y, \dot{y})$, set $z_1 = y$, $z_2 = \dot{y}$:

$$\dot{z}_1 = z_2, \quad \dot{z}_2 = F(t, z_1, z_2)$$

Then solve as a 2-component system with any ODE method.

```python
def second_order_system(time: float, state: np.ndarray) -> np.ndarray:
    position, velocity = state
    acceleration = forcing_function(time, position, velocity)
    return np.array([velocity, acceleration])
```

---

## 6. Numerical Integration via ODE

To compute $I = \int_{t_0}^{T} f(t)\,dt$, define $y(t)$ by:

$$\frac{dy}{dt} = f(t), \quad y(t_0) = 0 \implies y(T) = I$$

Apply any ODE solver; $y(T)$ gives the integral. Order of the integral estimate matches the order of the ODE solver used.

```python
def integrand_as_ode(time: float, current_value: float) -> float:
    return f(time)   # f is the function to integrate

time_values, solution_values = explicit_euler_method(
    integrand_as_ode, initial_value=0.0, time_start=t_start,
    time_end=t_end, time_step=delta_t
)
integral_estimate = solution_values[-1]
```

---

## 7. PDE Schemes (Heat Equation)

Heat equation: $\dfrac{\partial u}{\partial t} = \alpha \dfrac{\partial^2 u}{\partial x^2}$

Define $r = c = \dfrac{\alpha\,\Delta t}{\Delta x^2}$ (the diffusion number / Fourier number).

| Scheme | Update | GTE | Stable? |
|--------|--------|-----|---------|
| **FTCS** (explicit) | $u_i^{n+1} = u_i^n + r\!\left(u_{i+1}^n - 2u_i^n + u_{i-1}^n\right)$ | $O(\Delta t + \Delta x^2)$ | Conditional: $r \leq \tfrac{1}{2}$ |
| **BTCS** (implicit) | $-c\,u_{i-1}^{n+1} + (1+2c)u_i^{n+1} - c\,u_{i+1}^{n+1} = u_i^n$ | $O(\Delta t + \Delta x^2)$ | Unconditional |
| **Richardson** | $\dfrac{u_i^{n+1} - u_i^{n-1}}{2\Delta t} = \alpha\,\dfrac{u_{i+1}^n - 2u_i^n + u_{i-1}^n}{\Delta x^2}$ | $O(\Delta t^2 + \Delta x^2)$ | Unconditionally **unstable** |

**FTCS stability condition:**

$$r = \frac{\alpha\,\Delta t}{\Delta x^2} \leq \frac{1}{2} \iff \Delta t \leq \frac{\Delta x^2}{2\alpha}$$

For fine grids (small $\Delta x$), this forces very small $\Delta t$ - the key disadvantage of FTCS.

---

## 8. Boundary Conditions

### Dirichlet

Fix $u$ at boundary nodes directly. In the BTCS matrix:

```python
coefficient_matrix[0, 0] = 1.0        # left boundary row: u_0 = u_left
coefficient_matrix[-1, -1] = 1.0      # right boundary row: u_N = u_right
right_hand_side[0] = left_temperature
right_hand_side[-1] = right_temperature
```

### Neumann ($\partial u / \partial x = 0$ at $x = L$, insulated end)

Use the ghost/imaginary point method: $u_{N} = u_{N-2}$. This modifies the last interior row of the BTCS matrix from $[-c,\ 1+2c,\ -c]$ to $[-2c,\ 1+2c]$. For FTCS at the last interior node:

$$u_{N-1}^{n+1} = u_{N-1}^n + 2r\!\left(u_{N-2}^n - u_{N-1}^n\right)$$

---

## 9. FTCS and BTCS Code

### FTCS loop

```python
stability_parameter = diffusivity * time_step / spatial_step ** 2   # must be <= 0.5

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
```

### BTCS matrix setup and solve (lecture §42.5 — use `inv` + `matmul`)

```python
import numpy as np

diffusion_number = diffusivity * time_step / spatial_step ** 2
coefficient_matrix = np.zeros((number_of_spatial_nodes, number_of_spatial_nodes))
coefficient_matrix[0, 0] = 1.0
coefficient_matrix[-1, -1] = 1.0
for node_index in range(1, number_of_spatial_nodes - 1):
    coefficient_matrix[node_index, node_index - 1] = -diffusion_number
    coefficient_matrix[node_index, node_index]     =  1 + 2 * diffusion_number
    coefficient_matrix[node_index, node_index + 1] = -diffusion_number

inverse_matrix = np.linalg.inv(coefficient_matrix)   # invert once, reuse each step

# Each time step:
right_hand_side = u_profile.copy()
right_hand_side[0] = left_temperature
right_hand_side[-1] = right_temperature
u_profile = np.matmul(inverse_matrix, right_hand_side)
```

---

## 10. Gaussian Elimination

Solves $A\mathbf{x} = \mathbf{b}$ from the augmented matrix $M = [A \mid \mathbf{b}]$ via in-place triangularisation then back substitution. Lecture §42.4:

```python
import numpy as np

def gaussian_elimination(augmented_matrix: np.ndarray) -> np.ndarray:
    """Solve Ax = b via Gaussian elimination on the augmented matrix [A|b].

    Args:
        augmented_matrix: Shape (n, n+1). Last column is b. Modified in place.

    Returns:
        Solution vector x of length n.
    """
    number_of_rows = augmented_matrix.shape[0]
    number_of_cols = augmented_matrix.shape[1]

    # Forward elimination (triangularisation)
    for pivot_row in range(number_of_rows - 1):
        for target_row in range(pivot_row + 1, number_of_rows):
            coefficient = augmented_matrix[target_row, pivot_row] / augmented_matrix[pivot_row, pivot_row]
            for col_index in range(pivot_row, number_of_cols):
                augmented_matrix[target_row, col_index] -= augmented_matrix[pivot_row, col_index] * coefficient

    # Back substitution
    solution = np.zeros(number_of_rows)
    for row_index in range(number_of_rows - 1, -1, -1):
        solution[row_index] = augmented_matrix[row_index, number_of_cols - 1]
        for col_index in range(row_index + 1, number_of_cols - 1):
            solution[row_index] -= augmented_matrix[row_index, col_index] * solution[col_index]
        solution[row_index] /= augmented_matrix[row_index, row_index]

    return solution
```

**Thomas algorithm:** for tridiagonal systems specifically, an $O(n)$ algorithm exists (versus $O(n^3)$ for general Gaussian elimination). The lecture mentions it but does not require its implementation - use `numpy.linalg.inv` + `matmul` per §42.5.

---

## 11. 2D Laplace and Liebmann's Method

**2D Laplace equation:** $\nabla^2 u = \dfrac{\partial^2 u}{\partial x^2} + \dfrac{\partial^2 u}{\partial y^2} = 0$

**Finite difference (uniform $\Delta x = \Delta y$):**

$$u_{i,j} = \frac{u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1}}{4}$$

**Liebmann's method (two-array, lecture §46.4):** compute all $u^\text{new}$ from $u^\text{old}$, then replace. Convergence tolerance $\varepsilon = 10^{-4}$.

```python
convergence_tolerance = 1e-4

for iteration_index in range(maximum_iterations):
    u_new = u_grid.copy()
    for row_index in range(1, number_of_rows - 1):
        for col_index in range(1, number_of_cols - 1):
            u_new[row_index, col_index] = (
                u_grid[row_index + 1, col_index]
                + u_grid[row_index - 1, col_index]
                + u_grid[row_index, col_index + 1]
                + u_grid[row_index, col_index - 1]
            ) / 4.0
    maximum_change = np.amax(np.abs(u_new - u_grid))
    u_grid = u_new.copy()
    if maximum_change < convergence_tolerance:
        break
```

Convergence is guaranteed for Dirichlet BCs by the maximum principle for elliptic equations.

---

## 12. Monte Carlo Integration

$$\hat{I} = (b - a)\,\overline{f}, \quad \overline{f} = \frac{1}{N}\sum_{j=1}^{N} f(x_j), \quad x_j \sim U[a, b]$$

**One-sigma error estimate (lecture §32.4):**

$$\sigma_{\hat{I}} = (b - a)\sqrt{\frac{\overline{f^2} - \overline{f}^{\,2}}{N}}$$

**Order:** $O(N^{-1/2})$, or equivalently $O(\langle\Delta x\rangle^{1/2})$. Much worse than deterministic methods for 1D, but the order is **dimension-independent** - the key advantage for high-dimensional integrals.

```python
import numpy as np

def monte_carlo_integrate(
    integrand, lower_bound: float, upper_bound: float, number_of_samples: int
) -> tuple[float, float]:
    interval_length = upper_bound - lower_bound
    sample_points = np.random.uniform(lower_bound, upper_bound, number_of_samples)
    function_values = integrand(sample_points)
    mean_f = np.mean(function_values)
    mean_f_squared = np.mean(function_values ** 2)
    estimate = interval_length * mean_f
    one_sigma_error = interval_length * np.sqrt(
        (mean_f_squared - mean_f ** 2) / number_of_samples
    )
    return estimate, one_sigma_error
```

---

## 13. Stochastic Methods

### Wiener process (Brownian motion)

Discrete update (exact):

$$W_{n+1} = W_n + \sqrt{\Delta t}\,\xi_n, \quad \xi_n \sim \mathcal{N}(0, 1)$$

Properties: $\langle W(t)\rangle = 0$, $\text{Var}[W(t)] = t$.

### Ornstein-Uhlenbeck process (lecture §38.6.1)

$$V_{n+1} = (1 - k\,\Delta t)\,V_n + \sqrt{\Delta t}\,\xi_n$$

Mean-reverting: fluctuates around $V = 0$ with restoring force $-kV$. No drift parameter $\mu$ in the lecture version.

### General Langevin SDE (Euler-Maruyama)

For $dV = f(V)\,dt + \sigma\,dW$:

$$V_{n+1} = V_n + f(V_n)\,\Delta t + \sigma\sqrt{\Delta t}\,\xi_n$$

```python
import numpy as np

def wiener_and_ou_step(
    current_velocity: float,
    current_wiener: float,
    time_step: float,
    mean_reversion_rate: float,
    rng: np.random.Generator,
) -> tuple[float, float]:
    noise = rng.standard_normal()
    next_wiener = current_wiener + np.sqrt(time_step) * noise
    next_velocity = (1 - mean_reversion_rate * time_step) * current_velocity + np.sqrt(time_step) * noise
    return next_velocity, next_wiener
```

### Gaussian random numbers

Generated from uniform random numbers via the Box-Muller transform or `np.random.normal()` / `rng.standard_normal()`. A Gaussian with mean $\mu$ and variance $\sigma^2$: use $\mu + \sigma \cdot \xi$ where $\xi \sim \mathcal{N}(0,1)$.

---

## 14. First-Passage Time (Numerical)

Run the OU (or other) simulation. At each step, check if $V \geq b$ (threshold). Record $\tau = t$ when the threshold is first crossed. Average over $N$ walkers:

$$\langle\tau\rangle \approx \frac{1}{N}\sum_{j=1}^{N} \tau_j, \quad \text{SE} = \frac{\sigma_\tau}{\sqrt{N}}$$

Choose $N$ so that $\text{SE}/\langle\tau\rangle \lesssim 1\%$ for two significant figures.

```python
import numpy as np

def simulate_first_passage(
    initial_velocity: float,
    threshold: float,
    mean_reversion_rate: float,
    time_step: float,
    maximum_time: float,
    rng: np.random.Generator,
) -> float:
    current_velocity = initial_velocity
    elapsed_time = 0.0
    while elapsed_time < maximum_time:
        if current_velocity >= threshold:
            return elapsed_time
        current_velocity = (
            (1 - mean_reversion_rate * time_step) * current_velocity
            + np.sqrt(time_step) * rng.standard_normal()
        )
        elapsed_time += time_step
    return maximum_time   # threshold not reached: return max_time as a sentinel

number_of_walkers = 1000
rng = np.random.default_rng(42)
passage_times = np.array([
    simulate_first_passage(0.0, 1.0, 0.5, 0.01, 100.0, rng)
    for _ in range(number_of_walkers)
])
mean_passage_time = np.mean(passage_times)
standard_error = np.std(passage_times) / np.sqrt(number_of_walkers)
```

---

## 15. Quick Formula Index

| Quantity | Formula |
|----------|---------|
| FTCS stability bound | $r = \alpha\Delta t / \Delta x^2 \leq 1/2$ |
| Explicit Euler stability | $\Delta t \leq 2/a$ for $\dot{y} = -ay$ |
| MC error | $\sigma = (b-a)\sqrt{(\overline{f^2}-\overline{f}^2)/N}$ |
| MC order | $O(N^{-1/2})$ |
| Liebmann tolerance | $\varepsilon = 10^{-4}$ |
| OU update | $V_{n+1} = (1-k\Delta t)V_n + \sqrt{\Delta t}\,\xi$ |
| Wiener update | $W_{n+1} = W_n + \sqrt{\Delta t}\,\xi$ |
| BTCS GTE | $O(\Delta t + \Delta x^2)$ |
| Implicit trapezoid closed form | $y_{n+1} = \dfrac{y_n(1 - a\Delta t/2) + \Delta t\,b(t_n + \Delta t/2)}{1 + a\Delta t/2}$ |
| Implicit Euler closed form | $y_{n+1} = \dfrac{y_n + \Delta t\,b\,t_{n+1}}{1 + a\Delta t}$ |
