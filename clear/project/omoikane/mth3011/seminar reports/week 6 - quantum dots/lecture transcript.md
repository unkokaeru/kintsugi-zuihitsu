# Lecture Transcript: Quantum Dots and Their Applications in Biotechnology

Hello and welcome to this seminar on quantum dots and their applications in biotechnology.

The name "quantum dots" might sound quite exotic, so I will begin by explaining what they are. Quantum dots are nanocrystals—crystals at the nanoscale made from semiconducting material.

You should be familiar with semiconductors from the condensed matter module you took last year with Matt Watkins. However, the picture you see here, which shows colored fluids in bottles, may conflict with the idea you have of what a semiconductor looks like. I will explain this toward the middle of the talk.

First, I want to speak more generally from a physics perspective about what quantum dots are. Then I will discuss briefly how we synthesize these materials, which will explain why they appear as fluids. The picture you see on the right-hand side of the screen shows a series of quantum dot samples made by a third-year student at Lincoln back in 2017. Finally, I will discuss some of the properties that make these materials interesting for various applications in biotechnology.

I should emphasize that biotechnology is not the only area of application. Quantum dots are useful for photovoltaics and LCDs—the latest television technologies use quantum dot displays. They can also be used to make lasers. There are many applications for these materials.

The reason I wanted to focus on biotechnology applications is because of this story. The URL shown at the top provides more details, but the gist is that a team from MIT has developed the ability to encode information about someone's vaccination record in the form of a quantum dot tattoo, which would lie just under the skin. This would be invisible to the naked eye but readable by standard smartphone technology.

Hopefully, by the end of this talk, you will know enough about quantum dots to understand why they are necessary for this kind of application and why we cannot simply use existing organic dyes.

If you search for this story on the Internet, you will find many articles. I have highlighted this one because of how they describe quantum dots as "tiny glowing dots." This is correct—they are tiny and they do glow—but this is hardly a technical description.

## Semiconductor Physics Recap

Let us recap some semiconductor physics, specifically the band theory you learned with Matt Watkins last year. This will put us in a position to discuss some of the interesting properties I have listed here.

This diagram shows the general picture of electrons in a semiconductor—how we describe electrons in a semiconductor. On the vertical axis, we have the energy of electrons. On the horizontal axis, we have the wave vector of electrons, which is essentially the momentum. This is like an electron momentum map of electrons in a semiconductor.

At the bottom, we have the valence band, which corresponds to the outermost orbitals of the electrons of the atoms. At the top, we have the conduction band, which is not shaded in gray, suggesting that it is mostly unoccupied.

If we imagine an incident photon with energy perfectly matching the band gap, when this is absorbed by the material, an electron will be promoted from the valence band up into the conduction band, leaving a hole behind. This hole is more technically called an electron vacancy, and we can treat it like an actual particle. It has a positive charge relative to its environment and an effective mass, just like the electron in the conduction band has an effective mass. It can delocalize throughout the material and move freely around.

This does not have to happen at zero momentum. It can happen at higher values of momentum. We simply require that the incident photon has energy larger than the band gap.

So we have this positively charged hole in the valence band and this negatively charged electron in the conduction band. These interact via the Coulomb interaction and actually form a bound state, which we call an exciton, and which we can treat as a particle in and of itself.

The way we describe the size of this particle, which consists of the electron-hole pair, is by making an analogy with the hydrogen atom. The hydrogen atom has a positive nucleus and a negatively charged electron. We can discuss the most likely separation of these two objects or the most stable separation.

We do this by discussing the Bohr radius. We can apply the same concept to the exciton and discuss the Bohr radius of the exciton, which represents the most stable separation distance between the hole and the electron. This is given by the equation shown here.

The material property parameters that become important are the dielectric constant (which describes how easily an electric field penetrates this particular semiconductor relative to vacuum) and the reduced mass μ, which combines the mass of the electron and the hole.

If you do not remember anything about reduced mass, there are a few slides that explain it. The effective mass m*_e is the effective mass of the electron in the conduction band, and m*_h is the effective mass of the hole in the valence band.

