# Order of Magnitude

Defined as a non-negative function $g(h)$ for a function $f(h)$ as $h\to 0$, where $\lim_{ h \to 0 } \frac{f(h)}{g(h)}=\text{finite constant}$; also written in "big O" notation as $f(h)=O(g(h)):h\to0$.

> [!example] Order of Magnitude (Taylor series of $\cos(x)$ around $x=0$)
> We define the Taylor series of cosine as $\cos(x)=1-\frac{1}{2}x^2+\frac{1}{24}x^4+\dots+\frac{(-1)^n}{(2n)!}x^{2n}+\dots$.
>
> If we only choose to use the first to terms of the expansion, such that $\cos(x)\approx1-\frac{1}{2}x^2$, then we can determine that there is an inaccuracy of exactly the next terms: $\frac{1}{24}x^4+\dots$. In the limit of $x\to 0$, we can write this inaccuracy as $O(x^4)$, and hence determine the constant (in this case $\frac{1}{24}$ by using the formula definition), or simply write…
>
> $\cos(x)=1- \frac{1}{2}x^2+O(x^4)$, or even $\cos(x)=1- \frac{1}{2}x^2+O(x^3)$ by determining that it also satisfies the equation with a constant of $0$, in this case.
