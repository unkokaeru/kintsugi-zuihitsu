# MTH3003 Weekly Problems 7

> **Original Documents**: [[mth3003 weekly problem sheet 7.pdf]] / `[[mth3003 weekly problem sheet 7 handwritten solutions.pdf]]` / [[mth3003 weekly problem sheet 7 solutions.pdf]]
>
> **Vibes**: All five problems are exercises in the [[Signature]] / [[Alternating group]]. Once you have the recipe - the signature of a permutation in disjoint-cycle form is $(-1)^{\sum(r_{i}-1)}$ - everything is mechanical. Builds toward systematically listing the 60 elements of $A_{5}$.
>
> **Used Techniques**:
>  - **Signature recipe**: write $g=c_{1}c_{2}\cdots c_{m}$ in disjoint cycles, then $\sigma(g)=\prod_{i}(-1)^{r_{i}-1}$ where $r_{i}=|c_{i}|$.
>  - **Homomorphism property**: $\sigma(gh)=\sigma(g)\sigma(h)$, so signs of products multiply.
>  - **Inverse property**: $\sigma(g^{-1})=\sigma(g)$ (cycles are reversed but lengths unchanged).
>  - **$A_{n}$ membership**: $g\in A_{n}\Leftrightarrow \sigma(g)=+1$.

---

## 7.1. Signatures in $S_{10}$ and Membership of $A_{10}$

> [!question]
> Recall from lectures that the signature function $\sigma \colon S_{n} \to \{1,-1\}$ is used to define the alternating group $A_{n}$.
>
> Calculate the signatures of the following permutations in $S_{10}$, and hence determine whether or not they lie in the alternating group $A_{10}$.
>
> 1. $g = (6\,1\,4)(5\,3\,2\,7)(8\,9\,10)$
> 2. $h = (1\,2)(3\,4)(5\,6)(7\,8)$
> 3. $g^{-1}$
> 4. $gh$
> 5. $g^{-1}hg$

**Solutions.**

(1) $g$ is in disjoint-cycle form with cycle lengths $(3,4,3)$. So $\sigma(g)=(-1)^{2}(-1)^{3}(-1)^{2}=(+1)(-1)(+1)=-1$. So $\boxed{g\notin A_{10}}$.

(2) $h$ has cycle lengths $(2,2,2,2)$. $\sigma(h)=(-1)^{4}=+1$. So $\boxed{h\in A_{10}}$.

(3) $g^{-1}$ is $g$ with cycles reversed, so the cycle lengths are unchanged. $\sigma(g^{-1})=\sigma(g)=-1$. So $\boxed{g^{-1}\notin A_{10}}$.

(4) $\sigma(gh)=\sigma(g)\sigma(h)=(-1)(+1)=-1$. So $\boxed{gh\notin A_{10}}$.

(5) $\sigma(g^{-1}hg)=\sigma(g^{-1})\sigma(h)\sigma(g)=(-1)(+1)(-1)=+1$. So $\boxed{g^{-1}hg\in A_{10}}$.

> [!note]
> Conjugation $g^{-1}hg$ always preserves signature (the two factors of $\sigma(g)^{\pm 1}$ cancel). This is consistent with conjugation preserving cycle shape.

---

## 7.2. Alternating Group Membership from Cycle Shapes

> [!question]
> Determine whether or not permutations with each of the following cycle shapes lie in some alternating group $A_{n}$.
>
> 1. Cycle shape $(3,2,2,2)$
> 2. Cycle shape $(7,3,3,2,2)$
> 3. Cycle shape $(5,5,5)$
> 4. Cycle shape $(2,2,2,2,2)$

**Solutions.** Compute $\sigma=\prod (-1)^{r_{i}-1}$ for each shape.

(1) $(3,2,2,2)$: $\sigma=(-1)^{2}(-1)^{1}(-1)^{1}(-1)^{1}=(+1)(-1)(-1)(-1)=-1$. **Not in $A_{n}$.**

(2) $(7,3,3,2,2)$: $\sigma=(-1)^{6}(-1)^{2}(-1)^{2}(-1)^{1}(-1)^{1}=(+1)(+1)(+1)(-1)(-1)=+1$. **In $A_{n}$.**

(3) $(5,5,5)$: $\sigma=(-1)^{4}(-1)^{4}(-1)^{4}=+1$. **In $A_{n}$.**

(4) $(2,2,2,2,2)$: $\sigma=(-1)^{5}=-1$. **Not in $A_{n}$.**

> [!note] Quick rule
> A cycle of length $r$ is even iff $r$ is **odd**. So $\sigma(g)=+1$ iff the number of even-length cycles is **even**. Easier than computing each factor.

---

## 7.3. Elements of $A_{3}$ via Cycle Shapes

> [!question]
> Without looking at your notes, try to list all the elements in the alternating group $A_{3}$ by first listing all the cycle shapes that can occur in $A_{3}$.

**Cycle shapes in $S_{3}$.**

| Shape | Example | Signature | In $A_{3}$? |
|---|---|---|---|
| $\emptyset$ | $e$ | $+1$ | ✓ |
| $(2)$ | $(1\,2)$ | $-1$ | ✗ |
| $(3)$ | $(1\,2\,3)$ | $+1$ | ✓ |

