# Kintsugi Zuihitsu

<img src="chillin sushi guy.svg" style="width:100%;">

**Kintsugi** (金継ぎ), the art of golden repair, transforms brokenness into beauty by highlighting fractures with precious metal rather than hiding them. **Zuihitsu** (随筆), meaning "following the brush," represents the Japanese literary form of spontaneous, personal reflection that flows naturally from thought to thought.

This vault embodies both concepts: **kintsugi** in how it transforms scattered thoughts and broken learning attempts into a unified golden network of knowledge, and **zuihitsu** in its organic, wandering structure that follows curiosity rather than rigid categorization.

The structure separates [[clear|transparent knowledge]] that can be shared publicly from [[cloudy|protected development]] requiring privacy, while maintaining natural connections between all areas of exploration.

## To-Do List

- [[yatagarasu]] - clean up notes, split system into dev/prod, send laptop link, and complete the system.
- [[mth3006 weekly problems 1]] - complete questions.
- Pedagogy prep for Thursday.
- Prep **all** Numerical Methods.
- [[mth3006 weekly problems 2]] - complete questions.
- Update [[mth3006]] index.
- Decide how to use the active questioning in lectures.

```dataviewjs
const unresolvedLinksMap = app.metadataCache.unresolvedLinks;
const res = {};
for (let page in unresolvedLinksMap) {
  const unresolved = Object.keys(unresolvedLinksMap[page]);
  if (unresolved.length === 0) continue;
  for (let link of unresolved) {
    if (!res[link]) res[link] = {link, usages: []};
    res[link].usages.push(dv.fileLink(page));
  }
}
dv.table(["Unresolved Link", "Contained in"], Object.values(res).map(l => [dv.fileLink(l.link), l.usages]));
```
