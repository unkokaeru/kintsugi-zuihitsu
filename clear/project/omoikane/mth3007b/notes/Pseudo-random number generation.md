# Pseudo-random number generation

Deterministic algorithms producing sequences of numbers that pass *statistical* tests of randomness (uniformity, independence, etc.) without being truly random - hence **pseudo-random**.

## Seeding

Setting a fixed **seed** initialises the generator's internal state, making the sequence reproducible. In NumPy:

```python
import numpy as np
rng = np.random.default_rng(seed=0)
rng.integers(6)   # always 4 with this seed
rng.uniform(0, 1) # next number is also fully determined
```

Reproducibility matters for testing and debugging. For "fresh" runs, omit the seed (or seed from system entropy) to get a different sequence each time.

## Common Distributions

- **Uniform on $[a,b]$**: `rng.uniform(a, b, size)`. Foundational - every other distribution can be constructed from uniforms via inverse-transform sampling.
- **Standard normal**: `rng.standard_normal(size)`. Used for [[Wiener process]] increments, [[Ornstein-Uhlenbeck process]] noise, etc. Generated internally via the Box-Muller transform or Ziggurat algorithm.
- **Discrete (integers)**: `rng.integers(low, high, size)` - uniform integers in $[low, high)$.

## Quality

Modern PRNGs (PCG64, Mersenne Twister, Xoshiro) have very long periods ($\sim 2^{128}$ to $2^{19937}-1$) and pass standard test batteries (TestU01 BigCrush). Older generators (`numpy.random` legacy module, C `rand()`) have known statistical defects and should be avoided for serious work.

For **cryptographic** uses, use `secrets` (Python) or OS-level entropy - pseudo-random generators are not secure even when statistically clean.

## Use in This Module

- [[Monte Carlo integration]]: sample uniform points to evaluate the integrand.
- [[Wiener process]] simulation: each Brownian increment is $\sqrt{\Delta t}$ times a standard-normal draw.
- [[Ornstein-Uhlenbeck process]] simulation: identical noise generation, plus a deterministic restoring drift.
- [[Random walks]]: in the discrete case, draw a uniform integer to pick a direction.
