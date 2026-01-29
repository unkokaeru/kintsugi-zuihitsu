> **Challenge Difficulty:** Medium | Estimated completion time: ~15 minutes

# Censor Words Longer Than Four Characters

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
