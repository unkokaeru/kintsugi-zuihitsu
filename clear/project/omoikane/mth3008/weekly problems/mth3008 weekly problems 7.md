# MTH3008 Weekly Problems 7

> **Original Documents**: [[mth3008 weekly problem sheet 7.pdf]] / `[[mth3008 weekly problem sheet 7 handwritten solutions.pdf]]` / [[mth3008 weekly problem sheet 7 solutions.pdf]]
>
> **Vibes**: Tensor-algebra bookkeeping - outer products stack indices, contractions collapse them, inner products do both at once. Mostly mechanical once you settle on the index convention, with one short proof (7.2) in the style of 6.2.
>
> **Used Techniques**:
> - [[Outer Product]] rule: $(A\otimes B)_{i_{1}\dots k_{1}\dots}=A_{i_{1}\dots}B_{k_{1}\dots}$; rank adds.
> - [[Contraction]] rule: set two indices equal and sum; rank drops by 2.
> - [[Tensor Transformation Rule]] + factoring $L$s (for 7.2's tensor-character proof).
> - Inner products as outer product + contraction, computed via ordinary matrix-vector multiplication.

---

## 7.1. Outer Products of Given Tensors

> [!question]
> Compute $M\otimes N$, $P\otimes Q$, and $R\otimes S$ for the tensors given.

**(1) $M\otimes N$** - both rank 2, so $M\otimes N$ is rank 4. In Kronecker-product form:

$$
M\otimes N=\begin{pmatrix}M_{11}N & M_{12}N \\ M_{21}N & M_{22}N\end{pmatrix}=\begin{pmatrix}0\cdot N & 1\cdot N \\ 1\cdot N & -1\cdot N\end{pmatrix}=\boxed{\begin{pmatrix}0 & 0 & 0 & 2 \\ 0 & 0 & 1 & 3 \\ 0 & 2 & 0 & -2 \\ 1 & 3 & -1 & -3\end{pmatrix}}
$$

**(2) $P\otimes Q$** - rank 1 ⊗ rank 4 gives rank 5, with components $(P\otimes Q)_{ijk\ell m}=P_{i}Q_{jk\ell m}$. Since $P_{1}=0$ and $P_{2}=1$:

$$
(P\otimes Q)_{1jk\ell m}=0,\qquad (P\otimes Q)_{2jk\ell m}=Q_{jk\ell m}.
$$

$\boxed{\text{The }i=1\text{ slice is all zeros; the }i=2\text{ slice equals }Q_{jk\ell m}.}$

**(3) $R\otimes S$** - rank 1 ⊗ rank 2 gives rank 3, $(R\otimes S)_{ijk}=R_{i}S_{jk}$. With $R=(1,-1,0)$:

$$
(R\otimes S)_{1jk}=S_{jk}=\begin{pmatrix}1 & 2 & 4 \\ -1 & 0 & -7 \\ 0 & 1 & 0\end{pmatrix},\qquad (R\otimes S)_{2jk}=-S_{jk},\qquad (R\otimes S)_{3jk}=0.
$$

---

## 7.2. Rank of a Tensor Built from Contraction

> [!question]
> Show that $T_{km}R_{kpqm}$ is a rank-2 tensor.

Start from the [[Tensor Transformation Rule]] of the factors:

$$
T'_{km}=L_{ka}L_{mb}T_{ab},\qquad R'_{kpqm}=L_{kc}L_{pd}L_{qe}L_{mf}R_{cdef}.
$$

Multiplying them and using orthogonality $L_{kc}L_{ka}=\delta_{ac}$ and $L_{mb}L_{mf}=\delta_{bf}$:

$$
T'_{km}R'_{kpqm}=L_{ka}L_{mb}L_{kc}L_{pd}L_{qe}L_{mf}T_{ab}R_{cdef}=\delta_{ac}\delta_{bf}L_{pd}L_{qe}T_{ab}R_{cdef}=L_{pd}L_{qe}T_{ab}R_{abde}.
$$

Renaming dummies: $T'_{km}R'_{kpqm}=L_{pd}L_{qe}(T_{ab}R_{abde})$. This is the rank-2 covariant transformation law in the free indices $p,q$. Hence $\boxed{T_{km}R_{kpqm}}$ is a rank-2 tensor. ✓

---

## 7.3. Inner Products with a Rank-2 Tensor and a Vector

> [!question]
> With $R=\begin{pmatrix}1 & 0 & 2 \\ 3 & 2 & 1 \\ 1 & 3 & 4\end{pmatrix}$ and $A=\mathbf{i}_{1}+2\mathbf{i}_{2}-\mathbf{i}_{3}$, i.e. $A=(1,2,-1)$, compute $R_{ik}A_{i}$ and $R_{ik}A_{k}$.

$R_{ik}A_{i}$ sums over $i$ - equivalent to $A^{T}R$ read as a row vector (free index $k$):

$$
R_{ik}A_{i}=\begin{pmatrix}1\cdot 1+3\cdot 2+1\cdot(-1) & 0\cdot 1+2\cdot 2+3\cdot(-1) & 2\cdot 1+1\cdot 2+4\cdot(-1)\end{pmatrix}=\boxed{(6,\,1,\,0)}.
$$

$R_{ik}A_{k}$ sums over $k$ - equivalent to $RA$ as a column vector (free index $i$):

$$
R_{ik}A_{k}=\begin{pmatrix}1+0-2 \\ 3+4-1 \\ 1+6-4\end{pmatrix}=\boxed{(-1,\,6,\,3)}.
$$

The two differ because $R$ is not symmetric.

---

## 7.4. Inner Product with Two Vectors

> [!question]
> With $T=R$ from 7.3, $A=(1,2,-1)$, and $B=(4,5,3)$, compute $T_{ik}A_{i}B_{k}$.

Use the result of 7.3: $T_{ik}A_{i}=(6,1,0)$. Then dot with $B$:

$$
T_{ik}A_{i}B_{k}=(6)(4)+(1)(5)+(0)(3)=\boxed{29}.
$$

(As a check, $(RB)\cdot A=10+50-31=29$. ✓)

---

## 7.5. Contractions of Dimension-Two Tensors

> [!question]
> List all possible distinct contractions of (1) $A_{ij}$, (2) $B_{ijk\ell}$.

**(1) $A_{ij}=\begin{pmatrix}1 & -1 \\ 4 & 0\end{pmatrix}$.** Only one pair of indices to contract:

$$
\boxed{A_{ii}=A_{11}+A_{22}=1+0=1.}
$$

This is the trace.

**(2) Rank-4 $B_{ijk\ell}$.** Six distinct pair contractions - each yields a rank-2 tensor (a $2\times 2$ matrix in dim 2):

| Contracted pair | Result | Matrix |
|---|---|---|
| $(i,j)$ | $B_{iik\ell}$ | $\begin{pmatrix}0 & -3 \\ 6 & 0\end{pmatrix}$ |
| $(i,k)$ | $B_{iji\ell}$ | $\begin{pmatrix}2 & 128 \\ 2 & 7\end{pmatrix}$ |
| $(i,\ell)$ | $B_{ijki}$ | $\begin{pmatrix}3 & 132 \\ -3 & 2\end{pmatrix}$ |
| $(j,k)$ | $B_{ijj\ell}$ | $\begin{pmatrix}3 & 11 \\ 4 & 2\end{pmatrix}$ |
| $(j,\ell)$ | $B_{ijkj}$ | $\begin{pmatrix}8 & 15 \\ -1 & 1\end{pmatrix}$ |
| $(k,\ell)$ | $B_{ijkk}$ | $\begin{pmatrix}1 & 11 \\ 130 & -1\end{pmatrix}$ |

**Sample working** for $(i,j)$:

$B_{iik\ell}=B_{11k\ell}+B_{22k\ell}$. Entry-by-entry:

- $(k,\ell)=(1,1)$: $B_{1111}+B_{2211}=1+(-1)=0$.
- $(k,\ell)=(1,2)$: $B_{1112}+B_{2212}=0+(-3)=-3$.
- $(k,\ell)=(2,1)$: $B_{1121}+B_{2221}=4+2=6$.
- $(k,\ell)=(2,2)$: $B_{1122}+B_{2222}=0+0=0$.

The other five follow the same pattern, reading the relevant entries from the given block matrix.

Further contraction of any of the above results (rank 2 → rank 0) gives the three fully-contracted scalars $B_{iijj}=0$, $B_{ijij}=9$, $B_{ijji}=5$.
