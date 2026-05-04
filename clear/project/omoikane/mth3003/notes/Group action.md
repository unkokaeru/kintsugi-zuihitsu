# Group action

A **group action** of a group $G$ on a set $X$ is a map $\lambda\colon G\to\mathrm{Sym}(X)$ - equivalently, a function $G\times X\to X$, $(g,x)\mapsto \lambda(g)x$ - satisfying the two axioms

> [!important]
> 1. **Identity:** $\lambda(e)x=x$ for all $x\in X$.
> 2. **Compatibility:** $\lambda(gh)x=\lambda(g)(\lambda(h)x)$ for all $g,h\in G$ and $x\in X$.

When such a $\lambda$ exists, $X$ is called a **$G$-set**.

## Two Equivalent Formulations

The conditions above are equivalent to: $\lambda\colon G\to\mathrm{Sym}(X)$ is a [[Homomorphism]] from $G$ to the symmetric group of $X$. This is the modern viewpoint - group actions = homomorphisms into permutation groups.

## Standard Examples

- **Regular action** of $G$ on itself: $\lambda(g)x=gx$. Always transitive, stabiliser is trivial.
- **Conjugation action** of $G$ on itself: $\lambda(g)x=gxg^{-1}$. Stabiliser is the centraliser; orbits are conjugacy classes.
- **Symmetric group on $\{1,\ldots,n\}$**: $\lambda(g)i=g(i)$ - the natural permutation action.
- **Dihedral group on the corners of an $n$-gon**: rotations and reflections permute the labelled vertices.

## Key Constructions

- **[[Orbit]]** of $x$: $Gx=\{\lambda(g)x:g\in G\}\subseteq X$.
- **[[Stabiliser]]** of $x$: $\mathrm{Stab}_{G}(x)=\{g\in G:\lambda(g)x=x\}\leq G$.
- Orbits **partition** $X$.

## Key Theorems

- **[[Orbit-Stabiliser theorem]]**: $|Gx|=|G|/|\mathrm{Stab}_{G}(x)|$ (for finite $G$).
- **[[Cayley's theorem]]**: every group is a permutation group via the regular action.
- **[[Orbit counting theorem]]** (Burnside / Cauchy-Frobenius): $\#\text{orbits}=\frac{1}{|G|}\sum_{g}|\mathrm{Fix}_{X}(g)|$.

## Transitive vs Faithful Actions

- **Transitive**: there's a single orbit, $Gx=X$ for some (equivalently, every) $x$.
- **Faithful**: $\lambda$ is injective, i.e. only the identity fixes everything.

The kernel of an action is the set of group elements fixing every point of $X$ - the kernel of $\lambda$ as a homomorphism. A faithful action has trivial kernel.
