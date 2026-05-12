# Gaussian Elimination

**Gaussian elimination** is a direct method for solving the linear system $A\mathbf{x} = \mathbf{b}$. It operates on the augmented matrix $[A | \mathbf{b}]$ and proceeds in two phases.

## Forward Elimination

For each pivot column from left to right, subtract suitable multiples of the pivot row from all rows below it to produce zeros below the diagonal. After this phase, the augmented matrix is upper triangular.

## Back Substitution

Solve for the unknowns starting from the last equation (which involves only one unknown) and working upward.

## Python

```python runnable
import numpy as np

def gaussian_elimination(augmented_matrix: np.ndarray) -> np.ndarray:
    """Solve Ax = b using Gaussian elimination without pivoting.

    Args:
        augmented_matrix: The augmented matrix [A | b] of shape (n, n+1).
            Modified in place during elimination.

    Returns:
        Solution vector x of length n.
    """
    number_of_equations = augmented_matrix.shape[0]
    matrix = augmented_matrix.astype(float)

    # Forward elimination
    for pivot_col in range(number_of_equations):
        for target_row in range(pivot_col + 1, number_of_equations):
            factor = matrix[target_row, pivot_col] / matrix[pivot_col, pivot_col]
            matrix[target_row, :] -= factor * matrix[pivot_col, :]

    # Back substitution
    solution = np.zeros(number_of_equations)
    for row in range(number_of_equations - 1, -1, -1):
        rhs = matrix[row, number_of_equations]
        dot_product = np.dot(matrix[row, row + 1:number_of_equations],
                             solution[row + 1:number_of_equations])
        solution[row] = (rhs - dot_product) / matrix[row, row]

    return solution
```

## Use in BTCS

For the [[BTCS scheme]], the tridiagonal linear system at each time step can be solved using Gaussian elimination (or more efficiently using `np.linalg.inv` to precompute the inverse, since the matrix does not change between time steps). A specialised $O(N)$ solver for tridiagonal systems - the Thomas algorithm - also exists but is not covered in this module.

[[BTCS scheme]] | [[Diagonal dominance]] | [[Laplacian difference equation]]
