# MTH3007b Weekly Problems 4

> **Original Documents**: [[mth3007b weekly problem sheet 4.pdf|Problem Sheet]] / [[mth3007b weekly problem sheet 4 solutions.pdf|Provided Solutions]]
>
> **Vibes**: ...
>
> **Used Techniques**:
>   - ...

---

## 4.1. Isolating Variables in Linear and Nonlinear Equations

> [!question]
> Isolate $y$ in each of the following:
>
> 1. $x + y = 4$
> 2. $ax + by = c$
> 3. $ax + by = cy + dx + e$
> 4. $ax + by^2 = cy + dx + e$

**Part 1.** $x + y = 4$:

$$
y = 4 - x
$$

**Part 2.** $ax + by = c$:

$$
by = c - ax \implies y = \frac{c - ax}{b}
$$

**Part 3.** $ax + by = cy + dx + e$ - collect all $y$ terms on one side:

$$
by - cy = dx - ax + e \implies y(b - c) = (d - a)x + e
$$

$$
y = \frac{(d - a)x + e}{b - c}
$$

**Part 4.** $ax + by^2 = cy + dx + e$ - rearrange as a quadratic in $y$:

$$
by^2 - cy + (ax - dx - e) = 0 \implies by^2 - cy + (a - d)x - e = 0
$$

Applying the **[[quadratic formula]]**:

$$
y = \frac{c \pm \sqrt{c^2 - 4b\bigl[(a - d)x - e\bigr]}}{2b}
$$

This gives two branches; the physical one is selected by boundary/initial conditions.

---

## 4.2. Isolating the Next Step in Discrete Recurrences

> [!question]
> Isolate $y_{i+1}$ in each of the following:
>
> 1. $y_{i+1} + y_i = 4$
> 2. $\dfrac{y_{i+1} - y_i}{dt} = -a\,y_{i+1}$

**Part 1.** $y_{i+1} + y_i = 4$:

$$
y_{i+1} = 4 - y_i
$$

**Part 2.** $\dfrac{y_{i+1} - y_i}{dt} = -a\,y_{i+1}$ - multiply both sides by $dt$ and collect $y_{i+1}$:

$$
y_{i+1} - y_i = -a\,dt\,y_{i+1} \implies y_{i+1}(1 + a\,dt) = y_i
$$

$$
y_{i+1} = \frac{y_i}{1 + a\,dt}
$$

This is the **[[implicit Euler method]]** for the decay ODE $\dot{y} = -ay$.

---

## 4.3. Implicit Euler for a Polynomial-Forced ODE

> [!question]
> Apply implicit Euler to $\dot{z} = 4c_1 z - 8c_2 t^2$ and isolate $z_{i+1}$.

Using implicit Euler, $\dot{z}$ is approximated at $t_{i+1}$:

$$
\frac{z_{i+1} - z_i}{dt} = 4c_1\,z_{i+1} - 8c_2\,t_{i+1}^2
$$

Multiply through by $dt$ and collect $z_{i+1}$:

$$
z_{i+1} - z_i = dt\!\left(4c_1\,z_{i+1} - 8c_2\,t_{i+1}^2\right)
$$

$$
z_{i+1}(1 - 4c_1\,dt) = z_i - dt \cdot 8c_2\,t_{i+1}^2
$$

$$
\boxed{z_{i+1} = \frac{z_i - 8c_2\,dt\,(t_i + dt)^2}{1 - 4c_1\,dt}}
$$

where $t_{i+1} = t_i + dt$.

Note: if $c_1 > 0$, the denominator $1 - 4c_1\,dt$ can become zero or negative for large $dt$, but implicit Euler is still more stable than explicit for stiff problems.

---

## 4.4. Predator-Prey Model

> [!question]
> Implement the **Lotka-Volterra predator-prey** system with $a = 1.2$, $b = 0.6$, $c = 0.8$, $d = 0.3$, initial conditions $x(0) = 2$, $y(0) = 1$, $t_{\max} = 30$.

