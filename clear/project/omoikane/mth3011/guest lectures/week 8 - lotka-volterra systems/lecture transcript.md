# Lecture Transcript: Lotka-Volterra Systems

[Auto-generated transcript. Edits have been applied for clarity.]

## Introduction

Thank you for your patience with the slight delay. We are going to begin with a talk by Anne. Some of you probably know her already, but perhaps not all of you. Anne is a lecturer in mathematics in the school, and she works on dynamical systems. She is going to discuss some of them today.

Just to mention that we are recording the lecture, but I am recording from my laptop directly to the screen, so the quality probably will not be top-notch. Please try to take notes as well if you can. We can probably also obtain the slides afterwards.

Hello, it is a great pleasure to give this seminar to you today. Some of you know me already—I have been around, and we have had lectures in this very room. The whole setting sounds very familiar to me.

## Lotka-Volterra Models

Today, in this seminar, I am going to talk about a model called the Lotka-Volterra model. This type of model—I have these two equations here—is one example of a Lotka-Volterra system. I will discuss this type of model, which falls within the category of predator-prey models.

We can use these models to describe many things. We can model complex systems, large systems in ecology, but we can also go beyond that and see applications in modeling epidemics. You might have heard of a model called the SIR model. Perhaps some of you have a project related to this. It is all about disease spreading. Simple models like this with only two equations are enough to describe, reasonably well (not perfectly, because the system is more complex), the spreading of viruses, for example. There are also applications in finance. There are many applications for this very simple model.

I am going straight into the material because we do not have too much time, and I would like to cover as much as possible.

## What Is This Model and How Did It Start?

When we say Lotka-Volterra, we mean essentially these two equations. We have a system of first-order differential equations with two variables, x and y, that we would like to solve and find the solution for this two-dimensional system. We see some parameters: α, β, γ, and δ. All of these are positive constants. In the beginning, let us leave them abstract—we do not specify precise numbers—because these constants give us flexibility to fit real data. According to these parameter values, we can match real data as closely as possible.

The Lotka-Volterra model was developed a long time ago by two scientists. They used these equations to describe the evolution of two species, where one represents the predator and the other represents the prey. What we want to find is how the two populations of these two species change over time.

We are given these first-order differential equations. You have seen in your modules on differential equations that you already know how to solve systems of linear equations with x and y. However, when we encounter nonlinearity, like here, it is not always easy to solve the system. This is one of those cases where the solution of the system is not easy to write down. It is not like cosines, sines, and exponential factors that we know how to handle very well—it is something more complicated.

In this case, what we can do is use the theory of dynamical systems to provide qualitative behavior of the solutions. This is what we are going to see today.

## Key Features

The system was introduced independently by two scientists: Lotka and Volterra. They both were interested in applications involving two competing species. It could be two animal species, or it could be bacteria and something else—something in biology. A predator-prey model, as I have already said, has been used to describe the evolution of systems in ecology, biology, and finance. We will see an example related to epidemics. It is a toy model.

What I mean by "toy model" is that it is not as realistic as modern models, but it works well enough and serves as a very good starting point. We have an understanding of the model because we can solve it. Understanding solutions is the best way to grasp mathematical modeling—start with something simple with the least possible number of variables to gain an understanding of the problem.

Very briefly, about Lotka and Volterra: they were born in the 19th century, and their theories were developed more than 100 years ago. Lotka was a biostatistician and logician, while Volterra worked as a mathematician and physicist. They worked independently but came to the same conclusions. Lotka published his work in 1925, and Volterra published in 1926. If you want to learn more about these scientists and what they did historically, I can share the slides with you.

## Three Basic Steps of Mathematical Modeling

Now, thinking about mathematical modeling, it is interesting to see how we start with this mathematical model. There are three basic steps:

First, we need to select variables. We want to study this system with two population species. We need the variable x and the variable y. As you see in this diagram, one population (the prey) loses to the other (the predator). There is a flow running from x (the prey) to y (the predator).

To describe the system, if you have ever worked in mathematical modeling and want to use differential equations, you need to find the derivatives of the model. Once we have the system, we need to solve it. These are the three steps we need to follow.

## Example: Rabbits and Foxes

