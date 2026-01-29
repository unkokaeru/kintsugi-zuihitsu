# Is It the Same Upside Down

> **Challenge Difficulty:** Medium | Estimated completion time: ~20 minutes

The number 6090609 has a special property: if you turn the number upside down (imagine rotating your screen 180 degrees), you get 6090609 again.

Write a function that takes a string on the digits 0, 6, 9 and returns `true` if the number is the same upside down or `false` otherwise.

## Examples

```python
sameUpsidedown("6090609")
output = true

sameUpsidedown("9669")
output = false
# Becomes 6996 when upside down.

sameUpsidedown("9")
output = false

sameUpsidedown("0")
output = true

sameUpsidedown("6090609")
output = true

sameUpsidedown("60906096090609")
output = true

sameUpsidedown("966909669")
output = false
# Becomes 699606699 when upside down.

sameUpsidedown("96666660999999")
output = false
```

## Solution

```python runnable
def same_upsidedown(number_string: str) -> bool:
    """Check if number looks the same when rotated 180 degrees.
    
    Args:
        number_string: String of digits (0, 6, 9)
        
    Returns:
        True if same upside down, False otherwise
    """
    upside_down_map = {"0": "0", "6": "9", "9": "6"}
    
    reversed_string = number_string[::-1]
    
    for index, digit in enumerate(reversed_string):
        if digit not in upside_down_map:
            return False
        if upside_down_map[digit] != number_string[index]:
            return False
    
    return True


if __name__ == "__main__":
    print(same_upsidedown("6090609"))  # True
    print(same_upsidedown("9669"))  # False
    print(same_upsidedown("9"))  # False
    print(same_upsidedown("0"))  # True
```
