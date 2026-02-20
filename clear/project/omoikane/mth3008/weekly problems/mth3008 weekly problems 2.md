# MTH3008 Weekly Problems 2

> **Original Documents**: [[mth3008 weekly problem sheet 2.pdf|Problem Sheet]] / [[mth3008 weekly problem sheet 2 handwritten solutions.pdf|My Handwritten Solutions]] / [[mth3008 weekly problem sheet 2 solutions.pdf|Provided Solutions]]
>
> **Vibes**: …
>
> **Used Techniques**:
>   - …

---

## 2.1. Validity of Differential Operator Combinations

> [!question]
> Which of the following combinations of vector differential operators are valid?
> 1. Curl curl, curl grad, div grad.
> 2. Div grad, div curl, div div.
> 3. Grad div, curl grad, curl curl, grad grad, div curl.
> 4. Div grad, div curl, curl grad, div curl.

First and fourth, by using input/output properties of [[Curl]] (vector -> vector), [[Divergence]] (vector -> scalar), and [[Gradient]] (scalar -> gradient), as well as composition of functions working right -> left.

---

## 2.2. Suffix Notation to Vector Notation

> [!question]
> Translate the suffix notation equation, $\delta_{ij}c_{j}+\epsilon_{kji}a_{k}b_{j}=d_{\ell}e_{m}c_{i}b_{\ell}c_{m}$, into ordinary vector notation.

Using the properties of the [[Alternating Tensor]] and [[Kronecker Delta]], as well as basic [[Suffix Notation]], we can determine that $\boxed{\mathbf{c}+(\mathbf{a}+\mathbf{b})=\mathbf{c}(\mathbf{b}\cdot \mathbf{d})(\mathbf{c}\cdot \mathbf{e})}$.

---

## 2.3. Simplify Suffix Notation Expressions

> [!question]
> Let $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$, and $\mathbf{z}$ be vectors in $\mathbb{R}^3$. Using suffix notation, find an expression involving no cross products for $(\mathbf{u}\times(\mathbf{v}\times \mathbf{w})\cdot \mathbf{z})$.
>
> Write your final answer in vector notation. Provide all steps of your workings.

Slowly going through the expression, converting to [[Suffix Notation]], and then simplifying using the properties of the [[Alternating Tensor]] and then [[Kronecker Delta]] after relation, yields $\boxed{(\mathbf{u}\cdot \mathbf{w})(\mathbf{v}\cdot \mathbf{z})-(\mathbf{u}\cdot \mathbf{v})(\mathbf{w}\cdot \mathbf{z})}$.

---

## 2.4. Find the Gradient of a Dot Product

> [!question]
> Compute the gradient of a dot product, i.e. $\nabla(\mathbf{u}\cdot \mathbf{v})$, that is…
>
> 1. Show that $[\mathbf{u}\times(\nabla\times \mathbf{v})]_{i}=u_{j} \frac{\partial v_{j}}{\partial x_{j}} - u_{j} \frac{\partial v_{i}}{\partial x_{j}}$.
> 2. Use item (1) to show that $[\mathbf{u}\times(\nabla \times \mathbf{v})+\mathbf{v}\times(\nabla\times \mathbf{u})]_{i}=u_{j} \frac{\partial v_{j}}{\partial x_{j}} - u_{j} \frac{\partial u_{i}}{\partial x_{j}} + v_{j} \frac{\partial u_{j}}{\partial x_{j}} - v_{j} \frac{\partial v_{i}}{\partial x_{j}}$.
> 3. Conclude that $\nabla(\mathbf{u}\cdot \mathbf{v})=\mathbf{u}\times(\nabla \times \mathbf{v})+\mathbf{v}\times(\nabla\times \mathbf{u})+(\mathbf{u}\cdot \nabla)\mathbf{v}+(\mathbf{v}\cdot \nabla)\mathbf{u}$.

Loads of effort, but basically convert to [[Suffix Notation]] then simplify with the [[Alternating Tensor]] then [[Kronecker Delta]] through their relation, as always. Then convert to using [[Gradient]], [[Divergence]], and [[Gradient]], all within vector notation, and rearrange to give the final answer.

---

## 2.5. Check Relations Involving Tensors

> [!question]
> Recall the relation $\epsilon_{ijk}\epsilon_{k\ell m}=\delta_{i\ell}\delta_{jm}-\delta_{im}\delta_{j\ell}$ and check it for the following cases…
>
> 1. $i=1,j=2,k=3,\ell=1,m=2$,
> 2. $i=2,j=1,k=3,\ell=2,m=1$.

Substitute then use the definitions of [[Alternating Tensor]] for the left side, then [[Kronecker Delta]] for the right. Valid for both cases.

---

## 2.6. Simplify Suffix Notation Expressions

> [!question]
> Simplify the following suffix notation expressions…
>
> 1. $\delta_{ij}\epsilon_{ijk}$,
> 2. $\epsilon_{ijk}\epsilon_{i\ell m}$,
> 3. $\epsilon_{ijk}\epsilon_{ijm}$,
> 4. $\epsilon_{ijk}\epsilon_{ijk}$.
> 
> *Note: these are all vectors.*

1. Use [[Kronecker Delta]] to substitute which then creates a duplicated index in [[Alternating Tensor]], hence gives $\boxed{\mathbf{0}}$.
2. Use the relation between the [[Alternating Tensor]] and [[Kronecker Delta]] to give $\delta_{i\ell}\delta_{jm}-\delta_{im}\delta_{j\ell}$.
3. Use the relation between the [[Alternating Tensor]] and [[Kronecker Delta]], then simpl

---

## 2.7. Prove Matrix Relations

> [!question]
> Use the formula, $\epsilon_{pqr}|M|=\epsilon_{ijk}M_{\pi}M_{qj}M_{rk}$, to show that…
>
> 1. $6|M|=\epsilon_{pqr}\epsilon_{ijk}M_{pi}M_{qj}M_{rk}$,
> 2. $|M^T|=|M|$,
> 3. $|MN|=|M||N|$.

…

---

## 2.8. Find the Gradient of a Function

> [!question]
> Show that $\nabla f(r)=f^{\prime}(r)\frac{\mathbf{r}}{r}$, where $\mathbf{r}$ is the position vector $\mathbf{r}=(x_{1},x_{2},x_{3})$ and $r=|\mathbf{r}|$.
>
> *Hint: recall that $f^{\prime}(r)= \frac{\partial f}{\partial r}$, then get to a step involving the expression $\frac{\partial r}{\partial x_{i}}$, and along the way write out an equation for $r$ in terms of $x_{1},x_{2},x_{3}$ (in suffix notation).*

…
