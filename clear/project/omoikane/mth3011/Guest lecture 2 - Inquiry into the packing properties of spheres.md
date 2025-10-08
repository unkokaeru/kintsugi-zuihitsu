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

Lagrange proved the 2d maximum in the 18th century, whilst Kepler conjectured in 1611 ("The Kepler Conjecture") that the hexagonal packing would be best. Gauss took this up and proved it, for regular packing (define this), in the 19th century. Much later, Hales & Ferguson in 1998 proved by exhaustion that it is the case; after such, Hales started a formal proof in 2003 which was verified by a computer over the following 12 years. In 2017, this was complete. It doesn't stop here though, and there is still a frontier of science for packing fractions in higher dimensions (explore this).

Knowing that hexagonal stacking is best tells us nothing on the maximal value for randomly organised spheres, though.

**Vertical tapping of spheres** - natural for most people to tap a container to compact its contents slightly more (rice, cereal, etc.) - can impact the simulation slightly, increasing $\eta$ with every tap. Charlotte Vale ran a lot of simulations to plot this, and densification occurs for all amplitudes but doesn't seem to go above $\eta\approx 0.64< \frac{\pi}{3\sqrt{ 2 }}$. Also shows that gentler, smaller amplitude, taps condense the spheres more rapidly with a higher value for saturation.

Scott, Nature 188, 908 (1960) - plots density fraction against the reciprocal of the size of the container. These correlate linearly, and intercept at a theoretical $\frac{1}{D}=0$ where the size is theoretically infinite - explore critical opinions of this - and calculates a maximum of $\eta\approx0.64$, the same as before by Charlotte Vale!

**Additional load on the spheres**, like pushing on the spheres, is another option (which can then be combined with tapping). This however actually reduces the density of the system. Probably because they need slight freedom to re-arrange themselves when tapped.

Prof. J. D. Bernal, F.R.S., believed that there's an absolute impossibility of forming a homogeneous assembly of points of volume intermediate between those of long ranged order and close packed disorder - basically, there's no $\eta$ between random packing's max (64%) and perfect hexagonal packing (72% or whatever). This is viewed as a new Kepler conjecture (find reference). Links to the continuum hypothesis (explore - count rationals and reals and there is no set in-between).

Others (vol 84 number 10 of physical review letters in 6 March 2000, Torquato doing a publication a day!) pointed out that "random" isn't well defined: if it's disorder then it must be quantified, and the mean to quantify is not unique, hence it must be associated with a parameter.

RCP (random close packing, 64%) is not really an absolute limit, even for tapped granular. For vertical tapping then it is a limit, but horizontal packing actually exceeds.

Look into what the speaker has written about the field! Final slides of slideshow? Still lots of things to be explored!
