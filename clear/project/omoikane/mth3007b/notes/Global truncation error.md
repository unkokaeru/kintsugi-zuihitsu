# Global Truncation Error

**Global truncation error** (GTE) is the total accumulated error after integrating over the entire interval, and it determines the [[Order of a method]].

For a method with [[Local truncation error]] $O(dt^{p+1})$ per step, integrating over $N = T/dt$ steps gives

$$
E_{\text{global}} \approx N \cdot O(dt^{p+1}) = \frac{T}{dt} \cdot O(dt^{p+1}) = O(dt^p)
$$

so the method is order $p$.

| Method | LTE per step | GTE (order) |
|---|---|---|
| [[Explicit Euler method]] | $O(dt^2)$ | $O(dt)$ - first order |
| [[Midpoint method]], [[Ralston method]], [[Implicit Trapezoid Method]] | $O(dt^3)$ | $O(dt^2)$ - second order |
| [[Fourth order Runge-Kutta]] | $O(dt^5)$ | $O(dt^4)$ - fourth order |

The GTE is what we measure in practice by comparing numerical solutions at different step sizes.

[[Local truncation error]] | [[Order of a method]] | [[Order of convergence]] | [[Convergence]]
