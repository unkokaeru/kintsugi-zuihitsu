# Next in the Alphabet

> **Challenge Difficulty:** Medium | Estimated completion time: ~30 minutes

Create a function which returns the next letters alphabetically in a given string. If the last letter is a "Z", change the rest of the letters accordingly.

## Examples

```python
next_letters("A")
output = "B"
// 'A' becomes 'B' – simple increment.

next_letters("ABC")
output = "ABD"
// 'C' becomes 'D' – last character changes without carry.

next_letters("Z")
output = "AA"
// 'Z' rolls over to 'A', and since there's no previous letter, we add a new 'A'.
// Think of it like 9 + 1 = 10, here Z + 1 = AA.

next_letters("CAZ")
output = "CBA"
// 'Z' → 'A' (carry), 'A' → 'B' (no carry), so "CAZ" becomes "CBA".
// Like incrementing 129 → 130 but in letters.

next_letters("")
output = "A"
// Empty input is treated as 0 → return 'A'.
```

## Notes

- Tests will all be in CAPITALS.
- Empty inputs should return a capital "A" (as if it were in letter position 0!).
- Think about the letter "Z" like the number 9 and how it carries over to increment the next letter/digit over.

## Solution

```python runnable
def next_letters(text: str) -> str:
    """Return the next letters alphabetically with carry-over.
    
    Args:
        text: String of uppercase letters
        
    Returns:
        Next alphabetical string (like incrementing a number)
    """
    if not text:
        return "A"
    
    letters = list(text)
    carry = True
    
    for index in range(len(letters) - 1, -1, -1):
        if not carry:
            break
            
        if letters[index] == "Z":
            letters[index] = "A"
            carry = True
        else:
            letters[index] = chr(ord(letters[index]) + 1)
            carry = False
    
    if carry:
        letters.insert(0, "A")
    
    return "".join(letters)


if __name__ == "__main__":
    print(next_letters("A"))  # B
    print(next_letters("ABC"))  # ABD
    print(next_letters("Z"))  # AA
    print(next_letters("CAZ"))  # CBA
    print(next_letters(""))  # A
```
