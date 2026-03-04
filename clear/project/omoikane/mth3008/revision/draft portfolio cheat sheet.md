# **MTH3008** Tensor Analysis, Portfolio Cheat Sheet

> [!TIP] Created by William Fayers
> Have fun!

## 1. Suffix Notation

### Core Rules (dummy Vs free)

- Repeated indices are summed over $1,2,3$ (summation convention).
- Dummy indices appear **exactly twice** in a term, and not more than twice.
- Free indices appear once; every term in an equation must have the same free indices.
- Scalars have 0 free indices; vectors have 1 free index; "matrix-like objects" have 2 free indices (intuition).

### Dot Products + Matrices

- Dot product: $a\cdot b = a_j b_j$.
- Matrix product entries: if $C=AB$ then $C_{ij}=A_{ik}B_{kj}$.
- Trace: $\mathrm{Tr}(C)=C_{jj}$, and $\mathrm{Tr}(AB)=\mathrm{Tr}(BA)$ by relabelling dummy indices.

### Kronecker Delta $\delta_{ij}$

- Definition: $\delta_{ij}=1$ if $i=j$, $0$ otherwise (identity-matrix components).
- Substitution ("absorbs the sum"): $\delta_{ij}a_j=a_i$ (and similarly $\delta_{ji}a_i=a_j$).
- Useful collapse: $\delta_{ij}\delta_{jk}=\delta_{ik}$.

### Alternating Tensor $\epsilon_{ijk}$ (Levi–Civita in 3D)

- Definition: $\epsilon_{ijk}=0$ if any indices repeat; $+1$ for even permutations of $(1,2,3)$; $-1$ for odd permutations.
- Cyclic permutations keep sign, swapping two indices flips sign (antisymmetry).

### Cross Product, Determinants, Triple Products

- Cross product: $(a\times b)_i=\epsilon_{ijk}a_j b_k$.
- Scalar triple product: $a\cdot(b\times c)=\epsilon_{ijk}a_i b_j c_k$.
- Determinant formulas (row/column versions): $|M|=\epsilon_{ijk}M_{1i}M_{2j}M_{3k}=\epsilon_{ijk}M_{i1}M_{j2}M_{k3}$.

### Delta–epsilon Identity (the workhorse)

- $\epsilon_{ijk}\epsilon_{k\ell m}=\delta_{i\ell}\delta_{jm}-\delta_{im}\delta_{j\ell}$.
- Standard example: $a\times(b\times c)=(a\cdot c)b-(a\cdot b)c$ (proved by inserting the identity above).

## 1. $\nabla$, grad/div/curl (Chapter 2)

### Definitions in Cartesian $(x_1,x_2,x_3)$

- Gradient of scalar $f$: $[ \nabla f ]_i=\partial f/\partial x_i$.
- Divergence of vector $u$: $\nabla\cdot u=\partial u_j/\partial x_j$ (a scalar: no free indices).
- Curl of vector $u$: $[ \nabla\times u ]_i=\epsilon_{ijk}\,\partial u_k/\partial x_j$.

### Position Vector + a Common Radial Trick

- In these lectures the position vector is $r=(x_1,x_2,x_3)$ and its magnitude is also denoted $r=|r|$.
- A standard result used in Practical 2: if $r=(x_jx_j)^{1/2}$, then $\nabla f(r)=f'(r)\,r/r$.

### Operator Combinations (know what is Always 0)

- $\nabla\cdot(\nabla f)=\nabla^2 f=\partial^2 f/(\partial x_j\partial x_j)$.
- $\nabla\times(\nabla f)=0$.
- $\nabla\cdot(\nabla\times u)=0$.
- Vector Laplacian identity: $\nabla^2 u=\nabla(\nabla\cdot u)-\nabla\times(\nabla\times u)$.

### Product / "vector Calculus identity" Templates

- $\nabla(fg)=f\,\nabla g+g\,\nabla f$.
- $\nabla\cdot(fu)=(\nabla f)\cdot u+f(\nabla\cdot u)$.
- $\nabla\times(fu)=\nabla f\times u+f(\nabla\times u)$.
- $\nabla\cdot(u\times v)=(\nabla\times u)\cdot v-(\nabla\times v)\cdot u$.
- $\nabla\times(u\times v)=u(\nabla\cdot v)+(v\cdot\nabla)u-(u\cdot\nabla)v-v(\nabla\cdot u)$, with $u\cdot\nabla=u_j\partial/\partial x_j$.
- $\nabla(u\cdot v)=u\times(\nabla\times v)+v\times(\nabla\times u)+(u\cdot\nabla)v+(v\cdot\nabla)u$.

## 2. Local Coordinates, Metric, Arc Length (Chapter 3)

### Arc Length + Metric Tensors

- For a local coordinate system with basis $\{e_1,e_2,e_3\}$ and coordinates $x_i$, the line element satisfies $ds^2=dr\cdot dr$.
- The lectures write $ds^2=g_{ik}\,dx_i\,dx_k$ and also $ds^2=g^{ik}\,dx_i\,dx_k$, where $g_{ik}$ is the covariant metric tensor and $g^{ik}$ the contravariant metric tensor.
- In an orthogonal basis, $ds^2=\sum_{i=1}^3 h_i^2 (dx_i)^2$ where $h_i=\sqrt{g_{ii}}$ are the metric coefficients.

### Basis Vectors from the Position Vector

