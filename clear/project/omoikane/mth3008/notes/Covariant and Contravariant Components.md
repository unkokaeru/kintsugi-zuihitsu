# Covariant and Contravariant Components

> [!tip] Relevant parts to questions...
> - Using $A=A^{i}\mathbf{e}_{i}=A_{i}\mathbf{e}^{i}$ to switch between expansions.
> - Computing components via dot products: $A^{i}=\mathbf{A}\cdot \mathbf{e}^{i}$ and $A_{i}=\mathbf{A}\cdot \mathbf{e}_{i}$.
> - Using the [[Metric Tensor]] to convert between them: $A_{i}=g_{ik}A^{k}$, $A^{i}=g^{ik}A_{k}$.
> - Remembering upper indices = contravariant, lower indices = covariant.

In a **generalised** (possibly non-orthonormal) coordinate system, every vector $\mathbf{A}$ has **two** equally-valid expansions - one against the original basis $\{\mathbf{e}_{i}\}$ and one against its **dual basis** $\{\mathbf{e}^{i}\}$, defined by $\mathbf{e}_{i}\cdot \mathbf{e}^{k}=\delta_{i}^{k}$:

$$
\boxed{\mathbf{A}=A^{i}\mathbf{e}_{i}=A_{i}\mathbf{e}^{i}}
$$

- **Contravariant components** $A^{i}$::the coefficients in the expansion along $\mathbf{e}_{i}$.
- **Covariant components** $A_{i}$::the coefficients in the expansion along $\mathbf{e}^{i}$.

Because of the dual-basis identity, the **individual** components can be pulled out by a single dot product:

$$
A^{i}=\mathbf{A}\cdot \mathbf{e}^{i},\qquad A_{i}=\mathbf{A}\cdot \mathbf{e}_{i}
$$

## Converting Between the Two

The [[Metric Tensor]] performs the conversion:

$$
\boxed{A_{i}=g_{ik}A^{k},\qquad A^{i}=g^{ik}A_{k}}
$$

$g_{ik}$ **lowers** a contravariant index to a covariant one; $g^{ik}$ **raises** the reverse direction (see [[Index Raising and Lowering]]).

## Properties

- **Orthonormal-basis shortcut**::$g_{ik}=\delta_{ik}$, so $A_{i}=A^{i}$. In Cartesian coordinates the distinction **disappears** - this is why earlier module material ignored the upper/lower split.
- **Transformation rules differ**::$A_{i}'=L_{i'}^{j}A_{j}$ (covariant) and $A'^{i}=L_{j}^{i'}A^{j}$ (contravariant). Contravariant pieces transform with the *inverse* of the basis matrix.
- **Inner products are type-aware**::$\mathbf{A}\cdot \mathbf{B}=A^{i}B_{i}=A_{i}B^{i}=g_{ik}A^{i}B^{k}=g^{ik}A_{i}B_{k}$ - you can always pair one raised with one lowered.
- **Can't add mismatched types**::$A_{i}+B^{i}$ is **not** a tensor (see [[Tensor Transformation Rule]]): one term transforms with $L$, the other with $L^{-1}$.

## Applications

1. **Writing vector operations cleanly** in any coordinate system, by pairing one raised with one lowered index.
2. **Identifying tensorial objects**: sums must preserve index position; contractions require an upper index paired with a lower one.
3. **Angle between vectors**::$\cos(\mathbf{A},\mathbf{B})= \frac{A^{i}B_{i}}{\sqrt{ A^{i}A_{i} }\sqrt{ B^{i}B_{i} }}$.

> [!example] Finding both kinds of components
> Given basis $\mathbf{e}_{1}=(2,0,1)^{T},\mathbf{e}_{2}=(1,3,0)^{T},\mathbf{e}_{3}=(0,0,4)^{T}$ and vector $\mathbf{J}=(8,0,4)^{T}$ in the enclosing Cartesian frame:
>
> **Covariant** (dot with originals): $J_{1}=\mathbf{J}\cdot \mathbf{e}_{1}=20$, $J_{2}=8$, $J_{3}=16$.
>
> **Contravariant** (dot with duals $\mathbf{e}^{1}=(1/2,-1/6,0),\mathbf{e}^{2}=(0,-1/3,0),\mathbf{e}^{3}=(-1/8,1/24,1/4)$): $J^{1}=4$, $J^{2}=0$, $J^{3}=0$.
>
> $\boxed{(J_{1},J_{2},J_{3})=(20,8,16),\quad (J^{1},J^{2},J^{3})=(4,0,0)}$.

> Upper index: original basis. Lower index: dual basis. Metric bridges both.