Let us say we want to study this particular system. A classic example is rabbits (the prey) and foxes (the predators). If you want to see how this works over time, you can collect real data, measure from real life, and plot the data you obtain.

So, as I said already, x and y describe the dynamics. We want to see how they evolve over time. What do the derivatives tell us? Well, dx/dt is the population growth rate of the prey, and dy/dt is the population growth rate of the predators.

Before giving the equations straight away, how would you start? We want to see how the growth changes. One can think: how would the rabbits do if they were alone? We need some assumptions. Let us say they have an infinite amount of food. If they do not have any enemies, their population would grow and grow. The population growth rate—the derivative—could be, for example... Does anyone have any idea? You need something positive, of course, but how would they change?

If you have two rabbits, then four rabbits, then eight rabbits, and so on, this means we have exponential growth. That means the derivative is linear—proportional to x. So dx/dt is proportional to x. That is a good start.

What about the foxes? If they have no food around, they will starve and very quickly go extinct. That means for y, we would have something proportional to -y.

When we allow the populations to be together, the system becomes more balanced. The rabbits have exponential growth, but then they are eaten by the foxes, so their population falls. If the prey population falls a lot, then the foxes do not have enough food, so they cannot reproduce much. Their population starts to go down again. If the predator population goes down, the prey find the opportunity to reproduce again. What you get in the end is a balanced ecosystem with ups and downs—like a cycle. You expect to have oscillations.

Now, in terms of the equations: you have births, deaths, and interactions. When you allow them to interact, you need an interaction term between x and y—mathematically, something that contains both x and y at the same time. This is the interaction term that couples the system. It is negative for the prey (they are consumed) and positive for the predators (they gain energy from prey). This is how they came up with this model.

## Hartman-Grobman Theorem

Now the third step is to solve the system. We are going to discuss a very important theorem from dynamical systems: the Hartman-Grobman theorem. This is a very important result in the local qualitative theory of ordinary differential equations.

The theory shows that near a hyperbolic equilibrium point (let me skip the word "hyperbolic" if you have not heard it before), the nonlinear system has the same qualitative structure as the linearized system. Imagine that dx/dt = F(x), where x is a vector. For a system of equations, this nonlinear system has the same qualitative structure as the linear system: dx/dt = Ax, where A is the Jacobian matrix evaluated at the equilibrium point.

How many of you have already seen the Jacobian matrix before? Great, that is nice. The Jacobian provides you with all the necessary information to extract the qualitative behavior—not precisely or explicitly, but qualitatively.

When you have two systems of differential equations, we can say that their solutions are topologically equivalent, which means they have the same properties qualitatively in the neighborhood of the fixed point—the same qualitative structure. We will see what this means.

## Finding Fixed Points

Let me now apply this theorem to the specific Lotka-Volterra model. What we need to start with is finding whether we have any fixed points. The equations are:

dx/dt = αx - βxy
dy/dt = -γy + δxy

How do we find the fixed points? We set the derivatives equal to zero. We need the right-hand side to equal zero. We need to solve this system for the fixed points:

αx - βxy = 0
-γy + δxy = 0

From the first equation, we can factor: x(α - βy) = 0. This gives us either x = 0 or y = α/β.

From the second equation, we factor: y(-γ + δx) = 0. This gives us either y = 0 or x = γ/δ.

So from the first one, we see that the obvious solution is x = 0, or if the parentheses equals zero, then y = α/β. From the second equation, similarly, y can be zero, or x = γ/δ.

The first case is x = 0. When x = 0, the second equation becomes -γy = 0, so y must equal zero. So one fixed point is (0, 0).

When y = 0, we plug that into the second equation and get -γy + δxy = 0, which becomes δx · 0 = 0. But from the first equation with y = 0, we get αx = 0, so x = 0 as well. Actually, let me reconsider: when y = 0, from the first equation we get x(α - 0) = 0, so x must be 0 or α can equal 0, but α is positive, so x = 0.

Actually, the second fixed point comes from the interior case: x = γ/δ and y = α/β. So we have two fixed points:
1. The origin: (0, 0)
2. The coexistence point: (γ/δ, α/β)

We can sketch these. The first one is at the origin, and the second one is somewhere in the positive quadrant at the point (γ/δ, α/β).

