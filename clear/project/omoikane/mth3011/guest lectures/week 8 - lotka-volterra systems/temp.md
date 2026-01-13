```markdown
A summary of Dr Helen Christodoulidi’s “Lotka-Volterra Systems: Dynamics and Applications”
18/11/2025

Anonymous code : 90561

Imagine you’ve just arrived to work only to find out your boss has appointed you with the surprise task of predicting the future population sizes of animals in your local ecosystem. You might ask yourself, “I’m only a barista. What in the world is going on?”, but after your boss says that your job is on the line otherwise, you may then ask yourself, “How do I start to predict such a thing”. The answer to that would be to conveniently continue reading this blog on explaining the ‘Lotka-Volterra Model’!

So, what is this so-called ‘model’, and why is this one so useful? Dr Helen Christodoulidi’s seminar entitled “Lotka-Volterra Systems: Dynamics and Applications” explains what a Lotka-Volterra Model is and how it can be used to mathematically predict the population sizes of multiple species, for example: foxes and rabbits.

 

A real-world problem portrayed using mathematics is called a ‘model’. The Lotka-Volterra Model is a ‘Predator-Prey Model’, meaning it predicts the population sizes of a so-called ‘predator’ and its ‘prey’. You can think of the rabbit-fox example: the more rabbits there are, the more abundant the food supply for the foxes there will be, so the foxes can support more offspring, in turn increasing the fox’s population. However, as this happens eventually the foxes will be eating too many rabbits, decreasing the rabbit population, meaning the future foxes will have less abundant food around, and in turn decrease the fox population.

So, you can imagine that the population size of foxes will decrease just after the population size of rabbits decreases, which will in turn soon increase the population of rabbits, allowing the foxes to be more abundant and letting the cycle continue again. This cycle of population increase and decrease can be modelled (described) by the Lotka-Volterra Model, showing how the population increases and decreases at regular intervals. The time it takes for this cycle to start and end is called the period of the cycle (period of time). At this period, the cycle will repeat itself. Dr Christodoulidi highlights two graphs showing possible variations of this cycle, highlighting the trends that have just been mentioned:

                       

[Figures taken from given seminar slides]

 

Lotka-Volterra Models don’t only model the populations of animals, however. In fact, using the modelling skills we have just used, Dr Christodoulidi shows that with a tweak to the initial conditions of the model we can apply the Lotka-Volterra Model to many different fields, anywhere from Ecology to Biology, and even to Finance! Din (2013) states “The … Lotka-Volterra models have many applications in applied sciences.” [1], highlighting the practical uses across disciplines. For example, we can use the model to describe an epidemic’s reduced effect over time, as more people catch the infection and become immune.

Dr Christodoulidi highlights her work on ‘4D Lotka-Volterra Systems’ where instead of modelling 2 species (a predator and prey), you can model 4 species (The ‘4’ in ‘4D’), all with varying levels of predator and prey. A graph can be made of these, where each arrow away from a species shows what the species is a predator to, and each arrow towards a species shows what that species is prey to.



This graph taken from the seminar shows one interpretation of a 4-species predator-prey model. You can see that some species may be predators to all others, such as x4, while some may be prey to all others, such as x1. Others may have more complicated interactions with other species, such as x2 and x3.

 



Shown in the seminar is another graph showing the trends when 4 species like this interact over time in a predictable way. Here we can see that the two species at the top will continue having a steady population, however two of the species will die off. This isn’t conducive to real-life however, as the real world is far more complicated and chaotic than this.

 

‘Chaos’ in mathematics is actually a surprisingly intricate topic. So, what is chaos? Why is it useful here? Chaos can be seen as the behaviour of something being unpredictable (like the butterfly effect), even if the behaviour is deterministic (able to be calculated exactly) [2]. The previous systems have all been non-chaotic, and predictable. Dr Christodoulidi shows that in a chaotic 4D Lotka-Volterra Model you can actually get all four species to co-exist stably together. The chaotic nature of this highlights the immense complexity of the real world’s high number of species coexisting.

 

So hopefully after reading all of that your theoretical boss is off your theoretical back and you can breathe a theoretical sigh of relief - knowing now the implications that the Lotka-Volterra Model has on a range of fields affecting the wider world!

 

References :

[1] Din, Q. Dynamics of a discrete Lotka-Volterra model. Adv Differ Equ 2013, 95 (2013). https://doi.org/10.1186/1687-1847-2013-95

[2] https://plato.stanford.edu/entries/chaos/
```

> [!quote] 90561  
> Just realised the pictures didn't copy-paste into the web page, my bad. First graphs should be two of the sine graphs of population size, second figure should be the 4D node graph, and the final figure should be the 4-species population graph, where 2 of the species die out.  
>  
>  
> I think you have explained this really well, you have explained terms precisely and the paragraphs flow. It also has parts with a subtle undertone of casualness which you'd hope to find in these blog-style reports  

> [!quote] 26990  
> You have an original, gripping intro and the casual tone makes it very easy to carry on reading!  
>  
> You've explained how the system works well, especially for a lay audience, using relevant examples from the seminar.  
>  
> Just double check your second reference as it is just a link :).  

> [!quote] 60795  
> This reads very well and holds my interest throughout. It may be beneficial to look at trying to fit in another reference somewhere for variety.  


