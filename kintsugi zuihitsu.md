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
	- **[[MTH3006]]**: Review and complete all recent notes and questions, then complete [[MTH3006_Coursework.pdf|coursework]] and revise for the upcoming [[MTH3006_Porfolio_Test_information.pdf|midterm]].
	- **[[MTH3007]]**: Review and complete all recent notes and questions. Follow slides not the [[nm_worksheet_wk8.pdf|worksheet for week 8]] - incorrect formula.
	- **[[MTH3011]]**: Re-write [[Research Plan]] and complete articles ([[Guest lecture 2]], [[Guest Lecture 3]], and [[guest lecture 4]]).
- **Kuebiko**: Continue development on [[FFMS]] & combine with a schedule generator (that objectively scores/weights daily activities to optimise).

### Granular Task List

1. **Read and take notes on 4 existing references** for MTH3011 Research Plan (2 hours)
2. **Find and add 2-11 more references** to reach minimum 6 for MTH3011 (1-3 hours)
3. **Complete literature survey section** for MTH3011 Research Plan (1 hour)
4. **Review and potentially rewrite project description** in Research Plan (30 minutes)
5. **Submit MTH3011 Research Plan** today/tomorrow
6. **Watch Guest Lecture 4 recording** and take initial notes (45 minutes)
7. **Write up Guest Lecture 4** blog-style seminar report (30 minutes)
8. **Review/rewrite Guest Lecture 2** seminar report (30 minutes)
9. **Review/rewrite Guest Lecture 3** seminar report (30 minutes)
10. **Complete MTH3006 lecture 12 notes** from this week (30 minutes)
11. **Complete MTH3006 lecture 11 notes** from this week (30 minutes)
12. **Review MTH3006 lectures 1-10** for understanding (2 hours)
13. **Complete MTH3006 Problems Set 1** (90 minutes)
14. **Complete MTH3006 Problems Set 2** (90 minutes)
15. **Complete MTH3006 Problems Set 3** (90 minutes)
16. **Complete MTH3006 Problems Set 4** (90 minutes)
17. **Complete MTH3006 Problems Set 5** (90 minutes)
18. **Complete MTH3006 Problems Set 6** (90 minutes)
19. **Create initial MTH3006 cheat sheet draft** (2 hours)
20. **Practice test with cheat sheet version 1** (1 hour)
21. **Refine cheat sheet to version 2** (30 minutes)
22. **Practice test with cheat sheet version 2** (1 hour)
23. **Final refinement to cheat sheet version 3** (30 minutes)
24. **Final practice test** (1 hour)
25. **Get peer feedback on cheat sheet** (15 minutes wait time)
26. **Complete MTH3006 coursework** (2-3 hours)
27. **Take MTH3006 midterm** (26th at 12:30)
28. **Review MTH3007 lectures 1-5 notes** (1.5 hours)
29. **Complete MTH3007 lecture 6 notes** (30 minutes)
30. **Complete MTH3007 lecture 7 notes** (30 minutes)
31. **Complete MTH3007 lecture 8 notes** using slides not worksheet (30 minutes)
32. **Complete MTH3007 Problems Set 1** (90 minutes)
33. **Complete MTH3007 Problems Set 2** (90 minutes)
34. **Complete MTH3007 Problems Set 3** (90 minutes)
35. **Complete MTH3007 Problems Set 4** (90 minutes)
36. **Complete MTH3007 Problems Set 5** (90 minutes)
37. **Complete MTH3007 Problems Set 6** (90 minutes)
38. **Complete MTH3007 Problems Set 7** (90 minutes)
39. **Complete MTH3007 Problems Set 8** (90 minutes)
40. **Research MTH3004 essay sources** on effective mathematics teaching (1 hour)
41. **Create essay outline** based on lectures 3, 4, 5 (1 hour)
42. **Write essay introduction** (30 minutes)
43. **Write essay body paragraph 1** (30 minutes)
44. **Write essay body paragraph 2** (30 minutes)
45. **Write essay body paragraph 3** (30 minutes)
46. **Write essay conclusion** (30 minutes)
47. **Edit and proofread essay** (30 minutes)
48. **Submit MTH3004 essay draft** (by 27th November)
49. **Research National Curriculum** for chosen topic (1 hour)
50. **Plan poster structure** for Year 7-13 topic development (30 minutes)
51. **Search for highlighting in notes** to count flashcards (5 minutes)
52. **Change flashcard syntax** from == to ** globally (30 minutes)
53. **Update Obsidian settings** for new cloze format (5 minutes)
54. **Test new flashcard format** works correctly (10 minutes)

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
