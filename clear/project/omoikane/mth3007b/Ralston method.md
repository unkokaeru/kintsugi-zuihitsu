# Ralston Method

Similar to the [[Midpoint method]], but modifying by evaluating two-thirds through the interval instead of halfway. This is called **Ralston's method**:

$$
y_{i+1}\approx y_{i}+\Delta t\cdot \left( \frac{1}{4}g(t_{i},y_{i}) + \frac{3}{4}g\left( t_{i}+ \frac{2}{3}\Delta t,y_{i}+ \frac{2}{3}g(t_{i},y_{i})\Delta t \right) \right)
$$

However, this is a bit easier to implement by breaking it into intermediate variables, namely $k_{1}=g(t_{i},y_{i})$ and $k_{2}=g\left(  t_{i}+ \frac{2}{3}\Delta t,y_{i}+ \frac{2}{3}\Delta t\cdot k_{1} \right)$:

$$
y_{i+1}\approx y_{i}+\Delta t\cdot \left( \frac{1}{4}k_{1}+ \frac{3}{4}k_{2} \right)
$$
