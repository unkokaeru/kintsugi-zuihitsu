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

### 2x Method of Characteristics (homogeneous, non-homogeneous)

**\[A1, 10 marks\]** Use the method of characteristics to solve the following subject to the boundary condition $u=\left( 1 + \frac{1}{x} \right)^2$ on $y=x$...

$$
x \frac{\delta u(x,y)}{\delta x}
$$

### 2x Change of Variables (xi, eta/tau)

…

### Separation of Variables (with Second-order differential)

…
