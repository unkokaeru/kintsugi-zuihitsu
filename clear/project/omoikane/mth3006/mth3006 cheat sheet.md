# **MTH3006** Methods of Mathematical Physics, Final Exam Cheat Sheet

> [!TIP] **Made by William Fayers**
> Good luck and have fun!

## 0. Reference Tables & Foundational Material

### Laplace Transform Table

| $f(t)$ | $\tilde{f}(s)$ | | $f(t)$ | $\tilde{f}(s)$ |
|--------|---------------|---|--------|---------------|
| $1$ | $\frac{1}{s}$ | | $e^{at}$ | $\frac{1}{s-a}$ |
| $t^n$ | $\frac{n!}{s^{n+1}}$ | | $\sin(\omega t)$ | $\frac{\omega}{s^2+\omega^2}$ |
| $t^p$ | $\frac{\Gamma(p+1)}{s^{p+1}}$ | | $\cos(\omega t)$ | $\frac{s}{s^2+\omega^2}$ |
| $\sinh(at)$ | $\frac{a}{s^2-a^2}$ | | $\cosh(at)$ | $\frac{s}{s^2-a^2}$ |
| $y'$ | $s\tilde{y} - y(0)$ | | $y''$ | $s^2\tilde{y} - sy(0) - y'(0)$ |

### Fourier Transform Definitions

| Full | $\tilde{f}(\omega) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} f(t)e^{-i\omega t}dt$ |
|------|---------|
| Sine (odd) | $\tilde{f}_s(\omega) = \sqrt{\frac{2}{\pi}}\int_0^{\infty} f(t)\sin(\omega t)dt$ |
| Cosine (even) | $\tilde{f}_c(\omega) = \sqrt{\frac{2}{\pi}}\int_0^{\infty} f(t)\cos(\omega t)dt$ |

### Key Proofs & Identities

1. **Gamma function**: $\Gamma(p) = \int_0^{\infty} t^{p-1}e^{-t}dt$. Prove $\Gamma(p+1) = p\Gamma(p)$: IBP with $u=t^p$, $dv=e^{-t}dt$ gives $[-t^pe^{-t}]_0^\infty + p\int_0^\infty t^{p-1}e^{-t}dt = p\Gamma(p)$. Values: $\Gamma(1)=1$, $\Gamma(n+1)=n!$, $\Gamma(\frac{1}{2})=\sqrt{\pi}$.
2. **Double integral lemma**: $\int_a^x \int_a^s f(z)\,dz\,ds = \int_a^x (x-z)f(z)\,dz$. Proof: swap order, region $a≤z≤s≤x$ becomes $z≤s≤x$, so $\int_a^x f(z)[s]_z^x dz$.
3. **Euler**: $e^{i\theta}=\cos\theta+i\sin\theta$, $\sin\theta=\frac{e^{i\theta}-e^{-i\theta}}{2i}$, $\cos\theta=\frac{e^{i\theta}+e^{-i\theta}}{2}$
4. **Leibniz rule**: $\frac{d}{dx}\int_{a(x)}^{b(x)} f(x,z)\,dz = f(x,b)b' - f(x,a)a' + \int_{a}^{b} \frac{\partial f}{\partial x}dz$
5. **Delta function FT**: $\text{FT}\{\delta(t-a)+\delta(t+a)\} = \sqrt{\frac{2}{\pi}}\cos(a\omega)$

---

## Question Topics (ordered by Frequency × marks)

### 1. Laplace Transforms — Evaluate Integrals (8 Marks, ~2-3× per paper)

1. Match integral with $\tilde{f}(s)=\int_{0}^{\infty}f(t)e^{-st}dt$ to identify $f(t)$ and $s$.
2. Use table: $\mathcal{L}\{f(t)\}|_{s=a}$ gives the integral value.
3. Example: $\int_0^\infty e^{-at}(t+\sin t)dt = \frac{1}{a^2}+\frac{1}{a^2+1}$ (set $s=a$, use $\mathcal{L}\{t\}=\frac{1}{s^2}$, $\mathcal{L}\{\sin t\}=\frac{1}{s^2+1}$).

### 2. Laplace Transforms — Solve ODEs (8-15 marks)

