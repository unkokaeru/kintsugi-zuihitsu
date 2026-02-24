# MTH3003 Lecture 8

Following on from [[mth3003 lecture 7|last lecture]], we can use our knowledge of Lagrange's theorem to prove a few more things about finite groups, and then apply it to the dihedral groups we looked at previously.

## Consequences of Lagrange's Theorem

We know from Lagrange's Theorem that if $H \leq G$ for a finite group $G$, then $|G| = [G:H] \cdot |H|$. We can easily deduce two corollaries from this:

1. The index of $H$ in $G$ is given by $[G:H] = \frac{|G|}{|H|}$.
2. For any element $g \in G$, its order $o(g)$ must divide $|G|$.

This is incredibly useful for disproving the existence of certain elements or subgroups within finite groups. For example, if we look at the dihedral group $D_{10}$ (which has order 10):

- It cannot contain an element of order $7$, because $7$ does not divide $10$.
- It cannot contain a subgroup of order $7$, for the exact same reason.

> [!warning]
> The converse statement to Lagrange's Theorem does *not* hold! Just because a number divides $|G|$, this does not guarantee that $G$ has a subgroup of that order. The smallest counterexample is the Alternating Group of degree 4 (order 12), which has no subgroup of order 6.

## Application: Understanding Dihedral Groups

Recall that the [[dihedral group]] $D_{2n} = \{e, \rho, \dots, \rho^{n-1}, \sigma_{1}, \dots, \sigma_{n}\}$, where $\rho = (1\\,\dots\,n)$ is a rotation and the $\sigma_{i}$ are reflections. We can use Lagrange's Theorem to simplify how we represent these reflections.

Let $C = \langle \rho \rangle = \{e, \rho, \dots, \rho^{n-1}\}$. This is a subgroup of $D_{2n}$ with size $|C| = n$. Because $|D_{2n}| = 2n$, we can calculate the index of $C$:

$$
[D_{2n}:C] = \frac{|D_{2n}|}{|C|} = \frac{2n}{n} = 2
$$

This means there are exactly two cosets of $C$ in $D_{2n}$. Let $\sigma = \sigma_{1}$. Because a reflection cannot be a rotation, $\sigma \notin C$. Therefore, the two cosets must be $C$ and $\sigma C$, giving us:

$$
D_{2n} = C \cup \sigma C
$$

Because all the reflections are not in $C$, they must all lie in $\sigma C$. This means every single reflection can be written in the form $\sigma \rho^i$. Thus, we can rewrite the entire group using only two generators:

$$
D_{2n} = \{e, \rho, \rho^2, \dots, \rho^{n-1}, \sigma, \sigma\rho, \sigma\rho^2, \dots, \sigma\rho^{n-1}\}
$$

### Combining Rotations and Reflections

This simplified list is great, but calculating products like $\rho\sigma$ requires a trick. Because $\rho\sigma$ reverses the order of corners, it must be a reflection, meaning it has order 2. Therefore, $(\rho\sigma)(\rho\sigma) = e$, which implies:

$$
\rho\sigma = (\rho\sigma)^{-1} = \sigma^{-1}\rho^{-1} = \sigma\rho^{-1} = \sigma\rho^{n-1}
$$

Using the rule $\rho\sigma = \sigma\rho^{-1}$, along with $\rho^n = e$ and $\sigma^2 = e$, we can simplify any combination of rotations and reflections into the standard form.

> [!example] Simplifying $\rho^3\sigma$
> We can move $\sigma$ to the left by pulling it through the $\rho$s, inverting them as we go:
> $\rho^3\sigma = \rho^2\sigma\rho^{-1} = \rho\sigma\rho^{-2} = \sigma\rho^{-3} = \sigma\rho^{n-3}$

> [!note] In cycle notation, if $\sigma$ is the line of reflection through corner 1, it looks like $\sigma = (2\,n)(3\,n-1)(4\,n-2)\dots$

***

## Pre-Lecture Notes from [[mth3003 lecture notes 8.pdf|University Notes]]

- Corollaries of Lagrange's Theorem: $[G:H] = |G|/|H|$ and $o(g)$ divides $|G|$.
- Warning that the converse of Lagrange's Theorem is false (Alternating Group of degree 4 is a counterexample).
- Application of Lagrange's Theorem to show that $D_{2n}$ can be partitioned into two cosets: rotations $C$ and reflections $\sigma C$.
- Redefining $D_{2n}$ using only generators $\rho$ and $\sigma$: $\{e, \rho, \dots, \rho^{n-1}, \sigma, \sigma\rho, \dots, \sigma\rho^{n-1}\}$.
- Calculating products using the core relation $\rho\sigma = \sigma\rho^{-1}$ to simplify combinations of rotations and reflections.
