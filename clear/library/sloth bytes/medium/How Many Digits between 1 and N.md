# How Many Digits between 1 and N

> **Challenge Difficulty:** Medium | Estimated completion time: ~25 minutes

Imagine you took all the numbers between 0 and `n` and concatenated them together into a long string.

How many digits are there between 0 and `n`? Write a function that can calculate this.

There are 0 digits between 0 and 1, there are 9 digits between 0 and 10 and there are 189 digits between 0 and 100.

## Examples

```python
digits(1)
output = 0

digits(10)
output = 9

digits(100)
output = 189

digits(2020)
output = 6969
```

## Solution

```python runnable
def digits(number: int) -> int:
    """Count total digits in all numbers from 1 to number (exclusive).
    
    Args:
        number: Upper bound (exclusive)
        
    Returns:
        Total count of digits
    """
    total = 0
    
    for value in range(1, number):
        total += len(str(value))
    
    return total


if __name__ == "__main__":
    print(digits(1))  # 0
    print(digits(10))  # 9
    print(digits(100))  # 189
    print(digits(2020))  # 6969
```
