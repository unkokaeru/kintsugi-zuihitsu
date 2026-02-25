# Spline Interpolation

**Spline interpolation** is a method of [[Interpolation]] that connects data points with piece-wise polynomial functions, rather than using a single high-degree polynomial.

## Motivation

High-degree polynomial interpolation (like [[Lagrange Interpolation]]) suffers from:

- **Runge phenomenon**: Wild oscillations between data points
- **Numerical instability**: Small changes in data cause large changes in polynomial
- **Poor edge behaviour**: Especially with equispaced points

Splines solve these problems by using **many low-degree polynomials** joined together smoothly.

## Definition

A **spline of degree $k$** is a piece-wise polynomial function where:

1. Each piece is a polynomial of degree at most $k$
2. The pieces join together smoothly at **knots** (data points)
3. Continuity conditions are satisfied at knots

## Common Spline Types

### Linear Splines

The simplest splines are **linear splines**, which connect consecutive points with straight line segments.

- **Degree**: 1 (linear)
- **Continuity**: $C^0$ (continuous, but not differentiable at knots)
- **Identical to**: Piecewise [[Linear Interpolation]]

**Example**: Excel's straight-line plot uses linear splines.

### Quadratic Splines

**Quadratic splines** use parabolic segments:

- **Degree**: 2
- **Continuity**: Typically $C^1$ (continuous first derivative)

### Cubic Splines

**Cubic splines** are the most commonly used:

- **Degree**: 3
- **Continuity**: $C^2$ (continuous second derivative)
- **Properties**: Smooth appearance, minimum curvature

**Example**: Excel uses cubic splines for smooth curve plots.

## Cubic Spline Construction

For $n + 1$ data points, we need $n$ cubic polynomials $S_i(x)$ for intervals $[x_i, x_{i+1}]$:

$$
S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3
$$

### Conditions

To determine the $4n$ coefficients, we need $4n$ equations:

1. **Interpolation** ($2n$ equations):
   - $S_i(x_i) = y_i$ for $i = 0, 1, \ldots, n-1$
   - $S_i(x_{i+1}) = y_{i+1}$ for $i = 0, 1, \ldots, n-1$

2. **First derivative continuity** ($n - 1$ equations):
   - $S_i'(x_{i+1}) = S_{i+1}'(x_{i+1})$ for $i = 0, 1, \ldots, n-2$

3. **Second derivative continuity** ($n - 1$ equations):
   - $S_i''(x_{i+1}) = S_{i+1}''(x_{i+1})$ for $i = 0, 1, \ldots, n-2$

4. **Boundary conditions** (2 equations):
   - Various choices possible (see below)

Total: $2n + (n-1) + (n-1) + 2 = 4n$ equations ✓

## Boundary Conditions

The two remaining degrees of freedom are specified by boundary conditions:

### Natural Spline

$$
S_0''(x_0) = 0, \quad S_{n-1}''(x_n) = 0
$$

Zero curvature at endpoints (most common).

### Clamped Spline

$$
S_0'(x_0) = f'(x_0), \quad S_{n-1}'(x_n) = f'(x_n)
$$

Specified derivatives at endpoints (when known).

### Not-a-Knot

$$
S_0'''(x_1) = S_1'''(x_1), \quad S_{n-2}'''(x_{n-1}) = S_{n-1}'''(x_{n-1})
$$

Third derivative continuous at second and penultimate points.

## Properties of Cubic Splines

1. **Minimal curvature**: Natural cubic splines minimize $\int [f''(x)]^2 dx$
2. **Smooth appearance**: $C^2$ continuity ensures visually smooth curves
3. **Local control**: Changing one data point affects only nearby segments
4. **Stability**: No wild oscillations like high-degree polynomials
5. **Optimal approximation**: Best piece-wise cubic approximation in certain norms

## Advantages

- **No oscillations**: Avoids Runge phenomenon
- **Local behaviour**: Changes in data have local effects
- **Smooth**: $C^2$ continuity for cubic splines
- **Efficient**: Low computational cost
- **Stable**: Numerically stable

## Limitations

- **Not truly global**: Not a single polynomial
- **Computational setup**: Requires solving a linear system
- **Boundary sensitivity**: Results depend on boundary condition choice
- **Derivative jumps**: Lower-order splines have derivative discontinuities

## Construction Algorithm (Cubic)

1. Compute second derivatives $M_i = S''(x_i)$ by solving a tridiagonal system
2. Use $M_i$ values to determine spline coefficients:

   $$
   S_i(x) = M_i \frac{(x_{i+1} - x)^3}{6h_i} + M_{i+1} \frac{(x - x_i)^3}{6h_i} + \left(y_i - \frac{M_i h_i^2}{6}\right) \frac{x_{i+1} - x}{h_i} + \left(y_{i+1} - \frac{M_{i+1} h_i^2}{6}\right) \frac{x - x_i}{h_i}


$$

   where $h_i = x_{i+1} - x_i$

## Applications

- **Computer graphics**: Smooth curve rendering
- **CAD/CAM**: Design of smooth shapes
- **Data visualization**: Excel, MATLAB, etc.
- **Finite element methods**: Basis functions
- **Signal processing**: Smooth data representation
- **Font rendering**: TrueType fonts use quadratic B-splines

## B-Splines

**B-splines** (basis splines) are a generalization that provide:
- More flexible knot placement
- Better numerical stability
- Easier computation
- Used in NURBS (Non-Uniform Rational B-Splines) for CAD

## Python Implementation Note

Most scientific Python libraries provide spline functionality:

```python
from scipy.interpolate import CubicSpline

# Create Cubic Spline
spline = CubicSpline(x_data, y_data, bc_type='natural')

# Evaluate at New Points
y_interpolated = spline(x_new)
```

## Comparison to Polynomial Interpolation

| Aspect | Single Polynomial | Splines |
|--------|------------------|---------|
| Degree | High (n) | Low (typically 3) |
| Oscillations | Common | Rare |
| Smoothness | Infinitely differentiable | $C^2$ (cubic) |
| Computation | Direct | Solve linear system |
| Stability | Poor for high n | Excellent |
| Extrapolation | Dangerous | Still poor |

## Related Concepts

- [[Interpolation]]: General concept
- [[Lagrange Interpolation]]: Single polynomial method
- [[Linear Interpolation]]: Simplest spline case
