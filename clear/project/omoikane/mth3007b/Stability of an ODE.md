# Stability of an ODE

An ODE is stable if, given any $\epsilon > 0$, there exists a $\delta(\epsilon) > 0$ such that for two solutions $y_A(t)$ and $y_B(t)$ with $|y_A(t_0) - y_B(t_0)| \leq \delta$:

$$
|y_A(t) - y_B(t)| \leq \epsilon \quad \text{for all } t > t_0
$$

So a stable ODE is one where small differences in initial conditions are not amplified.

> [!example] Unstable ODE: $\dot{y} = y$
>
> The solution is $y(t) = y_0 e^t$. For two solutions with slightly different initial conditions:
>
> $$
> |y_A(t) - y_B(t)| = |y_{0,A} - y_{0,B}|\,e^t \to \infty
> $$
>
> There is no finite upper bound, so no valid $\delta$ can be found - this ODE is **unstable**.

> [!example] Stable ODE: $\dot{y} = -y$
>
> The solution is $y(t) = y_0 e^{-t}$. For two solutions with slightly different initial conditions:
>
> $$
> |y_A(t) - y_B(t)| = |y_{0,A} - y_{0,B}|\,e^{-t} \to 0
> $$
>
> This goes to zero as $t \to \infty$, so we can simply take $\delta = \epsilon$. The initial
> difference is attenuated (damped), and hence this ODE is **stable**.
