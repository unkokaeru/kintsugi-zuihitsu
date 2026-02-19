# Bilinear Interpolation

**Bilinear interpolation** is a method for [[Interpolation]] in two dimensions that performs [[Linear Interpolation]] sequentially in each direction.

## Problem Setup

Given four points forming the corners of a rectangle:

- $(x_1, y_1, f_{11})$ where $f_{11} = f(x_1, y_1)$
- $(x_1, y_2, f_{12})$ where $f_{12} = f(x_1, y_2)$
- $(x_2, y_1, f_{21})$ where $f_{21} = f(x_2, y_1)$
- $(x_2, y_2, f_{22})$ where $f_{22} = f(x_2, y_2)$

We want to find $f(x, y)$ for a point $(x, y)$ inside the rectangle, where $x_1 \leq x \leq x_2$ and $y_1 \leq y \leq y_2$.

## Method

Bilinear interpolation is performed in two steps:

### Step 1: Interpolate in the X-direction

First, interpolate at $y = y_1$ and $y = y_2$:

$$
f(x, y_1) = \frac{x_2 - x}{x_2 - x_1} f(x_1, y_1) + \frac{x - x_1}{x_2 - x_1} f(x_2, y_1)
$$

$$
f(x, y_2) = \frac{x_2 - x}{x_2 - x_1} f(x_1, y_2) + \frac{x - x_1}{x_2 - x_1} f(x_2, y_2)
$$

### Step 2: Interpolate in the Y-direction

Then interpolate between $f(x, y_1)$ and $f(x, y_2)$:

$$
f(x, y) = \frac{y_2 - y}{y_2 - y_1} f(x, y_1) + \frac{y - y_1}{y_2 - y_1} f(x, y_2)
$$

## Combined Formula

Substituting Step 1 into Step 2 gives the full bilinear interpolation formula:

$$
f(x, y) = \frac{y_2 - y}{y_2 - y_1} \left[ \frac{x_2 - x}{x_2 - x_1} f(x_1, y_1) + \frac{x - x_1}{x_2 - x_1} f(x_2, y_1) \right]
$$

$$
+ \frac{y - y_1}{y_2 - y_1} \left[ \frac{x_2 - x}{x_2 - x_1} f(x_1, y_2) + \frac{x - x_1}{x_2 - x_1} f(x_2, y_2) \right]
$$

This can be expanded and written in matrix form:

$$
f(x, y) = \begin{bmatrix} \frac{x_2 - x}{x_2 - x_1} & \frac{x - x_1}{x_2 - x_1} \end{bmatrix} \begin{bmatrix} f(x_1, y_1) & f(x_1, y_2) \\ f(x_2, y_1) & f(x_2, y_2) \end{bmatrix} \begin{bmatrix} \frac{y_2 - y}{y_2 - y_1} \\ \frac{y - y_1}{y_2 - y_1} \end{bmatrix}
$$

## Order of Interpolation

The order doesn't matter - interpolating first in $y$ then in $x$ gives the same result. This is because:

- Linear interpolation is a **linear operation**
- The order of linear operations doesn't affect the result

## Properties

1. **Bilinearity**: The function is linear in each variable when the other is held constant
2. **Exactness**: For bilinear functions $f(x, y) = a + bx + cy + dxy$, bilinear interpolation is **exact**
3. **Continuity**: Result is continuous across rectangle boundaries
4. **Not smooth**: Generally not differentiable at grid points

## Special Case: Unit Square

For a unit square with corners at $(0, 0), (0, 1), (1, 0), (1, 1)$, the formula simplifies to:

$$
f(x, y) = (1 - x)(1 - y)f(0, 0) + x(1 - y)f(1, 0) + (1 - x)yf(0, 1) + xyf(1, 1)
$$

This shows the **weighted average** interpretation, where weights are the areas of opposite rectangles.

## Advantages

- **Simple and fast**: Only requires four function evaluations
- **Smooth**: Produces continuous (but not necessarily differentiable) results
- **Natural extension**: Direct generalization of [[Linear Interpolation]] to 2D
- **Exact for bilinear functions**: Perfect for functions of form $f(x, y) = a + bx + cy + dxy$

## Limitations

- **Limited accuracy**: Only captures linear and bilinear behaviour
- **Non-smooth**: Derivatives discontinuous at grid boundaries
- **Rectangular grid required**: Needs data on a regular grid
- **Poor for highly curved surfaces**: Cannot capture complex curvature

## Applications

1. **Image processing**:
   - Resizing/scaling images
   - Texture mapping in computer graphics
   - Digital zoom

2. **Scientific computing**:
   - Temperature/pressure field interpolation
   - Geographical data interpolation
   - Finite element analysis

3. **Computer graphics**:
   - Texture mapping
   - Anti-aliasing
   - Mipmap generation

## Python Implementation

```python
def bilinear_interpolation(x_target, y_target, x1, x2, y1, y2, 
                          f_x1_y1, f_x1_y2, f_x2_y1, f_x2_y2):
    """
    Perform bilinear interpolation on a rectangular grid.
    
    Parameters
    ----------
    x_target : float
        Target x-coordinate for interpolation
    y_target : float
        Target y-coordinate for interpolation
    x1, x2 : float
        Lower and upper x-coordinates of rectangle
    y1, y2 : float
        Lower and upper y-coordinates of rectangle
    f_x1_y1, f_x1_y2, f_x2_y1, f_x2_y2 : float
        Function values at the four corners
        
    Returns
    -------
    float
        Interpolated value at (x_target, y_target)
    """
    # Interpolate in x direction at y=y1 and y=y2
    f_x_y1 = ((x2 - x_target) / (x2 - x1)) * f_x1_y1 + \
             ((x_target - x1) / (x2 - x1)) * f_x2_y1
    f_x_y2 = ((x2 - x_target) / (x2 - x1)) * f_x1_y2 + \
             ((x_target - x1) / (x2 - x1)) * f_x2_y2
    
    # Interpolate in y direction
    result = ((y2 - y_target) / (y2 - y1)) * f_x_y1 + \
             ((y_target - y1) / (y2 - y1)) * f_x_y2
    
    return result
```

## Extensions

- **Trilinear interpolation**: Extension to 3D
- **Bicubic interpolation**: Uses cubic polynomials for smoother results
- **Higher-order**: Biquadratic, biquartic, etc.

## Related Methods

- [[Linear Interpolation]]: 1D equivalent
- [[Spline Interpolation]]: Smoother alternative
- [[Interpolation]]: General concept
