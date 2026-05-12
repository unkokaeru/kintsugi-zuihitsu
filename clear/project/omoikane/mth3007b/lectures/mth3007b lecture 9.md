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
L=10.0
xmax=L
dx=0.2
Nx=int(np.round(xmax/dx)+1)
tmax=12.0
t=0
dt=0.01
Nt=int(np.round(tmax/dt)+1)
u_L=100.
u_R=50.
alpha=0.835
r=alpha*dt/(dx*dx)
u=np.zeros(Nx)
u[0]=u_L
u[Nx-1]=u_R
for it in range(Nt-1):
    unext=np.zeros(Nx)
    unext[0]=u[0]
    unext[Nx-1]=u[Nx-1]
    for i in range(1,Nx-1):
        unext[i]=u[i]+r*(u[i+1]-2*u[i]+u[i-1])
    u=1.0*unext
print("The solution at t="+str(np.round(t+dt*(Nt-1),3))+" for u at 7 cm is "
      +str(u[int(np.round(7.0/L*(Nx-1)))]))
```

## FTCS Stability

### Stability Argument

Look at the coefficient of $u_{i,n}$ in the FTCS update: it is $(1 - 2r)$. For the scheme to be non-amplifying, we need:

$$
|1 - 2r| \leq 1
$$

This gives $r \leq 1$. The full stability proof (see Hoffman 2001) tightens this result. The FTCS scheme is **stable and convergent** if and only if:

$$
\boxed{r = \frac{\alpha\,\Delta t}{(\Delta x)^2} \leq \frac{1}{2}}
$$

Equivalently, the time step must satisfy:

$$
\Delta t \leq \frac{(\Delta x)^2}{2\alpha}
$$

> [!warning] Stability of FTCS
> If $r > 1/2$, the FTCS solution will grow without bound and become meaningless. Always check $r$ before running.

## Implicit Scheme: BTCS

**[[BTCS]]** (Backward-Time Centred-Space) uses a backward (implicit) difference in time:

$$
\frac{u_{i,n+1} - u_{i,n}}{\Delta t} = \alpha \frac{u_{i+1,n+1} - 2u_{i,n+1} + u_{i-1,n+1}}{(\Delta x)^2}
$$

Rearranging (with $c = \alpha\,\Delta t / (\Delta x)^2$):

$$
-c\,u_{i+1,n+1} + (1 + 2c)\,u_{i,n+1} - c\,u_{i-1,n+1} = u_{i,n}
$$

The new unknowns $u_{i,n+1}$ appear on the left-hand side for all $i$ simultaneously, so we cannot update point by point. Instead, the equations form a **[[tridiagonal matrix system]]**:

$$
A\,\mathbf{u}_{n+1} = \mathbf{u}_n
$$

where $A$ is a tridiagonal matrix with $(1+2c)$ on the diagonal and $-c$ on the off-diagonals.

### Solving the System

One option is standard **[[Gaussian elimination]]**. The following function solves $Ax = b$ given the augmented matrix $[A|b]$:

```python runnable
def Gauss_elim(M):
    """
    Solves Ax=b where last column of M (augmented matrix) is b.
    Uses Gaussian elimination with in-place triangularisation.
    """
    n=M.shape[0]
    for col in range(n):
        for row in range(col+1,n):
            factor=M[row,col]/M[col,col]
            M[row,:]=M[row,:]-factor*M[col,:]
    # Back substitution
    x=np.zeros(n)
    for row in range(n-1,-1,-1):
        x[row]=(M[row,n]-np.dot(M[row,row+1:n],x[row+1:n]))/M[row,row]
    return x
```

Another option is to invert $A$ once using `numpy.linalg.inv` and then apply $A^{-1}$ at every time step - efficient when $A$ is fixed:

```python runnable
import numpy as np
L=10.0
xmax=L
dx=0.2
Nx=int(np.round(xmax/dx)+1)
tmax=12.0
t=0
dt=0.01
Nt=int(np.round(tmax/dt)+1)
u_L=100.
u_R=30.
alpha=0.835
c=alpha*dt/(dx*dx)
u=np.zeros(Nx)
u[0]=u_L
u[Nx-1]=u_R
A=np.zeros((Nx,Nx))
A[0,0]=1.0
A[Nx-1,Nx-1]=1
for i in range(1,Nx-1):
    A[i,i]=1+2*c
    A[i,i-1]=-c
    A[i,i+1]=-c
Ainv=np.linalg.inv(A)
for it in range(Nt-1):
    t+=dt
    unext=np.matmul(Ainv,u)
    u=1.0*unext
print("The solution at t="+str(np.round(t,3))+" for u at 7 cm is "
      +str(u[np.int32(np.round(7.0/L*(Nx-1)))]))
```

> [!note] Thomas algorithm
> The **[[Thomas algorithm]]** is a specialised $O(N)$ solver for tridiagonal systems. It is mentioned here for completeness - we won't discuss the algorithm in detail.

### Unconditional Stability of BTCS

**[[BTCS]]** is **unconditionally stable**: there is no restriction on $\Delta t$. Large time steps can be used without the solution blowing up, which is a major practical advantage over FTCS.

## Neumann Boundary Conditions

A Neumann BC specifies the gradient at the boundary rather than the value. At the left boundary, $\partial u / \partial x = d$. To implement this numerically, we introduce an **[[ghost point]]** $u_{-1}$ just outside the domain.

Using the centred difference approximation for the derivative at $i = 0$:

$$
\frac{u_1 - u_{-1}}{2\,\Delta x} = d \implies u_{-1} = u_1 - 2\,\Delta x\,d
$$

For an **[[insulating boundary]]** ($d = 0$), this simplifies to:

$$
u_{-1} = u_1 \implies u_0 = u_1
$$

---

## Pre-Lecture Notes from [[mth3007b lecture notes 9.pdf|University Notes]]

- FTCS update: $u_{i,n+1}=(1-2r)u_{i,n}+r(u_{i+1,n}+u_{i-1,n})$, $r=\alpha\Delta t/(\Delta x)^2$.
- Stability: coefficient of $u_{i,n}$ is $(1-2r)$; require $|1-2r|\leq 1$; full proof (Hoffman 2001) gives $r\leq 1/2$.
- BTCS: backward time difference gives tridiagonal system $Au_{n+1}=u_n$; solved by Gaussian elimination or matrix inversion.
- BTCS is unconditionally stable - no $\Delta t$ restriction.
- Thomas algorithm ($O(N)$ tridiagonal solver) exists but is not covered in this module.
- Neumann BC: ghost point $u_{-1}=u_1-2\Delta x\,d$; insulation ($d=0$) gives $u_0=u_1$.
- Next session: the 2D Laplace equation and Liebmann's iterative method.
