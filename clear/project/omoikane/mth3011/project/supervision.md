# Supervision

Meeting arrangements, running meeting log, and email archive with Dr. Santos Rego.

## Arrangements

> **Supervisor**: Dr. Yuri Santos Rego
> **Email**: <YSantosRego@lincoln.ac.uk>
> **Office**: University of Lincoln, Isaac Newton Building, INB3311

- **Frequency**: Weekly.
- **Duration**: ~30 minutes.
- **Location**: Supervisor's office.
- **Back-up**: decided ad-hoc by email.

### Meeting Structure

1. Review of logbook entries since the previous meeting.
2. Progress on current phase objectives.
3. Technical questions and problem-solving.
4. Feedback on written work or formal developments.
5. Agreement on goals for the next meeting.
6. Supervisor signature and date in the logbook.

## Meeting Log

Backfilled from [[logbook]] on 2026-04-22. The *Signed* column refers to the handwritten master copy in [[Logbook.pdf|Logbook]].

**2026 note:** every interaction with Dr. Santos Rego in 2026 has been by email - a combination of teaching-load conflicts on his side and exam / dissertation clashes on mine have prevented an in-person meeting. A follow-up was sent on 2026-04-22 to book the first 2026 meeting for the week of 2026-04-27; pending reply.

| Date | Agenda | Outcomes | Action items | Signed |
|------|--------|----------|--------------|--------|
| 2025-10-20 | Project scope & familiarisation | Themes: verification in crypto/flight, Needham-Schroeder, NASA PVS, Lean/Coq tooling; project agreed as personal/research-driven | Begin familiarisation; draft Research Plan | Yes |
| 2025-10-29 | Admin | Confirmed Mon-Fri late PM contact; e-logbook; urgency of Research Plan | Finish Research Plan ASAP | Yes |
| 2025-11-03 | (cancelled - still on references) | - | - | - |
| 2025-11-17 | (mutually cancelled - focus on reading) | - | - | - |
| 2025-11-24 | Research Plan refinement; Lean + underlying maths | Use *Applied Logic for CS* as the entry point for proof-assistant internals; stretch idea - write a toy proof assistant | Continue reading; begin Lean practice | Yes |
| 2026-03-04 | Email only (meeting skipped) | Yuri: source-reliability rule, Lean code in thesis, type fast; draft PDF by end of Week 26 | Send draft PDF by 2026-04-26 | n/a |
| 2026-03-11 | Email only (pivot confirmation; Yuri unavailable for in-person meeting) | Toy proof assistant becomes project centrepiece; theorem scope narrowed to 2, proved in both Lean and toy; toy to be propositional-only unless a chosen theorem requires more | Draft theorem shortlist by mid-April; begin toy design | n/a |
| 2026-04-22 | Email only (shortlist signoff + meeting booking request) | Two-theorem shortlist sent for approval (Deduction theorem + Glivenko's theorem); toy language switched to Python; asked to book first in-person meeting of 2026 for next week | Await reply before implementation; tentatively hold 2026-04-28 / 2026-04-30 for the meeting | n/a |

### Template for next Meeting

```markdown
### YYYY-MM-DD

**Agenda**
-

**Outcomes**
-

**Action items**
- [ ]

**Signed**: pending
```

## Email Archive

### 2026-03-04 - Student Progress Update → Yuri

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

### 2026-03-04 - Yuri's Response

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

### Actions Derived from Yuri's Email

- [ ] Before citing any source, check it's 100% reliable (trusted-publisher textbooks, peer-reviewed papers, lecture notes by mathematicians with doctorates). Track citability in [[reading notes]].
- [ ] Only my own Lean/Coq/toy-assistant work counts toward report page-count; existing proofs only reproduced if they illustrate a technical point.
- [ ] Heavy use of appendices for "lengthy details" of formalisation code.
- [ ] **Send draft PDF by end of Week 26 (2026-04-26)** - highest-priority action.

### Pivot Confirmation - 2026-03-11 (Summary)

Scope change agreed by email (Yuri unavailable for in-person; details in [[logbook]] and [[Research Plan]] §12 Addendum):

- Toy propositional-logic proof assistant moves from stretch goal to project centrepiece.
- Formalisation target narrowed from 2–3 theorems to **2**, each proved in **both** Lean and the toy.
- Coq drops out as a secondary formalisation target; its role becomes ecosystem commentary only.
- Yuri's steer: "Don't overbuild the toy. It only needs to be big enough for the chosen theorems."
