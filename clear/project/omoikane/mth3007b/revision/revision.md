# MTH3007b Revision Overview

> **Related**: [[mth3007b final exam cheat sheet|Cheat Sheet]] / [[final exam associated questions/final exam associated questions|Exam Question Types]]

---

## Module Structure

MTH3007b *Numerical Methods* covers three main blocks, each building on the last.

---

## Block A: Ordinary Differential Equations (Sessions 1-4)

**Core idea:** Approximate the derivative $dy/dt \approx \Delta y / \Delta t$ on a discrete time grid. This turns an ODE into an algebraic recurrence that a computer can step through.

**Key concepts:**

- **[[Local truncation error]]** (LTE): error in one step assuming the previous value is exact.
- **[[Global truncation error]]** (GTE): accumulated error over all steps. GTE is one order lower in $dt$ than LTE (because there are $\sim 1/dt$ steps).
- **[[Order of a method]]**: GTE $= O(dt^p)$. Doubling $N$ (halving $dt$) reduces error by $2^p$.
- **[[Explicit methods]]**: update $y_{n+1}$ directly from $y_n$. Simple but conditionally stable.
- **[[Implicit methods]]**: update involves $y_{n+1}$ on both sides; must be solved. Unconditionally stable.
- **[[Stability]]**: method is stable if small perturbations do not grow. Characterised by the amplification factor $G$ for the test equation $\dot{y} = \lambda y$.
- **[[Lax Equivalence Theorem]]**: consistency + stability $\iff$ convergence (for linear problems).

**Methods covered:**

| Method | Order | Type |
|--------|-------|------|
| Explicit Euler | 1 | Explicit |
| Implicit Euler | 1 | Implicit |
| Ralston | 2 | Explicit |
| Midpoint | 2 | Explicit |
| Implicit Trapezoid | 2 | Implicit |
| RK4 | 4 | Explicit |

**Systems and reductions:**

- A $p$-th order ODE reduces to a system of $p$ first-order ODEs by introducing intermediate derivatives as new state variables.
- Predator-prey (Lotka-Volterra) as a worked example of a coupled 2D system.

---

## Block B: Partial Differential Equations (Sessions 5-6, 9-10)

**Core idea:** Discretise both space and time. The spatial second derivative $\partial^2 u/\partial x^2$ is approximated by the centred finite difference $\bigl(u_{i+1} - 2u_i + u_{i-1}\bigr)/dx^2$.

**Key concepts:**

- **[[FTCS]]** (Forward Time, Centred Space): explicit, simple, but requires $r = \alpha\,dt/dx^2 \leq 1/2$ for stability.
- **[[BTCS]]** (Backward Time, Centred Space): implicit, unconditionally stable, requires solving a tridiagonal linear system at each step.
- **[[Richardson method]]**: symmetric (central) time difference - unconditionally unstable despite higher formal accuracy. Not used in practice.
- **[[Dirichlet BC]]**: fix $u$ at boundary.
- **[[Neumann BC]]**: fix $du/dx$ at boundary. Implemented via the imaginary point method.
- **[[2D Laplace equation]]**: steady-state problem. Solved by Liebmann iteration (Gauss-Seidel) to convergence.
- **[[Lax Equivalence Theorem]]**: applies to PDEs too - consistency + stability gives convergence.

---

## Block C: Stochastic Methods (Sessions 7-8)

**Core idea:** Some physical systems are inherently random. Monte Carlo methods use random sampling to estimate integrals. Stochastic ODEs (SDEs) extend ODE solvers to include noise terms.

**Key concepts:**

- **[[Monte Carlo integration]]**: sample $f$ at $N$ random points, average. Error $\propto N^{-1/2}$ regardless of dimension.
- **[[Wiener process]]** $W(t)$: the fundamental stochastic process. Increments are independent Gaussian with variance $dt$. Update: $W_{n+1} = W_n + \sqrt{dt}\,\xi_n$.
- **[[Ornstein-Uhlenbeck process]]**: mean-reverting SDE, $dV = -kV\,dt + dW$. Euler-Maruyama: $V_{n+1} = (1-k\,dt)V_n + \sqrt{dt}\,\xi_n$.
- **[[Euler-Maruyama method]]**: the stochastic analogue of explicit Euler. For an SDE $dX = f(X)\,dt + \sigma\,dW$: $X_{n+1} = X_n + f(X_n)\,dt + \sigma\sqrt{dt}\,\xi_n$.
- **[[First-passage time]]**: stop the simulation when a threshold is crossed; average $\tau$ over many walkers.

**Note from the PDF:** Stochastic ODEs are not included in the Chapra & Canale exercise list for the revision session but could be asked in the test.

---

## Revision Strategy

1. **ODEs:** Be able to write out any of the six methods from memory. Know how to rearrange implicit methods algebraically for linear ODEs. Know the amplification factor and stability condition for explicit/implicit Euler.
2. **Systems:** Know how to reduce a 2nd-order ODE to a system. Be able to code a vector-valued $g$ and plug it into any scalar step function.
3. **PDEs:** Know FTCS and BTCS update rules. Know the stability condition $r \leq 1/2$ for FTCS. Know how to set up the BTCS tridiagonal matrix $A$ including BCs.
4. **Liebmann:** Know the update formula and the stopping criterion.
5. **Monte Carlo:** Know the estimator formula and error formula. Know the $O(N^{-1/2})$ scaling.
6. **Stochastic:** Know Euler-Maruyama for OU. Know the first-passage time algorithm.
