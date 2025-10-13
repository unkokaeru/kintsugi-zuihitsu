# Laplace Transform

> [!tip] Make a flowchart for the cheat sheet to help decide Fourier vs Laplace transform!

The **Laplace transform** of a function $f(t)$ is defined by ==$\tilde{f}(s)=\int_{0}^{\infty}f(t)e^{ -st }dt$==, used for ==purely real functions==.

**Laplace transforms** can exist when ==$\lim_{ t \to \infty }f(t)\ne{0}$==, when the Fourier transform as $t$ tends towards $\infty$ it does not exist.

**Laplace transforms** are often used when ==$t>0$, e.g. initial-value problems==.

**Laplace transforms** are often denoted by ==$\mathcal{L}[f(t)]$==.

Inverting **Laplace transforms** is often done so with ==table lookups== rather than ==contour integrals==, by ==breaking a function into known ones== to hence find $\mathcal{L}^{-1}$ of everything to then consolidate.

---

## Example One

Calculate $\mathcal{L}(\cos \omega t)$::$\frac{s}{s^2 + \omega^2}$.

## Example Two

Calculate $\mathcal{L}(\sin \omega t)$::$\frac{\omega}{s^2 + \omega^2}$.

## Example Three

Using the [[Table of Laplace transforms]], find $f(t)$ if $\tilde{f}(s)= \frac{s+3}{s(s+1)}$::$f(t)=3-2e^{ -t }$.

---

# Properties of Laplace Transforms

**Laplace transforms** have four main properties: ==the shift theorem==, ==scaling==, ==exponential product==, and ==convolution theorem==.

The shift theorem of Laplace transforms is defined as::$\mathcal{L}[e^{ -at }f(t)]=\tilde{f}(s+a)$.

The scaling property of Laplace transforms is defined as::$\mathcal{L}[f(at)]=\frac{1}{a}\tilde{f}\left( \frac{s}{a} \right)$.

The exponential product property of Laplace transforms is defined as::$\mathcal{L}[t^n f(t)]=(-1)^n \frac{d^n}{ds^n}\tilde{f}(s)$.

The convolution theorem for Laplace transforms is defined as::$\mathcal{L}\left[ \int_{0}^{t}f(t-u)g(u)du \right]=\tilde{f}(s)\tilde{g}(s)$.
