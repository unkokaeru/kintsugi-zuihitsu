# MTH3007B Lecture 8

This lecture closes the loop between the **diffusion equation** (a deterministic PDE for the average density) and **stochastic processes** (random walks of individual particles). We discretise a Dirac delta initial condition for the diffusion equation, generate Gaussian random numbers, define the **Wiener process** (Brownian motion) as a continuous-time random walk, simulate it numerically, and finally introduce the **Ornstein-Uhlenbeck process** - a Wiener process plus a restoring force.

> [!note] Course administration
> 13/05/2026: final in-class test. Completing all weekly exercises matters because you will reuse the code on the exam.

## Recap: Monte Carlo Integration with Error Estimate

For an integral $F=\int_{0}^{L}f(x)\,dx$ over a 1D interval of length $L$, with $N$ uniformly distributed sample points $X_{n}\in[0,L]$:

$$
F\approx L\,\langle f\rangle_{N}\;\pm\;L\sqrt{\tfrac{1}{N}\bigl(\langle f^{2}\rangle_{N}-\langle f\rangle_{N}^{2}\bigr)}.
$$

For $\int_{0}^{1}x^{2}\,dx=1/3$, with 10 samples, MC gives an estimate around 0.36 with a one-sigma error around $\pm 0.07$ - confirming both the accuracy and the slow $O(1/\sqrt{N})$ convergence (see [[Monte Carlo integration]]).

## The Diffusion Equation, Again

Returning to the 1D diffusion equation introduced in lecture 6:

$$
\frac{\partial u(t,x)}{\partial t}=\alpha\,\frac{\partial^{2}u(t,x)}{\partial x^{2}}.
$$

Physically: heat diffusion, or **ink** diffusing through a quiescent (motionless) medium. An ink drop placed in a jelly matrix at $t=0$ spreads progressively over hours (still recognisable at $t=1\text{h}$, broad and fading by $t=71\text{h}$). To model this we need a *peaked* initial condition.

### Dirac Delta as Initial Condition

The point-source initial condition for diffusion is

$$
u(0,x)=\delta(x-x_{M}),\qquad u(t,x_{L})=u(t,x_{R})=0,
$$

where $x_{M}$ is the centre of the domain. The **Dirac delta function** $\delta(x-x_{0})$ is a distribution: zero everywhere except at $x=x_{0}$, but with **finite area** equal to one:

$$
\int_{-\infty}^{\infty}\delta(x)\,dx=1.
$$

> [!important] Sifting property
> The defining property is that integration against $\delta$ "sifts out" a function value:
> $$
> \int_{-\infty}^{\infty}f(x)\,\delta(x-x_{0})\,dx=f(x_{0}).
> $$

**Intuitive derivation.** $\delta(x-x_{0})$ is zero away from $x_{0}$, so the integral can be confined to a tiny window $(x_{0}-\Delta, x_{0}+\Delta)$. There $f(x)\approx f(x_{0})$, a constant, which factors out. The remaining $\int_{x_{0}-\Delta}^{x_{0}+\Delta}\delta(x-x_{0})\,dx=1$ leaves $f(x_{0})$. ✓

### Discretising the Delta Function

In a finite-difference scheme, integrals become sums: $\int u(t,x)\,dx\approx \sum_{n}u(t,x_{n})\Delta x$. To represent the delta initial condition $u(0,x)=\delta(x-x_{M})$ on the spatial grid (with $x_{M}=x_{n}$ for some grid index $n$):

$$
\int u(0,x)\,dx=\int \delta(x-x_{M})\,dx=1\;\;\Longrightarrow\;\; u(x_{n})\,\Delta x=1.
$$

Hence

$$
\boxed{u(x_{n})=\frac{1}{\Delta x}\quad\text{at the centre grid point;}\quad u(x_{m})=0\text{ for all other }m.}
$$

The discrete spike has width $\Delta x$ and height $1/\Delta x$ - area exactly $1$, matching the true delta.

### Result: Diffusion of the Discrete Delta

Plugging this initial condition into the FTCS scheme from lecture 6 (with $\alpha=1$) and marching forward, the spike spreads into a Gaussian-shaped bump that broadens and flattens with time:

- $t=0$: tall narrow spike at $x_{M}$, height $1/\Delta x$.
- $t=0.2\,t_{\max}$: smooth bell, peak around $1.3$.
- $t=t_{\max}$: very broad, peak under $0.5$.

