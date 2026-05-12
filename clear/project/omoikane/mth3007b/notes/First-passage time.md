# First-passage time

For a stochastic process $X(t)$ and a threshold $b$ (or general boundary), the **first-passage time** is

$$
\tau=\inf\{t\geq 0:X(t)\geq b\}\;\;\text{(or }X(t)\in B\text{ for some set }B).
$$

The earliest time the process crosses the threshold. A random variable depending on the realisation.

## Numerical Computation

Run an [[Euler-Maruyama scheme]] simulation, monitor $X$ at each step, and stop the first time $X_{i}\geq b$. Record the elapsed time.

```python
def first_passage_time(initial_state, threshold, time_step, max_time, rng):
    state = initial_state
    elapsed = 0.0
    while elapsed < max_time:
        if state >= threshold:
            return elapsed
        # Update via Euler-Maruyama (e.g. for OU with k):
        state = (1 - k * time_step) * state + np.sqrt(time_step) * rng.standard_normal()
        elapsed += time_step
    return None  # never crossed within max_time
```

## Heavy-Tailed Distribution

For threshold-crossing problems where $b$ lies in the tail of the equilibrium distribution, the first-passage time is **heavy-tailed**: a few realisations cross quickly, but a long tail of realisations take much longer. Practical consequence:

- Single realisations have very high variance.
- Mean first-passage time $\langle\tau\rangle$ is well-defined but the standard deviation $\sigma_{\tau}$ is of the same order as $\langle\tau\rangle$ itself.
- To estimate $\langle\tau\rangle$ reliably, simulate **many** independent walkers ($M\sim 10^{4}$ for 2-significant-figure accuracy).

## Analytical Results

For the [[Ornstein-Uhlenbeck process]] $dV=-kV\,dt+dW$ starting at $V(0)=x_{0}<b$, the mean first-passage time to $b$ is

$$
\langle\tau\rangle=\frac{\sqrt{\pi}}{k}\int_{x_{0}\sqrt{k}}^{b\sqrt{k}}e^{u^{2}}\mathrm{erfc}(-u)\,du.
$$

For thresholds many equilibrium standard deviations from zero, this grows roughly as $\exp(b^{2}k)$ - the Kramers escape rate. For [[Wiener process]]-style processes (no restoring force), $\langle\tau\rangle$ from $x_{0}<b$ is *infinite* in the unbounded case (the walker drifts off in the wrong direction with positive probability).

## Applications

- Neuron firing models: $V$ is membrane voltage, $b$ is the firing threshold; $\tau$ is the inter-spike interval.
- Default times in finance: $V$ is firm value, $b$ is the default barrier.
- Chemical reaction times: escape from a metastable potential well.
- Ruin theory: time until accumulated losses reach a critical level.
