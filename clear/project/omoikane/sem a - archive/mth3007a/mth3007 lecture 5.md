# Mth3007 Lecture 5

- [[Interpolation]]
- [[Linear Interpolation]]
- [[Newton Divided Difference]]
- [[Lagrange Interpolation]]
- [[Spline Interpolation]]
- [[Bilinear Interpolation]]
- Taylor Series

## What is Interpolation?

[[Interpolation]] is a method of estimating values of a function at points between known data points. For example, given a discrete table of values, we can estimate $f(2.5)$ when we only know $f(2)$ and $f(3)$.

**Key considerations when choosing an interpolation method:**
- Accuracy of the method
- Computational cost
- Smoothness of the interpolant
- Number of data points required

## Interpolation Methods Covered

### 1. Linear Interpolation

The simplest form, connecting two points with a straight line. The formula is:

$$
y = y_0 + (x - x_0) \frac{y_1 - y_0}{x_1 - x_0}
$$

Also known as "lerp" (linear interpolation), this is equivalent to the first term in a Taylor series.

**Limitation:** Accuracy depends on point spacing; poor for non-linear functions.

### 2. Newton's Divided Difference Interpolation

Builds interpolating polynomials using **divided differences**, which are recursively defined.

**First divided difference:**

$$
f[x_0, x_1] = \frac{f(x_1) - f(x_0)}{x_1 - x_0}
$$

**Higher divided differences:**

$$
f[x_0, x_1, x_2] = \frac{f[x_1, x_2] - f[x_0, x_1]}{x_2 - x_0}
$$

**Newton's polynomial:**

$$
P(x) = f(x_0) + (x - x_0)f[x_0, x_1] + (x - x_0)(x - x_1)f[x_0, x_1, x_2] + \cdots
$$

**Properties:**
- Can truncate at any term
- Error can be estimated from next term
- Related to Taylor series

### 3. Lagrange Interpolation

An alternative form of polynomial interpolation where each basis polynomial vanishes at all points except one.

**Formula:**

$$
p(x) = \sum_{i=0}^{n} \left( \prod_{\substack{0 \leq j \leq n \\ j \neq i}} \frac{x - x_j}{x_i - x_j} \right) y_i
$$

**Properties:**
- Excellent fit in center of data points
- Degrades at edges
- **Should not be used for extrapolation**
- Produces same polynomial as Newton's method

### 4. Splines

Instead of fitting one high-order polynomial, **splines** connect many simple functions (typically cubic) together smoothly.

**Requirements:**
- Pass through all $n$ data points (provides $2n$ equations)
- Neighbouring polynomials have same gradients at overlap points ($n-1$ equations)
- For cubic: same curvature at overlap points ($n-1$ equations)
- Boundary conditions (typically curvature = 0 at endpoints)

