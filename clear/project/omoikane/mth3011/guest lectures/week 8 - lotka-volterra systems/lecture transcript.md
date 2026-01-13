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

So we have the Jacobian matrix, let us call it A. The theorem says that near the equilibrium points, the system behaves like the linearized system.

Near the equilibrium point means we have to evaluate the Jacobian at those points. We have to do this computation twice—once for each fixed point.

## Analyzing the Origin

First, for the origin where x = 0 and y = 0. Substituting into the Jacobian:

A = (α    0  )
    (0   -γ)

## Analyzing the Coexistence Point

For the second fixed point at (γ/δ, α/β), substituting these values:

A = (0           -βγ/δ)
    (δα/β         0   )

We found the matrices. According to the theorem, the linearized system near each equilibrium point is:

dx/dt = Ax

where x is a vector with components (x, y).

## Solving the Linearized Systems

Now we only need to solve linear systems, which you have already done in your differential equations module.

For the origin, plugging in the first matrix, we get two uncoupled equations:

dx/dt = αx
dy/dt = -γy

The solution is x(t) = C₁e^(αt) and y(t) = C₂e^(-γt). This shows exponential growth in x and exponential decay in y.

For the second fixed point, how would you solve this system? We have:

dx/dt = -βγ/δ · y
dy/dt = δα/β · x

One way to solve this is to find the eigenvalues of the matrix. The eigenvalues tell us about stability. For the origin, the matrix is diagonal, so we have one positive eigenvalue (α) and one negative eigenvalue (-γ). The positive eigenvalue corresponds to an unstable direction where the system expands, while the negative eigenvalue corresponds to a stable direction where the system contracts. This makes the origin a saddle point.

For the coexistence point, when you find the eigenvalues, you will discover they are purely imaginary. This indicates we have what is called a center. Alternatively, you can find the second derivative and show that d²x/dt² = -k²x for some positive constant k², which gives you cosines and sines—periodic solutions.

## Phase Portrait

Let us return to the phase diagram. The theorem tells us the qualitative behavior. For the x-axis, the solution expands; for the y-axis, it contracts. Around the second fixed point (the coexistence point), we get cosines and sines—something like circles.

The interesting part is that this is the phase portrait of the model. By knowing the stability of only two points, we are able to sketch the full phase space. These two points tell us everything qualitatively.

To draw the phase portrait, we need to draw trajectories that are compatible. The arrows represent time—time is a parameter here. The arrows on the x-axis have to go in the same direction, and to be compatible means that these orbits have to grow—they become circles. They enlarge as they move away from the origin.

By knowing the stability of only two points, we know the qualitative behavior of the entire system.

Because x and y represent populations, we expect x and y to be positive. We are only interested in the first quadrant. Whatever your initial condition, whatever realization of the model you have, the populations will coexist at all times. The solutions are periodic—if y (the predator population) becomes very small, it eventually grows back up again. It is like a circle of life, periodically repeating.

You construct everything knowing only the qualitative information.

To find the eigenvalues, you use standard methods from linear algebra. You put everything together, and this can be done using a computer.

The phase portrait shows periodic orbits. If you go very close to the origin, it looks like a linear system with circles. But as you move outward, you get something between a triangle and a circle—a strange, deformed curve. It is periodic nevertheless, but deformed. This is what "topologically equivalent" means—something deformed in a continuous way, but remaining bounded.

## Numerical Examples

If you start very near the origin and plot x and y versus time, you see oscillations that are more or less like cosines and sines—periodic with the same amplitude. If you go further from the fixed point where the orbit becomes more triangular, you get different-shaped periodic oscillations. If you go even further away where your orbit almost touches the x and y axes, you get solutions that approach zero and then grow again.

Here, both species coexist at all times, but your system is endangered. If you perturb it slightly or have an external threat, one of the two species will go extinct. If one goes extinct, the other will as well. This represents a very fine balance.

## Application to Epidemic Models

Let me mention very quickly that if you take the same equations and set α equal to zero—eliminating the birth term—you get an epidemic model. This is why these equations also describe epidemic models. You do not have births here—you assume the susceptible population has no births—but you have transmission from susceptible to infected.

What x represents is the population that has never been infected (susceptible), while y represents the infected population. What you observe is that the susceptible population decreases as everyone becomes infected. The infected population starts at a low value, peaks, and then slowly decays. Interestingly, you get a non-symmetric curve—it decays very slowly compared to how quickly it rises.

You can compare this with real data, such as COVID-19 hospitalization data from government websites. You see how the curve peaks and then slowly decays. You would not expect it to decay as fast as it rose. With these simple two equations, you can capture essential behavior.

## Extension to Higher Dimensions

Can you extend this to higher dimensions? Yes, and that is the very challenging part. Research-wise, much is still open. Within four dimensions, the subject is really open. I will give you an example from a paper published in 2019 with Professor Owen from the University of Kent.

First, how do you generalize the model? If you have four populations, you can create a graph showing who is the predator, who is the prey, and who is in between. For example, x₃ can be both predator and prey at the same time. x₄ might be only prey, x₁ might be a super predator. You can create different graphs, and to each graph corresponds a unique model.

How do you do that? When you have the model, you have a linear part and a nonlinear part. If you divide by x₁, you can write the equation such that you get a constant term minus terms like γy. You can add more variables: minus a₃x₃, minus a₄x₄, and so on. This is how you extend to higher dimensions based on the graph structure. If there is an arrow between two populations, you define the interaction. If one is the predator of another, you make the term positive for the predator and negative for the prey.

This leads to a community matrix. The easiest case is when all parameters equal one—you get a symmetric matrix. Then you perform the same reasoning: find the stability of the equilibrium points and so on. You can write this abstractly for n interacting populations.

I will show you some three-dimensional and four-dimensional pictures. With this particular structure, we investigated different types of solutions. In most cases, populations become extinct. You plug in constants (for example, all equal to one), and most probably you get populations that decay exponentially with time—extinction.

But there were other cases—the most interesting ones—where all four populations coexist at all times. This is the best scenario if your model represents a banking system or population interactions. That is a good scenario, achievable for certain parameter values.

For these parameters, you see three-dimensional projections (plotting only three of the four variables). You see strange structures like a ribbon. Further from the equilibrium point, the ribbon enlarges. Even further, it becomes very flat. At some point, you get totally chaotic orbits—fully chaotic behavior.

In all four populations, you can find chaotic behavior—chaos in four dimensions. Close to the equilibrium point, it is contained. But going further away, like increasing total energy in a physical system, you observe more chaos.

Another method to detect chaos is the Poincaré section or surface of section. You consider a hyperplane and wait for orbits to intersect it. Every time the orbit intersects, you plot a point numerically. If you see circular structures, these are created from ribbon-style solutions—the chaos is contained and weak. Further from the equilibrium point, you see what chaos really looks like: scattered points without any structure at all.

## Conclusions

The Lotka-Volterra system is an interesting model applied in many different fields. In two dimensions, the original model is fully solvable—you know everything about it. But in four dimensions, you can encounter chaos or order. If you encounter order, at least two out of four populations will go extinct. In the chaotic case, everybody coexists. The good scenario—the chaotic case in four dimensions—is strange enough.

That was all. Thank you for your attention. I am happy to answer any questions.