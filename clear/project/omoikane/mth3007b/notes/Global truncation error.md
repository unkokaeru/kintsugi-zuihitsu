# Global Truncation Error

The accumulated error after marching the numerical scheme over many time steps:

$$
\boxed{\text{GTE}_{N}=y(t_{N})-y_{N},\qquad t_{N}=t_{0}+N\Delta t.}
$$

The error at the final time relative to the exact solution.

## Relationship to [[Local truncation error]]

The local truncation error is the per-step error; the global error is its accumulation over $N=O(1/\Delta t)$ steps. Heuristically:

$$
\text{GTE}\sim N\cdot \text{LTE}=\frac{T-t_{0}}{\Delta t}\cdot O(\Delta t^{p+1})=O(\Delta t^{p}).
$$

So if the LTE is $O(\Delta t^{p+1})$, the GTE is $O(\Delta t^{p})$ - **one order lower than LTE**. This is the [[Order of a method]] of the method.

## Method Orders

| Method | LTE | GTE |
|---|---|---|
| [[Explicit Euler method]] | $O(\Delta t^{2})$ | $O(\Delta t)$ |
| [[Implicit Euler method]] | $O(\Delta t^{2})$ | $O(\Delta t)$ |
| [[Midpoint method]] | $O(\Delta t^{3})$ | $O(\Delta t^{2})$ |
| [[Implicit Trapezoid Method]] | $O(\Delta t^{3})$ | $O(\Delta t^{2})$ |
| [[Ralston method]] | $O(\Delta t^{3})$ | $O(\Delta t^{2})$ |
| [[Fourth order Runge-Kutta]] | $O(\Delta t^{5})$ | $O(\Delta t^{4})$ |

## In PDE Schemes

For PDE finite-difference schemes (e.g. [[FTCS scheme]], [[BTCS scheme]]) the GTE has separate $\Delta t$ and $\Delta x$ scaling. FTCS and BTCS both have GTE $O(\Delta t+\Delta x^{2})$; [[Crank-Nicolson scheme]] gives $O(\Delta t^{2}+\Delta x^{2})$.
