# Linear Interpolation

**Linear interpolation** is the simplest form of [[Interpolation]], connecting two data points with a straight line.

## Formula

Given two points $(x_0, y_0)$ and $(x_1, y_1)$, the interpolated value at $x$ is:

$$
y = y_0 + (x - x_0) \frac{y_1 - y_0}{x_1 - x_0}
$$

Alternatively, using the geometric interpretation (equal slopes):

$$
\frac{y - y_0}{x - x_0} = \frac{y_1 - y_0}{x_1 - x_0}
$$

Which can be rearranged to:

$$
y = \frac{y_0(x_1 - x) + y_1(x - x_0)}{x_1 - x_0}
$$

## Terminology

Linear interpolation is sometimes called **"lerp"** (a portmanteau of "linear" and "interpolation"), particularly in computer graphics and game development.

## Connection to Taylor Series

Linear interpolation corresponds to the **first-order Taylor series approximation**. It captures the local linear behaviour of a function but ignores higher-order terms (curvature, etc.).

## Accuracy

The accuracy of linear interpolation depends on:

- **Point spacing**: Closer points → better approximation
- **Function linearity**: More linear functions → better fit
- **Curvature**: High curvature between points leads to larger errors

For a non-linear function, linear interpolation is an **approximation** that improves as the distance $|x_1 - x_0|$ decreases.

## Error Analysis

For a twice-differentiable function, the maximum interpolation error can be bounded by:

$$
|f(x) - p(x)| \leq \frac{1}{8} h^2 \max_{x_0 \leq \xi \leq x_1} |f''(\xi)|
$$

Where $h = x_1 - x_0$ and $p(x)$ is the linear interpolant.

## Advantages

- **Simple**: Easy to understand and implement
- **Fast**: Minimal computation required
- **Stable**: No numerical instability issues

## Limitations

- **Low accuracy** for non-linear functions
- **Non-smooth**: Piecewise linear interpolation has discontinuous derivatives
- **Only uses two points**: Ignores information from nearby data

## Python Implementation

```python
def linear_interpolation(x, x0, y0, x1, y1):
    """
    Perform linear interpolation.
    
    Parameters
    ----------
    x : float
        Point at which to interpolate
    x0, y0 : float
        First data point
    x1, y1 : float
        Second data point
        
    Returns
    -------
    float
        Interpolated value at x
    """
    return y0 + (x - x0) * (y1 - y0) / (x1 - x0)
```

## Applications

- Quick estimates between known values
- Computer graphics (texture mapping, animation)
- Signal processing
- Data visualization (connecting discrete points)

## Related Methods

- [[Bilinear Interpolation]]: Linear interpolation in 2D
- [[Spline Interpolation]]: Piecewise smooth alternative
- [[Polynomial Interpolation]]: Higher-order alternative
- [[Newton Divided Difference]]: Generalization to higher orders
