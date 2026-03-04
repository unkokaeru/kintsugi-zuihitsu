# MTH3008 Portfolio Part A

> **Original Documents**: [[mth3008 coursework.pdf|Problem Sheet]]

***

## 1. Vector Expression Simplification and Tensor Derivatives

> [!question]
> 1. Using suffix notation, simplify the vector expression $\displaystyle (\mathbf{a} \times \mathbf{b}) \cdot (\mathbf{c} \times \mathbf{d})\mathbf{a}$ to remove all cross products, given that $\mathbf{a}, \mathbf{b}, \mathbf{c}, \mathbf{d} \in \mathbb{R}^3$.
> 2. Suppose $T_i$ is a first-rank tensor with non-zero components, expressed in an orthogonal coordinate system.
> 	1. Show that the transformation rule for the derivative $\displaystyle \frac{\partial T_i}{\partial x^k}$ is $\displaystyle \left( \frac{\partial T_i}{\partial x^k} \right)' = \frac{\partial^2 x_m}{\partial x'^i \partial x'^k} T_m + L_{im} L_{kn} \frac{\partial T_m}{\partial x_n}$, where the transformation matrix is $\displaystyle L_{im} = \frac{\partial x_m}{\partial x'^i}$.
> 	2. State the transformation rule that $\displaystyle \frac{\partial T_i}{\partial x^k}$ must satisfy to be considered a tensor. Using the result from the previous part, explain why this derivative is not a tensor. *(You may use the result from part 2.1 even if you have not shown it.)*
> 	3. Prove that the quantity $\displaystyle A_{ik} = \frac{\partial T_i}{\partial x^k} - \frac{\partial T_k}{\partial x^i}$ transforms as a second-rank tensor. *(You may use the result stated in part 2.1 even if you have not shown it.)*

… *won't publish answers until everything has been handed in, sorry!*

$$
\begin{align*}
T'_i &= L_{im} T_m, \quad L_{im} = \frac{\partial x_m}{\partial x'_i} \quad\text{(tensor transform law)} \\
\left( \frac{\partial T'_i}{\partial x'_k} \right) &= \frac{\partial}{\partial x'_k} (L_{im} T_m) \quad\text{(product rule)} \\
&= \left( \frac{\partial L_{im}}{\partial x'_k} \right) T_m + L_{im} \frac{\partial T_m}{\partial x'_k} \\
&= \frac{\partial^2 x_m}{\partial x'_i \partial x'_k} T_m + L_{im} \left( L_{kn} \frac{\partial T_m}{\partial x_n} \right) \\
&= \frac{\partial^2 x_m}{\partial x'_i \partial x'_k} T_m + L_{im} L_{kn} \frac{\partial T_m}{\partial x_n} \quad\text{(chain rule: }\frac{\partial}{\partial x'_k} = L_{kn} \frac{\partial}{\partial x_n}\text{)}.
\end{align*}
$$
