# Stability of an ODE

An ODE is **stable** if small perturbations in the initial condition remain bounded for all future time.

Formally, the ODE $\dot{y} = g(t, y)$ is stable if: for any $\varepsilon > 0$ there exists $\delta > 0$ such that

$$
|y_A(t_0) - y_B(t_0)| < \delta \implies |y_A(t) - y_B(t)| < \varepsilon \quad \text{for all } t > t_0
$$

where $y_A$ and $y_B$ are two solutions starting from nearby initial conditions.

In other words, two solutions that start close together do not diverge from each other. This is a property of the ODE itself, independent of the numerical method used to solve it.

The stability of the ODE is a prerequisite for the [[Lax Equivalence Theorem|Lax equivalence theorem]]: we need the problem to be well-posed before asking whether a numerical method converges. The stability of the numerical method itself is a separate question - see [[Stability of a method]].

[[Stability of a method]] | [[Convergence]] | [[Lax Equivalence Theorem]]
