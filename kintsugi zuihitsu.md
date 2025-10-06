# Kintsugi Zuihitsu

<img src="chillin sushi guy.svg" style="width:100%;">

**Kintsugi** (金継ぎ), the art of golden repair, transforms brokenness into beauty by highlighting fractures with precious metal rather than hiding them. **Zuihitsu** (随筆), meaning "following the brush," represents the Japanese literary form of spontaneous, personal reflection that flows naturally from thought to thought.

This vault embodies both concepts: **kintsugi** in how it transforms scattered thoughts and broken learning attempts into a unified golden network of knowledge, and **zuihitsu** in its organic, wandering structure that follows curiosity rather than rigid categorization.

The structure separates [[clear|transparent knowledge]] that can be shared publicly from [[cloudy|protected development]] requiring privacy, while maintaining natural connections between all areas of exploration.

## To-Do List

- [[yatagarasu]] - clean up notes, split system into dev/prod, send laptop link, and complete the system.
- [[omoikane]]:
	- Notes:
		- [[mth3006 lecture 1#How is the Fourier Transform Derived?]]
		- [[mth3006 lecture 2#How Do You Derive the Fourier Cosine Transform and Its Inverse?]]
		- [[mth3006 lecture 2#How Do You Derive the Fourier Sine Transform and Its Inverse?]]
		- [[mth3006 lecture 3#How Do You Prove the Scaling Property of Fourier Transforms?]]
		- [[mth3006 lecture 3#How Do You Prove the Translation Property of Fourier Transforms?]]
		- [[mth3006 lecture 3#How Do You Prove the Exponential Multiplication Property of Fourier Transforms?]]
		- [[mth3007 lecture 1#How Can We Derive the Formula for Least Squares Regression?]]
		- [[Guest lecture 1 - is the quantum realm bigger than we think]] - expand and complete
		- Pedagogy prep for Thursday.
		- Prep **all** Numerical Methods.
	- Questions:
		- [[mth3006 weekly problems 1]] - complete questions.
		- [[mth3006 weekly problems 2]] - complete questions.

```dataviewjs
const unresolvedLinksMap = app.metadataCache.unresolvedLinks;
const todoItems = [];

// Function to extract clean filename from path
function getCleanFileName(filePath) {
  // Extract just the filename from the full path and remove .md extension
  const fileName = filePath.split('/').pop().replace(/\.md$/, '');
  return fileName;
}

// Function to create a simple file link
function createFileLink(fileName) {
  const baseName = getCleanFileName(fileName);
  return `[[${baseName}]]`;
}

// Function to create header link
function createHeaderLink(fileName, headerText) {
  const baseName = getCleanFileName(fileName);
  return `[[${baseName}#${headerText}]]`;
}

// Collect unresolved links
for (let page in unresolvedLinksMap) {
  const unresolved = Object.keys(unresolvedLinksMap[page]);
  if (unresolved.length === 0) continue;
  
  for (let link of unresolved) {
    todoItems.push({
      type: "Unresolved Link",
      item: `[[${link}]]`,
      containedIn: createFileLink(page)
    });
  }
}

// Find headers with body only containing "…"
for (let page of dv.pages()) {
  const file = app.vault.getAbstractFileByPath(page.file.path);
  if (!(file && file instanceof obsidian.TFile)) continue;

  const content = await app.vault.read(file);
  
  // Regex to match headers and their content until next header or end
  const headerRegex = /^(\#{1,6})\s+(.*?)\s*\n([\s\S]*?)(?=\n\#{1,6}\s|\n*$)/gm;

  let match;
  while ((match = headerRegex.exec(content)) !== null) {
    const headerText = match[2].trim();
    const body = match[3].trim();
    
    if (body === '…') {
      todoItems.push({
        type: "Stub Header",
        item: createHeaderLink(page.file.name, headerText),
        containedIn: createFileLink(page.file.name)
      });
    }
  }
}

// Group items by their link to consolidate duplicates
const groupedItems = {};
for (let item of todoItems) {
  const key = item.item;
  if (!groupedItems[key]) {
    groupedItems[key] = {
      type: item.type,
      item: item.item,
      containedIn: []
    };
  }
  // Add contained in files, avoiding duplicates
  if (!groupedItems[key].containedIn.includes(item.containedIn)) {
    groupedItems[key].containedIn.push(item.containedIn);
  }
}

// Create the output
if (Object.keys(groupedItems).length === 0) {
  dv.header(2, "To-Do List");
  dv.paragraph("✅ No unresolved links or stub headers found!");
} else {
  // Convert to table format
  const tableData = Object.values(groupedItems).map(item => {
    const containedInText = item.containedIn.length > 1 
      ? item.containedIn.join(', ')
      : item.containedIn[0];
    
    return [
      item.type,
      item.item,
      containedInText
    ];
  });
  
  dv.header(2, "To-Do List");
  dv.table(
    ["Type", "Item", "Found In"],
    tableData
  );
}
```
