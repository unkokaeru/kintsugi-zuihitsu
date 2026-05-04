# Jacobian

> [!tip] Relevant parts to questions...
> - Using $\frac{\partial x_{i}'}{\partial x_{j}}=L_{ij}$ and $\frac{\partial x_{i}}{\partial x_{j}'}=L_{ji}$ to convert index-derivatives into entries of the [[Coordinate Transformation Matrix]].
> - Using these inside the chain rule: $\frac{\partial f}{\partial x_{i}'}=\frac{\partial f}{\partial x_{j}} \frac{\partial x_{j}}{\partial x_{i}'}=L_{ij} \frac{\partial f}{\partial x_{j}}$.
> - Using them to prove that $\nabla f$ is a **vector** and $\frac{\partial u_{i}}{\partial x_{j}}$ is a rank-2 tensor.

The **Jacobian** entries are the partial derivatives of one coordinate system with respect to another. They tie the [[Coordinate Transformation Matrix]] $L_{ij}$ directly to calculus-style index manipulation.

Starting from $x_{i}'=L_{ik}x_{k}$ and differentiating:

$$
\frac{\partial x_{i}'}{\partial x_{j}}=\sum_{k}\left( \frac{\partial L_{ik}}{\partial x_{j}}x_{k}+L_{ik} \frac{\partial x_{k}}{\partial x_{j}} \right)=\sum_{k}L_{ik}\delta_{kj}=L_{ij}
$$

Because $L$ is **constant** in Cartesian coordinates, $\frac{\partial L_{ik}}{\partial x_{j}}=0$, and the only surviving term comes from $\frac{\partial x_{k}}{\partial x_{j}}=\delta_{kj}$. The same argument, applied to the inverse transformation $x_{i}=L_{ji}x_{j}'$, gives the second identity:

$$
\boxed{\frac{\partial x_{i}'}{\partial x_{j}}=L_{ij},\qquad \frac{\partial x_{i}}{\partial x_{j}'}=L_{ji}}
$$

## Properties

- **Constant in Cartesian coordinates**::$L_{ij}$ does not depend on position, so its derivatives vanish. This is exactly the property that fails in curvilinear coordinates, and the reason [[Christoffel Symbols]] exist.
- **Forward and inverse swap the indices**::the two Jacobians are each other's transposes, matching $L^{T}=L^{-1}$.
- **Orthogonality-inherited identity**::$\frac{\partial x_{i}'}{\partial x_{j}} \frac{\partial x_{k}'}{\partial x_{j}}=L_{ij}L_{kj}=\delta_{ik}$.

## Applications

1. **Chain-rule conversion** of derivatives, using the Jacobian::$\frac{\partial f}{\partial x_{i}'}=\frac{\partial f}{\partial x_{j}} \frac{\partial x_{j}}{\partial x_{i}'}=L_{ij} \frac{\partial f}{\partial x_{j}}$.
2. **Proving the [[Gradient]] is a vector**, via the chain rule::$[\nabla f]_{i}'= \frac{\partial f}{\partial x_{i}'}=L_{ij} \frac{\partial f}{\partial x_{j}}=L_{ij}[\nabla f]_{j}$.
3. **Proving $\frac{\partial u_{i}}{\partial x_{j}}$ is a rank-2 tensor**::combining the product rule with $\frac{\partial L_{ik}}{\partial x_{j}'}=0$ and the chain rule gives $\frac{\partial u_{i}'}{\partial x_{j}'}=L_{ik}L_{j \ell} \frac{\partial u_{k}}{\partial x_{\ell}}$.

> [!warning] Cartesian-only argument
> The step $\frac{\partial L_{ik}}{\partial x_{j}'}=0$ relies on $L$ being **constant**. In curvilinear coordinates (spherical, cylindrical, etc.) the transformation varies with position, and this derivation breaks. That is exactly the motivation for generalised coordinates and covariant differentiation.

> Convert a derivative; pick up an $L$.