1. Take $\mathcal{L}$ of entire equation using $\mathcal{L}\{y'\}=s\tilde{y}-y(0)$, $\mathcal{L}\{y''\}=s^2\tilde{y}-sy(0)-y'(0)$.
2. Solve algebraically for $\tilde{y}(s)$.
3. Apply inverse Laplace (partial fractions or convolution).
4. Example: $x'+x=2e^{-t}+e^{-2t}$, $x(0)=0$ → $(s+1)\tilde{x}=\frac{2}{s+1}+\frac{1}{s+2}$ → solve → inverse.

### 3. Inverse Laplace Transform — Partial Fractions (8-9 marks)

1. Decompose: linear $(as+b)→\frac{A}{as+b}$; repeated $(as+b)^n→\sum\frac{A_k}{(as+b)^k}$; quadratic $→\frac{As+B}{as^2+bs+c}$.
2. Find coefficients (cover-up or equate).
3. Invert each term using table: $\mathcal{L}^{-1}\{\frac{1}{s-a}\}=e^{at}$, $\mathcal{L}^{-1}\{\frac{\omega}{s^2+\omega^2}\}=\sin\omega t$, etc.

### 4. Inverse Laplace Transform — Convolution (8-9 marks)

1. When $\tilde{f}(s)=F(s)G(s)$ is a product (e.g., $\frac{1}{s^3(s-1)}$), use convolution.
2. Formula: $\mathcal{L}^{-1}\{FG\}=(f*g)(t)=\int_0^t f(\tau)g(t-\tau)d\tau$.
3. Find $f=\mathcal{L}^{-1}\{F\}$, $g=\mathcal{L}^{-1}\{G\}$, compute integral.
4. Note: $f*g=g*f$ (choose easier order).

### 5. PDEs — Separation of Variables (8 Marks, ~1× per paper)

1. Assume $u(x,y)=X(x)Y(y)$ (or $u(x,t)=X(x)T(t)$).
2. Substitute into PDE, divide by $XY$ to separate.
3. Each side equals constant $\alpha$ (or $-\lambda$) → two ODEs.
4. Solve ODEs, apply boundary conditions.
5. Example: $u_x=\beta u_y$, $u(0,y)=e^{-y}$ → $\frac{X'}{X}=\beta\frac{Y'}{Y}=\alpha$ → $X=e^{\alpha x}$, $Y=e^{\alpha y/\beta}$ → BC gives $\alpha=-\beta$ → $u=e^{-\beta x-y}$.
6. For 2nd-order (heat/wave): get eigenvalues $\lambda_n$, eigenfunctions $X_n$, general solution $u=\sum C_n X_n T_n$.

### 6. PDEs — Method of Characteristics (8-9 Marks, ~1× per paper)

1. For $Au_x+Bu_y=C$, write characteristic system $\frac{dx}{A}=\frac{dy}{B}(=\frac{du}{C})$.
2. **Homogeneous** ($C=0$): Solve $\frac{dx}{A}=\frac{dy}{B}$ for constant $\alpha$. General solution $u=f(\alpha)$. Apply BC to find $f$.
3. **Inhomogeneous** ($C≠0$): Also use $\frac{dx}{A}=\frac{du}{C}$ to get relationship with $u$. Apply BC.
4. Example: $(x-1)u_x+yu_y=0$, $u=1-\frac{1}{x}$ on $y=x$ → chars give $\alpha=\frac{y}{x-1}$ → on BC: $\alpha=\frac{x}{x-1}$, $u=\frac{1}{\alpha}$ → solution $u=\frac{x-1}{y}$.

### 7. PDEs — Change of Variables (8 Marks, ~1× per paper)

1. For new variables $\xi(x,y)$, $\eta(x,y)$, use chain rule: $u_x=u_\xi\xi_x+u_\eta\eta_x$.
2. Second derivatives: $u_{xx}=u_{\xi\xi}\xi_x^2+2u_{\xi\eta}\xi_x\eta_x+u_{\eta\eta}\eta_x^2+u_\xi\xi_{xx}+u_\eta\eta_{xx}$.
3. Substitute all terms into original PDE, collect coefficients, simplify to target form.
4. Example: Show $\xi=y-x$, $\eta=y+2x$ reduces $u_{xx}-u_{xy}-2u_{yy}=0$ to $u_{\xi\eta}=0$. Compute $\xi_x=-1$, $\xi_y=1$, $\eta_x=2$, $\eta_y=1$, substitute.

### 8. Integral Equations — Separable Kernels (8-9 Marks, ~2× per paper)

1. If $K(x,z)=g(x)h(z)$ (or sum of such products), use separable method.
2. For $y(x)=f(x)+\lambda\int_a^b g(x)h(z)y(z)dz$: define $c=\int_a^b h(z)y(z)dz$.
3. Then $y(x)=f(x)+\lambda c\cdot g(x)$.
4. Substitute back: $c=\int_a^b h(z)[f(z)+\lambda c\cdot g(z)]dz$. Solve for $c$.
5. Example: $y=\cosh x-x+\frac{1}{6}\int_0^1 zy\,dz$ → $c=\int_0^1 zy\,dz$, $y=\cosh x-x+\frac{c}{6}$ → substitute, solve $c=\frac{12}{11}(\frac{3}{2}-e^{-1})$.

### 9. Integral Equations — Convert to/from ODE (8-9 marks)

1. **ODE→Integral**: For $y''+\omega^2 y=f(x)$, $y(0)=0$, $y'(0)=v_0$: integrate twice using double integral lemma → $y=v_0 x+\int_0^x(x-z)f(z)dz-\omega^2\int_0^x(x-z)y(z)dz$ (Volterra).
2. **Integral→ODE**: Differentiate using Leibniz rule. Example: $y=2x+4\int_0^x(z-x)y\,dz$ → $y'=2-4\int_0^x y\,dz$ → $y''=-4y$. ICs: $y(0)=0$, $y'(0)=2$.
3. **Volterra with convolution kernel** $K(t-u)$: Take Laplace → $\tilde{y}=\frac{\tilde{f}}{1-\lambda\tilde{K}}$ → inverse.

### 10. Calculus of Variations — Euler-Lagrange (8-9 Marks, ~1-2× per paper)

1. For $I[y]=\int_{x_1}^{x_2}F(x,y,y')dx$, stationary $y$ satisfies: $\frac{\partial F}{\partial y}-\frac{d}{dx}\frac{\partial F}{\partial y'}=0$.
2. **Simplified cases**: (a) No $y$ in $F$: $\frac{\partial F}{\partial y'}=C$. (b) No $x$ in $F$: Beltrami $F-y'\frac{\partial F}{\partial y'}=C$.
3. Compute $\frac{\partial F}{\partial y}$, $\frac{\partial F}{\partial y'}$, $\frac{d}{dx}(\frac{\partial F}{\partial y'})$.
4. Solve resulting ODE, apply BCs.
5. If asked for stationary value: substitute $y(x)$ back into $I$.
6. Example: $I=\int_0^1(3x^2y'+(y')^2)dx$, $y(0)=y(1)=0$ → $\frac{\partial F}{\partial y}=0$, E-L gives $y''=-3x$ → $y=\frac{x(1-x^2)}{2}$, $I=-\frac{1}{10}$.

### 11. Calculus of Variations — Constrained (Isoperimetric) (8-9 marks)

1. Extremize $I=\int F\,dx$ subject to $J=\int G\,dx=\ell$: apply E-L to $H=F+\lambda G$.
2. **Lagrange multipliers** (for functions $f(x,y)$ with constraint $g=c$): solve $\nabla f+\lambda\nabla g=0$ and $g=c$.
3. Example: min $x^2+y^2$ subject to $y+x^2=1$ → $2x+2\lambda x=0$, $2y+\lambda=0$, $y+x^2=1$ → min $\frac{3}{4}$ at $(\pm\frac{1}{\sqrt{2}},\frac{1}{2})$.

### 12. Fourier Transforms (8-9 Marks, ~1-2× per paper)

1. **Piecewise**: Split $\int_{-\infty}^\infty$ into ranges, evaluate each.
2. **Exponential** $e^{-a|t|}$: Split at 0, use $|t|=-t$ for $t<0$, $|t|=t$ for $t>0$.
3. **Delta functions**: Use sifting $\int\delta(t-a)g(t)dt=g(a)$. E.g., $\text{FT}\{\delta(t-a)+\delta(t+a)\}=\sqrt{\frac{2}{\pi}}\cos(a\omega)$.
4. **Sine/Cosine FT**: Use appropriate formula, Euler's identity if $f$ has exponentials.

### 13. Green's Functions (8-9 Marks, ~1× per paper)

1. For $Ly=f(x)$ with BCs, solution is $y(x)=\int_a^b G(x,\xi)f(\xi)d\xi$.
2. **Properties**: (a) $LG=0$ for $x≠\xi$; (b) $G$ satisfies homogeneous BCs; (c) $G$ continuous at $\xi$; (d) $\frac{\partial G}{\partial x}$ jumps by $\frac{1}{a_2(\xi)}$ at $x=\xi$.
3. **Construct**: Solve $Ly=0$ for independent solutions $\phi_1,\phi_2$. Write piecewise $G$. Apply BCs. Apply continuity + jump. Solve for coefficients.
4. **If given $G$**: Just compute $y=\int G(x,\xi)f(\xi)d\xi$.
5. Example: $y''+y=f$, $y(0)=y'(0)=0$ → $G=\begin{cases}0&x<\xi\\\sin(x-\xi)&x>\xi\end{cases}$ → $y=\int_0^x\sin(x-\xi)f(\xi)d\xi$.

---

## Quick Reference

### Integral Equation Types

| Type | Form |
|------|------|
| Fredholm 2nd | $y=f+\lambda\int_a^b Ky\,dz$ |
| Volterra 2nd | $y=f+\lambda\int_a^x Ky\,dz$ |
| Homogeneous | $y=\lambda\int Ky\,dz$ (eigenvalue problem) |

### Decision Tree

| If you see… | Use… |
|---------------|--------|
| $\int_0^\infty f(t)e^{-at}dt$ | Laplace table with $s=a$ |
| First-order PDE | Characteristics or separation |
| Second-order PDE to reduce | Change of variables |
| Find stationary $y(x)$ | Euler-Lagrange (check for simplified form) |
| $y=f+\int K(x,z)y\,dz$ with separable $K$ | Separable kernel method |
| $y=f+\int K(t-u)y\,du$ | Laplace (convolution) |
| Construct $G(x,\xi)$ | Piecewise + continuity + jump |
| Given $G(x,\xi)$ | Integrate $y=\int Gf\,d\xi$ |
