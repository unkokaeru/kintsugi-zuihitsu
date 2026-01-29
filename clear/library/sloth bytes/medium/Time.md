# Sloth's Meal Time

> **Challenge Difficulty:** Medium | Estimated completion time: ~20 minutes

Sloth is a very habitual person. He eats breakfast at 7:00 a.m. each morning, lunch at 12:00 p.m. and dinner at 7:00 p.m. in the evening.

Create a function that takes in the current time as a string and determines the duration of time before Sloth's next meal.

Represent this as an array with the first and second elements representing hours and minutes, respectively.

## Examples

```python
timeToEat("2:00 p.m.")
#5 hours until the next meal, dinner
output = [5, 0]

timeToEat("5:50 a.m.")
# 1 hour and 10 minutes until the next meal, breakfast
output = [1, 10]
```

## Solution

```python runnable
def timeToEat(current_time: str) -> list[int]:
    """
    Calculate time until Sloth's next meal.
    
    Sloth eats at: 7:00 AM (breakfast), 12:00 PM (lunch), 7:00 PM (dinner).
    
    Args:
        current_time: Current time string in format like "2:00 p.m." or "5:50 a.m."
        
    Returns:
        List with [hours, minutes] until the next meal.
        
    Examples:
        >>> timeToEat("2:00 p.m.")
        [5, 0]
        >>> timeToEat("5:50 a.m.")
        [1, 10]
    """
    # Parse the current time
    time_part = current_time.replace(".", "").lower()
    is_pm = "pm" in time_part
    time_digits = time_part.replace(" am", "").replace(" pm", "")
    hour, minute = map(int, time_digits.split(":"))
    
    # Convert to 24-hour format
    if is_pm and hour != 12:
        hour += 12
    elif not is_pm and hour == 12:
        hour = 0
    
    # Convert to minutes since midnight
    current_minutes = hour * 60 + minute
    
    # Meal times in minutes since midnight
    breakfast_time = 7 * 60  # 7:00 AM
    lunch_time = 12 * 60  # 12:00 PM
    dinner_time = 19 * 60  # 7:00 PM
    next_day_breakfast = 24 * 60 + breakfast_time  # Next day 7:00 AM
    
    # Find the next meal
    meal_times = [breakfast_time, lunch_time, dinner_time, next_day_breakfast]
    
    for meal_time in meal_times:
        if current_minutes < meal_time:
            time_difference = meal_time - current_minutes
            hours_until = time_difference // 60
            minutes_until = time_difference % 60
            return [hours_until, minutes_until]
    
    return [0, 0]


if __name__ == "__main__":
    # Test cases
    assert timeToEat("2:00 p.m.") == [5, 0]
    assert timeToEat("5:50 a.m.") == [1, 10]
    assert timeToEat("7:00 a.m.") == [5, 0]  # Right at breakfast, next is lunch
    assert timeToEat("11:30 a.m.") == [0, 30]
    assert timeToEat("8:00 p.m.") == [11, 0]  # After dinner, next is tomorrow's breakfast
    print("All test cases passed!")
```
