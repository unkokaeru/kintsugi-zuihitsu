# FTCS Scheme

The **FTCS scheme** (Forward-Time Centred-Space) is an explicit finite difference method for the [[Heat equation]].

## Discretisation

Using a forward difference in time and a centred second difference in space:

$$
u_{i+1,n} = (1 - 2r) \, u_{i,n} + r \left(u_{i,n+1} + u_{i,n-1}\right)
$$

where the parameter $r$ is

$$
r = \frac{\alpha \, dt}{dx^2}
$$

Here $i$ is the time index and $n$ is the spatial index. The right-hand side contains only values at time step $i$, making this a fully **explicit** scheme.

## Stability

The FTCS scheme is **conditionally stable**. The stability condition is

$$
r \leq \frac{1}{2} \quad \Longleftrightarrow \quad dt \leq \frac{dx^2}{2\alpha}
$$

Violating this condition leads to exponentially growing oscillations. (Details of the stability proof via Fourier analysis are in Hoffman (2001) and are not covered here.)

## Accuracy

- First-order in time: $O(dt)$
- Second-order in space: $O(dx^2)$

## Python

```python runnable
import numpy as np

def ftcs_step(
    u_current: np.ndarray,
    r: float,
) -> np.ndarray:
    """Advance the heat equation one time step using the FTCS scheme.

    Args:
        u_current: Spatial profile at the current time step (interior points only).
        r: Stability parameter alpha * dt / dx**2. Must satisfy r <= 0.5.

    Returns:
        Spatial profile at the next time step.
    """
    u_next = np.empty_like(u_current)
    u_next[1:-1] = (1 - 2 * r) * u_current[1:-1] + r * (u_current[2:] + u_current[:-2])
    return u_next
```

[[Heat equation]] | [[BTCS scheme]] | [[Finite differences]] | [[Boundary conditions]] | [[Stability of a method]]
