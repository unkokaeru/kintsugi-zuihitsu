# Stability of a Method

A method $T$ is **stable** if, for a [[Stability of an ODE]], two slightly different initial conditions $y_{A}(0)$ and $y_{B}(0)=y_{A}(0)+\epsilon$ produce numerical solutions $y_{T,A}(t)$ and $y_{T,B}(t)$ whose difference stays bounded:

$$
|y_{T,A}(t)-y_{T,B}(t)|<M(\epsilon)\quad\text{for all }t>0.
$$

Stability of the method means the *numerical* scheme doesn't amplify perturbations beyond what the underlying ODE does. Without stability, even arbitrarily small initial errors blow up - and so do floating-point round-off errors.

## Linear Stability Test

The standard test problem is the linear scalar ODE $\dot{y}=\lambda y$ with $\mathrm{Re}(\lambda)<0$ (so the true solution decays). Apply the method to this problem; the scheme produces an iteration $y_{i+1}=R(\lambda\Delta t)\,y_{i}$ for some **amplification factor** $R(z)$. The scheme is **A-stable** if $|R(z)|\leq 1$ in the entire left half-plane $\mathrm{Re}(z)\leq 0$.

| Method | Amplification factor | Stability region |
|---|---|---|
| [[Explicit Euler method]] | $R(z)=1+z$ | Disk $|1+z|\leq 1$ - small region |
| [[Implicit Euler method]] | $R(z)=1/(1-z)$ | Outside disk $|1-z|\geq 1$ - entire LHP |
| [[Implicit Trapezoid Method]] | $R(z)=(1+z/2)/(1-z/2)$ | Entire LHP - A-stable |
| [[Fourth order Runge-Kutta]] | quartic in $z$ | Larger than Euler, but bounded |

A-stable methods (implicit Euler, trapezoid) are unconditionally stable for any $\Delta t$; explicit methods (Euler, RK4) are only conditionally stable - must keep $\lambda\Delta t$ in the stability region.

## For PDE Schemes

The [[FTCS scheme]] for the [[Heat equation]] is conditionally stable with $\Delta t\leq \Delta x^{2}/(2\alpha)$; the [[BTCS scheme]] is unconditionally stable. See [[von Neumann stability]] for the analytical procedure.

## Stiff Equations

A "stiff" ODE has multiple disparate timescales - the fastest mode forces $\Delta t$ to be tiny under explicit methods even when the slow mode dominates the dynamics of interest. Implicit methods handle this gracefully because their large stability regions allow $\Delta t$ to be sized by accuracy rather than stability.

## Practical Consequence

When a scheme blows up:
1. Check the stability constraint (if any) for the method/problem.
2. Reduce $\Delta t$ or switch to an implicit scheme.
3. Verify the underlying ODE is itself stable - an unstable ODE's solution genuinely diverges, no method can fix that.
