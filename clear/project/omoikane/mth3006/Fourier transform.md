# Fourier Transform

A **Fourier transform** is where a ==non-periodic== function is represented as the ==integral== over ==trigonometric functions==, usually in the form of ==complex exponentials==.

$$
\tilde{f}(\omega) = \frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} f(t)e^{-i \omega t }dt,\quad \text{and its inverse }f(t) = \frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty}\tilde{f}(\omega)e^{ i \omega t }d \omega
$$

Some books use different definitions for a Fourier transform - as long as they multiply to give the same ==pre-factor== as ==[[Fourier's inversion theorem]]==, ==$\frac{1}{2\pi}$==, then it's fine.

You find the Fourier transform just by ==substituting your function into the formula and simplifying==, often ==reducing the limits of integration== by ==the definition of the function==, too. This then defines ==the level of frequency for the function== across its values.

---

## Example One

Calculate the Fourier transform of $f(t)=\begin{cases}1 & -1\lt t \lt 1 \\ 0 & |t|\geq {1}\end{cases}$::$\sqrt{ \frac{2}{\pi} } \frac{\sin(\omega)}{\omega}$
