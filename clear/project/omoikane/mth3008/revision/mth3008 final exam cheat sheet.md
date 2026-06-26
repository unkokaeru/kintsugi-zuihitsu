# **MTH3008** Tensor Analysis - Final Exam Cheat Sheet

> [!TIP] Created by William Fayers
> Good luck and have fun!! :)) - identify question type via §8, jump to section, apply the recipe, then sanity-check. Ez 100%.

## §1. Suffix-notation Foundations

**Indices**

- *Free index*: appears once per term, labels a component, fixes rank.
- *Dummy index*: appears exactly twice in a term; summed $1,2,3$ (Einstein convention).
- *Rules*: same free indices on every term; no index appears $>2$ times; fresh letters for independent sums.

**Kronecker delta $\delta_{ij}$**

- *Definition*: $1$ if $i=j$, else $0$ (identity matrix).
- *Symmetric*: $\delta_{ij}=\delta_{ji}$.
- *Isotropic*: $\delta'_{ij}=L_{ik}L_{jk}=\delta_{ij}$ - same in every frame.
- *Substitution*: $\delta_{ij}a_j=a_i$.
- *Chain*: $\delta_{ij}\delta_{jk}=\delta_{ik}$.
- *Trace*: $\delta_{ii}=3$.
- *Cartesian Jacobian*: $\partial x_j/\partial x_i=\delta_{ij}$.

**Alternating tensor $\epsilon_{ijk}$**

- *Definition*: $+1$ even perm of $(1,2,3)$; $-1$ odd; $0$ if any two equal.
- *Cyclic (sign-preserving)*: $\epsilon_{ijk}=\epsilon_{jki}=\epsilon_{kij}$.
- *Swap (sign-flipping)*: $\epsilon_{ijk}=-\epsilon_{jik}$.
- Totally antisymmetric.

**$\epsilon$–$\delta$ identity** (shared index in **position 1** of both $\epsilon$; cyclically rotate first)

- $\epsilon_{ijk}\epsilon_{i\ell m}=\delta_{j\ell}\delta_{km}-\delta_{jm}\delta_{k\ell}$
- *Corollaries*: $\epsilon_{ijk}\epsilon_{ij\ell}=2\delta_{k\ell}$ (set $m=j$); $\epsilon_{ijk}\epsilon_{ijk}=6$ (set $\ell=k$); $\delta_{ij}\epsilon_{ijk}=0$.

**Symmetry / antisymmetry**

- *Symmetric*: $S_{ij}=S_{ji}$. *Antisymmetric*: $A_{ij}=-A_{ji}$ (forces diagonal $=0$).
- *Decomposition*: $T_{ij}=\tfrac12(T_{ij}+T_{ji})+\tfrac12(T_{ij}-T_{ji})$.
- Frame-independent in Cartesian.
- *Forced-zero chain*: if $T_{ijk}$ is sym in $(j,k)$ AND antisym in $(i,j)$, then $T_{ijk}=T_{ikj}=-T_{kij}=-T_{kji}=T_{jki}=T_{jik}=-T_{ijk}\Rightarrow T_{ijk}=0$.

**Kill rule** - symmetric × antisymmetric (over contracted pair) $=0$.

- $\epsilon_{ijk}S_{jk}=0$ if $S_{jk}=S_{kj}$.
- $\epsilon_{ijk}a_ja_k=0$.
- $\epsilon_{ijk}\partial_j\partial_k(\text{anything})=0$ (mixed partials commute).

## §2. Suffix ↔ Vector

**Dictionary** ($\partial_i:=\partial/\partial x_i$)

| Vector | Suffix | Vector | Suffix |
|---|---|---|---|
| $\mathbf{a}\cdot\mathbf{b}$ | $a_ib_i$ | $\nabla f$ | $\partial_if$ |
| $(\mathbf{a}\times\mathbf{b})_i$ | $\epsilon_{ijk}a_jb_k$ | $\nabla\cdot\mathbf{u}$ | $\partial_iu_i$ |
| $\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})$ | $\epsilon_{ijk}a_ib_jc_k$ | $(\nabla\times\mathbf{u})_i$ | $\epsilon_{ijk}\partial_ju_k$ |
| $(AB)_{ij}$ | $A_{ik}B_{kj}$ | $\nabla^2f$ | $\partial_j\partial_jf$ |
| $(A^T)_{ij}=A_{ji}$ | swap | Position $\mathbf{r}$ | $r_i=x_i$, $r=\sqrt{x_jx_j}$, $\partial_ir=x_i/r$ |
| $\mathrm{Tr}(A)=A_{ii}$ |  | $\nabla f(r)$ | $f'(r)x_i/r$ |
| $\det M$ | $\epsilon_{ijk}M_{1i}M_{2j}M_{3k}$ | $\partial_kx_i$ | $\delta_{ki}$ (Cartesian Jacobian) |

