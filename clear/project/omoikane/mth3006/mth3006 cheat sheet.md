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
| **Shift theorem**: $e^{at}f(t)$ | $\tilde{f}(s-a)$ | | e.g. $\frac{1}{(s+1)^2} \to te^{-t}$ | (shift $\frac{1}{s^2}\to t$) |

### Key Proofs & Identities

> **Potential "show that" / "derive" questions**: Γ(p+1)=pΓ(p), double integral lemma, convolution theorems (Laplace & Fourier).

1. **Gamma function**: $\Gamma(p) = \int_0^{\infty} t^{p-1}e^{-t}dt$. Prove $\Gamma(p+1) = p\Gamma(p)$: integration by parts with $u=t^p$, $dv=e^{-t}dt$ gives $[-t^pe^{-t}]_0^\infty + p\int_0^\infty t^{p-1}e^{-t}dt = p\Gamma(p)$. Values: $\Gamma(1)=1$, $\Gamma(n+1)=n!$, $\Gamma(\frac{1}{2})=\sqrt{\pi}$.
2. **Double integral lemma**: $\int_a^x \int_a^s f(z)\,dz\,ds = \int_a^x (x-z)f(z)\,dz$.
	- *Method 1 (Region swap)*: $\underbrace{a \leq z \leq s}_{\text{inner}},\; \underbrace{a \leq s \leq x}_{\text{outer}}$ $\Rightarrow$ $\underbrace{a \leq z \leq x}_{\text{outer}},\; \underbrace{z \leq s \leq x}_{\text{inner}}$ → $\int_a^x (x-z)f(z)\,dz$.
	- *Method 2 (Integration by parts)*: Let $F(s)=\int_a^s f(z)\,dz$, so $F'(s)=f(s)$, $F(a)=0$.
		- $\int_a^x F(s)\,ds = [sF(s)]_a^x - \int_a^x sf(s)\,ds = xF(x) - \int_a^x sf(s)\,ds = \int_a^x (x-s)f(s)\,ds$.
3. **Convolution theorem (Laplace)**: $\mathcal{L}\{f*g\} = \tilde{f}(s)\tilde{g}(s)$.
	- $\mathcal{L}\{f*g\} = \int_0^\infty e^{-st}\left(\int_0^t f(\tau)g(t-\tau)d\tau\right)dt$. Swap order: $\int_0^\infty f(\tau)\left(\int_\tau^\infty e^{-st}g(t-\tau)dt\right)d\tau$.
	- Sub $u=t-\tau$: $\int_0^\infty f(\tau)e^{-s\tau}\left(\int_0^\infty e^{-su}g(u)du\right)d\tau = \tilde{f}(s)\tilde{g}(s)$.
4. **Convolution theorem (Fourier)**: $\widetilde{f*g}(\omega) = \sqrt{2\pi}\,\tilde{f}(\omega)\tilde{g}(\omega)$.
	- Similar: swap order in $\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}e^{-i\omega t}\left(\int_{-\infty}^{\infty}f(\tau)g(t-\tau)d\tau\right)dt$, sub $u=t-\tau$, separate into product.
5. **Euler**: $e^{i\theta}=\cos\theta+i\sin\theta$, $\sin\theta=\frac{e^{i\theta}-e^{-i\theta}}{2i}$, $\cos\theta=\frac{e^{i\theta}+e^{-i\theta}}{2}$
	- Trig: $(\tan x)'=\sec^2 x$, $\int\tan x\,dx = -\ln|\cos x|$
6. **Hyperbolic functions**:
	- Definitions: $\sinh x=\frac{e^x-e^{-x}}{2}$, $\cosh x=\frac{e^x+e^{-x}}{2}$, $\tanh x=\frac{\sinh x}{\cosh x}$, $\text{sech}\,x=\frac{1}{\cosh x}$
	- Identity: $\cosh^2 x - \sinh^2 x = 1$
	- Addition: $\sinh(x\pm y)=\sinh x\cosh y \pm \cosh x\sinh y$, $\cosh(x\pm y)=\cosh x\cosh y \pm \sinh x\sinh y$
	- Derivatives: $(\sinh x)'=\cosh x$, $(\cosh x)'=\sinh x$, $(\tanh x)'=\text{sech}^2 x$
	- Integrals: $\int\tanh x\,dx = \ln\cosh x$
