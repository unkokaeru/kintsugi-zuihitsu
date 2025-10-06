# Mth3007 Lecture 2

- [[Solving systems of equations]]

## How Do We Program a Systems of Equations Solver?

For this program we don't want to rely on any dependencies, as the idea is to do everything from first principles. So, we'll jump straight into the function!

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

This is fairly readable and follows the logic we've learned, but just to verify I also made a matrix vector multiplication function…

```python runnable
def matrix_vector_multiply(matrix: list[list[float]], vector: list[float]) -> list[float]:
    """
    Multiply a matrix by a vector using built-in operations.

    Parameters
    ----------
    matrix : list[list[float]]
        The matrix to multiply (left operand).
    vector : list[float]
        The vector to multiply (right operand).

    Returns
    -------
    list[float]
        The result of matrix-vector multiplication.
    """
    result = []
    for row in matrix:
        dot_product = sum(row[i] * vector[i] for i in range(len(vector)))
        result.append(dot_product)
    return result
```

However, we run into the issue of floating point accuracy when comparing answers! So for this I made a tolerant vector comparison function:

```python runnable
def vectors_are_close(
    vector_one: list[float],
    vector_two: list[float],
    tolerance: float = 1e-9
) -> bool:
    """
    Check if two vectors are approximately equal within a given tolerance.

    Parameters
    ----------
    vector_one : list[float]
        First vector to compare.
    vector_two : list[float]
        Second vector to compare.
    tolerance : float, optional
        Maximum allowed difference between corresponding elements (default is 1e-9).

    Returns
    -------
    bool
        True if vectors are close within tolerance, False otherwise.
    """
    if len(vector_one) != len(vector_two):
        return False

    for i in range(len(vector_one)):
        if abs(vector_one[i] - vector_two[i]) > tolerance:
            return False
    return True
```

With this we're done! All that's left is to test:

```python runnable
# Example usage with a 3x3 linear system
coefficient_matrix = [[3.0, 2.0, -4.0],
                        [2.0, 3.0, 3.0],
                        [5.0, -3.0, 1.0]]
right_hand_side_vector = [3.0, 15.0, 14.0]

solution_vector = gaussian_elimination(coefficient_matrix, right_hand_side_vector)
print("Solution vector:", solution_vector)

# Verify the solution by checking if coefficient_matrix * solution = right_hand_side
verification_result = matrix_vector_multiply(coefficient_matrix, solution_vector)
if vectors_are_close(verification_result, right_hand_side_vector):
    print("The solution is verified successfully.")
else:
    print("Solution verification failed.")
```

All good :)

---

![[mth3007 lectures.pdf#page=2]]
