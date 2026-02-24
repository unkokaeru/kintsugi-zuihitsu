# MTH3007B Lecture 4

> [!quote] Me, in the lecture
>
> zzzzz…

As usual, this session opened with feedback and recap - specifically clarifying a subtle distinction

between Heun's method and the implicit trapezoid, and working through a concrete implicit Euler

derivation. Then, the main content: stability and convergence of both ODEs and their numerical

methods, followed by generalising everything to systems of ODEs.

## Heun's Method vs. Implicit Trapezoid (Recap)

It's worth being careful here - the [[Implicit Trapezoid Method]] from last lecture is **not** the

same as **[[Heun's method]]** (also called the **explicit trapezoid method**).

The implicit trapezoid uses the exact next value $y(t+\Delta t)$ on both sides:

$$
\frac{y(t+\Delta t) - y(t)}{\Delta t} = \frac{1}{2}\!\left(g(t, y(t)) + g(t+\Delta t,\, y(t+\Delta t))\right)
$$

Heun's method instead substitutes a **forward Euler predictor**

$\tilde{y}(t+\Delta t) = y(t) + \Delta t \cdot g(t, y(t))$ for the unknown next value, making it

fully explicit:

$$
\frac{y(t+\Delta t) - y(t)}{\Delta t} = \frac{1}{2}\!\left(g(t, y(t)) + g(t+\Delta t,\, \tilde{y}(t+\Delta t))\right)
$$

> [!warning] Heun's method is **not** symmetric (since $\tilde{y}$ breaks the symmetry between
> $y_i$ and $y_{i+1}$), even though it superficially resembles the implicit trapezoid.

### Example: Implicit Euler for $\dot{y} = Bt - ay$

As a worked example of resolving an implicit equation into an explicit one, consider

$\dot{y}(t) = g(t, y(t)) = bt - ay(t)$. The implicit Euler scheme gives:

$$
\frac{y(t+\Delta t) - y(t)}{\Delta t} \approx g(t+\Delta t,\, y(t+\Delta t)) = b(t+\Delta t) - a\cdot y(t+\Delta t)
$$

Isolating $y(t+\Delta t)$ to the left:

$$
y(t+\Delta t) \approx y(t) + \Delta t\bigl(b(t+\Delta t) - a\cdot y(t+\Delta t)\bigr)
$$

$$
y(t+\Delta t)(1 + a\Delta t) \approx y(t) + \Delta t \cdot b(t+\Delta t)
$$

$$
\boxed{y(t+\Delta t) \approx \frac{y(t) + \Delta t \cdot b(t + \Delta t)}{1 + a\Delta t}}
$$

Which in code reduces to a single line:

```python
y_next = (y_now + time_step * coefficient_b * (current_time + time_step)) / (1.0 + coefficient_a * time_step)
```

## Stability of ODEs

Before asking whether a **method** is stable, we first ask whether the **ODE itself** is stable -

i.e., whether small perturbations in initial conditions remain small over time.

**[[Stability of an ODE]]**: an ODE is stable if, given any $\epsilon > 0$, there exists a
$\delta(\epsilon) > 0$ such that for two solutions $y_A(t)$ and $y_B(t)$ with
$|y_A(t_0) - y_B(t_0)| \leq \delta$:

$$
|y_A(t) - y_B(t)| \leq \epsilon \quad \text{for all } t > t_0
$$

So a stable ODE is one where small differences in initial conditions are not amplified.

> [!example] Unstable ODE: $\dot{y} = y$
>
> The solution is $y(t) = y_0 e^t$. For two solutions with slightly different initial conditions:
>
> $$
> |y_A(t) - y_B(t)| = |y_{0,A} - y_{0,B}|\,e^t \to \infty
> $$
>
> There is no finite upper bound, so no valid $\delta$ can be found - this ODE is **unstable**.

> [!example] Stable ODE: $\dot{y} = -y$
>
> The solution is $y(t) = y_0 e^{-t}$. For two solutions with slightly different initial conditions:
>
> $$
> |y_A(t) - y_B(t)| = |y_{0,A} - y_{0,B}|\,e^{-t} \to 0
> $$
>
> This goes to zero as $t \to \infty$, so we can simply take $\delta = \epsilon$. The initial
> difference is attenuated (damped), and hence this ODE is **stable**.

## Stability of Methods

Given a stable ODE, we ask whether a numerical method for solving it preserves that stability.

**[[Stability of a method]]**: a method $T$ is stable if, for a stable ODE, two slightly different
initial conditions $y_A(0)$ and $y_B(0) = y_A(0) + \epsilon$ produce solutions $y_{T,A}(t)$ and
$y_{T,B}(t)$ whose difference stays bounded - i.e., there exists $M(\epsilon)$ such that
$|y_{T,A}(t) - y_{T,B}(t)| < M$ for all $t > 0$.

A method is **unstable** if it produces an unbounded solution for a stable ODE.

### Forward Euler Stability

Consider the model stable ODE $\dot{y}(t) = -ay(t)$ with $a > 0$. The explicit Euler scheme gives

$y_{FE}(t_0 + \Delta t) = (1 - a\Delta t)\,y(t_0)$, and hence after $n$ steps:

$$
y_{FE}(t_0 + n\Delta t) = (1 - a\Delta t)^n\,y(t_0)
$$

This diverges as $n \to \infty$ when $|1 - a\Delta t| > 1$, which (since $a > 0$) means

$a\Delta t > 2$. For two different initial conditions the difference then grows without bound:

$$
|y_{FE,A}(t) - y_{FE,B}(t)| = |y_A(t_0) - y_B(t_0)|\,|1 - a\Delta t|^n \to \infty
$$

The explicit Euler method is therefore **conditionally stable** - unstable whenever $a\Delta t > 2$.

### Backward Euler Stability

The implicit Euler scheme for the same ODE gives $y_{BE}(t + \Delta t) = y_{BE}(t)\,/\,(1 + a\Delta t)$,

and hence after $n$ steps:

$$
y_{BE}(t_0 + n\Delta t) = \frac{y_{BE}(t_0)}{(1 + a\Delta t)^n}
$$

Since $a > 0$, we have $(1 + a\Delta t) > 1$, so this always decays to zero as $n \to \infty$,

regardless of $\Delta t$. The difference between two initial conditions goes to zero for any $\Delta t > 0$,

so the implicit Euler method is **unconditionally stable**.

> [!note] This explains the earlier instability observations - at $a\Delta t = 2.2$, explicit Euler
> blows up entirely whilst implicit Euler remains well-behaved.

## Convergence

**[[Convergence]]**: a numerical algorithm converges if, when continually refined with a smaller
step size, the approximate solutions converge to the exact solution - i.e., the true solution is
recovered in the limit $\Delta t \to 0$.

> [!note] In convergence proofs, only the truncation error is considered - round-off errors are
> discarded.

The **[[Order of convergence]]** is the rate at which the global error decreases as $\Delta t \to 0$.

### Lax Equivalence Theorem

A clean result that decomposes convergence into two more tractable conditions:

> [!warning] **[[Lax Equivalence Theorem]]**: a finite-difference method for a well-posed
> initial-boundary value problem converges if and only if it is both:
> 1. **Stable** (as defined above), and
> 2. **Consistent**: the exact solution of the ODE satisfies the numerical scheme in the limit
> $\Delta t \to 0$.

The motivation for this split is that stability and consistency are generally much easier to prove

than convergence directly. Both explicit and implicit Euler are consistent, so both converge for

sufficiently small $\Delta t$ (with the additional $a\Delta t \leq 2$ constraint for the explicit variant).

## Richardson Method (and Why It Fails)

One natural attempt to construct a symmetric Euler-like method is the **[[Richardson method]]**,

using a centred difference spanning two steps:

$$
\frac{y_{i+1} - y_{i-1}}{2\Delta t} \approx g(t_i, y_i)
$$

This is symmetric by construction, since $y_{i-1}$ and $y_{i+1}$ play symmetric roles around $y_i$.

However, it can be proven that the Richardson method is **unconditionally unstable** for ODEs such

as $\dot{y} = -y$ - unstable for **any** choice of $\Delta t$, rendering it practically useless.

> [!warning] Symmetry does **not** imply stability - the Richardson method is the canonical
> counterexample.

The implicit trapezoid rule, by contrast, is both symmetric **and** unconditionally stable.

## Systems of ODEs

Up to now, we've only considered a single ODE $\dot{y} = g(t, y)$. Many practical applications

are **coupled systems** of ODEs. For $n$ equations:

$$
\frac{dy_1}{dt} = g_1(t, y_1, \dots, y_n), \qquad \dots \qquad \frac{dy_n}{dt} = g_n(t, y_1, \dots, y_n)
$$

This can be written compactly in **vector form**, where $\mathbf{y}$ and $\mathbf{g}$ are now

vector-valued:

$$
\frac{d\mathbf{y}}{dt} = \mathbf{g}(t, \mathbf{y}(t)), \quad \mathbf{y}(t) = \begin{pmatrix} y_1(t) \\ \vdots \\ y_n(t) \end{pmatrix}, \quad \mathbf{g}(t, \mathbf{y}) = \begin{pmatrix} g_1(t, y_1, \dots, y_n) \\ \vdots \\ g_n(t, y_1, \dots, y_n) \end{pmatrix}
$$

The explicit Euler method then extends trivially:

$$
\mathbf{y}_{i+1} \approx \mathbf{y}_i + \Delta t \cdot \mathbf{g}(t_i, \mathbf{y}_i)
$$

The scalar and vector forms are **identical in structure** - meaning the entire RK family generalises

directly to systems by simply replacing scalar functions with vector-valued ones.

### Example: Predator-Prey (Lotka-Volterra)

The classic **[[Lotka-Volterra equations]]** model two interacting populations:

$$
\frac{dx}{dt} = ax - bxy, \qquad \frac{dy}{dt} = -cy + dxy
$$

where $x$ and $y$ are the prey and predator populations respectively; $a$ is the prey growth rate,

$c$ is the predator death rate, and $b$, $d$ characterise the interaction (the canonical example

being rabbits and wolves). Casting this into vector form with $\mathbf{y} = (x, y)^\top$:

$$
\mathbf{g}(t, \mathbf{y}) = \begin{pmatrix} ax - bxy \\ -cy + dxy \end{pmatrix}
$$

With $a = 1.2$, $b = 0.6$, $c = 0.8$, $d = 0.3$ and initial conditions $x_0 = 2.0$, $y_0 = 1.0$:

```python runnable
import numpy as np
import matplotlib.pyplot as plt


def prey_derivative(time: float, prey_count: float, predator_count: float) -> float:
    """Compute the rate of change of the prey population.

    Args:
        time: Current time (unused; included for interface consistency).
        prey_count: Current prey population x.
        predator_count: Current predator population y.

    Returns:
        Rate of change dx/dt.
    """
    prey_growth_rate = 1.2
    predation_coefficient = 0.6
    return prey_growth_rate * prey_count - predation_coefficient * prey_count * predator_count


def predator_derivative(time: float, prey_count: float, predator_count: float) -> float:
    """Compute the rate of change of the predator population.

    Args:
        time: Current time (unused; included for interface consistency).
        prey_count: Current prey population x.
        predator_count: Current predator population y.

    Returns:
        Rate of change dy/dt.
    """
    predator_death_rate = 0.8
    predator_growth_coefficient = 0.3
    return -predator_death_rate * predator_count + predator_growth_coefficient * prey_count * predator_count


def system_derivative(time: float, state_vector: np.ndarray) -> np.ndarray:
    """Compute the vector derivative g(t, y) for the predator-prey system.

    Args:
        time: Current time.
        state_vector: Array [prey_count, predator_count].

    Returns:
        Array [dx/dt, dy/dt].
    """
    return np.array([
        prey_derivative(time, state_vector, state_vector), [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/56609371/61339db0-ebc1-4a98-a32d-e7a55fee2b78/mth3007b-lecture-1.md)
        predator_derivative(time, state_vector, state_vector), [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/56609371/61339db0-ebc1-4a98-a32d-e7a55fee2b78/mth3007b-lecture-1.md)
    ])


initial_time = 0.0
time_maximum = 30.0
time_step = 0.01
initial_prey = 2.0
initial_predators = 1.0

number_of_steps = int(round((time_maximum - initial_time) / time_step))
time_values = np.zeros(number_of_steps + 1)
state_values = np.zeros((2, number_of_steps + 1))

time_values = initial_time
state_values = initial_prey
state_values = initial_predators [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/56609371/61339db0-ebc1-4a98-a32d-e7a55fee2b78/mth3007b-lecture-1.md)

for step_index in range(number_of_steps):
    current_time = time_values[step_index]
    current_state = state_values[:, step_index]
    state_values[:, step_index + 1] = current_state + time_step * system_derivative(current_time, current_state)
    time_values[step_index + 1] = current_time + time_step

plt.plot(time_values, state_values, label="Prey (x)")
plt.plot(time_values, state_values, label="Predators (y)") [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/56609371/61339db0-ebc1-4a98-a32d-e7a55fee2b78/mth3007b-lecture-1.md)
plt.xlabel("Time")
plt.ylabel("Population")
plt.legend()
plt.title("Lotka-Volterra Predator-Prey (Explicit Euler)")
plt.show()
```

> [!warning] The stable population orbits become **unstable** for too large a timestep - conditional
> stability of explicit Euler manifesting in the vector case exactly as it did for a scalar ODE.

---

## Pre-Lecture Notes from [[mth3007b lecture notes 4.pdf|University Notes]]

- Stability of ODEs and numerical methods.
- Convergence, consistency, and the Lax Equivalence Theorem.
- The Richardson method and why symmetry alone doesn't guarantee stability.
- Generalising single-variable ODE methods to coupled systems of ODEs.
- Predator-prey (Lotka-Volterra) equations as a worked example.
