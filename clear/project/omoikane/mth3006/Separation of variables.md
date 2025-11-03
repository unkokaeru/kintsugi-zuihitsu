# Separation of Variables

Separation of variables can be applied to ==linear== partial differential equations, using the principle of ==superposition== starting with the assumption that ==$u(x,y)=X(x)Y(y)$==.

1. Assume that the solution is $u=XY$ and hence write the PDE in terms of $X$, $X^{\prime}$, $Y$, and $Y^{\prime}$.
2. Divide through by $XY$ to isolate $x$ and $y$.
3. Re-arrange to make each side of the equation only dependent on either $x$ or $y$.
4. Given both sides are independent, they must be equal to a constant, $\alpha$ (separation constant).
5. Solve these two equations using separation of variables (in an exam this is the only technique required for simplicity).
6. Specify a solution given by the boundary condition.

## Example One

$$
\frac{\delta u}{\delta x}-x^2 \frac{\delta u}{\delta y}=2x^2yu:u(x,0)=\cosh(x^3)
$$

$$
X^\prime Y-x^2 XY^\prime=2x^{2}yXY
$$

Then divide by $u$…

$$
\frac{X^\prime}{X}-\frac{x^2Y^\prime}{Y}=2x^2 y
$$

$$
\frac{X^\prime}{X}=2x^2 y+\frac{x^2Y^\prime}{Y}
$$

$$
\frac{1}{x^2}\frac{X^\prime}{X}=2 y+\frac{Y^\prime}{Y}
$$

LHS depends on $x$ only, RHS depends on $y$ only. Since $x$ and $y$ are independent this means each side must be equal to a **separation constant**, so…

$$
\frac{1}{x^{2}} X^{\prime}=\alpha=\frac{1}{x^{2}} \frac{dX}{dx} \frac{1}{X}
$$

$$
\frac{Y^{\prime}}{Y}+2y=\alpha=\frac{dY}{dy} \frac{1}{Y}+2y=\alpha
$$

The ordinary differential equations are then separable (don't have to be but will be in exams for the sake of time!)…

$$
\frac{dX}{dx} \frac{1}{X}=\alpha x^{2}\implies \int \frac{dX}{x}=\alpha \int x^{2}dx
$$

$$
\implies \ln X = \frac{\alpha x^{3}}{3}+a\implies X=e^{ a } e^{ \alpha x^{3}/3 }
$$

$$
X=Ae^{ a x^{3}/3 }:A=e^{ a }
$$

Similarly…

$$
Y=B e^{ \alpha y - y^{2} }:B=e^{ b }
$$

Then,

$$
u(x,y)=XY=ABe^{ -y^{2} }e^{ \alpha(x^{3}/3+y) }=Ce^{ -y^{2} }e^{ \alpha(x^{3}/3+y) }:C=AB=e^{ a+b }
$$

By the principle of superposition, the general solution is given by the sum over all values of $C$ and $\alpha$:

$$
u=e^{ -y^{2} } \sum_{\text{all }C \text{ and }\alpha}Ce^{ \alpha(x^{3}/3)+y }
$$

To find a specific solution, we use the boundary condition that $u(x,0)=\cosh(x^{3})$, such that…

$$
u=e^{ -y^{2} }F\left( \frac{x^{3}}{3}+y \right):F=\sum_{\text{all }C \text{ and }\alpha}Ce^{ \alpha(x^{3}/3)+y }
$$

Hence, using the boundary condition,

$$
F\left( \frac{x^{3}}{3} \right)=\cosh x^{3}
$$

Or…

$$
F(w)=\cosh(3w):w=\frac{x^{3}}{3}\implies F\left( \frac{x^{3}}{3}+y \right)=\cosh(x^{3}+3y)
$$

So that the solution is:

$$
u=e^{ -y^{2} }\cosh(x^{3}+3y)
$$
