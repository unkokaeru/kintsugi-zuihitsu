# Kintsugi Zuihitsu

<img src="chillin sushi guy.svg" style="width:100%;">

**Kintsugi** (金継ぎ), the art of golden repair, transforms brokenness into beauty by highlighting fractures with precious metal rather than hiding them. **Zuihitsu** (随筆), meaning "following the brush," represents the Japanese literary form of spontaneous, personal reflection that flows naturally from thought to thought.

This vault embodies both concepts: **kintsugi** in how it transforms scattered thoughts and broken learning attempts into a unified golden network of knowledge, and **zuihitsu** in its organic, wandering structure that follows curiosity rather than rigid categorization.

The structure separates [[clear|transparent knowledge]] that can be shared publicly from [[cloudy|protected development]] requiring privacy, while maintaining natural connections between all areas of exploration.

## To-Do List

- Split Yatagarasu building to dev/prod branches to complete the prod system to the point of being able to test.
- Complete [[mth3004 lecture 2#What is "Effective Teaching"?|mth3004 lecture 2 paragraphs]].
- Finish [[Guest lecture 2 - Inquiry into the packing properties of spheres]] notes.
- [[FFMS]]?
- Look into downloading all Blackboard modules for archiving.
- Catch up with [[MTH3007 lecture 3]] when less tired 😵 - [[nm_worksheet_wk_2.pdf]] & open VS Code.
- Spreadsheet of things I do, all with weights of importance to objectively score and hence optimise my time.
- Get Windows 11 etc. on `BILBODESK`.

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
