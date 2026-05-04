# MTH3007b Final Exam Cheat Sheet

Complete formula and method reference for the final in-class test. Ordered by course chapter.

## 1. ODE Schemes

For $\dot{y}=g(t,y)$, step from $y_{i}$ at $t_{i}$ to $y_{i+1}$ at $t_{i+1}=t_{i}+\Delta t$.

| Method | Update | Order | Stability |
|---|---|---|---|
| [[Explicit Euler method]] | $y_{i+1}=y_{i}+\Delta t\,g(t_{i},y_{i})$ | 1 | Conditional |
| [[Implicit Euler method]] | $y_{i+1}=y_{i}+\Delta t\,g(t_{i+1},y_{i+1})$ | 1 | Unconditional |
| [[Midpoint method]] | $y_{i+1}=y_{i}+\Delta t\,g(t_{i}+\Delta t/2,\,y_{i}+\frac{\Delta t}{2}g(t_{i},y_{i}))$ | 2 | Conditional |
| [[Ralston method]] | $y_{i+1}=y_{i}+\Delta t(\tfrac{1}{4}k_{1}+\tfrac{3}{4}k_{2})$, $k_{1}=g(t_{i},y_{i})$, $k_{2}=g(t_{i}+\frac{2\Delta t}{3},y_{i}+\frac{2\Delta t}{3}k_{1})$ | 2 | Conditional |
| [[Implicit Trapezoid Method]] | $y_{i+1}=y_{i}+\frac{\Delta t}{2}(g(t_{i},y_{i})+g(t_{i+1},y_{i+1}))$ | 2 | Unconditional (A-stable) |
| [[Fourth order Runge-Kutta]] | $y_{i+1}=y_{i}+\frac{\Delta t}{6}(k_{1}+2k_{2}+2k_{3}+k_{4})$ - see RK4 note for stages | 4 | Conditional, large region |

**[[Stability of an ODE]]:** $\dot{y}=\lambda y$, $\lambda<0$. Method amplification factor $R(\lambda\Delta t)$ must satisfy $|R|\leq 1$.

- Forward Euler: $R=1+\lambda\Delta t$ - stable for $\lambda\Delta t\in[-2,0]$.
- Backward Euler / Trapezoid: $|R|\leq 1$ for all $\lambda\Delta t<0$ - A-stable.

**[[Order of a method]] / [[Order of convergence]]:** A method of order $p$ has [[Global truncation error]] $O(\Delta t^{p})$. Halving $\Delta t$ reduces error by $2^{p}$.

