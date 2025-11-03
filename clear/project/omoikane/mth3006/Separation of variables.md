# Separation of Variables

Separation of variables can be applied to ==linear== partial differential equations, using the principle of ==superposition== starting with the assumption that ==$u(x,y)=X(x)Y(y)$==.

## Example One

$$
\frac{\delta u}{\delta x}-x^2 \frac{\delta u}{\delta y}=2x^2yu:u(x,0)=\cosh(x^3)
$$

$$
X^\prime Y-x^2 XY^\prime=2x^{2}yXY
$$

Then divide by $u$...

$$
\frac{X^\prime}{X}-\frac{x^2Y^\prime}{Y}=2x^2 y
$$

$$
\frac{X^\prime}{X}=2x^2 y+\frac{x^2Y^\prime}{Y}
$$

$$
\frac{1}{x^2}\frac{X^\prime}{X}=2 y+\frac{Y^\prime}{Y}
$$

LHS depends on $x$ only, RHS depends on $y$ only. Since $x$ and $y$ are independent this means each side must be equal to a **separation constant**.