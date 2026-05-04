# Liebmann's method

The name given to **Gauss-Seidel iteration** when applied to the discretised [[Laplace equation]] (or Poisson equation) on a regular grid.

## Update Rule

Rearrange the [[Laplacian difference equation]] $u_{i+1,j}+u_{i-1,j}+u_{i,j+1}+u_{i,j-1}-4u_{i,j}=0$ to isolate $u_{i,j}$:

$$
u_{i,j}=\frac{u_{i+1,j}+u_{i-1,j}+u_{i,j+1}+u_{i,j-1}}{4}.
$$

Iterate by reading neighbours from the current estimate and writing into a new estimate:

$$
\boxed{u_{i,j}^{\text{new}}=\frac{u_{i+1,j}^{\text{old}}+u_{i-1,j}^{\text{old}}+u_{i,j+1}^{\text{old}}+u_{i,j-1}^{\text{old}}}{4}.}
$$

Sweep over the interior grid, copy `unew_xy` into `u_xy`, repeat.

## Stopping Criterion

Stop when the largest pointwise change drops below a tolerance:

$$
\max_{i,j}\bigl|u_{i,j}^{\text{new}}-u_{i,j}^{\text{old}}\bigr|<\varepsilon,\qquad\text{e.g. }\varepsilon=10^{-4}.
$$

## Why It Converges

The matrix $\mathbf{A}$ for the discretised Laplace problem is **diagonally dominant** ($|a_{ii}|=4\geq\sum_{j\neq i}|a_{ij}|$, see [[Diagonal dominance]]). For diagonally-dominant systems, both Jacobi and Gauss-Seidel iteration converge to the unique solution from any starting guess.

## Algorithm

1. Allocate `u_xy` and `unew_xy` of size $N_{x}\times N_{y}$.
2. Set the boundary rows/columns of `u_xy` to the prescribed Dirichlet values.
3. Initialise the interior of `u_xy` to any value (zeros are fine).
4. Loop over interior $(i,j)$: write `unew_xy[i, j] = (u_xy[i+1, j] + u_xy[i-1, j] + u_xy[i, j+1] + u_xy[i, j-1]) / 4`.
5. Compute $\max_{i,j}|u^{\text{new}}_{i,j}-u^{\text{old}}_{i,j}|$.
6. Copy `unew_xy` into `u_xy`.
7. If the max change exceeds $\varepsilon$, return to step 4.

## Jacobi vs Gauss-Seidel vs SOR

A literal implementation of "read old, write new" (with two arrays) is **Jacobi iteration**. **True Gauss-Seidel** updates `u_xy[i, j]` in place during a single sweep, so right/down neighbours use the freshly-updated values - converges in roughly half the sweeps but is harder to vectorise. **Successive over-relaxation (SOR)** introduces a relaxation parameter $\omega\in(1,2)$:

$$
u_{i,j}^{\text{new}}=(1-\omega)u_{i,j}^{\text{old}}+\frac{\omega}{4}\bigl(\text{4-neighbour sum}\bigr),
$$

with optimal $\omega^{*}=2/(1+\sin(\pi/N))\to 2$ for large grids. SOR can be an order of magnitude faster than plain Gauss-Seidel.

## Extension to Poisson

For $\nabla^{2}u=g$ the update gains a source term:

$$
u_{i,j}^{\text{new}}=\frac{1}{4}\bigl(\text{4-neighbour sum}\bigr)-\frac{\Delta x^{2}}{4}\,g_{i,j}.
$$
