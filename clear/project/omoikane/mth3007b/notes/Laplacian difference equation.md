# Laplacian difference equation

Finite-difference discretisation of the 2D [[Laplace equation]] $\partial^{2}u/\partial x^{2}+\partial^{2}u/\partial y^{2}=0$ on a square grid ($\Delta x=\Delta y$). Apply the symmetric three-point stencil in each direction and the $\Delta x^{2}$ factor cancels:

$$
\boxed{u_{i+1,j}+u_{i-1,j}+u_{i,j+1}+u_{i,j-1}-4u_{i,j}=0.}
$$

Equivalently:

$$
u_{i,j}=\frac{u_{i+1,j}+u_{i-1,j}+u_{i,j+1}+u_{i,j-1}}{4}.
$$

The interior value at $(i,j)$ equals the **average of its four orthogonal neighbours** - the discrete analogue of the mean value property of harmonic functions.

## Stencil

```
       ·    x    ·         j+1
       x    o    x         j      (centre - one equation per node)
       ·    x    ·         j-1
      i-1   i   i+1
```

Five-point stencil. The $-4$ on the centre coefficient becomes the diagonal entry of the resulting linear system; the four $+1$'s become off-diagonal entries - giving [[Diagonal dominance]] $|a_{ii}|=4\geq\sum_{j\neq i}|a_{ij}|$.

## Non-Square Grids

If $\Delta x\neq\Delta y$ the equation generalises to

$$
\frac{u_{i+1,j}-2u_{i,j}+u_{i-1,j}}{\Delta x^{2}}+\frac{u_{i,j+1}-2u_{i,j}+u_{i,j-1}}{\Delta y^{2}}=0.
$$

The five-point pattern stays; the weights of the four neighbours are no longer equal.

## Boundary Treatment

- **Dirichlet** boundaries: pin the boundary nodes and exclude them from the iteration.
- **Neumann** boundaries: introduce imaginary points and substitute, exactly as in 1D ([[Boundary conditions]]) - the Laplacian difference equation at the boundary row picks up factor-of-2 modifications on the relevant neighbour.

## Solving

Stacked over all interior nodes the equation gives a sparse linear system $\mathbf{A}\mathbf{u}=\mathbf{b}$. For $N_{x}\times N_{y}$ interior, $\mathbf{A}$ has $\sim 5N_{x}N_{y}$ non-zeros out of $(N_{x}N_{y})^{2}$ entries.

- **Direct solve** (`np.linalg.solve`): $O((N_{x}N_{y})^{3})$ - infeasible beyond $\sim 30\times 30$ grids.
- **Iterative**: [[Liebmann's method]] / Gauss-Seidel / SOR. Each sweep costs $O(N_{x}N_{y})$; convergence is $O(N_{x}^{2})$ sweeps for plain Gauss-Seidel, much better with SOR.

## Extension to Poisson

For $\nabla^{2}u=g(x,y)$ the right-hand side picks up a source term:

$$
u_{i+1,j}+u_{i-1,j}+u_{i,j+1}+u_{i,j-1}-4u_{i,j}=g_{i,j}\Delta x^{2}.
$$

The Liebmann update becomes $u_{i,j}^{\text{new}}=\tfrac{1}{4}\bigl(\text{4-neighbour sum}\bigr)-\tfrac{1}{4}g_{i,j}\Delta x^{2}$.
