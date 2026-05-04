# Ornstein-Uhlenbeck process

A [[Wiener process]] with a linear restoring drift - the simplest mean-reverting [[Stochastic differential equation]]:

$$
\boxed{dV(t)=-k\,V(t)\,dt+dW(t),\qquad k>0.}
$$

The $-kV\,dt$ term pulls $V$ back towards zero, preventing the unbounded drift of a pure Wiener process. Models a damped particle, an interest rate fluctuating around its mean, or a velocity in thermal equilibrium with noise (Langevin).

## Numerical Scheme

[[Euler-Maruyama scheme]] applied to the OU SDE:

$$
\boxed{V(t+\Delta t)=(1-k\,\Delta t)\,V(t)+\sqrt{\Delta t}\,Z(t),\qquad Z(t)\sim\mathrm{Norm}(0,1).}
$$

Setting $k=0$ recovers the pure Wiener-process update.

## Stationary Distribution

The OU process has a stationary distribution (unlike the Wiener process, which drifts off to infinity):

$$
V(\infty)\sim\mathrm{Norm}\!\left(0,\,\frac{1}{2k}\right).
$$

Variance saturates at $1/(2k)$ - the **fluctuation-dissipation** relation. Larger $k$ (stronger restoring force) confines the walker more tightly to the origin.

## Comparison with Wiener

| | Wiener $W(t)$ | OU $V(t)$ |
|---|---|---|
| Drift | None | $-kV\,dt$ |
| $\mathrm{Var}(\cdot)$ at large $t$ | $t$ (grows without bound) | $1/(2k)$ (saturates) |
| Mean | $0$ | $0$ |
| Long-time behaviour | Drifts to $\pm\infty$ | Oscillates around $0$ |

## Equivalent: Langevin Equation

Same physics expressed as

$$
\frac{dV}{dt}=-kV+\xi(t),
$$

where $\xi(t)$ is delta-correlated Gaussian noise: $\langle\xi(t)\xi(t')\rangle=2\delta(t-t')$. Numerically, $\xi(t)\to Z(t)/\sqrt{\Delta t}$ at each step.

The Langevin form is more familiar from Newton's-second-law-with-noise reasoning, but technically requires care in the $\Delta t\to 0$ limit because $dW/dt$ doesn't exist as a classical derivative. The Itô form $dV=-kV\,dt+dW$ is mathematically cleaner.

## Applications

- Brownian motion of a particle in a harmonic potential.
- Vasicek interest-rate model in finance: $dr=k(\theta-r)\,dt+\sigma\,dW$.
- Velocity component of a particle obeying overdamped Langevin dynamics.
- [[First-passage time]] problems where the threshold sits in the tail of the equilibrium distribution.
