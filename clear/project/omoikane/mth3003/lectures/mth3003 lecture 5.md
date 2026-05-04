# MTH3003 Lecture 5

Following on from permutations and subgroups, we can look at some groups that arise from geometry. Specifically, we can look at the symmetries of regular $n$-gons, which form an important class of groups known as **[[dihedral group]]**.

## Symmetries of a Square

We will start by looking at a regular 4-gon (a square) drawn in the Euclidean plane with its centre at the origin. By looking at the operations we can perform without changing the square, we find only 8 symmetries:

- 4 reflections (through 4 lines of reflectional symmetry)
- 4 anticlockwise rotations (by angles $0, \frac{\pi}{2}, \pi, \frac{3\pi}{2}$)

Because these operations send corners to corners, we can label the corners $\{1, 2, 3, 4\}$ and view these symmetries as permuting the corners. This set of symmetries, under the operation of combining symmetries, forms a group called the **symmetry group** of the square, or the **dihedral group of order 8**. Because it permutes four corners, we can think of it as a subgroup of $S_{4}$.

## Dihedral Groups

We can generalise this to any regular $n$-gon for $n \geq 3$. Labeling the corners anticlockwise $1, 2, \dots, n$, we can make four key observations:

1. The $n$-gon has at most $2n$ symmetries.
2. It has at least $n$ lines of reflectional symmetry.
3. It has at least $n$ rotational symmetries (permuting corners as $(1\\,\dots\,n)$).
4. No rotational symmetry is a reflectional symmetry, and vice versa.

> [!important] The Dihedral Group $D_{2n}$
> The symmetry group of a regular $n$-gon with corners labelled $1, 2, \dots, n$ has $2n$ elements and is written $D_{2n} = \{e, \rho, \rho^2, \dots, \rho^{n-1}, \sigma_{1}, \dots, \sigma_{n}\}$, where $\rho = (1\\,\dots\,n)$ and the $\sigma_{i}$ are reflections. This is the **dihedral group of order $2n$**, which is a subgroup of $S_{n}$.

We can prove this is a group by applying the Quick Subgroup Test: the identity $e \in D_{2n}$, it is closed (applying two symmetries gives a symmetry), and every element has an inverse (reflections are their own inverse, and $\rho^{-i} = \rho^{n-i}$).

*Note: Some mathematicians and textbooks use $D_{n}$ instead of $D_{2n}$ to refer to this same group. Most use $D_{2n}$, but it's important to be careful.*

---

## Pre-Lecture Notes from [[mth3003 lecture notes 5.pdf]]

- Groups arising from geometry - looking at the symmetries of regular $n$-gons.
- The dihedral group of order 8 (symmetries of a square), mapped to permutations in $S_4$.
- Generalised dihedral group $D_{2n}$ of order $2n$, defined by $n$ rotations and $n$ reflections.
- Proof that the number of symmetries of a regular $n$-gon is $2n$.
