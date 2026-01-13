```markdown
I’m sure we have all dropped a glass before. Shattered on the kitchen floor or off a table at the pub. Knowing this we would assume glass to be solid. However, in Bart Volselaars’ seminar, ‘Jumping random walks: a stochastic description for the modelling of glass-like materials’, he explains to us how science contradicts the common belief that glass is sloid.

Bart states in the seminar, “A glass is a disordered material whose viscosity exceeds about 10¹² pascal-seconds, meaning it flows, but only on extremely long timescales”. What this means for the non-scientific community is that glass is actually a liquid that moves unimaginably slowly. At the microscopic level, the molecules inside glass never form neat crystals. Instead, they are trapped in a kind of crowded mess. Each molecule is stuck in a small space, jostled by its neighbours and very occasionally jump to new positions. This pattern is called “caging and hopping”, tiny movements followed by sudden jumps. Scientists see this in computer simulations and experiments on materials like plastics and rubber [1].

Physicists use the idea of a random walk to try help visualise what’s going on here. We can think of it like a drunken person stumbling their way home after a long night. Bart explains this random walk process a bit more scientifically: “A random walk is a process where each step is taken in a completely random direction, and the average displacement is zero, but the mean-square displacement grows with time”. “Diffusion and Brownian motion are continuous versions of a random walk”, which relate to everyday atomic and molecular processes such as how perfume spreads in air or how ink diffuses in water.

To model this mathematically, scientists use something called the Langevin equation, which balances friction and random thermal kicks. This approach is explained in detail in the classic physics textbook Stochastic Processes in Physics and Chemistry [2].

But glass isn’t just free diffusion. The molecules sit in little energy valleys, like marbles stuck between hills. To move, they must climb over a barrier. When scientists add this idea into their models, we really start to see the whole picture: “By adding a periodic potential to the Langevin equation, we can model how particles become trapped in cages and occasionally hop between them”. This simple idea recreates everything we see in real glass; slow motion, aging, and sudden rearrangements.

A modern theory of this behaviour is reviewed by Berthier and Biroli [3]. Their work shows how microscopic trapping leads to the strange properties of glass we experience every day.

So, the simple vessels we use to drink from and see through are actually far more complex and interesting than either you or I could ever imagine.

References:

[1] Chaudhuri et al., 2007

https://r.search.yahoo.com/_ylt=Awr.ntmwiGVpwxsGNQl3Bwx.;_ylu=Y29sbwMEcG9zAzQEdnRpZANEMjk3MzYtR1NLSU4tVUstQ18xBHNlYwNzcg--/RV=2/RE=1768290609/RO=10/RU=https%3a%2f%2fwww.researchgate.net%2fpublication%2f46587074_Overview_of_different_characterisations_of_dynamic_heterogeneity/RK=2/RS=S9fH7OBNAviGHLtdFY13T.v4HVc-

[2] van Kampen, 2007

https://r.search.yahoo.com/_ylt=Awr.ntn_iGVpGucF5h53Bwx.;_ylu=Y29sbwMEcG9zAzMEdnRpZANEMjk3MzYtR1NLSU4tVUstQ18xBHNlYwNzcg--/RV=2/RE=1768290688/RO=10/RU=https%3a%2f%2fwww.researchgate.net%2fpublication%2f313574118_Stochastic_Processes_in_Physics_and_Chemistry/RK=2/RS=_LANyC8eVn9JkX2ajjYfN7Zqvto-

[3] Berthier & Biroli, 2011

https://r.search.yahoo.com/_ylt=AwrkPHJIiWVp0cYGnA53Bwx.;_ylu=Y29sbwMEcG9zAzcEdnRpZANEMjk3MzYtR1NLSU4tVUstQ18xBHNlYwNzcg--/RV=2/RE=1768290760/RO=10/RU=https%3a%2f%2fwww.researchgate.net%2fpublication%2f47744335_Theoretical_perspective_on_the_glass_transition_and_amorphous_materials/RK=2/RS=xMn.t3oPOBuaYik2isUVN5MtHl8-
```

> [!quote] 31842  
> 1)  Blog overall presentation (3/3)  
> Well presented in terms of the specification, all relevant information is included and grammar looks good.  
>  
> 2) Accurate reporting of the seminar's take-home message (3/3)  
> The seminar message is well covered.  
>  
> 3) Accurate contextualisation of the research topic (3/3)  
> Good information is provided around the topic of research.  
>  
> 4) Additional assessment using external sources with a direct quote (2/3)  
> The included references are okay, but I feel they may be lacking depth into the original topic of the seminar.  
>  
> 5) Writing style and technical level for a lay audience (3/3)  
> Perfect and consistent writing style for a more complicated scientific area of study  

