> **Challenge Difficulty:** Hard | Estimated completion time: ~50 minutes

# Trace the Path of the Word

Given a grid of letters, check if a word can be traced by moving up, down, left, or right from one letter to the next.

Write a function that returns the path as a list of `[row, col]` positions, or `"Not present"` if the word is not found/can't be created.

## Examples

```python
trace_word_path("BISCUIT", [
  ["B", "I", "T", "R"],
  ["I", "U", "A", "S"],
  ["S", "C", "V", "W"],
  ["D", "O", "N", "E"]
])
output = [[0, 0], [1, 0], [2, 0], [2, 1], [1, 1], [0, 1], [0, 2]]

trace_word_path("HELPFUL", [
  ["L","I","T","R"],
  ["U","U","A","S"],
  ["L","U","P","O"],
])
```
