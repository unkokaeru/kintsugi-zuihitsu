# Logbook

Working logbook for the MTH3011 project. Paired with the handwritten [[Logbook.pdf|Logbook]], which carries Dr. Santos Rego's signatures.

## 2025

### 2025-10-20 - First Meeting: Project Scope & Familiarisation

Project agreed to be personal - explore the areas most interesting, subject to supervisor steer. Brainstormed themes:

- Verification across different domains: **cryptography**, **flight systems**.
  - *Needham-Schroeder (1978) as an example of a logical error hidden in an informally-reviewed proof.*
- Need for online / security-critical theories and systems.
- How computers help formalise - **Lean**, **Coq**, **PVS** (PVS is used at NASA).
- Who provides assurance in each setting, how the tools differ, how they work internally.
- Secondary reading: popular articles, research papers, news.

### 2025-10-28 - Outlined Research Plan, Sections 1, 3, 5–11

Drafted scaffolding for every Research Plan section except §2 (description / introduction) and §4 (literature survey); those require more background reading first.

### 2025-10-29 - Second Meeting: Admin

- Best time to meet / email: **Mon-Fri, late PM**.
- E-logbook agreed.
- Research Plan to be completed ASAP.

Same evening: wrote Research Plan §2 (Project Description & Introduction) around three anchor incidents:

- **Needham-Schroeder protocol** (1978) + **Gavin Lowe's** fix (1995).
- **Feit-Thompson theorem** (1963) formally verified by Microsoft Research / INRIA, 2012.
- **Intel Pentium FDIV bug** - ~$475 million correction cost; motivator for AWS / NASA (PVS) adoption.

### 2025-10-31 - Literature Survey Draft Complete

First four references locked in:

1. Ayala-Rincón & de Moura, *Applied Logic for Computer Scientists*, Springer, 2017.
2. Geuvers, "Proof Assistants: History, Ideas and Future", *Sadhana* 34, pp. 3–25, 2009.
3. Paulson, "A Machine-Assisted Proof of Gödel's Incompleteness Theorems …", *RSL* 7(3), 484–498, 2014.
4. Mendelson, *Introduction to Mathematical Logic*, 6th ed., CRC Press, 2015.

Eight more to source, targeting: Lean/Coq system descriptions, landmark formalisations (Feit-Thompson, Four Colour), type theory foundations, Agda-adjacent applications, cryptographic-protocol verification.

### 2025-11-03 - Meeting Cancelled (Still Short-Listing References)

Shifted to a roughly fortnightly cadence for the reference-gathering phase. Research Plan deadline relaxed to accommodate Wednesday work-sessions. Yuri agreed to consult the logbook by email when meetings don't run.

### 2025-11-05 - Began Short-Listing References

Reading abstracts and tables-of-contents of candidate references to decide what to pursue.

### 2025-11-17 - Meeting Mutually Cancelled

Research Plan deadline adjusted again to allow focus on reading.

### 2025-11-19 - Literature Survey Completed

- Skimmed the four core textbook-style references: Ayala-Rincón & de Moura, Mendelson, Bertot & Castéran, Nederpelt & Geuvers - using Personal Tutoring reading techniques.
- Summaries + titles produced for every reference entry. ✓
- All 12 IEEE references now in the Research Plan.

### 2025-11-24 - Fly-By Meeting: Research Plan Refinement

Focused discussion on keeping Lean and its underlying maths at the heart of the project.

- **How do proof assistants actually work?** - *Applied Logic for Computer Scientists* is the right entry point.
- **Stretch idea:** could I write my own toy proof assistant as an illustration-of-internals chapter? Parked for now; revisit after reading Nederpelt & Geuvers over the break.

### 2025-12 - Deep Reading (No Meetings Scheduled)

Exam revision dominated the first half of the month. After the last exam (~2025-12-15), began working through Nederpelt & Geuvers seriously - simply-typed λ-calculus → dependent types. Started noting the structure of a minimal typechecker's implementation.

## 2026

### 2026-01-08 - Pivot Idea Crystallising

Finished Nederpelt & Geuvers Part I. The implementation-flavoured chapters (parser → AST → elaborator → kernel) made clear that a minimal proof assistant is buildable inside a final-year undergrad timeframe - provided the underlying logic is kept simple (propositional, or ultra-restricted first-order).