The total area $\int u\,dx$ remains $1$ (mass conservation) - this is the discrete analogue of the analytical solution $u(t,x)=(4\pi\alpha t)^{-1/2}\exp(-(x-x_{M})^{2}/4\alpha t)$.

## From Average to Single Particle: Stochastic Processes

The diffusion equation describes the **average** density of a huge population of particles ($\sim 10^{23}$ per gram). For heat diffusion that's enough - averaging is statistically meaningful at that scale. But what about a *single* particle, kicked around randomly by all the others?

Modelling individual particles requires a **random walk**, and its continuous-time limit is the **Wiener process** (Brownian motion). This connects directly to the financial-mathematics module - geometric Brownian motion is a building block of stock-price models.

## Gaussian-Distributed Random Numbers

A random variable $Z\sim\mathrm{Norm}(\mu,\sigma^{2})$ has a **normal (Gaussian) distribution** with mean $\mu$ and variance $\sigma^{2}$. The probability density is the bell curve

$$
\rho_{Z}(z)=\frac{1}{\sqrt{2\pi\sigma^{2}}}\exp\!\left(-\frac{(z-\mu)^{2}}{2\sigma^{2}}\right).
$$

> [!note] Linear transformation
> If $Z\sim\mathrm{Norm}(\mu,\sigma^{2})$ and $k>0$ is a constant, then $kZ\sim\mathrm{Norm}(k\mu,\,k^{2}\sigma^{2})$.
> So a unit-variance Gaussian, multiplied by $k$, has variance $k^{2}$. We use this throughout the lecture.

Generating Gaussian random numbers in Python:

```python runnable
import numpy as np
import matplotlib.pyplot as plt

mu, sigma = 0.0, 1.0
n = 10000
samples = np.random.normal(mu, sigma, n)

print(f"Sample mean:     {samples.mean():.3f}  (should be ~0)")
print(f"Sample std dev:  {samples.std():.3f}   (should be ~1)")
plt.hist(samples, 30, density=True)
plt.show()
```

The histogram shows the familiar bell shape, peaked at $0$, dropping to near-zero by $\pm 4\sigma$.

## Discrete Random Walk

A walker on a 2D grid takes one unit step in a random direction at each tick. After $N$ ticks the walker has, on average, displaced $O(\sqrt{N})$ - the typical $\sqrt{N}$ scaling of diffusive spreading.

## The Wiener Process (Brownian Motion)

The continuous-time limit of a random walk.

> [!important] Definition
> A **Wiener process** $W(t)$ (or **Brownian motion**) is a continuous time-dependent random process satisfying, for all $0\leq s<t$:
> 1. $W(0)=0$ - starts at the origin.
> 2. $W(t)-W(s)\sim\mathrm{Norm}(0,t-s)$ - increments are Gaussian with variance equal to the elapsed time.
> 3. $W(t)-W(s)$ is independent of $W(u)$ for all $u\leq s$ - increments are independent.

Setting $s=0$ gives $W(t)\sim\mathrm{Norm}(0,t)$. The probability density of finding the walker at position $x$ at time $t$ is

$$
\rho_{W}(x,t)=\frac{1}{\sqrt{2\pi t}}\exp\!\left(-\frac{x^{2}}{2t}\right).
$$

> [!example] The diffusion connection
> This $\rho_{W}(x,t)$ is **identical** to the solution of the 1D diffusion equation $\partial u/\partial t=\tfrac{1}{2}\partial^{2}u/\partial x^{2}$ (i.e. $\alpha=1/2$) with $u(0,x)=\delta(x)$ and $u(t,\pm\infty)=0$. The deterministic diffusion of a population *and* the probability density of a single random walker satisfy the same equation. This is why "diffusive spreading" and "random walk" are two sides of the same coin.

## Numerical Scheme for the Wiener Process

From property 2 of the Wiener-process definition: $W(t+\Delta t)-W(t)\sim\mathrm{Norm}(0,\Delta t)$. By the linear-transformation rule, $\sqrt{\Delta t}\,Z(t)$ has variance $\Delta t$ when $Z(t)\sim\mathrm{Norm}(0,1)$. So

$$
\boxed{W(t+\Delta t)=W(t)+\sqrt{\Delta t}\,Z(t),\qquad Z(t)\sim\mathrm{Norm}(0,1)\text{ independent at each step},}
$$

