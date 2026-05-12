# Consistency

A numerical method is **consistent** if the local truncation error per step vanishes as the step size $dt \to 0$:

$$
\frac{\text{LTE}}{dt} \to 0 \quad \text{as } dt \to 0
$$

Equivalently, the discrete scheme must recover the correct differential equation in the limit of infinitely fine resolution.

Consistency is a necessary condition for convergence but is not sufficient on its own. The [[Lax Equivalence Theorem]] states that for a well-posed problem, consistency combined with [[Stability of a method|stability]] is both necessary and sufficient for [[Convergence]].

All standard Runge-Kutta methods (explicit Euler, midpoint, Ralston, RK4, implicit trapezoid) are consistent by construction - their [[Local truncation error]] is at least $O(dt^2)$, so the ratio LTE$/dt$ is at least $O(dt) \to 0$. The question of whether a method converges therefore reduces to checking its stability.

[[Local truncation error]] | [[Lax Equivalence Theorem]] | [[Stability of a method]] | [[Convergence]] | [[Order of a method]]
