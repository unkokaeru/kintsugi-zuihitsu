# Pasting

> **Challenge Difficulty:** Medium | Estimated completion time: ~25 minutes

Given a sentence containing few instances of `"Ctrl + C"` and `"Ctrl + V"`, return the sentence after those keyboard shortcuts have been applied!

- `"Ctrl + C"` will copy **all text** behind it.
- `"Ctrl + V"` will do nothing if there is no `"Ctrl + C"` before it.
- A `"Ctrl + C"` which follows another `"Ctrl + C"` will overwrite what it copies.

## Examples

```python
#Example 1
keyboardShortcut("the egg and Ctrl + C Ctrl + V the spoon")
output = "the egg and the egg and the spoon"

#Example 2
keyboardShortcut("WARNING Ctrl + V Ctrl + C Ctrl + V")
output = "WARNING WARNING"

#Example 3
keyboardShortcut("The Ctrl + C Ctrl + V Town Ctrl + C Ctrl + V")
output = "The The Town The The Town"
```

## Notes

- Keyboard shortcut commands will appear like normal words in a sentence but shouldn't be copied themselves (see example #2).
- Pasting should add a space between words.

## Solution

```python runnable
def keyboardShortcut(sentence: str) -> str:
    """
    Process a sentence containing Ctrl+C and Ctrl+V keyboard shortcuts.
    
    Ctrl+C copies all text before it. Ctrl+V pastes the copied text.
    A Ctrl+C following another Ctrl+C overwrites the clipboard.
    
    Args:
        sentence: String containing text and keyboard shortcut commands.
        
    Returns:
        The sentence after applying all keyboard shortcuts.
        
    Examples:
        >>> keyboardShortcut("the egg and Ctrl + C Ctrl + V the spoon")
        'the egg and the egg and the spoon'
        >>> keyboardShortcut("WARNING Ctrl + V Ctrl + C Ctrl + V")
        'WARNING WARNING'
    """
    words = sentence.split()
    result = []
    clipboard = ""
    word_index = 0
    
    while word_index < len(words):
        if word_index + 2 < len(words) and words[word_index] == "Ctrl" and words[word_index + 1] == "+" and words[word_index + 2] == "C":
            # Ctrl + C: copy all previous text
            clipboard = " ".join(result)
            word_index += 3
        elif word_index + 2 < len(words) and words[word_index] == "Ctrl" and words[word_index + 1] == "+" and words[word_index + 2] == "V":
            # Ctrl + V: paste clipboard content
            if clipboard:
                result.append(clipboard)
            word_index += 3
        else:
            result.append(words[word_index])
            word_index += 1
    
    return " ".join(result)


if __name__ == "__main__":
    # Test cases
    assert keyboardShortcut("the egg and Ctrl + C Ctrl + V the spoon") == "the egg and the egg and the spoon"
    assert keyboardShortcut("WARNING Ctrl + V Ctrl + C Ctrl + V") == "WARNING WARNING"
    assert keyboardShortcut("The Ctrl + C Ctrl + V Town Ctrl + C Ctrl + V") == "The The Town The The Town"
    print("All test cases passed!")
```
