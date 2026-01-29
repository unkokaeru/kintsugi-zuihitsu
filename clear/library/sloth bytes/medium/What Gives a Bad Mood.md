# What Gives a Bad Mood

> **Challenge Difficulty:** Medium | Estimated completion time: ~30 minutes

Let's say the greatest impact on someone's mood are: weather, meals, and sleep.

Your task is, given an array of sub-arrays of different values for:

`[Mood, Weather, Meals, Sleep]`.

All values except for meals are 1-10 (1 = bad, 10 = good)

Meals are from 1-3

Determine which other variable has had the greatest impact on the mood.

## Examples

```python
greatestImpact([
  [1, 1, 3, 10],
  [1, 1, 3, 10],
  [1, 1, 3, 10]
])
output = "Weather"
# Weather was always low but all others were high.

greatestImpact([
  [10, 10, 3, 10],
  [10, 10, 3, 10],
  [10, 10, 3, 10]
])
output = "Nothing"

# Great days! all values were high.

greatestImpact([
  [8, 9, 3, 10],
  [2, 10, 1, 9],
  [1, 9, 1, 8]
])
output = "Meals"

greatestImpact([
  [10, 9, 3, 9],
  [1, 8, 3, 4],
  [10, 9, 2, 8],
  [2, 9, 3, 2]
])
output = "Sleep"
```

## Notes

- All values except for meals are 1-10 (1 = bad, 10 = good)
- Meals are from 1-3
