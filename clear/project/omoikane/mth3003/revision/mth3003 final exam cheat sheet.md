# **MTH3003** Group Theory - Final Exam Cheat Sheet

> [!TIP] Created by William Fayers
> Good luck and have fun!! :)) - **start at the §1 dispatcher**, match your question, follow the arrows to a method, run the numbered steps, sanity-check (§14). Every recipe links to the definitions it needs. Straight from Simon's notes (theorem numbers kept). Ez 100%.

## §0. Notation, Groups, Key Facts

**Notation & terms** - every cross-reference bottoms out here.

| Symbol / term | Plain meaning |
|---|---|
| $(G,*)$, $e_G$, $\lvert G\rvert$ | group with operation $*$; **identity** $e_G$ = the element that does nothing in $G$ (e.g. $0$ in $(\mathbb{Z},+)$, $1$ in $(\mathbb{R}^*,\times)$); order = number of elements |
| $o(g)$ | order of an element: least $n$ with $g^n=e$ (times to multiply $g$ to reach $e$) |
| abelian | $ab=ba$ - order of multiplication doesn't matter |
| simple (Def 4.2.1) | only normal subgroups are $\langle e\rangle$ and $G$ |
| $H\leq G$ | **subgroup**: a smaller group inside $G$ (same operation) |
| $\langle g\rangle$, $\langle S\rangle$ | **generated**: all you can build by multiplying; $\langle g\rangle$ = powers of $g$, with $\lvert\langle g\rangle\rvert=o(g)$; **cyclic** = whole group is some $\langle g\rangle$ |
| $gH$, $[G:H]$ | **coset** = $H$ shifted by $g$, $\{gh:h\in H\}$; **index** = number of cosets $=\lvert G\rvert/\lvert H\rvert$ |
| $N\trianglelefteq G$ | **normal subgroup**: $gN=Ng$ - the kind you can "divide by" |
| $G/N$ | **quotient group**: the cosets of $N$, made a group by $(aN)(bN)=(ab)N$ (needs $N$ normal) |
| $\theta,\varphi,\lambda$ | **homomorphism**: $\theta(ab)=\theta(a)\theta(b)$ ($\lambda$ usually a group action) |
| $\ker\theta$, $\mathrm{Im}\,\theta$ | **kernel** = elements sent to $e_H$; **image** = elements actually hit |
| $\cong$ | **isomorphic**: a perfect 1-1 homomorphism ("same group, relabelled") |
| conjugation, $C_G(x)$ | replace $x$ by $g^{-1}xg$; **centraliser** = elements that commute with $x$ |
| action, $Gx$, $\mathrm{Stab}_G(x)$, $\mathrm{Fix}_X(g)$ | **action** = each $g$ permutes a set $X$; **orbit** = where $x$ can be sent (**transitive** = one orbit); **stabiliser** = the $g$'s fixing $x$; **fixed set** = points fixed by one $g$ |
| Sylow $p$-subgroup | biggest subgroup whose size is a power of the prime $p$ |
| $G\times H$ | **direct product**: pairs $(g,h)$ multiplied slot-by-slot |
| misc | $a\mid b$ "$a$ divides $b$" ($\nmid$ = doesn't); $\mathbb{R}^*$ nonzero reals; $\mathbb{Z}_n$ integers mod $n$; $(1\,2\,3)$ cycle |

**Axioms** $(G,*)$: Closure, Associativity, Identity, Inverses.

**Identities** (Thm 2.1.11): $(g^{-1})^{-1}=g$; cancel $gh_1=gh_2\Rightarrow h_1=h_2$; $(h_1h_2)^{-1}=h_2^{-1}h_1^{-1}$; $(g^{-1}hg)^n=g^{-1}h^ng$; identity/inverses unique.

| Group | Order | Abelian? | Notes |
|---|---|---|---|
| $C_n=\langle(1\,2\,\dots\,n)\rangle$, $\mathbb{Z}_n$ | $n$ | **yes** | cyclic |
| $C_n\times C_m$ / any finite abelian | $nm$ | **yes** | $\cong C_{nm}$ iff $\gcd(n,m)=1$ (§13) |
| $K_4\cong C_2\times C_2$ | $4$ | **yes** | $\{e,(1\,2),(3\,4),(1\,2)(3\,4)\}$; smallest non-cyclic |
| $(\mathbb{Z},+),(\mathbb{R}^*,\times)$ | $\infty$ | **yes** | |
| $S_n$ | $n!$ | no ($n\geq3$) | all perms of $\{1,\dots,n\}$ |
| $A_n$ | $n!/2$ | no ($n\geq4$) | even perms; $A_n\trianglelefteq S_n$; simple $n\geq5$ |
| $D_{2n}$ | $2n$ | no ($n\geq3$) | $n$-gon symmetries ($D_6$ tri, $D_8$ square, $D_{10}$ pent) |
| $\mathrm{GL}_2(\mathbb{R}),\mathrm{SL}_2(\mathbb{R})$ | $\infty$ | no | $\det\neq0$; $\det=1$ |
| $\mathrm{FS}(\mathbb{Z})$ | $\infty$ | no | finitary perms; $\trianglelefteq\mathrm{Sym}(\mathbb{Z})$ |

## §1. Dispatcher - Find Your Question

**Q1-type (permutations / symmetry)**

- Cycle notation, product, inverse, order, find element of order $d$, solve $\alpha\sigma\gamma=\beta$ → **§2**
- Odd/even (signature), is $g\in A_n$, list $A_n$ → **§9**
- $D_{2n}$ in cycles / simplify word / $\langle\rho,\sigma\rangle=D_{2n}$ / symmetry group of a shape / "is it abelian" → **§5**; prove $S_3\cong D_6$ → **§5+§8**

**Q2-type (structure: Lagrange, homs, iso theorems, simple)**

- Prove $H\leq G$ / group identity → **§3**; list $\langle g\rangle$ / "$G$ cyclic" / $|\langle b,c\rangle|$ → **§4**
- State+prove Lagrange / rule out a subgroup order / cosets / Cauchy → **§6**
- Prove $N\trianglelefteq G$ / $HN\leq G$ / quotient group → **§7**
- Is it simple? / hom out of a simple group → **§7**
- Prove/disprove homomorphism / build an isomorphism → **§8**
- State+prove First Iso / identify a quotient via a hom / 3rd-theorem cancellation → **§9** (theorems) + **§8** (build map)

**Q3/Q4-type (actions / Sylow / abelian)**

- Is $\lambda$ an action / verify-or-refute / Cayley → **§10**
- Orbit & stabiliser / Orbit-Stabiliser / rule out orbit size / orbit counting → **§11**
- State Sylow / Sylow example / count $a(p)$ / "not simple" / subgroup of order $p^r$ → **§12**
- Classify abelian groups of order $n$ / subgroups of abelian / element of order $d$ / $G\cong M\times N$ / $C_n\times C_m$ abelian → **§13**

*Each question: part (a) ~9 marks (often "state & prove"), (b)~8, (c)~8 (stretch). Answer best 3 of 4.*

## §2. Permutations

*Cycle $(a_1\dots a_r)$*: $a_i\mapsto a_{i+1}$, $a_r\mapsto a_1$, rest fixed. Disjoint cycles commute (1.2.7); every $g$ = unique product of disjoint cycles (1.3.4). Products act **right-to-left**.

- **Two-row → cycles:** start at smallest unused $x$, follow $x\to g(x)\to\dots$ till back to $x$ (closes a cycle), repeat on unused; drop fixed points.
- **Cycles → two-row:** read off $a_i\mapsto a_{i+1}$; unlisted points fixed.
- **Product $gh$:** chase each point right-to-left through every factor, close each cycle, repeat. (Disjoint factors can be done independently.) *ex $(1\,2\,3)(2\,4)$* (do $(2\,4)$ first): $1\to2$, $2\to4$, $4\to3$, $3\to1$ → $(1\,2\,4\,3)$.
- **Inverse:** reverse each cycle, $(a_1\dots a_r)^{-1}=(a_r\dots a_1)$; invert a product factor-by-factor.
- **Order:** $o(g)=\mathrm{lcm}$ of cycle lengths.
- **Find element of order $d$ in $S_n$:** choose disjoint cycle lengths summing to $\leq n$ with $\mathrm{lcm}=d$ (e.g. $20=\mathrm{lcm}(4,5)$, lengths $4{+}5\leq n$). **None exists** if it would need a cycle longer than $n$ (e.g. order $19$ in $S_{10}$: needs a $19$-cycle).
- **Solve $\alpha\sigma\gamma=\beta$:** cancel outward - $\sigma=\alpha^{-1}\beta\gamma^{-1}$ (left factor inverts on left, right factor on right). Then compute and **verify** by substituting back. *ex (WP1.4): $(1\,3\,2)\,\sigma=(1\,2)(3\,4)$* → $\sigma=(1\,3\,2)^{-1}(1\,2)(3\,4)=(1\,2\,3)(1\,2)(3\,4)=(1\,3\,4)$.
- **Odd/even** → §9.

*ex (Mock A1a)*: $g=(1\,2\,3)(4\,5)$, $o(g)=\mathrm{lcm}(3,2)=6$; $\langle g\rangle=\{e,g,(1\,3\,2),(4\,5),(1\,2\,3),(1\,3\,2)(4\,5)\}$.

## §3. Subgroups

- **Prove $H\leq G$ (Quick Subgroup Test, Thm 2.2.5):** show 1) $e\in H$, 2) $h_1,h_2\in H\Rightarrow h_1h_2\in H$, 3) $h\in H\Rightarrow h^{-1}\in H$ (or combine 2-3: $h_1h_2^{-1}\in H$). Standard targets: $H\cap K$ (use both), $\mathrm{Im}\,\theta$ (§8), $\mathrm{Stab}_G(x)$ (§11), $A_n$ (§9), $\mathrm{FS}(X)$ (support stays finite, §7).
- **Prove a group identity:** expand and cancel $gg^{-1}=e$. Key ones: $(g^{-1}hg)^n=g^{-1}h^ng$; $(h_1h_2)^{-1}=h_2^{-1}h_1^{-1}$.
- **Order facts:** $|H|=1\iff H=\langle e\rangle$; finite $|H|=|G|\iff H=G$ (fails if infinite: $\mathbb{Z}<\mathbb{Q}$).

