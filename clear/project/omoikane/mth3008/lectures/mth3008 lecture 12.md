# MTH3008 Lecture 12

Last time we introduced **[[MTH3008 contravariant and covariant components|covariant and contravariant components]]** of vectors and saw how they transform under changes of coordinates; now we generalise this to higher-rank **[[MTH3008 tensors|tensors]]** in arbitrary coordinate systems. In this lecture we systematise covariant, contravariant, and mixed components, define **[[MTH3008 associated tensors|associated tensors]]**, and show that the **[[MTH3008 metric tensor|metric tensor]]** itself is a second-rank tensor with covariant, contravariant, and mixed components.

## First-rank Tensors in Generalised Coordinates

We work in a generalised 3D coordinate system with some (possibly non-orthonormal) basis.

A first-rank tensor is just a **[[MTH3008 vectors as rank-one tensors|vector]]** $A$, which can be represented in two dual ways:

- by its **covariant components** $A_{i}$,
- or by its **contravariant components** $A^{i}$.

These are related via the metric:

$$
A_{i} = g_{ik} A^{k}, \qquad
A^{i} = g^{ik} A_{k},
$$

where $g_{ik}$ and $g^{ik}$ are determined entirely by the choice of basis of the coordinate system.

> [!important] Covariant vs contravariant vector components
> Covariant components $A_{i}$ live naturally with covectors (dual basis), while contravariant components $A^{i}$ live with vectors (primal basis). The metric tensor provides the linear isomorphism between these two descriptions via $A_{i} = g_{ik} A^{k}$ and $A^{i} = g^{ik} A_{k}$.

The key point is that the **metric tensor** encodes the inner product structure and determines how we raise and lower indices for first-rank tensors.

## Second-rank Tensors: Types of Components

In 3D, a second-rank **[[MTH3008 second-rank tensors|tensor of rank two]]** is fully determined by $3^{2} = 9$ components, but these can appear in several flavours:

- Covariant components: $A_{ik}$.
- Contravariant components: $A^{ik}$.
- Mixed components:
  - $A^{\;\;k}_{i\;\;}$ (covariant in the first index, contravariant in the second),
  - $A^{\;\;i}_{\;\;k}$ (contravariant in the first index, covariant in the second).

### Dot Notation for Mixed Components

To keep track of where an index originally lived, we introduce a **[[MTH3008 dot notation for mixed tensors|dot notation]]**. For instance:

- $A^{\;\;k}_{i\;\;\cdot}$ is written as $A^{\cdot k}_{i}$,
- $A^{\;\;i}_{\;\;k\cdot}$ is written as $A^{i}_{\cdot k}$.

The dot marks the original position of the index that has been raised or lowered and emphasises the order of indices.

> [!note] Reading mixed components
> The component $A^{\cdot k}_{i}$ should be read as "$A$ with a covariant index $i$ and a contravariant index $k$ in that order", while $A^{i}_{\cdot k}$ has the contravariant index $i$ first and covariant index $k$ second. Even if we sometimes omit dots, the order of indices still matters.

---

## Transformation Laws for Second-rank Tensors

Under a change of coordinates, we have direct and inverse transformation matrices with components $L^{k}_{\;\;i'}$ and $L^{k'}_{\;\;i}$. The components of a second-rank tensor transform as follows:

