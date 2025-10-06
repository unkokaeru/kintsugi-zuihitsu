# Mth3006 Weekly Problems 2

## Question One

A function is defined by

$$
T(x) = \begin{cases}
1 & \text{when } |x| < a \\
0 & \text{when } |x| > a
\end{cases}
$$

Where $a$ is a real, positive constant.

### Part A

Sketch the graph of $T(x)$, and use your result to sketch the graph of the convolution

$$
h(x) = T(x) * [\delta(x - b) + \delta(x + b)]
$$

 when $b > a$.

### Part B

Use the convolution theorem to calculate $\tilde{h}(k)$, the Fourier transform of$h(x)$, and show that $\tilde{h}(k)$ has zeros at $k = n\pi/a$ when $n \neq 0$ and $k = [(n + 1/2)\pi]/b$ for all $n \in \mathbb{Z}$.

## Question Two

### Part A

Find the Fourier transform of the function $f(t) = \exp(-|t|)$. Before starting the calculation, think carefully about which form of the transform will give the most straightforward integral.

### Part B

Take the inverse Fourier transform of your result from part (a) to show that

$$
\frac{\pi}{2} \exp(-|t|) = \int_{0}^{\infty} \frac{\cos(\omega t)}{1 + \omega^2} d\omega
$$

## Question Three

Ignoring the point $t = 0$, the Heaviside step function is defined by

$$
H(t) = \begin{cases}

1 & \text{when } t > 0 \\

0 & \text{when } t < 0

\end{cases}
$$

### Part A

Calculate the Fourier transform of $f(t) = e^{-at}H(t)$, where $a > 0$ is a real constant.

### Part B

Use your result, together with the convolution theorem, to evaluate the inverse Fourier transform of $\tilde{f}(\omega) = \frac{1}{2\pi(a + i\omega)^2}$

***Hint:** Write $\tilde{f}(\omega)$ in terms of your answer to part A.*
