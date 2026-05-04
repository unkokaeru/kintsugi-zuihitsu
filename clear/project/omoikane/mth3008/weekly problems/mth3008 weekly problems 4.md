# MTH3008 Weekly Problems 4

> **Original Documents**: [[mth3008 weekly problem sheet 4.pdf]] / [[mth3008 weekly problem sheet 4 solutions.pdf]]
>
> **Vibes**: Dual-basis grind, then satisfying metric/index-raising consistency checks.
>
> **Used Techniques**:
>  - Dual basis via $\mathbf{e}^i = \dfrac{\mathbf{e}_j \times \mathbf{e}_k}{V}$ with $V=\mathbf{e}_1\cdot(\mathbf{e}_2\times\mathbf{e}_3)$ (cyclic $i,j,k$).
>  - Covariant/contravariant components: $A_i=\mathbf{A}\cdot \mathbf{e}_i$, $A^i=\mathbf{A}\cdot \mathbf{e}^i$.
>  - Expansion coefficients and transform rule: $L^n_{m'}=\mathbf{e}'_m\cdot \mathbf{i}_n$, $B'_i=L^j_{i'}B_j$.
>  - Metric: $g_{ik}=\mathbf{e}_i\cdot \mathbf{e}_k$, and raising/lowering via $A_i=g_{ik}A^k$, $A^i=g^{ik}A_k$.

---

## 4.1. Dual Basis and Components for Oblique System

> [!question]
> 1. Given an orthogonal coordinate system $K$ with orthonormal basis $\mathbf{i}_1,\mathbf{i}_2,\mathbf{i}_3$, consider a new coordinate system $K'$ with basis vectors $\mathbf{e}_1=\mathbf{i}_1+\mathbf{i}_2-\mathbf{i}_3$, $\mathbf{e}_2=\mathbf{i}_1+\mathbf{i}_2$, $\mathbf{e}_3=\mathbf{i}_1-\mathbf{i}_3$. Find a basis $\mathbf{e}^1,\mathbf{e}^2,\mathbf{e}^3$ dual to $\mathbf{e}_1,\mathbf{e}_2,\mathbf{e}_3$.
> 2. Find the covariant components of the vector joining the origin to the point $(2,0,-1)$.
> 3. Find the contravariant components of the vector joining the origin to the point $(2,0,-1)$.

**1) Dual basis.** Using the dual-basis formula with $V=\mathbf{e}_1\cdot(\mathbf{e}_2\times\mathbf{e}_3)=1$, the dual basis is:

$$
\mathbf{e}^1=\begin{pmatrix}-1\\ 1\\ -1\end{pmatrix},\qquad
\mathbf{e}^2=\begin{pmatrix}1\\ 0\\ 1\end{pmatrix},\qquad
\mathbf{e}^3=\begin{pmatrix}1\\ -1\\ 0\end{pmatrix}.
$$

Let $\mathbf{A}=(2,0,-1)^T = 2\mathbf{i}_1-\mathbf{i}_3$.

**2) Covariant components** $A_i=\mathbf{A}\cdot \mathbf{e}_i$:

$$
(A_1,A_2,A_3)=(3,2,3).
$$

**3) Contravariant components** $A^i=\mathbf{A}\cdot \mathbf{e}^i$:

$$
(A^1,A^2,A^3)=(-1,1,2).
$$

---

## 4.2. Dual Basis and Components

> [!question]
> 1. Given an orthogonal coordinate system $K$ with orthonormal basis $\mathbf{i}_1,\mathbf{i}_2,\mathbf{i}_3$, consider a new coordinate system $K'$ with basis vectors $\mathbf{e}_1=\mathbf{i}_1+2\mathbf{i}_2+4\mathbf{i}_3$, $\mathbf{e}_2=\mathbf{i}_2$, $\mathbf{e}_3=\mathbf{i}_1+2\mathbf{i}_2+5\mathbf{i}_3$. Find a basis $\mathbf{e}^1,\mathbf{e}^2,\mathbf{e}^3$ dual to $\mathbf{e}_1,\mathbf{e}_2,\mathbf{e}_3$.
> 2. Find the covariant components of the vector joining the origin to the point $(1,1,1)$.
> 3. Find the contravariant components of the vector joining the origin to the point $(1,1,1)$.

