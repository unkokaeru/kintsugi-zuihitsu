# Speaker Script

Narration delivered alongside [[slide deck]] for the MTH3011 critical review presentation. Each `---` marks a slide transition. See [[critical review]] for summary, reflection, and Q&A notes.

---

Welcome everyone. Today I'll be presenting a critical review of Ole Peters' 2019 paper "The Ergodicity Problem in Economics," published in Nature Physics.

This is a provocative paper that claims economics contains a fundamental error dating back to the 17th century — specifically, that economists wrongly assume ergodicity when modelling decisions under uncertainty.

Over the next 10 minutes, I'll summarise the paper's core argument, evaluate its mathematical claims, assess the empirical evidence, and then bring in counterarguments from the economics literature to deliver what I hope is a balanced assessment.

Let's start with the aims and objectives of this review.

---

The aim of this presentation is to critically evaluate Peters' central claim — that economics has made a fundamental error by assuming ergodicity.

I've structured this around five objectives. First, I'll make sure we all understand what the paper is actually arguing. Then I'll dig into the maths and the experimental evidence. Crucially, I'll bring in the response from economists — particularly Doctor, Wakker, and Wang's rebuttal, also published in Nature Physics. Finally, I'll try to give a fair, balanced verdict.

This structure is important because Peters' paper is deliberately provocative — he's a physicist telling economists they've been wrong for 300 years — so we need to be careful to separate the genuine insights from the overstatements.

Let me start with some context about the paper itself.

---

Ole Peters is not an economist — he's a physicist based at the London Mathematical Laboratory. The paper was published in Nature Physics, which is a prestigious journal, but it's worth noting this is a physics journal reviewing the field of economics. The expert reviewers would have been physicists, not economists.

It's also a Perspective article — this is an invited commentary piece, not a primary research paper with new experimental data. That's a distinction worth keeping in mind when we assess the strength of the claims.

Another thing I noticed: of the 27 references, more than 10 are Peters' own work or that of close collaborators at the London Mathematical Laboratory. That's an unusually high rate of self-citation for this kind of article.

The paper is part of a broader research programme Peters has been developing since about 2011, which he calls "Ergodicity Economics." So this isn't a one-off paper — it's part of a sustained effort to reframe economic theory.

---

Now let's get into the mathematics. Ergodicity is a concept from statistical mechanics. An observable is ergodic if its time average — what one entity experiences over time — equals its expectation value — the average across many entities at one point in time.

Peters' key insight is this coin-toss gamble. Imagine you bet your entire wealth each round. Heads, you gain 50%. Tails, you lose 40%.

If you compute the expected wealth change — the ensemble average — you get positive 5%.

*(reveal: +5.0% ensemble-average box)*

This looks like a good bet.

But if you compute the time-average growth rate — what actually happens to your wealth over many rounds — you get negative 5.3% per round. You'll go bankrupt.

*(reveal: −5.3% time-average box)*

This is because wealth under multiplicative dynamics is non-ergodic: the time average doesn't equal the expectation value. Peters argues this is the fundamental issue — economists use expected values, but for non-ergodic quantities like wealth, this gives the wrong answer.

Peters proposes maximising the time-average growth rate instead of expected utility. For multiplicative dynamics, this yields logarithmic utility — but this is mathematically identical to the Kelly criterion from 1956. We'll return to this novelty question later. Let's now look at the experimental evidence.

---

The main empirical evidence Peters presents is the Copenhagen experiment by Meder and colleagues.

18 subjects were given real money — about 150 dollars — and asked to make 312 choices in each of two environments: one with additive gambles and one with multiplicative gambles. The researchers fit a parameter eta to each subject's choices, where 0 means linear utility and 1 means log utility.

The result: all 18 subjects shifted their behaviour towards log utility in the multiplicative environment, exactly as ergodicity economics predicts.

However — and this is important — this paper was only a preprint when Peters cited it. It was later published in PLOS Computational Biology in 2021, but with significant revisions based on reviewer concerns.

The peer reviewers flagged several issues. The sample of 18 is very small. The stakes are low — lab money, not real economic decisions. And critically, the outcomes were applied at the end of the experiment, not sequentially — which actually undermines the whole dynamic, time-average argument. If you only experience the outcome once at the end, there is no time average to speak of.

Now let me turn to what I think the paper does well, before getting into the main criticisms.

---

First, the writing is genuinely excellent. For a paper spanning physics, mathematics, and economics, it's remarkably clear. The coin-toss example is one of those examples that, once you see it, you never forget it. It immediately makes the abstract concept of non-ergodicity concrete.

The paper also raises a genuinely important question. Even if Peters overstates the implications — which I'll argue he does — the question of how well economic models handle the passage of time is legitimate and worth asking.

And to his credit, Peters acknowledges his intellectual predecessors. He doesn't pretend the Kelly criterion doesn't exist — he just argues the framing is different.

Now, with that said, let me turn to what I think are the paper's significant weaknesses.

---

Peters claims that expected utility theory implicitly assumes ergodicity — that it requires people to somehow interact with copies of themselves in parallel universes. This is a dramatic claim.

But Doctor, Wakker, and Wang — three economists who published a direct rebuttal in Nature Physics in 2020 — point out that this is simply not what EU does. Expected utility theory is a representation theorem. It says: if your preferences satisfy certain axioms — completeness, transitivity, continuity, independence — then there exists a utility function such that you act as if you're maximising expected utility. It's a mathematical representation of preferences, not a physical prediction about ensembles.

