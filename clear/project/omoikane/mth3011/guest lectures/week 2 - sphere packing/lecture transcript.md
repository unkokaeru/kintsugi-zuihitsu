# Lecture Transcript: Inquiry into the Packing Properties of Spheres

Hello, everyone. I'm Fabien Paillusson, and in this seminar we will explore the packing properties of spheres. This is a subject I am particularly interested in: how we arrange spheres together and the mathematical properties that emerge from these arrangements. Let us begin by examining what this problem entails.

Here I will show you a simulation. This simulation box, shown in yellow, displays the three coordinate directions: X, Y, and Z. I will numerically pour ten thousand spheres into this container. The simulation is now running and will complete shortly. Once finished, we can define a quantity called the packing fraction.

The packing fraction indicates how much space the arrangement of spheres fills. In the formula, N represents the number of spheres, v represents the volume of a single sphere, and V_packing represents the total volume occupied by the packing of spheres in the box. This is the volume of the smallest cuboid that contains all the spheres.

Because there are interstices between the spheres—they do not completely fill space—the packing fraction η (eta) is always less than or equal to one. It cannot be larger than one, and it is greater than zero because it represents a ratio of two volumes. For this particular case, the packing fraction is 0.61541.

Because science is about reproducibility, we can repeat this simulation. When we repeat it with a different initial configuration—starting with spheres in different positions—we observe that the protocol remains the same: spheres are poured into the container. However, because we cannot control the exact initial placement of each grain, we obtain slightly different results. The second simulation yields a packing fraction of 0.61629 instead of 0.61541. This demonstrates that there is variation in the packing fraction simply from pouring the same number of spheres twice.

Why should we care about this variation? If you are a manufacturer producing spherical sweets, for instance, you need to understand and predict the variation δN (delta N) in the number of sweets poured into a given container. During various processing and transportation stages, there will always be pouring and counting operations.

Through error propagation analysis, we can determine that the uncertainty in N, denoted δN, equals N times the relative imprecision in η: δN = N × (δη/η). This is approximately equal to N times the absolute value of (η₁ - η₂) divided by η₁.

If we apply the values from our simulation—for example, with N = 50,000—we find that δN equals seventy-two. While this may not seem large initially, it represents a significant imprecision. However, my simulation is highly idealized with no friction and many simplifications. According to Wikipedia, a more realistic estimate of this imprecision in the packing fraction when pouring granular materials made of spheres is approximately 0.035. Applying this to N = 50,000 yields an imprecision of almost 3,000 spheres. This uncertainty can lead to substantial problems in actual manufacturing processes.

In my simulations, I have created a very specific environment with no friction and many idealized conditions. The actual manufacturing imprecision can be much larger.

Philosophically, this presents an interesting problem. The dynamics of the grains are deterministic, yet we cannot predict η with certainty. This is primarily because we have uncertainty in the exact initial state of the system. Even if we could know the initial state precisely, the system is also chaotic, which means we could not replicate the results anyway.

This raises a fundamental mathematical question: Can we make any reliable mathematical or physical predictions about sphere packings at all? Given that the dynamics and typical uncertainty when pouring granular material into a container make everything seem random, how can we proceed? This is one of the central questions in my research.

So let's see here. We've got this particular question here. Mathematically, this is quite appealing—it has to do with finding what is mathematically possible or impossible for a stack of spheres. And here we are going to look at oranges as an example. So you've got these oranges and you're interested in guessing—or finding out, if you want—which is the most effective way of stacking oranges. By that, I mean, which is the densest packing? Would that be putting them randomly, or in a square arrangement, or a cubic arrangement, or in a hexagonal arrangement?

## Densest Packing Arrangements

Let us now examine mathematically which packing arrangement is most effective. Consider oranges as an example. If we want to stack oranges efficiently, we might arrange them randomly, in a square pattern, in a cubic arrangement, or in a hexagonal arrangement. Which method provides the densest packing?

The mathematical answer is that the hexagonal packing works best. For two-dimensional arrangements, we can calculate the exact packing fractions. In 2D, the hexagonal packing fraction is π/(2√3) ≈ 0.90, while the square arrangement yields π/4 ≈ 0.78. In 3D, the hexagonal packing fraction is π/(3√2) ≈ 0.74, while the simple cubic arrangement yields only 0.52. In each case, the hexagonal arrangement achieves the highest packing fraction.

The history of this mathematical problem is fascinating. Lagrange proved that hexagonal packing was optimal in 2D during the 18th century. Johannes Kepler conjectured in 1611 that hexagonal packing was also optimal in 3D—this became known as the Kepler conjecture. Gauss proved it for regular packings in the 19th century.

Hales and Ferguson proposed a proof by exhaustion in 1998, examining all possible packing configurations. They then created a formal proof in 2003, which was verified by an automated proof-checking algorithm over twelve years. The formal proof of the Kepler conjecture was finally published in 2017, completing a journey that began in 1611.

## Random Packings and Tapping Experiments

We have established that ordered packings are denser than random packings. However, we do not know whether there is a maximum value for randomly arranged sphere packings, nor how to properly represent random packings mathematically.

Let us now connect this to the column simulations shown earlier. Instead of pouring spheres a second time, we can tap the column of grains. When tapped, the grains flow upward and then settle again, similar to magma rising and falling. After multiple tapping cycles, we observe that the packing fraction increases from 0.615 to 0.618 to 0.619—the system densifies.

Working with undergraduate student Charlotte Vade during a UROS project, we investigated this systematically for different tapping amplitudes. We found that stronger tapping results in lower final packing fractions, while gentler tapping allows the system to densify more. However, regardless of tapping amplitude, we cannot exceed a packing fraction of approximately 0.64. This is substantially less than the maximum value of 0.74 for hexagonal packing.

