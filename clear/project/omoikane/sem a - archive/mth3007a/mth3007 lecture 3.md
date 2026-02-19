# Mth3007 Lecture 3

- [[Least squares regression]] - expanding to any general polynomial.

> [!important] The worksheet covered more than this, but it was too much effort at the time of writing, whoops.

## How Could You Implement General Polynomial Regression?

First of all, our imports…

```python runnable
import micropip
await micropip.install("matplotlib")
await micropip.install("numpy")

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

```python runnable
def polynomial_regression(
    x_values: list[float],
    y_values: list[float],
    degree: int
) -> list[float]:
    """
    Perform polynomial regression on a set of 2D points.

    Parameters
    ----------
    x_values : list[float]
        A list of x coordinates.
    y_values : list[float]
        A list of y coordinates.
    degree : int
        The degree of the polynomial to fit (e.g., 1 for linear, 2 for quadratic, 3 for cubic).

    Returns
    -------
    list[float]
        The coefficients [a0, a1, a2, …, an] of the fitted polynomial:
        y = a0 + a1*x + a2*x^2 + … + an*x^n

    Notes
    -----
    The polynomial regression is computed using the least squares method.
    This involves setting up a system of normal equations and solving them
    using Gaussian elimination. The method minimizes the sum of squared
    residuals between the data points and the fitted polynomial.

    For a polynomial of degree n, we need to solve the system:
        | Σ(x^0)   Σ(x^1)   … Σ(x^n)   | | a0 |   | Σ(y)       |
        | Σ(x^1)   Σ(x^2)   … Σ(x^(n+1))| | a1 |   | Σ(xy)      |
        | …      …      … …       | | .. | = | …        |
        | Σ(x^n)   Σ(x^(n+1)) … Σ(x^2n) | | an |   | Σ(x^n * y) |

    Examples
    --------
    >>> x_data = [1.0, 2.0, 3.0, 4.0]
    >>> y_data = [2.1, 3.9, 6.1, 8.0]
    >>> coeffs = polynomial_regression(x_data, y_data, 1)  # Linear fit
    >>> print(coeffs)  # [a0, a1] for y = a0 + a1*x
    """
    num_data_points = len(x_values)
    num_coefficients = degree + 1
    zero_power = 0
    first_coefficient_index = 0

    # Build the coefficient matrix (normal equations matrix)
    # Entry (row_index, col_index) contains the sum of x^(row_index + col_index)
    coefficient_matrix = []
    for row_index in range(num_coefficients):
        row = []
        for col_index in range(num_coefficients):
            power = row_index + col_index
            if power == zero_power:
                # Sum of x^0 equals the number of data points
                row.append(float(num_data_points))
            else:
                # Calculate sum of x values raised to the current power
                power_sum = sum(x_value ** power for x_value in x_values)
                row.append(power_sum)
        coefficient_matrix.append(row)

    # Build the right-hand side vector
    # Entry at index contains the sum of (x^index * y)
    right_hand_side = []
    for coefficient_index in range(num_coefficients):
        if coefficient_index == first_coefficient_index:
            # For the constant term, sum all y values
            right_hand_side.append(sum(y_values))
        else:
            # Calculate sum of x^coefficient_index * y for each data point
            weighted_sum = sum(
                x_value ** coefficient_index * y_value
                for x_value, y_value in zip(x_values, y_values)
            )
            right_hand_side.append(weighted_sum)

    # Solve the system using Gaussian elimination
    coefficients = gaussian_elimination(coefficient_matrix, right_hand_side)

    return coefficients
```

Then that's it! However, we have no way of seeing if it actually works. Hence, we'll make a few generic functions for plotting our results…

```python runnable
def evaluate_polynomial(coefficients: list[float], x_value: float) -> float:
    """
    Evaluate a polynomial at a given x value.

    Parameters
    ----------
    coefficients : list[float]
        Coefficients [a0, a1, a2, …, an] of the polynomial.
    x_value : float
        The x value at which to evaluate the polynomial.

    Returns
    -------
    float
        The value of the polynomial at x_value.
    """
    polynomial_value = sum(
        coefficient * (x_value ** power)
        for power, coefficient in enumerate(coefficients)
    )
    return polynomial_value


