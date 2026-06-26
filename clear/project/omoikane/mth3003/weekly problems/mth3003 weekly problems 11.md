# MTH3003 Weekly Problems 11

> **Original Documents**: [[mth3003 weekly problem sheet 11.pdf]] / `[[mth3003 weekly problem sheet 11 handwritten solutions.pdf]]` / [[mth3003 weekly problem sheet 11 solutions.pdf]]
>
> **Vibes**: The closing sheet, all on direct products and the classification of finite abelian groups. Two short structural proofs about external direct products, an embedding result for cyclic $p$-groups, a "list them all" computation, and a slick capstone showing abelian groups satisfy a converse to Lagrange.
>
> **Used Techniques**:
>  - **Quick subgroup test**: identity, closure, inverses.
>  - **Coordinate-swap isomorphism**: $\theta(g,h)=(h,g)$ proves $G\times H\cong H\times G$.
>  - **[[Fundamental Theorem of Finite Abelian Groups]]**: classify by partitioning prime-power multiplicities.
>  - **Subgroup notation $\lesssim$**: write $H\lesssim G$ when $G$ has a subgroup isomorphic to $H$.

---

## 11.1. The Direct Product is Commutative

> [!question]
> Let $G$ and $H$ be groups. Prove that $G\times H\cong H\times G$.
>
> *Hint: try the map $\theta\colon G\times H\to H\times G$ given by $\theta(g,h)=(h,g)$.*

Define $\theta\colon G\times H\to H\times G$ by $\theta(g,h)=(h,g)$. Recall multiplication in a direct product is componentwise: $(g_{1},h_{1})(g_{2},h_{2})=(g_{1}g_{2},h_{1}h_{2})$.

**Homomorphism.**

$$
\theta\big((g_{1},h_{1})(g_{2},h_{2})\big)=\theta(g_{1}g_{2},h_{1}h_{2})=(h_{1}h_{2},g_{1}g_{2}),
$$

and on the other side

$$
\theta(g_{1},h_{1})\,\theta(g_{2},h_{2})=(h_{1},g_{1})(h_{2},g_{2})=(h_{1}h_{2},g_{1}g_{2}).
$$

These agree, so $\theta$ is a [[Homomorphism]].

**Injective.** If $\theta(g_{1},h_{1})=\theta(g_{2},h_{2})$ then $(h_{1},g_{1})=(h_{2},g_{2})$, so $h_{1}=h_{2}$ and $g_{1}=g_{2}$, hence $(g_{1},h_{1})=(g_{2},h_{2})$.

**Surjective.** Any $(h,g)\in H\times G$ equals $\theta(g,h)$.

So $\theta$ is an [[Isomorphism]] and $G\times H\cong H\times G$. $\blacksquare$

---

## 11.2. Direct Product of Subgroups is a Subgroup

> [!question]
> Let $G$ and $H$ be groups with $K\leq G$ and $J\leq H$. Prove that $K\times J\leq G\times H$.

Use the **quick subgroup test** on the subset $K\times J\subseteq G\times H$.

**Identity.** Since $K\leq G$ and $J\leq H$, we have $e_{G}\in K$ and $e_{H}\in J$, so $(e_{G},e_{H})\in K\times J$ - and this is the identity of $G\times H$.

**Closure and inverses.** Take $(g_{1},h_{1}),(g_{2},h_{2})\in K\times J$. Then

$$
(g_{1},h_{1})(g_{2},h_{2})^{-1}=(g_{1}g_{2}^{-1},\,h_{1}h_{2}^{-1}).
$$

Because $K$ is a group, $g_{1},g_{2}\in K\Rightarrow g_{1}g_{2}^{-1}\in K$; because $J$ is a group, $h_{1},h_{2}\in J\Rightarrow h_{1}h_{2}^{-1}\in J$. Hence $(g_{1}g_{2}^{-1},h_{1}h_{2}^{-1})\in K\times J$.

So $K\times J$ is non-empty and closed under products-with-inverses, giving $K\times J\leq G\times H$. $\blacksquare$

---

## 11.3. Cyclic $p$-Groups Embed in Larger Cyclic $p$-Groups

> [!question]
> Let $p$ be a prime and $r,s\geq 0$ integers with $s\leq r$. Prove that $C_{p^{s}}\lesssim C_{p^{r}}$, i.e. $C_{p^{r}}$ has a subgroup isomorphic to $C_{p^{s}}$.
>
> *Hint: find an element $h\in C_{p^{r}}$ of order $p^{s}$, then $H=\langle h\rangle\cong C_{p^{s}}$.*

If $s=0$ then $C_{p^{s}}=\{e\}\lesssim C_{p^{r}}$ trivially, and if $s=r$ then $C_{p^{s}}=C_{p^{r}}$, so assume $1\leq s<r$.

Write $C_{p^{r}}=\langle\tau\rangle$ where $\tau=(1\,2\,\cdots\,p^{r})$ has order $p^{r}$. Set $h=\tau^{\,p^{r-s}}$ and claim $o(h)=p^{s}$.

**Order at most $p^{s}$.**

$$
h^{p^{s}}=\big(\tau^{\,p^{r-s}}\big)^{p^{s}}=\tau^{\,p^{r-s}\cdot p^{s}}=\tau^{\,p^{r}}=e,
$$

