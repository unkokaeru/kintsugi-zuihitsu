# Convolution Theorem

The **Convolution Theorem** is derived by ==taking the transform (Fourier or Laplace) of the convolution== to ==transform a more complicated integral into simple multiplication==.

The **Convolution Theorem** is defined for Fourier transforms as::$\mathcal{F}[f(x)\ast g(x)]=\sqrt{ 2\pi } \tilde{f}(k)\tilde{g}(k)$.

We can also invert the **Convolution Theorem** to simplify the calculation of some Fourier transforms with convolutions::$\mathcal{F}[f(x)g(x)]=\frac{1}{\sqrt{ 2\pi }}\tilde{f}(k)\ast \tilde{g}(k)$, with a similar proof to the main theorem.

The **Convolution Theorem** is defined for Laplace transforms as::$\mathcal{L}\left[ \int_{0}^{t}f(t-u)g(u)du \right]=\tilde{f}(s)\tilde{g}(s)$.

We can also invert the **Convolution Theorem** to simplify the calculation of some Laplace transforms with convolutions::$\mathcal{L}^{-1}\left[ \tilde{f}(s)\tilde{g}(s) \right]=\int_{0}^{t}f(t-u)g(u)du$, which is very useful to calculate inverse Laplace transforms instead of doing contour integrals.

---

## Example One

Calculate the Fourier transform of the wave packet $\phi(x)=\exp\left( -\frac{x^{2}}{2a^{2}} \right)e^{iqx}$::$a \exp\left( -\frac{(k-q)^{2}a^{2}}{2} \right)$.

*Note*: the result is normally found by calculating each function's Fourier transform and then using the Convolution Theorem, but it can also be found by using the exponential multiplication property of Fourier Transforms: $\mathcal{F}[e^{\alpha t}f(t)]=\tilde{f}(\omega+i \alpha)$.

## Example Two

Calculate the Laplace transform, using the [[Table of Laplace transforms]], of $\int_{0}^t e^{ au }\cos(b(t-u))du$::$\frac{s}{(s^2+b^2)(s-a)}$.

## Example Three

Evaluate $\mathcal{L}^{-1}\left[ \frac{4}{s^2(s+2)^2} \right]$::$(t+1)e^{ -2t }+t-1$.
