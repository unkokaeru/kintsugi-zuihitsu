# MTH3007B Lecture 9

This is the final lecture on PDEs. We diagnose the **stability constraint** of the FTCS explicit scheme - proving the famous $\Delta t\leq \Delta x^{2}/(2\alpha)$ rule by examining the update coefficients - then derive the **implicit (BTCS) scheme** which is unconditionally stable but requires solving a tridiagonal linear system at each time step. We close with how to handle **Neumann boundary conditions** (derivative prescribed) using imaginary points.

> [!note] Course administration
> 13/05/2026: in-class final test.

## Recap: 1D Diffusion + FTCS

The 1D diffusion equation
$$
\frac{\partial u(t,x)}{\partial t}=\alpha\,\frac{\partial^{2}u(t,x)}{\partial x^{2}}
$$
with Dirichlet boundary conditions $u(t,x_{L})=u_{L}$, $u(t,x_{R})=u_{R}$ and initial profile $u(0,x)=f_{0}(x)$, discretised on a $\Delta x\times\Delta t$ grid via the **FTCS** ([[Explicit Euler method]] in time, central in space) scheme is

$$
u_{i+1,n}=u_{i,n}+\Delta t\cdot \alpha\frac{u_{i,n+1}-2u_{i,n}+u_{i,n-1}}{\Delta x^{2}}.
$$

Defining $r=\alpha\,\Delta t/\Delta x^{2}$:

$$
\boxed{u_{i+1,n}=(1-2r)\,u_{i,n}+r\bigl(u_{i,n+1}+u_{i,n-1}\bigr).}
$$

## Refinement Doesn't Always Help - Halving $\Delta x$ Wrecks the FTCS Solution

A natural instinct: refine $\Delta x$ and $\Delta t$ together by a factor of 2, expect a more accurate answer. Tested numerically with the heat equation $u(t,x_{L})=100$, $u(t,x_{R})=30$, $\alpha=0.735$, $u(0,x)=0$:

| $\Delta x$ | $\Delta t$ | Result |
|---|---|---|
| 2.0 | 0.2 | Coarse but stable; smooth profile. |
| 1.0 | 0.1 | Smoother. |
| 0.5 | 0.05 | Better. |
| 0.25 | 0.025 | Better still. |
| **0.125** | **0.0125** | **Catastrophic blow-up - values of order $10^{212}$, oscillating sign every grid point.** |

Decreasing both step sizes by a factor of 2 each time, the scheme suddenly **goes unstable**. Why?

## Stability Criterion for FTCS

> [!important] FTCS stability constraint
> The explicit FTCS scheme for the 1D diffusion equation is stable and convergent if and only if
> $$
> \boxed{\Delta t\;\leq\;\frac{\Delta x^{2}}{2\alpha}\quad\Longleftrightarrow\quad \Delta x\;\geq\;\sqrt{\frac{2\,\Delta t}{\alpha}}.}
> $$

**Why?** Look at the coefficient of $u_{i,n}$ in the update: $1-2r=1-2\alpha\Delta t/\Delta x^{2}$. For the scheme to not amplify errors, this must satisfy $|1-2r|\leq 1$, i.e. $0\leq 2r\leq 2$, i.e. $r\leq 1$. The full proof (Hoffman 2001) uses Fourier-mode analysis (von Neumann stability) and tightens this to $r\leq 1/2$.

> [!warning] Not a linear refinement
> If you halve $\Delta x$, you must reduce $\Delta t$ by **a factor of $4$** (not $2$) to preserve stability. The relation is $\Delta t\sim \Delta x^{2}$, so reducing $\Delta x$ to $\Delta x/2$ requires $\Delta t\to \Delta t/4$.

This explains the table above: $\Delta x:\Delta t$ ratios were $2:0.2\Rightarrow r=0.0368$, $1:0.1\Rightarrow r=0.0735$, ... $0.25:0.025\Rightarrow r=0.294$, $0.125:0.0125\Rightarrow r=0.588>0.5$. The last one **violates** the stability criterion - and the solution explodes.