***

```markdown
A summary of 'Jumping Random Walks: A Stochastic Description for the Modelling of Glass-like Materials.' - Dr Bart Vorselaars, Delivered on 26th November 2025

Is glass a solid or a liquid? Most people would instinctively answer ‘solid’, but from a physicist’s perspective it’s a little more complicated than that. Although glass seems to be rigid and unchanging, its internal structure is completely disordered more like that of a liquid than a solid. Not only that, but it can also flow!! Just incredibly slowly…

A good example of a material with both solid-like properties and liquid-like properties is pitch. The pitch drop experiment is the longest running experiment to date, dating back to 1927 and still running to this day. [1] Pitch acts as a solid in one sense: when struck with a hammer, it shatters. However, over long time scales it behaves like a liquid. Over the course of the whole experiment, it has formed 9 droplets: close to 1 droplet every 10 years.

This behaviour is quantified by a materials’ viscosity, which measures how easily a material flows. Water flows easily and therefore has a low viscosity. Obviously pitch, on the other hand, is extremely viscous. Glass is even more viscous, approximately 10,000 times more than pitch, meaning that its flow is essentially invisible on human timescales.

This behaviour can be explained on a molecular level. The atoms within glass are constantly jiggling due to thermal energy but is trapped by its neighbours with nowhere to go. Occasionally, a particle manages to rearrange slightly, changing the structure very slowly. This motion has no preferred direction and moves completely randomly. One could attempt to model individual particles, but this becomes very computationally difficult due to the large volume of atoms.

Dr Bart Vorselaars, in his seminar ‘Jumping Random Walks: A Stochastic Description for the Modelling of Glass-like Materials.’, delivered on 26th November 2025, explained that glass-like materials can be more effectively modelled using something called ‘jumping random walks’.

Let’s start with a random walk: it can be imagined as a person standing on a grid who takes steps of equal length in completely random directions. Because each step is equally likely to go forward as backwards, on average, a walker has a displacement of 0. However, the distance from the starting point on a specific iteration still increases over time. This distance is found to increase proportionally to the square root of the steps taken, which in simple terms means that quadrupling the number of steps taken would double the distance travelled.

This is important, as Dr Vorselaars derives that Brownian motion causes particles in a liquid to diffuse at the same rate! Meaning the distance particles travel in a liquid is proportional to the square root of the measured time, so after 4x the amount of time, the particles would spread double the distance. This means that we can use random walks as a mathematical model of liquids! But glass doesn’t exactly behave like a normal liquid. Its particles are mostly stuck in place, in tiny ‘cages’ formed by their neighbours. Every so often, they manage to ‘jump’ out, creating random motion over long timescales.

To capture this, Dr Vorselaars models the cages as a repeating, wavelike potential, where the particles rattle locally and occasionally ‘jump’. This sinusoidal model successfully shows the slow, long-term diffusion observed in glass-like materials. This combination of random walks and rare jumps is what Dr Vorselaars calls a ‘jumping random walk’.

This behaviour of glassy materials is more than just a theoretical curiosity, as it affects real-world engineering. As one review notes “Despite having many applications, current researchers still have difficulty in implementing coating challenges due to issues such as physical ageing, brittleness, etc.” [2]. This highlights why studying and modelling glassy polymers effectively is valuable: it helps scientists predict and improve the long-term performance of such materials used in coatings and other applications.

References

[1] Physics Museum (2026) 1927 – Famous Pitch Drop Experiment. The University of Queensland. Available at: https://physicsmuseum.uq.edu.au/famous-pitch-drop-experiment (Accessed: 9 January 2026).

[2] Arya, R.K., Thapliyal, D., Sharma, J. and Verros, G.D. (2021) Glassy Polymers—Diffusion, Sorption, Ageing and Applications. Coatings, 11(9), p.1049. Available at: https://www.mdpi.com/2079-6412/11/9/1049 (Accessed: 9 January 2026).
```

