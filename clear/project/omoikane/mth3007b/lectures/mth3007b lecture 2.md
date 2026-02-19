# MTH3007b Lecture 2

> [!quote] …
> …

The beginning of this lecture started with a lot of recap of the last lecture and basic programming; like using integers for countable numbers and floats for non-countable numbers. Then, we quickly covered round-off errors - exactly what you'd assume, errors that occur due to rounding.

After finishing that off, we dived into actual numerical methods: higher order integration methods…

## Runge-Kutta Methods

For each Euler method, their global error is $O(\Delta t)$ and order is one. We can generalise these however, to get the Runge-Kutta methods:

$$
y_{i+1}\approx y_{i}+\Delta t\cdot \phi(t_{i},y_{i},\Delta t)
$$

Where $\phi$ is called the **increment function**, and the simplest case of this is $\phi(t_{i},y_{i},\Delta t)=g(t_{i},y_{i})$ - the forward Euler method.

The second order Runge-Kutta method, also called the **midpoint method**, which evaluates a function $g$ 

---

## Pre-Lecture Notes from [[mth3007b lecture notes 2.pdf|University Notes]]

- Recalling Euler method and applications.
- Discussing function value types: integers, floats, etc.
- Exploring round-off errors.
- Exploring higher order integration methods, like Runge-Kutta methods, midpoint method, and Ralston's method.
