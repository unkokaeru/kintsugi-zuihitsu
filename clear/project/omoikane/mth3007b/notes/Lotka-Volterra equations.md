# Lotka-Volterra Equations

The **Lotka-Volterra equations** (predator-prey model) describe the coupled dynamics of two populations: prey $x$ and predator $y$.

$$
\frac{dx}{dt} = ax - bxy
$$

$$
\frac{dy}{dt} = -cy + dxy
$$

where $a, b, c, d > 0$ are positive parameters:
- $a$: prey birth rate (prey grow exponentially without predators)
- $b$: predation rate (each encounter reduces prey)
- $c$: predator death rate (predators die without prey)
- $d$: predator growth from predation

## Qualitative Behaviour

The populations oscillate periodically. When prey are plentiful, predators grow; when predators are numerous, prey decline; with fewer prey, predators decline; and prey recover. This produces closed orbits in the phase plane $(x, y)$.

## Python

```python runnable
import numpy as np
import matplotlib.pyplot as plt

prey_birth_rate = 1.2
predation_rate = 0.6
predator_death_rate = 0.8
predator_growth_rate = 0.3

def lotka_volterra(t: float, state: np.ndarray) -> np.ndarray:
    """Compute derivatives for the Lotka-Volterra predator-prey system.

    Args:
        t: Current time (not used - autonomous system).
        state: Array [prey_population, predator_population].

    Returns:
        Array of derivatives [d(prey)/dt, d(predator)/dt].
    """
    prey_population, predator_population = state
    d_prey = prey_birth_rate * prey_population - predation_rate * prey_population * predator_population
    d_predator = -predator_death_rate * predator_population + predator_growth_rate * prey_population * predator_population
    return np.array([d_prey, d_predator])

dt = 0.001
time_end = 30.0
number_of_steps = int(round(time_end / dt))
time_array = np.zeros(number_of_steps + 1)
state_array = np.zeros((2, number_of_steps + 1))
state_array[:, 0] = np.array([2.0, 1.0])  # initial prey=2, predator=1

for step_index in range(number_of_steps):
    time_array[step_index + 1] = time_array[step_index] + dt
    state_array[:, step_index + 1] = (
        state_array[:, step_index]
        + dt * lotka_volterra(time_array[step_index], state_array[:, step_index])
    )

plt.plot(state_array[0, :], state_array[1, :])
plt.xlabel('Prey population')
plt.ylabel('Predator population')
plt.title('Predator-prey phase plane (Lotka-Volterra)')
plt.tight_layout()
plt.show()
```

[[Systems of ODEs]] | [[Explicit Euler method]] | [[Fourth order Runge-Kutta]] | [[Runge-Kutta methods]]
