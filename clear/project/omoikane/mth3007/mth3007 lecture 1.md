# Mth3007 Lecture 1

iusdhgiusdhg

```python
import micropip
await micropip.install("matplotlib")
await micropip.install("numpy")
```

```python
"""A simple implementation of linear regression using the least squares method."""
import matplotlib.pyplot as plt
import numpy as np
```

```python
def sum_of_squares(values: list[float]) -> float:
    """
    Calculate the sum of squares of a list of values.

    Parameters
    ----------
    values : list[float]
        A list of numerical values.

    Returns
    -------
    float
        The sum of squares of the input values.
    """
    return sum(x ** 2 for x in values)
```

```python
def linear_regression(x_values: list[float], y_values: list[float]) -> tuple[float, float]:
    """
    Perform linear regression on a set of 2D points.

    Parameters
    ----------
    x_values : list[float]
        A list of x coordinates.
    y_values : list[float]
        A list of y coordinates.

    Returns
    -------
    tuple[float, float]
        The coefficients (slope, intercept) of the fitted line.

    Notes
    -----
    The linear regression is computed using the least squares method, derived
    from minimising the sum of squared residuals to find the best-fitting line.
    The formulas used are:
        slope (m) = (N * Σ(xy) - Σx * Σy) / (N * Σ(x^2) - (Σx)^2)
        intercept (b) = (Σy - m * Σx) / N
    """
    xy_values = [x * y for x, y in zip(x_values, y_values)]  # Element-wise product of x and y

    slope = (
        (len(x_values) * sum(xy_values) - sum(x_values) * sum(y_values))
        /
        (len(x_values) * sum_of_squares(x_values) - sum(x_values) ** 2)
    )

    intercept = (
        (sum(y_values) - slope * sum(x_values))
        /
        len(x_values)
    )

    return slope, intercept
```

```python
def plot_data(x_values: list[float], y_values: list[float], slope: float, intercept: float) -> None:
    """
    Plot the original data points and the fitted linear regression line.

    Parameters
    ----------
    x_values : list[float]
        A list of x coordinates.
    y_values : list[float]
        A list of y coordinates.
    slope : float
        The slope of the fitted line.
    intercept : float
        The intercept of the fitted line.
    """
    plt.scatter(x_values, y_values, color='blue', label='Data Points')

    x_fit = np.array([min(x_values), max(x_values)])
    y_fit = slope * x_fit + intercept
    plt.plot(x_fit, y_fit, color='red', label='Fitted Line')

    plt.xlabel('X values')
    plt.ylabel('Y values')
    plt.title('Linear Regression Fit')
    plt.legend()

    # Show the plot
    plt.show()
```

```python
coordinate_pairs: list[tuple[float, float]] = [
    (0.526993994, 3.477982975),
    (0.691126852, 4.197925374),
    (0.745407955, 4.127080815),
    (0.669344512, 3.365719179),
    (0.518168748, 3.387060084),
    (0.291558862, 1.829099436),
    (0.010870453, 0.658137249),
    (0.71818573, 4.023164612),
    (0.897190954, 5.074088869),
    (0.476789102, 2.752890033),
]

x_values: list[float] = [x for x, _ in coordinate_pairs]
y_values: list[float] = [y for _, y in coordinate_pairs]
```

```python
print(linear_regression(x_values, y_values))
```

```python
plot_data(x_values, y_values, *linear_regression(x_values, y_values))
```

