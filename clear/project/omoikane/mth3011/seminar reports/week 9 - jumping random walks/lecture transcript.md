# Lecture Transcript: Jumping Random Walks and Glass-like Materials

Good day. I want to present some of the research I did when I was a PhD student just after graduation. The talk is about jumping random walks—a stochastic description for modeling glass-like materials.

## What Are Glass-like Materials?

Materials can be quantified by looking at their viscosity. Viscosity tells you how easily a material flows.

For example, water has a viscosity of about 10⁻³ Pascal-seconds. Pitch is much slower. If you put pitch in a beaker, a droplet will fall only every 10 years or so into the beaker underneath. Therefore, the viscosity is much higher: 10⁸ Pascal-seconds.

The viscosity of glass is even higher. Glass, in this sense, is more than just drinking glass or window glass—it is any disordered material with a viscosity larger than 10¹² Pascal-seconds. You can imagine this is already a really slow process for glasses, even 10¹² or slower.

Not every material is a glass. A glass also has to be a disordered material, as opposed to a crystalline material. Glass has properties of both liquids (in that it is disordered like liquid structures) and solids (because it has such a long relaxation time). The definition of glass transition is when the viscosity surpasses 10¹² Pascal-seconds.

You can have a liquid that, if cooled sufficiently and it does not crystallize, can turn into a glass. For example, pitch was actually made into a glass. If you hit it with a hammer, it shatters like a solid, but if you wait a very long time, it actually behaves like a fluid.

The pitch drop experiment is actually the longest-running experiment in the world. You can find YouTube videos showing when the ninth drop fell, and the tenth drop is on its way. There is actually a live webcam you can follow. Most of the time, nothing happens because the process is so slow.

## Polymers

Pitch consists of polymer chains—many polymer chains. What is a polymer? The word comes from Greek: "poly" means many, "mer" means parts. Basically, it means many identical building blocks joined together.

Here on the left, I show you a schematic picture of a polymer. You could have a bead necklace with beads joined together, or in the middle, I show you a more realistic polymer where you can see individual atoms. This particular example is polystyrene. On the right is an example of green light, about a millimeter in size, of polymers that can be easily formed into any shape.

The benefit of polymers is that you can easily mold them into different shapes. For example, safety glasses can be made from polymers. The casing of mobile phones is made of polymer. If you scratch it, it also has self-healing properties. This particular polymer, if you stretch it, after a few hours the scratch will disappear once you heat it.

## Molecular Modeling

We can actually model these polymers on a computer. That is what I did during my PhD in molecular modeling. It basically involves solving equations of motion for every particle. In this case, I was interested in mechanical properties, so I tried to pull the material and see how easily it deforms to determine the mechanical properties. You can see the individual atoms as the material elongates and breaks. In this case, it involves thousands of particles, which is computationally quite intense.

Actually, the goal of this project is to make a simple mathematical model that still captures the essentials of some of the processes we see in polymer glass. Here I have highlighted one polymer chain.

If you look at it as a function of time, you see it vibrates a little bit and then suddenly it jumps. Then it vibrates again. You have this jumping motion between so-called cages.

## Random Walks

How can we model this mathematically? The first step is to look at a random walk. A random walk can be defined as follows: a person, after every step, takes one step and then changes direction in a random fashion. They could turn to the front row, left, right, or backwards.

Here, the first step would be to the front, then turn to the right, turn to the left, left again. If after every choice of step, the direction you take is completely random, then this is called a random walk.

In this case, the random walk is on a lattice because there is a discrete number of directions—the angle is basically 360 divided by 4, which is 90 degrees. You can also have a random angle, and it would still be a random walk but not on a lattice anymore.

A random walk can also be generalized to higher dimensions. This is a random walk in three dimensions, sometimes called a random flight. After every step, you take a totally different direction. Making movements in any direction. On the left is an example of a random walk after 20 steps in three dimensions. On the right, it is after 10,000 steps. Here I zoomed out a little bit so the picture fits the screen.

## Characterizing Random Walks

How can we quantify the walks? Here I show you examples of different random walks where the probability of going left, right, up, or down is all equal, but for different realizations. You can see some go to the left. We want to characterize average properties of this random walk.

This random walk is actually a Pólya-type random walk. For a random walk, I can characterize it by the individual steps. At each step, there will be a vector r₁, r₂, and so on. In general, the i-th step will be rᵢ. The total distance traveled, from the start to the end, will be given by capital R.

The probability distribution function for a Pólya-type random walk is that the probability of moving in a certain direction (so step i, rᵢ, is in a direction) is the same as the probability that the step will be in the opposite direction (-rᵢ). This will be the case for one-dimensional, two-dimensional, and three-dimensional Pólya-type random walks.

With this property, you can actually prove a lot of things. Basically, it is equally likely to go backward, forward, left, or right in any dimension.

## Average Displacement

How do we characterize this? Here I show you random walks on a two-dimensional lattice. The following shows 100 different random walks of 100 steps each. You can see that if I increase the number of steps, the size of the random walk typically increases.

