# MTH3007b Lecture 9

> [!quote] Me, in the lecture
> zzzzz...

This session recaps the FTCS scheme with a fuller implementation, analyses its stability, and introduces the implicit BTCS scheme as an unconditionally stable alternative. We also cover Neumann boundary conditions and how to incorporate them numerically.

## FTCS Recap and Full Implementation

The **[[FTCS scheme]]** update is:

$$
\boxed{u_{i,n+1} = (1 - 2r)\,u_{i,n} + r\,(u_{i+1,n} + u_{i-1,n})}
$$

with $r = \alpha\,\Delta t / (\Delta x)^2$. Here $i$ is the spatial index and $n$ is the time index.

The full implementation below uses physically motivated parameters (aluminium rod, fixed boundary temperatures):

```python runnable
import numpy as np

domain_length = 10.0
spatial_step = 0.2
number_of_spatial_nodes = int(np.round(domain_length / spatial_step) + 1)
time_end = 12.0
time_step = 0.01
number_of_time_steps = int(np.round(time_end / time_step) + 1)
left_temperature = 100.0
right_temperature = 50.0
diffusivity = 0.835
stability_parameter = diffusivity * time_step / spatial_step ** 2

u_profile = np.zeros(number_of_spatial_nodes)
u_profile[0] = left_temperature
u_profile[number_of_spatial_nodes - 1] = right_temperature

for time_index in range(number_of_time_steps - 1):
    u_next = np.zeros(number_of_spatial_nodes)
    u_next[0] = u_profile[0]
    u_next[number_of_spatial_nodes - 1] = u_profile[number_of_spatial_nodes - 1]
    for node_index in range(1, number_of_spatial_nodes - 1):
        u_next[node_index] = (
            u_profile[node_index]
            + stability_parameter * (
                u_profile[node_index + 1]
                - 2 * u_profile[node_index]
                + u_profile[node_index - 1]
            )
        )
    u_profile = 1.0 * u_next

print(
    "The solution at t="
    + str(np.round(time_step * (number_of_time_steps - 1), 3))
    + " for u at 7 cm is "
    + str(u_profile[int(np.round(7.0 / domain_length * (number_of_spatial_nodes - 1)))])
)
```

## FTCS Stability

### Stability Argument

Look at the coefficient of $u_{i,n}$ in the FTCS update: it is $(1 - 2r)$. For the scheme to be non-amplifying, we need:

$$
|1 - 2r| \leq 1
$$

This gives $r \leq 1$. The full stability proof (see Hoffman 2001) tightens this result. The FTCS scheme is stable and convergent if and only if:

$$
\boxed{r = \frac{\alpha\,\Delta t}{(\Delta x)^2} \leq \frac{1}{2}}
$$

Equivalently, the time step must satisfy:

$$
\Delta t \leq \frac{(\Delta x)^2}{2\alpha}
$$

> [!warning]
> If $r > 1/2$, the FTCS solution will grow without bound and become meaningless. Always check $r$ before running.

## Implicit Scheme: BTCS

**[[BTCS scheme|BTCS]]** (Backward-Time Centred-Space) uses a backward (implicit) difference in time:

$$
\frac{u_{i,n+1} - u_{i,n}}{\Delta t} = \alpha \frac{u_{i+1,n+1} - 2u_{i,n+1} + u_{i-1,n+1}}{(\Delta x)^2}
$$

Rearranging (with $c = \alpha\,\Delta t / (\Delta x)^2$):

$$
-c\,u_{i+1,n+1} + (1 + 2c)\,u_{i,n+1} - c\,u_{i-1,n+1} = u_{i,n}
$$

The new unknowns $u_{i,n+1}$ appear on the left-hand side for all $i$ simultaneously, so we cannot update point by point. Instead, the equations form a tridiagonal linear system:

$$
A\,\mathbf{u}_{n+1} = \mathbf{u}_n
$$

where $A$ is a tridiagonal matrix with $(1+2c)$ on the diagonal and $-c$ on the off-diagonals.

### Solving the System

