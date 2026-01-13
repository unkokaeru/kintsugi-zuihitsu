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

If you had to have one step and then the next step that those steps are uncorrelated for the average of those two steps will be zero.

And so is the same for this one. Only in this case, it's kind of the continuous equivalence of it, except when the TNT prime primer to say that.

I mean, it's the other function. So that is not zero.

So we have our equation of motion and times a mass times acceleration.

The sum of all forces, the flipped weight in force. So Zanta times G.

Plus, the drag force, sometimes sad, at times, the velocity spread forth, poverty, more city.

And so if you want to determine the trajectory of a park, we have to solve this equation.

And there's a differential question because acceleration is the force to observe closely.

Now, you have a very strong physics liquids. You can actually neglect this term because it's much more so.

This is called the inverted term and therefore this differential equation simplifies to sanitise velocity.

Is this sad at times to fracture or is artefact pencils?

So the velocity is equal to G.

And then we can see, is this the first draught of time so we can look what not, its basement is disintegrating both sides social time.

So X of T called X of seat. And it is the same specs zero for us to integrate into all of this G from zero to two.

So this is the starting position. This is the end position and end position depends on starting position in the integrated filter making force with.

Obviously, we can't be featherweights inequal because it's Footlights. That's what we can do, is determine the average behaviour.

The average behaviour is given by the average of that quantity.

So I would say here displacement X of T most X zero does the origin also to the letter.

So this is just by definition, the equal velocity from zero to T.

And with this, everything record's not average in records. I can take insight into girl.

And we I can replace by G because that was in operation what?

Now, I told you that the average of this looks like the signal G. Well, zero.

So I can just replace this by zero. So I have to inequal zero and this is zero.

So the average displacements is actually zero. Just as was and run the walk.

And so if we are likely to go left or right or put on any direction and therefore the average displacement is actually zero.

So therefore it might be more informative to look at the average correct displacement.

So I'll take this X two months, X zero square. This is always more negative.

So the average will be likely to be positive sometimes.

Luden zero, which is the case here. Now, X team, as you know, is just equal velocity and as A squared.

So I write it in full twice. I have a here a second different variables to fry with t double proem.

Now, I can take this integral sign to the front.

And I can take those averaging brackets inside because it average over individuals the same equalled effort.

And now I use this property where the G in a product with itself is too deep.

The North Times, the Delta function is subject to that here. Now, I can find a way.

It's not a function. It's basically a unit integral peaked at argument of zero.

So I can switch places by one if I integrate over one or two times.

So that's what I did here. Now two times did not.

Those are just the constants. I can take them in front of the integral. Now, this inequal of one in two prime.

So this is just t that's the final results. We see that the average squared displacement is equal to two denote homes.

Two. Or if I look at the square root of that, it's Rutan's square displacement.

So does the indication on the distance travelled actually increases with the square root of time?

And this is actually a very important resource.

The this is a very similar to Iran walk because with Iran walk,

the extent of the walk is also both as a square of the number of steps that spread of hand here, but no more steps or shorter time.

So this is also voted this far out of time. We also have the square root behaviour.

And this you can compare it is also if a particle moves, of course, and philosophy moves, of course, and philosophy began,

just replace the mean square root and square displacement by just taking the absolute values of X Themos zero.

And demotes zero will just be the velocity.

I've seen that. So then the room is square displacement, increase it linear you would see while here and squeezes a square of two.

So this is actually slower increase with time. And because the square does increase so fast.

From our city to. And if you force on energy, you could understand this because a random walk, as all says,

the probability of going backwards to the origin, therefore it moves us less.

This is average. May look at large volumes of time.

You can also see this in experiments. So this is for muling from the fusion of think gelatine gelatins, fiscus, medium fiscals fluids.

So if you basically drop it droplet of ink in his fluids, then offer to arms.

This ink droplets will spread due to KICs with the fluids.

Read the motion that this is called also diffusion. And after 40 hours, it's still diffusers.

You can see the ink droplets actually hasn't increased unity in time.

It goes in the square of time. So it doesn't increase so much more.

And this is so you can actually surface from Ruti. So far, we actually looked a motion similar to items in Eliquis.

But what we observed in glass motion is often jump like.

So here I'm showing it to you again. You have this particle kind of jiggles around just as diffusive motion and to the random kicks.

And then suddenly it jumps. So how does this happen?

And also, how can we model this mathematically?

What is actually a device, a simple one, the woman, so you can imagine that in a liquid particle, an atom surrounded by water atoms or particles.

And if it wants to move to a new position, it actually has to come closer to our neighbours.

And for that, it has to overcome a barrier. Farkle stood for repelling.

And this typically occurs seemingly readily space, so the distance is typically labour distance.

And an easy model for this will be to consider Bahcall motion.

One dimension where potential is effectively sinusoidal.

So basically, this is in a cage particle's cage here.

This is kind of like the fence where Farfel isn't really in later position.

And then comes into a new cage. And because this is a likely event, the energy here is higher.

So far, it likes to be at the bottom with nobody to. And so it's all of this.