- Covariant:

  $$
  A'_{ik} = L^{\ell}_{\;\;i'} L^{m}_{\;\;k'} A_{\ell m}.

$

$

- Contravariant:
  $$

  A'^{ik} = L^{i'}*{\;\;\ell} L^{k'}*{\;\;m} A^{\ell m}.

$$
- Mixed:
  $$

  A'^{\cdot k}*{i} = L^{\ell}*{\;\;i'} L^{k'}*{\;\;m} A^{\cdot m}*{\ell}, \qquad

  A'^{i}*{\cdot k} = L^{i'}*{\;\;\ell} L^{m}*{\;\;k'} A^{\ell}*{\cdot m}.

$$

> [!warning] Do not mix covariant and contravariant indices
> You cannot add or compare components with indices in different positions; for example, $A_{i} + B^{i}$ is not a tensor unless you first use the metric to raise or lower an index so they match in type and position.

These formulae are the natural extension of the first-rank tensor transformation rules to rank two.

---

## Relations between Covariant, Contravariant, and Mixed Components

The **[[MTH3008 metric tensor|metric tensor]]** allows us to move indices up and down. For a second-rank tensor $A$, the various components are related by:

- From contravariant or mixed to covariant:
  $$

  A_{ik} = g_{i\ell} g_{km} A^{\ell m}

		  = g_{k\ell} A^{\cdot \ell}*{i}

		  = g*{i\ell} A^{\ell}_{\cdot k}.

$$
- From covariant or mixed to contravariant:
  $$

  A^{ik} = g^{i\ell} g^{km} A_{\ell m}

		  = g^{i\ell} A^{\cdot k}*{\ell}

		  = g^{k\ell} A^{i}*{\cdot \ell}.

$$
- Between mixed variants:
  $$

  A^{\cdot k}*{i} = g^{k\ell} A*{i\ell} = g_{i\ell} A^{\ell k},

$$
  $$

  A^{i}*{\cdot k} = g^{i\ell} A*{\ell k} = g_{k\ell} A^{i\ell}.

$$

> [!important] Raising and lowering with the metric
> To convert between different index positions, contract with $g_{ij}$ (to lower) or $g^{ij}$ (to raise). Each contraction acts on exactly one index and preserves the tensorial nature of the object.

The pattern to remember is: contract with $g_{ij}$ to lower a contravariant index into the corresponding position, and contract with $g^{ij}$ to raise a covariant index.

---

## Symmetry and Antisymmetry in Tensor Indices

For second-rank tensors, **[[MTH3008 symmetry of tensors|symmetry]]** and **[[MTH3008 antisymmetry of tensors|antisymmetry]]** make sense only for pairs of indices in the *same* position (both lower or both upper, at fixed other indices).

- A tensor $A^{\cdot \cdot \ell}_{ik}$ is symmetric in $i$ and $k$ if
  $$

  A^{\cdot \cdot \ell}*{ik} = A^{\cdot \cdot \ell}*{ki}.

$$
- A tensor $B_{ik}^{\cdot \cdot \ell}$ is antisymmetric in $i$ and $k$ if
  $$

  B_{ik}^{\cdot \cdot \ell} = - B_{ki}^{\cdot \cdot \ell}.

$$

> [!warning] Symmetry must match index positions
> Saying “$A^{i}_{\;\;k}$ is symmetric in $i$ and $k$” is not meaningful unless you have first raised or lowered one of the indices so that both are in the same position; mixing covariant and contravariant indices breaks the usual symmetry notion.

This is consistent with how we treat symmetric and antisymmetric matrices, which correspond to $(0,2)$ or $(2,0)$ tensors.

---

## Associated Tensors via Raising and Lowering Indices

Given a tensor, we can derive its **[[MTH3008 associated tensors|associated tensors]]** by raising or lowering some of its indices using the metric. The dot notation keeps track of where each index used to live.

### Lowering and Raising Indices for a Second-rank Tensor

Let $A_{pq}$ be a tensor with both indices covariant. We can:
- Raise the index $p$ to obtain a mixed tensor:
  $$

  A^{\cdot q}*{p} = g^{rp} A*{rq},

$$
- Raise $q$ as well to obtain a fully contravariant tensor:
  $$

  A^{pq}*{\cdot \cdot} = g^{rp} g^{sq} A*{rs}.

$$

> [!example] Reading $A^{\cdot q}_{p} = g^{rp} A_{rq}$
> On the right-hand side, the repeated index $r$ is summed over. The metric $g^{rp}$ “replaces” $r$ with $p$ and raises that index, while the dot on the left reminds us that $p$ was originally lower.

The **rule of thumb**:
- Look for repeated indices on the right-hand side.
- Each repeated index is summed over.
- The position of that index in the metric ($g_{ij}$ vs $g^{ij}$) tells you which index is raised or lowered.

### Worked Examples of Associated Tensors

1. From fully covariant to fully contravariant:
   $$

   A^{pq} = g^{rp} g^{sq} A_{rs}.

$$
   Here:
   - Indices $r$ and $s$ are repeated, so we sum over them.
   - $g^{rp}$ replaces $r$ with $p$ and raises the first index.
   - $g^{sq}$ replaces $s$ with $q$ and raises the second index.

2. From mixed to partially lowered:
   $$

   A^{p}*{\cdot rs} = g*{rq} A^{pq}_{\cdot \cdot s}.

$$
   The repeated index $q$ is summation; $g_{rq}$ replaces $q$ with $r$ and lowers that index, moving it into the covariant slot.

3. More complicated pattern:
   $$

   A^{qm\; t k}*{\cdot\;\;\;\cdot\;\;\;\cdot n} = g^{pk} g*{sn} g^{rm} A^{q\cdot st}_{\;\;\;\cdot r \cdot\cdot p}.

$$
   Here:
   - Repeated indices are $p$, $r$, and $s$.
   - $g^{pk}$ raises the index associated with $p$ and replaces it with $k$.
   - $g_{sn}$ lowers the index associated with $s$ and replaces it with $n$.
   - $g^{rm}$ raises the index associated with $r$ and replaces it with $m$.

> [!important] Associated tensors
> All tensors obtained from a given tensor by raising or lowering one or more indices using the metric are called its associated tensors. They all encode the same geometric object, just in different index placements.

For a vector, the associated tensors $A_{p}$ and $A^{p}$ are linked by
$$

A_{p} = g_{pq} A^{q}, \qquad A^{p} = g^{pq} A_{q}.

$$

---

## Cartesian Coordinates as a Special case

In **[[MTH3008 Cartesian coordinates|Cartesian coordinates]]**, the metric is simply
$$

g_{pq} =

\begin{cases}

1, & p = q, \\

0, & p \neq q.

\end{cases}

$$

For associated vector components this gives
$$

A_{p} = g_{pq} A^{q}, \qquad A^{p} = g^{pq} A_{q},

$$
but in this case $g_{pq}$ coincides with the identity matrix, so
$$

A_{p} = A^{p}.

$$

> [!note] Why we did not distinguish $A_{i}$ and $A^{i}$ before
> In Cartesian coordinates with the standard Euclidean metric, raising and lowering indices does nothing numerically, so it is common to write vector components with a single type of index. In general coordinates, however, we must keep the distinction.

This explains why earlier vector calculus often ignores covariant versus contravariant components—they coincide in this special setting.

---

## The Metric Tensor as a Second-rank Tensor

We now show that the collections
$$

g_{ik}, \quad g^{ik}, \quad g^{\cdot k}*{i}

$$
are themselves the components of a second-rank tensor: the **metric tensor**.

### Covariant Components of the Metric

By definition,
$$

g'*{ik} = \mathbf{e}'*{i} \cdot \mathbf{e}'*{k},

$$
where $\{\mathbf{e}'_{i}\}$ is the transformed basis. Using the transformation rule for bases,
$$

\mathbf{e}'*{i} = L^{\ell}*{\;\;i'} \mathbf{e}*{\ell},

\qquad

\mathbf{e}'*{k} = L^{m}*{\;\;k'} \mathbf{e}*{m},

