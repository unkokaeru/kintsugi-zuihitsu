# MTH3007b Lecture 8

> [!quote] Me, in the lecture
> zzzzz...

This session continues from lecture 7 by applying both threads - the diffusion equation and stochastic processes - to more interesting setups. We look at a singular initial condition for the diffusion equation and introduce the first-passage time problem for the OU process.

## Diffusion with a Dirac Delta Initial Condition

Instead of a smooth initial profile, suppose all the "heat" (or probability mass) starts concentrated at a single point $x = x_M$ at $t = 0$. The initial condition is then a **[[Dirac delta function]]**:

$$
u(x, 0) = \delta(x - x_M)
$$

### The Dirac Delta Function

The **[[Dirac delta function]]** $\delta(x - x_M)$ is defined by two properties:

- It is zero everywhere except at $x = x_M$, where it is a spike.
- Its integral over any interval containing $x_M$ equals 1:

$$
\int_{-\infty}^{\infty} \delta(x - x_M)\,dx = 1
$$

The **[[Dirac delta function|sifting property]]** states that for any smooth function $f$:

$$
\int_{-\infty}^{\infty} f(x)\,\delta(x - x_M)\,dx = f(x_M)
$$

### Discrete Approximation

On a grid with spacing $\Delta x$, the Dirac delta is approximated by setting the grid value at $x_M$ to $1/\Delta x$ and all other values to zero:

$$
u[x_M] = \frac{1}{\Delta x}, \qquad u[x_i] = 0 \text{ for } x_i \neq x_M
$$

This ensures the discrete sum approximates the integral: $\sum_i u[x_i]\,\Delta x = 1$.

### Analytical Solution

The analytical solution to the diffusion equation with a delta function initial condition is a **Gaussian**:

$$
\rho(x, t) = \frac{1}{\sqrt{4\pi\alpha t}}\,\exp\!\left(-\frac{x^2}{4\alpha t}\right)
$$

Running FTCS with the discrete delta IC recovers this spreading Gaussian numerically, making it a good verification test for the code.

## Stochastic Processes: Continued

The following topics continue from lecture 7. Recall that a **a random variable** takes values drawn from a probability distribution, and that the Wiener and OU processes are built from Gaussian increments $Z \sim \mathcal{N}(0,1)$.

### Recap: Gaussian Random Numbers

If $X \sim \mathcal{N}(0,1)$, then $kX \sim \mathcal{N}(0, k^2)$. In Python: `np.random.normal(mu, sigma, N)`.

### Recap: Wiener and OU

- **[[Wiener process]]**: $W(t+\Delta t) = W(t) + \sqrt{\Delta t}\,Z$
- **[[Ornstein-Uhlenbeck process]]**: $V(t+\Delta t) = (1-k\Delta t)\,V(t) + \sqrt{\Delta t}\,Z$

## First-Passage Time

The **[[First-passage time]]** is the time at which a stochastic process first reaches or exceeds a threshold $b$. For the OU process $V(t)$:

1. Run the OU simulation with the standard update: $V(t+\Delta t) = (1-k\Delta t)\,V(t) + \sqrt{\Delta t}\,Z$.
2. At each step, check whether $V(t) \geq b$.
3. When the condition is met, record the elapsed time $T$ and stop that simulation.
4. Repeat for many independent realisations (walkers).
5. Compute the average first-passage time $\langle T \rangle$ from the ensemble.

This is purely a simulation exercise - run the process, apply the stopping criterion, and average the results.

---

## Pre-Lecture Notes from [[mth3007b lecture notes 8.pdf|University Notes]]

- Dirac delta IC: spike at $x_M$ with unit area; discrete approximation $u[x_M]=1/\Delta x$, rest zero.
- Sifting property: $\int f(x)\delta(x-x_M)\,dx = f(x_M)$.
- Analytical solution with delta IC is a Gaussian: $\rho = (4\pi\alpha t)^{-1/2}\exp(-x^2/(4\alpha t))$.
- Running FTCS with the delta IC numerically reproduces this Gaussian spread.
- First-passage time: run OU, stop when $V\geq b$, record time; average over many walkers.
- Next session: FTCS stability analysis and the implicit BTCS scheme.
