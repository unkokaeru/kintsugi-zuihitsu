# MTH3007b Lecture 11

> [!quote] Me, in the lecture
> zzzzz...

This is a revision session. The structure is: feedback on the Python arrays/matrices exercise from lecture 10, feedback on the implicit BTCS code, then a list of revision exercises to consolidate the whole module.

## Section 50: Arrays and Matrices - Python Feedback

### Finding the Maximum in a Matrix

Two approaches for finding the maximum absolute difference between two arrays, as introduced in lecture 10:

```python runnable
max_error=0.0
for i in range(Nr):
    for j in range(Nc):
        current_error=np.abs(unew_xy[i,j]-u_xy[i,j])
        if current_error>max_error:
            max_error=current_error
# Alternative:
max_error=np.amax(np.abs(unew_xy-u_xy))
```

The iterative loop and the `np.amax` version are equivalent. The vectorised form is preferred for clarity and speed.

> [!note] Array copying reminder
> Use `B = 1.0*A` or `B = A.copy()` for genuine copies. `B = A` creates an alias - modifying `B` will also modify `A`.

## Section 50.2: Implicit Method (BTCS) - Code Feedback

The full BTCS implementation using matrix inversion is:

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

Key points from the feedback: the matrix $A$ is built once before the time loop; `np.linalg.inv(A)` is called once; `np.matmul(Ainv, u)` advances the solution at each step. BTCS is unconditionally stable so no $r \leq 1/2$ check is needed.

## Section 51: Revision Exercises

Retry all exercises from previous sessions of this module.

Additionally, work through the following exercises from Chapra & Canale:

### 1st Order ODEs

- 25.1, 25.3, 25.4, 25.5, 25.6, 25.17, 25.19, 25.21
- Try each with RK4, implicit Euler, and implicit trapezoid.

### Systems of ODEs

- 25.7, 25.25, 28.10

### 2nd Order ODEs

- 25.16, 25.18, 25.22

### 1D Monte Carlo Integration

- 22.1, 22.2, 22.3

### PDEs

- 30.7 (PDE - Dirichlet BCs)
- 30.16 (PDE - Neumann BCs)

> [!warning] Test scope
> Stochastic ODEs are not included in the Chapra & Canale exercise list above, but they could be asked in the test.

---

## Pre-Lecture Notes from [[mth3007b lecture notes 11.pdf|University Notes]]

- Feedback on array/matrix Python: `np.amax` vs iterative loop for max difference; array copy pitfalls.
- BTCS feedback: build $A$ once, invert once with `np.linalg.inv`, apply `np.matmul` each time step.
- Revision: retry all module exercises; plus Chapra & Canale 25.1-25.21 (ODEs), 25.7/25.25/28.10 (systems), 25.16-25.22 (2nd order), 22.1-22.3 (MC), 30.7/30.16 (PDEs).
- Stochastic ODEs not in the exercise list but may appear in the test.
