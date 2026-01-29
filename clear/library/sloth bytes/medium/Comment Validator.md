# Valid JavaScript Comments

> **Challenge Difficulty:** Medium | Estimated completion time: ~25 minutes

In JavaScript, there are two types of comments:

1. Single-line comments start with `//`
2. Multi-line or inline comments start with `/*` and end with `*/`

The input will be a sequence of `//`, `/*` and `*/`. **Every** `/*` **must have a** `*/` **that immediately follows it**. To add, there can be **no single-line comments in between multi-line comments** in between the `/*` and `*/`.

Create a function that returns `True` if comments are properly formatted, and `False` otherwise.

## Examples

```python
comments_correct("//////") 
output = True
# 3 single-line comments: ["//", "//", "//"]

comments_correct("/**//**////**/")
output = True
# 3 multi-line comments + 1 single-line comment:
# ["/*", "*/", "/*", "*/", "//", "/*", "*/"]

comments_correct("///*/**/")
output = False
# The first /* is missing a */

comments_correct("/////")
output = False
# The 5th / is single, not a double //
```

## Solution

```python runnable
def comments_correct(sequence: str) -> bool:
    """Check if JavaScript-style comments are properly formatted.
    
    Args:
        sequence: String containing //, /*, and */
        
    Returns:
        True if comments are valid, False otherwise
    """
    index = 0
    
    while index < len(sequence):
        if index + 1 < len(sequence) and sequence[index:index+2] == "//":
            index += 2
        elif index + 1 < len(sequence) and sequence[index:index+2] == "/*":
            index += 2
            if index + 1 >= len(sequence) or sequence[index:index+2] != "*/":
                return False
            index += 2
        else:
            return False
    
    return True


if __name__ == "__main__":
    print(comments_correct("//////"))  # True
    print(comments_correct("/**//**////**/"))  # True
    print(comments_correct("///*/**/"))  # False
    print(comments_correct("/////"))  # False
```
