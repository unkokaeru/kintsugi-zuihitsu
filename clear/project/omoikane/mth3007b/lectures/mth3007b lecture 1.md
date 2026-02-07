# MTH3007b Lecture 1

> [!quote] …
> …

Various techniques can be used to find numerical solutions to analytical problems. However, there will always be slight inaccuracy; so, let's first discover how to measure that…

## Approximations and Errors

There are three main ways to measure error:

1. **Order of magnitude**: defined as a non-negative function $g(h)$ for a function $f(h)$ as $h\to 0$, where $\lim_{ h \to 0 } \frac{f(h)}{g(h)}=\text{finite constant}$; also written in "big O" notation as $f(h)=O(g(h)):h\to0$.
2. **Absolute error**: defined as $\epsilon=|v-v_{\text{approx}}|$ for some approximation $v_{\text{approx}}$ of a quantity $v$.
3. **Relative error**: defined for nonzero values of $v$, $\eta= \frac{|v-v_{\text{approx}}|}{|v|}=\frac{\epsilon}{|v|}$.

> [!example] Order of Magnitude (Taylor series of $\cos(x)$ around $x=0$)
> We define the Taylor series of cosine as $\cos(x)=1-\frac{1}{2}x^2+\frac{1}{24}x^4+\dots+\frac{(-1)^n}{(2n)!}x^{2n}+\dots$.
> 
> If we only choose to use the first to terms of the expansion, such that $\cos(x)\approx1-\frac{1}{2}x^2$, then we can determine that there is an inaccuracy of exactly the next terms: $\frac{1}{24}x^4+\dots$. In the limit of $x\to 0$, we can write this inaccuracy as $O(x^4)$, and hence determine the constant (in this case $\frac{1}{24}$ by using the formula definition), or simply write...
> 
> $\cos(x)=1- \frac{1}{2}x^2+O(x^4)$, or even $\cos(x)=1- \frac{1}{2}x^2+O(x^3)$ by determining that it also satisfies the equation with a constant of $0$, in this case.

## Differential Equations

Now that we can measure the accuracy of our numerical solutions, we might want to find some actual solutions. First, to recall some basic information on differential equations:

1. An **Ordinary Differential Equation (ODE)** is an equation involving the derivative(s) of an unknown function with respect to **one** independent variable.
2. A **Partial Differential Equation (ODE)** is an equation involving the derivative(s) of an unknown function with respect to **multiple** independent variables.
3. The **Order of a Differential Equation** is the highest occurring derivative in the equation; normally first or second order.

There are various real-world examples of each of these, such as the Navier

---

- Differential Equations:
	- ODEs: single independent variable / PDEs: multiple independent variables.
	- Order of a differential equation.
	- Real-world examples.
	- Side conditions to make solutions unique; initial value problems, classical initial value problems, and boundary value problems.
- Finite Difference Method:
	- Comparison derivative vs finite difference.
- Explicit Euler Method:
	- Explicit Euler method for initial value problem.
	- Error in approximation due to truncation; local error.
	- Error in approximation; global truncation error.
	- Result error explicit Euler method.
- Implicit Euler Method:
	- Implicit vs explicit.
	- Precursor.
	- Algorithm implicit Euler method for IVP.

---

## Pre-Lecture Notes from [[mth3007b lecture 1 notes.pdf|University Notes]]

- *Missing due to how late the notes were released - no rough notes taken during class either, due to incredibly slow pace*.
