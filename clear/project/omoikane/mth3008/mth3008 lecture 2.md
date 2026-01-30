# Mth3008 Lecture 2

> [!quote] …
> …

… *notes to be written in the lecture*

---

## Pre-Lecture Notes from [[mth3008 lecture 2 notes.pdf|University Notes]]

- First, recapped the [[mth3008 lecture 1|last lecture]]:
	- Assume all vectors are three dimensional.
	- [[Suffix Notation]] (definition, nomenclature, conversion steps, and examples).
	- [[Kronecker Delta]] (definition and key property)
- Using the Kronecker delta in suffix notation, we can say that $\mathbf{a}\cdot \mathbf{b}=a_{i}b_{i}=a_{i}(\delta_{ij}b_{j})=\delta_{ij}a_{i}b_{j}$. Naturally, this can be checked backwards using vector notation, too.
	- Note that we have to be careful with the context for vector and suffix notation: $\delta_{ij}$ is given in vector notation, where we specify all the values at once, but $\delta_{ii}$ in suffix notation is a sum.
	- This is because it'll sum over the repeated index, for example in vector notation, $\sum_{j=1}^{3}\delta_{jj}=\delta_{11}+\delta_{22}+\delta_{33}=3$ (summing $j=1..3$ by our convention).
	- We can also hence simplify expressions with the function by using the vector conversion, like $\delta_{ij}\delta_{jk}\to \sum_{j=1}^{3}\delta_{ij}\delta_{jk}=\delta_{i1}\delta_{1k}+\delta_{i2}\delta_{2k}+\delta_{i3}\delta_{3k}\to \dots \to \delta_{ik}$; that is, the repeated index is absorbed.
	- Other expressions could be simplified, like $\delta_{\ell \ell}\delta_{mn}\delta_{pp}\delta_{nq}$ or $\delta_{ij}a_{j}b_{\ell}c_{k}\delta_{i \ell}$.
- Hence, the Kronecker delta (substitution tensor) can be used to define the dot product. Similarly, the alternating tensor can define the cross product.
	- Alternative tensor $\epsilon_{ijk}$ is defined by $\epsilon_{ijk}=\begin{cases}0 & \text{if any of }i,j,k \text{ are equal} \\ +1 & \text{if }(i,j,k)=(1,2,3),(2,3,1), \text{or }(3,1,2) \\ -1 & \text{if }(i,j,k)=(1,3,2),(2,1,3), \text{or }(3,2,1)\end{cases}$.
	- This can be visualised as three layers of matrices
