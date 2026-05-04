# MTH3003 Lecture 14

Last time we set up **group actions** as homomorphisms into **symmetric groups**, and started to treat abstract groups via how they move sets around. In this lecture we push that philosophy to its logical extreme: every **group** can be realised as a **permutation group**, via its regular action on itself. This is the content of **Cayley's Theorem**, and it shows that studying permutation groups is, in a very real sense, enough to understand all groups.

## More Examples of Group Actions

We keep working with the familiar **symmetric group** $S_{5}$ but change the underlying set $X$ it acts on, to emphasise that an action is extra structure, not just the group itself.

> [!important] Group action reminder
> A **group action** of a group $G$ on a set $X$ is a map $\lambda \colon G \to \operatorname{Sym}(X)$ such that:
> - $\lambda(gh) = \lambda(g)\lambda(h)$ for all $g,h \in G$ (homomorphism condition),
> - $\lambda(e)$ is the identity permutation on $X$.
> Equivalently, writing $\lambda(g)x$ for the image of $x \in X$, we require:
> - $e x = x$ for all $x \in X$,
> - $(gh)x = g(hx)$ for all $g,h \in G$ and $x \in X$.

### Example: Extending the Domain by "doing nothing"

Take $G = S_{5}$ and let

$$
X = \{1,2,3,4,5,6,7,8\}.
$$

Define an action $\lambda \colon S_{5} \to \operatorname{Sym}(X)$ by

$$
\lambda(g)x =
\begin{cases}
gx & \text{if } 1 \leq x \leq 5, \\
x & \text{if } 6 \leq x \leq 8.
\end{cases}
$$

So each $g \in S_{5}$ moves $1,\dots$ in the usual way and fixes $6,7,8$.

> [!example] Checking this is an action
> - Identity: for $x \leq 5$, $ex = x$ in $S_{5}$; for $x \geq 6$, we fix $x$ by definition.
> - Compatibility: for $g,h \in S_{5}$ and $x \leq 5$, we have $(gh)x = g(hx)$ as permutations; for $x \geq 6$, all elements fix $x$, so $(gh)x = x = g(hx)$.
> Hence the axioms for an action hold.

### Example: Action of $S_{5}$ on $\mathbb{Z}$ via Residues

Now let $X = \mathbb{Z}$. Every integer $x \in \mathbb{Z}$ can be written uniquely as

$$
x = 5n + k \quad\text{with } n \in \mathbb{Z},\ 1 \leq k \leq 5.
$$

Define $\lambda \colon S_{5} \to \operatorname{Sym}(\mathbb{Z})$ by

$$
\lambda(g)x = 5n + gk,
$$

where $x = 5n + k$ is as above.

> [!note] Interpretation
> The element $g \in S_{5}$ permutes the "remainder" $k \in \{1,\dots\}$ and leaves the "block index" $n$ alone. So we get an $S_{5}$-action on $\mathbb{Z}$ by permuting each residue class mod $5$ in the same way.

Again, one checks:

- $\lambda(e)x = x$ because $ek = k$ for all $k$,
- $\lambda(gh)x = \lambda(g)(\lambda(h)x)$ since $(gh)k = g(hk)$ in $S_{5}$.

So this is a valid action.

### Example: Action on Unordered Pairs

Let

$$
X = \big\{\{1,2\},\{1,3\},\{1,4\},\{1,5\},\{2,3\},\{2,4\},\{2,5\},\{3,4\},\{3,5\},\{4,5\}\big\}
$$

be the set of all $2$-element subsets of $\{1,2,3,4,5\}$.

Define $\lambda \colon S_{5} \to \operatorname{Sym}(X)$ by

$$
\lambda(g)\{a,b\} = \{ga,gb\}.
$$

> [!example] Why this is an action
> - Well-defined: $\{a,b\}$ is unordered, but $\{ga,gb\}$ is also unordered, so the definition does not depend on the order.
> - Identity: $e\{a,b\} = \{ea,eb\} = \{a,b\}$.
> - Compatibility: $(gh)\{a,b\} = \{(gh)a,(gh)b\} = \{g(ha),g(hb)\} = g\{ha,hb\} = g(h\{a,b\})$.
> Hence $\lambda(gh) = \lambda(g)\lambda(h)$.

These examples illustrate that a single group $G$ may act on many different sets $X$ in structurally different ways.

## Kernel of a Group Action

Given an action $\lambda \colon G \to \operatorname{Sym}(X)$, we can view $\lambda$ as a **group homomorphism**, so it makes sense to speak of its **kernel** and **image**.

> [!important] Kernel of an action
> Let $\lambda$ be an action of $G$ on $X$. The **kernel** of $\lambda$ is the subset
>
> $$
> \operatorname{Ker}(\lambda) = \{g \in G : \lambda(g)x = x \text{ for all } x \in X\},
> $$
>
> that is, the set of group elements that fix every point of $X$.

