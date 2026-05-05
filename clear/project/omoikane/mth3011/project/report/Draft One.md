# Formal Methods in Mathematics

> **Name**: William Fayers
> **Module**: MTH3011 Project Component
> **Supervisor**: Dr Yuri Santos Rego
> **Date**: May 2026

- ? Should I break the sections into subsections? Like the examples on Blackboard? Should I have references in my abstract?

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

Two events illustrate this problem clearly. First, in 1978, the Needham-Schroeder public-key protocol. For 17 years, this was accepted as secure based on design rationale and the routine peer review. Then, Gavin Lowe in 1995 found an explicit man-in-the-middle attack via formal analysis [11]. Prior to this, in 1963, the Feit-Thompson theorem - a monolithic 255 page proof, foundational for the classification of finite single groups - was accepted, without a single end-to-end verification by an individual; the size exceeded an individual's capacity. This verification was only completed in 2012 by a 150,000-line machine-checked Coq proof, developed by a Microsoft Research/INRIA team [7].

Generally, the past demonstrates that when a proof overwhelms one review's capacity, errors can hide for a long time - ranging from embarrassment to fatality, depending on what's relying on the proof. With the recent rise in the use of AI, this capacity is overwhelmed even quicker. Large language models now produce proofs and code faster than any human review could possibly match, and with errors that reviewers aren't accustomed to catching: confident hallucinations. Despite this, DeepMind's AlphaProof and AlphaGeometry [15] have reached medal-level performance on Olympiad problems by writing Lean tactic scripts and rechecking each via the kernel - grounding the AI's output in formal methods. The PFR conjecture's three-week formalisation in Lean 4 [10] is the clearest recent example of the same trend in real research mathematics. Dozens of contributors decomposed Tao, Gowers, Green, and Manners' preprint into lemmas in parallel, with each lemma rechecked by Lean's kernel before counting towards the proof. The kernel transforms the AI's suggestion of a proof into a formally verified one, without need for manual human review.

Proof assistants - Lean [5], Coq [6], Isabelle/HOL, Agda, PVS - are the analogous layers to unit tests, type checkers, and continuous integration in software. A small trusted kernel checks each inference rule by rule, and all tactics, automation, and LLM suggestions outside the kernel must produce part of the proof the kernel accepts.

The thesis of this report is that mathematics is now in a similar position to programming around 1990: the tools exist, the cost of usage has fallen, and they've elevated from academic rigour to practical infrastructure. To demonstrate this, this report builds a proof assistant from scratch, formalises two theorems inside it, and formalises the same two theorems in the industry-standard Lean 4. The build is kept deliberately small - around 1,000 lines of Python with a 96-line kernel - to ensure trust from a single sitting's reading. By the end of Section 8, the reader has, in effect, watched a proof assistant get assembled from first principles, and can understand the renewed value of proof assistants under the reframing of AI.

### 1.2 Road Map

This report 