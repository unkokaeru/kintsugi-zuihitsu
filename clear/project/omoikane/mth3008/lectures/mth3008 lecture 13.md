# MTH3008 Lecture 13

> [!quote]
> …

Last time we wrapped up Chapter 5 - tensors in generalised coordinate systems - covering covariant, contravariant, and mixed components of second-rank tensors, associated tensors (raising and lowering indices via the metric tensor), and symmetry/antisymmetry. We now open Chapter 6: Tensor Algebra, which asks a natural follow-up question - how do we build *new* tensors from existing ones?

## Products of Tensors So Far

Before defining new operations, recall the tensor-related products we already know:

- The **[[scalar product]]** $\mathbb{R} \times \mathbb{R}^3 \to \mathbb{R}^3$: $(r, \mathbf{v}) \mapsto r\mathbf{v} = (rv_1, rv_2, rv_3)$.
- The **[[dot product]]** $\mathbb{R}^3 \times \mathbb{R}^3 \to \mathbb{R}$: $(\mathbf{v}, \mathbf{u}) \mapsto \mathbf{v} \cdot \mathbf{u} = v_1 u_1 + v_2 u_2 + v_3 u_3$.
- The **[[cross product]]** $\mathbb{R}^3 \times \mathbb{R}^3 \to \mathbb{R}^3$: $(\mathbf{v}, \mathbf{u}) \mapsto \mathbf{v} \times \mathbf{u}$.
- The **[[matrix product]]** $\text{Mat}_{m \times k}(\mathbb{R}) \times \text{Mat}_{k \times n}(\mathbb{R}) \to \text{Mat}_{m \times n}(\mathbb{R})$: $(A, B) \mapsto AB$.

Each takes tensors of certain ranks and produces a tensor of (possibly different) rank. Chapter 6 formalises the general machinery behind this.

The operations we cover in this chapter are:

1. Addition and subtraction of tensors,
2. Outer product,
3. Contraction of tensors.

This lecture focuses on the first of these.

## Addition of Second-Rank Tensors

### Definition and Proof for Covariant Components

Let $A_{ik}$ and $B_{ik}$ be the covariant components of two second-rank tensors. Define their **[[tensor addition|sum]]** componentwise:

$$
C_{ik} = A_{ik} + B_{ik}.
$$

For this to be meaningful, $C_{ik}$ must itself be a covariant second-rank tensor - that is, it must obey the correct transformation law. Let us verify this.

Since $A_{ik}$ and $B_{ik}$ are covariant second-rank tensors, they transform as:

$$
A'_{ik} = L^m_{\ i'} L^n_{\ k'} A_{mn}, \qquad B'_{ik} = L^m_{\ i'} L^n_{\ k'} B_{mn}.
$$

Now compute $C'_{ik}$:

$$
C'_{ik} = A'_{ik} + B'_{ik} = L^m_{\ i'} L^n_{\ k'} A_{mn} + L^m_{\ i'} L^n_{\ k'} B_{mn} = L^m_{\ i'} L^n_{\ k'} (A_{mn} + B_{mn}) = L^m_{\ i'} L^n_{\ k'} C_{mn}.
$$

This is exactly the covariant second-rank transformation law. So $C_{ik}$ is indeed a covariant second-rank tensor.

> [!important]
> Adding two covariant second-rank tensors $A_{ik}$ and $B_{ik}$ produces another covariant second-rank tensor:
> $\displaystyle \boxed{A_{ik} + B_{ik} = C_{ik}}$

### Extension to Other Index Structures

The same argument applies to any matching index structure. By identical reasoning:

- Two **contravariant** second-rank tensors sum to a contravariant second-rank tensor:

$$
\boxed{A^{ik} + B^{ik} = C^{ik}}
$$

- Two **mixed** second-rank tensors (of the same type) sum to a mixed second-rank tensor:

$$
\boxed{A^{i}_{\ \cdot k} + B^{i}_{\ \cdot k} = C^{i}_{\ \cdot k}}
$$

$$
\boxed{A^{\ \cdot k}_{i} + B^{\ \cdot k}_{i} = C^{\ \cdot k}_{i}}
$$

The proof is the same each time: factor the common transformation matrices out of the sum.

## Addition of Tensors with Different Index Positions

What happens if we try to add tensors with *different* index structures - say a covariant tensor $A_{ik}$ and a contravariant tensor $B^{ik}$?

Their transformation rules are fundamentally different:

$$
A'_{ik} = L^m_{\ i'} L^n_{\ k'} A_{mn}, \qquad B'^{ik} = L^{i'}_{\ m} L^{k'}_{\ n} B^{mn}.
$$

For the sum to be a tensor, it would need to satisfy one of the four second-rank transformation laws (covariant, contravariant, or one of the two mixed types). But:

$$
A'_{ik} + B'^{ik} = L^m_{\ i'} L^n_{\ k'} A_{mn} + L^{i'}_{\ m} L^{k'}_{\ n} B^{mn}.
$$

The two terms involve different transformation matrices ($L^m_{\ i'}$ vs $L^{i'}_{\ m}$), so there is no common factor to extract. This expression does not satisfy any of the four transformation rules.

> [!warning]
> Tensors with different index structures cannot be added. The expression $A_{ik} + B^{ik}$ is **not** a tensor. Both operands must share the same rank *and* the same covariant/contravariant structure.

## Addition of Arbitrary-Rank Tensors

Everything above generalises to tensors of any rank. We can add any number of tensors provided they share the same rank and index structure:

$$
P_{ijk} = A_{ijk} + B_{ijk} + C_{ijk}
$$

$$
Q^{ijk} = D^{ijk} + E^{ijk}
$$

$$
R^{\ \cdot jk\ell}_{i} = F^{\ \cdot jk\ell}_{i} + G^{\ \cdot jk\ell}_{i}
$$

The proof is always the same: each summand transforms with identical matrices, so those matrices factor out of the sum.

> [!important]
> Tensors of different **ranks** or different **structures** (covariant, contravariant, or different types of mixed) cannot be added.

## Worked Example - Matrix Addition

> [!example]
> Recall that rank-two tensors can be represented as matrices. Let
> $\displaystyle M_{ij} = \begin{pmatrix} 0 & -2 & -3 \\ 1 & 2 & 5 \\ 1 & 3 & 4 \end{pmatrix}, \quad N_{ij} = \begin{pmatrix} 7 & 8 & 9 \\ 6 & 5 & 4 \\ 1 & 2 & 3 \end{pmatrix}.$
> Their sum $C_{ij} = M_{ij} + N_{ij}$ has $(i,j)$-component $M_{ij} + N_{ij}$, giving
> $\displaystyle [C_{ij}] = \begin{pmatrix} 7 & 6 & 6 \\ 7 & 7 & 9 \\ 2 & 5 & 7 \end{pmatrix}.$

This is just ordinary matrix addition - nothing surprising. The point is that the *tensorial* character (the transformation law) is preserved automatically.

---

## Pre-Lecture Notes from [[mth3008 lecture notes 13.pdf|University Notes]]

- **Chapter 6: Tensor Algebra** covers three operations for building new tensors: addition, outer product, and contraction.
- Known products (scalar, dot, cross, matrix) are all special cases of tensor products of various ranks.
- **Addition** of tensors is defined componentwise: $C_{ik} = A_{ik} + B_{ik}$.
- Proof that the sum is a tensor: factor common transformation matrices $L^m_{\ i'} L^n_{\ k'}$ out of the sum.
- Works identically for contravariant ($A^{ik} + B^{ik}$) and mixed ($A^{i}_{\ \cdot k} + B^{i}_{\ \cdot k}$) components.
- **Cannot add tensors of different rank or index structure** - the transformation matrices differ and cannot be factored.
- Extends to arbitrary rank: $P_{ijk} = A_{ijk} + B_{ijk} + C_{ijk}$, etc.
- Matrix example: adding two $3 \times 3$ covariant tensors is ordinary matrix addition.
- **Next lecture**: outer product and contraction of tensors (continuing Chapter 6).
