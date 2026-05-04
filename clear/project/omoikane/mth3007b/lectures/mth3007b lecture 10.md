# MTH3007B Lecture 10

We close the PDE block with the **Laplace equation** in two dimensions - the steady-state heat problem with no time variable, only boundary conditions. The five-point **Laplacian difference equation** turns this into a sparse linear system; rather than invert a large matrix we use **Liebmann's method** (a.k.a. Gauss-Seidel iteration), which exploits diagonal dominance to converge by repeated local averaging. We also tie up loose ends from the previous lecture's Neumann-BC exercise.

> [!note] Course administration
> Final in-class test (term 2 material): **Wednesday 13/05/2026**. Allowed: logbook + Blackboard (including lecture notes). University-provided computers only.

## Feedback: Neumann BC for the BTCS Diffusion Scheme

A loose end from lecture 9. The Neumann boundary condition at $x=x_{L}$ reads

$$
\frac{du(t,x)}{dx}\bigg|_{x=x_{L}}=d,
$$

i.e. the derivative at the boundary is a constant $d$. A central-difference approximation centred on the boundary node $n=0$ introduces an **imaginary point** $u_{i+1,-1}$ outside the domain, and the BC gives

$$
u_{i+1,-1}=u_{i+1,1}-2\Delta x\,d.
$$

For the **insulating** case $d=0$: $u_{i+1,-1}=u_{i+1,1}$. Substituting into the BTCS equation at $n=0$ (with $c=\alpha\Delta t/\Delta x^{2}$):

$$
\begin{aligned}
-c\,u_{i+1,1}+(1+2c)\,u_{i+1,0}-c\,u_{i+1,-1}&=u_{i,0}\\
-c\,u_{i+1,1}+(1+2c)\,u_{i+1,0}-c\,u_{i+1,1}&=u_{i,0}\quad\text{(substitute virtual point)}\\
\boxed{-2c\,u_{i+1,1}+(1+2c)\,u_{i+1,0}=u_{i,0}}\quad&\text{(rearrange).}
\end{aligned}
$$

The full insulating-left + Dirichlet-right system is then

$$
\begin{cases}
-2c\,u_{i+1,1}+(1+2c)\,u_{i+1,0}=u_{i,0}, & \text{(Neumann at }x_{L}\text{)}\\
-c\,u_{i+1,n+1}+(1+2c)\,u_{i+1,n}-c\,u_{i+1,n-1}=u_{i,n}, & n=1,\ldots,N_{x}-3\\
u_{i+1,N_{x}-1}=u_{R}. & \text{(Dirichlet at }x_{R}\text{)}
\end{cases}
$$

Only the **first row** has changed from the Dirichlet version - the matrix machinery is otherwise identical.

## The Laplace Equation

$$
\boxed{\nabla^{2}u(\mathbf{r})=0.}
$$

The solution $u$ in a domain $\Omega$ depends *only* on the boundary conditions: pin $u$ on $\partial\Omega$ and the interior is uniquely determined. No initial condition - this is a **pure BVP**, the steady state of the diffusion equation.

### 1D

Reduces to $d^{2}u/dx^{2}=0$, already covered in term 1 (and a subset of the 1D Poisson solver from [[mth3007b lecture 6]]).

### 2D

$$
\frac{\partial^{2}u(x,y)}{\partial x^{2}}+\frac{\partial^{2}u(x,y)}{\partial y^{2}}=0.
$$

This is the case we focus on - typical application: steady-state temperature on a 2D plate with prescribed boundary temperatures.

## Numerical Solution in 2D

Discretise the $x$-$y$ plane: $x=x_{0}+i\,\Delta x$, $y=y_{0}+j\,\Delta y$, with $i,j$ integer indices. Let $u_{i,j}=u(x_{i},y_{j})$.

Apply the symmetric second-derivative stencil from [[mth3007b lecture 6]] in **each** direction:

$$
\frac{\partial^{2}u}{\partial x^{2}}\approx \frac{u_{i+1,j}-2u_{i,j}+u_{i-1,j}}{\Delta x^{2}},\qquad \frac{\partial^{2}u}{\partial y^{2}}\approx \frac{u_{i,j+1}-2u_{i,j}+u_{i,j-1}}{\Delta y^{2}}.
$$

Substituting into Laplace:

$$
\frac{u_{i+1,j}-2u_{i,j}+u_{i-1,j}}{\Delta x^{2}}+\frac{u_{i,j+1}-2u_{i,j}+u_{i,j-1}}{\Delta y^{2}}=0.
$$

For a **square grid** $\Delta x=\Delta y$, the $\Delta x^{2}$ factor cancels and we get the **Laplacian difference equation**:

$$
\boxed{u_{i+1,j}+u_{i-1,j}+u_{i,j+1}+u_{i,j-1}-4u_{i,j}=0.}
$$