**1) Dual basis.** Here $V=1$, and the dual basis is:

$$
\mathbf{e}^1=\begin{pmatrix}5\\ 0\\ -1\end{pmatrix},\qquad
\mathbf{e}^2=\begin{pmatrix}-2\\ 1\\ 0\end{pmatrix},\qquad
\mathbf{e}^3=\begin{pmatrix}-4\\ 0\\ 1\end{pmatrix}.
$$

Let $\mathbf{B}=(1,1,1)^T$.

**2) Covariant components** $B_i=\mathbf{B}\cdot \mathbf{e}_i$:

$$
(B_1,B_2,B_3)=(7,1,8).
$$

**3) Contravariant components** $B^i=\mathbf{B}\cdot \mathbf{e}^i$:

$$
(B^1,B^2,B^3)=(4,-1,-3).
$$

---

## 4.3. Dual Basis and Components for Non-Orthogonal Basis

> [!question]
> 1. Given an orthogonal coordinate system $K$ with orthonormal basis $\mathbf{i}_1,\mathbf{i}_2,\mathbf{i}_3$, consider a new coordinate system $K'$ with basis vectors $\mathbf{e}_1=\mathbf{i}_1+2\mathbf{i}_2$, $\mathbf{e}_2=2\mathbf{i}_1+2\mathbf{i}_2+4\mathbf{i}_3$, $\mathbf{e}_3=2\mathbf{i}_3$. Find a basis $\mathbf{e}^1,\mathbf{e}^2,\mathbf{e}^3$ dual to $\mathbf{e}_1,\mathbf{e}_2,\mathbf{e}_3$.
> 2. Find the covariant components of the vector $\mathbf{C}=2\mathbf{i}_2+2\mathbf{i}_3$.
> 3. Find the contravariant components of the vector $\mathbf{C}=2\mathbf{i}_2+2\mathbf{i}_3$.

**1) Dual basis.** Using $V=\mathbf{e}_3\cdot(\mathbf{e}_1\times\mathbf{e}_2)=-4$, we get:

$$
\mathbf{e}^1=\begin{pmatrix}-1\\ 1\\ 0\end{pmatrix},\qquad
\mathbf{e}^2=\begin{pmatrix}1\\ -\tfrac12\\ 0\end{pmatrix},\qquad
\mathbf{e}^3=\begin{pmatrix}-2\\ 1\\ \tfrac12\end{pmatrix}.
$$

Let $\mathbf{C}=(0,2,2)^T$.

**2) Covariant components** $C_i=\mathbf{C}\cdot \mathbf{e}_i$:

$$
(C_1,C_2,C_3)=(4,12,4).
$$

**3) Contravariant components** $C^i=\mathbf{C}\cdot \mathbf{e}^i$:

$$
(C^1,C^2,C^3)=(2,-1,3).
$$

---

## 4.4. Expansion Coefficients and Metric Tensor

