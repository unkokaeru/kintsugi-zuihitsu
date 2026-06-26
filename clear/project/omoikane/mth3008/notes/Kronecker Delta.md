# Kronecker Delta

> [!tip] Relevant parts to questions...
> - **Substitution**: $\delta_{ij}a_{j}=a_{i}$ - the delta "kills" itself and renames the dummy index.
> - **Collapse**: $\delta_{ij}\delta_{jk}=\delta_{ik}$ (chain of deltas merges).
> - **Trace**: $\delta_{ii}=3$ (in 3D - the dimension of the space).
> - **Cartesian coordinate derivative**: $\partial x_{j}/\partial x_{i}=\delta_{ij}$.

The **Kronecker delta**, or **substitution tensor**, is defined by

$$
\delta_{ij}=\begin{cases}1 & \text{if }i=j \\ 0 & \text{if }i\neq j\end{cases}
$$

where $i,j\in\{1,2,3\}$. Equivalent to the identity matrix:

$$
\delta_{ij}=\begin{bmatrix}1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1\end{bmatrix}
$$

### Key Properties

The **Kronecker delta** acts like the **substitution tensor**::it replaces the repeated index with the free index, $\delta_{ij}a_{j}=a_{i}$, or symmetrically $\delta_{ji}a_{i}=a_{j}$. This works for any indexed object.

- **Symmetric**: $\delta_{ij}=\delta_{ji}$.
- **Tensor character**: $\delta_{ij}$ is a rank-2 isotropic tensor - the same components in **every** Cartesian frame ($\delta_{ij}'=L_{ik}L_{j\ell}\delta_{k\ell}=L_{ik}L_{jk}=\delta_{ij}$).
- **Dot product**: $\mathbf{a}\cdot \mathbf{b}=a_{i}b_{i}=\delta_{ij}a_{i}b_{j}$.

Relates to the **[[Alternating Tensor]]** through

$$
\epsilon_{ijk}\epsilon_{i\ell m}=\delta_{j\ell}\delta_{km}-\delta_{jm}\delta_{k\ell}
$$

> [!example] Collapse chains
> $\delta_{ij}\delta_{jk}\delta_{k\ell}=\delta_{i\ell}$ - each delta "passes through" the chain renaming indices.
>
> $\delta_{ij}\delta_{ij}$: substitute $i\to j$ to get $\delta_{jj}=3$.
>
> $\delta_{ij}a_{i}b_{j}=a_{i}b_{i}=\mathbf{a}\cdot \mathbf{b}$.
