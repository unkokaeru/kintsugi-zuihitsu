# Mth3006 Weekly Problems 1

## Question One

Calculate the Fourier transform of the delta function $\delta(t - a)$.

## Question Two

Calculate the inverse Fourier transform of

$$
 \tilde{f}(\omega) = \delta(\omega - \omega_0) - \delta(\omega + \omega_0) 
$$

, where $\omega_0$ is a real, non-zero constant, writing your answer in terms of a trigonometric function.

## Question Three

Find the Fourier transform of

$$
f(t) =

  \begin{cases}

	-1 & \text{when } -1 < t < 0 \\

	 1 & \text{when } 0 < t < 1 \\

	 0 & \text{otherwise}

  \end{cases}
$$

First by using the exponential form of the transform and then by using

$$
\tilde{f}(\omega) = -i \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(t) \sin(\omega t) \, dt
$$

(valid since the function is odd). The two results should be the same.

## Question Four

Use an appropriate form of the Fourier transform to calculate

$$
 \tilde{f}(\omega)
$$

 when

$$
f(t) =

  \begin{cases}

	1 - t^2 & \text{when } |t| < 1 \\

	0 & \text{when } |t| \geq 1

  \end{cases}
$$

And use your result to show that

$$
\int_{0}^{\infty}
  \dfrac{\sin x - x \cos x}{x^3}
  \cos \left( \dfrac{x}{2} \right)
  dx
  =

  \dfrac{3\pi}{16}
$$

## Question Five

Find the Fourier cosine transform of $f(t) = \exp(-m|t|)$, $m > 0$, and use your result to show that

$$
\int_{0}^{\infty}
  \dfrac{\cos(pv)}{v^2 + \beta^2}
  dv
  =

  \dfrac{\pi}{2\beta}\exp(-p\beta)
$$