> [!note]
> Conversely, the explicit method can be stable for very large $\Delta x$ and modest $\Delta t$ - e.g. $\Delta x=5,\Delta t=6$ gives $r=0.176<0.5$, so it's stable, just inaccurate (a Lego version of the answer).

## The Implicit (BTCS) Scheme

Idea: replace the **forward** difference for $\partial u/\partial t$ with a **backward** difference, i.e. evaluate the spatial second derivative at the *new* time level $t_{i+1}$ instead of the current one.

### Derivation

The forward (explicit) discretisation was

$$
\frac{\partial u(t,x)}{\partial t}\approx \frac{u_{i+1,n}-u_{i,n}}{\Delta t}.
$$

Use the backward difference instead:

$$
\frac{\partial u(t,x)}{\partial t}\approx \frac{u_{i,n}-u_{i-1,n}}{\Delta t}.
$$

The PDE becomes (at time level $i$):

$$
\frac{u_{i,n}-u_{i-1,n}}{\Delta t}\approx \alpha\frac{u_{i,n+1}-2u_{i,n}+u_{i,n-1}}{\Delta x^{2}},
$$

or equivalently, shifting the time index up by $1$:

$$
\boxed{\frac{u_{i+1,n}-u_{i,n}}{\Delta t}\approx \alpha\frac{u_{i+1,n+1}-2u_{i+1,n}+u_{i+1,n-1}}{\Delta x^{2}}.}
$$

This is **BTCS** - *Backward Time, Central Space*.

> [!note] Stencil comparison
> - **Explicit (FTCS)**: $u_{i+1,n}$ at the new time depends solely on three neighbours at the old time. One step, no system to solve.
> - **Implicit (BTCS)**: relates three unknowns $u_{i+1,n-1}, u_{i+1,n}, u_{i+1,n+1}$ at the new time to *one* known $u_{i,n}$ at the old time. We can't isolate $u_{i+1,n}$ - must solve a system simultaneously.

### Solving Implicit: Tridiagonal System

Let $c=\alpha\,\Delta t/\Delta x^{2}$. Rearranging (unknowns left, knowns right):

$$
-c\,u_{i+1,n-1}+(1+2c)u_{i+1,n}-c\,u_{i+1,n+1}=u_{i,n}.
$$

Combined with Dirichlet BCs $u_{i+1,0}=u_{L}$ and $u_{i+1,N_{x}-1}=u_{R}$, this is one equation per spatial grid point - packaged as a tridiagonal system $\mathbf{A}\,\mathbf{u}_{i+1}=\mathbf{u}_{i}$ where

$$
\mathbf{A}=\begin{pmatrix}1 & 0 & & & & \\ -c & 1+2c & -c & & & \\ & -c & 1+2c & -c & & \\ & & \ddots & \ddots & \ddots & \\ & & & -c & 1+2c & -c \\ & & & & 0 & 1\end{pmatrix},
$$

and $\mathbf{u}_{i}=(u_{L},\,u_{i,1},\,u_{i,2},\,\ldots,\,u_{i,N_{x}-2},\,u_{R})^{T}$ (boundary rows pinned).

### Time-Stepping Algorithm

The matrix $\mathbf{A}$ is constant - invert it (or factor it) once, then march in time:

$$
\mathbf{u}_{0}\;\to\;\mathbf{u}_{1}=\mathbf{A}^{-1}\mathbf{u}_{0}\;\to\;\mathbf{u}_{2}=\mathbf{A}^{-1}\mathbf{u}_{1}\;\to\;\cdots
$$

This is the same machinery as the **1D Poisson** boundary-value problem from lecture 6 - the only new feature is that we re-solve a system *at every time step*.

### Solving the Linear System: Gaussian Elimination, Inversion, or Thomas

**Gaussian elimination.** Standard $O(N^{3})$ procedure. A self-contained Python implementation:

