# Is the Phone Number Formatted Correctly?

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
