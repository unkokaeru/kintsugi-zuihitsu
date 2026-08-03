# To-Do List

> [[Organising my Life]]: make areas of my life more distinct (personal, academic, work, financial)

- ! Continuously work on **[[EPSURIS]]** work:
	- ! **[[EPSURIS Main Tasks]]**; consider adjusting Semble, too.
	- % **Documentation**.
		- ! Write **[[Progress Summary - week 3]]**.
		- % Refine and complete **[[Progress Summary - Weeks 1 and 2]]**.
- ! Continuously work on **[[yatagarasu]]** work:
	- ! Complete **[[Yatagarasu Main Tasks]]**.
	- ! Complete the **main website SEO** overhaul based on [[website-audit_tctspeechtherapy_co_uk_2026-05-12.pdf|this document]]; do something similar for the temporary Yatagarasu domain.
	- ! Complete **misc. tasks**:
		- % **Tidy up notes** across entire directory, starting with [[Meeting Notes (15th July)]], [[Meeting notes]], and [[minor code changes]] - excluding bits that have already been implemented, after validation.
		- ? Use Ideogram/Recraft for **TCT branding**, then improve via Claude using 80s prompting & @ginyboi premium designs on YouTube.
		- ? Consider using Docker, exploring the tech used currently, other error logging (Logfire, Betterstack), self hosting more, navigation/traffic API, etc.
		- ? Review security/performance of Vercel/Supabase and adjust subscription features - align with most restrictive restraints.
		- Explore the **[WriteUpp](https://www.writeupp.com/)** data that is duplicated onto Cliniko, using these [[login details]].
		- **Use <bot@tct>** for automation instead of <will@tct>.
		- **Confirm active therapists** using active emails.
		- Get a **list of rooms** and pods for each clinic.
		- Verify @tctspeechtherapy.co.uk domain on Resend - **decide on platform domain**, generally, too.
- **Clean up personal bits**.
	- ! Use the big chalkboard for an office to-do list.
	- ! **Jellycats** from office shelves to bedroom shelves.
	- ! **Unpack everything** in the office, organise the wardrobe, and do more washing.
	- ! **Rebudget** personal and joint finances.
	- ! Deal with **plants**.
	- ? Use Ideogram/Recraft for a **profile picture**?
	- **[[Buy stuff]]** for the apartment.
	- Plan when to go **bouldering & the gym**.
	- Cancel **old car insurance** & complain.
	- Book **window shield repair** (<https://nationalwindscreens.co.uk/hastingdirect>).
	- **Contact HMRC** regarding VAT gap.
	- Follow up on **Maicey ADHD/ASC** paperwork.
- % **Complete projects**.
	- % **Home Assistant**/Dokploy/Spare Laptop stuff + Ruview.
	- % **Routine app** (ebisu) -> send to brother.
	- % **Overhaul williamfayers.com** based on [[website-audit_williamfayers_com_2026-05-12.pdf|this document]], and tidy up Obsidian, incl. note population.
		- ! Renew domain etc. via Namecheap.
	- % Make my **CV** public and schedule something (AI agent?) to check how up-to-date it is regularly against my LinkedIn and notes etc.
	- ! Update AI stuff: tidy and update from `llm-prompts`, then PR back - add `i-have-adhd` and `graph-engineering` skills, too? Research alternative/equivalent solutions throughout, as well, including "overlaying" packages.
	- Fix GitHub username repo.
	- **Autogenerate briefings** that get printed in the office, incl. Zen koans, Taoism excerpts, etc.
	- Custom **Linux** distro - ricing, etc.?
	- Get RamMap, Wiztree, and Revo Uninstaller.
- **Prep for year 4 of my degree**:
	- ? **Generally tidy up** notes & automation/workflows.
	- ? Use Ideogram/Recraft for **Lincoln logo** -> branding?
	- **Financial Kinetics** - the main ideas/methods of the mathematical theory of financial markets, the methods of practical calculations of traded asset volatilities from historical data, and the volatilities of option price.
	- **Lie Algebras** - originated frorm the theory of continuous transformation groups to introduce more linear structure and facilitate the classification of "simple Lie groups". Focus on abstract Lie algebras to learn the basic properties of various classes of Lie algebras - soluble, nilpotent, semisimple, graded, etc. -, important automorphism results, derivations of Lie algebras, and the classification of finite-dimensional simple complex Lie algebras.
- ? Play games & **chill**.
	- ! Watch "Good Luck Have Fun Don't Die" **film**.
	- ? Get **Unloop** on my Quest.
	- Minecraft - **Sniffers**!
	- **Stardew valley**!

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