```python runnable
import numpy as np

def gaussian_elimination(augmented_matrix):
    """
    Solves Ax = b given the augmented matrix [A | b] via in-place elimination + back-substitution.
    """
    rows, cols = augmented_matrix.shape

    for pivot_index in range(rows - 1):
        for elimination_row in range(pivot_index + 1, rows):
            multiplier = augmented_matrix[elimination_row, pivot_index] / augmented_matrix[pivot_index, pivot_index]
            augmented_matrix[elimination_row, pivot_index:] -= multiplier * augmented_matrix[pivot_index, pivot_index:]

    solution = np.zeros(rows)
    for i in range(rows - 1, -1, -1):
        solution[i] = (augmented_matrix[i, -1] - np.dot(augmented_matrix[i, i+1:cols-1], solution[i+1:rows])) / augmented_matrix[i, i]
    return solution
```

**Library matrix inversion.** Easier to read but $O(N^{3})$:

```python runnable
import numpy as np

# Set up a small example tridiagonal A (Nx = 5) for illustration.
Nx = 5
c = 0.4
A = np.zeros((Nx, Nx))
A[0, 0] = 1.0
A[-1, -1] = 1.0
for n in range(1, Nx - 1):
    A[n, n - 1] = -c
    A[n, n] = 1.0 + 2.0 * c
    A[n, n + 1] = -c

A_inv = np.linalg.inv(A)
u_now = np.array([100.0, 0.0, 0.0, 0.0, 30.0])
u_next = A_inv @ u_now
print(u_next)
```

**Thomas algorithm.** Specialised for tridiagonal $\mathbf{A}$, runs in $O(N)$ instead of $O(N^{3})$ - exploits the all-zeros structure outside the three diagonals. Available in SciPy as `scipy.linalg.lapack.dgtsv`. We won't derive it; see Chapra et al. §11.1.1 or the [Wikipedia tridiagonal-matrix algorithm](https://en.wikipedia.org/wiki/Tridiagonal_matrix_algorithm) page for details.

### BTCS Stability and Accuracy

> [!important]
> The BTCS scheme is **unconditionally stable** - any $\Delta t$ works, no constraint relating $\Delta t$ and $\Delta x$. This is the headline win.

Demonstrated empirically: with $\Delta t=1, \Delta x=1$ (so $r=0.735>0.5$, FTCS would explode) the implicit scheme remains smooth and physically sensible.

> [!warning] Trade-off - accuracy
> The BTCS global truncation error is $O(\Delta t+\Delta x^{2})$. That is, **second order in space but only first order in time** - using a larger $\Delta t$ keeps the scheme stable but loses temporal accuracy. **[[Crank-Nicolson scheme]]** (averaging FTCS and BTCS) is the usual upgrade - second-order in both space and time, still unconditionally stable.

## Neumann Boundary Conditions

So far all examples used **Dirichlet** boundaries (value of $u$ pinned). What if the boundary condition prescribes the **derivative** of $u$ instead - for instance, an insulated wall $\partial u/\partial \mathbf{n}=0$, or a prescribed flux $\partial u/\partial \mathbf{n}=d$?

### Setup

Take the simple ODE $u''(x)=0$ as a stand-in. The standard interior finite-difference equation reads

$$
\frac{u_{n+1}-2u_{n}+u_{n-1}}{\Delta x^{2}}\approx 0.
$$

Now suppose the left-boundary condition is

$$
\frac{du}{dx}\bigg|_{x=x_{L}}=d.
$$

A central-difference approximation centred on $x_{0}=x_{L}$ would be

$$
\frac{u_{1}-u_{-1}}{2\Delta x}=d,
$$

introducing the **imaginary point** $u_{-1}$ at $x=x_{L}-\Delta x$ - outside the physical domain.

### Eliminating the Imaginary Point

Solve for $u_{-1}$ from the BC:

$$
u_{-1}=u_{1}-2\Delta x\,d.
$$

Substitute into the interior equation centred at $n=0$ (which would normally use $u_{-1}$):

