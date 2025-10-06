# Mth3006 Lecture 3

## How Do You Prove the Scaling Property of Fourier Transforms?

…

## How Do You Prove the Differentiation Property of Fourier Transforms?

**PROOF**: $\mathcal{F}[f^\prime (t)]=i \omega \tilde{f}(\omega)$

$$
\begin{align}
\mathcal{F}[f^\prime(t)]&=\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty}f^\prime(t)e^{i \omega t}dt \\
&= \frac{1}{\sqrt{ 2\pi }}[e^{ -i \omega t }f(t)]_{-\infty}^{\infty}+\frac{1}{2\pi}\int_{-\infty}^{\infty}i \omega e^{ -i \omega t }f(t)dt \\
&= i \omega \tilde{f}(\omega)
\end{align}
$$

On the second step we have used the fact that $f(t)\to {0}$ as $t\to\pm\infty$, which must be true for the Fourier transform to exist.

Applying again, we find that $\mathcal{F}[f^{\prime\prime} (t)]=i \omega \mathcal{F}[f^\prime(t)]=-\omega^2 \tilde{f}(\omega)$.

## How Do You Prove the Translation Property of Fourier Transforms?

…

## How Do You Prove the Exponential Multiplication Property of Fourier Transforms?

…

## How Do You Prove the Convolution Theorem?

…