```markdown
Blog report on the Seminar ‘Lotka-Volterra Systems: Dynamics and Applications’ by Dr Helen Christodoulidi



Mathematical modelling has always been a great tool to utilize when it comes to describing large, complex systems. One particular model, known as the Lotka-Volterra system, was discussed in detail during the seminar ‘Lotka-Volterra Systems: Dynamics and Applications’ delivered on the 19th of November 2025 by Dr Helen Christodoulidi. Within this seminar, Dr Christodoulidi discussed the mathematics behind the system and where it came from, before going on to describe how the system can be applied to real-life examples. 



The system was introduced independently by two scientists: Alfred J. Lotka (1880-1949) and Vito Volterra (1860-1940). Lotka’s work investigated coupled differential equations relating to chemical and ecological dynamics [1]. His principle was as follows: the competition among organisms for available energy is a natural selection. Volterra on the other hand was focussed more on the application of mathematics to mathematical ecology. During his research on the population dynamics of fisheries, he ended up publishing an article containing the same equations that Lotka had previously published in his paper ‘Elements of Physical Biology’ (1925). After becoming aware of the similarities, the two publishers acknowledged the others' research, while continuing to work independently. Volterra stated “Working independently, the one from the other, we have found some common results, and this confirms the exactitude and the interest in the position of the problem. I agree with (Lotka) in his conclusions that these studies and these methods of research deserve to receive greated attention from scholars, and should give rise to important applications.” [1]. Since then, as Volterra predicted, the model has been found to be applicable to many important areas of research, and is still relevant to this day.



So what can this system be used for? It can be applied to systems in ecology, epidemics and even finance. Its most common use is for simulating predator-prey population models, describing the evolution dynamics of both species. Before we go deeper into the applications of the model, let us lay out the foundations required to form such a model in the first place. We can begin by assigning variables - the prey to the x-variable and the predator to the y-variable. (eg. rabbits and foxes). We can then go about describing the system’s dynamics using a set of differential equations, where dx/dt is the rate of population growth of the prey species, and dy/dt is the rate of population growth of the predator species. For a predator-prey dynamic, we get the following pair of first-order, non-linear differential equations:

﻿﻿  (Eqn. 1.1)

﻿﻿   (Eqn. 1.2)

Where ﻿﻿ are constants that allow for flexibility to fit real data. In this model, the population size of the predator negatively affects the prey population, while the prey population positively influences the predator population [2]. In other words, as the predator population grows, the prey population will decrease as they are hunted for food. As more prey are hunted for food, their numbers decrease and thus there will be a shorter supply of food for the predator population, so their numbers will also begin to decrease. As the predator population decreases, less prey are being hunted, allowing for their numbers to rise again. As the number of prey rises, the predators will have access to more food, allowing their numbers to grow once again, and the cycle repeats. Over time, the population of both species will continue to fluctuate but the cycles always balance out in the end.



We can go about solving these equations using the Hartman-Grobman Theorem, which states that near a hyperbolic equilibrium point ﻿﻿, the nonlinear system ﻿﻿has the same qualitative structure as the linear system ﻿﻿ where ﻿﻿. In other words, near a hyperbolic equilibrium point (a point at which a model is “well-behaved” and easy to predict), a complex, nonlinear system like the Lotka-Volterra model behaves qualitatively the same as its simpler, linearized approximation. Solving Equations 1.1 and 1.2 using this method results in the following system of equations:

﻿﻿   (Eqn. 2.1)

﻿﻿   (Eqn. 2.2)

Which, when solved, gives the solutions ﻿﻿ or ﻿﻿, and ﻿﻿ or ﻿﻿. 

The points﻿﻿and﻿﻿can be plotted on a set of axes. By using eigenvalues, which tell us how the population will respond to small disturbances near a balance point, the behaviour of the system can be sketched out as a phase space, resulting in a plot that looks something like Fig.1, which utilises the previous example of rabbits and foxes. The plot shows us how the population of a species can fluctuate depending on the number of the other population, visualising the relationship between the two.





Fig.1: A phase space plot of the population of foxes against rabbits using Matlab [3]



This solution can at least be applied to the case where n=2, n being the number of variables in a system. Dr Christodoulidi’s recent research has been investigating whether the Lotka-Volterra model can be applied to higher dimensions. For more than two variables the complexity of the system increases, and things are no longer as simple as a single solution. In 4-dimensional systems, with 4 different species populations, the relationship dynamics between these species can differ and produce varying results each time. The most common outcome resulted in instances where entire populations would go extinct. Though for some values, there were also instances where all four populations could co-exist together. Dr Christodoulidi concluded that in all examples for higher dimensional systems, the system has more chaos, meaning results become more unpredictable. In other words, as n increases, the chaos of a system also increases. For the case of n=4, the system can exhibit both organised and chaotic behaviour. 4D organised cases are unbounded, and at least two of the four species will go extinct. On the other hand, 4D chaotic cases are bounded, and all four species can co-exist at the same time and display complexity. Comparing this to the original case of n=2, there is no chaos in the system, meaning it is completely solvable, and it is entirely possible that both species survive. 



One of the main downsides of the model is its simplicity. Though it works well enough for large enough datasets, the model contains the minimum possible number of variables and assumptions, meaning that it is somewhat unrealistic when it comes to being applied to real-world scenarios. It is purely a theoretical model, utilising real-world concepts and simplifying them to allow for the construction of a generalised mathematical model. Despite this, the model still remains relevant as it gives us an overall idea of the dynamics of a population and, as previously mentioned, tends to be fairly accurate for large enough sets of data.





[1] Allesina, S. (n.d.). 2 Generalized Lotka-Volterra | A Tour of the Generalized Lotka-Volterra Model. [online] stefanoallesina.github.io. Available at: https://stefanoallesina.github.io/Sao_Paulo_School/intro.html.



[2] Shim, H. and Fishwick, P.A. (2008). Lotka-Volterra Model - an overview | ScienceDirect Topics. [online] www.sciencedirect.com. Available at: https://www.sciencedirect.com/topics/earth-and-planetary-sciences/lotka-volterra-model.



‌[3] (Fig.1) scipy-cookbook.readthedocs.io. (n.d.). Matplotlib: lotka volterra tutorial — SciPy Cookbook documentation. [online] Available at: https://scipy-cookbook.readthedocs.io/items/LoktaVolterraTutorial.html.

‌
```

