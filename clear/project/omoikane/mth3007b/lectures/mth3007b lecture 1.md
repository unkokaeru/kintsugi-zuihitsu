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
> We define the Taylor series of cosine as $\cos(x)\approx1-\frac{1}{2}x^2+\frac{1}{24}x^4+\dots+\frac{(-1)^n}{(2n)}$

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
