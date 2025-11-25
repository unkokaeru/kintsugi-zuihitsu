# **MTH3006** Methods of Mathematical Physics, Cheat Sheet

> [!TIP] Made by William Fayers :)
> Make sure to read this before the exam - I recommend completing a practice test with it so you learn where everything is and can ask if you don't understand something. I might've made mistakes! There's a sudoku at the end in case you finish early, and the cheat sheet is generated based on analysis of past exams and given material. It should also include topics that I don't think will come up, but they theoretically could - these topic explanations will be much more brief.

```
### 4x Fourier transform (piecewise, normal, sine)
### 4x Inverse Laplace transform (partial fractions, convolution theorem)
### 3x Laplace transforms
### 2x Method of characteristics (homogeneous, non-homogeneous)
### 2x Change of variables (xi, eta/tau)
### Separation of variables (with second-order differential)

Add some games, too + some fun decor (photos, frogs?)
```

## Possible Question Topics and Their Explanations

### Fourier Transform (piecewise, Normal, sine)

**\[A1, 10 marks\]** Calculate the Fourier transform of…

$$
f(t)=\begin{cases}
e^-t & \text{when} & t\geq0 \\
0 & \text{when} & t<0
\end{cases}
$$

**\[B1, 10 marks\]** Calculate, where $a>0$ is a real constant, the Fourier transform of…

$$
f(t)=\begin{cases}
e^t & \text{when} & -a<t<a\\
0 & \text{otherwise}
\end{cases}
$$

**\[C1, 10 marks\]** Calculate the Fourier transform of…

$$
f(t)=\begin{cases}
t & \text{when } & 0\leq t\leq {1} \\
0 & \text{otherwise}
\end{cases}
$$

**\[X1, 10 marks\]** Calculate the Fourier sine transform of the function $f(t)=\exp(-t)$, using…

$$
f_{s}(\omega)=\sqrt{ \frac{2}{\pi} }\int_{0}^{\infty}f(t)\sin(\omega t)dt
$$

### Inverse Laplace Transform (partial Fractions, Convolution theorem)

**\[B1, 10 marks\]** Use partial fractions to find the inverse Laplace transform of…

$$
\tilde{f}(s)=\frac{s^2-15s+41}{(s+2)(s-3)^2}
$$

**\[C1, 15 marks\]** Use the convolution theorem to calculate the inverse Laplace transform of…

$$
\tilde{F}(s)=\frac{1}{s^2(s^2-1)}
$$

**\[X3, 15 marks\]** Show that the inverse Laplace transform of the following can be written in the form $f(t)=ae^{3t}+b\cos2t+c\sin2t$, and find the values of the constants $a$, $b$, and $c$…

$$
\tilde{f}(s)=\frac{5s^2-4s-7}{(s-3)(s^2+4)}
$$

### Laplace Transforms

**\[A4, 10 marks\]** Use Laplace transforms to evaluate the integrals…

$$
\int_{0}^{\infty}(\sin 3t)e^{-2t}dt\quad \text{and}\quad \int_{0}^{\infty}(t-\cos(3t))e^{-t}dt
$$

**\[B4, 15 marks\]** Use Laplace transforms to solve the differential equation, given that $x(0)=1$…

$$
\frac{dx(t)}{dt}+3x(t)=e^{-t}
$$

**\[C3, 10 marks\]** Use Laplace transforms, where $a$ is a real, non-zero constant, to evaluate the integrals…

$$
\int_{0}^{\infty} e^{-3t}t^{3}dt\quad \text{and}\quad \int_{0}^{\infty}(\cos(at))e^{-t}dt
$$

**\[X1, 10 marks\]** Find the Laplace transform of…

$$
f(t)=\int_{0}^t u^2-u+e^{-u}du
$$

### Method of Characteristics (homogeneous, non-homogeneous)

**\[A1, 15 marks\]** Use the method of characteristics to solve the following, subject to the boundary condition $u=\left( 1 + \frac{1}{x} \right)^2$ on $y=x$…

$$
x \frac{\partial u(x,y)}{\partial x}+(1+y) \frac{\partial u(x,y)}{\partial y}=0
$$

**\[C4, 15 marks\]** Use the method of characteristics to solve the following, subject to the boundary condition $u=1$ on $x=0$…

$$
\frac{\partial u(x,y)}{\partial x}-x^2 \frac{\partial u(x,y)}{\partial y}=2x^2y
$$

### 2x Change of Variables (xi, eta/tau)

**\[B3, 10 marks\]** Show that making the change of variables $\xi=y+2x$ and $\eta=y-2x$ transforms the differential equation…

$$
\frac{\partial^2u}{\partial x^2}-4 \frac{\partial^2u}{\partial y^2}+ \frac{\partial u}{\partial x}=0 \to 8 \frac{\partial^2u}{\partial \xi \partial \eta}- \frac{\partial u}{\partial \xi}+ \frac{\partial u}{\partial \eta}=0
$$

**\[X4, 15 marks\]** Transform the following differential equation, where $\gamma$ and $D$ are constants, to a coordinate system given by $\xi=x-\gamma t$ and $\tau=t$…

$$
\frac{\partial u}{\partial t}+\gamma\frac{\partial u}{\partial x}=D \frac{\partial^2u}{\partial x^2}
$$

### Separation of Variables (with Second-order differential)

**\[A3, 15 marks\]** Use separation of variables to solve the following, subject to the boundary conditions $u(0,t)=u(2,t)=0$ and $u(x,0)=3\sin(2\pi x)+2\sin(4\pi x)$…

$$
\frac{\partial u(x,t)}{\partial t}=\frac{\partial^2u(x,t)}{\partial x^2}
$$