> [!quote] 81177  
> 1) The presentation is well put together but to improve it you could fix some of the grammatical mistakes and it has slightly informal phrasing. (2/3)  
>  
> 2) You have understood the context of the talk well but to improve you could expand on the Lotka-Volterra system and begin to talk about the model. (2/3)  
>  
> 3) You have stated about the talk about the models but not as to why the actual models matter for society, and you also could have made a connection with the Hartman-Grobman better instead of it being mentioned generically. (1/3)  
>  
> 4) You have stated an external quote from an external source but to improve you could perhaps maybe critically assess the disscusion instead of restating it. (3/3)  
>  
> 5) You have used language that is both able to be understood by both scientific and non-scientific audiences, however some terms still maybe misunderstood by non-scientific audiences such as phase portrait. (2/3)  
>  
> Overall a good start to a blog but could do with a few adjustments (10/15)  

> [!quote] 42890  
> I agree with the previous comment that the presentation is clear and concise, it flows well and is evident that you fully understand the topic. However, respectfully, this is not in lay terms - the average person will not know what a "hyperbolic equilibrium point" is or what "linearised approximation" means - just as 2 examples. It feels like most of the mathematical terms are quite specific and undefined. Other than that, it looks good to me.  

> [!quote] 90561  
> Very informative however I'm not sure how well it would read for a lay person due the the complicated mathematics involved. A statement such as "first-order, non-linear differential equations" may seem simple to a maths or physics student, however this terminology would alienate anyone outside of the mathematics sphere and would likely lose a lay person's comprehension; this too goes for the mathematical equations involved. Ignoring this though, it is very well structured and in-depth, with great resources such as graphs and external references backing this up.  

> [!quote] 46509  
> Overall Blog Presentation: The title, name of speaker, and date are all included. However, some of the sentences drag on and could do with being split up to make reading easier. 2/3  
>  
> Accurate Reporting: You know the subject and have accurately reported it. 3/3  
>  
> Accurate Contexualisation: You've explained why the research is important. 3/3  
>  
> External Source: References have been made and quoted.  
>  
> Writing Style and Technical Level: You have a clear understanding of what is going on, but the technical level of this is almost too high for the lay man to actually understand it. If you are mentioning complex concepts, it is best to add at least a basic explanation for the lay man to follow along. 1/3  
>  
> Overall: 12/15. I like it, but it's just a little too technical to be a report for the lay man. Really good work, you just need to make it a bit more accessible and break up the lengthy sentences.  


```markdown
Lotka-Volterra systems - Helen Christodoulidi 19/11/25



Lotka-volterra systems are systems used to show the population of 2 species, one predator, one prey. The populations of the 2 species change over time based on each other's populations. For example if the prey species loses loads of its population then logically the predator species would also lose population as the predator would have less food.





The Lotka-volterra system consists of 2 differential equations, one controlling the rate of change for the predators, and one controlling the rate of change for the prey. The equations for the models are (x prey, y predator) the equation for the rate of change for prey is dx/dt = αx - βxy, dy/dt = -γy + δxy where, x is prey population, y is predator population, t is time, α,β and γ are constants that are greater than 0. Notably the prey increases based on prey and decreases based on predators, while predators decrease based on predators and increases based on prey.



The Hartman grobman theorem “asserts that near a hyperbolic equilibrium point, the behavior of a nonlinear dynamical system can be approximated by its linearized form” [1]. Essentially near an equilibrium point the system will be close to linear. Meaning that the populations of the predator and prey will stay relatively stable. If you draw a phase portrait for the model you will get cyclic patterns around the equilibrium point meaning that starting points for the model near to the equilibrium point will give stable patterns for predator and prey where the populations increase and decrease periodically. Points further away from this may converge to 0 instead leading to both species going extinct.





[1] Richard Murdoch Montgomery (2025). Understanding the Hartman-Grobman Theorem: A Gateway to Predicting Dynamical System Behavior Near Hyperbolic Equilibria. International Journal of Pure and Applied Mathematics Research, 5(1), 20-34. doi: 10.51483/IJPAMR.5.1.2025.20-34.
```

> [!quote] 62557  
> 1) The presentation is well put together but to improve it you could fix some of the grammatical mistakes and it has slightly informal phrasing. (2/3)  
>  
> 2) You have understood the context of the talk well but to improve you could expand on the Lotka-Volterra system and begin to talk about the model. (2/3)  
>  
> 3) You have stated about the talk about the models but not as to why the actual models matter for society, and you also could have made a connection with the Hartman-Grobman better instead of it being mentioned generically. (1/3)  
>  
> 4) You have stated an external quote from an external source but to improve you could perhaps maybe critically assess the disscusion instead of restating it. (3/3)  
>  
> 5) You have used language that is both able to be understood by both scientific and non-scientific audiences, however some terms still maybe misunderstood by non-scientific audiences such as phase portrait. (2/3)  
>  
> Overall a good start to a blog but could do with a few adjustments (10/15)  

