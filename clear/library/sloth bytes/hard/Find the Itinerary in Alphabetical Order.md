# Find the Itinerary in Alphabetical Order

> **Challenge Difficulty:** Hard | Estimated completion time: ~50 minutes

You are given a list of airline tickets, where each ticket is a pair `[from, to]` representing a flight from one airport to another.

Your task is to **reconstruct the complete travel route** in the correct order.

All trips start from airport **"A"**.

If there are multiple possible routes, return the one that comes **first in alphabetical order** (when read as a single string).

## Examples

```python
findPath([["C", "F"], ["A", "C"], ["I", "Z"], ["F", "I"]])
output = ["A", "C", "F", "I", "Z"]

findPath([["A","C"],["A","B"],["C","B"],["B","A"],["B","C"]]
output = ["A","B","A","C","B","C"]
# Another valid route is ["A","C","B","A","B","C"],
# but it comes later alphabetically.

findPath([["Y", "L"], ["D", "A"], ["A", "D"], ["R", "Y"], ["A", "R"]])
output = ["A", "D", "A", "R", "Y", "L"]
```

## Notes

- Every ticket must be used exactly once.
- There will always be at least one valid route.
- When comparing routes alphabetically, for example:  
    `["A", "B"]` < `["A", "C"]`.
