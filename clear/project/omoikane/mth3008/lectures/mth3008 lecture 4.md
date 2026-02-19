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
- **Divergence of vector position**, $\nabla \cdot \mathbf{r}=\frac{\partial r_{i}}{\partial x_{i}}=\frac{\partial x_{i}}{\partial x_{i}}=\delta$

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
