# Lotka-Volterra Systems: Dynamics and Applications

> **Anonymous Code**: 58648
> **Date**: 19th November 2025
> **Speaker**: Dr Helen Christodoulidi

Imagine a forest filled with just rabbits and foxes, where the rabbits multiply and the foxes hunt. What do you think would happen over time? Do the populations of rabbits and/or foxes explode, collapse, or somehow find a balance? This century-old question is answered by some seemingly simple formulae, the Lotka-Volterra equations, and even answer questions about ecosystems, epidemics, and financial markets.

In the 1920s, this model was discovered twice completely independently. Alfred Lotka, an American biostatistician, published his predator-prey model in 1925. Vito Volterra, an Italian mathematician and physicist, developed the exact same equations a year later in 1926 while investigating fish catches during World War One, instigated by his son-in-law's observations during the war years.

Their models consisted of two "coupled differential equations", describing how the prey and predator populations change over time: dx/dt = αx - βxy and dy/dt = -γy + δxy. Whilst perhaps complicated to the average person scared of maths, they break down to be quite intuitive. Alone with unlimited food, rabbits multiply exponentially, with their growth rate (dx/dt) proportional to population size (αx). Foxes without any prey will starve to extinction (−γy). When combined, the interaction terms (βxy and δxy) make it so that predation reduces prey and sustains predators.

The result isn't that surprising. Neither population makes the other extinct, instead they just endlessly cycle. The proliferation of rabbits causes foxes to be well-fed and reproduce more, which then causes more foxes to be around to deplete the rabbits, which causes foxes to starve and hence rabbits to multiply again.

The interesting parts arise when playing with the variables. For example, setting derivatives to zero reveal two points where both populations are balanced: either both populations being extinct, or a coexistence point (γ/δ, α/β). Mathematically, this can be explored immensely to reveal interesting results, but we can extend the same framework beyond just ecology.

If the prey birth rate (α) is zero, then the equations describe epidemic spread. Instead of prey, we can represent individuals that have never encountered infection, and instead of predators we represent the infected population. The same patterns are reflected here, too: those susceptible reduces as infection spreads, which causes the infected population to spike sharply and decay slowly - exactly what we see with COVID-19 hospitalisation data. As Dr Helen Christodoulidi notes in her lecture, "with these simple two equations, you can capture essential behaviour".

This modelling doesn't have to be restricted to just one predator and one prey, though - extending to higher dimensions transforms everything further: imagine more complex food webs or financial networks with four interacting populations. Most combinations produce extinction, not balance - populations decay exponentially until some vanish. Yet some still yield coexistence, but only within the mathematical concept of chaos - seemingly randomly filling space whilst remaining unbounded.

This is quite paradoxical: chaos enables coexistence. If the system is ordered, populations will tend towards extinction, but if it's chaotic, then diversity will be maintained despite being unpredictable. According to research published in 2019 by Christodoulidi and colleagues, "the good scenario—the chaotic case in four dimensions—is strange enough," demonstrating that even if something appears disordered, it can sustain ecological or economic stability. Certainly a comforting message in times of instability!

1. Volterra, V. (1926). "Fluctuations in the Abundance of a Species considered Mathematically." *Nature*, 118, 558-560.
2. Lotka, A.J. (1925). "Elements of Physical Biology." Williams & Wilkins, Baltimore.
3. Christodoulidi, H. and Owen, C. (2019). "Chaos and coexistence in four-dimensional Lotka-Volterra systems." *Nonlinear Dynamics*, 98(2), 1253-1266.
