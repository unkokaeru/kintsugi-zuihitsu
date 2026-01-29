# Rhyme Time

> **Challenge Difficulty:** Medium | Estimated completion time: ~20 minutes

Create a function that returns `true` if two lines **rhyme** and `false` otherwise. For the purposes of this exercise, two lines rhyme if the **last word** from each sentence contains the **same vowels**.

## Examples

```python
doesRhyme("Sam I am!", "Green eggs and ham.")
output = True

doesRhyme("Sam I am!", "Green eggs and HAM.")
output = True
# Capitalization and punctuation should not matter.

doesRhyme("You're built like a seat", "I bet you like to eat")
output = True

doesRhyme("You are off to the races", "a splendid day.")
output = False

doesRhyme("and frequently do?", "you gotta move.")
output = False
```

## Notes

- Case insensitive.
- Here we are disregarding cases like _"thyme"_ and _"lime"_.
- We are also disregarding cases like _"away"_ and _"today"_ (which technically rhyme, even though they contain different vowels).

## Solution

```python runnable
def doesRhyme(sentence1: str, sentence2: str) -> bool:
    """
    Determine if two sentences rhyme based on vowels in their last words.
    
    Two lines rhyme if the last word from each sentence contains the same vowels
    (case insensitive, ignoring punctuation).
    
    Args:
        sentence1: First sentence string.
        sentence2: Second sentence string.
        
    Returns:
        True if the sentences rhyme, False otherwise.
        
    Examples:
        >>> doesRhyme("Sam I am!", "Green eggs and ham.")
        True
        >>> doesRhyme("You are off to the races", "a splendid day.")
        False
    """
    def extract_vowels(word: str) -> str:
        """Extract vowels from a word in order, converting to lowercase."""
        cleaned_word = "".join(char for char in word if char.isalpha())
        vowels = "aeiouAEIOU"
        return "".join(char.lower() for char in cleaned_word if char in vowels)
    
    def get_last_word(sentence: str) -> str:
        """Get the last word from a sentence, removing punctuation."""
        words = sentence.split()
        if not words:
            return ""
        return words[-1]
    
    last_word1 = get_last_word(sentence1)
    last_word2 = get_last_word(sentence2)
    
    vowels1 = extract_vowels(last_word1)
    vowels2 = extract_vowels(last_word2)
    
    return vowels1 == vowels2


if __name__ == "__main__":
    # Test cases
    assert doesRhyme("Sam I am!", "Green eggs and ham.") == True
    assert doesRhyme("Sam I am!", "Green eggs and HAM.") == True
    assert doesRhyme("You're built like a seat", "I bet you like to eat") == True
    assert doesRhyme("You are off to the races", "a splendid day.") == False
    assert doesRhyme("and frequently do?", "you gotta move.") == False
    print("All test cases passed!")
```
