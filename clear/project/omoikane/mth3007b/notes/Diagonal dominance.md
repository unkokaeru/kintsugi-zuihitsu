# Diagonal Dominance

A square matrix $A$ is **diagonally dominant** if, for every row $i$, the magnitude of the diagonal entry is greater than or equal to the sum of the magnitudes of all off-diagonal entries in that row:

$$
|a_{ii}| \geq \sum_{j \neq i} |a_{ij}| \quad \text{for all } i
$$

## Significance

Diagonal dominance guarantees the convergence of iterative solvers such as [[Liebmann's method]] (Gauss-Seidel iteration). The matrix arising from the [[Laplacian difference equation]] satisfies this property: the diagonal entry is $-4$ (or $4$ in magnitude), and the four off-diagonal entries each have magnitude 1, so $4 \geq 4$ with equality - the matrix is weakly diagonally dominant.

For the [[BTCS scheme]], the tridiagonal matrix has diagonal entries $1 + 2c$ and off-diagonal entries $-c$, giving $1 + 2c \geq 2c$, which holds strictly. This is one reason the BTCS system is well-conditioned and solvable.

[[Liebmann's method]] | [[Laplacian difference equation]] | [[BTCS scheme]]
