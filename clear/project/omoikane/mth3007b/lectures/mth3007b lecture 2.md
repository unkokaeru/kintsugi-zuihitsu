# MTH3007b Lecture 2

> [!quote] Me, in the lecture
>
> zzzzz…

The beginning of this lecture started with a lot of recap of the last lecture and basic programming; like using integers for countable numbers and floats for non-countable numbers. Then, we quickly covered round-off errors - exactly what you'd assume, errors that occur due to rounding.

After finishing that off, we dived into actual numerical methods: higher order integration methods…

## Runge-Kutta Methods

For each Euler method, their global error is $O(\Delta t)$ and order is one. We can generalise these however, to get the [[Runge-Kutta methods:]]

$$
y_{i+1}\approx y_{i}+\Delta t\cdot \phi(t_{i},y_{i},\Delta t)
$$

Where $\phi$ is called the **increment function**, and the simplest case of this is $\phi(t_{i},y_{i},\Delta t)=g(t_{i},y_{i})$ - the forward Euler method.

The second order Runge-Kutta method, also called the **[[midpoint method]]**, which evaluates a function $g$ at each midpoint between timesteps:

$$
y_{i+1}\approx y_{i}+\Delta t\cdot g\left( t_{i}+\frac{\Delta t}{2},y_{i}+g(t_{i},y_{i})\frac{\Delta t}{2} \right)
$$

Alternatively, we can use a modified version of this evaluating two-thirds through the interval instead of halfway. This is called **[[Ralston's method]]**:

$$
y_{i+1}\approx y_{i}+\Delta t\cdot \left( \frac{1}{4}g(t_{i},y_{i}) + \frac{3}{4}g\left( t_{i}+ \frac{2}{3}\Delta t,y_{i}+ \frac{2}{3}g(t_{i},y_{i})\Delta t \right) \right)
$$

However, this is a bit easier to implement by breaking it into intermediate variables, namely $k_{1}=g(t_{i},y_{i})$ and $k_{2}=g\left(  t_{i}+ \frac{2}{3}\Delta t,y_{i}+ \frac{2}{3}\Delta t\cdot k_{1} \right)$:

$$
y_{i+1}\approx y_{i}+\Delta t\cdot \left( \frac{1}{4}k_{1}+ \frac{3}{4}k_{2} \right)
$$

---

## Pre-Lecture Notes from [[mth3007b lecture notes 2.pdf|University Notes]]

- Recalling Euler method and applications.
- Discussing function value types: integers, floats, etc.
- Exploring round-off errors.
- Exploring higher order integration methods, like Runge-Kutta methods, midpoint method, and Ralston's method.