$$
\frac{u_{1}-2u_{0}+u_{-1}}{\Delta x^{2}}\approx 0\;\;\Longrightarrow\;\; \frac{2u_{1}-2u_{0}-2\Delta x\,d}{\Delta x^{2}}\approx 0,
$$

which simplifies to

$$
\boxed{-2u_{0}+2u_{1}=2\Delta x\,d.}
$$

This replaces the boundary equation $u_{0}=u_{L}$ from the Dirichlet case. The system of equations becomes:

$$
\begin{cases}-2u_{0}+2u_{1}=2\Delta x\,d, & \text{(Neumann at }x_{L}\text{)}\\u_{n+1}-2u_{n}+u_{n-1}=0\quad\text{for }n=1,\ldots,N-2,\\u_{N-1}=u_{R}. & \text{(Dirichlet at }x_{R}\text{)}\end{cases}
$$

Same matrix machinery as before - just a modified first row. Solve via Gaussian elimination / matrix inversion / Thomas.

> [!note]
> An **insulated** boundary corresponds to $d=0$ (no flux through the wall). In that case the first equation simplifies to $-2u_{0}+2u_{1}=0$, i.e. $u_{0}=u_{1}$ - the value at the boundary equals the value at the next interior point, as expected for a perfectly reflecting wall.

The same idea extends to the right boundary using $u_{N}$ as the imaginary point - and to two-sided Neumann problems, mixed BCs, time-dependent BCs, etc. The recipe is always: write the BC as a finite difference, solve for the imaginary point, substitute into the boundary-row equation.

---

## Pre-Lecture Notes from [[mth3007b lecture notes 9.pdf]]

- **FTCS stability**: $\Delta t\leq \Delta x^{2}/(2\alpha)$ - equivalently $r=\alpha\Delta t/\Delta x^{2}\leq 1/2$. Halving $\Delta x$ requires $\Delta t\to \Delta t/4$, not $\Delta t/2$.
- **Why**: the explicit-update coefficient of $u_{i,n}$ is $1-2r$. For non-amplification of errors we need $|1-2r|\leq 1$, i.e. $r\leq 1$ as a necessary condition; full Fourier analysis tightens to $r\leq 1/2$.
- **BTCS scheme**: backward time, central space - $\frac{u_{i+1,n}-u_{i,n}}{\Delta t}=\alpha\frac{u_{i+1,n+1}-2u_{i+1,n}+u_{i+1,n-1}}{\Delta x^{2}}$.
- **Tridiagonal system**: with $c=\alpha\Delta t/\Delta x^{2}$, the implicit equation reads $-c\,u_{i+1,n-1}+(1+2c)\,u_{i+1,n}-c\,u_{i+1,n+1}=u_{i,n}$, packaged as $\mathbf{A}\mathbf{u}_{i+1}=\mathbf{u}_{i}$.
- **Stability vs accuracy**: BTCS is **unconditionally stable**; global truncation error is $O(\Delta t+\Delta x^{2})$ - second order in space, only first order in time. Crank-Nicolson upgrades to $O(\Delta t^{2}+\Delta x^{2})$.
- **Solver options**: Gaussian elimination ($O(N^{3})$), library matrix inversion (`np.linalg.inv`, $O(N^{3})$), or **Thomas algorithm** specialised to tridiagonal systems ($O(N)$ - `scipy.linalg.lapack.dgtsv`).
- **Neumann boundary conditions**: derivative prescribed at the boundary; introduce an imaginary point $u_{-1}$ via a central difference for $du/dx$, then eliminate by substituting $u_{-1}=u_{1}-2\Delta x\,d$ into the boundary-row equation, giving $-2u_{0}+2u_{1}=2\Delta x\,d$. Insulation $\Rightarrow d=0\Rightarrow u_{0}=u_{1}$.
- **Course summary**: ODEs (lectures 1-5) → PDEs (lectures 6, 9) → Stochastic methods (lectures 7-8). FTCS, BTCS, Crank-Nicolson, Monte Carlo, Wiener, Ornstein-Uhlenbeck - full toolkit for numerical methods of differential and stochastic equations.
