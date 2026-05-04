# MTH3007B Lecture 7

This lecture pivots from deterministic methods to **stochastic methods**, our final theme. We introduce **Monte Carlo integration** - using uniformly distributed random points to estimate definite integrals - derive its $O(1/\sqrt{N})$ error scaling, and show why this apparently inferior convergence rate beats deterministic quadrature in high dimensions (the *curse of dimensionality* breaks for the lattice methods but not for MC).

## Stochastic Methods and the Monte Carlo Idea

Monte Carlo methods are named after the casino in Monaco - they all share one feature: **(pseudo-)random numbers**. Many flavours of MC exist (importance sampling, Markov-chain MC, simulated annealing, ...); the only common thread is the use of randomness.

### Pseudo-Random Numbers in Python

A "random" number on a digital computer is actually deterministic - it comes from a generator that produces a long sequence passing nearly all statistical tests of randomness. Hence **pseudo-random**.

```python runnable
import numpy as np
np.random.randint(6)  # a random integer in {0, 1, 2, 3, 4, 5}
np.random.randint(6)  # another roll
np.random.randint(6)  # yet another
```

Each run gives a different sequence - unless you fix the **seed**:

```python runnable
import numpy as np
np.random.seed(0)
print(np.random.randint(6))  # always 4 with seed=0
print(np.random.randint(6))  # always 5
print(np.random.randint(6))  # always 0
```

> [!note] Why seed?
> A fixed seed gives **reproducibility** - vital for testing. For production runs you might seed from the current clock so each run differs (with the caveat that parallel processes need distinct seeds, often derived from the process ID).

### Uniform Reals

For continuous Monte Carlo we need uniformly distributed *real* numbers, not integers. NumPy's `np.random.uniform(a, b, n)` returns $n$ samples from the uniform distribution on $[a,b]$:

```python runnable
import numpy as np
samples = np.random.uniform(0.0, 1.0, 10000)  # 10,000 samples in [0, 1]
print(samples.mean())  # ≈ 0.5
print(samples.std())   # ≈ 1/sqrt(12) ≈ 0.289
```

The histogram of 10,000 such samples is flat across $[0,1]$ - exactly what "uniform" means.

## Comparison: Deterministic Integration

To anchor the comparison, recall how we compute $F=\int_{0}^{z}f(x)\,dx$ deterministically by reframing as the IVP $dF/dz=f(z)$, $F(0)=0$, and applying any of:

- **[[Explicit Euler method]]** - first order, $O(\Delta x)$ global error, i.e. $O(1/N)$ for $N$ grid points.
- Trapezoid, midpoint, [[Ralston method]] - second order.
- **[[Fourth order Runge-Kutta]]** - fourth order, $O(1/N^{4})$ global error.

These march along a *grid* of evenly spaced points. We'll compare against the alternative - random sampling - below.

## Monte Carlo Integration in 1D

For an integral over a bounded interval

$$
F=\int_{a}^{b}f(x)\,dx,
$$

write it as the average of $f$ times the width:

$$
\langle f\rangle=\frac{1}{b-a}\int_{a}^{b}f(x)\,dx\quad\Longrightarrow\quad F=(b-a)\,\langle f\rangle.
$$

The Monte Carlo idea is to *estimate* $\langle f\rangle$ by averaging $f$ at randomly chosen points.

### The Algorithm

1. Choose $N$ random points $X_{1},X_{2},\ldots,X_{N}$ uniformly distributed in $[a,b]$.
2. Compute the **sample mean**

$$
\langle f\rangle_{N}\equiv \frac{1}{N}\sum_{n=1}^{N}f(X_{n}).
$$

3. Multiply by the interval length $L=b-a$ to get the **MC estimate** of the integral:

$$
\boxed{F_{N}=L\,\langle f\rangle_{N}.}
$$

By the law of large numbers $\langle f\rangle_{N}\to\langle f\rangle$ and so $F_{N}\to F$ as $N\to\infty$.

### Error Estimate

