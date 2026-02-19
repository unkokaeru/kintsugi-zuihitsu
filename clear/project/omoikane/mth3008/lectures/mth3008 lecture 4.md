# MTH3008 Lecture 4

Recall previous definitions…

- [[Kronecker Delta]],
- [[Alternating Tensor]],
- [[Suffix Notation]],
- [[Gradient]],
- [[Divergence]],
- [[Curl]].

Then, we can start to consider combinations of these operators of the **position vector**, $\mathbf{r}=(x_{1},x_{2},x_{3})$ with magnitude $\underline{r}=|\mathbf{r}|$.

## Derivatives of the Position Vector

First, notice that the $\frac{\partial x_{1}}{\partial x_{1}}=1$ but $\frac{\partial x_{1}}{\partial x_{2}}=0$, so in general we have $\frac{\partial x_{i}}{\partial x_{j}}=\begin{cases}1 & \text{if } i=j \\ 0 & \text{if }i\ne j\end{cases}=\delta_{ij}$.

Using this, and writing everything in index notation, we can derive each thing following their definitions to find…

- **Gradient of vector position**, $\nabla \underline{r}=\left[ \frac{\mathbf{r}}{\underline{r}} \right]_{i}$.
- **Divergence of vector position**, $\nabla \cdot \mathbf{r}=\frac{\partial r_{i}}{\partial x_{i}}=\frac{\partial x_{i}}{\partial x_{i}}=\delta_{ii}=3$, by our convention.
- **Curl of vector position**, $(\mathbf{0})_{i}$ based on the definition of the [[Alternating Tensor]].

## Combinations of Grad, Div, and Curl

There are only five combinations that we can have, due to domain/range mismatches:

1. Div grad, $\nabla^2f$ (the Laplacian operator).
2. Curl grad, $\mathbf{0}$.
3. Grad div, $\frac{\partial^2u_{j}}{\partial x_{i} \partial x_{j}}$.
4. Div curl, $\mathbf{0}$.
5. Curl curl, $\nabla(\nabla \cdot \mathbf{u})-\nabla \times (\nabla \times \mathbf{u})$.

---

## Pre-Lecture Notes from [[mth3008 lecture 4 notes.pdf|University Notes]]

- Recall past definitions:
	- [[Kronecker Delta]].
	- [[Alternating Tensor]].
	- [[Suffix Notation]].
	- [[Gradient]].
	- [[Divergence]].
	- [[Curl]].
- Then, just further definitions, like the position vector and its magnitude (same as normal), then exploring its relationships with the aforementioned definitions.
- Combining differential operators to get things like div grad, curl grade, grad div, div curl, and curl, finding them all in suffix notation.
	- The latter then allowing us to have a new description of the Laplacian operator.
