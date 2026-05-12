# Wiener Process

The **Wiener process** (also called Brownian motion) $W(t)$ is a continuous-time stochastic process with the following properties:

1. $W(0) = 0$
2. Increments are independent: $W(t) - W(s)$ is independent of $W(s) - W(r)$ for $r < s < t$
3. Increments are normally distributed: $W(t) - W(s) \sim N(0, t - s)$

## Numerical Simulation

Discretise time with step $dt$. At each step draw $Z \sim N(0,1)$ and update:

$$
W(t + dt) = W(t) + \sqrt{dt} \cdot Z
$$

This is the [[Euler-Maruyama scheme]] applied to $dW = dW$ (trivially).

## Connection to Diffusion

The probability density function of $W(t)$ is Gaussian with variance $t$:

$$
p(w, t) = \frac{1}{\sqrt{2\pi t}} \exp\!\left(-\frac{w^2}{2t}\right)
$$

This is the solution to the [[Heat equation]] with diffusion coefficient $\alpha = 1/2$ and a delta-function initial condition $p(w, 0) = \delta(w)$.

## Python

```python runnable
import numpy as np
import matplotlib.pyplot as plt

def simulate_wiener_process(
    time_end: float,
    number_of_steps: int,
    seed: int = 0,
) -> tuple[np.ndarray, np.ndarray]:
    """Simulate a single Wiener process path.

    Args:
        time_end: End time T.
        number_of_steps: Number of time steps.
        seed: Random seed for reproducibility.

    Returns:
        Tuple of (time_array, W_array).
    """
    rng = np.random.default_rng(seed)
    dt = time_end / number_of_steps
    time_array = np.linspace(0, time_end, number_of_steps + 1)
    increments = np.sqrt(dt) * rng.standard_normal(number_of_steps)
    W_array = np.concatenate([[0.0], np.cumsum(increments)])
    return time_array, W_array
```

[[Random walks]] | [[Euler-Maruyama scheme]] | [[Ornstein-Uhlenbeck process]] | [[Heat equation]] | [[Stochastic differential equation]]
