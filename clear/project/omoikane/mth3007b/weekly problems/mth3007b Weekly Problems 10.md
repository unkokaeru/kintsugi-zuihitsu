# MTH3007b Weekly Problems 10

## 10.1. Liebmann's Method: Definition and Scope

> [!question]
> What is **Liebmann's method** and what type of equation can it solve?

**[[Liebmann's method]]** (also called Gauss-Seidel iteration applied to PDEs, or successive overrelaxation at $\omega = 1$) is an iterative scheme for solving **elliptic PDEs**, specifically the **[[Laplace equation|2D Laplace equation]]** and **[[Poisson equation|2D Poisson equation]]**:

$$
\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0 \quad \text{(Laplace)}
$$

$$
\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = f(x, y) \quad \text{(Poisson)}
$$

These are steady-state equations - there is no time derivative. They arise in heat conduction (steady state), electrostatics, and fluid potential flow.

**The method:** On a uniform grid with spacing $dx = dy$, the centred finite difference discretisation of the Laplace equation at interior node $(i, j)$ gives:

$$
u_{i,j} = \frac{u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1}}{4}
$$

Liebmann's method iterates this update rule (using the most recently updated values in-place, Gauss-Seidel style) until the maximum change between iterations falls below a tolerance $\varepsilon$:

$$
\max_{i,j} |u_{i,j}^{\text{new}} - u_{i,j}^{\text{old}}| < \varepsilon
$$

The boundary nodes are fixed at their prescribed **[[Boundary conditions|Dirichlet boundary conditions]]** throughout.

---

## 10.2. Liebmann's Method for a 2D Plate

> [!question]
> Use Liebmann's method to find the steady-state temperature distribution on a $10 \times 10$ cm plate with: top $= 100^\circ$C, bottom $= 0^\circ$C, left $= 75^\circ$C, right $= 50^\circ$C, $dx = 1$ cm. Find $u(5, 5)$.

```python
import numpy as np

domain_size = 10    # cm
spatial_step = 1    # cm
number_of_nodes = domain_size // spatial_step + 1  # 11 nodes in each direction

u_grid = np.zeros((number_of_nodes, number_of_nodes))
u_grid[0, :]                          = 100.0  # top boundary
u_grid[number_of_nodes - 1, :]        = 0.0   # bottom boundary
u_grid[:, 0]                          = 75.0  # left boundary
u_grid[:, number_of_nodes - 1]        = 50.0  # right boundary

convergence_tolerance = 1e-4
max_iterations = 10000

for iteration in range(max_iterations):
    u_new = u_grid.copy()
    for row_index in range(1, number_of_nodes - 1):
        for col_index in range(1, number_of_nodes - 1):
            u_new[row_index, col_index] = (
                u_grid[row_index + 1, col_index]
                + u_grid[row_index - 1, col_index]
                + u_grid[row_index, col_index + 1]
                + u_grid[row_index, col_index - 1]
            ) / 4.0
    max_error = np.amax(np.abs(u_new - u_grid))
    u_grid = u_new.copy()
    if max_error < convergence_tolerance:
        print(f"Converged in {iteration + 1} iterations (max_error = {max_error:.2e})")
        break

print(f"u(5, 5) = {u_grid[5, 5]:.2f} degrees C")
```

**Grid convention:** with $dx = 1$ and $11 \times 11$ nodes, the node at $(i=5, j=5)$ corresponds to the physical centre of the plate at $(x=5, y=5)$ cm.

The **[[Lax Equivalence Theorem]]** guarantees that because the Liebmann iteration implements a consistent discretisation of the Laplace equation and the iteration converges, the result converges to the true solution of the boundary value problem.

**Expected result:** $u(5, 5) \approx 56.25^\circ$C (the arithmetic average of the four boundary values: $(100 + 0 + 75 + 50)/4 = 56.25$). This is an exact result for this symmetric geometry by the **mean value property** of harmonic functions, confirming the numerical answer.

---

**Visualisation:**

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(6, 5))
im = ax.imshow(u_grid, origin='upper', extent=[0, domain_size, 0, domain_size], cmap='hot')
plt.colorbar(im, ax=ax, label='Temperature (deg C)')
ax.set_xlabel('x (cm)')
ax.set_ylabel('y (cm)')
ax.set_title('Steady-state temperature distribution (Liebmann)')
plt.tight_layout()
plt.show()
```
