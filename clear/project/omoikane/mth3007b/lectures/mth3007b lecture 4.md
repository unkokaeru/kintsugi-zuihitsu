# MTH3007b Lecture 4

> [!quote] Me, in the lecture
> zzzzz…

Lecture 3 derived the family of second-order RK schemes, presented RK4, and introduced symmetric methods including the implicit trapezoid. This session makes the notion of **[[stability]]** precise - for both the ODE and the numerical method - then applies these ideas to evaluate the methods seen so far. We also extend all explicit RK methods to **[[systems of ODEs]]** and implement a predator-prey model.

## Stability of an ODE

### Definition

An ODE $\dot{y} = g(t, y)$ is **stable** at a solution $y^*(t)$ if small perturbations to the initial condition remain small for all future time. Formally: for any $\varepsilon > 0$ there exists $\delta > 0$ such that if $|y(t_0) - y^*(t_0)| < \delta$ then $|y(t) - y^*(t)| < \varepsilon$ for all $t > t_0$.

> [!example]
> $\dot{y} = y$ is **unstable**: perturbations grow like $e^t$, so any small initial error eventually becomes large.

> [!example]
> $\dot{y} = -ay$ ($a > 0$) is **stable**: perturbations decay like $e^{-at}$, so the solution is insensitive to small changes in initial conditions.

## Stability of a Numerical Method

### Definition

A numerical method is **stable** for a given ODE if, for a stable ODE, the numerical solution remains bounded for all time (i.e., the numerical difference between two solutions with slightly different initial conditions stays bounded).

> [!warning]
> A method can be stable for small $dt$ and unstable for large $dt$ - this is **conditional stability**. A method that is stable for all $dt > 0$ is **unconditionally stable**.

## Stability Analysis: Test Equation $\dot{y} = -ay$

The standard test equation for stability analysis is $\dot{y} = -ay$ with $a > 0$.

### Explicit (Forward) Euler

The update is $y_{n+1} = y_n(1 - a\,dt)$. After $N$ steps:

$$
y_N = y_0 (1 - a\,dt)^N
$$

The **[[amplification factor]]** is $|1 - a\,dt|$. This must satisfy $|1 - a\,dt| \leq 1$ for stability, which requires

$$
0 \leq a\,dt \leq 2
$$

> [!warning]
> Explicit Euler is **conditionally stable** on $\dot{y} = -ay$: unstable when $a\,dt > 2$.

### Implicit (Backward) Euler

The update is $y_{n+1} = y_n / (1 + a\,dt)$. The amplification factor is $1/(1 + a\,dt)$.

Since $a > 0$ and $dt > 0$, we always have $0 < 1/(1+a\,dt) < 1$.

> [!important]
> Implicit Euler is **unconditionally stable** for $\dot{y} = -ay$: the amplification factor is always strictly less than 1.

### Explicit RK Methods

All explicit RK methods (midpoint, Ralston, RK4) are **conditionally stable** - they have a finite stability region in the $a\,dt$ plane. The stability region is larger for higher-order methods (RK4's stability region extends to $a\,dt \approx 2.8$), but conditional stability remains.

## Convergence and the Lax Equivalence Theorem

**[[Convergence]]** means the numerical solution approaches the exact solution as $dt \to 0$.

**[[Consistency]]** means the local truncation error per step satisfies $\text{LTE}/dt \to 0$ as $dt \to 0$ (i.e., the scheme is at least first-order).

> [!important]
> **Lax equivalence theorem**: for a consistent, linear numerical scheme, stability is equivalent to convergence. In short: consistent + stable $\Rightarrow$ convergent.

This formalises the practical observation that methods which do not blow up (stable) and which correctly approximate the derivative (consistent) will converge to the right answer.

## Richardson Method

The **[[Richardson method]]** (also called the leap-frog or central-difference method) uses a symmetric two-step formula:

$$
\boxed{y_{i+1} - y_{i-1} = 2\,dt\,g(t_i, y_i)}
$$

This is a **symmetric method** (time-reversible), which is appealing. However:

> [!warning]
> The Richardson method is **unconditionally unstable** for $\dot{y} = -y$. Despite being symmetric and consistent, it has a parasitic growing mode that cannot be suppressed for any choice of $dt$. It is not used in practice.

This is a cautionary example: symmetry does not guarantee stability.

## Systems of ODEs

### Generalisation

All the single-equation methods generalise directly to **[[systems of ODEs]]** by replacing the scalar $y$ with a vector $\mathbf{y}$ and $g$ with a vector-valued function $\mathbf{g}$.

For explicit Euler:

$$
\mathbf{y}_{n+1} = \mathbf{y}_n + dt\,\mathbf{g}(t_n, \mathbf{y}_n)
$$

For RK4, the same four-stage formula applies with $k_1, k_2, k_3, k_4$ all being vectors.

### Predator-Prey (Lotka-Volterra) Model

The **[[Lotka-Volterra equations]]** model interacting prey ($x$) and predator ($y$) populations:

$$
\frac{dx}{dt} = ax - bxy
$$

$$
\frac{dy}{dt} = -cy + dxy
$$

where $a, b, c, d > 0$ are parameters. The nonlinear coupling terms $bxy$ and $dxy$ represent predation.

```python runnable
import numpy as np
import matplotlib.pyplot as plt
neq=2
tmax=30.0
dt=0.01
t0=0.0
x0=2.0
y0=1.0
def gx(t, x, y):
    a=1.2; b=0.6
    return a*x-b*x*y
def gy(t, x, y):
    c=0.8; d=0.3
    return -c*y+d*x*y
def g(t, X):
    return np.array([gx(t, X[0], X[1]), gy(t, X[0], X[1])])
nint=int(round((tmax-t0)/dt))
X=np.zeros((neq,nint+1))
t=np.zeros(nint+1)
X[0,0]=x0; X[1,0]=y0
for n in range(nint):
    t[n+1]=t[n]+dt
    X[:,n+1]=X[:,n]+dt*g(t[n], X[:,n])
plt.plot(X[0,:],X[1,:])
```

> [!note]
> The state vector `X` has shape `(neq, nint+1)`. The function `g` returns a NumPy array, so the slice `X[:,n]` picks out the full state at step $n$. This vectorised structure works equally for any explicit RK method by replacing the update line.

---

## Pre-Lecture Notes from [[mth3007b lecture notes 4.pdf|University Notes]]

- **ODE stability** (epsilon-delta): stable if small perturbations to IC stay small; $\dot{y}=y$ unstable, $\dot{y}=-ay$ stable
- **Method stability**: numerical solution bounded for all time on a stable ODE
- Test equation $\dot{y} = -ay$: explicit Euler amplification factor $|1-a\,dt|$, stable iff $a\,dt \leq 2$ (conditional); implicit Euler factor $1/(1+a\,dt) < 1$ always (unconditional)
- Explicit RK methods all conditionally stable; stability region grows with order
- **Lax equivalence theorem**: consistent + stable $\Rightarrow$ convergent
- **Richardson method**: $y_{i+1} - y_{i-1} = 2\,dt\,g(t_i, y_i)$ - symmetric but unconditionally unstable for $\dot{y} = -y$
- **Systems of ODEs**: replace scalar $y$ with vector $\mathbf{y}$; same update formulas apply component-wise
- Lotka-Volterra example: two coupled nonlinear ODEs for prey/predator populations, implemented with explicit Euler and vector $g$
- Next session: numerical integration via ODEs, reduction of higher-order ODEs, and introduction to PDEs