Sketched a project-level pivot: make the toy proof assistant the **centrepiece**, with Lean formalisations narrowed from 2–3 theorems to a tighter **2**, then re-proved in the toy assistant for a direct cross-tool comparison. Emailed Yuri to check interest.

### 2026-01-14 - Yuri Agrees to the Pivot (Email)

Yuri: supportive; emphasised the toy only needs to be as big as the chosen theorems require - don't overbuild. Suggested starting from a propositional kernel and extending only if the chosen theorems demand it.

Actions:

- Revise the Research Plan action plan - documented as Addendum in [[Research Plan]].
- Start the toy-assistant design sketches.
- Narrow the formalisation-theorem shortlist accordingly.

### 2026-02-05 - Toy Assistant: First Design Sketch

Whiteboarded the architecture:

- Surface syntax → parser → AST (judgements / proof-trees).
- Typechecker / kernel that verifies each inference against a small Hilbert-style or natural-deduction rule set.
- REPL / CLI for interactive development.

Implementation language: **Python 3** (type-hinted, `mypy --strict`). Considered OCaml for its pattern-matching and static-typing advantages, but decided the unfamiliarity cost outweighed the safety gain given the time pressure; Python expertise gets more done per unit time. Plan to lean on `dataclasses` for the proof-object types, structural pattern matching (PEP 634) for kernel dispatch, and `mypy --strict` to recover some discipline. Repo scaffold not yet committed.

### 2026-02-19 - Natural Number Game & Lean Practice

