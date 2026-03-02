# MTH3003 Weekly Problems 5

> **Original Documents**: [[mth3003 weekly problem sheet 5.pdf|Problem Sheet]] / [[mth3003 weekly problem sheet 5 handwritten solutions.pdf|My Handwritten Solutions]] / [[mth3003 weekly problem sheet 5 solutions.pdf|Provided Solutions]]
>
> **Vibes**: …
>
> **Used Techniques**:
>   - …

***

## 5.1. Checking Homomorphisms and Isomorphisms for Squaring Maps

> [!question]
> Determine whether the following maps are homomorphisms or isomorphisms, providing brief justifications rather than full proofs:
> 1. $\varphi: C_7 \to C_7$ defined by $\varphi(g) = g^2$ for all $g \in C_7$.
> 2. $\varphi: S_7 \to S_7$ defined by $\varphi(g) = g^2$ for all $g \in S_7$.
> 
> *Hint: Play around with the definitions by choosing a few permutations in $C_7$ and observing where $\varphi$ maps them.*

…

---

## 5.2. Identity Preservation under Homomorphisms

> [!question]
> Given groups $G$ and $H$ with a homomorphism $\theta: G \to H$, prove that $\theta(e_G) = e_H$.
>
> *Hint: For any $g \in G$, note that $\theta(g) = \theta(e_G g) = \theta(e_G)\theta(g)$. Try rearranging this equation to isolate $\theta(e_G)$.*

…

---

## 5.3. Exponentiation Preservation under Homomorphisms

> [!question]
> Given groups $G$ and $H$ with a homomorphism $\theta: G \to H$, prove that $\theta(g^m) = (\theta(g))^m$ holds for all $g \in G$ and $m \in \mathbb{N}$. (Note that this result also extends to all $m \in \mathbb{Z}$.)
>
> *Hint: Notice that $\theta(g^m) = \theta(g^{m-1})\theta(g)$, and proceed inductively.*

…

---

## 5.4. Normality of the Kernel

> [!question]
> Given groups $G$ and $H$ with a homomorphism $\theta: G \to H$, prove that $\ker(\theta) \trianglelefteq G$. You may assume that $\ker(\theta)$ is a subgroup of $G$ without providing a proof.
>
> (Optional): Prove that $\ker(\theta)$ is indeed a subgroup of $G$.
>
> *Hint: Evaluate $\theta(g^{-1}ag) = (\theta(g))^{-1}\theta(a)\theta(g)$. Consider the value of $\theta(a)$ given that $a \in \ker(\theta)$.*

…

---

## 5.5. Isomorphism between Dihedral and Symmetric Groups

> [!question]
> Prove that the dihedral group $D_6$ is isomorphic to the symmetric group $S_3$ (i.e., $D_6 \cong S_3$).
>
> *Hint: Write out the elements of both groups explicitly. For $D_6$, the elements are $\{e, \rho, \rho^2, \sigma, \sigma\rho, \sigma\rho^2\}$ satisfying $\rho\sigma = \sigma\rho^{-1}$, $\sigma^2 = e$, and $\rho^3 = e$. For $S_3$, the elements are $\{e, (1\,2\,3), (1\,3\,2), (1\,2), (1\,3), (2\,3)\}$. Try constructing an isomorphism $\theta: D_6 \to S_3$ by defining $\theta(\rho)$ and $\theta(\sigma)$ first, then determining the remaining images.*

…