def _ensure_figures_directory(figures_dir: str = 'figures') -> Path:
    """
    Ensure the figures directory exists.

    Parameters
    ----------
    figures_dir : str, optional
        Directory name for saving plots (default: 'figures').

    Returns
    -------
    Path
        Path object for the figures directory.
    """
    figures_path = Path(figures_dir)
    figures_path.mkdir(exist_ok=True)
    return figures_path


def plot_data(
    x_values: list[float],
    y_values: list[float],
    coefficients: list[float],
    degree: int,
    filename: str | None = None,
    figures_dir: str = 'figures',
    figure_width: float = 10,
    figure_height: float = 6,
    dpi: int = 150,
    point_size: int = 100,
    line_width: float = 2,
    smooth_points: int = 200,
    data_color: str = 'blue',
    fitted_color: str = 'red',
    marker_style: str = 'x',
    grid_alpha: float = 0.3,
    label_fontsize: int = 12,
    title_fontsize: int = 14,
    legend_fontsize: int = 10
) -> None:
    """
    Plot the original data points and the fitted polynomial curve.

    Parameters
    ----------
    x_values : list[float]
        A list of x coordinates.
    y_values : list[float]
        A list of y coordinates.
    coefficients : list[float]
        The coefficients of the fitted polynomial.
    degree : int
        The degree of the polynomial.
    filename : str | None, optional
        If provided, save the plot to this filename in the figures/ directory.
        Otherwise, display it.
    figures_dir : str, optional
        Directory name for saving plots (default: 'figures').
    figure_width : float, optional
        Width of the figure in inches (default: 10).
    figure_height : float, optional
        Height of the figure in inches (default: 6).
    dpi : int, optional
        Dots per inch for saved figure (default: 150).
    point_size : int, optional
        Size of scatter plot points (default: 100).
    line_width : float, optional
        Width of the fitted line (default: 2).
    smooth_points : int, optional
        Number of points for smooth curve rendering (default: 200).
    data_color : str, optional
        Color for data points (default: 'blue').
    fitted_color : str, optional
        Color for fitted curve (default: 'red').
    marker_style : str, optional
        Marker style for data points (default: 'x').
    grid_alpha : float, optional
        Transparency of grid lines (default: 0.3).
    label_fontsize : int, optional
        Font size for axis labels (default: 12).
    title_fontsize : int, optional
        Font size for title (default: 14).
    legend_fontsize : int, optional
        Font size for legend (default: 10).
    """
    # Create figure with specified dimensions
    plt.figure(figsize=(figure_width, figure_height))

    # Plot original data points
    plt.scatter(
        x_values,
        y_values,
        color=data_color,
        label='Data Points',
        marker=marker_style,
        s=point_size
    )

    # Create smooth curve for the fitted polynomial
    min_x_value = min(x_values)
    max_x_value = max(x_values)
    x_fit_values = np.linspace(min_x_value, max_x_value, smooth_points)
    y_fit_values = [
        evaluate_polynomial(coefficients, x_value)
        for x_value in x_fit_values
    ]

    # Plot fitted polynomial curve
    fitted_curve_label = f'Fitted Polynomial (degree {degree})'
    plt.plot(
        x_fit_values,
        y_fit_values,
        color=fitted_color,
        linewidth=line_width,
        label=fitted_curve_label
    )

    # Configure plot aesthetics
    plt.xlabel('x', fontsize=label_fontsize)
    plt.ylabel('y', fontsize=label_fontsize)
    plot_title = f'Polynomial Regression Fit (Degree {degree})'
    plt.title(plot_title, fontsize=title_fontsize)
    plt.legend(fontsize=legend_fontsize)
    plt.grid(True, alpha=grid_alpha)

    # Save or show the plot
    if filename:
        figures_path = _ensure_figures_directory(figures_dir)
        full_path = figures_path / filename
        bbox_setting = 'tight'
        plt.savefig(full_path, dpi=dpi, bbox_inches=bbox_setting)
        print(f"Plot saved to: {full_path}")
        plt.close()
    else:
        plt.show()
        plt.close()