**Computing $\mathbf{a}\times\mathbf{b}$ and $3\times 3$ determinant** (cofactor expansion along row 1)

- $\mathbf{a}\times\mathbf{b}=\det\begin{pmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\a_1&a_2&a_3\\b_1&b_2&b_3\end{pmatrix}=(a_2b_3-a_3b_2,\;a_3b_1-a_1b_3,\;a_1b_2-a_2b_1)$. *Cover-row mnemonic*: $i$th component = $2\times 2$ det of the matrix with row $i$ deleted, with alternating sign $+,-,+$.
- $\det M=M_{11}\!\begin{vmatrix}M_{22}&M_{23}\\M_{32}&M_{33}\end{vmatrix}-M_{12}\!\begin{vmatrix}M_{21}&M_{23}\\M_{31}&M_{33}\end{vmatrix}+M_{13}\!\begin{vmatrix}M_{21}&M_{22}\\M_{31}&M_{32}\end{vmatrix}$ where $\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$. Sign pattern $+,-,+$ along the row.
- *Sarrus* (alternative for $3\times 3$ only): copy first 2 columns to the right; $\det M=$ (sum of three down-right diagonals) $-$ (sum of three up-right diagonals).
- *Scalar triple* identity: $\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})=\det\begin{pmatrix}a_1&a_2&a_3\\b_1&b_2&b_3\\c_1&c_2&c_3\end{pmatrix}$ (rows = $\mathbf{a},\mathbf{b},\mathbf{c}$).

**Vector → suffix** (in order)

1. Pick free index $i$ matching the rank.
2. Attach $i$ to every vector factor (same letter every term).
3. Fresh dummy for each scalar (dot products, scalar coefficients).
4. $\times\to\epsilon_{ijk}$; matrix product $\to A_{ik}B_{kj}$.

*Example*. $\mathbf{a}\times\mathbf{b}+(\mathbf{a}\cdot\mathbf{d})\mathbf{c}=\mathbf{e}\Rightarrow\epsilon_{ijk}a_jb_k+(a_\ell d_\ell)c_i=e_i$.

**Suffix → vector** (in order)

1. Collapse $\delta$ by substitution.
2. Cyclically rotate each $\epsilon$ to recognise $\epsilon_{ijk}a_jb_k=(\mathbf{a}\times\mathbf{b})_i$.
3. Bundle dummy pairs as dot products: $a_jb_j=\mathbf{a}\cdot\mathbf{b}$.
4. Reassemble using the free index as the result's slot.

*Example*. $\delta_{ij}c_j+\epsilon_{kji}a_kb_j=d_\ell e_mc_ib_\ell c_m$.

- LHS: $\delta_{ij}c_j=c_i$; $\epsilon_{kji}=\epsilon_{ikj}$ (cyclic) $\Rightarrow \epsilon_{ikj}a_kb_j=(\mathbf{a}\times\mathbf{b})_i$.
- RHS: $(d_\ell b_\ell)(e_mc_m)c_i=(\mathbf{d}\cdot\mathbf{b})(\mathbf{e}\cdot\mathbf{c})c_i$.
- $\Rightarrow\mathbf{c}+\mathbf{a}\times\mathbf{b}=(\mathbf{d}\cdot\mathbf{b})(\mathbf{e}\cdot\mathbf{c})\mathbf{c}$.

**Differentiating in suffix** - product rule + $\partial_kx_i=\delta_{ki}$.

*Example*. $\partial_k(a_{ij}x_ix_j)$ with $a_{ij}=a_{ji}$ constant:

- *Pull out constant*: $=a_{ij}\,\partial_k(x_ix_j)$.
- *Product rule on $x_ix_j$*: $=a_{ij}[(\partial_kx_i)x_j+x_i(\partial_kx_j)]=a_{ij}[\delta_{ki}x_j+x_i\delta_{kj}]$.
- *Collapse $\delta$s*: $=a_{kj}x_j+a_{ik}x_i$.
- *Use symmetry $a_{ik}=a_{ki}$ and relabel $i\to j$*: $=a_{kj}x_j+a_{kj}x_j=2a_{kj}x_j$.

## §3. Vector Calculus Identities (suffix proofs)

