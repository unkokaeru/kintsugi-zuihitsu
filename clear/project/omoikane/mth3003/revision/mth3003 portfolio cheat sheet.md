# **MTH3003** Group Theory - Portfolio Cheat Sheet

> Created by William Fayers. Good luck and have fun!! :))

## 0. Reference Tables & Foundations

### Definitions

| Concept                        | Definition                                                                                                  |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| Group $(G,*)$                  | Closure + Identity $e_G$ + Inverses + Associativity                                                         |
| Subgroup $H \leq G$            | $H \subseteq G$, itself a group under same operation                                                        |
| Normal $N \unlhd G$            | $g^{-1}kg \in N\ \forall k \in N, g \in G$. Equiv: $gN = Ng\ \forall g$. Equiv: $g^{-1}Ng = N\ \forall g$   |
| Coset $gH$                     | $\{gh : h \in H\}$. Index $[G:H]$ = number of distinct cosets                                               |
| Quotient $G/N$                 | $\{gN : g \in G\}$ with $(aN)(bN) = (ab)N$. Requires $N \unlhd G$                                           |
| Homomorphism $\theta: G \to H$ | $\theta(g_1 g_2) = \theta(g_1)\theta(g_2)\ \forall g_1,g_2$                                                 |
| Kernel / Image                 | $\text{Ker}(\theta) = \{g : \theta(g) = e_H\}$, $\text{Im}(\theta) = \{\theta(g) : g \in G\}$               |
| Isomorphism                    | Bijective homomorphism. $G \cong H$                                                                         |
| $o(g)$, $\text{mod}(G)$        | $o(g)$ = smallest $n$ with $g^n = e$. $\text{mod}(G)$ = number of elements                                  |
| Cyclic $\langle g \rangle$     | $\{g^n : n \in \mathbb{Z}\}$. $G$ cyclic if $G = \langle g \rangle$. $\text{mod}(\langle g \rangle) = o(g)$ |
| Abelian                        | $ab = ba\ \forall a,b$. Simple: only normal subgroups are $\{e\}$ and $G$                                   |
| $\text{FS}(X)$                 | $\{g \in \text{Sym}(X) : \text{supp}(g) = \{x : g(x)\neq x\} \text{ is finite}\}$                           |

**Note**: $\text{mod}(G)=|G|$, just used different notation otherwise it'd break the table.

### Quick Subgroup Test (Theorem 2.2.5)

$H \leq G \iff$ (i) $e_G \in H$, (ii) $h_1,h_2 \in H \Rightarrow h_1 h_2 \in H$, (iii) $h \in H \Rightarrow h^{-1} \in H$.

### Basic Group Theorems (Theorem 2.1.11)

- $(g^{-1})^{-1} = g$. Cancellation: $gh_1 = gh_2 \Rightarrow h_1 = h_2$.
- Socks-and-shoes: $(h_1 h_2)^{-1} = h_2^{-1}h_1^{-1}$. Proof: $(h_1 h_2)(h_2^{-1}h_1^{-1}) = e$.
- Identity and inverses are unique (prove by cancellation).

### Subgroup/Equality Facts

- $|H|=1 \iff H = \{e\}$. Finite: $|H|=|G| \iff H=G$ (since $H \subseteq G$). Infinite: FAILS ($\mathbb{Z} < \mathbb{Q}$ but $|\mathbb{Z}|=|\mathbb{Q}|$).

### Normal Subgroup Equivalences

$(i) \iff (iii)$: $gN \subseteq Ng$ since $gk = (gkg^{-1})g \in Ng$; and $Ng \subseteq gN$ since $kg = g(g^{-1}kg) \in gN$. So $gN = Ng$.

### Important Groups

