# First-Passage Time

The **first-passage time** $\tau$ of a stochastic process $X(t)$ to a threshold $b$ is defined as the first time the process reaches or exceeds $b$:

$$
\tau = \inf\{t \geq 0 : X(t) \geq b\}
$$

## Numerical Method

To estimate the mean first-passage time numerically:

1. Run an [[Euler-Maruyama scheme]] simulation of the process (e.g. the [[Ornstein-Uhlenbeck process]]).
2. At each time step, check whether $X \geq b$.
3. When the condition is met, record the elapsed time $t$ as $\tau$ for that walker.
4. Average $\tau$ over many independent simulations (walkers) to obtain the mean first-passage time $\langle \tau \rangle$.

## Python

```python runnable
import numpy as np

def first_passage_time_ou(
    initial_velocity: float,
    mean_reversion_rate: float,
    threshold: float,
    time_step: float,
    max_time: float,
    seed: int = 0,
) -> float | None:
    """Estimate the first-passage time for a single OU walker.

    Args:
        initial_velocity: Starting value V(0).
        mean_reversion_rate: Rate k > 0.
        threshold: Threshold b; simulation stops when V >= b.
        time_step: Time step dt for the Euler-Maruyama scheme.
        max_time: Maximum simulation time before giving up.
        seed: Random seed for reproducibility.

    Returns:
        First-passage time tau, or None if threshold not reached within max_time.
    """
    rng = np.random.default_rng(seed)
    velocity = initial_velocity
    current_time = 0.0
    while current_time < max_time:
        if velocity >= threshold:
            return current_time
        velocity = (
            (1 - mean_reversion_rate * time_step) * velocity
            + np.sqrt(time_step) * rng.standard_normal()
        )
        current_time += time_step
    return None


# Example: OU process with k=3.0, threshold=1.35
mean_reversion_rate = 3.0
threshold = 1.35
time_step = 0.001
max_time = 1000.0
tau = first_passage_time_ou(
    initial_velocity=-0.5,
    mean_reversion_rate=mean_reversion_rate,
    threshold=threshold,
    time_step=time_step,
    max_time=max_time,
    seed=0,
)
if tau is not None:
    print(f"tau = {tau:.3f}")
```

[[Euler-Maruyama scheme]] | [[Ornstein-Uhlenbeck process]] | [[Langevin equation]] | [[Wiener process]] | [[Stochastic differential equation]]
