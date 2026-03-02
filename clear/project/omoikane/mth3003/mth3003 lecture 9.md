# MTH3003 Lecture 9

Following our exploration of normal subgroups, we now look at how to use them to "divide" groups and construct entirely new ones. This naturally leads us to formalise structure-preserving maps between groups, giving us the tools to prove when two groups are structurally identical.

## Quotient Groups

Suppose we have a subgroup $H \le G$. We want to construct a new group by "dividing" $G$ by $H$, forming a set of cosets $G/H$. However, this set is not always a group! It only forms a valid group when $H$ is a **[[normal subgroup]]** ($H \unlhd G$). When this condition is met, the resulting structure is called a **[[quotient group]]**.

> [!important] Definition: Quotient Group
> Suppose $N \unlhd G$. The quotient group $G/N$ is the set of cosets of $N$ in $G$ with the operation defined for all $aN, bN \in G/N$ as:
> $\displaystyle \boxed{aN \ast bN = (ab)N}$

Notice that even without this definition, $(aN)(bN) = a(Nb)N = a(bN)N = abN$ holds strictly because $N$ is normal.

To show that $G/N$ is a group, we check the axioms for $aN, bN, cN \in G/N$:

- **Closure**: $(ab)N$ is clearly a coset of $N$ in $G$, so it is in $G/N$.
- **Identity**: We define the identity $e_{G/N}$ to be the coset $e_G N = N$. Thus, $\boxed{e_{G/N} = N}$.
- **Inverses**: The inverse of $aN$ is $\boxed{(aN)^{-1} = a^{-1}N}$, which we can verify:

$$
(a^{-1}N) \ast (aN) = (a^{-1}a)N = e_G N = N
$$

- **Associativity**: Inherited directly from $G$:

$$
(aN) \ast ((bN) \ast (cN)) = (aN) \ast ((bc)N) = (a(bc))N = ((ab)c)N = ((aN) \ast (bN)) \ast (cN)
$$

> [!example] The Quotient Group $(\mathbb{Z}, +)/3\mathbb{Z}$
> Since $(\mathbb{Z}, +)$ is abelian, $3\mathbb{Z}$ is a normal subgroup, and the cosets are:
> $\displaystyle (\mathbb{Z}, +)/3\mathbb{Z} = \{0 + 3\mathbb{Z}, 1 + 3\mathbb{Z}, 2 + 3\mathbb{Z}\}$
> This behaves exactly like $\mathbb{Z}_3$ under addition modulo 3, giving $\boxed{(\mathbb{Z}, +)/3\mathbb{Z} \cong \mathbb{Z}_3}$.

> [!example] The Quotient Group $S_3/C_3$
> For $C_3 = \{e, (1\,2\,3), (1\,3\,2)\} \unlhd S_3$, there are only two cosets since $|S_3|/|C_3| = 2$.
> $\displaystyle S_3/C_3 = \{eC_3, (1\,2)C_3\}$
> Multiplying them shows $(1\,2)C_3 \ast (1\,2)C_3 = eC_3$, so this group behaves exactly like $C_2$.

## Homomorphisms

> [!important] Definition: Homomorphism
> A **[[homomorphism]]** is a map $\theta: G \to H$ between two groups that preserves the group operation:
> $\displaystyle \boxed{\theta(g_1 g_2) = \theta(g_1)\theta(g_2)}$
> (where the operation on the left is in $G$, and on the right is in $H$).

> [!example] Modular Arithmetic Homomorphism
> The map $\phi: \mathbb{Z} \to \mathbb{Z}_n$ defined by $\phi(m) = [m]_n$ is a homomorphism.
> This holds because $\phi(m_1 + m_2) = [m_1 + m_2]_n = [m_1]_n \oplus [m_2]_n = \phi(m_1) \oplus \phi(m_2)$.

A map $\pi: S_3 \to C_3$ that maps all 2-cycles to $e$ and fixes elements of $C_3$ fails to be a homomorphism, because $\pi((1\,3))\pi((1\,2)) = ee = e$, but $\pi((1\,3)(1\,2)) = \pi((1\,2\,3)) = (1\,2\,3)$.

### Kernel and Image

To understand a homomorphism, we look at what it sends to the identity, and what it covers in the target group.

> [!important] Definition: Kernel and Image
> The **[[kernel]]** $\text{Ker}(\theta) = \{g \in G : \theta(g) = e_H\}$ is the set of elements mapping to $e_H$.
> The **[[image]]** $\text{Im}(\theta) = \{\theta(g) : g \in G\}$ is the set of all output elements in $H$.

For our earlier example $\phi: \mathbb{Z} \to \mathbb{Z}_n$, the kernel is $n\mathbb{Z}$ (multiples of $n$), and the image is all of $\mathbb{Z}_n$ (so $\phi$ is onto).

There are several fundamental properties that hold for any homomorphism $\theta: G \to H$:

1. $\boxed{\theta(e_G) = e_H}$
2. $\theta(g^m) = (\theta(g))^m$ for all $g \in G, m \in \mathbb{Z}$
3. $\boxed{\text{Im}(\theta) \le H}$ (the image is a subgroup)
4. $\boxed{\text{Ker}(\theta) \unlhd G}$ (the kernel is a normal subgroup)

> [!note] Subgroup Status
> Notice that while the kernel is always a normal subgroup of $G$, the image is generally just a subgroup of $H$ (not necessarily normal).

When a homomorphism is bijective (both one-to-one and onto), we call it an **[[isomorphism]]**, denoted $G \cong H$. This means the groups are structurally identical.

> [!example] Homomorphism from $S_3$ to $S_2$
> Define $\phi: S_3 \to S_2$ where $\phi$ sends 3-cycles to $e$, and all 2-cycles to $(1\,2)$.
> Checking cases confirms this preserves the group operation.
> Here, $\text{Ker}(\phi) = \{e, (1\,2\,3), (1\,3\,2)\} = C_3$ and $\text{Im}(\phi) = S_2$.

---

## Pre-Lecture Notes from [[mth3003 lecture notes 9.pdf|University Notes]]

- **Quotient Groups**: For $N \unlhd G$, $G/N$ is the group of cosets with operation $aN \ast bN = (ab)N$.
- The identity is $N$, and inverses are $(aN)^{-1} = a^{-1}N$.
- Examples include $(\mathbb{Z}, +)/3\mathbb{Z} \cong \mathbb{Z}_3$ and $S_3/C_3 \cong C_2$.
- **Homomorphisms**: A map $\theta: G \to H$ satisfying $\theta(g_1 g_2) = \theta(g_1)\theta(g_2)$.
- $\text{Ker}(\theta) = \{g \in G : \theta(g) = e_H\} \unlhd G$.
- $\text{Im}(\theta) = \{\theta(g) : g \in G\} \le H$.
- Homomorphisms map identities to identities ($\theta(e_G) = e_H$) and preserve powers ($\theta(g^m) = (\theta(g))^m$).
- A bijective homomorphism is an **isomorphism** ($G \cong H$).
- *Next lecture preview: Detailed exploration of isomorphisms and their formal properties.*