> [!quote] 90561  
> Good use of quotes and external referencing. Lay person would likely struggle with the mathematical equations though. I think something like the Rabbit-Fox example may also help with comprehension. Very concise however, and easy to read!  

> [!quote] 42890  
> It is clear you have understood the seminar well and that is shown throughout your writing. While we understand the equations and terms you have used, a lay person will not, but other than that it looks good  


```markdown
Lotka-Volterra systems: dynamics and applications  

Mathematical modelling can be used in a wide range of areas such as ecology, biology and finance. This was discussed in the presentation “Lotka-Volterra systems: dynamics and applications” by Helen Christodoulidi on 19/11/25.  



Lotka-Volterra models can be used to demonstrate predator and prey populations over time. This is done through two non-linear first-order differential equations. When these equations are used, they do not form realistic results, as it is a toy model and only works for large data sets.  



These equations are used to examine predator and prey, such as fox and rabbits, to show their population growth rates. In these equations, if the population of the prey is zero, then the population of the predator would decrease over time. Whereas, if the population of the predator is zero, the population of the prey would increase. If the two populations are at stable levels and graphed, it would form two wave formations, where the population of the predator would peak after the peak of the prey’s population.  



This model can be adapted to represent epidemic models by making the predator the infected and the prey the healthy. This produces different models due to different parameters used, such as cure rates. This allows us to understand disease rates and predict future activity. [1]  



In this type of model, there can be more than 2 variables. For example, it can be applied to 4 dimensions, which uses a community matrix. In some cases, 2 species survive, and 2 don't, and in other cases, all 4 species survive. When these equations are plotted, they can be chaotic or organized. The graph can become organised if the cases are unbounded, and this can cause an example case where not all species survive. Additionally, the graph becomes chaotic if the cases are bounded. In this case, the graph becomes very complex, where all species survive.  



Overall, the Lotka-Volterra models are solvable if they are 2D and have no elements of chaos. However, if the equations are in 4D, there are cases where it can be organised or chaotic. This model is useful for predicting changes in populations and can be adapted to predict changes in the markets. 



[1] W. W. Mohammed, E. S. Aly, A. E. Matouk, and E. M. Elabbasy, “An analytical study of the dynamic behavior of Lotka-Volterra based models of COVID-19,” Results in Physics, vol. 26, no. 104432, Jul. 2021, doi: https://doi.org/10.1016/j.rinp.2021.104432
```

> [!quote] 92913  
> Feedback based on the mark scheme provided is as follows:  
>  
> Presentation: Title, name of speaker and date of seminar are provided. Grammar is generally good. Within the first line of the second paragraph, fox should be plural.  
>  
> Content: Content mostly accurately covers what was discussed in the seminar, although some topics are a little underexplained. The phrasing of paragraph 4 sounds a bit misleading as you compare the model for epidemics with the predator-prey model. To improve, maybe compare with the x and y axes rather than with the previous model.  
>  
> Context: Societal context is explained well.  
>  
> Style: Writing style is good but fairly basic, and overall paragraphs could do with being a bit longer. It mostly would read well to a lay audience, however the term 'community matrix' is not explained.  
>  
> External Source: References are correctly labelled, but could have done with more than one. No quoted opinions are present.  
>  
> Overall it reads well but could have done with a bit more explanation and more references/quoted opinions to back up your points.  

> [!quote] 79578  
> 1) The overall presentation is good, and you've included the date, title, and name of speaker. There are some cases in which you could use punctuation to make it a bit more readable; sentences with several commas get a bit confusing.  
> Overall: Good  
>  
> 2) You've got the general message of the lecture, but some of the examples could use expanding on. For example, the example in the third paragraph is technically correct, it doesn't really explain what the model does. Instead of saying the population of the predator/prey is 0, try saying if the population is decreasing. Also, when talking about modelling epidemics, the Lotka-Volterra model isn't used, it's a separate model called the SIR model. The lecture does focus on the Lotka-Volterra model, but overall is about dynamical systems, which I feel you've misunderstood.  
> Overall: Good  
>  
> 3) You've done a good job of putting the use if mathematical modelling into context to explain why it is important.  
> Overall: Excellent  
>  
> 4) You have an external source, which is good, but it doesn't currently add any context that wasn't mentioned in the lecture. The external source also isn't a direct quote, which it needs to be according to the mark scheme.  
> Overall: Poor  
>  
> 5) The writing style and technical level is mainly readable for a lay-person, but some terms are definitely not accessible to a layperson, like 'non-linear first-order differential equations' and 'unbounded'. I don't think it's completely necessary to rigorously define these (you be there ages trying to), but it'd be useful to have maybe a short sentence about what this generally means, or replace them with easily to understand terminology.  
> Overall: Good  
>  
> Overall: This is a good recount of the lecture, but you need to be careful about solely talking about the Lotka-Volterra model when the lecture wasn't just on that, it makes some of what you say technically wrong. It's a strong draft and a great start! :)  


