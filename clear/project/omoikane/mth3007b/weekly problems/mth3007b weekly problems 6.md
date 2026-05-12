# MTH3007b Weekly Problems 6

> **Original Documents**: [[mth3007b weekly problem sheet 6.pdf|Problem Sheet]] / [[mth3007b weekly problem sheet 6 solutions.pdf|Provided Solutions]]
>
> **Vibes**: ...
>
> **Used Techniques**:
>   - ...

---

> [!note]
> Some exercises for session 6 are posted on Blackboard (assessment section). The problems below cover the key session 6 content: implementing FTCS for the heat equation and demonstrating instability.

---

## 6.1. FTCS for the Heat Equation with Physical Parameters

> [!question]
> Implement the **FTCS** scheme for the 1D heat equation $\partial u/\partial t = \alpha\,\partial^2 u/\partial x^2$ with the following parameters: $L = 10$ cm, $\alpha = 0.835$ cm$^2$/s, Dirichlet boundary conditions $u(0, t) = 0$ and $u(L, t) = 0$, sinusoidal initial condition, $dx = 0.5$, $dt = 0.001$. Verify that $r \leq 0.5$.

The **[[FTCS scheme]]** update rule for an interior point $i$ at time step $n$ is:

$$
u_i^{n+1} = u_i^n + r\!\left(u_{i+1}^n - 2u_i^n + u_{i-1}^n\right), \quad r = \frac{\alpha\,dt}{dx^2}
$$

Boundary conditions are applied by fixing $u_0 = 0$ and $u_{N_x - 1} = 0$ at every time step (**[[Dirichlet boundary conditions]]**).

```python
import numpy as np
import matplotlib.pyplot as plt

L = 10.0; dx = 0.5; Nx = int(np.round(L / dx) + 1)
tmax = 1.0; dt = 0.001; Nt = int(np.round(tmax / dt) + 1)
alpha = 0.835
r = alpha * dt / dx**2
print(f"r = {r:.5f}  (must be <= 0.5 for stability)")

# Initial condition: sinusoidal, matching BC u(0)=u(L)=0
x = np.linspace(0, L, Nx)
u = np.sin(np.pi * x / L)
u[0] = 0.0; u[Nx - 1] = 0.0

plt.figure(figsize=(8, 4))
plt.plot(x, u, label='t=0', linestyle='--')

for it in range(Nt - 1):
    unext = np.zeros(Nx)
    unext[0] = u[0]; unext[Nx - 1] = u[Nx - 1]
    for i in range(1, Nx - 1):
        unext[i] = u[i] + r * (u[i + 1] - 2 * u[i] + u[i - 1])
    u = 1.0 * unext

plt.plot(x, u, label=f't={tmax}')
plt.xlabel('x (cm)'); plt.ylabel('u (temperature)')
plt.title('FTCS Heat Equation (stable, r <= 0.5)')
plt.legend(); plt.tight_layout(); plt.show()
```

With $\alpha = 0.835$, $dt = 0.001$, $dx = 0.5$:

$$
r = \frac{0.835 \times 0.001}{0.5^2} = \frac{0.000835}{0.25} = 0.00334 \ll 0.5
$$

The scheme is well within the stability limit. The sinusoidal mode decays exponentially in time.

---

## 6.2. Demonstrating FTCS Instability When $r > 0.5$

> [!question]
> What happens when the stability condition is violated ($r > 0.5$)? Demonstrate numerically by increasing $dt$ until instability occurs.

When $r > 0.5$, the coefficient of $u_{i,n}$ in the FTCS update is $1-2r < -1$, meaning the scheme amplifies errors rather than damping them. This produces wild oscillations that grow without bound and bear no resemblance to the true solution.

```python
import numpy as np
import matplotlib.pyplot as plt

L = 10.0; dx = 0.5; Nx = int(np.round(L / dx) + 1)
alpha = 0.835
x = np.linspace(0, L, Nx)

fig, axes = plt.subplots(1, 2, figsize=(12, 4))

for ax, dt, label in zip(axes, [0.001, 0.4], ['Stable (r=0.003)', 'Unstable (r=0.267...)']):
    r = alpha * dt / dx**2
    print(f"dt={dt}, r={r:.4f}")
    u = np.sin(np.pi * x / L)
    u[0] = 0.0; u[-1] = 0.0
    # run 10 steps
    for it in range(10):
        unext = np.zeros(Nx)
        unext[0] = u[0]; unext[-1] = u[-1]
        for i in range(1, Nx - 1):
            unext[i] = u[i] + r * (u[i + 1] - 2 * u[i] + u[i - 1])
        u = unext
    ax.plot(x, u)
    ax.set_title(f'{label}\ndt={dt}, r={r:.3f}')
    ax.set_xlabel('x'); ax.set_ylabel('u')

plt.tight_layout(); plt.show()
```

Note: for $dx = 0.5$ and $\alpha = 0.835$, the critical $dt$ is:

$$
dt_{\text{crit}} = \frac{dx^2}{2\alpha} = \frac{0.25}{2 \times 0.835} \approx 0.150 \text{ s}
$$

Any $dt > 0.150$ will cause instability. In the unstable case the solution rapidly exhibits alternating signs and grows exponentially.

The Richardson method (symmetric: use central time difference instead of forward) is **[[unconditionally unstable]]** for the heat equation for any $dt > 0$. This illustrates that symmetry in time discretisation does not guarantee stability; BTCS (backward time, centred space) is the implicit method that achieves unconditional stability.
