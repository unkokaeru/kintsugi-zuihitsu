# Relative Error

The error normalised by the true value:

$$
\boxed{\eta=\frac{|v-v_{\text{approx}}|}{|v|}=\frac{\epsilon}{|v|}\quad(\text{for }v\neq 0).}
$$

Dimensionless. Useful when $v$ varies over many orders of magnitude - the same [[Absolute error]] $\epsilon$ might be acceptable for $v\sim 10^{6}$ but catastrophic for $v\sim 10^{-3}$.

## Example

Approximating $\pi=3.14159\ldots$ by $\pi_{\text{approx}}=3.14$: $\epsilon=0.00159$, $\eta=0.00159/\pi\approx 0.000506\approx 0.05\%$.

## In Numerical Methods

- Convergence tests usually monitor relative error - "is this method 1st-order, 2nd-order, etc." is a statement about how relative error scales with $\Delta t$.
- Adaptive step-size controllers (e.g. RK45) typically use a mixed tolerance `atol + rtol*|y|`.
- Floating-point arithmetic itself has a relative error bound (machine epsilon $\approx 2.2\cdot 10^{-16}$ for double precision).

Breaks when $v=0$ - handle by switching to absolute error in that regime.