```markdown
If someone was to mention modelling (simulating) the interactions between the populations of several animals your mind would almost certainly jump to computer simulations, but the concept of modelling is just as important (and goes back much further) in mathematics. A branch of these mathematical models was discussed by Dr Helen Christodoulidi in her seminar “Lotka-Volterra Systems: Dynamics and Applications” on the 19th of November 2025.

 

Dr Christodoulidi starts off with one of the most widely known models – the Lotka-Volterra model (the name doesn’t give much of a hint as to its purpose). This is a very simple model for the competition between a predator species (such as foxes) and a prey species (such as rabbits). The model gives the number of members of each species over time. There are many – arguably too many – assumptions required for this model. Some of these are [1]:

The only factors influencing the species are the populations of the two species themselves
The prey species has access to unlimited resources
Both predator and prey populations react immediately to the change of the opposite population
 

It would be extremely hard to come up with a model for these populations directly. Instead, a common method in mathematics, and especially physics, is to instead think of the rate of change of the populations over time. There are two ways in which the population of either species can change: birth or death of animals. We’ll stick with imagining the predators as foxes and the prey as rabbits for simplicity. For the rabbits, the birth rate depends only on the number of rabbits already alive (as their food source is unlimited). The higher this is, the faster the population will grow. The death rate depends on both the number of rabbits and the number of foxes. Either more rabbits or more foxes will increase the rate at which rabbits die. The foxes effectively the opposite. The birth rate of them depends on both the number of foxes and the number of rabbits, with the death rate depending only on the number of foxes already alive [2]. Hopefully by thinking about this for a few moments you can see why this is true.

 

Unfortunately, we have traded an impossible problem for an extremely difficult one – turning these two rates of change back into an exact description of the two populations over time is not easy. There are, however, ways to do this, and in doing so you find a whole range of possibilities. The solutions generally follow a pretty simple pattern. Starting with a high number of rabbits, the fox population starts to grow. This causes the rabbit population to decrease which, in turn, then causes the fox population to decline as well. Finally, the rabbit population rises back up again. This continues indefinitely. There are additionally two stable positions: either both animals are extinct (not great), or the two animals have very specific balanced populations in which the reduction in population caused by death is exactly matched by the growth due to birth.

 

Increasing the number of species any higher than three creates even more difficulties. The rates of change of each of the populations are easy enough to write, but in trying to solve them we come across an issue. Any case in which all species survive is chaotic. That means that it is impossible to come up with equations for the populations of the species over time – they can only be determined numerically using computers.

 

These types of mathematical models aren’t just limited to simulating ecosystems though. They have many uses including simulating the spread of an infectious disease – the SRI (Susceptible, Infectious, Recovered) model [3, pp. 1025–1044]. This was obviously a fairly important topic a few years ago as scientists were trying to predict just how much of an issue the COVID-19 pandemic was going to be. All of that is to say mathematical modelling is a cornerstone of research which is often overlooked by the public is favour of computer models – these are often based on mathematical models anyway!

 

[1] GeeksforGeeks, “Lotka-Volterra Model of Predator-Prey Relationship.” Accessed: 2025. [Online]. Available: https://www.geeksforgeeks.org/biology/lotka-volterra-model-of-predator-prey-relationship/

 

[2] E. W. Weisstein, “Lotka-Volterra Equations.” Accessed: 2025. [Online]. Available: https://mathworld.wolfram.com/Lotka-VolterraEquations.html

 

[3] A. S. Mata and S. M. P. Dourado, “Mathematical modeling applied to epidemics: an overview,” vol. 15, no. 2, pp. 1025–1044, Dec. 2021, doi: 10.1007/s40863-021-00268-7.
```

> [!quote] 15100  
> Engaging start and good ending line. It has a clear example with a good amount of detail, and a clear description of the graph shape. For a couple of extra marks, you could add an example for the 3 or more species model.    
>  
> Overall, it has a good amount of detail and an easy-to-understand writing style. Well done.  

> [!quote] 90561  
> Great readability with the mix of lay terms and higher level reading. Approachable structure is nice with things like the bullet point helping a lot. Overall very concise while keeping scientific. Nice job!  

> [!quote] 62451  
> 1, Blogs overall presentation:  The overall layout is really clear and well thought out, the title, name of speaker and date are all mentioned throughout the introduction, which was a nice way to do it instead of just writing them at the top of the page and then continuing the essay. However, there was no title for the blog itself.  There is also good grammar throughout as well. 2/3   
>  
> 2, Accuracy of reporting the seminars take home message: The message that Helen was trying to get across through the seminar has been clearly and thoughtfully explained through this blog. 3/3   
>  
> 3, Accuracy of contextualisation for the research: The accuracy for the contextualisation is well done for the research and shows that the writer knows the research behind the topic however the social contextualisation could be more in depth and added to a bit more. 2/3   
>  
> 4, Additional research and use of external sources:  There is additional research done in this blog however there was no use of a direct quotation. 2/3   
>  
> 5, Writing style and level for audience:  The blog is written in a way for people who have minimal knowledge to be able to understand and then gain some sort of understanding of the topic while also giving more advanced detail to those who wanted more knowledge. 3/3   
>  
> Overall: 12/15, very well written blog with a few minor adjustments through it.   

> [!quote] 42890  
> This blog is accurate and written well. It is suitable for a lay audience and despite not having a direct quote, reads fluently and is engaging.  

> [!quote] 82157  
> The article is very engaging to the reader by using real world examples to help portray the concept of the Lotka -Volterra model. You haven't included any equations which I believe to be a good thing as it shows that you understand the audience of the blog post, which is supposed to be layman.  
>  
> Overall gets the message across clearly to a wide range of audiences and flows well!  


