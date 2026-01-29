# Time Conversion

> **Challenge Difficulty:** Medium | Estimated completion time: ~20 minutes

Create a function that converts 12-hour time to 24-hour time or vice versa. Return the output as a string.

## Examples

```python
convertTime("12:00 am")
output = "0:00"

convertTime("6:20 pm")
output = "18:20"

convertTime("21:00")
output = "9:00 pm"

convertTime("5:05")
output ="5:05 am"
```

## Notes

- A 12-hour time input will be denoted with an **am** or **pm** suffix.
- A 24-hour input time contains no suffix.

## Solution

```python runnable
def convertTime(time_string: str) -> str:
    """
    Convert between 12-hour and 24-hour time formats.
    
    If the input has 'am' or 'pm', converts to 24-hour format.
    If the input has no suffix, converts to 12-hour format.
    
    Args:
        time_string: Time string in either 12-hour (with am/pm) or 24-hour format.
        
    Returns:
        Converted time string in the opposite format.
        
    Examples:
        >>> convertTime("12:00 am")
        '0:00'
        >>> convertTime("6:20 pm")
        '18:20'
        >>> convertTime("21:00")
        '9:00 pm'
    """
    if "am" in time_string or "pm" in time_string:
        # Convert from 12-hour to 24-hour
        is_pm = "pm" in time_string
        time_part = time_string.replace(" am", "").replace(" pm", "")
        hour, minute = time_part.split(":")
        hour = int(hour)
        
        if is_pm and hour != 12:
            hour += 12
        elif not is_pm and hour == 12:
            hour = 0
        
        return f"{hour}:{minute}"
    else:
        # Convert from 24-hour to 12-hour
        hour, minute = time_string.split(":")
        hour = int(hour)
        
        if hour == 0:
            return f"12:{minute} am"
        elif hour < 12:
            return f"{hour}:{minute} am"
        elif hour == 12:
            return f"12:{minute} pm"
        else:
            return f"{hour - 12}:{minute} pm"


if __name__ == "__main__":
    # Test cases
    assert convertTime("12:00 am") == "0:00"
    assert convertTime("6:20 pm") == "18:20"
    assert convertTime("21:00") == "9:00 pm"
    assert convertTime("5:05") == "5:05 am"
    assert convertTime("12:00 pm") == "12:00"
    assert convertTime("0:00") == "12:00 am"
    print("All test cases passed!")
```
