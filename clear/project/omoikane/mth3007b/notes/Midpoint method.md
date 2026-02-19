# Midpoint Method

Evaluates a function $g$ at each midpoint between timesteps:

$$
y_{i+1}\approx y_{i}+\Delta t\cdot g\left( t_{i}+\frac{\Delta t}{2},y_{i}+g(t_{i},y_{i})\frac{\Delta t}{2} \right)
$$
