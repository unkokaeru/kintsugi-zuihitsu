# MTH3008 Lecture 14

> [!quote]
> ...

Lecture 13 began Chapter 6 (Tensor Algebra) with addition of tensors - we proved that the sum of tensors with the same rank and structure is again a tensor, and showed that sums of tensors with different structures fail to transform correctly. This lecture picks up the remaining two topics from Chapter 6: the outer product of tensors and contraction of tensors.

## Outer Product of Tensors

### Definition and Basic Case

The **[[Outer Product]]** (also called the **[[Outer Product]]**) combines two tensors by multiplying their components index-by-index to produce a new tensor of higher rank.

Consider two second-rank covariant tensors with components $A_{ik}$ and $B_{\ell m}$. Their outer product is defined as

$$
C_{ik\ell m} = A_{ik} B_{\ell m}.
$$

The resulting object $C_{ik\ell m}$ has four indices - it is a fourth-rank tensor. The notation uses the symbol $\otimes$:

$$
\boxed{\mathbf{C} = \mathbf{A} \otimes \mathbf{B}, \quad C_{ik\ell m} = A_{ik} B_{\ell m}.}
$$

### Proof That the Outer Product is a Tensor

We need to verify the transformation law. Each factor transforms independently:

$$
A'_{ik} = L^{n}_{\ i'} L^{p}_{\ k'} A_{np}, \qquad B'_{\ell m} = L^{r}_{\ \ell'} L^{s}_{\ m'} B_{rs}.
$$

Multiplying these together:

$$
C'_{ik\ell m} = A'_{ik} B'_{\ell m} = L^{n}_{\ i'} L^{p}_{\ k'} A_{np} \cdot L^{r}_{\ \ell'} L^{s}_{\ m'} B_{rs} = L^{n}_{\ i'} L^{p}_{\ k'} L^{r}_{\ \ell'} L^{s}_{\ m'} A_{np} B_{rs} = L^{n}_{\ i'} L^{p}_{\ k'} L^{r}_{\ \ell'} L^{s}_{\ m'} C_{nprs}.
$$

This is exactly the transformation law for a fourth-rank covariant tensor.

### Outer Product of Different Structures

Recall that addition requires tensors to have the same structure. The outer product has no such restriction - tensors of different structures can be multiplied, and the result is a tensor whose structure is the concatenation of the factor structures.

> [!example]
> Let $A_{ij}$ be a rank-two covariant tensor and $B^{\ \ell}_{k}$ a rank-two mixed tensor. Their outer product is $C^{\ \ \ \cdot \ell}_{ijk} = A_{ij} B^{\ \ell}_{k}$.

### Proof for the Mixed Case

The transformation laws of the factors are

$$
A'_{ij} = L^{m}_{\ i'} L^{n}_{\ j'} A_{mn}, \qquad B'^{\ \ell}_{k} = L^{p}_{\ k'} L^{\ell'}_{\ q} B^{\ q}_{p}.
$$

Consequently:

$$
C'^{\ \ \ \cdot \ell}_{ijk} = A'_{ij} B'^{\ \ell}_{k} = L^{m}_{\ i'} L^{n}_{\ j'} A_{mn} \cdot L^{p}_{\ k'} L^{\ell'}_{\ q} B^{\ q}_{p} = L^{m}_{\ i'} L^{n}_{\ j'} L^{p}_{\ k'} L^{\ell'}_{\ q} \, C^{\ \ \ \cdot q}_{mnp},
$$

which is the transformation law of a rank-four mixed tensor with three covariant and one contravariant index.

> [!important]
> The outer product of any two tensors is a tensor. The structure of the result is the concatenation of the structures of the factors.

More examples of structure concatenation:

- $A^{\ j}_{i}$ and $B^{\ \ell}_{k}$ give $C^{\ j \cdot \ell}_{i \cdot k} = A^{\ j}_{i} B^{\ \ell}_{k}$.
- $D^{\ \ k}_{ij}$ and $E^{\ell \cdot n}_{\ m}$ give $F^{\ \ k \ell \cdot n}_{ij \ \ m} = D^{\ \ k}_{ij} E^{\ell \cdot n}_{\ m}$.

### Outer Product of Different Ranks

Tensors of different ranks cannot be added, but they can be multiplied. The rank of the product equals the sum of the ranks of the factors.

> [!example]
> $C^{\ \ \ \cdot \ell m}_{ijk} = A_{ijk} B^{\ell m}$ is a rank-five tensor, from a rank-three and a rank-two factor.

### Non-Commutativity

The outer product is **non-commutative**: in general, $A_{ik} B_{\ell m} \neq B_{ik} A_{\ell m}$, because the index positions matter.

> [!example]
> Take $A_{ik} = \begin{pmatrix} 0 & 1 & 2 \\ 1 & 0 & 0 \\ 1 & 3 & 4 \end{pmatrix}$ and $B_{\ell m} = \begin{pmatrix} 1 & 1 & 7 \\ 6 & 7 & 4 \\ 1 & 6 & 3 \end{pmatrix}$. Then $A_{12}B_{32} = 1 \cdot 6 = 6$, but $B_{12}A_{32} = 1 \cdot 3 = 3$.

### Visualisation of the Outer Product

For rank-one tensors (vectors), the outer product builds a matrix. Given

$$
\mathbf{v}_1 = \begin{pmatrix} 2 \\ 0 \end{pmatrix}, \qquad \mathbf{v}_2 = \begin{pmatrix} 1 & 7 \end{pmatrix},
$$

we get

$$
\mathbf{v}_1 \otimes \mathbf{v}_2 = \begin{pmatrix} 2 \\ 0 \end{pmatrix} \otimes \begin{pmatrix} 1 & 7 \end{pmatrix} = \begin{pmatrix} 2 \cdot 1 & 2 \cdot 7 \\ 0 \cdot 1 & 0 \cdot 7 \end{pmatrix} = \begin{pmatrix} 2 & 14 \\ 0 & 0 \end{pmatrix}.
$$

For two $2 \times 2$ matrices, the outer product is the $4 \times 4$ block structure known as the **[[Outer Product]]**:

$$
\mathbf{B} \otimes \mathbf{A} = \begin{pmatrix} b_{11} & b_{12} \\ b_{21} & b_{22} \end{pmatrix} \otimes \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix} = \begin{pmatrix} b_{11}a_{11} & b_{11}a_{12} & b_{12}a_{11} & b_{12}a_{12} \\ b_{11}a_{21} & b_{11}a_{22} & b_{12}a_{21} & b_{12}a_{22} \\ b_{21}a_{11} & b_{21}a_{12} & b_{22}a_{11} & b_{22}a_{12} \\ b_{21}a_{21} & b_{21}a_{22} & b_{22}a_{21} & b_{22}a_{22} \end{pmatrix}.
$$

