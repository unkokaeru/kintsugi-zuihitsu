# Valid Hex Code

Create a function that determines whether a string is a valid hex code.

A hex code must begin with a pound key `#` and is exactly 6 characters in length.

Each character must be a digit from `0-9` or an alphabetic character from `A-F`. All alphabetic characters may be uppercase or lowercase.

## Examples

```
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
