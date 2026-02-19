# MTH3007B Weekly Problems 2

> **Original Documents**: [[mth3007b weekly problem sheet 2.pdf|Problem Sheet]]
>
> **Vibes**: Pretty chill, basically just the same as last week and scaling errors.
>
> **Used Techniques**:
>   - Scaling errors.
>   - Implementing Euler methods.

---

## 1.1. Scaling Error in Different Methods

> [!question]
> Assume you solve a differential equation, $y^{\prime} (t)=g(t,y(t))$, using the [[Explicit Euler method]] using a step size of $\Delta t=0.01$. Also assume the (global) error is exactly as in the linear regime and the error in $y(t_{\text{max}})$ is $0.04$.
>
> 1. What would the error be if $\Delta t=0.005$?
> 2. What would the error be if $\Delta t=0.005$ and Ralston is used, instead? Assume an error of $0.03$ for $\Delta t=0.01$.

The global error scales with the timestep according to the order of the method…

1. For Forward Euler, a first order method, then $E \propto \Delta t$. Hence, halving the step size halves the error: $E_{\text{new}}=E_{\text{old}}\cdot \frac{\Delta t_{\text{new}}}{\Delta t_{\text{old}}}=0.04\times \frac{0.005}{0.01}=\boxed{0.02}$.
2. For Ralston, a second order method, then $E\propto \Delta t^2$. Hence, halving the step size quarters the error: $E_{\text{new}}=E_{\text{old}}\cdot \left( \frac{\Delta t_{\text{new}}}{\Delta t_{\text{old}}} \right)^2=0.03\times \left( \frac{0.005}{0.01} \right)^2=0.03\times 0.25=\boxed{0.0075}$.

---

## 1.2. Numerical Solutions of an ODE

> [!question]
> Consider the ordinary differential equation, $\frac{dy(t)}{dt}=bt-ay(t)$ with $a=8$, $b=1$, and $y(0)=4$.
>
> 1. By using a numerical algorithm, solve the ODE till $t_\mathrm{max}=1$, then compare $y(t_\mathrm{max})$ with the analytical solution $y(t)=\exp(-at)\left(y(0)+b/a^2\right)+bt/a-b/a^2$.
> 2. What is $y(t_\mathrm{max})$ for the Ralston method for $\Delta t=0.01$?

1. Using the [[Explicit Euler method]], the solution is $\boxed{0.1103355852}$. Analytically, the solution is approximately $0.1107220921$ - a difference of about $3.865\times 10^{-4}$
2. Instead, using the [[Ralston method]], the solution is instead $\boxed{0.1107343545}$, giving a smaller max error of $1.226\times 10^{-5}$.

---

## 1.3. Finding Maximum Timestep for a Given Error in Euler

> [!question]
> Assume you want to have an accuracy in the final solution of $0.001$, such that the numerical result of $y(t_{\text{max}})$ can deviate at most $0.001$ from the analytical solution.
>
> What is the maximum timestep $\Delta t$ for the [[Explicit Euler method]] to achieve the $0.001$ accuracy in $y(t_{\text{max}})$, with one significant figure accuracy?

Using the linear error scaling for Euler with the known error at $\Delta t=0.01$…

$$
\Delta t_{\text{max}}=\Delta t\cdot \frac{0.001}{E(\Delta t)}=0.01\times \frac{0.001}{3.865\times 10^{-4}}\approx \boxed{0.03}
$$

---

## 1.4. Finding Maximum Timestep for a Given Error in Ralston

> [!question]
> What is the maximum timestep $\Delta t$ for Ralston's method to achieve the $0.001$ accuracy in $y(t_{\text{max}})$, with one significant figure accuracy?

Using the quadratic error scaling of Ralston with the known error at $\Delta t=0.01$…

$$
\Delta t_{\text{max}}=\Delta t \cdot \sqrt{ \frac{0.001}{E(\Delta t)} }=0.01\times \sqrt{ \frac{0.001}{1.226\times 10^{-5}} }\approx \boxed{0.09}
$$

> [!note] This is apparently incorrect - naive scaling?
