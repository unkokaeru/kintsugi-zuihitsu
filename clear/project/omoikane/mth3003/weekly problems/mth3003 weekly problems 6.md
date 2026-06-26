# MTH3003 Weekly Problems 6

> **Original Documents**: [[mth3003 weekly problem sheet 6.pdf]] / `[[mth3003 weekly problem sheet 6 handwritten solutions.pdf]]` / [[mth3003 weekly problem sheet 6 solutions.pdf]]
>
> **Vibes**: Four short proofs around the [[homomorphism]] machinery: image is a subgroup, signature gives a $C_{2}$ quotient, restriction-to-quotient maps are homomorphisms, and a determinant case study using all three [[Isomorphism theorems]]. Mostly Quick-Subgroup-Test or First-Isomorphism-Theorem applications.
>
> **Used Techniques**:
>  - Quick Subgroup Test (identity, closure, inverses).
>  - First Isomorphism Theorem: surjective $\theta\colon G\to H\Rightarrow G/\ker\theta\cong H$.
>  - Third Isomorphism Theorem: $G/N\,/\,H/N\cong G/H$ when $N\trianglelefteq H\trianglelefteq G$.
>  - Determinant as a homomorphism $\det\colon \mathrm{GL}_{2}(\mathbb{R})\to\mathbb{R}^{*}$.

***

## 6.1. Image of a Homomorphism is a Subgroup

> [!question]
> Let $G$ and $H$ be groups, and let $\theta \colon G \to H$ be a group homomorphism. Prove that $\operatorname{Im}(\theta)$ is a subgroup of $H$ (that is, $\operatorname{Im}(\theta) \leq H$).
>
> *Hint.* Use the Quick Subgroup Test: show that $\operatorname{Im}(\theta)$ is nonempty and that for all $x,y \in \operatorname{Im}(\theta)$ we have $xy^{-1} \in \operatorname{Im}(\theta)$.

**Solution.** Apply the Quick Subgroup Test directly. Fix $h_{1},h_{2}\in\mathrm{Im}(\theta)$, so $h_{i}=\theta(g_{i})$ for some $g_{i}\in G$.

- **Identity.** $\theta(e_{G})=e_{H}$, so $e_{H}\in\mathrm{Im}(\theta)$.
- **Closure.** $\theta(g_{1}g_{2})=\theta(g_{1})\theta(g_{2})=h_{1}h_{2}$, so $h_{1}h_{2}\in\mathrm{Im}(\theta)$.
- **Inverses.** $\theta(g_{1}^{-1})=\theta(g_{1})^{-1}=h_{1}^{-1}$, so $h_{1}^{-1}\in\mathrm{Im}(\theta)$.

Hence $\mathrm{Im}(\theta)\leq H$. $\blacksquare$

---

## 6.2. Using the Signature to Get a Quotient Isomorphic to $C_{2}$

> [!question]
> Suppose $n \geq 2$. Show that there exists a surjective homomorphism $\sigma \colon S_{n} \to C_{2}$. Prove that $S_{n}$ has a normal subgroup $K$ such that $S_{n} / K \cong C_{2}$.
>
> *Hint.* Use the signature function $\sigma$ as the homomorphism in the First Isomorphism Theorem.

**Solution.** The [[Signature]] function $\sigma\colon S_{n}\to\{\pm 1\}\cong C_{2}$ is a surjective group homomorphism (any transposition has signature $-1$, identity has $+1$). Let $K=\ker(\sigma)=A_{n}$, the [[Alternating group]] of even permutations. By the First Isomorphism Theorem,

$$
\boxed{S_{n}/A_{n}\cong\mathrm{Im}(\sigma)=C_{2}.}
$$

So $K=A_{n}$ is the required normal subgroup. $\blacksquare$

---

## 6.3. Natural Map from a Subgroup into a Quotient

> [!question]
> Let $G$ be a group with $H \leq G$ and $N \trianglelefteq G$. Define a map $\varphi \colon H \to (HN)/N$ by $\varphi(h) = hN$ for each $h \in H$. Prove that $\varphi$ is a group homomorphism.

