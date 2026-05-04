# The AI Inflection

The argument so far - mathematics has one layer, programming has six, the gap is the trust differential - holds independently of recent AI developments. Three things about the last three years sharpen it.

## 4.1 Speed

Large language models can produce mathematical text at a rate no human reviewer can match. A model can emit a fifty-page paper in minutes; a referee report on a fifty-page paper takes weeks. The asymmetry is the same one programming faced when continuous integration replaced overnight builds, except that the programming side had types and tests waiting at the bottom of the funnel and the mathematics side does not.

The ratio that matters is candidate-to-check throughput. In programming circa 2010, a developer could write code faster than CI could check it on slow hardware; the response was to improve CI, not slow the developer. In mathematics today, an LLM can write proofs much faster than a human referee can check them; the response cannot be to slow the LLM, because nothing is forcing the LLM to wait. It has to be to speed up the check, which means mechanical checking.

## 4.2 Hallucination

Language models confidently assert false statements when they have learned to predict the shape of true ones. In code, this manifests as plausible-looking calls to functions that do not exist, library imports that do not resolve, and APIs hallucinated wholesale. In mathematics, it manifests as plausible-looking inferences that do not follow, citations to papers that were never written, and proofs whose steps each look reasonable in isolation while the overall argument fails to connect.

The failure mode is alien to human reasoning and therefore alien to the heuristics human reviewers have developed over centuries. A reviewer expects an error to come from a misunderstanding the author had; a hallucination comes from no understanding at all, with the same surface confidence. Hallucinated citations have surfaced widely enough in chatbot-assisted academic writing that several journals now require explicit disclosure of LLM use; the citations are structurally plausible (real authors, plausible journals, reasonable years) but point at nothing. The mathematical analogue - a proof step that looks like a valid invocation of a known lemma but is not - is exactly what peer review is least equipped to catch reliably at speed.

## 4.3 Where AI Is Helping

AI is not only a hazard; it is increasingly a co-author. Three concrete examples make the helping side tangible.

**Tao's blueprint methodology applied to PFR [10].** A research-active mathematical breakthrough - Marton's Polynomial Freiman-Ruzsa conjecture - was decomposed in advance into a graph of lemmas, each with a proof sketch, and discharged in parallel by dozens of contributors with mathlib-scale automation behind them. Some lemmas were filled in with explicit AI assistance. Lean's kernel re-checks every lemma. Three weeks from preprint to verified proof. This was not possible in 2015.

**AlphaProof and AlphaGeometry on IMO 2024 [15].** DeepMind's reinforcement-learning-trained models emitted Lean tactic scripts for International Mathematical Olympiad problems; Lean's kernel certified four of six at silver-medal level. The models' outputs are explicitly LLM-generated and explicitly human-untrusted; the certification is mechanical. The medal is real because the kernel said so.

**Lean-Copilot and proof autoformalisation [16].** A growing class of tools translates between informal mathematics and Lean, with the kernel as the trust boundary. The tools are confidently wrong some non-trivial fraction of the time. Without the kernel they would be unusable; with it they are useful.

The thread through all three is the same: the kernel did the work peer review could not, at the speed AI required.

## 4.4 Where AI Is Hurting

The flip side is mathematical content produced by LLMs that *did not* go through a kernel. Chatbot-authored proofs circulate on social media regularly, frequently make plausible errors, and occasionally get cited by people who did not check. arXiv preprints with hallucinated citations have appeared in number large enough that several journals now require explicit disclosure of LLM assistance. None of this is unique to mathematics - the legal profession has had its own hallucinated-case-law incidents - but mathematics has the additional vulnerability that its peer-review pipeline was already overloaded before LLMs joined the queue.

The asymmetry between §4.3 and §4.4 is exact and instructive. AlphaProof's outputs are trustworthy because Lean's kernel checked them. The chatbot's outputs are dangerous because nothing did. The difference is not about the model: AlphaProof and a general-purpose chatbot share architectural ancestry and would have similar raw error rates on raw mathematical claims. The difference is about whether a kernel sat between the model and the literature.

## 4.5 The Inflection

This is the inflection. AI capable of producing publishable-looking mathematics now exists; AI capable of producing publishable-looking *errors* in mathematics also exists; and the only reliable filter between the two, given the speed at which AI can produce candidates, is mechanical proof checking. Peer review remains valuable for the same things it was valuable for before - taste, framing, significance, exposition, the social construction of what mathematics is for - but it is no longer load-bearing for correctness when the proposer is not human.

The programming community went through this transition ten years earlier with a different generation of automation. When linters, compilers, and CI pipelines reached the point where they could check faster than a reviewer could read, the standards shifted. Reviewers stopped checking what tools could check, and started checking what tools could not. Mathematics is at the same threshold for proofs.

The remaining sections develop the argument in depth. §5 introduces the formal foundations a kernel rests on. §6 surveys the tools available. §7 examines five landmark cases. §8 builds a kernel from scratch on the page, so the reader can see what one looks like. §§9-11 use the kernel - and Lean's - to formalise two propositional theorems, with the comparison delivering on the central question.
