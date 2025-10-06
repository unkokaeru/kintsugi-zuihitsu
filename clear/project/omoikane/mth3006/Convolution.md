# Convolution

> [!summary] Integrating a resolution function to find the observed function.

When finding a function $f(x)$ with a measuring instrument, e.g. position with a microscope, then the instrument has ==a set resolution to make the measurements==.

A ==resolution function== $g(z-x)$ is defined as the ==probability density== that the true value in $(x, x+dx)$ is shifted to $(z,z+dz)$, i.e. ==blurring a measurement made==.

Integrating a resolution function over the values of $x$ that could lead to a reading in $(z,z+dz)$ (i.e. that could be blurred), leads to the ==observed function==, ==$h(z)=\int_{-\infty}^{\infty}f(x)g(z-x)dx$== - this is called the ==convolution== of $f$ and $g$.

**Perfect resolution** is given by the ==$\delta$ function $h(z)=\int_{-\infty}^{\infty}f(x)\delta(z-x)dx=f(z)$==; ==the observed function is equal to the true function==.

**Real resolution** functions might be ==symmetric==, i.e. ==blurred==, or ==asymmetric==, i.e. ==systematic error==.

The convolution of $f$ and $g$ is sometimes written as ==$f\ast g$== and is such that ==$f \ast g = g \ast f$ (commutative property)==.

---

## Example One

Find the convolution of $e^{ -x^2 }$ with the sum of the $\delta$ functions $\delta(x-a)+\delta(x-b)$::$\exp(-(x-a)^2)+\exp(-(z-b)^2)$.