Note that $\operatorname{Ker}(\lambda)$ is a normal subgroup of $G$, because it is the kernel of a homomorphism into a permutation group.

### Proof that This Agrees with the Usual Kernel

As a group homomorphism $\lambda \colon G \to \operatorname{Sym}(X)$, we know

$$
\operatorname{Ker}(\lambda) = \{g \in G : \lambda(g) = \operatorname{id}_{X}\}.
$$

On the other hand, $\lambda(g) = \operatorname{id}_{X}$ is equivalent to the statement that $\lambda(g)x = x$ for all $x \in X$, which is exactly the previous description. So the two formulations of the kernel coincide.

## Cayley's Theorem

We now reach the central result of the lecture: every group is "the same as" (i.e. **isomorphic** to) a permutation group.

> [!important] Cayley's Theorem
> Every group $G$ is isomorphic to a subgroup of a symmetric group, hence to a permutation group.

The proof uses the **regular action** of $G$ on itself by left multiplication.

### The Regular Action

Let $G$ be a group, and let $X = G$ as a set. Define an action

$$
\lambda \colon G \to \operatorname{Sym}(G)
$$

by

$$
\lambda(g)x = gx \quad\text{for all } g \in G,\, x \in G.
$$

We have seen this before (Example 8.1.7 in the notes): it is an action because

- $ex = x$ for all $x \in G$,
- $(gh)x = g(hx)$ for all $g,h,x \in G$.

Let $H = \operatorname{Im}(\lambda) \leq \operatorname{Sym}(G)$. Then $H$ is a permutation group, consisting of permutations arising from left multiplication by elements of $G$.

### Using the First Isomorphism Theorem

Since $\lambda \colon G \to H$ is a surjective homomorphism, the **First Isomorphism Theorem** tells us

$$
G / \operatorname{Ker}(\lambda) \cong \operatorname{Im}(\lambda) = H.
$$

Thus, if we can show that $\operatorname{Ker}(\lambda)$ is just the trivial subgroup $\langle e \rangle = \{e\}$, we obtain

$$
G / \langle e \rangle \cong H,
$$

and since $G / \langle e \rangle \cong G$ in the natural way, we conclude $G \cong H$. This will prove Cayley's Theorem.

### Computing the Kernel of the Regular Action

Take $g \in \operatorname{Ker}(\lambda)$. By definition of the kernel of an action, this means

$$
gx = x \quad \text{for all } x \in G.
$$

We now use the fact that $X = G$ is itself a group. Fix any $x \in G$, and multiply the equality $gx = x$ on the right by $x^{-1}$:

$$
gx x^{-1} = x x^{-1}.
$$

So $g = e$. As this argument works for any $g$ in the kernel, we see that

$$
\operatorname{Ker}(\lambda) = \{e\} = \langle e \rangle.
$$

Therefore $G / \operatorname{Ker}(\lambda) = G$, and hence $G \cong H \leq \operatorname{Sym}(G)$.

We have thus shown:

$$
\boxed{\text{Every group } G \text{ is isomorphic to a permutation group } H \leq \operatorname{Sym}(G).}
$$

### Why Cayley's Theorem Matters

> [!note] What is the point?!
> - We already knew every permutation group is a group.
> - Cayley's Theorem says every abstract group can be realised as a permutation group.
> 
> So, in principle, we can study all groups purely via their permutation representations. This justifies why symmetric groups and actions play such a central role in group theory.

---

## Pre-Lecture Notes from [[Mth3003 Lecture Notes 14.pdf]]

- Consider several new **group actions** of $S_{5}$ on different sets $X$ (extended finite sets, $\mathbb{Z}$ by residue decomposition, and sets of $2$-element subsets), and verify the action axioms in each case via the homomorphism viewpoint.
- Define the **kernel of an action** $\lambda \colon G \to \operatorname{Sym}(X)$ as the subgroup of elements that fix every point, and note it coincides with the usual kernel of a group homomorphism.
- Introduce the **regular action** of $G$ on itself by left multiplication, observe that its image $H$ is a permutation group inside $\operatorname{Sym}(G)$, and apply the **First Isomorphism Theorem** to obtain $G / \operatorname{Ker}(\lambda) \cong H$.
- Compute the kernel of the regular action explicitly by using cancellation in $G$, proving $\operatorname{Ker}(\lambda) = \{e\}$ and hence $G \cong H \leq \operatorname{Sym}(G)$, which is the statement of **Cayley's Theorem**.
- Next time: use these action ideas (especially orbits and stabilisers) to extract structural information about groups, and to study more sophisticated permutation representations.
