# How Many Vowels?

> **Challenge Difficulty:** Easy | Estimated completion time: ~5 minutes

Create a function that takes a string and returns the number (count) of vowels in the string.

## Examples

```python
count_vowels("Celebration") ➞ 5 # 5 vowels

count_vowels("Palm") ➞ 1 # 1 vowel

count_vowels("Prediction") ➞ 4 # 4 vowels
```

## Notes

- a, e, i, o, u are considered vowels (not y).
- All test cases are one word and only contain letters.

## Solution

```python runnable
def count_vowels(text: str) -> int:
    """Count the number of vowels in a string.
    
    Args:
        text: Input string
        
    Returns:
        Number of vowels (a, e, i, o, u) in the string
    """
    vowels = "aeiouAEIOU"
    return sum(1 for char in text if char in vowels)


if __name__ == "__main__":
    print(count_vowels("Celebration"))  # 5
    print(count_vowels("Palm"))  # 1
    print(count_vowels("Prediction"))  # 4
```