```markdown
Lotka–Volterra Systems: Dynamics and Applications Dr Helen Christodoulidi – 19 November 2025

Dr Helen Christodoulidi delivered a fascinating seminar exploring the Lotka–Volterra systems, a cornerstone of mathematical modelling used to describe predator–prey dynamics and their wider applications. The session combined theoretical foundations with practical examples, offering both depth and accessibility.



The Lotka–Volterra Model can be thought of as a mathematical a way to model cycles of growth and decline between two interacting groups. Let’s think through an example of rabbits (prey) and foxes (predators). If there are lots of rabbits, foxes thrive because they have plenty to eat. But if foxes eat too many rabbits, the rabbit population drops, and then the foxes’ struggle. As rabbits recover, the cycle starts again. The model uses two equations to describe how the numbers of predators and prey change over time. It’s not just about animals — the same idea can be applied to biology, ecology, or even finance, wherever two groups depend on each other in a push‑and‑pull way.



The Hartman–Grobman Theorem says that if you have a really complicated system, you don’t always need to study the whole thing. Instead, if you look at the system right around a balance point (where things are steady), the complicated system behaves almost the same as a simpler, straight‑line system. A very simple analogy would be to imagine a bumpy, twisting road. If you zoom in on just a small stretch near a flat section, it looks and acts like a straight road. This makes it much easier to understand and predict what happens in that small area. Thus, nonlinear systems (complicated ones with curves and twists) are hard to study directly. This theorem says: that ‘Two autonomous systems of differential equations are said to be topologically equivalent in a neighbourhood of the origin or to have the same qualitive structure near the origin’[1]. In other words, zoom in close enough, and the messy system behaves like a neat, linear one. That makes it much easier to predict what will happen, because linear systems are simpler to analyse. Dr Christodoulidi showed this with diagrams, where the behaviour of the system could be



One compelling application discussed was during the COVID‑19 pandemic, where the model was adapted to represent susceptible versus infected populations. Dr Christodoulidi demonstrated how this framework helped predict the decline of infection rates over time, supported by visual data from the UK government [2].

After showing how the Lotka–Volterra model could be applied to the COVID pandemic, Dr Helen Christodoulidi moved on to explore how the system behaves in different dimensions.

Two Dimensions: This is the classic predator–prey case (like rabbits and foxes). The equations can be solved, and the outcome shows that both species can survive in a repeating cycle, sometimes one grows while the other shrinks, but neither disappears completely.
Four Dimensions: Things get more complex.
In chaotic but bounded cases, the populations fluctuate unpredictably but remain within limits, meaning coexistence is still possible.
In organised but unbounded cases, the system spirals out of control. Here, not all species survive, and extinction of one or more groups becomes likely.
Dr Christodoulidi explained these scenarios clearly, showing how moving from simple two‑species interactions to more complex systems can reveal very different outcomes, from stable coexistence to potential collapse.



Dr Christodoulidi’s seminar was both insightful and engaging, blending rigorous mathematics with practical relevance. Her ability to connect abstract theory to real‑world scenarios made the session particularly valuable, leaving the audience with a deeper appreciation of how dynamical systems can illuminate complex phenomena across disciplines.

Reference:

[1] L. Perko Differential Equations and Dynamical Systems, Springer (2000)

[2] Gov.uk, “COVID-19 | UKHSA data dashboard,” Data.gov.uk, 2024. https://ukhsa-dashboard.data.gov.uk/respiratory-viruses/covid-19
```

> [!quote] 31102  
> In the third paragraph you repeat yourself a bit when talking about looking at smaller sections - it might be worth removing or rewording some of the sentances here.  
>  
> The second reference doesn't appear to be particularly relevant to the blog? Data from it is shown in the lecture but not here, it may be worth adding a diagram comparing the predicted cases against the actual ones.  
>  
> Overall, the whole blog flows well and feels cohesive with no obvious gramatical mistakes. The complex ideas presented in the seminar are delivered here in a very approachable manner.  


```markdown
I attended a seminar by Helen Christodoulidi on 19th November titled ‘Lotka-Volterra Systems: Dynamics and Applications’ which provided an insight what Lotka-Volterra equations are and how they can be applied in the real world.



The model is a dynamical system, meaning that it changes over time. Interestingly, it was introduced as a predator-prey model independently by Alfred J. Lotka and Vito Volterra and has now been developed and linked to many real-world applications in Ecology, Biology and Finance.



Most famously used in ecology, the Lotka-Volterra model describes the relationship between two species: a predator and a prey. It uses first-order non-linear differential equations to do this. We can take, for example, rabbits and foxes. The model shows that without any foxes interacting with the rabbits, the rabbit population increases exponentially. However, the growth rate decreases as the fox population increases as more rabbits are eaten. In contrast, the number of foxes declines exponentially without any rabbits, but then increases as the rabbit population increases as there is a greater food source. This can be expressed visually in the below figure:





[1]



In Biology, the model has applications in epidemics. The ‘prey’ in this case is the population of people susceptible to the disease with the ‘predator’ being the infected population. The number of susceptible individuals declines as the infected population increases as susceptible become infected. The infected population naturally reduces as they recover naturally or possibly die, but they increases as susceptible become infected. Figure [2] represents this as a graph (focusing on red and blue lines) which has also been seen using real life from Gov.uk Coronavirus cases from 1st April onwards [3].





[2]



In Finance, there are many uses of Lotka-Volterra with competing companies or mother and subsidary banks interacting. The model can also be used to represent  the relationship between wage share and employment rate. This was studied by Goodwin and represents employment rate as the ‘prey’ and wage share as the ‘predator’. High employment rate will lead to workers demanding higher wages so the wage share increases. This then results in falling profits for the businesses and so lower investment and employment rate drops in a cyclic pattern, very similar to predator-prey relationships. According to Goodwin, Lotka-Volterra can be “helpful in the understanding of the dynamical contradictions of capitalism” [4].



In addition to the above examples with 2 variables, the seminar concluded with going into detail about how Lotka-Volterra models can include 3, 4 or even more variables to show the relationships between the populations. In some cases, all species in the model can co-exist, in some not all species survive.

This is a great example of how mathematics can be applied to real-world contexts such as Biology and Finance, as we don’t usually get to see links between these areas.



[1] MyLearning, "Ecological Cycle: Predator and Prey," MyLearning, 2025. [Online]. URL: https://www.mylearning.org/resources/ecological-cycle-predator-and-prey

[2] Korotkov, Standard Routine Techniques of Modeling of Tick‑Borne Encephalitis. [Online]. URL: https://www.researchgate.net/publication/346515479_Standard_routine_techniques_of_modeling_of_tick-borne_encephalitis

[3] UK Health Security Agency, COVID‑19: Respiratory Virus Dashboard. [Online]. URL: https://ukhsa-dashboard.data.gov.uk/respiratory-viruses/covid-19

[4] R.M Goodwin, A Growth Cycle, presented at the First World Congress of the Econometric Society, Rome, 1965
```

