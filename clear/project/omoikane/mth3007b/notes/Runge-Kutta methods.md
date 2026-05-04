# Runge-Kutta Methods

A family of one-step explicit (or implicit) methods for ODEs $\dot{y}=g(t,y)$ of the form

$$
y_{i+1}\approx y_{i}+\Delta t\cdot \phi(t_{i},y_{i},\Delta t),
$$

where $\phi$ - the **increment function** - is a weighted average of $g$ evaluated at several points within the interval $[t_{i},t_{i}+\Delta t]$. By choosing the points and weights, you trade computational cost for [[Order of a method]].

## The Family

| Stages | Method | Order | LTE |
|---|---|---|---|
| 1 | [[Explicit Euler method]] | 1 | $O(\Delta t^{2})$ |
| 2 | [[Midpoint method]], [[Ralston method]] | 2 | $O(\Delta t^{3})$ |
| 3 | Heun's third-order, Kutta's | 3 | $O(\Delta t^{4})$ |
| 4 | [[Fourth order Runge-Kutta]] (the classic) | 4 | $O(\Delta t^{5})$ |

The number of *stages* (function evaluations of $g$ per step) equals the order of the method up to order 4. Above order 4, more stages are needed (Butcher's bound).

## RK4 in Detail

The most popular general-purpose ODE solver:

$$
k_{1}=g(t_{i},y_{i})
$$

$$
k_{2}=g\!\left(t_{i}+\tfrac{\Delta t}{2},\,y_{i}+\tfrac{\Delta t}{2}k_{1}\right)
$$

$$
k_{3}=g\!\left(t_{i}+\tfrac{\Delta t}{2},\,y_{i}+\tfrac{\Delta t}{2}k_{2}\right)
$$

$$
k_{4}=g(t_{i}+\Delta t,\,y_{i}+\Delta t\,k_{3})
$$

$$
y_{i+1}=y_{i}+\frac{\Delta t}{6}(k_{1}+2k_{2}+2k_{3}+k_{4}).
$$

Four function evaluations per step; global error $O(\Delta t^{4})$. See [[Fourth order Runge-Kutta]].

## General Construction

A general explicit $s$-stage RK method has Butcher tableau

$$
\begin{array}{c|cccc}
c_{1} & 0 & & & \\
c_{2} & a_{21} & 0 & & \\
\vdots & \vdots & \ddots & \ddots & \\
c_{s} & a_{s1} & \cdots & a_{s,s-1} & 0\\
\hline
& b_{1} & b_{2} & \cdots & b_{s}
\end{array}
$$

with stages $k_{j}=g(t_{i}+c_{j}\Delta t,\,y_{i}+\Delta t\sum_{\ell<j}a_{j\ell}k_{\ell})$ and update $y_{i+1}=y_{i}+\Delta t\sum_{j}b_{j}k_{j}$. The order conditions on $\{c,a,b\}$ are derived by matching Taylor expansions to the desired order.

## Implicit Variants

[[Implicit Euler method]] and the [[Implicit Trapezoid Method]] are implicit RK methods. They have larger stability regions (often unconditionally stable) at the cost of solving an implicit equation per step. Implicit RK methods like Gauss-Legendre, Radau, SDIRK are workhorses for stiff problems.
