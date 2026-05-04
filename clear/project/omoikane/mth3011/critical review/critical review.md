# Critical Review

Critical review presentation on:

**[[The Ergodicity Problem in Economics.pdf|The Ergodicity Problem in Economics]]** — O. Peters, *Nature Physics* 15 (2019), 1216-1221.

Status: **complete** (presentation delivered). Worth 17.5% of MTH3011.

Source artefacts:

- [[slide deck]] — the delivered slides in markdown form (Marp-ready).
- [[speaker script]] — the narration delivered alongside the slides.

## Summary of the Angle Taken

The presentation took a balanced but ultimately critical stance toward Peters' central claim that economics has committed a "pernicious error" since Bernoulli by implicitly assuming ergodicity. After introducing Peters' coin-toss illustration — a gamble with a **+5.0%** ensemble average but a **−5.3%** time-average growth rate — and summarising the supporting Copenhagen experiment (Meder et al.), the critique was organised around three weaknesses:

1. **Mischaracterisation of expected utility.** Peters frames EU as implicitly requiring ergodicity / "parallel universes." Doctor, Wakker & Wang (*Nature Physics* 2020) show EU is a representation theorem built on preference axioms; it is in fact Peters' own Equation 8 that carries an ergodicity assumption.
2. **Scope overreach and thin novelty.** The growth-rate prescription is mathematically equivalent to the Kelly criterion (1956), itself foreshadowed by Whitworth (1870) and Latané (1959). Toda (2023) argues ergodicity economics has produced no falsifiable prediction that differs from standard log-utility theory.
3. **Thin empirical evidence.** The supporting Copenhagen study used 18 subjects, low lab-money stakes, and — most damagingly — applied outcomes once at the end rather than sequentially, which means the experimental design does not actually test the time-average mechanism Peters says matters.

The verdict delivered: *"a genuinely valuable pedagogical contribution wrapped in an overstated polemic — the insight is real; the revolution is not."* Structurally the talk front-loaded strengths (pedagogical clarity, the coin-toss example, the legitimate question about time dynamics) before the three weaknesses, anchoring counterarguments primarily on the Doctor/Wakker/Wang rebuttal rather than attempting a first-principles dismantling.

## Key Sources Referenced

Pulled across from the deck's reference list — useful to retain here since the same sources may get reused in the main project report's discussion section on *where formal methods add value vs. overhead*.

- **Peters (2019)** — the primary text under review. *Nature Physics* 15, 1216-1221.
- **Doctor, Wakker & Wang (2020)** — the headline rebuttal from economists, same journal. *Nature Physics* 16, 1168.
- **Toda (2023)** — "'Ergodicity Economics' is Pseudoscience", arXiv:2306.03275. The strongest claim that the framework has no new testable predictions.
- **Meder et al. (2021)** — the Copenhagen experiment in its published form (cited by Peters as a preprint). *PLOS Computational Biology* 17(9), e1009217.
- **Kelly (1956)** — *A New Interpretation of Information Rate*, *Bell System Technical Journal* 35(4). The mathematical precursor Peters should engage with more seriously.
- **Bernoulli (1738/1954)**, **von Neumann & Morgenstern (1944)**, **Latané (1959)**, **Whitworth (1870)**, **Peters & Gell-Mann (2016)** — historical and supporting references.

## Reflection

### What Worked

- The coin-toss build-up was the clear high point. Revealing the ensemble average (+5.0%) first and letting the room sit with the apparent profitability before uncovering the −5.3% time-average drew a visible reaction; a couple of heads tilted and I caught the expression a lecturer makes when a framing just clicked. That 30-second pause was the single most effective stretch of the talk.
- The three-weakness scaffold kept the critique auditable rather than rhetorical. Each weakness was anchored on a named, cited source (Doctor/Wakker/Wang; Toda; Meder et al. peer reviewers), which meant the argument could be interrogated without collapsing into opinion.
- Timing landed on 9 minutes 40 seconds, just inside the 10-minute window, leaving enough room for questions without rushing the verdict slide.
- Front-loading strengths before weaknesses paid off — it visibly softened the critique and made the final verdict feel measured rather than hostile. I suspect this is what generated the "collaboration, not competition" flavour of the Q&A rather than combative pushback.

