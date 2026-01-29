# Nom Nom Numbers

> **Challenge Difficulty:** Medium | Estimated completion time: ~25 minutes

A number can **"eat"** the number to its **right** if it's **larger** than that number.

When it eats, it becomes the **sum** of both numbers.

Keep repeating this process from **left to right** until no more eating can happen.

## Examples

```python
nom_nom([5, 3, 7])
output = [15]

nom_nom([5, 3, 9])
output = [8, 9]

nom_nom([1, 2, 3])
output = [1, 2, 3]

nom_nom([2, 1, 3])
output = [3, 3]

nom_nom([8, 5, 9])
output = [22]

nom_nom([6, 5, 6, 100])
output = [17, 100]
```

## Solution

```python runnable
def nom_nom(numbers: list[int]) -> list[int]:
    """
    Process a list where each number can "eat" the number to its right if larger.
    
    When a number eats another, it becomes the sum of both numbers.
    This process repeats from left to right until no more eating can happen.
    
    Args:
        numbers: List of integers where larger numbers can eat smaller ones to their right.
        
    Returns:
        List of integers after all eating operations are complete.
        
    Examples:
        >>> nom_nom([5, 3, 7])
        [15]
        >>> nom_nom([5, 3, 9])
        [8, 9]
        >>> nom_nom([1, 2, 3])
        [1, 2, 3]
    """
    if not numbers:
        return []
    
    result = []
    current_index = 0
    
    while current_index < len(numbers):
        current_number = numbers[current_index]
        next_index = current_index + 1
        
        # Keep eating while the current number is larger than the next
        while next_index < len(numbers) and current_number > numbers[next_index]:
            current_number += numbers[next_index]
            next_index += 1
        
        result.append(current_number)
        current_index = next_index
    
    return result


if __name__ == "__main__":
    # Test cases
    assert nom_nom([5, 3, 7]) == [15]
    assert nom_nom([5, 3, 9]) == [8, 9]
    assert nom_nom([1, 2, 3]) == [1, 2, 3]
    assert nom_nom([2, 1, 3]) == [3, 3]
    assert nom_nom([8, 5, 9]) == [22]
    assert nom_nom([6, 5, 6, 100]) == [17, 100]
    print("All test cases passed!")
```
