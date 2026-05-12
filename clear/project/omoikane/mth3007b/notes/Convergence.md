# Convergence

A numerical algorithm **converges** if the numerical solution approaches the exact solution as the step size $dt \to 0$.

Formally, a method converges if

$$
\max_i |y_i - y(t_i)| \to 0 \quad \text{as } dt \to 0
$$

The rate at which this occurs is the [[Order of convergence]].

## Consistency

A method is **consistent** if the exact solution satisfies the numerical scheme as $dt \to 0$. Informally, the discretisation must become exact in the limit of infinitely fine resolution.

## Relationship to Stability

Convergence, consistency, and [[Stability of a method|stability]] are linked by the [[Lax Equivalence Theorem]]:

$$
\text{consistent} + \text{stable} \iff \text{convergent}
$$

This is useful because consistency and stability are often easier to check individually than convergence directly. Proving stability via the amplification factor and checking that the [[Local truncation error]] vanishes as $dt \to 0$ (consistency) together guarantee convergence.

[[Lax Equivalence Theorem]] | [[Stability of a method]] | [[Order of convergence]] | [[Local truncation error]] | [[Global truncation error]]
