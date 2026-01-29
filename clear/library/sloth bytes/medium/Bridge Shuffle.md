# Bridge Shuffle

> **Challenge Difficulty:** Medium | Estimated completion time: ~15 minutes

Create a function to **bridge shuffle** two arrays.

To **bridge shuffle**, you interleave the elements from both arrays in an alternating fashion:

```python
array1 = ["A", "A", "A"]
array2 = ["B", "B", "B"]

shuffled_array = ["A", "B", "A", "B", "A", "B"]
```

This can still work with two arrays of uneven length. We simply tack on the extra elements from the longer array:

```python
array1 = ["C", "C", "C", "C"]
array2 = ["D"]

shuffled_array = ["C", "D", "C", "C", "C"]
```

## Examples

```python
bridgeShuffle(["A", "A", "A"], ["B", "B", "B"])
output = ["A", "B", "A", "B", "A", "B"]

bridgeShuffle(["C", "C", "C", "C"], ["D"])
output = ["C", "D", "C", "C", "C"]

bridgeShuffle([1, 3, 5, 7], [2, 4, 6])
output = [1, 2, 3, 4, 5, 6, 7]
```

## Notes

- Elements in both arrays can be strings or integers.
- If two arrays are of unequal length, add the additional elements of the longer array to the end of the shuffled array.
- Always start your shuffle with the first element of Array 1.

## Solution

```python runnable
from typing import Any

def bridge_shuffle(array1: list[Any], array2: list[Any]) -> list[Any]:
    """Interleave two arrays, starting with array1.
    
    Args:
        array1: First array (strings or integers)
        array2: Second array (strings or integers)
        
    Returns:
        Shuffled array with interleaved elements
    """
    result: list[Any] = []
    max_length = max(len(array1), len(array2))
    
    for index in range(max_length):
        if index < len(array1):
            result.append(array1[index])
        if index < len(array2):
            result.append(array2[index])
    
    return result


if __name__ == "__main__":
    print(bridge_shuffle(["A", "A", "A"], ["B", "B", "B"]))  # ['A', 'B', 'A', 'B', 'A', 'B']
    print(bridge_shuffle(["C", "C", "C", "C"], ["D"]))  # ['C', 'D', 'C', 'C', 'C']
    print(bridge_shuffle([1, 3, 5, 7], [2, 4, 6]))  # [1, 2, 3, 4, 5, 6, 7]
```
