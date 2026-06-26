# MTH3003 Weekly Problems 5

> **Original Documents**: [[mth3003 weekly problem sheet 5.pdf]] / `[[mth3003 weekly problem sheet 5 handwritten solutions.pdf]]` / [[mth3003 weekly problem sheet 5 solutions.pdf]]
>
> **Vibes**: More conceptual than Weeks 3 and 4, but the arguments are short once you lean on the definitions and the standard homomorphism propositions (identity, powers, kernel).
>
> **Used Techniques**:
>  - [[homomorphism]] definition: $\theta(g_1g_2)=\theta(g_1)\theta(g_2)$.
>  - Standard consequences: $\theta(e_G)=e_H$ and $\theta(g^m)=(\theta(g))^m$.
>  - Kernel method: show $g^{-1}kg\in\ker(\theta)$ for all $g\in G$, $k\in\ker(\theta)$.
>  - [[isomorphism]] definition: a bijective homomorphism.

***

## 5.1. Checking Homomorphisms and Isomorphisms for Squaring Maps

> [!question]
> Determine whether the following maps are homomorphisms or isomorphisms, providing brief justifications rather than full proofs:
> 1. $\varphi: C_7 \to C_7$ defined by $\varphi(g) = g^2$ for all $g \in C_7$.
> 2. $\varphi: S_7 \to S_7$ defined by $\varphi(g) = g^2$ for all $g \in S_7$.

1. $\varphi:C_7\to C_7$, $\varphi(g)=g^2$: this is a homomorphism because $C_7$ is cyclic (hence Abelian), so $(xy)^2=x^2y^2$ in $C_7$.
   It is an isomorphism because if $C_7=\langle g\rangle$, then $\varphi(g)=g^2$ is also a generator (since $2$ is invertible modulo $7$), so $\varphi$ is bijective.

2. $\varphi:S_7\to S_7$, $\varphi(g)=g^2$: this is **not** a homomorphism in general because squaring does not respect products in a non-Abelian group.
   Counterexample in $S_7$: let $a=(1\,2)$ and $b=(2\,3)$, so $a^2=b^2=e$ but $(ab)=(1\,2\,3)$ and $(ab)^2=(1\,3\,2)\neq e$, hence $\varphi(ab)\neq \varphi(a)\varphi(b)$.
   Since it is not a homomorphism, it cannot be an isomorphism (an isomorphism must be a homomorphism).

***

## 5.2. Identity Preservation under Homomorphisms

> [!question]
> Given groups $G$ and $H$ with a homomorphism $\theta: G \to H$, prove that $\theta(e_G) = e_H$.

Fix any $g\in G$.

Then $\theta(g)=\theta(e_G g)=\theta(e_G)\theta(g)$ by the definition of homomorphism.

Right-multiply by $\theta(g)^{-1}$ in $H$ to obtain $e_H=\theta(e_G)$.

***

## 5.3. Exponentiation Preservation under Homomorphisms

> [!question]
> Given groups $G$ and $H$ with a homomorphism $\theta: G \to H$, prove that $\theta(g^m) = (\theta(g))^m$ holds for all $g \in G$ and $m \in \mathbb{N}$.

We prove by induction on $m\in\mathbb{N}$.

Base case $m=1$: $\theta(g^1)=\theta(g)=(\theta(g))^1$.

Inductive step: assume $\theta(g^m)=(\theta(g))^m$; then

$$
\theta(g^{m+1})=\theta(g^m g)=\theta(g^m)\theta(g)=(\theta(g))^m\theta(g)=(\theta(g))^{m+1},
$$

Using the homomorphism property and the inductive hypothesis.

(As noted on the sheet and in the lecture notes, this extends to all integers $m$ as well.)

***

## 5.4. Normality of the Kernel

> [!question]
> Given groups $G$ and $H$ with a homomorphism $\theta: G \to H$, prove that $\ker(\theta) \trianglelefteq G$. You may assume that $\ker(\theta)$ is a subgroup of $G$.

Assume $\ker(\theta)\leq G$.

To show $\ker(\theta)\trianglelefteq G$, fix $g\in G$ and $k\in \ker(\theta)$, and compute

$$
\theta(g^{-1}kg)=\theta(g)^{-1}\theta(k)\theta(g).
$$

This uses the homomorphism property together with the standard fact that homomorphisms preserve inverses (which follows from the "powers" result).

Since $k\in\ker(\theta)$, we have $\theta(k)=e_H$, so $\theta(g^{-1}kg)=\theta(g)^{-1}e_H\theta(g)=e_H$, hence $g^{-1}kg\in\ker(\theta)$.

Therefore, $\ker(\theta)$ is normal in $G$.

> [!note] Optional: $\ker(\theta)\leq G$
> Identity: $\theta(e_G)=e_H$, so $e_G\in\ker(\theta)$.
> Closure: if $a,b\in\ker(\theta)$ then $\theta(ab)=\theta(a)\theta(b)=e_H e_H=e_H$.
> Inverses: if $a\in\ker(\theta)$ then $\theta(a^{-1})=\theta(a)^{-1}=e_H^{-1}=e_H$.

***

## 5.5. Isomorphism between Dihedral and Symmetric Groups

> [!question]
> Prove that $D_6$ is isomorphic to $S_3$ (that is, $D_6 \cong S_3$.

Recall the presentations on the sheet:

$$
D_6=\{e,\rho,\rho^2,\sigma,\sigma\rho,\sigma\rho^2\},\quad \rho^3=e,\quad \sigma^2=e,\quad \rho\sigma=\sigma\rho^{-1},
$$

and

$$
S_3=\{e,(1\,2\,3),(1\,3\,2),(1\,2),(1\,3),(2\,3)\}. \quad
$$  

Define $\theta:D_6\to S_3$ by specifying images of generators:

$$
\theta(\rho)=(1\,2\,3),\qquad \theta(\sigma)=(1\,2),
$$

And then extending using $\theta(\rho^2)=\theta(\rho)^2$ and $\theta(\sigma\rho^i)=\theta(\sigma)\theta(\rho)^i$.

Check the defining relations are preserved:

- $\theta(\rho)^3=(1\,2\,3)^3=e$, matching $\rho^3=e$.
- $\theta(\sigma)^2=(1\,2)^2=e$, matching $\sigma^2=e$.
- $\theta(\rho)\theta(\sigma)=(1\,2\,3)(1\,2)=(1\,3)$ and $\theta(\sigma)\theta(\rho)^{-1}=(1\,2)(1\,3\,2)=(1\,3)$, so $\theta(\rho\sigma)=\theta(\sigma\rho^{-1})$.

So $\theta$ is a homomorphism from $D_6$ to $S_3$ (it respects the relations that define products of $\rho$ and $\sigma$).

Now compute the images of all six elements:

$$
\theta(e)=e,\quad \theta(\rho)=(1\,2\,3),\quad \theta(\rho^2)=(1\,3\,2),\quad \theta(\sigma)=(1\,2),\quad
\theta(\sigma\rho)=(1\,3),\quad \theta(\sigma\rho^2)=(2\,3).
$$

These are exactly all the elements of $S_3$, so $\theta$ is surjective.

Since $|D_6|=6$ and $|S_3|=6$
