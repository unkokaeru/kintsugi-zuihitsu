# MTH3003 Lecture 10

> [!quote] Simon Smith
> …

This lecture pushes further into **[[clear/project/omoikane/mth3003/lectures/isomorphism|isomorphisms]]**, treating them as the right notion of "sameness" for groups and then using that perspective to classify groups of prime order. We also see concrete examples and a full proof that any group of prime order is **[[cyclic group|cyclic]]** and hence isomorphic to a familiar model.

## Isomorphisms

We now formalise when two groups "are the same" from a structural point of view.

> [!important] Definition — Isomorphism
> A function $\theta \colon G \to H$ between groups $(G,\ast)$ and $(H,\circ)$ is called an **[[isomorphism]]** if:
> - $\theta$ is a **[[homomorphism]]**, i.e. $\theta(g_{1} \ast g_{2}) = \theta(g_{1}) \circ \theta(g_{2})$ for all $g_{1}, g_{2} \in G$,
> - $\theta$ is **[[bijection|bijective]]** (one-to-one and onto).
> 
> In this case we say $G$ and $H$ are **isomorphic** and write $G \cong H$.

The slogan is: isomorphic groups have the same group structure, but may use different "labels" for their elements.

- If $G \cong H$, then:
	- $\lvert G \rvert = \lvert H \rvert$.
	- Algebraic properties are preserved (for example, being Abelian, being cyclic, orders of elements).
- Intuitively, an isomorphism is a **relabelling** of elements that preserves the operation.

> [!example] Simple isomorphism example
> Consider $\operatorname{Sym}(\{a,b,c\})$ and $\operatorname{Sym}(\{1,2,3\})$.
> Map each permutation of $\{a,b,c\}$ to the corresponding permutation of $\{1,2,3\}$ by sending $a \mapsto 1$, $b \mapsto 2$, $c \mapsto 3$ and acting on the images.
> This is a bijective homomorphism, so $\operatorname{Sym}(\{a,b,c\}) \cong \operatorname{Sym}(\{1,2,3\})$.

In particular, when we say "up to isomorphism there is only one group of order $7$", we mean any two groups of order $7$ are isomorphic, even though there are infinitely many ways to present them with different symbols.

- For instance, all the following are isomorphic:
	- $\langle (1\\\\\\) \rangle$,
	- $\langle (a\,b\,c\,d\,e\,f\,g) \rangle$,
	- $\langle (11\\\\\\) \rangle$,
  - And so on, with any $7$-cycle in any $7$-element set.

## Examples of Isomorphisms

We now move to two important families of examples.

### Cyclic Permutation Group Vs Modular Integers

Let $n \in \mathbb{N}$. We have:

- The **[[cyclic group|cyclic group]]** $C_{n} = \langle \rho \rangle$ where $\rho$ is the $n$-cycle $(1\\,\dots\,n)$, operation is composition.
- The **integers modulo $n$** $Z_{n} = \langle [1]_{n} \rangle$, operation is $\oplus$ (addition modulo $n$).

Every element of $C_{n}$ can be written as $\rho^{m}$ for some integer $m$, and every element of $Z_{n}$ can be written as a multiple of $[1]_{n}$.

> [!important] The isomorphism $C_{n} \cong Z_{n}$
> Define $\varphi \colon C_{n} \to Z_{n}$ by
> $\varphi(\rho^{m}) = [1]_{n} \oplus \dots \oplus [1]_{n} (m\text{ times)} = [m]_{n}$.
> Then:
> - $\varphi$ is a homomorphism, because $\varphi(\rho^{r}\rho^{s}) = \varphi(\rho^{r+s}) = [r+s]_{n} = [r]_{n} \oplus [s]_{n} = \varphi(\rho^{r}) \oplus \varphi(\rho^{s})$.
> - $\varphi$ is onto, because every $[m]_{n} \in Z_{n}$ is hit by $\rho^{m}$.
> - $\varphi$ is one-to-one, as the only way $\varphi(\rho^{r}) = \varphi(\rho^{s})$ is if $[r]_{n} = [s]_{n}$, so $\rho^{r} = \rho^{s}$ in $C_{n}$.

Thus, we obtain the key structural identification

$$
\boxed{C_{n} \cong Z_{n}}.
$$

### Logarithm as an Isomorphism

Consider:

- $(\mathbb{R}_{>0}, \times)$, the group of positive real numbers under multiplication.
- $(\mathbb{R}, +)$, the group of real numbers under addition.

The natural logarithm $\ln \colon \mathbb{R}_{>0} \to \mathbb{R}$ is a bijection with inverse $\exp$.

> [!example] Logarithm is an isomorphism
> The map $\ln$ satisfies:
> - $\ln(xy) = \ln(x) + \ln(y)$ for all $x,y \in \mathbb{R}_{>0}$, so it is a homomorphism from $(\mathbb{R}_{>0}, \times)$ to $(\mathbb{R}, +)$.
> - From the graph of $y = \ln(x)$, it is clear that $\ln$ is one-to-one and onto, with inverse $\exp$.
> Hence $\ln$ is a group isomorphism and
> 
> $$
> \boxed{(\mathbb{R}_{>0}, \times) \cong (\mathbb{R}, +)}.
> $$

