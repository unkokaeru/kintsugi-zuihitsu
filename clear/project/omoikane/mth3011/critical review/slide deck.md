---
marp: true
theme: default
paginate: true
math: katex
size: 16:9
title: "The Ergodicity Problem in Economics — Critical Review"
author: "William Fayers"
footer: "MTH3011 Critical Review · William Fayers"
style: |
  section {
    font-size: 1.55rem;
    padding: 60px 70px;
    color: #1b2230;
  }
  section.lead {
    text-align: center;
    background: linear-gradient(135deg, #1b2838 0%, #2a3f5f 100%);
    color: #f5f5f7;
    justify-content: center;
  }
  section.lead h1 { font-size: 2.8rem; margin-bottom: 0.15em; color: #fff; }
  section.lead h2 { font-size: 1.6rem; font-weight: 400; color: #cfd6e1; border: none; margin-top: 0; }
  section.lead strong { color: #fff; }
  section.lead em { color: #cfd6e1; }
  section.refs { font-size: 1.1rem; }
  section.refs ol { line-height: 1.4; padding-left: 1.2rem; }
  h1, h2 { color: #1b2838; }
  h2 { border-bottom: 2px solid #e3e6ed; padding-bottom: 0.2em; }
  h3 { color: #2a3f5f; margin: 0.2em 0 0.25em 0; }
  ul, ol { line-height: 1.4; }
  .cols-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.8rem;
    margin-top: 0.3rem;
  }
  .cols-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.2rem;
    margin-top: 0.3rem;
  }
  .stat {
    text-align: center;
    padding: 0.9rem 0.5rem;
    background: #f4f4f7;
    border-radius: 8px;
  }
  .stat .big {
    display: block;
    font-size: 2.6rem;
    font-weight: 700;
    color: #1b2838;
    line-height: 1.05;
    margin-bottom: 0.2em;
  }
  .callout {
    background: #eef3fb;
    border-left: 5px solid #2a7ae2;
    padding: 0.7rem 1rem;
    margin-top: 0.9rem;
    border-radius: 4px;
  }
  .verdict {
    background: #fff5d6;
    border-left: 5px solid #d9a500;
    padding: 0.85rem 1.1rem;
    margin-top: 0.9rem;
    border-radius: 4px;
    font-size: 1.5rem;
  }
  table {
    font-size: 1.3rem;
    border-collapse: collapse;
    margin-top: 0.4rem;
  }
  table th, table td {
    padding: 0.35rem 0.8rem;
    border-bottom: 1px solid #d8dce3;
  }
  table th { background: #f4f4f7; text-align: left; }
  blockquote {
    border-left: 5px solid #9aa4b2;
    color: #2a3f5f;
    margin: 0.8rem 0;
    padding-left: 1rem;
  }
---

<!-- _class: lead -->
<!-- _paginate: false -->
<!-- _footer: "" -->

# The Ergodicity Problem in Economics

## A Critical Review of Peters (2019)

**William Fayers**

*Nature Physics* **15**, 1216–1221

---

## Aims & Objectives

1. Understand the paper's core argument about non-ergodicity.
2. Evaluate the mathematical framework and coin-toss model.
3. Assess the Copenhagen experiment's empirical evidence.
4. Examine the economics community's response and rebuttals.
5. Deliver a balanced verdict on the paper's contribution.

---

## Paper Overview & Context

<div class="cols-3">

<div>

### Author

**Ole Peters**

London Mathematical Laboratory

</div><div>

### Journal

**Nature Physics**

Perspective article — not primary research

</div><div>

### Published

**December 2019**

Volume 15, pp. 1216–1221

</div><div>

### Field

**Physics → Economics**

Cross-disciplinary critique

</div><div>

### Self-citation

**~37% of references**

10+ of 27 refs are Peters / LML

</div><div>

### Programme

**Ergodicity Economics**

Ongoing since approximately 2011

</div>

</div>

---

## Core Argument — Ergodicity Explained

An observable is **ergodic** if its *time average* equals its *ensemble average*.

<div class="cols-2">

<div>

### Peters' Coin-toss Gamble

- **Heads:** gain 50% of wealth.
- **Tails:** lose 40% of wealth.

Stake everything, each round.

</div><div>

### The Contradiction

- **+5.0%** ensemble average — looks profitable.
- **−5.3%** time-average growth — leads to ruin.

</div>

</div>

<div class="callout">

Wealth under multiplicative dynamics is **non-ergodic**: the time average does not equal the expectation value.

</div>

---

## The Copenhagen Experiment

<div class="cols-2">

<div>

### Design

- 18 subjects, about **\$150** in real money.
- **312** choices across additive and multiplicative environments.
- Fit parameter $\eta$: 0 = linear, 1 = log utility.

### Result

All 18 subjects shifted toward log utility in the multiplicative condition.

</div><div>

### Methodological Concerns

- Sample size of 18 is very small.
- Stakes were low and lab-based rather than real-world.
- Outcomes were applied at the end, not sequentially — which weakens the time-average argument.

### Citation Concern

Cited as a preprint (arXiv:1906.04652). Later published in *PLOS Computational Biology* (2021) after significant revisions.

</div>

</div>

---

## Strength — Pedagogical Clarity

<div class="cols-2">

<div>

### Clear Writing

Remarkably accessible for a paper spanning physics, mathematics, and economics.

### Powerful Example

The coin-toss gamble makes non-ergodicity immediately concrete and memorable.

</div><div>

### Important Question

Whether economic models properly handle the passage of time is genuinely worth asking.

### Intellectual Honesty

Peters acknowledges his predecessors — the Kelly criterion is not hidden away.

</div>

</div>

> "To his credit, Peters acknowledges his intellectual predecessors — he doesn't pretend the Kelly criterion doesn't exist."

---

## Weakness 1 — Mischaracterisation of EU

<div class="cols-2">

<div>

### Peters Claims

- Expected utility implicitly assumes ergodicity.
- It requires "parallel universes."
- Bernoulli's 1738 paper "contains an error."

</div><div>

### Doctor, Wakker & Wang (2020)

- Expected utility is a **representation theorem** for preference axioms.
- It does *not* require ensembles, multiverses, or time averaging.
- Peters' own Equation 8 itself requires the ergodicity assumption.

</div>

</div>

<div class="callout">

The paper's central critique is directed at a **strawman** version of expected utility — a serious problem for a thesis that depends on expected utility being wrong.

</div>

**Source:** Doctor, Wakker & Wang (2020), *Nature Physics* **16**, 1168.

---

## Weakness 2 — Scope & Novelty

### Historical Lineage

| Year | Who | Contribution |
|------|-----|--------------|
| 1870 | Whitworth | Geometric mean |
| 1956 | Kelly | Growth-rate maximisation |
| 1959 | Latané | Growth-optimal portfolios |
| 2019 | **Peters** | Ergodicity *framing* |

<div class="cols-2">

<div>

### Scope Overreach

Peters extrapolates from a specific critique to claim that "the entire field of economics" has drifted wrong — Doctor, Wakker & Wang call this the **ubiquity fallacy**.

</div><div>

### Novelty Question

Toda (2023) argues that ergodicity economics has **not produced any falsifiable prediction** that differs from standard log-utility theory.

</div>

</div>

---

## Weakness 3 — Thin Empirical Evidence

<div class="cols-3">

<div class="stat">

<span class="big">18</span>

**subjects**

modern studies use far larger samples

</div><div class="stat">

<span class="big">\$150</span>

**lab money**

not real economic stakes

</div><div class="stat">

<span class="big">END</span>

**applied once**

not sequentially realised

</div>

</div>

<div class="callout">

If outcomes are only applied at the end, **there is no time average to test**. The experiment therefore does not test the mechanism Peters says matters.

</div>

**Source:** peer reviewer concerns discussed in Meder et al. (2021), *PLOS Computational Biology*.

---

## Balanced Assessment

<div class="cols-2">

<div>

### What Peters Gets Right

- Time dynamics genuinely matter in economic models.
- Ensemble average is not the same as time average.
- The coin-toss example is pedagogically brilliant.
- The paper opened useful cross-disciplinary dialogue.

</div><div>

### Where Peters Goes Wrong

- Expected utility does not assume ergodicity.
- The Kelly criterion predates this framing by more than 60 years.
- The scope is overstated — one issue does not show that all economics is wrong.
- The empirical evidence is far too thin for the paper's strongest claims.

</div>

</div>

<div class="verdict">

**Verdict:** a genuinely valuable pedagogical contribution wrapped in an overstated polemic. *The insight is real; the revolution is not.*

</div>

---

## Conclusions & Future Work

<div class="cols-2">

<div>

### Key Conclusions

- The mathematical insight about non-ergodicity is sound.
- The claim of a "pernicious error" in all economics is not supported.
- Expected utility does not assume ergodicity, and the growth-rate prescription is not new.

</div><div>

### Future Directions

- Larger experiments with sequential, dynamic stakes.
- Serious engagement with the existing dynamic expected-utility literature.
- Tests of whether ergodicity-economics predictions differ from log-utility theory.

</div>

</div>

> "The most constructive path is collaboration, not competition."
> — Doctor, Wakker & Wang (2020)

---

<!-- _class: refs -->

## References

1. Peters, O. (2019). *The ergodicity problem in economics*. *Nature Physics* **15**, 1216–1221.
2. Doctor, J. N., Wakker, P. P. & Wang, T. T. (2020). *Economists' views on the ergodicity problem*. *Nature Physics* **16**, 1168.
3. Toda, A. A. (2023). *'Ergodicity Economics' is Pseudoscience*. arXiv:2306.03275.
4. Meder, D. et al. (2021). *Ergodicity-breaking reveals time optimal decision making in humans*. *PLOS Computational Biology* **17**(9), e1009217.
5. Kelly, J. L. (1956). *A New Interpretation of Information Rate*. *Bell System Technical Journal* **35**(4), 917–926.

---

<!-- _class: refs -->

## References (cont.)

1. von Neumann, J. & Morgenstern, O. (1944). *Theory of Games and Economic Behavior*. Princeton University Press.
2. Bernoulli, D. (1738/1954). *Exposition of a New Theory on the Measurement of Risk*. *Econometrica* **22**(1), 23–36.
3. Peters, O. & Gell-Mann, M. (2016). *Evaluating gambles using dynamics*. *Chaos* **26**(2), 023103.
4. Latané, H. A. (1959). *Criteria for Choice Among Risky Ventures*. *Journal of Political Economy* **67**(2), 144–155.
5. Whitworth, W. A. (1870). *Choice and Chance*. Deighton, Bell.
