# Splitting Up Numbers

> **Challenge Difficulty:** Easy | Estimated completion time: ~10 minutes

Create a function that takes a number `num` and returns each place value in the number.

## Examples

```python
num_split(39)
output =[30, 9]

num_split(-434)
output = [-400, -30, -4]

num_split(100)
output =[100, 0, 0]
```

## Solution

```python runnable
def num_split(num: int) -> list[int]:
    """Split a number into its place values.
    
    Args:
        num: Input number
        
    Returns:
        List of place values
    """
    is_negative = num < 0
    num = abs(num)
    num_str = str(num)
    result: list[int] = []
    
    for i, digit in enumerate(num_str):
        place_value = int(digit) * (10 ** (len(num_str) - i - 1))
        if is_negative:
            place_value = -place_value
        result.append(place_value)
    
    return result


if __name__ == "__main__":
    print(num_split(39))  # [30, 9]
    print(num_split(-434))  # [-400, -30, -4]
    print(num_split(100))  # [100, 0, 0]
```
