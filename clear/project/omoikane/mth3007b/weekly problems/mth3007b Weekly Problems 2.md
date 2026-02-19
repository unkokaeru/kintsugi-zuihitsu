# MTH3007B Weekly Problems 2

> **Original Documents**: [[mth3007b weekly problem sheet 2.pdf|Problem Sheet]] / [[[[mth3007b weekly problem sheet 2 handwritten solutions.pdf|My Handwritten Solutions]] / [[mth3007b weekly problem sheet2 solutions.pdf|Provided Solutions]]
>
> **Vibes**: …
>
> **Used Techniques**:
>   - …

---

## 1.1. Predicting Error in Different Methods

> [!question]
> Assume you solve a differential equation, $y^{\prime} (t)=g(t,y(t))$, using the [[forward Euler method]] using a step size of $\Delta t=0.01$. Also assume the (global) error is exactly as in the linear regime and the error in $y(t_{\text{max}})$ is $0.04$.
>
> 1. What would the error be if $\Delta t=0.005$?
> 2. What would the error be if $\Delta t=0.005$ and Ralston is used, instead? Assume an error of $0.03$ for $\Delta t=0.01$.

The global error scales with the timestep according to the order of the method...

1. For Forward Euler, a first order method, then $E$ is

---

## 1.2. …

> [!question]
> Consider the ordinary differential equation, $\frac{dy(t)}{dt}=bt-ay(t)$ with $a=8$, $b=1$, and $y(0)=4$.
>
> 1. By using a numerical algorithm, solve the ODE till $t_\mathrm{max}=1$, then compare $y(t_\mathrm{max})$ with the analytical solution $y(t)=\exp(-at)\left(y(0)+b/a^2\right)+bt/a-b/a^2$.
> 2. What is $y(t_\mathrm{max})$ for the Ralston method for $\Delta t=0.01$?

…

---

## 1.3. …

> [!question]
> Assume you want to have an accuracy in the final solution of $0.001$, such that the numerical result of $y(t_{\text{max}})$ can deviate at most $0.001$ from the analytical solution.
>
> What is the maximum timestep $\Delta t$ for the [[explicit Euler method]] to achieve the $0.001$ accuracy in $y(t_{\text{max}})$, with one significant figure accuracy?

…

---

## 1.4. …

> [!question]
> What is the maximum timestep $\Delta t$ for Ralston's method to achieve the $0.001$ accuracy in $y(t_{\text{max}})$, with one significant figure accuracy?

…
