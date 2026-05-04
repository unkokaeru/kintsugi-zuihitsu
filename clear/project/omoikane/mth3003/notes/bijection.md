# Bijection

A function $f\colon X\to Y$ is a **bijection** if it is both **injective** (one-to-one) and **surjective** (onto):

- **Injective**: $f(x_{1})=f(x_{2})\Rightarrow x_{1}=x_{2}$ - distinct inputs go to distinct outputs.
- **Surjective**: for every $y\in Y$ there exists $x\in X$ with $f(x)=y$ - every $y$ is hit.

Equivalently, $f$ is a bijection if it has a two-sided inverse $f^{-1}\colon Y\to X$ satisfying $f\circ f^{-1}=\mathrm{id}_{Y}$ and $f^{-1}\circ f=\mathrm{id}_{X}$.

For finite sets, $f\colon X\to Y$ is a bijection if and only if $|X|=|Y|$ and $f$ is either injective or surjective (the other condition follows automatically).

## In Group Theory

Bijections appear all over the course:

- A [[Permutation]] is a bijection from a set to itself.
- An [[Isomorphism]] is a bijective [[Homomorphism]].
- The map $g\mapsto \lambda(g)$ from a [[Group action]] is realised as a homomorphism into the symmetric group $\mathrm{Sym}(X)$ - itself a group of bijections.
