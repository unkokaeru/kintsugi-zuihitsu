# Sticky Keys Typing

> **Challenge Difficulty:** Medium | Estimated completion time: ~25 minutes

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

## Solution

```python runnable
def isLongPressed(original: str, typed: str) -> bool:
    """
    Determine if a typed string could have been made from the original with sticky keys.
    
    A sticky key causes extra characters of the same letter to appear. The typed
    string is valid if it matches the original pattern with optional extra repetitions.
    
    Args:
        original: The intended string to type.
        typed: The actual typed string (possibly with sticky key errors).
        
    Returns:
        True if typed could be made from original with sticky keys, False otherwise.
        
    Examples:
        >>> isLongPressed("alex", "aaleex")
        True
        >>> isLongPressed("saeed", "ssaaedd")
        False
    """
    original_index = 0
    typed_index = 0
    
    while typed_index < len(typed):
        if original_index < len(original) and original[original_index] == typed[typed_index]:
            original_index += 1
            typed_index += 1
        elif typed_index > 0 and typed[typed_index] == typed[typed_index - 1]:
            # This is a repeated character (sticky key)
            typed_index += 1
        else:
            # Typed character doesn't match and isn't a repetition
            return False
    
    # Check if we've consumed all characters from original
    return original_index == len(original)


if __name__ == "__main__":
    # Test cases
    assert isLongPressed("alex", "aaleex") == True
    assert isLongPressed("saeed", "ssaaedd") == False
    assert isLongPressed("leelee", "lleeelee") == True
    assert isLongPressed("Tokyo", "TTokkyoh") == False
    assert isLongPressed("laiden", "laiden") == True
    print("All test cases passed!")
```
