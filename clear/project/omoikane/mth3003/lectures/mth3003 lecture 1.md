# MTH3003 Lecture 1

> [!quote] Simon Smith
> Waggle your eyebrows

A **[[Permutation]]** of a set $X$ is simply a **[[bijection]]** from $X$ to $X$ - a **rearrangement of itself**.

Interestingly, we can use these to describe all groups, and hence all of group theory, but not without some simplified notation…

## Permutation Notation

Given that a [[Permutation]] is given by **rearranging a set**, or a bijection, we can use arrow notation to show each individual mapping:

$$
\begin{matrix}
x_{1} & x_{2} & x_{3} \\
\downarrow & \downarrow & \downarrow \\
x_{2} & x_{3} & x_{1}
\end{matrix}
$$

We can then denote the set (later proven to be a group) of all permutations of one of these sets, i.e. $X$, as $\text{Sym}(X)$. If $X$ is just $\{ 1,2,3,\dots,n \}$ then we write **$S_{n}$** by convention - important to remember, as it'll tell us how what elements are in the set.

> [!note] What is the size of $\text{Sym}(X)$?
> By understanding that we initially have $n$ choices to rearrange the set, and then $n-1$ after that choice, and so on, we can prove inductively that the modulus of the set (for finite $X$) $|\text{Sym}(X)|=|X|!$.

However, this notation is needlessly complicated, and takes out an important property of permutations: **permutations can always decompose into cycles**. If we used that notation instead - **cycle notation** -, we can convert our arrow-mapping notation:

$$
\begin{matrix}
1 & 2 & 3 & 4 & 5 & 6 & 7 \\
\downarrow & \downarrow & \downarrow & \downarrow & \downarrow & \downarrow & \downarrow \\
1 & 4 & 6 & 3 & 5 & 7 & 2
\end{matrix}
$$

Into the following three [[disjoint cycles]]...

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


Again, this is quite large notation, even if it's more useful, but we can take this and simplify it even further, just: $(1)(1\,4)$

---

- Permutation notation & conventions
- Products of permutations

---

## Rough-Lecture Notes from [[mth3003 lecture notes 1.pdf|University Notes]]

*Didn't have access to lecture notes beforehand, so did rough notes during instead of pre-lecture notes - enjoy the yapping!*

![[mth3003 rough-lecture 1.pdf]]
