# Explicit Euler Method

Using the **[[Finite Differences|Finite Difference Method]]**, we can solve Ordinary Differential Equations (ODEs). For example with the Euler method, where we first replace the derivatives with finite differences.

For an **initial value problem**, the ODE can be written as:

$$
\frac{f(x+\Delta x)-f(x)}{\Delta x}\approx g(x,f(x))\implies\boxed{f(x+\Delta x)_{\text{approx}}\approx f(x)+\Delta x \cdot g(x,f(x))}
$$

This is called the **[[Explicit Euler method]]**, or the **forward Euler method**, and we can calculate the total number of integration steps as $N_{\text{int}}=\frac{|x_{\text{end}}-x_{\text{start}}|}{\Delta x}$ and hence $x_{\text{end}}=xN_{\text{int}}=x_{0}+N_{\text{int}}\Delta x$. A smaller $\Delta x$ we hence naturally improve the accuracy, but at a computational cost.
