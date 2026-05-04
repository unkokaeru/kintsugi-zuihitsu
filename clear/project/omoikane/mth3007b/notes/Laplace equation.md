# Laplace equation

The **Laplace equation** is the steady-state limit of the [[Heat equation]] $\partial u/\partial t=\alpha\nabla^{2}u$ - set $\partial u/\partial t=0$:

$$
\boxed{\nabla^{2}u(\mathbf{r})=0.}
$$

Solutions are called **harmonic functions**. Adding a source term gives the **Poisson equation** $\nabla^{2}u(\mathbf{r})=g(\mathbf{r})$; setting $g=0$ recovers Laplace, so any Poisson solver doubles as a Laplace solver.

## Pure BVP

Unlike the heat equation, Laplace is *time-independent* and needs **only** [[Boundary conditions]] - no initial condition. Prescribing $u$ on $\partial\Omega$ (Dirichlet) gives a unique solution in the interior. Neumann BCs determine the solution up to an additive constant.

## Mean Value Property

Harmonic functions satisfy: for any sphere of radius $r$ inside $\Omega$, $u$ at the centre equals the average of $u$ over the sphere. The discretised version (the [[Laplacian difference equation]]) reads "every interior value equals the average of its four neighbours" - this is *the* property that makes [[Liebmann's method]] work.

## 1D vs 2D

- **1D**: $d^{2}u/dx^{2}=0\Rightarrow u(x)=ax+b$ - linear, fully determined by two endpoint values.
- **2D**: $\partial^{2}u/\partial x^{2}+\partial^{2}u/\partial y^{2}=0$. No closed form for arbitrary boundary shapes; finite-difference + iterative solvers are the workhorse approach.
- **3D**: same shape, $\nabla^{2}=\partial_{xx}+\partial_{yy}+\partial_{zz}$.

## Numerical Solution

Discretise on a square grid, apply the symmetric second-derivative stencil in each spatial direction. The result is the [[Laplacian difference equation]], one equation per interior grid point. Solve by:
- Direct linear solve (Gaussian elimination on a sparse system) - works for small grids; $O(N^{3})$ scaling kills it for fine grids.
- [[Liebmann's method]] / Gauss-Seidel iteration - converges thanks to [[Diagonal dominance]] of the system matrix.

## Physical Examples

- Steady-state temperature distribution on a plate with prescribed boundary temperatures.
- Electrostatic potential in a charge-free region (Laplace) or with charge density (Poisson).
- Incompressible inviscid flow potential.
- Gravitational potential outside the source mass.
