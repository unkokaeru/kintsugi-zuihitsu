# Censor Words Longer Than Four Characters

> **Challenge Difficulty:** Medium | Estimated completion time: ~15 minutes

Create a function that takes a string and censors words **over four characters** with *.

## Examples

```python
censor("The code is fourty")
output = "The code is ******"

censor("Two plus three is five")
output = "Two plus ***** is five"

censor("aaaa aaaaa 1234 12345")
output = "aaaa ***** 1234 *****"
```

## Notes

- Don't censor words with exactly four characters.
- If all words have four characters or less, return the original string.
- The amount of `*` is the same as the length of the word.

## Solution

```python runnable
def censor(text: str) -> str:
    """Censor words longer than four characters.
    
    Args:
        text: Input string
        
    Returns:
        String with words longer than 4 characters replaced by asterisks
    """
    words = text.split()
    censored_words = [
        "*" * len(word) if len(word) > 4 else word 
        for word in words
    ]
    return " ".join(censored_words)


if __name__ == "__main__":
    print(censor("The code is fourty"))  # The code is ******
    print(censor("Two plus three is five"))  # Two plus ***** is five
    print(censor("aaaa aaaaa 1234 12345"))  # aaaa ***** 1234 *****
```
