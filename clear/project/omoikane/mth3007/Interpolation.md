# Interpolation

**Interpolation** is a numerical method for **estimating values of a function at points between known data points**.

## Definition

Given a set of $n + 1$ data points $(x_0, y_0), (x_1, y_1), \ldots, (x_n, y_n)$, interpolation finds a function $f(x)$ such that::$$

f(x_i) = y_i \quad \text{for all } i = 0, 1, \ldots, n

$$

The function $f(x)$ can then be used to estimate values at points $x$ where $x_i < x < x_{i+1}$.

## Purpose

Interpolation is used when:

- Data is available only at discrete points
- The underlying function is unknown or too complex
- We need to estimate intermediate values
- Continuous representation of data is required

## Key Considerations

When selecting an interpolation method, consider:

1. **Accuracy**: How close are the estimates to true values?
2. **Computational cost**: How expensive is the method?
3. **Smoothness**: Is the interpolant continuous? Differentiable?
4. **Data requirements**: How many points are needed?

## Types of Interpolation

- **[[Linear Interpolation]]**: Connect points with straight lines
- **[[Polynomial Interpolation]]**: Fit a polynomial through points
	- [[Newton Divided Difference]]
	- [[Lagrange Interpolation]]
- **[[Spline Interpolation]]**: Piecewise polynomial fitting
- **[[Bilinear Interpolation]]**: 2D interpolation

## Comparison to Extrapolation

**Interpolation** estimates within the range of known data, while **extrapolation** estimates outside this range. Extrapolation is generally less reliable and should be used with caution.
