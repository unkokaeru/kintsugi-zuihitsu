# Sherlock and the Valid String

> **Challenge Difficulty:** Hard | Estimated completion time: ~45 minutes

Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove **just one character** at one index in the string `s`, and the remaining characters will occur the same number of times.

Given a string, determine if it is valid. If so, return `"YES"`, otherwise return `"NO"`.

## Examples

```python
isValid("abc")
output = "YES"
// This is a valid string because frequencies are: {a: 1, b: 1, c: 1}

isValid("abcc")
output = "YES"
// This is a valid string because we can remove one c and have one of each character in the remaining string.

isValid("abccc")
output = "NO"
// This string is not valid as even if we remove one c,
// It still leaves character frequencies of: {a: 1, b: 1, c: 2}

isValid("aabbcd")
output = "NO"

isValid("aabbccddeefghi")
output = "NO"

isValid("abcdefghhgfedecba")
output = "YES"
```
