# MTH3007b Weekly Problems 8

> **Original Documents**: [[mth3007b weekly problem sheet 8.pdf|Problem Sheet]] / [[mth3007b weekly problem sheet 8 solutions.pdf|Provided Solutions]]
>
> **Vibes**: ...
>
> **Used Techniques**:
>   - ...

---

## 8.1. Single First-Passage Time for an Ornstein-Uhlenbeck Process

> [!question]
> Simulate an **Ornstein-Uhlenbeck process** with $k = 3$, $V(0) = -0.5$. Find the **first-passage time** to the threshold $V = 1.35$ for a single realisation.

The **[[Ornstein-Uhlenbeck process]]** (OU process) is a mean-reverting stochastic process. The **[[Langevin equation]]** with zero drift is:

$$
\frac{dV}{dt} = -kV + \xi(t)
$$

where $\xi(t)$ is Gaussian white noise with $\langle \xi(t) \rangle = 0$ and $\langle \xi(t)\xi(t') \rangle = \delta(t - t')$.

Using the **[[Euler-Maruyama method]]**, the discrete update is:

$$
V_{n+1} = (1 - k\,dt)\,V_n + \sqrt{dt}\,\xi_n, \quad \xi_n \sim \mathcal{N}(0, 1)
$$

The **[[first-passage time]]** $\tau$ is the time at which $V$ first reaches or exceeds the threshold $b$:

$$
\tau = \min\{t : V(t) \geq b\}
$$

```python
import numpy as np

k = 3.0; threshold = 1.35; dt = 0.001; tmax = 1000.0
rng = np.random.default_rng(0)
decay = 1.0 - k * dt

V = -0.5; elapsed = 0.0

while elapsed < tmax:
    if V >= threshold:
        print(f"First-passage time: tau = {elapsed:.3f} s")
        break
    V = decay * V + np.sqrt(dt) * rng.standard_normal()
    elapsed += dt
else:
    print("Threshold not reached within tmax")
```

The OU process fluctuates around its mean $V = 0$ (since there is no external force term here) and occasionally makes large excursions. The first-passage time is a random variable - run the cell again with a different seed to get a different $\tau$.

---

## 8.2. Mean First-Passage Time Averaged Over Many Walkers

> [!question]
> Estimate the **mean first-passage time** $\langle \tau \rangle$ to threshold $V = 1.35$ by averaging over many independent OU realisations. Choose $N$ large enough to achieve approximately 2 significant figures of accuracy.

To achieve 2 significant figures, we need the **standard error** $\sigma_\tau / \sqrt{N}$ to be smaller than $\sim 0.5\%$ of $\langle \tau \rangle$. Starting with $N = 1000$ walkers and adjusting based on the observed standard error is a practical approach.

```python
import numpy as np

def first_passage_ou(k, V0, threshold, dt, tmax, seed):
    rng = np.random.default_rng(seed)
    decay = 1.0 - k * dt
    V = V0; elapsed = 0.0
    while elapsed < tmax:
        if V >= threshold:
            return elapsed
        V = decay * V + np.sqrt(dt) * rng.standard_normal()
        elapsed += dt
    return tmax  # cap at tmax if threshold not reached

k = 3.0; threshold = 1.35; dt = 0.001; tmax = 1000.0
Nwalkers = 1000
master_rng = np.random.default_rng(42)

times = np.array([
    first_passage_ou(k, -0.5, threshold, dt, tmax,
                     int(master_rng.integers(2**32)))
    for walker in range(Nwalkers)
])

mean_tau = times.mean()
se = times.std() / np.sqrt(Nwalkers)
print(f"Mean tau = {mean_tau:.2f} s")
print(f"Standard error = {se:.2f} s")
print(f"Relative SE = {se/mean_tau*100:.1f}%")
print(f"95% CI: ({mean_tau - 2*se:.2f}, {mean_tau + 2*se:.2f})")
```

To assess accuracy: the standard error $\sigma/\sqrt{N}$ decreases as $O(N^{-1/2})$. Quadrupling $N$ halves the SE. For 2 significant figures, aim for relative SE $\lesssim 1\%$. If the relative SE is too large, increase $N$.

Note that walkers which do not reach the threshold within $t_{\max}$ are capped - if many walkers are capped, the mean will be underestimated. Choose $t_{\max}$ large enough that very few walkers are capped (check by counting `times == tmax`).

```python
# Diagnostics
capped = np.sum(times == tmax)
print(f"Walkers capped at tmax: {capped} / {Nwalkers}")
```
