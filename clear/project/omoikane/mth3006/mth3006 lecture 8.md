# Mth3006 Lecture 8

- [[Method of characteristics]]

> [!important] Missed lecture: auto-generated.

## How Do We Derive the Characteristic Equations $\frac{du}{F} = \frac{dx}{A} = \frac{dy}{B}$?

Consider the first-order partial differential equation:

$$
A(x, y) \frac{\partial u}{\partial x} + B(x, y) \frac{\partial u}{\partial y} = F(x, y)
$$

We seek curves in the $(x, y)$ plane along which the partial differential equation reduces to an ordinary differential equation. Parameterize such a curve by a parameter $s$ (which could be arc length or any other convenient parameter), so that $x = x(s)$, $y = y(s)$, and $u = u(x(s), y(s))$.

By the chain rule, the total derivative of $u$ along the curve is:

$$
\frac{du}{ds} = \frac{\partial u}{\partial x}\frac{dx}{ds} + \frac{\partial u}{\partial y}\frac{dy}{ds}
$$

Now, choose the curve so that:

$$
\frac{dx}{ds} = A(x, y), \quad \frac{dy}{ds} = B(x, y)
$$

Then, substituting into the chain rule:

$$
\frac{du}{ds} = A(x, y)\frac{\partial u}{\partial x} + B(x, y)\frac{\partial u}{\partial y}
$$

But from the original partial differential equation, the right-hand side is exactly $F(x, y)$, so:

$$
\frac{du}{ds} = F(x, y)
$$

We now have a system of three ordinary differential equations:

$$
\frac{dx}{ds} = A(x, y), \quad \frac{dy}{ds} = B(x, y), \quad \frac{du}{ds} = F(x, y)
$$

These can be written in the symmetric form:

$$
\frac{dx}{A(x, y)} = \frac{dy}{B(x, y)} = \frac{du}{F(x, y)} = ds
$$

or more commonly:

$$
\frac{dx}{A(x, y)} = \frac{dy}{B(x, y)} = \frac{du}{F(x, y)}
$$

These are the **characteristic equations** of the partial differential equation. The curves in the $(x, y)$ plane defined by solving $\frac{dx}{A} = \frac{dy}{B}$ are called **characteristic curves** or simply **characteristics**.

### Alternative Parameterisation Using Arc Length

The element of arc length along a curve is defined by:

$$
ds^2 = dx^2 + dy^2
$$

Since $\frac{dx}{ds} = A$ and $\frac{dy}{ds} = B$, we have:

$$
ds^2 = A^2 ds^2 + B^2 ds^2
$$

This is inconsistent unless we interpret $s$ differently. More precisely, if we parameterise by a general parameter $t$, then:

$$
ds^2 = dx^2 + dy^2 = \left(\frac{dx}{dt}\right)^2 dt^2 + \left(\frac{dy}{dt}\right)^2 dt^2 = (A^2 + B^2)dt^2
$$

So:

$$
ds = \sqrt{A^2 + B^2}\, dt
$$

And:

$$
\frac{du}{dt} = F(x, y)
$$

becomes:

$$
\frac{du}{ds} = \frac{du/dt}{ds/dt} = \frac{F}{\sqrt{A^2 + B^2}}
$$

This is the form sometimes presented when using arc length as the natural parameter along the characteristic curve.

In practical calculations, we usually work with the simpler form $\frac{dx}{A} = \frac{dy}{B}$ to find the characteristic curves, and then solve $\frac{du}{ds} = F/\sqrt{A^2 + B^2}$ if needed.
