# Implicit Trapezoid Method

For $\dot{y}(t) = g(t, y(t))$, then…

$$
y_{i+1} \approx y_i + \frac{\Delta t}{2}\!\left(g(t_i, y_i) + g(t_{i+1}, y_{i+1})\right)
$$

It is **implicit** since $y_{i+1}$ appears on both sides, hence this equation must be rearranged to isolate $y_{i+1}$ before implementation, analogously to the implicit Euler method. It is 2nd-order, with global truncation error $O(\Delta t^2)$.

## Proof: Trapezoid Is Symmetric

The key observation is that $y_i$ and $y_{i+1}$ play **symmetric roles** in the trapezoid equation. Rearranging:

$$
y_i \approx y_{i+1} - \frac{\Delta t}{2}\!\left(g(t_i, y_i) + g(t_{i+1}, y_{i+1})\right)
$$

This is exactly the original equation with $i \leftrightarrow i+1$ and $\Delta t \to -\Delta t$, confirming symmetry.