Obviously, it is a random process, so I have to look at averages to characterize it. One possibility is to look at the average displacement.

Here capital R is the total displacement. I will take the average, denoted by angle brackets ⟨⟩. Capital R is defined as the sum of the individual steps: R = Σᵢ rᵢ.

When I average over this quantity, the average of the sum equals the sum of the averages. This is a property from probability and statistics. I can take the average inside the sum: ⟨R⟩ = Σᵢ ⟨rᵢ⟩.

Now we know that for a Pólya-type random walk, the probability of going up is the same as going down. The average of the step size will be zero because moving in one direction is equally likely as moving in the opposite direction. So we average to zero. We can see the average displacement is actually zero for a Pólya-type random walk.

This does give some information, but it does not tell you anything about the size. To know something about the size, we can look at the length or the average squared displacement.

## Mean Squared Displacement

What do I mean by squared displacement? This is basically ⟨R²⟩, the average of R squared. Again, I use the definition: R = Σᵢ rᵢ. For the second factor, I use a different dummy index j: R = Σⱼ rⱼ.

So R² = (Σᵢ rᵢ)(Σⱼ rⱼ) = Σᵢ Σⱼ rᵢ · rⱼ.

Now I use the same property that the average of a sum is the same as the sum of averages: ⟨R²⟩ = Σᵢ Σⱼ ⟨rᵢ · rⱼ⟩.

What I do now: I have a sum over i and j, and I split this j sum into two parts—one part where j is equal to i, and one part where j is not equal to i.

For j ≠ i, I told you that after every step, the direction is completely random again. The probability of step i having a certain direction (say, upwards) and step j having the same direction is the same as any other combination. Therefore, on average, this term will be zero—except when you look at the step itself. If i = j, then rᵢ · rᵢ is just the length of the vector squared, which is always a positive number and cannot be zero.

If I say the length of all the steps is the same (call it r), then ⟨rᵢ · rᵢ⟩ = r². So the average squared displacement is just the sum of r² for each step. If I have n steps, this equals n times r²: ⟨R²⟩ = nr².

This is actually a very important result in random walks. The extent of a random walk is given by the square root of this quantity: √⟨R²⟩ = √(nr²) = r√n.

The extent of a random walk is basically the average step size times the square root of the number of steps. This means that if I take four times more steps, the random walk average size becomes two times larger, because √4 = 2.

## Fractal Dimension

We can interpret this in a different way by considering the dimension of the object—the dimension of our random walk in particular. To find the dimension of an object, I define: Mass ∝ Size^D, where D is the dimension.

For a simple example, consider a line. If I increase the length of a line, then the mass increases in the same proportion. If I double the line (say it is made of wood), then the total mass of the plank increases by a factor of two. The mass is proportional to the size. Since the power is 1, it is a one-dimensional object.

If I consider a disc instead, the area is proportional to the radius or diameter squared: A ∝ r². The mass will be proportional to the size (radius or diameter) squared. Therefore, because the power is 2, it is a two-dimensional object.

For a cube, the mass (or volume) is proportional to the length to the power of 3, and therefore it is a three-dimensional object.

There is another object called the Koch curve (or Koch snowflake) that can be generated as follows: Imagine you have a triangle, and then you replace one of the sides by adding a little triangle in the middle. Then you repeat that process. Here, each line segment is replaced by this segment pattern. If you do this indefinitely, you can actually show this resulting object (the Koch curve) has a dimension of log(4)/log(3) ≈ 1.26. So it is actually between a line (dimension 1) and a disc (dimension 2).

In the same way, we can also calculate the dimension of a random walk. We saw that the size scales as r√n. For every step, say it has a certain mass. Then mass is proportional to the number of steps n. Using our relation, the number of steps is proportional to the size squared: n ∝ Size². Because n is proportional to Size², this means Mass ∝ Size², so it is a two-dimensional object.

This is the case even when you consider random walks in other dimensions. Here I showed a random walk in two dimensions, but even for a random walk in three dimensions, it is a two-dimensional object. Therefore, you can see this kind of space-filling behavior. In two dimensions or three dimensions, there is a fractal structure.

## Connection to Glass Materials

What do random walks have to do with glasses? In glass or liquid, I can draw a schematic picture. Here I have particles moving around in a liquid. If you focus on one particle (the blue one), it might have come from this side, and then it bumps into this particle, then that particle, and so on.

If you look at the trajectory of the blue particle, it actually looks like a random walk. You can actually show this is the case. That is the connection of random walks to materials like this—they basically show random walk-like behavior. This is also called diffusion behavior.

You can actually see this under a microscope. There are videos that show this. This random walk is also known as Brownian motion. For example, milk fat globules: if you look with a microscope, you can observe that those milk fat globules move around because of thermal motion. They get kicked by other particles and show this jiggling behavior. Basically, if you look at long-time behavior, it behaves exactly like a random walk.

