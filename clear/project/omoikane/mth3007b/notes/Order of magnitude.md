# Order of Magnitude

**Order of magnitude** refers to the scale of a quantity expressed using big-O notation. We write $f(x) = O(x^n)$ to mean that $f(x)$ grows no faster than $x^n$ as $x \to 0$ (or $x \to \infty$, depending on context).

Formally, $f(x) = O(x^n)$ means there exists a constant $C > 0$ such that

$$
|f(x)| \leq C |x^n|
$$

for all sufficiently small (or large) $x$.

In numerical methods, big-O notation is used to describe how errors scale with step size $dt$ or $dx$. For example, saying a method has error $O(dt^2)$ means that halving the step size reduces the error by a factor of roughly 4.

This notation underpins the definitions of [[Local truncation error]], [[Global truncation error]], and [[Order of a method]].

[[Order of a method]] | [[Order of convergence]] | [[Local truncation error]] | [[Global truncation error]]
