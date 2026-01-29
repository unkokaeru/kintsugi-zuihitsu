# One, Two, Skip a Few

> **Challenge Difficulty:** Medium | Estimated completion time: ~15 minutes

Create a function which calculates how many numbers are missing from an **ordered** number line.

This number line starts at the first value of the array, and increases by 1 to the end of the number line, ending at the last value of the array.

## Examples

```python
howManyMissing([1, 2, 3, 8, 9])
output = 4
# The numbers missing from this line are 4, 5, 6, and 7.
# 4 numbers are missing.

howManyMissing([1, 3])
output = 1

howManyMissing([7, 10, 11, 12])
output = 2

howManyMissing([1, 3, 5, 7, 9, 11])
output = 5

howManyMissing([5, 6, 7, 8])
output = 0
```

## Notes

If the number line is complete, or the array is empty, return `0`.

## Solution

```python runnable
def howManyMissing(numbers: list[int]) -> int:
    """
    Calculate how many numbers are missing from an ordered number line.
    
    The number line starts at the first value and increases by 1 until
    reaching the last value in the array.
    
    Args:
        numbers: List of integers representing an ordered number line.
        
    Returns:
        Count of missing numbers in the sequence.
        
    Examples:
        >>> howManyMissing([1, 2, 3, 8, 9])
        4
        >>> howManyMissing([1, 3])
        1
        >>> howManyMissing([5, 6, 7, 8])
        0
    """
    if not numbers or len(numbers) == 1:
        return 0
    
    first_number = numbers[0]
    last_number = numbers[-1]
    expected_count = last_number - first_number + 1
    actual_count = len(numbers)
    
    return expected_count - actual_count


if __name__ == "__main__":
    # Test cases
    assert howManyMissing([1, 2, 3, 8, 9]) == 4
    assert howManyMissing([1, 3]) == 1
    assert howManyMissing([7, 10, 11, 12]) == 2
    assert howManyMissing([1, 3, 5, 7, 9, 11]) == 5
    assert howManyMissing([5, 6, 7, 8]) == 0
    assert howManyMissing([]) == 0
    assert howManyMissing([5]) == 0
    print("All test cases passed!")
```
