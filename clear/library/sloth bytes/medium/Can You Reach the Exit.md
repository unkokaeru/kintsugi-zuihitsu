# Can You Reach the Exit?

> **Challenge Difficulty:** Medium | Estimated completion time: ~25 minutes

You are given a 2D grid where each cell is one of:

- `'.'` - empty space (you can walk here)
- `'#'` - wall (you **cannot** walk here)
- `'@'` - starting position
- `'E'` - exit

You can move **up, down, left, right** (no diagonals), and you cannot move outside the grid.

## Examples

```python
can_reach_exit([
    "@..",
    ".#E",
    "..."
])
output = True
# One path: (0,0)->(0,1)->(0,2)->(1,2) which is 'E'

can_reach_exit([
    "@#E"
])
output = False
# Exit is blocked by a wall

can_reach_exit([
    "@.#.",
    "..#E",
    "####"
])
output = False

can_reach_exit([
    "@...",
    ".###",
    "...E"
])
output = True
```

## Solution

```python runnable
from collections import deque

def can_reach_exit(grid: list[str]) -> bool:
    """Check if you can reach the exit from the starting position.
    
    Args:
        grid: 2D grid where '@' is start, 'E' is exit, '#' is wall, '.' is empty
        
    Returns:
        True if exit is reachable, False otherwise
    """
    rows = len(grid)
    columns = len(grid[0]) if rows > 0 else 0
    
    start_row, start_column = 0, 0
    for row_index in range(rows):
        for column_index in range(columns):
            if grid[row_index][column_index] == "@":
                start_row, start_column = row_index, column_index
                break
    
    queue = deque([(start_row, start_column)])
    visited = {(start_row, start_column)}
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    
    while queue:
        current_row, current_column = queue.popleft()
        
        if grid[current_row][current_column] == "E":
            return True
        
        for delta_row, delta_column in directions:
            new_row = current_row + delta_row
            new_column = current_column + delta_column
            
            if (0 <= new_row < rows and 
                0 <= new_column < columns and 
                (new_row, new_column) not in visited and 
                grid[new_row][new_column] != "#"):
                
                visited.add((new_row, new_column))
                queue.append((new_row, new_column))
    
    return False


if __name__ == "__main__":
    print(can_reach_exit(["@..", ".#E", "..."]))  # True
    print(can_reach_exit(["@#E"]))  # False
    print(can_reach_exit(["@.#.", "..#E", "####"]))  # False
    print(can_reach_exit(["@...", ".###", "...E"]))  # True
```
