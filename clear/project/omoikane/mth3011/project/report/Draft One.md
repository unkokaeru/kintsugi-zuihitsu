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

On the 1st of August, 2012, Knight Capital started the first forty-five minutes of the trading day by losing more than $460 million. This was from a basic deployment fault which reactivated faulty routing code, and the engineers responded by covering the systems in even more layers: more tests, stricter types, tighter continuous integration, and additional gates for review. Programming has had monumental pressure to build defence
