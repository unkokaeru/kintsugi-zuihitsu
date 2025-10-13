# Mth3006 Weekly Problems 3

## Question One

Using the definition of a Laplace transform, $\tilde{f}(s) = \int_0^\infty f(t) e^{-st} dt$, calculate the Laplace transforms of the following functions, where $a \neq 0$ is a real constant:

1. $a(x)=1$,
2. $b(x)=e^{at}$ (and state the range for of $s$ for which the transform exists),
3. $c(x)=\cosh(at)$ (and state the range for of $s$ for which the transform exists),
4. $d(x)=\sinh(at)$ (and state the range for of $s$ for which the transform exists).

## Question Two

Use the result that $\mathcal{L}[t^n f(t)] = (-1)^n \frac{d^n}{ds^n} \tilde{f}(s)$, as well as the [[Table of Laplace transforms]], to evaluate the following Laplace transforms:

1. $\mathcal{L}[t e^{-2t}]$,
2. $\mathcal{L}[t^2 e^{-2t}]$.

## Question Three

If $\tilde{F}(s) = \frac{a}{s^2 (s^2 + a^2)}$, where $a > 0$ is a constant, calculate $f(t) = \mathcal{L}^{-1}[ \tilde{F}(s) ]$ using:

1. The convolution theorem,
2. Partial fractions.

## Question Four

Use Laplace transforms to show that...

$$
\int_0^\infty e^{-2t} (1 - \cos 3t) dt = \frac{9}{26}
$$

## Question Five

Use the convolution theorem to show the following, where $a$ is a real, non-zero constant

$$
\mathcal{L}^{-1} \left[ \frac{s}{s^2 + a^2} \right] = \frac{t \sin(at)}{2a}
$$


