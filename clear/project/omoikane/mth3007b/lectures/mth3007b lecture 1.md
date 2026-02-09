# MTH3007b Lecture 1

> [!quote] Me, in the lecture
> zzzzz…

Various techniques can be used to find numerical solutions to analytical problems. However, there will always be slight inaccuracy; so, let's first discover how to measure that…

## Approximations and Errors

There are three main ways to measure error:

1. **[[Order of magnitude]]**: defined as a non-negative function $g(h)$ for a function $f(h)$ as $h\to 0$, where $\lim_{ h \to 0 } \frac{f(h)}{g(h)}=\text{finite constant}$; also written in "big O" notation as $f(h)=O(g(h)):h\to0$.
2. **[[Absolute error]]**: defined as $\epsilon=|v-v_{\text{approx}}|$ for some approximation $v_{\text{approx}}$ of a quantity $v$.
3. **[[Relative error]]**: defined for nonzero values of $v$, $\eta= \frac{|v-v_{\text{approx}}|}{|v|}=\frac{\epsilon}{|v|}$.

> [!example] Order of Magnitude (Taylor series of $\cos(x)$ around $x=0$)
> We define the Taylor series of cosine as $\cos(x)=1-\frac{1}{2}x^2+\frac{1}{24}x^4+\dots+\frac{(-1)^n}{(2n)!}x^{2n}+\dots$.
>
> If we only choose to use the first to terms of the expansion, such that $\cos(x)\approx1-\frac{1}{2}x^2$, then we can determine that there is an inaccuracy of exactly the next terms: $\frac{1}{24}x^4+\dots$. In the limit of $x\to 0$, we can write this inaccuracy as $O(x^4)$, and hence determine the constant (in this case $\frac{1}{24}$ by using the formula definition), or simply write…
>
> $\cos(x)=1- \frac{1}{2}x^2+O(x^4)$, or even $\cos(x)=1- \frac{1}{2}x^2+O(x^3)$ by determining that it also satisfies the equation with a constant of $0$, in this case.

## Differential Equations (RECAP)

Now that we can measure the accuracy of our numerical solutions, we might want to find some actual solutions. First, to recall some basic information on differential equations:

1. An **Ordinary Differential Equation (ODE)** is an equation involving the derivative(s) of an unknown function with respect to **one** independent variable.
2. A **Partial Differential Equation (ODE)** is an equation involving the derivative(s) of an unknown function with respect to **multiple** independent variables.
3. The **Order of a Differential Equation** is the highest occurring derivative in the equation; normally first or second order.

There are various real-world examples of each of these, such as the Navier-Stokes equation, Euler-Lagrange equations, chemistry rate equations, biology predator-prey equations, the Solow-Swan ODE in economics, or the Black-Scholes PDE in finance.

Often these equations will have families of solutions with parameter(s), not just a unique solution. To find a single solution, we'll impose **side conditions**: an initial conditions, such as the value of a function at its origin, or boundary conditions, such as giving two values of the function at arbitrary, distinct points.

## Finite Difference Method

We can then estimate ordinary derivatives by using their analytical formula, and approximating it with **[[finite differences]]**:

$$
\frac{df(x)}{dx}=\lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}\approx \frac{f(x+\Delta x)-f(x)}{\Delta x}
$$

Essentially, this is the difference between a tangent (the perfect analytical solution, touching the function at only one point) and a secant (the approximated numerical solution, touching the function at two points - preferably very close together, if accurate).

## Explicit Euler Method

Using this **Finite Difference Method**, we can solve Ordinary Differential Equations (ODEs). For example with the Euler method, where we first replace the derivatives with finite differences.

For an **initial value problem**, the ODE can be written as:

$$
\frac{f(x+\Delta x)-f(x)}{\Delta x}\approx g(x,f(x))\implies\boxed{f(x+\Delta x)_{\text{approx}}\approx f(x)+\Delta x \cdot g(x,f(x))}
$$