## §4. Cyclic Groups

*$\langle g\rangle=\{g^n\}$, $|\langle g\rangle|=o(g)$.*

- **List $\langle g\rangle$:** compute $e,g,g^2,\dots$ until $e$ repeats ($o(g)$ elements). $\langle g^k\rangle$ likewise.
- **Prove $|\langle g\rangle|=o(g)$:** division algorithm $m=q\,o(g)+r$ $\Rightarrow g^m=g^r$, so exactly $g^0,\dots,g^{o(g)-1}$.
- **Prove $G$ cyclic:** if $|G|=p$ prime, any $g\neq e$ has $|\langle g\rangle|\mid p$ (Lagrange §6) so $=p$, thus $\langle g\rangle=G$. For $\mathbb{Z}_n$: $[m]_n=([1]_n)^m$ so $\mathbb{Z}_n=\langle[1]_n\rangle$.
- **Disprove "$|\langle b,c\rangle|=o(b)o(c)$":** counterexample $b=(1\,2\,3)(4\,5),c=(4\,5)$: $\langle b,c\rangle=\langle b\rangle$, order $6\neq12$.

## §5. Dihedral & Symmetry Groups

*$D_{2n}=\{e,\rho,\dots,\rho^{n-1},\sigma,\sigma\rho,\dots,\sigma\rho^{n-1}\}$, order $2n$; $\rho^n=\sigma^2=e$, $\boxed{\rho\sigma=\sigma\rho^{-1}}$ (so $\rho^k\sigma=\sigma\rho^{-k}$). $\rho=(1\,2\,\dots\,n)$, $\sigma$ = reflection through vertex $1$.*

