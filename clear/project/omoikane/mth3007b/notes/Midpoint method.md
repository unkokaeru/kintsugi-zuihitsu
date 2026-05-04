# Midpoint Method

A second-order [[Runge-Kutta methods]] scheme for ODEs $\dot{y}=g(t,y)$. Evaluate $g$ at the midpoint of the step using a half-Euler estimate as the predictor:

$$
\boxed{y_{i+1}\approx y_{i}+\Delta t\cdot g\!\left(t_{i}+\frac{\Delta t}{2},\;y_{i}+\frac{\Delta t}{2}g(t_{i},y_{i})\right).}
$$

## Two Stages

1. Predictor: $\tilde{y}=y_{i}+\frac{\Delta t}{2}g(t_{i},y_{i})$ - half a Euler step.
2. Corrector: $y_{i+1}=y_{i}+\Delta t\,g(t_{i}+\Delta t/2,\,\tilde{y})$ - use $g$ at the midpoint.

Two function evaluations per step. Global truncation error $O(\Delta t^{2})$ - second-order.

## Why It's Second-Order

The midpoint evaluation captures the next term in the Taylor expansion of $g$ that pure Euler misses. Compare:

- Euler: $y_{i+1}=y_{i}+\Delta t\,g(t_{i},y_{i})$, missing the $\frac{\Delta t^{2}}{2}y''$ correction.
- Midpoint: matches the Taylor expansion through $\Delta t^{2}$, error first appears at $\Delta t^{3}$.

Hence [[Local truncation error]] $O(\Delta t^{3})$, [[Global truncation error]] $O(\Delta t^{2})$.

## Versus Other Second-Order RK

The midpoint method is one of a family of equivalent-order schemes:

- **Midpoint**: $b_{1}=0,\,b_{2}=1,\,a_{21}=c_{2}=1/2$.
- **Heun's** (improved Euler): $b_{1}=b_{2}=1/2,\,a_{21}=c_{2}=1$.
- **[[Ralston method]]**: $b_{1}=1/4,\,b_{2}=3/4,\,a_{21}=c_{2}=2/3$.

All three are 2nd-order and use 2 stages. Ralston minimises the truncation-error coefficient and so is slightly more accurate per step in practice.

## Implementation

```python
def midpoint_step(g, t, y, dt):
    k1 = g(t, y)
    return y + dt * g(t + 0.5 * dt, y + 0.5 * dt * k1)
```
