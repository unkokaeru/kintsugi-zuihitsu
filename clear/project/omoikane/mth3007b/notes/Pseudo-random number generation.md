# Pseudo-Random Number Generation

A **pseudo-random number generator** (PRNG) is a deterministic algorithm that produces sequences of numbers that appear statistically random. The sequence is fully determined by its initial **seed**, making simulations reproducible.

## Usage in NumPy

```python runnable
import numpy as np

# Seed for reproducibility (legacy interface)
np.random.seed(42)

# Preferred: create a Generator object
rng = np.random.default_rng(seed=0)

# Uniform distribution on [a, b]: N samples
uniform_samples: np.ndarray = rng.uniform(low=0.0, high=1.0, size=1000)

# Gaussian (normal) distribution: mean mu, standard deviation sigma
gaussian_samples: np.ndarray = rng.normal(loc=0.0, scale=1.0, size=1000)

# Standard normal (mean 0, variance 1)
standard_normal_samples: np.ndarray = rng.standard_normal(size=1000)
```

Using the same seed always produces the same sequence, which is essential for debugging and reproducible results in [[Monte Carlo integration]], [[Random walks]], and [[Euler-Maruyama scheme]] simulations.

[[Monte Carlo integration]] | [[Random walks]] | [[Wiener process]] | [[Euler-Maruyama scheme]]
