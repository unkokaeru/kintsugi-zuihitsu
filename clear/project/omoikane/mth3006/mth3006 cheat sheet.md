# **MTH3006** Methods of Mathematical Physics, Cheat Sheet

> [!TIP] Made by William Fayers :)
> Make sure to read this before the exam - I recommend completing a practice test with it so you learn where everything is and can ask if you don't understand something. I might've made mistakes! There's a sudoku at the end in case you finish early, and the cheat sheet is generated based on analysis of past exams and given material. It should also include topics that I don't think will come up, but they theoretically could - these topic explanations will be much more brief.

```
Add integrating methods: integrating factor, integration by parts, 2nd order ODEs
Add some games, too + some fun decor (photos, frogs?)
```

## Possible Question Topics and Their Explanations

### 1. Fourier Transform (10 marks)

1. Piecewise…
	1. Write out the formula: $\tilde{f}(\omega) = \frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} f(t)e^{-i \omega t }dt$.
	2. Separate the integral into each piecewise range.
	3. Evaluate/simplify, using limits when substituting $\infty$, e.g. $\lim_{ t \to \infty }e^{-t}=0$ - separating real/imaginary can often help!
2. Sine (odd function)…
	1. Write out the formula: $\tilde{f}_{s}(\omega)=\sqrt{ \frac{2}{\pi} }\int_{0}^{\infty}f(t)\sin (\omega t) dt$.
	2. If $f(t)$ contains $e$, it may help to use Euler's formula: $\sin(\omega t)= \frac{e^{i \omega t}-e^{-i \omega t}}{2i}$.
	3. Evaluate/simplify, using limits when substituting $\infty$, e.g. $\lim_{ t \to \infty }e^{-t}=0$ - separating real/imaginary can often help!
3. Cos (even function)…
	1. Write out the formula: $\tilde{f}_{c}(\omega)=\sqrt{ \frac{2}{\pi} }\int_{0}^{\infty}f(t)\cos (\omega t) dt$.
	2. If $f(t)$ contains $e$, it may help to use Euler's formula: $\cos(\omega t)= \frac{e^{i \omega t}+e^{-i \omega t}}{2}$.
	3. Evaluate/simplify, using limits when substituting $\infty$, e.g. $\lim_{ t \to \infty }e^{-t}=0$ - separating real/imaginary can often help!

### 2. Inverse Laplace Transform (15 marks)

1. Partial fractions (real/complex roots)…
	1. Decompose $\tilde{f}(s)$ into separate fractions for each of the denominator's factors:
		- Linear factor $ax+b$, use the form $\frac{A}{ax+b}$.
		- Repeated linear factor $(ax+b)^n$, use the form $\frac{A_{1}}{ax+b}+\frac{A_{2}}{(ax+b)^2}+\dots+\frac{A_{n}}{(ax+b)^n}$.
		- Irreducible quadratic factor $ax^2+bx+c$, use the form $\frac{Ax+B}{ax^2+bx+c}$.
		- Repeated irreducible quadratic factor $(ax^2 + bx + c)^m$, use the form $\frac{A_1x + B_1}{ax^2 + bx + c} + \frac{A_2x + B_2}{(ax^2 + bx + c)^2} + \cdots + \frac{A_mx + B_m}{(ax^2 + bx + c)^m}$.
	2. Apply the appropriate transform for each term:
		- $\mathcal{L}^{-1}\left\{ \frac{1}{s-a} \right\} = e^{at}$.
		- $\mathcal{L}^{-1}\left\{ \frac{1}{(s-a)^2} \right\} = te^{at}$.
		- $\mathcal{L}^{-1}\left\{\frac{s}{s^2+a^2}\right\} = \cos(at)$.
		- $\mathcal{L}^{-1}\left\{ \frac{a}{s^2+a^2} \right\} = \sin(at)$.
	- Simplify.
2. ==Convolution theorem==…
	1. If $\tilde{F}(s) = F(s) G(s)$, then $f(t) = \int_0^t f(\tau) g(t-\tau) d\tau$.
		- $\mathcal{L}^{-1}\left\{ \frac{1}{s^2} \right\} = t$.
		- $\mathcal{L}^{-1}\left\{ \frac{1}{s^2-1)} \right\} = \sinh t$.

### 3. Laplace Transforms (10/15 marks)

1. Evaluating integrals (10 marks)…
	1. Match then given integral with the form $\tilde{f}(s)=\int_{0}^{\infty}f(t)e^{ -st }dt$ to find $f(t)$ and $s$.
	2. Use the table of Laplace transforms to transform $f(t)\to \tilde{f}(t)$ using $s$.
		- May have to separate into multiple transforms, depending on $f(t)$.
