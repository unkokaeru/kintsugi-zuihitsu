# Convergence

A numerical algorithm **converges** if, when continually refined with a smaller step size, the approximate solutions converge to the exact solution - i.e., the true solution is recovered in the limit $\Delta t\to 0$:

$$
\lim_{\Delta t\to 0}|y_{N}-y(t_{N})|=0.
$$

> [!note] In convergence proofs, only the truncation error is considered - round-off errors are discarded.

## [[Lax Equivalence Theorem]]

For a well-posed initial-boundary-value problem, a finite-difference method is convergent if and only if it is both **consistent** (the exact solution satisfies the scheme as $\Delta t\to 0$) and **stable** (errors don't blow up).

This is why understanding stability matters as much as understanding [[Order of a method]] - without stability, no amount of consistency yields a convergent method.

## Order of Convergence

The rate at which the error vanishes - see [[Order of convergence]]. For a method of order $p$:

$$
|y_{N}-y(t_{N})|=O(\Delta t^{p}).
$$

## Round-Off Floor

In practice, error decreases as $\Delta t\to 0$ until **round-off error** (from finite-precision arithmetic) becomes dominant. Below that threshold, smaller $\Delta t$ actually *increases* error because more steps means more accumulated round-off. The optimal step size is roughly where truncation error equals round-off error - typically $\Delta t\sim 10^{-8}$ to $10^{-4}$ for double precision, depending on the method.