So $A_{3}$ consists of all permutations with shapes $\emptyset$ or $(3)$:

$$
\boxed{A_{3}=\{e,\;(1\,2\,3),\;(1\,3\,2)\}\cong C_{3}.}
$$

---

## 7.4. Cycle Shapes in $S_{5}$ and Which Lie in $A_{5}$

> [!question]
> List all the cycle shapes that can occur in $S_{5}$ and determine which of these lie in the alternating group $A_{5}$.

**Systematic enumeration** by the length of the largest cycle:

| Largest | Possibilities | Cycle shape |
|---|---|---|
| 1 | $(*)(*)(*)(*)(*)$ | $\emptyset$ (identity) |
| 2 | $(**)(*)(*)(*)$ or $(**)(**)(*)$ | $(2)$, $(2,2)$ |
| 3 | $(***)(*)(*)$ or $(***)(**)$ | $(3)$, $(3,2)$ |
| 4 | $(****)(*)$ | $(4)$ |
| 5 | $(*****)$ | $(5)$ |

| Cycle shape | Example | Signature | In $A_{5}$? |
|---|---|---|---|
| $\emptyset$ | $e$ | $+1$ | ✓ |
| $(2)$ | $(1\,2)$ | $-1$ | ✗ |
| $(2,2)$ | $(1\,2)(3\,4)$ | $+1$ | ✓ |
| $(3)$ | $(1\,2\,3)$ | $+1$ | ✓ |
| $(3,2)$ | $(1\,2\,3)(4\,5)$ | $-1$ | ✗ |
| $(4)$ | $(1\,2\,3\,4)$ | $-1$ | ✗ |
| $(5)$ | $(1\,2\,3\,4\,5)$ | $+1$ | ✓ |

So the cycle shapes in $A_{5}$ are: $\emptyset,\;(2,2),\;(3),\;(5)$.

---

## 7.5. Listing All Elements of $A_{5}$

> [!question]
> Use your answer to Question 7.4 to list all elements of the alternating group $A_{5}$.

**Counts by cycle shape.** Total $|A_{5}|=|S_{5}|/2=60$.

**Shape $\emptyset$ (1 element):** $e$.

**Shape $(2,2)$ (15 elements).** Choose the fixed point ($5$ choices), then partition the remaining $4$ into two pairs ($3$ choices), giving $5\cdot 3=15$:

- 1 fixed: $(2\,3)(4\,5),(2\,4)(3\,5),(2\,5)(3\,4)$
- 2 fixed: $(1\,3)(4\,5),(1\,4)(3\,5),(1\,5)(3\,4)$
- 3 fixed: $(1\,2)(4\,5),(1\,4)(2\,5),(1\,5)(2\,4)$
- 4 fixed: $(1\,2)(3\,5),(1\,3)(2\,5),(1\,5)(2\,3)$
- 5 fixed: $(1\,2)(3\,4),(1\,3)(2\,4),(1\,4)(2\,3)$

**Shape $(3)$ (20 elements).** Choose 3 of 5 elements ($\binom{5}{3}=10$), then 2 cyclic orientations per choice: $10\cdot 2=20$. Listed by selected triple:

$\{1,2,3\}:\ (1\,2\,3),(1\,3\,2)$;

$\{1,2,4\}:\ (1\,2\,4),(1\,4\,2)$; $\{1,2,5\}:\ (1\,2\,5),(1\,5\,2)$;

$\{1,3,4\}:\ (1\,3\,4),(1\,4\,3)$; $\{1,3,5\}:\ (1\,3\,5),(1\,5\,3)$;

$\{1,4,5\}:\ (1\,4\,5),(1\,5\,4)$; $\{2,3,4\}:\ (2\,3\,4),(2\,4\,3)$;

$\{2,3,5\}:\ (2\,3\,5),(2\,5\,3)$; $\{2,4,5\}:\ (2\,4\,5),(2\,5\,4)$;

$\{3,4,5\}:\ (3\,4\,5),(3\,5\,4)$.

**Shape $(5)$ (24 elements).** $5!/5=24$ (divide by $5$ for rotations of the same cycle). Listed by writing each $5$-cycle starting at $1$:

$(1\,2\,3\,4\,5),(1\,2\,3\,5\,4),(1\,2\,4\,3\,5),(1\,2\,4\,5\,3),(1\,2\,5\,3\,4),(1\,2\,5\,4\,3)$;

$(1\,3\,2\,4\,5),(1\,3\,2\,5\,4),(1\,3\,4\,2\,5),(1\,3\,4\,5\,2),(1\,3\,5\,2\,4),(1\,3\,5\,4\,2)$;

$(1\,4\,2\,3\,5),(1\,4\,2\,5\,3),(1\,4\,3\,2\,5),(1\,4\,3\,5\,2),(1\,4\,5\,2\,3),(1\,4\,5\,3\,2)$;

$(1\,5\,2\,3\,4),(1\,5\,2\,4\,3),(1\,5\,3\,2\,4),(1\,5\,3\,4\,2),(1\,5\,4\,2\,3),(1\,5\,4\,3\,2)$.

**Total.** $1+15+20+24=60=|A_{5}|$. ✓
