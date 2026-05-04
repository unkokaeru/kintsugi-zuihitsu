# An Inquiry into the Packing Properties of Spheres

> **Anonymous Code**: 58648
> **Date**: 8th October 2025
> **Speaker**: Dr Fabien Paillusson

You probably don't often consider sphere packing - it's a topic that for most may feel distant from your everyday life, at least until you find yourself disappointed after opening a half-empty box of Maltesers or cereal. Ever wondered how it happened, though? The short answer - you got unlucky with the box you bought. The long answer? A problem that took 406 years to solve definitively.

When spheres are poured into a container, gaps will inevitably remain between them; the amount of space then actually filled by the spheres can be quantified with the packing fraction. Dr Paillusson used this to demonstrate, through controlled simulations, that randomly pouring 10,000 spheres even just twice is enough to small variation: 0.615 versus 0.616. These simulations were very idealistic though, ignoring things like friction, and after Paillusson "went to the best source possible, Wikipedia of course" he discovered the real-word is even worse (variation around 0.035). Whilst still very small to the average person, this can scale to be quite alarming in industrial contexts - imagine you have to fill containers with 50,000 Maltesers, then you'd be uncertain about nearly 3,000 Maltesers per container!

Spheres don't have to be randomly packed, though. If we simplify the problem to two dimensions, we can find a few ways of packing to increase the packing fraction. Naturally, you may think of packing them as a well-organised square, which would then already improve the packing fraction to around 0.78. However, there's a step better - hexagonal packing! Just like bees' honeycomb, "hexagons are the bestagons", achieving a packing fraction of 0.90 far surpassing the random arrangement.

In 1611, Johannes Kepler even conjectured this remained true in three dimensions, where Gauss then proved it for regular lattices in the 19th century, but the general case remained too difficult. That is, until just ~30 years ago when Thomas Hales and Samuel Ferguson tackled it in 1998, using proof by exhaustion; in 2003 they then began a formal proof, which was controversially published in 2017 after being verified by automated proof-checking algorithms. Yet most saw it is a great milestone of computation: according to mathematician Matthew Jenssen, "The Kepler conjecture represents one of the great triumphs of computational mathematics, showing how modern techniques can finally resolve centuries-old questions."

However, you may question how this result wasn't found through simple trial and error - randomly packing enough times that it just *randomly* falls into a hexagonal packing. Experiments by G.D. Scott published in Nature identified a strange result - "random close packing" never reached a packing fraction above 0.637, no matter how much the container was tapped.

Yet, even the tapping could be questioned! Yu and Hall's 1994 experiments revealed that tapping direction dramatically changes the results: vertical tapping had packing fractions 0.64, whilst horizontal reaches 0.66, and combining the two reaches an impressive 0.74 - matching hexagonal packing in three dimensions!

Recently, research has explored what it even means for packing to be random, exploring its definition from a probability perspective. In 2017, work published in Nature Physics measured every single way you can pack the spheres. Interestingly, it was found that the packing fraction 0.64 doesn't come from some strange geometric barrier, it is just the most probable arrangement - the most accessible state.

Surely that just a bunch of mathematicians exploring their curiosity, though - why care? Sphere packing is actually critical in multiple real-world industries: pharmacies filling pill containers, material scientists designing granular composites, and of course food manufacturers packing your Maltesers. Understanding packing efficiency directly impacts cost, quality control, and supply chain management. Dr. Paillusson's work demonstrates that even these "simple" questions can reveal great complexity, and current research is even trying to explore sphere packing in higher dimensions - maybe random packing could be more efficient than ordered in higher dimensions? How could you even verify the results, given that we can't visualise the problem anymore? Either way, hopefully you're slightly less disappointed the next time you open a Maltesers box, or at least can appreciate their packing.

1. Yu, A.B. and Hall, J.S. (1994). "Packing of fine powders subjected to tapping." *Powder Technology*, 78(3), 247-256.
2. Hales, T.C. et al. (2017). "A formal proof of the Kepler conjecture." *Forum of Mathematics, Pi*, 5, e2.
3. Jenssen, M. (2024). "The Kepler conjecture and sphere packing." *Bulletin of the American Mathematical Society*, 61(1), 1-60.
