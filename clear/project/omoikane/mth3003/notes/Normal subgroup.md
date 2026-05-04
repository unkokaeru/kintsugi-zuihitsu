# Normal subgroup

A [[Subgroup]] $H\leq G$ is **normal** in $G$, written $H\trianglelefteq G$, if any of these equivalent conditions hold:

1. $g^{-1}Hg=H$ for all $g\in G$ (conjugation-invariance).
2. $g^{-1}hg\in H$ for all $g\in G$ and $h\in H$.
3. $gH=Hg$ for all $g\in G$ (left and right [[Coset]] agree).
4. $H$ is the [[Kernel]] of some homomorphism $\theta\colon G\to (\text{some group})$.

## Why It Matters

Only normal subgroups produce well-defined **quotient groups** $G/H$ (see [[Quotient group]]). Without normality, the natural multiplication $(g_{1}H)(g_{2}H)=(g_{1}g_{2})H$ depends on the representatives chosen.

## Detection

- Index 2: any subgroup of index 2 is automatically normal. (Two cosets, $H$ and the rest, must agree on left and right.)
- Unique [[Sylow's theorems]]: if $a(p)=1$, the unique Sylow $p$-subgroup is normal (conjugation must send it to itself).
- Centre: $Z(G)=\{z\in G:gz=zg\forall g\}$ is always normal.
- Kernels: every kernel of a homomorphism is normal - and conversely, every normal subgroup is a kernel.

## Examples

- $A_{n}\trianglelefteq S_{n}$ - kernel of the [[Signature]].
- $\mathrm{SL}_{n}(\mathbb{R})\trianglelefteq\mathrm{GL}_{n}(\mathbb{R})$ - kernel of $\det$.
- In an abelian group, **every** subgroup is normal.
- $V_{4}=\{e,(1\,2)(3\,4),(1\,3)(2\,4),(1\,4)(2\,3)\}\trianglelefteq A_{4}$ - important for $A_{4}$'s structure.

## Non-Examples

- $\langle(1\,2)\rangle\not\trianglelefteq S_{3}$: $(1\,3)(1\,2)(1\,3)^{-1}=(2\,3)\notin\langle(1\,2)\rangle$.

## Constructing Quotient Groups

If $H\trianglelefteq G$, the [[Coset]] form the [[Quotient group]] $G/H$ under $(g_{1}H)(g_{2}H)=(g_{1}g_{2})H$. The natural map $G\to G/H$, $g\mapsto gH$, is a surjective homomorphism with kernel $H$.
