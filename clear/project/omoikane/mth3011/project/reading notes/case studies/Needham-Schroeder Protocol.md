# Needham-Schroeder Protocol

## Citation

Lowe, G. (1995). *Breaking and Fixing the Needham-Schroeder Public-Key Protocol using CSP and FDR*, in *Tools and Algorithms for the Construction and Analysis of Systems (TACAS '96)*. IEEE reference [11].

Complementary: Smyth, B. (2011). *Formal Verification of Cryptographic Protocols*, Ph.D. dissertation, University of Birmingham. IEEE reference [12].

## Claim of the Paper

The Needham–Schroeder public-key protocol (Needham and Schroeder, 1978) was accepted as secure on the strength of its design rationale and informal peer review - unchallenged for seventeen years. Lowe's 1995 analysis using the CSP process algebra and the FDR refinement-checker produced an explicit man-in-the-middle attack trace: a third party, given control of the network, can read messages that the protocol's designers believed were end-to-end private. Lowe's paper also proposes a small repair - adding the responder's identity to the second protocol message - and verifies that the amended protocol is correct under the same adversary model.

## Formalisation Details

- **Tool:** CSP (Communicating Sequential Processes) with the FDR refinement-checker.
- **Adversary model:** Dolev–Yao - attacker fully controls the network, can intercept, replay, and generate messages, but cannot decrypt ciphertext without the corresponding key.
- **Method:** model the protocol as a CSP process; specify its intended secrecy and authentication properties; ask FDR whether the model refines the specification. FDR's counterexample output *is* the attack trace.
- **Completion year:** 1995 (TACAS '96 publication).

## What It Demonstrates for My Project

This is the only one of my five case studies where the original was *wrong*, and the formal method's contribution was to *falsify* rather than re-verify. The seventeen-year gap between protocol publication and attack discovery is the headline number for §8's industrial-axis argument: in safety-critical or security-critical settings, the cost of missing the kind of error that informal peer review let through for nearly two decades is not a rounding error.

It also sets up the broader industrial case: Intel Pentium FDIV (~$475M correction cost), AWS's use of TLA+ and model checking for core S3 infrastructure, NASA's PVS-based flight-system certification - each points the same direction. Where mistakes are expensive and undetected errors accumulate, the overhead of formal verification is an insurance premium, not a tax.

## Citable: yes

Lowe holds a PhD; published in the peer-reviewed TACAS proceedings. Smyth's PhD thesis (Birmingham 2011) is a secondary reference for the wider Dolev–Yao literature. Both fit Yuri's source-reliability bar.

## Quotes & Page References

- Lowe, §1: the attack description - "an intruder Z can trick a participant A into starting a run of the protocol with him, and then relay A's messages to B in such a way that B thinks A is authenticating B".
- Lowe, §4: the repair (adding the responder's identity to the second message) and FDR's confirmation that the amended protocol satisfies the specification.
- Smyth, ch. 2: the Dolev–Yao model exposition; used for the broader-claim framing in §4.5 and §8.2.
