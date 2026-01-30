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
	- We can also hence simplify the function