> [!question]
> 1. Given an orthogonal coordinate system $K$ with orthonormal basis $\mathbf{i}_1,\mathbf{i}_2,\mathbf{i}_3$, consider the vector $\mathbf{B}=\mathbf{i}_1+3\mathbf{i}_2$. Let $K'$ be a new coordinate system with basis vectors $\mathbf{e}'_1=\mathbf{i}_1$, $\mathbf{e}'_2=\mathbf{i}_1-\mathbf{i}_2$, $\mathbf{e}'_3=\mathbf{i}_1+\mathbf{i}_2+\mathbf{i}_3$. Work out the expansion coefficients $L^1_{i'},L^2_{i'},L^3_{i'}$ for each $i=1,2,3$.
> 2. Compute the covariant components $B'_i$ of $\mathbf{B}$ in the coordinate system $K'$.
> 3. Find a basis dual to $\mathbf{e}'_1,\mathbf{e}'_2,\mathbf{e}'_3$.
> 4. Compute the contravariant components $B'^i$ of $\mathbf{B}$ in the coordinate system $K'$.
> 5. Let $g_{ik}=\mathbf{e}'_i\cdot \mathbf{e}'_k$. Compute these $g_{ik}$ for all $i,k=1,2,3$.
> 6. Using your answers to parts 2 and 5, work out the contravariant components $B'^i$ of $\mathbf{B}$ in $K'$ in another way.

Let $\mathbf{B}=(1,3,0)^T$ in the orthonormal basis $\mathbf{i}_n$.

**1) Expansion coefficients.** Using $L^n_{m'}=\mathbf{e}'_m\cdot \mathbf{i}_n$, the rows are just the Cartesian components of $\mathbf{e}'_m$:

$$
(L^n_{1'})=(1,0,0),\quad (L^n_{2'})=(1,-1,0),\quad (L^n_{3'})=(1,1,1).
$$

**2) Covariant components.** Using $B'_i=L^j_{i'}B_j$:

$$
(B'_1,B'_2,B'_3)=(1,-2,4).
$$

**3) Dual basis.** From the cross-product construction, the dual basis is:

$$
\mathbf{e}'^{\,1}=\begin{pmatrix}1\\ 1\\ -2\end{pmatrix},\qquad
\mathbf{e}'^{\,2}=\begin{pmatrix}0\\ -1\\ 1\end{pmatrix},\qquad
\mathbf{e}'^{\,3}=\begin{pmatrix}0\\ 0\\ 1\end{pmatrix}.
$$

**4) Contravariant components.** Using $B'^i=\mathbf{B}\cdot \mathbf{e}'^{\,i}$:

$$
(B'^1,B'^2,B'^3)=(4,-3,0).
$$

**5) Metric tensor.** By definition $g_{ik}=\mathbf{e}'_i\cdot \mathbf{e}'_k$, so:

$$
(g_{ik})=
\begin{pmatrix}
1 & 1 & 1\\
1 & 2 & 0\\
1 & 0 & 3
\end{pmatrix}.
$$

**6) Raise the index using $g^{ik}$.** Since $g^{ik}$ is the inverse of $g_{ik}$ (contravariant metric), here:

$$
(g^{ik})=(g_{ik})^{-1}=
\begin{pmatrix}
6 & -3 & -2\\
-3 & 2 & 1\\
-2 & 1 & 1
\end{pmatrix},
$$

And then $B'^i=g^{ik}B'_k$ gives $(B'^1,B'^2,B'^3)=(4,-3,0)$.

---

## 4.5. Dual Basis and Components from Past Exam

> [!question]
> *Question from Final Exam 23-24.*
>
> In this question, denote by $K$ the Cartesian coordinate system with vector basis $\mathbf{i}_1,\mathbf{i}_2,\mathbf{i}_3$. Denote by $K'$ the coordinate system with vector basis $\mathbf{e}_1,\mathbf{e}_2,\mathbf{e}_3$ given by $\mathbf{e}_1=2\mathbf{i}_1+\mathbf{i}_3$, $\mathbf{e}_2=\mathbf{i}_2$, $\mathbf{e}_3=\mathbf{i}_1-\mathbf{i}_2+\mathbf{i}_3$.
>
> 1. Find the dual basis $\mathbf{e}^1,\mathbf{e}^2,\mathbf{e}^3$.
> 2. Find the covariant and contravariant components of the vector $\mathbf{V}=3\mathbf{i}_1-2\mathbf{i}_2+\mathbf{i}_3$ with respect to $\mathbf{e}_1,\mathbf{e}_2,\mathbf{e}_3$ and $\mathbf{e}^1,\mathbf{e}^2,\mathbf{e}^3$.

**1) Dual basis.** Since $V=\mathbf{e}_1\cdot(\mathbf{e}_2\times\mathbf{e}_3)=1$, we get:

$$
\mathbf{e}^1=\begin{pmatrix}1\\ 0\\ -1\end{pmatrix},\qquad
\mathbf{e}^2=\begin{pmatrix}-1\\ 1\\ 2\end{pmatrix},\qquad
\mathbf{e}^3=\begin{pmatrix}-1\\ 0\\ 2\end{pmatrix}.
$$

**2) Components of $\mathbf{V}=(3,-2,1)^T$.**

- Covariant: $V_i=\mathbf{V}\cdot\mathbf{e}_i\Rightarrow (V_1,V_2,V_3)=(7,-2,6)$.
- Contravariant: $V^i=\mathbf{V}\cdot\mathbf{e}^i\Rightarrow (V^1,V^2,V^3)=(2,-3,-1)$.

