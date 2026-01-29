# No Yelling

> **Challenge Difficulty:** Easy | Estimated completion time: ~5 minutes

Create a function that transforms sentences ending with multiple question marks `?` or exclamation marks `!` into a sentence only ending with one without changing punctuation in the middle of the sentences.

## Examples

```python
noYelling("What went wrong?????????")
output = "What went wrong?"

noYelling("Oh my goodness!!!")
output = "Oh my goodness!"

noYelling("I just!!! can!!! not!!! believe!!! it!!!")
output = "I just!!! can!!! not!!! believe!!! it!"
# Only change repeating punctuation at the end of the sentence.

noYelling("Oh my goodness!")
output = "Oh my goodness!"
# Do not change sentences where there exists only one or zero exclamation marks/question marks.
```

## Notes

- Only change **ending punctuation** - keep the exclamation marks or question marks in the middle of the sentence the same (see third example).
- Don't worry about mixed punctuation (no cases that end in something like `?!??!`).
- Keep sentences that do not have question/exclamation marks the same.

## Solution

```python runnable
import re

def no_yelling(text: str) -> str:
    """Remove repeating punctuation at the end of a sentence.
    
    Args:
        text: Input string
        
    Returns:
        String with only one ending punctuation mark
    """
    return re.sub(r"([!?])\1+$", r"\1", text)


if __name__ == "__main__":
    print(no_yelling("What went wrong?????????"))  # What went wrong?
    print(no_yelling("Oh my goodness!!!"))  # Oh my goodness!
    print(no_yelling("I just!!! can!!! not!!! believe!!! it!!!"))  # I just!!! can!!! not!!! believe!!! it!
    print(no_yelling("Oh my goodness!"))  # Oh my goodness!
```
