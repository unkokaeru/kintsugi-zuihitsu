# Subgroup

A **subgroup** is defined within a group $G$ with operation $*$. We say that $H$ is a subgroup of $G$ if it is a subset of $G$, whilst being a group itself (with the same operation as $H$). The notation we use is $H\leq G$, and sometimes say that $G$ is a **supergroup** of $H$.

We can check this quickly using the **Quick Subgroup Test**. Given that $H$ is a subset of $G$, where $G$ is a group with operation $*$, then $(H,*)$ is a subgroup of $G$ if and only if:

1. $H$ contains the identity element, i.e., $e_{G\in H}$.
2. $H$ is closed under $*$, i.e., for all $h_{1},h_{2}\in H$ we have $h_{1}*h_{2}\in H$.
3. Every element of $H$ has an inverse in $H$, i.e., for all $h\in H$ we have $h^{-1}\in H$.

Given this, we can prove the following properties:

1. The identity element in $H$, $e_{H}$, is the same as the identity element in $G$, $e_{G}$.
2. For all $h\in H$, the inverse of $h$ in $H$ is equal to the inverse of $h$ in $G$.
3. $|H|=1$ if and only if $H= \langle e_{G} \rangle$ (the **trivial group**)
4. If $|G|$ is finite, then $|H|=|G|\iff H=G$.
