# Implicit Euler Method

The **implicit Euler method** (also called backward Euler) uses the [[Finite differences|backward difference approximation]] for the time derivative.

$$
y_{i+1} = y_i + dt \cdot g(t_{i+1}, y_{i+1})
$$

Unlike the [[Explicit Euler method]], $y_{i+1}$ appears on both sides, so the equation must be solved (e.g. algebraically or iteratively) to isolate $y_{i+1}$ at each step.

## Example: Linear Test ODE

For $\dot{y} = -ay$, the implicit Euler method gives

$$
y_{i+1} = y_i + dt \cdot (-a \cdot y_{i+1})
$$

$$
y_{i+1}(1 + a \cdot dt) = y_i
$$

$$
y_{i+1} = \frac{y_i}{1 + a \cdot dt}
$$

## Stability

The amplification factor is $\frac{1}{1 + a \cdot dt}$. Since $a > 0$ and $dt > 0$, this is always less than 1 in magnitude, so the implicit Euler method is **unconditionally stable** - it remains stable for any step size.

This comes at the cost of needing to solve for $y_{i+1}$ at each step, which for nonlinear $g$ requires a root-finding method.

See [[Stability of a method]] for the general framework.

[[Explicit Euler method]] | [[Finite differences]] | [[Stability of a method]] | [[BTCS scheme]]
