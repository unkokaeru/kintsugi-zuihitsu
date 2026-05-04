# MTH3008 Weekly Problems 5

> **Original Documents**: [[mth3008 weekly problem sheet 5.pdf]] / [[mth3008 weekly problem sheet 5 solutions.pdf]]
>
> **Vibes**: Index-gymnastics + "differentiate the position vector" to get bases/metrics, then use orthogonality to simplify everything.
>
> **Used Techniques**:
> - Tensor transformation law (free vs dummy indices).
> - Orthogonal matrix identity $L_{ij}L_{kj}=\delta_{ik}$ (aka "two $L$'s give a delta").
> - Contraction/trace as "sum over a repeated index" + use $\delta$ to collapse sums.
> - For generalised coordinates: $\mathbf{e}_i=\partial\mathbf{r}/\partial x^i$, $g_{ij}=\mathbf{e}_i\cdot\mathbf{e}_j$, and (orthogonal case) $ds^2=\sum (h_i\,dx^i)^2$ with $h_i=\sqrt{g_{ii}}$.
> - Raise/lower with metric in an orthogonal basis via $A_i=g_{ii}A^i$ and $g^{ii}=1/g_{ii}$.

---

## 5.1. Transformation Rules for Rank Four and Six Tensors

> [!question]
> Write down the transformation rule for:
> 1. A tensor of rank four.
> 2. A tensor of rank six.

Using the lecture rule "one $L$" for each free index, we have:

1. Rank 4:

$$
T'_{ijk\ell}=L_{im}L_{jn}L_{kp}L_{\ell q}\,T_{mnpq}.
$$

1. Rank 6:

$$
S'_{ijk\ell mn}=L_{ia}L_{jb}L_{kc}L_{\ell d}L_{me}L_{nf}\,S_{abcdef}.
$$

---

## 5.2. Tensor Contraction to Rank Two

> [!question]
> Show that if $Q_{ijk\ell}$ is a tensor of rank four, then $Q_{ijj\ell}$ is a tensor of rank two.

Start from the rank-4 rule and then contract over the repeated $j$:

$$
Q'_{ijj\ell}
= L_{im}L_{jn}L_{jp}L_{\ell q}\,Q_{mnpq}.
$$

Because $L$ is an orthogonal transformation, $L_{jn}L_{jp}=\delta_{np}$, so:

$$
Q'_{ijj\ell}=L_{im}L_{\ell q}\,Q_{mnnq}.
$$

This is exactly the rank-2 transformation law in the free indices $i,\ell$, hence $Q_{ijj\ell}$ is a rank-2 tensor.

---

## 5.3. Trace of a Second-Rank Tensor

> [!question]
> Show that if $T_{ij}$ is a tensor, then $T_{ii}$ is a scalar.

Use the rank-2 transformation rule and contract:

$$
T'_{ii}=L_{im}L_{in}\,T_{mn}.
$$

Orthogonality gives $L_{im}L_{in}=\delta_{mn}$, so $T'_{ii}=\delta_{mn}T_{mn}=T_{mm}$, i.e. the trace is unchanged by the transformation.

Therefore, $T_{ii}$ is a scalar (rank 0 tensor).

---

## 5.4. Basis Vectors and Metric Tensor in Polar Coordinates

> [!question]
> Consider the 2D polar coordinates $(x^{1}, x^{2}) = (r, \theta)$ with $\mathbf{r}=r\cos\theta\,\mathbf{i}_1+r\sin\theta\,\mathbf{i}_2$.
> 1. Find $\mathbf{e}_1,\mathbf{e}_2$.
> 2. Find $g_{ij}$ and $g^{ij}$.
> 3. Give $ds$ and the metric coefficients $h_1,h_2$.

1. Basis vectors come from $\mathbf{e}_i=\partial\mathbf{r}/\partial x^i$:

$$
\mathbf{e}_1=\frac{\partial\mathbf{r}}{\partial r}=\cos\theta\,\mathbf{i}_1+\sin\theta\,\mathbf{i}_2,\qquad
\mathbf{e}_2=\frac{\partial\mathbf{r}}{\partial \theta}=-r\sin\theta\,\mathbf{i}_1+r\cos\theta\,\mathbf{i}_2.
$$

1. Metric is $g_{ij}=\mathbf{e}_i\cdot\mathbf{e}_j$:

