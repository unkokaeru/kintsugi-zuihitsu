# Kronecker Delta

> [!tip] Relevant parts to questions…
> - Using $\delta_{ij}a_{j}=a_{i}$.

The **Kronecker delta**, or **substitution tensor**, is defined by $\delta_{ij}=\begin{cases}1 & \text{if }i=j \\ 0 & \text{if }i\neq j\end{cases}$, where $i$ and $j$ can be 1, 2, or 3.

Effectively, it's 

- Hence, it's really just like the identity matrix: $\delta_{ij}=\begin{bmatrix}1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1\end{bmatrix}$.
- Similar to the [[Dirac delta-function]], although on discrete domains instead of continuous, this gives it the property that $\delta_{ij}a_{j}=a_{i}$ - absorbing the repeated index.
- Sometimes called the substitution tensor, because it replaces the repeated index with the free index.
- Naturally, this is symmetrical for $\delta_{ji}a_{i}=a_{j}$, due to the re-ordering/re-labelling rules, and can be proved trivially.
