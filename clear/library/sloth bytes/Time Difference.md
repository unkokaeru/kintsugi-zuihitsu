> **Challenge Difficulty:** Easy | Estimated completion time: ~10 minutes

# Amateur Hour

Write a function that takes time `t1` and time `t2` and returns the number of hours passed between the two times.

## Examples

```python
hoursPassed("3:00 AM", "9:00 AM")
output = "6 hours"

hoursPassed("2:00 PM", "4:00 PM")
output = "2 hours"

hoursPassed("1:00 AM", "3:00 PM")
output = "14 hours"

hoursPassed("4:00 PM", "4:00 PM")
output = "no time passed"
```

## Notes

- Time `t1` will always be the starting time and `t2`, the ending time.
- Return the string `"no time passed"` if `t1` is equal to `t2`.
