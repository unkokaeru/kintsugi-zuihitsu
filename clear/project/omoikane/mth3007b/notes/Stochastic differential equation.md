# Stochastic differential equation

A differential equation whose evolution depends on a stochastic noise term - typically a [[Wiener process]] $dW(t)$.

The general 1D Itô SDE has the form

$$
\boxed{dX(t)=\mu(X,t)\,dt+\sigma(X,t)\,dW(t),}
$$

where:
- $\mu(X,t)$ is the **drift** - the deterministic part of the evolution.
- $\sigma(X,t)$ is the **diffusion coefficient** (or *volatility*).
- $dW(t)$ is the Wiener increment with $\mathrm{Norm}(0,dt)$ distribution.

## Why Differential Form?

The Wiener process is **continuous but nowhere differentiable**, so $dW/dt$ does not exist as a classical derivative. SDEs are written in differential form, interpreted as the integral equation

$$
X(t)=X(0)+\int_{0}^{t}\mu(X,s)\,ds+\int_{0}^{t}\sigma(X,s)\,dW(s),
$$

where the second integral is the Itô stochastic integral.

## Examples in the Module

| SDE | Drift | Diffusion |
|---|---|---|
| Wiener process: $dW=dW$ | 0 | 1 |
| [[Ornstein-Uhlenbeck process]]: $dV=-kV\,dt+dW$ | $-kV$ | 1 |
| Geometric Brownian motion: $dS=\mu S\,dt+\sigma S\,dW$ | $\mu S$ | $\sigma S$ |
| Black-Scholes price evolution | drift = risk-free rate | proportional to price |

## Numerical Solution: [[Euler-Maruyama scheme]]

The simplest discretisation:

$$
X(t+\Delta t)=X(t)+\mu(X,t)\,\Delta t+\sigma(X,t)\sqrt{\Delta t}\,Z(t),
$$

with $Z(t)\sim\mathrm{Norm}(0,1)$. First-order strong convergence ($\sqrt{\Delta t}$).

Higher-order schemes (Milstein, stochastic Runge-Kutta) require derivatives of $\sigma$ and are generally more delicate than their deterministic counterparts.

## Comparison with ODEs

| ODE | SDE |
|---|---|
| Solution is a function | Solution is a *stochastic process* - a different function for each realisation |
| One initial condition determines the trajectory | Initial condition + noise sequence determine the trajectory |
| Order-$p$ method has error $O(\Delta t^{p})$ | Order-$p$ scheme has *strong* error $O(\Delta t^{p/2})$ - slower convergence |
| Average over runs is meaningless (no randomness) | Average over many runs $\to$ ensemble mean |
