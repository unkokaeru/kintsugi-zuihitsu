# Runge-Kutta Methods

**Runge-Kutta methods** are a family of explicit numerical methods for solving ODEs of the form $\dot{y} = g(t, y)$. They generalise the [[Explicit Euler method]] by evaluating $g$ at multiple intermediate points within each step.

The general form is

$$
y_{i+1} = y_i + dt \cdot \phi(t_i, y_i, dt)
$$

where $\phi$ is the **increment function**, which depends on the specific method. Higher-order Runge-Kutta methods achieve smaller [[Global truncation error]] by choosing $\phi$ to match more terms of the Taylor expansion of the exact solution.

## Examples

| Method | Order | Notes |
|---|---|---|
| [[Explicit Euler method]] | 1 | $\phi = g(t_i, y_i)$ |
| [[Midpoint method]] | 2 | Single intermediate evaluation |
| [[Ralston method]] | 2 | Minimises LTE bound |
| [[Fourth order Runge-Kutta]] | 4 | Four stage evaluations |

All explicit Runge-Kutta methods are conditionally stable - see [[Stability of a method]].

[[Explicit Euler method]] | [[Midpoint method]] | [[Ralston method]] | [[Fourth order Runge-Kutta]] | [[Order of a method]] | [[Global truncation error]] | [[Stability of a method]]