**Solution.** Fix $h_{1},h_{2}\in H$. Compute

$$
\varphi(h_{1}h_{2})=h_{1}h_{2}N=(h_{1}N)(h_{2}N)=\varphi(h_{1})\varphi(h_{2}),
$$

using the multiplication rule in the quotient group. Hence $\varphi$ is a homomorphism. $\blacksquare$

---

## 6.4. Normal Subgroups in $\operatorname{GL}_{2}(\mathbb{R})$ via Determinant

> [!question]
> Consider the group $\operatorname{GL}_{2}(\mathbb{R})$ of all invertible $2 \times 2$ real matrices, the subgroup $\operatorname{SL}_{2}(\mathbb{R})$ of invertible $2 \times 2$ real matrices with determinant equal to $1$, and the subgroup
>
> $$
> P = \{ M \in \operatorname{GL}_{2}(\mathbb{R}) : \det(M) > 0 \}.
> $$
>
> 1. Prove that $P$ and $\operatorname{SL}_{2}(\mathbb{R})$ are normal subgroups of $\operatorname{GL}_{2}(\mathbb{R})$.
> 2. Give an intuitive description of the quotient groups $\operatorname{GL}_{2}(\mathbb{R}) / \operatorname{SL}_{2}(\mathbb{R})$, $P / \operatorname{SL}_{2}(\mathbb{R})$, and $\operatorname{GL}_{2}(\mathbb{R}) / P$.
> 3. Prove that
> 
> $$
> \operatorname{GL}_{2}(\mathbb{R}) / \operatorname{SL}_{2}(\mathbb{R})
> \;\big/\;
> P / \operatorname{SL}_{2}(\mathbb{R})
> \;\cong\;
> \operatorname{GL}_{2}(\mathbb{R}) / P.
> $$

Write $G=\mathrm{GL}_{2}(\mathbb{R})$, $K=\mathrm{SL}_{2}(\mathbb{R})$.

**Part 1: $P,K\trianglelefteq G$.** For any $M,A\in G$,

$$
\det(M^{-1}AM)=\det(M)^{-1}\det(A)\det(M)=\det(A),
$$

since determinants are real numbers and multiplication is commutative in $\mathbb{R}^{*}$. Hence:

- If $A\in P$, $\det(M^{-1}AM)=\det(A)>0$, so $M^{-1}AM\in P$. So $P\trianglelefteq G$.
- If $A\in K$, $\det(M^{-1}AM)=\det(A)=1$, so $M^{-1}AM\in K$. So $K\trianglelefteq G$.

$$
\boxed{P\trianglelefteq G,\quad K\trianglelefteq G.}
$$

**Part 2: Quotient descriptions.** The determinant map $\det\colon G\to\mathbb{R}^{*}$ (the multiplicative group of nonzero reals) is a surjective homomorphism with $\ker(\det)=K$. By the First Isomorphism Theorem,

$$
G/K\cong\mathbb{R}^{*}\quad\text{(non-zero reals under multiplication)}.
$$

Restricting $\det$ to $P$ gives $\det\colon P\to \mathbb{R}_{>0}$, surjective with kernel $K$, so

$$
P/K\cong\mathbb{R}_{>0}\quad\text{(positive reals under multiplication)}.
$$

For $G/P$: matrices split by sign of determinant. Take $J=\begin{pmatrix}-1&0\\0&1\end{pmatrix}$, $\det(J)=-1$. Any $M\in G$ has $\det(M)>0$ ($M\in P$) or $\det(M)<0$ (then $JM\in P$). The cosets are $\{P,JP\}$ with $J^{2}=I$, giving

$$
G/P\cong\{I,J\}\cong C_{2}.
$$

**Part 3: Apply the Third Isomorphism Theorem.** Since $K\trianglelefteq P\trianglelefteq G$ (with $K\trianglelefteq G$ already shown):

$$
\frac{G/K}{P/K}\cong G/P.\qquad\blacksquare
$$

The chain of quotients telescopes - concretely $\mathbb{R}^{*}/\mathbb{R}_{>0}\cong C_{2}$, recovering the sign of the determinant.
