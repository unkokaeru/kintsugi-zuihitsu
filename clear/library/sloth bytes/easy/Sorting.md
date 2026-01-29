# Sorting

> **Challenge Difficulty:** Easy | Estimated completion time: ~10 minutes

Implement a algorithm, or create a algorithm that is able to sort a array (smallest to largest).

## Examples

```python
[3, 2, 1] -> [1, 2, 3]
[5, 7, 6] -> [5, 6, 7]
```

## Solution

```python runnable
def bubble_sort(array: list[int]) -> list[int]:
    """Sort an array using bubble sort algorithm.
    
    Args:
        array: List of integers to sort
        
    Returns:
        Sorted list in ascending order
    """
    result = array.copy()
    length = len(result)
    
    for outer_index in range(length):
        swapped = False
        for inner_index in range(0, length - outer_index - 1):
            if result[inner_index] > result[inner_index + 1]:
                result[inner_index], result[inner_index + 1] = result[inner_index + 1], result[inner_index]
                swapped = True
        if not swapped:
            break
    
    return result


if __name__ == "__main__":
    print(bubble_sort([3, 2, 1]))  # [1, 2, 3]
    print(bubble_sort([5, 7, 6]))  # [5, 6, 7]
    print(bubble_sort([10, 3, 5, 1, 9, 2]))  # [1, 2, 3, 5, 9, 10]
```
