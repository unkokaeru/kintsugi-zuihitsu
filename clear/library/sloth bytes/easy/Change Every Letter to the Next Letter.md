# Change Every Letter to the Next Letter

> **Challenge Difficulty:** Easy | Estimated completion time: ~5 minutes

Write a function that changes every letter to the next letter:

"a" becomes "b"

"b" becomes "c"

"d" becomes "e"

and so on ...

## Examples

```python
move("hello") ➞ "ifmmp"

move("bye") ➞ "czf"

move("welcome") ➞ "xfmdpnf"
```

## Notes

There will be no z's in the tests.

## Solution

```python runnable
def move(text: str) -> str:
    """Change every letter to the next letter in the alphabet.
    
    Args:
        text: Input string
        
    Returns:
        String with each letter shifted to the next one
    """
    return "".join(chr(ord(char) + 1) for char in text)


if __name__ == "__main__":
    print(move("hello"))  # ifmmp
    print(move("bye"))  # czf
    print(move("welcome"))  # xfmdpnf
```
