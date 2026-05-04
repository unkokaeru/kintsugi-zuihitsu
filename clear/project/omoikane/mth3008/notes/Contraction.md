# Contraction

> [!tip] Relevant parts to questions...
> - Set two indices of a tensor equal and invoke the summation convention. Each contraction drops the rank by **2**.
> - In generalised coordinates, contract **one upper with one lower** index only.
> - Outer product followed by contraction = **inner product**.
> - Orthogonality $L_{im}L_{in}=\delta_{mn}$ is what makes the result a tensor.

**Contraction** takes a rank-$n$ tensor (with $n\geq 2$) and reduces it to a rank-$(n-2)$ tensor by summing over a pair of its indices. Setting two indices equal and invoking the summation convention is the whole operation.

For a rank-3 covariant tensor $P_{ik \ell}$, there are three distinct ways to contract:

- $P_{ii \ell}=P_{11 \ell}+P_{22 \ell}+P_{33 \ell}$ (contract first two),
- $P_{ikk}=P_{i11}+P_{i22}+P_{i33}$ (contract last two),
- $P_{iki}=P_{1k1}+P_{2k2}+P_{3k3}$ (contract first with third).

Each is a rank-1 tensor (a vector).

## Why Contraction Preserves Tensor Character

In Cartesian coordinates, $P_{ik \ell}'=L_{im}L_{kn}L_{\ell r}P_{mnr}$. Contracting the first two indices by setting $i=k$:

$$
P_{ii \ell}'=L_{im}L_{in}L_{\ell r}P_{mnr}=\delta_{mn}L_{\ell r}P_{mnr}=L_{\ell r}P_{mmr}
$$

which is exactly the transformation law of a rank-1 tensor. The orthogonality relation $L_{im}L_{in}=\delta_{mn}$ collapses the two $L$-factors into a [[Kronecker Delta]], dropping the rank by 2.

## Generalised Coordinates: Contract Upper with Lower

> [!warning] Only valid with mismatched index positions
> In curvilinear coordinates, contraction only produces a tensor when one index is **covariant** and the other **contravariant**. Contracting two upper (or two lower) indices does *not* give a tensor, because $L_{n}^{k'}L_{r}^{k'}\neq \delta_{nr}$ in general.

So $A^{\cdot i \ell}_{i}$ is fine (one up, one down), but $A^{\cdot k \ell}_{i}$ contracted over $k$ and $\ell$ fails.

## Repeated Contraction

Since each contraction drops the rank by 2:

- A rank-$n$ tensor can be contracted $\lfloor n/2\rfloor$ times.
- If $n$ is **even**, repeated contraction eventually gives a **scalar**.
- If $n$ is **odd**, it eventually gives a **vector**.

## The Inner Product

The **inner product** of two tensors is an outer product followed by a contraction:

$$
A_{ik}B^{k}\qquad \lambda_{ik \ell m}B^{\ell m}\qquad A^{i}B_{i}
$$

All are inner products. They combine two tensors and immediately reduce the rank by contracting matching (upper-lower) index pairs.

## Properties

- **Rank drop**::one contraction removes 2 from the rank; two contractions remove 4; etc.
- **Preserves tensor character** when indices are at opposite levels (upper ↔ lower).
- **Familiar identities** from the [[Kronecker Delta]] and [[Alternating Tensor]]::
 - $\delta_{ij}\epsilon_{ijk}=0$ (contract alternating against symmetric)
 - $\epsilon_{ijk}\epsilon_{i \ell m}=\delta_{j \ell}\delta_{km}-\delta_{jm}\delta_{k \ell}$
 - $\epsilon_{ijk}\epsilon_{ijm}=2\delta_{km}$
 - $\epsilon_{ijk}\epsilon_{ijk}=6$.

## Applications

1. **Reducing rank** to produce a simpler tensor - e.g. the **trace** of a matrix $A_{ii}$ is the full contraction of a rank-2 tensor.
2. **Forming scalars and invariants** from higher-rank objects - e.g. $T^{i}_{\cdot i}$ is a coordinate-invariant trace.
3. **Computing inner products** cleanly in any coordinate system by pairing upper with lower indices.

> [!example] Trace as a contraction
> Contract the rank-2 tensor $[A_{ij}]=\begin{pmatrix}3 & 1 \\ 4 & 2\end{pmatrix}$: $A_{ii}=A_{11}+A_{22}=3+2=\boxed{5}$. This is a scalar - the trace.

> Set two indices equal; rank drops by 2; upper-with-lower in curvilinear coords.
