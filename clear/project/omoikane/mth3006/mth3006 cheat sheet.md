# **MTH3006** Methods of Mathematical Physics, Final Exam Cheat Sheet

## 0. Reference Tables & Foundational Material

### Laplace Transform Table

| $f(t)$ | $\tilde{f}(s)$ | | $f(t)$ | $\tilde{f}(s)$ |
|--------|---------------|---|--------|---------------|
| $1$ | $\frac{1}{s}$ | | $e^{at}$ | $\frac{1}{s-a}$ |
| $t^n$ | $\frac{n!}{s^{n+1}}$ | | $\sin(\omega t)$ | $\frac{\omega}{s^2+\omega^2}$ |
| $t^p$ | $\frac{\Gamma(p+1)}{s^{p+1}}$ | | $\cos(\omega t)$ | $\frac{s}{s^2+\omega^2}$ |
| $\sinh(at)$ | $\frac{a}{s^2-a^2}$ | | $\cosh(at)$ | $\frac{s}{s^2-a^2}$ |
| $y'$ | $s\tilde{y} - y(0)$ | | $y''$ | $s^2\tilde{y} - sy(0) - y'(0)$ |

### Key Proofs & Identities

1. **Gamma function**: $\Gamma(p) = \int_0^{\infty} t^{p-1}e^{-t}dt$. Prove $\Gamma(p+1) = p\Gamma(p)$: IBP with $u=t^p$, $dv=e^{-t}dt$ gives $[-t^pe^{-t}]_0^\infty + p\int_0^\infty t^{p-1}e^{-t}dt = p\Gamma(p)$. Values: $\Gamma(1)=1$, $\Gamma(n+1)=n!$, $\Gamma(\frac{1}{2})=\sqrt{\pi}$.
2. **Double integral lemma**: $\int_a^x \int_a^s f(z)\,dz\,ds = \int_a^x (x-z)f(z)\,dz$. Proof: swap order, region $a≤z≤s≤x$ becomes $z≤s≤x$, so $\int_a^x f(z)[s]_z^x dz$.
3. **Euler**: $e^{i\theta}=\cos\theta+i\sin\theta$, $\sin\theta=\frac{e^{i\theta}-e^{-i\theta}}{2i}$, $\cos\theta=\frac{e^{i\theta}+e^{-i\theta}}{2}$
4. **Leibniz rule**: $\frac{d}{dx}\int_{a(x)}^{b(x)} f(x,z)\,dz = f(x,b)b' - f(x,a)a' + \int_{a}^{b} \frac{\partial f}{\partial x}dz$
5. **Delta function FT**: $\widetilde{\delta(t-a)+\delta(t+a)}(\omega) = \sqrt{\frac{2}{\pi}}\cos(a\omega)$

---

## Question Topics (ordered by Frequency × marks)

### 1. Laplace Transforms — Evaluate Integrals (8 Marks, ~2-3× per paper)

1. **Method**: Match integral with $\tilde{f}(s)=\int_{0}^{\infty}f(t)e^{-st}dt$.
	- Identify $f(t)$ and the value of $s$.
	- Use table: $\mathcal{L}\{f(t)\}|_{s=a}$ gives the integral value.
2. **Example**: $\int_0^\infty e^{-at}(t+\sin t)dt$
	- Set $s=a$, use $\mathcal{L}\{t\}=\frac{1}{s^2}$, $\mathcal{L}\{\sin t\}=\frac{1}{s^2+1}$.
	- Result: $\frac{1}{a^2}+\frac{1}{a^2+1}$.

### 2. Laplace Transforms — Solve ODEs (8-15 marks)

