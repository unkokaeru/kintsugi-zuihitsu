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
def num_split(number: int) -> list[int]:
    """Split a number into its place values.
    
    Args:
        number: Input number
        
    Returns:
        List of place values
    """
    is_negative = number < 0
    number_absolute = abs(number)
    number_string = str(number_absolute)
    result: list[int] = []
    
    for index, digit in enumerate(number_string):
        place_value = int(digit) * (10 ** (len(number_string) - index - 1))
        if is_negative:
            place_value = -place_value
        result.append(place_value)
    
    return result


if __name__ == "__main__":
    print(num_split(39))  # [30, 9]
    print(num_split(-434))  # [-400, -30, -4]
    print(num_split(100))  # [100, 0, 0]
```
