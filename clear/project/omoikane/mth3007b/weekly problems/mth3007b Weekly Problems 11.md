# MTH3007b Weekly Problems 11

> **Original Documents**: [[mth3007b weekly problem sheet 11.pdf|Problem Sheet]] / [[mth3007b weekly problem sheet 11 solutions.pdf|Provided Solutions]]
>
> **Vibes**: …
>
> **Used Techniques**:
>   - …

---

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
def rk4_step(g, t, y, dt):
    k1 = g(t, y)
    k2 = g(t + dt/2, y + dt*k1/2)
    k3 = g(t + dt/2, y + dt*k2/2)
    k4 = g(t + dt, y + dt*k3)
    return y + dt/6 * (k1 + 2*k2 + 2*k3 + k4)
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

m = 1.0; c_damp = 0.5; k = 4.0; F0 = 1.0
omega = 2.0  # forcing frequency

def g_system(t, Z):
    z1, z2 = Z
    F = F0 * np.cos(omega * t)
    dz1 = z2
    dz2 = (F - c_damp * z2 - k * z1) / m
    return np.array([dz1, dz2])

def rk4_step_vec(g, t, Z, dt):
    k1 = g(t, Z)
    k2 = g(t + dt/2, Z + dt*k1/2)
    k3 = g(t + dt/2, Z + dt*k2/2)
    k4 = g(t + dt, Z + dt*k3)
    return Z + dt/6 * (k1 + 2*k2 + 2*k3 + k4)

dt = 0.01; tmax = 20.0
Nint = int(round(tmax / dt))
t = np.zeros(Nint + 1); Z = np.zeros((2, Nint + 1))
t[0] = 0.0; Z[:, 0] = np.array([0.0, 0.0])  # starts at rest

for n in range(Nint):
    t[n + 1] = t[n] + dt
    Z[:, n + 1] = rk4_step_vec(g_system, t[n], Z[:, n], dt)

plt.plot(t, Z[0, :], label='Displacement x(t)')
plt.xlabel('t'); plt.ylabel('x'); plt.legend()
plt.title('Spring-Mass-Damper (C&C style, RK4)')
plt.show()
```