## Computing the Jacobian Matrix

Now, what the Hartman-Grobman theorem tells us is to find the linearized system. We need to find the Jacobian matrix. How do we find the Jacobian matrix? How many elements do we need? Two by two.

The first row corresponds to the partial derivatives of the first equation. Imagine that the right-hand side of the first equation is f₁(x, y) = αx - βxy, and the second is f₂(x, y) = -γy + δxy. The Jacobian matrix consists of:

∂f₁/∂x    ∂f₁/∂y
∂f₂/∂x    ∂f₂/∂y

With a quick computation, this equals:

(α - βy     -βx    )
(δy      -γ + δx)

The second row gives us: ∂f₂/∂x = δy and ∂f₂/∂y = -γ + δx.

So the X. I haven't done any tribal.

Okay, so we have the Matrix, we have the Matrix, let's call it a.

And the theorem says. But near the equilibrium points, the system looks like that's okay.

So near the equilibrium point means that we have to find that to combine at those points.

So we have to do this computation twice.

So first of all, for the for the origin, we need to find out the origin.

Maybe let's start with the origin, please. X and Y are zero.

So we have one -0 zero and minus gammas.

Okay. And then we repeat for the other points.

So at the point be okay just straight away you come to the competition, you just plug in the, um, the other point and you will get something like.

Zero. Miles Bender, Gamma Delta, stand up all over one and zero again.

Okay, so we found the Matrix. And according to the theorem, um, the the system here I use an X called.

Okay, this is a vector with a components X and Y.

Okay. Well, I can use w the first.

Okay. This is equal to this matrix.

Times X and the same for here. So this is what the theorem says.

Okay. And it stops them. So now I only need to solve a linear system, which you have already done.

I believe so in the second meaning. Okay.

So this particularly second is can be solved straight away.

So if you plug in this matrix here, you will see that you get two equations.

The first one is exploded.

Was. It was on Fox.

And the second one is the wild. It was minus gamma Y.

And the situation of that is the. So exhausting is some call sometimes into the old party.

So exponential growth and why of these some other concerns times into the minds that multi.

Okay. Now for the other one.

Um, do you have any idea how would you solve this one?

So if I cronuts. Well, let me call this Konstanz.

Yeah, like we want to do to you. We have something like X equals minus v1y, and to why those people's minds did to X.

How are you usually solving an equation like that?

A system like that. But it can be different ways.

One of them is to find the eigenvalues of the matrix.

And the eigenvalues, actually what they do is they talk about the stability and more or less here you see,

the matrix is not going to last, but it found a solution.

You have one positive eigenvalue and one negative, um,

and that corresponds to the positive eigenvalue corresponds to a direction that is unstable and your system

explodes while the negative eigenvalue corresponds to the stable direction where your system contracts.

Okay. And we can draw that when you come here and you find the eigenvalues, it will say that you have two purely imaginary ones.

Okay, so that's one way with the eigenvalues to conclude that you have something that's called the centre.

If not, well, you can use other ways that you learned in the differential equations.

Maybe you can find the secondary body of this one, for example, and then this will give you the first derivative here and you can substitute that.

So will have the second derivative of x equals something negative times x.

So what you get from that, you get cosines and sines against periodic solutions.

Okay. So if we go now back to the graph.

Because the theorem says of its quality, it can do the same with the width of here.

So we found that for the x axis, it expands the solution for the Y axis contracts.

And around this point, the second one, we get cosines and sines.

We get something like circles. Now, the interesting part is this is the phase portrait or phase base of the model.

The interesting thing is that by knowing that stability is about the stability of only two points, we are able to sketch the full face space.

So these two points tell us everything about the quantity.

So what we need to do in the order to have a sudden we need to draw these parents.

And all the parents have to be compatible. Which means that the flow goes like that.

The arrow represents time. Time is also a parameter here.

You don't see that, but it is here.

And once you kind of match together everything.

First of all, let the arrows in the signal. It have to go in the same direction.

And to be compatible means that these orbits have to grow.

So they have to become circles again. So imagine that they they do something like that.

Like that. So they enlarged and imagine this one would come from somewhere and return like that and so on.

Okay. So it's something like that.

So by knowing this ability of only two points, we know the solution of the system.

