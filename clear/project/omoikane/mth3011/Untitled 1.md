# Outline: The Role and Value of Formal Methods in Mathematical Proof and Software Verification

## 1. **The Fragility of Human Proof**

- Mathematical proofs depend on human reasoning, which is fallible.
- Historical examples of overlooked flaws:
	- Needham-Schroeder protocol (1978) [0][1]: remained unchallenged for years before vulnerabilities surfaced.
	- Feit-Thompson theorem [2]: hundreds of pages long, impossible for one person to verify in full.
- Broader consequence: as proof complexity grows, review capacity fails to keep up. [3]
- Real-world stakes: in safety-critical systems (aerospace, cryptography, medical devices), such errors can have lethal consequences. [4]

## 2. **Formal Methods as a Solution**

- Formal methods use proof assistants to verify logic mechanically.
- Key tools: Lean [5], Coq [2][6], PVS. [7]
- Verification is achieved through type theory and higher-order logic rather than human intuition.
- Real-world adoption:
	- NASA: certifies flight systems with PVS. [7][8]
	- Intel: applies formal verification after costly processor errors. [9][10]
	- Amazon AWS: mandates formal verification for core infrastructure. [11][12]
- Significance: now industrial necessity, not purely academic rigor.

## 3. **The Escalating Stakes**

- Mathematical and computational complexity continues to increase.
- Peer review cannot catch every subtle flaw in modern research or engineering. [3]
- AI systems require provable trustworthiness beyond empirical testing.
- Growing demand for formal verification expertise across academia and industry.

## 4. **Personal Motivation and Perspective**

- Programmer's experience: tests in Python and TypeScript miss rare edge cases.
- Mathematician's experience: peer review sometimes fails to catch errors promptly.
- Attraction to formal methods: the pursuit of certainty at the intersection of logic, computation, and proof.
- Personal goal: apply formal precision where conventional methods fall short.

## 5. **Planned Project Approach**

- Theoretical foundations:
	- Study logic, type theory, and Gödel's incompleteness theorems. [13][14]
- Practical experience:
	- Formalize mathematical theorems using Lean [5] or Coq. [2]
	- Understand the workflow and demands of mechanized proof.
- Applied analysis:
	- Investigate how formal verification is used in real-world systems. [11][12]
	- Evaluate when it provides real value versus unnecessary overhead.
- Final objective: produce both rigorous technical proofs and a critical assessment of when formal methods truly matter.

---

## Reference List

[0] G. Ceelen, "Chosen-name attacks: An overlooked class of type-flaw attacks on authentication protocols," in *Proc. Workshop Security Protocols*, 2007.

[1] University of Texas at Austin, "Lecture 61: Attacks on Needham-Schroeder," Course material, available: <https://www.cs.utexas.edu/~byoung/cs361/lecture61.pdf>

[2] G. Gonthier *et al.*, "A machine-checked proof of the odd order theorem," in *Proc. Interactive Theorem Proving (ITP)*, LNCS, Springer, 2013, pp. 163–179.

[3] C. Greiffenhagen, "Checking correctness in mathematical peer review," *Stud. History Philosophy Sci. A*, vol. 101, pp. 41–51, 2023.

[4] S. Paul *et al.*, "Formal verification of safety-critical aerospace systems," in *Proc. 2023 IEEE Aero. Conf.*, IEEE, 2023, pp. 1–16.

[5] L. de Moura and S. Ullrich, "The Lean 4 theorem prover and programming language," in *Proc. Int. Conf. Automated Deduction (CADE)*, LNCS 12699, Springer, 2021, pp. 495–505.

[6] The Coq Development Team, "The Coq proof assistant reference manual," Technical Report, INRIA, 2023.

[7] J. Rushby, C. Shankar, and S. Owre, "Formal verification of the AAMP5 microprocessor: A case study in the industrial use of formal methods," in *NASA Contractor Rep. CR-4382*, 1991.

[8] S. Langely Formal Methods Program, "Theorem proving with PVS," available: https://shemesh.larc.nasa.gov/fm/pvs/

[9] B. Bentley, "Validating the Intel Pentium 4 microprocessor," in *Proc. Design Autom. Conf. (DAC)*, ACM, 2001, pp. 244–248.

[10] B. Cook, "Formal reasoning about the security of Amazon Web Services," in *Proc. Computer Aided Verification (CAV)*, LNCS 10982, Springer, 2018, pp. 1–12.

[11] B. Cook, "How Amazon Web Services uses formal methods," *Commun. ACM*, vol. 61, no. 4, pp. 68–77, 2018.

[12] B. Cook and C. Varela, "Systems correctness practices at Amazon Web Services," *Commun. ACM*, vol. 68, no. 6, pp. 82–92, 2025.

[13] L. C. Paulson, "Formalising Gödel's incompleteness theorems, I," Blog post, May 2022, available: https://lawrencecpaulson.github.io/2022/05/18/Formalising-Incompleteness-I.html

[14] P. Raatikainen, "Gödel's incompleteness theorems," in *Stanford Encyclopedia of Philosophy*, Stanford Univ., 2023, available: https://plato.stanford.edu/entries/goedel-incompleteness/
