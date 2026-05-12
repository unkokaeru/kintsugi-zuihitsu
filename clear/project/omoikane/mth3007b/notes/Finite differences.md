# Finite Differences

**Finite differences** are discrete approximations to derivatives, obtained by replacing the limiting process $dx \to 0$ with a small but finite step $dx$.

## Forward Difference Approximation (FDA)

$$
\frac{df}{dx} \approx \frac{f(x + dx) - f(x)}{dx}
$$

## Backward Difference Approximation (BDA)

$$
\frac{df}{dx} \approx \frac{f(x) - f(x - dx)}{dx}
$$

## Second Derivative (Centred)

$$
\frac{d^2 f}{dx^2} \approx \frac{f(x + dx) - 2f(x) + f(x - dx)}{dx^2}
$$

This centred second-derivative formula is used in the [[FTCS scheme]] and [[BTCS scheme]] for the spatial part of the [[Heat equation]], and in the [[Laplacian difference equation]] for the [[Laplace equation]].

The forward difference is the basis for the [[Explicit Euler method]]; the backward difference gives the [[Implicit Euler method]].

[[Explicit Euler method]] | [[Implicit Euler method]] | [[FTCS scheme]] | [[BTCS scheme]] | [[Laplacian difference equation]]