So if you see a glass of milk, all those particles are moving around. For water, it would be more difficult to observe. You can also simulate this using molecular dynamics. Here I have a sample with particles that I can let start moving. They will show random walk-like statistics when they are close to each other and bounce into each other. If you look at trajectories, the step size looks constant, but you can define a mean step size.

## Mathematical Modeling with Newton's Second Law

How can we model this mathematically? We start with Newton's second law. If I write the position of a particle, the first derivative with respect to time is the velocity. The second derivative is the acceleration.

Newton's second law states that mass times acceleration of a particle equals the force acting on that particle. That is basically Newton's second law.

If you want to study the motion of a particle, you have to know what kind of external forces are acting on this particle. One of those forces is called the drag force or friction force.

Basically, if you drop a sphere in a liquid, initially it will accelerate because of gravity. But then eventually it will reach a constant velocity with increasing time. That is because the force due to gravitation is balanced by the drag force. The drag force basically tries to slow the particle down.

It is proportional to the velocity of the particle with a minus sign, and the proportionality constant is called the friction coefficient ζ. This friction coefficient is actually related to the viscosity, which I mentioned before. For a sphere in a liquid, it is given by Stokes' law: ζ = 6πηr, where η is the viscosity and r is the radius of the sphere.

That is the drag force and the friction coefficient, which is part of the drag force. As I said, r is the radius of the sphere.

That is one force acting on a particle in a liquid. Another force is due to random collisions. I can describe this fluctuating force by ζG, where G is a random vector depending on time t. When you look at time t, these are kicks due to surrounding particles.

We know that on average, it is equally likely to kick from above or below or in any direction. Therefore, the average of this random signal will be zero: ⟨G⟩ = 0.

This G will not be determined entirely by the average. We also look at the second moment. The second moment is basically the magnitude squared: ⟨G(t) · G(t')⟩, where t' is a different time (the dot product).

We can define this as being equal to 2dD times δ(t - t'), where d is the dimension (in two dimensions, d = 2), D is the diffusion coefficient (the strength of this random driving force), and δ is the Dirac delta function.

You might have heard of the Dirac delta function. It is basically a function that is zero everywhere except at the argument equal to zero.

You can define it as the limit of a rectangle with area 1 where the width goes to zero. The Delta function is the limit as ε goes to zero from above: δ(x) = 1/(2ε) for |x| < ε, and 0 for |x| > ε. Dividing by 2ε ensures that the area of this rectangle is 1.

You can also define it as a Gaussian where the width of the Gaussian goes to zero but the area remains 1.

This inner product is therefore equal to δ(t - t'). The reason is that the delta function will be zero when the times are different. This is because the random kicks are uncorrelated in time, not the same as in a random walk. If you have one step and then the next step, those steps are uncorrelated—the average of those two steps will be zero. It is the same for this case. This is the continuous equivalent, except when t = t', in which case the delta function is not zero.

So we have our equation of motion: m(d²r/dt²) = -ζ(dr/dt) + ζG(t), where m is mass times acceleration.


## Langevin Equation and Diffusion

The equation of motion is: m(d²r/dt²) = -ζ(dr/dt) + ζG(t), which is the Langevin equation. This describes the motion of a particle in a viscous medium with random thermal kicks.

In overdamped systems (where friction dominates), we can neglect the inertial term m(d²r/dt²), simplifying to: ζ(dr/dt) = ζG(t), or v = G.

Integrating both sides gives: r(t) = r(0) + ∫₀ᵗ G(t') dt'.

The average displacement is ⟨r(t) - r(0)⟩ = ∫₀ᵗ ⟨G(t')⟩ dt' = 0, since ⟨G⟩ = 0.

For the mean squared displacement: ⟨|r(t) - r(0)|²⟩ = ⟨∫₀ᵗ G(t') dt' · ∫₀ᵗ G(t'') dt''⟩.

Using the correlation ⟨G(t') · G(t'')⟩ = 2dD δ(t' - t''), we get: ⟨|r(t) - r(0)|²⟩ = 2dDt.

The root mean squared displacement grows as √(2dDt) ∝ √t. This square root time dependence is characteristic of diffusive behavior, similar to random walks where the extent scales as √n.

## Application to Polymer Glasses

This diffusive behavior can be observed in experiments with gelatin and other viscous fluids. For polymer glasses, the mean squared displacement shows this √t behavior at high temperatures. As temperature decreases, the system exhibits caging behavior—particles are trapped temporarily before jumping to new positions.

By introducing a potential barrier (sinusoidal potential), we can model the jumping behavior between cages. The one-dimensional stochastic model captures the essential characteristics: diffusive motion at long times, caging at intermediate times, and vibrations at short times.

## Conclusions

A one-dimensional stochastic model based on the Langevin equation with a sinusoidal potential provides insights into glass dynamics. The observed trapping and cage-hopping can be modeled by diffusive motion inside the potential.

This type of stochastic differential equation also applies to other phenomena:
- Switching of Earth's magnetic field (the magnetic North Pole sometimes switches direction randomly)
- Optical circuits
- Laser physics

For more details on this research, see the published work in Physical Review E.

Thank you for your attention.