# MTH3007b Weekly Problems 9

> **Original Documents**: [[mth3007b weekly problem sheet 9.pdf|Problem Sheet]] / [[mth3007b weekly problem sheet 9 solutions.pdf|Provided Solutions]]
>
> **Vibes**: …
>
> **Used Techniques**:
>   - …

---

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

The first and last rows enforce the **[[Dirichlet boundary conditions]]** $u_0 = u_L = $ const.

```python
import numpy as np
import matplotlib.pyplot as plt

L = 10.0; dx = 0.2; Nx = int(np.round(L / dx) + 1)
tmax = 12.0; dt = 0.01; Nt = int(np.round(tmax / dt) + 1)
u_L = 100.0; u_R = 30.0; alpha = 0.835
c = alpha * dt / dx**2
print(f"c (diffusion number) = {c:.4f}  (BTCS is stable for all c > 0)")

# Initial condition: linear from u_L to u_R
x = np.linspace(0, L, Nx)
u = u_L + (u_R - u_L) * x / L

# Build the coefficient matrix A (static - computed once)
A = np.zeros((Nx, Nx))
A[0, 0] = 1.0          # left BC row
A[Nx - 1, Nx - 1] = 1.0  # right BC row
for i in range(1, Nx - 1):
    A[i, i - 1] = -c
    A[i, i]     = 1 + 2 * c
    A[i, i + 1] = -c

Ainv = np.linalg.inv(A)

# Time stepping
for it in range(Nt - 1):
    rhs = u.copy()
    rhs[0] = u_L; rhs[Nx - 1] = u_R  # enforce BCs on RHS
    u = np.matmul(Ainv, rhs)

# Report temperature at x=7cm
idx_7 = int(np.round(7.0 / dx))
print(f"u at x=7cm after t={tmax}s: {u[idx_7]:.4f} deg C")

plt.plot(x, u)
plt.xlabel('x (cm)'); plt.ylabel('u (deg C)')
plt.title(f'BTCS Heat Equation at t={tmax}s')
plt.show()
```

BTCS is **[[unconditionally stable]]**: the update factor is $1/(1+2c)$, which is always less than 1 for $c > 0$, so errors never grow regardless of $dt$.

Note: in practice, instead of computing $A^{-1}$ explicitly, it is more efficient to use `numpy.linalg.solve(A, rhs)` at each step, or a dedicated tridiagonal solver (`scipy.linalg.solve_banded`).

---

## 9.2. Neumann Boundary Condition: Insulated End

> [!question]
> Modify the BTCS implementation to apply a **Neumann boundary condition** $\partial u/\partial x = 0$ at $x = L$ (insulated right end), while keeping $u(0, t) = 100$.

A **[[Neumann boundary condition]]** specifies the derivative (flux) rather than the value. $\partial u/\partial x = 0$ at $x = L$ means no heat flows out through the right boundary - the right end is thermally insulated.

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

L = 10.0; dx = 0.2; Nx = int(np.round(L / dx) + 1)
tmax = 12.0; dt = 0.01; Nt = int(np.round(tmax / dt) + 1)
u_L = 100.0; alpha = 0.835
c = alpha * dt / dx**2

x = np.linspace(0, L, Nx)
u = np.zeros(Nx); u[0] = u_L  # initial: only left BC set

# Build A with Neumann BC at right end
A = np.zeros((Nx, Nx))
A[0, 0] = 1.0  # left Dirichlet BC row
# Interior nodes
for i in range(1, Nx - 1):
    A[i, i - 1] = -c
    A[i, i]     = 1 + 2 * c
    A[i, i + 1] = -c
# Last node: Neumann BC (imaginary point gives -2c on u[Nx-2])
A[Nx - 1, Nx - 2] = -2 * c
A[Nx - 1, Nx - 1] = 1 + 2 * c

Ainv = np.linalg.inv(A)

for it in range(Nt - 1):
    rhs = u.copy()
    rhs[0] = u_L  # enforce left Dirichlet BC
    u = np.matmul(Ainv, rhs)

plt.plot(x, u)
plt.xlabel('x (cm)'); plt.ylabel('u (deg C)')
plt.title('BTCS with Neumann BC at x=L (insulated right end)')
plt.show()

print(f"u at x=L: {u[-1]:.4f} (should equal u at x=L-dx={u[-2]:.4f} in steady state)")
```

In steady state, the solution will approach $u = u_L = 100$ everywhere (no heat escapes through the right end, so the rod equilibrates to the left boundary temperature).
