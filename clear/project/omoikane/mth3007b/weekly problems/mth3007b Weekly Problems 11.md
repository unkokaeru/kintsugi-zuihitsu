# MTH3007b Weekly Problems 11

> [!note]
> Session 11 is a revision session. The PDF instructs: retry all exercises from previous sessions, plus the following Chapra & Canale exercises. Stochastic ODEs are not included in the Chapra & Canale list but could be asked for the test.

---

## 11. Chapra & Canale Exercise List

The following exercises are recommended from Chapra & Canale *Numerical Methods for Engineers*:

### 1st Order ODEs (Chapter 25)

| Exercise | Type |
|----------|------|
| 25.1 | Solve a simple 1st order IVP numerically, compare methods |
| 25.3 | Apply Euler and higher-order methods to a decay ODE |
| 25.4 | Apply RK4 to a 1st order ODE, check convergence |
| 25.5 | Stiff ODE: compare explicit vs implicit Euler stability |
| 25.6 | Step-size control and error estimation |
| 25.17 | Numerical solution of a nonlinear 1st order ODE |
| 25.19 | System of 1st order ODEs from a physical model |
| 25.21 | Comparison of methods: accuracy and computational cost |

### Systems of 1st Order ODEs (Chapters 25, 28)

| Exercise | Type |
|----------|------|
| 25.7 | Predator-prey or coupled ODE system |
| 25.25 | Stiff system of ODEs |
| 28.10 | Boundary value problem reduced to system of ODEs |

### 2nd Order ODEs Reduced to 1st Order Systems (Chapter 25)

| Exercise | Type |
|----------|------|
| 25.16 | Second-order ODE: reduce to system, solve numerically |
| 25.18 | Oscillator or spring-mass system as 1st order system |
| 25.22 | Higher-order ODE reduction with initial conditions |

### 1D Monte Carlo Integration (Chapter 22)

| Exercise | Type |
|----------|------|
| 22.1 | MC estimate of a definite integral, assess error |
| 22.2 | Verify $O(N^{-1/2})$ error scaling |
| 22.3 | Comparison: MC integration vs quadrature rules |

### PDEs: FTCS and BTCS (Chapter 30)

| Exercise | Type |
|----------|------|
| 30.7 | 1D heat equation: FTCS implementation and stability |

### PDEs with Neumann BCs (Chapter 30)

| Exercise | Type |
|----------|------|
| 30.16 | 1D heat equation with insulated boundary (Neumann BC) |

---

## Revision Recap by Block

### Block A: ODEs

**RK4 template** - the pattern to memorise:

```python
import numpy as np

def rk4_step(g, t: float, y: float, time_step: float) -> float:
    """Advance one step using the classical fourth-order Runge-Kutta method."""
    k1 = g(t, y)
    k2 = g(t + time_step / 2, y + time_step * k1 / 2)
    k3 = g(t + time_step / 2, y + time_step * k2 / 2)
    k4 = g(t + time_step, y + time_step * k3)
    return y + time_step / 6 * (k1 + 2 * k2 + 2 * k3 + k4)
```

For **systems**, $y$ becomes a numpy array `Z` and $g$ returns an array. The step function is identical.

**Implicit Euler** for $\dot{y} = bt - ay$:

$$
y_{n+1} = \frac{y_n + dt \cdot b \cdot t_{n+1}}{1 + a \cdot dt}
$$

**Order summary:**

| Method | Order | Stable |
|--------|-------|--------|
| Explicit Euler | 1 | Conditional ($\|1+\lambda dt\| \leq 1$) |
| Implicit Euler | 1 | Unconditional |
| Ralston | 2 | Conditional |
| Implicit Trapezoid | 2 | Unconditional |
| RK4 | 4 | Conditional |

---

### Block B: PDEs

**FTCS** - explicit, conditional stability $r \leq 1/2$:

$$
u_i^{n+1} = u_i^n + r\!\left(u_{i+1}^n - 2u_i^n + u_{i-1}^n\right), \quad r = \frac{\alpha\,dt}{dx^2}
$$

**BTCS** - implicit, unconditionally stable, requires solving $A\mathbf{u}^{n+1} = \mathbf{u}^n$:

$$
-c\,u_{i-1}^{n+1} + (1+2c)\,u_i^{n+1} - c\,u_{i+1}^{n+1} = u_i^n, \quad c = \frac{\alpha\,dt}{dx^2}
$$

**Neumann BC** (insulated end, $du/dx = 0$ at $x = L$): use imaginary point $u_{N_x} = u_{N_x-2}$, replacing $-c$ and $-c$ in the last row by $-2c$.

**Liebmann** (2D Laplace steady state):

$$
u_{i,j} = \frac{u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1}}{4}
$$

iterate until $\max|u^{\text{new}} - u^{\text{old}}| < \varepsilon$.

---

### Block C: Stochastic

**Wiener process** (Euler-Maruyama, exact):

$$
W_{n+1} = W_n + \sqrt{dt}\,\xi_n, \quad \xi_n \sim \mathcal{N}(0,1)
$$

**Ornstein-Uhlenbeck process**:

$$
V_{n+1} = (1 - k\,dt)\,V_n + \sqrt{dt}\,\xi_n
$$

**First-passage time**: run the OU loop, record elapsed time when $V \geq b$, average over $N$ walkers.

**Monte Carlo integration**:

$$
\hat{I} = (b-a)\,\overline{f}, \quad \sigma_{\hat{I}} = (b-a)\sqrt{\frac{\overline{f^2} - \overline{f}^2}{N}}, \quad \text{error} \propto N^{-1/2}
$$

---

## Worked Example: C25.19 (System of ODEs from Physical Model)

A typical Chapra & Canale system ODE problem: a spring-mass-damper described by $m\ddot{x} + c\dot{x} + kx = F(t)$. Reduce to a 1st order system with $z_1 = x$, $z_2 = \dot{x}$:

$$
\dot{z}_1 = z_2, \quad \dot{z}_2 = \frac{F(t) - c\,z_2 - k\,z_1}{m}
$$

```python
import numpy as np
import matplotlib.pyplot as plt

mass = 1.0
damping_coefficient = 0.5
spring_constant = 4.0
forcing_amplitude = 1.0
forcing_frequency = 2.0

def g_system(t: float, state: np.ndarray) -> np.ndarray:
    displacement, velocity = state
    forcing = forcing_amplitude * np.cos(forcing_frequency * t)
    d_displacement = velocity
    d_velocity = (forcing - damping_coefficient * velocity - spring_constant * displacement) / mass
    return np.array([d_displacement, d_velocity])

def rk4_step_vec(g, t: float, state: np.ndarray, time_step: float) -> np.ndarray:
    k1 = g(t, state)
    k2 = g(t + time_step / 2, state + time_step * k1 / 2)
    k3 = g(t + time_step / 2, state + time_step * k2 / 2)
    k4 = g(t + time_step, state + time_step * k3)
    return state + time_step / 6 * (k1 + 2 * k2 + 2 * k3 + k4)

time_step = 0.01
time_end = 20.0
number_of_steps = int(round(time_end / time_step))
t_values = np.zeros(number_of_steps + 1)
state_array = np.zeros((2, number_of_steps + 1))
t_values[0] = 0.0
state_array[:, 0] = np.array([0.0, 0.0])  # starts at rest

for step_index in range(number_of_steps):
    t_values[step_index + 1] = t_values[step_index] + time_step
    state_array[:, step_index + 1] = rk4_step_vec(
        g_system, t_values[step_index], state_array[:, step_index], time_step
    )

plt.plot(t_values, state_array[0, :], label='Displacement x(t)')
plt.xlabel('t')
plt.ylabel('x')
plt.legend()
plt.title('Spring-Mass-Damper (RK4)')
plt.show()
```
