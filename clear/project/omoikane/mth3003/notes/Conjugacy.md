# Conjugacy

Two elements $x,y$ of a group $G$ are **conjugate** if there exists $g\in G$ with

$$
y=g^{-1}xg.
$$

Equivalently, $x,y$ lie in the same orbit of the **conjugation action** $\lambda(g)x=gxg^{-1}$ of $G$ on itself. The orbit of $x$ under conjugation is its **conjugacy class**:

$$
\mathrm{Cl}(x)=\{gxg^{-1}:g\in G\}.
$$

## Centraliser

The [[Stabiliser]] of $x$ under conjugation is the **centraliser**

$$
C_{G}(x)=\{g\in G:gx=xg\},
$$

the elements of $G$ that **commute** with $x$.

By the [[Orbit-Stabiliser theorem]]:

$$
|\mathrm{Cl}(x)|=|G|/|C_{G}(x)|.
$$

## Properties

- Conjugacy is an **equivalence relation** on $G$ - its equivalence classes partition $G$.
- The class of the identity is $\{e\}$.
- More generally, $x$ has a singleton class iff $x$ commutes with everything, i.e. $x\in Z(G)$ (the **centre**).
- Conjugate elements have the same **order**, the same cycle shape (in $S_{n}$), and the same characteristic polynomial (in $\mathrm{GL}$).

## Class Equation

Partitioning $G$ into conjugacy classes:

$$
|G|=|Z(G)|+\sum_{i}\frac{|G|}{|C_{G}(g_{i})|},
$$

summed over representatives $g_{i}$ of the **non-central** conjugacy classes. This is the **class equation** - the workhorse of much classification of finite groups (e.g. proving non-trivial centre for $p$-groups).

## In $S_{n}$: Cycle Shape

In the symmetric group, two permutations are conjugate iff they have the same **cycle shape**. For example:

- $(1\,2\,3)$ and $(4\,5\,6)$ are conjugate in $S_{6}$ (both 3-cycles, with the others fixed).
- $(1\,2)(3\,4)$ and $(1\,2\,3\,4)$ are **not** conjugate (different shapes).

Concretely: if $\pi=(a_{1}\,a_{2}\,\cdots\,a_{r})\cdots$ in $S_{n}$ and $g\in S_{n}$, then $g\pi g^{-1}=(g(a_{1})\,g(a_{2})\,\cdots\,g(a_{r}))\cdots$ - same shape, vertices relabelled.

## Normaliser

For a subset $S\subseteq G$, the **normaliser** is

$$
N_{G}(S)=\{g\in G:gSg^{-1}=S\}.
$$

For a subgroup $H\leq G$, $N_{G}(H)$ is the largest subgroup of $G$ in which $H$ is normal.

## Use in Sylow Theory

The proofs of [[Sylow's theorems]] act $G$ on the set of all Sylow $p$-subgroups by conjugation, and use the orbit-stabiliser correspondence with normalisers and centralisers.
