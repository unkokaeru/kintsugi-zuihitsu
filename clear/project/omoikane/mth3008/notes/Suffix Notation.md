# Suffix Notation

> [!tip] Relevant parts to questions...
> - Converting everything into suffix form by applying free and dummy indices.
> - Using $\mathbf{a}\cdot \mathbf{b}=a_{i}b_{i}$, both directions.
> - Using $(\mathbf{A}\mathbf{B})_{ij}=A_{ik}B_{kj}$, $(A^{T})_{ij}=A_{ji}$, and $\mathrm{Tr}(\mathbf{A})=A_{ii}$.
> - **Einstein convention**: any index that appears exactly twice in a term is summed over $1,2,3$.

**Suffix Notation** (or **Index Notation**) drops the explicit $\Sigma$ symbol via the Einstein summation convention - repeated indices are implicitly summed. Two index types appear:

- **Dummy indices**: appear exactly **twice** in a term, summed over $1,2,3$ - arbitrary name, no presence in result, e.g., $\sum_{j=1}^{3}a_{j}b_{j}\to \boxed{a_{j}b_{j}}$.
- **Free indices**: appear exactly **once** in a term, label components of the result - same name on every term in an equation, e.g., the $i$-th component of a vector.

**Index-counting sanity checks** (always verify):

1. Every term must have the **same free indices**.
2. No index appears more than twice in a single term.
3. Number of free indices = [[rank]] of the expression.

### Suffix Notation Dictionary

| Vector/matrix form | Suffix form | Notes |
|---|---|---|
| Dot product $\mathbf{a}\cdot \mathbf{b}$ | $a_{i}b_{i}$ | Scalar |
| Cross product $(\mathbf{a}\times \mathbf{b})_{i}$ | $\epsilon_{ijk}a_{j}b_{k}$ | Vector |
| Matrix product $(\mathbf{A}\mathbf{B})_{ij}$ | $A_{ik}B_{kj}$ | Rank 2 |
| Transpose $(\mathbf{A}^{T})_{ij}$ | $A_{ji}$ | Swap indices |
| Trace $\mathrm{Tr}(\mathbf{A})$ | $A_{ii}$ | Scalar |
| Coordinate derivative $\partial x_{j}/\partial x_{i}$ | $\delta_{ij}$ | Cartesian only |

### Converting to Suffix Form

1. **Introduce free index** for each free slot of the result (e.g., $i$ for vector identities).
2. **Distribute the free index** across each vector/tensor in the expression.
3. **Introduce a fresh dummy index** for each scalar sub-expression (dot product, contraction).

> [!example]
> Convert $\mathbf{u}+(\mathbf{a}\cdot \mathbf{b})\mathbf{v}=(\mathbf{a}\cdot \mathbf{a})(\mathbf{b}\cdot \mathbf{v})\mathbf{a}$:
>
> 1. Apply free index $i$: $u_{i}+(\mathbf{a}\cdot \mathbf{b})v_{i}=(\mathbf{a}\cdot \mathbf{a})(\mathbf{b}\cdot \mathbf{v})a_{i}$;
> 2. Introduce a **fresh** dummy index for each scalar dot product: $\boxed{u_{i}+a_{j}b_{j}v_{i}=a_{k}a_{k}b_{\ell}v_{\ell}a_{i}}$.
>
> Note that we use **different dummy indices** for each scalar - never reuse a dummy index within the same term.
