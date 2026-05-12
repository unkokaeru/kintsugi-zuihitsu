# Laplacian Difference Equation

The **Laplacian difference equation** is the finite difference form of the 2D [[Laplace equation]], obtained by replacing both second derivatives with centred [[Finite differences]].

$$
u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 4 \, u_{i,j} = 0
$$

Rearranging:

$$
u_{i,j} = \frac{1}{4}\left(u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1}\right)
$$

This says that at each interior grid point, the value of $u$ equals the average of its four neighbours. This averaging structure is the basis of [[Liebmann's method]].

The equation must be satisfied at every interior grid point simultaneously. Together with the [[Boundary conditions]], this gives a large linear system. Rather than solving it directly, [[Liebmann's method]] solves it iteratively by repeatedly applying the averaging rule until convergence.

[[Laplace equation]] | [[Liebmann's method]] | [[Finite differences]] | [[Boundary conditions]] | [[Diagonal dominance]]
