# Binary Search Practice

> **Challenge Difficulty:** Medium | Estimated completion time: ~20 minutes

Given a sorted array of integers and a target integer, find the first occurrence of the target and return its index.

Return -1 if the target is not in the array.

## Examples

```python
#Input:
arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100]
target = 3

find_first_occurrence(arr,target) # Return 1
#Explanation: The first occurrence of 3 is at index 1.

#Input:
arr = [2, 3, 5, 7, 11, 13, 17, 19]
target = 6

find_first_occurrence(arr,target) # Return -1
#Explanation: 6 does not exist in the array.
```

## Solution

```python runnable
def find_first_occurrence(array: list[int], target: int) -> int:
    """Find the first occurrence of target in a sorted array using binary search.
    
    Args:
        array: Sorted list of integers
        target: Integer to find
        
    Returns:
        Index of first occurrence, or -1 if not found
    """
    left = 0
    right = len(array) - 1
    result = -1
    
    while left <= right:
        middle = (left + right) // 2
        
        if array[middle] == target:
            result = middle
            right = middle - 1
        elif array[middle] < target:
            left = middle + 1
        else:
            right = middle - 1
    
    return result


if __name__ == "__main__":
    print(find_first_occurrence([1, 3, 3, 3, 3, 6, 10, 10, 10, 100], 3))  # 1
    print(find_first_occurrence([2, 3, 5, 7, 11, 13, 17, 19], 6))  # -1
```
