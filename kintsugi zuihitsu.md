# Kintsugi Zuihitsu

<img src="chillin sushi guy.svg" style="width:100%;">

**Kintsugi** (金継ぎ), the art of golden repair, transforms brokenness into beauty by highlighting fractures with precious metal rather than hiding them. **Zuihitsu** (随筆), meaning "following the brush," represents the Japanese literary form of spontaneous, personal reflection that flows naturally from thought to thought.

This vault embodies both concepts: **kintsugi** in how it transforms scattered thoughts and broken learning attempts into a unified golden network of knowledge, and **zuihitsu** in its organic, wandering structure that follows curiosity rather than rigid categorization.

The structure separates [[clear|transparent knowledge]] that can be shared publicly from [[cloudy|protected development]] requiring privacy, while maintaining natural connections between all areas of exploration.

## To-Do List

> Maybe open VS Code in this directory to complete notes quicker alongside Copilot?

- **[[Yatagarasu]]**: Complete onboarding form, integrate [[User Feedback]] into notes, and keep working on the platform.
- **[[Omoikane]]**:
	- ? Change cloze flashcard generation to be bold text instead of highlighted text.
	- **[[MTH3004]]**: Outline [[What is Effective Teaching in Mathematics]] according to [[mth3004 lecture 3]], [[mth3004 lecture 4]], and [[mth3004 lecture 5]]. Learn the National Curriculum and my subject of choice throughout for the poster part of the coursework.
	- **[[MTH3006]]**: Review and complete all recent notes and questions.
	- **[[MTH3007]]**: Review and complete all recent notes and questions. Follow slides not the [[nm_worksheet_wk8.pdf|worksheet for week 8]] - incorrect formula.
	- **[[MTH3011]]**: Re-write [[Research Plan]] and complete articles ([[Guest lecture 2]], [[Guest Lecture 3]], and [[guest lecture 4]]).
- **Kuebiko**: Continue development on [[FFMS]] & combine with a schedule generator (that objectively scores/weights daily activities to optimise).

### Granular Task List

1. MTH3006…
	1. Lecture notes…
		1. **Complete MTH3006 lecture 12 notes** from this week (30 minutes)
		2. **Complete MTH3006 lecture 11 notes** from this week (30 minutes)
		3. **Review MTH3006 lectures 1-10** for understanding (2 hours)
	2. Problem sets…
		1. **Complete MTH3006 Problems Set 1** (90 minutes)
		2. **Complete MTH3006 Problems Set 2** (90 minutes)
		3. **Complete MTH3006 Problems Set 3** (90 minutes)
		4. **Complete MTH3006 Problems Set 4** (90 minutes)
		5. **Complete MTH3006 Problems Set 5** (90 minutes)
		6. **Complete MTH3006 Problems Set 6** (90 minutes)
	3. Cheat sheet refinement
2. MTH3011…
	1. Guest lectures…
		1. **Watch Guest Lecture 4 recording** and take initial notes (45 minutes)
		2. **Write up Guest Lecture 4** blog-style seminar report (30 minutes)
		3. **Review/rewrite Guest Lecture 2** seminar report (30 minutes)
		4. **Review/rewrite Guest Lecture 3** seminar report (30 minutes)
3. MTH3007…
	1. Lecture notes…
		1. **Review MTH3007 lectures 1-5 notes** (1.5 hours)
		2. **Complete MTH3007 lecture 6 notes** (30 minutes)
		3. **Complete MTH3007 lecture 7 notes** (30 minutes)
		4. **Complete MTH3007 lecture 8 notes** using slides not worksheet (30 minutes)
	2. Problem sets…
		1. **Complete MTH3007 Problems Set 1** (90 minutes)
		2. **Complete MTH3007 Problems Set 2** (90 minutes)
		3. **Complete MTH3007 Problems Set 3** (90 minutes)
		4. **Complete MTH3007 Problems Set 4** (90 minutes)
		5. **Complete MTH3007 Problems Set 5** (90 minutes)
		6. **Complete MTH3007 Problems Set 6** (90 minutes)
		7. **Complete MTH3007 Problems Set 7** (90 minutes)
		8. **Complete MTH3007 Problems Set 8** (90 minutes)
