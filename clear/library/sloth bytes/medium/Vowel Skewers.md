# Vowel Skewers

> **Challenge Difficulty:** Medium | Estimated completion time: ~25 minutes

An *authentic* vowel skewer is a skewer with a delicious and juicy mix of consonants and vowels. However, the way they are made must be *just right*:

- Skewers must begin and end with a **consonant**.
- Skewers must **alternate** between consonants and vowels.
- There must be an **even spacing** between each letter on the skewer, so that there is a consistent flavour throughout.

Create a function which returns whether a given vowel skewer is **authentic**.

## Examples

```python
is_authentic_skewer("B--A--N--A--N--A--S")
output = True

is_authentic_skewer("A--X--E")
output = False
# Should start and end with a consonant.

is_authentic_skewer("C-L-A-P")
output = False
# Should alternate between consonants and vowels.

is_authentic_skewer("M--A---T-E-S")
output = False
# Should have consistent spacing between letters.
```

## Solution

```python runnable
def is_authentic_skewer(skewer: str) -> bool:
    """
    Determine if a vowel skewer is authentic.
    
    An authentic skewer must:
    - Begin and end with a consonant
    - Alternate between consonants and vowels
    - Have even spacing (consistent number of dashes) between each letter
    
    Args:
        skewer: String representing a vowel skewer with letters and dashes.
        
    Returns:
        True if the skewer is authentic, False otherwise.
        
    Examples:
        >>> is_authentic_skewer("B--A--N--A--N--A--S")
        True
        >>> is_authentic_skewer("A--X--E")
        False
    """
    vowels = "AEIOUaeiou"
    
    # Extract letters and their positions
    letters = []
    positions = []
    
    for index, char in enumerate(skewer):
        if char.isalpha():
            letters.append(char)
            positions.append(index)
    
    if len(letters) < 2:
        return False
    
    # Check if starts and ends with consonant
    if letters[0] in vowels or letters[-1] in vowels:
        return False
    
    # Check alternating pattern
    for index in range(len(letters) - 1):
        current_is_vowel = letters[index] in vowels
        next_is_vowel = letters[index + 1] in vowels
        
        if current_is_vowel == next_is_vowel:
            return False
    
    # Check consistent spacing
    spacings = []
    for index in range(len(positions) - 1):
        spacing = positions[index + 1] - positions[index]
        spacings.append(spacing)
    
    if len(set(spacings)) > 1:
        return False
    
    return True


if __name__ == "__main__":
    # Test cases
    assert is_authentic_skewer("B--A--N--A--N--A--S") == True
    assert is_authentic_skewer("A--X--E") == False
    assert is_authentic_skewer("C-L-A-P") == False
    assert is_authentic_skewer("M--A---T-E-S") == False
    assert is_authentic_skewer("T-O-M-A-T-O") == True
    print("All test cases passed!")
```