This is called the **[[explicit Euler method]]**, or the **forward Euler method**, and we can calculate the total number of integration steps as $N_{\text{int}}=\frac{|x_{\text{end}}-x_{\text{start}}|}{\Delta x}$ and hence $x_{\text{end}}=xN_{\text{int}}=x_{0}+N_{\text{int}}\Delta x$. A smaller $\Delta x$ we hence naturally improve the accuracy, but at a computational cost.

> [!note] Explore the rest of the notes separate to the lecture notes, or hope he recaps - the lecture notes aren't very well-written from this point.

However, this also introduces new types of error that we can quantise. For instance, the **local truncation error**: the error after **one integration step** due to truncating a function, for instance a Taylor series. Similarly, the **global truncation error** is the error due to integrating over the whole interval.

Both of these errors can be calculated directly using the "Big O" notation from before, and can then give us the **order of a method**: how the global truncation error varies with integration step. For instance, the Euler method is a **first order algorithm**.

If we wanted to program this, then we could use the following Python code:

```python runnable
def explicit_euler_method(
    derivative_function: callable,
    initial_value: float,
    time_start: float,
    time_end: float,
    time_step: float,
) -> tuple[list[float], list[float]]:
    """Solve an ODE using the explicit Euler method.

    The explicit Euler method uses the approximation:
    y_{n+1} = y_n + h * f(t_n, y_n)

    Args:
        derivative_function: Function f(t, y) that computes dy/dt.
        initial_value: Initial condition y(t_0).
        time_start: Starting time t_0.
        time_end: Ending time t_max.
        time_step: Time step size h (Delta t).

    Returns:
        Tuple of (time_values, solution_values) lists.
    """
    number_of_steps = int((time_end - time_start) / time_step)
    time_values = [
        time_start + i * (time_end - time_start) / number_of_steps
        for i in range(number_of_steps + 1)
    ]
    solution_values = [0.0] * (number_of_steps + 1)
    solution_values[0] = initial_value

    for step_index in range(number_of_steps):
        current_time = time_values[step_index]
        current_value = solution_values[step_index]
        derivative = derivative_function(current_time, current_value)
        solution_values[step_index + 1] = current_value + time_step * derivative

    return time_values, solution_values


# dy/dt = -2y, y(0) = 1  →  exact solution: y = e^(-2t)
time, y = explicit_euler_method(
    derivative_function=lambda t, y: -2 * y,
    initial_value=1.0,
    time_start=0.0,
    time_end=1.0,
    time_step=0.1,
)

for t_i, y_i in zip(time, y):
    print(f"t={t_i:f}  y≈{y_i:f}")
```

After using this algorithm however, you may observe that it becomes **unstable** for $a \Delta t>2$ and shows **oscillatory behaviour** for $a \Delta t>1$; it isn't great for large timesteps!

## Implicit Euler Method

Aside from this explicit method, we may also have an implicit relation where a dependent variable is not isolated in the equation; sometimes we can convert between the two, but this is not always possible.

In these cases, we can write the definition of a derivative slightly differently, replacing $h$ with $-h$. This creates a completely different equation, but one that is evaluated identically under the limit:

$$
\frac{df(x)}{dx}=\lim_{ h \to 0 } \frac{f(x)-f(x-h)}{h}\approx \frac{f(x)-f(x-\Delta x)}{\Delta x}
$$

This is again a **finite difference**, but a **backward difference approximation (BDA)** instead of a **forward difference approximation (FDA)**.

For implicit relations, this can give rise to the **[[implicit Euler method]]**, or aptly named **backward Euler method**, similar to before (just shifting time forwards slightly to neaten the formula)…

$$
\frac{y(t)-y(t-\Delta t)}{\Delta t}\approx g(t,y(t))\implies\boxed{y(t+\Delta t)_{\text{approx}}\approx y(t)+\Delta t \cdot g(t+\Delta t,y(t+\Delta t))}
$$

---

## Pre-Lecture Notes from [[mth3007b lecture 1 notes.pdf|University Notes]]

- *Missing due to how late the notes were released - no rough notes taken during class either, due to incredibly slow pace*.
