# Mth3006 Weekly Problems 4

## Question One

### Part A

Solve the following initial-value problem using Laplace transforms:

$$
y^{\prime\prime}-y^\prime(t)-6y(t)=0\quad:\quad y(0)=1,y^\prime(0)=-1
$$

#### Solution

$$
\begin{align}
\mathcal{L}[y^{\prime\prime}-y^\prime-6y]&=\mathcal{L}[0] \\
\mathcal{L}[y^{\prime\prime}]-\mathcal{L}[y^\prime]-6\mathcal{L}[y]&=0 \\
(s^2 \tilde{y} - s y(0) - y'(0))-(s \tilde{y} - y(0))-(6 \tilde{y})&=0 \\
s^2 \tilde{y}-s+1-s \tilde{y}+1-6 \tilde{y}&=0 \\
(s^2-s-6) \tilde{y}+2-s&=0 \\
(s^2-s-6) \tilde{y}&=s-2 \\
\tilde{y}&=\frac{s-2}{s^2-s-6} \\
\tilde{y}&=\frac{s-2}{(s+2)(s-3)}=\frac{A}{s+2}+\frac{B}{s-3} \\ \\
&:s-2=A(s-3)+B(s+2) \\
&\implies s-2=(A+B)s+(-3A+2B) \\
&\implies A+B=1,-3A+2B=-2 \\
&\implies A=\frac{4}{5}, B=\frac{1}{5} \\
\tilde{y}&=\frac{1}{5}\left(\frac{4}{s+2}+\frac{1}{s-3}\right) \\
\tilde{y}&=\boxed{\frac{4}{5}e^{ -2t }+ \frac{1}{5}e^{ 3t }}
\end{align}
$$

### Part B

Solve the following initial-value problem using Laplace transforms:

$$
y^{\prime\prime}-2y^\prime(t)+y(t)=0\quad:\quad y(0)=1,y^\prime(0)=-2
$$

#### Solution

…

## Question Two

Referencing the method used to solve the differential equation for under-damped motion (where $\omega^2-\alpha^2>0$), $\frac{d^2x}{dt^2}+2\alpha\frac{dx}{dt}+\omega^2x=0$, start from the formula for $\tilde{x}$ and solve for critically damped ($\omega^2-\alpha^2=0$) and over-damped motion ($\omega^2-\alpha^2<0$).

### Solution

…
