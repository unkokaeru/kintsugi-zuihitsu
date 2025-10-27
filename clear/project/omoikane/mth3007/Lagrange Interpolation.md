# Lagrange Interpolation

**Lagrange interpolation** is a method for [[Polynomial Interpolation]] that constructs a unique polynomial passing through a given set of points using Lagrange basis polynomials.

## Formula

Given $n + 1$ data points $(x_0, y_0), (x_1, y_1), \ldots, (x_n, y_n)$, the Lagrange interpolating polynomial is:

$$
p(x) = \sum_{i=0}^{n} L_i(x) y_i
$$

Where $L_i(x)$ are the **Lagrange basis polynomials**:

$$
L_i(x) = \prod_{\substack{0 \leq j \leq n \\ j \neq i}} \frac{x - x_j}{x_i - x_j}
$$

## Expanded Form

The full formula can be written as:

$$
p(x) = \frac{(x - x_1)(x - x_2) \cdots (x - x_n)}{(x_0 - x_1)(x_0 - x_2) \cdots (x_0 - x_n)} y_0 + \frac{(x - x_0)(x - x_2) \cdots (x - x_n)}{(x_1 - x_0)(x_1 - x_2) \cdots (x_1 - x_n)} y_1 + \cdots
$$

## Lagrange Basis Polynomials

The basis polynomial $L_i(x)$ has the special property:

$$
L_i(x_j) = \begin{cases}
1 & \text{if } i = j \\
0 & \text{if } i \neq j
\end{cases}
$$

This ensures that $p(x_i) = y_i$ for all data points.

### Example: Three Points

For three points $(x_0, y_0), (x_1, y_1), (x_2, y_2)$:

$$
L_0(x) = \frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)}
$$

$$
L_1(x) = \frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)}
$$

$$
L_2(x) = \frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)}
$$

The interpolating polynomial is then:

$$
p(x) = L_0(x) y_0 + L_1(x) y_1 + L_2(x) y_2
$$

## Properties

1. **Uniqueness**: There is a unique polynomial of degree at most $n$ passing through $n + 1$ points
2. **Symmetry**: The formula treats all points equally
3. **Direct evaluation**: No need to build a table (unlike [[Newton Divided Difference]])
4. **Exact at data points**: $p(x_i) = y_i$ by construction

## Advantages

- **Conceptually simple**: Direct formula, no iterative computation
- **Symmetric**: All data points treated equally
- **Single formula**: Entire polynomial expressed in one equation

## Limitations

1. **Computational cost**: Evaluating at many points is expensive
2. **No incremental updates**: Adding new points requires full recomputation
3. **Runge phenomenon**: High-degree polynomials oscillate wildly, especially with equispaced points
4. **Poor extrapolation**: Should **not be used for extrapolation** beyond data range
5. **Edge effects**: Interpolation quality degrades near endpoints

## Behaviour Characteristics

- **Center**: Excellent fit in the center of data range
- **Edges**: Accuracy degrades toward endpoints
- **Oscillations**: Can exhibit large oscillations between points for high-degree polynomials

## Comparison to Newton's Method

Both Lagrange and [[Newton Divided Difference]] produce **identical polynomials** but differ in:

| Aspect | Lagrange | Newton |
|--------|----------|--------|
| Computation | Direct formula | Recursive table |
| Incremental updates | Requires full recomputation | Efficient incremental updates |
| Symmetry | Fully symmetric | Depends on point ordering |
| Evaluation cost | Higher | Lower |
| Conceptual clarity | Simpler | More complex |

## Error Analysis

The interpolation error for a function $f(x)$ with continuous $(n+1)$-th derivative is:

$$
|f(x) - p(x)| = \frac{|f^{(n+1)}(\xi)|}{(n+1)!} \prod_{i=0}^{n} |x - x_i|
$$

For some $\xi$ in the interval containing $x$ and all $x_i$.

## Python Implementation

```python
def lagrange_polynomial(x_value, x_data, y_data):
    """
    Evaluate Lagrange interpolating polynomial at a given point.
    
    Parameters
    ----------
    x_value : float
        Point at which to evaluate the polynomial
    x_data : numpy.ndarray
        Array of x-coordinates
    y_data : numpy.ndarray
        Array of y-coordinates (function values)
        
    Returns
    -------
    float
        Value of the polynomial at x_value
    """
    num_points = len(x_data)
    result = 0.0
    
    for point_index in range(num_points):
        # Compute Lagrange basis polynomial L_i(x_value)
        basis_term = 1.0
        for other_index in range(num_points):
            if other_index != point_index:
                basis_term *= (x_value - x_data[other_index]) / (x_data[point_index] - x_data[other_index])
        
        # Add contribution y_i * L_i(x_value)
        result += basis_term * y_data[point_index]
    
    return result
```

## Applications

- Function approximation
- Numerical analysis
- Computer graphics
- Scientific computing

## Related Methods

- [[Newton Divided Difference]]: Alternative polynomial form
- [[Spline Interpolation]]: Piecewise alternative avoiding high-degree polynomials
- [[Polynomial Interpolation]]: General category
- [[Linear Interpolation]]: Special case with two points
