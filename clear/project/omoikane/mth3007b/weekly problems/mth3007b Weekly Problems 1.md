# MTH3007b Weekly Problems 1

> **Original Documents**: [[mth3007b weekly problem sheet 1.pdf|Problem Sheet]] / [GitHub Solutions](https://github.com/unkokaeru/mth3007/blob/main/semester%20b/sessions/session%201%20-%20introduction/solutions.py)
>
> **Vibes**: Just quick definitions then the two methods outlined in the lecture - pretty simple!
>
> **Used Techniques**:
> 	- Error/relation definitions.
> 	- Implementing explicit/implicit Euler methods.
> 	- Error calculations.

## 1.1. Definitions

> [!question]
> What is meant by the following:
> 1. Local truncation error.
> 2. Global truncation error.
> 3. Order of an algorithm.
> 4. Finite difference method.

- **Local Truncation Error**: The difference between the numerical and analytical solution after a single timestep.
- **Global Truncation Error**: The difference between the numerical and analytical solution after all timesteps.
- **Order of an Algorithm**: How the global truncation error varies with the integration step; for order $p$, then halving the step size $h$ reduces error by a factor of $2^p$.
- **Finite Difference Method**: Approximating a derivative by setting a value for $\Delta x$, instead of integrating.

---

## 1.2. Definition Comparison

> [!question]
> What is the difference between an implicit and explicit relation?

- An **explicit relation** has an isolated dependent variable.
- An **implicit relation** does not have an isolated dependent variable.

---

## 1.3. Formula Implementation (Explicit Euler Method)

> [!question]
> Implement the explicit Euler method in Python to solve the ODE $\frac{dy(t)}{dt}=bt-ay(t)$.
>
> Use variables for the coefficients, setting them to $b=1$, $a=22$, $y(0)=1$, $t_{\text{max}}=1$, and integrate with:
> 1. $\Delta t=0.01$
> 2. $\Delta t=0.1$

…

---

## 1.4. Formula Implementation (Implicit Euler Method)

> [!question]
> Implement the implicit Euler method in Python to solve the ODE from the [[#1.3. Formula Implementation (Explicit Euler Method)|previous question]].

…

---

## 1.5. Error Calculation Against Analytical Solution

> [!question]
> For the [[#1.3. Formula Implementation (Explicit Euler Method)|same ODE]] from the previous two questions, compare the errors between the implicit and explicit Euler methods and plot each solution against time, along with the analytical solution:
>
> $$
> y(t)=e^{-at}\left( y_{0}+ \frac{b}{a^2} \right)+ \frac{bt}{a}- \frac{b}{a^2}
> $$

…
