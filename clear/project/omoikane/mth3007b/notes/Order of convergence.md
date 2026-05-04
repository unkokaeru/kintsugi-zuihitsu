# Order of Convergence

The rate at which the global error decreases as $\Delta t\to 0$. For a method of [[Order of a method]] $p$:

$$
|y_{N}-y(t_{N})|\to 0\quad\text{like }O(\Delta t^{p}).
$$

Halving $\Delta t$ reduces the error by a factor of $2^{p}$.

For [[Convergence]], the order of convergence equals the order of the method. The [[Lax Equivalence Theorem]] establishes the equivalence between consistency, stability, and convergence - without stability, convergence fails even for arbitrarily small $\Delta t$.

## Empirical Estimation

Run the method at several step sizes $\Delta t_{1}>\Delta t_{2}>\ldots$ and measure the error $E_{i}$ at each. Plot $\log E$ vs $\log\Delta t$ - the slope is the order of convergence:

$$
\log E\approx \log C+p\log\Delta t.
$$

In Python:

```python
import numpy as np

step_sizes = np.array([0.1, 0.05, 0.025, 0.0125])
errors = np.array([...])  # measured global errors

slope, intercept = np.polyfit(np.log(step_sizes), np.log(errors), 1)
print(f"Order of convergence: {slope:.2f}")
```

The slope should match the theoretical order. Discrepancies indicate either (i) the method is not yet in the asymptotic regime ($\Delta t$ too large), (ii) round-off error is dominating ($\Delta t$ too small - error stops decreasing), or (iii) a bug in the implementation.
