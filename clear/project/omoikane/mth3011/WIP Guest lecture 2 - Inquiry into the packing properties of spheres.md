# Packing Spheres: From Cereal Boxes to Centuries of Mathematics

**Dr. Fabien Paillusson**'s seminar offered a look into sphere packing—a topic that may feel distant from everyday life, until you find yourself eyeing a half-empty box of Maltesers or cereal.

## Why Do Packages Never Feel Full?

Sphere packing is about how efficiently a bunch of spheres fill a given space. This efficiency is measured by the **packing fraction**:

$$
\eta = \frac{N v}{V_{\text{packing}}}
$$

Where $N$ is the number of spheres, $v$ the volume of each, and $V_{\text{packing}}$ the total volume [1][2]. When factories fill your bag of treats, the result is subject to randomness—spheres drop in without careful alignment, and friction (or the lack of it) creates further variation in how densely they can be arranged.

Paillusson ran simple simulations—spheres falling without friction—to explore how the packing fraction changes each time. This models why one box of Maltesers sometimes weighs a touch less than another.

$$
\Delta N = N \frac{\Delta \eta}{\eta} \approx \frac{|\eta_1 - \eta_2|}{\eta_1}
$$

This formula tracks how much manufacturers' error can vary from run to run, so what the consumer receives also varies—linking directly to commercial packaging error (see regulations and Chris Spargo's ℮ analysis) [3][4]. Simulation with friction (from Wikipedia's physical models) further increases this variation.

The dynamics of grains are deterministic (they follow physics), but the outcome is random because the starting arrangement is random. The central open question is whether mathematical theory can predict final packing densities, or if simulation is necessary.

## What Does "Best" Mean in Packing?

The mathematical history is long. In 1611, Kepler conjectured that the densest possible ball packing is the "hexagonal close packing"—where spheres nestle perfectly. Lagrange proved the 2D case (close-packed circles in a plane) in the 18th century; Gauss tackled regular 3D packing a century later [5][6]. In 1998, Hales and Ferguson used a computer to check all possible regular configurations; Hales then formally verified the proof, with help from computers, by 2017—a major milestone in mathematical rigor [6][7].

But real-world sphere arrangements aren't perfectly regular. In random packing, there's always extra space.

The connection to **crystallography** is direct: optimal sphere packing models how atoms arrange in crystals, but also how grains or beads fill physical containers.

## The 64% Ceiling (and Why Tapping Doesn't Help Forever)

Drop spheres into a box, or shake your cereal to settle it, and the packing fraction rarely tops 64% [8][9]. Charlotte Vale's simulations with vertical tapping showed densification for all amplitudes—gentler taps fill quicker, but even the best approach can't exceed roughly $\eta \approx 0.64 < \frac{\pi}{3\sqrt{2}}$. Scott, Nature (1960) measured how density fraction (packing efficiency) correlates with container size; the extrapolated maximum lands at the same 64% barrier for large containers [10].

Applying extra downward force—rather than just tapping—decreases density, likely because grains get locked up and can't rearrange. Tapping helps up to a point, but vertical motion is a hard limit for random packing. Horizontal shaking, though, can eke out a bit more density.

## Filling the Gaps: Is There a "Middle" Packing?

Prof. J. D. Bernal proposed that no homogeneous assembly of points with packing fraction exists in-between random close packing (64%) and perfect hexagonal order (74%). This is sometimes dubbed the "new Kepler conjecture," and links (conceptually) to the continuum hypothesis: there is no set with cardinality (size) strictly between the rationals and the reals.

Others (Torquato et al., Physical Review Letters, 2000) have pushed back: "random" can be formally defined many ways, and quantifying disorder is not unique [11][12]. RCP (random close packing) isn't a sharp threshold, just a practical best for vertical tapping—other arrangements and "jammed" states in the statistical physics literature sometimes squeeze past it, especially in higher dimensions [13][14].

## Why Care? Beyond Snacks and Sweets

The sphere packing problem is more than theoretical: it affects how pills are bottled, how grains are stored, and how codes are designed for communications and data storage. Recent breakthroughs, like Viazovska's optimal packings in 8 and 24 dimensions, push the boundaries of what's possible for high-density digital encoding [13][14].

Dr. Paillusson's own work investigates the statistical mechanics of packing processes, clarifying how small changes in protocol (tapping, vibration, compression) shift outcomes [15]. These findings translate abstract mathematics into practical industrial know-how.

## In Summary

Packing spheres may seem trivial or even pointless until you realise that the gaps in your cereal box are the result of hundreds of years of mathematical inquiry. Hexagonal close packing—the theoretical limit—is not just fun math, but a constraint for every business shipping spherical goods. Between random and regular packing, there's no practical middle ground, and the "random close packing" frontier remains an active area in physical and mathematical research [1][2][5][6][7][8][9][10][11][12][13][14][15].

## References

[1] F. Paillusson, "Dr Fabien Paillusson - Staff Directory," University of Lincoln. [Online]. Available: <https://staff.lincoln.ac.uk/fb900eee-83e8-4a49-b5ec-6d9ac9715750>. [Accessed: Oct. 13, 2025].

[2] "Sphere packing," Wikipedia, Nov. 15, 2003. [Online]. Available: <https://en.wikipedia.org/wiki/Sphere_packing>. [Accessed: Oct. 13, 2025].

[3] C. Spargo, "What does ℮ mean?," YouTube, Sep. 14, 2025. [Online]. Available: <https://www.youtube.com/watch?v=5tD2bEzihY8>. [Accessed: Oct. 13, 2025].

[4] "A Guide to Average Weight Legislation in the UK," MWS Ltd. [Online]. Available: <https://www.mws.ltd.uk/a-guide-to-average-weight-legislation-in-the-uk/>. [Accessed: Oct. 13, 2025].

[5] E. W. Weisstein, "Kepler Conjecture," Wolfram MathWorld. [Online]. Available: <https://mathworld.wolfram.com/KeplerConjecture.html>. [Accessed: Oct. 13, 2025].

[6] "Kepler conjecture," Wikipedia, Nov. 15, 2003. [Online]. Available: <https://en.wikipedia.org/wiki/Kepler_conjecture>. [Accessed: Oct. 13, 2025].

[7] "The proof of the packing," Nature, vol. 425, p. 126, 2003. [Online]. Available: <https://www.nature.com/articles/425126c.pdf>. [Accessed: Oct. 13, 2025].

[8] "Random close pack," Wikipedia, Jul. 17, 2007. [Online]. Available: <https://en.wikipedia.org/wiki/Random_close_pack>. [Accessed: Oct. 13, 2025].

[9] M. Wilson, "The secrets of random packing," Physics World, Jan. 14, 2018. [Online]. Available: <https://physicsworld.com/a/the-secrets-of-random-packing/>. [Accessed: Oct. 13, 2025].

[10] G. D. Scott and D. M. Kilgour, "The density of random close packing of spheres," Semantic Scholar, Mar. 4, 2006. [Online]. Available: <https://www.semanticscholar.org/paper/The-density-of-random-close-packing-of-spheres-Scott-Kilgour/300045ee4130bd27d6e74a39633f4f4e1e3c4597>. [Accessed: Oct. 13, 2025].

[11] S. Torquato, T. M. Truskett, and P. G. Debenedetti, "Is Random Close Packing of Spheres Well Defined?," arXiv preprint cond-mat/0003416, Mar. 24, 2000. [Online]. Available: <https://arxiv.org/abs/cond-mat/0003416>. [Accessed: Oct. 13, 2025].

[12] S. Torquato, T. M. Truskett, and P. G. Debenedetti, "Is Random Close Packing of Spheres Well Defined?," Phys. Rev. Lett., vol. 84, p. 2064, Mar. 5, 2000. [Online]. Available: <https://link.aps.org/doi/10.1103/PhysRevLett.84.2064>. [Accessed: Oct. 13, 2025].

[13] E. Klarreich, "To Pack Spheres Tightly, Mathematicians Throw Them at Random," Quanta Magazine, Apr. 29, 2024. [Online]. Available: <https://www.quantamagazine.org/to-pack-spheres-tightly-mathematicians-throw-them-at-random-20240430/>. [Accessed: Oct. 13, 2025].

[14] E. Klarreich, "New Sphere-Packing Record Stems From an Unexpected Source," Quanta Magazine, Aug. 18, 2025. [Online]. Available: <https://www.quantamagazine.org/new-sphere-packing-record-stems-from-an-unexpected-source-20250707/>. [Accessed: Oct. 13, 2025].

[15] F. Paillusson, "Devising a protocol-related statistical mechanics framework," Phys. Rev. E, vol. 91, 012204, 2015. [Online]. Available: <https://link.aps.org/doi/10.1103/PhysRevE.91.012204>. [Accessed: Oct. 13, 2025].