4. MTH3004…
	1. Essay…
		1. **Research MTH3004 essay sources** on effective mathematics teaching (1 hour)
		2. **Create essay outline** based on lectures 3, 4, 5 (1 hour)
		3. **Write essay introduction** (30 minutes)
		4. **Write essay body paragraph 1** (30 minutes)
		5. **Write essay body paragraph 2** (30 minutes)
		6. **Write essay body paragraph 3** (30 minutes)
		7. **Write essay conclusion** (30 minutes)
		8. **Edit and proofread essay** (30 minutes)
		9. **Submit MTH3004 essay draft** (by 27th November)
	2. Poster…
		1. **Research National Curriculum** for chosen topic (1 hour)
		2. **Plan poster structure** for Year 7-13 topic development (30 minutes)
5. Kintsugi Zuihitsu…
	1. **Search for highlighting in notes** to count flashcards (5 minutes)
	2. **Change flashcard syntax** from == to ** globally (30 minutes)
	3. **Update Obsidian settings** for new cloze format (5 minutes)
	4. **Test new flashcard format** works correctly (10 minutes)
6. Yatagarasu…
	1. …
7. Kuebiko…
	1. …

```dataviewjs
const unresolvedLinksMap = app.metadataCache.unresolvedLinks;
const todoItems = [];

// Get clean filename without path or extension
function getCleanFileName(filePath) {
  return filePath.split('/').pop().replace(/\.md$/, '');
}

// Unresolved link stubs, SKIP if page is in attached/
for (let page in unresolvedLinksMap) {
  if (page.startsWith('attached/')) continue; // Skip attached/ files

  const unresolved = Object.keys(unresolvedLinksMap[page]);
  if (unresolved.length === 0) continue;
  for (let link of unresolved) {
    todoItems.push({
      item: `[[${link}]]`,
      foundIn: `[[${getCleanFileName(page)}]]`
    });
  }
}

// Stub headers ("…") — also SKIP pages in attached/
for (let page of dv.pages()) {
  if (page.file.path.startsWith('attached/')) continue; // Skip attached/ files

  const file = app.vault.getAbstractFileByPath(page.file.path);
  if (!(file && file instanceof obsidian.TFile)) continue;

  const content = await app.vault.read(file);
  const headerRegex = /^(\#{1,6})\s+(.*?)\s*\n([\s\S]*?)(?=\n\#{1,6}\s|\n*$)/gm;

  let match;
  while ((match = headerRegex.exec(content)) !== null) {
    const headerText = match[2].trim();
    const body = match[3].trim();
    if (body === '…') {
      const pageName = getCleanFileName(page.file.name);
      todoItems.push({
        item: `[[${pageName}#${headerText}|${headerText}]]`,
        foundIn: `[[${pageName}]]`
      });
    }
  }
}

// Group by item + foundIn (avoid duplicate rows)
const seen = new Set();
const data = [];
for (let t of todoItems) {
  const key = t.item + '|' + t.foundIn;
  if (!seen.has(key)) {
    seen.add(key);
    data.push([t.item, t.foundIn]);
  }
}

// SORT by foundIn, then item
data.sort((a, b) => {
  if (a[1].toLowerCase() === b[1].toLowerCase()) {
    return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
  }
  return a[1].toLowerCase().localeCompare(b[1].toLowerCase());
});

if (!data.length) {
  dv.header(2, "To-Do List");
  dv.paragraph("✅ No unresolved links or stub headers found!");
} else {
  dv.header(2, "To-Do List");
  dv.table(["Item", "Found In"], data);
}
```
