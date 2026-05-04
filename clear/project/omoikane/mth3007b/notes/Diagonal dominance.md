# Diagonal dominance

A square matrix $\mathbf{A}=(a_{ij})$ is **(weakly) diagonally dominant** if for every row, the magnitude of the diagonal entry is at least the sum of magnitudes of the other entries in that row:

$$
\boxed{|a_{ii}|\;\geq\;\sum_{j\neq i}|a_{ij}|\qquad\text{for all }i.}
$$

**Strictly** diagonally dominant if the inequality is strict for all $i$.

## Why It Matters

Diagonal dominance is the standard sufficient condition guaranteeing convergence of **iterative linear solvers** like Jacobi and Gauss-Seidel ([[Liebmann's method]]) to the unique solution of $\mathbf{A}\mathbf{x}=\mathbf{b}$ from *any* starting guess.

## Where It Shows Up

For the discretised [[Laplace equation]] via the [[Laplacian difference equation]] $u_{i+1,j}+u_{i-1,j}+u_{i,j+1}+u_{i,j-1}-4u_{i,j}=0$, the system matrix $\mathbf{A}$ has $-4$ on the diagonal and at most four $+1$'s off-diagonal per row, so $|a_{ii}|=4\geq 4=\sum_{j\neq i}|a_{ij}|$. Diagonally dominant - so Liebmann iteration converges.

Boundary rows (which encode Dirichlet pinning $u_{0}=u_{L}$) have $|a_{ii}|=1$ and zero off-diagonals, comfortably dominant. Discretised second-derivative operators in 1D ([[FTCS scheme]] / [[BTCS scheme]] tridiagonals) are similarly diagonally dominant.

## Other Convergence Conditions

Diagonal dominance is sufficient but not necessary. Other convergence guarantees for iterative solvers:

- **Symmetric positive definite** $\mathbf{A}$: Gauss-Seidel converges (Jacobi may not).
- **Spectral radius** $\rho(\mathbf{M})<1$ where $\mathbf{M}$ is the iteration matrix - the *exact* necessary-and-sufficient condition.

For the matrices arising from finite-difference discretisations of elliptic PDEs, diagonal dominance + symmetry are usually both available, so iterative methods always work.

## Direct Solver Connection

Diagonally dominant matrices also have a useful property for direct solvers: they are guaranteed to admit **LU decomposition without pivoting**. Round-off behaves better than for general matrices.
