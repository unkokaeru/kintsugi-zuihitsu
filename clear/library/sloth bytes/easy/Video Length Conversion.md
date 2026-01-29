# Video Length in Seconds

> **Challenge Difficulty:** Easy | Estimated completion time: ~10 minutes

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

## Solution

```python runnable
def minutes_to_seconds(time: str) -> int:
    """Convert video length from mm:ss format to seconds.
    
    Args:
        time: Time string in mm:ss format
        
    Returns:
        Total seconds, or -1 if seconds >= 60
    """
    minutes, seconds = map(int, time.split(":"))
    
    if seconds >= 60:
        return -1
    
    return minutes * 60 + seconds


if __name__ == "__main__":
    print(minutes_to_seconds("01:00"))  # 60
    print(minutes_to_seconds("13:56"))  # 836
    print(minutes_to_seconds("10:60"))  # -1
    print(minutes_to_seconds("121:49"))  # 7309
```
