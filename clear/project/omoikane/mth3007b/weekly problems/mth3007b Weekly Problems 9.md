# MTH3007b Weekly Problems 9

> **Vibes**: Two solves of the heat equation on a $L=10$ cm rod, this time using the implicit (BTCS) scheme so we can ignore the FTCS stability constraint and pick whatever $\Delta t$ we like. Problem 1 is two-sided Dirichlet ($100$ left, $30$ right); problem 2 swaps the left for an insulated wall (Neumann), which gives a uniform steady state of $30^{\circ}\text{C}$ once everything has equilibrated.
>
> **Used Techniques**:
>  - [[BTCS scheme]]: $-c\,u_{i+1,n-1}+(1+2c)u_{i+1,n}-c\,u_{i+1,n+1}=u_{i,n}$ with $c=\alpha\Delta t/\Delta x^{2}$.
>  - Solve $\mathbf{A}\mathbf{u}_{i+1}=\mathbf{u}_{i}$ at each step; the matrix is constant, so factor or invert once.
>  - [[Boundary conditions]] handling via the imaginary-point trick: $\partial u/\partial x|_{x_{L}}=0$ converts the boundary row to $-2u_{0}+2u_{1}=0$, i.e. $u_{0}=u_{1}$.
>  - Steady-state checks: linear interpolation for two-sided Dirichlet; uniform value for one-sided Dirichlet + Neumann.

---

## 9.1. Implicit Heat Diffusion in Rod with Fixed Boundaries

> [!question]
> Consider a rod of $L=10$ cm long with heat diffusion coefficient $\alpha=0.835$ cm$^2$/s. The boundary conditions are $u(t\text{ cm})=100$ degrees Celsius and $u(t\text{ cm})=30$ degrees Celsius. The initial condition is $u(0\text{ s},x)=0$ degrees Celsius (except at boundaries). Using $\Delta x=0.2$ cm and $\Delta t=0.01$ s, solve the diffusion equation with the **implicit scheme**. Plot $u(t,x)$ vs $x$ at $t=0,3,6,9,12$ s. What is the temperature at 12 s and 7 cm from the left?

**Setup.** $N_{x}=51$, $c=\alpha\,\Delta t/\Delta x^{2}=0.835\cdot 0.01/0.04=0.209$. (No stability constraint for implicit, but $c$ controls accuracy and conditioning.) Steady state: $u_{\infty}(x)=100-7x$, so $u_{\infty}(7)=51^{\circ}\text{C}$.

**Tridiagonal matrix.** $\mathbf{A}$ has $1$ in the corners (boundary rows), $1+2c$ on the main diagonal, $-c$ on the off-diagonals.

```python runnable
import numpy as np

length = 10.0
diffusion = 0.835
space_step = 0.2
time_step = 0.01
final_time = 12.0
left_temperature = 100.0
right_temperature = 30.0

number_of_space_points = int(round(length / space_step)) + 1  # 51
number_of_time_points = int(round(final_time / time_step)) + 1  # 1201
ratio = diffusion * time_step / space_step**2

implicit_matrix = np.zeros((number_of_space_points, number_of_space_points))
implicit_matrix[0, 0] = 1.0
implicit_matrix[-1, -1] = 1.0
for n in range(1, number_of_space_points - 1):
    implicit_matrix[n, n - 1] = -ratio
    implicit_matrix[n, n] = 1.0 + 2.0 * ratio
    implicit_matrix[n, n + 1] = -ratio

inverse_matrix = np.linalg.inv(implicit_matrix)

solution = np.zeros((number_of_time_points, number_of_space_points))
solution[0, 0] = left_temperature
solution[0, -1] = right_temperature

for i in range(number_of_time_points - 1):
    rhs = solution[i].copy()
    rhs[0] = left_temperature
    rhs[-1] = right_temperature
    solution[i + 1] = inverse_matrix @ rhs

target_index = int(round(7.0 / space_step))  # x = 7 cm
print(f"u(12 s, 7 cm) = {solution[-1, target_index]:.2f} °C")
```

**Profile shapes.** At $t=0$: 100 at the left end, 30 at the right, zero in between. By $t=3$ s, the heat has spread inward; by $t=6, 9$ s the profile becomes increasingly smooth concave; by $t=12$ s it is approaching the steady-state line.

**Result.**

$$
\boxed{u(12\ \text{s},7\ \text{cm})\approx 26^{\circ}\text{C}.}
$$

The relaxation time $L^{2}/(\alpha\pi^{2})\approx 12.1$ s is comparable to the simulation time, so we are partway to the steady-state value of $51^{\circ}\text{C}$. The dominant transient mode contributes $-260/\pi\cdot\sin(7\pi/10)\cdot e^{-\alpha\pi^{2}\cdot 12/100}\approx -25^{\circ}$, giving $u(12,7)\approx 51-25=26^{\circ}\text{C}$. Implicit scheme matches this analytical estimate to within the discretisation error.