## Random Close Packing

Scott published a paper in Nature examining this phenomenon experimentally. When conducting experiments or simulations, we always work with finite systems. To obtain universal values—values that are theoretical or ideal—we must account for boundary effects. Researchers plot results not against system size directly, but against the inverse of system size (1/N).

When extrapolating this data to where 1/N equals zero (infinite system size), Scott estimated a value of approximately 0.637, which he termed "random close packing." He stated: "It seems unlikely that there are other stable, random packing arrangements for equal spheres which have packing densities outside these two limits." Below a lower limit, arrangements undergo avalanches. Random packing obtained by tapping appears to reach a maximum value around 0.64.

In 2012, researchers explored whether applying mechanical load would affect this limit. Counterintuitively, they found that higher loads result in looser packing—or the packing saturates. Applying force makes it more difficult to compact the system, and higher loads lead to lower final packing fractions.

J.D. Bernal, a polymath working in both mathematics and physics, conjectured this geometrically in 1959. Based on geometrical considerations, he proposed that there is an absolute impossibility of forming a homogeneous assembly with volume intermediate between long-range order and close-packed disorder. In other words, random assemblies cannot achieve packing fractions between 0.64 and 0.74.

This raises the question: Is there a "new Kepler conjecture" for random packings? While we know the maximum for regular packs is the hexagonal arrangement at 0.74, and this exceeds all random packs, we do not know if there is a definitive upper limit for random packs specifically.

## Challenges in Defining Random Packing

This concept faces legitimate scientific challenges. Critics argue that the words "random" and "disordered" are used too loosely, and the means to quantify disorder is not unique. We can discuss maximally disordered states with respect to a given order parameter or symmetry group, but this approach loses universality—we would have one Kepler conjecture for each method of quantifying disorder.

Experimentally, the situation is equally complex. Researchers found that vertical tapping yields the 0.64 limit, consistent with random close packing. However, horizontal tapping yields 0.66, and some studies have shown that combinations of tapping directions can reach 0.74—the same as hexagonal packing. This demonstrates that the problem is not as straightforward as it initially appears.

In summary, for random packing, 0.64 appears to be the maximum obtainable value in various situations and scenarios, both in 2D and 3D. This value is highly reproducible across different processes, though exceptions exist. Whether we consider this a true maximum limit depends on several factors: the protocol used, the order metric chosen to define randomness, the presence of local symmetries, the specific system properties such as friction, and the tapping method. Despite these dependencies, the value 0.64 appears repeatedly, and understanding why remains an active research question.

A 2011 paper boldly titled "Non-universality of density and disorder in jammed sphere packing" captures one key message: defining random or disordered packs is difficult, and reaching agreement on definitions and mathematical approaches presents significant challenges. Experimentally, while these values are easily reproduced, they are equally easy to deviate from under different conditions.

## Probabilistic Approaches

An alternative approach examines randomness not through the disorder of arrangements, but through its mathematical meaning: probabilities. Something is random if we can associate a random variable with it and define a corresponding probability distribution. Can we predict the probabilities of obtaining certain packing fractions or arrangements of spheres? I will present some findings from my research, though time constraints prevent detailed discussion. I am happy to elaborate during the Q&A session.

One area we investigated with collaborators is ergodicity in granular materials. Ergodicity essentially asks whether time-averaged statistics equal ensemble statistics. For example, if you throw a die many times and record the frequency of each outcome, that should equal the frequency you observe when throwing many dice simultaneously. While this property holds for ideal dice (though real dice accumulate wear and eventually become spherical), we found that for tapped columns of granular matter, these two types of statistics do not necessarily agree. Depending on which statistics you examine, you reach different conclusions and outcomes. This presents significant challenges when formulating theories about which probabilities should appear for given protocols.

We were among the first to emphasize the importance of careful statistical analysis when comparing theory to experiment. We showed that below a critical tapping strength, time-averaged and ensemble statistics disagree. Above this threshold, they converge. This corresponds to the relaxation process and mechanical properties of the system.

We also developed tools to measure the entropy of granular materials. Here, entropy represents the total number of possible arrangements in a given box, calculated according to specific protocols. This is a difficult counting exercise. My colleagues continued this work and published findings in Nature Physics in 2017. They found that two different entropies corresponding to two different protocols eventually converge to the same value at a specific point—precisely at the random close packing value of 0.64. Furthermore, both entropies reach their maximum at this point.

This interpretation suggests that random close packing is actually a maximum of entropy associated with packing fraction. In other words, it is the statistically most probable configuration, and this finding appears to be universal.

## Summary

Let me summarize what we can say with certainty about sphere packings of equal spheres. Note that if sphere sizes vary, the problem becomes much more complicated.

What do we know for certain? In Euclidean space, the densest structures in 2D and 3D are hexagonal. This has been proven rigorously—in fact, quite recently. For higher dimensions, it remains uncertain whether random structures might actually be denser than organized ones, but in 2D and 3D, the hexagonal arrangement is definitively optimal.

For vertically tapped columns, the densest packing value appears to be fairly certain, though some hypothesize that given extremely long timescales, densification might proceed beyond the 0.64 limit. This remains speculation.

For the densest random packing, the situation is much less clear, particularly because the definition of "random" remains contentious. There is strong disagreement about this matter. Our research has shown that different statistical approaches sometimes agree and sometimes disagree, making this, as usual, a complicated matter.

Thank you for your attention. If you have any questions, please feel free to note them and ask them during the Q&A session.
