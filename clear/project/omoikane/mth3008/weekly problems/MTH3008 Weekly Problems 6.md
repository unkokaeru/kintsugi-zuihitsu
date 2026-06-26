# MTH3008 Weekly Problems 6

> **Original Documents**: [[mth3008 weekly problem sheet 6.pdf]] / `[[mth3008 weekly problem sheet 6 handwritten solutions.pdf]]` / [[mth3008 weekly problem sheet 6 solutions.pdf]]
>
> **Vibes**: Heavy mix of index-chasing proofs and grindy coordinate-change computations - for proofs, lean on the chain rule, $L^{i'}_{j}L^{j}_{k'}=\delta^{i'}_{k'}$, and the [[Quotient Rule]]; for computation, grind through $P'=LPL^{T}$ with dual bases.
>
> **Used Techniques**:
> - Multi-variable chain rule on $\partial x^{k}/\partial x'^{i}$ applied to identity maps.
> - Tensor transformation laws for covariant, contravariant, and [[Mixed Components]] rank-2 tensors.
> - [[Associated Tensors]] using the [[Metric Tensor]] $g_{ik}$ and $g^{ik}$.
> - Dual-basis construction: $\mathbf{e}^{i}=(\mathbf{e}_{j}\times \mathbf{e}_{k})/V$, then $\mathbf{e}^{i}\cdot \mathbf{e}_{k}=\delta^{i}_{k}$.
> - Matrix form of covariant transformation: $P'=LPL^{T}$, with $L$ having rows $\mathbf{e}_{i}$ in Cartesian components.

---

## 6.1. Composition Of Coordinate Transformation Matrices

