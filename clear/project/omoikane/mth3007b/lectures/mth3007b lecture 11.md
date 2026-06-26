# MTH3007b Lecture 11

> [!quote] Me, in the lecture
> zzzzz…

This is a revision session. The structure is: feedback on the Python arrays/matrices exercise from lecture 10, feedback on the implicit BTCS code, then a list of revision exercises to consolidate the whole module.

## Section 50: Arrays and Matrices - Python Feedback

### Finding the Maximum in a Matrix

Two approaches for finding the maximum absolute difference between two arrays, as introduced in lecture 10:

```python runnable
max_error = 0.0
for row_index in range(number_of_rows):
    for col_index in range(number_of_cols):
        current_error = np.abs(u_new[row_index, col_index] - u_old[row_index, col_index])
        if current_error > max_error:
            max_error = current_error
# Alternative (preferred):
max_error = np.amax(np.abs(u_new - u_old))
```

The iterative loop and the `np.amax` version are equivalent. The vectorised form is preferred for clarity and speed.

> [!note] Array copying reminder
> Use `B = 1.0*A` or `B = A.copy()` for genuine copies. `B = A` creates an alias - modifying `B` will also modify `A`.

## Section 50.2: Implicit Method (BTCS) - Code Feedback

The full BTCS implementation using matrix inversion is:

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

## Pre-Lecture Notes from University Notes

- Feedback on array/matrix Python: `np.amax` vs iterative loop for max difference; array copy pitfalls.
- BTCS feedback: build $A$ once, invert once with `np.linalg.inv`, apply `np.matmul` each time step.
- Revision: retry all module exercises; plus Chapra & Canale 25.1-25.21 (ODEs), 25.7/25.25/28.10 (systems), 25.16-25.22 (2nd order), 22.1-22.3 (MC), 30.7/30.16 (PDEs).
- Stochastic ODEs not in the exercise list but may appear in the test.
