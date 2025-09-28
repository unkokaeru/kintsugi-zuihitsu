# MTH2006: Methods of Mathematical Physics

Module coordinator: Martin Greenall (<mgreenall@lincoln.ac.uk>).

| Course Components | Weighting | Score |
| :---------------: | :-------: | :---: |
|   In-Class Test   |    60%    |  TBD  |
|  Portfolio Test   |    40%    |  TBD  |


---
## Learning Outcomes

- [ ] **LO1**: Apply a set of methods to solve equations from mathematical physics.  
- [ ] **LO2**: Critically analyse applied problems by choosing and applying appropriate methods of mathematical physics.
- [ ] **LO3**: Formulate the main equations of mathematical physics.

---
## Revision

[[{{ module.info.name.long }} Cheat Sheets]]
[[{{ module.info.name.long }} Practice Tests]]
[[{{ module.info.name.long }} Flashcards]]

---
## Notes

### Priming (*before lecture*)

{% for lecture_number, lecture_content in module.lectures.items() %}- [[{{ module.info.name.long }} Pre-Lecture {{ lecture_number }}]]: {% for topic in lecture_content.topics %}{{ topic }}, {% endfor %}.{% endfor %}

---
### Questioning (*during lecture*)

{% for lecture_number, lecture_content in module.lectures.items() %}- [[{{ module.info.name.long }} Lecture {{ lecture_number }}]]: {% for topic in lecture_content.topics %}{{ topic }}, {% endfor %}.{% endfor %}

---
### Refining (*after lecture*)

{% for topic, subtopics in module.notes.items() %}#### {{ topic }}
{% for subtopic, notes in subtopics.items() %}##### {{ subtopic }}
{% for note_name, note in notes.items() %}- [[{{ note_name }}]]: {{ note.summary }}
{% endfor %}{% endfor %}{% endfor %}