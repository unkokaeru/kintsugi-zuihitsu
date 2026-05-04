# MTH3003 Lecture 17

[[Lagrange's theorem]] tells us only what subgroup orders are *forbidden* - the size of any subgroup must divide $|G|$. The converse fails: knowing $d\mid |G|$ doesn't guarantee a subgroup of order $d$ ($A_{4}$ has order $12$ but no subgroup of order $6$). **Sylow's three theorems** give a *partial* converse: they guarantee subgroups of any *prime-power* order dividing $|G|$, control how those subgroups are related, and count exactly how many there are. They are one of the most powerful structural results in finite group theory.

## Definitions

> [!important] $p$-Group, $p$-Subgroup
> Fix a prime $p$. A group $H$ is a **$p$-group** if $|H|=p^{r}$ for some $r\geq 0$. If $H\leq G$ is a $p$-group, $H$ is a **$p$-subgroup** of $G$.

> [!important] Sylow $p$-Subgroup
> Let $G$ be finite and let $p$ be a prime dividing $|G|$. Write
> $$
> |G|=p^{r}\,t,\qquad p\nmid t.
> $$
> A **Sylow $p$-subgroup** (or **$p$-Sylow subgroup**) of $G$ is a subgroup $H\leq G$ with $|H|=p^{r}$ - i.e. the *largest possible* $p$-subgroup of $G$.

### Examples

- $C_{9}$ has order $9=3^{2}$, so it is a $3$-group. As a subgroup of $S_{9}$, it is a $3$-subgroup.
- $S_{9}$ has order $9!$, which is not a prime power, so $S_{9}$ is **not** a $p$-group.
- The [[Klein four-group]] $K_{4}$ is a $2$-group ($|K_{4}|=4=2^{2}$), and a $2$-subgroup of $S_{4}$.
- $|S_{5}|=120=2^{3}\cdot 3\cdot 5$. A Sylow $2$-subgroup has order $8$, a Sylow $3$-subgroup has order $3$, a Sylow $5$-subgroup has order $5$. A subgroup of $S_{5}$ of order $4$ is a $2$-subgroup but **not** a Sylow $2$-subgroup (it's not maximal).

## Sylow's Theorems

> [!important] First Sylow Theorem
> Let $G$ be a finite group. If a prime $p$ divides $|G|$, then $G$ has at least one Sylow $p$-subgroup.

> [!important] Second Sylow Theorem
> Let $G$ be finite with Sylow $p$-subgroup $H$. If $J$ is *any* $p$-subgroup of $G$ (not necessarily Sylow), then $J\leq g^{-1}Hg$ for some $g\in G$. So all Sylow $p$-subgroups are **conjugate**, and every $p$-subgroup sits inside some Sylow $p$-subgroup.

> [!important] Third Sylow Theorem
> Let $a(p)$ be the number of Sylow $p$-subgroups of $G$. Then:
> 1. $a(p)\mid t$ (where $|G|=p^{r}\,t$ with $p\nmid t$);
> 2. $a(p)\equiv 1\pmod{p}$.

> [!note] Why these matter
> - **First Sylow** guarantees existence of a maximum-size $p$-subgroup for each prime $p$ dividing $|G|$.
> - **Second Sylow** says they're all conjugate - there's structurally only one "kind" of Sylow $p$-subgroup.
> - **Third Sylow** counts them: $a(p)$ is constrained by two divisibility conditions, often pinning it down uniquely.
>
> Combined, the three theorems often determine *all* groups of a given order. Hugely powerful.

> [!note]
> The First Sylow Theorem generalises **[[Cauchy's theorem]]**, which says: if $p$ divides $|G|$, then $G$ has a subgroup of order $p$ (i.e. an element of order $p$). Sylow upgrades this to subgroups of order $p^{r}$.

## Quick Examples

### Example: Group of Order 54

> [!question]
> Let $|G|=54$. Show $G$ has a subgroup of order $27$ and one of order $2$.

$54=3^{3}\cdot 2$. By Sylow's First Theorem applied with $p=3$, $G$ has a Sylow $3$-subgroup of order $3^{3}=27$. Applied with $p=2$, $G$ has a Sylow $2$-subgroup of order $2$. $\blacksquare$

### Example: Sylow Subgroups of $D_{10}$

$|D_{10}|=10=2\cdot 5$. So $D_{10}$ has Sylow $2$-subgroups of order $2$ and Sylow $5$-subgroups of order $5$.

- Sylow $5$-subgroup: $\langle (1\,2\,3\,4\,5)\rangle\cong C_{5}$.
- Sylow $2$-subgroup: any order-$2$ reflection generates one, $\cong C_{2}$.

### Example: Sylow Subgroups of $S_{6}$

$|S_{6}|=720=2^{4}\cdot 3^{2}\cdot 5$. So Sylow $2$-subgroups have order $16$, Sylow $3$-subgroups order $9$, Sylow $5$-subgroups order $5$.

- $\langle (1\,2\,3\,4\,5)\rangle\cong C_{5}$ is a Sylow $5$-subgroup.
- $\langle (1\,2\,3)\rangle\times\langle (4\,5\,6)\rangle\cong C_{3}\times C_{3}$ is a Sylow $3$-subgroup.
- $\langle (1\,2)\rangle\cong C_{2}$ is a $2$-subgroup but **not** Sylow (order $2$, not $16$).

## Application: Every Group of Order 162 has a Normal Subgroup of Order 81

> [!example]
> Let $|G|=162$. Prove $G$ has a normal subgroup of order $81$.

$162=3^{4}\cdot 2$.

**Claim 1.** $G$ has a subgroup $H$ of order $81=3^{4}$. By the First Sylow Theorem, the Sylow $3$-subgroup exists.

**Claim 2.** $H$ is the *only* Sylow $3$-subgroup. By the Third Sylow Theorem, $a(3)\mid 2$ and $a(3)\equiv 1\pmod{3}$. The first condition says $a(3)\in\{1,2\}$; the second forces $a(3)\in\{1,4,7,10,\ldots\}$. The only common value is $a(3)=1$.

**Claim 3.** $H$ is normal. Fix $g\in G$. The conjugate $g^{-1}Hg$ is a subgroup (Quick Subgroup Test), with $|g^{-1}Hg|=|H|=81$, so it is a Sylow $3$-subgroup. Since there's only one of those, $g^{-1}Hg=H$ for all $g\in G$. So $H\trianglelefteq G$.

$\blacksquare$

> [!note] Recurring pattern
> If a Sylow $p$-subgroup is **unique** (i.e. $a(p)=1$), then it is automatically **normal** - because conjugation permutes the Sylow $p$-subgroups, and there's nothing else to permute it to.

## Application: Every Group of Order 15 is Cyclic

> [!example]
> Let $|G|=15$. Prove $G\cong C_{15}$.

$15=3\cdot 5$.

**Claim 1.** Subgroups of $G$ have orders $1,3,5,15$ (Lagrange).

**Claim 2.** Only the trivial subgroup has order $1$, only $G$ has order $15$.

**Claim 3.** $G$ has only one subgroup of order $3$. By Sylow, every $3$-subgroup of $G$ is a Sylow $3$-subgroup (since $|G|=3^{1}\cdot 5$, no larger $3$-subgroup is possible). By the Third Sylow Theorem, $a(3)\mid 5$ and $a(3)\equiv 1\pmod{3}$, giving $a(3)=1$.

**Claim 4.** $G$ has only one subgroup of order $5$. Same argument with $p=5$: $a(5)\mid 3$ and $a(5)\equiv 1\pmod{5}$, so $a(5)=1$.

**Claim 5.** $G$ is cyclic. Let $J$ be the unique subgroup of order $3$ and $K$ the unique subgroup of order $5$. The four subgroups of $G$ are $\{e\}, J, K, G$. By inclusion-exclusion,

$$
|J\cup K|\leq |J|+|K|-|J\cap K|=3+5-1=7.
$$

Since $|G|=15>7$, there exists $g\in G$ with $g\notin J$ and $g\notin K$. Then $\langle g\rangle\leq G$, but $\langle g\rangle\neq \{e\},J,K$, so $\langle g\rangle=G$. Hence $G$ is cyclic. $\blacksquare$

## Proof of First Sylow (sketch - not examinable)

> [!note]
> Idea: act on subsets of size $p^{r}$ by left multiplication; use a divisibility argument and the [[Orbit-Stabiliser theorem]] to extract one whose stabiliser has order $p^{r}$.

Let $|G|=p^{r}t$, $p\nmid t$. Let $X$ be the set of all subsets of $G$ of size $p^{r}$. By a standard binomial-coefficient calculation,

$$
|X|=\binom{p^{r}t}{p^{r}}=\frac{p^{r}t}{p^{r}}\cdot\prod_{i=1}^{p^{r}-1}\frac{p^{r}t-i}{p^{r}-i}=t\cdot\prod_{i=1}^{p^{r}-1}\frac{p^{r}t-i}{p^{r}-i}.
$$

A power of $p$ dividing $p^{r}t-i$ also divides $p^{r}-i$ (and vice versa), so all $p$-factors cancel between numerator and denominator. Hence $p\nmid |X|$.

$G$ acts on $X$ by $\lambda(g)W=gW$. Partition $X$ into orbits; since $p\nmid |X|$, at least one orbit $GW_{i}$ has $p\nmid |GW_{i}|$. Let $S=\mathrm{Stab}_{G}(W_{i})$.

By [[Orbit-Stabiliser theorem]], $|GW_{i}|=|G|/|S|$. Write $|S|=p^{k}s$ with $s\mid t$; then $|GW_{i}|=p^{r-k}\cdot t/s$. For $p\nmid |GW_{i}|$ we need $r-k=0$, i.e. $|S|=p^{r}s$.

Now show $|S|\leq |W_{i}|=p^{r}$. Fix $w\in W_{i}$ and consider the orbit $Sw$. If $g,h\in S$ with $gw=hw$, then $g=h$ (right-cancel by $w^{-1}$). So $|Sw|=|S|$. Also $Sw\subseteq W_{i}$ because $S$ stabilises $W_{i}$. Hence $|S|\leq |W_{i}|=p^{r}$.

Combined: $|S|=p^{r}s\leq p^{r}$, forcing $s=1$, so $|S|=p^{r}$. Thus $S$ is a Sylow $p$-subgroup. $\blacksquare$

## Proof of Second and Third Sylow (advanced - not examinable)

These rely on conjugation actions on the set of cosets $G/H$ (for the Second) and on the set of all Sylow $p$-subgroups (for the Third), combined with the Orbit-Stabiliser theorem and a fixed-point argument. Definitions used:

- **Centraliser** $C_{G}(h)=\{g\in G:gh=hg\}=\{g:g^{-1}hg=h\}$.
- **Normaliser** $N_{G}(S)=\{g\in G:g^{-1}Sg=S\}$ for $S\subseteq G$.
- **Conjugacy classes**: orbits of $G$ on itself under $\lambda(g)x=gxg^{-1}$.

Full proofs are in the lecture notes handout - examinable spirit is the *application*, not the derivation.

---

## Pre-Lecture Notes from [[mth3003 lecture notes 17.pdf]]

- **$p$-group**: order is a prime power $p^{r}$. **Sylow $p$-subgroup** of $G$: subgroup of size $p^{r}$ when $|G|=p^{r}t$, $p\nmid t$ - the maximum possible $p$-subgroup.
- **First Sylow Theorem**: existence - for every prime $p\mid |G|$, $G$ has at least one Sylow $p$-subgroup.
- **Second Sylow Theorem**: structure - all Sylow $p$-subgroups are conjugate; every $p$-subgroup sits inside some Sylow.
- **Third Sylow Theorem**: counting - $a(p)\mid t$ AND $a(p)\equiv 1\pmod{p}$. Often pins $a(p)=1$ uniquely.
- **Generalises Cauchy**: prime $p\mid |G|\Rightarrow$ subgroup of order $p$ (and now: order $p^{r}$).
- **Application 1**: every group of order 162 has a normal subgroup of order 81. (Sylow uniqueness $\Rightarrow$ normality.)
- **Application 2**: every group of order $15$ is cyclic. (Two unique Sylow subgroups; counting gives an element of order $15$.)
- **Standard pattern**: count $a(p)$ via $a(p)\mid t,\,a(p)\equiv 1\pmod{p}$, often forces $a(p)=1$, hence the Sylow is normal, often the group is a direct product or cyclic.
- **Next lecture**: more applications of Sylow - classifying small groups, finishing the course.