1. **Method**: Take $\mathcal{L}$ of entire equation.
	- Use $\mathcal{L}\{y'\}=s\tilde{y}-y(0)$, $\mathcal{L}\{y''\}=s^2\tilde{y}-sy(0)-y'(0)$.
	- Solve algebraically for $\tilde{y}(s)$.
	- Apply inverse Laplace (partial fractions or convolution).
2. **Example**: $x'+x=2e^{-t}+e^{-2t}$, $x(0)=0$
	- Transform: $(s+1)\tilde{x}=\frac{2}{s+1}+\frac{1}{s+2}$
	- Solve for $\tilde{x}$, then inverse.

### 3. Inverse Laplace Transform — Partial Fractions (8-9 marks)

| Factor type | Decomposition |
|-------------|---------------|
| Linear $(as+b)$ | $\frac{A}{as+b}$ |
| Repeated $(as+b)^n$ | $\sum_{k=1}^{n}\frac{A_k}{(as+b)^k}$ |
| Quadratic | $\frac{As+B}{as^2+bs+c}$ |

1. **Method**: Decompose → find coefficients (cover-up or equate) → invert each term.
	- $\mathcal{L}^{-1}\{\frac{1}{s-a}\}=e^{at}$, $\mathcal{L}^{-1}\{\frac{\omega}{s^2+\omega^2}\}=\sin\omega t$, etc.

### 4. Inverse Laplace Transform — Convolution (8-9 marks)

**When**: $\tilde{f}(s)=F(s)G(s)$ is a product (e.g., $\frac{1}{s^3(s-1)}$).

**Formula**: $\mathcal{L}^{-1}\{FG\}=(f*g)(t)=\int_0^t f(\tau)g(t-\tau)d\tau$

1. **Method**: Find $f=\mathcal{L}^{-1}\{F\}$, $g=\mathcal{L}^{-1}\{G\}$ → compute integral.
	- Note: $f*g=g*f$ (choose easier order).

### 5. PDEs — Separation of Variables (8 Marks, ~1× per paper)

1. **Method**: Assume $u(x,y)=X(x)Y(y)$ (or $u(x,t)=X(x)T(t)$).
	- Substitute into PDE, divide by $XY$ to separate.
	- Each side equals constant $\alpha$ (or $-\lambda$) → two ODEs.
	- Solve ODEs, apply boundary conditions.
2. **2nd-order (heat/wave)**: Get eigenvalues $\lambda_n$, eigenfunctions $X_n$.
	- General solution: $u=\sum C_n X_n T_n$.
3. **Example**: $u_x=\beta u_y$, $u(0,y)=e^{-y}$
	- Separation: $\frac{X'}{X}=\beta\frac{Y'}{Y}=\alpha$ → $X=e^{\alpha x}$, $Y=e^{\alpha y/\beta}$.
	- BC gives $\alpha=-\beta$ → $u=e^{-\beta x-y}$.

### 6. PDEs — Method of Characteristics (8-9 Marks, ~1× per paper)

For $Au_x+Bu_y=C$, write characteristic system $\frac{dx}{A}=\frac{dy}{B}(=\frac{du}{C})$.

1. **Homogeneous** ($C=0$):
	- Solve $\frac{dx}{A}=\frac{dy}{B}$ for constant $\alpha$.
	- General solution $u=f(\alpha)$. Apply BC to find $f$.
2. **Inhomogeneous** ($C≠0$):
	- Also use $\frac{dx}{A}=\frac{du}{C}$ to get relationship with $u$.
	- Apply BC.
3. **Example**: $(x-1)u_x+yu_y=0$, $u=1-\frac{1}{x}$ on $y=x$
	- Chars give $\alpha=\frac{y}{x-1}$.
	- On BC: $\alpha=\frac{x}{x-1}$, $u=\frac{1}{\alpha}$ → solution $u=\frac{x-1}{y}$.

### 7. PDEs — Change of Variables (8 Marks, ~1× per paper)

**Chain rule formulas** for new variables $\xi(x,y)$, $\eta(x,y)$:
- $u_x=u_\xi\xi_x+u_\eta\eta_x$
- $u_{xx}=u_{\xi\xi}\xi_x^2+2u_{\xi\eta}\xi_x\eta_x+u_{\eta\eta}\eta_x^2+u_\xi\xi_{xx}+u_\eta\eta_{xx}$

1. **Method**: Compute partials of $\xi,\eta$ → substitute into PDE → collect coefficients → simplify.
2. **Example**: Show $\xi=y-x$, $\eta=y+2x$ reduces $u_{xx}-u_{xy}-2u_{yy}=0$ to $u_{\xi\eta}=0$.
	- Compute: $\xi_x=-1$, $\xi_y=1$, $\eta_x=2$, $\eta_y=1$.
	- Substitute and simplify.

### 8. Integral Equations — Separable Kernels (8-9 Marks, ~2× per paper)

| Type | Limits | $y$ appears |
|------|--------|-------------|
| Fredholm | Fixed $a,b$ | 2nd kind: inside & outside integral |
| Volterra | Upper limit $x$ | 1st kind: only inside integral |

1. **When**: $K(x,z)=g(x)h(z)$ (or sum of such products).
2. **Method** for $y(x)=f(x)+\lambda\int_a^b g(x)h(z)y(z)dz$:
	- Define $c=\int_a^b h(z)y(z)dz$ (a constant).
	- Then $y(x)=f(x)+\lambda c\cdot g(x)$.
	- Substitute back: $c=\int_a^b h(z)[f(z)+\lambda c\cdot g(z)]dz$. Solve for $c$.
3. **Example**: $y=\cosh x-x+\frac{1}{6}\int_0^1 zy\,dz$
	- Let $c=\int_0^1 zy\,dz$ → $y=\cosh x-x+\frac{c}{6}$.
	- Substitute, solve: $c=\frac{12}{11}(\frac{3}{2}-e^{-1})$.

### 9. Integral Equations — Convert to/from ODE (8-9 marks)

1. **ODE→Integral**: Integrate twice using double integral lemma.
	- E.g., $y''+\omega^2 y=f(x)$, $y(0)=0$, $y'(0)=v_0$:
	- Result: $y=v_0 x+\int_0^x(x-z)f(z)dz-\omega^2\int_0^x(x-z)y(z)dz$ (Volterra).
2. **Integral→ODE**: Differentiate using Leibniz rule.
	- E.g., $y=2x+4\int_0^x(z-x)y\,dz$ → $y'=2-4\int_0^x y\,dz$ → $y''=-4y$.
	- ICs from evaluating at $x=0$: $y(0)=0$, $y'(0)=2$.
3. **Volterra with convolution kernel** $K(t-u)$:
	- Take Laplace → $\tilde{y}=\frac{\tilde{f}}{1-\lambda\tilde{K}}$ → inverse.

### 10. Calculus of Variations — Euler-Lagrange (8-9 Marks, ~1-2× per paper)

**E-L equation**: For $I[y]=\int_{x_1}^{x_2}F(x,y,y')dx$, stationary $y$ satisfies $\frac{\partial F}{\partial y}-\frac{d}{dx}\frac{\partial F}{\partial y'}=0$.

1. **Method**: Compute $\frac{\partial F}{\partial y}$, $\frac{\partial F}{\partial y'}$, $\frac{d}{dx}(\frac{\partial F}{\partial y'})$ → solve ODE → apply BCs.
	- If asked for stationary value: substitute $y(x)$ back into $I$.
