# Langevin equation

An ODE-style description of a stochastic process driven by a delta-correlated noise term.

For the [[Ornstein-Uhlenbeck process]]:

$$
\boxed{\frac{dV(t)}{dt}=-kV(t)+\xi(t),}
$$

where $\xi(t)$ is **delta-correlated Gaussian white noise**: $\langle \xi(t)\rangle=0$ and $\langle\xi(t)\xi(t')\rangle=2\delta(t-t')$.

Equivalent SDE form (Ito): $dV=-kV\,dt+dW$.

## Why Two Forms

The Langevin form looks like Newton's law with a random force: position evolves under a deterministic force plus stochastic kicks. Familiar to physicists.

The Ito form is mathematically rigorous: the [[Wiener process]] $W(t)$ is continuous but nowhere differentiable, so $dW/dt$ does not exist as a classical derivative. The Ito differential $dV=\ldots\,dt+\ldots\,dW$ avoids that pitfall by writing increments rather than rates.

The two are equivalent shorthand for the same process. Use the Langevin form for intuition, the Ito form for proofs.

## Numerical Scheme

Discretising directly:

$$
\frac{V(t+\Delta t)-V(t)}{\Delta t}=-kV(t)+\frac{Z(t)}{\sqrt{\Delta t}},
$$

where $Z(t)\sim\mathrm{Norm}(0,1)$. So $\xi(t)$ becomes $Z(t)/\sqrt{\Delta t}$ (the $\sqrt{\Delta t}$ is what makes the discrete noise approximate delta-correlated continuous noise as $\Delta t\to 0$). Multiplying through by $\Delta t$:

$$
V(t+\Delta t)=(1-k\Delta t)V(t)+\sqrt{\Delta t}\,Z(t),
$$

matching the [[Euler-Maruyama scheme]] applied to the Ito form.

## More General Langevin Equations

A particle of mass $m$ at position $X(t)$ with deterministic force $F(X)$, friction $\zeta$, and stochastic kicks $\xi(t)$:

$$
m\frac{d^{2}X(t)}{dt^{2}}=-\zeta\frac{dX}{dt}+F(X(t))+\xi(t).
$$

This is the workhorse of **molecular dynamics** simulations and many statistical-physics models. The deterministic force can come from a potential, $F=-dU/dX$.

## Pros and Cons

| Pros | Cons |
|---|---|
| Closer to Newton's law, intuitive | Singular noise term needs care in $\Delta t\to 0$ limit |
| Familiar from physics | Less rigorous than Ito calculus |
| Easy to extend (add more forces, multiple particles) | Cannot rigorously differentiate $W(t)$ |
