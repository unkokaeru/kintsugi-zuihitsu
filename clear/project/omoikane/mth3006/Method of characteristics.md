# Method of Characteristics

The **Method of Characteristics** is a technique for ==solving first-order partial differential equations (partial differential equations) by reducing them to a system of ordinary differential equations (ODEs) along characteristic curves==.

The **Method of Characteristics** focuses on ==the case of two independent variables, $u = u(x, y)$==.

Along a characteristic curve in the $(x, y)$ plane, the ==partial differential equation can be integrated directly to give the solution $u$==.

To use the Method of Characteristics, the ==region on which the partial differential equation is solved must be covered by characteristic curves==.

For a partial differential equation of the form $A(x, y)\frac{\partial u}{\partial x} + B(x, y)\frac{\partial u}{\partial y} = F(x, y)$, the characteristic equations are::

$$
\frac{dx}{A(x, y)} = \frac{dy}{B(x, y)} = \frac{du}{F(x, y)}
$$

The **element of arc length squared** along a characteristic curve is::$ds^2 = dx^2 + dy^2$.

Using the arc length parameterisation, we can write::$ds = \frac{1}{A}dx$ and $ds = \frac{1}{B}dy$.

Along a characteristic curve, the solution satisfies::$\frac{du}{ds} = \frac{F}{\sqrt{A^2 + B^2}}$, from which $u$ can be found by integration.

---

## Homogeneous Case

A partial differential equation is **homogeneous** when ==the function $F(x, y)$ is equal to zero==.

For homogeneous equations, $\frac{du}{ds} = 0$, which means the solution $u$ is ==constant along each characteristic curve==.

In the homogeneous case, the characteristic equations reduce to::$\frac{dx}{A(x, y)} = \frac{dy}{B(x, y)}$.

For homogeneous partial differential equations, the general solution has the form::$u = f(P)$, where $P$ is a parameter labeling each characteristic curve, and $f$ is determined by boundary conditions.

In the Method of Characteristics, boundary conditions are used to ==fix the form of the function $f$ itself, not just constant values==.

---

## Example: Solving $2xy\frac{\partial u}{\partial x} + (x^2 + y^2)\frac{\partial u}{\partial y} = 0$

Given: $2xy\frac{\partial u}{\partial x} + (x^2 + y^2)\frac{\partial u}{\partial y} = 0$ with $u = \frac{e^{x}}{x-y}$ along $x+y=1$.

**Step 1:** Find the characteristic curves. Since $F = 0$, write $\frac{dx}{2xy} = \frac{dy}{x^2 + y^2}$, or equivalently $\frac{dy}{dx} = \frac{x^2 + y^2}{2xy}$.

**Step 2:** The ODE is not separable. Notice that the right-hand side contains $x$ and $y$ only in combinations of $\frac{y}{x}$, so substitute $v = \frac{y}{x}$ to make it separable.

With $y = vx$, we have $\frac{dy}{dx} = v + x\frac{dv}{dx}$.

Substitute into the characteristic ODE:

$$
v + x\frac{dv}{dx} = \frac{x^2 + v^2x^2}{2vx^2} = \frac{1 + v^2}{2v}
$$

Simplify:

$$
x\frac{dv}{dx} = \frac{1 - v^2}{2v}
$$

**Step 3:** Separate variables:

$$
\frac{2v}{1 - v^2}dv = \frac{dx}{x}
$$

Recognize that $\frac{d}{dv}(1 - v^2) = -2v$, so multiply both sides by $-1$:

$$
\frac{-2v}{1 - v^2}dv = \frac{-dx}{x}
$$

**Step 4:** Integrate both sides:

$$
\log|1 - v^2| = -\log|x| + C
$$

Exponentiate both sides:

$$
1 - v^2 = \frac{e^C}{x}
$$

Set $P = e^C$ (a parameter labeling each characteristic):

$$
1 - v^2 = \frac{P}{x}
$$

Substitute $v = \frac{y}{x}$:

$$
1 - \frac{y^2}{x^2} = \frac{P}{x}
$$

Multiply through by $x^2$:

$$
x^2 - y^2 = Px
$$

**Step 5:** The general solution for the homogeneous partial differential equation is:

$$
u = f(P) = f\left(\frac{x^2 - y^2}{x}\right)
$$

**Step 6:** Apply the boundary condition $u = \frac{e^{x}}{x-y}$ along $x+y=1$.

Substitute $y = 1-x$ into $P = \frac{x^2 - y^2}{x}$:

$$
P = \frac{x^2 - (1-x)^2}{x} = \frac{x^2 - (1 - 2x + x^2)}{x} = \frac{2x - 1}{x}
$$

On the boundary, $u = \frac{e^{x}}{x - (1-x)} = \frac{e^{x}}{2x - 1}$.

So,

$$
f\left(\frac{2x - 1}{x}\right) = \frac{e^{x}}{2x - 1}
$$

Set $w = \frac{2x - 1}{x}$, then:

$$
f(w) = e^{1/w}
$$

**Step 7:** The solution to the partial differential equation is:

$$
u = f\left(\frac{x^2 - y^2}{x}\right) = \exp\left(\frac{x}{x^2 - y^2}\right)
$$
