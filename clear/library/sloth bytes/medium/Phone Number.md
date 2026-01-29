# Phone Number Formatting

> **Challenge Difficulty:** Medium | Estimated completion time: ~15 minutes

Create a function that takes a list of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. **(555) 555-5555**).

## Examples

```python
format_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
output = "(123) 456-7890"

format_phone_number([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])
output = "(519) 555-4468"

format_phone_number([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])
output = "(345) 501-2527"
```

## Notes

Don't forget the space after the closing parenthesis.

## Solution

```python runnable
def format_phone_number(digits: list[int]) -> str:
    """
    Format a list of 10 digits as a phone number string.
    
    Args:
        digits: List of 10 integers (0-9) representing phone number digits.
        
    Returns:
        Formatted phone number string in format (XXX) XXX-XXXX.
        
    Examples:
        >>> format_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
        '(123) 456-7890'
        >>> format_phone_number([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])
        '(519) 555-4468'
    """
    area_code = "".join(str(digit) for digit in digits[0:3])
    prefix = "".join(str(digit) for digit in digits[3:6])
    line_number = "".join(str(digit) for digit in digits[6:10])
    
    return f"({area_code}) {prefix}-{line_number}"


if __name__ == "__main__":
    # Test cases
    assert format_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) == "(123) 456-7890"
    assert format_phone_number([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) == "(519) 555-4468"
    assert format_phone_number([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) == "(345) 501-2527"
    print("All test cases passed!")
```
