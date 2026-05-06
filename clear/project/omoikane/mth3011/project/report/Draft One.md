# Formal Methods in Mathematics

> **Name**: William Fayers
> **Module**: MTH3011 Project Component
> **Supervisor**: Dr Yuri Santos Rego
> **Date**: May 2026

## Abstract

For centuries, mathematics has relied on peer review to filter out invalid arguments, but peer review alone cannot catch every mistake - especially in long, or highly specialised, proofs. Other fields face similar problems, and we'll explore software engineering's response - layers of mechanical checks: type systems, tests, continuous integration, fuzzing, and formal verification. This report asks what comparable systems exist in mathematics, then evaluating where they add value and where they add overhead without a matching gain in rigour. It explores proof assistants and the pivotal moments that proved their worth to the mathematical community, then develops a proof assistant for propositional logic to formalise the Deduction Theorem and Glivenko's Theorem. The same results are then formalised in Lean 4, showing how these ideas extend into contemporary formal methods in mathematics to develop safety-critical systems, support the frontier of research mathematics, and ground AI-assisted proof production.

## Table of Contents

1. Introduction
2. Trust and Verification in Software Engineering
3. Trust and Verification in Mathematical Practice
4. Artificial Intelligence and Mechanical Checking
5. Logical and Type-Theoretic Background
6. Proof Assistants
7. Case Studies in Formal Verification
8. Construction of a Toy Proof Assistant
9. Formalising Two Theorems in the Toy Assistant
10. Formalising the Same Theorems in Lean 4
11. Comparison of the Two Formalisations
12. Discussion
13. Conclusion
- Acknowledgements
- References
- Appendix

## 1 Introduction

### 1.1 Overview

On the 1st of August, 2012, Knight Capital started the first forty-five minutes of the trading day by losing more than $460 million. This was from a basic deployment fault which reactivated faulty routing code [18], and the engineers responded by covering the systems in even more layers: more tests, stricter types, tighter continuous integration, and additional gates for review. Programming has had monumental pressure to build defence-in-depth, often controlling enormous portions of the world's economy, because humans are fallible; they write buggy code.

Mathematics had not responded the same way. A proof must pass peer review, sometimes several rounds of peer review, but are taken on trust thereafter. This system works by building a mixture of reasoning and trust, which works when each part of the system can fit comfortably in one head. It strains when they do not.

Two events clearly illustrate this problem. First, the Needham-Schroeder public key protocol in 1978, which was accepted as secure based on the routine peer review and design rationale. However, in 1995, Gavin Lowe exposed an explicit man-in-the-middle attack via formal analysis [11]: a critical vulnerability standing for 17 years. Prior to this, in 1963, the Feit-Thompson theorem - a monolithic 255 page proof, foundational for the classification of finite single groups - was accepted, without a single end-to-end verification by an individual; the size exceeded an individual's capacity. This verification was only completed in 2012 by a 150,000-line machine-checked Coq proof, developed by a Microsoft Research/INRIA team [7].

Generally, the past demonstrates that when a proof overwhelms one review's capacity, errors can hide for a long time - ranging from embarrassment to fatality, depending on what's relying on the proof. With the recent rise in the use of AI, this capacity is overwhelmed even quicker. Large language models now produce proofs and code faster than any human review could possibly match, and with errors that reviewers aren't accustomed to catching: confident hallucinations. Despite this, DeepMind's AlphaProof and AlphaGeometry [15] have reached medal-level performance on Olympiad problems by writing Lean tactic scripts and rechecking each via the kernel - grounding the AI's output in formal methods. A similar trend is emerging in research mathematics, the most recent example being the PFR conjecture's three-week formalisation in Learn 4 [10]. In parallel, dozens of contributors decomposed Tao, Gowers, Green, and Manners' preprint into lemmas; rechecked by Lean's kernel before counting towards the proof. The kernel allows the AI proof suggestion to be transformed into a formally verified one, without the need for manual human review at every step.

Proof assistants, such as Lean [5], Coq [6], Isabelle/HOL, Agda, or PVS, are all the analogous layers to software's unit tests, type checkers, and continuous integration. They mechanically enforce validity with a small, trusted kernel, which checks each inference rule by rule; all tactics, automation, and LLM suggestions outside of the kernel must produce a part of the proof that the kernel accepts.

The thesis of this report is that mathematics is now in a similar position to programming around 1990: the tools exist, the cost of usage has fallen, and they've elevated from academic rigour to practical infrastructure. To demonstrate this, this report builds a proof assistant from scratch, formalises two theorems inside it, and formalises the same two theorems in the industry-standard Lean 4. The build is deliberately kept small to be digestible in a single sitting of reading - around 1,000 lines of Python with a 96-line kernel. By the end of Section 8, the reader has, in effect, watched a proof assistant get assembled from first principles, and can understand the renewed value of proof assistants under the reframing of AI.

### 1.2 Road Map

To begin this report, Sections 2-4 will set up the framing: programming's defence in depth, mathematics' single layer of peer review, and the pressure thus created by AI-assisted mathematics. Then, Section 5 lays the foundations for formalisations with logic, type theory, Curry-Howard, and Gödel's caveat. Section 6 explores the current proof assistant ecosystem, and Section 7 discusses five landmark case studies within it, to prime the reader to develop a toy assistant in Section 8. Sections 9-10 then formalise two theorems in the toy assistant, then in Lean, and Section 11 compares the two. Finally, Section 12 returns to the opening analogy with everything assembled, and Section 13 closes the report.

## 2. Trust and Verification in Software Engineering

The Knight Capital incident is a useful case to begin with exploring, as it wasn't caused by an individual making an obvious mistake. Instead, the SEC describes the cause as old code, mixed with an incomplete deployment, some missed automated warnings, and inadequate controls interacting under the load of production [18]. This myriad of factors is exactly the compound failure which is countered by the engineering practice of layers.

Hence, programming's response to these failures is usually to build on these layers. Due to the many failures of other industries, modern best practice has standardised the feature flags, gated rollouts, and pre-production deployment that Knight's process missed. So, it repeats: a type of error is missed, a new layer of mechanical check is built, and over time the layers combine into a structure that catches almost everything.

### 2.1 The Layers

The current structure of these layers, used by modern production code, is split into the following:

1. **Types**: the most fundamental defence, enforced by the programming language itself. A Python `int` cannot be passed to a function expecting `str`, and a Rust `String` cannot be passed where an `&str` is expected. The check is mechanical and will reject many types of error at compile time, before even any tests can be run. Pierce [13] laid the foundational ideas for these type systems, which modern languages have made the first thing a programmer sees and the easiest thing to satisfy,
2. **Tests**: for individual functions (unit tests), entire assemblies (integration tests), and the flows visible to the user (end-to-end tests). In some communities, types predate tests, and others tests predate types; but either way, the final shape is the same - an objective assertion that runs against the actual code.
3. **Continuous integration**: every piece of work committed to the final codebase triggers a full build