The key point I want to make is that this exciton has a stable size—a size at which it wants to exist. If we reduce the size of the semiconductor so that it is smaller than this Bohr radius, we say that the exciton is quantum confined. I will talk more about quantum confinement later. This is the definition of quantum dots: when the size of the crystal in all directions is smaller than this Bohr radius, we say that quantum confinement is strong and that this material is a quantum dot.

## Material Parameters and Exciton Radii

Looking more specifically at these material parameters for semiconductors, semiconductors tend to have a large dielectric constant. As a result, we get significant electron screening. The positively charged hole and negatively charged electron in the conduction band interact via the Coulomb interaction, but the presence of all the other electrons in the material actually reduces this Coulomb interaction. This results in a smaller binding energy between the hole and electron. All these other electrons shield the electron-hole pair from each other, reducing the interaction. They can exist further apart in a stable manner.

In other words, the exciton radius increases—the Bohr radius gets larger. The effective masses affect this as well. In semiconductors, we discuss what are called Wannier excitons, which have radii anywhere from 1 to 20 nanometers. This contrasts with Frenkel excitons seen in molecules, where there is not as much screening, the Coulomb interaction is at full strength, and the exciton radius is very small in comparison.

These excitons have a typical radius of, say, 10 nanometers. Because they are so large (relatively speaking), it is actually quite feasible to make crystals smaller than this exciton Bohr radius. It is quite easy to make semiconductor crystals in which the exciton is "squashed."

We can make a rough analogy with a jack-in-the-box. If you think about a jack-in-the-box being pushed into the box and then we release the lid, this is like the electron being promoted up into the conduction band, and when you open the box, it is like it relaxing back down and giving off a photon. If you imagine putting this jack-in-the-box and then squeezing the box down to size, when you open it, it will have more energy than it would have otherwise. This is not a perfect analogy, but it gives the idea of what is happening. The color we see here is actually dependent on the size, and that is because of this jack-in-the-box effect.

## Density of States and Dimensionality

Let me discuss these size-dependent properties in more detail. Hopefully, you remember from last year about the density of states, which is the number of available states per unit volume at a given energy. It varies with the square root of energy. This is a continuous function for bulk systems.

However, when we reduce the dimensionality of a material, the density of states becomes discontinuous. What do I mean by low-dimensional materials? If you take a bulk crystal and compress it such that it becomes an extremely thin sheet, this would be a two-dimensional material. If we then take this thin sheet and compress it along one of the remaining axes, we end up with an extremely thin line, like a nanowire. If you then take this nanowire and compress it along the final axis so that it is essentially a point, this is what we call a zero-dimensional material. This is what a quantum dot is.

If you look at the density of states of these low-dimensional materials relative to the density of states for a 3D material, we see that the valence band here is full again, and the conduction band is empty. The lines vary with the square root of energy. For a 2D density of states, we start to see what looks like a step function—a series of step functions. You can see there is some discontinuity. If we reduce the dimensionality down to one dimension, we start to see even more interesting structure in the density of states. If we take it to the extreme and reduce the dimensionality to zero dimensions, we see an extremely discrete density of states.

Quantum dots are sometimes called artificial atoms because of this discrete density of states. We have discrete energy levels that look very much like atomic spectra. I will not go into detail about these density of states derivations. If you want to see the derivations, there is a good website shown at the bottom. If you go there and have questions, feel free to email me or ask me when you see me.

## Quantum Confinement: Particle in a Box

Now we want to understand how and why the size of a quantum dot affects the energy levels. The exciton inside our nanocrystal, inside our quantum dot, is modeled as a particle in a box. We will use the terms "box" and "potential well" interchangeably. Essentially, we are looking at a potential well.

We can define its width: there is a wall at x = 0 and a wall at x = L. We define this box by its potential. Inside the box, for values of x between zero and L, the potential is essentially zero. This means the exciton is free—like a free particle, it is free to move around. Outside the box—for x greater than L or x smaller than zero—we set the potential to infinity. You can think of this box as having walls at zero and L that are infinitely high, such that the exciton can never climb over these walls. The exciton is trapped in the region between x = 0 and x = L.

