# MTH3007B Lecture 5

Today's session follows a familiar structure, starting with a recap and feedback on the stability of the explicit and implicit Euler methods we covered in the previous lecture. We then move into the main content, exploring how to compute integrals by reframing them as initial value problems, before finally learning how to solve higher-order ordinary differential equations by reducing them to systems of first-order equations.

## Recap: Euler Method Stability

We can evaluate the stability of our numerical schemes by applying them to a standard test equation, such as a simple exponential decay model.

### Explicit (Forward) Euler

The **[[explicit Euler Method]]** is only conditionally stable. When applied to the test equation, the numerical scheme becomes:

$$
\boxed{y(t + \Delta t) = (1 - a\Delta t)y(t)}
$$

> [!warning] Instability Condition
> For $a > 0$, the explicit scheme becomes unstable if $a\Delta t > 2$. In this scenario, $|1 - a\Delta t| > 1$, causing the errors to amplify and the numerical solution to run away from the true analytical solution as the number of steps approaches infinity.

### Implicit (Backward) Euler

By contrast, the implicit (backward) Euler method is unconditionally stable for this stable ODE. The scheme is defined as:

$$
\boxed{y(t + \Delta t) = \frac{y(t)}{1 + a\Delta t}}
$$

Since $a > 0$ and $\Delta t > 0$, the denominator $1 + a\Delta t$ is always strictly greater than $1$. Thus, the multiplier is less than $1$, ensuring the solution always converges to zero irrespective of the step size $\Delta t$.

---

## Numerical Evaluation of Integrals

We can compute a definite integral numerically by differentiating it and solving the associated **Ordinary Differential Equation** (ODE).

If we want to evaluate an integral of the form $F(z) = \int_a^z f(x) \, dx$, we can differentiate both sides with respect to $z$ to obtain a first-order ODE:

$$
\boxed{\frac{dF(z)}{dz} = f(z)}
$$

> [!important] Initial Value Problem
> To solve this ODE, we need an initial condition. Since the integral from $a$ to $a$ represents an area of zero, our initial condition is naturally $\displaystyle F(a) = 0$.

Once formulated this way, we can use any of our standard numerical methods - such as the **[[explicit Euler method]]**, **[[Implicit Trapezoid Method]]**, or **[[Runge-Kutta Methods|RK4]]** - to find the value of the integral by marching forward in $z$.

---

## Solving Higher-Order ODEs

So far, our numerical methods only apply to first-order ODEs. To numerically integrate an ODE that involves second or higher-order derivatives, we must reduce its order.

### Order Reduction Method

An $n$-th order ODE can be rewritten as a system of $n$ coupled first-order ODEs. For a general $n$-th order equation $\frac{d^n y}{dt^n} = g(t, y, y', \dots, y^{(n-1)})$, we introduce $n$ new variables such that $z_m(t)$ corresponds to the $(m-1)$-th derivative of $y$:

$$
\begin{cases}
z_1(t) = y(t) \\
z_2(t) = y'(t) \\
\vdots \\
z_n(t) = y^{(n-1)}(t)
\end{cases}
$$

Differentiating this system gives us our solvable first-order scheme:

$$
\boxed{z_m' = z_{m+1} \quad \text{for } 1 \leq m < n}
$$

$$
\boxed{z_n' = g(t, z_1, z_2, \dots, z_n)}
$$

> [!example] [[Reducing a Second-Order ODE]]
> Suppose we have the specific second-order equation:
> $\displaystyle \frac{d^2y}{dt^2} + \frac{dy}{dt} = (1 + 4t)\sqrt{y}$
>
> First, isolate the highest derivative:
> $\displaystyle \frac{d^2y}{dt^2} = (1 + 4t)\sqrt{y} - \frac{dy}{dt}$
>
> Introduce $z_1 = y$ and $z_2 = y'$. The reduced first-order system is:
> $\displaystyle z_1' = z_2$
> $\displaystyle z_2' = (1 + 4t)\sqrt{z_1} - z_2$
>
> We can now apply standard methods like Forward Euler to this coupled system simultaneously.

### Python Implementation

Here is how we might implement the Forward Euler method to solve a second-order ODE using the reduction technique we just defined.

```python runnable
import numpy as np
from typing import Callable, Tuple

def solve_second_order_ode_euler(
    derivative_function: Callable[[float, float, float], float],
    initial_t: float,
    initial_y: float,
    initial_y_prime: float,
    step_size: float,
    number_of_steps: int
) -> Tuple[np.ndarray, np.ndarray, np.ndarray]:
    """
    Solves a second-order ODE using the Forward Euler method by reducing it to a system of first-order ODEs.

    Args:
        derivative_function: A function that returns the second derivative given (t, y, y_prime).
        initial_t: The starting value of the independent variable.
        initial_y: The initial condition for y.
        initial_y_prime: The initial condition for the first derivative of y.
        step_size: The step size for the numerical integration.
        number_of_steps: The number of steps to perform.

    Returns:
        A tuple containing arrays for t values, y values, and y_prime values.
    """
    t_values = np.zeros(number_of_steps)
    y_values = np.zeros(number_of_steps)
    y_prime_values = np.zeros(number_of_steps)

    t_values = initial_t
    y_values = initial_y
    y_prime_values = initial_y_prime

    for step_index in range(1, number_of_steps):
        current_t = t_values[step_index - 1]
        current_y = y_values[step_index - 1]
        current_y_prime = y_prime_values[step_index - 1]

        # First equation: z1' = z2 (y' = y_prime)
        next_y = current_y + step_size * current_y_prime
        
        # Second equation: z2' = g(t, z1, z2)
        next_y_prime = current_y_prime + step_size * derivative_function(current_t, current_y, current_y_prime)

        t_values[step_index] = current_t + step_size
        y_values[step_index] = next_y
        y_prime_values[step_index] = next_y_prime

    return t_values, y_values, y_prime_values
```

---

## Pre-Lecture Notes from [[mth3007b lecture notes 5.pdf|University Notes]]

- **Stability Analysis**: Review of how $y(t + \Delta t) = (1 - a\Delta t)y(t)$ limits explicit Euler $\Delta t$ choices compared to the stable implicit approach.
- **Integral as an ODE**: Converting $F(z) = \int_a^z f(x) \, dx$ into the initial value problem $dF/dz = f(z)$ with $F(a) = 0$.
- **Higher-Order ODEs**: Demonstrated that numerical solvers require rewriting $n$-th order ODEs into $n$ first-order differential equations using substitution $z_m(t) = y^{(m-1)}(t)$.
- **Looking Ahead**: Next session, we'll likely expand upon solving these newly formed systems of first-order ODEs in vector formats and assessing their broader stability.
