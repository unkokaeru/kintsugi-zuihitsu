Absolutely! Here's the full expanded MTH3006 cheat sheet in markdown, with all methods clearly explained, formula reminders, and worked exam-type solutions, plus strategic tips, as requested.

***

# **MTH3006 Methods of Mathematical Physics – Cheat Sheet**

> **By William Fayers :)**
> Read before the exam, and use with a practice paper to learn what's in here.
> If you spot a mistake, let me know!
> (Sudoku/game ideas: frog emoji, maths doodles…)

***

## **Laplace Transform Table**

```

| Function $$ f(t) $$          | Transform $$ \tilde{F}(s) $$         |
|------------------------------|---------------------------------------|
| $$ 1 $$                      | $$ \frac{1}{s} $$                     |
| $$ t $$                      | $$ \frac{1}{s^2} $$                   |
| $$ t^n $$                    | $$ \frac{n!}{s^{n+1}} $$              |
| $$ e^{at} $$                 | $$ \frac{1}{s-a} $$                   |
| $$ t e^{at} $$               | $$ \frac{1}{(s-a)^2} $$               |
| $$ \sin(at) $$               | $$ \frac{a}{s^2+a^2} $$               |
| $$ \cos(at) $$               | $$ \frac{s}{s^2+a^2} $$               |
| $$ \sinh(at) $$              | $$ \frac{a}{s^2-a^2} $$               |
| $$ \cosh(at) $$              | $$ \frac{s}{s^2-a^2} $$               |
```

**Properties:**
- **Linearity:**

$$
 \mathcal{L}\{af(t) + bg(t)\} = a\tilde{F}(s) + b\tilde{G}(s) 
$$

- **First derivative:**

