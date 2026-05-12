# Explicit Euler Method

The **explicit Euler method** (also called forward Euler) is the simplest first-order numerical method for solving ODEs of the form $\dot{y} = g(t, y)$.

$$
y_{i+1} = y_i + dt \cdot g(t_i, y_i)
$$

It uses the [[Finite differences|forward difference approximation]] for the derivative, so all quantities on the right-hand side are known at step $i$ - making it fully explicit.

## Order

The explicit Euler method is first-order: [[Global truncation error]] $O(dt)$, [[Local truncation error]] $O(dt^2)$.

## Stability

For the test ODE $\dot{y} = -ay$ (with $a > 0$), the method gives

$$
y_{i+1} = (1 - a \cdot dt) \, y_i
$$

The amplification factor is $|1 - a \cdot dt|$. The method is unstable when $|1 - a \cdot dt| > 1$, i.e. when

$$
a \cdot dt > 2
$$

So the explicit Euler method is **conditionally stable** - there is a maximum allowable step size. Compare with the [[Implicit Euler method]], which is unconditionally stable.

See [[Stability of a method]] for the general framework.

[[Implicit Euler method]] | [[Finite differences]] | [[Runge-Kutta methods]] | [[Local truncation error]] | [[Global truncation error]] | [[Stability of a method]] | [[Order of a method]]
