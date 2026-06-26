# Divergence

> [!tip] Relevant parts to questions…
> - In suffix form: $\nabla \cdot \mathbf{u}= \partial u_{j}/\partial x_{j}=\nabla_{j}u_{j}$.
> - **Identity**: $\nabla \cdot(\nabla \times \mathbf{u})=0$ - $\epsilon_{ijk}\partial_{i}\partial_{j}u_{k}=0$ by "kill rule".
> - **Curvilinear**: divergence is the trace of the [[Covariant Differentiation|covariant derivative]]: $\nabla \cdot \mathbf{A}=A^{i}_{\cdot,i}$.

The **Divergence of a vector field $\mathbf{u}$** is

$$
\nabla \cdot \mathbf{u} = \frac{\partial u_{1}}{\partial x_{1}}+ \frac{\partial u_{2}}{\partial x_{2}}+ \frac{\partial u_{3}}{\partial x_{3}}= \frac{\partial u_{j}}{\partial x_{j}}=\nabla_{i}u_{i}
$$

Note the dummy index $j$ for the summation $j=1,2,3$, and the complete lack of free indices (divergence of a vector is a scalar). Positive $\Rightarrow$ **source**; negative $\Rightarrow$ **sink**.

> [!example]
> Find $\nabla \cdot \mathbf{A}$ at $Q=(2,1,2)$ for $\mathbf{A}= \frac{1}{2}x_{1}^3x_{2}\mathbf{i}-(4x_{1}x_{2}^5+1)\mathbf{j}+x_{2}x_{3}^3\mathbf{k}$…
>
> $\nabla \cdot \mathbf{A}= \frac{3}{2}x_{1}^2x_{2} + 20x_{1}x_{2}^4 + 3x_{2}x_{3}^2$, so $\nabla \cdot \mathbf{A}\big|_{(2,1,2)}=6+40+12=\boxed{58}$.

> [!example] Divergence of a curl ($\nabla \cdot(\nabla \times \mathbf{u})=0$)
> $\nabla \cdot(\nabla \times \mathbf{u})=\partial_{i}\epsilon_{ijk}\partial_{j}u_{k}=\epsilon_{ijk}\partial_{i}\partial_{j}u_{k}$. Mixed partials are symmetric in $i,j$; $\epsilon_{ijk}$ is antisymmetric in $i,j$. By the kill rule, this is zero.

> Vector in, scalar out.
