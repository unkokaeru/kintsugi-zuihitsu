# Monte Carlo Integration

**Monte Carlo integration** estimates a definite integral by averaging the integrand over random sample points.

## 1D Case

$$
F = \int_a^b f(x) \, dx \approx (b - a) \cdot \langle f \rangle_N
$$

where $\langle f \rangle_N = \frac{1}{N} \sum_{k=1}^N f(x_k)$ is the sample mean over $N$ uniformly distributed random points $x_k \in [a, b]$.

## Error

$$
\sigma_F = (b - a) \sqrt{\frac{\langle f^2 \rangle - \langle f \rangle^2}{N}}
$$

The error scales as $O(N^{-1/2})$, regardless of the dimension of the integral.

## High-Dimensional Integrals

In $D$ dimensions, the estimate is

$$
F = V \cdot \langle f \rangle_N
$$

where $V$ is the volume of the integration domain. The $O(N^{-1/2})$ error rate is independent of $D$. For $D \gtrsim 8$, Monte Carlo outperforms deterministic quadrature methods, which suffer from the curse of dimensionality.

## Python

```python runnable
import numpy as np

def monte_carlo_integrate(
    function: callable,
    lower_bound: float,
    upper_bound: float,
    number_of_samples: int,
    seed: int = 0,
) -> tuple[float, float]:
    """Estimate a 1D integral using Monte Carlo sampling.

    Args:
        function: The integrand f(x).
        lower_bound: Lower limit of integration.
        upper_bound: Upper limit of integration.
        number_of_samples: Number of random sample points N.
        seed: Random seed for reproducibility.

    Returns:
        Tuple of (estimate, error_estimate).
    """
    rng = np.random.default_rng(seed)
    x_samples = rng.uniform(lower_bound, upper_bound, number_of_samples)
    f_values = function(x_samples)
    mean_f = np.mean(f_values)
    mean_f_squared = np.mean(f_values ** 2)
    width = upper_bound - lower_bound
    estimate = width * mean_f
    error = width * np.sqrt((mean_f_squared - mean_f ** 2) / number_of_samples)
    return estimate, error
```

[[Pseudo-random number generation]] | [[Random walks]]
