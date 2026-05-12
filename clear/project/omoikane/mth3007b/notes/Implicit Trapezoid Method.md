# Implicit Trapezoid Method

The **implicit trapezoid method** is a second-order implicit method that averages the gradients at the start and end of each step.

$$
y_{i+1} = y_i + \frac{dt}{2}\left(g(t_i, y_i) + g(t_{i+1}, y_{i+1})\right)
$$

Like the [[Implicit Euler method]], $y_{i+1}$ appears on both sides, so the equation must be solved implicitly at each step.

## Order

Second-order: [[Global truncation error]] $O(dt^2)$, [[Local truncation error]] $O(dt^3)$.

## Symmetry (Time-Reversibility)

The implicit trapezoid method is symmetric: if we swap indices $i \leftrightarrow i+1$ and negate $dt$, we recover the same equation. This means the method is time-reversible, which is a desirable property for problems where the physics is reversible.

Note: **Heun's method** (explicit trapezoid) uses a predicted $\tilde{y}_{i+1}$ from an Euler step in place of the true $y_{i+1}$. It is NOT the same as the implicit trapezoid method and is NOT symmetric.

## Stability

The implicit trapezoid method is **unconditionally stable** - there is no restriction on step size. This follows from the implicit treatment of $g(t_{i+1}, y_{i+1})$.

[[Implicit Euler method]] | [[Explicit Euler method]] | [[Runge-Kutta methods]] | [[Stability of a method]] | [[Order of a method]]
