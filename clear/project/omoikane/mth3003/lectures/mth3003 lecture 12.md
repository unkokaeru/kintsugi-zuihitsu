# MTH3003 Lecture 12

This lecture continues our study of $S_n$ by introducing the **signature function**, which measures whether a permutation is "even" or "odd". We connect this to the cycle structure from last time and prepare the ground for defining the **alternating group** via the kernel of the signature homomorphism.

## The Signature Function via a Special Polynomial

We work in the symmetric group **symmetric group|$S_n$** acting on variables $x_1, x_2, \dots, x_n$ by permuting indices: for $g \in S_n$ we define $g x_k = x_{gk}$.

### The Vandermonde-type Polynomial

Define the polynomial

$$
\Delta = \prod_{i<j} (x_i - x_j)
= ((x_1 - x_2)\cdots(x_1 - x_n))((x_2 - x_3)\cdots(x_2 - x_n))\cdots((x_{n-1} - x_n)).
$$

This is a product over all unordered pairs $\{i,j\}$ with $i<j$, and in small cases we can write it explicitly.

> [!example]
> In $S_3$ we have
> $\Delta = (x_1 - x_2)(x_1 - x_3)(x_2 - x_3)$.

A permutation $g \in S_n$ acts on $\Delta$ by sending each $x_k$ to $x_{gk}$, hence $\Delta$ is carried to another polynomial with the same factors, but possibly in a different order and with some factors $(x_i - x_j)$ flipped to $(x_j - x_i)$.

### Definition of the Signature

The key fact is that **every** permutation sends $\Delta$ either to itself or to its negative.

Formally:

> [!important]
> **Definition (Signature function).** Let $g \in S_n$. Consider the action of $g$ on $\Delta$:
> - If $g$ maps $\Delta$ to $\Delta$, define $\sigma(g) = 1$.
> - If $g$ maps $\Delta$ to $-\Delta$, define $\sigma(g) = -1$.
> We call $\sigma \colon S_n \to \{1,-1\}$ the **signature function** on $S_n$, and say $g$ is **even** if $\sigma(g) = 1$ and **odd** if $\sigma(g) = -1$.

So $\sigma$ partitions $S_n$ into the even and odd permutations, and we will later see that the even ones form a very important subgroup.

> [!example]
> In $S_3$:
> - $e$ sends $\Delta$ to $\Delta$ so $\sigma(e) = 1$.
> - $(1\,2)$ sends $(x_1 - x_2)$ to $(x_2 - x_1)$ and fixes the other factors, so overall $\Delta \mapsto -\Delta$, hence $\sigma((1\,2)) = -1$.
> - $(1\,3)$ similarly sends $\Delta$ to $-\Delta$, so $\sigma((1\,3)) = -1$.

At this stage, the definition is conceptually nice but computationally horrible: we do not want to recompute the image of $\Delta$ every time we meet a permutation.

---

## Signature as a Homomorphism

A crucial structural property is that the signature function respects the group operation.

> [!important]
> **Proposition.** The set $\{1,-1\}$ forms a group under multiplication, and the function $\sigma \colon S_n \to \{1,-1\}$ is a group homomorphism.

**Sketch of the proof.** Fix $g,h \in S_n$. Since $\sigma(g) \in \{1,-1\}$, we have

$$
(gh)\Delta = g(h\Delta)
= g(\sigma(h)\Delta)
= \sigma(h) g(\Delta)
= \sigma(h)\sigma(g)\Delta
= \sigma(g)\sigma(h)\Delta.
$$

By definition of $\sigma$, this implies $\sigma(gh) = \sigma(g)\sigma(h)$, so $\sigma$ is a homomorphism.

This is the philosophical "point": the signature is not just a random $\pm 1$ label, it is a **group homomorphism** with a kernel that will turn out to be the alternating group.

---

## Computing Signatures Using Cycle Decompositions

So far the definition is in terms of how $g$ acts on $\Delta$, which is not convenient for actual calculations. We now use the **cycle notation** description of permutations to get a closed formula.

Let $g \in S_n$ and write it as a product of disjoint cycles

$$
g = c_1 c_2 \cdots c_m,
$$

where cycle $c_i$ has length $r_i$ for $i = 1,\dots,m$.

> [!important]
> **Corollary (Very important).** For a cycle $c_i$ of length $r_i$ we have
> $\sigma(c_i) = (-1)^{r_i - 1}$,
> and hence
> $\sigma(g) = \sigma(c_1)\sigma(c_2)\cdots\sigma(c_m)
> = (-1)^{r_1-1} \cdots (-1)^{r_m-1}$.

So **each $r_i$-cycle is odd if $r_i$ is even, and even if $r_i$ is odd**, and the signature of $g$ is the product of these contributions.

