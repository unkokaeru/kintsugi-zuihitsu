# Order of a Method

The exponent in the [[Global truncation error]]: a method has **order $p$** if $\text{GTE}=O(\Delta t^{p})$. Halving $\Delta t$ then reduces the error by a factor of $2^{p}$.

## Practical Interpretation

| Order | Halving $\Delta t$ reduces error by | Examples |
|---|---|---|
| 1 | $2\times$ | [[Explicit Euler method]], [[Implicit Euler method]] |
| 2 | $4\times$ | [[Midpoint method]], [[Ralston method]], [[Implicit Trapezoid Method]] |
| 3 | $8\times$ | Generic third-order Runge-Kutta |
| 4 | $16\times$ | [[Fourth order Runge-Kutta]] |

So a fourth-order method achieving the same error as Euler can use a step size $2^{3}=8$ times larger when error is to be reduced by a factor of 16.

## Caveat: Doesn't Subsume Stability

Order describes accuracy in the $\Delta t\to 0$ limit *for a fixed problem*. A higher-order method is not always better in practice - it can be unstable for large $\Delta t$ or expensive per step. Compare:
- [[Explicit Euler method]]: order 1, conditionally stable for stiff problems, requires tiny $\Delta t$.
- [[Implicit Euler method]]: order 1, unconditionally stable, can use any $\Delta t$ but loses accuracy.
- [[Implicit Trapezoid Method]]: order 2, unconditionally stable, the best of both - but requires solving an implicit equation per step.

Choosing a method is always a trade-off between order, stability region, per-step cost, and problem stiffness.

## Empirical Order Test

Run the method at $\Delta t$ and $\Delta t/2$, compare errors. If error halves $4\times$, order is 2; if it halves $16\times$, order is 4. A log-log plot of error vs $\Delta t$ has slope $p$.
