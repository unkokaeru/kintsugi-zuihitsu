# Rank

> [!tip] Relevant parts to questions...
> - **Count free indices** to find the rank - dummy (repeated) indices don't count.
> - A rank-$r$ tensor in 3D has $3^{r}$ components and needs exactly $r$ factors of $L$ in its [[Tensor Transformation Rule]].
> - [[Contraction]] drops rank by 2, [[Outer Product]] adds ranks together, [[Tensor Addition]] preserves rank.

The **rank** (or **order**) of a tensor is the number of **free indices**. Dummy (summed/repeated) indices don't contribute. A rank-$r$ tensor in 3D has $3^{r}$ components and transforms with exactly $r$ factors of the rotation matrix in its [[Tensor Transformation Rule]].

| Rank | Object | Examples |
|---|---|---|
| 0 | Scalar | Temperature, $f$, $\mathbf{a}\cdot \mathbf{b}=a_{i}b_{i}$, trace $A_{ii}$ |
| 1 | Vector | Position $x_{i}$, gradient $\partial f/\partial x_{i}$ |
| 2 | Matrix/tensor | [[Metric Tensor]] $g_{ij}$, $[\nabla \mathbf{u}]_{ij}$, $A_{ik}B_{kj}$ |
| 3 | Cube | [[Alternating Tensor]] $\epsilon_{ijk}$, Christoffel-like objects |
| 4 | Hyper-array | [[Riemann-Christoffel Tensor]] $R^{r}_{ijk}$ |

**Rank arithmetic** (key for the exam):

- [[Outer Product]]: rank-$p$ $\otimes$ rank-$q$ = rank-$(p+q)$. *Example:* $A_{ij}B_{k\ell}$ is rank 4.
- [[Contraction]]: pairing two indices drops rank by 2. *Example:* $T_{ijij}$ is rank 0 (scalar) from rank 4.
- Inner product: outer product + contraction. *Example:* $A_{ij}B^{i}$ is rank 1.

> [!example]
> $T^{i}{}_{p}{}^{j}R_{ij}{}^{q}$ - $T$ is rank 3, $R$ is rank 3, outer product gives rank 6, then $i,i$ and $j,j$ contractions give rank $6-4=2$. Free indices left: $p$ and $q$. **Rank 2.**
