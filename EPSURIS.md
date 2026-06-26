# EPSURIS

As part of the Engineering and Physical Sciences Undergraduate Research Internship Scheme (EPSURIS), the University of Lincoln is pleased to offer a handful of paid, full-time summer internships.

Duration of Internships will be dependent on the successful candidate's availability, and will run for 8-10 weeks, with a latest start date of 06-Jul-2026.

The Intern recruited for the School of Engineering and Physical Sciences (SEPS) will provide an exciting opportunity for a student to gain hands-on experience by working within an established and active research group within the school.

## Responsibilities

- Systematic extraction of published scientific data on the microscopic structures of polymers (long-chain molecules).
- Independently implement a programme of research activities as directed by the academic supervisor, including modelling, data collection and analysis, exercising independent judgement in day-to-day research decisions.
- Work autonomously between scheduled supervision meetings to progress the research programme, self-managing time and priorities, and adapting plans in response to emerging findings without requiring continuous oversight.
- Attend and contribute to research group meetings, seminars, and discussions.
- Maintain accurate records of research activities, results, and progress throughout the internship.
- Report regularly to the academic supervisor on research progress, critically evaluating findings, proposing adaptations to the research approach, and exercising judgement on priorities between scheduled meetings.
- Produce a research output at the end of the internship (e.g. written report, research poster, or oral presentation) for dissemination through institutional channels.
- Comply with all relevant health and safety, research ethics, and responsible research requirements applicable to the project.
- Work collaboratively and professionally within the research group environment.

## Essential Criteria

### Technical

- [x] Good programming skills in Python.
- [x] Experience with data analysis libraries such as Pandas and NumPy.
- [x] Understanding of machine-learning and deep-learning fundamentals.
- [x] Experience with at least one deep-learning framework such as PyTorch or TensorFlow.
- [x] Ability to work with structured and unstructured datasets.
- [x] Ability to read and interpret scientific literature.

### Personal

- [x] Strong analytical and problem-solving skills; ability to engage with research-level challenges, critically evaluate evidence, and synthesise information from multiple sources to draw reasoned conclusions.
- [x] Demonstrable capacity for independent, self-directed working within a defined research framework; able to manage their own workload, take initiative, identify and resolve problems, and make progress without requiring continuous supervision.
- [x] Good written and verbal communication skills, including the ability to present findings clearly.
- [x] Willingness to learn new techniques, tools, and methodologies and apply them to unfamiliar problems.
- [x] Ability to work collaboratively and constructively as part of a research team
- [x] Strong time management and organisational skills; able to plan and manage a sustained programme of work independently across an 8–10-week full-time project, meeting milestones without day-to-day direction.

---

# EPSURIS Interview - One-Page Quick Reference

**William Fayers** · MMath 3rd yr (First track) · Software Engineer / Fractional CTO

**The pitch:** This project is the bridge between my two interviewers - Greenall's statistical mechanics of polymers and Thota's ML/DL methods. Lead with modelling fit; curiosity closes.

## Motivation & Fit

- **Why:** Revisits chemistry background + current modelling passion. Modelling first, curiosity as closer.
- **Stats-mech gap:** Frame as *transferable* maths/computational skill + genuine pull, not a deficit.
- **Modelling example:** Polymer conformations (monomer positions/angles) → tensors; fit vs. comparable literature; train on macroscopic experimental data to predict properties from a conformation.

## Technical Evidence

- **Chess "mini-me":** Positions/moves as tensors → CNN trained to mimic one Lichess account; minimax baseline to benchmark.
- **ML from scratch:** Implemented CNN as a probability tree (nodes = gamestates, edges = legal moves) - built fundamentals, not just called a library.
- **Literature extraction:** "All data has patterns" - maths-text parser strips fluff, restructures losslessly for LLM note-gen; same principle pulls structured polymer data.
- **Messy data (clinical migration):** Sample → pattern → bucket → recurse → validate → normalise into DB.

## Polymer Physics (interview depth)

