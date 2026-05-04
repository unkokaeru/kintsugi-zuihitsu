# Local Truncation Error

The error introduced by a numerical scheme **in a single step**, assuming exact values at the start of the step. For an ODE solver advancing from $t_{i}$ to $t_{i+1}=t_{i}+\Delta t$, the local truncation error is

$$
\boxed{\text{LTE}_{i}=y(t_{i+1})-y_{i+1},}
$$

where $y(t_{i+1})$ is the exact solution at $t_{i+1}$ given the *exact* initial data $y(t_{i})$, and $y_{i+1}$ is the numerical update from $y(t_{i})$.

## Derivation via Taylor Series

Compare the scheme's update rule to the Taylor expansion of $y(t_{i+1})$ around $t_{i}$.

**[[Explicit Euler method]].** Updates with $y_{i+1}=y_{i}+\Delta t\,g(t_{i},y_{i})$. Taylor:

$$
y(t_{i+1})=y(t_{i})+\Delta t\,y'(t_{i})+\tfrac{1}{2}\Delta t^{2}\,y''(t_{i})+O(\Delta t^{3}).
$$

Difference: $\text{LTE}=\tfrac{1}{2}\Delta t^{2}\,y''(t_{i})+O(\Delta t^{3})=O(\Delta t^{2})$.

**[[Midpoint method]] / second-order RK.** $\text{LTE}=O(\Delta t^{3})$.

**[[Fourth order Runge-Kutta]].** $\text{LTE}=O(\Delta t^{5})$.

## Versus [[Global truncation error]]

LTE accumulates: stepping $N=T/\Delta t$ times adds up the per-step errors. The global truncation error is one order *less* than the LTE - e.g. an LTE of $O(\Delta t^{2})$ accumulates over $N=O(1/\Delta t)$ steps to give a global error $O(\Delta t)$, hence Euler is a **first-order** method despite its $O(\Delta t^{2})$ LTE.
