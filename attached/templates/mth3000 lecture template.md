<%*

const fileName = tp.file.title.toLowerCase(); // e.g. "mth3003 lecture 3"

const parts = fileName.split(" ");

const moduleCode = parts[0].toUpperCase(); // "MTH3003"

const lectureNumber = parts[2]; // "3"

-%>

# <%= moduleCode %> Lecture <%= lectureNumber %>

> [!quote] …
> …

…

## …

…

---

## Pre-Lecture Notes from [[<%= moduleCode.toLowerCase() %> lecture notes <%= lectureNumber %>.pdf|University Notes]]

- …
