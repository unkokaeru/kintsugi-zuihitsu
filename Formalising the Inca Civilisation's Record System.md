# Formalising the Inca Civilisation's Record System

## Choosing the Primitive Elements

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

## Defining the Set of Configurations

Let the order of the knots (vertical position $j$ from the bottom) be given by $P=\mathbb{N}_{0}=\{ 0,1,2,\dots \}$, such that the units are represented by 0, then tens by 1, etc.

A cord configuration $C$ is then a finite function $C:P\to \Sigma$, with knots up to some max position: $C(j)=\emptyset$ for large $j$, due to finite support.

The set of all cords, $\text{Cord}=\{ \text{finite partial functions }P\to \Sigma \}$, is hence countable, like finite sequences in $\Sigma^\mathbb{N}$ ending with $\emptyset$$s$.

## Defining the Valuation Operator

We can then map each cord to a number via the homomorphism $v : \text{Cord}\to$