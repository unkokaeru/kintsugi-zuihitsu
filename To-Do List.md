# To-Do List

> [[Organising my Life]]: make areas of my life more distinct (personal, academic, work, financial)

- Continuously work on **[[yatagarasu]]** work:
	- % Keep finishing the **Kanban board**…
		- % Review that **[[minor code changes]]** all are implemented.
			- ? Where you are -> appointments calendar (at Mildenhall for the day).
		- **Complete integrations** to clarify existing processes, complete read-only spreadsheet sync, then move two-way with Cliniko sync.
			- % *Modify plans away from "live syncing" to "**prioritised syncing**" - default to once a day at 3am, with the exception of high importance items (like cancellations etc.).*
			- ! Confirm active therapists using active emails.
			- ! Get a list of rooms and pods for each clinic.
			- **Set scope** - work order tracker, mileage & expenses, room booking, Tricare authorisations, caseload allocations; push data in and map to existing platform structure. Some parts need email notifications to line manager / `infoapp@`, like work order amendments for cancellations, frequency, location, therapy break, or discharge changes. After full integration, push back tidied spreadsheets. REQUEST ALL STAFF-ACCESSIBLE SPREADSHEETS/LOOKER STUDIO DASHBOARDS ETC.
			- Live on the week commencing the 22nd? Check with participant availability for **onboarding call**.
	- ? Verify @tctspeechtherapy.co.uk domain on Resend.
	- ? Use <https://mail.google.com/mail/u/2/#inbox> (bot@tct…) for automation instead of will@…
	- **Stretch goals**:
		- Record **[[help videos]]**.
		- **Resource management page** (for toys & assessments leaving the clinic): QR codes attached where possible, otherwise a list of QR codes similar to shops.
		- Add **mileage report** downloading, with specifiable formats (e.g., CSV) for integration with payroll software.
		- **LEA information**: class, teacher, likes/dislikes?
		- When are **reports** due? Invoicing / pricing matrix?
		- **Asana**-like abilities too and stronger staff onboarding (including documents, like driving licenses etc.).
		- Support **peer supervision** sessions as part of a user's caseload and calendar.
		- **Check mobile view**, look into persistent notifications for work order tracking, too.
		- Consider adding some sort of emphasis/**tagline for the platform** that it removes admin from therapists and enables suggestion-based processes instead of automatic, to retain oversight and autonomy.
	- Prep for **finance meeting** mid-July.
	- **Tidy and complete notes** within Obsidian, around the platform.
	- ? Complete the **main website SEO** overhaul based on [[website-audit_tctspeechtherapy_co_uk_2026-05-12.pdf|this document]]; do something similar for the temporary Yatagarasu domain.
- **Clean up personal bits**.
	- ! **Sort out the plants** - watering stakes etc. + update app.
	- ! Move everything out of NordLocker.
	- ! Help Zac: budget & maths materials.
	- Reset **Gmail password**.
	- Pump up **tyres**.
	- Add **Japan photos** to <https://immich.mycode.rocks>.
	- Plan when to go **bouldering & the gym**.
	- Cancel **old car insurance** & complain.
	- Book **window shield repair** (<https://nationalwindscreens.co.uk/hastingdirect>).
	- Swap IKEA bulbs @ **Kirkby** & generally finish moving.
	- Contact HMRC regarding VAT gap.
	- Follow up on Maicey ADHD/ASC paperwork.
	- ? Make my CV public and schedule something (AI agent?) to check how up-to-date it is regularly against my LinkedIn and notes etc.
- **Shopping for essentials** - face wash, etc.
- **Overhaul williamfayers.com** based on [[website-audit_williamfayers_com_2026-05-12.pdf|this document]].
- Play Minecraft (**Sniffers**!).
- ? Watch "Good Luck Have Fun Don't Die" **film**.
- Complete **Home Assistant**/Dokploy/Spare Laptop stuff + Ruview.
- % Complete **routine app** (ebisu) -> send to brother.
- Tidy up and update **this vault**.
- **Prep for year 4 of my degree**:
	- **Financial Kinetics** - the main ideas/methods of the mathematical theory of financial markets, the methods of practical calculations of traded asset volatilities from historical data, and the volatilities of option price.
	- **Lie Algebras** - originated frorm the theory of continuous transformation groups to introduce more linear structure and facilitate the classification of "simple Lie groups". Focus on abstract Lie algebras to learn the basic properties of various classes of Lie algebras - soluble, nilpotent, semisimple, graded, etc. -, important automorphism results, derivations of Lie algebras, and the classification of finite-dimensional simple complex Lie algebras.

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