---

## 9.2. Implicit or Explicit Heat Diffusion with Insulated Left Boundary

> [!question]
> Solve the same heat diffusion problem as before, but now with the left boundary **insulated**: $\frac{\partial u(t,x)}{\partial x}\bigg|_{x=0}=0$, keeping the right boundary at $u(t\text{ cm})=30$ degrees Celsius and the same initial condition $u(0\text{ s},x)=0$. Use the same steps $\Delta x=0.2$ cm and $\Delta t=0.01$ s, with **either the explicit or implicit method**. What is the temperature at 12 s and 7 cm from the left?

**Setup.** Insulated left boundary means $\partial u/\partial x|_{x=0}=0$, i.e. zero flux. Apply the imaginary-point recipe from lecture 9: $u_{-1}=u_{1}$, so the boundary-row equation becomes $-2u_{0}+2u_{1}=0$, equivalently $u_{0}=u_{1}$ (the boundary value floats and equals the next interior value at every step).

For the implicit scheme, modify the first row of $\mathbf{A}$ so that the equation at $n=0$ uses the imaginary-point substitution applied to the BTCS spatial stencil. Working through:

$$
\frac{u_{i+1,0}-u_{i,0}}{\Delta t}=\alpha\frac{u_{i+1,1}-2u_{i+1,0}+u_{i+1,-1}}{\Delta x^{2}}
$$

with $u_{i+1,-1}=u_{i+1,1}$ (Neumann, flux zero):

$$
\frac{u_{i+1,0}-u_{i,0}}{\Delta t}=\alpha\frac{2u_{i+1,1}-2u_{i+1,0}}{\Delta x^{2}}
$$

$$
(1+2c)u_{i+1,0}-2c\,u_{i+1,1}=u_{i,0}.
$$

So the first row of $\mathbf{A}$ becomes $(1+2c,\,-2c,\,0,\,\ldots,\,0)$ and the corresponding RHS entry is $u_{i,0}$ (no longer pinned).

**Steady state.** With one Dirichlet ($u_{R}=30$) and one Neumann ($\partial u/\partial x=0$), the steady-state solution to $u''=0$ is $u_{\infty}(x)=30$ everywhere (constant - flux is zero at the wall, so heat flows in from the right until the rod equilibrates with the right-end temperature).

**Implementation.**

```python runnable
import numpy as np

length = 10.0
diffusion = 0.835
space_step = 0.2
time_step = 0.01
final_time = 12.0
right_temperature = 30.0

number_of_space_points = int(round(length / space_step)) + 1  # 51
number_of_time_points = int(round(final_time / time_step)) + 1  # 1201
ratio = diffusion * time_step / space_step**2

implicit_matrix = np.zeros((number_of_space_points, number_of_space_points))
# Neumann row at the left boundary
implicit_matrix[0, 0] = 1.0 + 2.0 * ratio
implicit_matrix[0, 1] = -2.0 * ratio
# Dirichlet row at the right boundary
implicit_matrix[-1, -1] = 1.0
# Interior rows
for n in range(1, number_of_space_points - 1):
    implicit_matrix[n, n - 1] = -ratio
    implicit_matrix[n, n] = 1.0 + 2.0 * ratio
    implicit_matrix[n, n + 1] = -ratio

inverse_matrix = np.linalg.inv(implicit_matrix)

solution = np.zeros((number_of_time_points, number_of_space_points))
solution[0, -1] = right_temperature

for i in range(number_of_time_points - 1):
    rhs = solution[i].copy()
    rhs[-1] = right_temperature  # Dirichlet at right pinned every step
    solution[i + 1] = inverse_matrix @ rhs

target_index = int(round(7.0 / space_step))
print(f"u(12 s, 7 cm) = {solution[-1, target_index]:.2f} °C")
```

**Result.**

$$
\boxed{u(12\ \text{s},7\ \text{cm})\approx 15^{\circ}\text{C}.}
$$

**Why so low.** The Neumann + Dirichlet eigenfunctions are $\cos((2n-1)\pi x/(2L))$ with eigenvalues $\alpha[(2n-1)\pi/(2L)]^{2}$. The lowest mode decays as $e^{-\alpha\pi^{2}t/(4L^{2})}=e^{-0.247}\approx 0.78$ at $t=12$ s - much slower than the two-sided Dirichlet case (relaxation time is $4\times$ longer), since the insulated boundary doesn't drain heat. Plugging into the Fourier expansion at $x=7$ gives approximately $30+(-13.6)+(-1.4)+\cdots\approx 15^{\circ}\text{C}$, matching the simulation.

> [!note]
> The system is only $\sim 22\%$ of the way to the steady state $30^{\circ}\text{C}$ at $t=12$ s - much further from equilibrium than the two-sided case in 9.1, despite using the same $\alpha$ and total time. Insulation slows everything down.