> [!quote] 63893  
> Structure of report is nicely formatted and well written, consider opening with a more engaging statement or question. Discussed all core topics both in depth and breadth, and correctly stated the name and date of the seminar. A variety of references shows external research and a good grasp of the subject, however does not include the references specifically given in the slides of the seminar. For example: specific diagrams were given that model the population of the predators and prey, and a specific paper was given that modelled this system in 4D which was mentioned however the reference was not given.  

> [!quote] 96814  
> Presentation  
>  
> Date, title, and speaker: Clearly stated in the introduction: “Helen Christodoulidi on 19th November titled ‘Lotka-Volterra Systems: Dynamics and Applications’.”  
> Grammar and English: Overall, the grammar is good and the language flows well. There are two minor issues:  
> “but they increases as susceptible become infected” should read “but they increase as the susceptible become infected.”  
> A comma is recommended after “wages” in the sentence: “High employment rate will lead to workers demanding higher wages so the wage share increases.”  
> Spelling: “subsidary” should be corrected to “subsidiary.”  
> Score: Good.  
> Content  
>  
> Coverage of seminar content: The notes accurately summarise the seminar and explain the key concepts, including the historical background and real-world applications in ecology, biology, and finance.  
> Accuracy: References are correctly cited, and the explanations align with established research.  
> Score: Excellent.  
> Context  
>  
> Societal and research relevance: The piece effectively connects Lotka-Volterra models to broader contexts such as biology, epidemiology (with COVID-19 examples), and financial systems. This demonstrates strong awareness of both modern research and practical applications.  
> Score: Excellent.  
> Style  
>  
> Accessibility and engagement: The tone is clear and suitable for a lay audience. Complex mathematical ideas are explained in an understandable way, and the inclusion of diagrams strengthens comprehension.  
> Score: Excellent.  
> External Sources  
>  
> References and quoted opinion: All references are relevant, appropriate, and correctly cited. The inclusion of Goodwin’s quotation adds depth and authority to the discussion.  
> Score: Excellent.  
> Final Review  
>  
> This is a well-structured and informative piece that successfully explains the Lotka-Volterra system and its diverse applications. It demonstrates strong contextual awareness and uses examples that make the topic relatable to readers outside mathematics.  
>  
> Suggested improvements:  
>  
> Correct minor grammar and spelling errors.  
> Add a few more commas for clarity in longer sentences.  
> Overall impression: A clear, engaging, and accurate summary that effectively conveys the seminar’s content and relevance to real-world contexts.  


```markdown
Lotka-Volterra System
by Helen Christodoulidi
19/11/2025


Ever wondered why predator and prey populations seem to rise, fall, and manage to stay perfectly balanced? On the 19th of November 2025, Helen Christodoulidi held a seminar about the mathematics behind predator-prey models, specifically Lotka-Volterra systems.



Lotka-Volterra systems are at the core of modelling predator-prey populations and are widely used in industry including ecology, biology, and finance. The name Lotka-Volterra comes from the mathematicians Alfred J. Lotka and Vito Volterra who independently contributed to the dynamics of population. The model consists of two differential equations (DE’s), one that models the prey and the other, predators. These DE’s depend on one another, so fluctuations in the predator population effect the prey population, and vice versa.



The Hartman-Grobman Theorem [1] is a fundamental result of a dynamical system and allows us to solve a Lotka-Volterra model to visualise its periodic solutions. Helen Christodoulidi worked through an example by hand and derived solutions that show hyperbolic lines on a phase diagram. Another way to view these solutions are periodically which show adjacent, asymmetric waves that rise and fall proportionally to one another [2]. Other solutions show similar waves but at different heights, suggesting one population is more sensitive than the other.



An application of the Lotka-Volterra system is in real world epidemics, specifically COVID 19. The system is tweaked slightly to model the susceptible and infected. New periodic solutions were derived showing different wave forms which peaked then decayed overtime. Helen Christodoulidi’s presentation included real data and graphs from GOV.UK that showed the exact same peak and decay in the infected population.



The seminar rounded off by showing solutions to a 4D Lotka-Volterra system and showed 3D projections of the solutions that demonstrate bounded (co-existence) and unbounded (not all survive) chaos [3]. In the end, Lotka-Volterra systems define the sensitivity between balance and extinction of two species.

 

[1] Perko, L. (2000). Differential equations and dynamical systems. New York: Springer.

[2] GeeksforGeeks (2025) Lotka-Volterra Model of Predator-Prey Relationship. Available at: https://www.geeksforgeeks.org/biology/lotka-volterra-model-of-predator-prey-relationship/

[3] Christodoulidi, H., Hone, A.N., & Kouloukas, T.E. (2019). A new class of integrable Lotka–Volterra systems. Journal of Computational Dynamics.
```

