# Formalising the Inca Civilisation's Record System

## 1. Choosing the Primitive Elements

There are a few knot types in the Inca Civilisation used to represent digits:

- **Long knots**: $L_{k}$, where $2\leq k\leq 9$ is the number of half-loops. These are equal to the digit $k$ directly.
- **Single knots**: $S_{m}$, where $1\leq m\leq 9$ is the number of knots in a cluster. These are equal to the digit $m$ directly.
- **Figure-eight knots**: $E$, which is a special case representing the digit 1. Interchangeable with $S_{1}$.
- **Absence of knot**: digit 0.

This alphabet, $\Sigma$, is hence…

$$
\Sigma=\{ E,L_{2},\dots,L_{9},S_{1},\dots,S_{9} \}\cup \{ \emptyset \}:|\Sigma|=19
$$

For now, we'll exclude the metadata of what is being recorded, such as cord colour.

## 2. Defining the Set of Configurations

Let the order of the knots (vertical position $j$ from the bottom) be given by $P=\mathbb{N}_{0}=\{ 0,1,2,\dots \}$, such that the units are represented by 0, then tens by 1, etc.

A cord configuration $C$ is then a finite function $C:P\to \Sigma$, with knots up to some max position: $C(j)=\emptyset$ for large $j$, due to finite support.

The set of all cords, $\text{Cord}=\{ \text{finite partial functions }P\to \Sigma \}$, is hence countable, like finite sequences in $\Sigma^\mathbb{N}$ ending with $\emptyset$$s$.

## 3. Defining the Valuation Operator

We can then map each cord to a number via the homomorphism $v : \text{Cord}\to \mathbb{N}_{0}$ (the natural numbers excluding 0, i.e. the countable numbers)...

- The digit function $d:\Sigma\to \{ 0,1,\dots,9 \}$:
	- $d(\emptyset)=0$,
	- $d(L_{k})=k:k=2..9$,
	- $d(S_{m})=m:m=1..9$,
	- $d(E)=1$.
- Hence, the value function $v(C)=\sum_{j\in P}d(C(j))*10^j$.

This is then well-defined (uniquely decoding) and surjective onto $\mathbb{N}_{0}$, even if not most efficient.

## 4. Specifying Operations

Now that we have values, we can operate between them, just as with $\mathbb{N}_{0}$ and $+$/$\times$. Since our set isn't injective, though - as we can have multiple encodings for the same $v$, e.g., $S_{1}=E$ -, we must operate on values...

- **Addition**: For C1 and C2, align positions and then merge clusters. That is, sum the digits with carry: e.g., $d_{1}+d_{2} \geq10 → L_{d_{1}+d_{2}-10}\\text{}{ at next pos} + S_1$