### Multiple Tensor Products

The outer product extends to any number of factors. The rank of the result is always the sum of the ranks:

$$
P_{ijk\ell mn} = A_{ij} B_{k\ell} C_{mn} \quad (\text{rank } 6), \qquad C^{i \cdot \cdot mnp}_{\ k\ell} = A^{i}_{\ k\ell} B^{mn} C^{p} \quad (\text{rank } 6).
$$

## Contraction of Tensors

### Definition

**[[Contraction]]** is the operation of summing a tensor of rank $n$ (with $n \geq 2$) over two of its indices - setting them equal and invoking the summation convention. Each contraction reduces the rank by two.

> [!example]
> A third-rank tensor $P_{ik\ell}$ can be contracted in three ways:
> - $P_{ii\ell} = P_{11\ell} + P_{22\ell} + P_{33\ell}$, $\quad (\ell = 1,2,3)$
> - $P_{ikk} = P_{i11} + P_{i22} + P_{i33}$, $\quad (i = 1,2,3)$
> - $P_{iki} = P_{1k1} + P_{2k2} + P_{3k3}$, $\quad (k = 1,2,3)$

Each of these is a first-rank tensor (a vector).

### Proof That Contraction Preserves Tensor Character

Working in Cartesian coordinates, $P_{ik\ell}$ transforms as

$$
P'_{ik\ell} = L_{im} L_{kn} L_{\ell r} P_{mnr}.
$$

Contract the first two indices by setting $i = k$:

$$
P'_{ii\ell} = L_{im} L_{in} L_{\ell r} P_{mnr} = \delta_{mn} L_{\ell r} P_{mnr} = L_{\ell r} P_{mmr}.
$$

This is exactly the transformation law of a first-rank tensor (vector). The orthogonality relation $L_{im}L_{in} = \delta_{mn}$ does the heavy lifting here.

The other two contractions work analogously:

$$
P'_{ikk} = L_{im} L_{kn} L_{kr} P_{mnr} = L_{im} \delta_{nr} P_{mnr} = L_{im} P_{mnn},
$$

$$
P'_{iki} = L_{im} L_{kn} L_{ir} P_{mnr} = L_{kn} \delta_{mr} P_{mnr} = L_{kn} P_{mnm}.
$$

> [!important]
> $\displaystyle \text{Contraction of a rank-}n\text{ tensor produces a rank-}(n-2)\text{ tensor.}$

### Repeated Contraction

Since each contraction drops the rank by two, we can contract repeatedly (provided the rank is high enough):