with $W(0)=0$. This is the **Euler-Maruyama scheme** applied to the trivial SDE $dW=dW$.

### Worked Example: 4-Step Walker

Take $\Delta t=0.1$ and Gaussian draws $Z_{0}=-0.1964$, $Z_{1}=-1.01471$, $Z_{2}=0.1479$, $Z_{3}=1.0803$:

$$
W_{0}=0,\quad W_{1}=W_{0}+\sqrt{0.1}(-0.1964)=-0.0621,
$$

$$
W_{2}=W_{1}+\sqrt{0.1}(-1.01471)=-0.3830,
$$

$$
W_{3}=W_{2}+\sqrt{0.1}(0.1479)=-0.3362,\quad W_{4}=W_{3}+\sqrt{0.1}(1.0803)=0.0054.
$$

Increment, accumulate, repeat.

### Many Walkers, One Diffusion

Simulating $100$ Brownian walkers from $W(0)=0$ to $t=10$ gives a fan of trajectories. By $t=10$ they fill an envelope of roughly $\pm\sqrt{t}=\pm 3.16$ standard deviations.

A histogram of $10\,000$ walkers at $t=10$ matches the analytical Gaussian $\rho_{W}(x,10)=(1/\sqrt{20\pi})\exp(-x^{2}/20)$ - confirming numerically that **the histogram of many independent Brownian walkers IS the solution of the diffusion equation** with delta initial condition.

```python runnable
import numpy as np

def simulate_brownian(number_of_walkers, time_step, number_of_steps, rng_seed=None):
    rng = np.random.default_rng(rng_seed)
    increments = rng.normal(0.0, np.sqrt(time_step), size=(number_of_walkers, number_of_steps))
    paths = np.zeros((number_of_walkers, number_of_steps + 1))
    paths[:, 1:] = np.cumsum(increments, axis=1)
    return paths

paths = simulate_brownian(number_of_walkers=10000, time_step=0.01, number_of_steps=1000, rng_seed=0)
print(paths[:, -1].std())  # ≈ sqrt(t_final) = sqrt(10) ≈ 3.16
```

### Extensions Beyond This Module

- **Geometric Brownian motion** $dS/S=\mu\,dt+\sigma\,dW$ - used for non-negative stock prices (financial mathematics module).
- **Diffusion Monte Carlo** - solves the many-electron Schrödinger equation by simulating walkers in configuration space.

Both build on the same Wiener-process scaffolding.

## The Ornstein-Uhlenbeck Process

A Wiener process drifts away from the origin without bound - its variance grows like $t$. Many physical systems (e.g. a damped particle in thermal equilibrium) instead **fluctuate around** a stationary value. The simplest such process is the **Ornstein-Uhlenbeck process**:

$$
\boxed{dV(t)=dW(t)-k\,V(t)\,dt,\qquad k>0.}
$$

The first term is the noise from the Wiener process; the second is a **restoring force** proportional to (and opposite) the current value of $V$. If $V$ is large and positive, $-kV\,dt$ pulls it back down; if large and negative, it gets pushed up. The walker no longer drifts to infinity.

> [!warning] Notation pitfall
> Tempting to write $dV/dt=-kV+dW/dt$. **Don't.** The Wiener process $W(t)$ is continuous but **nowhere differentiable** - $dW/dt$ does not exist as a classical derivative. The differential form $dV(t)=dW(t)-kV\,dt$ is a stochastic differential equation (SDE), interpreted as a shorthand for the Itô integral. We use the differential notation throughout.

### Numerical Scheme (Euler-Maruyama)

Discretising $dV=\sqrt{\Delta t}\,Z(t)-kV\,\Delta t$:

$$
\boxed{V(t+\Delta t)=(1-k\,\Delta t)\,V(t)+\sqrt{\Delta t}\,Z(t),\qquad Z(t)\sim\mathrm{Norm}(0,1).}
$$

Setting $k=0$ recovers the Wiener-process scheme. The OU scheme is just the Wiener scheme plus a damping factor $(1-k\Delta t)$ multiplying $V$.

### Comparison: Brownian vs Ornstein-Uhlenbeck

Plotted side-by-side over a long run, a Brownian walker drifts increasingly far from zero (variance $=t\to\infty$), while an OU walker fluctuates within a bounded envelope around zero. The restoring term keeps it confined.

