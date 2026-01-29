# Word Overlapping

> **Challenge Difficulty:** Medium | Estimated completion time: ~20 minutes

Given two words, overlap them in such a way, morphing the last few letters of the first word with the first few letters of the second word.

Return the shortest overlapped word possible.

## Examples

```python
overlap("sweden", "denmark")
output = "swedenmark"

overlap("honey", "milk")
output = "honeymilk"

overlap("dodge", "dodge") "dodge"
```

## Solution

```python runnable
def overlap(word1: str, word2: str) -> str:
    """
    Overlap two words by merging the end of the first with the start of the second.
    
    Finds the longest overlap where the end of word1 matches the beginning of word2,
    then merges them to create the shortest possible combined word.
    
    Args:
        word1: First word to overlap.
        word2: Second word to overlap.
        
    Returns:
        The shortest overlapped word possible.
        
    Examples:
        >>> overlap("sweden", "denmark")
        'swedenmark'
        >>> overlap("honey", "milk")
        'honeymilk'
        >>> overlap("dodge", "dodge")
        'dodge'
    """
    max_overlap_length = min(len(word1), len(word2))
    
    # Try to find the longest overlap, starting from the maximum possible
    for overlap_length in range(max_overlap_length, 0, -1):
        if word1[-overlap_length:] == word2[:overlap_length]:
            return word1 + word2[overlap_length:]
    
    # No overlap found, concatenate words
    return word1 + word2


if __name__ == "__main__":
    # Test cases
    assert overlap("sweden", "denmark") == "swedenmark"
    assert overlap("honey", "milk") == "honeymilk"
    assert overlap("dodge", "dodge") == "dodge"
    assert overlap("abc", "bcd") == "abcd"
    assert overlap("hello", "world") == "helloworld"
    print("All test cases passed!")
```