Five-point stencil: the value at $(i,j)$ is coupled to its four orthogonal neighbours. One equation per *interior* grid point.

### Worked Example: 3×3 Interior with Mixed Boundary Temperatures

Plate with boundary temperatures $100^{\circ}$ (top), $0^{\circ}$ (bottom), $75^{\circ}$ (left), $50^{\circ}$ (right), and a $3\times 3$ interior grid indexed $(i,j)\in\{1,2,3\}^{2}$.

Apply the Laplacian difference equation at the corner node $(1,1)$:

$$
u_{2,1}+u_{0,1}+u_{1,2}+u_{1,0}-4u_{1,1}=0.
$$

The boundary values $u_{0,1}=75$ (left) and $u_{1,0}=0$ (bottom) move to the right-hand side:

$$
u_{2,1}+u_{1,2}-4u_{1,1}=-75.
$$

Doing this at all 9 interior nodes gives a $9\times 9$ linear system $\mathbf{A}\mathbf{u}=\mathbf{b}$.

> [!warning] Direct inversion doesn't scale
> Setting up and inverting $\mathbf{A}$ works for $9$ unknowns. For a $100\times 100$ interior grid that's $10^{4}$ unknowns and an $\mathbf{A}$ with $10^{8}$ entries - the matrix is *very* sparse but $O(N^{3})$ inversion is prohibitive. We need an iterative method that exploits the sparsity.

## Liebmann's Method (Gauss-Seidel for Laplace)

Rearrange the Laplacian difference equation as an **explicit formula** for $u_{i,j}$:

$$
u_{i,j}=\frac{u_{i+1,j}+u_{i-1,j}+u_{i,j+1}+u_{i,j-1}}{4}.
$$

Each interior value equals the average of its four neighbours - the **mean value property** of harmonic functions, dropping out naturally from the stencil. Turn this into an iterative update by reading neighbours from the *current* estimate and writing the result into a *new* estimate:

$$
\boxed{u_{i,j}^{\text{new}}=\frac{u_{i+1,j}^{\text{old}}+u_{i-1,j}^{\text{old}}+u_{i,j+1}^{\text{old}}+u_{i,j-1}^{\text{old}}}{4}.}
$$

Sweep over all interior points, replace `u_xy` with `unew_xy`, and repeat until convergence.

