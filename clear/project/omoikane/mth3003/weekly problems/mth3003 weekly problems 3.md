# MTH3003 Weekly Problems 3

> **Original Documents**: [[mth3003 weekly problem sheet 3.pdf|Problem Sheet]] / `[[mth3003 weekly problem sheet 3 handwritten solutions.pdf|My Handwritten Solutions]]` / [[mth3003 weekly problem sheet 3 solutions.pdf|Provided Solutions]]
>
> **Vibes**: Medium difficulty, ramp up from Week 1 permutations - now geometric intuition for [[dihedral group]], cycle computations on shapes, first proofs using orders/inverses. Drawing diagrams essential for $D_{10}$/shapes.
>
> **Used Techniques**:
>   - [[Product of Permutations]] for equations, verifying forms like $\sigma\rho^i$.
>   - [[Permutation#Quick Inverse Proposition]] implicitly via $o(\sigma)=2$.
>   - Cycle notation for symmetries (rotations/reflections in $D_{2n}$).
>   - Relation $\rho\sigma=\sigma\rho^{-1}$ (L5 – Dihedral groups).

***

## 3.1. Solving a Permutation Equation

> [!question]
> Find a permutation $\sigma \in S_9$ that satisfies the following equation:
>
> $$
> (1\,2\,3)(4\,5\,6\,7\,8) = (1\,5\,7\,8)\sigma(1\,3\,4)
> $$

Right-multiply both sides by $(1\,3\,4)^{-1}=(1\,4\,3)$: $(1\,2\,3)(4\,5\,6\,7\,8)(1\,4\,3)=(1\,5\,7\,8)\sigma$.

Then left-multiply by $(1\,5\,7\,8)^{-1}=(8\,7\,5\,1)$: $\sigma=(8\,7\,5\,1)(1\,2\,3)(4\,5\,6\,7\,8)(1\,4\,3)=\boxed{(2\,3)(4\,8)(5\,6)}$.

Verified: $(1\,5\,7\,8)(2\,3)(4\,8)(5\,6)(1\,3\,4)=(1\,2\,3)(4\,5\,6\,7\,8)$.

***

## 3.2. Identities in the Dihedral Group $D_{2n}$

> [!question]
> Consider the dihedral group $D_{2n}$. In the usual notation for dihedral groups, $\rho$ is an anticlockwise rotation by $\frac{2\pi}{n}$ and $\sigma$ is a reflection.
>
> Prove that $\rho\sigma = \sigma\rho^{-1} = \sigma\rho^{n-1}$.
>
> *Hint: What is the order of $\rho\sigma$? What is the inverse of $\rho\sigma$?*

Geometrically, $\rho\sigma$ is a reflection ($o(\rho\sigma)=2$), so $(\rho\sigma)^2=e$ implies $\rho\sigma\rho\sigma=e$.

Left-multiply by $\rho^{-1}\sigma^{-1}$: $\rho\sigma=\sigma^{-1}\rho^{-1}$. Since $o(\sigma)=2$, $\sigma^{-1}=\sigma$, so $\rho\sigma=\sigma\rho^{-1}$.

As $\rho\rho^{n-1}=\rho^n=e$, $\rho^{-1}=\rho^{n-1}$, hence $\rho\sigma=\sigma\rho^{n-1}$.

***

## 3.3. Structure of the Dihedral Group $D_{10}$

> [!question]
> Consider the dihedral group $D_{10}$. It is the collection of symmetries of a pentagon.
>
> In the usual notation for dihedral groups, label the corners $1\text{--}5$ anticlockwise and take $\rho$ to be an anticlockwise rotation by $\frac{2\pi}{5}$, and $\sigma$ to be a reflection through the line of symmetry that passes through the corner labelled $1$.
>
> 1. Write down, using cycle notation, the elements in $D_{10}$.
> *Hint: draw a diagram*
> 2. Verify that the elements of $D_{10}$ can be written as $\{e, \rho, \rho^2, \rho^3, \rho^4, \sigma, \sigma\rho, \sigma\rho^2, \sigma\rho^3, \sigma\rho^4\}$, where all the rotations are of the form $\rho^i$ and all the reflections are of the form $\sigma\rho^i$.
> 
> **Remark**: In the near future, we will use Lagrange's Theorem to quickly prove that every dihedral group $D_{2n}$ can be written as $\{e, \rho, \rho^2, \dots, \rho^{n-1}, \sigma, \sigma\rho, \sigma\rho^2, \dots, \sigma\rho^{n-1}\}$, where the rotations are of the form $\rho^i$ and the reflections are of the form $\sigma\rho^i$.

1. Rotations: $e$, $\rho=(1\,2\,3\,4\,5)$, $\rho^2=(1\,3\,5\,2\,4)$, $\rho^3=(1\,4\,2\,5\,3)$, $\rho^4=(1\,5\,4\,3\,2)$.
   Reflections: $\sigma=(2\,5)(3\,4)$, $(1\,3)(4\,5)$, $(1\,5)(2\,4)$, $(1\,2)(3\,5)$, $(1\,4)(2\,3)$.
2. Compute: $\sigma\rho=(1\,5)(2\,4)$, $\sigma\rho^2=(1\,4)(2\,3)$, $\sigma\rho^3=(1\,3)(4\,5)$, $\sigma\rho^4=(1\,2)(3\,5)$. Matches reflections; rotations match powers. Thus, $D_{10}=\{e,\rho,\rho^2,\rho^3,\rho^4,\sigma,\sigma\rho,\sigma\rho^2,\sigma\rho^3,\sigma\rho^4\}$.

***

## 3.4. Symmetry Group of a Labelled Shape

> [!question]
> Consider the following shape $S$ (drawn in the Euclidean plane with centre at the origin $O$), whose corners have been labelled $1, 2, \dots, 8$ as shown (on original problem sheet).
>
> The symmetry group of isometries of $S$ can be thought of as a subgroup of $S_8$. Write down (in cycle notation) all elements in the symmetry group of $S$.

Rotations (90° $\rho=(1\,3\,5\,7)(2\,4\,6\,8)$): $e$, $\rho$, $\rho^2=(1\,5)(3\,7)(2\,6)(4\,8)$, $\rho^3=(1\,7\,5\,3)(2\,8\,6\,4)$.

Reflections (through corners/edges): $(1\,2)(3\,8)(4\,7)(5\,6)$, $(1\,4)(2\,3)(6\,7)(5\,8)$, $(1\,6)(2\,5)(3\,4)(7\,8)$, $(1\,8)(2\,7)(3\,6)(4\,5)$.

$\boxed{\{e, (1\,3\,5\,7)(2\,4\,6\,8), (1\,5)(3\,7)(2\,6)(4\,8), (1\,7\,5\,3)(2\,8\,6\,4), (1\,2)(3\,8)(4\,7)(5\,6), (1\,4)(2\,3)(6\,7)(5\,8), (1\,6)(2\,5)(3\,4)(7\,8), (1\,8)(2\,7)(3\,6)(4\,5)\}}$ (preserves central square).

***

## 3.5. Constructing a Shape with $D_{12}$ Symmetry

> [!question]
> Draw an example of a shape $S$ that is not a hexagon, whose symmetry group of isometries is isomorphic to $D_{12}$.

$\boxed{\text{A regular hexagon with a square attached outwardly to each of its 6 edges}}$ (12 symmetries: 6 rotations, 6 reflections; not a plain hexagon).

***

## 3.6. Generating the Group $D_{10}$

> [!question]
> Let $\rho$ and $\sigma$ be (respectively) a nontrivial rotation and reflection in $D_{10}$. In lectures, we will soon see that $\langle\rho, \sigma\rangle$ means the smallest subgroup of $D_{10}$ containing both $\rho$ and $\sigma$.
>
> Using the following two facts, show that $\langle\rho, \sigma\rangle = D_{10}$.
>
> 1. $D_{10} = \{e, \rho, \rho^2, \rho^3, \rho^4, \sigma, \sigma\rho, \sigma\rho^2, \sigma\rho^3, \sigma\rho^4\}$
> 2. $\rho\sigma = \sigma\rho^{-1}$

Any $g\in\langle\rho,\sigma\rangle$ is $\rho^{n_1}\sigma^{k_1}\cdots\rho^{n_m}\sigma^{k_m}$. Using (2), commute $\rho$'s past $\sigma$'s: each $\sigma\rho^{n}=\rho^{-n}\sigma$ (iteratively), reducing to $\sigma^k\rho^n$.

Since $o(\rho)=5$, $o(\sigma)=2$, $k\equiv0,1\bmod2$, $n\equiv0.\bmod5$, so $\langle\rho,\sigma\rangle=\{e,\rho,\rho^2,\rho^3,\rho^4,\sigma,\sigma\rho,\sigma\rho^2,\sigma\rho^3,\sigma\rho^4\}=D_{10}$ by (1).
