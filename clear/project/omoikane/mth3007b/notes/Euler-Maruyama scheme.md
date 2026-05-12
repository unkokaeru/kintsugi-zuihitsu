# Euler-Maruyama Scheme

The **Euler-Maruyama scheme** is the numerical method for integrating [[Stochastic differential equation|stochastic differential equations]] (SDEs). It is the stochastic analogue of the [[Explicit Euler method]].

## General Form

For the SDE $dX = f(X, t) \, dt + g(X, t) \, dW$:

$$
X_{i+1} = X_i + f(X_i, t_i) \, dt + g(X_i, t_i) \sqrt{dt} \cdot Z_i
$$

where $Z_i \sim N(0,1)$ are independent standard normal random variables drawn at each step.

## Specific Cases

### Wiener Process ($dW = dW$)

$$
W_{i+1} = W_i + \sqrt{dt} \cdot Z
$$

### Ornstein-Uhlenbeck Process ($dV = -kV \, dt + dW$)

$$
V_{i+1} = (1 - k \, dt) \, V_i + \sqrt{dt} \cdot Z
$$

## Python

```python runnable
import numpy as np

def euler_maruyama_ou(
    initial_velocity: float,
    mean_reversion_rate: float,
    time_end: float,
    number_of_steps: int,
    seed: int = 0,
) -> tuple[np.ndarray, np.ndarray]:
    """Simulate the Ornstein-Uhlenbeck process using the Euler-Maruyama scheme.

    Args:
        initial_velocity: Starting value V(0).
        mean_reversion_rate: Rate k > 0 controlling mean reversion strength.
        time_end: End time T.
        number_of_steps: Number of time steps.
        seed: Random seed for reproducibility.

    Returns:
        Tuple of (time_array, velocity_array).
    """
    rng = np.random.default_rng(seed)
    dt = time_end / number_of_steps
    time_array = np.linspace(0, time_end, number_of_steps + 1)
    velocity_array = np.empty(number_of_steps + 1)
    velocity_array[0] = initial_velocity
    for step_index in range(number_of_steps):
        noise = rng.standard_normal()
        velocity_array[step_index + 1] = (
            (1 - mean_reversion_rate * dt) * velocity_array[step_index]
            + np.sqrt(dt) * noise
        )
    return time_array, velocity_array
```

[[Stochastic differential equation]] | [[Wiener process]] | [[Ornstein-Uhlenbeck process]] | [[Explicit Euler method]] | [[First-passage time]]
