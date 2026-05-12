# Systems of ODEs

A **system of ODEs** is a set of coupled first-order equations that can be written in vector form:

$$
\dot{\mathbf{y}} = \mathbf{g}(t, \mathbf{y})
$$

where $\mathbf{y} \in \mathbb{R}^n$ is the state vector and $\mathbf{g} : \mathbb{R} \times \mathbb{R}^n \to \mathbb{R}^n$ is the vector-valued right-hand side.

## Applying Standard Solvers

All the standard scalar ODE methods (explicit Euler, RK4, implicit trapezoid, etc.) generalise directly to systems by replacing scalar operations with vector operations. For example, the explicit Euler update becomes:

$$
\mathbf{y}_{i+1} = \mathbf{y}_i + dt \cdot \mathbf{g}(t_i, \mathbf{y}_i)
$$

In Python, this requires no structural changes: `numpy` arrays handle the vector arithmetic.

## Example: Predator-Prey (Lotka-Volterra)

$$
\dot{x} = ax - bxy, \qquad \dot{y} = -cy + dxy
$$

With state vector $\mathbf{y} = (x, y)^\top$, the right-hand side is:

$$
\mathbf{g}(t, \mathbf{y}) = \begin{pmatrix} ax - bxy \\ -cy + dxy \end{pmatrix}
$$

## Higher-Order ODEs

A single $n$th-order ODE can be reduced to a system of $n$ first-order ODEs - see [[Reducing a Second-Order ODE]].

[[Explicit Euler method]] | [[Fourth order Runge-Kutta]] | [[Lotka-Volterra equations]] | [[Reducing a Second-Order ODE]] | [[Runge-Kutta methods]]