- Worked through the [Natural Number Game](https://adam.math.hhu.de) end-to-end - excellent grounding in the `rfl / rewrite / induction` rhythm.
- Attempted Year-2 Algebraic Structures results in Lean (subgroup criterion, Lagrange) - abandoned Lagrange for now; requires more mathlib familiarity than I want to spend on ahead of theorem selection.

### 2026-03-04 - Email Exchange with Dr. Santos Rego (No Meeting)

Sent progress update covering three work streams:

1. **Reading** - working through Research Plan sources + supplementary online material.
2. **Practice** - NNG + ad-hoc Year 1/2 theorems in Lean inside VS Code.
3. **Writing** - maintaining the logbook, plan to start a report skeleton soon; toy-assistant idea still in scope.

Proposed meeting skipped. Yuri responded the same day with three guiding comments:

- **Source reliability** - reading can draw on anything; *citations* must be from trusted publishers, peer-reviewed papers, or material authored by mathematicians with doctorates. Tracked in [[reading notes]] as the `citable?` column.
- **Lean code in the thesis** - reproducing existing proofs only counts toward page-count if pedagogically necessary; own work belongs in the main body, with lengthy details in appendices.
- **Typing urgency** - start typing early; it takes longer than people expect.

Additional ask: **send a PDF of whatever thesis draft exists by end of Week 26 (2026-04-26)** - "fire yourself up" for spring break.

Full text preserved in [[supervision]].

### 2026-03-11 - Email Exchange: Pivot Formally Confirmed; Scope Locked

No meeting (Yuri unavailable this week); confirmation handled by email.

- Scope confirmed: toy proof assistant as centrepiece; **2 theorems** to be proved in **both** Lean and the toy assistant. Yuri agreed the narrower scope is better than three-theorems-done-shallowly.
- Toy to be **propositional-only** unless a chosen theorem strictly requires more - keeps the implementation finishable.
- Shortlist of candidate theorems to be drafted by mid-April and sent for signoff before implementation starts.

*(Note: scheduling hasn't worked out for an in-person meeting in any of the 2026 windows so far - combination of teaching load on Yuri's side and my exam / dissertation clashes. All contact this year has been by email.)*

### 2026-03-25 - Lean Scratch Work on Candidate Theorems

Worked through first-pass Lean proofs of two candidates to see what the toy would need to support:

- **Deduction theorem** (in a Hilbert-style calculus) - pure propositional, tree-induction on proof objects.
- **Glivenko's theorem** (classical ↔ intuitionistic) - pure propositional, but needs both calculi in the toy.

Both provable within a propositional-only kernel.

### 2026-04-21 - Repo Restructure & Honest-Status Self-Check

Realised the on-disk repo was still structured around the original flat layout rather than the 2/3 + 1/6 + 1/6 assessment split, and that several artefacts discussed with Yuri (textbook-format notes, Lean scaffold, report skeleton) were behind where the emails had implied.

Actions:

- Restructured into `project/` (2/3), `critical review/` (1/6), `seminar reports/` (1/6 - renamed from `guest lectures/`).
- Added folder-notes and hub files: [[project]], [[supervision]], [[reading notes]], [[case studies]], [[formalisations]], [[report]].
- Stood up five case-study stubs: Feit-Thompson, Four Colour, Gödel, PFR, Needham-Schroeder.
- Created the report skeleton (pure Markdown; Obsidian export later) with section stubs.
- Extracted the 2026-03-04 email exchange out of the old checklist and into [[supervision]].
- Fixed content defects in `mth3011.md` and [[Research Plan]] (typos, phase-week overlap, placeholder quote).
- Ticked **LO6** and **LO7** in `mth3011.md` - seminars and critical review are complete.
- Added "Honest Status Snapshot - 2026-04-21" at the top of [[Checklist and Progress]].

### 2026-04-22 - Shortlist Locked; Report Structure Matched to Pivot; Critical-Review Completion; Language Call

- Finalised the **two-theorem shortlist** - see [[formalisations]]. Emailing Yuri today:
  1. **Deduction theorem** for propositional logic (metatheoretic).
  2. **Glivenko's theorem** - classical propositional tautology iff intuitionistic double-negation (famous named result).
- Re-cut the report structure to nine section files matching the new scope: split `05-formalisations` into Lean formalisations (§5) and toy-assistant formalisations (§7), with a new §6 on the toy itself and §8 on cross-tool comparison / discussion / conclusion; §9 stays as appendix.
- Switched the report stack from a Pandoc pipeline to **pure Markdown** with plain-IEEE numbered citations. A single [[references]] file is the source-of-truth for citations; Obsidian will handle export later.
- **Toy-assistant language call made: Python 3, not OCaml.** Reasoning: Python familiarity outweighs OCaml's static-typing safety when OCaml is otherwise unfamiliar and time is tight. `mypy --strict` + `dataclasses` + PEP-634 structural pattern matching recover most of the discipline I'd have got from OCaml's sum types, without the learning tax. Ecosystem commentary in §03 covers Coq / Agda / Isabelle / PVS from the literature; hands-on scope is Lean + the Python toy only.
- Completed [[critical review]]: populated *Summary of the Angle Taken*, *Key Sources Referenced*, and the two actual Q&A questions ("What is the Kelly criterion?"; "If expected utility is about preferences, what is the 'expected' part about?") with reference answers. Split the slide deck and speaker script into their own files ([[slide deck]], [[speaker script]]).
- Backfilled the [[supervision]] meeting log from the 2025 meetings; confirmed all 2026 contact has been by email only.
- Updated [[reading notes]] source-checklist to reflect actual skim status.

**Next actions** (top 3 for this week):

1. **Email Yuri to book an in-person meeting next week** (2026-04-28 or 2026-04-30) to review progress against deadlines - especially the Week-26 draft-PDF ask, the toy-language call, and the shortlist signoff. Bundle into the same email as the shortlist signoff request.
2. Stand up the toy-assistant repo (Python skeleton: `ast.py`, `parser.py`, `kernel.py`, `repl.py`; `pyproject.toml`; `tests/`); initialise the Lean project and port the two theorems into Lean in parallel.
3. Send a draft PDF to Yuri by **2026-04-26** (end of Week 26).

### 2026-04-23 - Baseline Artefacts Drafted; Three Days to Revise + Handover

Used Claude Code (assistant) to produce first-pass versions of all three primary artefacts, to be reviewed and manually revised over the next three days before the Week-26 PDF goes out.

**Lean** - `FormalMethods/DeductionTheorem.lean` (139 lines) and `FormalMethods/Glivenko.lean` (323 lines) now have proofs filled in; `lake build` reports success with zero `sorry` and zero `axiom`. Dropped the unused `mathlib` dependency from `lakefile.lean` - the theorems only need `List`, `Nat`, and `Prop` from Lean core, and the smaller trusted base is a better story for the report. Implementation notes I want to internalise before revising:

- `induction` on a `Hilbert (A :: Γ) B` hypothesis needs the generic-context equality-hypothesis trick (`deduction_aux` with `Γ' = H :: Γ`), because Lean 4 can't generalise the compound index directly. I wouldn't have hit that without trying.
- Constructor binder names have to avoid shadowing the outer theorem's variables - I had Lean complain "unknown identifier 'A'" because `subst` was eliminating the wrong `A`. Renaming to `H` in the theorem and `P/Q/R` in constructor binders fixed it.
- `dn_axiom₃` (intuitionistic proof of `¬¬((~B ⟹ ~A) ⟹ (A ⟹ B))`) is the single hardest piece. The draft uses two helper lemmas (`neg_imp_dn_ant`, `neg_imp_neg_conseq`) applied twice each; the construction is non-obvious from the textbook and needs me to walk through it properly to understand.

**Toy proof assistant** - `project/formalisations/toy/` now has a full `pyproject.toml` + `src/formal_toy/{ast,parser,kernel,calculus,repl}.py` + `theorems/{deduction,glivenko}.py` + five test modules (~1,470 LoC total). `python -m mypy --strict src/` is clean; `python -m pytest -q` reports 51 passed. Architectural notes:

- Kernel is 96 lines, one `match` over six proof-rule constructors. That is strikingly small - makes §7's TCB comparison with Lean's ~6k-line C++ kernel look dramatic in a way I had not anticipated.
- Proof objects carry their own context as a tuple (hashable, no threaded state parameter). This was an early-draft decision I should sanity-check against OCaml proof-assistant norms before locking it in.
- Parser uses Lark with a `?start: …` grammar rule (the `?` elides the `Tree` wrapper). One passing debugging cycle there - noted in `tests/test_parser.py`.
- REPL has four commands (`:parse`, `:glivenko`, `:help`, `:quit`); `:glivenko` re-runs the kernel on both the classical input and the translated output to make the trust chain visible to a reader.

**Report** - all nine section files now contain full draft content:

- §01 Introduction - polished (was already mostly drafted)
- §02 Foundations - logic / type theory / Curry–Howard / Gödel / history (~1,500 words)
- §03 Proof Assistants - Lean deep-dive + Coq / Agda / Isabelle / PVS from literature (~1,500 words)
- §04 Case Studies - expanded all five (Feit–Thompson, Four Colour, Gödel, PFR, Needham–Schroeder) + scale table
- §05 Lean Formalisations - walkthrough + excerpts + reflections
- §06 Toy Proof Assistant - motivation, language rationale, design, kernel, surface, omissions, engineering costs (~2,000 words)
- §07 Re-formalisations & Comparison - both re-proofs + metrics table + where-each-tool-won
- §08 Discussion & Conclusion - full answer, Gödel caveat, limitations, future work, acknowledgements
- §09 Appendix - pointers to reproduced plan + full listings + verification commands

All word targets hit modulo my revision.

**Plan for Thursday–Sunday (2026-04-24 → 04-26):**

- Thursday: Read every section of the report end-to-end; rewrite in my own voice where the draft sounds generic; sanity-check every citation against the reading notes.
- Thursday: Walk through each Lean proof step by step, mentally reproducing the argument. Trim or re-comment anywhere the draft's comments are thinking-out-loud residue.
- Friday: Same treatment for the Python toy. Run the full `pytest -v` and stare at any assertion I don't immediately recognise.
- Saturday: Second pass on §7 (cross-tool comparison) - this is the section where I need to be confident it reflects *my* experience, not a synthesised guess. Fix any metric I can't back from the actual artefacts.
- Sunday: Proofread, Obsidian → PDF export, send to Yuri. Draft the submission email early in the day so the only Sunday-evening step is the send.

**Blockers / open questions to resolve before handover:**

1. Yuri hasn't replied to the 2026-04-22 shortlist-signoff email yet. If either theorem gets rejected, the Lean/toy work has to pivot to fallbacks; this is a live risk until Monday.
2. GitHub repo URL not yet decided or populated. The Lean and toy directories are ready to push but I want to confirm naming / visibility with Yuri first.
3. The in-person meeting request is also still pending reply; if Yuri can't do next week at all, I need to plan for the full May cycle being email-only.
