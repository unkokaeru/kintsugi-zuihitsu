# Bingo Check

> **Challenge Difficulty:** Medium | Estimated completion time: ~20 minutes

Create a function that takes a 5x5 2D list and returns `True` if it has at least one Bingo, and `False` If it doesn't.

## Examples

```python
bingo_check([
  [45, "x", 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, 39, 44],
  [21, "x", 24, 30, 52]
])
output = True

bingo_check([
  ["x", 43, 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, 65, "x", 83, 54],
  [67, 98, 39, "x", 44],
  [21, 59, 24, 30, "x"]
]) 
output = True

bingo_check([
  ["x", "x", "x", "x", "x"],
  [64, 12, 47, 32, 90],
  [37, 16, 68, 83, 54],
  [67, 19, 98, 39, 44],
  [21, 75, 24, 30, 52]
]) 
output = True

bingo_check([
  [45, "x", 31, 74, 87],
  [64, 78, 47, "x", 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, "x", 44],
  [21, "x", 24, 30, 52]
]) 
output = False
```

## Notes

Only check for diagonals, horizontals and verticals.

## Solution

```python runnable
from typing import Any

def bingo_check(board: list[list[Any]]) -> bool:
    """Check if a 5x5 bingo board has at least one bingo.
    
    Args:
        board: 5x5 2D list where "x" marks called numbers
        
    Returns:
        True if there is at least one bingo (row, column, or diagonal)
    """
    size = 5
    
    for row_index in range(size):
        if all(board[row_index][column_index] == "x" for column_index in range(size)):
            return True
    
    for column_index in range(size):
        if all(board[row_index][column_index] == "x" for row_index in range(size)):
            return True
    
    if all(board[index][index] == "x" for index in range(size)):
        return True
    
    if all(board[index][size - 1 - index] == "x" for index in range(size)):
        return True
    
    return False


if __name__ == "__main__":
    print(bingo_check([
        [45, "x", 31, 74, 87],
        [64, "x", 47, 32, 90],
        [37, "x", 68, 83, 54],
        [67, "x", 98, 39, 44],
        [21, "x", 24, 30, 52]
    ]))  # True (column)
    
    print(bingo_check([
        ["x", 43, 31, 74, 87],
        [64, "x", 47, 32, 90],
        [37, 65, "x", 83, 54],
        [67, 98, 39, "x", 44],
        [21, 59, 24, 30, "x"]
    ]))  # True (diagonal)
```