$$
we obtain
\[
\begin{aligned}
g'_{ik}
&= \mathbf{e}'_{i} \cdot \mathbf{e}'_{k}
 = (L^{\ell}_{\;\;i'} \mathbf{e}_{\ell}) \cdot (L^{m}_{\;\;k'} \mathbf{e}_{m}) \\
&= L^{\ell}_{\;\;i'} L^{m}_{\;\;k'} (\mathbf{e}_{\ell} \cdot \mathbf{e}_{m})
 = L^{\ell}_{\;\;i'} L^{m}_{\;\;k'} g_{\ell m}.
\end{aligned}
\]
This matches the transformation law for a covariant second-rank tensor.

Hence the **covariant components** $g_{ik}$ form a $(0,2)$ tensor.

### Contravariant and Mixed Metric Components

A similar computation shows:

- For contravariant components:
  $$

  g'^{ik} = L^{i'}*{\;\;\ell} L^{k'}*{\;\;m} g^{\ell m},

$$
- For mixed components:
  $$

  g'^{\cdot k}*{i} = L^{\ell}*{\;\;i'} L^{k'}*{\;\;m} g^{\cdot m}*{\ell}.

$$

> [!important] The metric tensor
> The metric tensor is a rank-two tensor whose covariant components are $g_{ik}$, contravariant components are $g^{ik}$, and mixed components are $g^{\cdot k}_{i}$. These all transform as second-rank tensors and are connected by raising and lowering indices.

So $g_{ik}$, $g^{ik}$, and $g^{\cdot k}_{i}$ can be viewed as different index placements of the *same* geometric tensor.

---

## Verifying that All Metric Components Belong to One Tensor

To verify that $g_{ik}$, $g^{ik}$, and $g^{\cdot k}_{i}$ are components of the same tensor, we must show that they obey the same relations we wrote earlier for a generic second-rank tensor:
$$

A_{ik} = g_{i\ell} g_{km} A^{\ell m}

	   = g_{k\ell} A^{\cdot \ell}*{i}

	   = g*{i\ell} A^{\ell}*{\cdot k},

$$
and similarly for all other combinations.

We use the relation between the basis and its dual:
$$

\mathbf{e}*{i} = g_{i\ell} \mathbf{e}^{\ell},

$$
where $\{\mathbf{e}^{\ell}\}$ is the dual basis.

Then:
\[
\begin{aligned}
g_{ik}
&= \mathbf{e}_{i} \cdot \mathbf{e}_{k}
 = (g_{i\ell} \mathbf{e}^{\ell}) \cdot (g_{km} \mathbf{e}^{m}) \\
&= g_{i\ell} g_{km} (\mathbf{e}^{\ell} \cdot \mathbf{e}^{m})
 = g_{i\ell} g_{km} g^{\ell m},
\end{aligned}
\]
and similarly
\[
\begin{aligned}
g^{ik}
&= \mathbf{e}^{i} \cdot \mathbf{e}^{k}
 = (g^{i\ell} \mathbf{e}_{\ell}) \cdot \mathbf{e}^{k}
 = g^{i\ell} g^{\cdot k}_{\ell}.
\end{aligned}
\]

> [!warning] Keeping track of bases
> It is easy to get lost between $\mathbf{e}_{i}$ and $\mathbf{e}^{i}$. Remember: $\mathbf{e}_{i}$ is the basis for vectors, $\mathbf{e}^{i}$ is the dual basis, and the metric $g_{ij}$ tells you how to express one in terms of the other.

These identities show that the metric components fit the same pattern as general second-rank tensors, so $g_{ik}$, $g^{ik}$, and the mixed versions are all just different index placements of one underlying tensor.

---

## Higher-order Tensors in Generalised Coordinates

In a generalised 3D coordinate system, a tensor of rank $n$ has $3^{n}$ components. However, these components can again be of various types:

- all covariant,
- all contravariant,
- or any mixture of covariant and contravariant indices.

> [!important] Counting components vs types
> The total number of independent components of a rank-$n$ tensor in 3D is $3^{n}$, regardless of how many indices are covariant or contravariant; what changes is the *type* of tensor, not the count of components.

This generalises the rank-2 story to arbitrary rank.

### Example: Third-rank Tensors and Their Mixed Components

Consider a third-rank tensor $A$. It has $3^{3} = 27$ components, but many index configurations, for example:
- $A^{\cdot \cdot \ell}_{ik}$ (two covariant indices and one contravariant),
- $A^{i\cdot \ell}_{\cdot k}$,
- and many others.

Under coordinate change, such a mixed tensor transforms as
$$

A'^{\cdot \cdot \ell}*{ik} = L^{m}*{\;\;i'} L^{n}*{\;\;k'} L^{\ell'}*{\;\;r} A^{\cdot \cdot r}_{mn},

