# Absolute Error

The magnitude of the difference between an approximation $v_{\text{approx}}$ and the true value $v$:

$$
\boxed{\epsilon=|v-v_{\text{approx}}|.}
$$

Always non-negative, with the same units as $v$. Useful when $v$ is bounded away from zero or when an absolute tolerance matters (e.g. position errors in a metric).

## Versus [[Relative error]]

| | Absolute | Relative |
|---|---|---|
| Formula | $\|v-v_{\text{approx}}\|$ | $\|v-v_{\text{approx}}\|/\|v\|$ |
| Units | Same as $v$ | Dimensionless |
| Use when... | True value is order-1 or near zero | True value spans many orders of magnitude |
| Breaks when... | $v$ varies hugely in size across runs | $v\to 0$ |

## Example

Approximating $\pi=3.14159265\ldots$ by $\pi_{\text{approx}}=3.14$: $\epsilon=0.00159\ldots$

A general-purpose error-handling rule of thumb in numerics combines both: report `max(absolute_error, relative_error * |v|)` as the effective error, ensuring sensible behaviour as $v\to 0$.
