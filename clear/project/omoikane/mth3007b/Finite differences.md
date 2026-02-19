# Finite Differences

Approximating a derivative by setting a value for $\Delta x$, instead of integrating:

$$
\frac{df(x)}{dx}=\lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}\approx \frac{f(x+\Delta x)-f(x)}{\Delta x}
$$

Essentially, this is the difference between a tangent (the perfect analytical solution, touching the function at only one point) and a secant (the approximated numerical solution, touching the function at two points - preferably very close together, if accurate).