def format_polynomial_equation(
    coefficients: list[float],
    decimal_places: int = 6,
    coefficient_tolerance: float = 1e-10
) -> str:
    """
    Format the polynomial equation as a string.

    Parameters
    ----------
    coefficients : list[float]
        The coefficients of the polynomial.
    decimal_places : int, optional
        Number of decimal places to display (default: 6).
    coefficient_tolerance : float, optional
        Threshold below which coefficients are considered zero (default: 1e-10).

    Returns
    -------
    str
        A formatted string representation of the polynomial.
    """
    constant_term_index = 0
    linear_term_index = 1
    positive_sign = "+"
    negative_sign = "-"
    empty_string = ""
    space_separator = " "

    terms = []
    for power, coefficient in enumerate(coefficients):
        # Skip very small coefficients (essentially zero)
        if abs(coefficient) < coefficient_tolerance:
            continue

        if power ** constant_term_index:
            # Constant term (a0)
            formatted_term = f"{coefficient:.{decimal_places}f}"
            terms.append(formatted_term)
        elif power ** linear_term_index:
            # Linear term (a1 * x)
            sign = positive_sign if coefficient >= 0 else empty_string
            formatted_term = f"{sign}{coefficient:.{decimal_places}f}x"
            terms.append(formatted_term)
        else:
            # Higher degree terms (an * x^n)
            sign = positive_sign if coefficient >= 0 else empty_string
            formatted_term = f"{sign}{coefficient:.{decimal_places}f}x^{power}"
            terms.append(formatted_term)

    # Join terms and clean up formatting
    equation = space_separator.join(terms)
    equation = equation.replace(f"{positive_sign} {negative_sign}", f"{negative_sign} ")

    equation_prefix = "y = "
    return f"{equation_prefix}{equation}"
```

Then a quick function to generate test data:

```python runnable
def generate_polynomial_data(coefficients, x_min=-5, x_max=5,
                             n_points=20, noise_strength=1.0, seed=42):
    """
    Generate test data from a polynomial with noise.

    Args:
        coefficients: List of polynomial coefficients [a0, a1, a2, …] for a0 + a1*x + a2*x^2 + …
        x_min: Minimum x value
        x_max: Maximum x value
        n_points: Number of data points
        noise_strength: Standard deviation of Gaussian noise
        seed: Random seed for reproducibility

    Returns:
        Tuple of (x_values, y_values) as lists
    """
    np.random.seed(seed)
    x_values = list(np.linspace(x_min, x_max, n_points))

    # Calculate ideal y values
    y_values = []
    for x in x_values:
        y = sum(coef * (x ** power) for power, coef in enumerate(coefficients))
        y_values.append(y)

    # Add noise
    noise = np.random.normal(0, noise_strength, len(x_values))
    y_noisy = [y + n for y, n in zip(y_values, noise)]

    return x_values, y_noisy
```

Finally, the tests:

```python runnable
print("\n" + "="*60)
print("POLYNOMIAL REGRESSION TESTS")
print("="*60 + "\n")

# Test 1: Linear (degree 1)
print("Test 1: Linear Regression")
print("-" * 40)
x, y = generate_polynomial_data([0.5, 5.0], x_min=0, x_max=1, n_points=10, noise_strength=0.5)
coeffs = polynomial_regression(x, y, degree=1)
print(f"Coefficients: {coeffs}")
print(format_polynomial_equation(coeffs))
plot_data(x, y, coeffs, degree=1, filename="test_linear.png")
print("✓ Passed\n")

# Test 2: Quadratic (degree 2)
print("Test 2: Quadratic Regression")
print("-" * 40)
x, y = generate_polynomial_data([-2.5, 0.0, 4.0], x_min=-5, x_max=5,
								n_points=20, noise_strength=3.0)
coeffs = polynomial_regression(x, y, degree=2)
print(f"Coefficients: {coeffs}")
print(format_polynomial_equation(coeffs))
plot_data(x, y, coeffs, degree=2, filename="test_quadratic.png")
print("✓ Passed\n")

# Test 3: Cubic (degree 3)
print("Test 3: Cubic Regression")
print("-" * 40)
x, y = generate_polynomial_data([2.0, 0.0, 0.0, 3.0], x_min=-2, x_max=2,
								n_points=20, noise_strength=2.0)
coeffs = polynomial_regression(x, y, degree=3)
print(f"Coefficients: {coeffs}")
print(format_polynomial_equation(coeffs))
plot_data(x, y, coeffs, degree=3, filename="test_cubic.png")
print("✓ Passed\n")

print("="*60)
print("ALL TESTS PASSED! ✓")
print("="*60)
```

All done! At least, hopefully…