Each sample $f(X_{n})$ is an independent draw with the same variance. The sample mean has variance $\sigma^{2}/N$ where $\sigma^{2}=\langle f^{2}\rangle-\langle f\rangle^{2}$. The one-standard-deviation error on $F_{N}$ is therefore

$$
\boxed{\sigma_{F}=L\sqrt{\frac{1}{N}\bigl(\langle f^{2}\rangle_{N}-\langle f\rangle_{N}^{2}\bigr)},}
$$

giving the estimate-with-error-bars

$$
F\approx L\left(\langle f\rangle_{N}\;\pm\;\sqrt{\tfrac{1}{N}\bigl(\langle f^{2}\rangle_{N}-\langle f\rangle_{N}^{2}\bigr)}\right).
$$

> [!warning] Note on $f^{2}$
> $\langle f^{2}\rangle_{N}=(1/N)\sum f(X_{n})^{2}$ - square the values *before* averaging. It is **not** the same as $\langle f\rangle_{N}^{2}$. The variance is the difference of these two quantities (always non-negative).

### Generalising to Higher Dimensions

For a $D$-dimensional integral over a region $\Omega\subseteq\mathbb{R}^{D}$ with hypervolume $V=\int_{\Omega}d^{D}x$, the formula is

$$
F=\int_{\Omega}f(\vec{x})\,d^{D}x\;\approx\;V\,\langle f\rangle_{N},\qquad \langle f\rangle_{N}=\frac{1}{N}\sum_{n=1}^{N}f(\vec{X}_{n}),
$$

with each $\vec{X}_{n}$ a uniformly distributed random vector in $\Omega$. For a 2D box $[x_{\min},x_{\max}]\times[y_{\min},y_{\max}]$, $V=(x_{\max}-x_{\min})(y_{\max}-y_{\min})$.

### Worked Example: $\int_{0}^{1}x^{2}\,dx$

The analytical answer is $\tfrac{1}{3}$. Monte Carlo with $N=10$ samples:

```python runnable
import numpy as np

def f(x):
    return x**2

a, b = 0.0, 1.0
n_samples = 10
np.random.seed(0)

X = np.random.uniform(a, b, n_samples)
mean_f = np.mean(f(X))
F_estimate = (b - a) * mean_f

variance = np.mean(f(X)**2) - mean_f**2
sigma = (b - a) * np.sqrt(variance / n_samples)

print(f"MC estimate: {F_estimate:.4f} ± {sigma:.4f}")
print(f"Analytical:  {1/3:.4f}")
```

With only 10 samples the estimate is poor (uncertainty around $\pm 0.1$). Increasing to $N=10^{4}$ tightens it to about $\pm 0.003$.

## Order of the Monte Carlo Method

From the error formula $\sigma_{F}\propto L/\sqrt{N}$:

$$
\boxed{\sigma_{F}=O\!\left(\tfrac{1}{\sqrt{N}}\right).}
$$

Compare to the deterministic methods (in 1D):

| Method | Global error |
|---|---|
| Explicit Euler | $O(1/N)$ |
| Midpoint / Trapezoid / [[Ralston method]] | $O(1/N^{2})$ |
| [[Fourth order Runge-Kutta]] | $O(1/N^{4})$ |
| **Monte Carlo** | $O(1/\sqrt{N})$ |

In 1D, MC is **dramatically worse**. Why bother?

## The Curse of Dimensionality

For a *deterministic* method on a $D$-dimensional grid with $n_{x}$ points per dimension, the total number of evaluations is $N=n_{x}^{D}$. The error per dimension is $O(1/n_{x}^{p})$ for a $p$-th order method, so the total error scales as

$$
\text{deterministic error}\sim \frac{1}{n_{x}^{p}}=\frac{1}{N^{p/D}}.
$$

For Euler ($p=1$) in $D=5$: error $\sim N^{-1/5}$. For RK4 ($p=4$) in $D=5$: error $\sim N^{-4/5}$.

The Monte Carlo error, **independent of $D$**, stays at $O(1/\sqrt{N})=N^{-1/2}$.

