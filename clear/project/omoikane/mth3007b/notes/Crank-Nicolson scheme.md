# Crank-Nicolson scheme

The symmetric average of the [[FTCS scheme]] and [[BTCS scheme]] - combines both for second-order accuracy in *both* space and time, while keeping unconditional stability.

For the 1D [[Heat equation]] $\partial u/\partial t=\alpha\,\partial^{2}u/\partial x^{2}$, with $c=\alpha\,\Delta t/(2\,\Delta x^{2})$:

$$
\boxed{-c\,u_{i+1,n-1}+(1+2c)\,u_{i+1,n}-c\,u_{i+1,n+1}\;=\;c\,u_{i,n-1}+(1-2c)\,u_{i,n}+c\,u_{i,n+1}.}
$$

Like BTCS, it produces a tridiagonal linear system $\mathbf{A}\mathbf{u}_{i+1}=\mathbf{B}\mathbf{u}_{i}$ at each step, with both $\mathbf{A}$ and $\mathbf{B}$ tridiagonal.

## Stability and Accuracy

- **Unconditionally stable** (von Neumann analysis confirms $|G|\leq 1$ for all wavenumbers).
- Global truncation error $O(\Delta t^{2}+\Delta x^{2})$ - second-order in *both* space and time.

## Why Use It

Default upgrade over BTCS when temporal accuracy matters. Same per-step cost (tridiagonal solve), better accuracy.

## Drawbacks

Slightly more bookkeeping (two tridiagonal matrices instead of one). Can develop spurious oscillations for very steep initial conditions or boundary discontinuities - in such cases, BTCS's heavier numerical diffusion is sometimes preferable despite the lower accuracy.