| Group | Notation | Order | Notes |
| :--- | :--- | :--- | :--- |
| Symmetric | $S_n$ | $n!$ | All permutations of $\{1,\ldots,n\}$ |
| Alternating | $A_n$ | $n!/2$ | Even perms; $A_n \unlhd S_n$; simple for $n \geq 5$ |
| Cyclic | $C_n = \langle(1\ 2\ \ldots\ n)\rangle$ | $n$ | Single generator |
| Dihedral | $D_{2n}$ | $2n$ | Symmetries of regular $n$-gon |
| Klein four | $K_4$ | 4 | $\{e,(1\ 2),(3\ 4),(1\ 2)(3\ 4)\}$; smallest non-cyclic |
| $\mathbb{Z}_n$ | $\langle[1]_n\rangle$ | $n$ | Integers mod $n$ under $\oplus$ |
| $\text{GL}_2(\mathbb{R})$ | - | $\infty$ | Invertible $2\times 2$ matrices ($\det \neq 0$) |
| $\text{SL}_2(\mathbb{R})$ | - | $\infty$ | $\det = 1$ |
| $P$ | - | $\infty$ | $\det > 0$ |
| $\text{FS}(\mathbb{Z})$ | - | $\infty$ | Finitary perms of $\mathbb{Z}$ |

---

## 1. Permutations

### 1a. Converting Representations

**Two-row → cycles**: Start at smallest unused element, follow $\sigma$ until you return. Omit fixed points. **Cycles → two-row**: In $(a_1\ a_2\ \ldots\ a_r)$: $a_i \to a_{i+1}$, $a_r \to a_1$. Unlisted elements are fixed.

### 1b. Composition

$\sigma\rho$ means "apply $\rho$ first, then $\sigma$". Chase each element: $x \to \sigma(\rho(x)) \to \cdots$ until cycle closes. Disjoint cycles commute.

### 1c. Inversion

