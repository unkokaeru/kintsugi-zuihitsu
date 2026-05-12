# Langevin Equation

The **Langevin equation** is a stochastic ODE describing the velocity $V$ of a particle subject to friction and random thermal forcing:

$$
\frac{dV}{dt} = -k V + \xi(t)
$$

where $\xi(t)$ is **white noise** with correlation

$$
\langle \xi(t) \xi(t') \rangle = 2 \, \delta(t - t')
$$

## Equivalence to the Ornstein-Uhlenbeck SDE

The Langevin equation is equivalent to the [[Ornstein-Uhlenbeck process]] SDE $dV = -kV \, dt + dW$. The connection is that $\xi(t)$ is the formal derivative of the [[Wiener process]], $\xi(t) = dW/dt$, which does not exist as a classical function but is defined in the distributional sense.

## Numerical Discretisation

In a time step $dt$, white noise is represented as $\xi(t_i) \to Z_i / \sqrt{dt}$ where $Z_i \sim N(0,1)$. Substituting into the Langevin equation and rearranging gives the [[Euler-Maruyama scheme]]:

$$
V(t + dt) = (1 - k \, dt) \, V(t) + \sqrt{dt} \cdot Z
$$

[[Ornstein-Uhlenbeck process]] | [[Wiener process]] | [[Stochastic differential equation]] | [[Euler-Maruyama scheme]] | [[First-passage time]]
