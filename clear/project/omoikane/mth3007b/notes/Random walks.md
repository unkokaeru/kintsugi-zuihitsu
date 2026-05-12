# Random Walks

A **random walk** is a stochastic process in which a variable moves in discrete steps, each step chosen randomly.

## Discrete Random Walk

The simplest 1D random walk: at each step, the position moves by $\pm 1$ with equal probability:

$$
X_{n+1} = X_n \pm 1 \quad \text{with probability } \tfrac{1}{2} \text{ each}
$$

## Continuous Limit

As the step size and time interval both tend to zero in the appropriate way, the discrete random walk converges to the [[Wiener process]] (Brownian motion). Specifically, if the step size is $\sqrt{dt}$ and steps occur at intervals $dt$, the process converges to $W(t) \sim N(0, t)$.

This connection motivates the numerical simulation of the Wiener process: each increment is drawn as $\sqrt{dt} \cdot Z$ where $Z \sim N(0,1)$ (see [[Euler-Maruyama scheme]]).

[[Wiener process]] | [[Pseudo-random number generation]] | [[Monte Carlo integration]] | [[Euler-Maruyama scheme]]