> [!example]
> Let $g = (1\,5\,7\,4\,2)(1\,2\,9)$.
> Then the cycle lengths are $5$ and $3$, so
> $\sigma(g) = (-1)^{5 - 1}(-1)^{3 - 1} = 1$,
> meaning $g$ is even.

This formulation makes it **very** easy to compute signatures once we know the cycle shape of a permutation.

---

## Behaviour under Inverses and Dependence on Cycle Shape

We next understand how the signature behaves when we invert a permutation and what data it depends on.

> [!important]
> **Proposition.** If $g \in S_n$ is a permutation, then
> $\sigma(g^{-1}) = \sigma(g)$.

The proof is given on the handout and runs first for cycles, then extends to permutations written as products of disjoint cycles.

- A cycle $c$ of length $r$ has signature $\sigma(c) = (-1)^{r-1}$.
- Its inverse $c^{-1}$ is just the same cycle written backwards, so still has length $r$, hence $\sigma(c^{-1}) = (-1)^{r-1} = \sigma(c)$.
- For $g = c_1 c_2 \cdots c_m$, we have $g^{-1} = c_1^{-1} c_2^{-1} \cdots c_m^{-1}$, and the homomorphism property then yields $\sigma(g^{-1}) = \sigma(g)$.

> [!note]
> The signature of a permutation depends only on its **cycle type|cycle shape**, i.e. the multiset of cycle lengths. Two permutations with the same cycle shape have the same signature.

This is immediate from the formula $\sigma(g) = \prod_i (-1)^{r_i-1}$, which only "sees" the lengths $r_i$.

---

## Worked Examples with Signatures

The handout provides a list of explicit examples to build intuition for even and odd permutations.

> [!example]
> Let $g = (1\,7\,3\,4\,2)(9\,5\,6)(8\,11) \in S_{12}$.
> The cycle lengths are $5, 3, 2$, so
> $\sigma(g) = (-1)^{5-1}(-1)^{3-1}(-1)^{2-1} = -1$,
> hence $g$ is odd.

> [!example]
> Let $h = (1\,2\,3) \in S_{12}$.
> This is a single $3$-cycle, so
> $\sigma(h) = (-1)^{3-1} = 1$,
> hence $h$ is even.

When computing the signature of a product $gh$, we can either explicitly write $gh$ as a product of disjoint cycles and then apply the formula, or (preferably) use the homomorphism property.

> [!example]
> Consider $g,h$ as above and compute $gh$.
> 1. First write $gh$ as a product of disjoint cycles:
> $gh = (1\,7\,3\,4\,2)(9\,5\,6)(8\,11)(1\,2\,3)
> = (2\,4)(3\,7)(5\,6\,9)(8\,11)$,
> so
> $\sigma(gh) = (-1)^{2-1}(-1)^{2-1}(-1)^{3-1}(-1)^{2-1} = -1$,
> and $gh$ is odd.
> 2. Alternatively, using the homomorphism property:
> $\sigma(gh) = \sigma(g)\sigma(h) = (-1)(1) = -1$,
> again showing $gh$ is odd.

Two further quick consequences are highlighted:

- Every $3$-cycle is even, since $\sigma((a\,b\,c)) = (-1)^{3-1} = 1$.
- Any product of even permutations is even, because the product of $1$'s in $\{1,-1\}$ is still $1$.

These become very useful when recognising elements of the alternating group later.

---

## Pre-Lecture Notes from Mth3003 Lecture Notes 12.pdf|University Notes

- Action of $S_n$ on variables $x_1, \dots, x_n$ by $g x_k = x_{gk}$, setting up the polynomial viewpoint.
- Definition of the Vandermonde-like polynomial $\Delta = \prod_{i<j} (x_i - x_j)$ and observation that any $g \in S_n$ sends $\Delta$ to either $\Delta$ or $-\Delta$.
- Definition of the **signature function** $\sigma \colon S_n \to \{1,-1\}$, classifying permutations as even or odd depending on the image of $\Delta$.
- Proof that $\sigma$ is a group homomorphism, via the calculation $(gh)\Delta = \sigma(g)\sigma(h)\Delta$.
- Formula for the signature of a cycle: a cycle of length $r$ has signature $\sigma(c) = (-1)^{r-1}$, giving $\sigma(g)$ as a product over the cycle lengths in the disjoint cycle decomposition.
- Consequences: signature depends only on the cycle shape; inverse permutations have the same signature; every $3$-cycle is even; products of even permutations remain even.
- Multiple worked examples in $S_{12}$ illustrating how to compute signatures directly from cycle decompositions and using the homomorphism property for products.
- Next time we will use the signature homomorphism to define and study the **alternating group|alternating group $A_n$** as the kernel of $\sigma$, and explore its basic properties and importance.
