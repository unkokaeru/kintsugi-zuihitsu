# Amateur Hour

> **Challenge Difficulty:** Easy | Estimated completion time: ~10 minutes

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

## Solution

```python runnable
def hours_passed(t1: str, t2: str) -> str:
    """Calculate hours passed between two times.
    
    Args:
        t1: Starting time in format "H:MM AM/PM"
        t2: Ending time in format "H:MM AM/PM"
        
    Returns:
        String describing hours passed or "no time passed"
    """
    def parse_time(time_str: str) -> int:
        time_part, period = time_str.rsplit(" ", 1)
        hour, _ = map(int, time_part.split(":"))
        
        if period == "AM":
            return hour if hour != 12 else 0
        else:
            return hour if hour == 12 else hour + 12
    
    if t1 == t2:
        return "no time passed"
    
    hours = parse_time(t2) - parse_time(t1)
    return f"{hours} hours" if hours != 1 else "1 hour"


if __name__ == "__main__":
    print(hours_passed("3:00 AM", "9:00 AM"))  # 6 hours
    print(hours_passed("2:00 PM", "4:00 PM"))  # 2 hours
    print(hours_passed("1:00 AM", "3:00 PM"))  # 14 hours
    print(hours_passed("4:00 PM", "4:00 PM"))  # no time passed
```
