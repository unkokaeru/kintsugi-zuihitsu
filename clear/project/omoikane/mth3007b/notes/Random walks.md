# Random walks

A discrete-time, discrete-state stochastic process where at each step the walker moves a random direction. The **continuum limit** of an unbiased random walk with step size $\to 0$ and step time $\to 0$ (with the right scaling) is the [[Wiener process]].

## Discrete 1D Random Walk

At each tick $i=1,2,\ldots$, the walker moves $+1$ or $-1$ with equal probability:

$$
X_{i+1}=X_{i}+\xi_{i},\qquad \xi_{i}\in\{-1,+1\}\text{ with prob. }1/2.
$$

After $N$ steps, $X_{N}=\sum_{i=1}^{N}\xi_{i}$, so:
- $\mathbb{E}[X_{N}]=0$.
- $\mathrm{Var}(X_{N})=N$.
- Typical excursion: $|X_{N}|\sim\sqrt{N}$.

## Higher-Dimensional Walks

Take a step in one of $2D$ axis directions in $D$ dimensions, or sample a step from any zero-mean distribution. The mean-squared displacement $\mathbb{E}[|X_{N}|^{2}]$ still grows linearly in $N$ in any dimension - diffusive scaling.

## Continuum Limit (Wiener Process)

Take steps of size $\Delta x$ every $\Delta t$, with $\Delta x^{2}/\Delta t=2D$ fixed, and let $\Delta t\to 0$. The resulting process is a [[Wiener process]] with diffusion constant $D$. Equivalently, the histogram of many such walkers solves the [[Heat equation]] $\partial \rho/\partial t=D\,\partial^{2}\rho/\partial x^{2}$.

## Recurrence

In 1D and 2D, an unbiased random walk is **recurrent** - it returns to the origin infinitely often with probability 1. In 3D and higher it is **transient** - the walker eventually wanders off and returns only finitely many times. ("A drunkard always finds his way home, but a drunken bird may not." - Pólya, 1921.)

## Applications

- Polymer models (each monomer is a step).
- Gambler's ruin in probability.
- Diffusion of particles, ions, populations.
- PageRank and other graph-walking algorithms.
- [[First-passage time]] problems.

## In This Module

A random walk is the discrete predecessor of the continuous-time [[Wiener process]]. The numerical scheme

$$
W(t+\Delta t)=W(t)+\sqrt{\Delta t}\,Z(t),\qquad Z(t)\sim\mathrm{Norm}(0,1),
$$

is essentially a random walk with Gaussian step sizes, scaled so the resulting process matches the Wiener-process variance growth $\mathrm{Var}=t$.
