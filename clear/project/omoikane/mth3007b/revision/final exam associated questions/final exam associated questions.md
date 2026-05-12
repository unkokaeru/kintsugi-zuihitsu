# MTH3007b Final Exam - Question Types

> **Related**: [[../revision|Revision Overview]] / [[../mth3007b final exam cheat sheet|Cheat Sheet]]

---

Based on the Chapra & Canale exercise list from the PDF (session 11) and the module content, the following question types can be expected.

---

## Block A: ODEs

### 1st Order IVPs

- Implement explicit Euler for a given ODE; report $y(t_{\max})$ for two step sizes.
- Implement implicit Euler for a given ODE; derive the closed-form rearrangement algebraically.
- Implement Ralston's method; verify second-order convergence from error ratios.
- Implement RK4; compare accuracy with Euler for the same step size.
- Identify which method is appropriate for a stiff ODE; explain why explicit Euler fails.

### Error and Order

- Given error at $dt = h$, predict error at $dt = h/2$ for a method of specified order.
- Compute error ratios from a table of numerical results; infer the order of the method.
- State the LTE and GTE of a given method; explain the relationship between them.

### Algebraic Isolation

- Rearrange a linear or nonlinear equation to isolate $y$ or $y_{n+1}$ (including quadratic cases).
- Derive the implicit Euler update for a given linear ODE $\dot{y} = f(t, y)$.
- Derive the implicit trapezoid update for a given linear ODE.

### Stability

- State the stability condition for explicit Euler applied to $\dot{y} = -ay$.
- Derive or state the amplification factor $G$ for explicit/implicit Euler.
- Explain the Lax Equivalence Theorem and what it guarantees.
- State the definitions of: LTE, GTE, consistency, stability, convergence, order.

### Systems and Reductions

- Reduce a 2nd-order ODE to a 1st-order system; implement numerically.
- Implement a coupled 2D system (e.g. predator-prey); interpret the phase plane.
- Solve a spring-mass or coupled-compartment system using RK4.

### Numerical Integration

- Compute a definite integral by treating it as an ODE; implement forward Euler or RK4.
- Compare numerical integration result with the analytical value.

---

## Block B: PDEs

### FTCS (Heat Equation)

- Implement FTCS for the 1D heat equation with given parameters; check $r \leq 1/2$.
- Compute the maximum stable $dt$ given $\alpha$ and $dx$.
- Demonstrate instability when $r > 1/2$; describe what happens to the numerical solution.

### BTCS (Heat Equation)

- Set up the tridiagonal matrix $A$ for BTCS; implement the solve using `np.linalg.solve`.
- Verify that BTCS remains stable for $r \gg 1/2$.
- Explain why BTCS is unconditionally stable (amplification factor argument).

### Boundary Conditions

- Implement Dirichlet BCs in both FTCS and BTCS.
- Implement Neumann ($du/dx = 0$) BCs using the imaginary point method; modify the matrix $A$ accordingly.
- Describe the physical meaning of a Neumann BC (insulated boundary).

### Richardson Method

- State the Richardson (symmetric) scheme and its formal accuracy.
- Explain why it is unconditionally unstable despite higher formal order.

### 2D Laplace / Liebmann

- Implement Liebmann's method for a given 2D plate with Dirichlet BCs.
- Derive the finite difference discretisation of the 2D Laplace equation.
- Interpret the stopping criterion $\max|u^{\text{new}} - u^{\text{old}}| < \varepsilon$.

---

## Block C: Stochastic

### Monte Carlo Integration

- Estimate a 1D integral using Monte Carlo with $N$ samples; report estimate and standard error.
- State and verify the $O(N^{-1/2})$ error scaling.
- Explain why MC is advantageous for high-dimensional integrals.

### Wiener Process

- Implement a Wiener process simulation; plot multiple realisations.
- Verify that $\text{Var}[W(t)] = t$ from an ensemble.

### OU Process and First-Passage Time

- Implement the OU process using Euler-Maruyama; identify mean-reverting behaviour.
- Find the first-passage time to a threshold for a single realisation.
- Estimate the mean first-passage time over many walkers; choose $N$ for 2 significant figures.
- Compute the standard error and 95% confidence interval for $\langle\tau\rangle$.

### General Stochastic

- Write down the Euler-Maruyama update for a given Langevin SDE.
- Distinguish between a deterministic ODE and an SDE; identify the noise term.

---

## Likely Exam Format (Based on Module)

- Implement a given ODE solver from scratch (no framework code provided).
- Derive an algebraic rearrangement for an implicit method.
- Modify working code to change BCs or switch scheme.
- Interpret numerical output: read a table of errors and state the convergence order.
- Conceptual short answers: define a term, state a stability condition, explain a theorem.
