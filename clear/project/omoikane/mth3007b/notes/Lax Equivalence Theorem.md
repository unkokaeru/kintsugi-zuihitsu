# Lax Equivalence Theorem

The **Lax equivalence theorem** states that for a well-posed initial value problem and a consistent numerical method:

$$
\text{stable} \iff \text{convergent}
$$

In full: a consistent method is convergent if and only if it is stable.

## Why It Is Useful

[[Convergence]] is what we ultimately care about, but it is often difficult to prove directly. [[Stability of a method|Stability]] and consistency are each easier to verify:

- **Consistency**: check that the [[Local truncation error]] vanishes as $dt \to 0$ (typically by Taylor expanding the method).
- **Stability**: check that the amplification factor satisfies $|A| \leq 1$.

The Lax equivalence theorem lets us prove convergence by establishing these two properties separately, rather than estimating the global error directly.

Note: the theorem applies to well-posed problems, meaning the underlying ODE must itself be [[Stability of an ODE|stable]] (solutions don't blow up from small perturbations in initial conditions).

[[Convergence]] | [[Stability of a method]] | [[Stability of an ODE]] | [[Local truncation error]] | [[Order of convergence]]
