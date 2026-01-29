# Is the Phone Number Formatted Correctly?

> **Challenge Difficulty:** Medium | Estimated completion time: ~15 minutes

Create a function that accepts a string and returns `true` if it's in the format of a proper phone number and `false` if it's not. Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number.

This is what a valid phone number looks like:

```python
(123) 456-7890
```

## Examples

```python
isValidPhoneNumber("(123) 456-7890")
output = True

isValidPhoneNumber("1111)555 2345")
output = False

isValidPhoneNumber("098) 123 4567")
output = False
```

## Notes

Don't forget the space after the closing parenthesis.

## Solution

```python runnable
import re

def is_valid_phone_number(phone: str) -> bool:
    """Check if phone number is properly formatted.
    
    Args:
        phone: Phone number string
        
    Returns:
        True if format is (###) ###-####, False otherwise
    """
    pattern = r"^\(\d{3}\) \d{3}-\d{4}$"
    return bool(re.match(pattern, phone))


if __name__ == "__main__":
    print(is_valid_phone_number("(123) 456-7890"))  # True
    print(is_valid_phone_number("1111)555 2345"))  # False
    print(is_valid_phone_number("098) 123 4567"))  # False
```
