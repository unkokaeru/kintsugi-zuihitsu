# Shuffled Properly?

> **Challenge Difficulty:** Medium | Estimated completion time: ~25 minutes

Given an array of _10 numbers_, return whether or not the array is shuffled enough.

In this case, if **3 or more** numbers appear **consecutively** (ascending or descending), return `false`.

## Examples

```python
isShuffledWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4])
output = false
# 1, 2, 3 appear consecutively

isShuffledWell([3, 5, 1, 9, 8, 7, 6, 4, 2, 10])
output = false
# 9, 8, 7, 6 appear consecutively

isShuffledWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9])
output = true
# No consecutive numbers appear

isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10])
output = true
# No consecutive numbers appear
```

## Notes

- Only steps of 1 in either direction count as consecutive (i.e. a sequence of odd and even numbers would count as being properly shuffled (see example #4)).
- You will get numbers from 1-10.