We are going to look at the Schrödinger equation, but first we want to define some boundary conditions on the wave function. Because the potential outside the box is infinity, the probability of finding the exciton outside the box is zero. This means the wave function is zero outside the box. We want our wave function to be a well-behaved function—by well-behaved, I mean smooth, continuous, and differentiable.

Because the wave function outside the box is zero, the wave function at the boundaries of the box must also equal zero. At x = 0, the wave function must be zero. For the same reason, the wave function at x = L must also equal zero.

If we look at the Schrödinger equation, we have the time-independent version. We are looking at one dimension. Depending on when you watch this video, you may already have covered this particle-in-a-box problem with Bart in the quantum module in third year. He will do a much more complicated version—perhaps in spherical coordinates or the time-dependent version. We are just looking at a very simple version to illustrate some points.

We are looking at the Schrödinger equation inside the box where the potential is zero. This is essentially just the kinetic energy of the particle, the exciton. We try what we call an ansatz wave function or a trial wave function—ansatz is a German word meaning a starting point, an educated guess. We will use this wave function, which is a combination of sine functions: ψ = A sin(kx) + B cos(kx), where A and B are amplitudes.

We impose these boundary conditions. First, we had that the wave function at x = 0 was zero. If you plug x = 0 into this wave function, you will see that cos(0) = 1 and sin(0) = 0. So we have ψ(0) = B = 0. This implies B must equal zero. We have simplified our wave function considerably just by considering this first boundary condition.

If we consider the other boundary condition—that the wave function at x = L was also equal to zero—then we have A sin(kL) = 0. For that to be true, k must take this value: k = nπ/L, where n is the principal quantum number, which can take values 1, 2, 3, all the way up to infinity. It takes integer values. The wave function then is ψ = A sin(nπx/L).

From the boundary conditions, we know the shape of the wave function inside this box for increasing values of n. For n = 1, we get this simple wave function. For n = 2, we get a full wavelength. As we increase n, we get more and more nodes. We know the shape, but what we are interested in is how changing the size of this box affects the position in energy of these energy levels.

So we're going to return to the Schroeder equation and we're going to note that it features the second derivative of the way function.

And we can see the wave function here. So we just need to do these derivatives.

So the first derivative of the way function, we get a factor of empire, El Al, the funds,

and the same goes to a cosine if again we take the derivative and the cosine goes back to same, but we get a factor of minus one.

And we get another factor of empire. So what we end up with is shown here.

And you may notice that we can substitute back in the original way function and we're left with this.

So we can plug this into the Schrodinger equation of what we get is this equation here.

And we can kind of cancel the way function from both sides. And what we're left with here is what we call the quantum confinement energy.

So this is the energy extra energy particle in the box has.

If you remember from the last slide that we had, Kay was NPI over Al.

What we see here is just the momentum squared over two.

Which, if you remember from classical mechanics, was the kinetic energy.

So here, momentum is equal to hate Bach. And instead of.

And we have reduced bus.

So the kinetic energy of the exciton in the box increases with the square of the principal quantum number, which is kind of makes sense.

And but what we really want to kind of look at here is this dependency of the kinetic energy of the excess on inside this box,

on the width of the box. So it's dependent on one over elsewhere.

So if we decrease the width of the box, we increase the kinetic energy of the particle inside the box.

And this is the reason why as we reduce the size of the nullah crystal and the the energy levels increase, which means that the Bundgaard gets larger.

So this is called The Blue Equation. And it describes the band gap of quantum dots as a function of its radius.

So this term in the red box here, this is just this quantum confinement entity that we've just seen,

except that instead of talking about a box width, we're talking about the radius of a sphere.

And so here the radius would be with two. And this one of two facts, I mean, is why we've got these eight here.

So we've got an extra factor of two squared on the bottom. And this changes the two to an eight.

So there is another correction term to kind of correct for the kulam interaction.

We're interested just to explain what's going on here with this quantum confinement at ageing.