$$
[g_{ij}] =
\begin{pmatrix}
\mathbf{e}_1\cdot\mathbf{e}_1 & \mathbf{e}_1\cdot\mathbf{e}_2\\
\mathbf{e}_2\cdot\mathbf{e}_1 & \mathbf{e}_2\cdot\mathbf{e}_2
\end{pmatrix}
=
\begin{pmatrix}
1 & 0\\
0 & r^2
\end{pmatrix},
$$

And since the basis is orthogonal, $g^{11}=1/g_{11}$, $g^{22}=1/g_{22}$:

$$
[g^{ij}]=
\begin{pmatrix}
1 & 0\\
0 & \frac{1}{r^2}
\end{pmatrix}.
$$

1. Arc length satisfies $ds^2=g_{ij}\,dx^i dx^j$, and for orthogonal systems $ds^2=(h_1\,dr)^2+(h_2\,d\theta)^2$ with $h_i=\sqrt{g_{ii}}$:

$$
ds^2=dr^2+r^2\,d\theta^2,\qquad h_1=1,\quad h_2=r.
$$

---

## 5.5. Basis Vectors and Metric Coefficients in Spherical Coordinates

> [!question]
> In spherical coordinates $(x^{1}, x^{2}, x^{3}) = (r, \phi, \theta)$ with $\mathbf{r}=r\sin\phi\cos\theta\,\mathbf{i}_1+r\sin\phi\sin\theta\,\mathbf{i}_2+r\cos\phi\,\mathbf{i}_3$, find the basis vectors and the metric coefficients.

Use $\mathbf{e}_i=\partial\mathbf{r}/\partial x^i$:

$$
\mathbf{e}_1=\frac{\partial\mathbf{r}}{\partial r}=
\sin\phi\cos\theta\,\mathbf{i}_1+\sin\phi\sin\theta\,\mathbf{i}_2+\cos\phi\,\mathbf{i}_3,
$$

$$
\mathbf{e}_2=\frac{\partial\mathbf{r}}{\partial \phi}=
r\cos\phi\cos\theta\,\mathbf{i}_1+r\cos\phi\sin\theta\,\mathbf{i}_2-r\sin\phi\,\mathbf{i}_3,
$$

$$
\mathbf{e}_3=\frac{\partial\mathbf{r}}{\partial \theta}=
-r\sin\phi\sin\theta\,\mathbf{i}_1+r\sin\phi\cos\theta\,\mathbf{i}_2.
$$

Then $g_{ij}=\mathbf{e}_i\cdot\mathbf{e}_j$, and this coordinate system is orthogonal so $g_{ij}=0$ for $i\neq j$:

$$
g_{11}=1,\qquad g_{22}=r^2,\qquad g_{33}=r^2\sin^2\phi,
$$

so the metric coefficients $h_i=\sqrt{g_{ii}}$ are:

$$
h_1=1,\qquad h_2=r,\qquad h_3=r\sin\phi.
$$

---

## 5.6. Antisymmetry of a Second-Order Tensor

> [!question]
> Given vectors $\mathbf{A},\mathbf{B}$ with components $A_i,B_i$, show that $C_{ik}=A_iB_k-A_kB_i$ is antisymmetric.

Compute $C_{ki}=A_kB_i-A_iB_k=-(A_iB_k-A_kB_i)=-C_{ik}$, so $C_{ik}=-C_{ki}$.

---

## 5.7. Zero Entries of a Mixed-Symmetry Third-Rank Tensor

> [!question]
> $T_{ijk}$ is symmetric in its last two indices and antisymmetric in its first two indices. Show $T_{ijk}=0$ for all $i,j,k$.

From symmetry in the last two indices, $T_{ijk}=T_{ikj}$.

Apply antisymmetry in the first two indices to $T_{ikj}$: $T_{ikj}=-T_{kij}$, hence $T_{ijk}=-T_{kij}$.

But the same symmetry/antisymmetry reasoning (swap $j\leftrightarrow k$ where allowed, then $i\leftrightarrow k$) also gives $T_{ijk}=T_{kij}$, so $T_{ijk}=-T_{ijk}$ and therefore $T_{ijk}=0$.

---

## 5.8. Transformation to Orthogonal Coordinates and Metric Tensors

