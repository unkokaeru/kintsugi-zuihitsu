# MTH3003 Weekly Problems 1

> **Original Documents**: [[mth3003 weekly problem sheet 1.pdf|Problem Sheet]] / [[mth3003 weekly problem sheet 1 handwritten solutions.pdf|My Handwritten Solutions]] / [[mth3003 weekly problem sheet 1 solutions.pdf|Provided Solutions]]
>
> **Vibes**: Super easy, just using the same techniques over and over again - the orders of permutations bits was really cool, though.
>
> **Used Techniques**:
>   - [[Product of Permutations]].
>   - [[Permutation#Quick Inverse Proposition]], directly and to solve equations.
>   - Orders of Permutations.

---

## 1.1. Converting Between Permutation Notation

> [!question]
> Write the following permutations as products of disjoint cycles:
>
> $$
> \begin{matrix}1 & 2 & 3 & 4 & 5 & 6 & 7 \\\downarrow & \downarrow & \downarrow & \downarrow & \downarrow & \downarrow & \downarrow \\4 & 7 & 2 & 1 & 5 & 6 & 3\end{matrix}\quad\text{and}\quad\begin{matrix}1 & 2 & 3 & 4 & 5 \\ \downarrow & \downarrow & \downarrow & \downarrow & \downarrow \\3 & 5 & 1 & 4 & 2\end{matrix}
> $$
>
> Then do the opposite, writing this permutation out in full: $(1\,7\,2\,11\,9)(4\,10\,5)(3\,8\,6)\in S_{12}$.

Calculating directly…

1. $\boxed{(1\,4)(2\,7\,5)\in S_{7}}$.
2. $\boxed{(1\,3)(2\,5)\in S_{5}}$.
3. $\boxed{\begin{matrix}1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\ \downarrow & \downarrow & \downarrow & \downarrow & \downarrow & \downarrow & \downarrow & \downarrow & \downarrow & \downarrow & \downarrow & \downarrow \\ 7 & 11 & 8 & 10 & 4 & 33 & 2 & 6 & 1 & 5 & 4 & 12\end{matrix}}$

---

## 1.2. Calculating Inverse Permutations

> [!question]
> Let $g=(1\,4\,2\,7\,8)$, $h=(1\,4\,5)$, and $k=(5\,7\,9)(1\,3\,2)$. Write the following as a product of disjoint cycles…
>
> 1. $k^{-1}$, *checked by calculating $kk^{-1}$*
> 2. $ghk$,
> 3. $k^{-1}ghk$.

1. Calculating using the [[Permutation#Quick Inverse Proposition]], $\boxed{k^{-1}=(9\,7\,5)(2\,3\,1)}$. Quickly checking mentally, $kk^{-1}=\emptyset=e$.
2. $ghk=(1\,4\,2\,7\,8)(1\,4\,5)(5\,7\,9)(1\,3\,2)=\boxed{(1\,3\,7\,9\,4\,5\,8)\in S_{9}}$.
3. $\boxed{k^{-1}gkh=(3\,5\,8\,2)(4\,9)\in S_{9}}$, calculated directly using the before results.

---

## 1.3. Orders of Permutations

> [!question]
> The **order of a permutation** $\sigma$ is written as $o(\sigma)$, and is defined to be the smallest natural number $n\ge1$ such that $\sigma^n=e$, e.g., $o((1\,2\,3))=3$ and $o(e)=1$. Hence…
>
> 1. What is the order of the permutation $(1\,2\,3\,4\,5)$?
> 2. What is the order of the permutation $(1\,5\,7)(2\,3\,6)$?
> 3. What is the order of the permutation $(1\,3\,5)(2\,4)$?
> 4. Find an element of $S_{10}$ with order $15$.
> 5. Is there an element of $S_{10}$ with order 19? If so, find it; if not, why not?
> 6. Suppose a permutation $g\in S_{n}$ is written as a product of disjoint $r_{i}$-cycles, $g=c_{1}c_{2}\dots c_{m}$. Can you find a formula to calculate $o(g)$ and prove the formula is correct?
> *Hint: first try to work out a formula for the order of a cycle of length $r$*.

1. $\boxed{5}$, trivially found.
2. $\boxed{3}$, trivially found.
3. $\boxed6$, trivially found.
4. $\boxed{(1\,2\,3\,4\,5)(6\,7\,8)\in S_{10}}$, as the LCM of the cycle's orders is 15; trivially confirmed.
5. No, as 19 is prime, so cannot be decomposed into cycles with orders that multiply to give 19 - as previously discovered.
6. *Formalising the previous findings*.

---

## 1.4. Solving Permutation Equations

> [!question]
> Find a permutation $\sigma\in S_{4}$ that satisfies the permutation equation: $(1\,3\,2)\sigma=(1\,2)(3\,4)$.

Using left-multiplication to multiply each by the inverse of the cycle multiplying $\sigma$, we find $\sigma=(1\,3\,2)^{-1}(1\,2)(3\,4)$ and hence, using the [[Permutation#Quick Inverse Proposition]], $\sigma=(2\,3\,1)(1\,2)(3\,4)=\boxed{(1\,3\,4)}$.

---

## 1.5. Solving Permutation Equations

> [!question]
> Find a permutation $\sigma\in S_{7}$ that satisfies the permutation equation: $(1\,3\,2)(5\,7\,4)\sigma=(1\,2)(3\,4)$.

Using left-multiplication to multiply each by the inverse of the cycle multiplying $\sigma$, we find $\sigma=(1\,3\,2)^{-1}(5\,7\,4)^{-1}(1\,2)(3\,4)$ and hence, using the [[Permutation#Quick Inverse Proposition]], $\sigma=(2\,3\,1)(4\,7\,5)(1\,2)(3\,4)=\boxed{(1\,3\,7\,5\,4)}$

---

## 1.6. Solving Permutation Equations

> [!question]
> Find a permutation $\sigma \in S_{9}$ that satisfies the permutation equation: $(1\,2\,3\,4\,5\,6\,7\,8\,9)\sigma=(9\,8\,7\,6\,5\,4\,3\,2\,1)$.

Using left-multiplication to multiply each by the inverse of the cycle multiplying $\sigma$, we find immediately that $\sigma$ will be the square of the right-hand side, and hence $\boxed{(1\,8\,6\,4\,2\,9\,7\,5\,3)}$.
