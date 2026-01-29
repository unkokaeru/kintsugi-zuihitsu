# Numbers to English

> **Challenge Difficulty:** Medium | Estimated completion time: ~30 minutes

Write a function that accepts a positive integer between `0` and `999` inclusive and returns a string representation of that integer written in English.

## Examples

```python
numToEng(0)
output = "zero"

numToEng(18)
output = "eighteen"

numToEng(126)
output = "one hundred twenty six"

numToEng(909)
output = "nine hundred nine"
```

## Notes

- There are no hyphens used (e.g. "thirty five" not "thirty-five").
- The word "and" is not used (e.g. "one hundred one" not "one hundred and one").

## Solution

```python runnable
def numToEng(number: int) -> str:
    """
    Convert a positive integer (0-999) to its English word representation.
    
    Args:
        number: An integer between 0 and 999 inclusive.
        
    Returns:
        String representation of the number in English words.
        
    Examples:
        >>> numToEng(0)
        'zero'
        >>> numToEng(18)
        'eighteen'
        >>> numToEng(126)
        'one hundred twenty six'
    """
    if number == 0:
        return "zero"
    
    ones_words = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    teens_words = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", 
                   "sixteen", "seventeen", "eighteen", "nineteen"]
    tens_words = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    
    result_parts = []
    
    # Handle hundreds place
    hundreds_digit = number // 100
    if hundreds_digit > 0:
        result_parts.append(ones_words[hundreds_digit])
        result_parts.append("hundred")
    
    # Handle tens and ones places
    remainder = number % 100
    
    if remainder >= 20:
        tens_digit = remainder // 10
        ones_digit = remainder % 10
        result_parts.append(tens_words[tens_digit])
        if ones_digit > 0:
            result_parts.append(ones_words[ones_digit])
    elif remainder >= 10:
        result_parts.append(teens_words[remainder - 10])
    elif remainder > 0:
        result_parts.append(ones_words[remainder])
    
    return " ".join(result_parts)


if __name__ == "__main__":
    # Test cases
    assert numToEng(0) == "zero"
    assert numToEng(18) == "eighteen"
    assert numToEng(126) == "one hundred twenty six"
    assert numToEng(909) == "nine hundred nine"
    assert numToEng(55) == "fifty five"
    assert numToEng(100) == "one hundred"
    assert numToEng(999) == "nine hundred ninety nine"
    print("All test cases passed!")
```
