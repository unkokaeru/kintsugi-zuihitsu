# Mth3007 Lecture 3

- [[Least squares regression]] - expanding to any general polynomial.

> [!important] The worksheet covered more than this, but it was too much effort at the time of writing, whoops.

## How Could You Implement General Polynomial Regression?

First of all, our imports…

```python runnable
import matplotlib
from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
```

As well as a function we programmed in [[mth3007 lecture 2]].

```python runnable
def gaussian_elimination(
    coefficient_matrix: list[list[float]],
    right_hand_side: list[float]
) -> list[float]:
    """
    Solve the linear system using Gaussian elimination with partial pivoting.

    Parameters
    ----------
    coefficient_matrix : list[list[float]]
        Square coefficient matrix as a list of lists where each inner list
        represents a row of the coefficient matrix.
    right_hand_side : list[float]
        Right-hand side vector as a list of floats representing the
        constants in the linear system.

    Returns
    -------
    list[float]
        Solution vector as a list of floats containing the values of the
        variables that satisfy the linear system.

    Raises
    ------
    ValueError
        If the matrix is singular or nearly singular (determinant is zero or
        very close to zero).

    Examples
    --------
    >>> coefficient_matrix = [[2.0, 1.0], [1.0, 3.0]]
    >>> right_hand_side = [5.0, 7.0]
    >>> solution = gaussian_elimination(coefficient_matrix, right_hand_side)
    >>> print(solution)
    [1.6, 1.8]
    """
    num_equations = len(right_hand_side)

    # Create an augmented matrix [coefficient_matrix | right_hand_side]
    # Deep copy the coefficient matrix and append right_hand_side as last column
    augmented_matrix = []
    for row_index in range(num_equations):
        augmented_row = coefficient_matrix[row_index].copy()
        augmented_row.append(right_hand_side[row_index])
        augmented_matrix.append(augmented_row)

    # Forward elimination phase
    for current_pivot_row in range(num_equations):
        # Partial pivoting: find the row with the largest absolute value
        max_absolute_value = 0.0
        max_row_index = current_pivot_row

        for search_row in range(current_pivot_row, num_equations):
            current_absolute_value = abs(augmented_matrix[search_row][current_pivot_row])
            if current_absolute_value > max_absolute_value:
                max_absolute_value = current_absolute_value
                max_row_index = search_row

        if augmented_matrix[max_row_index][current_pivot_row] == 0:
            raise ValueError("Matrix is singular or nearly singular.")

        # Swap rows to bring the largest pivot element to the diagonal
        augmented_matrix[current_pivot_row], augmented_matrix[max_row_index] = (
            augmented_matrix[max_row_index], augmented_matrix[current_pivot_row]
        )

        # Eliminate entries below the pivot element
        for elimination_row in range(current_pivot_row + 1, num_equations):
            pivot_element = augmented_matrix[current_pivot_row][current_pivot_row]
            elimination_element = augmented_matrix[elimination_row][current_pivot_row]
            elimination_factor = elimination_element / pivot_element

            # Subtract elimination_factor * current_pivot_row from elimination_row
            for column_index in range(num_equations + 1):
                augmented_matrix[elimination_row][column_index] -= (
                    elimination_factor * augmented_matrix[current_pivot_row][column_index]
                )

    # Back substitution phase
    solution_vector = [0.0] * num_equations
    for current_variable_index in range(num_equations - 1, -1, -1):
        constant_term = augmented_matrix[current_variable_index][-1]
        diagonal_coefficient = augmented_matrix[current_variable_index][current_variable_index]

        # Calculate the dot product of coefficients and known variables
        sum_of_known_terms = 0.0
        for known_variable_index in range(current_variable_index + 1, num_equations):
            coefficient_value = augmented_matrix[current_variable_index][known_variable_index]
            variable_value = solution_vector[known_variable_index]
            sum_of_known_terms += coefficient_value * variable_value

        solution_vector[current_variable_index] = (
            constant_term - sum_of_known_terms
        ) / diagonal_coefficient

    return solution_vector
```

Then the main function, explained in its docstring:

```pyth
```