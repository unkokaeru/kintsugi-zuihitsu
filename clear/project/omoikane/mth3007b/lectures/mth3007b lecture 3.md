# MTH3007b Lecture 3

> [!quote] Me, in the lecture
> zzzzz…

Lecture 2 introduced the midpoint and Ralston methods as second-order alternatives to explicit Euler, with global error $O(dt^2)$. This session derives the conditions that make a two-stage RK method second-order, presents the fourth-order Runge-Kutta formula (RK4), and then introduces **[[Implicit Trapezoid Method|symmetric methods]]** and the **[[Implicit Trapezoid Method]]** as a practically useful symmetric scheme.

## Derivation of Second-Order RK Coefficients

### General Two-Stage Form

Write a general two-stage explicit RK method as

$$
\phi = a_1 k_1 + a_2 k_2
$$

$$
k_1 = g(t_i, y_i)
$$

$$
k_2 = g(t_i + p_1\,dt,\; y_i + q_{11}\,dt\,k_1)
$$

The four parameters are $a_1$, $a_2$, $p_1$, $q_{11}$.

### Taylor Expansion Matching

Expanding $k_2$ in a Taylor series about $(t_i, y_i)$ and comparing with the Taylor expansion of the exact solution $y(t_{i+1})$, matching coefficients of $dt^0$, $dt^1$, and $dt^2$ yields three conditions:

$$
a_1 + a_2 = 1
$$

$$
a_2 p_1 = \frac{1}{2}
$$

$$
a_2 q_{11} = \frac{1}{2}
$$

> [!important]
> Three equations in four unknowns - one free parameter. The family of second-order RK methods is a one-parameter family.

### Special Cases

Setting the free parameter gives specific methods:

- **Midpoint method**: $a_2 = 1$, $a_1 = 0$, $p_1 = q_{11} = 1/2$
- **Ralston's method**: $a_2 = 3/4$, $a_1 = 1/4$, $p_1 = q_{11} = 2/3$

Both satisfy the three coefficient equations, confirming they are second-order.

## RK4 - The Fourth-Order Method

**[[Fourth order Runge-Kutta|RK4]]** (the classical fourth-order Runge-Kutta method) uses four stages:

$$
k_1 = g(t_i, y_i)
$$

$$
k_2 = g\!\left(t_i + \frac{dt}{2},\; y_i + \frac{dt\,k_1}{2}\right)
$$

$$
k_3 = g\!\left(t_i + \frac{dt}{2},\; y_i + \frac{dt\,k_2}{2}\right)
$$

$$
k_4 = g(t_i + dt,\; y_i + dt\,k_3)
$$

$$
\boxed{y_{i+1} = y_i + \frac{dt}{6}(k_1 + 2k_2 + 2k_3 + k_4)}
$$

> [!important]
> RK4 is a fourth-order method: global error $O(dt^4)$. Halving $dt$ reduces the error by a factor of 16. Four $g$-evaluations per step.

## Symmetric Methods

### Definition

A numerical method is **[[Implicit Trapezoid Method|symmetric]]** (or time-reversible) if running the method forward by one step and then backward by one step returns exactly to the starting point. More precisely, a method $y_{i+1} = \Phi(y_i, dt)$ is symmetric if

$$
\Phi(\Phi(y_i, dt), -dt) = y_i
$$

### Why Symmetry Matters

Symmetric methods preserve certain geometric properties of the exact flow, in particular they tend to conserve energy-like quantities over long integrations. This makes them preferable for problems in mechanics and other settings where conservation matters.

### Explicit Euler is Not Symmetric

The explicit Euler step forward gives $y_{i+1} = y_i + dt\,g(y_i)$. Applying the method backward from $y_{i+1}$ with step $-dt$:

$$
y_i^* = y_{i+1} + (-dt)\,g(y_{i+1}) = y_i + dt\,g(y_i) - dt\,g(y_i + dt\,g(y_i))
$$

This is not equal to $y_i$ in general - explicit Euler is not symmetric.

### Implicit Trapezoid is Symmetric

