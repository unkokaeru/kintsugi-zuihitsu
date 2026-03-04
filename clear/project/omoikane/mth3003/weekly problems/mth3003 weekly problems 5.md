# MTH3003 Weekly Problems 5

> **Original Documents**: [[mth3003 weekly problem sheet 5.pdf|Problem Sheet]] / `[[mth3003 weekly problem sheet 5 handwritten solutions.pdf|My Handwritten Solutions]]`
>
> **Vibes**: Abstract proofs shift from concrete symmetries - core [[homomorphism]] properties (kernel, powers, id), first iso explicit check. Easier than Week 4 proofs but needs careful def adherence; hints guide perfectly.
>
> **Used Techniques**:
>   - [[homomorphism]] def: $\theta(gh)=\theta(g)\theta(h)$.
>   - Kernel: $\ker\theta=\{g:\theta(g)=e_H\}$; normality via $\theta(g^{-1}kg)=e$.
>   - Isomorphism: bijective homo; check orders/relations (L9 – Homomorphisms).

***

## 5.1. Checking Homomorphisms and Isomorphisms for Squaring Maps

> [!question]
> Determine whether the following maps are homomorphisms or isomorphisms, providing brief justifications rather than full proofs:
> 1. $\varphi: C_7 \to C_7$ defined by $\varphi(g) = g^2$ for all $g \in C_7$.
> 2. $\varphi: S_7 \to S_7$ defined by $\varphi(g) = g^2$ for all $g \in S_7$.
> 
> *Hint: Play around with the definitions by choosing a few permutations in $C_7$ and observing where $\varphi$ maps them.*

1. Yes homo: $C_7=\langle g\rangle$, $o(g)=7$; $\gcd(2,7)=1$ so $x\mapsto x^2$ bijective (powers cycle all els), hence iso.  
2. No homo: e.g. $(12)(34)^2=e$ but $((12)(34))^2=(12)(34)\neq e$.

***

## 5.2. Identity Preservation under Homomorphisms

> [!question]
> Given groups $G$ and $H$ with a homomorphism $\theta: G \to H$, prove that $\theta(e_G) = e_H$.
>
> *Hint: For any $g \in G$, note that $\theta(g) = \theta(e_G g) = \theta(e_G)\theta(g)$. Try rearranging this equation to isolate $\theta(e_G)$.*
 
For any $g\in G$: $\theta(g)=\theta(e_G g)=\theta(e_G)\theta(g)$. Right-multiply by $\theta(g)^{-1}$: $\theta(g)\theta(g)^{-1}=\theta(e_G)\theta(g)\theta(g)^{-1}$ so $e_H=\theta(e_G)$.

***

## 5.3. Exponentiation Preservation under Homomorphisms

> [!question]
> Given groups $G$ and $H$ with a homomorphism $\theta: G \to H$, prove that $\theta(g^m) = (\theta(g))^m$ holds for all $g \in G$ and $m \in \mathbb{N}$. (Note that this result also extends to all $m \in \mathbb{Z}$.)
>
> *Hint: Notice that $\theta(g^m) = \theta(g^{m-1})\theta(g)$, and proceed inductively.*

Base $m=1$: $\theta(g)=\theta(g)$.  
Inductive: assume $\theta(g^{m})=\theta(g)^m$; then $\theta(g^{m+1})=\theta(g^m g)=\theta(g^m)\theta(g)=\theta(g)^m \theta(g)=\theta(g)^{m+1}$.

***

## 5.4. Normality of the Kernel

> [!question]
> Given groups $G$ and $H$ with a homomorphism $\theta: G \to H$, prove that $\ker(\theta) \trianglelefteq G$. You may assume that $\ker(\theta)$ is a subgroup of $G$ without providing a proof.
>
> (Optional): Prove that $\ker(\theta)$ is indeed a subgroup of $G$.
>
> *Hint: Evaluate $\theta(g^{-1}ag) = (\theta(g))^{-1}\theta(a)\theta(g)$. Consider the value of $\theta(a)$ given that $a \in \ker(\theta)$.*
 
Assume $\ker\theta\leq G$. For $g\in G$, $k\in\ker\theta$: $\theta(g^{-1}kg)= \theta(g)^{-1} \theta(k) \theta(g)= \theta(g)^{-1} e_H \theta(g)=e_H$, so $g^{-1}kg\in\ker\theta$. Thus, $\ker\theta\trianglelefteq G$.  
(Optional: Quick Subgroup Test - $e_G\in\ker$; closure: $\theta(k_1 k_2)=\theta(k_1)\theta(k_2)=e e=e$; inverses: $\theta(k^{-1})=\theta(k)^{-1}=e^{-1}=e$.)

***

## 5.5. Isomorphism between Dihedral and Symmetric Groups

> [!question]
> Prove that the dihedral group $D_6$ is isomorphic to the symmetric group $S_3$ (i.e., $D_6 \cong S_3$).
>
> *Hint: Write out the elements of both groups explicitly. For $D_6$, the elements are $\{e, \rho, \rho^2, \sigma, \sigma\rho, \sigma\rho^2\}$ satisfying $\rho\sigma = \sigma\rho^{-1}$, $\sigma^2 = e$, and $\rho^3 = e$. For $S_3$, the elements are $\{e, (1\\), (1\\), (1\), (1\), (2\)\}$. Try constructing an isomorphism $\theta: D_6 \to S_3$ by defining $\theta(\rho)$ and $\theta(\sigma)$ first, then determining the remaining images.*

Both $|D_6|=|S_3|=6$. Define $\theta:D_6\to S_3$: $\theta(\rho)=(123)$ ($o=3$), $\theta(\sigma)=(12)$ ($o=2$).  
Extend: $\theta(\rho^2)=\theta(\rho)^2=(132)$; $\theta(\sigma\rho)=\theta(\sigma)\theta(\rho)=(12)(123)=(13)$; $\theta(\sigma\rho^2)=\theta(\sigma)\theta(\rho^2)=(12)(132)=(23)$.  
Homo: preserves rels $\theta(\rho\sigma)=\theta(\rho)\theta(\sigma)=(123)(12)=(13)=\theta(\sigma\rho^{-1})=\theta(\sigma)\theta(\rho^2)=(12)(132)=(23)?$ Wait, check properly: actually $\rho\sigma=\sigma\rho^2$ (since $\rho^{-1}=\rho^2$, $o(\rho)=3$), $\theta(\rho\sigma)=\theta(\sigma\rho^2)=(23)$, and $\theta(\sigma)\theta(\rho^{-1})=\theta(\sigma)\theta(\rho^2)=(12)(132)=(23)$. Bijective (hits all els). Thus, iso.  
$\boxed{D_6\cong S_3}$