So what I am done here is and I've plotted this band gap for a particular material and specifically copper indium sulphite,

which incidentally is the material you saw.

And those red samples at the beginning of the student and made they were copper and you sulphide and copper himself.

Five has a band gap and a black band gap of one point five electoral votes.

And what I'm showing you here is the set for contributions to the band Gap.

And from the electronic showing of Blue and the hole shown in red.

So instead of using the reduced mass, I split this into the effective mass of the electron in whole.

So the contribution to the increase in the band gap as we reduce the crystal radius

from the electron and blue and the contribution from the whole issue in red.

So you can see the asymmetry here. And that's because in copper ending sulphide and the effective mass of the

hole is approximately 10 times larger than the effective mass of the electron.

Now you see here. The bow radius of copper terms of fines is approximately four point two nanometres, so you can clearly see above that value.

The red and blue lines are parallel.

And when we go below this bar radius and the deep conduction band position and the balance band position can diverge quite, quite quickly.

Depending on size. So the final thing to say about the size and properties of nanomaterials is that at the nano scale, the surface dominates.

So then if you'll get this reference, this is from American politics in the 90s, you can look it up, a borsch.

What we're sharing here is an ad on the x axis.

We have the quantitate radius. So this is for spherical particles. And on the y axis, out in the vertical, we have the surface area to volume ratio.

And you see that above, say, 20 nanometres and the surface area to volume ratio is very low.

This means that the volume is much larger relative to the surface area.

But when we go below 20 nanometres, source eight or below 10, Dunning's is for sure.

This is a this is kind of interesting.

So a major assumption of solid-state physics, of all this band theory we've been talking about and that you did with Matt last year.

This assumes that these electrons experience this infinite periodic potential is infinite crystal that it can move.

It is about 10 nanometres. So edge effects and dominates other nanoscale surface effects become very important at the nanoscale.

OK, so now we can. Now we're going to spend five minutes or so talking about how these materials are made.

So on the left, which we see colloidal continents,

So that suspended material in in a solvent.

On the other hand, we have in situ fabrication of quantum dots on a substrate. There are various methods of making both types of quantum dots, but I do not have time to discuss them all in detail. I will focus on the solvothermal method for making colloidal quantum dots.

## Synthesis and Growth Mechanisms

You may have noticed in the picture that we show yellow, orange, red, and dark red quantum dots. You might ask: Why don't we see green or blue quantum dots? Perhaps I just did not photograph them? I assure you, when you make copper indium sulphide quantum dots, at least, it is impossible—or at least very difficult—to make blue dots. Let me explain why this is the case.

To understand this, we need to consider the mechanisms by which we grow these quantum dots, these nanocrystals, from solution. We start with what we call monomers—essentially copper, indium, and sulfur atoms in solution. There is much chemistry involved here, which I will ignore to focus on the thermodynamics.

These atoms are free in solution, floating around. We increase the temperature of the solution and the concentration of these atoms—these copper, indium, and sulfur atoms. If we make the concentration high enough and the temperature high enough, it becomes energetically favorable for these individual atoms to cluster together to form a crystal nucleus.

However, there are two competing mechanisms at play. First, when we create solid volume, we save energy—this energy saving gives us free energy, which scales with volume. Second, the interface between a solid crystal and the solution (the solvent) costs energy to form, and this cost scales with surface area.

If we look at the total free energy by combining these two terms and plot it as the radius changes, we see that at low cluster radii, the energy cost to form the surface dominates. But as we increase the radius, the energy gain from forming the volume becomes more important. At a certain point, these clusters actually become stable. This critical point is called the critical radius.

Clusters smaller than this critical radius dissolve very quickly back into solution. But once clusters are larger than this critical radius, they become stable. Even when the solution temperature drops back down to room temperature, these crystals remain stable, suspended in the solvent.

## Properties for Biotechnology Applications

Now it is time to discuss some of the properties that make these materials interesting for biotechnology applications.

First, the emission is very narrow. You can see this if you look at this picture. With broadband emission across the visible spectrum, you would see brown. But we see very clear, brilliant colors. This indicates that the emission spectrum is very narrow—perhaps between 20 and 40 nanometers.