This illustrates how isomorphisms can turn multiplicative structures into additive ones when there is a suitable "logarithm-like" map.

## Non-Examples of Isomorphisms

Sometimes it is easy to see that two groups cannot be isomorphic.

> [!important] Basic obstruction: different sizes
> Let $G$ and $H$ be finite groups with $\lvert H \rvert < \lvert G \rvert$.
> Then $G \not\cong H$.
>
> Proof idea:
> - If there was an isomorphism $\theta \colon G \to H$, then $\theta$ would be a bijection between the underlying sets.
> - But finite sets with different cardinalities cannot be in bijection.
> - Hence no isomorphism can exist.

More generally, any invariant property that differs between $G$ and $H$ (order, number of elements of a given order, Abelian vs non-Abelian, etc.) shows they are not isomorphic.

## Classification of Groups of Prime Order

We end with an important structural classification result.

> [!important] Theorem — Groups of prime order
> Let $G$ be a group and let $p$ be a prime.
> If $\lvert G \rvert = p$, then $G \cong C_{p}$.
> In particular, up to isomorphism, there is only one group of order $p$.

**Proof sketch.**

1. Choose a non identity element $g \in G$.
2. Consider the **subgroup** $H = \langle g \rangle$.
3. By **[[Lagrange's theorem|Lagrange’s Theorem]]**, the order $\lvert H \rvert$ divides $\lvert G \rvert = p$.
   Since $p$ is prime, we must have $\lvert H \rvert = 1$ or $\lvert H \rvert = p$.
4. The case $\lvert H \rvert = 1$ would mean $H = \langle e_{G} \rangle$, but $g \neq e_{G}$, so this is impossible.
   Therefore, $\lvert H \rvert = p$.
5. Now $\lvert H \rvert = \lvert G \rvert$, so by basic subgroup properties we conclude $H = G$.
   Thus, $G$ is **[[cyclic group|cyclic]]**, generated by $g$, and

   $$
   G = \{e_{G}, g, g^{2}, \dots, g^{p-1}\}.


$$
6. Recall that $C_{p} = \langle \rho \rangle$ with $\rho = (1\\,\dots\,p)$, so
   
$$

   C_{p} = \{e, \rho, \rho^{2}, \dots, \rho^{p-1}\}.

$$
7. Define $\varphi \colon G \to C_{p}$ by
   
$$

   \varphi(g^{n}) = \rho^{n} \quad \text{for all } 0 \leq n < p.

$$
   This is well-defined because every element of $G$ has a unique expression $g^{n}$ with $0 \leq n < p$.
8. The map $\varphi$ is clearly bijective (it pairs each $g^{n}$ with the corresponding $\rho^{n}$).
   Moreover, it is a homomorphism:
   
$$

   \varphi(g^{n} g^{m}) = \varphi(g^{n+m}) = \rho^{n+m} = \rho^{n} \rho^{m} = \varphi(g^{n}) \varphi(g^{m}).

$$
   Hence, $\varphi$ is an isomorphism.

Therefore, every group of prime order $p$ is isomorphic to the standard cyclic group $C_{p}$, and there is only one such group up to isomorphism.

---

## Pre-Lecture Notes from [[mth3003 lecture notes 10.pdf|University Notes]]

- Defined **[[isomorphism]]** as a bijective homomorphism $\theta \colon G \to H$, wrote $G \cong H$, and emphasised "same structure, different labels".
- Noted that isomorphic finite groups have the same order; more generally, isomorphisms preserve structural properties like being cyclic or Abelian.
- Gave examples:
  - $\operatorname{Sym}(\{a,b,c\}) \cong \operatorname{Sym}(\{1,2,3\})$ via relabelling of symbols.
  - $C_{n} \cong Z_{n}$ via $\varphi(\rho^{m}) = [m]_{n}$, with a detailed handout proof that $\varphi$ is a homomorphism, onto, and one-to-one.
  - $(\mathbb{R}_{>0}, \times) \cong (\mathbb{R}, +)$ via $\ln$, using $\ln(xy) = \ln(x) + \ln(y)$ and the bijection properties of $\ln$.
- Presented a basic non-example: finite groups of different orders cannot be isomorphic, because bijections between finite sets preserve cardinality.
- Proved the classification theorem: any group $G$ of prime order $p$ is cyclic and isomorphic to $C_{p}$, by choosing $g \neq e$, applying Lagrange’s Theorem to $\langle g \rangle$, and constructing an explicit isomorphism to $C_{p}$.
- Next time: continue exploring structure via isomorphisms, building towards more sophisticated classification tools (for example, products and further examples of finite groups).