> [!important] Why it converges
> The matrix $\mathbf{A}$ is **diagonally dominant**: $|a_{ii}|=4\geq \sum_{j\neq i}|a_{ij}|$ (each row has one $-4$ on the diagonal and at most four $+1$'s off-diagonal). Diagonal dominance is the standard sufficient condition for Gauss-Seidel / Jacobi iteration to converge to the true solution from any starting guess.

> [!note] Naming
> "Liebmann's method" is the name applied to Gauss-Seidel when used specifically for solving the discretised Laplace/Poisson equation. The arithmetic is the same.

### Convergence Criterion

Iterate until the largest pointwise change between sweeps drops below a tolerance:

$$
\max_{i,j}\,\bigl|u_{i,j}^{\text{new}}-u_{i,j}^{\text{old}}\bigr|<\varepsilon,\quad\text{e.g. }\varepsilon=10^{-4}.
$$

### Implementation Recipe

For a square plate of side $L=10$ cm, BCs prescribed on all four edges:

1. Allocate two $N_{x}\times N_{y}$ arrays `u_xy` and `unew_xy`.
2. Initialise `u_xy` with an arbitrary guess (e.g. zeros) for the interior.
3. Set the boundary rows/columns of `u_xy` to the prescribed boundary values.
4. **Double loop** over interior $(i,j)$: write `unew_xy[i, j] = (u_xy[i+1, j] + u_xy[i-1, j] + u_xy[i, j+1] + u_xy[i, j-1]) / 4`.
5. Compute $\max_{i,j}|u^{\text{new}}_{i,j}-u^{\text{old}}_{i,j}|$.
6. Copy `unew_xy` back into `u_xy`.
7. If the max difference exceeds $\varepsilon$, return to step 4.

```python runnable
import numpy as np

def solve_laplace_liebmann(
    boundary_top: float,
    boundary_bottom: float,
    boundary_left: float,
    boundary_right: float,
    number_of_x_points: int,
    number_of_y_points: int,
    tolerance: float = 1e-4,
    maximum_iterations: int = 100_000,
) -> np.ndarray:
    """
    Solve Laplace's equation on a rectangular grid with Dirichlet boundaries
    via Liebmann's iteration. Returns u[i, j] indexed by x-step i, y-step j.
    """
    u_xy = np.zeros((number_of_x_points, number_of_y_points))
    u_xy[:, -1] = boundary_top
    u_xy[:, 0] = boundary_bottom
    u_xy[0, :] = boundary_left
    u_xy[-1, :] = boundary_right

    for iteration in range(maximum_iterations):
        u_old = u_xy.copy()
        u_xy[1:-1, 1:-1] = 0.25 * (
            u_old[2:, 1:-1] + u_old[:-2, 1:-1]
            + u_old[1:-1, 2:] + u_old[1:-1, :-2]
        )
        if np.max(np.abs(u_xy - u_old)) < tolerance:
            print(f"Converged after {iteration + 1} iterations.")
            break
    return u_xy

solution = solve_laplace_liebmann(
    boundary_top=100.0, boundary_bottom=0.0,
    boundary_left=75.0, boundary_right=50.0,
    number_of_x_points=11, number_of_y_points=11,
)
print(solution.round(1))
```

> [!note] Jacobi vs Gauss-Seidel in practice
> The vectorised NumPy update above reads from a copy `u_old` - that's strictly Jacobi iteration, not Gauss-Seidel. A literal in-place double loop (overwriting `u_xy[i, j]` and then using the freshly-updated value when its right-neighbour is processed) is the *true* Gauss-Seidel and converges roughly twice as fast - but loses the vectorisation. For most teaching examples the Jacobi-style array update is plenty. Successive over-relaxation (SOR) extends Gauss-Seidel with a relaxation parameter $\omega\in(1,2)$ for further speedups.

### Solution Profile

For boundary temperatures (top, bottom, left, right) = $(100, 0, 75, 50)$ on $L=10$ cm, the converged surface plot shows a smooth interior interpolating between the four edges - hot near the top, cool near the bottom, with the left/right asymmetry from the $75$ vs $50$ boundary - exactly the harmonic profile expected.

## Exercise

> What is Liebmann's method, and what type of equation can be solved with it?

**Answer.** Liebmann's method is Gauss-Seidel iteration applied to the finite-difference discretisation of the **Laplace** (or **Poisson**) equation on a regular grid. Rearrange the Laplacian difference equation $u_{i+1,j}+u_{i-1,j}+u_{i,j+1}+u_{i,j-1}-4u_{i,j}=0$ as $u_{i,j}=\tfrac{1}{4}\bigl(u_{i+1,j}+u_{i-1,j}+u_{i,j+1}+u_{i,j-1}\bigr)$ and iterate until $\max|u^{\text{new}}-u^{\text{old}}|<\varepsilon$. Convergence is guaranteed by the diagonal dominance of the underlying linear system.

(Full assessment exercises on Blackboard.)

---

## Pre-Lecture Notes from [[mth3007b lecture notes 10.pdf|University Notes]]

- **Recap of Neumann BC for BTCS**: insulating-left ($d=0$) gives $u_{i+1,-1}=u_{i+1,1}$, so the boundary-row equation becomes $-2c\,u_{i+1,1}+(1+2c)\,u_{i+1,0}=u_{i,0}$ - only the first row of the BTCS tridiagonal system changes from the Dirichlet case.
- **Laplace equation**: $\nabla^{2}u=0$ - steady state of the diffusion equation; depends only on boundary values, not initial conditions.
- **2D discretisation**: apply the symmetric second-derivative stencil in $x$ and $y$. On a square grid ($\Delta x=\Delta y$) get the **Laplacian difference equation** $u_{i+1,j}+u_{i-1,j}+u_{i,j+1}+u_{i,j-1}-4u_{i,j}=0$ - the value at each interior point equals the average of its four neighbours.
- **Direct solve**: stack one Laplacian equation per interior node $\Rightarrow$ a sparse linear system $\mathbf{A}\mathbf{u}=\mathbf{b}$. Workable for tiny grids; $O(N^{3})$ inversion is prohibitive at scale.
- **Liebmann's method** (= Gauss-Seidel on Laplace/Poisson): iterate $u^{\text{new}}_{i,j}=\tfrac{1}{4}\bigl(u^{\text{old}}_{i+1,j}+u^{\text{old}}_{i-1,j}+u^{\text{old}}_{i,j+1}+u^{\text{old}}_{i,j-1}\bigr)$ until $\max_{i,j}|u^{\text{new}}_{i,j}-u^{\text{old}}_{i,j}|<\varepsilon$.
- **Why it converges**: the matrix $\mathbf{A}$ is diagonally dominant ($|a_{ii}|=4\geq \sum_{j\neq i}|a_{ij}|$) - the standard sufficient condition for Jacobi/Gauss-Seidel iteration.
- **Implementation**: two arrays `u_xy`, `unew_xy`; set boundary values; double loop over interior; max-difference check; copy back; repeat.
- **Worked example**: $L=10$ cm plate with boundary temperatures $100/0/75/50$ produces a smooth harmonic interior - relaxation converges in a few hundred iterations for $11\times 11$ at $\varepsilon=10^{-4}$.
