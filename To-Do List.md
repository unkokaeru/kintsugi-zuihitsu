# To-Do List

> [[Organising my Life]]: make areas of my life more distinct (personal, academic, work, financial)
> Remember to draw back on literature more when writing within academia! - practice this?

- Continuously work on **[[yatagarasu]]** work:
	- **Claude**:
		- Work order edit modal missing data: customer type blank; authorisation fields arbitrary; schedule unpopulated; concerns/areas of focus unpopulated; additional requirements currently free text that should be structured.
		- Confirm client information "Confirm & Continue" button does nothing.
	- **Training material**: ==cover everything, define scope and create with Claude Design==; after training, decide phases of individuals depending on technical literacy observed in sessions; record [[help videos]]. Heads up about slow rollout going live after - therapists -> admin, too.
	- **Spreadsheet integration**: set scope; push data in and map to existing platform structure. Some parts need email notifications to line manager / `infoapp@`, like work order amendments for cancellations, frequency, location, therapy break, or discharge changes. After full integration, push back tidied spreadsheets.
	- ==**Cliniko integration**: push data in and map to existing platform structure.==
	- **Tidy and complete notes** within Obsidian, around the platform.
- Do some **[[Omoikane]]** work - below.
	- Complete **final year project**:
		- **Logbook** completion.
		- First redraft: [[Outline]] -> [[Draft Zero]] -> [[Draft One]]; four sections a day?
		- Complete **propositional logic proof assistant** and push to GitHub.
		- Complete **viva slides**.
	- **Review and complete work**: [[MTH3011]] (one week) -> [[MTH3007B]] (one week) -> [[MTH3008]] (three weeks) -> [[MTH3003]] (four weeks); then work through all questions manually and refine notes/cheat sheet.
- **Shopping**
	- Office furniture - sofa bed, desk, bookshelves.
	- Maicey clothes.

```todo-wheel
```

## Incomplete Notes/Links

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
