# BTCS scheme

**Backward Time, Central Space.** The *implicit* finite-difference scheme for the 1D [[Heat equation]] $\partial u/\partial t=\alpha\,\partial^{2}u/\partial x^{2}$:

$$
\frac{u_{i+1,n}-u_{i,n}}{\Delta t}\approx \alpha\frac{u_{i+1,n+1}-2u_{i+1,n}+u_{i+1,n-1}}{\Delta x^{2}}.
$$

Rearranging with $c=\alpha\,\Delta t/\Delta x^{2}$:

$$
\boxed{-c\,u_{i+1,n-1}+(1+2c)\,u_{i+1,n}-c\,u_{i+1,n+1}=u_{i,n}.}
$$

The unknown at the new time level couples three spatial neighbours - must solve a linear system every step.

## Stencil

```
  o    x    o       t_{i+1}   (3 unknowns)
  ·    x    ·       t_i       (1 known)
n-1    n   n+1
```

## Tridiagonal System

Combined with Dirichlet boundary conditions $u_{i+1,0}=u_{L}$, $u_{i+1,N-1}=u_{R}$, the system is $\mathbf{A}\mathbf{u}_{i+1}=\mathbf{u}_{i}$ where

$$
\mathbf{A}=\begin{pmatrix}1 & 0 & & & \\ -c & 1+2c & -c & & \\ & \ddots & \ddots & \ddots & \\ & & -c & 1+2c & -c \\ & & & 0 & 1\end{pmatrix}.
$$

## Stability

**Unconditionally stable** for any $\Delta t,\Delta x>0$. No CFL-like constraint - choose step sizes based on accuracy alone.

## Truncation Error

Global error $O(\Delta t+\Delta x^{2})$ - same order as [[FTCS scheme]]: first in time, second in space. The [[Crank-Nicolson scheme]] is the symmetric upgrade with $O(\Delta t^{2}+\Delta x^{2})$.

## Solving the System

- General Gaussian elimination: $O(N^{3})$.
- Library matrix inversion (`np.linalg.inv` or `np.linalg.solve`): $O(N^{3})$ but constant factor much smaller than hand-coded.
- **Thomas algorithm** for tridiagonal matrices: $O(N)$. Use `scipy.linalg.lapack.dgtsv`.

## Pros and Cons

| Pros | Cons |
|---|---|
| Unconditionally stable - pick any $\Delta t$. | Requires solving a linear system per step. |
| Useful for stiff diffusion problems where FTCS would demand tiny $\Delta t$. | Only first-order in time - large $\Delta t$ loses temporal accuracy. |
