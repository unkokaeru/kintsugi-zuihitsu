# Ralston Method

The **Ralston method** is a second-order [[Runge-Kutta methods|Runge-Kutta method]] designed to minimise the bound on the [[Local truncation error]].

$$
k_1 = g(t_i, y_i)
$$

$$
k_2 = g\!\left(t_i + \tfrac{2}{3}dt,\; y_i + \tfrac{2}{3} dt \cdot k_1\right)
$$

$$
y_{i+1} = y_i + dt \left(\frac{k_1}{4} + \frac{3k_2}{4}\right)
$$

## Order

Second-order: [[Global truncation error]] $O(dt^2)$, [[Local truncation error]] $O(dt^3)$.

Like the [[Midpoint method]], the Ralston method uses two evaluations of $g$ per step. The difference lies in where the intermediate point is sampled ($2dt/3$ rather than $dt/2$) and in the weighted combination of $k_1$ and $k_2$. The Ralston method is preferred when minimising the local error bound is important.

[[Runge-Kutta methods]] | [[Midpoint method]] | [[Fourth order Runge-Kutta]] | [[Local truncation error]] | [[Order of a method]]
