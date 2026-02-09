# Kronecker Delta

> [!tip] Relevant parts to questions…
> - Using $\delta_{ij}a_{j}=a_{i}$.
> - Using $\delta_{ij}\delta_{jk}=\delta_{ik}$.
> - Using $\delta_{ii}=3$, if in three-dimensions (convention).

The **Kronecker delta**, or **substitution tensor**, is defined by $\delta_{ij}=\begin{cases}1 & \text{if }i=j \\ 0 & \text{if }i\neq j\end{cases}$, where $i$ and $j$ can be 1, 2, or 3. This is effectively equivalent to the identity matrix:

$$
\delta_{ij}=\begin{bmatrix}1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1\end{bmatrix}
$$

The **Kronecker delta** hence has properties like its **continuous** equivalent, the **[[Dirac delta-function]]**::It replaces the repeated index with the free index, $\delta_{ij}a_{j}=a_{i}$, or symmetrically (using relabelling/reordering), $\delta_{ji}a_{i}=a_{j}$. Note that this can apply to other deltas, too.

This hence allows us to define the dot product as $\mathbf{a}\cdot \mathbf{b}=a_{i}b_{i}=a_{i}(\delta_{ij}b_{j})=\delta_{ij}a_{i}b_{j}$, and vice versa.

Relates to the **[[Alternating Tensor]]** through the relationship $\epsilon_{ijk}\epsilon_{k \ell m}=\delta_{i \ell}\delta_{jm}-\delta_{im}\delta_{j \ell}$.