| Identity | Proof sketch |
|---|---|
| $\nabla\times(\nabla f)=\mathbf{0}$ | $\epsilon_{ijk}\partial_j\partial_kf=0$ - kill ($\epsilon$ antisym, $\partial\partial$ sym in $j,k$) |
| $\nabla\cdot(\nabla\times\mathbf{u})=0$ | $\epsilon_{ijk}\partial_i\partial_ju_k=0$ - kill in $i,j$ |
| $\nabla\cdot(f\mathbf{u})=f\nabla\cdot\mathbf{u}+\mathbf{u}\cdot\nabla f$ | $\partial_i(fu_i)=f\partial_iu_i+u_i\partial_if$ |
| $\nabla\times(f\mathbf{u})=f\nabla\times\mathbf{u}+\nabla f\times\mathbf{u}$ | $\epsilon_{ijk}\partial_j(fu_k)=f\epsilon_{ijk}\partial_ju_k+\epsilon_{ijk}(\partial_jf)u_k$ |
| $\nabla\times(\beta\nabla\beta)=\mathbf{0}$ | Product rule: $\epsilon_{ijk}\partial_j(\beta\partial_k\beta)=\epsilon_{ijk}(\partial_j\beta)(\partial_k\beta)+\beta\epsilon_{ijk}\partial_j\partial_k\beta$. Both kill ($(\partial_j\beta)(\partial_k\beta)$ sym in $(j,k)$; $\partial_j\partial_k\beta$ sym). |
| $\mathbf{u}\times(\mathbf{v}\times\mathbf{w})=(\mathbf{u}\cdot\mathbf{w})\mathbf{v}-(\mathbf{u}\cdot\mathbf{v})\mathbf{w}$ | $\epsilon_{ijk}u_j\epsilon_{k\ell m}v_\ell w_m=\epsilon_{kij}\epsilon_{k\ell m}\dots$ apply $\epsilon\epsilon$ |
| $(\mathbf{u}\times\mathbf{v})\cdot(\mathbf{w}\times\mathbf{z})=(\mathbf{u}\cdot\mathbf{w})(\mathbf{v}\cdot\mathbf{z})-(\mathbf{v}\cdot\mathbf{w})(\mathbf{u}\cdot\mathbf{z})$ | $\epsilon_{ijk}\epsilon_{i\ell m}u_jv_kw_\ell z_m$ apply $\epsilon\epsilon$ |
| $(\mathbf{u}\times(\mathbf{v}\times\mathbf{w}))\cdot\mathbf{z}=(\mathbf{u}\cdot\mathbf{w})(\mathbf{v}\cdot\mathbf{z})-(\mathbf{u}\cdot\mathbf{v})(\mathbf{w}\cdot\mathbf{z})$ | BAC-CAB then dot $\mathbf{z}$ (pull scalar prefactors first) |
| $\nabla f(r)=f'(r)\mathbf{r}/r$ | $\partial_if(r)=f'(r)\partial_ir=f'(r)x_i/r$ |
| $\det A=0$ if two rows equal | $\det A=\epsilon_{ijk}A_{1i}A_{2j}A_{3k}$; sym $A_{1i}A_{1j}\times$ antisym $\epsilon_{ijk}\Rightarrow 0$ |

## §4. Cartesian Transformations

**Basis axioms**

- *Basis* of $\mathbb{R}^3$ = three linearly independent vectors spanning the space.
- *Orthogonal*: $\mathbf{e}_i\cdot\mathbf{e}_j=0$ for $i\neq j$.
- *Orthonormal*: orthogonal + $|\mathbf{e}_i|=1$.
- *Global basis*: same vectors at every point (Cartesian, rigid).
- *Local basis*: vectors vary with position (curvilinear - §7).

**Rotation matrix $L_{ij}$** (between two orthonormal bases)

- *Definition*: $L_{ij}=\mathbf{e}'_i\cdot\mathbf{e}_j$.
- *Basis*: $\mathbf{e}'_i=L_{ij}\mathbf{e}_j$.
- *Coordinates*: $x'_i=L_{ij}x_j$; inverse $x_i=L_{ji}x'_j$.
- *Jacobian*: $\partial x'_i/\partial x_j=L_{ij}$, $\partial x_i/\partial x'_j=L_{ji}$.
- *Chain rule*: $\partial/\partial x'_i=L_{ij}\partial/\partial x_j$.

**Properties**

- *Orthogonality* (two forms, both used to collapse contracted $L$s):
   - $L_{ij}L_{kj}=\delta_{ik}$ - sum on the **second** index ($LL^T=I$).
   - $L_{ji}L_{jk}=\delta_{ik}$ - sum on the **first** index ($L^TL=I$). *Equivalently* $L_{ja}L_{jb}=\delta_{ab}$ with dummy first.
