# MTH3003 Lecture 2

> [!quote] …
> …

As discussed briefly in the [[mth3003 lecture 1|last lecture]], the set of all permutations of a set is a [[Group]], albeit not an Abelian (commutative) one, unless disjoint. To show these, we need to understand what the inverse of a cycle is…

## Quick Inverse Proposition

Let $X$ be a set and suppose $\sigma \in \text{Sym}(X)$. We know that we can write $\sigma$ as a product of disjoint cycles, $\sigma=c_{1} c_{2} \dots c_{n}$, hence:

1. The inverse of any cycle $(x_{1}\,x_{2}\,\dots\,x_{m})$ is $(x_{m}\,x_{m-1}\,\dots\,x_{1})$, and
2. $\sigma^{-1}=c_{1}^{-1}c_{2}^{-1}\dots c_{n}^{-1}$.

This can be proven directly.

## Groups

If we want to prove that the set $\text{Sym}(X)$ is a group, then we must recall the definition of a group...

A **group** is a set $G$ together with an operation $*$ on $G$ such that each of the following holds:

1. **Closure**: for all $\forall g,h\in G$, $g*h\in G$.
2. **Existence of an identity element**: $\exists e_{G} \in G$ such that for all $g \in G$, $g*e_{G}=e_{G}*g=g$.
3. **Existence of inverse elements**: For all $g \in G$ there exists an inverse element $g^{-1}\in G$ such that $g*g^{-1}=g^{-1}*g=e_{G}$.
4. **Associativity**: for all $g,h,k\in G$, $g*(h*k)=(g*h)*k$.
5. *Rarely, if Abelian, **Commutativity**: for all $g,h\in G$, $g*h=h*g$.*

Usually however, we don't write the operation $*$, instead $g*h$ would be written as $gh$. By definition, $g^0:=e_{G}$ for all $g\in G$.

Recall also that a **subgroup** $H$ of a group $G$ is just a subset of $G$ that is also a group under the operation of $G$. Also recall that if $G$ and $H$ are groups, then their direct product, or Cartesian product, $G\times H$ is also a group, where each element is operated on each other piecewise.

---

## Rough-Lecture Notes from [[mth3003 lecture notes 2.pdf|University Notes]]

*Didn't have access to lecture notes beforehand, so did rough notes during instead of pre-lecture notes - enjoy the yapping!*

![[mth3003 rough-lecture 2.pdf]]