Now, because X and Y represent populations, you expect that X and Y are positive.

So in fact, we are here only in the first problem.

So you expect that wherever you start, whatever is your initial condition,

you can have like different realisation of the model, but all of them will coexist at all times.

Okay. Like if you are here means that y population becomes.

Um. Yeah. Very, very few foxes remain, but then it goes back up again.

So, you know, it's like a circle of life periodically.

Um, so yeah, that's the idea. So you construct everything, knowing only qualitatively, you construct everything.

Um. Yeah, there is a slide here.

So again, about this, you find the eigenvalues and you use this method to pick up of the stability.

You put everything together and this is done using the computer.

So this how exactly they look like. So you have periodic orbits, but you see the node circles actually if you go very close to the origin,

indeed, it's like you have a linear system, cosines and sides, which gives you circles.

But as you go outside, you get something between a triangle and the circle.

You get a strange curve. Yeah, but it's periodic nevertheless.

It's a deformed circle. It's this is what means a topological equivalent is something deformed in a kind of continuous way that you don't know.

There is no it's not like a broken like a like this curve doesn't go to infinity.

It's a remains bounded. Okay.

And some examples are if you start very near the origin, you can see now when you plot X and Y versus time, okay,

you can see the situation is true where when you're waiting for and you will see these are more or less cosine designs.

Uh, periodic. You see they have the same height, say maximum minimum.

Then if you go further away from the, from the fixed point, you go further away where the orbit becomes like a triangle, you get something different.

Okay. Like that.

Uh, if you go even further away when you're you, your orbit almost touches the x and y axis, you get something that really goes to zero.

So here indeed you have that Both spaces coexist at all times, but your system is a little bit endangered.

I mean, if you kind of perturb it a little bit, if you have an external threat, it's going to one of the two is going to be extinct.

If one goes extinct, the other as well. Yeah.

So this here you have something, a very, very fine balance.

And so one span of a very common.

Right, Uh, 10 minutes. Right.

So I say very quickly that if you take the same equations and imagine that alpha is equal to zero,

so you eliminate the first them, which you are allowed.

Okay, I said that they're positive, but suppose that can be zero as well.

If you eliminate this one, you take that, you take an epidemic model.

So that's why I looked about the also the response to, um, describes epidemic models.

You don't have these equations existence because you don't have births here.

You assume that this x population does not have any births at all, but you have something that extracts from that and that's, that's here.

And what X represents is the population that has never been infected before while Y represents the infected population.

And so what you observe is that now your solution, well, this will go down, kind of everybody will become infected.

But the the the infected population starts by it's a low value.

There is some part of this fact initially it peaks and then it slows down.

But is interesting. You see you have this nice curve that is non symmetric.

So like it it becomes very, very slowly compared to the beginning.

And it's actually I mean, you you find that the straight away from the equations if you compare them where you believe you or if you Yeah.

If you put in numerical even if you try to compare it with a real data like this is taken from the website

of the government about COVID cases and probably that's what's hospitalisation if I remember correctly,

you see how this peak and then it slowly decays.

Yeah. You wouldn't expect like uh, if I speak to decay fast as well, it has to go slowly then.

Uh, so you see with these naive two equations you can do, you can do enough and.

No. Is that all? No. You can go to higher dimensions.

And that's the very, very challenging part. Results wise is open.

There are many things that can be said or within four dimensions is really open to the subject.

Um, and I'll give you an example from a paper published in 2019 with Professor Owen from the University of Kent,

and to do this and we tried to first of all, how do you generalise the model?

So let's first of all, what do you want to do?

So what do you have for populations?

If you have four populations, you can create a graph as you like and see the timing of who is the predator, who is the prey and who is in between.

Like, let's say if you have for about a year, let's see, for example, X3 can be predator and prey at the same time.

Okay. X4 is only prey. X1 is a super predator.

I mean, you can create different graphs. Okay. And to its graphic response, a single model, a unique coming.

So how you can do that? Well, um, usually to the students, they have a project with me.

I tell them to start thinking about that, but I will give you some hints.

So when you have the model, you said that you have a linear part, um, and you have a nonlinear part, which looks like that.

Okay. If you. Well, if you divide by x.

One. Why is this one? You write the equation like that, you get a constant term minus a term that is like gamma Y.

