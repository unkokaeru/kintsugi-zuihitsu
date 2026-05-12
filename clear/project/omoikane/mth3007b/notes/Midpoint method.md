# Midpoint Method

The **midpoint method** is a second-order [[Runge-Kutta methods|Runge-Kutta method]] that evaluates the gradient at the midpoint of the step interval.

$$
y_{i+1} = y_i + dt \cdot g\!\left(t_i + \frac{dt}{2},\; y_i + \frac{dt}{2} \cdot g(t_i, y_i)\right)
$$

The method estimates $y$ at $t_i + dt/2$ using one [[Explicit Euler method|Euler half-step]], then uses that midpoint gradient to advance the full step.

## Order

Second-order: [[Global truncation error]] $O(dt^2)$, [[Local truncation error]] $O(dt^3)$.

The midpoint method achieves second-order accuracy with only two evaluations of $g$ per step (compared to four for [[Fourth order Runge-Kutta]]).

[[Runge-Kutta methods]] | [[Ralston method]] | [[Fourth order Runge-Kutta]] | [[Order of a method]] | [[Explicit Euler method]]
