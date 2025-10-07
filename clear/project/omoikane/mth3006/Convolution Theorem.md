# Convolution Theorem

The **Convolution Theorem** is derived by ==taking the Fourier transform of the convolution== to ==transform a more complicated integral into simple multiplication==.

**The Convolution Theorem** is defined as::

$$
\mathcal{F}[f(x)\ast g(x)]=\sqrt{ 2\pi } \tilde{f}(k)\tilde{g}(k)
$$

We can also flip the theorem to simplify the calculation of some Fourier transforms with convolutions::

$$
\mathcal{F}[f(x)g(x)]=\frac{1}{\sqrt{ 2\pi }}\tilde{f}(k)\ast \tilde{g}(k)
$$

With a similar proof.

---

## Example One

Calculate the Fourier transform of the wave packet $\phi(x)=\exp\left( -\frac{x^{2}}{2a^{2}} \right)e^{iqx}$::$a \exp\left( -\frac{(k-q)^{2}a^{2}}{2} \right)$.

*Note*: the result is normally found by calculating each function's Fourier transform and then using the Convolution Theorem, but it can also be found by using the exponential multiplication property of Fourier Transforms: $\mathcal{F}[e^{\alpha t}f(t)]=\tilde{f}(\omega+i \alpha)$.