- **Freely-jointed chain:** $N$ bonds length $b$, independent directions → ideal $\langle R^2\rangle = Nb^2$, size $\sim\sqrt{N}$.
- **Temperature:** Boltzmann weight $e^{-E/k_BT}$; high $T\to$ ideal random walk, low $T\to$ low-energy configs. Core tension = **energy vs entropy**.
- **Self-avoidance (the key follow-up):** Add excluded volume → **SAW**, chain swells: $R\sim N^{\nu}$, $\nu>1/2$. Flory: $\nu=3/(d+2)$ → **3/5 in 3D**, 3/4 in 2D; true 3D $\approx 0.588$. [math.mit](https://math.mit.edu/classes/18.366/lec05/lec19.pdf)
- **Upper critical dimension $d_c=4$:** above it self-avoidance is irrelevant, recover $\nu=1/2$. [math.mit](https://math.mit.edu/classes/18.366/lec05/lec19.pdf)
- **Thermal blob:** below it chain looks ideal ($N^{1/2}$), above it swollen ($N^{3/5}$) - links straight to temperature. [link.aps](https://link.aps.org/accepted/10.1103/PhysRevLett.107.148301)
- **Kuhn length:** coarse-grain stiff real chains into $N$ independent segments so the model applies. [link.aps](https://link.aps.org/accepted/10.1103/PhysRevLett.107.148301)
- **Monte Carlo:** intuitive idea, scary name (MC = "random points under the curve"); stochastic → macro distributions.

## ML for Polymers ("polymer informatics" - Speak the Field's language)

- **Representation is the whole game:** structure → numerical fingerprint → supervised property prediction; encoding matters more than model choice. [pubs.aip](https://pubs.aip.org/aip/jap/article/128/17/171104/1062836/Machine-learning-predictions-of-polymer-properties)
- **Name-drop representations:** SMILES repeat-unit strings; **graph neural nets** (now beat handcrafted features); compact **HAPPY** for small data; LLMs fine-tuned on SMILES emerging. [arxiv](https://arxiv.org/html/2506.02129v1)
- **Target properties:** $T_g$ (most-extracted), dielectric constant, thermal conductivity, solubility, density. [nature](https://www.nature.com/articles/s41524-024-01293-8)
- **Data-efficiency tie-in:** datasets are small + curated → high-capacity nets overfit; GNNs/compact encodings stay data-efficient. [pubs.acs](https://pubs.acs.org/doi/10.1021/acs.chemmater.2c02991)

## Literature Data Extraction (the Project's First Task - the Real subfield)

- **Recognised NLP pipeline:** NER (polymer names + property values) → relation extraction → pairs; tools = ChemDataExtractor, MaterialsBERT. [ramprasad.mse.gatech](https://ramprasad.mse.gatech.edu/wp-content/uploads/2023/04/NLP-DataExtraction-npjCompMat2023.pdf)
- **Scale is real:** ~2.4M articles → ~681k polymer papers → ~1M records / 24 properties. [community.materialssquare](https://community.materialssquare.com/t/data-extraction-from-polymer-literature-using-large-language-models/1070)
- **Entity normalisation = hard bit:** same polymer, many names (common + IUPAC); embedding clustering resolves. [pubs.acs](https://pubs.acs.org/doi/abs/10.1021/acs.jcim.1c00554)
- **Hybrid human-in-the-loop** is best practice - validates my QC below. [tsapps.nist](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=923676)
- **My PDF→dataset pipeline:** structure ID → auto-extract easy fields → harder figure/number data under heading hierarchy. **QC:** random-sample review, neighbour-comparison anomaly flags, unit/magnitude sanity (catches "2.5 vs 25 nm"), relationship-constraint tests.
- **Conflicts:** threshold for manual review or average - depends on data quality (prefer controlled-env average over one unconstrained point).

## Independence & Working Style

- **Self-directed:** daily as CTO; solely timelined + adapted a live 1.5-yr project.
- **Risk:** build float time; ship early, iterate to surface problems fast.
- **Stuck reproducing a paper:** find other attempts → decompose by influencing factor → abstract to a solvable form.
- **Long tasks:** time-block, active breaks, chunk + alarms (I hyperfocus).
- **Logistics:** platform live → day job evenings/weekends only, full-time daytime on this; already sustained full-time study through the job's peak.

## Communication & Collaboration

- **Mixed audiences:** board meetings + 500+ hrs tutoring → translate depth to plain terms.
- **Disagreement:** understand their view, find the stem - misunderstanding or real flaw, both net-positive.
- **Output:** treat the final report/poster as a first-class deliverable (Thota values clear dissemination). [sustain-cdt](https://www.sustain-cdt.ai/cdt-supervisors/mthota)

## Maths, Tools, Reproducibility

- **Strongest: numerical methods** - turning maths into code.
- **Reproducibility:** "Blankslate" template - CI test gates, docstring-driven auto-docs, installable builds, used everywhere.

## Self-Critique (high-value)

- **When NOT to use NNs:** when it overcomplicates; final model often belongs in interpretable analytical/physical equations, not a black box. Small data overfits.
- **Suspicious of a "perfect" fit:** overfitting/held-out failure; params physically implausible? too few params for too-clean a fit (leakage)? perturbation-sensitive? simpler baseline nearly as good?
- **Physics-informed > black-box:** prefer models respecting known scaling ($R\sim N^{\nu}$); violating known physics on held-out data is a red flag regardless of fit. [math.mit](https://math.mit.edu/classes/18.366/lec05/lec19.pdf)

## Two Things to Preempt

- $\langle R^2\rangle = Nb^2$ is right for the **ideal** chain - expect the immediate "but real chains self-avoid" follow-up ($\nu=3/5$, 3D), Greenall's core territory. [link.aps](https://link.aps.org/accepted/10.1103/PhysRevLett.107.148301)
- "Microscopic structures of polymers" = repeat-unit/conformational structure feeding property prediction - anchor answers to that vocabulary. [pubs.aip](https://pubs.aip.org/aip/jap/article/128/17/171104/1062836/Machine-learning-predictions-of-polymer-properties)