2. **Simplified cases**:
	- No $y$ in $F$: $\frac{\partial F}{\partial y'}=C$.
	- No $x$ in $F$: Beltrami identity $F-y'\frac{\partial F}{\partial y'}=C$.
3. **Example**: $I=\int_0^1(3x^2y'+(y')^2)dx$, $y(0)=y(1)=0$
	- $\frac{\partial F}{\partial y}=0$ → E-L gives $y''=-3x$.
	- Solution: $y=\frac{x(1-x^2)}{2}$, $I=-\frac{1}{10}$.

### 11. Calculus of Variations — Constrained (Isoperimetric) (8-9 marks)

1. **Isoperimetric**: Extremize $I=\int F\,dx$ subject to $J=\int G\,dx=\ell$.
	- Apply E-L to $H=F+\lambda G$.
2. **Lagrange multipliers** (for functions $f(x,y)$ with constraint $g=c$):
	- Solve $\nabla f+\lambda\nabla g=0$ and $g=c$.
3. **Example**: min $x^2+y^2$ subject to $y+x^2=1$
	- Equations: $2x+2\lambda x=0$, $2y+\lambda=0$, $y+x^2=1$.
	- Solution: min $\frac{3}{4}$ at $(\pm\frac{1}{\sqrt{2}},\frac{1}{2})$.

### 12. Fourier Transforms (8-9 Marks, ~1-2× per paper)

| Type | Formula | When to use |
|------|---------|-------------|
| Full | $\tilde{f}(\omega) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} f(t)e^{-i\omega t}dt$ | General |
| Sine | $\tilde{f}_s(\omega) = \sqrt{\frac{2}{\pi}}\int_0^{\infty} f(t)\sin(\omega t)dt$ | Odd $f$ on $[0,\infty)$ |
| Cosine | $\tilde{f}_c(\omega) = \sqrt{\frac{2}{\pi}}\int_0^{\infty} f(t)\cos(\omega t)dt$ | Even $f$ on $[0,\infty)$ |

1. **Method**: Write formula → split integral by ranges → evaluate.
	- Use Euler ($e^{-i\omega t}=\cos\omega t - i\sin\omega t$) when $f$ has trig functions.
2. **Special cases** (use method above, with these to determine ranges):
	- **Absolute value**: $|t|=\begin{cases}-t & t<0 \\ t & t\geq 0\end{cases}$ → split at $t=0$.
	- **Sifting theorem**: $\int_{-\infty}^{\infty}\delta(t-a)g(t)dt=g(a)$ → evaluate $e^{-i\omega t}$ at each delta location.

### 13. Green's Functions (8-9 Marks, ~1× per paper)

**Solution form**: For $Ly=f(x)$ with BCs: $y(x)=\int_a^b G(x,\xi)f(\xi)d\xi$.

1. **Properties of $G$**:
	- $LG=0$ for $x≠\xi$.
	- $G$ satisfies homogeneous BCs.
	- $G$ continuous at $\xi$; $\frac{\partial G}{\partial x}$ jumps by $\frac{1}{a_2(\xi)}$ at $x=\xi$.
2. **Construct $G$**:
	- Solve $Ly=0$ for independent solutions $\phi_1,\phi_2$.
	- Write piecewise $G$. Apply BCs. Apply continuity + jump. Solve for coefficients.
3. **If given $G$**: Just compute $y=\int G(x,\xi)f(\xi)d\xi$.
4. **Example**: $y''+y=f$, $y(0)=y'(0)=0$
	- $G=\begin{cases}0&x<\xi\\\sin(x-\xi)&x>\xi\end{cases}$
	- $y=\int_0^x\sin(x-\xi)f(\xi)d\xi$.
