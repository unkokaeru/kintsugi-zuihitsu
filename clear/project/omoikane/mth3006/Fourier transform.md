# Fourier Transform

> [!important] Useful skill to build - or cheat sheet framework
> Look at questions and decide what form of the Fourier transform you'd use! Exponential? Cosine form? Sine form? Think about what your reasoning is: even, odd, already has an exponential in it? etc.

A **Fourier transform** is where a ==non-periodic== function is represented as the ==integral== over ==trigonometric functions==, usually in the form of ==complex exponentials==.

$$
\tilde{f}(\omega) = \frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} f(t)e^{-i \omega t }dt,\quad \text{and its inverse }f(t) = \frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty}\tilde{f}(\omega)e^{ i \omega t }d \omega
$$

Some books use different definitions for a Fourier transform - as long as they multiply to give the same ==pre-factor== as ==[[Fourier's inversion theorem]]==, ==$\frac{1}{2\pi}$==, then it's fine.

You find the Fourier transform just by ==substituting your function into the formula and simplifying==, often ==reducing the limits of integration== by ==the definition of the function==, too, and even using the ==exponential definitions of trigonometric functions==. This then defines ==the level of frequency for the function== across its values.

Sometimes finding inverse Fourier transforms can be simplified by using ==Euler's formula== to write it in terms of ==trigonometric functions== to then analyse the parts of the function that are ==odd/even==, as long as the integral is defined ==symmetrically==.

Calculating ==Fourier transforms and then their inverses== to find an equivalent ==integral== definition of a function can be useful after ==equating== them to find the solutions of very complicated integrals.

We can generalise the transforms for even and odd functions to the following:

- For an even function ==$f(t)=f(-t)$==, the ==Fourier transform== generalises to ==$\tilde{f}_{c}(\omega)=\sqrt{ \frac{2}{\pi} }\int_{0}^{\infty}f(t)\cos \omega t dt$== and its inverse as $f(t)=\sqrt{ \frac{2}{\pi} }\int_{0}^{\infty}\tilde{f}_{c}(\omega)\cos \omega t d \omega$.
- For an odd function $-f(t)=f(-t)$, the ==Fourier transform== generalises to ==$\tilde{f}_{s}(\omega)=\sqrt{ \frac{2}{\pi} }\int_{0}^{\infty}f(t)\sin \omega t dt$== and its inverse as $f(t)=\sqrt{ \frac{2}{\pi} }\int_{0}^{\infty}\tilde{f}_{s}(\omega)\sin \omega t d \omega$.

---

## Example One

Calculate the Fourier transform of $f(t)=\begin{cases}1 & -1\lt t \lt 1 \\ 0 & |t|\geq {1}\end{cases}$::$\sqrt{ \frac{2}{\pi} } \frac{\sin(\omega)}{\omega}$

## Example Two

Calculate the inverse Fourier transform of $\tilde{f}(w)=\sqrt{ \frac{2}{\pi} } \frac{\sin(\omega)}{\omega}$::$\frac{2}{\pi}\int_{0}^{\infty} \frac{\sin(\omega)\cos(\omega t)}{\omega}d \omega$