so $o(h)\leq p^{s}$.

**Order at least $p^{s}$.** For $0<\ell<p^{s}$ we have $h^{\ell}=\tau^{\,p^{r-s}\ell}$, and $p^{r-s}\ell<p^{r-s}p^{s}=p^{r}=o(\tau)$, so $h^{\ell}\neq e$.

Hence $o(h)=p^{s}$, and $H=\langle h\rangle\leq C_{p^{r}}$ is cyclic of order $p^{s}$, so $H\cong C_{p^{s}}$. Therefore $C_{p^{s}}\lesssim C_{p^{r}}$. $\blacksquare$

---

## 11.4. All Abelian Groups of Order 72

> [!question]
> Find, up to isomorphism, all abelian groups of order $72$.

Factorise $72=2^{3}\cdot 3^{2}$. By the [[Fundamental Theorem of Finite Abelian Groups]], every abelian group of order $72$ is a direct product of cyclic prime-power groups, and distinct decompositions give non-isomorphic groups. So count independently the partitions of the exponent $3$ on the prime $2$ and the exponent $2$ on the prime $3$.

- Partitions of $3$ (for the $2$-part): $(3),\,(2,1),\,(1,1,1)$ - three of them.
- Partitions of $2$ (for the $3$-part): $(2),\,(1,1)$ - two of them.

This gives $3\times 2=6$ groups.

| $2$-part | $3$-part | Decomposition | Group |
|---|---|---|---|
| $(3)$ | $(2)$ | $2^{3}\cdot 3^{2}$ | $C_{2^{3}}\times C_{3^{2}}$ |
| $(3)$ | $(1,1)$ | $2^{3}\cdot 3\cdot 3$ | $C_{2^{3}}\times C_{3}\times C_{3}$ |
| $(2,1)$ | $(2)$ | $2^{2}\cdot 2\cdot 3^{2}$ | $C_{2^{2}}\times C_{2}\times C_{3^{2}}$ |
| $(2,1)$ | $(1,1)$ | $2^{2}\cdot 2\cdot 3\cdot 3$ | $C_{2^{2}}\times C_{2}\times C_{3}\times C_{3}$ |
| $(1,1,1)$ | $(2)$ | $2\cdot 2\cdot 2\cdot 3^{2}$ | $C_{2}\times C_{2}\times C_{2}\times C_{3^{2}}$ |
| $(1,1,1)$ | $(1,1)$ | $2\cdot 2\cdot 2\cdot 3\cdot 3$ | $C_{2}\times C_{2}\times C_{2}\times C_{3}\times C_{3}$ |

$$
\boxed{C_{8}\times C_{9},\;\; C_{8}\times C_{3}^{2},\;\; C_{4}\times C_{2}\times C_{9},\;\; C_{4}\times C_{2}\times C_{3}^{2},\;\; C_{2}^{3}\times C_{9},\;\; C_{2}^{3}\times C_{3}^{2}.}
$$

So there are $6$ abelian groups of order $72$ up to isomorphism. $\blacksquare$

---

## 11.5. Abelian Groups Satisfy the Converse of Lagrange

> [!question]
> Is the following true? Give a proof or counterexample. If $G$ is a finite abelian group of order $m$ and $k\mid m$, then $G$ has a subgroup of order $k$.
>
> *Hint: a tricky one - use the Fundamental Theorem together with Problems 11.2 and 11.3.*

**True for abelian groups** (it fails in general - $A_{4}$ has order $12$ but no subgroup of order $6$, but $A_{4}$ is not abelian).

By the [[Fundamental Theorem of Finite Abelian Groups]] there are (not necessarily distinct) primes $p_{1},\ldots,p_{n}$ and natural numbers $e_{1},\ldots,e_{n}$ with $p_{1}^{e_{1}}\cdots p_{n}^{e_{n}}=m$ and

$$
G\cong C_{p_{1}^{e_{1}}}\times\cdots\times C_{p_{n}^{e_{n}}}.
$$

Since $k\mid m$, the divisor $k$ uses only these primes, so

$$
k=p_{1}^{d_{1}}\cdots p_{n}^{d_{n}},\qquad 0\leq d_{i}\leq e_{i}.
$$

For each $i$, Problem 11.3 gives $C_{p_{i}^{d_{i}}}\lesssim C_{p_{i}^{e_{i}}}$ - choose a subgroup $H_{i}\leq C_{p_{i}^{e_{i}}}$ with $H_{i}\cong C_{p_{i}^{d_{i}}}$. By Problem 11.2 (applied repeatedly), the product

$$
H_{1}\times\cdots\times H_{n}\;\leq\;C_{p_{1}^{e_{1}}}\times\cdots\times C_{p_{n}^{e_{n}}}\cong G
$$

is a subgroup, and its order is $p_{1}^{d_{1}}\cdots p_{n}^{d_{n}}=k$. Hence $G$ has a subgroup of order $k$. $\blacksquare$

> [!warning]
> This converse to [[Lagrange's theorem]] is **special to abelian groups** (more generally, nilpotent groups). For arbitrary finite groups it is false: $|A_{4}|=12$ but $A_{4}$ has no subgroup of order $6$.