7. **Leibniz rule**: $\frac{d}{dx}\int_{a(x)}^{b(x)} f(x,z)\,dz = f(x,b)b' - f(x,a)a' + \int_{a}^{b} \frac{\partial f}{\partial x}dz$
	- If $f$ doesn't depend on $x$ (FTC): $\frac{d}{dx}\int_0^x g(z)\,dz = g(x)$.
8. **U-substitution**: $\int f(g(x))g'(x)\,dx = \int f(u)\,du$ where $u=g(x)$, $du=g'(x)dx$.
	- For definite integrals: change limits to $u(a)$ and $u(b)$, or back-substitute at end.
	- E.g. $\int_0^1 x e^{x^2}dx$: let $u=x^2$, $du=2x\,dx$ → $\frac{1}{2}\int_0^1 e^u\,du = \frac{1}{2}(e-1)$.
9. **Delta function FT**: $\widetilde{\delta(t-a)+\delta(t+a)}(\omega) = \sqrt{\frac{2}{\pi}}\cos(a\omega)$

---

## Question Topics (ordered by Frequency × marks)

### 1. Laplace Transforms - Evaluate Integrals (8 Marks, ~2-3× per paper)

1. **Method**: Match integral with $\tilde{f}(s)=\int_{0}^{\infty}f(t)e^{-st}dt$.
	- Identify $f(t)$ and the value of $s$.
	- Use table: $\mathcal{L}\{f(t)\}|_{s=a}$ gives the integral value.
2. **Example**: $\int_0^\infty e^{-at}(t+\sin t)dt$
	- Set $s=a$, use $\mathcal{L}\{t\}=\frac{1}{s^2}$, $\mathcal{L}\{\sin t\}=\frac{1}{s^2+1}$.
	- Result: $\boxed{\frac{1}{a^2}+\frac{1}{a^2+1}}$.

### 2. Laplace Transforms - Solve ODEs (8-15 marks)

