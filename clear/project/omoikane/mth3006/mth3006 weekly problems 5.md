# Mth3006 Weekly Problems 5

## Question One

The method of characteristics for inhomogeneous equations can also be used when the right-hand side depends on $u$. Use it to solve $y \frac{\partial u}{\partial x} - 2xy \frac{\partial u}{\partial y} = 2x u$ subject to the boundary condition $u(0, y) = \frac{\sinh y}{y}$.

### Solution

…

## Question Two

Solve $x \frac{\partial u}{\partial x} - y \frac{\partial u}{\partial y} = u$ subject to the boundary condition $u = \frac{1}{\ln x}$ on $xy = 1$.

### Solution

…

## Question Three

Use the method of characteristics for homogeneous equations to solve the following:

1. $y \frac{\partial u}{\partial x} + x \frac{\partial u}{\partial y} = 0$ given $u = \cos x$ on $x^2 + y^2 = 1$
2. $x^2 \frac{\partial u}{\partial x} + y^2 \frac{\partial u}{\partial y} = 0$ given $u \to e^y$ as $x \to \infty$.

### Solution

**Step 1:** This partial differential equation is **homogeneous**, since the right-hand side is zero.

**Step 2:** Write the characteristic equation:

$$
\frac{dx}{y} = \frac{dy}{x}
$$

Or equivalently,

$$
x\, dx = y\, dy
$$

**Step 3:** Integrate both sides:

$$
\int x\, dx = \int y\, dy
\implies \frac{1}{2} x^2 = \frac{1}{2} y^2 + C
$$

So, the characteristic curves are

$$
x^2 - y^2 = P
$$

where $P$ is a parameter labeling each characteristic.

**Step 4:** For a homogeneous partial differential equation, the solution is constant along each characteristic curve, so

$$
u = f(P) = f(x^2 - y^2)
$$

**Step 5:** Apply the boundary condition $u = \cos x$ on $x^2 + y^2 = 1$.

Let $y^2 = 1 - x^2$ on the boundary, so

$$
P = x^2 - (1 - x^2) = x^2 - 1 + x^2 = 2x^2 - 1
$$

On the boundary,

$$
u = \cos x = f(2x^2 - 1)
$$

So, for every $w = 2x^2 - 1$,

$$
f(w) = \cos\left( x(w) \right)
$$

where $x(w)$ is the value on the boundary curve solving $w = 2x^2 - 1$.

But to express $u$ for general $(x, y)$, **solve for $x$ in terms of the parameter $P = x^2 - y^2$**:

$$
x^2 = \frac{P + y^2}{1}
$$

Alternatively, express solution in terms of the characteristic curve:

- Each point $(x, y)$ lies on a characteristic with $P = x^2 - y^2$.

To match the boundary, use the point on the boundary where $x_b$ satisfies $P = 2x_b^2 - 1$:

$$
x_b^2 = \frac{P + 1}{2}
$$

So,

$$
u(x, y) = \cos\left( \sqrt{ \frac{x^2 - y^2 + 1}{2} } \right )
$$

**Final Answer:**

$$
\boxed{ u(x, y) = \cos \left( \sqrt{ \frac{x^2 - y^2 + 1}{2} } \right ) }
$$

To solve a homogeneous equation by the method of characteristics, compute the constant of integration along each characteristic curve, relate it to the boundary condition, and substitute to express the solution for any $(x, y)$.

## Question Four

Show that transforming to the characteristic coordinates $\xi = x + 2y \qquad \text{and} \qquad \eta = x + y$ reduces the differential equation $2 \frac{\partial^2 u}{\partial x^2} - 3 \frac{\partial^2 u}{\partial x \partial y} + \frac{\partial^2 u}{\partial y^2} = y$ to $\frac{\partial^2 u}{\partial \xi \partial \eta} = \eta - \xi$.

### Solution

…

## Question Five

Confirm that $u(x, t) = \exp(-Dk^2 t) \exp[i k (x - \gamma t)]$ is a solution of the advection-diffusion equation $\frac{\partial u}{\partial t} + \gamma \frac{\partial u}{\partial x} = D \frac{\partial^2 u}{\partial x^2}$.

### Solution

…
