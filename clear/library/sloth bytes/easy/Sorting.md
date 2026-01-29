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
def bubble_sort(arr: list[int]) -> list[int]:
    """Sort an array using bubble sort algorithm.
    
    Args:
        arr: List of integers to sort
        
    Returns:
        Sorted list in ascending order
    """
    result = arr.copy()
    n = len(result)
    
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if result[j] > result[j + 1]:
                result[j], result[j + 1] = result[j + 1], result[j]
                swapped = True
        if not swapped:
            break
    
    return result


if __name__ == "__main__":
    print(bubble_sort([3, 2, 1]))  # [1, 2, 3]
    print(bubble_sort([5, 7, 6]))  # [5, 6, 7]
    print(bubble_sort([10, 3, 5, 1, 9, 2]))  # [1, 2, 3, 5, 9, 10]
```
