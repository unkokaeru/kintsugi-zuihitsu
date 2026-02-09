# MTH3008 Lecture 3

> [!quote] …
> …

We'll now use that [[Suffix Notation]] throughout tensor analysis, along with the definitions:

- A **scalar field** is a map that assigns a **real number** to every point in space: $\phi:\mathbb{R}^n\to \mathbb{R}$.
- A **vector field** is a map that assigns a **vector** to every point in space: $\phi:\mathbb{R}^n\to \mathbb{R}^n$.
- *And note that we'll relabel the Cartesian coordinate system $(x,y,z)$ as $(x_{1},x_{2},x_{3})$.*

## Differential Operators

We'll consider three differential operators in these fields, each of which can be expressed in suffix notation:

1. The [[gradient]],
2. The [[divergence]], and
3. The [[curl]].

The **[[gradient]]** of a scalar field is $\nabla f=\left( \frac{\partial f}{\partial x_{1}} ,\frac{\partial f}{\partial x_{2}},\frac{\partial f}{\partial x_{3}}\right)$, where the $i$-th component of the gradient is the partial derivative with respect to $x_{i}$, hence in **suffix notation** is $[\nabla f]_{i}= \frac{\partial f}{\partial x_{i}}$. Practically, to find these gradients then you simply calculate each component, often then specifying a value at a specific point.

> [!example]
> Find the gradient $\nabla \phi$ of $\phi(x_{1},x_{2},x_{3})= \frac{1}{2}$

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