- $L^{-1}=L^T$.
- $|\det L|=1$; proper rotation $\Rightarrow \det L=+1$.

**Tensor transformation rule** (Cartesian rank-$r$ - one $L$ per free index)

- $T'_{i_1\dots i_r}=L_{i_1j_1}\cdots L_{i_rj_r}T_{j_1\dots j_r}$
- Rank 0 (scalar): $T'=T$.
- Rank 1 (vector): $a'_i=L_{ij}a_j$.
- Rank 2: $T'=LTL^T$.
- *Rank* = number of free indices; $3^r$ components in 3D.

**Recipe - prove $X$ is a tensor**

1. Replace each factor in $X'$ by its primed form, **fresh dummy per factor**.
2. Group all $L$s on the left, original tensors on the right.
3. Collapse paired $L$s via orthogonality (above): $L_{ka}L_{kc}=\delta_{ac}$ (dummy = first index of both).
4. Use $\delta$s to contract dummies on the originals.
5. Count surviving $L$s: one per free index $\Rightarrow$ tensor of that rank.

*Example* - $T_{ijij}$ scalar:

- $T'_{ijij}=L_{ia}L_{jb}L_{ic}L_{jd}T_{abcd}=\delta_{ac}\delta_{bd}T_{abcd}=T_{abab}$.

*Example* - $(\mathbf{u}\cdot\nabla)\mathbf{u}$ vector (suffix $u_j\partial_ju_i$):

- $u'_j\partial'_ju'_i=(L_{ja}u_a)(L_{jb}\partial_b)(L_{ic}u_c)=L_{ic}\underbrace{L_{ja}L_{jb}}_{\delta_{ab}\text{ (orthogonality)}}u_a\partial_bu_c=L_{ic}(u_a\partial_au_c)$.
- One $L_{ic}$ on free $i$ $\Rightarrow$ vector ✓.

**Show $X$ is NOT a tensor** - derive transformation, identify junk term no rule produces.

