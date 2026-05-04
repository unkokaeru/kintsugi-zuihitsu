# Euler-Maruyama scheme

The stochastic-differential-equation analogue of the [[Explicit Euler method]] - a first-order discretisation of an [[Stochastic differential equation]] $dX=\mu(X,t)\,dt+\sigma(X,t)\,dW$.

$$
\boxed{X(t+\Delta t)=X(t)+\mu(X,t)\,\Delta t+\sigma(X,t)\,\sqrt{\Delta t}\,Z(t),}
$$

where $Z(t)\sim\mathrm{Norm}(0,1)$ is an independent standard-normal draw at each step.

## Where the $\sqrt{\Delta t}$ Comes From

A Wiener increment $\Delta W$ over a step $\Delta t$ has $\Delta W\sim\mathrm{Norm}(0,\Delta t)$. Generating $\Delta W$ as $k\,Z$ with $Z\sim\mathrm{Norm}(0,1)$ requires $k=\sqrt{\Delta t}$ (since variance scales as $k^{2}$). Substituting $\Delta W=\sqrt{\Delta t}\,Z$ into the SDE gives the Euler-Maruyama formula.

## Convergence

- **Strong convergence**: $\mathbb{E}|X_{N}-X(T)|\sim O(\sqrt{\Delta t})$ - half-order in $\Delta t$. (Compare ODE Euler: full first order.)
- **Weak convergence**: $|\mathbb{E}f(X_{N})-\mathbb{E}f(X(T))|\sim O(\Delta t)$ - first-order.

So Euler-Maruyama is half-order strong, first-order weak. For ensemble-average quantities (which is most physical applications), weak convergence is what matters.

## Applications

| SDE | Update |
|---|---|
| [[Wiener process]] $dW=dW$ | $W(t+\Delta t)=W(t)+\sqrt{\Delta t}\,Z(t)$ |
| [[Ornstein-Uhlenbeck process]] $dV=-kV\,dt+dW$ | $V(t+\Delta t)=(1-k\Delta t)V(t)+\sqrt{\Delta t}\,Z(t)$ |
| Geometric Brownian motion $dS=\mu S\,dt+\sigma S\,dW$ | $S(t+\Delta t)=S(t)(1+\mu\Delta t+\sigma\sqrt{\Delta t}\,Z(t))$ |

## Pitfalls

- **Step-size choice**: $\Delta t$ must resolve the dominant deterministic timescale. Stiff drifts ($k\Delta t$ near $1$ for OU) demand small steps.
- **Stability**: explicit Euler-Maruyama can be conditionally unstable for stiff SDEs - implicit variants exist.
- **Higher-order**: Milstein adds a $\sigma\sigma'(\Delta W^{2}-\Delta t)/2$ correction, raising strong convergence to $O(\Delta t)$ but requiring derivatives of $\sigma$.
