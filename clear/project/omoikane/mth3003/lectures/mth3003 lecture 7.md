# MTH3003 Lecture 7

Following on from previous lectures, we can continue building on our knowledge of subgroups by exploring normal subgroups, cosets, simplicity, and a recap of Lagrange's Theorem.

## Cosets

Let $H \leq G$ and $g \in G$. A **left coset** of $H$ in $G$ is something of the form:

$$
gH = \{gh : h \in H\}
$$

There are also right cosets of the form $Hg$, but they behave similarly, just with different notation. The set of all cosets of $H$ in $G$ is denoted by $G/H$, so $G/H = \{gH : g \in G\}$.

> [!warning]
> In general, $G/H$ is not a group itself!

The number of distinct cosets of $H$ in $G$ is called the **index** of $H$ in $G$ and is denoted $[G:H]$.

We also know a few equivalent properties for groups $H \leq G$ with $a,b \in G$:

1. $a^{-1}b \in H$
2. $aH = bH$
3. $a \in bH$
4. $a = bh$ for some $h \in H$

From this, we can establish the following corollary: for all $a,b \in G$, cosets are either disjoint ($aH \cap bH = \emptyset$) or equal ($aH = bH$). Every element of $G$ lies in a coset of $H$, and for all $g \in G$, $|H| = |gH|$.

## Normal Subgroups

A subgroup $N$ of a group $G$ is **normal** if $g^{-1}kg \in N$ for all $k \in N$ and all $g \in G$. The notation we use is $N \unlhd G$.

There are a few equivalent ways to define this:

- $N \unlhd G$ means that for all $g \in G$, we have $g^{-1}Ng = N$.
- $N \unlhd G$ means that for all $g \in G$, we have $Ng = gN$.

Normal subgroups are incredibly useful because we can "divide" by them and still get a group, creating what are called **quotient groups**.

> [!example] Examples of Normal Subgroups
> 1. $\langle e_{G} \rangle \unlhd G$
> 2. $G \unlhd G$
> 3. If $G$ is Abelian and $H \leq G$, then $H \unlhd G$. (All subgroups of an Abelian group are normal).

> [!warning]
> When checking if $H$ is normal in $G$, you must show that $g^{-1}hg \in H$ for *every* element $h \in H$ and *every* $g \in G$. Don't fool yourself by accidentally assuming $G$ is Abelian!

## Simplicity

Groups in which no proper nontrivial subgroup is normal are special, and play a large role in group theory.

A group $G$ is **simple** if its only normal subgroups are the trivial group $\langle e_{G} \rangle$ and $G$ itself. For example, any cyclic group of prime order, $C_{p}$, is simple.

When working with normal subgroups, we often use the **Order Switching Lemma**. Let $N \unlhd G$. Suppose $g \in G$ and $k \in N$. Then there exist $k', k'' \in N$ such that:

$$
gk = k'g \quad \text{and} \quad kg = gk''
$$

> [!note] This lemma only works when one of the groups is normal!

Furthermore, if $H \leq G$ and $N \unlhd G$, we can prove that $HN = NH$, $H \cap N \unlhd H$, and $HN \leq G$.

## Lagrange's Theorem Recap

Let $H$ be a subgroup of a finite group $G$. **Lagrange's Theorem** states that:

$$
|G| = [G:H] \cdot |H|
$$

In particular, the order of $H$ divides the order of $G$.

> [!important] Cauchy's Theorem (Partial Converse to Lagrange)
> If $G$ is a finite group and $p$ is a prime number dividing $|G|$, then $G$ contains a subgroup of order $p$.

***

## Pre-Lecture Notes from [[mth3003 lecture notes 7.pdf|University Notes]]

- Definitions and examples of left cosets ($gH$) and the set of all cosets $G/H$.
- Equivalent properties of cosets and the proof that cosets are either disjoint or equal.
- Definition of a normal subgroup ($N \unlhd G$) using $g^{-1}kg \in N$.
- Introduction to simple groups (groups whose only normal subgroups are trivial or the group itself).
- The Order Switching Lemma for manipulating elements in normal subgroups.
- Recap of Lagrange's Theorem ($|G| = [G:H] \cdot |H|$) and an introduction to Cauchy's Theorem.
