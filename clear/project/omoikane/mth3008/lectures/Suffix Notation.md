# Suffix Notation

- Suffix Notation (definition, nomenclature, conversion steps, and examples).
	- Converting everything into suffix form by applying free and dummy indices.
	- Using $\mathbf{a}\cdot \mathbf{b}=a_{i}b_{i}$, both ways.
	- Using $\mathbf{A}\mathbf{B}=A_{ik}+B_{kj}$ and $(A_{ij})^{T}=A_{ji}$.

---

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
