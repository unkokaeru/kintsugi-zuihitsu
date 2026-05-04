# Metric Tensor

> [!tip] Relevant parts to questions...
> - Using $g_{ik}=\mathbf{e}_{i}\cdot \mathbf{e}_{k}$ and $g^{ik}=\mathbf{e}^{i}\cdot \mathbf{e}^{k}$ to compute components from a basis.
> - Using $g_{i}^{\;k}=\delta_{i}^{k}$ for the mixed metric.
> - Using the arc length formula $(ds)^{2}=g_{ik}dx^{i}dx^{k}$.
> - Using the metric coefficients $h_{i}=\sqrt{g_{ii}}$ for orthogonal bases.
> - Using $g_{ik}$ to **lower** an index and $g^{ik}$ to **raise** one (see [[Index Raising and Lowering]]).

The **Metric Tensor** determines the geometry of a space - distances, angles, and the conversion between [[Covariant and Contravariant Components]]. It has three flavours of components, all part of a single second-rank tensor:

- **Covariant**::$g_{ik}=\mathbf{e}_{i}\cdot \mathbf{e}_{k}$ (original basis).
- **Contravariant**::$g^{ik}=\mathbf{e}^{i}\cdot \mathbf{e}^{k}$ (dual basis).
- **Mixed**::$g_{i}^{\;k}=\mathbf{e}_{i}\cdot \mathbf{e}^{k}=\delta_{i}^{k}$ - exactly the [[Kronecker Delta]].

The defining equation is the **arc-length formula**:

$$
\boxed{(ds)^{2}=g_{ik}dx^{i}dx^{k}=g^{ik}dx_{i}dx_{k}=dx_{i}dx^{i}}
$$

## Properties

- **Symmetric**::$g_{ik}=g_{ki}$ (since the dot product is commutative); same for $g^{ik}$.
- **Mutually inverse matrices**::$[g^{ik}]=[g_{ik}]^{-1}$, so $g^{ij}g_{jk}=\delta_{k}^{i}$.
- **Orthogonal-basis shortcut**::if $\mathbf{e}_{i}\cdot \mathbf{e}_{k}=0$ for $i\neq k$, the metric is diagonal and $g_{ii}=1/g^{ii}$ (no sum).
- **Cartesian special case**::$g_{ik}=\delta_{ik}$, so covariant and contravariant components coincide - this is why earlier lectures did not distinguish them.
- **It genuinely is a tensor**::$g_{ik}'=L_{i'}^{\ell}L_{k'}^{m}g_{\ell m}$ obeys the [[Tensor Transformation Rule]] for covariant rank 2.

## Deriving the Metric from a Position Vector

Given a parametrisation $\mathbf{r}(x^{1},x^{2},x^{3})$, the basis vectors are

$$
\mathbf{e}_{i}= \frac{\partial \mathbf{r}}{\partial x^{i}}
$$

and the metric follows directly:

$$
\boxed{g_{ij}=\mathbf{e}_{i}\cdot \mathbf{e}_{j}= \frac{\partial r^{\ell}}{\partial x^{i}} \frac{\partial r^{\ell}}{\partial x^{j}}}
$$

## Metric Coefficients

For an **orthogonal** basis, the **metric coefficients** (or *scale factors*) are

$$
h_{i}=\sqrt{ g_{ii} }\qquad (\text{no sum on } i)
$$

and the arc length simplifies to $\displaystyle (ds)^{2}=\sum_{i=1}^{3}(h_{i}dx^{i})^{2}$.

## Applications

1. **Raising and lowering indices**, via $A_{i}=g_{ik}A^{k}$ and $A^{i}=g^{ik}A_{k}$ (see [[Index Raising and Lowering]]).
2. **Arc length** in any coordinate system, via $(ds)^{2}=g_{ik}dx^{i}dx^{k}$.
3. **Dot and cross products in curvilinear coordinates**::$\mathbf{A}\cdot \mathbf{B}=g_{ik}A^{i}B^{k}=A^{i}B_{i}$.
4. **Identifying associated tensors**, by combining $g_{ik}$ (and $g^{ik}$) with a tensor to produce [[Associated Tensors]].

> [!example] Cylindrical coordinates
> For $(r,\theta,z)$, $\mathbf{r}=r\cos \theta\mathbf{i}_{1}+r\sin \theta\mathbf{i}_{2}+z\mathbf{i}_{3}$. Differentiating:
>
> $\mathbf{e}_{1}=\cos \theta\mathbf{i}_{1}+\sin \theta\mathbf{i}_{2}$, $\mathbf{e}_{2}=-r\sin \theta\mathbf{i}_{1}+r\cos \theta\mathbf{i}_{2}$, $\mathbf{e}_{3}=\mathbf{i}_{3}$.
>
> Dot products give $g_{11}=1$, $g_{22}=r^{2}$, $g_{33}=1$, so $h_{1}=1$, $h_{2}=r$, $h_{3}=1$. Hence $(ds)^{2}=\boxed{(dr)^{2}+(rd\theta)^{2}+(dz)^{2}}$.

> Basis vectors dot, metric out.
