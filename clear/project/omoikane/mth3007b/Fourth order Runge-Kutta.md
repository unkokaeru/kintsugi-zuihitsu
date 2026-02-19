# Fourth Order Runge-Kutta

The most common Runge-Kutta order…

$$
y_{i+1} \approx y_i + \frac{\Delta t}{6}(k_1 + 2k_2 + 2k_3 + k_4):\begin{cases}
k_1 = g(t_i, y_i) \\
k_2 = g\!\left(t_i + \tfrac{\Delta t}{2},\; y_i + \tfrac{\Delta t}{2}k_1\right) \\
k_3 = g\!\left(t_i + \tfrac{\Delta t}{2},\; y_i + \tfrac{\Delta t}{2}k_2\right) \\
k_4 = g(t_i + \Delta t,\; y_i + \Delta t\, k_3)
\end{cases}
$$