- Rank $n$ $\to$ rank $n-2$ $\to$ rank $n-4$ $\to \cdots$
- If $n$ is even, repeated contraction eventually yields a **scalar** (rank 0).
- If $n$ is odd, repeated contraction eventually yields a **vector** (rank 1).

> [!example]
> Contract the second-rank tensor $[A_{ij}] = \begin{pmatrix} 3 & 1 \\ 4 & 2 \end{pmatrix}$. We get $A_{ii} = A_{11} + A_{22} = 3 + 2 = 5$, a scalar. This is just the trace.

### The Inner Product

The **[[Contraction]]** of two tensors is formed by taking their outer product and then contracting over one or more pairs of indices. Equivalently, it is the result of "contracting two tensors together."

> [!example]
> The following are inner products:
> - $A_{ik}B^{k}$ (rank-two times rank-one, contracted to rank-two)
> - $\lambda_{ik\ell m}B^{\ell m}$ (rank-four times rank-two, contracted to rank-two)
> - $A^{i}B_{i}$ (two rank-one tensors, contracted to a scalar)

We have already met many inner products involving the Kronecker delta $\delta_{ij}$ and the alternating tensor $\epsilon_{ijk}$:

$$
\boxed{\delta_{ij}\epsilon_{ijk} = 0_{k}, \qquad \epsilon_{ijk}\epsilon_{i\ell m} = \delta_{j\ell}\delta_{km} - \delta_{jm}\delta_{k\ell}, \qquad \epsilon_{ijk}\epsilon_{ijm} = 2\delta_{km}, \qquad \epsilon_{ijk}\epsilon_{ijk} = 6.}
$$

### Contraction in Generalised Coordinates

> [!warning]
> In generalised (curvilinear) coordinate systems, contraction can only be performed on pairs of indices in **different positions** - one covariant and one contravariant. Contracting two indices in the same position does not produce a tensor.

For example, given $A^{\ k\ell}_{i}$, contracting over $i$ and $k$ (one lower, one upper) gives a valid tensor:

$$
A^{\ i\ell}_{i} = L^{m}_{\ i'} L^{i'}_{\ n} L^{\ell'}_{\ r} A^{\ nr}_{m} = \delta^{m}_{n} L^{\ell'}_{\ r} A^{\ nr}_{m} = L^{\ell'}_{\ r} A^{\ nr}_{n}.
$$

But contracting over $k$ and $\ell$ (both upper) fails:

$$
A'^{\ kk}_{i} = L^{m}_{\ i'} L^{k'}_{\ n} L^{k'}_{\ r} A^{\ nr}_{m},
$$

and $L^{k'}_{\ n} L^{k'}_{\ r} \neq \delta_{nr}$ in general, so the result does not transform as a vector.

The same rule applies to inner products: we can only sum over indices in different positions. Valid examples include $A^{i}B_{i}$, $A_{ik}B^{k}$, $\lambda^{\ \ \ell m}_{ik}B_{\ell m}$, and $\lambda^{\ \ \ell}_{ik \cdot m}B^{\ m}_{\ell}$.

---

## Pre-Lecture Notes from [[mth3008 lecture notes 14.pdf]]

- **Outer product** (tensor product, $\otimes$): multiply components index-by-index; $C_{ik\ell m} = A_{ik}B_{\ell m}$ is rank four from two rank-two factors. Proved via transformation laws - each factor contributes its own $L$ matrices.
- Works across **different structures** (covariant $\times$ mixed, etc.) and **different ranks**; the resulting rank is always the sum of factor ranks and the structure is the concatenation.
- The outer product is **non-commutative**: $A_{ik}B_{\ell m} \neq B_{ik}A_{\ell m}$ in general.
- Extends to products of any number of tensors: $P_{ijk\ell mn} = A_{ij}B_{k\ell}C_{mn}$ (rank six).
- **Contraction**: summing a rank-$n$ tensor over two indices yields a rank-$(n-2)$ tensor. Orthogonality ($L_{im}L_{in} = \delta_{mn}$) ensures the result transforms correctly. Repeated contraction gives a scalar (even rank) or vector (odd rank).
- **Inner product**: outer product followed by contraction; familiar examples include $\delta_{ij}\epsilon_{ijk}=0_k$ and $\epsilon_{ijk}\epsilon_{i\ell m} = \delta_{j\ell}\delta_{km}-\delta_{jm}\delta_{k\ell}$.
- In **generalised coordinates**, contraction requires one covariant and one contravariant index; same-position contractions break the tensor transformation law.
- Next lecture begins **Chapter 7: Tensor Fields**, covering preliminaries and covariant differentiation.
