# Reducing a Second-Order ODE

A second-order ODE of the form $y'' = f(t, y, y')$ can be **reduced** to a system of two first-order ODEs by introducing auxiliary variables.

## Substitution

Set

$$
z_1 = y, \qquad z_2 = y'
$$

Then

$$
z_1' = z_2, \qquad z_2' = f(t, z_1, z_2)
$$

This gives a two-component first-order system

$$
\mathbf{z}' = \begin{pmatrix} z_2 \\ f(t, z_1, z_2) \end{pmatrix}
$$

which can be solved with any standard method (e.g. [[Explicit Euler method]], [[Fourth order Runge-Kutta]]).

## General Case

An $n$th-order ODE $y^{(n)} = f(t, y, y', \ldots, y^{(n-1)})$ becomes an $n$-component first-order system by setting $z_m = y^{(m-1)}$ for $m = 1, \ldots, n$:

$$
z_m' = z_{m+1} \quad (m < n), \qquad z_n' = f(t, z_1, \ldots, z_n)
$$

This reduction is essential for applying standard numerical ODE solvers to higher-order problems such as Newton's second law.

[[Explicit Euler method]] | [[Fourth order Runge-Kutta]] | [[Runge-Kutta methods]]
