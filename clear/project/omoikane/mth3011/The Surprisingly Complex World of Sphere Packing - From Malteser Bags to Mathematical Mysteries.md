# The Surprisingly Complex World of Sphere Packing: From Malteser Bags to Mathematical Mysteries

**Dr. Fabien Paillusson** recently gave a fascinating seminar that began with a deceptively simple observation: "You've probably never considered the packing properties of spheres, so that's why I'm here to talk about it." Little did the audience know they were about to embark on a journey spanning centuries of mathematical curiosity, from Kepler's 17th-century conjecture to modern commercial applications that affect every bag of cereal we buy.

## The Mathematics Behind Your Morning Cereal

At its core, sphere packing is about efficiency. When manufacturers fill containers with spherical objects—whether they're Maltesers, breakfast cereals, or pharmaceutical pills—they're dealing with a fundamental mathematical concept called the **packing fraction**:[staff.lincoln+1](https://staff.lincoln.ac.uk/fb900eee-83e8-4a49-b5ec-6d9ac9715750)​

η=N⋅vVpacking\eta = \frac{N \cdot v}{V_{\text{packing}}}η=VpackingN⋅v

Where NNN is the number of spheres, vvv is the volume of each sphere, and VpackingV_{\text{packing}}Vpacking is the total volume they occupy. This seemingly simple equation governs everything from how much chocolate you get in your confectionery to how efficiently pharmaceutical companies can ship their products.[staff.lincoln](https://staff.lincoln.ac.uk/fb900eee-83e8-4a49-b5ec-6d9ac9715750)​

Paillusson's simulations reveal the randomness inherent in commercial packing processes. When spheres are spawned randomly and allowed to fall into a container (without friction, initially), the packing fraction varies between iterations. This variation translates directly into real-world manufacturing inconsistencies—and explains why sometimes your bag of Maltesers feels disappointingly light.[staff.lincoln](https://staff.lincoln.ac.uk/fb900eee-83e8-4a49-b5ec-6d9ac9715750)​

## The Weight Variation Problem: A Mathematical Reality Check

The practical implications become clear when we consider manufacturing tolerances. Paillusson presented an equation for calculating variation between simulations:

ΔN=NΔηη≈∣η1−η2∣η1\Delta N = N \frac{\Delta \eta}{\eta} \approx \frac{|\eta_1 - \eta_2|}{\eta_1}ΔN=NηΔη≈η1∣η1−η2∣

This mathematical relationship explains why manufacturers struggle with weight consistency. The connection to real-world packaging becomes particularly relevant when considering the European Union's average weight legislation, brilliantly explained by Chris Spargo in his investigation of packaging tolerances. Spargo's research into the "℮" symbol on packaging reveals that manufacturers can legally vary package weights within specific tolerances—typically allowing 2.5% of packages to fall below the stated weight by a defined margin.youtube​[mws+1](https://www.mws.ltd.uk/a-guide-to-average-weight-legislation-in-the-uk/)​

When Paillusson jokingly mentioned going "to the best source possible, Wikipedia of course" to correct his simulation with friction, he highlighted how even small adjustments (like adding realistic friction) significantly increase packing variation, thereby amplifying the weight discrepancies consumers experience.[staff.lincoln](https://staff.lincoln.ac.uk/fb900eee-83e8-4a49-b5ec-6d9ac9715750)​

## From Ancient Conjectures to Computer-Verified Proofs

The mathematical journey of sphere packing reads like a historical thriller spanning four centuries. In 1611, Johannes Kepler conjectured that hexagonal close packing achieved maximum density for identical spheres. This wasn't just idle speculation—Kepler was genuinely curious about the most efficient way to stack cannonballs.[mathworld.wolfram+1](https://mathworld.wolfram.com/KeplerConjecture.html)​

The mathematical community took this challenge seriously. Lagrange proved the two-dimensional case in the 18th century, while Gauss tackled regular packing arrangements in the 19th century. However, the full three-dimensional proof remained elusive until 1998, when Thomas Hales and Samuel Ferguson finally proved Kepler's conjecture using computer-assisted exhaustive analysis.[wikipedia+2](https://en.wikipedia.org/wiki/Kepler_conjecture)​

Not content with computational proof, Hales embarked on a formal verification project in 2003, which required twelve years of computer verification before completion in 2017. This represents one of mathematics' most persistent problems—taking over 400 years to definitively resolve.[wikipedia](https://en.wikipedia.org/wiki/Kepler_conjecture)​

## The Mysterious 64% Barrier

While mathematicians celebrated solving Kepler's conjecture, practical manufacturers faced a different challenge: random packing doesn't follow optimal mathematical arrangements. Paillusson highlighted fascinating research showing that random sphere arrangements consistently approach a maximum density of approximately 64%—significantly lower than the theoretical maximum of about 74% achieved by perfect hexagonal packing.[wikipedia+1](https://en.wikipedia.org/wiki/Random_close_pack)​

Charlotte Vale's extensive simulations of vertical tapping (mimicking how most people naturally shake cereal boxes to compact contents) demonstrated that densification occurs across all amplitude ranges but never exceeds η≈0.64<π32\eta \approx 0.64 < \frac{\pi}{3\sqrt{2}}η≈0.64<32π. Remarkably, gentler tapping proves more effective than vigorous shaking, achieving higher saturation densities more rapidly.[staff.lincoln](https://staff.lincoln.ac.uk/fb900eee-83e8-4a49-b5ec-6d9ac9715750)​

This 64% limit appeared again in Scott's influential 1960 Nature paper, which plotted density fraction against the reciprocal of container size. The linear correlation intercepted at a theoretical infinite container size, yielding the same η≈0.64\eta \approx 0.64η≈0.64 maximum. This consistency across different experimental approaches suggests a fundamental physical limit to random sphere packing.[semanticscholar](https://www.semanticscholar.org/paper/The-density-of-random-close-packing-of-spheres-Scott-Kilgour/300045ee4130bd27d6e74a39633f4f4e1e3c4597)​

## The Bernal Hypothesis: A New Conjecture

Professor J.D. Bernal proposed what some consider a new Kepler conjecture: there exists no homogeneous assembly of spherical particles with packing density intermediate between random close packing (64%) and perfect hexagonal packing (74%). This "gap hypothesis" suggests a fundamental discontinuity in possible packing arrangements, similar to the continuum hypothesis in set theory that distinguishes between countable and uncountable infinities.[staff.lincoln](https://staff.lincoln.ac.uk/fb900eee-83e8-4a49-b5ec-6d9ac9715750)​

However, this apparent absolute limit faces challenges. Salvatore Torquato and colleagues argued in Physical Review Letters (2000) that "random" lacks precise definition—disorder must be quantified, and quantification methods aren't unique. Their critique highlights the philosophical complexity underlying seemingly straightforward physical concepts.[arxiv+1](https://arxiv.org/abs/cond-mat/0003416)​

Furthermore, recent research suggests the 64% limit isn't absolute. While vertical tapping reaches this boundary, horizontal packing methods can exceed it, demonstrating that packing constraints depend critically on the specific consolidation mechanism employed.[staff.lincoln](https://staff.lincoln.ac.uk/fb900eee-83e8-4a49-b5ec-6d9ac9715750)​

## Current Frontiers and Future Directions

Paillusson's work contributes to an active research field experiencing renewed interest. Recent developments include breakthrough results in higher-dimensional sphere packing, with mathematicians like Maryna Viazovska achieving remarkable progress in dimensions 8 and 24. The 2024 work by Klartag represents another significant advance, achieving new packing records through unexpected mathematical approaches.[quantamagazine+1](https://www.quantamagazine.org/to-pack-spheres-tightly-mathematicians-throw-them-at-random-20240430/)​

Modern applications extend far beyond confectionery manufacturing. Pharmaceutical companies rely on packing efficiency for cost-effective shipping, while materials scientists study granular matter behavior in contexts ranging from geological processes to industrial powder handling. The principles governing sphere packing influence everything from concrete composition to the design of efficient storage systems.

Paillusson's research particularly focuses on the statistical mechanics framework underlying packing protocols, contributing to our understanding of how microscopic interactions produce macroscopic packing behaviors. His work bridges fundamental physics and practical applications, revealing how mathematical abstractions directly impact commercial manufacturing processes.[link.aps](https://link.aps.org/doi/10.1103/PhysRevE.91.012204)​

## The Broader Implications

The sphere packing problem exemplifies how mathematical curiosity drives practical innovation. Kepler's 17th-century curiosity about cannonball stacking evolved into modern understanding of granular matter, manufacturing optimization, and materials science. The mathematical tools developed to solve this problem now influence diverse fields from crystallography to computer science.

For consumers, this research provides insight into the seemingly random variations in package contents that frustrate shoppers worldwide. The next time you shake a cereal box or notice weight variations between identical products, you're witnessing fundamental physical principles that have captivated mathematicians for centuries.

The story of sphere packing demonstrates how even the simplest questions—"What's the most efficient way to pack spheres?"—can lead to profound mathematical insights with far-reaching practical consequences. As Paillusson's research continues to reveal new aspects of this ancient problem, we gain deeper appreciation for the mathematical principles governing our everyday experiences, from the morning cereal bowl to the precise engineering tolerances that make modern manufacturing possible.

The field continues evolving, with researchers exploring ever-higher dimensions and more complex packing scenarios. While we may have solved Kepler's original conjecture, the broader questions surrounding optimal packing in various contexts ensure that this mathematical adventure will continue captivating researchers for generations to come.[mws+10](https://www.mws.ltd.uk/a-guide-to-average-weight-legislation-in-the-uk/)​youtube​

1. [https://staff.lincoln.ac.uk/fb900eee-83e8-4a49-b5ec-6d9ac9715750](https://staff.lincoln.ac.uk/fb900eee-83e8-4a49-b5ec-6d9ac9715750)
2. [https://en.wikipedia.org/wiki/Sphere_packing](https://en.wikipedia.org/wiki/Sphere_packing)
3. [https://www.youtube.com/watch?v=5tD2bEzihY8](https://www.youtube.com/watch?v=5tD2bEzihY8)
4. [https://www.mws.ltd.uk/a-guide-to-average-weight-legislation-in-the-uk/](https://www.mws.ltd.uk/a-guide-to-average-weight-legislation-in-the-uk/)
5. [https://mathworld.wolfram.com/KeplerConjecture.html](https://mathworld.wolfram.com/KeplerConjecture.html)
6. [https://en.wikipedia.org/wiki/Kepler_conjecture](https://en.wikipedia.org/wiki/Kepler_conjecture)
7. [https://www.nature.com/articles/425126c.pdf](https://www.nature.com/articles/425126c.pdf)
8. [https://en.wikipedia.org/wiki/Random_close_pack](https://en.wikipedia.org/wiki/Random_close_pack)
9. [https://physicsworld.com/a/the-secrets-of-random-packing/](https://physicsworld.com/a/the-secrets-of-random-packing/)
10. [https://www.semanticscholar.org/paper/The-density-of-random-close-packing-of-spheres-Scott-Kilgour/300045ee4130bd27d6e74a39633f4f4e1e3c4597](https://www.semanticscholar.org/paper/The-density-of-random-close-packing-of-spheres-Scott-Kilgour/300045ee4130bd27d6e74a39633f4f4e1e3c4597)
11. [https://arxiv.org/abs/cond-mat/0003416](https://arxiv.org/abs/cond-mat/0003416)
12. [https://link.aps.org/doi/10.1103/PhysRevLett.84.2064](https://link.aps.org/doi/10.1103/PhysRevLett.84.2064)
13. [https://www.quantamagazine.org/to-pack-spheres-tightly-mathematicians-throw-them-at-random-20240430/](https://www.quantamagazine.org/to-pack-spheres-tightly-mathematicians-throw-them-at-random-20240430/)
14. [https://www.quantamagazine.org/new-sphere-packing-record-stems-from-an-unexpected-source-20250707/](https://www.quantamagazine.org/new-sphere-packing-record-stems-from-an-unexpected-source-20250707/)
15. [https://link.aps.org/doi/10.1103/PhysRevE.91.012204](https://link.aps.org/doi/10.1103/PhysRevE.91.012204)
16. [https://www.sciencedirect.com/science/article/pii/S0167880925004013](https://www.sciencedirect.com/science/article/pii/S0167880925004013)
17. [https://repository.rothamsted.ac.uk/download/8dc564ccf2d3740523fe0c0d0365d2f62b691a5072140da8e78df2af4a95f647/1188826/GEODER_2018_52_Original_V0.pdf](https://repository.rothamsted.ac.uk/download/8dc564ccf2d3740523fe0c0d0365d2f62b691a5072140da8e78df2af4a95f647/1188826/GEODER_2018_52_Original_V0.pdf)
18. [https://www.sciencedirect.com/science/article/pii/S0016706118300582](https://www.sciencedirect.com/science/article/pii/S0016706118300582)
19. [https://assets.publishing.service.gov.uk/media/627bed908fa8f57d80991217/Amended_Andrew_Page_etc_decision_for_release.pdf](https://assets.publishing.service.gov.uk/media/627bed908fa8f57d80991217/Amended_Andrew_Page_etc_decision_for_release.pdf)
20. [https://www.reddit.com/r/mildlyinteresting/comments/1nmt3ek/this_300g_broccoli_was_actually_888g/](https://www.reddit.com/r/mildlyinteresting/comments/1nmt3ek/this_300g_broccoli_was_actually_888g/)
21. [https://www.combertonvc.org/download.php/Student%20Handbook](https://www.combertonvc.org/download.php/Student%20Handbook)
22. [https://www.express.co.uk/news/uk/2061333/The-astonishing-reason-Morrison-s-Asda-and-Tesco-all-have-clock-towers](https://www.express.co.uk/news/uk/2061333/The-astonishing-reason-Morrison-s-Asda-and-Tesco-all-have-clock-towers)
23. [https://www.stevenstraceability.com/average-weight-explained/](https://www.stevenstraceability.com/average-weight-explained/)
24. [https://www.cambridge.org/core/journals/renewable-agriculture-and-food-systems/article/influence-of-cover-crop-variety-termination-timing-and-termination-method-on-mulch-weed-cover-and-soil-nitrate-in-reducedtillage-organic-systems/7786AAF49BC55AF1AB18BAAA7C9D2049](https://www.cambridge.org/core/journals/renewable-agriculture-and-food-systems/article/influence-of-cover-crop-variety-termination-timing-and-termination-method-on-mulch-weed-cover-and-soil-nitrate-in-reducedtillage-organic-systems/7786AAF49BC55AF1AB18BAAA7C9D2049)
25. [https://www.businesscompanion.info/node/532/printable/print](https://www.businesscompanion.info/node/532/printable/print)
26. [https://acsess.onlinelibrary.wiley.com/doi/10.2134/agronj2016.09.0557](https://acsess.onlinelibrary.wiley.com/doi/10.2134/agronj2016.09.0557)
27. [https://www.gov.uk/weights-measures-and-packaging-the-law/packaged-goods](https://www.gov.uk/weights-measures-and-packaging-the-law/packaged-goods)
28. [https://www.foodmanufacturing.com/packaging/blog/13166528/conformity-of-packaged-food-how-to-ensure-the-correct-weight](https://www.foodmanufacturing.com/packaging/blog/13166528/conformity-of-packaged-food-how-to-ensure-the-correct-weight)
29. [https://assets.publishing.service.gov.uk/media/6835cf3c9c2ff625fff6932d/Guide-to-packaging-regulations-2006-version-3D.pdf](https://assets.publishing.service.gov.uk/media/6835cf3c9c2ff625fff6932d/Guide-to-packaging-regulations-2006-version-3D.pdf)
30. [https://www.driversouthall.co.uk/wp-content/uploads/2023/07/EU-Average-Weight-Legislation-and-DS-Checkweighers.pdf](https://www.driversouthall.co.uk/wp-content/uploads/2023/07/EU-Average-Weight-Legislation-and-DS-Checkweighers.pdf)
31. [https://www.gov.uk/guidance/packaged-goods-weights-and-measures-regulations](https://www.gov.uk/guidance/packaged-goods-weights-and-measures-regulations)
32. [https://techni-k.co.uk/process-control/average-weights/](https://techni-k.co.uk/process-control/average-weights/)
33. [https://www.spai-srl.com/checking-the-weight-of-pre-packaged-products/?lang=en](https://www.spai-srl.com/checking-the-weight-of-pre-packaged-products/?lang=en)