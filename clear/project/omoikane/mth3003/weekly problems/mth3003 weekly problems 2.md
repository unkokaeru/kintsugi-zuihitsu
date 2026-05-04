# MTH3003 Weekly Problems 2

> **Original Documents**: [[mth3003 weekly problem sheet 2.pdf]] / [[mth3003 weekly problem sheet 2 solutions.pdf]]
>
> **Vibes**: Weird, but easy - just feels too easy and a lot of my initial solutions didn't feel very formal.
>
> **Used Techniques**:
>  - Basic definitions/properties of groups.
>  - [[Permutation]] definition and the [[Product of Permutations]].
>  - Definition of a [[cyclic group]].

---

## 2.1. Prove a Group Equality

> [!question]
> Let $G$ be a group with $g,h\in G$. Prove that, for all $n\in \mathbb{N}$, $(g^{-1}hg)^n=g^{-1}h^{n}g$.

$$
(g^{-1}hg)^n
= (g^{-1}hg)(g^{-1}hg)\cdots(g^{-1}hg)
= g^{-1}h\underbrace{(gg^{-1})}_{=\,e_G}h\underbrace{(gg^{-1})}_{=\,e_G}h\cdots h\underbrace{(gg^{-1})}_{=\,e_G}hg
= g^{-1}h^ng\quad\boxed{}
$$

---

## 2.2. Prove Group Properties

> [!question]
> Let $G$ be a group and $H\le G$.
>
> 1. Prove that $|H|=1\iff H=\langle e_{G}\rangle$.
> 2. Suppose that $|G|$ is finite. Prove that $|H|=|G|\iff H=G$.
> 3. Is $|H|=|G|\iff H=G$ true if $|G|$ is infinite?
$(\Rightarrow)$ By the Quick Subgroup Test, $e_G\in H$. If $|H|=1$, the unique element must be $e_G$, so $H=\{e_G\}=\langle e_G\rangle$.
$(\Leftarrow)$ $H=\langle e_G\rangle \Rightarrow H=\{e_G\} \Rightarrow |H|=1$.

1. By the Quick Subgroup Test, $e_G\in H$. If $|H|=1$, the unique element must be $e_G$, so $H=\{e_G\}=\langle e_G\rangle$. Alternatively, $H=\langle e_G\rangle \Rightarrow H=\{e_G\} \Rightarrow |H|=1$.
2. Write $G = H\cup S$ with $S\cap H=\emptyset$, so $|G|=|H|+|S|$. Hence, $|G|=|H| \Rightarrow |S|=0 \Rightarrow S=\emptyset \Rightarrow G=H$, and obviously vice versa.
3. No - $(\mathbb{Z},+)\lneq(\mathbb{Q},+)$ but $|\mathbb{Z}|=|\mathbb{Q}|$ (both countably infinite).

---

## 2.3. Prove a Relation between Subgroups

> [!question]
> Let $G$ be a group with $H\le G$ and $K\le G$. Prove that $H\cap K \le G$.

Apply the Quick Subgroup Test to $H\cap K$:

- **Identity**: $e_G\in H$ and $e_G\in K$ (both pass Quick Subgroup Test) $\Rightarrow e_G\in H\cap K$. ✓
- **Closure** $h,k\in H\cap K \Rightarrow hk\in H$ and $hk\in K \Rightarrow hk\in H\cap K$. ✓
- **Inverse** $h\in H\cap K \Rightarrow h^{-1}\in H$ and $h^{-1}\in K \Rightarrow h^{-1}\in H\cap K$. ✓

---

## 2.4. Prove a Property of Cyclic Groups

> [!question]
> Let $G$ be a finite group and $g\in G$. Prove that $|\langle g \rangle|=o(g)$.

Let $n:=o(g)$.

$\{g^0,\ldots,g^{n-1}\}\subseteq\langle g\rangle$, so $n\le|\langle g\rangle|$.

For any $g^m\in\langle g\rangle$, write $m=an+r$ with $0\le r < n$ (division algorithm):

$$
g^m = g^{an+r} = (g^n)^a\cdot g^r = e_G^a\cdot g^r = g^r \in \{g^0,\ldots,g^{n-1}\}
$$

So $|\langle g\rangle|\le n$, hence $|\langle g\rangle|=n=o(g)$. $\boxed{}$

---

## 2.5. Find Elements of a Cyclic Group of Permutations

> [!question]
> Let $g\in S_{10}$ be the permutation $g=(1\\\)(2\)$. Write down all the elements in...
>
> 1. $\langle g \rangle$.
> 2. $\langle g^2 \rangle$

Compute powers of $g$ until a repeat (order is $\text{lcm}(4,2)=4$):

| Power | Result |
|-------|--------|
| $g^0$ | $e$ |
| $g^1$ | $(1\;3\;5\;7)(2\;4)$ |
| $g^2$ | $(1\;5)(3\;7)$ |
| $g^3$ | $(1\;7\;5\;3)(2\;4)$ |
| $g^4$ | $e$ → stop |

**1.** $\langle g\rangle = \{\,e,\;(1\;3\;5\;7)(2\;4),\;(1\;5)(3\;7),\;(1\;7\;5\;3)(2\;4)\,\}$

**2.** $(g^2)^1=(1\;5)(3\;7)$, $(g^2)^2=e$ → stop

$\langle g^2\rangle = \{\,e,\;(1\;5)(3\;7)\,\}$

---

## 2.6. Prove that a Group is Cyclic

> [!question]
> Show that for all $n\in \mathbb{N}$, the group $\mathbb{Z}_{n}$ is cyclic, with $\mathbb{Z}_{n}=\langle [1]_{n}\rangle$.

Take any $[m]_n\in\mathbb{Z}_n$. Since $\oplus$ is the group operation:

$$
([1]_n)^m = \underbrace{[1]_n\oplus\cdots\oplus[1]_n}_{m\text{ times}} = [1+\cdots+1]_n = [m]_n
$$

Every element of $\mathbb{Z}_n$ lies in $\langle[1]_n\rangle$, so $\mathbb{Z}_n\subseteq\langle[1]_n\rangle$. Since $\langle[1]_n\rangle\le\mathbb{Z}_n$, we have $\mathbb{Z}_n=\langle[1]_n\rangle$. $\boxed{}$
