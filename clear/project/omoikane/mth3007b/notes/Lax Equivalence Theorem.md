# Lax Equivalence Theorem

For a well-posed initial-boundary-value problem, a consistent finite-difference method is **convergent** if and only if it is **stable**:

$$
\boxed{\text{Consistency}+\text{Stability}\;\Longleftrightarrow\;\text{Convergence}.}
$$

## Definitions

- **Consistency**: the exact solution of the PDE/ODE satisfies the discrete scheme in the limit $\Delta t\to 0$ (and $\Delta x\to 0$ for PDE schemes). Equivalently, the [[Local truncation error]] tends to zero faster than $\Delta t$.
- **Stability**: numerical errors don't grow without bound under the scheme - see [[Stability of a method]].
- **[[Convergence]]**: numerical solution approaches the exact solution as $\Delta t\to 0$.

## Why It Matters

The theorem reduces the (hard) question "is this scheme convergent?" to two easier checks. Consistency is direct - compare the scheme to a Taylor expansion of the PDE. Stability is harder but tractable - apply [[von Neumann stability]] analysis or compute amplification factors. If both hold, convergence follows automatically.

## Caveats

- The theorem assumes the underlying problem is **well-posed** - solutions exist, are unique, and depend continuously on the data. Ill-posed problems (e.g. backward heat equation) defeat numerical methods regardless of consistency or stability.
- Applies to **linear** schemes. Nonlinear analogues exist but are case-by-case.
- "Stability" here is in the Lax sense - boundedness of numerical solutions for fixed final time as the grid is refined. Distinct from stiffness considerations.

## Implications

| Method | Consistent? | Stable? | Convergent? |
|---|---|---|---|
| [[FTCS scheme]] (with $r\leq 1/2$) | ✓ | ✓ | ✓ |
| FTCS (with $r>1/2$) | ✓ | ✗ | ✗ - solution blows up |
| [[BTCS scheme]] | ✓ | ✓ (always) | ✓ |
| Forward in time, forward in space | ✗ | - | ✗ |

Hence the universal rule: check consistency, check stability, then convergence is guaranteed.