The **[[Lotka-Volterra equations]]** (predator-prey model) are:

$$
\dot{x} = ax - bxy \quad \text{(prey growth - predation)}
$$

$$
\dot{y} = -cy + dxy \quad \text{(predator death + predation benefit)}
$$

where $x$ = prey population, $y$ = predator population.

```python
import numpy as np
import matplotlib.pyplot as plt

a = 1.2; b = 0.6; c = 0.8; d = 0.3
t0 = 0.0; tmax = 30.0; dt = 0.001; y0 = np.array([2.0, 1.0])

def g(t, Z):
    x, y = Z
    return np.array([a*x - b*x*y, -c*y + d*x*y])

Nint = int(round((tmax - t0) / dt))
t = np.zeros(Nint + 1)
Z = np.zeros((2, Nint + 1))
t[0] = t0; Z[:, 0] = y0

for n in range(Nint):
    t[n + 1] = t[n] + dt
    Z[:, n + 1] = Z[:, n] + dt * g(t[n], Z[:, n])

plt.figure(figsize=(10, 4))
plt.subplot(1, 2, 1)
plt.plot(t, Z[0, :], label='Prey (x)')
plt.plot(t, Z[1, :], label='Predator (y)')
plt.xlabel('t'); plt.ylabel('Population'); plt.legend()
plt.title('Predator-Prey Dynamics')

plt.subplot(1, 2, 2)
plt.plot(Z[0, :], Z[1, :])
plt.xlabel('Prey (x)'); plt.ylabel('Predator (y)')
plt.title('Phase Plane')
plt.tight_layout(); plt.show()
```

The system exhibits periodic oscillations: prey increase, then predators increase (eating prey), then prey decrease, then predators decrease (starving), and the cycle repeats. In the phase plane, the trajectory forms a closed orbit.

---

## 4.5. Stability Concepts

> [!question]
> Define and distinguish between: **stability of an ODE**, **stability of a numerical method**, **convergence**, **consistency**, and **order of convergence**.

**[[Stability of an ODE]]**: A differential equation is stable if small perturbations to the initial condition remain bounded over time. For a linear ODE $\dot{y} = \lambda y$, the solution is stable if and only if $\text{Re}(\lambda) < 0$.

**[[Stability of a numerical method]]**: A method is stable if small perturbations in the numerical solution do not grow unboundedly as the time-stepping proceeds. The stability condition depends on the method and the step size. The **[[amplification factor]]** $G$ (ratio $y_{n+1}/y_n$ for the test equation $\dot{y} = \lambda y$) must satisfy $|G| \leq 1$ for stability:

- Explicit Euler: $G = 1 + \lambda\,dt$, so stability requires $|\!1 + \lambda\,dt\!| \leq 1$.
- Implicit Euler: $G = 1/(1 - \lambda\,dt)$, so $|G| < 1$ for all $\text{Re}(\lambda) < 0$ (unconditionally stable).

**[[Consistency]]**: A method is consistent if the truncation error goes to zero as $dt \to 0$. Equivalently, the discrete equations converge to the correct differential equation in the limit of fine resolution.

**[[Convergence]]**: A method is convergent if the numerical solution converges to the exact solution as $dt \to 0$. By the **[[Lax Equivalence Theorem]]**, for linear problems: consistency + stability $\iff$ convergence.

**[[Order of convergence]]**: The integer $p$ such that GTE $= O(dt^p)$. Methods with higher order require fewer steps to achieve the same accuracy.

| Method | Order | Stability |
|--------|-------|-----------|
| Explicit Euler | 1 | Conditional |
| Implicit Euler | 1 | Unconditional |
| Ralston | 2 | Conditional |
| Implicit Trapezoid | 2 | Unconditional |
| RK4 | 4 | Conditional |
