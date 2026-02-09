<%*
const fileName = tp.file.title.toLowerCase();
const parts = fileName.split(" ");

const moduleCode = parts[0].toUpperCase();
const weekNumber = parts[3];

let totalQuestions = await tp.system.prompt("How many questions are there?", "8");
totalQuestions = parseInt(totalQuestions, 10);
if (isNaN(totalQuestions) || totalQuestions < 1) {
  totalQuestions = 8;
}
%>
# <% moduleCode %> Weekly Problems <% weekNumber %>

> **Original Documents**: [[<% moduleCode.toLowerCase() %> weekly problem sheet <% weekNumber %>.pdf|Problem Sheet]] / [[[[<% moduleCode.toLowerCase() %> weekly problem sheet <% weekNumber %> handwritten solutions.pdf|My Handwritten Solutions]] / [[<% moduleCode.toLowerCase() %> weekly problem sheet<% weekNumber %> solutions.pdf|Provided Solutions]]
>
> **Vibes**: …
>
> **Used Techniques**:
>   - …

<%* for (let questionIndex = 1; questionIndex <= totalQuestions; questionIndex++) { %>
---

## 1.<% questionIndex %>. …

> [!question]
> …

…

<%* } %>