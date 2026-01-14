# Lotka-Volterra Systems: Dynamics and Applications

> **Anonymous Code**: 58648
> **Date**: 19th November 2025
> **Speaker**: Dr Helen Christodoulidi

Imagine a forest filled with just rabbits and foxes, where the rabbits multiply and the foxes hunt. What do you think would happen over time? Do the populations of rabbits and/or foxes explode, collapse, or somehow find a balance? This century-old question is answered by some seemingly simple formulae, the Lotka-Volterra equations, and even answer questions about ecosystems, epidemics, and financial markets.

In the 1920s, this model was discovered twice completely independently. Alfred Lotka, an American biostatistician, published his predator-prey model in 1925. Vito Volterra, an Italian mathematician and physicist, developed the exact same equations a year later in 1926 while investigating fish catches during World War One, instigated by his son-in-law's observations during the war years.

Their models consisted of two "coupled differential equations", describing how the prey and predator populations change over time: dx/dt = αx - βxy and dy/dt = -γy + δxy. Whilst perhaps complicated to the average person scared of maths, they break down to be quite intuitive. Alone with unlimited food, rabbits multiply exponentially, with their growth rate (dx/dt) proportional to population size (αx). Foxes without any prey will starve to extinction (−γy). When combined, the interaction terms (βxy and δxy) make it so that predation reduces prey and sustains predators.

The result isn't that surprising. Neither population makes the other extinct, instead they just endlessly cycle. The proliferation of rabbits causes foxes to be well-fed and reproduce more, which then causes more foxes to be around to deplete the rabbits, which causes foxes to starve and hence rabbits to multiply again.

The interesting parts arise when playing with the variables. For example, setting derivatives to zero reveal two points where both populations are