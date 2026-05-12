# Order of Convergence

**Order of convergence** describes how quickly a sequence of numerical approximations approaches the exact solution as the step size $dt \to 0$. If the error $E(dt)$ satisfies

$$
E(dt) = O(dt^p)
$$

then the method has order of convergence $p$.

This is closely related to the [[Order of a method]], which is defined in terms of the [[Global truncation error]]. A method of order $p$ converges at rate $p$: halving $dt$ reduces the error by a factor of $2^p$.

Convergence requires both [[Convergence|consistency and stability]] (see the [[Lax Equivalence Theorem]]).

[[Order of a method]] | [[Global truncation error]] | [[Convergence]] | [[Lax Equivalence Theorem]]