---

## 4.6. Vector Triple Product Identity Proof

> [!question]
> Consider dual bases $\mathbf{e}_1,\mathbf{e}_2,\mathbf{e}_3$ and $\mathbf{e}^1,\mathbf{e}^2,\mathbf{e}^3$, and denote
>
> $$
> V=\mathbf{e}_1\cdot(\mathbf{e}_2\times\mathbf{e}_3),\qquad
> V'=\mathbf{e}^1\cdot(\mathbf{e}^2\times\mathbf{e}^3).
> $$
>
> Show, using the vector triple product formula, that $V'=\dfrac{1}{V}$.

Using $\mathbf{e}^1=\dfrac{\mathbf{e}_2\times\mathbf{e}_3}{V}$, $\mathbf{e}^2=\dfrac{\mathbf{e}_3\times\mathbf{e}_1}{V}$, $\mathbf{e}^3=\dfrac{\mathbf{e}_1\times\mathbf{e}_2}{V}$, we have:

$$
V'=\frac{\mathbf{e}_2\times\mathbf{e}_3}{V}\cdot\left(\frac{\mathbf{e}_3\times\mathbf{e}_1}{V}\times\frac{\mathbf{e}_1\times\mathbf{e}_2}{V}\right)
=\frac{1}{V^3}(\mathbf{e}_2\times\mathbf{e}_3)\cdot\Big((\mathbf{e}_3\times\mathbf{e}_1)\times(\mathbf{e}_1\times\mathbf{e}_2)\Big).
$$  

Apply the vector triple product identity and use $(\mathbf{e}_3\times\mathbf{e}_1)\perp \mathbf{e}_1$ to drop one term, giving $(\mathbf{e}_3\times\mathbf{e}_1)\times(\mathbf{e}_1\times\mathbf{e}_2)=V\,\mathbf{e}_1$.

Hence, $V'=\dfrac{1}{V^3}(\mathbf{e}_2\times\mathbf{e}_3)\cdot(V\mathbf{e}_1)=\dfrac{1}{V^2}\,\mathbf{e}_1\cdot(\mathbf{e}_2\times\mathbf{e}_3)=\dfrac{1}{V}$.

---

## 4.7. Scalar Triple Product in Components

> [!question]
> *See lecture.*
>
> Express the scalar triple product $(\mathbf{A}\times\mathbf{B})\cdot\mathbf{C}$ in terms of the covariant and contravariant components of $\mathbf{A},\mathbf{B},\mathbf{C}$ with respect to dual bases.
> You may use the equality
>
> $$
> \mathbf{A}\times\mathbf{B}:\quad
> C^i = A_jB_k-A_kB_j\ \ \text{(with $i,j,k$ cyclic)},\qquad
> \mathbf{e}_j\times \mathbf{e}_k = V\,\mathbf{e}^i,
> $$
>
> where $V=\mathbf{e}_1\cdot(\mathbf{e}_2\times\mathbf{e}_3)$.

Let $\mathbf{D}=\mathbf{A}\times\mathbf{B}$ and $E=(\mathbf{A}\times\mathbf{B})\cdot\mathbf{C}=\mathbf{D}\cdot\mathbf{C}$.

From the lecture cross-product derivation, if $\mathbf{A}=A^j\mathbf{e}_j$, $\mathbf{B}=B^k\mathbf{e}_k$, then $\mathbf{D}=D^i\mathbf{e}_i$ with $D^i=(A^jB^k-A^kB^j)$ (cyclic $i,j,k$) and $\mathbf{e}_j\times\mathbf{e}_k=V\mathbf{e}^i$.

Therefore, one clean component form is

$$
E = D^i C_i,
$$

And you can rewrite $C_i=g_{i\ell}C^\ell$ (or $D^i=g^{i\ell}D_\ell$) to produce mixed covariant/contravariant versions as needed.

The provided-solutions style final expression (in terms of a metric contraction) is:

$$
E = \frac{g_{i\ell}}{V}\,(A_jB_k-A_kB_j)\,C_\ell
\quad\text{(with $i,j,k$ cyclic)}, 
$$

With analogous variants obtained by raising/lowering indices.
