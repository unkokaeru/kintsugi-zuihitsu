# Inquiry into the Packing Properties of Spheres

> [!quote] Fabien Paillusson
> You've probably never considered the packing properties of spheres, so that's why I'm here to talk about it.


$$
\text{Packing fraction} = \eta=\frac{N_{v}}{V_{\text{packing}}}
$$

$N$ is the number of spheres, $v$ is the volume of a sphere, and $V_{\text{packing}}$ is the total volume occupied.

Spheres spawned randomly and allowed to fall to partially fill a container - this simulation can then calculate the packing fraction over several iterations, where each iteration may vary. Note: no friction in the simulation.

This is important to understand commercial packing, like with filling a Maltesers bag.

$$
\Delta N=N \frac{\Delta n}{\eta}\approx \frac{|\eta_{1}-\eta_{2}|}{\eta_{1}}
$$

This calculates the variation between simulations, and hence how manufacturers' error can vary when packing; hence what the consumer receives varying (link to Chris Spargo approx weight packaging error stuff)

"went to the best source possible, Wikipedia of course" - to correct the simulation with friction, which then raises variation further to increase error.

The dynamics of the grains is deterministic because of the random initial state, but can we find anything mathematically rather than through simulations?

> Is there any reliable mathematical or physical prediction that we can make on sphere packing?

How about finding a maximum? Randomly? Square, like in markets? Hexagonal the bestagon? Duh :) - remember they're assumed rigid, too, obviously.

LINKS TO CRYSTALLOGRAPHY! Look at recording/slideshow for the $\eta$ 2d/3d values and then figure out how they're calculated.

Lagrange proved the 2d maximum in the 18th century, whilst Kepler conjectured in 1611 ("The Kepler Conjecture") that the hexagonal packing would be best. Gauss took this up and proved it, for regular packing (define this), in the 19th century. Much later, Hales & Ferguson in 1998 proved by exhaustion that it is the case; after such, Hales started a formal proof in 2003 which was verified by a computer over the following 12 years. In 2017, this was complete. It doesn't stop here though, and there is still a frontier of science for packing fracti