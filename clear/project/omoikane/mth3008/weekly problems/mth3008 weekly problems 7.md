# MTH3008 Weekly Problems 7

> **Original Documents**: [[mth3008 weekly problem sheet 7.pdf|Problem Sheet]] / [[mth3008 weekly problem sheet 7 handwritten solutions.pdf|My Handwritten Solutions]] / [[mth3008 weekly problem sheet 7 solutions.pdf|Provided Solutions]]
>
> **Vibes**: …
>
> **Used Techniques**:
>   - …

***

## 7.1. Outer Products of Given Tensors

> [!question]
> Compute the outer products of the following pairs of tensors.
>
> 1. Let $M = [M_{ij}] = \begin{pmatrix} 0 & 1 \\ 1 & -1 \end{pmatrix}$ and $N = [N_{ij}] = \begin{pmatrix} 0 & 2 \\ 1 & 3 \end{pmatrix}$. Compute the outer product $M \otimes N$.
> 2. Let $P = [P_{i}] = \begin{pmatrix} 0 & 1 \end{pmatrix}$ and $Q = [Q_{ijkl}]$ be the rank $4$ tensor with components
> $\displaystyle
> [Q_{ijkl}] =
> \begin{pmatrix}
> Q_{1111} & Q_{1112} & Q_{1211} & Q_{1212} \\
> Q_{1121} & Q_{1122} & Q_{1221} & Q_{1222} \\
> Q_{2111} & Q_{2112} & Q_{2211} & Q_{2212} \\
> Q_{2121} & Q_{2122} & Q_{2221} & Q_{2222}
> \end{pmatrix}
> =
> \begin{pmatrix}
> 0 & 1 & 2 & 0 \\
> 1 & 1 & -1 & -1 \\
> 0 & 1 & 1 & 0 \\
> 1 & 0 & -1 & 3
> \end{pmatrix}.
> $
> Compute the outer product $P \otimes Q$.
> 3. Let $R = [R_{i}] = \begin{pmatrix} 1 & -1 & 0 \end{pmatrix}$ and $S = [S_{ij}] = \begin{pmatrix} 1 & 2 & 4 \\ -1 & 0 & -7 \\ 0 & 1 & 0 \end{pmatrix}$. Compute the outer product $R \otimes S$.

…

---

## 7.2. Rank of a Tensor Built from Contraction

> [!question]
> Let $T_{ij}$ and $R_{ijk\ell}$ be tensors of rank $2$ and $4$, respectively. Show that the tensor with components
> $\displaystyle
> T_{km} R_{kpqm}
> $
> is a tensor of rank $2$.

…

---

## 7.3. Inner Products with a Rank-2 Tensor and a Vector

> [!question]
> Given the rank $2$ tensor $R_{ik}$ with matrix representation
> $\displaystyle
> [R_{ik}] =
> \begin{pmatrix}
> 1 & 0 & 2 \\
> 3 & 2 & 1 \\
> 1 & 3 & 4
> \end{pmatrix},
> $
> and the vector $A = i_{1} + 2 i_{2} - i_{3}$, compute the inner products:
>
> 1. $R_{ik} A_{i}$,
> 2. $R_{ik} A_{k}$.

…

---

## 7.4. Inner Product with Two Vectors

> [!question]
> Let $T_{ik}$ and $A$ be as in Problem 7.3, and let
> $\displaystyle
> B = 4 i_{1} + 5 i_{2} + 3 i_{3}.
> $
> Compute the scalar inner product
> $\displaystyle
> T_{ik} A_{i} B_{k}.
> $

…

---

## 7.5. Contractions of Dimension-Two Tensors

> [!question]
> For each of the following tensors (in dimension $2$), list all possible distinct contractions.
>
> 1. Let $A_{ij}$ be the rank $2$ tensor
> $\displaystyle
> [A_{ij}] =
> \begin{pmatrix}
> 1 & -1 \\
> 4 & 0
> \end{pmatrix}.
> $
> Find all possible contractions of $A_{ij}$.
> 2. Let $B_{ijk\ell}$ be the rank $4$ tensor with components
> $\displaystyle
> [B_{ijk\ell}] =
> \begin{pmatrix}
> B_{1111} & B_{1112} & B_{1211} & B_{1212} \\
> B_{1121} & B_{1122} & B_{1221} & B_{1222} \\
> B_{2111} & B_{2112} & B_{2211} & B_{2212} \\
> B_{2121} & B_{2122} & B_{2221} & B_{2222}
> \end{pmatrix}
> =
> \begin{pmatrix}
> 1 & 0 & 0 & 7 \\
> 4 & 0 & 2 & 11 \\
> 2 & 2 & -1 & -3 \\
> 1 & 128 & 2 & 0
> \end{pmatrix}.
> $
> Find all possible distinct contractions of $B_{ijk\ell}$.

…