> [!quote] 26801  
> Presentation: 14/15  
>  
> You have followed the criteria of including the speaker's name, title and date of the seminar, shown clearly at the start of the blogpost.  
>  
> Content: 15/15  
>  
> Conveyed the nature of glass by referencing the example in Bart's Seminar (Pitch experiment), and covered the majority of the content in the seminar.  
>  
> Context: 14/15  
>  
> It connects the behaviour of glass to its potential applications in engineering and other sciences.  
>  
> Style: 14/15  
>  
> It is easy to read and explains concepts that are foreign to general public in relatively simple terminology, i.e. Brownian motion  
>  
> Other sources: 14/15  
>  
> Referenced additional sources for readers to explore for the factuality of the blogpost content, including the use of a direct quote.  
>  
> Overall Mark: 14/15  
>  
> Feedback: Repeated the date and title of the seminar in the blogpost, making the tone of post sound clunky at that part, it was not necessary to rewrite as the blog is already talking about Bart's Seminar. The term stochastic is not directly defined, so I think the general public could inaccurately infer the benefits of a stochastic description.  

***

```markdown
Glass has always been an important material throughout history, with evidence of glassmaking dating as far back as 4000 years ago in Mesopotamia. [1] Despite its extensive history, glass is not usually intuitively understood. In his seminar titled “Jumping random walks: a stochastic description for the modelling of glass-like materials” delivered on the 26th of November 2025, Dr. Bart Vorselaars presents his research providing a stochastic perspective on the understanding of glass-like materials. 

Before “jumping” into stochastic processes and modelling, Dr. Vorselaars starts the seminar by explaining glass as a material. Materials can be described by their viscosity, in simpler terms you can imagine viscosity as the “thickness” of a liquid, water has a very low viscosity for example, and it visibly flows. However, glass is visibly solid, so its viscosity must be much higher than water. But what exactly is glass? Dr. Vorselaars explains that on a structural level, glass is disordered, resembling a liquid, however it shows long relaxation times, meaning atoms take longer to return into equilibrium due to the glass’s high viscosity, and hence visibly resembling a solid. More specifically, to transition into glass, materials must have a viscosity higher than one trillion pascal-seconds! At such viscosities, the atomic structure of the material essentially appears frozen, appearing solid.  

After contextualising the structure of glass, Dr. Vorselaars introduces a glass-like class of materials, called polymers. Polymers are essentially large chains of molecules joined together, and they provide applications in various fields, such as textiles, medicine and technology. [2] Dr. Vorselaars continues by explaining that, during his research, he performed molecular modelling of polymer chains, modelling the deformation of the chains to determine the polymer’s mechanical properties, with the aim of creating a simpler mathematical model that explains the properties of the polymer, essentially. But how can we model glass-like materials? 

Random walk is a mathematical model that, as the name suggests, defines a path of steps with random direction.  Since it is a random process, it may not be intuitive how it can be modelled, however there are multiple types of random walks, with properties such as the probability of taking a step in the same direction and taking a step in the opposite direction are the same. But how can we characterize each random walk? Dr. Vorselaars explains that we can take the average displacement of the random walk as zero, as it is the sum of the average of the steps, and since it is a random process, all directions of the steps are equally probable. We can characterise the random walks even further by looking at the averaged displacement squared. The averaged displacement squared is equal to the number of steps taken times the individual distance of each step squared, therefore characterising the size of the random walk. By defining the size of the random walk, we can define its dimensions. 

Random walks are useful when modelling glass-like materials as they resemble the trajectory of particles moving within a liquid. Random walk-like motion is observable under a microscope in the molecular dynamics of particles and the motion of milk fat in globules of water, for example. Dr. Vorselaars continues the seminar by explaining how to model the motion of the particles mathematically, modelling the particles using equations of motion, drag force and the random fluctuating force. After extensive mathematics, Dr. Vorselaars highlights the resemblance of the results with those of a random walk, since it shows square root behaviour. Additionally, Dr. Vorselaars highlights that, these particles not only move around but also jump, therefore modelling this jumping in terms of the random walks too. Since we are talking about glass-like materials, particles typically repel each other, and in order to jump the “barrier” formed by its neighbour particles, a particle must reach an effective potential. Although analytical solutions are not possible when accounting for the motion of the particle in the effective potential, numerical solutions show the trajectory of the particle resembling a random walk at different timescales, with intermittent jumps. 

Dr. Vorselaars concludes the seminar by highlighting the results of using stochastic models when modelling glass-like materials, particularly in their motion. The caged and jumping phenomena of the particles can be modelled by diffusive motion within a sinusoidal, or periodic, potential. Similar models can be applied to different areas, such as laser physics and electric circuits, with many scientists acknowledging that “random walks have found widespread applications in physics, chemistry, biology and beyond.” [3] 

[1] History Facts, “How and When Did People Started Making Glass?” - https://historyfacts.com/science-industry/article/how-and-when-did-people-start-making-glass/  

[2] Evergreen Chemical, “Types of Polymers and Their Applications in Your Daily Life” - https://evergreenthailand.com/blog/types-of-polymers-and-applications-in-daily-life/  

[3] R. Metzler and J. Klafter, “The random walk’s guide to anomalous diffusion: a fractional dynamics approach.” - https://www.researchgate.net/publication/270451279_The_random_walk's_guide_to_anomalous_diffusion_a_fractional_dynamics_approach_Phys_Rep  
```