Reverse each cycle: $(a_1\ a_2\ \ldots\ a_m)^{-1} = (a_m\ \ldots\ a_2\ a_1)$. For disjoint product: invert each factor (order doesn't matter).

### 1d. Order

Single $r$-cycle has order $r$. Disjoint cycles of lengths $r_1,\ldots,r_m$: $o(\sigma) = \text{lcm}(r_1,\ldots,r_m)$.

- **Proof**: Disjoint cycles commute, so $\sigma^k = e$ if and only if $r_i \mid k\ \forall i$ if and only if $\text{lcm} \mid k$.
- **Find order $d$ in $S_n$**: choose cycle lengths summing to $\leq n$ with lowest common multiplier $= d$.
- **No order $p$ (prime $> n$)**: would need a $p$-cycle, requiring $p \leq n$.

### 1e. Solving Equations

$\alpha\sigma = \beta \Rightarrow \sigma = \alpha^{-1}\beta$. $\sigma\alpha = \beta \Rightarrow \sigma = \beta\alpha^{-1}$. $\alpha\sigma\gamma = \beta \Rightarrow \sigma = \alpha^{-1}\beta\gamma^{-1}$. Always verify.

### 1f. Foundational Results

**Disjoint cycles commute** (Prop 1.2.7): If $\{a_i\} \cap \{b_j\} = \varnothing$, then for $x = a_i$: both $\sigma\rho(x)$ and $\rho\sigma(x)$ give $a_{i+1}$ (since $\rho$ fixes $a_{i+1}$). Similarly for $b_j$'s and fixed points.

**Disjoint cycle decomposition** (Prop 1.3.4): Start at $x_1$, follow $\sigma$ until first repeat - must be $x_1$ (by injectivity), giving a cycle. Remove and repeat on remaining elements.

---

## 2. Subgroups, Normality & Cyclic Groups

### 2a. Proving $H \leq G$

Apply Quick Subgroup Test. Key examples:

- **$H \cap K \leq G$**: $e \in H \cap K$; $a,b \in H \cap K \Rightarrow ab \in H$ and $ab \in K$; $a^{-1} \in H$ and $a^{-1} \in K$.
- **$\text{Im}(\theta) \leq H$**: $e_H = \theta(e_G) \in \text{Im}$; $\theta(g_1)\theta(g_2) = \theta(g_1 g_2) \in \text{Im}$; $\theta(g)^{-1} = \theta(g^{-1}) \in \text{Im}$.
- **$\text{FS}(\mathbb{Z}) \leq \text{Sym}(\mathbb{Z})$**: $\text{supp}(e) = \varnothing$; $\text{supp}(fg) \subseteq \text{supp}(f) \cup \text{supp}(g)$; $\text{supp}(g^{-1}) = \text{supp}(g)$.
- **$A_n \leq S_n$**: $\sigma(e)=1$; $\sigma(gh)=\sigma(g)\sigma(h)=1$; $\sigma(g^{-1})=\sigma(g)=1$.

### 2b. Proving $N \unlhd G$

Show $g^{-1}kg \in N\ \forall k \in N, g \in G$. **Shortcuts**:

- $G$ Abelian $\Rightarrow$ every subgroup normal ($g^{-1}kg = k$).
- $N = \text{Ker}(\theta) \Rightarrow N \unlhd G$ automatically.
- $[G:N]=2 \Rightarrow N \unlhd G$ (only two cosets, so $gN = Ng$).
- **Determinant trick**: $\det(M^{-1}AM) = \det(A)$, so $\text{det}$-defined subgroups ($\text{SL}_2$, $P$) are normal.
- **Support trick**: $\text{supp}(g^{-1}hg) \subseteq g^{-1}(\text{supp}(h))$, same finite size. So $\text{FS}(X) \unlhd \text{Sym}(X)$.

**Examples**: $A_n \unlhd S_n$: $\sigma(g^{-1}hg) = \sigma(g)^{-1}\cdot 1\cdot\sigma(g)=1$. $C_3 \unlhd S_3$: check by cases. $H\cap N \unlhd H$ (when $N \unlhd G$): $h^{-1}kh \in H$ (closure) and $h^{-1}kh \in N$ (normality).

### 2c. Cyclic Groups

$G = \langle g \rangle$ if every element is a power of $g$. For $|G|=p$ prime: any $g \neq e$ has $|\langle g\rangle|$ dividing $p$, so $|\langle g\rangle|=p=|G|$. For $\mathbb{Z}_n$: $[m]_n = m \cdot [1]_n$.

### 2d. Listing $\langle \,g\, \rangle$

Compute $e, g, g^2, \ldots$ until return to $e$. Example: $g = (1\ 3\ 5\ 7)(2\ 4) \in S_{10}$, $o(g) = 4$. $\langle g \rangle = \{e,\ g,\ (1\ 5)(3\ 7),\ (1\ 7\ 5\ 3)(2\ 4)\}$. Subgroup: $\langle g^2 \rangle = \{e, (1\ 5)(3\ 7)\}$.

---

## 3. Lagrange's Theorem

### Statement (Theorem 4.2.5)

$H \leq G$ finite $\Rightarrow |G| = [G:H] \cdot |H|$. So $|H| \mid |G|$ and $o(g) \mid |G|$.

**Proof**: $G$ is a disjoint union of $[G:H]$ cosets (Cor 4.1.4), each of size $|H|$ (bijection $h \mapsto gh$).

**$o(g) \mid |G|$**: $o(g) = |\langle g\rangle|$, and $\langle g \rangle \leq G$, so Lagrange applies.

### Applications

- No subgroup/element of order $k$ if $k \nmid |G|$. Converse fails: $A_4$ (order 12) has no subgroup of order 6.
- **Cauchy**: $p$ prime, $p \mid |G| \Rightarrow \exists$ element of order $p$.
- **$C_p$ is simple**: subgroup orders divide $p$, so only $\{e\}$ and $C_p$.

### Cosets

- $aH = bH \iff a^{-1}b \in H$. **Proof** ($\Rightarrow$): $a \in bH \Rightarrow a = bh \Rightarrow a^{-1}b = h^{-1} \in H$. ($\Leftarrow$): $a^{-1}b = h_0 \Rightarrow ah = b(h_0^{-1}h) \in bH$ so $aH \subseteq bH$; symmetrically $bH \subseteq aH$.
- Cosets partition $G$: if $aH \cap bH \ni g = ah_1 = bh_2$, then $a^{-1}b = h_1 h_2^{-1} \in H$, so $aH = bH$.

**Listing cosets**: Start with $eH$; pick $g \notin H$, form $gH$; repeat until $G$ exhausted. Example: $H = \{e,(1\ 2)\}$ in $S_3$: cosets $\{e,(1\ 2)\}$, $\{(1\ 2\ 3),(1\ 3)\}$, $\{(1\ 3\ 2),(2\ 3)\}$. $[S_3:H]=3$.

---

## 4. Dihedral Groups $D_{2n}$

### Structure & Relations

$D_{2n} = \{e, \rho, \ldots, \rho^{n-1}, \sigma, \sigma\rho, \ldots, \sigma\rho^{n-1}\}$, $|D_{2n}|=2n$.

- $\rho = (1\ 2\ \ldots\ n)$ (rotation by $2\pi/n$), $\sigma = (2\ n)(3\ n{-}1)\cdots$ (reflection through vertex 1).
- $\rho^n = e$, $\sigma^2 = e$, $\rho^k\sigma = \sigma\rho^{-k} = \sigma\rho^{n-k}$.
- **Proof**: $(\rho\sigma)^2 = e$ (reflection has order 2), so $\rho\sigma = \sigma^{-1}\rho^{-1} = \sigma\rho^{-1}$.

### Computing in $D_{2n}$

Push $\sigma$'s left using $\rho\sigma = \sigma\rho^{-1}$, reduce with $\sigma^2=e$, $\rho^n=e$. Example: $\rho^3\sigma = \sigma\rho^{-3} = \sigma\rho^{n-3}$.

### Cycle Notation for $D_{2n}$

Rotations: $\rho^k$ sends $i \to i+k \pmod{n}$. Reflections: draw $n$-gon, track vertices geometrically.

**$D_{10}$**: $\rho=(1\ 2\ 3\ 4\ 5)$, $\sigma=(2\ 5)(3\ 4)$. $\sigma\rho=(1\ 5)(2\ 4)$, $\sigma\rho^2=(1\ 4)(2\ 3)$, $\sigma\rho^3=(1\ 3)(4\ 5)$, $\sigma\rho^4=(1\ 2)(3\ 5)$.

### Symmetry Groups & Construction

Label vertices, find all rotations and reflections as permutations. Regular $n$-gon $\to D_{2n}$. Cross/plus with 8 corners: 4 rotations + 4 reflections $= D_8$. To build $D_{2n}$: regular $n$-gon with matching decorations.

### $\langle\rho,\sigma\rangle = D_{2n}$

Any word reduces to $\sigma^k\rho^j$ via $\rho\sigma = \sigma\rho^{-1}$. Since $\sigma^2=e$, $\rho^n=e$: $k \in \{0,1\}$, $j \in \{0,\ldots,n{-}1\}$, giving $2n$ elements.

---

## 5. Homomorphisms & Isomorphisms

### 5a. Proving/Disproving Homomorphism

Check $\theta(g_1g_2) = \theta(g_1)\theta(g_2)\ \forall g_1,g_2$. To disprove: one counterexample suffices.

- $\phi(g)=g^2$: homomorphism if and only if $G$ Abelian (since $(g_1g_2)^2 = g_1^2g_2^2$ if and only if $g_1g_2 = g_2g_1$).
- Canonical map $\phi(h)=hN$: $\phi(h_1h_2) = h_1h_2N = (h_1N)(h_2N) = \phi(h_1)\phi(h_2)$.
- Canonical map $\pi: G \to G/N$, $\pi(g)=gN$: surjective homomorphism with $\text{Ker}(\pi)=N$.

### 5b. Properties (Prop 5.2.4)

$\theta: G \to H$ homomorphism $\Rightarrow$: $\theta(e_G) = e_H$ (cancel $\theta(g)$ from $\theta(g) = \theta(e_Gg)$). $\theta(g^{-1}) = \theta(g)^{-1}$. $\theta(g^m) = \theta(g)^m$ (induction). $\text{Im}(\theta) \leq H$. $\text{Ker}(\theta) \unlhd G$.

### 5c. Proving Isomorphism

Construct $\theta$ and verify: (1) homomorphism, (2) injective ($\text{Ker}=\{e\}$), (3) surjective. If $|G|=|H|$ finite: injective $\iff$ surjective.

- **Power maps**: $g \mapsto g^k$ on $C_n$ is iso if and only if $\gcd(k,n)=1$.
- **Strategy**: define on generators, extend. E.g. $D_6 \cong S_3$: $\theta(\rho)=(1\ 2\ 3)$, $\theta(\sigma)=(1\ 2)$.

### 5d. $\text{Ker}(\theta) \unlhd G$

$\theta(g^{-1}ag) = \theta(g)^{-1}\theta(a)\theta(g) = \theta(g)^{-1}e_H\theta(g) = e_H$, so $g^{-1}ag \in \text{Ker}(\theta)$.

---

## 6. Isomorphism Theorems

### First (Theorem 6.0.1): $G/\text{Ker}(\phi) \cong \text{Im}(\phi)$

Via $\theta(gK) = \phi(g)$. **Use**: find $\text{Ker}$ and $\text{Im}$ of a homomorphism, conclude quotient $\cong$ image.

**Proof**: (1) Well-defined: $g_1K = g_2K \Rightarrow g_1^{-1}g_2 \in K \Rightarrow \phi(g_1)=\phi(g_2)$. (2) Homomorphism: $\theta(g_1Kg_2K)=\phi(g_1g_2)=\phi(g_1)\phi(g_2)$. (3) Onto: $\phi(g)=\theta(gK)$. (4) 1-1: $\theta(g_1K)=\theta(g_2K) \Rightarrow \phi(g_1)=\phi(g_2) \Rightarrow g_1^{-1}g_2 \in K$.

**Applications**: $\mathbb{Z}/n\mathbb{Z} \cong \mathbb{Z}_n$; $S_n/A_n \cong C_2$ (signature); $\text{GL}_2/\text{SL}_2 \cong \mathbb{R}^*$ (det); $P/\text{SL}_2 \cong \mathbb{R}_{>0}$; $\text{GL}_2/P \cong C_2$ (sign of the determinant, $\text{sgn det}$).

### Second (Theorem 6.0.4): $H/(H \cap N) \cong (HN)/N$

Map $\phi(h) = hN$: homomorphism with $\text{Ker} = H \cap N$. Apply FIT.

### Third (Theorem 6.0.5): $(G/N)/(M/N) \cong G/M$

("Fool's Cancellation.") **Proof**: $\phi(gN) = gM$. Well-defined: $g_1^{-1}g_2 \in N \subseteq M$. Homomorphism: yes. Onto: yes. $\text{Ker} = M/N$. Apply FIT.

---

## 7. Alternating Group & Signature

### Signature Function

$\sigma(g) = \prod_{i}(-1)^{r_i - 1}$ where $r_i$ are disjoint cycle lengths. Even: $\sigma=1$. Odd: $\sigma=-1$. **Quick rule**: count even-length cycles; odd count $\to$ odd perm.

- $\sigma$ is a homomorphism: $\sigma(gh)=\sigma(g)\sigma(h)$. Also $\sigma(g^{-1})=\sigma(g)$ and $\sigma(g^{-1}hg)=\sigma(h)$.

**Proof $\sigma$ is homomorphism** (Prop 7.2.2): $\Delta = \prod_{i<j}(x_i-x_j)$. $gh$ sends $\Delta \to g(\sigma(h)\Delta) = \sigma(h)\sigma(g)\Delta$, so $\sigma(gh) = \sigma(g)\sigma(h)$.

### $A_n = \text{Ker}(\sigma)$

$A_n \leq S_n$ (Quick Subgroup Theorem: $\sigma(e)=1$, $\sigma(gh)=1\cdot1=1$, $\sigma(g^{-1})=1$). $A_n \unlhd S_n$ (kernel of homomorphism). $|A_n|=n!/2$ (FIT: $S_n/A_n \cong C_2$ since $\sigma$ surjective). Simple for $n \geq 5$.

### Cycle Shape Tables

**$S_3$**: $\varnothing$(+1,1), $(2)$(-1,3), $(3)$(+1,2). $A_3 = \{e,(1\ 2\ 3),(1\ 3\ 2)\}$.

**$S_4$**: $\varnothing$(+1,1), $(2)$(-1,6), $(2,2)$(+1,3), $(3)$(+1,8), $(4)$(-1,6). $|A_4|=12$. Note: $K_4 \unlhd A_4$, so $A_4$ not simple.

**$S_5$**: $\varnothing$(+1,1), $(2)$(-1,10), $(2,2)$(+1,15), $(3)$(+1,20), $(3,2)$(-1,20), $(4)$(-1,30), $(5)$(+1,24). $|A_5|=60$.

---

## 8. Proof Toolbox

### Order Switching Lemma (Lemma 4.2.3)

$N \unlhd G$, $g \in G$, $k \in N \Rightarrow \exists k',k'' \in N$: $gk = k'g$ and $kg = gk''$. (Since $gN = Ng$.)

### Key Lemma (Lemma 4.2.4): $H \leq G$, $N \unlhd G$

$HN = NH$ (Order Switching). $H \cap N \unlhd H$. $HN \leq G$ (Quick Subgroup Theorem + Order Switching for closure/inverses).

### More Tools

- **Conjugation power**: $(g^{-1}hg)^n = g^{-1}h^ng$ (expand, cancel $gg^{-1}$ pairs).
- **Division algorithm**: $o(g)=n \Rightarrow \langle g \rangle = \{e,g,\ldots,g^{n-1}\}$. Any $g^m = g^r$ where $m = qn+r$.
- **Abelian**: every subgroup normal; $g \mapsto g^k$ always a homomorphism; $(gh)^n = g^nh^n$.
- **Non-Abelian**: $(gh)^2 \neq g^2h^2$ in general. $\text{FS}(\mathbb{Z})$ is non-Abelian (contains $S_n$ for all $n$).

### $G/N$ Is a Well-Defined Group

- **Well-defined**: $a_1N=a_2N$, $b_1N=b_2N$ with $a_2=a_1k_1$, $b_2=b_1k_2$. Then $a_2b_2 = a_1k_1b_1k_2 = a_1b_1(b_1^{-1}k_1b_1)k_2 \in (a_1b_1)N$ since $b_1^{-1}k_1b_1 \in N$.
- **Identity**: $eN=N$. **Inverses**: $(a^{-1}N)(aN) = N$. **Associativity**: inherited from $G$.

---

## 9. Quotient Groups

### Strategy

1. $|G/N| = |G|/|N|$. If $= 2$: $G/N \cong C_2$.
2. List cosets, or find homomorphism $\phi$ with $\text{Ker}(\phi)=N$ and apply FIT: $G/N \cong \text{Im}(\phi)$.

| $G$ | $N$ | $G/N$ | Via |
| :--- | :--- | :--- | :--- |
| $\mathbb{Z}$ | $n\mathbb{Z}$ | $\mathbb{Z}_n$ | $\phi(m)=[m]_n$ |
| $S_n$ | $A_n$ | $C_2$ | Signature |
| $S_3$ | $C_3$ | $C_2$ | Index 2 |
| $\text{GL}_2$ | $\text{SL}_2$ | $\mathbb{R}^*$ | $\text{det}$ |
| $\text{GL}_2$ | $P$ | $C_2$ | $\text{sgn(det)}$ |
| $P$ | $\text{SL}_2$ | $\mathbb{R}_{>0}$ | $\text{det}$ at $P$ |
