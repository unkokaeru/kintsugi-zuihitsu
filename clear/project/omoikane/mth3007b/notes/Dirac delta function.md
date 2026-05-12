# Dirac Delta Function

The **Dirac delta function** $\delta(x)$ is a generalised function (distribution) defined by two properties:

$$
\delta(x) = 0 \quad \text{for } x \neq 0, \qquad \int_{-\infty}^{\infty} \delta(x) \, dx = 1
$$

It is not a function in the classical sense but acts as a limit of sharply peaked functions (e.g. a Gaussian with vanishing width).

## Sifting Property

For any smooth function $f$:

$$
\int_{-\infty}^{\infty} f(x) \, \delta(x - a) \, dx = f(a)
$$

The delta function "sifts out" the value of $f$ at the point $x = a$.

## Use in Diffusion

In the context of this module, $\delta(x)$ appears as the **initial condition** for the [[Heat equation]]: a quantity concentrated at a single point at $t = 0$. The solution is then a spreading Gaussian:

$$
u(x, t) = \frac{1}{\sqrt{4\pi\alpha t}} \exp\!\left(-\frac{x^2}{4\alpha t}\right)
$$

This is the **Green's function** (fundamental solution) of the heat equation. For the [[Wiener process]], the probability density starts as $\delta(w)$ and spreads as a Gaussian with variance $t$ (corresponding to $\alpha = 1/2$).

[[Heat equation]] | [[Wiener process]] | [[Boundary conditions]]