```python runnable
import numpy as np

def simulate_ornstein_uhlenbeck(restoring_constant, number_of_steps, time_step, rng_seed=None):
    rng = np.random.default_rng(rng_seed)
    Z = rng.normal(0.0, 1.0, size=number_of_steps)
    V = np.zeros(number_of_steps + 1)
    sqrt_dt = np.sqrt(time_step)
    decay = 1.0 - restoring_constant * time_step
    for i in range(number_of_steps):
        V[i + 1] = decay * V[i] + sqrt_dt * Z[i]
    return V
```

### Stationary Distribution

Long-time behaviour of the OU process: $V(t)\sim\mathrm{Norm}(0,\,1/(2k))$. The variance saturates at $1/(2k)$ instead of growing without bound - this is the *fluctuation-dissipation* signature.

## Langevin Equation (Aside)

An alternative description of the OU process uses the **Langevin equation**:

$$
\frac{dV(t)}{dt}=-k V(t)+\xi(t),
$$

where $\xi(t)$ is a delta-correlated Gaussian noise: $\langle\xi(t)\xi(t')\rangle=2\delta(t-t')$. Numerically, $\xi(t)$ is replaced by $Z(t)/\sqrt{\Delta t}$ at each step.

A more general form models a single particle of mass $m$ at position $X(t)$ under a deterministic force $F(X)$ (e.g. from a potential $U(X)$, $F=-dU/dX$), a friction term, and stochastic kicks:

$$
m\frac{d^{2}X}{dt^{2}}=-\zeta\,V(t)+F(X(t))+\xi(t).
$$

This is the workhorse of **molecular dynamics** simulations.

> [!note]
> Pros of the Langevin form: closer to Newton's law $F=ma$, intuitive. Cons: requires care in the $\Delta t\to 0$ limit because of the singular noise term - the Itô SDE form $dV=-kV\,dt+dW$ is mathematically cleaner.

---

## Pre-Lecture Notes from [[mth3007b lecture notes 8.pdf]]

- **Dirac delta** $\delta(x-x_{0})$: zero except at $x_{0}$, area $1$, sifting property $\int f(x)\delta(x-x_{0})\,dx=f(x_{0})$.
- **Discretising delta as initial condition**: at the central grid point, set $u(x_{n})=1/\Delta x$; zero elsewhere. Total area on the grid is $1\cdot\Delta x/\Delta x=1$. ✓
- **Diffusion of a delta**: Gaussian profile $u(t,x)=(4\pi\alpha t)^{-1/2}e^{-(x-x_{M})^{2}/4\alpha t}$ - broadens with $\sqrt{t}$.
- **Single particle vs. average**: diffusion equation models the *average* of $\sim 10^{23}$ particles per gram; the random-walk picture models one particle.
- **Gaussian random variable** $Z\sim\mathrm{Norm}(\mu,\sigma^{2})$: bell curve with mean $\mu$, variance $\sigma^{2}$. Linear scaling rule: $kZ\sim\mathrm{Norm}(k\mu,k^{2}\sigma^{2})$.
- **Wiener process** $W(t)$: continuous random walk with $W(0)=0$, $W(t)-W(s)\sim\mathrm{Norm}(0,t-s)$, independent increments. Probability density $\rho_{W}(x,t)=(2\pi t)^{-1/2}\exp(-x^{2}/2t)$ - same as diffusion equation with $\alpha=1/2$ and delta IC.
- **Numerical scheme** (Euler-Maruyama for $dW$): $W(t+\Delta t)=W(t)+\sqrt{\Delta t}\,Z(t)$.
- **Histogram of many walkers $=$ solution of diffusion equation** (visually verifiable to $\sim 10^{4}$ walkers).
- **Ornstein-Uhlenbeck process**: $dV=dW-kV\,dt$. Numerical scheme: $V(t+\Delta t)=(1-k\Delta t)V(t)+\sqrt{\Delta t}\,Z(t)$. Recovers Wiener for $k=0$. The $-kV\,dt$ term is a restoring force keeping $V$ bounded; stationary variance $1/(2k)$.
- **Langevin form**: $dV/dt=-kV+\xi(t)$ with $\langle\xi(t)\xi(t')\rangle=2\delta(t-t')$; numerically replace $\xi$ by $Z/\sqrt{\Delta t}$.
- **Next lecture**: applications, more SDEs, and (likely) implicit-scheme variations for both the deterministic diffusion equation and the SDE side.
