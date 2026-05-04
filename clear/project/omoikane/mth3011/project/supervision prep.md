# Supervision - Prep Notes

> My own planning notes for upcoming contact with Dr. Santos Rego. **This file is not a record of meetings or emails - it's a draft / agenda / "what I want to happen next" document.** When something actually happens (reply lands, meeting runs), move the relevant points into [[supervision]] as a real log entry and delete them from here.

## Outstanding Asks to Yuri (Emailed 2026-04-22, Awaiting Reply)

Three things went in the 2026-04-22 email:

1. **Shortlist signoff** on the two theorems: Deduction theorem + Glivenko's theorem. Full rationale and fallback candidates in [[formalisations]]. If either is rejected I need to know before committing serious revision time to the current drafts.
2. **In-person meeting booking** - first in-person meeting of 2026 - for the week of 2026-04-28. Proposed Tuesday 2026-04-28 or Thursday 2026-04-30. Purpose: review progress against Week-26 draft-PDF ask, final submission, and the remaining revision cycle.
3. **Progress update** - brief summary of where Phase 3/4/5 are.

## What I Want the 2026-04-26 Draft-PDF Submission Email to Say

Send alongside the PDF, keep it short. Draft below to refine before send.

> Good evening Dr. Santos Rego,
>
> Attached is the Week-26 draft PDF of my MTH3011 thesis, as we agreed in your 2026-03-04 email. A brief summary of what's in it:
>
> - All nine sections have full-draft content (§1 introduction, §2 foundations, §3 proof assistants, §4 case studies, §5 Lean formalisations, §6 toy proof assistant, §7 re-formalisations and cross-tool comparison, §8 discussion and conclusion, §9 appendix).
> - Both shortlisted theorems (Deduction theorem + Glivenko's theorem) are formalised in Lean 4 - `lake build` clean, zero `sorry`, `mathlib` dependency dropped as unnecessary for propositional-only work.
> - The Python toy proof assistant is built: kernel, parser, REPL, tests. `mypy --strict` clean; `pytest` reports 51 passed. Both theorems are re-proved in it; the comparison is §7.
> 
> GitHub repo: [URL - to paste after I actually push before send].
>
> I'm aware the shortlist signoff from my 2026-04-22 email is still open; the draft assumes both theorems are accepted, and if either is rejected I'll pivot to fallbacks from `project/formalisations/formalisations.md`. Happy to restructure on that basis.
>
> I've also asked about an in-person meeting for the week of 2026-04-28 - still useful if you can find a slot, both to review the draft and because we haven't met face-to-face this year yet.
>
> Best wishes,
> William Fayers
> 3rd Year BSc Mathematics Undergraduate (27378661), University of Lincoln

## What I Want from the Next Meeting / Email Exchange

In rough priority order:

### If It's an In-Person Meeting

1. **Walk through §7 (cross-tool comparison) together** - the thesis-pivotal section and the one I least want to argue from drafts. Ask Yuri whether the Lean-vs-toy analysis is convincing, and whether the LoC / TCB comparison is making the right argument.
2. **Show the toy assistant running live** - `python -m formal_toy`, `:glivenko (~p1 -> ~p0) -> (p0 -> p1)`, watch the kernel re-check. ~2 minutes. Useful because I suspect the written description doesn't convey how small and transparent the kernel actually is.
3. **Ask about the viva** - what style is it, what does Yuri typically want to see, is a live toy demo something I could include in viva prep (it would pair naturally with the slide deck I'll need for Phase 7).
4. **Fallbacks if I'm told to rescope** - if Yuri says "your §7 is weak, widen the comparison", what's the minimal upscope that would address it? (My guess: adding a Coq formalisation of one of the theorems. That's ~3 days I don't have in the current Phase-5 budget but might have after draft feedback if the §7 criticism is serious.)

### If It's Email-Only

1. Bullet-point version of the above, minus the live demo. Attach a short code excerpt or the `pytest -q` output to make the "both artefacts actually work" claim concrete.
2. Ask for written feedback on whichever section Yuri thinks is weakest, so I can prioritise the Phase-6 revision cycle.

## Post-Feedback Plan (Phase 6, 2026-05-07 → 05-22)

Contingent on Yuri's feedback, roughly:

- Week 29 (2026-05-07 → 05-13): incorporate feedback; restructure whichever section needs it; if Coq comparison got asked for, spike it.
- Week 30 (2026-05-14 → 05-22): proofread, refine IEEE references, confirm Obsidian→PDF renders cleanly, tidy GitHub repo READMEs, submit by 2026-05-22.

## Post-Submission Plan (Viva Prep, 2026-05-21 → 06-12)

Tentative - subject to the meeting conversation:

- Build the slide deck. Pattern of previous critical-review deck ([[slide deck]]) worked well; reuse structure with formalisation-specific content.
- Mock viva with a peer if one is available (Rudi or similar from Year 3 cohort).
- Prepare non-specialist explanation of each formalised proof: the deduction theorem as "if you can prove B assuming A, you can prove A ⟹ B", Glivenko's theorem as "classical and intuitionistic propositional logic prove the same thing up to a double negation".
- Rehearse answers to likely questions: why Python and not OCaml, why propositional only, why drop mathlib, where Lean's automation helped (in practice: not on these theorems), what the next 1–2 theorems to add would be.

## Things to Update Here When the Facts Change

- Move the 2026-04-22 email contents into [[supervision]] as the real record when Yuri replies.
- Move the 2026-04-26 draft-PDF email draft into [[supervision]] once it's actually sent.
- Replace the speculative "Post-Feedback Plan" with the actual plan derived from feedback once received.
- Close this file out entirely once Phase 6 is underway - prep notes stop being useful after handover.