Okay. And you can do that if you have many variables, let's call it now x one can be x one and the other 1x2.

You might have more variables so you can add something like minus those like three, minus two x four and so on.

So more or less this is how you can go to higher dimensions and it's around the graph.

So if you have a narrow between two populations means you define the relation between them and that's the relation, that's the interaction.

If, if this is a predictor of x three, then you might have to make it.

Plus, if it's the prayer of three, you have to leave it as a minus.

That's the rough idea. So then you.

Your eyes to this matrix. Yeah.

So this is a divided by one mixture. I'm about to have some council terms in better form, and that's a matrix which is, um, has a use.

This has some zeros here. The easiest case is to imagine that everything here is a of, of, um, um, value one.

Let's say that of all alpha I, I'm one.

Then you have a symmetric matrix. Okay.

Uh, it's called community matrix defines the directions, uh, times the the vector and Yeah.

And then you try, try to perform the same type of the same reasoning, find the stability of the points and so on in a very dense way.

You can be right. It's like that for an abstract number of JS from 1 to 4.

But uh, you see, you can write it, you can generalise it for and interactive populations and well,

I'll show you just a couple of a33 and pictures are close in four dimensions with this particular structure.

We investigated this work and we saw that they can be different.

What all types of solutions you can have populations which became an extinct.

And so maybe most of the cases were like that where okay so you you plug in in your equation some constants.

It's a obviously are equal to one for example and you the cause sometimes you get the combination of them and so

what you get is that so what's probably what you get like the most probably is that you get the two populations um,

decay exponentially with time. So that's the lowering of its population and the linear behaviour means that it goes down exponentially and to survive.

Okay, so far so good. But there were other cases and that's the most interesting one where all four four populations coexist at all times.

And that's the most interesting part because, um, you want, that's if you, if you, your model represents something of the banking system or,

or the population interactions of animals basis or um, well, the maybe not, but uh,

yeah, from this two examples, you want that everybody coexist at all times.

That's a good scenario. And that could be true for certain values of the parameters.

But what was interesting is that for these parameters you see here some three D projections.

Okay, So the corresponding face project is for the image.

I'm going to draw this. So we plot only three of the four variables and you see some strange structures like a ribbon.

And you go further, let's say far further from the equilibrium point the ribbon enlarges, you go even further becomes very flat.

If you go even further away, at some point, you get a totally chaotic orbit, like fully chaotic.

So what happens in all four of them is that in all four of them you have chaotic behaviour, so you find chaos before dimensions.

But let's say here on the top, which is very close to the equilibrium points kind of contained,

you don't really observe that if you go further and further away, it's like you increase the energy.

If you should just add a physics like similar to increasing the total energy, sometimes you observe more chaos.

Yeah, so that was the idea. Oh, okay, slide the last slide.

There's another method to detect chaos that's called the surface of section.

Um, that means that you consider a hybrid plane and you wait for the orbits to intersect the plane.

Every time the orbit intersect this plane, you plot a point.

Okay? You do that numerically.

And if you see some structure like on the top, you see this kind of circles, these are created from kind of ribbon style of solutions.

Um, I mean, this more or less not really chaotic.

Let's say their scales is really, really contained, very weak.

You go further away and further away from the equilibrium point.

And this is how really chaos looks like in this hyper hyper plane skater points without any structure at all.

Okay. So that was the the conclusions from this.

Um, I would skip the. Yeah. Look the. The system, as you said, is an interesting model applied in many different fields.

In the case of two dimensions, the original model we don't have in the case, the model is fully solvable.

You know everything about. But if you go to four dimensions, the interesting thing is that you can encounter chaos or you can encounter order.

If you encounter order. What happens is that at least two out of four of your populations will extinct.

That's the order case. And the killed the case. Everybody co-exists.

So the good scenarios that killed this case in four dimensions strained enough.

Okay. So that was all about. Thank you for your attention.

I'm happy to answer any questions on the nuclear question.

Yes. And you mentioned it's been extended to kind of any dimension.

Is it always the case that the chaotic one is called coexistence, or is it just kind of nobody has a room and we have no idea.

Okay, So thank you. I will also release the work for next week after the session as well so that you can watch it and that's it.

