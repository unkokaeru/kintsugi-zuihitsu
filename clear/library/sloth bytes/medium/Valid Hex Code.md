# Valid Hex Code

> **Challenge Difficulty:** Medium | Estimated completion time: ~15 minutes

Create a function that determines whether a string is a valid hex code.

A hex code must begin with a pound key `#` and is exactly 6 characters in length.

Each character must be a digit from `0-9` or an alphabetic character from `A-F`. All alphabetic characters may be uppercase or lowercase.

## Examples

```python
is_valid_hex_code("#CD5C5C")
output = True

is_valid_hex_code("#EAECEE")
output = True

is_valid_hex_code("#eaecee")
output = True

is_valid_hex_code("#CD5C58C")
output = False
# Length exceeds 6

is_valid_hex_code("#CD5C5Z")
output = False
# Not all alphabetic characters in A-F

is_valid_hex_code("#CD5C&C")
output = False
# Contains unacceptable character

is_valid_hex_code("CD5C5C")
output = False
# Missing #
```

## Solution

```python runnable
import re

def is_valid_hex_code(code: str) -> bool:
    """Check if string is a valid hex color code.
    
    Args:
        code: String to validate
        
    Returns:
        True if valid hex code, False otherwise
    """
    pattern = r"^#[0-9A-Fa-f]{6}$"
    return bool(re.match(pattern, code))


if __name__ == "__main__":
    print(is_valid_hex_code("#CD5C5C"))  # True
    print(is_valid_hex_code("#EAECEE"))  # True
    print(is_valid_hex_code("#eaecee"))  # True
    print(is_valid_hex_code("#CD5C58C"))  # False
    print(is_valid_hex_code("#CD5C5Z"))  # False
    print(is_valid_hex_code("#CD5C&C"))  # False
    print(is_valid_hex_code("CD5C5C"))  # False
```
