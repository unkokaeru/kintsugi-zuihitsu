# Checklist and Progress

> Working checklist derived from [[Research Plan]] (§8 original plan + §12 2026-01 addendum) and the [[logbook]]. Supervisor emails and meeting notes live in [[supervision]].

## Honest Status Snapshot - 2026-04-23

**Current phase:** Phase 5 (Re-formalisation & Analysis, Weeks 26–28, 2026-04-16 → 2026-05-06) per the revised plan in [[Research Plan]] §12.

**Days remaining to Week-26 draft PDF:** 3 (target Sunday 2026-04-26). Weeks remaining to final submission: 4 (final deadline 2026-05-22).

**Supervisor's most recent ask:** PDF of whatever thesis draft exists, by end of Week 26 (2026-04-26) - see [[supervision]] email archive.

### What's Genuinely Underway (Baseline Drafts Exist, Need Revision)

- **Lean formalisations - baseline complete, needs my review.** Both theorems proved (`FormalMethods/DeductionTheorem.lean` 139 lines, `FormalMethods/Glivenko.lean` 323 lines). `lake build` clean, zero `sorry`, zero `axiom`. `mathlib` dependency dropped - not needed for propositional-only work. To revise: re-read each proof, confirm I understand every step, rewrite any comment that reads as think-aloud residue, commit per README commit-message cadence.
- **Toy proof assistant - baseline complete, needs my review.** Python package at `project/formalisations/toy/`; `mypy --strict src/` clean; `pytest -q tests/` reports 51 passed; REPL launches via `python -m formal_toy`. To revise: walk through each transformer, confirm I can reproduce the structure without reference to the draft, review test coverage, decide whether to push and with what repo name.
- **Report - first-pass drafts of all nine sections**, `<!-- TODO -->` markers all removed. Target word counts hit. To revise: rewrite in my own voice wherever the draft reads generic, sanity-check every citation against [[reading notes]], second-pass §7 specifically (the cross-tool comparison must reflect my actual experience).
- Reading-notes structure stood up in [[reading notes]]; case-study pages expanded to ~150 words each to support the report's §4.
- Logbook maintained in [[Logbook.pdf|Logbook]] throughout; working text record at [[logbook]] with a 2026-04-23 entry describing today's baseline drafting.
- Literature survey complete (2025-10-31); four core textbooks skimmed (2025-11-19).
- **Pivot agreed and locked (2026-03-11):** toy propositional-logic proof assistant as project centrepiece; two theorems to be proved in both Lean and the toy.
- **Two-theorem shortlist sent (2026-04-22):** Deduction theorem + Glivenko's theorem. See [[formalisations]]. Shortlist-signoff email to Yuri - awaiting reply.
- Seminar reports: complete (LO6).
- Critical review: complete (LO7).

### What's Genuinely Outstanding

- **My revision pass on the Lean, Python, and report drafts** (Thu–Sat 2026-04-24 → 04-26). This is where the artefacts become genuinely mine.
- Phase 3 commit cadence: once revised, commit per-lemma to GitHub per the README-suggested messages.
- Supervisor signoff on shortlist - emailed 2026-04-22, awaiting reply.
- Week-26 draft-PDF handover to Yuri - Sunday 2026-04-26. Needs (a) revised drafts, (b) PDF export from Obsidian, (c) submission email.
- In-person meeting with Yuri next week - requested 2026-04-22, awaiting reply; first in-person meeting of 2026 if it lands.
- Phase 6 final-report revisions (2026-05-07 → 05-22) - cycle after draft feedback arrives.
- LO ticks in [[mth3011]] - left un-ticked until the evidence is in place (submission made, LO2; final review passed, LO1/LO3/LO5; viva done, LO4).

### Immediate Blockers / Live Risks

1. **Yuri's shortlist-signoff reply** (emailed 2026-04-22). If either theorem is rejected, the Lean and toy proofs both pivot to fallbacks from [[formalisations]]. The current draft assumes both are accepted.
2. **GitHub repo URL** - not decided; push pending. Meanwhile the Lean and toy directories are local-only.
3. **Time budget.** 3 days to draft-PDF handover. Revision pass has to cover: the full report (second read-through + rewrites), the Lean proofs (deep re-reading + commit cadence), the Python toy (structural understanding check + test review). This is tight but not crushing.

