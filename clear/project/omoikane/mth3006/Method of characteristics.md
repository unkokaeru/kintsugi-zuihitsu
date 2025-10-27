# Method of Characteristics

The **Method of Characteristics** is a technique for ==solving first-order partial differential equations by integrating along characteristic curves==, given that the ==region on which the partial differential equation is being solved must be covered by characteristic curves==.

For a partial differential equation of the form $A(x,y)\frac{\partial u}{\partial x} + B(x,y)\frac{\partial u}{\partial y} = F(x,y)$, the characteristic curves are defined by::$\frac{dx}{A} = \frac{dy}{B}$ or equivalently $\frac{dy}{dx} = \frac{B}{A}$.

Along a characteristic curve, the element of arc length squared is given by::$ds^2 = dx^2 + dy^2$, which can be rewritten as $ds = \frac{1}{A}dx$ and $ds = \frac{1}{B}dy$.

The solution $u$ along characteristic curves satisfies::$\frac{du}{ds} = \frac{F}{\sqrt{A^2 + B^2}}$, from which $u$ can be found by integration along the characteristics.

---

## Homogeneous Case

A partial differential equation is called **homogeneous** when ==the right-hand side function $F$ is equal to zero==.

For homogeneous equations $A(x,y)\frac{\partial u}{\partial x} + B(x,y)\frac{\partial u}{\partial y} = 0$, the solution $u$ is ==constant along each characteristic curve==.

When $F = 0$ in a homogeneous equation, ==$\frac{du}{ds} = 0$, which means $du = 0$ and therefore $u$ is constant along characteristics==.

For homogeneous partial differential equations, the general solution has the form::$u = f(P)$, where $P$ is the parameter defining which characteristic curve, and $f$ is determined by boundary conditions.

In the method of characteristics, boundary conditions are used to ==fix the form of the function $f$ itself, not just constant values==.

---

## Example

Solve $2xy\frac{\partial u}{\partial x} + (x^2 + y^2)\frac{\partial u}{\partial y} = 0$ with $u = \frac{e^x}{x-y}$ along $x+y=1$::$u = \exp\left(\frac{x}{x^2-y^2}\right)$.

**Step 1**: Find characteristics from $\frac{dx}{2xy} = \frac{dy}{x^2+y^2}$, which gives::$\frac{dy}{dx} = \frac{x^2+y^2}{2xy}$.

**Step 2** for non-separable ODEs: If the characteristic ODE contains $x$ and $y$ only in combinations of $\frac{y}{x}$, ==substitute $v = \frac{y}{x}$ to make the equation separable==.

**Step 3**: After solving for characteristics, the curves are given by::$x^2 - y^2 = Px$, where $P$ is the parameter labeling each characteristic.

**Step 4**: For homogeneous equations, express the general solution as::$u = f(P) = f\left(\frac{x^2-y^2}{x}\right)$, where $f$ is an arbitrary function determined by boundary conditions.

**Step 5**: To find $f$, ==substitute the boundary condition into the general solution and express $f$ in terms of a single variable==.