# Local Truncation Error

**Local truncation error** (LTE) is the error introduced in a single integration step, arising from truncating the Taylor series representation of the exact solution.

For the [[Explicit Euler method]] applied to $\dot{y} = g(t, y)$, the exact solution satisfies

$$
y(t_{i+1}) = y(t_i) + dt \cdot g(t_i, y_i) + O(dt^2)
$$

so the local truncation error per step is $O(dt^2)$.

The LTE is one order higher than the [[Global truncation error]] because the global error accumulates the local error over all steps. If the integration interval has length $T$ and step size $dt$, then there are $N = T/dt$ steps, so

$$
E_{\text{global}} \approx N \cdot E_{\text{local}} = \frac{T}{dt} \cdot O(dt^2) = O(dt)
$$

This is why the [[Explicit Euler method]] is first-order overall, even though its local error is $O(dt^2)$.

[[Global truncation error]] | [[Order of a method]] | [[Explicit Euler method]] | [[Order of magnitude]]
