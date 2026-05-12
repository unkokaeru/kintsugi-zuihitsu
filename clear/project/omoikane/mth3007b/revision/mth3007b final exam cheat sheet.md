# MTH3007b Final Exam Cheat Sheet

---

## 1. ODE Methods

| Method | Update Formula | Order | Stability |
|--------|---------------|-------|-----------|
| **Explicit Euler** | $y_{n+1} = y_n + dt\,g(t_n, y_n)$ | 1 | Conditional: $\|1 + \lambda\,dt\| \leq 1$ |
| **Implicit Euler** | $y_{n+1} = y_n + dt\,g(t_{n+1}, y_{n+1})$ | 1 | Unconditional |
| **Midpoint** | $k_1 = g(t_n,y_n)$; $y_{n+1} = y_n + dt\,g(t_n + dt/2,\, y_n + dt\,k_1/2)$ | 2 | Conditional |
| **Ralston** | $k_1 = g(t_n,y_n)$; $k_2 = g(t_n+\frac{2dt}{3}, y_n + \frac{2dt\,k_1}{3})$; $y_{n+1} = y_n + dt(\frac{k_1}{4} + \frac{3k_2}{4})$ | 2 | Conditional |
| **Implicit Trapezoid** | $y_{n+1} = y_n + \frac{dt}{2}[g(t_n,y_n) + g(t_{n+1},y_{n+1})]$ | 2 | Unconditional |
| **RK4** | $k_1=g(t_n,y_n)$; $k_2=g(t_n+\frac{dt}{2}, y_n+\frac{dt\,k_1}{2})$; $k_3=g(t_n+\frac{dt}{2}, y_n+\frac{dt\,k_2}{2})$; $k_4=g(t_n+dt, y_n+dt\,k_3)$; $y_{n+1}=y_n+\frac{dt}{6}(k_1+2k_2+2k_3+k_4)$ | 4 | Conditional |

For linear ODE $\dot{y} = bt - ay$:

- **Implicit Euler closed form:** $y_{n+1} = \dfrac{y_n + dt\,b\,t_{n+1}}{1 + a\,dt}$
- **Implicit Trapezoid closed form:** $y_{n+1} = \dfrac{y_n(1 - a\,dt/2) + dt\,b(t_n + dt/2)}{1 + a\,dt/2}$

---

## 2. Stability Analysis (Amplification Factor)

For the test equation $\dot{y} = \lambda y$ (with $\lambda < 0$ for stability of the ODE):

$$
y_{n+1} = G\,y_n
$$

A method is stable if $|G| \leq 1$.

| Method | Amplification factor $G$ | Stable region |
|--------|--------------------------|---------------|
| Explicit Euler | $1 + \lambda\,dt$ | $\|1 + \lambda\,dt\| \leq 1$ |
| Implicit Euler | $\dfrac{1}{1 - \lambda\,dt}$ | All $\text{Re}(\lambda) < 0$ (unconditional) |
| Implicit Trapezoid | $\dfrac{1 + \lambda\,dt/2}{1 - \lambda\,dt/2}$ | All $\text{Re}(\lambda) < 0$ (unconditional) |

For a real negative $\lambda = -a$ ($a > 0$), explicit Euler requires $dt \leq 2/a$.

---

## 3. Systems of ODEs

Introduce state vector $\mathbf{Z} = (z_1, z_2, \ldots)^\top$. Write:

$$
\dot{\mathbf{Z}} = G(t, \mathbf{Z})
$$

Apply any scalar ODE method componentwise. The step function is identical - just replace $y$ with $\mathbf{Z}$ and $g$ with $G$ returning a vector.

**Reduction of 2nd order ODE** $\ddot{y} = F(t, y, \dot{y})$: set $z_1 = y$, $z_2 = \dot{y}$:

$$
\dot{z}_1 = z_2, \quad \dot{z}_2 = F(t, z_1, z_2)
$$

---

## 4. Numerical Integration via ODE

To compute $I = \displaystyle\int_{t_0}^{T} f(t)\,dt$, define $y(t)$ with:

$$
\frac{dy}{dt} = f(t), \quad y(t_0) = 0 \implies y(T) = I
$$

Apply any ODE solver; result at $T$ is the integral estimate.

---

## 5. PDE Schemes

| Scheme | Update | Order (GTE) | Stability |
|--------|--------|-------------|-----------|
| **FTCS** (explicit) | $u_i^{n+1} = u_i^n + r(u_{i+1}^n - 2u_i^n + u_{i-1}^n)$, $r = \alpha dt/dx^2$ | $O(dt + dx^2)$ | Conditional: $r \leq 1/2$ |
| **BTCS** (implicit) | Solve $-c\,u_{i-1}^{n+1} + (1+2c)u_i^{n+1} - c\,u_{i+1}^{n+1} = u_i^n$, $c = \alpha dt/dx^2$ | $O(dt + dx^2)$ | Unconditional |
| **Richardson** (symmetric) | Centred time + centred space | $O(dt^2 + dx^2)$ | Unconditionally **unstable** |

---

## 6. FTCS Stability Condition

$$
r = \frac{\alpha\,dt}{dx^2} \leq \frac{1}{2} \iff dt \leq \frac{dx^2}{2\alpha}
$$

For small $dx$, this forces very small $dt$ (a severe constraint for fine spatial grids).

---

## 7. Boundary Conditions

**Dirichlet:** fix $u$ at boundary nodes. Applied by setting $A[0,0] = 1$, all other entries in row 0 zero, and $\text{rhs}[0] = u_L$ (similarly for right end).

