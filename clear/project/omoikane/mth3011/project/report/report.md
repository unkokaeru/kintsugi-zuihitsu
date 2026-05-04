# Report

Planning hub for the final written report. The report is authored entirely in **pure Markdown**; Obsidian will export to PDF/LaTeX at submission time. No Pandoc, no external bibliography tooling in the loop - citations use plain IEEE `[N]` numbers matching [[references]].

## Structure (Post-Restructure 2026-04-27)

Fourteen section files under `sections/`, restructured around the trust-and-AI framing (see [[Research Plan]] §12 Addendum for the original pivot; this restructure followed in late April). Old section files are preserved under `sections/_old/` for reference.

| # | File | Role |
|---|------|------|
| 01 | `01-introduction.md` | Hook (Knight Capital), thesis (math needs unit tests), AI inflection, roadmap |
| 02 | `02-defence-in-depth.md` | How programming earned trust through layers (types, tests, CI, review, fuzzing, formal verification) |
| 03 | `03-mathematics-single-layer.md` | Peer review as the only layer; scale, specialisation, speed pressures |
| 04 | `04-ai-inflection.md` | LLMs producing proofs and code; hallucination; AlphaProof, PFR, Lean-Copilot |
| 05 | `05-foundations.md` | Logic, type theory, Curry-Howard, Gödel incompleteness, history |
| 06 | `06-ecosystem.md` | Lean 4 in depth + Coq / Agda / Isabelle / PVS from the literature |
| 07 | `07-case-studies.md` | Feit-Thompson, Four Colour, Gödel (Paulson), PFR (AI-era), Needham-Schroeder |
| 08 | `08-build-your-own.md` | Tutorial: build a propositional proof assistant from scratch |
| 09 | `09-formalising-in-toy.md` | Deduction Theorem and Glivenko's, formalised in the toy |
| 10 | `10-formalising-in-lean.md` | The same two theorems in Lean 4 |
| 11 | `11-comparison.md` | Side-by-side metrics; where each tool won; the kernel idea revisited |
| 12 | `12-discussion.md` | Where formal proofs earn their cost; AI angle; Gödel caveat; limitations; future |
| 13 | `13-conclusion.md` | Bracket-close on Knight Capital; the missing layer has arrived |
| 14 | `14-appendix.md` | Research Plan as submitted, full code listings, verification commands |

## Status per Section

> Last updated 2026-04-27 (restructure complete; full draft of all 14 sections ready for read-through).

| # | Section | Target words | Status |
|---|---------|--------------|--------|
| 01 | Introduction | 1,000 | draft |
| 02 | Defence in Depth | 800 | draft |
| 03 | Mathematics' Single Layer | 700 | draft |
| 04 | The AI Inflection | 1,000 | draft |
| 05 | Foundations | 1,200 | draft |
| 06 | Ecosystem | 1,200 | draft |
| 07 | Case Studies | 1,400 | draft |
| 08 | Build Your Own | 2,400 | draft |
| 09 | Formalising in the Toy | 900 | draft |
| 10 | Formalising in Lean | 1,200 | draft |
| 11 | Comparison | 800 | draft |
| 12 | Discussion | 1,400 | draft |
| 13 | Conclusion | 400 | draft |
| - | **Total (main body)** | **~14,400** | - |
| 14 | Appendix | - | draft (pointer-only; full listings inserted at PDF export) |

Checklist soft target ~10,000 words; hard maximum 20,000. Current draft sits comfortably inside the hard cap and slightly above the soft target, which the restructure justifies on substance grounds (three new framing sections plus the §8 tutorial centerpiece).

## Outstanding Figures / Excerpts

- [x] Lean code excerpts for both shortlisted theorems - §10.2, §10.3.
- [x] Python code excerpts of the toy kernel + theorem transformers - §8.5, §9.1, §9.2.
- [x] Case-study scale table (LoC, person-years, completion year) - §7.6.
- [x] Curry-Howard correspondence table - §5.3.
- [x] Cross-tool metrics table - §11.1.
- [ ] Diagram: toy-assistant architecture (parser → AST → kernel) - currently inline ASCII in §8.9; consider a cleaner diagram for the PDF export.
- [ ] Gantt chart (post-pivot phase timeline in [[Research Plan]] §12.3) - defer to Obsidian-export step; the Mermaid block in the Research Plan renders directly.

## Formatting (From the Module Checklist)

- Times New Roman throughout.
- Body 12 pt, section 14 pt bold, chapter 16 pt bold.
- Margins: 1 in top/bottom, 1.25 in left/right.
- Justified, 1.5 line spacing.
- Page numbers in the footer (bottom centre).
- References in IEEE style (a single numbered list at the back - see [[references]]).
- Check the draft against the standard of papers in the literature review.

Obsidian's markdown export respects most of this via community themes / print CSS; fine-tuning happens at submission prep. No need to settle the toolchain until the content is drafted.

## Citation Convention

Inline: plain square brackets with the reference number, e.g. `Gonthier et al. formalised Feit-Thompson over six years [7].`

For multiple: `[3], [4]` (comma-separated) or `[3]-[6]` (hyphen range for consecutive).

The full list lives in [[references]] - add new sources there first and cite downstream. Do not duplicate reference metadata inside section files.

## Milestones

- **2026-04-26** (end of Week 26) - first draft PDF to Yuri, even if most sections are stubs.
- **2026-05-01** - Research Plan's internal "draft by" target (superseded by the above).
- **2026-05-22** - final submission.