**Higher-order ODE reduction.** $y^{(n)}=g(t,y,y',\ldots,y^{(n-1)})$ becomes a system of $n$ first-order equations via $z_{m}=y^{(m-1)}$.

## 2. PDE Schemes (1D Diffusion Equation)

[[Heat equation]] in 1D: $\partial u/\partial t=\alpha\,\partial^{2}u/\partial x^{2}$, $r=\alpha\Delta t/\Delta x^{2}$.

**Symmetric second-derivative stencil:** $\frac{\partial^{2}u}{\partial x^{2}}\approx \frac{u_{n+1}-2u_{n}+u_{n-1}}{\Delta x^{2}}$.

| Scheme | Update | Stability | GTE |
|---|---|---|---|
| [[FTCS scheme]] | $u_{i+1,n}=(1-2r)u_{i,n}+r(u_{i,n+1}+u_{i,n-1})$ | $r\leq 1/2$ | $O(\Delta t+\Delta x^{2})$ |
| [[BTCS scheme]] | $-cu_{i+1,n-1}+(1+2c)u_{i+1,n}-cu_{i+1,n+1}=u_{i,n}$, $c=\alpha\Delta t/\Delta x^{2}$ | Unconditional | $O(\Delta t+\Delta x^{2})$ |
| [[Crank-Nicolson scheme]] | Average of FTCS and BTCS | Unconditional | $O(\Delta t^{2}+\Delta x^{2})$ |

**[[Boundary conditions]]:**

- Dirichlet $u\big|_{\partial\Omega}=f_{2}$: pin grid values.
- Neumann $\partial u/\partial \mathbf{n}\big|_{\partial\Omega}=f_{3}$: imaginary point $u_{-1}=u_{1}-2\Delta x\,d$, substitute into boundary row → $-2u_{0}+2u_{1}=2\Delta x\,d$. Insulation $\Rightarrow d=0\Rightarrow u_{0}=u_{1}$.

**[[Lax Equivalence Theorem]]:** consistent + stable $\Leftrightarrow$ convergent.

**[[von Neumann stability]] technique:** sub $u_{i,n}=G^{i}e^{ikn\Delta x}$ into the scheme, derive $G(k)$, demand $|G|\leq 1$.

**Steady state ($\partial u/\partial t=0$):** Laplace equation $\nabla^{2}u=0$; with source, Poisson $\nabla^{2}u=g$. Tridiagonal $\mathbf{A}\mathbf{u}=\mathbf{g}$ in 1D, solve once.

## 3. Stochastic Methods

### Random Numbers

- Uniform: `np.random.uniform(a, b, n)` - samples from $[a,b]$.
- Gaussian: `np.random.normal(mu, sigma, n)` - samples from $\mathrm{Norm}(\mu,\sigma^{2})$.
- Linear scaling: $kZ\sim\mathrm{Norm}(k\mu,\,k^{2}\sigma^{2})$.

### [[Monte Carlo integration]]

$$
F=\int_{a}^{b}f(x)\,dx\;\approx\;L\,\langle f\rangle_{N}\;\pm\;L\sqrt{\tfrac{1}{N}(\langle f^{2}\rangle_{N}-\langle f\rangle_{N}^{2})}.
$$

In $D$ dimensions, $L\to V$ (hypervolume). Error $O(N^{-1/2})$ - independent of $D$. Beats Euler for $D>2$, beats RK4 for $D>8$.

### [[Wiener process]] (Brownian motion)

$W(0)=0$; $W(t)-W(s)\sim\mathrm{Norm}(0,t-s)$; independent increments.

PDF: $\rho_{W}(x,t)=(2\pi t)^{-1/2}\exp(-x^{2}/2t)$ - same as diffusion equation with $\alpha=1/2$, $u(0,x)=\delta(x)$.

[[Euler-Maruyama scheme]]: $W(t+\Delta t)=W(t)+\sqrt{\Delta t}\,Z(t)$, $Z\sim\mathrm{Norm}(0,1)$.

### [[Ornstein-Uhlenbeck process]]

SDE: $dV=-kV\,dt+dW$, $k>0$.

[[Euler-Maruyama scheme]]: $V(t+\Delta t)=(1-k\Delta t)V(t)+\sqrt{\Delta t}\,Z(t)$.

Equilibrium: $V(\infty)\sim\mathrm{Norm}(0,1/(2k))$.

[[Langevin equation]] form: $dV/dt=-kV+\xi(t)$ with $\langle\xi(t)\xi(t')\rangle=2\delta(t-t')$. Numerically $\xi\to Z/\sqrt{\Delta t}$.

### Dirac Delta Initial Condition

For diffusion with $u(0,x)=\delta(x-x_{M})$, discretise as $u(x_{n}=x_{M})=1/\Delta x$ at the central grid point, $0$ elsewhere - area is $1$ on the grid.

### [[First-passage time]]

Numerically: simulate the SDE, stop when $V(t)\geq b$, record $t$. Mean over many walkers ($\sim 10^{4}$) for 2-significant-figure accuracy. Distribution is heavy-tailed when threshold is several equilibrium-standard-deviations from the start.

## Common Tricks

- **Halving $\Delta x$ in FTCS** requires $\Delta t\to \Delta t/4$, not $\Delta t/2$.
- **Tridiagonal matrices** can be solved in $O(N)$ by the Thomas algorithm - `scipy.linalg.lapack.dgtsv`.
- **Initial conditions for the diffusion equation**: pin the initial profile $f_{0}(x)$, including any boundary values, before the first time step.
- **MC error in 4D**: same recipe as 1D, just sample 4-component vectors. Volume is the product of side lengths.
- **OU equilibrium variance** $1/(2k)$ - useful for calibrating threshold position relative to typical excursion.
