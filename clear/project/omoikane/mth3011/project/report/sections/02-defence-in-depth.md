# Defence in Depth: How Programming Earned Trust

The Knight Capital incident from §1 has a closing detail the introduction skipped. The deployment that triggered the loss had passed unit tests, integration tests, and a code review. What got past those layers was a configuration error: a flag named `power-peg` reactivated dormant code on seven of eight production servers. The error was caught not by any of the layers Knight had built but by the trading system running for forty-five minutes before someone could pull the plug.

Programming's response, predictably, was another layer. Industry post-mortems standardised feature flags, gated rollouts, and the "deploy to one server first" pattern Knight's process had skipped. The shape repeats: a class of error gets missed, a new layer of mechanical checking is built, and over time the layers compose into something that catches almost everything. Modern production code typically passes through five or six of them before reaching users.

## 2.1 The Layers

**Types.** The cheapest defence and the first. A Python `int` cannot be passed to a function expecting `str`; a Rust `String` cannot be passed where an `&str` is expected. The check is mechanical, runs at compile time, and rejects whole classes of error before any test runs. Pierce [13] is the canonical reference for the foundational ideas; modern industrial languages have made type systems the first thing a programmer sees and the cheapest thing to satisfy.

**Tests.** Unit tests check individual functions, integration tests check assemblies, end-to-end tests check user-visible flows. The discipline pre-dates types in some communities and post-dates them in others; the consistent shape is the same - an executable assertion the writer cannot fool because it runs against the actual code. Test-driven development, popularised in the late 1990s, made the test the *first* thing written and the implementation the part that follows.

**Continuous integration.** Every commit triggers a fresh build and the full test suite, in a clean environment, on every supported platform. The shift from "pre-release smoke test" to "per-commit verification" was the move that made trunk-based development workable at scale. CI catches integration errors that individual tests miss because individual tests run in isolation and CI runs the whole.

**Review.** Code review remains the layer that catches errors mechanical checks cannot - design issues, security implications, "this works but it is confusing later". Review is human, slow, and expensive, which is why the modern stack puts it last in the chain so reviewers can focus on what mechanical checks cannot reach.

**Fuzzing and property-based testing.** A fuzzer feeds random or constrained-random inputs into a function and looks for crashes, assertion violations, or invariant breaches. Hypothesis-style property testing makes the same idea structured: state the invariant, generate inputs, watch the invariant survive. This catches what unit tests miss because the test author cannot enumerate every possible input.

**Formal verification.** At the safety-critical end, the layers above are insufficient. NASA's PVS verifies flight-control software against a formal specification; AWS uses TLA+ for the consistency properties of S3 storage; CompCert is a C compiler with a Coq-verified front-to-back correctness proof. Formal verification is expensive, but for systems where bugs cost lives, money, or both, the cost is paid.

## 2.2 Why Each Layer Exists

The trajectory is consistent: away from "trust the writer" and towards "let a tool check it". Each layer was added because the previous layers missed something specific.

The Therac-25 incidents (1985-1987) - a radiation-therapy machine whose race-condition bug killed at least three patients with massive overdoses [17] - drove early adoption of safety-case methodology and concurrent-system verification. The Ariane 5 explosion (1996, $370 million destroyed) was a single integer overflow in inertial-reference software reused from Ariane 4 without re-checking the bounds; type-safe arithmetic and explicit-conversion discipline were the response. The Intel Pentium FDIV bug (1994, $475 million correction cost) was a missing entry in a lookup table for floating-point division, which formal hardware verification would have caught and which Intel adopted afterwards. Knight Capital itself joined the list and reshaped deployment practice across the industry.

In each case, an error class got past the existing checks and a mechanical layer was built afterwards to catch the same class next time. The cost-of-failure determined how aggressively the new layer was deployed. For a CRUD app, types and tests are sufficient. For flight software, model checking and formal verification are mandatory.

## 2.3 The Cumulative Effect

By 2026 the cumulative position is straightforward: a working programmer trusts code that has passed through the layers and is wary of code that has not. The trust is not in the writer but in the chain of checks the code went through. A senior engineer reviewing a pull request does not re-derive the correctness of the algorithm; they confirm that types pass, tests are present and meaningful, CI is green, and the design fits the rest of the codebase.

This is the trust model mathematics is missing. Peer review remains the only systematic layer between a proposed proof and the literature, and peer review is - by the lights of the programming model - one layer where six or seven would be standard practice. §3 takes up what mathematics has been doing instead, and where it has been working or failing, before §4 introduces the AI-era pressure that has made the gap more urgent than it has ever been.
