# MTH3011 Project Checklist and Progress

…

> Use [[Research Plan]], [[Logbook.pdf]], and this [Perplexity Space](https://www.perplexity.ai/search/create-an-actionable-checklist-PvZE7bYWSkiMk754JCJEpw), to populate a checklist of what to do!

I've said that I've…

```markdown
Good afternoon!

Just realised I never sent the progress update email, so here it is. I don't think I have many questions either (I mostly just need to finish the work so far), so not actually sure if a meeting today is necessary - let me know after reading through the update. 

My work so far is split into three areas: reading, practice, and writing…

	1. For reading, I've been going through various books and online resources to understand proof assistants and their underlying logic. So that I don't forget what I've learned so far (and for the logbook), I've been writing down everything I'm learning in sort of a textbook format.
	2. For practice, I've been using tools like [this](https://adam.math.hhu.de/#/g/leanprover-community/nng4) to interactively learn, as well as going through random theorems from first/second year and proving those in Lean, within VS Code.
	3. For writing, I've been focusing on tracking everything in my logbook (including references), but have now made a skeleton document for the report ready for me to start outlining sections with bullet points, just so I don't have to worry about formatting etc. down the line - just content.

For next steps, I'm not reading as much anymore - just specific bits that come up elsewhere - and focusing more on organising the work I've done so far to fit the structure of the final report, and I might now try to make my own proof assistant, too.

I'm planning that by April I'll have part of the report completed, and ready to flesh out the rest of the report before May, so I can spend that month just refining and redrafting.


Kind regards,

William Fayers
3rd Year
BSc Mathematics Undergraduate (27378661)
University of Lincoln
```

And his response…

```markdown
Hi William,

Thanks for the report! Good work so far. No problem, we can skip the meeting.

Here are some comments that I hope should be useful for your further progress:

	- For reading and learning, you are more than welcome to use any source you can find. I am highly supportive of this. However, once you have gone through a particular topic and have to/want to cite particular things about it (and therefore have to add them to your bibliography in the thesis), make sure to only use sources that are 100% reliable. This means, for us in maths: your sources have to be from professional mathematicians (or other scientists that work in our topics), such as textbooks from trusted publishers, peer-reviewed research papers, and/or tech sources (e.g., digital lecture notes, videos, computer programmes, etc) created and offered trained mathematicians (e.g., research groups from universities, lecturers (with doctorate) from all over, etc). 

	- Excellent idea going through the theorems you have been exposed to but in Lean! Just keep in mind, though, that while you should display your coding and Lean proofs in the thesis, they do not always count towards the full page count of your thesis. For instance, if you reproduce some particular (existing) Lean proof in the thesis without clear purpose, this wouldn't count towards your actual work and page count. (And maybe shouldn't be done.) On the other hand, if you need to reproduce some existing Lean proof to explain to the reader a particular technicality about using Lean or how/why it works, that would be a welcome addition. But more importantly: all the examples/proofs that you did yourself in Lean should be displayed. You can put some main parts/snippets in the main body of your thesis, and remaining parts or 'lengthy details' as appendices.

	- Do get to typing as quickly as possible. This is really important because many people underestimate the amount of time that typing up takes!

Having April as an overall deadline is good, but I have an important additional suggestion: sending to me a PDF copy of what you have of your thesis draft before we enter the spring break (so by the end of Week 26). I know this is more work/extra pressure, but it is important to keep track of your progress and, let's say, 'fire yourself up' to give some extra boost at a crucial stage.

Best wishes,
Yuri
```

## Pre-Project

- [x] Submit completed research plan to supervisor (deadline: **22 Oct 2025**)
- [x] Confirm weekly meeting schedule and location with Dr. Santos Rego
- [x] Set up Obsidian vault / Markdown workspace for logbook and notes
- [x] Set up local LaTeX installation for report writing
- [x] Create GitHub repository for formalised proof code

## Phase 1: Foundational Study

> **Weeks 1–8 · 23 Oct – 17 Dec 2025**

### Reading

- [ ] Read — Ayala-Rincón & de Moura, *Applied Logic for Computer Scientists* (propositional/first-order logic, type theory) [leanprover-community.github](https://leanprover-community.github.io/mathematics_in_lean/C01_Introduction.html)
- [ ] Read — Geuvers, *Proof Assistants: History, Ideas and Future* (Sadhana, 2009) [github](https://github.com/leanprover-community/tutorials4)
- [ ] Read — Mendelson, *Introduction to Mathematical Logic*, 6th ed. (Gödel's theorems, proof theory) [leanprover-community.github](https://leanprover-community.github.io/mathematics_in_lean/)
- [ ] Read — Nederpelt & Geuvers, *Type Theory and Formal Proof* (lambda calculus through calculus of constructions) [emallson](https://emallson.net/blog/a-beginners-companion-to-theorem-proving-in-lean/)

### Environment Setup

- [ ] Install Lean 4 via `elan` and create a `mathlib` project (`lake new MyMathlibProject math`) [lean-lang](https://lean-lang.org/install/manual/)
- [ ] Install Coq and configure with standard library
- [ ] Install VS Code Lean 4 extension and Coq extension
- [ ] Verify both proof assistants load and compile a trivial example

### Tutorials

- [ ] Work through [*Theorem Proving in Lean 4*](https://leanprover.github.io/theorem_proving_in_lean4/) (dependent type theory, tactics, inductive types) [leanprover.github](https://leanprover.github.io/theorem_proving_in_lean4/)
- [ ] Work through [*Mathematics in Lean*](https://leanprover-community.github.io/mathematics_in_lean/) (MIL) with exercises in the `MIL` folder [leanprover-community.github](https://leanprover-community.github.io/mathematics_in_lean/C01_Introduction.html)
- [ ] (Optional) Complete the [Natural Number Game](https://adam.math.hhu.de) as a low-friction warm-up [adam.math.hhu](https://adam.math.hhu.de)

### Theory

- [ ] Study the Curry-Howard correspondence (propositions as types, proofs as programs)
- [ ] Study basic dependent type theory concepts (universes, `Prop` vs `Type`)

## Phase 2: Core Research

> **Weeks 9–18 · 18 Dec 2025 – 25 Feb 2026**

### Advanced Theory

- [ ] Study — de Moura et al., *The Lean Theorem Prover (CADE-25)* (trusted kernel, elaboration, universe polymorphism) [uv](https://www.uv.es/coslloen/Lean4/)
- [ ] Study — Bertot & Castéran, *Coq'Art* (calculus of inductive constructions, proof tactics, program extraction) [anggtwu](http://anggtwu.net/snarf/https/lean-lang.org/theorem_proving_in_lean4/print.pdf)
- [ ] Produce written comparison notes: Lean 4 vs Coq (architecture, tactic language, library maturity, ergonomics)

### Case Study Analysis

- [ ] Analyse — Paulson, *Machine-Assisted Proof of Gödel's Incompleteness Theorems* (Isabelle/HOL, hereditarily finite sets) [lean-lang](https://lean-lang.org/learn/)
- [ ] Analyse — Gonthier et al., *Machine-Checked Proof of the Odd Order Theorem* (Feit-Thompson in Coq, ~150,000 LoC) [lean-lang](https://lean-lang.org/install/manual/)
- [ ] Analyse — Gonthier, *Computer-Checked Proof of the Four Colour Theorem* (60,000+ lines of Coq) [scribd](https://www.scribd.com/document/751472971/mathematics-in-lean)
- [ ] Analyse — Tao et al., *PFR Conjecture*, Lean 4 formalisation (browse [teorth.github.io/pfr](https://teorth.github.io/pfr/)) [leanprover-community.github](https://leanprover-community.github.io/lean3/install/macos.html)

### Cryptography & Industrial Applications

- [ ] Study — Lowe, *Breaking and Fixing Needham-Schroeder* (CSP/FDR, man-in-the-middle attack) [dmg.tuwien.ac](https://www.dmg.tuwien.ac.at/lean2024/)
- [ ] Study — Smyth, *Formal Verification of Cryptographic Protocols* (PhD thesis, Dolev-Yao model) [leanprover.github](https://leanprover.github.io/theorem_proving_in_lean4/)
- [ ] Write critical notes on formal methods in safety-critical industrial systems (Intel Pentium, AWS, NASA PVS)

### Practical Exercises

- [ ] Complete intermediate-level Lean 4 exercises (beyond MIL basics — attempt short original proofs)
- [ ] Complete introductory Coq exercises using *Coq'Art* examples

### Formalisation Planning

- [ ] Identify 2–3 mathematical theorems suitable for formalisation, drawn from different domains (e.g. number theory, algebra, analysis)
- [ ] Document rationale for each chosen theorem (complexity, domain coverage, feasibility)
- [ ] Agree final formalisation selection with supervisor

### Ongoing (Phase 2)

- [ ] Weekly supervisor meetings (discuss case study findings, formalisation strategy)
- [ ] Logbook entries after each meeting

## Phase 3: Practical Implementation

> **Weeks 18–23 · 26 Feb – 01 Apr 2026**

### Lean 4 Formalisation (Primary Deliverable)

- [ ] Formalise Theorem 1 in Lean 4 — document proof strategy and tactic choices
- [ ] Formalise Theorem 2 in Lean 4 — document debugging process and dead ends
- [ ] Formalise Theorem 3 in Lean 4 (if selected) — document edge cases encountered
- [ ] Add inline comments to all proof files explaining each proof step (Google-style documentation)
- [ ] Commit each completed proof to GitHub with a descriptive commit message

### Coq Formalisation (Secondary/Comparative)

- [ ] Re-formalise at least one theorem in Coq for direct comparison
- [ ] Document differences in proof approach, tactic availability, and effort between Lean and Coq

### Reflection and Analysis

- [ ] Write preliminary comparative analysis: where did formal methods add clear value; where did they add unnecessary overhead?
- [ ] Note any proof errors or gaps found during formalisation that informal review might have missed

### Ongoing (Phase 3)

- [ ] Weekly supervisor meetings (review formalisation quality, discuss emerging insights)
- [ ] Logbook entries after each meeting

## Phase 4: Mid-Project Report

> **Week 24 · 02 – 08 Apr 2026**

- [ ] Prepare mid-project presentation for supervisor (formalisation demo + preliminary analysis)
- [ ] Synthesise findings from Phases 1–3 into a coherent written narrative
- [ ] Identify any gaps in literature coverage or formalisation requiring further attention
- [ ] Revise project objectives and scope if discoveries warrant it
- [ ] Conduct supervisor feedback session; take detailed notes
- [ ] Finalise final report structure based on feedback

## Phase 5: Analysis and Refinement

> **Weeks 25–28 · 09 Apr – 06 May 2026**

### Critical Analysis

- [ ] Evaluate each formalisation: genuine rigour gain vs complexity cost
- [ ] Analyse cost-benefit across the chosen mathematical domains (which benefited most?)
- [ ] Compare theoretical foundations studied in Phase 1 against hands-on implementation experience
- [ ] Synthesise the four landmark case studies (Feit-Thompson, Four Colour, PFR, Gödel) with your own findings

### Draft Report

- [ ] Write full draft of final report (all sections: introduction, theory, case studies, implementation, analysis, conclusions)
- [ ] Include all figures, formal notation, and code excerpts
- [ ] Send draft sections to supervisor progressively for feedback
- [ ] Incorporate supervisor feedback into draft
- [ ] Complete logbook with final reflections on the project journey

## Phase 6: Final Report Preparation

> **Weeks 29–30 · 07 – 22 May 2026**

- [ ] Comprehensive proofread of full report (spelling, grammar, mathematical notation)
- [ ] Refine all figures, diagrams, and LaTeX notation
- [ ] Finalise all formalisation code snippets and ensure they match repository code
- [ ] Ensure all 12 IEEE references are correctly formatted and cited
- [ ] Final code repository tidy: clean documentation, README, commit history
- [ ] Send final report to supervisor for approval
- [ ] Submit final report and code repository

## Phase 7: Viva Preparation

> **21 May – 12 Jun 2026**

- [ ] Prepare presentation slides (formalisation walkthrough, key findings, conclusions)
- [ ] Prepare spoken explanation of each formalised proof accessible to a non-specialist examiner
- [ ] Prepare for questions on: type theory foundations, Curry-Howard, Gödel incompleteness, Lean vs Coq trade-offs
- [ ] Practice full viva presentation (time it; aim for clarity over completeness)
- [ ] Do a mock viva with a peer or supervisor if possible
