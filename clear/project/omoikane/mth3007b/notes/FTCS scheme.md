# FTCS scheme

**Forward Time, Central Space.** The standard *explicit* finite-difference scheme for the 1D [[Heat equation]] $\partial u/\partial t=\alpha\,\partial^{2}u/\partial x^{2}$:

$$
\boxed{u_{i+1,n}=(1-2r)\,u_{i,n}+r\,(u_{i,n+1}+u_{i,n-1}),\qquad r=\frac{\alpha\,\Delta t}{\Delta x^{2}}.}
$$

Forward [[Explicit Euler method]] in time; symmetric three-point central difference in space.

## Stencil

Two grid points at the new time level $t_{i+1}$ are not involved - the update at $u_{i+1,n}$ depends only on three points at the current time $t_{i}$:

```
  ·    x    ·       t_{i+1}   (1 unknown)
  o    x    o       t_i       (3 knowns)
n-1    n   n+1
```

## Stability

Conditionally stable: requires

$$
\boxed{r=\frac{\alpha\,\Delta t}{\Delta x^{2}}\leq \frac{1}{2}.}
$$

If $r>1/2$ the scheme amplifies high-frequency errors, leading to oscillating, exponentially growing solutions. (See [[Stability of a method]].) Halving $\Delta x$ requires $\Delta t$ to drop by a factor of $4$, not $2$, to stay stable.

## Truncation Error

Global error is $O(\Delta t+\Delta x^{2})$ - first-order in time, second-order in space.

## Pros and Cons

| Pros | Cons |
|---|---|
| Simple - no system to solve. | Stability constraint $r\leq 1/2$ severely limits $\Delta t$ for fine spatial grids. |
| Vectorises trivially in NumPy. | Only first-order accurate in time. |

For unconditional stability use [[BTCS scheme]] or the [[Crank-Nicolson scheme]].
