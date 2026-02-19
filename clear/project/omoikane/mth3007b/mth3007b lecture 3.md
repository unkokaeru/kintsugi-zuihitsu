# MTH3007B Lecture 3

> [!quote] Me, in the lecture
>
> zzzzz…

Again, this session began with recap. Then, we generalised the Runge-Kutta methods!

## General Order Runge-Kutta Methods

As stated before, any explicit Runge-Kutta method can be written in the form $y_{i+1} \approx y_i + \Delta t \cdot \phi(t_i, y_i, \Delta t)$, where $\phi$ is the **increment function**.

For the second order, the increment function generalises to…

$$
\phi(y_i, t_i, \Delta t) = a_1 k_1(t_i, y_i) + a_2 k_2(t_i, y_i, \Delta t):k_1 = g(t_i, y_i), k_2 = g(t_i + p_1\Delta t,\; y_i + q_{11}\Delta t \cdot k_1)
$$

Which can be specified with the four unknowns, $a_1, a_2, p_1, q_{11}$. We can find these by using a Taylor expansion on the general second order Runge-Kutta form, $y_{i+1} \approx y_i + \Delta t \cdot \phi(t_i, y_i, \Delta t)$, using the aforementioned increment function, and then equating equivalent terms.

This will give various solutions, as there are then only three equations to solve for four variables, leaving one free variable. This is what results in variations, like the midpoint and Ralston methods:

| Method   | $a_2$ | $a_1$ | $p_1 = q_{11}$ |
| -------- | ----- | ----- | -------------- |
| Midpoint | $1$   | $0$   | $1/2$          |
| Ralston  | $3/4$ | $1/4$ | $2/3$          |

This method can be generalised to any order, but the most common is the **[[fourth order Runge-Kutta]]**:

$$
y_{i+1} \approx y_i + \frac{\Delta t}{6}(k_1 + 2k_2 + 2k_3 + k_4):\begin{cases}
k_1 = g(t_i, y_i) \\
k_2 = g\!\left(t_i + \tfrac{\Delta t}{2},\; y_i + \tfrac{\Delta t}{2}k_1\right) \\
k_3 = g\!\left(t_i + \tfrac{\Delta t}{2},\; y_i + \tfrac{\Delta t}{2}k_2\right) \\
k_4 = g(t_i + \Delta t,\; y_i + \Delta t\, k_3)
\end{cases}
$$

## Symmetric Methods

A method $y_{i+1} \approx \Phi(\Delta t, y_i)$ is called **symmetric** (or **time-reversible**) if swapping $i \leftrightarrow i+1$ and $\Delta t \leftrightarrow -\Delta t$ leaves it invariant - i.e., one step forward then one step backward returns exactly to the starting point.

This matters because many physically motivated ODEs are themselves reversible in time: replacing $t$ by $-t$ recovers the same equation. The canonical example is any equation of the form $u''(t) = g(u(t))$, such as Newton's equations of motion. Using a non-symmetric integrator on such a system introduces an artificial long-time drift.

> [!warning] All explicit Runge-Kutta methods are **not** symmetric, and therefore all suffer from long-time drift.

An example of this is the **[[Implicit Trapezoid Method]]**, for $\dot{y}(t) = g(t, y(t))$, then…

$$
y_{i+1} \approx y_i + \frac{\Delta t}{2}\!\left(g(t_i, y_i) + g(t_{i+1}, y_{i+1})\right)
$$

It is **implicit** since $y_{i+1}$ appears on both sides, hence this equation must be rearranged to isolate $y_{i+1}$ before implementation, analogously to the implicit Euler method. It is 2nd-order, with global truncation error $O(\Delta t^2)$.

### Proof: Trapezoid Is Symmetric

The key observation is that $y_i$ and $y_{i+1}$ play **symmetric roles** in the trapezoid equation. Rearranging:

$$
y_i \approx y_{i+1} - \frac{\Delta t}{2}\!\left(g(t_i, y_i) + g(t_{i+1}, y_{i+1})\right)
$$

This is exactly the original equation with $i \leftrightarrow i+1$ and $\Delta t \to -\Delta t$, confirming symmetry.

### Proof: Explicit Euler Is Not Symmetric

Explicit Euler is $y_{i+1} \approx y_i + \Delta t\, g(t_i, y_i)$. Rearranging gives

$$
y_i \approx y_{i+1} - \Delta t\, g(t_i, y_i)
$$

But integrating **backward** with the explicit Euler rule (swapping $i \leftrightarrow i+1$, $\Delta t \to -\Delta t$) would give

$$
y_i \approx y_{i+1} - \Delta t\, g(t_{i+1}, y_{i+1})
$$

These two are **not the same equation** - the backward step evaluates $g$ at $t_{i+1}$, making it the implicit Euler variant. Hence explicit Euler is not symmetric, with a bias towards $y_i$.

---

## Pre-Lecture Notes from [[mth3007b lecture notes 3.pdf|University Notes]]

- *No priming done or rough notes during - hopefully next week!*