> [!quote] 67384  
> Presentation 3/3: The date, title and name of the speaker are present at the beginning, and the blog is written in good English and grammar.  
>  
> Content 3/3: The content covers a great amount of information from the seminar in a good amount of words.  
>  
> Context 3/3: There is a lot of evidence of societal and research contexts which have been well explored and explained. For example, the brief history of glass at the beginning, and the applications of random walk models.  
>  
> Style 3/3: Very suitable for a lay audience and engaging to read. I liked the use of rhetorical questions throughout.  
>  
> External source 3/3: It is clear that external sources and references have been used. You have even included a direct quote from an external source towards the end, which is great.  
>  
> Final grade: 15/15  
>  
> Feedback: Everything about the work aligns with the mark scheme, and it is written very well. The only thing to mention is the word count. I thought it had to be ~500 words or a page length, but it's a minor detail because there was nothing else to comment on; it shouldn't be a problem because it doesn’t feel like too much.  

> [!quote] 42890  
> This is a good piece of writing, it is clear you understand the content and you have used multiple sources including a direct quote. However some things might get misunderstood by a lay person as there are some undefined terminologies. Apart from that, looks good.  

> [!quote] 46422  
> 1) Blog overall presentation (3/3)  
>  
> The seminar title, speaker and date all clearly stated. The report is well structured and generally well written, with good clarity.  
>  
> 2) Accurate report of the seminar's take home message (3/3)  
>  
> The main aim of the seminar is clearly and accurately communicated throughout the whole report.  
>  
> 3) Contextualisation of the research topic (2/3)  
>  
> The research content is well explained, particularly in relation to the research of the field. Broader societal implications could be developed further.  
>  
> 4) Use of external sources with a direct quote (3/3)  
>  
> Relevent and quality external sources are used appropriately, including a direct quote that supports the discussion of random walks and their applications in different disciplines.  
>  
> 5) Writing style & technical level for a lay audeince (2/3)  
>  
> The report is mostly accesible to a lay audience, but some terminology could do with an intuitive explanation on what it actually means. e.g. more explanation on what the average displacement squared actually means, what 'effective potential' is.  
>  
> Overall a great blog, some explanations could improve clarity for a lay reader.  

***

```markdown
Is glass a solid or a liquid? You’d probably say it’s a solid, because in our day-to-day lives, that’s how it acts, unless your bottles strangely splash about! Scientifically, glass stands on both sides, having the disordered structure of a liquid while acting like a solid most of its time. How we can observe this behaviour was the focus of Dr Bart Vorselaars’ seminar on Wednesday 26th November, “Jumping random walks: a stochastic description for the modelling of glass-like materials.” His talk discussed how the simple idea of random walks helps us understand these materials that are used in our regular lives.  

We determine if a material is glass or not by checking its viscosity, which is how easily something flows. Water has a viscosity of 10-3 Pa·s (pascal-second), whilst for a material to be considered glass, its viscosity must exceed 1012 Pa·s, meaning it flows so slow to the point it seems solid. A good example to demonstrate this behaviour is the pitch-drop experiment; an extremely thick fluid with a viscosity of 108 Pa·s, that shatters if hit with force, but if left for long periods of time will eventually drip. The experiment showed “it took eight years for the first drop to fall, and more than 40 years for another five to follow.” [1], so just imagine how long it’d take for glassy materials with a higher viscosity!

Many glass-like materials are polymers, which we can view as identical building blocks put together into a long chain and they’re seen used in our disposable coffee cups, or the plastic used for your phone case! To understand their behaviour such as their deformation, scientists run molecular simulations, and to keep it simple, researchers introduce the idea of random walks to model these polymers mathematically. 

So, what is a random walk? The idea is in the name: a path taken where the direction of every step is random. It has a strong correlation to the behaviour of molecules in liquids, constantly moving and bouncing into each other. Take watching particles move in diluted milk under a microscope, the way each one jiggles around is a random walk. By now, a question may have come to mind: if every step is purely random, how can we generalise this? The chances of an atom moving forwards versus backwards is equal, so its average displacement becomes zero as they cancel each other out. However, the size of the walk grows with the square root of the number of steps taken. These factors help scientists generalise how particles diffuse in a liquid and change overtime.

However, there is an extra obstacle for particles in glass-like materials. They can get trapped in cages made by their neighbours. It takes time and sufficient energy for a particle to make a sudden jump out of the cage and into the next since all these particles typically repel each other, so it must overcome a barrier. An easy way of modelling this is imagining a ball rolling up and down a line of hills: it is a lot more comfortable for the ball to reside in the troughs since it needs a push to make its way up the hill, only to reside in the next dip. To word it more mathematically (so you can sound fancier!) is to refer to the hills as a sine wave as it has the same shape. Like with actual steep landscape, the higher a climb a particle has, the longer it will be trapped there as it needs more energy to overcome the barrier, a lot like if you had to climb a gentle hill compared to Mount Everest; you could do the hill many times back-to-back, but Everest maybe once at a push. This model is simple but an easy way to represent the motion observed in real polymer glasses.

These simple, one-dimensional stochastic models capture the key characteristics of materials, such as polystyrene, which is used in packaging such as takeaway boxes. This model can also teach us about the switching of magnetic field of the earth, electrical circuits and laser physics!

This talk concludes that by using random walks to model atoms in glass, we can understand their key characteristics of both acting like a solid and liquid using this one-dimensional mathematical model. Researchers can then know what materials are the most ideal for certain uses by seeing how they behave in different temperatures and predict when they will deform. All from just comparing glass-like materials to walking in random directions like headless chickens!

[1] “Pitch Drop experiment”, The University of Queensland, Australia, [Online] Available: https://smp.uq.edu.au/pitch-drop-experiment
```