- **Write $D_{2n}$ in cycle notation:** rotations $\rho^k=$ "shift by $k$"; reflections - draw the $n$-gon and read off, or compute $\sigma\rho^i$.
- **Prove $\rho\sigma=\sigma\rho^{-1}$:** $\rho\sigma$ is a reflection so $o(\rho\sigma)=2$, i.e. $(\rho\sigma)^2=e$; rearrange $\rho\sigma=(\rho\sigma)^{-1}=\sigma^{-1}\rho^{-1}=\sigma\rho^{-1}$.
- **Simplify a word to $\rho^k$ or $\sigma\rho^k$:** push every $\sigma$ to the left via $\rho\sigma=\sigma\rho^{-1}$, then reduce mod $\rho^n=e$, $\sigma^2=e$.
- **Prove $\langle\rho,\sigma\rangle=D_{2n}$:** every word reduces (above) to $\sigma^k\rho^j$, $k\in\{0,1\}$, $j\in\{0,\dots,n-1\}$ = the $2n$ listed elements.
- **Symmetry group of a labelled shape:** write each rotation and reflection as a permutation of the labels; collect them.
- **Construct a non-$n$-gon shape with $D_{2n}$ symmetry:** regular $n$-gon + an identical decoration on each edge (e.g. hexagon + square per edge $\to D_{12}$).
- **Is the symmetry group abelian?** **Identify it by counting symmetries:** $m$ rotations and **no** reflections → $\cong C_m$ (cyclic, **abelian**); $m$ rotations **and** $m$ reflections → $\cong D_{2m}$ (**non-abelian** for $m\geq3$). *ex (Mock B1b): a pinwheel (4-fold rotation, no reflections) → $C_4$ → abelian.* (Which groups are abelian: §0.)
- **Prove $S_3\cong D_6$:** build the iso (§8) on generators $\rho\mapsto(1\,2\,3),\sigma\mapsto(1\,2)$; check relations hold and images are all 6 of $S_3$.

## §6. Cosets & Lagrange

*Coset $gH=\{gh:h\in H\}$ (Def 4.1.1); $[G:H]$ = #distinct cosets. $aH=bH\iff a^{-1}b\in H$ (4.1.3); cosets are disjoint-or-equal, all size $|H|$ (4.1.4).*

- **List cosets / find index:** start $eH=H$; pick $g\notin$ listed, form $gH$; repeat until $G$ used up; $[G:H]$ = count. *ex $S_3$, $H=\langle(1\,2)\rangle=\{e,(1\,2)\}$:* $H=\{e,(1\,2)\}$, $(1\,2\,3)H=\{(1\,2\,3),(1\,3)\}$, $(1\,3\,2)H=\{(1\,3\,2),(2\,3)\}$ → $[S_3:H]=3$.
- **Lagrange (Thm 4.2.5) - "state & prove":**
	- **Statement:** if $H\leq G$ with $G$ finite, then $|G|=[G:H]\,|H|$; in particular $|H|\mid|G|$.
	- **Terms:** $H\leq G$ = **subgroup**; $\lvert G\rvert,\lvert H\rvert$ = **orders** (number of elements); **coset** $gH=\{gh:h\in H\}$; **index** $[G:H]$ = number of distinct cosets of $H$ in $G$.
	- **Proof:** every $g\in G$ lies in a coset (4.1.4), so $G=g_1H\cup\dots\cup g_nH$ with the $n=[G:H]$ distinct cosets; distinct cosets are disjoint (4.1.4) and all have size $|H|$ (bijection $h\mapsto g_ih$); hence $|G|=|g_1H|+\dots+|g_nH|=n|H|=[G:H]\,|H|$, so $|H|\mid|G|$. $\blacksquare$
- **Rule out a subgroup/element of order $k$:** if $k\nmid|G|$, impossible. ($o(g)\mid|G|$ via $\langle g\rangle$, §4.) *Converse is false* ($A_4$, no order-6).
- **Cauchy (4.2.6):** prime $p\mid|G|\Rightarrow$ an element of order $p$ exists.

## §7. Normal Subgroups, Quotients & Simple Groups

*$N\trianglelefteq G$ (Def 4.1.5): $g^{-1}kg\in N$ $\forall k\in N,g\in G$; equiv. $gN=Ng$ $\iff g^{-1}Ng=N$.*

- **Prove $N\trianglelefteq G$ - pick the cheapest route:**
	1. **Direct:** fix $g\in G,k\in N$, show $g^{-1}kg\in N$ (do it for *all* $g,k$).
	2. **Abelian** $G$ ⇒ automatic (which are abelian: §0).
	3. **$N=\ker\theta$** for some hom $\theta$ ⇒ normal (§8) - the slickest; e.g. $A_n=\ker\sigma$, $\mathrm{SL}_2=\ker\det$.
	4. **Index 2** ($[G:N]=2$, §6) ⇒ normal.
	5. **Invariant under conjugation by a formula:** $\det(g^{-1}Ag)=\det A$, so $\mathrm{SL}_2=\{\det=1\}$ and $P=\{A:\det A>0\}$ are normal in $\mathrm{GL}_2$; and $\lvert\mathrm{supp}(g^{-1}hg)\rvert=\lvert\mathrm{supp}(h)\rvert$ (support = points moved), so $\mathrm{FS}(X)\trianglelefteq\mathrm{Sym}(X)$.
	6. **Unique Sylow $p$-subgroup** ⇒ normal (§12).
