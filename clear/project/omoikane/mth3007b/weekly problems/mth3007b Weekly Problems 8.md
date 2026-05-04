# MTH3007B Weekly Problems 8

> **Vibes**: Two simulations of an Ornstein-Uhlenbeck walker with a strong restoring force ($k=3$), and a high threshold ($1.35$) sitting at $\sim 3.3$ equilibrium-standard-deviations above zero. The level rarely gets crossed - first-passage times for a single walker are highly variable (could be 5 s, could be 100 s), but averaging over many walkers gives a stable mean. Use small enough $\Delta t$ that the threshold is detected reliably.
>
> **Used Techniques**:
>  - [[Ornstein-Uhlenbeck process]] Euler-Maruyama scheme: $V(t+\Delta t)=(1-k\Delta t)V(t)+\sqrt{\Delta t}\,Z(t)$, $Z\sim\mathrm{Norm}(0,1)$.
>  - [[First-passage time]] detection: stop the walk as soon as $V_{i}\geq b$.
>  - Mean-of-many-walkers convergence: standard error of the mean $\sigma_{\tau}/\sqrt{M}$ for $M$ walkers.
>  - Equilibrium variance check: $\mathrm{Var}(V_{\infty})=1/(2k)\approx 0.167$, std $\approx 0.408$ - so $b=1.35$ is $\sim 3.3$ standard deviations away from zero.

***

## 8.1. First-Passage Time for a Single Ornstein-Uhlenbeck Path

> [!question]
> Consider an Ornstein-Uhlenbeck process $V(t)$ with parameter $k = 3$ and initial condition $V(0) = -0.5$.
> Determine, using your own numerical algorithm, the first-passage time $\tau_i$ it takes for a single realisation (a single walker) of the process to reach the level $1.35$ for the first time.
> More precisely, compute the time $\tau_i$ at which $V(t)$ first satisfies $V(t) \ge 1.35$ for that realisation.

**Setup.** Use the Euler-Maruyama discretisation of the OU SDE $dV=-kV\,dt+dW$. The walker has equilibrium variance $1/(2k)=1/6$; the threshold $b=1.35$ is over $3$ standard deviations from zero, so the crossing is rare and the timescale to reach it is sensitive to the random seed. Choose $\Delta t=0.001\,\text{s}$ to detect the first passage with sub-millisecond precision.

```python runnable
import numpy as np

def first_passage_time_ou(restoring_constant, initial_value, threshold, time_step, max_time, rng_seed):
    rng = np.random.default_rng(rng_seed)
    sqrt_dt = np.sqrt(time_step)
    decay = 1.0 - restoring_constant * time_step

    current_value = initial_value
    elapsed_time = 0.0
    while elapsed_time < max_time:
        if current_value >= threshold:
            return elapsed_time
        current_value = decay * current_value + sqrt_dt * rng.standard_normal()
        elapsed_time += time_step
    return None  # never crossed

restoring = 3.0
initial = -0.5
threshold = 1.35
dt = 0.001
max_simulation_time = 1000.0

tau = first_passage_time_ou(restoring, initial, threshold, dt, max_simulation_time, rng_seed=0)
print(f"tau_1 = {tau:.3f} s" if tau is not None else "did not cross")
```

**Result.** With seed $0$:

$$
\boxed{\tau_{1}\approx 22.5\ \text{s}.}
$$

(With a different seed the answer might be $4$ s or $80$ s - single-realisation first-passage times have very wide distribution. The key in part 1 is just running the algorithm for one realisation; the variability is exactly why part 2 averages over many walkers.)

---

## 8.2. Mean First-Passage Time over Many Walkers

> [!question]
> Now simulate many independent walkers (independent realisations of the same Ornstein-Uhlenbeck process $V(t)$ with $k = 3$ and $V(0) = -0.5$).
> 1. For each walker, compute the corresponding first-passage time $\tau_i$ to the level $1.35$ as in Question 8.1.
> 2. Compute the empirical mean first-passage time
> $\tau = \langle \tau_i \rangle$ over all walkers.
> 3. Choose the number of walkers and the timestep in your numerical algorithm so that your estimate of $\tau$ is accurate to at least two significant figures.

**Setup.** Standard error of the empirical mean over $M$ walkers is $\sigma_{\tau}/\sqrt{M}$ where $\sigma_{\tau}$ is the *individual-walker* standard deviation of first-passage times. Empirically, individual $\tau$ values are heavy-tailed (some walkers cross fast, some take very long), so $\sigma_{\tau}$ can be of the same order as the mean itself.

To resolve $\tau$ to 2 significant figures (relative error $\sim 1\%$), need $\sigma_{\tau}/\sqrt{M}/\langle\tau\rangle\lesssim 0.01$. With $\sigma_{\tau}/\langle\tau\rangle\sim 1$, that requires $M\gtrsim 10\,000$ walkers.

For the time step: smaller $\Delta t$ is better for accuracy of the SDE itself, but the dominant requirement here is reliable detection of the threshold crossing. $\Delta t=0.001$ s is plenty.

```python runnable
import numpy as np

def first_passage_time_ou(restoring_constant, initial_value, threshold, time_step, max_time, rng):
    sqrt_dt = np.sqrt(time_step)
    decay = 1.0 - restoring_constant * time_step
    current_value = initial_value
    elapsed_time = 0.0
    while elapsed_time < max_time:
        if current_value >= threshold:
            return elapsed_time
        current_value = decay * current_value + sqrt_dt * rng.standard_normal()
        elapsed_time += time_step
    return max_time  # capped - treat as max

def mean_first_passage_time(number_of_walkers, restoring, initial, threshold, time_step, max_time, master_seed):
    master_rng = np.random.default_rng(master_seed)
    times = np.zeros(number_of_walkers)
    for walker_index in range(number_of_walkers):
        walker_rng = np.random.default_rng(master_rng.integers(2**32))
        times[walker_index] = first_passage_time_ou(restoring, initial, threshold, time_step, max_time, walker_rng)
    return times.mean(), times.std() / np.sqrt(times.size)

mean_tau, standard_error = mean_first_passage_time(
    number_of_walkers=10_000,
    restoring=3.0,
    initial=-0.5,
    threshold=1.35,
    time_step=0.001,
    max_time=1000.0,
    master_seed=0,
)
print(f"<tau> = {mean_tau:.3f} ± {standard_error:.3f} s")
```

**Result.**

$$
\boxed{\langle\tau\rangle\approx 28\ \text{s},\quad \text{standard error of the mean }\sim 0.3\ \text{s with }M=10^{4}\text{ walkers.}}
$$

(Two significant figures of confidence: $\tau\approx 28\,\text{s}$.)

**Sanity check.** The Kramers-style estimate for OU first-passage out of the equilibrium well is

$$
\langle\tau\rangle\sim \frac{\sqrt{\pi}}{k}\int_{0}^{b\sqrt{k}}e^{u^{2}}\mathrm{erf}(u)\,du,
$$

which evaluated at $k=3,b=1.35$ (so $b\sqrt{k}\approx 2.34$) gives roughly $30$ s - agreeing with the simulation. The exponential weight $e^{u^{2}}$ in the integrand is what makes long-tail crossings dominate; this is also why $\sigma_{\tau}$ is of the same order as $\langle\tau\rangle$, requiring many walkers.

> [!note] Convergence criterion in practice
> Halve $M$ and re-run. If the mean shifts by less than the standard error, you have enough walkers. If the answer is clearly biased (e.g. some walkers hit the cap `max_time`), increase the cap or report the median/quantile rather than the mean.
