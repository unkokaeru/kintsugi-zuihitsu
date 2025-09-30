# Fourier Transform

A **Fourier transform** is where a ==non-periodic== function is represented as the ==integral== over ==trigonometric functions==, usually in the form of ==complex exponentials==.

$$
\tilde{f}(\omega) = \frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} f(t)e^{-i \omega t }dt,\quad \text{and its inverse }f(t) = \frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty}\tilde{f}(\omega)e^{ i \omega t }d \omega
$$

Some books use different definitions for a Fourier transform - as long as they multiply to give the same ==pre-factor== as ==[[Fourier's inversion theorem]]==, ==$\frac{1}{2\pi}$==, then it's fine.

You find the Fourier transform just by ==substituting your function into the formula and simplifying==, often ==reducing the limits of integration== by ==the definition of the function==, too, and even using the ==exponential definitions of trigonometric functions==. This then defines ==the level of frequency for the function== across its values.

We can generalise the transforms for even and odd functions to the following:

- For an even function ==$f(t)=f(-t)$==, the ==Fourier transform== generalises to ==$$==.
- For an odd function $-f(t)=f(-t)$, the ==Fourier transform== generalises to ==$\dots$==.

---

## Example One

Calculate the Fourier transform of $f(t)=\begin{cases}1 & -1\lt t \lt 1 \\ 0 & |t|\geq {1}\end{cases}$::$\sqrt{ \frac{2}{\pi} } \frac{\sin(\omega)}{\omega}$

## Example Two

Calculate the inverse Fourier transform of $\tilde{f}(w)=\sqrt{ \frac{2}{\pi} } \frac{\sin(\omega)}{\omega}$::$\frac{2}{\pi}\int_{0}^{\infty} \frac{\sin(\omega)\cos(\omega t)}{\omega}d \omega$
