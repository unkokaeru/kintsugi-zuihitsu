|   |
|---|
|## **No Yelling**|
|Create a function that transforms sentences ending with multiple question marks `?` or exclamation marks `!` into a sentence only ending with one without changing punctuation in the middle of the sentences.|
|### **Examples**|
|```<br>noYelling("What went wrong?????????")<br>output = "What went wrong?"<br><br>noYelling("Oh my goodness!!!")<br>output = "Oh my goodness!"<br><br>noYelling("I just!!! can!!! not!!! believe!!! it!!!")<br>output = "I just!!! can!!! not!!! believe!!! it!"<br># Only change repeating punctuation at the end of the sentence.<br><br>noYelling("Oh my goodness!")<br>output = "Oh my goodness!"<br># Do not change sentences where there exists only one or zero exclamation marks/question marks.<br>```|
|### **Notes**|
|- Only change **ending punctuation** - keep the exclamation marks or question marks in the middle of the sentence the same (see third example).<br>    <br>- Don't worry about mixed punctuation (no cases that end in something like `?!??!`).<br>    <br>- Keep sentences that do not have question/exclamation marks the same.|