- **Order Switching (Lem 4.2.3)** $N\trianglelefteq G$: $gk=k'g$, $kg=gk''$ ($k',k''\in N$). **Key Lemma (4.2.4):** $H\leq G,N\trianglelefteq G\Rightarrow HN=NH$, $H\cap N\trianglelefteq H$, $HN\leq G$. *(Use these to prove $HN\leq G$ via Quick Subgroup Test, swapping orders with Order Switching.)*
- **Quotient $G/N$** (needs $N\trianglelefteq G$): elements $gN$, $(aN)(bN)=(ab)N$, $|G/N|=|G|/|N|$. **Identify it:** find a surjective hom with kernel $N$ and apply FIT (§9) - e.g. $|G/N|=2\Rightarrow C_2$.
- **Is $G$ simple?** (only normal subgroups $\langle e\rangle,G$):
	- $C_p$ ($p$ prime) **yes** (subgroup orders $1,p$ only).
	- **No** if abelian with a proper nontrivial subgroup (e.g. $K_4$ - all subgroups normal).
	- $S_n$ ($n\geq3$) **no** ($A_n\trianglelefteq S_n$, §9).
	- $M\times N$ **no** ($\langle e\rangle\times N\trianglelefteq M\times N$, §13). E.g. $C_5\times C_9$.
	- General order: use Sylow to force a unique (normal) Sylow ⇒ **not simple** (§12).
- **Hom out of a simple group** (Mock B2c, worked):
	- **Claim:** if $G$ is simple and $\varphi:G\to H$ is a homomorphism, then either $\varphi(g)=e_H$ for **all** $g$ (trivial), or $\varphi$ is **injective**.
	- **Proof:** $\ker\varphi\trianglelefteq G$ (§8). Since $G$ is simple, its only normal subgroups are $\langle e\rangle$ and $G$, so $\ker\varphi=\langle e\rangle$ or $\ker\varphi=G$. If $\ker\varphi=G$, every $g$ maps to $e_H$ (trivial); if $\ker\varphi=\langle e\rangle$, then $\varphi$ is injective (§8). $\blacksquare$

## §8. Homomorphisms & Isomorphisms

*Hom: $\theta(g_1g_2)=\theta(g_1)\theta(g_2)$. Props (5.2.4): $\theta(e_G)=e_H$, $\theta(g^{-1})=\theta(g)^{-1}$, $\theta(g^m)=\theta(g)^m$, $\mathrm{Im}\,\theta\leq H$, $\ker\theta\trianglelefteq G$.*

- **Prove a map is a hom:** check $\theta(g_1g_2)=\theta(g_1)\theta(g_2)$ for general $g_1,g_2$. **Disprove:** one counterexample. ($\phi(g)=g^k$ is a hom $\iff G$ abelian, since $(g_1g_2)^k=g_1^kg_2^k\iff$ commute.)
- **Prove $\theta(e)=e$:** $\theta(g)=\theta(eg)=\theta(e)\theta(g)$, cancel. **$\theta(g^m)=\theta(g)^m$:** induction. **$\ker\theta\trianglelefteq G$:** $\theta(g^{-1}kg)=\theta(g)^{-1}e_H\theta(g)=e_H$. **$\mathrm{Im}\,\theta\leq H$:** Quick Subgroup Test (§3).
- **Prove an isomorphism $G\cong H$:** build $\theta$ (define on generators, extend), then check 1) hom, 2) injective ($\ker\theta=\langle e\rangle$), 3) onto. *Shortcut:* if $|G|=|H|$ finite, injective $\iff$ onto (check one). *ex $S_3\cong D_6$* (here $D_6=\langle\rho,\sigma\rangle$ with $\rho$ = a rotation and $\sigma$ = a reflection, §5): set $\theta(\rho)=(1\,2\,3),\theta(\sigma)=(1\,2)$; the defining relations carry over ($(1\,2\,3)^3=e$, $(1\,2)^2=e$, $(1\,2\,3)(1\,2)=(1\,2)(1\,2\,3)^{-1}$) so $\theta$ is a hom; its 6 images are all of $S_3$, so (equal orders) it's a bijection ⇒ iso.
- **Power map** $g\mapsto g^k$ on $C_n$ is an iso $\iff\gcd(k,n)=1$.
- $\ker\theta$ normal is the engine for §7 route 3 and §9.

## §9. Isomorphism Theorems & the Alternating Group

- **First Isomorphism Theorem (Thm 6.0.1) - "state & prove":**
	- **Statement:** if $\theta:G\to H$ is a homomorphism with kernel $K$ and image $I$, then $G/K\cong I$ - via the map $\theta^*(gK)=\theta(g)$.
	- **Terms:** **homomorphism** $\theta(ab)=\theta(a)\theta(b)$; **kernel** $K=\{g:\theta(g)=e_H\}$; **image** $I=\{\theta(g):g\in G\}$; **quotient** $G/K$ = cosets of $K$ with $(aK)(bK)=(ab)K$; $\cong$ = **isomorphic** (a bijective homomorphism).
	- **Proof (4 checks):** **well-defined** $g_1K=g_2K\Rightarrow g_1^{-1}g_2\in K\Rightarrow\theta(g_1^{-1}g_2)=e_H\Rightarrow\theta(g_1)=\theta(g_2)$; **hom** $\theta^*(g_1K\,g_2K)=\theta^*(g_1g_2K)=\theta(g_1g_2)=\theta(g_1)\theta(g_2)$; **onto** each element of $I$ is $\theta(g)=\theta^*(gK)$; **1-1** $\theta^*(g_1K)=\theta^*(g_2K)\Rightarrow\theta(g_1)=\theta(g_2)\Rightarrow\theta(g_1^{-1}g_2)=e_H\Rightarrow g_1^{-1}g_2\in K\Rightarrow g_1K=g_2K$. $\blacksquare$
