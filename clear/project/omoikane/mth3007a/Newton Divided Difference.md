# Newton Divided Difference

**Newton's Divided Difference Interpolation** is a method for constructing [[Polynomial Interpolation|interpolating polynomials]] using recursively computed divided differences.

## Divided Differences

### First Divided Difference

The first divided difference between two points is simply the slope:

$$
f[x_0, x_1] = \frac{f(x_1) - f(x_0)}{x_1 - x_0}
$$

This is equivalent to [[Linear Interpolation]].

### Higher-Order Divided Differences

Higher-order divided differences are defined recursively:

$$
f[x_0, x_1, \ldots, x_k] = \frac{f[x_1, \ldots, x_k] - f[x_0, \ldots, x_{k-1}]}{x_k - x_0}
$$

For example, the second divided difference is:

$$
f[x_0, x_1, x_2] = \frac{f[x_1, x_2] - f[x_0, x_1]}{x_2 - x_0}
$$

## Newton's Interpolating Polynomial

The interpolating polynomial using Newton's form is:

$$
P(x) = f(x_0) + (x - x_0)f[x_0, x_1] + (x - x_0)(x - x_1)f[x_0, x_1, x_2] + \cdots
$$

More generally:

$$
P(x) = \sum_{k=0}^{n} f[x_0, \ldots, x_k] \prod_{j=0}^{k-1} (x - x_j)
$$

## Divided Difference Table

Divided differences are typically organized in a table:

| $x_i$ | $f(x_i)$ | $f[x_i, x_{i+1}]$ | $f[x_i, x_{i+1}, x_{i+2}]$ | … |
|---------|------------|---------------------|------------------------------|-----|
| $x_0$ | $f(x_0)$ | $f[x_0, x_1]$     | $f[x_0, x_1, x_2]$         | … |
| $x_1$ | $f(x_1)$ | $f[x_1, x_2]$     | $f[x_1, x_2, x_3]$         | … |
| $x_2$ | $f(x_2)$ | $f[x_2, x_3]$     |                              |     |
| $x_3$ | $f(x_3)$ |                     |                              |     |

Each entry is computed from the two entries to its left and upper-left.

## Properties

1. **Incremental construction**: Can add new points without recomputing entire polynomial
2. **Truncation**: Polynomial can be truncated at any term
3. **Error estimation**: Next term provides error estimate
4. **Symmetry**: $f[x_0, x_1, \ldots, x_k]$ is independent of the order of arguments
5. **Connection to derivatives**: Related to higher-order terms in [[Taylor Series]]

## Relationship to Taylor Series

The divided differences are related to derivatives:

$$
f[x_0, x_1, \ldots, x_k] \approx \frac{f^{(k)}(\xi)}{k!}
$$

for some $\xi$ in the interval $[x_0, x_k]$.

## Advantages

- **Efficient**: Easy to compute recursively
- **Flexible**: Can add new data points incrementally
- **Stable**: Generally numerically stable
- **Error estimation**: Built-in error estimates

## Limitations

- **Runge phenomenon**: High-degree polynomials can oscillate wildly
- **Equispaced points**: Particularly prone to oscillations with equispaced data
- **Extrapolation**: Poor for extrapolation beyond data range

## Comparison to Lagrange Interpolation

Newton's and [[Lagrange Interpolation]] produce **identical polynomials** but:

- Newton's form is more **efficient for computation**
- Newton's form is more **flexible** (incremental updates)
- Lagrange form is more **symmetric** and conceptually simpler

## Python Implementation

```python
def compute_divided_differences(x_values, y_values):
    """
    Compute the divided difference table.
    
    Parameters
    ----------
    x_values : numpy.ndarray
        Array of x-coordinates
    y_values : numpy.ndarray
        Array of y-coordinates
        
    Returns
    -------
    numpy.ndarray
        2D array containing divided difference table
    """
    num_points = len(x_values)
    table = np.zeros((num_points, num_points))
    table[:, 0] = y_values
    
    for column in range(1, num_points):
        for row in range(num_points - column):
            numerator = table[row + 1, column - 1] - table[row, column - 1]
            denominator = x_values[row + column] - x_values[row]
            table[row, column] = numerator / denominator
    
    return table

def newton_polynomial(x_value, x_data, divided_diff_table):
    """
    Evaluate Newton's polynomial at a point.
    
    Parameters
    ----------
    x_value : float
        Point at which to evaluate
    x_data : numpy.ndarray
        Array of x-coordinates
    divided_diff_table : numpy.ndarray
        Divided difference table
        
    Returns
    -------
    float
        Value of polynomial at x_value
    """
    num_points = len(x_data)
    result = divided_diff_table[0, 0]
    product_term = 1.0
    
    for index in range(1, num_points):
        product_term *= (x_value - x_data[index - 1])
        result += divided_diff_table[0, index] * product_term
    
    return result
```

## Applications

- Function approximation
- Numerical differentiation
- Numerical integration
- Data smoothing

## Related Methods

- [[Lagrange Interpolation]]: Alternative polynomial form
- [[Spline Interpolation]]: Piecewise alternative
- [[Taylor Series]]: Local polynomial approximation
