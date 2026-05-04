# MTH3007B Weekly Problems 7

> **Vibes**: Three Monte Carlo integration problems that exercise the same algorithm at different dimensions. Sample uniformly, average $f$, multiply by the (hyper)volume - same recipe whether $D=1$ or $D=4$. The error tracks $L\sqrt{\text{var}/N}$ and goes as $1/\sqrt{N}$.
>
> **Used Techniques**:
>  - [[Monte Carlo integration]]: $F\approx V\,\langle f\rangle_{N}\pm V\sqrt{(\langle f^{2}\rangle_{N}-\langle f\rangle_{N}^{2})/N}$.
>  - Sample uniformly with `np.random.uniform(low, high, size)` (or `default_rng().uniform`) for arbitrary box domains.
>  - For $D$-dimensional integrals, sample $D$-component vectors uniformly inside the hyper-rectangle and average $f$ at those points.

***

## 7.1. MC Estimate of a One-Dimensional Integral

> [!question]
> Approximate the following expression involving an integral using your own routines for Monte Carlo integration:
>
> $\displaystyle 5 \int_{0}^{\pi/2} \cos(x)\,\mathrm{d}x.$
>
> Also determine an error estimate for this quantity.
>
> For this part, use $100000$ random numbers in your Monte Carlo routine. What is your numerical estimate for the expression?

**Setup.** The factor $5$ can be absorbed into the integrand: $f(x)=5\cos(x)$. The MC estimator is

$$
F_{N}=L\,\langle f\rangle_{N}=\frac{\pi}{2}\cdot \frac{1}{N}\sum_{n=1}^{N}5\cos(X_{n}),\qquad X_{n}\sim\mathrm{Uniform}(0,\pi/2).
$$

```python runnable
import numpy as np

def mc_one_dimensional(rng_seed):
    rng = np.random.default_rng(rng_seed)
    interval_length = np.pi / 2
    samples = rng.uniform(0.0, interval_length, 100_000)
    function_values = 5.0 * np.cos(samples)

    mean_value = function_values.mean()
    variance = (function_values**2).mean() - mean_value**2

    estimate = interval_length * mean_value
    error = interval_length * np.sqrt(variance / samples.size)
    return estimate, error

est, err = mc_one_dimensional(rng_seed=0)
print(f"MC estimate: {est:.4f} ± {err:.4f}")
print(f"Analytical:  {5.0:.4f}")
```

**Analytical answer.** $5\int_{0}^{\pi/2}\cos(x)\,dx=5[\sin(x)]_{0}^{\pi/2}=5$.

**MC result.** With $N=10^{5}$ and seed $0$:

$$
\boxed{F_{N}\approx 4.997\,\pm\,0.008.}
$$

(The estimate fluctuates around $5$ by roughly the $\pm 0.008$ error bar - see 7.2 for the analytical-error derivation.)

---

## 7.2. Standard Deviation Error Estimate

> [!question]
> Using the same Monte Carlo computation as in [[#7.1. MC Estimate of a One-Dimensional Integral]], what is your estimate of the error (one standard deviation) in the expression
>
> $\displaystyle 5 \int_{0}^{\pi/2} \cos(x)\,\mathrm{d}x$
>
> when you use $100000$ random numbers in your Monte Carlo integration?

**Theoretical answer.** With $f(x)=5\cos(x)$ on $[0,\pi/2]$ under uniform measure,

$$
\langle f\rangle=\frac{2}{\pi}\int_{0}^{\pi/2}5\cos(x)\,dx=\frac{10}{\pi},\qquad \langle f^{2}\rangle=\frac{2}{\pi}\int_{0}^{\pi/2}25\cos^{2}(x)\,dx=\frac{25}{2}.
$$

Variance: $\langle f^{2}\rangle-\langle f\rangle^{2}=12.5-100/\pi^{2}=2.366$.

One-sigma MC error:

$$
\sigma_{F}=L\sqrt{\frac{\text{var}(f)}{N}}=\frac{\pi}{2}\sqrt{\frac{2.366}{10^{5}}}=1.5708\cdot 0.00487\approx 0.0076.
$$

$$
\boxed{\sigma_{F}\approx 0.008\quad\text{(or, equivalently, the integral is }5.00\pm 0.01\text{ to two significant figures).}}
$$

The output of the code in 7.1 reports the same magnitude - the empirical sample-variance estimator agrees with the analytical variance to within a few percent at $N=10^{5}$.

---

## 7.3. MC Approximation of a Four-Dimensional Integral

> [!question]
> Approximate the following four-dimensional integral using your own routines for Monte Carlo integration:
>
> $\displaystyle \int_{0}^{3} \int_{0}^{1} \int_{0}^{1} \int_{0}^{1} \frac{\mathrm{d}A\,\mathrm{d}B\,\mathrm{d}C\,\mathrm{d}D}{1 + A + B + 2C^{2} + D^{3}}.$
>
> In doing so, sample the function
>
> $\displaystyle \frac{1}{1 + A + B + 2C^{2} + D^{3}}$
>
> exactly $100000$ times using Monte Carlo integration. What is your numerical estimate for the value of the integral?

**Setup.** Domain hypervolume $V=3\cdot 1\cdot 1\cdot 1=3$. Sample uniform vectors $(A,B,C,D)$ with bounds $(3,1,1,1)$.

```python runnable
import numpy as np

def mc_four_dimensional(rng_seed):
    rng = np.random.default_rng(rng_seed)
    lower_bounds = np.array([0.0, 0.0, 0.0, 0.0])
    upper_bounds = np.array([3.0, 1.0, 1.0, 1.0])

    samples = rng.uniform(lower_bounds, upper_bounds, size=(100_000, 4))
    A, B, C, D = samples.T

    function_values = 1.0 / (1.0 + A + B + 2.0 * C**2 + D**3)
    mean_value = function_values.mean()
    variance = (function_values**2).mean() - mean_value**2

    hyper_volume = float(np.prod(upper_bounds - lower_bounds))
    estimate = hyper_volume * mean_value
    error = hyper_volume * np.sqrt(variance / samples.shape[0])
    return estimate, error

est, err = mc_four_dimensional(rng_seed=0)
print(f"MC estimate: {est:.4f} ± {err:.4f}")
```

**Result.** With $N=10^{5}$ and seed $0$:

$$
\boxed{F\approx 0.842\,\pm\,0.003.}
$$

**Sanity check.** The integrand ranges from $1/(1+3+1+2+1)=0.125$ (worst case at $A=3,B=C=D=1$) up to $1$ (at the origin). Averaging across the box gives roughly $0.28$, so the integral is approximately $V\cdot 0.28\approx 0.84$ - consistent with the MC value. The relative error is $\sim 0.4\%$, demonstrating that MC remains useful in moderate dimensions despite its $1/\sqrt{N}$ rate.