- **Use FIT to identify a quotient $G/N$:** spot a surjective hom $G\to H$ with $\ker=N$; then $G/N\cong H$. *ex $\mathrm{GL}_2(\mathbb{R})/\mathrm{SL}_2(\mathbb{R})$:* $\det:\mathrm{GL}_2\to\mathbb{R}^*$ is a hom, onto, with $\ker(\det)=\{A:\det A=1\}=\mathrm{SL}_2$; FIT ⇒ $\mathrm{GL}_2/\mathrm{SL}_2\cong\mathbb{R}^*$. Table: $\mathbb{Z}/n\mathbb{Z}\cong\mathbb{Z}_n$ ($m\mapsto[m]_n$); $S_n/A_n\cong C_2$ (signature); $\mathrm{GL}_2/\mathrm{SL}_2\cong\mathbb{R}^*$ ($\det$); $\langle g\rangle/\langle g^d\rangle\cong C_d$.
- **Second (6.0.4):** $H/(H\cap N)\cong(HN)/N$ (map $h\mapsto hN$, kernel $H\cap N$).
- **Third (6.0.5):** $N\leq M$, both $\trianglelefteq G\Rightarrow(G/N)/(M/N)\cong G/M$ ("cancellation"; map $gN\mapsto gM$).

**Signature** $\sigma:S_n\to\{1,-1\}$ (Def 7.2.1, via $\Delta=\prod_{i<j}(x_i-x_j)$). $A_n=\ker\sigma$ (Def 7.3.1). *Cycle shape* $(r_1\geq\dots\geq r_m)$ (7.1.1).

- **Compute $\sigma(g)$:** $\sigma(g)=\prod(-1)^{r_i-1}$ over disjoint cycles (Cor 7.2.3). Quick: **count even-length cycles** - odd count ⇒ odd. $\sigma((1\dots n))=(-1)^{n-1}$ (even iff $n$ odd). *ex (Mock B1a): $(4\,3\,1\,5)(2\,6\,7)$* = 4-cycle (even length → sign $-1$) · 3-cycle (sign $+1$) → $\sigma=-1$, **odd**. For a product $gh$, just multiply signs: $\sigma(gh)=\sigma(g)\sigma(h)$.
- **$\sigma$ is a homomorphism (Prop 7.2.2, examinable).** **Statement:** $\sigma(gh)=\sigma(g)\sigma(h)$. **Proof:** $(gh)\Delta=g(h\Delta)=g(\sigma(h)\Delta)=\sigma(h)(g\Delta)=\sigma(h)\sigma(g)\Delta$, so $\sigma(gh)=\sigma(g)\sigma(h)$. $\blacksquare$ Also $\sigma(g^{-1})=\sigma(g)$ (Prop 7.2.5), $\sigma(g^{-1}hg)=\sigma(h)$; for a product, multiply signs (write as disjoint cycles first if computing directly).
- **Is $g\in A_n$?** $\iff\sigma(g)=1$.
- **$A_n\trianglelefteq S_n$ and $|A_n|=n!/2$ - "state & prove":**
	- **Statement:** the even permutations $A_n=\ker\sigma$ form a normal subgroup of $S_n$, with $|A_n|=n!/2$.
	- **Proof:** *subgroup* (Quick Subgroup Test): $\sigma(e)=1$, $\sigma(gh)=\sigma(g)\sigma(h)=1$, $\sigma(g^{-1})=\sigma(g)=1$. *normal* (Thm 7.3.5): $\sigma(g^{-1}hg)=\sigma(g^{-1})\sigma(h)\sigma(g)=\sigma(g^{-1})\sigma(g)=\sigma(g^{-1}g)=\sigma(e)=1$ (as $\sigma(h)=1$), so $g^{-1}hg\in A_n$. *order* (Thm 7.3.2): $\sigma$ is onto $\{1,-1\}$ with $\ker\sigma=A_n$, so FIT gives $S_n/A_n\cong\{1,-1\}$, whence $|A_n|=|S_n|/2=n!/2$. $\blacksquare$
	- *Simple for $n\geq5$* (proof not examinable); $A_4$ is **not** simple ($K_4\trianglelefteq A_4$).
- **List $A_n$ via cycle shapes** (shape: sign, count): $S_3$ $\varnothing(+,1),(2)(-,3),(3)(+,2)\Rightarrow A_3=\{e,(1\,2\,3),(1\,3\,2)\}$. $S_4$ even: $\varnothing,(2,2)(3),(3)(8)\Rightarrow|A_4|=12$. $S_5$ even: $\varnothing(1),(2,2)(15),(3)(20),(5)(24)\Rightarrow|A_5|=60$ \[$(2,2){=}5{\cdot}3$, $(3){=}\binom53{\cdot}2$, $(5){=}5!/5$\].

## §10. Group Actions & Cayley

*Action (Def 8.1.1) $\lambda:G\times X\to X$: (1) $\lambda(e_G)x=x$ ($e_G$ = the identity of the **group** $G$), (2) $\lambda(fg)x=\lambda(f)(\lambda(g)x)$. Same thing as a hom $\lambda:G\to\mathrm{Sym}(X)$ (8.1.4). $\ker\lambda\trianglelefteq G$.*