### What Didn't Work

- Weakness 1 (the strawman EU argument) was the densest slide and I moved through it faster than the ideas deserved. The irony that Peters' own Equation 8 is the thing assuming ergodicity is the single most powerful point in the whole critique, and I did not give the room enough time to feel it land.
- The historical-lineage slide was a bulleted list when it wanted to be a timeline graphic. Four dates in a column do not communicate "this idea has been circling for 150 years" as viscerally as a horizontal scale would.
- I stumbled over the pronunciation of "Latané" the first time it came up, recovered, and then second-guessed it the second time. Trivial, but noticeable.
- The Copenhagen-experiment slide tried to do too much at once — design, result, methodology critique, citation concern. It would have been cleaner split across two slides, with the "cited as preprint" point isolated so its significance was not buried.

### What I'd Do Differently

- Replace the lineage bullets with a proper horizontal timeline. A simple SVG — 1870 · 1956 · 1959 · 2019 — would carry the "novelty question" argument better than any sentence can.
- Build a tiny simulation figure: one realised wealth path plotted alongside the ensemble mean, both starting at £1. The divergence after ~30 rounds is the whole argument, shown in one frame.
- Give Weakness 1 an extra 20 seconds — specifically, read out Peters' Equation 8 briefly and point at the bit that quietly assumes ergodicity. Right now the audience has to take the claim on trust.
- Rehearse Latané, Wakker, and Gell-Mann aloud beforehand. Minor, but the stumble cost a beat of credibility.
- Prepare a one-line answer for "so is log-utility just Kelly with extra steps?" — in hindsight that was the obvious follow-up question I didn't fully preempt.

### What the Preparation Got Right (Observational)

- Three-weakness structure is solid and tracks the published rebuttal literature closely rather than relying on intuitive dismissal.
- The ordering — explain → exemplify (coin toss) → strengths → weaknesses → verdict — keeps the talk balanced, which matters for the "argumentation" and "self-reflection" marking criteria.
- Source mix is appropriate: primary text, peer rebuttal in the same journal, arXiv critique, and the published version of the cited experiment. Bibliography length is proportionate for a 10-minute slot.

## Q&A

### Prepared Anticipations

Four anticipated questions were rehearsed in advance. The full list lives in [[speaker script]] under *Anticipated Q&A*; they covered whether economists ignore time dynamics, the Kelly-vs-ergodicity-economics distinction, the choice of journal, the future of the research programme, and the paper's writing quality.

### Actual Questions Asked

Two questions came up on the day.

**Q: What is the Kelly criterion?**

Answered with the intuition first — it's the fraction of your bankroll you should stake on a favourable bet to maximise the long-run growth rate of wealth — before writing the formula $f^* = (bp - q)/b$ on the board for the case of a bet with win probability $p$, loss probability $q = 1-p$, and payoff odds $b$. I emphasised the equivalence to maximising $\mathbb{E}[\log W]$ under repeated bets, which is precisely the policy Peters arrives at from ergodicity reasoning sixty-three years later. The historical point — that the paradigm-shift rhetoric is Kelly re-described in statistical-mechanics language — seemed to be the part the questioner was probing for, and it landed cleanly. I did not go into the derivation; a sketch plus the date was the right resolution for the time available.

**Q: If expected utility is about preferences, what is the "expected" part about?**

