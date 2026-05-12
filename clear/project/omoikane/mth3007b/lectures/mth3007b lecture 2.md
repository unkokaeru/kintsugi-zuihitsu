# MTH3007b Lecture 2

> [!quote] Me, in the lecture
> zzzzz...

Lecture 1 established the explicit and implicit Euler methods and showed that both are first-order: global error $O(dt)$. This session introduces higher-order **[[Runge-Kutta methods]]** that achieve $O(dt^2)$ global error by evaluating the right-hand side $g(t, y)$ at intermediate points within each timestep.

## General Form of Runge-Kutta Methods

A single-step method can always be written as

$$
y_{i+1} = y_i + dt \cdot \phi(t_i, y_i, dt)
$$

where $\phi$ is called the **[[increment function]]**. For explicit Euler, $\phi = g(t_i, y_i)$. Higher-order methods use more sophisticated choices of $\phi$ that incorporate information about $g$ at multiple points.

## Midpoint Method

### Formula

The **[[midpoint method]]** evaluates $g$ at the midpoint of the interval $[t_i, t_{i+1}]$:

$$
\boxed{y_{i+1} = y_i + dt \cdot g\!\left(t_i + \frac{dt}{2},\; y_i + g(t_i, y_i)\frac{dt}{2}\right)}
$$

The argument $y_i + g(t_i, y_i)\,dt/2$ is an Euler-style estimate of $y$ at the midpoint - this is then used to evaluate $g$ there.

> [!note]
> The midpoint method is a second-order method: global error $O(dt^2)$. This is a full order of magnitude improvement over explicit Euler.

### How it achieves second order

The key idea is that by evaluating $g$ at the midpoint rather than the left endpoint, the method implicitly incorporates information about $g'$ through the way $y$ changes across the interval. The Taylor expansion of the resulting scheme matches the exact solution to $O(dt^2)$ per step, giving $O(dt^2)$ global error (since the global error is one order lower in $dt$ than the LTE for consistent methods... wait, actually: LTE $= O(dt^3)$ per step, global $= O(dt^2)$).

## Ralston's Method

### Formula

**[[Ralston's method]]** is another second-order Runge-Kutta scheme. It uses two stages:

$$
k_1 = g(t_i, y_i)
$$

$$
k_2 = g\!\left(t_i + \frac{2\,dt}{3},\; y_i + \frac{2\,dt\,k_1}{3}\right)
$$

$$
\boxed{y_{i+1} = y_i + dt\!\left(\frac{k_1}{4} + \frac{3\,k_2}{4}\right)}
$$

The weights $1/4$ and $3/4$ are chosen to minimise the leading error coefficient among all second-order two-stage RK methods.

> [!important]
> Both the midpoint method and Ralston's method are second-order: global error $\sim O(dt^2)$. Halving $dt$ reduces the error by a factor of four.

## Comparison with Explicit Euler

For small enough $dt$, both second-order methods produce significantly smaller errors than explicit Euler. Ralston's method is generally more accurate than the midpoint method at the same $dt$ due to its optimised coefficients.

> [!example]
> Applied to $\dot{y} = bt - ay$ (a stiff-ish equation for large $a$): at $dt = 0.01$, a second-order method yields much smaller deviation from the exact solution than explicit Euler at the same step size.

The tradeoff is computational cost: each step of a two-stage RK method requires two evaluations of $g$ versus one for Euler. In practice, the improved accuracy per unit cost makes second-order methods preferable for most problems.

---

## Pre-Lecture Notes from [[mth3007b lecture notes 2.pdf|University Notes]]

- General RK form: $y_{i+1} = y_i + dt \cdot \phi(t_i, y_i, dt)$ where $\phi$ is the increment function
- **Midpoint method**: $y_{i+1} = y_i + dt \cdot g(t_i + dt/2,\; y_i + g(t_i,y_i)\,dt/2)$ - second-order ($O(dt^2)$ global error)
- **Ralston's method**: two-stage RK with $k_1 = g(t_i, y_i)$, $k_2 = g(t_i + 2dt/3,\; y_i + 2dt\,k_1/3)$, update $y_{i+1} = y_i + dt(k_1/4 + 3k_2/4)$
- Both methods are second-order; Ralston's is generally more accurate than the midpoint method
- Cost: two $g$-evaluations per step (vs one for Euler), but $O(dt^2)$ error makes this worthwhile
- Next session: formal derivation of second-order RK coefficients via Taylor expansion, and the RK4 formula
