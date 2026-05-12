# Fourth Order Runge-Kutta

The **fourth-order Runge-Kutta method** (RK4) is the most widely used [[Runge-Kutta methods|Runge-Kutta method]], achieving fourth-order accuracy with four gradient evaluations per step.

## Stages

$$
k_1 = g(t_i,\, y_i)
$$

$$
k_2 = g\!\left(t_i + \tfrac{dt}{2},\; y_i + \tfrac{dt}{2} k_1\right)
$$

$$
k_3 = g\!\left(t_i + \tfrac{dt}{2},\; y_i + \tfrac{dt}{2} k_2\right)
$$

$$
k_4 = g(t_i + dt,\; y_i + dt \cdot k_3)
$$

## Update

$$
y_{i+1} = y_i + \frac{dt}{6}(k_1 + 2k_2 + 2k_3 + k_4)
$$

The weights $(1, 2, 2, 1)$ give a weighted average of gradients at the start, two midpoints, and the end of the step. The midpoint evaluations are double-weighted.

## Order

Fourth-order: [[Global truncation error]] $O(dt^4)$, [[Local truncation error]] $O(dt^5)$.

RK4 is conditionally stable (see [[Stability of a method]]), but the stability region is much larger than for lower-order explicit methods, making it practical for most non-stiff problems.

[[Runge-Kutta methods]] | [[Midpoint method]] | [[Ralston method]] | [[Order of a method]] | [[Stability of a method]] | [[Global truncation error]]
