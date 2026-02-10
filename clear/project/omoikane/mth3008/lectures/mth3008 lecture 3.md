# MTH3008 Lecture 3

> [!quote] Tom Ward
> *nothing, he wasn't there :(*

We'll now use that [[Suffix Notation]] throughout tensor analysis, along with the definitions:

- A **scalar field** is a map that assigns a **real number** to every point in space: $\phi:\mathbb{R}^n\to \mathbb{R}$.
- A **vector field** is a map that assigns a **vector** to every point in space: $\phi:\mathbb{R}^n\to \mathbb{R}^n$.
- *And note that we'll relabel the Cartesian coordinate system $(x,y,z)$ as $(x_{1},x_{2},x_{3})$.*

## Differential Operators

We'll consider three differential operators in these fields, each of which can be expressed in suffix notation:

1. The [[gradient]],
2. The [[divergence]], and
3. The [[curl]].

First, the **[[gradient]] of a scalar field** is $\nabla f=\left( \frac{\partial f}{\partial x_{1}} ,\frac{\partial f}{\partial x_{2}},\frac{\partial f}{\partial x_{3}}\right)$, where the $i$-th component of the gradient is the partial derivative with respect to $x_{i}$, hence in **suffix notation** is $[\nabla f]_{i}= \frac{\partial f}{\partial x_{i}}$. Practically, to find these gradients then you simply calculate each component, often then specifying a value at a specific point.

> [!example]
> Find the gradient $\nabla \phi$ of $\phi(x_{1},x_{2},x_{3})= \frac{1}{2}x_{2}^2x_{3}^3-3x_{1}x_{2}+x_{2}^5x_{3}+1$ at the point $P=(3,1,0)$…
>
> First, the general gradient is $\nabla \phi=\left( -3x_{2},x_{2}x_{3}^3-3x_{1}+6x_{2}^4x_{3}, \frac{3}{2}x_{2}^2x_{3}^2+x_{2}^5 \right)$, by finding the partial derivatives for each component. Then, at the point $P$, we find that $\nabla \phi\big|_{P}=(-3,-9,1)=\boxed{-3\mathbf{i}-9\mathbf{j}+\mathbf{k}}$.

Second, the **[[divergence]] of a vector field $\mathbf{u}$** is $\nabla \cdot \mathbf{u} = \frac{\partial u_{1}}{\partial x_{1}}+ \frac{\partial u_{2}}{\partial x_{2}}+ \frac{\partial u_{3}}{\partial x_{3}}= \frac{\partial u_{j}}{\partial x_{j}}=\nabla_{i}u_{i}$. Note the dummy index $j$ for the summation $j=1,2,3$, and the complete lack of free indices (as the divergence of a vector is a scalar quantity). If positive, it indicates a **source**, if negative, it indicates a **sink**.

> [!example]
> Find $\nabla \cdot \mathbf{A}$ at the point $Q=(2,1,2)$ for $\mathbf{A}= \frac{1}{2}x_{1}^3x_{2}\mathbf{i}-(4x_{1}x_{2}^5+1)\mathbf{j}+x_{2}x_{3}^3\mathbf{k}$…
>
> $\nabla \cdot \mathbf{A}= \boxed{\frac{3}{2}x_{1}^2x_{2} + 20x_{1}x_{2}^4 + 3x_{2}x_{3}^2}$.

Third, the **[[curl]] of a vector field** $\mathbf{u}$ is…

$\nabla \times \mathbf{u}=\begin{vmatrix}\mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x_{1}} & \frac{\partial}{\partial x_{2}} & \frac{\partial}{\partial x_{3}}\\ u_{1} & u_{2} & u_{3}\end{vmatrix}= \left( \frac{\partial u_{3}}{\partial x_{2}} - \frac{\partial u_{2}}{\partial x_{3}},\frac{\partial u_{1}}{\partial x_{3}} - \frac{\partial u_{3}}{\partial x_{1}},\frac{\partial u_{2}}{\partial x_{1}} - \frac{\partial u_{1}}{\partial x_{2}} \right)$.

Or, alternatively using the alternating tensor to represent the **[[curl]]**, each component is then $[\nabla \times \mathbf{u}]_{i}=\epsilon_{ijk}\nabla_{j}u_{k}=\epsilon_{ijk} \frac{\partial u_{k}}{\partial x_{j}}$. Here, we can see the two dummy indices $j$ and $k$ indicating a double sum, and the free index $i$ indicating that the result is a **vector quantity**.

> [!example]
> …

---

## Pre-Lecture Notes from [[mth3008 lecture 3 notes.pdf|University Notes]]

- First, recap the [[mth3008 lecture 2|last lecture]]:
	- [[Kronecker Delta]] (definition, properties).
	- [[Alternating Tensor]] (definition, properties, relations) - plus, some practice.
- The [[Levi-Civita Symbol]] - a more generalised version of the [[Alternating Tensor]], defined as $\epsilon_{i_{1}i_{2}i_{3}\dots i_{n}}$ where if any two indices are interchanges then the symbol is negated, and if any are equal then the symbol equals zero. Hence, the $\epsilon_{ijk}$ is just the Levi-Civita symbol in 3D space.
- This $\epsilon$ relates to $\delta$ with: $\epsilon_{ijk}\epsilon_{k \ell m}=\delta_{i \ell}\delta_{jm}-\delta_{im}\delta_{j \ell}$, where there are four free indices ($i$, $j$, $\ell$, $m$) and the repeated dummy index $k$; simply comes from observation.
	- Can be used to show even more relationships and simply even more expressions!
- Vector differential operators…
	- Scalar/vector field definition
	- Three differential operators: gradient, divergence, and curl - definitions in suffix notation and brief explanations of intuition for understanding.
