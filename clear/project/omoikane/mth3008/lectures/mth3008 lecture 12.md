# MTH3008 Lecture 12

> [!quote]
> ...

Lecture 11 introduced tensors in generalised coordinate systems - covariant and contravariant components of first-rank tensors, and the basics of the metric tensor $g_{ik}$ and $g^{ik}$ for raising and lowering indices. This lecture continues Chapter 5, covering associated tensors, the metric tensor as a genuine second-rank tensor, and higher-order tensors in generalised coordinates.

## Covariant, Contravariant and Mixed Components of a Second-Rank Tensor

In 3D generalised coordinates, a **[[rank]]** has nine components. These come in four flavours:

- **[[Covariant and Contravariant Components]]** $A_{ik}$ (both indices down),
- **[[Covariant and Contravariant Components]]** $A^{ik}$ (both indices up),
- **[[mixed components]]** $A^{\cdot k}_{i}$ (first covariant, second contravariant),
- mixed components $A^{i}_{\cdot k}$ (first contravariant, second covariant).

> [!note] Dot notation for mixed components
> The dot marks the "gap" left by a moved index. In $A^{\cdot k}_{i}$, the first slot is covariant and the second contravariant: think of it as $(A_i)^k$. In $A^{i}_{\cdot k}$, the first slot is contravariant and the second covariant: $(A^i)_k$. The dot keeps track of index ordering when both indices sit on different levels.

### Transformation Laws

Under a coordinate change with direct coefficients $L^{k}_{i'}$ and inverse coefficients $L^{k'}_{i}$, each type transforms as expected:

$$
A'_{ik} = L^{\ell}_{i'} L^{m}_{k'} A_{\ell m}
$$

$$
A'^{ik} = L^{i'}_{\ell} L^{k'}_{m} A^{\ell m}
$$

$$
A'^{\cdot k}_{i} = L^{\ell}_{i'} L^{k'}_{m} A^{\cdot m}_{\ell}
$$

$$
A'^{i}_{\cdot k} = L^{i'}_{\ell} L^{m}_{k'} A^{\ell}_{\cdot m}
$$

The pattern: each covariant index picks up an $L^{\ell}_{i'}$ factor, each contravariant index picks up an $L^{i'}_{\ell}$ factor. This is the defining property of a tensor.

### Relations between Component Types

The metric tensor converts between all four types:

$$
\boxed{A_{ik} = g_{i\ell}\, g_{km}\, A^{\ell m} = g_{k\ell}\, A^{\cdot \ell}_{i} = g_{i\ell}\, A^{\ell}_{\cdot k}}
$$

$$
\boxed{A^{ik} = g^{i\ell}\, g^{km}\, A_{\ell m} = g^{i\ell}\, A^{\cdot k}_{\ell} = g^{k\ell}\, A^{i}_{\cdot \ell}}
$$

$$
\boxed{A^{\cdot k}_{i} = g^{k\ell}\, A_{i\ell} = g_{i\ell}\, A^{\ell k}}
$$

$$
\boxed{A^{i}_{\cdot k} = g^{i\ell}\, A_{\ell k} = g_{k\ell}\, A^{i\ell}}
$$

Every contraction with $g_{ik}$ lowers an index; every contraction with $g^{ik}$ raises one.

> [!warning] Indices in different positions cannot be added
> Recall from last lecture: if $A_i$ is covariant and $B^i$ is contravariant, the sum $A_i + B^i$ does not form a tensor. You can only add components of the same type - both up or both down.

### Symmetry and Antisymmetry

Symmetry and antisymmetry apply only to pairs of indices in the same position:

- $A^{\cdot\cdot\ell}_{ik}$ is **[[Symmetry and Antisymmetry]]** in $i$ and $k$ if $A^{\cdot\cdot\ell}_{ik} = A^{\cdot\cdot\ell}_{ki}$.
- $B^{ik}_{\cdot\cdot\ell}$ is **[[Symmetry and Antisymmetry]]** in $i$ and $k$ if $B^{ik}_{\cdot\cdot\ell} = -B^{ki}_{\cdot\cdot\ell}$.

You cannot compare symmetry between an upper and a lower index - the concept only makes sense for indices at the same level.

## Associated Tensors

Given a tensor, we can produce new tensors by raising or lowering its indices using the metric tensor. All tensors obtained this way are called **[[associated tensors]]** of the original.

### Raising and Lowering - the Rules

Start from a tensor and form an inner product with $g^{pq}$ (to raise) or $g_{pq}$ (to lower). The procedure:

1. Identify the repeated (dummy) index on the RHS.
2. Replace that dummy index with the new free index, as dictated by the metric tensor.
3. The position of the indices in the metric tensor tells you whether the new index is raised or lowered.

> [!example] First-rank example
> $A^p$ and $A_p$ are associated tensors:
> $\displaystyle A_p = g_{pq}\, A^q \quad \text{and} \quad A^p = g^{pq}\, A_q$

### Raising One Index

Given $A_{rq}$, raise the first index:

$$
\boxed{A^{p}_{\cdot q} = g^{rp}\, A_{rq}}
$$

The dummy index is $r$. The metric $g^{rp}$ replaces $r$ with $p$ and raises it.

Similarly, lowering the first index of $A^{rq}$:

$$
\boxed{A^{\cdot q}_{p} = g_{rp}\, A^{rq}}
$$

### Raising both Indices

Given $A_{rs}$, raise both:

$$
\boxed{A^{pq} = g^{rp}\, g^{sq}\, A_{rs}}
$$

Dummy indices $r$ and $s$ are replaced by $p$ and $q$ respectively, both raised.

### Lowering One Index of a Mixed Tensor

Given $A^{pq}_{\cdot\cdot s}$, lower the second contravariant index:

$$
\boxed{A^{p}_{\cdot rs} = g_{rq}\, A^{pq}_{\cdot\cdot s}}
$$

Dummy index $q$ is replaced by $r$, and $g_{rq}$ lowers it.

### A Higher-rank Example

For a tensor with multiple index moves at once:

$$
A^{qm\cdot tk}_{\cdot\cdot n} = g^{pk}\, g_{sn}\, g^{rm}\, A^{q\cdot st}_{\ \cdot r\cdot\cdot p}
$$

The repeated indices are $p$, $r$, and $s$. The metric tensors $g^{pk}$ and $g^{rm}$ raise $k$ and $m$ respectively, while $g_{sn}$ lowers $n$.

### Associated Tensors in Cartesian Coordinates

In Cartesian coordinates, $g_{pq} = \delta_{pq}$ (equals 1 if $p = q$, and 0 otherwise). So:

$$
A_p = g_{pq}\, A^q = \delta_{pq}\, A^q = A^p
$$

In Cartesian systems, covariant and contravariant components coincide. This is precisely why earlier in the module no distinction was needed between upper and lower indices - Cartesian coordinates are a special case where the metric tensor is the identity.

## The Metric Tensor as a Second-Rank Tensor

We have been using $g_{ik}$, $g^{ik}$, and $g^{\cdot k}_{i}$ freely, but are these actually components of a tensor? Yes - and here is the proof.

### Proving $g_{ik}$ Transforms as a Rank-2 Covariant Tensor

By definition, $g_{ik} = \mathbf{e}_i \cdot \mathbf{e}_k$. Under a coordinate change:

$$
g'_{ik} = \mathbf{e}'_i \cdot \mathbf{e}'_k = (L^{\ell}_{i'}\, \mathbf{e}_{\ell}) \cdot (L^{m}_{k'}\, \mathbf{e}_{m}) = L^{\ell}_{i'}\, L^{m}_{k'}\, (\mathbf{e}_{\ell} \cdot \mathbf{e}_{m})
$$

$$
\boxed{g'_{ik} = L^{\ell}_{i'}\, L^{m}_{k'}\, g_{\ell m}}
$$

This is exactly the transformation law of a covariant rank-2 tensor.

### The Contravariant and Mixed Components

Similarly:

$$
g'^{ik} = L^{i'}_{\ell}\, L^{k'}_{m}\, g^{\ell m}
$$

$$
g'^{\cdot k}_{i} = L^{\ell}_{i'}\, L^{k'}_{m}\, g^{\cdot m}_{\ell}
$$

So $g^{ik}$ gives the contravariant components and $g^{\cdot k}_{i}$ gives the mixed components of the same tensor.

### Are They Components of the Same Tensor?

To confirm that $g_{ik}$, $g^{ik}$, and $g^{\cdot k}_{i}$ belong to the same tensor, we need the standard relations (from the component-conversion formulae above) to hold. Using $\mathbf{e}_i = g_{i\ell}\, \mathbf{e}^{\ell}$:

$$
g^{ik} = \mathbf{e}^i \cdot \mathbf{e}^k = (g^{i\ell}\, \mathbf{e}_{\ell}) \cdot (g^{km}\, \mathbf{e}_{m}) = g^{i\ell}\, g^{km}\, g_{\ell m}
$$

$$
g_{ik} = \mathbf{e}_i \cdot \mathbf{e}_k = (g_{i\ell}\, \mathbf{e}^{\ell}) \cdot \mathbf{e}_k = g_{i\ell}\, g^{\ell}_{\cdot k}
$$

Both match the required forms. The **[[metric tensor]]** is a single second-rank tensor whose covariant, contravariant, and mixed components are $g_{ik}$, $g^{ik}$, and $g^{\cdot k}_{i}$ respectively.

## Higher-Order Tensors in Generalised Coordinates

In a generalised coordinate system (3D), a **[[rank]]** has $3^n$ components. But unlike Cartesian tensors, these components come in multiple varieties - covariant, contravariant, and mixed - depending on the position of each index.

> [!example] Third-rank tensor
> A third-rank tensor has $3^3 = 27$ components. Its mixed components $A^{\cdot\cdot\ell}_{ik}$, $A^{i\cdot\ell}_{\cdot k}$, etc. transform as:
> $\displaystyle A'^{\cdot\cdot\ell}_{ik} = L^{m}_{i'}\, L^{n}_{k'}\, L^{\ell'}_{r}\, A^{\cdot\cdot r}_{mn}$
> $\displaystyle A'^{i\cdot\ell}_{\cdot k} = L^{i'}_{m}\, L^{n}_{k'}\, L^{\ell'}_{r}\, A^{m\cdot r}_{\cdot n}$

Here $A^{\cdot\cdot\ell}_{ik}$ is a **[[Mixed Components]]** with two covariant indices ($i$, $k$) and one contravariant index ($\ell$). The rule generalises directly: each index transforms with $L^{\ell}_{i'}$ if covariant, $L^{i'}_{\ell}$ if contravariant.

---

## Pre-Lecture Notes from [[mth3008 lecture notes 12.pdf]]

- A second-rank tensor in 3D has nine components in four types: covariant $A_{ik}$, contravariant $A^{ik}$, and two mixed $A^{\cdot k}_{i}$, $A^{i}_{\cdot k}$ - dot notation tracks index order
- Transformation laws: covariant indices contract with $L^{\ell}_{i'}$, contravariant with $L^{i'}_{\ell}$
- All component types are interconvertible via the metric tensor: $g_{ik}$ lowers, $g^{ik}$ raises
- Symmetry/antisymmetry only defined for index pairs at the same level
- **Associated tensors**: any tensor obtained by raising/lowering indices of a given tensor; for first-rank tensors, $A_p = g_{pq} A^q$ and $A^p = g^{pq} A_q$
- In Cartesian coordinates $g_{pq} = \delta_{pq}$, so $A_p = A^p$ - no covariant/contravariant distinction needed
- The metric tensor is itself a second-rank tensor: $g'_{ik} = L^{\ell}_{i'} L^{m}_{k'} g_{\ell m}$, and $g_{ik}$, $g^{ik}$, $g^{\cdot k}_{i}$ are all components of the same tensor
- A rank-$n$ tensor in 3D has $3^n$ components with covariant, contravariant, and mixed varieties; each index transforms independently according to its position
- Next lecture: Chapter 6 - Tensor Algebra (addition, multiplication, and contraction of tensors)
