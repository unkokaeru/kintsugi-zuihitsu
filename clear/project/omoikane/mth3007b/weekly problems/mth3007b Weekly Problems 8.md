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

Using the **[[Euler-Maruyama scheme|Euler-Maruyama method]]**, the discrete update is:

$$
V_{n+1} = (1 - k\,dt)\,V_n + \sqrt{dt}\,\xi_n, \quad \xi_n \sim \mathcal{N}(0, 1)
$$

The **[[First-passage time]]** $\tau$ is the time at which $V$ first reaches or exceeds the threshold $b$:

$$
\tau = \min\{t : V(t) \geq b\}
$$

```python
import numpy as np

mean_reversion_rate = 3.0
threshold = 1.35
time_step = 0.001
max_time = 1000.0
rng = np.random.default_rng(0)
decay_factor = 1.0 - mean_reversion_rate * time_step

velocity = -0.5
elapsed_time = 0.0

while elapsed_time < max_time:
    if velocity >= threshold:
        print(f"First-passage time: tau = {elapsed_time:.3f} s")
        break
    velocity = decay_factor * velocity + np.sqrt(time_step) * rng.standard_normal()
    elapsed_time += time_step
else:
    print("Threshold not reached within max_time")
```

The OU process fluctuates around its mean $V = 0$ (since there is no external force term here) and occasionally makes large excursions. The first-passage time is a random variable - run the cell again with a different seed to get a different $\tau$.

---

## 8.2. Mean First-Passage Time Averaged Over Many Walkers

> [!question]
> Estimate the **mean first-passage time** $\langle \tau \rangle$ to threshold $V = 1.35$ by averaging over many independent OU realisations. Choose $N$ large enough to achieve approximately 2 significant figures of accuracy.

To achieve 2 significant figures, we need the **standard error** $\sigma_\tau / \sqrt{N}$ to be smaller than $\sim 0.5\%$ of $\langle \tau \rangle$. Starting with $N = 1000$ walkers and adjusting based on the observed standard error is a practical approach.

```python
import numpy as np

def first_passage_ou(
    mean_reversion_rate: float,
    initial_velocity: float,
    threshold: float,
    time_step: float,
    max_time: float,
    seed: int,
) -> float:
    """Simulate one OU walker and return its first-passage time."""
    rng = np.random.default_rng(seed)
    decay_factor = 1.0 - mean_reversion_rate * time_step
    velocity = initial_velocity
    elapsed_time = 0.0
    while elapsed_time < max_time:
        if velocity >= threshold:
            return elapsed_time
        velocity = decay_factor * velocity + np.sqrt(time_step) * rng.standard_normal()
        elapsed_time += time_step
    return max_time  # cap at max_time if threshold not reached

mean_reversion_rate = 3.0
threshold = 1.35
time_step = 0.001
max_time = 1000.0
number_of_walkers = 1000
master_rng = np.random.default_rng(42)

passage_times = np.array([
    first_passage_ou(
        mean_reversion_rate, -0.5, threshold, time_step, max_time,
        int(master_rng.integers(2 ** 32))
    )
    for _ in range(number_of_walkers)
])

mean_passage_time = passage_times.mean()
standard_error = passage_times.std() / np.sqrt(number_of_walkers)
print(f"Mean tau = {mean_passage_time:.2f} s")
print(f"Standard error = {standard_error:.2f} s")
print(f"Relative SE = {standard_error / mean_passage_time * 100:.1f}%")
print(f"95% CI: ({mean_passage_time - 2*standard_error:.2f}, {mean_passage_time + 2*standard_error:.2f})")
```

To assess accuracy: the standard error $\sigma/\sqrt{N}$ decreases as $O(N^{-1/2})$. Quadrupling $N$ halves the SE. For 2 significant figures, aim for relative SE $\lesssim 1\%$. If the relative SE is too large, increase $N$.

Note that walkers which do not reach the threshold within $t_{\max}$ are capped - if many walkers are capped, the mean will be underestimated. Choose $t_{\max}$ large enough that very few walkers are capped (check by counting `times == tmax`).

```python
# Diagnostics
number_capped = np.sum(passage_times == max_time)
print(f"Walkers capped at max_time: {number_capped} / {number_of_walkers}")
```