One option is standard [[Gaussian elimination]]. Another option is to invert $A$ once using `numpy.linalg.inv` and then apply $A^{-1}$ at every time step - efficient when $A$ is fixed:

```python runnable
import numpy as np

domain_length = 10.0
spatial_step = 0.2
number_of_spatial_nodes = int(np.round(domain_length / spatial_step) + 1)
time_end = 12.0
time_step = 0.01
number_of_time_steps = int(np.round(time_end / time_step) + 1)
left_temperature = 100.0
right_temperature = 30.0
diffusivity = 0.835
diffusion_number = diffusivity * time_step / spatial_step ** 2

u_profile = np.zeros(number_of_spatial_nodes)
u_profile[0] = left_temperature
u_profile[number_of_spatial_nodes - 1] = right_temperature

coefficient_matrix = np.zeros((number_of_spatial_nodes, number_of_spatial_nodes))
coefficient_matrix[0, 0] = 1.0
coefficient_matrix[number_of_spatial_nodes - 1, number_of_spatial_nodes - 1] = 1.0
for node_index in range(1, number_of_spatial_nodes - 1):
    coefficient_matrix[node_index, node_index] = 1 + 2 * diffusion_number
    coefficient_matrix[node_index, node_index - 1] = -diffusion_number
    coefficient_matrix[node_index, node_index + 1] = -diffusion_number

inverse_matrix = np.linalg.inv(coefficient_matrix)

elapsed_time = 0.0
for time_index in range(number_of_time_steps - 1):
    elapsed_time += time_step
    u_profile = 1.0 * np.matmul(inverse_matrix, u_profile)

print(
    "The solution at t=" + str(np.round(elapsed_time, 3))
    + " for u at 7 cm is "
    + str(u_profile[int(np.round(7.0 / domain_length * (number_of_spatial_nodes - 1)))])
)
```

> [!note]
> The **Thomas algorithm** is a specialised $O(N)$ solver for tridiagonal systems. It is mentioned here for completeness - we won't discuss the algorithm in detail.

### Unconditional Stability of BTCS

The [[BTCS scheme]] is **unconditionally stable**: there is no restriction on $\Delta t$. The update factor at each interior node is $1/(1+2c)$, which is always less than 1 for any $c > 0$. Large time steps can therefore be used without the solution blowing up, which is a major practical advantage over FTCS.

## Neumann Boundary Conditions

A Neumann BC specifies the gradient at the boundary rather than the value. At the left boundary, $\partial u / \partial x = d$. To implement this numerically, we introduce a **ghost point** $u_{-1}$ just outside the domain.

Using the centred difference approximation for the derivative at $i = 0$ (see [[Boundary conditions]]):

$$
\frac{u_1 - u_{-1}}{2\,\Delta x} = d \implies u_{-1} = u_1 - 2\,\Delta x\,d
$$

For an insulating boundary ($d = 0$), this simplifies to:

$$
u_{-1} = u_1 \implies u_0 = u_1
$$

---

## Pre-Lecture Notes from [[mth3007b lecture notes 9.pdf|University Notes]]

- FTCS update: $u_{i,n+1}=(1-2r)u_{i,n}+r(u_{i+1,n}+u_{i-1,n})$, $r=\alpha\Delta t/(\Delta x)^2$.
- Stability: coefficient of $u_{i,n}$ is $(1-2r)$; require $|1-2r|\leq 1$; full proof (Hoffman 2001) gives $r\leq 1/2$.
- BTCS: backward time difference gives tridiagonal system $Au_{n+1}=u_n$; solved by Gaussian elimination or matrix inversion.
- BTCS is unconditionally stable - the update factor $1/(1+2c) < 1$ for all $c > 0$.
- Thomas algorithm ($O(N)$ tridiagonal solver) exists but is not covered in this module.
- Neumann BC: ghost point $u_{-1}=u_1-2\Delta x\,d$; insulation ($d=0$) gives $u_0=u_1$.
- Next session: the 2D Laplace equation and Liebmann's iterative method.
