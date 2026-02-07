# Product of Permutations

A **Product of Permutations** is very similar to function composition. You work right-to-left, passing the set through each permutation to get what it maps to. Eventually, it'll loop around, and that is a cycle. Then, you go to the next smallest disjoint element and repeat until all cycles are complete.

For example, if we have $\sigma=(1\\)$ and $\rho=(1\\\)$ in $S_{6}$, then we can iterate the elements in $S_{6}=\{ 1,2,3,4,5,6 \}$ first through $\rho$, and then through $\sigma$, to find all the new mapping cycles:

$$
\begin{align}
\sigma \rho 1 &= (1\\)(1\\\)(1)&=(1\\)(5)&=(5) \\
\rightarrow \sigma \rho 5 &= (1\\)(1\\\)(5)&=(1\\)(3)&=(1) \\
\rightarrow \dots
\end{align}
$$

And so on, until you complete a cycle, then you continue with the next smallest number. In this example, you would get $(1\)(2\\)(6)$ - try it yourself!