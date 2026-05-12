# Ornstein-Uhlenbeck Process

The **Ornstein-Uhlenbeck (OU) process** is a [[Stochastic differential equation|stochastic differential equation]] describing a mean-reverting random process:

$$
dV = -k V \, dt + dW, \qquad k > 0
$$

where $dW$ is an increment of the [[Wiener process]]. The drift term $-kV \, dt$ pulls the process back towards zero.

## Numerical Simulation

Applying the [[Euler-Maruyama scheme]]:

$$
V(t + dt) = (1 - k \, dt) \, V(t) + \sqrt{dt} \cdot Z, \qquad Z \sim N(0,1)
$$

## Equilibrium Distribution

As $t \to \infty$, the OU process approaches a stationary (equilibrium) distribution:

$$
V(\infty) \sim N\!\left(0,\; \frac{1}{2k}\right)
$$

The process is mean-reverting: the mean is always zero, and the variance is controlled by the parameter $k$. Larger $k$ means stronger mean reversion and a tighter equilibrium distribution.

The OU process is the basis of the [[Langevin equation]] model for particle velocity in a thermal bath, and its first time to reach a threshold is described by [[First-passage time]].

[[Stochastic differential equation]] | [[Wiener process]] | [[Euler-Maruyama scheme]] | [[Langevin equation]] | [[First-passage time]]
