# Formalising the Inca Civilisation's Record System

## Choosing the Primitive Elements

There are a few knot types in the Inca Civilisation used to represent digits:

- **Long knots**: $L_{k}$, where $2\leq k\leq 9$ is the number of half-loops. These are equal to the digit $k$ directly.
- **Single knots**: $S_{m}$, where $1\leq m\leq 9$ is the number of knots in a cluster. These are equal to the digit $m$ directly.
- **Figure-eight knots**: $E$, which is a special case representing the digit 1. Interchangeable with $S_{1}$.
- **Absence of knot**: digit 0.

This alphabet, $\Sigma$, is hence...

$$
\Sigma=\{ E,L_{2},\dots,L_{9},S_{1},\dots,S_{9} \}\cup \{ \emptyset \}:|\Sigma|=19
$$