# Product of Permutations

A **Product of Permutations** is very similar to function composition. You work right-to-left, passing the set through each permutation to get what it maps to. Eventually, it'll loop around, and that is a cycle. Then, you go to the next smallest disjoint element and repeat until all cycles are complete.

For example, if we have $\sigma=(1\,2\,3)$ and $\rho=(1\,5\,3\,4)$ in $S_{6}$, then we can iterate the elements in $S_{6}=\{ 1,2,3,4,5,6 \}$ first through $\rho$, and then through $\sigma$, to find all the new mapping cycles:

$$
\begin{align}
\sigma \rho 1 &= (1\,2\,3)(1\,5\,3\,4)(1)&=(1\,2\,3)(5)&=(5) \\
\rightarrow \sigma \rho 5 &= (1\,2\,3)(1\,5\,3\,4)(5)&=(1\,2\,3)(3)&=(1) \\
\rightarrow \dots
\end{align}
$$

And so on, until you complete a cycle, then you continue with the next smallest number. In this example, you would get $(1\,5)(2\,3\,4)(6)$ - try it yourself! Normally, we do this process mentally, too, so it looks a lot like just writing out the answer immediately - just feed the numbers through the cycles.

> [!note] Products of permutations are not commutative - this is provable the same way as function composition - unless disjoint, as this is like the identity element; unchanging.