2. Finding the transform (10 marks)…
	1. Directly evaluate the integral to be in terms of $t$.
	2. Use the table of Laplace transforms to transform $f(t)\to \tilde{f}(t)$, in terms of $s$.
		- Each term is a separate transform.
3. Solving differential equations (15 marks)…
	1. *(optional) Re-write the $\frac{dy}{dx}$ form as $y^\prime$.*
	2. Use the table of Laplace transforms to transform the equation terms.
	3. Solve for the transformed function, $\tilde{y}$ or $\tilde{x}$, etc.
	4. Go to Section 2: Inverse Laplace Transforms (partial fractions) to find $y$ or $x$, etc.

### 4. Method of Characteristics (15 marks)

1. Homogeneous…
	1. Write PDE as $A(x,y)u_{x}+B(x,y)u_{y}=C(x,y)$.
	2. Write characteristic system, $\frac{dx}{A}=\frac{dy}{B}\left( =\frac{du}{C} \right)$.
	3. Solve $\frac{dx}{A}=\frac{dy}{B}$ using separation of variables, then solve for the constant, e.g. $\alpha$.
	4. Since $\frac{du}{ds}=0$, $u$ is constant, so the general solution is $u(x,y)=f(\alpha)=f(\dots)$.
	5. Apply boundary conditions and substitute into $u$ and each other.
	6. Simplify $u$.
2. Inhomogeneous…
	1. Write PDE as $A(x,y)u_{x}+B(x,y)u_{y}=C(x,y)$.
	2. Write characteristic system, $\frac{dx}{A}=\frac{dy}{B}=\frac{du}{C}$.
	3. Solve $\frac{dx}{A}=\frac{dy}{B}$ using separation of variables, then solve for the constant, e.g. $c_{1}$, and $y$.
	4. Solve $\frac{du}{C}=\frac{dx}{A}$ using separation of variables, then solve for $u$.
	5. Apply boundary conditions to find second constant, e.g. $c_{2}$.
	6. Simplify $u$, substituting in values from step 3/5 into step 4.

### 5. Change of Variables (10/15 marks)

1. Use chain rule to express partial derivatives under new variables. e.g. $\frac{\partial u}{\partial t}= \frac{\partial u}{\partial\xi} \frac{\partial\xi}{\partial t}+\frac{\partial u}{\partial \tau} \frac{\partial \tau}{\partial t}$, etc.
2. Evaluate partial derivatives of new variables.
3. Substitute evaluate partial derivatives into original equation, then simplify.

### 6. Separation of Variables (15 marks)

1. First-order partial differential…
2. Second-order partial differential (heat equation/wave equation)…

…

1. Assume that the solution is $u=XY$ and hence write the PDE in terms of $X$, $X^{\prime}$, $Y$, and $Y^{\prime}$.
2. Divide through by $XY$ to isolate $x$ and $y$.
3. Re-arrange to make each side of the equation only dependent on either $x$ or $y$.
4. Given both sides are independent, they must be equal to a constant, $\alpha$ (separation constant).
5. Solve these two equations.
6. Specify a solution given by the boundary condition.

---

## Worked Examples

> ==go through these before exam and the suggested ones on the answers==

### 1. Fourier Transform (10 marks)

**\[A1, 10 marks\]** Calculate the Fourier transform of…

$$
f(t)=\begin{cases}
e^-t & \text{when} & t\geq0 \\
0 & \text{when} & t<0
\end{cases}
$$

