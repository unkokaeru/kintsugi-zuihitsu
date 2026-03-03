# MTH3007B Weekly Problems 5

> **Vibes**: …
>
> **Used Techniques**:
>   - …

***

## 5.1. Forward Euler for Second-Order ODE IVP

> [!question]
> Consider the second-order ordinary differential equation
>
> $$
> \frac{d^{2}y(t)}{dt^{2}} + 6 y(t) = 0
> $$
>
> with initial conditions $y(0) = 2$ and $y'(0) = -3$.
>
> 1. Rewrite this problem as a system of two first-order ordinary differential equations in a state vector $\mathbf{y}(t)$.
> 2. Implement the forward Euler method with step size $h = 0.1$ to approximate the solution from $t = 0$ to $t = 5$.
> 3. Using your implementation, compute the numerical approximation of $y(5)$.
> 4. The exact solution is
> 
> $$
>    y(t) = -\frac{\sqrt{6}}{2}\sin(\sqrt{6}\,t) + 2\cos(\sqrt{6}\,t).
>    $$
>
> Plot on the same axes the forward Euler approximation and the exact solution over $0 \le t \le 5$.
> 5. Briefly comment on the accuracy and stability of the forward Euler method for this problem and step size, referring to your plot and the error at $t = 5$.
>
> *Hint:* Choose $y_{1}(t) = y(t)$ and $y_{2}(t) = y'(t)$ to form the system.

…

---

## 5.2. RK4 for the Same Second-Order ODE IVP

> [!question]
> Consider again the initial value problem
>
> $$
> \frac{d^{2}y(t)}{dt^{2}} + 6 y(t) = 0,\quad y(0) = 2,\quad y'(0) = -3,
> $$
>
> written as a first-order system as in Question 5.1.
>
> 1. Implement the classical fourth-order Runge–Kutta (RK4) method with step size $h = 0.1$ for this first-order system on the interval $0 \le t \le 5$.
> 2. Using your implementation, compute the numerical approximation of $y(5)$.
> 3. On a single plot, display the RK4 approximation, the forward Euler approximation from Question 5.1, and the exact solution
> 
> $$
>    y(t) = -\frac{\sqrt{6}}{2}\sin(\sqrt{6}\,t) + 2\cos(\sqrt{6}\,t)
>    $$
>
> over $0 \le t \le 5$.
> 4. Compare the error at $t = 5$ for the forward Euler and RK4 methods, and discuss how the order of the methods is reflected in your numerical results and plots.
>
> *Hint:* Reuse your system formulation and only change the time-stepping method.

…