**Linear splines** concatenate linear interpolants, resulting in continuous but non-differentiable curves (like Excel's straight-line plot).

**Excel uses cubic spline interpolation** for smooth graphs.

### 5. Bilinear Interpolation

For 2D data $f(x, y)$, bilinear interpolation performs linear interpolation in both directions sequentially.

**Process:**
1. **Interpolate in $x$-direction** at $y = y_1$ and $y = y_2$:

   $$
   f(x, y_1) = \frac{x_2 - x}{x_2 - x_1} f(x_1, y_1) + \frac{x - x_1}{x_2 - x_1} f(x_2, y_1)


$$
   
$$

   f(x, y_2) = \frac{x_2 - x}{x_2 - x_1} f(x_1, y_2) + \frac{x - x_1}{x_2 - x_1} f(x_2, y_2)

$$
2. **Interpolate in $y$-direction**:
   
$$

   f(x, y) = \frac{y_2 - y}{y_2 - y_1} f(x, y_1) + \frac{y - y_1}{y_2 - y_1} f(x, y_2)

$$
**Common application:** Image processing (digital zoom)

---

## Worksheet Solutions

### Task 1: Polynomial Interpolation

**Data points:** $(0, 1)$, $(1, 3)$, $(3, 55)$

#### (i) Newton's Divided Difference

**Divided difference table:**
```
f[x₀]    f[x₀,x₁]    f[x₀,x₁,x₂]
1.0      2.0          8.0
3.0      26.0
55.0
```

**Newton's form:**
$$

P(x) = 1 + (x - 0) \cdot 2 + (x - 0)(x - 1) \cdot 8

$$
**Expanded form:**
$$

P(x) = 8x^2 - 6x + 1

$$
#### (ii) Lagrange Interpolation

Using the Lagrange formula produces the **same polynomial**:
$$

p(x) = 8x^2 - 6x + 1

$$
**Conclusion:** Both Newton's and Lagrange methods produce identical interpolating polynomials, as expected.

#### (iii) Implementation

```python runnable
import numpy as np

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
        basis_term = 1.0
        for other_index in range(num_points):
            if other_index != point_index:
                basis_term *= (x_value - x_data[other_index]) / (x_data[point_index] - x_data[other_index])
        result += basis_term * y_data[point_index]
    
    return result

# Test with Data
x_data = np.array([0, 1, 3])
y_data = np.array([1, 3, 55])

# Evaluate at Test point
x_test = 2.0
result = lagrange_polynomial(x_test, x_data, y_data)
print(f"p({x_test}) = {result}")
```

---

### Task 2: Bilinear Interpolation

#### (i) Temperature Interpolation

**Given data:**

| x | y | T(x, y) |
|---|---|---------|
| 2 | 2 | 60      |
| 2 | 6 | 55      |
| 9 | 1 | 57.5    |
| 9 | 6 | 70      |

**Find:** $T(5.25, 4.8)$

**Solution approach:**
1. First, we need $T(9, 2)$ to form a proper rectangular grid. Using linear interpolation between $(9, 1)$ and $(9, 6)$:
   
$$

   T(9, 2) = 57.5 + \frac{2 - 1}{6 - 1}(70 - 57.5) = 60.0

$$

2. Apply bilinear interpolation with corners:
   - $Q_{11} = (2, 2, 60)$
   - $Q_{12} = (2, 6, 55)$
   - $Q_{21} = (9, 2, 60)$
   - $Q_{22} = (9, 6, 70)$

3. Interpolate in $x$-direction at $y = 2$ and $y = 6$
4. Interpolate in $y$-direction

**Result:** $T(5.25, 4.8) \approx 61.375$

#### (ii) Implementation and Testing

```python runnable
import numpy as np

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
# Interpolate in X Direction
    f_x_y1 = ((x2 - x_target) / (x2 - x1)) * f_x1_y1 + ((x_target - x1) / (x2 - x1)) * f_x2_y1
    f_x_y2 = ((x2 - x_target) / (x2 - x1)) * f_x1_y2 + ((x_target - x1) / (x2 - x1)) * f_x2_y2
    
# Interpolate in Y Direction
    result = ((y2 - y_target) / (y2 - y1)) * f_x_y1 + ((y_target - y1) / (y2 - y1)) * f_x_y2
    
    return result

# Test with f(x, y) = Xy
x1, x2 = 1.0, 4.0
y1, y2 = 2.0, 5.0

# Corner Values
f_11 = x1 * y1  # 2.0
f_12 = x1 * y2  # 5.0
f_21 = x2 * y1  # 8.0
f_22 = x2 * y2  # 20.0

# Test Interpolation
x_test, y_test = 2.5, 3.5
interpolated = bilinear_interpolation(x_test, y_test, x1, x2, y1, y2, f_11, f_12, f_21, f_22)
actual = x_test * y_test

print(f"f({x_test}, {y_test}): interpolated = {interpolated:f}, actual = {actual:f}")
print(f"Error: {abs(interpolated - actual):f}")
```

**Note:** For $f(x, y) = xy$, bilinear interpolation produces **exact results** since the function is bilinear.
