# Mth3008 Lecture 1

> [!quote] [Jesus Najera](https://setzeus.com/about), a friend of the lecturer
> Tensors are mathematical objects that are invariant under a change of coordinates & have components that change in predictable ways.

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
	- For example, $\mathbf{u}+(\mathbf{a}\cdot \mathbf{b})\mathbf{v}=|\mathbf{a}|^2(\mathbf{b}\cdot \mathbf{v})\mathbf{a}$…
		1. Introduce free index, like $i$: $(\mathbf{u}+(\mathbf{a}\cdot \mathbf{b})\mathbf{v})_{i}=((\mathbf{a}\cdot \mathbf{a})(\mathbf{b}\cdot \mathbf{v})\mathbf{a})_{i}:|\mathbf{a}|:=\sqrt{ \mathbf{a}\cdot \mathbf{a} }$.
		2. Distribute free index, for each vector.: $u_{i}+(\mathbf{a}\cdot \mathbf{b})v_{i}=(\mathbf{a}\cdot \mathbf{a})(\mathbf{b}\cdot \mathbf{v})a_{i}$.
		3. Introduce dummy indices, for each scalar: $u_{i}+a_{j}b_{j}v_{i}=a_{k}a_{k}b_{\ell}v_{\ell}a_{i}$
