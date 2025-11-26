# Mth3006 Cheat Sheet Worked Examples

## Worked Examples

### 1. Fourier Transform (10 marks)

**\[A1, 10 marks\]** Calculate the Fourier transform of…

$$
f(t)=\begin{cases}
e^-t & \text{when} & t\geq0 \\
0 & \text{when} & t<0
\end{cases}
$$

> Similar: [[mth3006 weekly problems 1#Question Three]], [[mth3006 weekly problems 2#Question Two]].

**\[B1, 10 marks\]** Calculate, where $a>0$ is a real constant, the Fourier transform of…

$$
f(t)=\begin{cases}
e^t & \text{when} & -a<t<a\\
0 & \text{otherwise}
\end{cases}
$$

> Similar: [[mth3006 weekly problems 1#Question Three]].

**\[C1, 10 marks\]** Calculate the Fourier transform of…

$$
f(t)=\begin{cases}
t & \text{when } & 0\leq t\leq {1} \\
0 & \text{otherwise}
\end{cases}
$$

> Similar: [[mth3006 weekly problems 1#Question Three]].

**\[X2, 10 marks\]** Calculate the Fourier sine transform of the function $f(t)=\exp(-t)$, using…

$$
f_{s}(\omega)=\sqrt{ \frac{2}{\pi} }\int_{0}^{\infty}f(t)\sin(\omega t)dt
$$

### 2. Inverse Laplace Transform (15 marks)

**\[B2, 15 marks\]** Use partial fractions to find the inverse Laplace transform of…

$$
\tilde{f}(s)=\frac{s^2-15s+41}{(s+2)(s-3)^2}
$$

> Similar: [[mth3006 weekly problems 3#Question Three]] (part two).

**\[X3, 15 marks\]** Show that the inverse Laplace transform of the following can be written in the form $f(t)=ae^{3t}+b\cos2t+c\sin2t$, and find the values of the constants $a$, $b$, and $c$…

$$
\tilde{f}(s)=\frac{5s^2-4s-7}{(s-3)(s^2+4)}
$$

**\[C2, 15 marks\]** Use the convolution theorem to calculate the inverse Laplace transform of…

$$
\tilde{F}(s)=\frac{1}{s^2(s^2-1)}
$$

> Similar: [[mth3006 weekly problems 3#Question Three]] (part one).

### 3. Laplace Transforms (10/15 marks)

**\[A4, 10 marks\]** Use Laplace transforms to evaluate the integrals…

$$
\int_{0}^{\infty}(\sin 3t)e^{-2t}dt\quad \text{and}\quad \int_{0}^{\infty}(t-\cos(3t))e^{-t}dt
$$

> Similar: [[mth3006 weekly problems 3#Question Four]].

**\[C3, 10 marks\]** Use Laplace transforms, where $a$ is a real, non-zero constant, to evaluate the integrals…

$$
\int_{0}^{\infty} e^{-3t}t^{3}dt\quad \text{and}\quad \int_{0}^{\infty}(\cos(at))e^{-t}dt
$$

> Similar: [[mth3006 weekly problems 3#Question Four]].

**\[X1, 10 marks\]** Find the Laplace transform of…

$$
f(t)=\int_{0}^t u^2-u+e^{-u}du
$$

**\[B4, 15 marks\]** Use Laplace transforms to solve the differential equation, given that $x(0)=1$…

$$
\frac{dx(t)}{dt}+3x(t)=e^{-t}
$$

> Similar: [[mth3006 weekly problems 4#Question One]].

### 4. Method of Characteristics (15 marks)

**\[A2, 15 marks\]** Use the method of characteristics to solve the following, subject to the boundary condition $u=\left( 1 + \frac{1}{x} \right)^2$ on $y=x$…

$$
x \frac{\partial u(x,y)}{\partial x}+(1+y) \frac{\partial u(x,y)}{\partial y}=0
$$

> Similar: [[mth3006 weekly problems 5#Question Three]].

**\[C4, 15 marks\]** Use the method of characteristics to solve the following, subject to the boundary condition $u=1$ on $x=0$…

$$
\frac{\partial u(x,y)}{\partial x}-x^2 \frac{\partial u(x,y)}{\partial y}=2x^2y
$$

> Similar: [[mth3006 weekly problems 5#Question One]], [[mth3006 weekly problems 5#Question Two]].

### 5. Change of Variables (10/15 marks)

**\[B3, 10 marks\]** Show that making the change of variables $\xi=y+2x$ and $\eta=y-2x$ transforms the differential equation…

$$
\frac{\partial^2u}{\partial x^2}-4 \frac{\partial^2u}{\partial y^2}+ \frac{\partial u}{\partial x}=0 \to 8 \frac{\partial^2u}{\partial \xi \partial \eta}- \frac{\partial u}{\partial \xi}+ \frac{\partial u}{\partial \eta}=0
$$

> Similar: [[mth3006 weekly problems 5#Question Four]].

**\[X4, 15 marks\]** Transform the following differential equation, where $\gamma$ and $D$ are constants, to a coordinate system given by $\xi=x-\gamma t$ and $\tau=t$…

$$
\frac{\partial u}{\partial t}+\gamma\frac{\partial u}{\partial x}=D \frac{\partial^2u}{\partial x^2}
$$

### 6. Separation of Variables (15 marks)

**\[A3, 15 marks\]** Use separation of variables to solve the following, subject to the boundary conditions $u(0,t)=u(2,t)=0$ and $u(x)=3\sin(2\pi x)+2\sin(4\pi x)$…

$$
\frac{\partial u(x,t)}{\partial t}=\frac{\partial^2u(x,t)}{\partial x^2}
$$

> Similar: [[mth3006 weekly problems 6#Question Three]], [[mth3006 weekly problems 6#Question Four]].