Importantly, quantum dots absorb over a broad range of wavelengths but emit over a narrow range. This means we can do multiplexed imaging. If we compare quantum dots to fluorescent dye molecules, both have narrow emission. Dyes also emit narrowly, but they also absorb narrowly. With quantum dots, we can label different parts of a cell with different quantum dots and excite them all with the same excitation wavelength. If we used dyes instead, we would need different excitation wavelengths for each color. Inevitably, this would complicate things and cause cross-channel interference, especially if you want to do quantitative analysis. If you want to see how different parts of the cell interact, quantum dots enable this.

Second, quantum dots are very small, which means they can be easily cleared from the body via renal and hepatic systems. There is some evidence from trials in live primates that there is accumulation in certain organs such as the spleen, but it does not appear to be a huge problem unless there is exposure over extremely long periods.

As I mentioned earlier, the surface is extremely important. One reason this is useful for biological applications is this large surface area. For example, we can attach antibodies that target cancer cells. If we cover the quantum dots with molecules that target cancer cells, when we inject the body with these quantum dots, cancer cells will take up the quantum dots while healthy cells will not. When we do imaging, we can clearly see which tissue is cancerous and which tissue is healthy. This could be useful for diagnosis or surgery.

I do not expect you to understand all these chemical diagrams. The idea is just to show that there is a huge platform for bioconjugation.

The tunability of quantum dots is extremely useful for something called the biological window. You have probably noticed this before: when you hold your hand up to a light and look at the light shining through, as you can see in the photograph, it is the red light that makes its way through the body. If we look at the absorption profile of water on the left, you see a dip around the red region of the spectrum. Light can pass through the body quite easily if it is red.

We can tune our quantum dots to emit at the optimum wavelengths for this biological window. Depending on where in the body we want to look, we would use different colored quantum dots. We cannot do this with dyes—dyes have fixed emission wavelengths. We have limited choice with dyes, but quantum dots can be tuned very easily.

Quantum dots are much more stable than dyes. Quantum dots can go through many cycles of this absorption and emission process, whereas dyes degrade quickly. This is photodegradation: excitation by photons can lead to absorption and emission of a photon, but it can also lead to chemical reactions that permanently change the dye molecule so that it no longer has the capability for absorption and emission. This, I believe, is the main reason quantum dots are being used in the application I mentioned at the beginning: if it were done with dyes, it would not last very long.

It is not just diagnosis. We can also use nanocrystals and quantum dots for therapy. There is something called photothermal cancer therapy. As I mentioned earlier, we can cover the quantum dots or nanocrystals with functional molecules such as antibodies, which allow tumors to take up these quantum dots preferentially. Usually, you would use metal, actually, because of its superior thermal properties, but some quantum dot materials could be used for this. This would heat the cancer cells without heating the surrounding healthy tissue. This is a promising therapy for cancer with fewer side effects compared to standard radiotherapy.

Finally, I want to end by saying that nanotoxicity is a relatively young field and, as far as I am aware, is quite poorly understood in general. We can understand the toxicity of specific nanomaterials by doing certain tests, but for new types of nanomaterials, it is important to carefully assess nanotoxicity. For bulk toxicity, we know about certain materials that are toxic—cadmium and lead, for example. We know not to eat these things. But toxicity at the nanoscale is much more complicated. Size is important, the shape of the nanomaterial becomes important, and the surface chemistry can contribute to toxicity as well. There are many more considerations when thinking about toxicity at the nanoscale.

With all this in mind, the reason quantum dots are used in this application is because their long-term stability makes this technology viable. There is no point having this technology if it lasts only a week. I think they claim this could last five years. The important thing is to be aware that these technologies always come with toxicity considerations. I have not read this paper in sufficient detail to know if they have done a good job of assessing the toxicity, so I am not giving my opinion. I am just making the point that there are various considerations to make when assessing new technology.

With that, I will end here. Thank you very much for your attention. I will be available to answer any questions you might have. Thank you very much.
