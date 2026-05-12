# To-Do List

> [[Organising my Life]]: make areas of my life more distinct (personal, academic, work, financial)
> Remember to draw back on literature more when writing within academia! - practice this?

- Continuously work on **[[yatagarasu]]** work:
	- **Immediate code changes**:
		- Work order edit modal missing data: customer type blank; authorisation fields arbitrary; schedule unpopulated; concerns/areas of focus unpopulated; additional requirements currently free text that should be structured.
		- Make sure that the rooms page is dynamic and actually shows the rooms from platform settings' locations, and shows real bookings from the appointments scheduled, too.
		- Confirm visibility: seniors see all clients/caseloads even from other teams, therapists see other therapists on the appointments calendar (but not work orders, and no edit permissions).
		- Move the leave calendar to a standalone page with anonymisation at therapist-level, and full detail at senior or above.
		- Overhaul the time range selector at the top of the dashboard to be more powerful, either with additional options like daily and/or full time range selection abilities. Ensure this reflects across ALL widgets, too.
		- Complete the room booking system, ensuring that rooms can have accurate amenities etc. and this is displayed on the rooms page and everywhere the rooms appear. Also, add pods to the booking system.
		- Overhaul widgets: consider visibility, requirements, etc. - add an expenses widget, overhaul mileage to make manual/automatic use-cases more obvious (e.g., military bases where Google Maps doesn't work).
			- Add functionality to allow therapists to record and track resource preparation/making tasks linked to appointments in the platform - from the dashboard. Extra widget? Plan it first, come up with some different ideas.
			- Consider and implement a way to reflect time spent on assessment write-ups, correspondence (e.g., letters to paediatricians), and similar tasks in the platform's time tracking or dashboard.
			- Add functionality for therapists to record, track, and submit supervision notes linked to supervision appointments, with notification to supervisors for review/sign-off.
		- Complete note writing functionality on the platform, ensuring draft/final/lock functionality, HCPC compliance, and the same functionality as Cliniko, including templates.
		- Daily briefings for summarised email notifications; overhaul the whole notification system, too, and what notifications are sent for each thing.
	- **Integrations**:
		- **Clarify existing company processes** and how they may have to change during platform rollout.
		- **Cliniko**: push data in and map to existing platform structure - appointment scheduling, note writing, client information, files (initial assessment, assessments, letters, EHCPs, etc.)
		- **Google Sheets**: set scope - work order tracker, mileage & expenses, room booking, Tricare authorisations, caseload allocations; push data in and map to existing platform structure. Some parts need email notifications to line manager / `infoapp@`, like work order amendments for cancellations, frequency, location, therapy break, or discharge changes. After full integration, push back tidied spreadsheets. REQUEST ALL STAFF-ACCESSIBLE SPREADSHEETS/LOOKER STUDIO DASHBOARDS ETC.
	- **Training**:
		- Decide phases of individuals depending on technical literacy observed in sessions; therapists -> admin, with onboarding sessions at the beginning of each staff member's roll-out to set-up accounts, refresh, and clarify any questions.
		- Record [[help videos]].
	- **Stretch goals**:
		- Add mileage report downloading, with specifiable formats (e.g., CSV) for integration with payroll software.
		- LEA information: class, teacher, likes/dislikes?
		- When are reports due? Invoicing / pricing matrix?
		- Asana-like abilities too and stronger staff onboarding (including documents, like driving licenses etc.).
		- Support peer supervision sessions as part of a user's caseload and calendar.
		- Check mobile view, look into persistent notifications for work order tracking, too.
	- **Fix the AP** in the senior room at the new clinic.
	- **Tidy and complete notes** within Obsidian, around the platform.
- Do some **[[Omoikane]]** work - below.
	- Complete **final year [[mth3011]] project**:
		- **Logbook** completion.
		- First redraft: [[Outline]] -> [[Draft Zero]] -> [[Draft One]]; trade with Alex for proofreading?
		- Complete **propositional logic proof assistant** and push to GitHub.
		- Complete **viva slides**.
	- **Review and complete work**: [[MTH3007B]] -> [[MTH3008]] (two weeks) -> [[MTH3003]] (three weeks); then work through all questions manually and refine notes/cheat sheet.
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
