# Monte Carlo integration

A stochastic numerical-integration method that estimates an integral by averaging the integrand at uniformly distributed random sample points.

For $F=\int_{a}^{b}f(x)\,dx$ in 1D, sample $X_{1},\ldots,X_{N}$ uniformly from $[a,b]$ and compute

$$
\boxed{F\approx F_{N}=L\,\langle f\rangle_{N}=L\cdot \frac{1}{N}\sum_{n=1}^{N}f(X_{n}),\qquad L=b-a.}
$$

For a $D$-dimensional integral over a region $\Omega$ of hypervolume $V$, replace $L$ by $V$ and sample $D$-component random vectors uniformly inside $\Omega$.

## Error Estimate

One-standard-deviation error from sample variance:

$$
\sigma_{F}=L\sqrt{\frac{1}{N}\bigl(\langle f^{2}\rangle_{N}-\langle f\rangle_{N}^{2}\bigr)}.
$$

So the typical accuracy scales as

$$
\sigma_{F}\sim \frac{L\,\sigma(f)}{\sqrt{N}}=O(N^{-1/2}).
$$

## Rate Comparison vs Deterministic Methods

In 1D, deterministic quadrature wins decisively:
- [[Explicit Euler method]]: $O(N^{-1})$.
- [[Fourth order Runge-Kutta]]: $O(N^{-4})$.
- Monte Carlo: $O(N^{-1/2})$.

But in $D$ dimensions, deterministic schemes scale as $O(N^{-p/D})$ for a $p$-th order method, while Monte Carlo's rate is **independent of $D$**. Crossover:
- MC beats Euler when $D>2$.
- MC beats RK4 when $D>8$.

Hence MC is the method of choice for high-dimensional integrals (statistical mechanics, financial derivatives, particle physics).

## Variance Reduction

Vanilla MC can be improved with *importance sampling* (sample where $f$ is large), *stratified sampling* (force points into bins), *control variates* (subtract a known correlated function), or *quasi-MC* sequences (low-discrepancy points instead of pure random). These can drop the constant in the $O(N^{-1/2})$ rate but rarely change the rate itself.

## Implementation Sketch

```python
import numpy as np

def monte_carlo_integral(f, lower, upper, n_samples, rng_seed=None):
    rng = np.random.default_rng(rng_seed)
    samples = rng.uniform(lower, upper, size=(n_samples, lower.size))
    values = f(samples)
    mean = values.mean()
    variance = (values**2).mean() - mean**2
    volume = float(np.prod(upper - lower))
    return volume * mean, volume * np.sqrt(variance / n_samples)
```
