# Wikibot Programming Competition

## Overview & Objectives

**[Wikibot](https://github.com/alexfayers/wikibot)** is a programming competition inspired by the classic ["Wikipedia race" game](https://en.wikipedia.org/wiki/Wikipedia:Wiki_Game), where competitors develop automated solutions to navigate from one random Wikipedia page to another using only internal HTML links.

### Key Objectives

- **Develop an automated solution** finding paths between random Wikipedia pages
- **Optimise** for efficiency, elegance, and code quality
- **Compete** across technical and creative categories
- **Have fun** with friendly competition

## Rules

### ✅ Allowed

- Any programming language, or combination of languages
- Open-source libraries/snippets (with attribution)
- Compiled binaries (with source code provided)
- Algorithmic approaches including:
	- Breadth/depth-first search
	- Heuristic methods
	- Cached/pre-computed data

### 🔒 Strict Requirements

- GitHub repository submission (private/public)
- Original core solution (AI-assisted but not fully AI-generated)
- Complete build/execution documentation
- Agreed development timeframe

### ⚠️ Disqualification & Disputes

- Cheating results in immediate disqualification
- Disputes resolved by a pre-agreed impartial arbitrator

## Competition Format

Each round provides competitors with start and end Wikipedia pages as JSON input. The Wikibot must output the complete path taken from start to end, traversing only via internal HTML links found on each page.

**Input Format:**

```json
["{start_url}", "{end_url}"]
```

**Expected Output Format:**

```json
["{start_url}", "{intermediate_url_1}", "{intermediate_url_2}", "...", "{end_url}"]
```

### Execution & Timing

- Timing begins when the bot starts and ends when the final solution is returned
- Multiple rounds ensure robustness and fairness
- Two timing modes available:
	- **Real-world mode**: Includes network latency from HTTP requests
	- **Cached mode**: Uses local/cached data to isolate algorithmic performance

## Scoring Categories

### Runtime Performance

| Metric | Description | Points (1st/2nd/3rd) |
| :-- | :-- | :-- |
| **Steps** | Fewest links traversed from start to end | 15 / 10 / 5 |
| **Speed** | Fastest computation time | 15 / 10 / 5 |
| **Memory** | Lowest peak memory usage | 5 / 3 / 1 |

### Code Quality

| Metric | Description | Points (1st/2nd/3rd) |
| :-- | :-- | :-- |
| **Size** | Fewest non-whitespace characters | 5 / 3 / 1 |
| **Elegance** | Most readable/maintainable code (judged) | 5 / 3 / 1 |
| **Testing** | Most thorough test coverage (judged) | 5 / 3 / 1 |

### Innovation

| Metric | Description | Points (1st/2nd/3rd) |
| :-- | :-- | :-- |
| **Creativity** | Most novel/creative approach (judged) | 5 / 3 / 1 |

*Scoring adjusts proportionally for more than three competitors*

## Submission Requirements

- Complete GitHub repo containing:
	- Source code/binaries
	- Build instructions
	- Dependency documentation
	- Minification proof (if applicable)
  
- README must explain:
	- Algorithmic approach
	- Execution instructions
	- Testing methodology

## Fair Use & Conduct

- **Wikipedia compliance**: All solutions must respect Wikipedia's terms of service and avoid abusive scraping
- **Sportsmanship**: Competitors expected to maintain collaborative spirit throughout the competition

## About Wikibot

*Conceived by @alexfayers after extensive play via [The Wiki Game Daily](https://www.thewikigamedaily.com/). Rules developed collaboratively with @unkokaeru and LLM assistance.*

---

**May the best Wikibot win!** 🏆
