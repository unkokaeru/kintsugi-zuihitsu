> **Challenge Difficulty:** Medium | Estimated completion time: ~25 minutes

# Sticky Keys Typing

Someone is typing on the sticky keyboard. Occasionally a key gets stuck and more than intended number of characters of a particular letter is being added into the string. The function input contains `original` and `typed` strings.

Determine if the `typed` string has been made from the `original`. Return `true` if it is and `false` if the typed string cannot have been made from the `original`.

## Examples

```python
#function: isLongPressed(original, typed)
isLongPressed("alex", "aaleex")
output = true

isLongPressed("saeed", "ssaaedd")
#original contains 2 E's, but the typed only has 1. Not a sticky key issue.
output = false

isLongPressed("leelee", "lleeelee") 
output = true

isLongPressed("Tokyo", "TTokkyoh") 
#An h was typed, not a sticky key problem, just skill issues.
output = false

isLongPressed("laiden", "laiden") 
output = true
```
