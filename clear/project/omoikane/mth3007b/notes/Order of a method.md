# Order of a Method

The **order of a method** is determined by how the [[Global truncation error]] varies with step size $dt$. A method is order $p$ if the global truncation error is $O(dt^p)$.

| Method | Order | Global truncation error |
|---|---|---|
| [[Explicit Euler method]] | 1 | $O(dt)$ |
| [[Midpoint method]] | 2 | $O(dt^2)$ |
| [[Ralston method]] | 2 | $O(dt^2)$ |
| [[Implicit Trapezoid Method]] | 2 | $O(dt^2)$ |
| [[Fourth order Runge-Kutta]] | 4 | $O(dt^4)$ |

Higher order means that reducing the step size gives a much greater reduction in error. A method of order $p$ roughly multiplies error by $(dt'/dt)^p$ when the step size is changed from $dt$ to $dt'$.

The order is related to how many terms of the Taylor expansion are matched by the method's increment function. See [[Local truncation error]] for the single-step version of this.

[[Global truncation error]] | [[Local truncation error]] | [[Order of magnitude]] | [[Order of convergence]] | [[Runge-Kutta methods]]
