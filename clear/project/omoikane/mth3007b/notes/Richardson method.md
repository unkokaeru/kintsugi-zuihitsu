# Richardson Method

The **Richardson method** (also called the symmetric or central-difference method) approximates the time derivative using a centred difference spanning two steps:

$$
y_{i+1} - y_{i-1} = 2 \, dt \cdot g(t_i, y_i)
$$

This is second-order in time ($O(dt^2)$ per step) because the centred difference cancels the first-order error term.

## Stability Analysis

Despite its higher formal accuracy, the Richardson method is **unconditionally unstable**. Applying it to the test ODE $\dot{y} = -y$ gives a two-step recurrence. Analysis shows that one of the two independent solutions grows without bound regardless of the step size $dt$. This means the numerical solution always diverges, even for stable ODEs with arbitrarily small $dt$.

This is in sharp contrast to methods like the [[Implicit Trapezoid Method]] and [[Implicit Euler method]], which are unconditionally stable. The Richardson method's instability makes it unsuitable for practical use, despite its apparent accuracy.

[[Stability of a method]] | [[Explicit Euler method]] | [[Implicit Trapezoid Method]] | [[Stability of an ODE]]