This was the harder and more interesting question. I answered that "expected" refers to the mathematical expectation operator $\mathbb{E}[u(X)] = \int u(x)\,dP(x)$ applied to the utility function, and emphatically *not* to any physical ensemble or repeated-trial interpretation. In the von Neumann–Morgenstern representation theorem, an agent whose preferences over lotteries satisfy completeness, transitivity, continuity, and independence can be *represented as if* they rank lotteries by the probability-weighted average of some utility function — the expectation falls out of applying the independence axiom to probabilistic mixtures of outcomes, rather than being a physical claim about repeated trials or parallel copies.

I then tied this directly back to the critique: this is exactly the distinction Doctor, Wakker & Wang draw against Peters. The "expected" in expected utility is a mathematical consequence of preference axioms, not a physical commitment to ergodicity. The questioner nodded through the representation-theorem framing and did not push back; I took the silence as acceptance rather than confusion, which in hindsight I am reasonably confident about — the follow-up they chose not to ask would have been "so what *is* Peters objecting to, then?", and I had a sentence ready for it.

## Marking-Criteria Self-Assessment

> [!info] Marking Criteria
> - **Presentation & Delivery**…
> 	- **Structure:** Presentation of aims, objectives, main body, results, and future work.
> 	- **Engagement:** Ability to capture and maintain audience attention.
> 	- **Visual Aids:** Use of IT and animations to aid audience.
> 	- **Communication:** Clarity of expression, vocabulary, and transferable skills.
> - **Research & Content**…
> 	- **Research Evidence:** Visible evidence of research performed for the presentation.
> 	- **Literature Insight:** Understanding and insight into academic literature.
> 	- **Background Enquiry:** Investigation, analysis, and critical appraisal of sources.
> 	- **Referencing:** Quantity of literature and correct use of captions.
> - **Analysis & Reflection**…
> 	- **Argumentation:** Sustaining arguments and synthesising alternative views.
> 	- **Q&A Responses:** Accuracy and depth of answers to audience questions.
> 	- **Q&A Reflection:** Evidence of critical reflection during question time.
> 	- **Self-Reflection:** Ability to critically and independently reflect on own work.

Strongest → weakest, with honest reasoning:

1. **Argumentation** — the three-weakness scaffold is clean, each weakness is tied to a named published rebuttal, and the verdict is explicitly balanced rather than one-sided. This was the spine of the talk.
2. **Literature Insight** — engaged seriously with Doctor/Wakker/Wang and Toda rather than relying on Peters' own framing, and correctly identified the representation-theorem point as the axis on which the critique turns.
3. **Referencing** — 10 sources, all cited in-talk, spanning primary text, peer rebuttal, later peer-reviewed publication of the cited experiment, and historical precursors.
4. **Q&A Responses** — the Kelly answer was crisp and the expected-utility answer pulled in the representation-theorem framing without waffle; both tied back to the main critique.
5. **Communication** — clear, paced, minus the Latané stumble.
6. **Structure** — aims → overview → core argument → experiment → strengths → weaknesses → verdict → conclusions. Orthodox but appropriate.
7. **Background Enquiry** — good on the economics rebuttal side; weaker on the statistical-mechanics side, where I could have dug further into the original ergodic hypothesis literature rather than taking Peters' definition at face value.
8. **Research Evidence** — the work shows in the slides, but a visible sim / figure would have made this criterion easier to mark high.
9. **Self-Reflection** — this document is the main evidence; the reflection above is candid about the Weakness 1 pacing and the lineage-slide design failure.
10. **Q&A Reflection** — I responded to both questions in real time and connected them back to the critique, but I did not visibly *reframe* my position during Q&A, which is what this criterion rewards most.
11. **Engagement** — decent pacing and the coin-toss reveal worked, but the opening was conventional rather than hooky.
12. **Visual Aids** — the weakest row. Slides were functional but text-heavy; the Kelly timeline and the wealth-trajectory plot are the two things that would have moved this up a band.

Natural strength: the Argumentation / Literature Insight top block. Natural weakness: the Visual Aids / Engagement pair — correctable in the main project report by budgeting figure-making time explicitly rather than treating it as spillover.
