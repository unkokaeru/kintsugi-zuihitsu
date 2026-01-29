# Excel Sheet Column Title

> **Challenge Difficulty:** Medium | Estimated completion time: ~25 minutes

Given a positive integer, return its corresponding column title displayed in Excel sheets.

For example:

```python
1 -> A
2 -> B
3 -> C
...
26 -> Z
27 -> AA
28 -> AB
...
```

## Examples

```python
convert_to_title(1)
output = "A"

convert_to_title(18)
output = "R"

convert_to_title(28)
output = "AB"

convert_to_title(52)
output = "AZ"

convert_to_title(701)
output = "ZY"

convert_to_title(229704)
output = "MATT"

convert_to_title(209380622941)
output = "ZATOICHI"
```

## Solution

```python runnable
def convert_to_title(column_number: int) -> str:
    """Convert column number to Excel column title.
    
    Args:
        column_number: Positive integer column number
        
    Returns:
        Excel column title (A, B, ..., Z, AA, AB, ...)
    """
    result = ""
    
    while column_number > 0:
        column_number -= 1
        remainder = column_number % 26
        result = chr(65 + remainder) + result
        column_number //= 26
    
    return result


if __name__ == "__main__":
    print(convert_to_title(1))  # A
    print(convert_to_title(18))  # R
    print(convert_to_title(28))  # AB
    print(convert_to_title(52))  # AZ
    print(convert_to_title(701))  # ZY
```
