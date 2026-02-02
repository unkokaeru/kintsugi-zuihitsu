# MTH3008 Lecture 1

> [!quote] [Jesus Najera](https://setzeus.com/about), a friend of the lecturer
> Tensors are mathematical objects that are invariant under a change of coordinates & have components that change in predictable ways.

Tensors are generalisations of vectors, with a rank corresponding to different quantities:

- Rank 0 tensor: scalar,
- Rank 1 tensor: vector,
- Rank 2 tensor: matrix,
- *Etc. (in higher dimensions)*.

Our convention will be keeping vectors three-dimensional, just for conceptual simplicity, i.e., $\mathbf{v}=(v_{1,v_{2},v_{3}}\in\mathbb{R}^3)=v_{1}\mathbf{i}+v_{2}\mathbf{j}+v_{3}\mathbf{k}$ - either notation is fine, but normally we use a completely different notation…

## Suffix Notation

**[[Suffix Notation]]**, or **Index Notation**, is simply when write a sum without $\Sigma$, e.g.,

$$
\mathbf{a}\cdot \mathbf{b}=a_{1}b_{1}+a_{2}b_{2}+a_{3}b_{3}=\sum_{j=1}^{3}a_{j}b_{j}\to \boxed{a_{j}b_{j}}
$$

This simplifies notation considerably, especially for more complex expressions involving multiple sums, like $(\mathbf{a}\cdot \mathbf{b})(\mathbf{c}\cdot \mathbf{d})=a_{j}b_{j}c_{k}d_{k}$.

### Types of Index

The index that appears in the sum (exactly twice for each distinctly summed term), is called a **dummy index**. These can be **any variable** without changing the result, in **any order**, as they don't show up when evaluated.

Alternatively, **free indices** only show up once. These represent the **components within the tensors**, like the $i$th component of a vector: $(\lambda \mathbf{v})_{i}=v_{i}$. The **number** of these free indices hence indicates the **number of components** the tensor has - its **rank**. Naturally, these must be consistent throughout a problem, as they compare components across multiple vectors.

### Notation Conversion

We can convert from vector notation to suffix notation by simply writing out the sum. For example, $((\mathbf{a}\cdot \mathbf{c})\mathbf{b})_{i}=\sum_{j=1}^3(a_{j}c_{j})b_{i}$, and then remove the sum to get suffix notation: $a_{j}c_{j}b_{i}$, or $a_{j}b_{i}c_{j}$ - again, order doesn't matter.

For more complex conversions, we can follow a step-by-step method. For example, for a vector equation, $\mathbf{u}+(\mathbf{a}\cdot \mathbf{b})\mathbf{v}=|\mathbf{a}|^2(\mathbf{b}\cdot \mathbf{v})\mathbf{a}$…

1. Introduce free index, like $i$: $(\mathbf{u}+(\mathbf{a}\cdot \mathbf{b})\mathbf{v})_{i}=((\mathbf{a}\cdot \mathbf{a})(\mathbf{b}\cdot \mathbf{v})\mathbf{a})_{i}:|\mathbf{a}|:=\sqrt{ \mathbf{a}\cdot \mathbf{a} }$.
2. Distribute free index, for each vector.: $u_{i}+(\mathbf{a}\cdot \mathbf{b})v_{i}=(\mathbf{a}\cdot \mathbf{a})(\mathbf{b}\cdot \mathbf{v})a_{i}$.
3. Introduce dummy indices, for each scalar: $\boxed{u_{i}+a_{j}b_{j}v_{i}=a_{k}a_{k}b_{\ell}v_{\ell}a_{i}}$

> [!example] Example (simple expression)
> $(\mathbf{a}\cdot \mathbf{b})\mathbf{u}+|\mathbf{c}|^{2}\mathbf{v}=((\mathbf{a}\cdot \mathbf{b})\mathbf{u})_{i}+((\mathbf{c}\cdot \mathbf{c})\mathbf{v})_{i} = (\mathbf{a}\cdot \mathbf{b})u_{i}+(\mathbf{c}\cdot \mathbf{c})v_{i} = \boxed{a_{j}b_{j}u_{i}+c_{k}c_{k}v_{i}}$

---

- [[Kronecker Delta]] (definition and key property).
	- Using $\delta_{ij}a_{j}=a_{i}$.

---

## Pre-Lecture Notes from [[mth3008 lecture 1 notes.pdf|University Notes]]

- Tensors generalise vectors, e.g.,
	- Rank 0 tensor: scalar;
	- Rank 1 tensor: vector;
	- Rank 2 tensor: matrix;
	- *All independent of the coordinate system*.
- Suffix (or index) notation is used to make notation easier.
	- Like when writing vectors with unit vectors: $\mathbf{v}=v_{1}\mathbf{i}+v_{2}\mathbf{j}+v_{3}\mathbf{k}$, given that each vector is real and three-dimensional.
	- For example, dot product between two vectors: $\mathbf{a}\cdot \mathbf{b}=a_{1}b_{1}+a_{2}b_{2}+a_{3}b_{3}=\sum_{j=1}^{3}a_{j}b_{j}$.
	- A more complex example, multiplying two of these dot products: $(\mathbf{a}\cdot \mathbf{b})(\mathbf{c}\cdot \mathbf{d})=a_{j}b_{j}c_{k}d_{k}$.
- Rules for suffix notation:
	- Choice of index doesn't matter, they're just dummy indices.
	- Order of indices doesn't matter, as long as each index appears at most twice in each term.
		- Dummy indices are such that they appear exactly twice; representing sums (like dot products).
		- Free indices are such that only appear once; representing entries of a vector (the $i$th component).
			- The number of free indices is equal to the rank tensor; i.e., a scalar has no free indices (since it creates just a dot product, the result of which is always a scalar).
- Converting to suffix notation:
	- For example, for a vector equation, $\mathbf{u}+(\mathbf{a}\cdot \mathbf{b})\mathbf{v}=|\mathbf{a}|^2(\mathbf{b}\cdot \mathbf{v})\mathbf{a}$…
		1. Introduce free index, like $i$: $(\mathbf{u}+(\mathbf{a}\cdot \mathbf{b})\mathbf{v})_{i}=((\mathbf{a}\cdot \mathbf{a})(\mathbf{b}\cdot \mathbf{v})\mathbf{a})_{i}:|\mathbf{a}|:=\sqrt{ \mathbf{a}\cdot \mathbf{a} }$.
		2. Distribute free index, for each vector.: $u_{i}+(\mathbf{a}\cdot \mathbf{b})v_{i}=(\mathbf{a}\cdot \mathbf{a})(\mathbf{b}\cdot \mathbf{v})a_{i}$.
		3. Introduce dummy indices, for each scalar: $\boxed{u_{i}+a_{j}b_{j}v_{i}=a_{k}a_{k}b_{\ell}v_{\ell}a_{i}}$
	- Or just an expression: $(\mathbf{a}\cdot \mathbf{b})\mathbf{u}+|\mathbf{c}|^{2}\mathbf{v}=((\mathbf{a}\cdot \mathbf{b})\mathbf{u})_{i}+((\mathbf{c}\cdot \mathbf{c})\mathbf{v})_{i} = (\mathbf{a}\cdot \mathbf{b})u_{i}+(\mathbf{c}\cdot \mathbf{c})v_{i} = \boxed{a_{j}b_{j}u_{i}+c_{k}c_{k}v_{i}}$
	- Similarly, you can write matrices in this notation: given $A$ and $B$ and $n\times n$ matrices, the entries of $C=AB$ can be written as $C_{ij}=A_{ik}B_{kj}$ - just by multiplying together and simplifying as before.
		- This can be very useful, for example to prove that (for the matrices before) $\text{Trace}(\mathbf{A}\mathbf{B})=\text{Trace}(\mathbf{B}\mathbf{A})$…
			- $\text{Tr}(\mathbf{C})=C_{11}+C_{22}+\dots+C_{NN}=C_{jj}$, hence,
			- $\text{Tr}(\mathbf{A}\mathbf{B})=\text{Tr}(A_{ik}B_{kj})=A_{jk}B_{kj}$ and $\text{Tr}(\mathbf{B}\mathbf{A})=\text{Tr}(B_{kjA_{ik}})=B_{jk}A_{kj}$, where the indices and be re-ordered and re-labelled as discussed before, to then give $\text{Tr}(\mathbf{A}\mathbf{B})$.
- The Kronecker delta, in this vector notation, is defined by $\delta_{ij}=\begin{cases}1 & \text{if }i=j \\ 0 & \text{if }i\neq j\end{cases}$, where $i$ and $j$ can be 1, 2, or 3.
	- Hence, it's really just like the identity matrix: $\delta_{ij}=\begin{bmatrix}1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1\end{bmatrix}$.
	- Similar to the [[Dirac delta-function]], although on discrete domains instead of continuous, this gives it the property that $\delta_{ij}a_{j}=a_{i}$ - absorbing the repeated index.
	- Sometimes called the substitution tensor, because it replaces the repeated index with the free index.
	- Naturally, this is symmetrical for $\delta_{ji}a_{i}=a_{j}$, due to the re-ordering/re-labelling rules, and can be proved trivially.
	- Further touched on in [[mth3008 lecture 2|the next lecture]].
