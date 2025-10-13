# Laplace Transform

> [!tip] Make a flowchart for the cheat sheet to help decide Fourier vs Laplace transform!

The **Laplace transform** of a function $f(t)$ is defined by ==$\tilde{f}(s)=\int_{0}^{\infty}f(t)e^{ -st }dt$==, used for ==purely real functions==.

**Laplace transforms** can exist when ==$\lim_{ t \to \infty }f(t)\ne{0}$==, when the Fourier transform as $t$ tends towards $\infty$ it does not exist.

**Laplace transforms** are often used when ==$t>0$, e.g. initial-value problems==.

**Laplace transforms** are often denoted by ==$\mathcal{L}[f(t)]$==.

Inverting **Laplace transforms** is often done so with ==table lookups== rather than ==contour integrals==, by ==breaking a function into known ones==.

---

## Example One

Calculate $\mathcal{L}(\cos \omega t)$::$\frac{s}{s^2 + \omega^2}$.

## Example Two

Calculate $\mathcal{L}(\sin \omega t)$::$\frac{\omega}{s^2 + \omega^2}$.

## Example Three

Using the [[Table of Laplace transforms]], find $f(t)$ if $\tilde{f}(s)= \frac{s+3}{s(s+1)}$::$f(t)=3-2e^{ -t }$.

---

# Properties of Laplace Transforms

**Laplace transforms** have four main properties: ==the shift theorem==, ==scaling==, ==exponential product identity==, and ==convolution theorem==.

…