**Neumann ($du/dx = 0$ at $x = L$, insulated end):** imaginary point method. The ghost node value is $u_{N_x} = u_{N_x - 2}$. This modifies the last interior row of $A$:

$$
\text{replace } [\ldots, -c, 1+2c, -c] \to [\ldots, -2c, 1+2c]
$$

In the FTCS scheme, the Neumann update at the last interior node becomes:

$$
u_{N_x - 1}^{n+1} = u_{N_x - 1}^n + 2r(u_{N_x - 2}^n - u_{N_x - 1}^n)
$$

---

## 8. Lax Equivalence Theorem

> For a well-posed linear PDE problem and a consistent discretisation: **stability $\iff$ convergence.**

In other words, a consistent method converges to the true solution as $dt, dx \to 0$ if and only if it is stable.

---

## 9. 2D Laplace and Liebmann's Method

**2D Laplace equation:** $\nabla^2 u = \dfrac{\partial^2 u}{\partial x^2} + \dfrac{\partial^2 u}{\partial y^2} = 0$

**Finite difference (uniform $dx = dy$):**

$$
u_{i,j} = \frac{u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1}}{4}
$$

**Liebmann iteration:** update each interior node using the above formula (Gauss-Seidel: use in-place updates). Repeat until:

$$
\max_{i,j}\bigl|u_{i,j}^{\text{new}} - u_{i,j}^{\text{old}}\bigr| < \varepsilon
$$

Convergence is guaranteed for Dirichlet BCs by the maximum principle for elliptic equations.

---

## 10. Monte Carlo Integration

$$
\hat{I} = (b - a)\,\overline{f}, \quad \overline{f} = \frac{1}{N}\sum_{j=1}^N f(x_j),\quad x_j \sim U[a,b]
$$

**Standard error:**

$$
\sigma_{\hat{I}} = (b - a)\sqrt{\frac{\overline{f^2} - \overline{f}^2}{N}}
$$

**Error scaling:** $\sigma \propto N^{-1/2}$. Quadrupling $N$ halves the error. This holds regardless of the dimension of the integral - the key advantage of MC for high-dimensional problems.

---

## 11. Stochastic Methods

**Wiener process** (discrete update, exact):

$$
W_{n+1} = W_n + \sqrt{dt}\,\xi_n, \quad \xi_n \sim \mathcal{N}(0,1)
$$

Properties: $\langle W(t) \rangle = 0$, $\text{Var}[W(t)] = t$.

**Ornstein-Uhlenbeck process** (Euler-Maruyama):

$$
V_{n+1} = (1 - k\,dt)\,V_n + \sqrt{dt}\,\xi_n
$$

Mean-reverting: fluctuates around $V = 0$ with restoring force $-kV$.

**General Langevin SDE** $dV = f(V)\,dt + \sigma\,dW$, Euler-Maruyama:

$$
V_{n+1} = V_n + f(V_n)\,dt + \sigma\sqrt{dt}\,\xi_n
$$

---

## 12. First-Passage Time (Numerical)

Run the OU (or other) simulation. At each step, check $V \geq b$. Record $\tau = t$ when threshold first crossed. Average over $N$ walkers:

$$
\langle\tau\rangle \approx \frac{1}{N}\sum_{j=1}^N \tau_j, \quad \text{SE} = \frac{\sigma_\tau}{\sqrt{N}}
$$

Choose $N$ such that $\text{SE}/\langle\tau\rangle \lesssim 1\%$ for 2 significant figures.

---

## 13. Python Quick Reference

### FTCS loop
```python
for it in range(Nt - 1):
    unext = u.copy()
    for i in range(1, Nx - 1):
        unext[i] = u[i] + r * (u[i+1] - 2*u[i] + u[i-1])
    u = unext
```

### BTCS matrix setup and solve
```python
import numpy as np
A = np.zeros((Nx, Nx))
A[0, 0] = 1.0; A[-1, -1] = 1.0
for i in range(1, Nx - 1):
    A[i, i-1] = -c; A[i, i] = 1 + 2*c; A[i, i+1] = -c
# Each step:
rhs = u.copy(); rhs[0] = u_L; rhs[-1] = u_R
u = np.linalg.solve(A, rhs)
```

### MC integration
```python
import numpy as np
x = np.random.uniform(a, b, N)
f = func(x)
I = (b - a) * np.mean(f)
err = (b - a) * np.sqrt((np.mean(f**2) - np.mean(f)**2) / N)
```

### Wiener / OU loop
```python
W = 0.0; V = V0
for i in range(Nsteps):
    xi = np.random.normal()
    W += np.sqrt(dt) * xi          # Wiener
    V = (1 - k*dt)*V + np.sqrt(dt)*xi  # OU
```

### Liebmann loop
```python
for iteration in range(max_iter):
    unew = u.copy()
    for i in range(1, Nx-1):
        for j in range(1, Ny-1):
            unew[i,j] = (u[i+1,j] + u[i-1,j] + u[i,j+1] + u[i,j-1]) / 4.0
    max_error = np.amax(np.abs(unew - u))
    u = unew.copy()
    if max_error < epsilon:
        break
```

### First-passage time
```python
V = V0; elapsed = 0.0
while elapsed < tmax:
    if V >= threshold:
        tau = elapsed; break
    V = (1 - k*dt)*V + np.sqrt(dt)*rng.standard_normal()
    elapsed += dt
```
