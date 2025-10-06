# Convolution

When finding a function $f(x)$ with a measuring instrument, e.g. position with a microscope, then the instrument has ==a set resolution to make the measurements==.

A ==resolution function== $g(z-x)$ is defined as the ==probability density== that the true value in $(x, x+dx)$ is shifted to $(z,z+dz)$, i.e. ==blurring a measurement made==.

Integrating over the values of $x$ that could lead to a reading in $(z,z+dz)$ (i.e. that could be blurred), leads to the ==observed function== $h(z)=\int_{-\infty}^{\infty}f(x)g(z-x)dx$.