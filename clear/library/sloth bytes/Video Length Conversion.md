> **Challenge Difficulty:** Easy | Estimated completion time: ~10 minutes

# Video Length in Seconds

You are given the length of a video in minutes. The format is **mm:ss** (ex: `"02:54"`).

Create a function that takes the _video length_ and return it in **seconds**.

## Examples

```python
minutesToSeconds("01:00") = 60

minutesToSeconds("13:56") = 836

minutesToSeconds("10:60") = -1

minuteToSeconds("121:49") = 7309
```

## Notes

- The video length is given as a string.
- If the number of seconds is **60 or over**, return `-1` (see example #3).
- You may get a number of minutes over 99 (e.g. `"121:49"` is perfectly **valid**).