> [!question]
> Coordinates $q^1,q^2,q^3$ are related to orthogonal coordinates $x^1,x^2,x^3$ (with orthonormal basis $\mathbf{i}_1,\mathbf{i}_2,\mathbf{i}_3$) by
> $q^1=x^1+x^2$, $q^2=x^1-x^2$, $q^3=2x^3$.
> 1. Find $\mathbf{e}_1,\mathbf{e}_2,\mathbf{e}_3$ and show orthogonal.
> 2. Find $g_{ik}$ and $g^{ik}$.
> 3. Give $ds$.
> 4. Find covariant/contravariant components of $\mathbf{A}=2\mathbf{i}_1$, $\mathbf{B}=\mathbf{i}_1+\mathbf{i}_2$, $\mathbf{C}=2\mathbf{i}_1-3\mathbf{i}_3$ w.r.t. $\mathbf{e}_1,\mathbf{e}_2,\mathbf{e}_3$, without computing the dual basis.

**Invert the coordinate map**:

$$
x^1=\frac{q^1+q^2}{2},\quad x^2=\frac{q^1-q^2}{2},\quad x^3=\frac{q^3}{2}.
$$

Write the position vector $\mathbf{r}=x^1\mathbf{i}_1+x^2\mathbf{i}_2+x^3\mathbf{i}_3$ in terms of $q$:

$$
\mathbf{r}=\frac{q^1+q^2}{2}\mathbf{i}_1+\frac{q^1-q^2}{2}\mathbf{i}_2+\frac{q^3}{2}\mathbf{i}_3.
$$

1. Basis vectors $\mathbf{e}_i=\partial\mathbf{r}/\partial q^i$:

$$
\mathbf{e}_1=\frac{1}{2}(\mathbf{i}_1+\mathbf{i}_2),\quad
\mathbf{e}_2=\frac{1}{2}(\mathbf{i}_1-\mathbf{i}_2),\quad
\mathbf{e}_3=\frac{1}{2}\mathbf{i}_3.
$$

Orthogonality is by dot products $\mathbf{e}_1\cdot\mathbf{e}_2=\mathbf{e}_1\cdot\mathbf{e}_3=\mathbf{e}_2\cdot\mathbf{e}_3=0$.

1. Metric $g_{ik}=\mathbf{e}_i\cdot\mathbf{e}_k$ is diagonal (orthogonal basis):

$$
[g_{ik}]=
\begin{pmatrix}
\frac12 & 0 & 0\\
0 & \frac12 & 0\\
0 & 0 & \frac14
\end{pmatrix},
\qquad
[g^{ik}]=
\begin{pmatrix}
2 & 0 & 0\\
0 & 2 & 0\\
0 & 0 & 4
\end{pmatrix}
\ \ (\text{since }g^{ii}=1/g_{ii}).
$$

1. Arc length:

$$
ds^2=g_{ik}\,dq^i dq^k=\tfrac12(dq^1)^2+\tfrac12(dq^2)^2+\tfrac14(dq^3)^2
= (h_1\,dq^1)^2+(h_2\,dq^2)^2+(h_3\,dq^3)^2,
$$

with $h_1=h_2=1/\sqrt2$, $h_3=1/2$.

1. Contravariant components come from solving $\mathbf{V}=V^i\mathbf{e}_i$, then covariant are $V_i=g_{ii}V^i$ (no dual basis needed).

- $\mathbf{A}=2\mathbf{i}_1$: $A^1=2,\ A^2=2,\ A^3=0$ and $A_1=1,\ A_2=1,\ A_3=0$.
- $\mathbf{B}=\mathbf{i}_1+\mathbf{i}_2$: $B^1=2,\ B^2=0,\ B^3=0$ and $B_1=1,\ B_2=0,\ B_3=0$.
- $\mathbf{C}=2\mathbf{i}_1-3\mathbf{i}_3$: $C^1=2,\ C^2=2,\ C^3=-6$ and $C_1=1,\ C_2=1,\ C_3=-\tfrac{3}{2}$.

---

## 5.9. Kronecker Delta from Transformation Coefficients

> [!question]
> With $L^{j}_{i'}=\partial x^{j}/\partial x'^{i}$ and $L^{i'}_{j}=\partial x'^{i}/\partial x^{j}$, show that $\delta^{j}_{i}=L^{k'}_{i}L^{j}_{k'}$.

Use the multi variable chain rule on the identity map $x^j=x^j(x'(x))$:

$$
\frac{\partial x^j}{\partial x^i}
=
\frac{\partial x^j}{\partial x'^{k}}
\frac{\partial x'^{k}}{\partial x^i}
=
L^{j}_{k'}\,L^{k'}_{i}.
$$

But $\partial x^j/\partial x^i=\delta^j_i$, so $\delta^{j}_{i}=L^{k'}_{i}L^{j}_{k'}$ (just reorder the scalar factors).
