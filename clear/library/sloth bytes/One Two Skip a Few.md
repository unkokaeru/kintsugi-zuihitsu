# One, Two, Skip a Few

Create a function which calculates how many numbers are missing from an **ordered** number line.

This number line starts at the first value of the array, and increases by 1 to the end of the number line, ending at the last value of the array.

## Examples

```python
howManyMissing([1, 2, 3, 8, 9])
output = 4
# The numbers missing from this line are 4, 5, 6, and 7.
# 4 numbers are missing.

howManyMissing([1, 3])
output = 1

howManyMissing([7, 10, 11, 12])
output = 2

howManyMissing([1, 3, 5, 7, 9, 11])
output = 5

howManyMissing([5, 6, 7, 8])
output = 0
```

## Notes

If the number line is complete, or the array is empty, return `0`.
