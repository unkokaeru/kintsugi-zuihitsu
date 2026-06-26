# MTH3007b Weekly Problems 9

## 9.1. BTCS for the Heat Equation

> [!question]
> Implement the **BTCS** (Backward Time, Centred Space) scheme for the 1D heat equation $\partial u/\partial t = \alpha\,\partial^2 u/\partial x^2$ with $L = 10$ cm, $\alpha = 0.835$ cm$^2$/s, $u(0, t) = 100$, $u(L, t) = 30$, $dx = 0.2$, $dt = 0.01$, $t_{\max} = 12$. Show that BTCS remains stable even for large $dt$.

The **[[BTCS scheme]]** discretises the heat equation using a backward difference in time and centred difference in space, evaluating the spatial term at $t_{n+1}$:

$$
\frac{u_i^{n+1} - u_i^n}{dt} = \alpha\,\frac{u_{i+1}^{n+1} - 2u_i^{n+1} + u_{i-1}^{n+1}}{dx^2}
$$

With $c = \alpha\,dt/dx^2$, rearranging gives:

$$
-c\,u_{i-1}^{n+1} + (1 + 2c)\,u_i^{n+1} - c\,u_{i+1}^{n+1} = u_i^n
$$

This is a tridiagonal system $A\,\mathbf{u}^{n+1} = \mathbf{u}^n$ where:

$$
A = \begin{pmatrix} 1 & 0 & \cdots \\ -c & 1+2c & -c & \cdots \\ & \ddots & \ddots & \ddots \\ & \cdots & & 0 & 1 \end{pmatrix}
$$

The first and last rows enforce the **[[Boundary conditions|Dirichlet boundary conditions]]** $u_0 = u_L = $ const.

```python
import numpy as np
import matplotlib.pyplot as plt

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
print(f"diffusion number = {diffusion_number:.4f}  (BTCS is stable for all c > 0)")

x_values = np.linspace(0, domain_length, number_of_spatial_nodes)
u_profile = left_temperature + (right_temperature - left_temperature) * x_values / domain_length

coefficient_matrix = np.zeros((number_of_spatial_nodes, number_of_spatial_nodes))
coefficient_matrix[0, 0] = 1.0
coefficient_matrix[number_of_spatial_nodes - 1, number_of_spatial_nodes - 1] = 1.0
for node_index in range(1, number_of_spatial_nodes - 1):
    coefficient_matrix[node_index, node_index - 1] = -diffusion_number
    coefficient_matrix[node_index, node_index]     = 1 + 2 * diffusion_number
    coefficient_matrix[node_index, node_index + 1] = -diffusion_number

inverse_matrix = np.linalg.inv(coefficient_matrix)

for time_index in range(number_of_time_steps - 1):
    right_hand_side = u_profile.copy()
    right_hand_side[0] = left_temperature
    right_hand_side[number_of_spatial_nodes - 1] = right_temperature
    u_profile = np.matmul(inverse_matrix, right_hand_side)

node_at_7cm = int(np.round(7.0 / spatial_step))
print(f"u at x=7cm after t={time_end}s: {u_profile[node_at_7cm]:.4f} deg C")

plt.plot(x_values, u_profile)
plt.xlabel('x (cm)')
plt.ylabel('u (deg C)')
plt.title(f'BTCS Heat Equation at t={time_end}s')
plt.show()
```

BTCS is **[[Stability of a method|unconditionally stable]]**: the update factor is $1/(1+2c)$, which is always less than 1 for $c > 0$, so errors never grow regardless of $dt$.

Note: in practice, instead of computing $A^{-1}$ explicitly, it is more efficient to use `numpy.linalg.solve(A, rhs)` at each step, or a dedicated tridiagonal solver (`scipy.linalg.solve_banded`).

---

## 9.2. Neumann Boundary Condition: Insulated End

> [!question]
> Modify the BTCS implementation to apply a **Neumann boundary condition** $\partial u/\partial x = 0$ at $x = L$ (insulated right end), while keeping $u(0, t) = 100$.

A **[[Boundary conditions|Neumann boundary condition]]** specifies the derivative (flux) rather than the value. $\partial u/\partial x = 0$ at $x = L$ means no heat flows out through the right boundary - the right end is thermally insulated.

**Imaginary point method:** Introduce a ghost (imaginary) node at $x = L + dx$ with value $u_{N_x}$. The centred difference for the derivative at the boundary gives:

$$
\frac{u_{N_x} - u_{N_x - 2}}{2\,dx} = 0 \implies u_{N_x} = u_{N_x - 2}
$$

Substituting into the standard BTCS equation for the last interior node $i = N_x - 1$:

$$
-c\,u_{N_x - 2}^{n+1} + (1 + 2c)\,u_{N_x - 1}^{n+1} - c\,u_{N_x}^{n+1} = u_{N_x - 1}^n
$$

Using $u_{N_x} = u_{N_x - 2}$:

$$
-2c\,u_{N_x - 2}^{n+1} + (1 + 2c)\,u_{N_x - 1}^{n+1} = u_{N_x - 1}^n
$$

So the last row of $A$ (for the last interior node) becomes $[\cdots, -2c, 1+2c]$ instead of $[\cdots, -c, 1+2c, -c]$. The matrix size stays the same - no ghost column is needed.

```python
import numpy as np
import matplotlib.pyplot as plt

domain_length = 10.0
spatial_step = 0.2
number_of_spatial_nodes = int(np.round(domain_length / spatial_step) + 1)
time_end = 12.0
time_step = 0.01
number_of_time_steps = int(np.round(time_end / time_step) + 1)
left_temperature = 100.0
diffusivity = 0.835
diffusion_number = diffusivity * time_step / spatial_step ** 2

x_values = np.linspace(0, domain_length, number_of_spatial_nodes)
u_profile = np.zeros(number_of_spatial_nodes)
u_profile[0] = left_temperature

coefficient_matrix = np.zeros((number_of_spatial_nodes, number_of_spatial_nodes))
coefficient_matrix[0, 0] = 1.0  # left Dirichlet BC row
for node_index in range(1, number_of_spatial_nodes - 1):
    coefficient_matrix[node_index, node_index - 1] = -diffusion_number
    coefficient_matrix[node_index, node_index]     = 1 + 2 * diffusion_number
    coefficient_matrix[node_index, node_index + 1] = -diffusion_number
# Last node: Neumann BC (ghost point gives -2c on u[Nx-2])
coefficient_matrix[number_of_spatial_nodes - 1, number_of_spatial_nodes - 2] = -2 * diffusion_number
coefficient_matrix[number_of_spatial_nodes - 1, number_of_spatial_nodes - 1] = 1 + 2 * diffusion_number

inverse_matrix = np.linalg.inv(coefficient_matrix)

for time_index in range(number_of_time_steps - 1):
    right_hand_side = u_profile.copy()
    right_hand_side[0] = left_temperature
    u_profile = np.matmul(inverse_matrix, right_hand_side)

plt.plot(x_values, u_profile)
plt.xlabel('x (cm)')
plt.ylabel('u (deg C)')
plt.title('BTCS with Neumann BC at x=L (insulated right end)')
plt.show()

print(f"u at x=L: {u_profile[-1]:.4f} (should equal u at x=L-dx={u_profile[-2]:.4f} in steady state)")
```

In steady state, the solution will approach $u = u_L = 100$ everywhere (no heat escapes through the right end, so the rod equilibrates to the left boundary temperature).
