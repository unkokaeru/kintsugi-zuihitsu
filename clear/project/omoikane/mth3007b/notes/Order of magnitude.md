# Order of Magnitude

A non-negative function $g(h)$ is the **order of magnitude** of $f(h)$ as $h\to 0$ if

$$
\lim_{h\to 0}\frac{f(h)}{g(h)}=\text{finite constant}.
$$

Written in **big-O notation** as $f(h)=O(g(h))$ as $h\to 0$.

> [!example] Order of Magnitude (Taylor series of $\cos(x)$ around $x=0$)
> The Taylor series of cosine is $\cos(x)=1-\tfrac{1}{2}x^{2}+\tfrac{1}{24}x^{4}+\cdots+\tfrac{(-1)^{n}}{(2n)!}x^{2n}+\cdots$.
>
> If we use just the first two terms, $\cos(x)\approx 1-\tfrac{1}{2}x^{2}$, the error is exactly the next terms: $\tfrac{1}{24}x^{4}+\cdots$. As $x\to 0$ the error scales as $O(x^{4})$, with constant $1/24$. So we write
>
> $$\cos(x)=1-\tfrac{1}{2}x^{2}+O(x^{4}),$$
>
> or, more loosely, $\cos(x)=1-\tfrac{1}{2}x^{2}+O(x^{3})$ (since $O(x^{4})\subset O(x^{3})$ as $x\to 0$).

## Arithmetic of Big-O

- $O(h^{p})+O(h^{q})=O(h^{\min(p,q)})$ as $h\to 0$ - the larger term dominates near zero.
- $h\cdot O(h^{p})=O(h^{p+1})$.
- $C\cdot O(h^{p})=O(h^{p})$ for a constant $C\neq 0$.

## In Numerical Methods

Big-O is the language of [[Order of a method]] and [[Order of convergence]]:
- Euler GTE: $O(\Delta t)$.
- RK4 GTE: $O(\Delta t^{4})$.
- Monte Carlo error: $O(N^{-1/2})$.

The constant in front of $O(\cdot)$ matters for practical timing but not for the asymptotic rate.

## Big-O at Infinity

Big-O is also used for $h\to\infty$ (e.g. in algorithmic complexity: "this sort is $O(n\log n)$"). The definition is similar: $f(h)=O(g(h))$ as $h\to\infty$ if $\limsup_{h\to\infty}|f(h)/g(h)|<\infty$. Numerical analysis usually uses the $h\to 0$ flavour (small step sizes); algorithm analysis uses the $h\to\infty$ flavour (large input sizes).
