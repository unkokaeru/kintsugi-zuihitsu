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

## Solution

```python runnable
def day_of_year(date: str) -> int:
    """Calculate which day of the year a date is.
    
    Args:
        date: Date string in format "month/day/year"
        
    Returns:
        Day number of the year (1-365 or 1-366)
    """
    month, day, year = map(int, date.split("/"))
    
    days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    is_leap = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)
    if is_leap:
        days_in_month[1] = 29
    
    day_number = sum(days_in_month[:month-1]) + day
    
    return day_number


if __name__ == "__main__":
    print(day_of_year("12/13/2020"))  # 348
    print(day_of_year("11/16/2020"))  # 321
    print(day_of_year("1/9/2019"))  # 9
    print(day_of_year("3/1/2004"))  # 61
    print(day_of_year("12/31/2000"))  # 366
    print(day_of_year("12/31/2019"))  # 365
```