Here's the really ironic part: it's actually Peters' own framework that requires the ergodicity assumption. His Equation 8 maps growth-rate optimisation onto expected utility by assuming a specific ergodicity condition. So the very thing he accuses economics of doing — assuming ergodicity — is something his own framework relies on.

*(reveal: strawman callout)*

This means the paper's central critique is directed at a strawman version of EU. That's a serious problem for a paper whose entire thesis depends on EU being wrong.

---

The second major weakness is what I'd call scope overreach combined with a lack of genuine novelty.

You can see on the lineage table here that the mathematical ideas Peters arrives at have a long history. Whitworth noted the geometric mean issue in 1870. Kelly derived growth-rate maximisation in 1956. Latané applied it in economics in 1959. Peters' contribution in 2019 is the "ergodicity framing" — but is that really enough to constitute a paradigm shift?

Peters takes a specific critique of one aspect of economic theory and extrapolates to claim that "the entire field of economics" has drifted in the wrong direction. Doctor, Wakker, and Wang call this the "ubiquity fallacy": yes, time is everywhere, but that doesn't mean every economic decision should be modelled as an intertemporal growth problem. Many decisions are genuinely one-shot — choosing between job offers, voting, medical treatments.

Toda's 2023 critique argues that ergodicity economics hasn't produced any falsifiable prediction that differs from what log-utility already gives us.

So the key question is: is this a genuine paradigm shift, or is it known ideas with new branding? I lean toward the latter, but the pedagogical contribution is still valuable.

Let's look at the third weakness.

---

Let me go through the empirical issues in more detail.

The most obvious problem is the sample size.

*(reveal: "18 subjects" card)*

18 subjects is very small for a study that's supposed to support a paradigm shift. Modern behavioural economics experiments typically use hundreds of participants.

*(reveal: "\$150" card)*

The stakes are also problematic. \$150 of lab money doesn't trigger the same decision-making processes as real economic stakes. Would someone making a mortgage decision behave the same way?

*(reveal: "END" card)*

But the most damaging criticism, in my view, is the design issue: outcomes were applied at the end of the experiment, not sequentially. The entire point of ergodicity economics is that what matters is the time average. But if you only experience the outcome once at the end, there is no time average. The experimental design doesn't actually test the mechanism Peters claims is important.

Now let me bring all of this together.

---

On the right side of the ledger: Peters is correct that time dynamics matter. The distinction between ensemble averages and time averages is mathematically real, and his coin-toss example beautifully illustrates why it matters. The paper is a model of clear scientific communication, and it's opened a valuable cross-disciplinary conversation.

On the wrong side: the paper's central claim — that EU implicitly assumes ergodicity — is not supported. Doctor, Wakker, and Wang have shown convincingly that EU is a representation theorem, not a physical prediction. The novelty is overstated given the Kelly criterion. The scope of the critique is not justified. The empirical evidence is too thin.

*(reveal: verdict box)*

My overall verdict: this is a paper with a genuinely valuable pedagogical contribution wrapped in an overstated polemic. The insight is real; the revolution is not.

---

To conclude: Peters' paper asks a genuinely important question — does economics handle time properly? The mathematical insight about non-ergodicity is sound and the pedagogical presentation is excellent.

But the claim that this constitutes a "pernicious error" corrupting all of economics is not supported by the evidence presented. Expected utility theory does not assume ergodicity. The growth-rate prescription is not new. The empirical evidence is preliminary.

I think the most constructive future direction is the one Doctor, Wakker, and Wang suggest: collaboration, not competition. Ergodicity economics and expected utility theory aren't necessarily incompatible — they may be asking different questions about the same phenomena.

Thank you for your attention; I look forward to any questions.

---

These are the key references I've used in this review. The primary source is Peters' 2019 paper in Nature Physics. The most important counterargument comes from Doctor, Wakker, and Wang, also published in Nature Physics in 2020. I've also drawn on Toda's 2023 critique, the published version of the Copenhagen experiment by Meder et al., and the historical work by Kelly, von Neumann and Morgenstern, and Bernoulli.

---

## Anticipated Q&A (Preparation Notes)

Concise answers prepared in advance. See [[critical review]] for the questions that were actually asked on the day.

**Q: Isn't Peters right that economists ignore time dynamics?**

Partly. Many standard models are indeed static, and that's a fair criticism. But dynamic EU theory, stochastic calculus in finance, and the Kelly criterion all deal with time dynamics. The claim that the *entire* field ignores time is overstated.

**Q: What's the difference between the Kelly criterion and ergodicity economics?**

Mathematically, the prescription is the same: maximise expected logarithmic growth. Peters argues the *framing* is different — he derives it from first principles about time averages rather than information theory. Critics argue this distinction doesn't produce any new testable predictions.

**Q: If the paper has so many problems, why was it published in Nature Physics?**

Nature Physics is a high-impact journal, but it's a physics journal. The reviewers would have been physicists, not economists. The paper's physics and mathematics are sound — the issues are with how it characterises economics. Also, it's a Perspective article, which has different review standards than a primary research paper.

**Q: Do you think ergodicity economics has any future?**

Yes, but as a complement to existing theory, not a replacement. The pedagogical contribution is valuable, and the emphasis on time dynamics deserves more attention. But it needs to engage with existing economic theory rather than dismiss it.

**Q: What about the spelling and grammar of the paper?**

The paper is well-written throughout, consistent with Nature's editorial standards. It uses British English conventions and I found no significant errors. The quality of the prose is actually one of the paper's strengths.
