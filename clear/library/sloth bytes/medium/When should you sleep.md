# When Should You Go to Sleep?

> **Challenge Difficulty:** Medium | Estimated completion time: ~25 minutes

You're setting an alarm for the next morning and know how long you want to sleep.  
Your job is to figure out **what time you need to go to bed** to get that amount of sleep.

Each input has two parts:

1. The **alarm time** (when you'll wake up).
2. The **sleep duration** (how long you want to sleep).

Return the time you should go to bed — in **24-hour format** (`"HH:MM"`).

## Examples

```python
bedTime(["07:50", "07:50"])
output = ["00:00"]

bedTime(["06:15", "10:00"], ["08:00", "10:00"], ["09:30", "10:00"])
output = ["20:15", "22:00", "23:30"]


bedTime(["05:45", "04:00"], ["07:10", "04:30"])
output = ["01:45", "02:40"]
```

## Solution

```python runnable
def bedTime(*time_pairs: list[str]) -> list[str]:
    """
    Calculate what time to go to bed given alarm time and desired sleep duration.
    
    Args:
        *time_pairs: Variable number of [alarm_time, sleep_duration] pairs in HH:MM format.
        
    Returns:
        List of bedtimes in 24-hour format (HH:MM).
        
    Examples:
        >>> bedTime(["07:50", "07:50"])
        ['00:00']
        >>> bedTime(["06:15", "10:00"], ["08:00", "10:00"])
        ['20:15', '22:00']
    """
    results = []
    
    for time_pair in time_pairs:
        alarm_time = time_pair[0]
        sleep_duration = time_pair[1]
        
        # Parse alarm time
        alarm_hour, alarm_minute = map(int, alarm_time.split(":"))
        alarm_total_minutes = alarm_hour * 60 + alarm_minute
        
        # Parse sleep duration
        duration_hour, duration_minute = map(int, sleep_duration.split(":"))
        duration_total_minutes = duration_hour * 60 + duration_minute
        
        # Calculate bedtime
        bedtime_minutes = alarm_total_minutes - duration_total_minutes
        
        # Handle negative values (previous day)
        if bedtime_minutes < 0:
            bedtime_minutes += 24 * 60
        
        # Convert back to hours and minutes
        bedtime_hour = bedtime_minutes // 60
        bedtime_minute = bedtime_minutes % 60
        
        results.append(f"{bedtime_hour:02d}:{bedtime_minute:02d}")
    
    return results


if __name__ == "__main__":
    # Test cases
    assert bedTime(["07:50", "07:50"]) == ["00:00"]
    assert bedTime(["06:15", "10:00"], ["08:00", "10:00"], ["09:30", "10:00"]) == ["20:15", "22:00", "23:30"]
    assert bedTime(["05:45", "04:00"], ["07:10", "04:30"]) == ["01:45", "02:40"]
    print("All test cases passed!")
```
