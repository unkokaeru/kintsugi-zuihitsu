# BTCS Scheme

The **BTCS scheme** (Backward-Time Centred-Space) is an implicit finite difference method for the [[Heat equation]].

## Discretisation

Using a backward difference in time and a centred second difference in space:

$$
u_{i+1,n}(1 + 2c) - c \, u_{i+1,n+1} - c \, u_{i+1,n-1} = u_{i,n}
$$

where

$$
c = \frac{\alpha \, dt}{dx^2}
$$

Because the unknowns $u_{i+1,n}$ appear on the left-hand side, this gives a **tridiagonal linear system** at each time step:

$$
A \, \mathbf{u}_{i+1} = \mathbf{u}_i
$$

The matrix $A$ is tridiagonal with $1 + 2c$ on the diagonal and $-c$ on the off-diagonals. It can be inverted using Gaussian elimination or `np.linalg.inv`. The Thomas algorithm (a specialised $O(N)$ solver for tridiagonal systems) also exists but is not covered in this module.

## Stability

The BTCS scheme is **unconditionally stable** - there is no restriction on the step size $dt$. This makes it suitable for stiff problems where the FTCS stability condition would force an impractically small $dt$.

## Accuracy

- First-order in time: $O(dt)$
- Second-order in space: $O(dx^2)$

Same order as [[FTCS scheme]] but without the stability constraint.

[[FTCS scheme]] | [[Heat equation]] | [[Finite differences]] | [[Implicit Euler method]] | [[Boundary conditions]] | [[Diagonal dominance]]
