# Can You Reach the Exit?

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
