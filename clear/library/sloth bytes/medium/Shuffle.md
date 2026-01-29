# Shuffled Properly?

> **Challenge Difficulty:** Medium | Estimated completion time: ~25 minutes

Given an array of _10 numbers_, return whether or not the array is shuffled enough.

In this case, if **3 or more** numbers appear **consecutively** (ascending or descending), return `false`.

## Examples

```python
isShuffledWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4])
output = false
# 1, 2, 3 appear consecutively

isShuffledWell([3, 5, 1, 9, 8, 7, 6, 4, 2, 10])
output = false
# 9, 8, 7, 6 appear consecutively

isShuffledWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9])
output = true
# No consecutive numbers appear

isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10])
output = true
# No consecutive numbers appear
```

## Notes

- Only steps of 1 in either direction count as consecutive (i.e. a sequence of odd and even numbers would count as being properly shuffled (see example #4)).
- You will get numbers from 1-10.

## Solution

```python runnable
def isShuffledWell(numbers: list[int]) -> bool:
    """
    Determine if an array is shuffled well enough.
    
    Returns False if 3 or more numbers appear consecutively (ascending or descending),
    otherwise returns True.
    
    Args:
        numbers: List of 10 integers from 1-10.
        
    Returns:
        True if well shuffled (no 3+ consecutive numbers), False otherwise.
        
    Examples:
        >>> isShuffledWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4])
        False
        >>> isShuffledWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9])
        True
    """
    if len(numbers) < 3:
        return True
    
    consecutive_count = 1
    last_difference = None
    
    for index in range(1, len(numbers)):
        difference = numbers[index] - numbers[index - 1]
        
        # Check if this continues the consecutive sequence
        if last_difference is None or abs(difference) != 1:
            # Start tracking a new potential sequence
            consecutive_count = 1
            last_difference = difference
        elif difference == last_difference:
            # Continue the sequence
            consecutive_count += 1
            if consecutive_count >= 3:
                return False
        else:
            # Different direction, restart
            consecutive_count = 1
            last_difference = difference
    
    return True


if __name__ == "__main__":
    # Test cases
    assert isShuffledWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4]) == False
    assert isShuffledWell([3, 5, 1, 9, 8, 7, 6, 4, 2, 10]) == False
    assert isShuffledWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9]) == True
    assert isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]) == True
    print("All test cases passed!")
```
