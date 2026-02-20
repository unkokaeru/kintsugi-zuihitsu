# Curl

The **Curl of a vector field** $\mathbf{u}$ is…

$\nabla \times \mathbf{u}=\begin{vmatrix}\mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x_{1}} & \frac{\partial}{\partial x_{2}} & \frac{\partial}{\partial x_{3}}\\ u_{1} & u_{2} & u_{3}\end{vmatrix}= \left( \frac{\partial u_{3}}{\partial x_{2}} - \frac{\partial u_{2}}{\partial x_{3}},\frac{\partial u_{1}}{\partial x_{3}} - \frac{\partial u_{3}}{\partial x_{1}},\frac{\partial u_{2}}{\partial x_{1}} - \frac{\partial u_{1}}{\partial x_{2}} \right)$.

Or, alternatively using the alternating tensor to represent the **Curl**, each component is then $[\nabla \times \mathbf{u}]_{i}=\epsilon_{ijk}\nabla_{j}u_{k}=\epsilon_{ijk} \frac{\partial u_{k}}{\partial x_{j}}$. Here, we can see the two dummy indices $j$ and $k$ indicating a double sum, and the free index $i$ indicating that the result is a **vector quantity**.

> Vector in, vector out.
