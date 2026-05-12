# Stochastic Differential Equation

A **stochastic differential equation** (SDE) is an equation that involves increments of a stochastic process (typically the [[Wiener process]]) alongside deterministic terms.

The general form is

$$
dX = f(X, t) \, dt + g(X, t) \, dW
$$

where:
- $f(X, t)$ is the **drift** term (deterministic)
- $g(X, t)$ is the **diffusion** term (stochastic coefficient)
- $dW$ is an increment of the [[Wiener process]]

## Example: Ornstein-Uhlenbeck Process

The [[Ornstein-Uhlenbeck process]] is the SDE

$$
dV = -k V \, dt + dW
$$

with drift $f(V, t) = -kV$ and diffusion $g(V, t) = 1$.

SDEs are solved numerically using the [[Euler-Maruyama scheme]], which is the stochastic analogue of the [[Explicit Euler method]].

[[Wiener process]] | [[Ornstein-Uhlenbeck process]] | [[Euler-Maruyama scheme]] | [[Langevin equation]] | [[Explicit Euler method]]
