# Permutation

A **Permutation** of a set $X$ is a bijection from $X$ to $X$, or more simply, a rearrangement of itself.

There are various notations to show permutations, but we'll use three main ways: two graphical, one normal. In order of their importance…

1. Cycle notation: $\sigma=(2\,4\,3\,6\,7)$, read **right-to-left**.
2. Bijection notation: $\quad\begin{matrix}1 & 2 & 3 & 4 & 5 & 6 & 7 \\\downarrow & \downarrow & \downarrow & \downarrow & \downarrow & \downarrow &\downarrow \\1 & 4 & 6 & 3 & 5 & 7 & 2\end{matrix}$
3. Drawn cycle notation:

```tikz
\begin{document}
\begin{tikzpicture}[
  every node/.style={circle, draw, thick, minimum size=7mm},
  every path/.style={->, thick}
]

% Left 1-cycle
\node (one) at (-3,0) {1};
\draw (-3,0.6) arc[start angle=90,end angle=450,radius=0.6];

% Right 5-cycle
\node (five) at (3,0) {5};
\draw[->] (3,0.6) arc[start angle=90,end angle=450,radius=0.6];

% Middle 5-cycle (2 4 3 6 7)
\node (two) at (0,1.8)  {2};
\node (four) at (-1,0.9){4};
\node (three) at (-0.6,-0.9){3};
\node (six) at (0.6,-0.9){6};
\node (seven) at (1,0.9){7};

\draw[->,bend left=15] (two)   to (four);
\draw[->,bend left=15] (four)  to (three);
\draw[->,bend left=15] (three) to (six);
\draw[->,bend left=15] (six)   to (seven);
\draw[->,bend left=15] (seven) to (two);

\end{tikzpicture}
\end{document}
```

> [!important] Formal Definition
> Let $a_{1},a_{2},\dots,a_{r}$ be distinct elements of a set $X$. Then, $\sigma=(a_{1}\,a_{2}\,\dots\,a_{r})$ is the permutation of $X$ sending $a_{1}\to a_{2},a_{2}\to a_{3},\dots,a_{r}\to a_{1}$, and fixing all elements in $X\setminus \{ a_{1},a_{2},\dots,a_{r} \}$. Such a permutation is called an **$r$-cycle**, or a **cycle of length $r$**.

> [!note] What is the size of $\text{Sym}(X)$?
> By understanding that we initially have $n$ choices to rearrange the set, and then $n-1$ after that choice, and so on, we can prove inductively that the modulus of the set (for finite $X$) $|\text{Sym}(X)|=|X|!$.
