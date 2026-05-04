# Implicit Euler Method

Aside from the [[Explicit Euler method]], we may also have an implicit relation where a dependent variable is not isolated in the equation; sometimes we can convert between the two, but this is not always possible.

In these cases, we can write the definition of a derivative slightly differently, replacing $h$ with $-h$. This creates a completely different equation, but one that is evaluated identically under the limit:

$$
\frac{df(x)}{dx}=\lim_{ h \to 0 } \frac{f(x)-f(x-h)}{h}\approx \frac{f(x)-f(x-\Delta x)}{\Delta x}
$$

This is again a **finite difference**, but a **backward difference approximation (BDA)** instead of a **forward difference approximation (FDA)**.

For implicit relations, this can give rise to the **implicit Euler method**, or aptly named **backward Euler method**, similar to before (just shifting time forwards slightly to neaten the formula)...

$$
\frac{y(t)-y(t-\Delta t)}{\Delta t}\approx g(t,y(t))\implies\boxed{y(t+\Delta t)_{\text{approx}}\approx y(t)+\Delta t \cdot g(t+\Delta t,y(t+\Delta t))}
$$