$$
and similarly for configurations like $A^{i\cdot \ell}_{\cdot k}$ with appropriate placements of $L$ and its inverse.

> [!note] Mixed type description
> A component like $A^{\cdot \cdot \ell}_{ik}$ is described as a “mixed tensor with two covariant indices and one contravariant index”. This description ignores the order but emphasises how many upper versus lower indices we have.

The general pattern is clear: each index slot transforms with either the direct or inverse transformation matrix, depending on whether it is covariant or contravariant.

---

## Pre-Lecture Notes from [[mth3008 lecture notes 12.pdf|University Notes]]

- First-rank tensors (vectors) in generalised coordinates have covariant components $A_{i}$ and contravariant components $A^{i}$, related by the metric via $A_{i} = g_{ik} A^{k}$ and $A^{i} = g^{ik} A_{k}$.
- Second-rank tensors have covariant, contravariant, and mixed components: $A_{ik}$, $A^{ik}$, $A^{\cdot k}_{i}$, and $A^{i}_{\cdot k}$, each with explicit transformation laws under coordinate changes.
- The metric tensor provides systematic rules for raising and lowering indices, yielding associated tensors such as $A^{\cdot q}_{p} = g^{rp} A_{rq}$ and $A^{pq} = g^{rp} g^{sq} A_{rs}$.
- Symmetry and antisymmetry of tensors only make sense for pairs of indices in the same position (both covariant or both contravariant), with conditions like $A^{\cdot \cdot \ell}_{ik} = A^{\cdot \cdot \ell}_{ki}$ and $B_{ik}^{\cdot \cdot \ell} = -B_{ki}^{\cdot \cdot \ell}$.
- In Cartesian coordinates, the metric is $g_{pq} = 1$ when $p = q$ and $0$ otherwise, which implies $A_{p} = A^{p}$ and explains why covariant/contravariant distinctions often vanish in Euclidean vector calculus.
- The metric components $g_{ik}$, $g^{ik}$, and $g^{\cdot k}_{i}$ transform as second-rank tensors and satisfy relations like $g_{ik} = g_{i\ell} g_{km} g^{\ell m}$, confirming that they are just different index placements of one metric tensor.
- Higher-rank tensors in 3D have $3^{n}$ components and may have arbitrary mixtures of covariant and contravariant indices; an example third-rank tensor has mixed components like $A^{\cdot \cdot \ell}_{ik}$, transforming with three factors of the transformation matrix.
- Next lecture preview (Chapter 6: Tensor Algebra): we will study addition and multiplication of tensors, as well as contraction operations that reduce tensor rank by summing over pairs of indices.