> [!question]
> Using the alternative definitions of the transformation coefficients $L^{k}{}_{i'}$ and $L^{i'}{}_{k}$, namely
>
> $$
> L^{k}{}_{i'} = \frac{\partial x^{k}}{\partial x^{\prime i}},\qquad
> L^{i'}{}_{k} = \frac{\partial x^{\prime i}}{\partial x^{k}},
> $$
>
> show that
>
> $$
> L^{i}{}_{k'} L^{k'}{}_{j} = \delta^{i}{}_{j},
> $$
>
> where $\delta^{i}{}_{j}$ is the usual Kronecker delta.

Apply the chain rule to the identity map $x^{i}=x^{i}(x'(x))$:

$$
\frac{\partial x^{i}}{\partial x^{j}}=\sum_{k}\frac{\partial x^{i}}{\partial x'^{k}} \frac{\partial x'^{k}}{\partial x^{j}}=L^{i}{}_{k'}L^{k'}{}_{j}.
$$

But $\partial x^{i}/\partial x^{j}=\delta^{i}_{j}$ (coordinates are independent), so

$$
\boxed{L^{i}{}_{k'}L^{k'}{}_{j}=\delta^{i}{}_{j}.}
$$

---

## 6.2. Contraction Of Covariant And Contravariant Tensors

> [!question]
> Let $A_{ik\ell}$ be a covariant tensor of order $3$ and $B^{pqmn}$ a contravariant tensor of order $4$. Prove that $A_{ik\ell} B^{k\ell mn}$ is a mixed tensor of order $3$ with one covariant and two contravariant indices.

Under a coordinate change, $A_{ik\ell}$ picks up three covariant $L$ factors and $B^{pqmn}$ picks up four contravariant ones:

$$
A'_{ik\ell}=L^{a}{}_{i'}L^{b}{}_{k'}L^{c}{}_{\ell '}A_{abc},\qquad B'^{pqmn}=L^{p'}{}_{r}L^{q'}{}_{s}L^{m'}{}_{t}L^{n'}{}_{u}B^{rstu}.
$$

Form the claimed contraction:

$$
A'_{ik\ell}B'^{k\ell mn}=L^{a}{}_{i'}L^{b}{}_{k'}L^{c}{}_{\ell '}A_{abc}\cdot L^{k'}{}_{r}L^{\ell '}{}_{s}L^{m'}{}_{t}L^{n'}{}_{u}B^{rstu}.
$$

Collapse the pairs using 6.1: $L^{b}{}_{k'}L^{k'}{}_{r}=\delta^{b}_{r}$ and $L^{c}{}_{\ell '}L^{\ell '}{}_{s}=\delta^{c}_{s}$:

$$
=L^{a}{}_{i'}L^{m'}{}_{t}L^{n'}{}_{u}A_{abc}\delta^{b}_{r}\delta^{c}_{s}B^{rstu}=L^{a}{}_{i'}L^{m'}{}_{t}L^{n'}{}_{u}\underbrace{A_{abc}B^{bcmn}}_{\text{contracted object}}
$$

That is exactly the transformation law of a $(1,2)$-type tensor: one covariant factor $L^{a}{}_{i'}$ and two contravariant factors $L^{m'}{}_{t},L^{n'}{}_{u}$. Hence $\boxed{A_{ik\ell}B^{k\ell mn}}$ is a mixed rank-3 tensor with one lower and two upper indices. ✓

---

## 6.3. Valid Relations Between Associated Tensors

> [!question]
> For each of the following proposed relations, decide whether it is correct.
>
> 1. $T^{p}{}_{q}=g^{r}{}_{p}T_{rq}$.
> 2. $S^{pq}=g^{rp}g^{sq}S_{rs}$.
> 3. $W^{p}{}_{\cdot rs}=g^{s}{}_{q}W^{pq}{}_{\cdot\cdot s}$.
> 4. $V^{qm}{}_{\cdot tk}{}^{\cdot\cdot n}=g^{p}{}_{k}g^{s}{}_{n}g^{r}{}_{m}V^{q\cdot st}{}_{\cdot r}{}^{\cdot\cdot p}$.

Key fact: the **mixed metric** $g^{r}{}_{p}=\mathbf{e}^{r}\cdot \mathbf{e}_{p}=\delta^{r}_{p}$, so contracting with $g^{r}{}_{p}$ **renames** an index without changing its level.

**(1) Invalid.** $g^{r}{}_{p}T_{rq}=\delta^{r}_{p}T_{rq}=T_{pq}$, which has *both* indices lowered. But $T^{p}{}_{q}$ has $p$ raised. Index positions mismatch between the two sides, so the equation cannot hold as an identity between tensors.

**(2) Valid.** This is the standard "raise both indices" recipe: $S^{pq}=g^{rp}g^{sq}S_{rs}$ with $g^{rp}$ and $g^{sq}$ the *contravariant* metric. Each metric factor raises one covariant dummy ($r$ or $s$) into the corresponding free upper index ($p$ or $q$). See [[Index Raising and Lowering]].

**(3) Invalid.** Two problems. First, $g^{s}{}_{q}=\delta^{s}_{q}$ just renames $q\to s$. Second, after contraction, the RHS carries $s$ both as an upper dummy (from the renamed $q$) and as a lower dummy (inherited), so $s$ is doubly repeated - a violation of summation-convention rules. The LHS has $s$ as a *free* lower index, so the structures disagree.

**(4) Invalid.** Every factor on the right is a mixed metric $g^{\cdot}{}_{\cdot}=\delta^{\cdot}_{\cdot}$, so the RHS reduces by relabelling to $V^{q\cdot nt}{}_{\cdot m\cdot\cdot k}$ - same entries, but with different **index positions** from the LHS $V^{qm}{}_{\cdot tk}{}^{\cdot\cdot n}$. The positions are what distinguish associated tensors, so the equality fails.

> [!note] Why the mixed metric isn't useful for raising/lowering
> Only $g_{ik}$ (fully covariant) **lowers**, and only $g^{ik}$ (fully contravariant) **raises**. The mixed $g^{i}{}_{k}=\delta^{i}_{k}$ is inert - it never changes a component, only relabels.

---

## 6.4. Changing Tensor Components Under A Non-Orthonormal Basis

> [!question]
> In Cartesian $K$, $[P_{ik}]=[P^{ik}]=[P^{\cdot k}_{i}]=[P^{i}_{\cdot k}]=\begin{pmatrix}1 & 1 & -1 \\ 2 & 3 & 0 \\ 0 & -2 & 1\end{pmatrix}$.
> New basis: $\mathbf{e}_{1}=\mathbf{i}_{1}$, $\mathbf{e}_{2}=\mathbf{i}_{1}-\mathbf{i}_{2}$, $\mathbf{e}_{3}=\mathbf{i}_{1}+\mathbf{i}_{2}+2\mathbf{i}_{3}$. Find the dual basis and compute $P_{i'k'}$, $P^{i'k'}$, $P^{\cdot k'}_{i'}$.

**1) Dual basis** via $\mathbf{e}^{i}=(\mathbf{e}_{j}\times \mathbf{e}_{k})/V$ with $V=\mathbf{e}_{1}\cdot(\mathbf{e}_{2}\times \mathbf{e}_{3})$.

$\mathbf{e}_{2}\times \mathbf{e}_{3}=(-2,-2,2)$, $\mathbf{e}_{3}\times \mathbf{e}_{1}=(0,2,-1)$, $\mathbf{e}_{1}\times \mathbf{e}_{2}=(0,0,-1)$, $V=-2$.

$$
\mathbf{e}^{1}=(1,1,-1),\qquad \mathbf{e}^{2}=(0,-1,\tfrac{1}{2}),\qquad \mathbf{e}^{3}=(0,0,\tfrac{1}{2}).
$$

Check: $\mathbf{e}^{i}\cdot \mathbf{e}_{k}=\delta^{i}_{k}$ for all pairs. ✓

**2) Transformation matrices.** Writing each basis vector as a row in Cartesian components:

$$
L=[L^{\ell}{}_{i'}]=\begin{pmatrix}1 & 0 & 0 \\ 1 & -1 & 0 \\ 1 & 1 & 2\end{pmatrix},\qquad M^{*}=[L^{i'}{}_{\ell}]=\begin{pmatrix}1 & 1 & -1 \\ 0 & -1 & \tfrac{1}{2} \\ 0 & 0 & \tfrac{1}{2}\end{pmatrix}.
$$

**Covariant**: $P'_{i'k'}=L^{\ell}{}_{i'}L^{m}{}_{k'}P_{\ell m}=(LPL^{T})_{i'k'}$:

$$
LP=\begin{pmatrix}1 & 1 & -1 \\ -1 & -2 & -1 \\ 3 & 0 & 1\end{pmatrix},\qquad [P'_{i'k'}]=LPL^{T}=\boxed{\begin{pmatrix}1 & 0 & 0 \\ -1 & 1 & -5 \\ 3 & 3 & 5\end{pmatrix}}.
$$

**Contravariant**: $P'^{i'k'}=L^{i'}{}_{\ell}L^{k'}{}_{m}P^{\ell m}=(M^{*}P(M^{*})^{T})_{i'k'}$:

$$
M^{*}P=\begin{pmatrix}3 & 6 & -2 \\ -2 & -4 & \tfrac{1}{2} \\ 0 & -1 & \tfrac{1}{2}\end{pmatrix},\qquad [P'^{i'k'}]=\boxed{\begin{pmatrix}11 & -7 & -1 \\ -\tfrac{13}{2} & \tfrac{17}{4} & \tfrac{1}{4} \\ -\tfrac{3}{2} & \tfrac{5}{4} & \tfrac{1}{4}\end{pmatrix}}.
$$

**Mixed**: $P'^{\cdot k'}_{i'}=L^{\ell}{}_{i'}L^{k'}{}_{m}P^{\cdot m}_{\ell}=(LP(M^{*})^{T})_{i'k'}$:

$$
[P'^{\cdot k'}_{i'}]=\boxed{\begin{pmatrix}3 & -\tfrac{3}{2} & -\tfrac{1}{2} \\ -2 & \tfrac{3}{2} & -\tfrac{1}{2} \\ 2 & \tfrac{1}{2} & \tfrac{1}{2}\end{pmatrix}}.
$$

---

## 6.5. Tensor Component Transformation With A Different Basis Change

> [!question]
> In Cartesian $K$, $[P_{ik}]=[P^{ik}]=[P^{\cdot k}_{i}]=[P^{i}_{\cdot k}]=\begin{pmatrix}2 & 0 & 0 \\ 2 & 0 & -1 \\ 1 & 0 & 0\end{pmatrix}$.
> New basis: $\mathbf{e}_{1}=\mathbf{i}_{1}-\mathbf{i}_{2}$, $\mathbf{e}_{2}=\mathbf{i}_{2}$, $\mathbf{e}_{3}=\mathbf{i}_{1}+2\mathbf{i}_{3}$. Find the dual basis and compute $P_{i'k'}$, $P^{i'k'}$, $P^{\cdot k'}_{i'}$.

**1) Dual basis.** $\mathbf{e}_{2}\times \mathbf{e}_{3}=(2,0,-1)$, $\mathbf{e}_{3}\times \mathbf{e}_{1}=(2,2,-1)$, $\mathbf{e}_{1}\times \mathbf{e}_{2}=(0,0,1)$, $V=2$:

$$
\mathbf{e}^{1}=(1,0,-\tfrac{1}{2}),\qquad \mathbf{e}^{2}=(1,1,-\tfrac{1}{2}),\qquad \mathbf{e}^{3}=(0,0,\tfrac{1}{2}).
$$

Verify $\mathbf{e}^{i}\cdot \mathbf{e}_{k}=\delta^{i}_{k}$. ✓

**2) Transformation matrices.**

$$
L=\begin{pmatrix}1 & -1 & 0 \\ 0 & 1 & 0 \\ 1 & 0 & 2\end{pmatrix},\qquad M^{*}=\begin{pmatrix}1 & 0 & -\tfrac{1}{2} \\ 1 & 1 & -\tfrac{1}{2} \\ 0 & 0 & \tfrac{1}{2}\end{pmatrix}.
$$

**Covariant** $LPL^{T}$:

$$
LP=\begin{pmatrix}0 & 0 & 1 \\ 2 & 0 & -1 \\ 4 & 0 & 0\end{pmatrix},\qquad [P'_{i'k'}]=\boxed{\begin{pmatrix}0 & 0 & 2 \\ 2 & 0 & 0 \\ 4 & 0 & 4\end{pmatrix}}.
$$

**Contravariant** $M^{*}P(M^{*})^{T}$:

$$
M^{*}P=\begin{pmatrix}\tfrac{3}{2} & 0 & 0 \\ \tfrac{7}{2} & 0 & -1 \\ \tfrac{1}{2} & 0 & 0\end{pmatrix},\qquad [P'^{i'k'}]=\boxed{\begin{pmatrix}\tfrac{3}{2} & \tfrac{3}{2} & 0 \\ 4 & 4 & -\tfrac{1}{2} \\ \tfrac{1}{2} & \tfrac{1}{2} & 0\end{pmatrix}}.
$$

**Mixed** $LP(M^{*})^{T}$:

$$
[P'^{\cdot k'}_{i'}]=\boxed{\begin{pmatrix}-\tfrac{1}{2} & -\tfrac{1}{2} & \tfrac{1}{2} \\ \tfrac{5}{2} & \tfrac{5}{2} & -\tfrac{1}{2} \\ 4 & 4 & 0\end{pmatrix}}.
$$

---

## 6.6. Transforming Components Using Metric And Dual Basis

> [!question]
> In Cartesian $K$, $[B_{ik}]=[B^{ik}]=[B^{\cdot k}_{i}]=[B^{i}_{\cdot k}]=\begin{pmatrix}0 & 1 & 0 \\ -1 & 0 & 1 \\ 0 & 0 & 1\end{pmatrix}$.
> New basis: $\mathbf{e}_{1}=\mathbf{i}_{1}-\mathbf{i}_{2}$, $\mathbf{e}_{2}=\mathbf{i}_{1}+4\mathbf{i}_{2}+\mathbf{i}_{3}$, $\mathbf{e}_{3}=\mathbf{i}_{1}+3\mathbf{i}_{2}+\mathbf{i}_{3}$.
>
> (1) Compute $B_{i'k'}$. (2) Compute the dual basis. (3) Compute $B^{i'k'}$ using the [[Metric Tensor]].

**1) Covariant components.** $L=\begin{pmatrix}1 & -1 & 0 \\ 1 & 4 & 1 \\ 1 & 3 & 1\end{pmatrix}$:

$$
LB=\begin{pmatrix}1 & 1 & -1 \\ -4 & 1 & 5 \\ -3 & 1 & 4\end{pmatrix},\qquad [B'_{i'k'}]=LBL^{T}=\boxed{\begin{pmatrix}0 & 4 & 3 \\ -5 & 5 & 4 \\ -4 & 5 & 4\end{pmatrix}}.
$$

**2) Dual basis.** $\mathbf{e}_{2}\times \mathbf{e}_{3}=(1,0,-1)$, $\mathbf{e}_{3}\times \mathbf{e}_{1}=(1,1,-4)$, $\mathbf{e}_{1}\times \mathbf{e}_{2}=(-1,-1,5)$, $V=1$:

$$
\boxed{\mathbf{e}^{1}=(1,0,-1),\qquad \mathbf{e}^{2}=(1,1,-4),\qquad \mathbf{e}^{3}=(-1,-1,5).}
$$

Check $\mathbf{e}^{i}\cdot \mathbf{e}_{k}=\delta^{i}_{k}$ entry-by-entry. ✓

**3) Contravariant components.** Two equivalent routes:

**Route A** (via the metric). $[g_{i'k'}]=[\mathbf{e}_{i}\cdot \mathbf{e}_{k}]=\begin{pmatrix}2 & -3 & -2 \\ -3 & 18 & 14 \\ -2 & 14 & 11\end{pmatrix}$; invert to get $[g^{i'k'}]$; then $B'^{i'k'}=g^{i'\ell '}g^{k'm'}B'_{\ell 'm'}$.

**Route B** (direct, using the dual basis). Use $M^{*}=\begin{pmatrix}1 & 0 & -1 \\ 1 & 1 & -4 \\ -1 & -1 & 5\end{pmatrix}$ and $B'^{i'k'}=M^{*}B(M^{*})^{T}$:

$$
M^{*}B=\begin{pmatrix}0 & 1 & -1 \\ -1 & 1 & -3 \\ 1 & -1 & 4\end{pmatrix},\qquad [B'^{i'k'}]=\boxed{\begin{pmatrix}1 & 5 & -6 \\ 2 & 12 & -15 \\ -3 & -16 & 20\end{pmatrix}}.
$$

Both routes yield the same answer - Route B avoids inverting a $3\times 3$ matrix.
