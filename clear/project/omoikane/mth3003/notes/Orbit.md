# Orbit

For a [[Group action]] of $G$ on a set $X$, and $x\in X$, the **orbit** of $x$ is

$$
\boxed{Gx=\{\lambda(g)x:g\in G\}\subseteq X.}
$$

The set of all images of $x$ under elements of $G$ - "everywhere $x$ can be moved to."

## Properties

1. Orbits **partition** $X$: either $Gx=Gy$ or $Gx\cap Gy=\emptyset$.
2. If $x,y$ are in the same orbit, $Gx=Gy$.
3. The action is **transitive** iff there is a single orbit (i.e. $Gx=X$).

(Property 1 means $X$ decomposes uniquely as $X=\mathrm{Orb}_{1}\sqcup\cdots\sqcup\mathrm{Orb}_{m}$.)

## Orbit Size: [[Orbit-Stabiliser theorem]]

$$
|Gx|=[G:\mathrm{Stab}_{G}(x)]=|G|/|\mathrm{Stab}_{G}(x)|\quad\text{(for finite }G\text{)}.
$$

So orbit sizes always divide $|G|$.

## Examples

- **Regular action** ($X=G$, $\lambda(g)x=gx$): single orbit $Gx=G$ - transitive.
- **Conjugation action** ($X=G$, $\lambda(g)x=gxg^{-1}$): orbits are **conjugacy classes**. The orbit of $e$ is $\{e\}$.
- **$S_{4}$ on $\{1,2,3,4\}$** by $\lambda(g)i=gi$: single orbit $\{1,2,3,4\}$ - transitive.
- **$D_{8}$ on cube corners** (split top/bottom): two orbits of size 4.
- **Cyclic group $\langle(1\,2\,3)(4\,5\,6)\rangle$ on $\{1,2,3,4,5,6\}$**: orbits $\{1,2,3\}$ and $\{4,5,6\}$.

## Orbit Representatives

A **set of orbit representatives** is a choice of one $x_{i}$ from each orbit. The orbits are then $\{Gx_{1},\ldots,Gx_{m}\}$, and any $G$-equivariant question can be reduced to questions about the representatives.