> Similar: [[mth3006 weekly problems 1#Question Three]], [[mth3006 weekly problems 2#Question Two]].

**\[B1, 10 marks\]** Calculate, where $a>0$ is a real constant, the Fourier transform of…

$$
f(t)=\begin{cases}
e^t & \text{when} & -a<t<a\\
0 & \text{otherwise}
\end{cases}
$$

> Similar: [[mth3006 weekly problems 1#Question Three]].

**\[C1, 10 marks\]** Calculate the Fourier transform of…

$$
f(t)=\begin{cases}
t & \text{when } & 0\leq t\leq {1} \\
0 & \text{otherwise}
\end{cases}
$$

> Similar: [[mth3006 weekly problems 1#Question Three]].

**\[X2, 10 marks\]** Calculate the Fourier sine transform of the function $f(t)=\exp(-t)$, using…

$$
f_{s}(\omega)=\sqrt{ \frac{2}{\pi} }\int_{0}^{\infty}f(t)\sin(\omega t)dt
$$

### 2. Inverse Laplace Transform (15 marks)

**\[B2, 15 marks\]** Use partial fractions to find the inverse Laplace transform of…

$$
\tilde{f}(s)=\frac{s^2-15s+41}{(s+2)(s-3)^2}
$$

> Similar: [[mth3006 weekly problems 3#Question Three]] (part two).

**\[X3, 15 marks\]** Show that the inverse Laplace transform of the following can be written in the form $f(t)=ae^{3t}+b\cos2t+c\sin2t$, and find the values of the constants $a$, $b$, and $c$…

$$
\tilde{f}(s)=\frac{5s^2-4s-7}{(s-3)(s^2+4)}
$$

**\[C2, 15 marks\]** Use the convolution theorem to calculate the inverse Laplace transform of…

$$
\tilde{F}(s)=\frac{1}{s^2(s^2-1)}
$$

> Similar: [[mth3006 weekly problems 3#Question Three]] (part one).

### 3. Laplace Transforms (10/15 marks)

**\[A4, 10 marks\]** Use Laplace transforms to evaluate the integrals…

$$
\int_{0}^{\infty}(\sin 3t)e^{-2t}dt\quad \text{and}\quad \int_{0}^{\infty}(t-\cos(3t))e^{-t}dt
$$

> Similar: [[mth3006 weekly problems 3#Question Four]].

**\[C3, 10 marks\]** Use Laplace transforms, where $a$ is a real, non-zero constant, to evaluate the integrals…

$$
\int_{0}^{\infty} e^{-3t}t^{3}dt\quad \text{and}\quad \int_{0}^{\infty}(\cos(at))e^{-t}dt
$$

> Similar: [[mth3006 weekly problems 3#Question Four]].

**\[X1, 10 marks\]** Find the Laplace transform of…

$$
f(t)=\int_{0}^t u^2-u+e^{-u}du
$$

**\[B4, 15 marks\]** Use Laplace transforms to solve the differential equation, given that $x(0)=1$…

$$
\frac{dx(t)}{dt}+3x(t)=e^{-t}
$$

> Similar: [[mth3006 weekly problems 4#Question One]].

### 4. Method of Characteristics (15 marks)

**\[A2, 15 marks\]** Use the method of characteristics to solve the following, subject to the boundary condition $u=\left( 1 + \frac{1}{x} \right)^2$ on $y=x$…

$$
x \frac{\partial u(x,y)}{\partial x}+(1+y) \frac{\partial u(x,y)}{\partial y}=0
$$

> Similar: [[mth3006 weekly problems 5#Question Three]].

**\[C4, 15 marks\]** Use the method of characteristics to solve the following, subject to the boundary condition $u=1$ on $x=0$…

$$
\frac{\partial u(x,y)}{\partial x}-x^2 \frac{\partial u(x,y)}{\partial y}=2x^2y
$$

> Similar: [[mth3006 weekly problems 5#Question One]], [[mth3006 weekly problems 5#Question Two]].

### 5. Change of Variables (10/15 marks)

**\[B3, 10 marks\]** Show that making the change of variables $\xi=y+2x$ and $\eta=y-2x$ transforms the differential equation…

$$
\frac{\partial^2u}{\partial x^2}-4 \frac{\partial^2u}{\partial y^2}+ \frac{\partial u}{\partial x}=0 \to 8 \frac{\partial^2u}{\partial \xi \partial \eta}- \frac{\partial u}{\partial \xi}+ \frac{\partial u}{\partial \eta}=0
$$

> Similar: [[mth3006 weekly problems 5#Question Four]].

**\[X4, 15 marks\]** Transform the following differential equation, where $\gamma$ and $D$ are constants, to a coordinate system given by $\xi=x-\gamma t$ and $\tau=t$…

$$
\frac{\partial u}{\partial t}+\gamma\frac{\partial u}{\partial x}=D \frac{\partial^2u}{\partial x^2}
$$

### 6. Separation of Variables (15 marks)

**\[A3, 15 marks\]** Use separation of variables to solve the following, subject to the boundary conditions $u(0,t)=u(2,t)=0$ and $u(x)=3\sin(2\pi x)+2\sin(4\pi x)$…

$$
\frac{\partial u(x,t)}{\partial t}=\frac{\partial^2u(x,t)}{\partial x^2}
$$

> Similar: [[mth3006 weekly problems 6#Question Three]], [[mth3006 weekly problems 6#Question Four]].
