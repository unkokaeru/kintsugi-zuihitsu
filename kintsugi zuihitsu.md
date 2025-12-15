# Kintsugi Zuihitsu

<img src="chillin sushi guy.svg" style="width:100%;">

**Kintsugi** (金継ぎ), the art of golden repair, transforms brokenness into beauty by highlighting fractures with precious metal rather than hiding them. **Zuihitsu** (随筆), meaning "following the brush," represents the Japanese literary form of spontaneous, personal reflection that flows naturally from thought to thought.

This vault embodies both concepts: **kintsugi** in how it transforms scattered thoughts and broken learning attempts into a unified golden network of knowledge, and **zuihitsu** in its organic, wandering structure that follows curiosity rather than rigid categorization.

The structure separates [[clear|transparent knowledge]] that can be shared publicly from [[cloudy|protected development]] requiring privacy, while maintaining natural connections between all areas of exploration.

## To-Do List

1. [[MTH3004]]…
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
2. [[MTH3006]]…
	1. Lecture notes…
		1. **Review and Complete MTH3006 lecture 1** (20 minutes)
		2. **Review and Complete MTH3006 lecture 2** (20 minutes)
		3. **Review and Complete MTH3006 lecture 3** (20 minutes)
		4. **Review and Complete MTH3006 lecture 4** (20 minutes)
		5. **Review and Complete MTH3006 lecture 5** (20 minutes)
		6. **Review and Complete MTH3006 lecture 6** (20 minutes)
		7. **Review and Complete MTH3006 lecture 7** (20 minutes)
		8. **Review and Complete MTH3006 lecture 8** (20 minutes)
		9. **Review and Complete MTH3006 lecture 9** (20 minutes)
		10. **Review and Complete MTH3006 lecture 10** (20 minutes)
		11. **Review and Complete MTH3006 lecture 11** (20 minutes)
		12. **Review and Complete MTH3006 lecture 12** (20 minutes)
		13. **Review and Complete MTH3006 lecture 13** (20 minutes)
		14. **Review and Complete MTH3006 lecture 14** (20 minutes)
		15. **Review and Complete MTH3006 lecture 15** (20 minutes)
		16. **Review and Complete MTH3006 lecture 16** (20 minutes)
		17. **Review and Complete MTH3006 lecture 17** (20 minutes)
		18. **Review and Complete MTH3006 lecture 18** (20 minutes)
		19. **Review and Complete MTH3006 lecture 19** (20 minutes)
		20. **Review and Complete MTH3006 lecture 20** (20 minutes)
		21. **Review and Complete MTH3006 lecture 21** (20 minutes)
		22. **Review and Complete MTH3006 lecture 22** (20 minutes)
	2. Problem sets…
		1. **Complete MTH3006 Problems Set 1** (90 minutes)
		2. **Complete MTH3006 Problems Set 2** (90 minutes)
		3. **Complete MTH3006 Problems Set 3** (90 minutes)
		4. **Complete MTH3006 Problems Set 4** (90 minutes)
		5. **Complete MTH3006 Problems Set 5** (90 minutes)
		6. **Complete MTH3006 Problems Set 6** (90 minutes)
		7. **Complete MTH3006 Problems Set 7** (90 minutes)
		8. **Complete MTH3006 Problems Set 8** (90 minutes)
		9. **Complete MTH3006 Problems Set 9** (90 minutes)
		10. **Complete MTH3006 Problems Set 10** (90 minutes)
		11. **Complete MTH3006 Problems Set 11** (90 minutes)
	3. Cheat sheet refinement
3. [[MTH3011]]…
	1. Guest lectures…
		1. **Watch Guest Lecture 4 recording** and take initial notes (45 minutes)
		2. **Write up Guest Lecture 4** blog-style seminar report (30 minutes)
		3. **Review/rewrite Guest Lecture 2** seminar report (30 minutes)
		4. **Review/rewrite Guest Lecture 3** seminar report (30 minutes)
4. [[MTH3007]]…
	1. Lecture notes…
		1. **Review and Complete MTH3007 lecture 1** (30 minutes)
		2. **Review and Complete MTH3007 lecture 2** (30 minutes)
		3. **Review and Complete MTH3007 lecture 3** (30 minutes)
		4. **Review and Complete MTH3007 lecture 4** (30 minutes)
		5. **Review and Complete MTH3007 lecture 5** (30 minutes)
		6. **Review and Complete MTH3007 lecture 6** (30 minutes)
		7. **Review and Complete MTH3007 lecture 7** (30 minutes)
		8. **Review and Complete MTH3007 lecture 8** (30 minutes)
	2. Problem sets…
		1. **Complete MTH3007 Problems Set 1** (90 minutes)
		2. **Complete MTH3007 Problems Set 2** (90 minutes)
		3. **Complete MTH3007 Problems Set 3** (90 minutes)
		4. **Complete MTH3007 Problems Set 4** (90 minutes)
		5. **Complete MTH3007 Problems Set 5** (90 minutes)
		6. **Complete MTH3007 Problems Set 6** (90 minutes)
		7. **Complete MTH3007 Problems Set 7** (90 minutes)
		8. **Complete MTH3007 Problems Set 8** (90 minutes)
5. [[Yatagarasu]]…
	1. Prep for UAT Phase 1.2, to the send out email(s) inviting users.
	2. Complete onboarding form.
	3. Integrate and refine all notes, including [[User Feedback]], to establish remaining progress.
6. [[Kuebiko]]…
	1. Continue development on [[FFMS]] & combine with a schedule generator (that objectively scores/weights daily activities to optimise).
7. [[Kintsugi Zuihitsu]]…
	1. **Search for highlighting in notes** to count flashcards (5 minutes)
	2. **Change flashcard syntax** from == to ** globally (30 minutes)
	3. **Update Obsidian settings** for new cloze format (5 minutes)
	4. **Test new flashcard format** works correctly (10 minutes)
	5. **Complete unfinished notes** shown below (in Obsidian)…

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
  dv.paragraph("✅ No unresolved links or stub headers found!");
} else {
  dv.table(["Item", "Found In"], data);
}
```
