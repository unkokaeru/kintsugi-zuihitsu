# Inquiry into the Packing Properties of Spheres

**Date:** 8th October 2025  
**Speaker:** Dr Fabien Paillusson

Why does a bag of Maltesers sometimes contain fewer sweets than another identically sized bag? The answer lies in a centuries-old mathematical puzzle about how spheres pack together—a problem that took 406 years to solve definitively.

## The Packing Fraction Problem

When spheres are poured into a container, gaps inevitably remain between them. The packing fraction—the proportion of space actually filled by the spheres—quantifies this efficiency. Dr Paillusson demonstrates through simulation that even with identical protocols, pouring 10,000 spheres twice yields different packing fractions: 0.615 versus 0.616. This seemingly small variation scales alarmingly in industrial contexts. For a manufacturer filling containers with 50,000 spherical sweets, realistic variations in packing fraction (around 0.035) translate to uncertainty of nearly 3,000 items per container—a significant financial and logistical challenge.

## The Hexagonal Champion

Mathematically determining the densest possible arrangement reveals elegant results. In two dimensions, hexagonal packing achieves a fraction of approximately 0.90, far surpassing the square arrangement's 0.78. Three-dimensional hexagonal packing reaches 0.74, while simple cubic stacking manages only 0.52. The familiar honeycomb pattern emerges as nature's optimal solution.

Johannes Kepler conjectured in 1611 that hexagonal packing was optimal in three dimensions. Gauss proved it for regular lattices in the 19th century, but the general case remained elusive. Thomas Hales and Samuel Ferguson finally tackled it through proof by exhaustion in 1998, examining every possible configuration. Their formal proof, begun in 2003 and verified by automated proof-checking algorithms, was published in 2017. According to mathematician Matthew Jenssen, "The Kepler conjecture represents one of the great triumphs of computational mathematics, showing how modern techniques can finally resolve centuries-old questions."

## The Mysterious 0.64 Barrier

Random packings tell a different story. Experiments by G.D. Scott published in Nature examined what happens when spheres settle randomly rather than in ordered arrays. His work identified "random close packing" at approximately 0.637—a reproducible ceiling regardless of how vigorously containers are tapped.

Yu and Hall's 1994 experiments revealed that tapping direction matters dramatically. Vertical tapping consistently produces packing fractions around 0.64, but horizontal tapping reaches 0.66, and combined tapping directions can achieve 0.74—matching hexagonal packing. This dependency on protocol highlights a fundamental challenge: defining what "random" truly means in this context.

Counterintuitively, applying mechanical load to spheres produces *looser* packings. Higher forces make compaction more difficult, contradicting everyday intuition that pressing harder should squeeze things tighter. J.D. Bernal conjectured geometrically in 1959 that homogeneous assemblies cannot achieve intermediate packing fractions between 0.64 and 0.74—there exists a forbidden zone separating random from ordered states.

## An Entropic Interpretation

Recent research offers a probabilistic perspective. Rather than defining randomness through disorder metrics, researchers examine the statistical mechanics of sphere packings. Work published in Nature Physics in 2017 measured the entropy—the total number of possible arrangements—for different packing protocols. Remarkably, both examined entropies converge to their maximum at precisely 0.64.

This suggests random close packing represents the statistically most probable configuration: the arrangement most likely to occur spontaneously. The 0.64 barrier emerges not from geometric impossibility but from probability—it is where the system has the greatest number of accessible states.

## Why This Matters

Beyond satisfying mathematical curiosity, sphere packing governs practical concerns across multiple industries. Pharmaceutical companies filling capsule containers, food manufacturers packaging spherical products, and materials scientists designing granular composites all contend with these principles. Understanding packing efficiency directly impacts manufacturing costs, quality control, and supply chain management.

In higher dimensions—relevant to information theory and error-correcting codes—the question becomes even more intriguing. Might random packings actually exceed ordered ones in spaces beyond our familiar three dimensions? The problem extends into abstract mathematical spaces where our geometric intuition fails.

Dr Paillusson's work demonstrates that even "simple" questions about spheres reveal profound complexity. The system's deterministic dynamics nevertheless produce unpredictable outcomes due to sensitivity to initial conditions and chaos. As he notes, whether 0.64 represents a true maximum depends on protocol, friction, symmetries, and how we quantify disorder—each choice yields different conclusions.

## The Bigger Picture

The hexagonal arrangement definitively achieves 0.74—proven rigorously after four centuries. Random packing consistently reaches approximately 0.64 across diverse experimental conditions, though the theoretical justification remains contentious. Between these values lies a forbidden zone where packings apparently cannot exist—at least not in stable, reproducible fashion.

Every gap between spheres represents a question waiting to be answered. From grocery store shelves to abstract mathematical spaces, the packing properties of spheres continue to surprise us, revealing that even the most familiar objects harbor deep mysteries.

---

**References:**

1. Yu, A.B. and Hall, J.S. (1994). "Packing of fine powders subjected to tapping." *Powder Technology*, 78(3), 247-256.

2. Hales, T.C. et al. (2017). "A formal proof of the Kepler conjecture." *Forum of Mathematics, Pi*, 5, e2.

3. Jenssen, M. (2024). "The Kepler conjecture and sphere packing." *Bulletin of the American Mathematical Society*, 61(1), 1-60.
