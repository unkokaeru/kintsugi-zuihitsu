# MTH3007b Lecture 10

> [!quote] Me, in the lecture
> zzzzz...

This session moves from 1D time-dependent PDEs to a 2D steady-state problem: the Laplace equation. We solve it iteratively using Liebmann's method (Gauss-Seidel applied to PDEs) and cover the Python array/matrix tools needed to implement it.

## The 2D Laplace Equation

The **[[Laplace equation|2D Laplace equation]]** is the steady-state condition $\partial u / \partial t = 0$ applied to the 2D diffusion equation:

$$
\nabla^2 u = 0 \qquad \Longleftrightarrow \qquad \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0
$$

## Finite Difference Discretisation

Applying the centred second-derivative stencil in both $x$ and $y$ on a uniform grid with spacing $\Delta x = \Delta y$:

$$
\frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{(\Delta x)^2} + \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{(\Delta y)^2} = 0
$$

When $\Delta x = \Delta y$, this simplifies to the **[[Laplacian difference equation]]**:

$$
\boxed{u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 4u_{i,j} = 0}
$$

Rearranging gives the update rule for each interior point:

$$
\boxed{u_{i,j}^{\text{new}} = \frac{1}{4}\left(u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1}\right)}
$$

## Liebmann's Method

**[[Liebmann's method]]** is Gauss-Seidel iteration applied to the 2D Laplace equation. Starting from an initial guess (e.g. all zeros at interior points, with boundary values fixed), we repeatedly update each interior point using the formula above until the solution converges.

### Convergence Criterion

Iteration continues until the maximum change over all interior points falls below a tolerance $\varepsilon$:

$$
\max_{i,j}\,\left|u_{i,j}^{\text{new}} - u_{i,j}^{\text{old}}\right| < \varepsilon
$$

A typical value is $\varepsilon = 10^{-4}$.

Convergence is guaranteed because the resulting matrix is **[[Diagonal dominance|diagonally dominant]]**: the diagonal entry $(-4)$ has magnitude greater than the sum of the absolute values of the off-diagonal entries $(1+1+1+1 = 4)$ - just at the boundary of strict diagonal dominance, but the fixed boundary conditions ensure convergence.

### Computing the Maximum Error

Two equivalent approaches:

```python runnable
max_error = 0.0
for row_index in range(number_of_rows):
    for col_index in range(number_of_cols):
        current_error = np.abs(u_new[row_index, col_index] - u_old[row_index, col_index])
        if current_error > max_error:
            max_error = current_error
# Alternative (preferred):
max_error = np.amax(np.abs(u_new - u_old))
```

The `np.amax` version is more concise and vectorised.

### Algorithm

1. Create two 2D arrays `u_xy` and `unew_xy` of size $N_r \times N_c$, initialised to zero.
2. Set Dirichlet boundary conditions on all four edges of `u_xy`.
3. Copy `u_xy` to `unew_xy`.
4. Loop over all interior points $(i, j)$; update `unew_xy[i,j]` using the four neighbours from `u_xy`.
5. Compute `max_error = np.amax(np.abs(unew_xy - u_xy))`.
6. Copy `unew_xy` into `u_xy` (use `u_xy = 1.0*unew_xy` to copy by value).
7. Repeat from step 4 until `max_error < epsilon`.
8. Plot the result with `matplotlib`'s `plot_surface`.

## Arrays and Matrices in Python

### Creating and Indexing

```python runnable
import numpy as np

number_of_rows = 5
number_of_cols = 6
number_of_elements = 10
M = np.zeros((number_of_rows, number_of_cols))  # matrix, all zero
M[2, 4] = 10                                    # set element in row 3, col 5
v = np.zeros(number_of_elements)                # vector of zeros
v[3] = 5
v[-1] = 10                                      # last element

# Copy array correctly (B=A is an alias, not a copy):
original = np.array([1.0, 2.0, 3.0])
copy_correct = 1.0 * original     # independent copy
copy_also_ok = original.copy()    # also independent
alias_wrong  = original           # WRONG for copying - same data
```

> [!warning] Array copying
> `B = A` does **not** copy an array - it creates an alias. Both `A` and `B` then point to the same data. Use `B = 1.0*A` or `B = A.copy()` to get an independent copy.

---

## Pre-Lecture Notes from [[mth3007b lecture notes 10.pdf|University Notes]]

- 2D Laplace equation: $\partial_{xx}u + \partial_{yy}u = 0$; steady-state condition on 2D diffusion.
- Finite difference discretisation gives: $u_{i+1,j}+u_{i-1,j}+u_{i,j+1}+u_{i,j-1}-4u_{i,j}=0$.
- Liebmann update: $u_{i,j}^{\text{new}}=(u_{i+1,j}+u_{i-1,j}+u_{i,j+1}+u_{i,j-1})/4$.
- Iterate until $\max_{i,j}|u^{\text{new}}-u^{\text{old}}|<\varepsilon$ (e.g. $\varepsilon=10^{-4}$).
- Convergence guaranteed by diagonal dominance of the system matrix.
- Max error: `np.amax(np.abs(unew_xy - u_xy))` is the vectorised approach.
- Array copy: `B=1.0*A` or `B=A.copy()`; never `B=A` for independent copies.
- Next session: revision - feedback on Python implementations and a list of practice exercises.