I can just use park on the inside of an effective potential. You not signed to buy X over all that, so Alice appeared to you not.

It's basically Dubarry of this petition.

And powerful inside of potential, we can model this by realising that the force, due to its potential, is given by minus gradients and the potential.

And then I can add this to the equation of motion. So we had the most dancing serration.

Is this random force, the friction force?

Now the additional force. Do to this potential that you can see the force is typically minus the grey, the hue.

So if the gradient is large, the force is also large.

The gradient here is a positive. The force will be minus a light.

And so the negative tries to put a bark particle back into the position.

Lower energy position. So for the one the motion case became is called clades derivative.

So it's mine is derivative. The sign says mine is too high.

You're not over at all. Goes to fly over elbows in front the sign to co-sign and get us mine.

To sign those forces, you put two minus rated.

If he also did connect as a nurse and saw a Navy get the following differential question,

this is stochastic differential equation because have footwear can force.

Sadly, those voices as those T minus this force.

And so divided was that he had lost he is given my G of T minus to fight.

You not said that. That's was so. And unfortunately, this question can't be solved politically.

So how can we solve it then? One way will be to solve it numerically in the following way.

So the velocity is basically the first derivative of position, respect to time.

And now the approximation here we make is that the first derivs distances is given by X plus double teams at 50.

And divide by not a team right now that goes to zero approximation here is that novelty's not zero.

A very small bubar. And therefore, we have this equation.

Extreme poverty, most of those things. That is a force plus a random force.

And we can hear ISIL bring exile's to you as to the left hand side so that we have an explicit relation for excellent has done.

Yes, functional. So if we know the particles sort of position time.

As the sort of position certain time there we can see predict what the position

of the next time stuff is by using this question where this is this force,

this sign or co-sign term. And this is the random forced.

This Rivendell force, you can actually consider an anomaly approximate by taking a random number from Gorshin distribution with yield variance.

You can solve this actually in Motlop she'd like to or in the order programme with language.

And if I do that and say I start from the origin, I can see a clear it has some diffuse of motion.

In short time and then at some point it will hit this potential war.

So it can't really go up. But once in a while, actually, all the fluctuations would retno for it in the right direction.

So climbs up the barrier and then goes to the next well.

So this is at axis Al or X over ls one.

And then here it goes back again. So it goes down.

So what you can actually see that there is sort of random walk for a short time.

There is also a round walk for a large time, the larger timescale.

Because jobs for the 012 to the first.

And then goes back to zero to minus one. So this is kind of a random walk process and you can also see this.

So this is a victory for individual particle.

We can also look at an average behaviour. So if I look at the mean displacement, I mean squared displacement.

Now, if you do that can actually see that is exactly equal to what I proved before.

New Square misplacement. And if we if the barriers to zero is just proportionate to time to do not time, that's just a straight line.

You can also look at one, the barrier is not equal to zero.

Now you'll see the falling behaviour so short times you have this diffuses behaviour and it continues if the barrier zero.

But if you now increase the barrier. It is less likely to cross it's there, therefore the park or it could get stuck.

The years about 10 to once to. But after some time managed to escape this barrier because all the district waiting forces are kind of

aligned and then managed to escape and then shows this diffuses behaviour at larger timescales again.

So then the Mosquera displacement increase with time again, the prefecture smaller.

And this is the result of this one dimensional model.

And if I compare this this polymer glass, which I showed you in the beginning, and this is from polystyrene,

which is a well-known polymer, like some coffee cups, disposable coffee cups are made from polystyrene.

And you see clear that the behaviour is very similar.

So for large temperature, if you look at Pfeifle before to Kalven, then we have this diffusers behaviour last time skills and it's diffuse.

The behaviour moves to larger and larger time skills.

If I cool down the temperature and this is ranch room temperature wall for actually polystyrene and does the glass position around formed Kelvin.

So you see this this regime is also known as the caging regime,

so its case in those tight timescales and it's exactly what we observe for this one mission without smell.

So this essential characteristics are captured by this one dimensional model.

So it's a function you can increase a barrier or equivalently decrease the temperature, which is kind of equivalent.

Yeah, it shows exactly the same behaviour. So as a conclusion,

you find that a one dimensional stochastic model based on the overnight much of

any question that this is stochastic differential question gets insight glasses.

Observe trappin cage hopping can be modelled by diffusive motion inside the sinusoidal potential.

And actually, this question of motion can also be applied on a phenomena.

For example, the switching of monadic fields of the yards.

So, as you might know, North Pole, the magnetic North Pole of the Earth, sometimes switches the right or the direction.

So then goes to the South Pole and the South Pole. And this is also kind of randomly fence.

You can also model is by like a sign that stochastic differential equation, we didn't assign protection.

Also, let's call circuits. We can also apply similar equations of motion and the same with laser physics.

And if you want to know more about the work I did when I was a piece, these student.

You can be here, find the reference. So was published in Fiscal Review.

But this is a euro. You can also find some. Well, thank you for your attention.