> [!quote] 94931  
> following the mark scheme criteria  
>  
> 1) overall presentation 3/3 date, name of speaker and title are correct  
>  
> 2) Accurate reporting 3/3 i think you captured the information well  
>  
> 3) Accurate contextualisation 3/3 i think you talked about real world applications well  
>  
> 4) Additional external sources 2/3 good use of sources would recommend an additional reference  
>  
> 5) writing style 2/3 good style but for me some words might need explaining for a layperson but i could be wrong  
>  
> overall well done!  

> [!quote] 76354  
> Good grammar and gave title and date. Successfully explained Lotka-Volterra systems and their uses concisely but it still made perfect sense. Would be suitable for a lay audience in my opinion since they didn’t focus too much on where the maths came from, but more so why it’s there and what it tells us, which helps it be easy to follow and understand.  

> [!quote] 42994  
> Speaker's name, title and date all included. Spelling and grammar are both good, except for 'the wave forms'; this should be one word: waveforms. The way that your report is structured flows smoothly and logically.  The blog report summarises the seminar well and highlights how mathematical modelling can be applied to real-world scenarios. It is clear from this that you have understood the seminar's central message. In terms of context, I like that you focused on COVID-19, something that has impacted us all. Could you have expanded on this by discussing the implications of the mathematical modelling for public health? This would provide more evidence of the importance of such modelling. Your references are strong and relevant, but you haven't included a direct quote; this is a prerequisite in the marking criteria. I think the writing style is mostly appropriate for a lay audience, but some parts could be explained more thoroughly, for example, 'hyperbolic lines on a phase diagram'. As a 3rd year physics student, I understand what this means and can picture it in my mind, could you say the same for the layperson? All in all, it is a good, solid blog report that I enjoyed reading, and hopefully, I have given you a couple of valid points to think about and perhaps further improve it.  


```markdown
Week 8 First Draft 

Have you ever wondered how to make a graph related to the relationship between Lions and Zebras? Well during the lecture given by Helen Christodoulidi named “Latka-Volterra Systems: Dynamics and Applications” on the date (19/11/25). 

The way graph this dynamic is called the predator-prey model which is an ecological model that uses two linked differential equations to describe the dynamic relationship between two species, where one is a predator and the other is its prey. The classic example is the Lotka-Volterra model, which shows how the prey population grows exponentially without predators, while predation decreases it. An example of this is the following graph [1].  











Fascinatingly this model was introduced by both Lotka and Volterra independently. The Lotka-Volterra model has a variety of uses not only predator and prey. It has been adapted to be able to model competitive relationships like for resource. Microbial ecology as it can quantify the interactions in a large microbial community. The final ecological use is Disease dynamics as it can be applied to model the interactions between viruses within a host. Another example which is non ecological is economics as the model has been used to study market competition, the impact of innovation, and government policies in economic systems [2][3].  



Helen described this model as something that can be done by hand instead of by a computer doing simulations. The Lotka-Volterra model has been labelled as simplistic and that its nature often limits its accuracy in capturing the complexities of real-world ecosystems [4]. However, given a large data set within the parameters of the model and they are often accurate. To conclude, the Lotka-Volterra system is an important predator-prey model which can describe dynamical models in ecology, biology and finance.  

 

 

 

 

 

References 

[1] GeeksforGeeks (2025) Lotka-Volterra Model of Predator-Prey Relationship. Available at: https://www.geeksforgeeks.org/biology/lotka-volterra-model-of-predator-prey-relationship/ (Accessed: 25 November 2025).  

[2] Davis, J.D., Olivença, D.V., Brown, S.P. and Voit, E.O. (2022) ‘Methods of quantifying interactions among populations using Lotka-Volterra models’, Frontiers in Systems Biology, 2, 1021897. doi: 10.3389/fsysb.2022.1021897. 



[3] Wikipedia (2025) Lotka–Volterra equations. Available at: https://en.wikipedia.org/wiki/Lotka%E2%80%93Volterra_equations (Accessed: 25 November 2025) 



[4] Müller, H., Schmidt, G. and Fischer, L. (2024) ‘Lotka-Volterra Model with Principle Component Analysis’, Journal of Computational Biology and Medicine, 4(4), pp. 1-10 https://hal.science/hal-05017221v1/document#:~:text=The%20Lotka%2DVolterra%20model%20has,complexities%20of%20real%2Dworld%20ecosystems.  
```

> [!quote] 63893  
> Image in report is not needed as reference is used.  
>  
> Consider writing a bit more as report is short compared to others, more context as well.  
>  
> Good use of references and external research.  

> [!quote] 56001  
> Good overall presentation with the date, name of speaker and title included (slight typo in title as it is Lotka-Volterra not Latka). Accurate reporting of the lecture content and majority of information reported. Contextualised the lecture well, using a wide range of contexts in biology and finance. Good use of sources, would maybe just add a direct quotation but i like you have a lot of references to back up the blog. Good writing style, definitely suitable for a lay audience. I especially like the diagram to visualise and clear explanations of how Lotka-Volterra equations work using predator and prey as examples.  

> [!quote] 90561  
> Good use of external research throughout. Overall very concise and readable!  

