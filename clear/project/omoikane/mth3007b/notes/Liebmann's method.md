# Liebmann's Method

**Liebmann's method** (also known as Gauss-Seidel iteration applied to PDEs) is an iterative solver for the 2D [[Laplace equation]], based on the [[Laplacian difference equation]].

## Update Rule

At each interior grid point $(i, j)$, apply the averaging update:

$$
u_{i,j}^{\text{new}} = \frac{1}{4}\left(u_{i+1,j}^{\text{old}} + u_{i-1,j}^{\text{old}} + u_{i,j+1}^{\text{old}} + u_{i,j-1}^{\text{old}}\right)
$$

## Algorithm

1. Initialise $u_{i,j}$ (e.g. to zero or an interpolation of the [[Boundary conditions]]).
2. Apply the update rule to every interior point.
3. Check convergence: if $\max_{i,j} |u_{i,j}^{\text{new}} - u_{i,j}^{\text{old}}| < \varepsilon$, stop.
4. Otherwise, set $u^{\text{old}} \leftarrow u^{\text{new}}$ and repeat.

## Convergence

Liebmann's method converges because the matrix associated with the [[Laplacian difference equation]] is [[Diagonal dominance|diagonally dominant]]. Diagonal dominance guarantees that the Gauss-Seidel iteration converges to the unique solution.

[[Laplace equation]] | [[Laplacian difference equation]] | [[Diagonal dominance]] | [[Boundary conditions]]