The **[[Implicit Trapezoid Method]]** (also called the trapezoidal method) averages the right-hand side at both endpoints:

$$
\frac{y_{i+1} - y_i}{dt} = \frac{1}{2}\bigl[g(t_i, y_i) + g(t_{i+1}, y_{i+1})\bigr]
$$

> [!important]
> The implicit trapezoid method is symmetric: applying the method with $-dt$ from $y_{i+1}$ recovers $y_i$ exactly.

This can be verified by swapping $i \leftrightarrow i+1$ and $dt \leftrightarrow -dt$ in the update rule - the equation is invariant under this exchange.

### Other Preserved Quantities

**symplectic methods** (Verlet integrators and their relatives) preserve the symplectic structure of Hamiltonian systems exactly. These are not covered in this module - they exist and are important in molecular dynamics and celestial mechanics, but we do not derive or implement them here.

## Heun's Method Vs Implicit Trapezoid

> [!warning]
> **Heun's method** (also called the explicit trapezoid method) is NOT the same as the implicit trapezoid method. Heun's method is an explicit predictor-corrector that approximates $g(t_{i+1}, y_{i+1})$ using an Euler predictor step, then averages. The implicit trapezoid solves for $y_{i+1}$ simultaneously - it is a genuinely implicit method.

The distinction matters for stability: the implicit trapezoid is unconditionally stable for suitable equations, while Heun's method (being explicit) is only conditionally stable.

## Implicit Trapezoid: Worked Example

### Problem: $dy/dt = Bt - ay$

With $g(t, y) = bt - ay$, the implicit trapezoid equation becomes:

$$
\frac{y_{n+1} - y_n}{dt} = \frac{1}{2}\bigl[(bt_n - ay_n) + (bt_{n+1} - ay_{n+1})\bigr]
$$

Expanding and collecting $y_{n+1}$ terms:

$$
y_{n+1} - y_n = \frac{dt}{2}\left[b(t_n + t_{n+1}) - a(y_n + y_{n+1})\right]
$$

$$
y_{n+1}\!\left(1 + \frac{a\,dt}{2}\right) = y_n\!\left(1 - \frac{a\,dt}{2}\right) + \frac{dt\,b}{2}(t_n + t_{n+1})
$$

Noting that $(t_n + t_{n+1})/2 = t_n + dt/2 = t + dt/2$:

$$
\boxed{y_{n+1} = \frac{y_n\!\left(1 - \dfrac{a\,dt}{2}\right) + dt\,b\!\left(t + \dfrac{dt}{2}\right)}{1 + \dfrac{a\,dt}{2}}}
$$

The Python implementation of this single update step is:

```python runnable
ynext = (ynow*(1-a*dt/2.0) + dt*b*(t+dt/2.0)) / (1.0 + a*dt/2.0)
```

---

## Pre-Lecture Notes from [[mth3007b lecture notes 3.pdf|University Notes]]

- **2nd-order RK coefficients**: Taylor expansion matching gives three equations in four unknowns ($a_1 + a_2 = 1$, $a_2 p_1 = 1/2$, $a_2 q_{11} = 1/2$); one free parameter
- Midpoint: $a_1=0, a_2=1$; Ralston: $a_1=1/4, a_2=3/4$
- **RK4**: four-stage method, global error $O(dt^4)$; update uses $k_1 + 2k_2 + 2k_3 + k_4$ weighted sum
- **Symmetric method**: $\Phi(\Phi(y_i, dt), -dt) = y_i$; preserves time-reversal symmetry; explicit Euler fails this, implicit trapezoid passes
- **Symplectic methods** (e.g. Verlet) preserve Hamiltonian structure - not covered here
- **Heun's method** is the explicit trapezoid - NOT the same as implicit trapezoid; Heun is conditionally stable, implicit trapezoid is unconditionally stable
- Implicit trapezoid for $\dot{y} = bt - ay$: $y_{n+1} = [y_n(1 - a\,dt/2) + dt\,b(t + dt/2)]/(1 + a\,dt/2)$
- Next session: formal stability analysis, Richardson method, and systems of ODEs