- E.g. $\partial V_i/\partial x^j$: $\partial_{j'}V'_{i'}=L^k{}_{i'}L^\ell{}_{j'}\partial_\ell V_k+V_k\partial_{j'}L^k{}_{i'}$. First term obeys cov rank-2 law; second is junk from non-constant $L$.

## §5. Generalised Coords: Dual Basis, Components, Rank-2 Transforms

**Two $L$ flavours** (index position matters now)

- $L^j{}_{i'}=\partial x^j/\partial x'^i$ - matches **lower** indices.
- $L^{i'}{}_j=\partial x'^i/\partial x^j$ - matches **upper** indices.
- *Inverse identity*: $L^i{}_{k'}L^{k'}{}_j=\delta^i_j$ (chain rule on identity $x^i(x'(x))$).

**General transformation rule** - one $L$ per free index, kind matched to its level.

- Each *upper* free index gets $L^{i'}{}_a$. Each *lower* gets $L^a{}_{i'}$.
- $V'_{i'}=L^k{}_{i'}V_k$; $V'^{i'}=L^{i'}{}_kV^k$; $T'^{ij}{}_k=L^{i'}{}_aL^{j'}{}_bL^c{}_{k'}T^{ab}{}_c$.

**Dual basis** - unique $\mathbf{e}^i$ with $\mathbf{e}^i\cdot\mathbf{e}_k=\delta^i_k$.

- *Cross-product formula*: $\mathbf{e}^i=(\mathbf{e}_j\times\mathbf{e}_k)/V$, where $V=\mathbf{e}_1\cdot(\mathbf{e}_2\times\mathbf{e}_3)$, $(i,j,k)$ cyclic.
- *Original from dual*: $\mathbf{e}_i=g_{ij}\mathbf{e}^j$ (or same recipe with $V'=1/V$).
- *Orthonormal* $\Rightarrow\mathbf{e}^i=\mathbf{e}_i$.
- *Always verify*: $\mathbf{e}^i\cdot\mathbf{e}_k=\delta^i_k$ on the diagonal.
- *Cross product formula*: see §2 (cover-row / cofactor expansion).

**Vector expansion** - $\mathbf{A}=A^i\mathbf{e}_i=A_i\mathbf{e}^i$.

- *Contravariant* (in original basis): $A^i=\mathbf{A}\cdot\mathbf{e}^i$.
- *Covariant* (in dual basis): $A_i=\mathbf{A}\cdot\mathbf{e}_i$.
- *Orthogonal shortcut*: $A_i=g_{ii}A^i$ (no sum).

**Metric tensor**

- *Covariant*: $g_{ij}=\mathbf{e}_i\cdot\mathbf{e}_j$.
- *Contravariant*: $g^{ij}=\mathbf{e}^i\cdot\mathbf{e}^j=[g_{ij}]^{-1}$ (matrix inverse).
- *Mixed*: $g^i{}_j=\delta^i_j$ - just relabels, never raises/lowers.
- *Symmetric*, positive on diagonal.
- *Orthogonal coord* $\Rightarrow g_{ij}$ diagonal, $g^{ii}=1/g_{ii}$ (no sum).

**Raise / lower** - only fully cov/contra metrics do real work.

- $A_i=g_{ik}A^k$; $A^i=g^{ik}A_k$.
- *Inner product*: $\mathbf{A}\cdot\mathbf{B}=A^iB_i=A_iB^i=g_{ik}A^iB^k=g^{ik}A_iB_k$.

**Four flavours of rank-2** - all numerically equal in Cartesian $K$ (since $g=\delta$); differ in $K'$.

- $A_{ik}=g_{i\ell}g_{km}A^{\ell m}$
- $A^{ik}=g^{i\ell}g^{km}A_{\ell m}$
- $A^i{}_k=g^{i\ell}A_{\ell k}$
- $A_i{}^k=g^{k\ell}A_{i\ell}$

**Transformation of rank-2** - suffix + matrix form.

- Rows of $L=[L^j{}_{i'}]$ = new basis $\mathbf{e}'_i$ in Cartesian (read off directly).
- Rows of $M^*=[L^{i'}{}_j]$ = new dual $\mathbf{e}'^i$ in Cartesian.

| Want | Suffix | Matrix |
|---|---|---|
| $P'_{i'k'}$ (cov) | $L^\ell{}_{i'}L^m{}_{k'}P_{\ell m}$ | $LPL^T$ |
| $P'^{i'k'}$ (contra) | $L^{i'}{}_\ell L^{k'}{}_mP^{\ell m}$ | $M^*P(M^*)^T$ |
| $P'^{\cdot k'}{}_{i'}$ (mixed) | $L^\ell{}_{i'}L^{k'}{}_mP^{\cdot m}{}_\ell$ | $LP(M^*)^T$ |
| $P'^{i'}{}_{\cdot k'}$ (mixed) | $L^{i'}{}_\ell L^m{}_{k'}P^\ell{}_{\cdot m}$ | $M^*PL^T$ |

- *Prefer the matrix form*; never invert $g_{i'k'}$ unless asked.

## §6. Tensor Algebra

| Op | Definition | Rank |
|---|---|---|
| **Addition** | $(A+B)_{ik}=A_{ik}+B_{ik}$, same rank & structure | preserves |
| **Outer product** | $(A\otimes B)_{ij\dots k\ell\dots}=A_{ij\dots}B_{k\ell\dots}$ | sums |
| **Contraction** | set two indices equal (curvilinear: 1 upper + 1 lower) | drops by 2 |
| **Inner product** | outer + contract | net |

- *Mismatched structure* (e.g. $A_i+B^i$) is NOT a tensor.

**Outer product of matrices** - $M$ ($m_1\times m_2$) $\otimes$ $N$ ($n_1\times n_2$) = $(m_1n_1)\times(m_2n_2)$ block; entry $M_{ij}\to$ block $M_{ij}\cdot N$.

- *Example*. $M=\begin{pmatrix}-1&1\\0&1\end{pmatrix},N=\begin{pmatrix}1&-1\\1&2\end{pmatrix}\Rightarrow M\otimes N=\begin{pmatrix}-1&1&1&-1\\-1&-2&1&2\\0&0&1&-1\\0&0&1&2\end{pmatrix}$.

**Contraction** - set two indices of one tensor equal; rank drops by 2 (curvilinear: pair 1 upper + 1 lower).

- *Trace* (rank 2 $\to$ scalar): $T_{ii}=T_{11}+T_{22}+T_{33}$. E.g. $T=\begin{pmatrix}1&2&3\\4&5&6\\7&8&9\end{pmatrix}\Rightarrow T_{ii}=1+5+9=15$.
- *Rank 3 $\to$ rank 1*: $A_{iji}$ sums over $i$ (free index $j$). Curvilinear analogue: $A^i{}_{ji}$ or $A^i{}_{ij}$.
- *Sensitivity to which indices*: $B_iA_{ij}$ vs $B_jA_{ij}$ differ. $B_iA_{ij}$ (dummy = **first** index $i$ → sums *down columns* of $A$) $= \mathbf{B}^TA$; $B_jA_{ij}$ (dummy = **second** index $j$ → sums *across rows* of $A$) $= A\mathbf{B}$. E.g. $A=\begin{pmatrix}1&0&2\\3&0&1\\1&0&4\end{pmatrix},\mathbf{B}=(1,1,0)$: $B_iA_{ij}=(1{+}3{+}0,\,0,\,2{+}1{+}0)=(4,0,3)$; $B_jA_{ij}=(1{+}0{+}0,\,3{+}0{+}0,\,1{+}0{+}0)=(1,3,1)$.

**Inner product** - outer product then contract; net rank = (sum of ranks) $-2$.

- $A_iB_i=\mathbf{A}\cdot\mathbf{B}$ (rank $1{+}1\to 0$). E.g. $\mathbf{A}=(1,2,3),\mathbf{B}=(4,-1,2)\Rightarrow A_iB_i=4-2+6=8$.
- $T_{ik}A_k=TA$ (rank $2{+}1\to 1$, free $i$). E.g. $T=\begin{pmatrix}1&0&2\\0&2&1\\1&-1&4\end{pmatrix},A=(1,-1,1)\Rightarrow T_{ik}A_k=(3,-1,6)$.
- $T_{ik}A_kB_i=\mathbf{B}^TT\mathbf{A}$ (rank $2{+}1{+}1\to 0$, scalar). With $B=(1,-2,0)$: $B_iT_{ik}A_k=3-(-2)+0=5$.
- $A_{ij}B^{ij}$ (rank $2{+}2\to 0$): sum of entrywise products.

**Contraction of two tensors is a tensor**

- *Example*. $A_{ij}B_{ik\ell}$ rank-3: $A'_{ij}B'_{ik\ell}=L_{jb}L_{kd}L_{\ell e}\delta_{ac}A_{ab}B_{cde}=L_{jb}L_{kd}L_{\ell e}(A_{cb}B_{cde})$ - one $L$ per surviving free index ✓.

**Symmetry from $\epsilon$**

- $A_{ijk}=\epsilon_{ij\ell}B_{k\ell}$: swap $i\leftrightarrow j$ gives $A_{jik}=-A_{ijk}$ - antisym in $(i,j)$.
- Other pairs need direct check.

**Levi-Civita inversion** - $B_{ijk}=\epsilon_{ij\ell}A_{\ell k}$.

- Multiply by $\epsilon_{ijm}$, apply $\epsilon_{ijm}\epsilon_{ij\ell}=2\delta_{m\ell}$.
- $\Rightarrow A_{mk}=\tfrac12\epsilon_{ijm}B_{ijk}$.

**Quotient rule** - if $T_{ij}b_j$ is a tensor for *every* vector $\mathbf{b}$, then $T_{ij}$ is a tensor.

## §7. Curvilinear / Local-basis Geometry

**Coordinate basis**

- $\mathbf{e}_i=\partial\mathbf{r}/\partial x^i$ - tangent to $x^i$-coordinate curve; varies with position.

**Metric**

- $g_{ij}=\mathbf{e}_i\cdot\mathbf{e}_j$, symmetric.
- *Orthogonal coord* $\iff$ off-diagonals all zero.
- *Arc length*: $(ds)^2=g_{ij}dx^idx^j$; orthogonal $\Rightarrow (ds)^2=g_{ii}(dx^i)^2$.
- *Lamé / scale factors*: $h_i=\sqrt{g_{ii}}=|\mathbf{e}_i|$.

**Christoffel symbols** - encode how the basis changes with position.

- *Second kind*: $\Gamma^i{}_{jk}=\mathbf{e}^i\cdot\partial_k\mathbf{e}_j$, so $\partial_k\mathbf{e}_j=\Gamma^i{}_{jk}\mathbf{e}_i$.
- *First kind*: $\Gamma_{ijk}=\mathbf{e}_i\cdot\partial_k\mathbf{e}_j=g_{i\ell}\Gamma^\ell{}_{jk}$.

**Properties**

- *Symmetric in last two*: $\Gamma^i{}_{jk}=\Gamma^i{}_{kj}$, $\Gamma_{ijk}=\Gamma_{ikj}$ (from $\partial_j\partial_k\mathbf{r}=\partial_k\partial_j\mathbf{r}$).
- *NOT a tensor* - extra inhomogeneous term in transformation.
- *Constant basis (rigid global)* $\Rightarrow \partial_k\mathbf{e}_j=0$ $\Rightarrow$ all $\Gamma=0$. *Any* $K'$ with basis as fixed linear combos of $\mathbf{i}_n$ gives all $\Gamma=0$.

**Formula from metric**

- $\Gamma_{ijk}=\tfrac12(\partial_kg_{ij}+\partial_jg_{ik}-\partial_ig_{jk})$
- $\Gamma^i{}_{jk}=g^{i\ell}\Gamma_{\ell jk}$
- *Orthogonal $g$*: $\Gamma^i{}_{jk}=\Gamma_{ijk}/g_{ii}$ (no sum).

**Pattern table - orthogonal $g$** (only these nonzero)

| Pattern of $(i,j,k)$ | $\Gamma_{ijk}$ |
|---|---|
| $i=j=k$ | $+\tfrac12\partial_ig_{ii}$ |
| Doubled-$i$ ($i=j\neq k$ or $i=k\neq j$) | $+\tfrac12\partial_\text{lone}g_{ii}$ |
| Lone-$i$ ($i\neq j=k$) | $-\tfrac12\partial_ig_{jj}$ |
| All distinct | $0$ |

- *Mnemonic*: **doubled → +**, deriv of $g_{ii}$ wrt the lone index. **Lone → −**, deriv of $g_{jj}$ wrt $i$.

*Worked example - parabolic (mock Q4)*. $\mathbf{r}=\sigma\tau\mathbf{i}_1+\tfrac12(\sigma^2-\tau^2)\mathbf{i}_2+\phi\mathbf{i}_3$, $(x^1,x^2,x^3)=(\sigma,\tau,\phi)$.

- *Basis* ($\mathbf{e}_i=\partial\mathbf{r}/\partial x^i$): $\mathbf{e}_1=(\tau,\sigma,0)$, $\mathbf{e}_2=(\sigma,-\tau,0)$, $\mathbf{e}_3=(0,0,1)$.
- *Metric* ($g_{ij}=\mathbf{e}_i\cdot\mathbf{e}_j$): $g_{11}=\tau^2+\sigma^2=\sigma^2+\tau^2$; $g_{22}=\sigma^2+\tau^2$; $g_{33}=1$; $g_{12}=\tau\sigma+\sigma(-\tau)=0$; $g_{13}=g_{23}=0$. **Orthogonal**.
- *Arc length* (orthogonal $\Rightarrow (ds)^2=g_{ii}(dx^i)^2$): $(ds)^2=(\sigma^2+\tau^2)(d\sigma^2+d\tau^2)+d\phi^2$. *Lamé* ($h_i=\sqrt{g_{ii}}$): $h_1=h_2=\sqrt{\sigma^2+\tau^2}$, $h_3=1$.
- *Metric derivs*: $\partial_\sigma g_{11}=\partial_\sigma g_{22}=2\sigma$; $\partial_\tau g_{11}=\partial_\tau g_{22}=2\tau$; all others 0 (including everything with $\phi$ or $g_{33}$).
- *All $\Gamma_{ijk}$ by pattern (table in §7)*:
   - $i=j=k$ ($+\tfrac12\partial_ig_{ii}$): $\Gamma_{111}=\sigma$; $\Gamma_{222}=\tau$; $\Gamma_{333}=0$.
   - Doubled-$i$ ($+\tfrac12\partial_\text{lone}g_{ii}$): $\Gamma_{112}=\Gamma_{121}=\tau$; $\Gamma_{212}=\Gamma_{221}=\sigma$; the rest (involving $\partial_\phi$ or $g_{33}$) all 0.
   - Lone-$i$ ($-\tfrac12\partial_ig_{jj}$): $\Gamma_{122}=-\sigma$; $\Gamma_{211}=-\tau$; rest 0.
   - All distinct: all 0.
- *Final nonzero list*: $\Gamma_{111}=\sigma$, $\Gamma_{222}=\tau$, $\Gamma_{112}=\Gamma_{121}=\tau$, $\Gamma_{212}=\Gamma_{221}=\sigma$, $\Gamma_{122}=-\sigma$, $\Gamma_{211}=-\tau$; all others 0.

**Covariant derivative** - fixes non-tensoriality of $\partial$.

- $A_{i,k}=\partial_kA_i-\Gamma^j{}_{ik}A_j$ (lower index: $-\Gamma$).
- $A^i{}_{,k}=\partial_kA^i+\Gamma^i{}_{jk}A^j$ (upper index: $+\Gamma$).
- Higher rank: one $\Gamma$ per index.

**Ricci's theorem** - the metric is covariantly constant: $g_{ik,\ell}=0$.

- *Proof*: $g_{ik,\ell}=\partial_\ell g_{ik}-\Gamma^m{}_{i\ell}g_{mk}-\Gamma^m{}_{k\ell}g_{im}=\partial_\ell g_{ik}-\Gamma_{ki\ell}-\Gamma_{ik\ell}$. By the metric formula, $\Gamma_{ik\ell}+\Gamma_{ki\ell}=\partial_\ell g_{ik}$, so $g_{ik,\ell}=0$ ✓.
- *Rearrangement*: $\partial_\ell g_{ik}=\Gamma_{ik\ell}+\Gamma_{ki\ell}$.
- *Orthogonal coords* ($g_{ik}=0$ for $i\neq k$): RHS must vanish $\Rightarrow \Gamma_{ik\ell}=-\Gamma_{ki\ell}$ for $i\neq k$ (first-kind antisym in first two indices). NOT true for second kind.

**Riemann-Christoffel tensor** - true tensor, built from $\Gamma$.

- $R^r{}_{ijk}=\partial_j\Gamma^r{}_{ki}-\partial_k\Gamma^r{}_{ij}+\Gamma^p{}_{ik}\Gamma^r{}_{pj}-\Gamma^p{}_{ij}\Gamma^r{}_{pk}$
- *Antisym in last two*: $R^r{}_{ijk}=-R^r{}_{ikj}$; so $R^r{}_{ijj}=0$.
- *Flatness*: $R^r{}_{ijk}\equiv 0$ everywhere $\iff$ space is Euclidean (flat).
- *Sphere* ($g_{11}=1,g_{22}=\sin^2\phi$): $R^1{}_{212}=\sin^2\phi\neq 0$ (curved).
- *Cylindrical* (disguised flat $\mathbb{R}^3$): all components vanish.
- *Ricci tensor* $R_{ij}=R^k{}_{ikj}$, symmetric rank-2; $R_{ij}=0$ necessary but not sufficient for flat.

## §8. Playbook & Sanity Checks

**Question phrasing → section**

- Vector ↔ suffix conversion / $\partial$-in-suffix simplify → §2
- $\nabla\times(\nabla f)$, $\nabla\times(\beta\nabla\beta)$, $\nabla f(r)$, triple-cross etc. → §3
- Prove $X$ is / isn't a tensor → §4 (Cartesian) or §5 (general)
- Outer product $M\otimes N$, contractions $B_iA_{ij}$ vs $B_jA_{ij}$ → §6
- Dual basis, $V_i$, $V^i$, $L^j{}_{i'}$, transform $P_{ik}$ → $K'$ → §5
- Symmetry of constructed $A_{ijk}=\epsilon_{ij\ell}B_{k\ell}$, Levi-Civita inversion → §6
- Christoffel for constant basis (all 0) → §7
- Curvilinear: basis / metric / arc / $\Gamma$ → §7
- Riemann / flatness → §7

**Pitfalls**

- Triple-repeated index (e.g. $a_ib_ic_i$) is illegal.
- Free indices must match across all terms and both sides.
- Distinct dummies for independent sums.
- Cyclically rotate $\epsilon$ so the shared index is in position 1 *before* applying the $\epsilon\epsilon$ identity.
- $\Gamma$ is NOT a tensor.
- Ricci $=0$ does not imply flat - only Riemann $=0$ does.
- All four forms of $[P]$ are numerically equal in Cartesian $K$; they differ in $K'$.
- Christoffel pattern: **lone-$i$ → negative**; **doubled-$i$ → positive**.
- Constant basis (rigid linear combos of $\mathbf{i}_n$) $\Rightarrow$ all $\Gamma=0$ regardless of orthogonality.

**Sanity checks before final answer**

- *Dual basis*: verify $\mathbf{e}^i\cdot\mathbf{e}_k=\delta^i_k$.
- *Components*: reconstruct $\mathbf{V}=V^i\mathbf{e}_i=V_i\mathbf{e}^i$ and compare.
- *Tensor proof*: count surviving $L$s - must equal claimed rank.
- *Christoffel*: $\Gamma^i{}_{jk}=\Gamma^i{}_{kj}$; orthogonal $\Rightarrow$ first-kind antisym in first two for $i\neq k$.
- *Metric*: symmetric, positive on diagonal; orthogonal $\Rightarrow$ off-diagonals all 0.
- *Riemann*: antisym in last two $\Rightarrow R^r{}_{ijj}=0$.
