# Curl

> [!tip] Relevant parts to questions...
> - In suffix form: $[\nabla \times \mathbf{u}]_{i}=\epsilon_{ijk}\partial_{j}u_{k}$.
> - **Kill rule**: $\nabla \times(\nabla f)=0$ always - because $\epsilon_{ijk}\partial_{j}\partial_{k}f=0$ (antisymmetric $\times$ symmetric).
> - For $\nabla \cdot(\nabla \times \mathbf{u})=0$ same trick: $\epsilon_{ijk}\partial_{i}\partial_{j}u_{k}=0$.

The **Curl of a vector field** $\mathbf{u}$ is

$$
\nabla \times \mathbf{u}=\begin{vmatrix}\mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x_{1}} & \frac{\partial}{\partial x_{2}} & \frac{\partial}{\partial x_{3}}\\ u_{1} & u_{2} & u_{3}\end{vmatrix}= \left( \frac{\partial u_{3}}{\partial x_{2}} - \frac{\partial u_{2}}{\partial x_{3}},\frac{\partial u_{1}}{\partial x_{3}} - \frac{\partial u_{3}}{\partial x_{1}},\frac{\partial u_{2}}{\partial x_{1}} - \frac{\partial u_{1}}{\partial x_{2}} \right)
$$

In suffix notation, each component is

$$
[\nabla \times \mathbf{u}]_{i}=\epsilon_{ijk}\nabla_{j}u_{k}=\epsilon_{ijk} \frac{\partial u_{k}}{\partial x_{j}}
$$

Two dummy indices $j,k$ (double sum) and one free index $i$ (vector quantity).

> [!example]
> Find $\nabla \times \mathbf{A}$ at $Q=(1,2,1)$ for $\mathbf{A}=x_{1}^{2}x_{3}\mathbf{i}+2x_{2}\mathbf{j}+x_{1}x_{2}x_{3}^{2}\mathbf{k}$.
>
> Component 1: $\partial_{2}A_{3}-\partial_{3}A_{2}=x_{1}x_{3}^{2}-0=x_{1}x_{3}^{2}$.
> Component 2: $\partial_{3}A_{1}-\partial_{1}A_{3}=x_{1}^{2}-x_{2}x_{3}^{2}$.
> Component 3: $\partial_{1}A_{2}-\partial_{2}A_{1}=0-0=0$.
>
> At $Q$: $\boxed{\nabla \times \mathbf{A}=\mathbf{i}+(1-2)\mathbf{j}=\mathbf{i}-\mathbf{j}}$.

> [!example] Curl of a gradient ($\nabla \times (\nabla f)=0$)
> $[\nabla \times \nabla f]_{i}=\epsilon_{ijk}\partial_{j}\partial_{k}f$. Mixed partials commute, so $\partial_{j}\partial_{k}f$ is symmetric in $j,k$. $\epsilon_{ijk}$ is antisymmetric in $j,k$. By the **kill rule**, $\epsilon_{ijk}\partial_{j}\partial_{k}f=0$, hence $\nabla \times \nabla f=\mathbf{0}$.

> Vector in, vector out.