Crossover: MC beats Euler whenever $1/2 > 1/D$, i.e. $D>2$. MC beats RK4 whenever $1/2>4/D$, i.e. $D>8$.

> [!important] Curse of dimensionality, broken
> Deterministic quadrature suffers the **curse of dimensionality**: the same accuracy needs exponentially more grid points as $D$ grows. Monte Carlo's $O(1/\sqrt{N})$ rate is dimension-independent, so it wins decisively in high $D$. For integrals over many dimensions (statistical mechanics partition functions, financial derivatives with many underlyings, particle physics phase-space integrals), MC is the only feasible method.

### Numerical Comparison: $\int_{[-4,4]^{D}}(1-\vec{x}\cdot\vec{x})\,d^{D}x$

Computing this for various $D$ with the same total point budget $N=n_{x}^{D}$:

- **$D=1$** - Euler accurate to $\sim 10^{-8}$ at $N=10^{5}$; MC stalls at $\sim 10^{-1}$. Euler wins by 7 orders of magnitude.
- **$D=5$** - MC error is *less than* Euler error at every $N$. MC has crossed over and now wins.

This is exactly the predicted crossover at $D>2$ for first-order Euler.

## Algorithmic Sketch (D-Dimensional MC)

```python runnable
import numpy as np
from typing import Callable

def monte_carlo_integral(
    f: Callable[[np.ndarray], np.ndarray],
    lower_bounds: np.ndarray,
    upper_bounds: np.ndarray,
    number_of_samples: int,
    rng_seed: int | None = None,
) -> tuple[float, float]:
    """
    Estimate the integral of f over the hyper-rectangle [lower, upper] in
    arbitrary dimension via uniform Monte Carlo sampling. Returns
    (estimate, one-sigma error).
    """
    rng = np.random.default_rng(rng_seed)
    dimension = lower_bounds.size

    samples = rng.uniform(lower_bounds, upper_bounds, size=(number_of_samples, dimension))

    function_values = f(samples)
    mean_value = function_values.mean()
    variance_estimator = (function_values**2).mean() - mean_value**2

    hyper_volume = np.prod(upper_bounds - lower_bounds)

    estimate = hyper_volume * mean_value
    sigma = hyper_volume * np.sqrt(variance_estimator / number_of_samples)

    return float(estimate), float(sigma)
```

---

## Pre-Lecture Notes from [[mth3007b lecture notes 7.pdf]]

- **Monte Carlo methods**: any numerical technique using (pseudo-)random numbers - named after the Monaco casino district.
- **Pseudo-random numbers**: deterministic sequences passing statistical tests; reproducibility via a **seed** (`np.random.seed(0)` in legacy NumPy or `np.random.default_rng(0)` in modern NumPy).
- **Uniform distribution**: `np.random.uniform(a, b, n)` returns $n$ samples uniformly distributed on $[a,b]$.
- **MC integration in 1D**: $F=L\langle f\rangle$ with $L=b-a$. Estimate $\langle f\rangle$ by sample mean $\langle f\rangle_{N}=(1/N)\sum_{n}f(X_{n})$ at uniform random $X_{n}\in[a,b]$.
- **Error**: $\sigma_{F}=L\sqrt{(\langle f^{2}\rangle_{N}-\langle f\rangle_{N}^{2})/N}=O(1/\sqrt{N})$ - *half order*.
- **Higher dimensions**: same formula with $L\to V$ (hypervolume) and $X_{n}\to \vec{X}_{n}$ (random $D$-vectors with each component uniformly distributed).
- **Curse of dimensionality**: deterministic methods scale as $1/N^{p/D}$ for $p$-th order, so accuracy degrades exponentially in $D$. MC's $1/\sqrt{N}$ rate is **independent of $D$** - wins for $D>2$ vs Euler, $D>8$ vs RK4.
- **Practical takeaway**: for low-dimensional integrals use deterministic quadrature; for $D\gg 2$ use Monte Carlo. The algorithm is a one-liner once you can sample uniformly.
- **Next lecture**: stochastic differential equations and the Wiener process - where MC stops being just an integrator and starts simulating actual random *processes*.