> [!quote] 17304  
> 1) Presentation: Date, title and name of speaker were present. Good grammar. No improvements needed.  
>  
> 2) Content: Seminar content covered accurately. No improvements needed.  
>  
> 3) Context: Societal context adressed. Reseach context not adressed. To improve, explain the research context of the seminar.  
>  
> 4) Style: Blog is suitable for a lay audience and engaging. No improvements needed.  
>  
> 5) External source: Evidence of external source with quote. No improvements needed.  

> [!quote] 41058  
> Your blog discusses the seminar in a non-confusing way and it is enjoyable to read. The introduction gives a good overview of the content.  
>  
> The main important concepts have been covered such as random walks and viscosity.  
>  
> The content is correct and can be understood by a wide range of audience. Real life examples have also been included to verify the content.  
>  
> The societal and research contexts have been covered and also the wider scientific applications have been covered too. Even though it is a blog it could come across as a bit more informal, an improvement could be making it not highly formal but a bit more formal.  
>  
> External sources have been used correctly but I would recommend maybe including one more link to research in the scientific world that relates to this seminar.  

> [!quote] 69356  
> Following the marking scheme for the seminar reports, provided in the module handbook:  
>  
> 1) Name of speaker and title are clearly stated. I believe there are no mistakes in your grammar. The overall presentation of the blog is more than clear enough. - 3/3  
>  
> 2) Your report accurately report's the take-home message of the seminar, covering most of the content on the seminar. -  3/3  
>  
> 3) There is an accurate contextualization of the research topic, for both research and society, with the use of simple examples that break down tougher terminology and links to everyday life. - 3/3  
>  
> 4) There are additional findings within the report from external sources, including a direct quote. However, the additional findings are quite scarce within the message of the seminar, therefore I believe a very small improvement could be the addition of a few more external sources that complement the seminar. - 2/3  
>  
> 5) The level of the writing style is appropriate for a lay audience and consistent throughout the report. - 3/3  
>  
> Overall mark - 14/15  
>  
> Very good report with minimal changes to be made!  

> [!quote] 31842  
> 1)  Blog overall presentation (3/3)  
>  
> Well presented in terms of the specification, all relevant information is included and grammar looks good.  
>  
> 2) Accurate reporting of the seminar's take-home message (3/3)  
>  
> The seminar message is well covered.  
>  
> 3) Accurate contextualisation of the research topic (3/3)  
>  
> Good information is provided around the topic of research.  
>  
> 4) Additional assessment using external sources with a direct quote (2/3)  
>  
> The included references are okay, but I feel they may be lacking depth into the original topic of the seminar.  
>  
> 5) Writing style and technical level for a lay audience (3/3)  
>  
> Perfect and consistent writing style for a more complicated scientific area of study
