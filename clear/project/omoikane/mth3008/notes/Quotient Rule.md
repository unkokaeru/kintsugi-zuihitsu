# Quotient Rule

> [!tip] Relevant parts to questions...
> - Spotting when to use it: you are given that some contraction $T_{ij}b_{j}$ (or similar) is a tensor for **any** vector $\mathbf{b}$, and asked to show $T_{ij}$ itself is a tensor.
> - The key phrase is "for **arbitrary** $\mathbf{b}$" - that is what lets you cancel $b_{m}'$ from both sides.
> - Reads as a "division" because you are dividing through by an arbitrary tensor to recover $T$.

> [!important] Quotient Rule (Lemma)
> Let $T_{ij}$ be a quantity such that, for **every** vector $\mathbf{b}$, the contraction $a_{i}=T_{ij}b_{j}$ is a vector. Then $T_{ij}$ is a rank-2 [[Tensor Transformation Rule]].

The generalisation is immediate: if contracting an unknown quantity against an **arbitrary** tensor produces a tensor, then the unknown quantity is itself a tensor of the appropriate rank.

## Proof

Collect the three assumptions:

- **(A1)**::$b_{j}=L_{mj}b_{m}'$, since $\mathbf{b}$ is a vector.
- **(A2)**::$a_{k}=T_{kj}b_{j}$ holds in *every* coordinate system.
- **(A3)**::$a_{i}'=L_{ik}a_{k}$, since $\mathbf{a}$ is a vector.

Writing $a_{i}'$ two ways, first via (A3)→(A2)→(A1):

$$
a_{i}'=L_{ik}a_{k}=L_{ik}T_{kj}b_{j}=L_{ik}T_{kj}L_{mj}b_{m}'=L_{ik}L_{mj}T_{kj}b_{m}'
$$

Second, by applying (A2) in the rotated frame:

$$
a_{i}'=T_{im}'b_{m}'
$$

Subtracting:

$$
(T_{im}'-L_{ik}L_{mj}T_{kj})b_{m}'=0
$$

Because $\mathbf{b}$ is **arbitrary**, we may choose $b_{m}'\neq 0$, forcing the bracket to vanish:

$$
\boxed{T_{im}'=L_{ik}L_{mj}T_{kj}}
$$

So $T_{ij}$ obeys the rank-2 tensor transformation rule. ✓

## Properties

- **Arbitrariness is essential**::if $\mathbf{b}$ were fixed, you could only conclude that $T$ agrees with its transform *on that one vector*, not that it transforms correctly in general.
- **Generalises to any rank**::if $T_{ij\dots k}b^{k}c^{j}\dots$ is a tensor for arbitrary $\mathbf{b},\mathbf{c},\dots$, then $T_{ij\dots k}$ is.
- **The "quotient" analogy**::you are recovering $T$ from the product $Tb$ by "dividing" out an arbitrary $b$ - similar in spirit to the calculus quotient rule.

## Applications

1. **Proving tensor character indirectly**, when direct computation of the transformation is hard. Typical examples: the [[Metric Tensor]] from $A_{i}=g_{ik}A^{k}$, or the stress tensor in physics.
2. **Showing $\frac{\partial u_{i}}{\partial x_{j}}$ is a tensor**, via its action on arbitrary $\frac{\partial}{\partial x_{j}}$-vectors (though lecture 10 prefers the direct chain-rule proof).
3. **Inferring rank from contracted rank**: if contracting with a rank-$p$ tensor drops you to rank $q$, the original had rank $p+q$.

> [!warning] Needs genuine arbitrariness
> The rule **fails** if $\mathbf{b}$ is restricted (e.g., to a symmetric or traceless class). The whole argument hinges on being able to pick any $\mathbf{b}$ in the rotated frame.

> Contract with anything, get a tensor → you started with a tensor.
