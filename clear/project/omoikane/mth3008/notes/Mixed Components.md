# Mixed Components

> [!tip] Relevant parts to questions...
> - A second-rank tensor has **four** component flavours: $A_{ik}$, $A^{ik}$, $A_{i}^{\cdot k}$, $A^{i}_{\cdot k}$.
> - The dot tracks index **order**: in $A_{i}^{\cdot k}$, the first slot is lower (covariant), the second is upper (contravariant).
> - Each covariant index picks up $L^{\ell}_{i'}$; each contravariant index picks up $L^{i'}_{\ell}$ - one factor per free index.
> - Use the [[Metric Tensor]] to convert between any two flavours.

In a generalised coordinate system, a second-rank tensor has **nine** components, but those nine components can be written in **four** different ways:

- **Covariant components**::$A_{ik}$ (both indices down).
- **Contravariant components**::$A^{ik}$ (both indices up).
- **Mixed components**::$A_{i}^{\cdot k}$ (first covariant, second contravariant).
- **Mixed components**::$A^{i}_{\cdot k}$ (first contravariant, second covariant).

> [!note] Dot notation
> The dot marks the "gap" left by a moved index, preserving index **order**. Read $A_{i}^{\cdot k}$ as $(A_{i})^{k}$ - the covariant index is in the first slot, contravariant in the second. The order matters because the transformation rule depends on which slot is raised and which is lowered.

## Transformation Laws

Under a change of basis with coefficients $L^{k}_{i'}$ (direct) and $L^{k'}_{i}$ (inverse), each flavour transforms with one factor of $L$ per index:

$$
\begin{aligned}
A'_{ik} &= L^{\ell}_{i'}L^{m}_{k'}A_{\ell m} & \text{(both covariant)}\\
A'^{ik} &= L^{i'}_{\ell}L^{k'}_{m}A^{\ell m} & \text{(both contravariant)}\\
A'^{\cdot k}_{i} &= L^{\ell}_{i'}L^{k'}_{m}A^{\cdot m}_{\ell} & \text{(mixed)}\\
A'^{i}_{\cdot k} &= L^{i'}_{\ell}L^{m}_{k'}A^{\ell}_{\cdot m} & \text{(mixed)}
\end{aligned}
$$

The pattern is mechanical: **each covariant index contracts with $L^{\ell}_{i'}$, each contravariant index contracts with $L^{i'}_{\ell}$**.

## Relationship via the Metric

All four flavours are [[Associated Tensors]]. The [[Metric Tensor]] converts between them:

$$
A_{ik}=g_{i \ell}g_{km}A^{\ell m}=g_{k \ell}A^{\cdot \ell}_{i}=g_{i \ell}A^{\ell}_{\cdot k}
$$

$$
A^{ik}=g^{i \ell}g^{km}A_{\ell m}=g^{i \ell}A^{\cdot k}_{\ell}=g^{k \ell}A^{i}_{\cdot \ell}
$$

Once you know **any one** flavour (and the metric), you know them all (see [[Index Raising and Lowering]]).

## Properties

- **Cartesian collapse**::when $g_{ik}=\delta_{ik}$, all four flavours coincide. This is why earlier lectures used only $A_{ij}$ without decorations.
- **Symmetry lives at fixed index positions**::$A^{\cdot k}_{i}$ symmetric in $i,k$ is meaningless - symmetry requires both indices at the same level. See [[Symmetry and Antisymmetry]].
- **Matrix realisation**::if $A=[A_{ik}]$ and $G=[g_{ik}]$, you can compute other flavours via matrix multiplication: $[A^{\cdot k}_{i}]=AG^{-1}$, $[A^{i}_{\cdot k}]=G^{-1}A$, etc.
- **Matrix form for a basis change**::the covariant transformation $A'=LAL^{T}$ is the quickest route numerically.

## Applications

1. **Computing tensor components after a basis change**, by picking the flavour that simplifies the most (usually covariant via $LAL^{T}$).
2. **Contracting cleanly**, by pairing a raised with a lowered index::e.g. $A^{\cdot k}_{i}B^{i}_{\cdot k}$ is a well-defined scalar.
3. **Translating between the "physical" and "generalised" formalisms**: physical components ($A_{ik}$) vs. tensor components ($A^{ik}$) differ by scale factors in curvilinear coordinates.

> [!example] All four flavours of a rank-2 tensor
> Let $A_{ik}=A^{ik}=\begin{pmatrix}2 & 1 & 3 \\ 2 & 3 & 4 \\ 1 & 2 & 1\end{pmatrix}$ in a Cartesian frame $K$, and define $K'$ with $\mathbf{e}_{1}=\mathbf{i}_{1}, \mathbf{e}_{2}=\mathbf{i}_{1}+\mathbf{i}_{2}, \mathbf{e}_{3}=\mathbf{i}_{1}+\mathbf{i}_{2}+\mathbf{i}_{3}$. The transformation matrix is $L=\begin{pmatrix}1&0&0\\1&1&0\\1&1&1\end{pmatrix}$.
>
> New covariant components: $A'=LAL^{T}=\boxed{\begin{pmatrix}2&3&6\\4&8&15\\5&11&19\end{pmatrix}}$. Raising indices with the metric $G=[g_{ik}]=[\mathbf{e}_{i}\cdot \mathbf{e}_{k}]$ gives the other three flavours.

> One tensor, four flavours; the metric bridges them.