- **Verify a map is an action:** check 0) **closure** $\lambda(g)x\in X$, 1) identity $\lambda(e_G)x=x$ (use $G$'s **own** identity $e_G$ - e.g. $0$ in $(\mathbb{Z},+)$, not $1$), 2) compatibility $\lambda(fg)x=\lambda(f)(\lambda(g)x)$.
- **Show it's NOT an action:** exhibit the failing axiom. *Closure* (WP8.4: $(\mathbb{Z},+)$ on $\mathbb{N}$, $\lambda(-5)1=-4\notin\mathbb{N}$); *identity* (Mock A3a: $(\mathbb{Z},+)$ on $\mathbb{Z}$ by $mn$ - here $e_G=0$, and $\lambda(e_G)n=0\cdot n=0\neq n$); *compatibility* (8.1.10: $\lambda(g)x=g^{-1}xg$).
- **A hom $G\to\mathrm{Sym}(X)$ is automatically an action** (and vice versa) - the two are the same data (WP8.8).
- **Standard actions on $X=G$:** *regular* $\lambda(g)x=gx$; *(left) conjugation* $\lambda(g)x=gxg^{-1}$. **On subsets:** $\lambda(g)\{y_1,\dots\}=\{gy_1,\dots\}$ (check it lands in the right-sized subsets).
- **Cayley:** every $G\cong$ a subgroup of $\mathrm{Sym}(G)$. Proof: regular action has $\ker=\langle e\rangle$ ($gx=x\Rightarrow g=e$), so FIT (§9) gives $G\cong\mathrm{Im}\,\lambda$.

## §11. Orbits, Stabilisers, Counting

*Orbit $Gx=\{\lambda(g)x:g\in G\}$ (8.3.1); **transitive** if $Gx=X$. Stabiliser $\mathrm{Stab}_G(x)=\{g:\lambda(g)x=x\}\leq G$ (8.3.2). Orbits partition $X$ (9.1.0). Fixed set $\mathrm{Fix}_X(g)=\{x:\lambda(g)x=x\}$ (9.2.1).*

- **Compute orbit & stabiliser of $x$:** work out $\lambda(g)x$ for **every** $g\in G$, then:
	- **orbit** = the **set of distinct images** $\{\lambda(g)x\}$ - a subset of $X$ (the places $x$ lands);
	- **stabiliser** = the **set of those $g$ that give back $x$** $\{g:\lambda(g)x=x\}$ - a subset of $G$ (the group elements that fix $x$).
- **Deduce if the action is transitive (from the orbit):** transitive $\iff$ the orbit is **all of $X$**, i.e. $Gx=X$ (equivalently $\lvert Gx\rvert=\lvert X\rvert$). So compute the orbit, then compare its size to $\lvert X\rvert$: **equal → transitive; smaller → not transitive.**
- **Prove $\mathrm{Stab}_G(x)\leq G$:** Quick Subgroup Test (§3): $\lambda(e_G)x=x$; $g,h$ fix $x\Rightarrow gh$ fixes $x$; $g$ fixes $x\Rightarrow g^{-1}$ does.
- **Orbit-Stabiliser (Thm 9.1.1) - "state & prove":**
	- **Statement:** for all $x\in X$, $|Gx|=[G:\mathrm{Stab}_G(x)]=|G|/|\mathrm{Stab}_G(x)|$ (finite $G$).
	- **Terms:** **orbit** $Gx=\{\lambda(g)x:g\in G\}$; **stabiliser** $\mathrm{Stab}_G(x)=\{g\in G:\lambda(g)x=x\}$; $[G:\mathrm{Stab}_G(x)]$ = **index** (number of cosets).
	- **Proof:** the map $gS\mapsto\lambda(g)x$ ($S=\mathrm{Stab}_G(x)$) is a bijection $\{$cosets of $S\}\to Gx$, since $\lambda(g)x=\lambda(h)x\iff h^{-1}g\in S\iff gS=hS$ (coset rule §6); so $|Gx|=[G:S]$, and Lagrange gives $|G|/|S|$. $\blacksquare$
- **Find an orbit/stabiliser size** when you know the other: divide $|G|$.
- **Rule out an orbit of size $k$ / a transitive action on $|X|$:** if $k\nmid|G|$ (resp. $|X|\nmid|G|$), impossible (Orbit-Stab forces integer). E.g. no orbit of size 4 in $S_3$ ($4\nmid6$); $D_{10}$ not transitive on a triangle ($3\nmid10$).
- **Conjugation action:** $\mathrm{Stab}_G(x)=C_G(x)$ = **centraliser** (things commuting with $x$); orbit = conjugacy orbit. *ex (Mock A3):* in $S_3$, $\mathrm{Stab}((1\,2))=\{e,(1\,2)\}$, orbit $=\{(1\,2),(1\,3),(2\,3)\}$ (not transitive).
- **Stabiliser of a subset** (Mock B4): $\mathrm{Stab}_{S_5}(\{1,2,3\})=S_{\{1,2,3\}}\times S_{\{4,5\}}$, order $3!\,2!=12$; orbit = all $3$-subsets (size 10); $10\cdot12=120$. ✓
- **$\bigcap_x\mathrm{Stab}_G(x)=\ker\lambda\trianglelefteq G$** (Mock B4c): **quick** - it's the kernel of the action-hom (§10), and any kernel is normal (§8). **Direct** - $h\in N$ fixes *every* point, so for any $x$: $\lambda(g^{-1}hg)x=\lambda(g^{-1})\lambda(h)\lambda(g)x=\lambda(g^{-1})\lambda(g)x=x$; thus $g^{-1}hg\in N$, so $N\trianglelefteq G$.
- **Count orbits (Orbit Counting / Burnside, 9.2.3):** $\#\text{orbits}=\frac1{|G|}\sum_{g}|\mathrm{Fix}_X(g)|$. Recipe for colourings with $c$ colours: each $g$ fixes $c^{\#\text{cycles of }g\text{ on the slots}}$; tabulate, sum, divide by $|G|$. *Octagon edges, 3 col, $D_{16}$:* $498$. *Cube faces, 3 col, rotations (24, no reflections):* $57$. \[Proof: double-count $P=\{(x,g):gx=x\}$: by $g$, $|P|=\sum_g|\mathrm{Fix}_X(g)|$; by $x$, $|P|=\sum_x|\mathrm{Stab}_G(x)|=\sum_x|G|/|Gx|=m|G|$ (orbits partition $X$, each contributes $|G|$). Equate $\Rightarrow m=\frac1{|G|}\sum_g|\mathrm{Fix}_X(g)|$.\]

## §12. Sylow's Theorems

*$|G|=p^rt$ with $p\nmid t$ ($t$ = the part of $|G|$ coprime to $p$). $p$-group (10.1.1): a group of order $p^r$. Sylow $p$-subgroup (10.1.3): a subgroup of order $p^r$ (the largest power of $p$ dividing $|G|$). $a(p)$ = the number of Sylow $p$-subgroups.*

- **State Sylow (define every term, Mock A4a):**
	1. **First (10.1.5):** $p\mid|G|\Rightarrow$ a Sylow $p$-subgroup exists. (Generalises Cauchy §6.)
	2. **Second (10.1.6):** every $p$-subgroup lies in a conjugate of a Sylow $p$-subgroup; all Sylow $p$-subgroups conjugate.
	3. **Third (10.1.7):** $a(p)\mid t$ **and** $a(p)\equiv1\pmod p$.
	*(Proofs not examinable.)*
- **Give a Sylow example:** factor $|G|$ for the order $p^r$, then **write down any subgroup of that order** built from elements of $p$-power order. Its type depends on $p^r$ - **not always dihedral**:
	- *order $p$* ($r=1$): cyclic $C_p=\langle\,p\text{-cycle}\,\rangle$ - e.g. Sylow 5 of $S_5$ is $\langle(1\,2\,3\,4\,5)\rangle\cong C_5$.
	- *order $p^2$*: $C_{p^2}$ or $C_p\times C_p$ - e.g. Sylow 3 of $S_6$ ($720=2^4\,3^2\,5$) is $\langle(1\,2\,3)\rangle\times\langle(4\,5\,6)\rangle\cong C_3\times C_3$ (abelian, not dihedral).
	- *order 8* ($2^3$, in $S_4,S_5$): the square's symmetries $D_8=\langle(1\,2\,3\,4),(1\,3)\rangle$ - **this** is the dihedral case (§5).
	- (only need it to *exist*? don't construct - just cite Sylow First, next bullet.)
- **Prove a subgroup of order $p^r$ exists:** factor $|G|$, quote Sylow First.
- **Count / bound $a(p)$** (via Sylow Third): write $\lvert G\rvert=p^r t$ with $p\nmid t$ (so $t$ = the part of $\lvert G\rvert$ coprime to $p$, and $a(p)$ = number of Sylow $p$-subgroups). Then $a(p)\mid t$ **and** $a(p)\equiv1\pmod p$. So **list the divisors of $t$, keep those $\equiv1\pmod p$** - that's the candidate set. *To show $a(p)\geq k$:* exhibit distinct Sylow subgroups (e.g. two squares on different 4-point sets ⇒ $a(2)\geq2$, so $\geq3$ if the candidates are $\{1,3,\dots\}$).
- **Prove "$G$ is not simple"** (i.e. find a normal subgroup that is *neither* $\langle e\rangle$ *nor* $G$):
	1. **Why this works:** *simple* = the only normal subgroups are $\langle e\rangle$ and $G$. So you just need **one** proper, nontrivial normal subgroup. Best source: a Sylow $p$-subgroup that is **unique**, because $a(p)=1\Rightarrow$ it's normal (§7).
	2. **Factorise** $\lvert G\rvert=p^r t$ and pick a prime $p$ dividing it - **try the largest prime first** (most likely to force $a(p)=1$).
	3. **Pin down $a(p)$** with Sylow Third: write the divisors of $t$, then keep only those $\equiv1\pmod p$.
	4. **If only $a(p)=1$ survives:** the Sylow $p$-subgroup $P$ is unique, hence $P\trianglelefteq G$; and $\lvert P\rvert=p^r$ lies strictly between $1$ and $\lvert G\rvert$, so $P$ is proper and nontrivial ⇒ **$G$ is not simple**. (If $a(p)$ is *not* forced to 1, try another prime.)
	- *Worked example, $\lvert G\rvert=63$:* factor $63=3^2\cdot7$. **Take $p=7$** (largest): then $t=9$, divisors $1,3,9$; their remainders mod 7 are $1,3,2$, so only **$a(7)=1$** survives. So the Sylow 7-subgroup $P$ ($\lvert P\rvert=7$) is unique ⇒ $P\trianglelefteq G$; since $1<7<63$, $P$ is proper and nontrivial ⇒ $G$ not simple. $\blacksquare$
	- *(Why not $p=3$? Then $t=7$, divisors $1,7$, and both are $\equiv1\pmod3$, so $a(3)\in\{1,7\}$ - not forced to 1, so it proves nothing. That's why we picked the larger prime 7.)*
- **Classify small order:** unique normal Sylows $H,K$ with $H\cap K=\langle e\rangle$, $|HK|=|G|$ ⇒ $G\cong H\times K$ (§13). E.g. order 15 ⇒ $C_{15}$.

## §13. Direct Products & Finite Abelian Groups

*External $G\times H$: $(g_1,h_1)(g_2,h_2)=(g_1g_2,h_1h_2)$; $|G\times H|=|G||H|$; $G\times H\cong H\times G$ (11.1.1).*

- **Prove $G\times H\cong H\times G$:** $\theta(g,h)=(h,g)$; check hom + bijection (§8).
- **Prove $K\times J\leq G\times H$** ($K\leq G,J\leq H$): Quick Subgroup Test componentwise (§3).
- **Internal direct product (Thm 11.1.3, examinable) - "state & prove":**
	- **Statement:** if $M,N\trianglelefteq G$ with $M\cap N=\langle e\rangle$, then $MN\leq G$ (Key Lemma §7) and $MN\cong M\times N$.
	- **Terms:** $M,N\trianglelefteq G$ = **normal subgroups** (§7); $\langle e\rangle$ = **trivial subgroup** $\{e\}$; $MN=\{mn:m\in M,n\in N\}$; $M\times N$ = **external direct product** (above).
	- **Proof:** *(commuting, Lemma 11.1.2)* $n^{-1}mn\in M$ ($M$ normal) so $n^{-1}mnm^{-1}\in M$; $mnm^{-1}\in N$ ($N$ normal) so $n^{-1}mnm^{-1}\in N$; thus $\in M\cap N=\langle e\rangle$, giving $mn=nm$. Then each $g\in MN$ is uniquely $mn$ (if $mn=m_1n_1$ then $m^{-1}m_1=nn_1^{-1}\in M\cap N=\langle e\rangle$), so $\theta(mn)=(m,n)$ is well-defined, a homomorphism (by commuting), 1-1 and onto. $\blacksquare$
	- **To detect $G\cong M\times N$:** find normal $M,N$ with trivial intersection and $|MN|=|G|$.
- **Prove $C_n\times C_m$ abelian:** $(a,b)(c,d)=(ac,bd)=(ca,db)=(c,d)(a,b)$ (each factor abelian).
- **$C_n\times C_m\cong C_{nm}\iff\gcd(n,m)=1$** (11.2.1/2). So $C_3\times C_2\cong C_6$.
- **Fundamental Theorem (11.3.2):** every finite abelian $G\cong C_{p_1^{e_1}}\times\cdots\times C_{p_k^{e_k}}$ (prime-power cyclic factors), unique up to order. \[Fin. gen. (11.3.3): $\mathbb{Z}^{e_0}\times$torsion, $e_0=$ rank.\]
- **Classify all abelian groups of order $n$ (FTfAG):** factor $n=\prod p_i^{a_i}$; for each prime, list the **partitions** of the exponent $a_i$ (ways to write $a_i$ as a sum of positive integers, order ignored); a partition $a_i=b_1+b_2+\dots$ gives factors $C_{p^{b_1}}\times C_{p^{b_2}}\times\cdots$; combine across primes. ($\#$ abelian groups of order $p^a$ = #partitions of $a$.) *ex (Mock B3a) $27=3^3$:* partitions of 3 are $(3),(2,1),(1,1,1)$ → $C_{27}$, $C_9\times C_3$, $C_3\times C_3\times C_3$ - **three** groups.
- **Find all subgroups of an abelian group (up to isomorphism)** - three steps:
	- **(1) Possible orders:** by Lagrange (§6), each subgroup's order divides $\lvert G\rvert$.
	- **(2) Exhibit** one subgroup of each of those orders.
	- **(3) Identify up to isomorphism** - the step that completes the list (don't skip): show each order has only *one* possible type, so any subgroup of that order matches one you found. Tools: order 1 = trivial group; order $\lvert G\rvert$ = $G$ itself; **prime order $\Rightarrow$ cyclic $\cong C_p$** (§4).
	- All subgroups here are automatically **normal** (since $G$ is abelian, §7).
	- *Example - $C_3\times C_2$, order 6* (write $C_3=\langle a\rangle$, $C_2=\langle b\rangle$):
		- Orders dividing 6: $1,2,3,6$.
		- Exhibit: $\langle e\rangle$; $\langle(e,b)\rangle\cong C_2$; $\langle(a,e)\rangle\cong C_3$; $G\cong C_3\times C_2$.
		- Iso step: any order-2 subgroup $\cong C_2$, any order-3 $\cong C_3$ (prime ⇒ cyclic); order 1 = trivial; order 6 $=G$.
		- **Four up to isomorphism:** trivial, $C_2$, $C_3$, $C_3\times C_2\,(\cong C_6)$.
- **Count abelian groups of order $n$ with an element of order $d$:**
	1. **Key fact:** the order of an element $(g_1,g_2,\dots)$ of a direct product = **lcm of the orders of its components**. So an element of order $d$ exists iff, prime by prime, the factors can supply each prime-power in $d$.
	2. For each prime power $p^k$ *exactly* dividing $d$: you need a cyclic factor $C_{p^j}$ with $j\geq k$ in the $p$-part (only such a factor holds an element of order $p^k$). Primes not in $d$ are unconstrained.
	3. So count, per relevant prime, the partitions of its exponent that include a part $\geq k$; multiply across primes (free primes contribute *all* their partitions).
	- *Worked: order $540=2^2\cdot3^3\cdot5$, want an element of order $45=3^2\cdot5$* (so need order $9$ from the 3-part and order $5$ from the 5-part):
		- **3-part $3^3$** (partitions of 3): $C_{27}$ ✓, $C_9\times C_3$ ✓ (each has a factor $\geq C_9$), $C_3\times C_3\times C_3$ ✗ (max element order $3$). → **2** of 3.
		- **5-part $5^1$:** only $C_5$ - has an element of order 5 ✓. → 1.
		- **2-part $2^2$:** irrelevant to order 45, so free: $C_4$ or $C_2\times C_2$. → 2.
		- **Total $2\times1\times2=\mathbf{4}$** (out of the $3\times1\times2=6$ abelian groups of order 540).
- **$C_{p^s}\lesssim C_{p^r}$ for $s\leq r$** (take $\tau^{p^{r-s}}$); hence **abelian converse to Lagrange**: abelian $G$, $k\mid|G|\Rightarrow G$ has a subgroup of order $k$ (build it factor-by-factor via FTfAG).

## §14. Pitfalls & Sanity Checks

**Pitfalls**

- Permutation products act **right-to-left**.
- Converse of Lagrange is **false** ($A_4$).
- $\phi(g)=g^k$ is a hom only if $G$ abelian.
- Quotient $G/N$ needs $N$ **normal** - check first.
- Action checks: don't forget **closure** $\lambda(g)x\in X$, then identity, then compatibility.
- Sylow $a(p)$ needs **both** $a(p)\mid t$ and $a(p)\equiv1\pmod p$.
- Cube colouring = **rotations only** (24); octagon (2D) allows reflections (16).
- FTfAG factors are **prime powers**; element order = lcm of component orders.

**Sanity checks**

- Orders divide: $o(g)\mid|G|$, $|H|\mid|G|$, class/orbit sizes $\mid|G|$.
- $|G/N|=|G|/|N|$ and $|Gx|\cdot|\mathrm{Stab}_G(x)|=|G|$ are integers.
- Isomorphism check: $|G|=|H|$, and it preserves order/abelian/cyclic.
- Abelian-group count = product of partition-counts of the prime exponents.
- After solving $\alpha\sigma\gamma=\beta$ or building an iso: **substitute back**.