1. **Method**: Take $\mathcal{L}$ of entire equation.
	- Use $\mathcal{L}\{y'\}=s\tilde{y}-y(0)$, $\mathcal{L}\{y''\}=s^2\tilde{y}-sy(0)-y'(0)$.
	- Solve algebraically for $\tilde{y}(s)$.
	- Apply inverse Laplace (partial fractions or convolution).
2. **Example**: $x'+x=2e^{-t}+e^{-2t}$, $x(0)=0$
	- Transform: $(s+1)\tilde{x}=\frac{2}{s+1}+\frac{1}{s+2}$
	- Solve for $\tilde{x}$, then inverse.

### 3. Inverse Laplace Transform - Partial Fractions (8-9 marks)

| Factor type | Decomposition |
|-------------|---------------|
| Linear $(as+b)$ | $\frac{A}{as+b}$ |
| Repeated $(as+b)^n$ | $\sum_{k=1}^{n}\frac{A_k}{(as+b)^k}$ |
| Quadratic | $\frac{As+B}{as^2+bs+c}$ |

1. **Method**: Decompose → find coefficients (cover-up or equate) → invert each term.
	- **Linearity**: $\mathcal{L}^{-1}\{F+G\} = \mathcal{L}^{-1}\{F\} + \mathcal{L}^{-1}\{G\}$ — handle each fraction separately, don't combine.
	- $\mathcal{L}^{-1}\{\frac{1}{s-a}\}=e^{at}$, $\mathcal{L}^{-1}\{\frac{1}{(s-a)^2}\}=te^{at}$, $\mathcal{L}^{-1}\{\frac{\omega}{s^2+\omega^2}\}=\sin\omega t$, etc.

### 4. Convolution (8-9 marks)

**Formula**: $(f*g)(t)=\int_0^t f(\tau)g(t-\tau)d\tau$

**Properties**:
- $f*g=g*f$ (commutative) - choose whichever order makes the integral easier.
- $f*(g+h)=f*g+f*h$ (distributive) - expand sums before convolving.
- $f(t)*\delta(t-a) = f(t-a)$ (shifting) - delta functions just shift the argument.

1. **For inverse Laplace**: When $\tilde{f}(s)=F(s)G(s)$ is a product, use $\mathcal{L}^{-1}\{FG\}=f*g$.
	- Find $f=\mathcal{L}^{-1}\{F\}$, $g=\mathcal{L}^{-1}\{G\}$ → compute convolution integral.
	- E.g. $\mathcal{L}^{-1}\{\frac{1}{s(s+1)}\}$: $F=\frac{1}{s}\to 1$, $G=\frac{1}{s+1}\to e^{-t}$ → $(1*e^{-t})=\int_0^t e^{-(t-\tau)}d\tau = 1-e^{-t}$.
2. **Direct convolution**: Apply formula directly, use properties to simplify.
	- E.g., $f*[\delta(t-a)+\delta(t+a)] = \boxed{f(t-a)+f(t+a)}$ (distributive then shifting).

### 5. PDEs - Separation of Variables (8 Marks, ~1× per paper)

| Separated ODE              | General Solution                                                    |
| -------------------------- | ------------------------------------------------------------------- |
| $\frac{X'}{X}=g(x)$        | $X=A\exp\left(\int g(x)\,dx\right)$ — integrate directly            |
| $\frac{X''}{X}=0$          | $X=Ax+B$                                                            |
| $\frac{X''}{X}=\lambda>0$  | $X=Ae^{\sqrt{\lambda}x}+Be^{-\sqrt{\lambda}x}$ (or $A\cosh+B\sinh$) |
| $\frac{X''}{X}=-\lambda<0$ | $X=A\cos(\sqrt{\lambda}x)+B\sin(\sqrt{\lambda}x)$                   |

1. **Method**: Assume $u(x,y)=X(x)Y(y)$ (or $u(x,t)=X(x)T(t)$).
	- Substitute into PDE, divide by $XY$ to separate.
	- Each side equals constant → two ODEs. Solve using table above.
	- Combine: $u = CXY$ (constants from $X$, $Y$ merge into $C$). Apply BC → match functional form to find separation constant, match coefficient to find $C$.
2. **Heat/wave (eigenvalue problems)**: BCs on $X$ determine eigenvalues $\lambda_n$, eigenfunctions $X_n$.
	- Start with $X''+\lambda X=0$ → $X=A\cos(\sqrt{\lambda}x)+B\sin(\sqrt{\lambda}x)$.
	- Apply 1st BC (e.g., $X(0)=0$ → $A=0$).
	- Apply 2nd BC (e.g., $X(L)=0$ → $\sin(\sqrt{\lambda}L)=0$ → $\sqrt{\lambda}L=n\pi$).
	- Result: $\lambda_n=\left(\frac{n\pi}{L}\right)^2$, $X_n=\sin\frac{n\pi x}{L}$.
	- General solution: $u=\sum C_n X_n T_n$. Find $C_n$ via orthogonality/Fourier.
3. **Example**: $u_x=\beta u_y$, $u(0,y)=e^{-y}$
	- Separation: $\frac{X'}{X}=\beta\frac{Y'}{Y}=\alpha$ → $X=Ae^{\alpha x}$, $Y=Be^{\alpha y/\beta}$ → $u=Ce^{\alpha x + \alpha y/\beta}$.
	- Apply BC: $u(0,y)=Ce^{\alpha y/\beta}=e^{-y}$ → $C=1$, $\alpha/\beta=-1$ → $\boxed{u=e^{-\beta x-y}}$.

### 6. PDEs - Method of Characteristics (8-9 Marks, ~1× per paper)

For $Au_x+Bu_y=C$, write characteristic system $\frac{dx}{A}=\frac{dy}{B}(=\frac{du}{C})$.

1. **Homogeneous** ($C=0$):
	- Solve $\frac{dx}{A}=\frac{dy}{B}$ → cross-multiply, integrate both sides: $\int\frac{1}{A}dx = \int\frac{1}{B}dy + c$.
	- Rearrange to $\alpha(x,y)=c$ (the constant of integration becomes the characteristic constant).
	- General solution: $u=f(\alpha)$ for arbitrary $f$.
	- **Find $f$**: On BC curve, compute $\alpha$ and $u$ both in terms of one variable (say $x$).
		- Rearrange to get that variable in terms of $\alpha$ → substitute into $u$ → gives $f(\alpha)$.
		- Substitute back: $u = f\left(\alpha(x,y)\right)$.
2. **Inhomogeneous** ($C\neq 0$):
	- Get $\alpha(x,y)=c_1$ from $\frac{dx}{A}=\frac{dy}{B}$ (same as homogeneous).
	- Also solve $\frac{dx}{A}=\frac{du}{C}$ → integrate: $\int\frac{1}{A}dx = \int\frac{1}{C}du + c_2$ → rearrange to $\beta(x,u)=c_2$.
	- General solution: $c_2 = g(c_1)$ → $\beta = g(\alpha)$ for arbitrary $g$.
	- **Find $g$**: On BC curve, compute $\alpha$ and $\beta$ both in terms of one variable → invert to get $g$.
3. **Example**: $u_t+e^{-t}u_x=0$, $u=e^{-x}$ on $t=0$
	- Chars: $\frac{dt}{1}=\frac{dx}{e^{-t}}$ → $dx=e^{-t}dt$ → $x=-e^{-t}+c$ → $\alpha=x+e^{-t}$.
	- General: $u=f(\alpha)$.
	- BC ($t=0$): $\alpha=x+1$, $u=e^{-x}$. Rearrange: $x=\alpha-1$ → $u=e^{-(\alpha-1)}=e^{1-\alpha}$ → $f(\alpha)=e^{1-\alpha}$.
	- Final: $u=f(x+e^{-t})=\boxed{e^{1-x-e^{-t}}}$.

### 7. PDEs - Change of Variables (8 Marks, ~1× per paper)

**Chain rule formulas** for new variables $\xi(x,y)$, $\eta(x,y)$:
- $u_x=u_\xi\xi_x+u_\eta\eta_x$, $\quad u_y=u_\xi\xi_y+u_\eta\eta_y$
- $u_{xx}=u_{\xi\xi}\xi_x^2+2u_{\xi\eta}\xi_x\eta_x+u_{\eta\eta}\eta_x^2 \;(+u_\xi\xi_{xx}+u_\eta\eta_{xx}$ if $\xi,\eta$ nonlinear$)$
- $u_{yy}=u_{\xi\xi}\xi_y^2+2u_{\xi\eta}\xi_y\eta_y+u_{\eta\eta}\eta_y^2$
- $u_{xy}=u_{\xi\xi}\xi_x\xi_y+u_{\xi\eta}(\xi_x\eta_y+\xi_y\eta_x)+u_{\eta\eta}\eta_x\eta_y$

1. **Method**: Compute partials of $\xi,\eta$ → substitute into PDE → collect coefficients → simplify.
2. **Example**: Show $\xi=y-x$, $\eta=y+2x$ reduces $u_{xx}-u_{xy}-2u_{yy}=0$ to $u_{\xi\eta}=0$.
	- Compute: $\xi_x=-1$, $\xi_y=1$, $\eta_x=2$, $\eta_y=1$.
	- Substitute and simplify.

### 8. Integral Equations - Separable Kernels (8-9 Marks, ~2× per paper)

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
	- Substitute, solve: $\boxed{c=\frac{12}{11}(\frac{3}{2}-e^{-1})}$.

### 9. Integral Equations - Convert to/from ODE (8-9 marks)

1. **ODE→Integral**: Integrate twice, apply double integral lemma (see section 0.2).
	- Use dummy variables ($s$, $t$, $z$) for integration; original variable ($x$) stays as the limit.
	- E.g., $y''+\omega^2 y=f(x)$, $y(0)=0$, $y'(0)=v_0$:
	- Rearrange: $y'' = f(x) - \omega^2 y$.
	- Integrate ($x \to s$): $[y']_0^x = \int_0^x f(s)\,ds - \omega^2\int_0^x y(s)\,ds$ → $y' = v_0 + \int_0^x f(s)\,ds - \omega^2\int_0^x y(s)\,ds$.
	- Integrate again ($x \to t$): $y = v_0 x + \int_0^x\int_0^t f(s)\,ds\,dt - \omega^2\int_0^x\int_0^t y(s)\,ds\,dt$.
	- Apply lemma: $\boxed{y = v_0 x + \int_0^x(x-z)f(z)\,dz - \omega^2\int_0^x(x-z)y(z)\,dz}$ (Volterra).
2. **Integral→ODE**: Differentiate using Leibniz rule (see section 0.4).
	- E.g., $y=2x+4\int_0^x(z-x)y(z)\,dz$:
	- Leibniz: $y' = 2 + 4\left[\underbrace{(x-x)y(x)\cdot 1}_{=0} + \int_0^x \frac{\partial}{\partial x}(z-x)y(z)\,dz\right] = 2 - 4\int_0^x y(z)\,dz$.
	- Differentiate again: $y'' = -4y(x)$ → $\boxed{y'' + 4y = 0}$.
	- ICs: evaluate original equations at $x=0$ → $y(0)=0$, $y'(0)=2$.
3. **Volterra with convolution kernel** $K(x-z)$:
	- Form: $y(x) = f(x) + \lambda\int_0^x K(x-z)y(z)\,dz$ — note integral is convolution $K*y$.
	- Take Laplace: $\tilde{y} = \tilde{f} + \lambda\tilde{K}\tilde{y}$ → rearrange: $\tilde{y}(1-\lambda\tilde{K}) = \tilde{f}$.
	- Solve: $\tilde{y} = \frac{\tilde{f}}{1-\lambda\tilde{K}}$ → inverse Laplace to get $y(x)$.

### 10. Calculus of Variations - Euler-Lagrange (8-9 Marks, ~1-2× per paper)

**E-L equation**: For $I[y]=\int_{x_1}^{x_2}F(x,y,y')dx$, stationary $y$ satisfies $\frac{\partial F}{\partial y}-\frac{d}{dx}\frac{\partial F}{\partial y'}=0$.

1. **Method**: Compute $\frac{\partial F}{\partial y}$, $\frac{\partial F}{\partial y'}$, $\frac{d}{dx}(\frac{\partial F}{\partial y'})$ → solve ODE → apply BCs.
	- If asked for stationary value: substitute $y(x)$ back into $I$.
2. **Simplified cases** (reduce to 1st-order ODE):
	- **No $y$ in $F$**: $\frac{\partial F}{\partial y}=0$ so $\frac{\partial F}{\partial y'}=C$ → solve for $y'$ → integrate.
	- **No $x$ in $F$**: Beltrami identity $F-y'\frac{\partial F}{\partial y'}=C$ → solve for $y'$.
3. **Example**: $I=\int_0^1(3x^2y'+(y')^2)dx$, $y(0)=y(1)=0$
	- No $y$ in $F$ → use $\frac{\partial F}{\partial y'}=3x^2+2y'=C$.
	- Solve: $y'=\frac{C-3x^2}{2}$ → integrate → apply BCs → $y=\frac{x(1-x^2)}{2}$, $\boxed{I=-\frac{1}{10}}$.

### 11. Calculus of Variations - Constrained (Isoperimetric) (8-9 marks)

1. **Isoperimetric**: Extremize $I=\int F\,dx$ subject to $J=\int G\,dx=\ell$.
	- Apply E-L to $H=F+\lambda G$.
2. **Lagrange multipliers** (for functions $f(x,y)$ with constraint $g=c$):
	- Solve $\nabla f+\lambda\nabla g=0$ and $g=c$.
3. **Example**: min $x^2+y^2$ subject to $y+x^2=1$
	- Equations: $2x+2\lambda x=0$, $2y+\lambda=0$, $y+x^2=1$.
	- Solution: $\boxed{\min = \frac{3}{4}}$ at $(\pm\frac{1}{\sqrt{2}},\frac{1}{2})$.

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

**Solution form**: For $Ly=f(x)$ with BCs: $y(x)=\int_a^b G(x,z)f(z)\,dz$ where $z$ is dummy variable.
- **Limits**: Use domain from BCs. If $G=0$ for $x<z$, integral reduces to $\int_a^x$ (only $z<x$ contributes).

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
