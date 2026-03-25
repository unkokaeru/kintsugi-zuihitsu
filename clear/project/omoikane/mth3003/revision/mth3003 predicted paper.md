# **MTH3003** Group Theory — Practice Exam

> **Instructions**: Answer ALL questions. Show all working. This exam covers the material from Weeks 1–7 of the module.

---

## Question 1 — Permutation Computation [Sections 1a–1d]

Let $g = (1\ 6\ 3\ 8)(2\ 5\ 7)$ and $h = (1\ 4\ 2)(3\ 7\ 5\ 6)$ be elements of $S_9$.

**(a)** Write $g$ out as a full two-row mapping (i.e. state where each element $1, 2, \ldots, 9$ is sent). [2 marks]

**(b)** Compute $g^{-1}$. [2 marks]

**(c)** Compute $gh$ as a product of disjoint cycles. [4 marks]

**(d)** Find $o(g)$ and $o(h)$. [2 marks]

**(e)** Find an element of $S_{12}$ with order 20, or explain why no such element exists. [3 marks]

---

## Question 2 — Solving a Permutation Equation [Section 1e]

Find $\sigma \in S_8$ satisfying

$$
(1\ 4\ 5)(2\ 3\ 7\ 8) = (1\ 6\ 2)\,\sigma\,(3\ 5\ 4).
$$

Verify your answer by substituting back. [6 marks]

---

## Question 3 — Subgroups and Cyclic Groups [Sections 2a, 2c, 2d]

**(a)** Let $G$ be a group with subgroups $H \leq G$ and $K \leq G$. Prove that $H \cap K \leq G$. [4 marks]

**(b)** Let $g = (1\ 2\ 5\ 4)(3\ 6) \in S_7$. Find $o(g)$, list all elements of $\langle g \rangle$, and list all elements of $\langle g^2 \rangle$. [5 marks]

**(c)** Let $p$ be a prime number and $|G| = p$. Prove that $G$ is cyclic. [4 marks]

---

## Question 4 — Dihedral Groups [Section 4]

Consider the dihedral group $D_{12}$ (symmetries of a regular hexagon), with vertices labelled $1, 2, 3, 4, 5, 6$ anticlockwise. Let $\rho$ denote anticlockwise rotation by $\pi/3$ and $\sigma$ the reflection through the axis passing through vertex 1.

**(a)** Write $\rho$ and $\sigma$ in cycle notation. [2 marks]

**(b)** Write $\sigma\rho^2$ and $\sigma\rho^4$ in cycle notation. [4 marks]

**(c)** Simplify $\rho^4 \sigma \rho^2 \sigma$ to the form $\rho^i$ or $\sigma\rho^i$. [4 marks]

**(d)** Using the relation $\rho\sigma = \sigma\rho^{-1}$, prove that $\langle \rho, \sigma \rangle = D_{12}$. [4 marks]

---

## Question 5 — Normal Subgroups and Lagrange's Theorem [Sections 2b, 3]

**(a)** State Lagrange's Theorem. [2 marks]

**(b)** Prove that $S_7$ has no subgroup of order 11. [2 marks]

**(c)** Let $G$ be a group, $H \leq G$, and $N \unlhd G$. Prove that $H \cap N \unlhd H$. [5 marks]

**(d)** Let $H \leq G$ and $N \unlhd G$. Using the Order Switching Lemma, prove that $HN \leq G$. [6 marks]

---

## Question 6 — Homomorphisms and Isomorphisms [Section 5]

**(a)** Define what it means for a map $\theta: G \to H$ to be a group homomorphism. [1 mark]

**(b)** Let $\theta: G \to H$ be a homomorphism.

- (i) Prove $\theta(e_G) = e_H$. [2 marks]
- (ii) Prove $\text{Ker}(\theta) \unlhd G$. [4 marks]

**(c)** Consider the map $\phi: C_5 \to C_5$ defined by $\phi(g) = g^3$. Determine whether $\phi$ is a homomorphism, and if so, whether it is an isomorphism. Justify your answers fully. [4 marks]

**(d)** Prove that $D_6 \cong S_3$ by constructing an explicit isomorphism. [5 marks]

---

## Question 7 — Isomorphism Theorems and Quotient Groups [Sections 6, 10]

Let $\det: \text{GL}_2(\mathbb{R}) \to \mathbb{R}^*$ denote the determinant map, which is a surjective homomorphism.

**(a)** State the First Isomorphism Theorem. [2 marks]

**(b)** Prove that $\text{SL}_2(\mathbb{R}) \unlhd \text{GL}_2(\mathbb{R})$. [3 marks]

**(c)** Using the First Isomorphism Theorem, show that $\text{GL}_2(\mathbb{R}) / \text{SL}_2(\mathbb{R}) \cong (\mathbb{R}^*, \times)$. [3 marks]

**(d)** Let $P = \{M \in \text{GL}_2(\mathbb{R}) : \det(M) > 0\}$. Using the Third Isomorphism Theorem, show that

$$
(\text{GL}_2(\mathbb{R}) / \text{SL}_2(\mathbb{R})) \,\big/\, (P / \text{SL}_2(\mathbb{R})) \cong \text{GL}_2(\mathbb{R}) / P.
$$

Hence identify $\text{GL}_2(\mathbb{R})/P$ as a familiar group. [4 marks]

---

## Question 8 — The Alternating Group and Signature Function [Section 7]

**(a)** Let $g = (1\ 4\ 6\ 2\ 8)(3\ 9\ 7)(5\ 10)$ and $h = (1\ 3)(2\ 5)(4\ 6)(7\ 8)(9\ 10)$ be elements of $S_{10}$.

- (i) Compute $\sigma(g)$ and state whether $g \in A_{10}$. [2 marks]
- (ii) Compute $\sigma(h)$ and state whether $h \in A_{10}$. [2 marks]
- (iii) Compute $\sigma(g^{-1}hg)$ and state whether $g^{-1}hg \in A_{10}$. [2 marks]

**(b)** List all cycle shapes of elements in $S_4$, determine which correspond to even permutations, and hence find $|A_4|$. [5 marks]

**(c)** Using the signature function $\sigma: S_n \to C_2$, prove that $A_n \unlhd S_n$ and $S_n / A_n \cong C_2$. [4 marks]
