# Stability of a Method

A numerical method is **stable** if, when applied to a [[Stability of an ODE|stable ODE]], the difference between solutions computed from slightly different initial conditions remains bounded.

The standard test case is $\dot{y} = -ay$ with $a > 0$, which is trivially stable. The amplification factor $A$ is defined by $y_{i+1} = A \cdot y_i$. Stability requires $|A| \leq 1$.

## Stability of Common Methods

### Explicit Euler

$$
y_{i+1} = (1 - a \cdot dt) \, y_i, \qquad A = 1 - a \cdot dt
$$

Stable when $|1 - a \cdot dt| \leq 1$, i.e. $a \cdot dt \leq 2$. **Conditionally stable.**

### Implicit Euler

$$
y_{i+1} = \frac{y_i}{1 + a \cdot dt}, \qquad A = \frac{1}{1 + a \cdot dt}
$$

Since $a, dt > 0$, we always have $|A| < 1$. **Unconditionally stable.**

### Explicit Runge-Kutta (general)

All explicit Runge-Kutta methods (including [[Midpoint method]], [[Ralston method]], [[Fourth order Runge-Kutta]]) are **conditionally stable** - there is a maximum step size, though the stability region grows with the order of the method.

### Implicit Trapezoid Method

$$
A = \frac{1 - a \cdot dt / 2}{1 + a \cdot dt / 2}
$$

Since $a, dt > 0$, $|A| < 1$ always. **Unconditionally stable.**

### Richardson Method

The Richardson method uses a centred difference in time:

$$
y_{i+1} - y_{i-1} = 2 \, dt \cdot g(t_i, y_i)
$$

For $\dot{y} = -y$, analysis shows this method is **unconditionally unstable**: solutions from nearby initial conditions always diverge, regardless of step size. This makes Richardson's method unsuitable in practice.

[[Stability of an ODE]] | [[Explicit Euler method]] | [[Implicit Euler method]] | [[Implicit Trapezoid Method]] | [[Convergence]] | [[Lax Equivalence Theorem]]