$$
 \mathcal{L}\{f'(t)\} = s\tilde{F}(s) - f(0) 
$$

- **Second derivative:**

$$
 \mathcal{L}\{f''(t)\} = s^2\tilde{F}(s) - s f(0) - f'(0) 
$$

- **Integration:**

$$
 \mathcal{L}\left\{\int_0^t f(\tau)d\tau\right\} = \frac{\tilde{F}(s)}{s} 
$$

- **Convolution:**

$$
 \mathcal{L}\{f * g\} = \tilde{F}(s) \cdot \tilde{G}(s) 
$$

***

## **Fourier Transform Table**

- **Definition:** 

$$
 F(\omega) = \int_{-\infty}^{\infty} f(t)e^{-i\omega t} dt 
$$

- **Inverse:** 

$$
 f(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega)e^{i\omega t} d\omega 
$$

- **Sine Transform:** 

$$
 F_s(\omega) = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(t)\sin(\omega t) dt 
$$

- **Cosine Transform:** 

$$
 F_c(\omega) = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(t)\cos(\omega t) dt 
$$

**Properties:**
- **Linearity:**

$$
 \mathcal{F}\{af(t) + bg(t)\} = aF(\omega) + bG(\omega) 
$$

- **Time shift:**

$$
 \mathcal{F}\{f(t-t_0)\} = e^{-i\omega t_0} F(\omega) 
$$

- **Derivative:**

$$
 \mathcal{F}\{f'(t)\} = i\omega F(\omega) 
$$

- **Convolution:**

$$
 \mathcal{F}\{f * g\} = F(\omega) G(\omega) 
$$

***

## **Worked Examples & Methods**

***

### **1. Fourier Transform (Exam Style)**

#### **Example [A1]**

Calculate the Fourier Transform of

$$
 f(t) = \begin{cases} e^{-t}, & t \geq 0 \\ 0, & t < 0 \end{cases} 
$$

**Solution:**

$$
 F(\omega) = \int_0^\infty e^{-t}e^{-i\omega t} dt = \int_0^\infty e^{-(1 + i\omega) t} dt 
$$  

$$
 = \frac{1}{1 + i\omega} 
$$  

Rationalise denominator: Multiply top and bottom by

$$
 1 - i\omega 
$$:  
$$

 F(\omega) = \frac{1 - i\omega}{1 + \omega^2}

$$

#### **Example [B1]**

Calculate Fourier Transform for  
$$

 f(t) = \begin{cases} e^t, & -a < t < a \\ 0, & \text{otherwise} \end{cases}

$$

**Solution:**  
$$

 F(\omega) = \int_{-a}^{a} e^t e^{-i\omega t} dt = \int_{-a}^a e^{(1 - i\omega)t} dt

$$  
$$

 = \frac{e^{a(1 - i\omega)} - e^{-a(1 - i\omega)}}{1 - i\omega}

$$

#### **Example [C1]**

Calculate Fourier Transform for  
$$

 f(t) = \begin{cases} t, & 0 \leq t \leq 1 \\ 0, & \text{otherwise} \end{cases}

$$

**Solution:**  
$$

 F(\omega) = \int_0^1 t e^{-i\omega t} dt

$$  
Integration by parts:  
Let
$$

 u = t

$$,
$$

 dv = e^{-i\omega t} dt

$$.  
$$

 F(\omega) = \frac{1 - e^{-i\omega}[1 + i\omega]}{\omega^2}

$$

#### **Example [X1 - Sine Transform]**

Calculate Fourier sine transform of
$$

 f(t) = e^{-t}

$$:

$$

 F_s(\omega) = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} e^{-t} \sin(\omega t) dt
= \sqrt{\frac{2}{\pi}} \cdot \frac{\omega}{1 + \omega^2}

$$

***

### **2. Inverse Laplace Transform**

#### **A. Partial Fractions**

**Key formulas:**
- 
$$ \mathcal{L}^{-1}\{1/(s-a)\} = e^{at} 
$$

$$ \mathcal{L}^{-1}\{1/(s-a)^2\} = te^{at} 
$$

$$ \mathcal{L}^{-1}\{s/(s^2+a^2)\} = \cos(at) 
$$

$$ \mathcal{L}^{-1}\{a/(s^2+a^2)\} = \sin(at) 
$$

**Example [B2]:**

Find inverse Laplace of

$$ \tilde{f}(s) = \frac{s^2-15s+41}{(s+2)(s-3)^2} 
$$

**Solution:**
Decompose:

$$ \tilde{f}(s) = \frac{3}{s+2} - \frac{2}{s-3} + \frac{1}{(s-3)^2} 
$$  

Apply transform:

$$ f(t) = 3e^{-2t} - 2e^{3t} + t e^{3t} = 3e^{-2t} + (t-2) e^{3t} 
$$

***

#### **B. Complex Roots**

**Example [X3]:**

Find inverse Laplace of

$$ \tilde{f}(s) = \frac{5s^2-4s-7}{(s-3)(s^2 + 4)} 
$$

Decompose:

$$ \tilde{f}(s) = \frac{2}{s-3} + \frac{3s+5}{s^2+4} 
$$  

Apply transform:

$$ f(t) = 2e^{3t} + 3\cos(2t) + \frac{5}{2}\sin(2t) 
$$

***

#### **C. Convolution Theorem**

If

$$ \tilde{F}(s) = F(s) G(s) 
$$, then
$$ f(t) = \int_0^t f(\tau) g(t-\tau) d\tau 
$$

**Example [C2]:**

$$ \tilde{F}(s) = \frac{1}{s^2(s^2-1)} = \frac{1}{s^2} \times \frac{1}{s^2-1} 
$$

Inverse Laplace:

$$ \mathcal{L}^{-1}\{1/s^2\} = t 
$$

$$ \mathcal{L}^{-1}\{1/(s^2-1)\} = \sinh t 
$$

Thus final answer:

$$ f(t) = \sinh t - t 
$$

***

### **3. Laplace Transforms**

#### **A. Evaluating Integrals**

**Example [A4]:**

$$ \int_{0}^{\infty} \sin(3t)e^{-2t} dt = \mathcal{L}\{\sin(3t)\}|_{s=2} = \frac{3}{13} 
$$  

$$ \int_{0}^{\infty} (t-\cos(3t))e^{-t} dt = 1 - \frac{1}{10} = \frac{9}{10} 
$$  

(Since

$$ \mathcal{L}\{t\}|_{s=1} = 1 
$$, 
$$ \mathcal{L}\{\cos(3t)\}|_{s=1} = 1/10 
$$)

***

#### **B. Further Integrals**

**Example [C3]:**

For real constant 
$$ a 
$$:
- 
$$ \int_{0}^{\infty} e^{-3t} t^3 dt = \frac{2}{27} 
$$

$$ \int_{0}^{\infty} \cos(at) e^{-t} dt = \frac{1}{1+a^2} 
$$

***

#### **C. Laplace of an Integral**

**Example [X1]:**
Find Laplace transform of

$$ f(t) = \int_0^t (u^2-u+e^{-u}) du 
$$:

Property: 
$$ \mathcal{L}\left\{ \int_0^t g(u) du \right\} = \frac{G(s)}{s} 
$$  

So:

$$ G(s) = \frac{2}{s^3} - \frac{1}{s^2} + \frac{1}{s+1} 
$$  

Final answer:

$$ F(s) = \frac{2}{s^4} - \frac{1}{s^3} + \frac{1}{s(s+1)} 
$$

***

#### **D. Solving Differential Equations**

**Example [B4]:**
Solve

$$ \frac{dx}{dt} + 3x = e^{-t},\, x(0)=1 
$$:

Take Laplace:  
$$ s X(s) - 1 + 3 X(s) = \frac{1}{s+1} \implies X(s) = \frac{s+2}{(s+3)(s+1)} 
$$  

Partial fractions:

$$ X(s) = \frac{1/2}{s+3} + \frac{1/2}{s+1} 
$$  

Inverse transform:

$$ x(t) = \frac{1}{2}e^{-3t} + \frac{1}{2}e^{-t} 
$$

***

### **4. Method of Characteristics**

**General form:**
For

$$ a(x,y)u_x + b(x,y)u_y = c(x,y,u) 
$$:

1. Set up equations:  
   
$$ \frac{dx}{ds} = a(x,y) 
$$

$$ \frac{dy}{ds} = b(x,y) 
$$

$$ \frac{du}{ds} = c(x,y,u) 
$$

1. Solve ODEs.
2. Eliminate parameter

$$ s 
$$.  
4. Apply boundary conditions and write
$$

 u(x,y) $$.

**Example [A2]:**

$$
 x\,u_x + (1+y)u_y = 0,\, u=\left(1+\frac{1}{x}\right)^2 
$$ on
$$

 y=x

$$:

Along characteristics:  
$$

 u(x, y) = \left( \frac{x+y+1}{x} \right)^2

$$

***

**Example [C4]:**
$$

 u_x - x^2 u_y = 2x^2y,\, u=1

$$ on
$$

 x=0

$$:

Try undetermined coefficients:
$$

 u(x, y) = 1 + \frac{2}{3}x^{3}y + \frac{1}{9}x^{6}

$$

***

### **5. Change of Variables**

Find how derivatives transform under new coordinates (chain rule).

**Example [B3]:**
Show
$$

 \xi = y+2x,\, \eta = y-2x

$$:

Given
$$

 u_{xx} - 4u_{yy} + u_x = 0

$$
becomes
$$

 8u_{\xi \eta} - u_\xi + u_\eta = 0

$$

***

**Example [X4]:**

$$

 u_t + \gamma u_x = D u_{xx}

$$ under
$$

 \xi = x-\gamma t,\, \tau = t

$$:

Transformed equation:  
$$

 u_\tau = D u_{\xi\xi}

$$

***

### **6. Separation of Variables**

**For Heat Equation**:  
$$

 u_t = u_{xx},\, u(0,t) = u(2,t) = 0,\, u(x) = 3\sin(2\pi x) + 2\sin(4\pi x)

$$

Eigenfunctions:  
$$

 X_n(x) = \sin(n\pi x / 2)

$$
Eigenvalues:  
$$

 \lambda_n = (n\pi/2)^2

$$
General solution:  
$$

 u(x, t) = \sum B_n \sin(n\pi x/2) e^{-\lambda_n t}

$$  
Given initial condition, only
$$

 n=2,4

$$ are nonzero.

So:
$$

 u(x,t) = 3\sin(2\pi x) e^{-4\pi^2 t} + 2 \sin(4\pi x) e^{-16\pi^2 t}

$$

***

## **Integrating Factor (First Order ODEs) Method**

Given
$$

 \frac{dy}{dx} + P(x) y = Q(x)

$$:

1. Compute integrating factor:
$$

 \mu(x) = e^{\int P(x)dx}

$$
2. Multiply whole equation by
$$

 \mu(x)

$$  
3. The LHS becomes
$$

 \frac{d}{dx}[\mu(x) y]

$$
4. Solve by integrating both sides.

**Example:**
$$

 \frac{dy}{dx} + 2y = x

$$  
$$

 \mu(x) = e^{2x}

$$  
$$

 y = \frac{x}{2} - \frac{1}{4} + Ce^{-2x}

$$

***

## **Second Order ODEs**

General:
$$

 ay'' + by' + cy = f(x)

$$

**Complementary solution** (homogeneous part):
- Auxiliary equation:
$$

 ak^2 + bk + c = 0

$$
- If roots are real and distinct:
$$

 y_{cf} = Ae^{k_1x} + Be^{k_2x}

$$
- If roots repeated:
$$

 y_{cf} = (A + Bx)e^{kx}

$$
- If roots complex:
$$

 y_{cf} = e^{\alpha x}(A \cos \beta x + B \sin \beta x)

$$

**Particular solution:**  
- If rhs is polynomial, try another polynomial  
- If rhs is
$$

 e^{ax}

$$, try
$$

 Ae^{ax}

$$  
- If rhs is trig (
$$

 \sin(ax), \cos(ax)

$$), try
$$

 Asin(ax) + Bcos(ax)

$$  
- If this is part of
$$

 y_{cf}

$$, multiply guess by
$$

 x

$$!

***

## **Integration By Parts**
$$

\int u\, dv = uv - \int v\, du

$$
Common: 
$$ u = t, dv = e^{at} dt 
$$ or 
$$ u = t, dv = \sin(at) dt 
$$

***

## **Standard Integrals**

$$ \int e^{ax} dx = \frac{e^{ax}}{a} + C 
$$

$$ \int \sin(ax) dx = -\frac{\cos(ax)}{a} + C 
$$

$$ \int \cos(ax) dx = \frac{\sin(ax)}{a} + C
$$

$$
 \int \sinh(ax) dx = \frac{\cosh(ax)}{a} + C 
$$

$$
 \int \cosh(ax) dx = \frac{\sinh(ax)}{a} + C 
$$

$$
 \int e^{-at}\sin(bt) dt = \frac{e^{-at}[-a\sin(bt) - b\cos(bt)]}{a^2+b^2} + C 
$$

$$
 \int e^{-at}\cos(bt) dt = \frac{e^{-at}[-a\cos(bt) + b\sin(bt)]}{a^2+b^2} + C 
$$

***

## **Tips & Tricks**

- For Laplace and Fourier questions, always write out the transform formula first.
- Highlight boundary and initial conditions before starting PDE/ODE.
- If you need to use integration by parts: choose $$ u

$$ so derivative gets simpler!
- Rationalise denominators with conjugates for Fourier answers.
- Use partial fractions for Laplace inverses with complicated denominators.
- For convolution, integrate by parts and watch out for signs.
- In separation of variables, match initial condition to Fourier series terms.  

***

**Good luck! 🐸 Ask if you need any extra quick games, sudoku, or last-minute mnemonics.**
