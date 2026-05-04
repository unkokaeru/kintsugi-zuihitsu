# Wiener process

Also called **Brownian motion**. The continuous-time, continuous-state random process $W(t)$ that is the limit of an unbiased random walk as the step size and step time go to zero.

## Definition

$W(t)$ is a Wiener process if for all $0\leq s<t$:

1. **Initial condition**: $W(0)=0$.
2. **Gaussian increments**: $W(t)-W(s)\sim\mathrm{Norm}(0,\,t-s)$.
3. **Independent increments**: $W(t)-W(s)$ is independent of $W(u)$ for all $u\leq s$.

Setting $s=0$: $W(t)\sim\mathrm{Norm}(0,t)$. Probability density at time $t$:

$$
\rho_{W}(x,t)=\frac{1}{\sqrt{2\pi t}}\exp\!\left(-\frac{x^{2}}{2t}\right).
$$

## Connection to the Diffusion Equation

$\rho_{W}(x,t)$ satisfies the [[Heat equation]] $\partial \rho/\partial t=\tfrac{1}{2}\partial^{2}\rho/\partial x^{2}$ with initial condition $\rho(x,0)=\delta(x)$. So:

> A histogram of many independent Wiener walkers at time $t$ equals the solution of the diffusion equation with delta-function initial condition.

The deterministic PDE picture and the stochastic-process picture describe the same thing - one in averaged density, the other one walker at a time.

## Numerical Scheme

By property 2, $W(t+\Delta t)-W(t)\sim\mathrm{Norm}(0,\Delta t)$. Generate this as $\sqrt{\Delta t}\,Z(t)$ with $Z(t)\sim\mathrm{Norm}(0,1)$ - the [[Euler-Maruyama scheme]] for $dW=dW$:

$$
\boxed{W(t+\Delta t)=W(t)+\sqrt{\Delta t}\,Z(t),\qquad W(0)=0.}
$$

## Properties

- **Continuous but nowhere differentiable**: $W(t)$ has continuous paths almost surely, but $dW/dt$ does not exist as a classical derivative. Hence stochastic differential equations are written in differential form $dV=\ldots\,dt+\ldots\,dW$, not as ODEs.
- **Self-similar**: $W(at)$ has the same distribution as $\sqrt{a}\,W(t)$.
- **Variance grows linearly**: $\mathrm{Var}(W(t))=t$ - typical excursions scale as $\sqrt{t}$.
- **Returns to origin**: in 1D, $W(t)$ is recurrent - it will revisit any neighbourhood of the origin infinitely often (with probability 1).

## Applications

- [[Ornstein-Uhlenbeck process]] - Wiener with restoring force.
- [[Random walks]] - Wiener is the continuum limit.
- Geometric Brownian motion in finance - $dS/S=\mu\,dt+\sigma\,dW$.
- Brownian dynamics in physics - overdamped Langevin equation.
