# MTH3007b Weekly Problems 7

> **Original Documents**: [[mth3007b weekly problem sheet 7.pdf|Problem Sheet]] / [[mth3007b weekly problem sheet 7 solutions.pdf|Provided Solutions]]
>
> **Vibes**: ...
>
> **Used Techniques**:
>   - ...

---

## 7.1. Monte Carlo Integration

> [!question]
> Use **Monte Carlo integration** to estimate $\displaystyle\int_0^1 x^2\,dx$ with $N = 1000$ random samples. Report the estimate and its error.

**[[Monte Carlo integration]]** estimates $\displaystyle\int_a^b f(x)\,dx \approx (b - a)\,\langle f \rangle$ where $\langle f \rangle$ is the sample mean of $f$ evaluated at $N$ uniformly random points in $[a, b]$.

The estimate and its standard error are:

$$
\hat{I} = (b - a)\,\overline{f}, \quad \sigma_{\hat{I}} = (b - a)\sqrt{\frac{\overline{f^2} - \overline{f}^2}{N}}
$$

where $\overline{f} = \dfrac{1}{N}\sum_{j=1}^N f(x_j)$ and $\overline{f^2} = \dfrac{1}{N}\sum_{j=1}^N f(x_j)^2$.

The exact value is $\displaystyle\int_0^1 x^2\,dx = \left[\frac{x^3}{3}\right]_0^1 = \frac{1}{3} \approx 0.3333$.

```python
import numpy as np

N = 1000
np.random.seed(0)
x = np.random.uniform(0, 1, N)
f = x**2

F = (1 - 0) * np.mean(f)
error = (1 - 0) * np.sqrt((np.mean(f**2) - np.mean(f)**2) / N)
print(f"F = {F:.4f}, error = {error:.4f}, exact = 0.3333")
```

Expected output: $F \approx 0.3333$ with error $\approx 0.0083$ (varies with seed). The error is of order $1/\sqrt{N} \approx 0.032$; the prefactor depends on the variance of $f$.

---

## 7.2. Error Scaling for Monte Carlo: $O(N^{-1/2})$

> [!question]
> Verify numerically that the Monte Carlo error scales as $O(N^{-1/2})$ by running the estimator for several values of $N$.

The **[[Monte Carlo error scaling]]** is:

$$
\sigma_{\hat{I}} \propto N^{-1/2}
$$

This is a consequence of the central limit theorem. Doubling $N$ reduces the error by $\sqrt{2} \approx 1.41$, regardless of the dimension of the integral.

```python
import numpy as np

np.random.seed(42)
exact = 1.0 / 3.0

print(f"{'N':>8}  {'Estimate':>10}  {'Error (SE)':>12}  {'|estimate - exact|':>20}")
for N in [100, 1000, 10000, 100000]:
    x = np.random.uniform(0, 1, N)
    f = x**2
    F = np.mean(f)
    se = np.sqrt((np.mean(f**2) - np.mean(f)**2) / N)
    print(f"{N:>8}  {F:>10.5f}  {se:>12.5f}  {abs(F - exact):>20.5f}")
```

The standard error column should decrease by a factor of $\approx \sqrt{10} \approx 3.16$ each time $N$ increases by a factor of 10, confirming $O(N^{-1/2})$ convergence.

---

## 7.3. Wiener Process Simulation

> [!question]
> Implement a **Wiener process** simulation and plot 100 independent realisations.

A **[[Wiener process]]** (standard Brownian motion) $W(t)$ satisfies:
- $W(0) = 0$
- Increments $W(t + dt) - W(t)$ are independent and normally distributed with mean 0 and variance $dt$.

The discrete update rule is:

$$
W_{n+1} = W_n + \sqrt{dt}\,\xi_n, \quad \xi_n \sim \mathcal{N}(0, 1)
$$

The **[[Euler-Maruyama method]]** for a Wiener process is exact (not an approximation) because the process itself has independent increments.

```python
import numpy as np
import matplotlib.pyplot as plt

dt = 0.01; tmax = 10.0; Nsteps = int(round(tmax / dt))
Nwalkers = 100
np.random.seed(0)

W = np.zeros((Nwalkers, Nsteps + 1))
t = np.linspace(0, tmax, Nsteps + 1)

for walker in range(Nwalkers):
    for i in range(Nsteps):
        W[walker, i + 1] = W[walker, i] + np.sqrt(dt) * np.random.normal()

# Vectorised equivalent (more efficient):
# increments = np.sqrt(dt) * np.random.normal(size=(Nwalkers, Nsteps))
# W = np.concatenate([np.zeros((Nwalkers, 1)), np.cumsum(increments, axis=1)], axis=1)

plt.figure(figsize=(10, 5))
for walker in range(Nwalkers):
    plt.plot(t, W[walker, :], alpha=0.3, linewidth=0.5)
plt.xlabel('t'); plt.ylabel('W(t)')
plt.title('100 Wiener process realisations')
plt.tight_layout(); plt.show()

# Verify variance grows linearly in t
variance = np.var(W, axis=0)
print(f"Var[W(t=5)] = {variance[500]:.3f}, expected 5.000")
print(f"Var[W(t=10)] = {variance[-1]:.3f}, expected 10.000")
```

Key statistical properties visible from the plot:
- All paths start at $W(0) = 0$.
- The spread (standard deviation) of the ensemble grows as $\sqrt{t}$ (variance grows linearly).
- Individual paths are continuous but nowhere differentiable.
