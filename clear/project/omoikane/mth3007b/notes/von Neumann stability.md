# von Neumann stability

The standard linear-stability analysis for finite-difference schemes on a uniform grid. Substitute a Fourier-mode trial solution $u_{i,n}=G^{i}e^{ik n\Delta x}$ into the update equation, derive the **amplification factor** $G(k)$, and demand $|G(k)|\leq 1$ for all wavenumbers $k$.

## For [[FTCS scheme]] on the [[Heat equation]]

Substituting $u_{i,n}=G^{i}e^{ikn\Delta x}$ into

$$
u_{i+1,n}=(1-2r)\,u_{i,n}+r(u_{i,n+1}+u_{i,n-1})
$$

gives

$$
G=1-2r+2r\cos(k\Delta x)=1-4r\sin^{2}(k\Delta x/2).
$$

Requiring $|G|\leq 1$ for all $k$ gives $0\leq 4r\sin^{2}(k\Delta x/2)\leq 2$, i.e.

$$
\boxed{r=\frac{\alpha\,\Delta t}{\Delta x^{2}}\leq \frac{1}{2}.}
$$

The worst-case mode is $k=\pi/\Delta x$ (the highest representable wavenumber), where $\sin^{2}(\pi/2)=1$.

## For [[BTCS scheme]]

Substituting into $-c u_{i+1,n-1}+(1+2c)u_{i+1,n}-c u_{i+1,n+1}=u_{i,n}$ gives

$$
G=\frac{1}{1+4c\sin^{2}(k\Delta x/2)}.
$$

Always $|G|\leq 1$ - the scheme is **unconditionally stable**.

## Limitations

- Assumes constant coefficients and a uniform grid.
- Linear analysis only - non-linear effects (e.g. shock formation) need different tools.
- Boundary conditions are ignored. von Neumann gives a *necessary* condition; in practice it usually suffices, but stiff boundary effects can violate it on small grids.

## Related

- [[CFL condition]] - the analogous criterion for hyperbolic (advection-style) PDEs.
- [[Lax Equivalence Theorem]] - for consistent linear schemes, stability $\Leftrightarrow$ convergence.
