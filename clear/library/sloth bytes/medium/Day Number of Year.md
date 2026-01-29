# Day Number of Year

> **Challenge Difficulty:** Medium | Estimated completion time: ~20 minutes

You're given a date string in the format **month/day/year**, based on the **[Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar)**. Your task is to return **which day of the year** that date corresponds to (1–365, or 1–366 for leap years).

## Examples

```python
dayOfYear("12/13/2020")
output = 348

dayOfYear("11/16/2020")
output = 321

dayOfYear("1/9/2019")
output = 9

dayOfYear("3/1/2004")
output = 61

dayOfYear("12/31/2000")
output = 366 # leap year

dayOfYear("12/31/2019")
output = 365 # non leap year
```

## Notes

- Make sure to account for **leap years** when February has 29 days.
