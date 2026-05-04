# Suffix Notation

> [!tip] Relevant parts to questions...
> - Converting everything into suffix form by applying free and dummy indices.
> - Using $\mathbf{a}\cdot \mathbf{b}=a_{i}b_{i}$, both ways.
> - Using $\mathbf{A}\mathbf{B}=A_{ik}+B_{kj}$ and $(A_{ij})^{T}=A_{ji}$.

**Suffix Notation**, or **Index Notation**, is simply when write a sum without the $\Sigma$ symbol. This results in an expression with two types of index:

- Dummy indices::Indices that are iterated over within a sum, e.g., $\sum_{j=1}^{3}a_{j}b_{j}\to \boxed{a_{j}b_{j}}$ - arbitrary variable naming with no presence in result.
- Free indices::Indices that represent a component within a tensor, e.g., the $i$th component of a vector - consistent variable naming for comparison across vectors.

We can convert to this notation by introducing these two index types:

1. Introduce free index, like $i$: $(\mathbf{u}+(\mathbf{a}\cdot \mathbf{b})\mathbf{v})_{i}=((\mathbf{a}\cdot \mathbf{a})(\mathbf{b}\cdot \mathbf{v})\mathbf{a})_{i}:|\mathbf{a}|:=\sqrt{ \mathbf{a}\cdot \mathbf{a} }$;
2. Distribute free index, for each vector.: $u_{i}+(\mathbf{a}\cdot \mathbf{b})v_{i}=(\mathbf{a}\cdot \mathbf{a})(\mathbf{b}\cdot \mathbf{v})a_{i}$;
3. Introduce dummy indices, for each scalar: $\boxed{u_{i}+a_{j}b_{j}v_{i}=a_{k}a_{k}b_{\ell}v_{\ell}a_{i}}$.