- The basis vectors can be computed from the position vector $r$ via $e_i=\partial r/\partial x_i$.
- Then $g_{ij}=e_i\cdot e_j=(\partial r/\partial x_i)\cdot(\partial r/\partial x_j)$.

### Orthogonal Bases: raising/lowering Gets Easy

- In an orthogonal basis, $g_{ik}=0$ for $i\neq k$, so the relationship between covariant/contravariant components reduces to diagonal scaling.
- The slides derive $g^{11}=1/g_{11}$, $g^{22}=1/g_{22}$, $g^{33}=1/g_{33}$ (and similarly for each diagonal entry).

### Cylindrical Coordinates Worked Pattern (must Be fluent)

- For cylindrical $(x_1,x_2,x_3)=(r,\theta,z)$, the position vector is $r=r\cos\theta\,i_1+r\sin\theta\,i_2+z\,i_3$.
- The basis vectors are $e_1=\cos\theta\,i_1+\sin\theta\,i_2$, $e_2=r\sin\theta\,i_1+r\cos\theta\,i_2$, $e_3=i_3$, and the system is orthogonal.
- The metric coefficients are $g_{11}=1$, $g_{22}=r^2$, $g_{33}=1$, so $ds^2=dr^2+r^2 d\theta^2+dz^2$ and $(h_1,h_2,h_3)=(1,r)$.

## 3. Coordinate Transforms + Tensors (Chapters 3–4)

### Rotation / Transformation Matrix Facts Used Everywhere

- A (Cartesian) vector transforms as $v'_i=L_{ij}v_j$.
- The rotation matrix satisfies $L^T=L^{-1}$, which implies identities like $L_{ij}L_{kj}=\delta_{ik}$ ("two $L$'s give a delta").

### Gradient Transforms as a Vector (template proof)

- Practical 3 shows how to prove $\nabla$ is a vector using the chain rule and $x'_i=L_{ij}x_j$.
- The key move is $\partial/\partial x'_i = (\partial x_j/\partial x'_i)\,\partial/\partial x_j$, giving the correct $L$-factors.

### Tensor Definition + Rank

- In an orthogonal coordinate system, a quantity is a tensor if each free suffix transforms with the appropriate $L$ factors (e.g. rank-2: $T'_{ij}=L_{im}L_{jn}T_{mn}$).
- The rank (order) of a tensor is the number of free indices.

### Quotient Rule (how You Actually Prove "this is a tensor")

- Lemma (quotient rule): if a quantity $T_{ij}$ has the property that for **any** vector $b_j$, the contraction $a_i=T_{ij}b_j$ is a vector in every rotated frame, then $T_{ij}$ is a (rank-2) tensor.
- The proof compares the transformed expression for $a_i$ using (i) "$a$ is a vector" and (ii) "$a=T b$" in both coordinate systems, then uses arbitrariness of $b$ to deduce the tensor transform law for $T$.

### Symmetric / Antisymmetric Tensors

- A rank-2 tensor is symmetric if $T_{ij}=T_{ji}$ and antisymmetric if $T_{ij}=-T_{ji}$.
- Any rank-2 tensor decomposes as $T_{ik}=S_{ik}+A_{ik}$ with $S_{ik}=\tfrac12(T_{ik}+T_{ki})$ and $A_{ik}=\tfrac12(T_{ik}-T_{ki})$.
- Example technique: conditions like $\epsilon_{ijk}T_{jk}=0$ force symmetry by isolating components (the lecture works through the $i=1,2,3$ cases).

### Contraction Gives Lower Rank (trace idea)

- Practical 5 explicitly asks you to show: if $Q_{ijkl}$ is rank 4 then $Q_{ijjj}$ is rank 2 (contraction reduces rank).
- It also asks: if $T_{ij}$ is a tensor, then $T_{ii}$ is a scalar (full contraction).

## 4. Reusable "exam recipes" (what to Do when You See X)

### A. Convert Vector ↔ Suffix Quickly

1. Introduce the free index first (decide what object you want: scalar/vector/matrix).
2. Replace dot/cross with $\delta,\epsilon$: $a\cdot b=a_jb_j$, $(a\times b)_i=\epsilon_{ijk}a_jb_k$.
3. Check dummy-index hygiene: no dummy index appears more than twice; relabel dummies as needed.

### B. Simplify $\delta,\epsilon$ Expressions (pattern)

- Use $\delta_{ij}a_j=a_i$ to collapse sums early, and $\delta_{ij}\delta_{jk}=\delta_{ik}$ to compress chains.
- When you see $\epsilon\epsilon$, immediately try $\epsilon_{ijk}\epsilon_{k\ell m}=\delta_{i\ell}\delta_{jm}-\delta_{im}\delta_{j\ell}$.
- If a symmetric pair is contracted against an antisymmetric $\epsilon$, expect zero (this is the mechanism behind many "curl of radial field is 0" style results).

### C. Prove "it's a scalar/vector" under Rotation

1. Write the quantity in suffix notation with explicit free indices.
2. Apply known transform laws (e.g. $v'_i=L_{ij}v_j$) and the chain rule for derivatives.
3. Use $L_{ij}L_{kj}=\delta_{ik}$ (orthogonality) to collapse, then compare with the required form.

### D. Metric/arc-length Computations in New Coordinates

1. Write $r$ in terms of the coordinates $x_i$.
2. Compute $e_i=\partial r/\partial x_i$ and then $g_{ij}=e_i\cdot e_j$.
3. If orthogonal, read off $h_i=\sqrt{g_{ii}}$ and use $ds^2=\sum h_i^2 (dx_i)^2$.