## Pre-Project

- [x] Submit completed research plan to supervisor (deadline: **22 Oct 2025**)
- [x] Confirm weekly meeting schedule and location with Dr. Santos Rego
- [x] Set up Obsidian vault / Markdown workspace for logbook and notes
- [x] Set up local LaTeX installation (retained for future Obsidian → PDF export)
- [x] Create GitHub repository for formalised proof code

## Phase 1: Foundational Study

> **Weeks 1–8 · 23 Oct – 17 Dec 2025** - complete.

- [x] Skim Ayala-Rincón & de Moura, *Applied Logic for Computer Scientists* (2025-11-19)
- [x] Skim Mendelson, *Introduction to Mathematical Logic* (2025-11-19)
- [x] Skim Bertot & Castéran, *Coq'Art* (2025-11-19)
- [x] Skim Nederpelt & Geuvers, *Type Theory and Formal Proof* (2025-11-19; deep-read over Dec 2025)
- [x] Read - Geuvers, *Proof Assistants: History, Ideas and Future* (Sadhana, 2009)
- [x] Install VS Code + Lean 4 extension; verify trivial Lean compile
- [ ] Install Coq and verify - *deferred; Coq dropped from primary scope per pivot*
- [x] Work through the [Natural Number Game](https://adam.math.hhu.de) (2026-02-19)
- [ ] Work through *Theorem Proving in Lean 4* - partial (ongoing)
- [x] Study the Curry-Howard correspondence
- [x] Study basic dependent type theory concepts

## Phase 2: Case Studies & Pivot Decision

> **Weeks 9–14 · 18 Dec 2025 – 28 Jan 2026** - complete.

- [x] Deep-read Nederpelt & Geuvers (ch. 1–14) - implementation-focused chapters informed the pivot
- [x] Draft pivot proposal to Yuri (2026-01-08 logbook)
- [x] Supervisor approval of pivot (2026-01-14 email)
- [x] Analyse - Paulson, Gödel incompleteness formalisation (2026-04-23, see [[Gödel Incompleteness Theorems]])
- [x] Analyse - Gonthier et al., Feit-Thompson formalisation (2026-04-23, see [[Feit-Thompson Odd Order Theorem]])
- [x] Analyse - Gonthier, Four Colour Theorem formalisation (2026-04-23, see [[Four Colour Theorem]])
- [x] Analyse - Tao et al., PFR conjecture (2026-04-23, see [[PFR Conjecture]])
- [x] Notes on Needham-Schroeder (Lowe) + Smyth crypto thesis (2026-04-23, see [[Needham-Schroeder Protocol]])

*Case-study notes in [[case studies]] populated 2026-04-23 with claim, formalisation details, project-relevance, citation reliability, and quote pointers - backing the report's §4 walkthrough.*

## Phase 3: Lean Formalisations of Shortlisted Theorems

> **Weeks 15–20 · 29 Jan – 11 Mar 2026** - draft baseline locally complete 2026-04-23; pending my revision pass + GitHub push + supervisor signoff.

- [x] Scratch Lean proofs of candidate theorems to verify propositional-kernel feasibility (2026-03-25)
- [x] Finalise shortlist of **2 theorems** (2026-04-22): Deduction theorem + Glivenko's theorem
- [x] Draft Lean proof of Theorem 1 (Deduction theorem) - `lake build` clean, zero `sorry` (2026-04-23)
- [x] Draft Lean proof of Theorem 2 (Glivenko's theorem) - `lake build` clean, zero `sorry` (2026-04-23)
- [ ] My revision pass on both proofs (re-read each step, rewrite draft comments in my voice)
- [ ] Commit each proof to GitHub per-lemma per the README cadence
- [ ] Agree final formalisation selection with supervisor - *pending 2026-04-22 email reply*

## Phase 4: Toy Proof Assistant - Design & Core

> **Weeks 21–25 · 12 Mar – 15 Apr 2026** - draft baseline locally complete 2026-04-23; pending my revision pass + GitHub push.

- [x] Architecture sketch: parser → AST → kernel (2026-02-05)
- [x] Implementation language chosen: **Python 3** (2026-04-22 call - Python expertise outweighs OCaml static-typing advantages given time pressure; `mypy --strict` + `@dataclass(frozen=True)` + PEP-634 `match` recover most of the ADT discipline)
- [x] Repo scaffold: `pyproject.toml`, `src/formal_toy/{ast,parser,kernel,calculus,repl}.py`, `theorems/`, `tests/` (2026-04-23)
- [x] Parser (Lark grammar) for surface syntax - propositional formulae, with `?start` elision to avoid `Tree` wrapping (2026-04-23)
- [x] Kernel: `match`-based verifier against a rule-set-parametric Hilbert system - classical and intuitionistic calculi (2026-04-23)
- [x] REPL with `:parse`, `:glivenko`, `:help`, `:quit`; `python -m formal_toy` entry point (2026-04-23)
- [x] First trivial "proof" round-trips end-to-end - `arrow_self` constructed in Python and accepted by kernel (2026-04-23)
- [x] `mypy --strict src/` clean; `pytest -q` reports 51 passed (2026-04-23)
- [ ] My revision pass on the kernel and theorem transformers (walk through each, confirm structural understanding independent of the draft)
- [ ] Commit the toy to GitHub

## Phase 5: Re-formalisations & Comparative Analysis

> **Weeks 26–28 · 16 Apr – 06 May 2026** - draft baselines locally complete 2026-04-23; revision + handover pending.

- [x] Re-prove Theorem 1 (Deduction theorem) in the toy assistant - `deduction_transform` transformer; kernel-checked in `tests/test_deduction.py` (2026-04-23)
- [x] Re-prove Theorem 2 (Glivenko's theorem) in the toy assistant - `glivenko_translate` + 5 helpers + `glivenko_reverse`; kernel-checked in `tests/test_glivenko.py` (2026-04-23)
- [x] Table of differences: Lean vs toy, by theorem (drafted in report §7.3) - to confirm against the final revised files
- [x] Ecosystem commentary: Lean 4 vs Coq vs Agda vs Isabelle/HOL vs PVS - drafted in report §3.3 from the literature
- [x] Draft sections 05 (Lean formalisations), 06 (toy assistant), 07 (re-formalisations & comparison)
- [ ] Revision pass on §§05–07 - rewrite in my voice where the draft reads generic
- [ ] Send first PDF draft to Yuri by **2026-04-26** (end of Week 26)
- [ ] Iterate on supervisor feedback

## Phase 6: Final Report Preparation

> **Weeks 29–30 · 07 – 22 May 2026**

- [x] Draft section 01 (introduction) - polished from the Research Plan §2 adaptation
- [x] Draft section 02 (foundations - logic, type theory, Curry–Howard, Gödel)
- [x] Draft section 03 (proof assistants - Lean/Coq/ecosystem analysis)
- [x] Draft section 04 (case studies)
- [x] Draft section 08 (discussion + conclusion)
- [x] Populate section 09 (appendix - pointers to full listings, Research Plan, verification commands)
- [ ] Revision pass on §§01–04 and §08 - my voice, citation sanity-check
- [ ] Proofread final revised report
- [ ] Confirm IEEE references render correctly via Obsidian export
- [ ] Final code repository tidy: README, commit history
- [ ] Submit final report + code repo (**22 May 2026**)

## Phase 7: Viva Preparation

> **21 May – 12 Jun 2026**

- [ ] Slide deck: formalisation walkthrough, toy-assistant demo, cross-tool findings
- [ ] Prepare non-specialist explanation of each formalised proof
- [ ] Prepare for questions on: type theory, Curry-Howard, Gödel, propositional-vs-dependent-type tradeoffs, toy-assistant design choices
- [ ] Mock viva with a peer if possible
- [ ] Viva: **2026-06-12**
