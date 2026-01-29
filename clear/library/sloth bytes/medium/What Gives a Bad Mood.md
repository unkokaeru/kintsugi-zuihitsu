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

## Solution

```python runnable
def greatestImpact(data: list[list[int]]) -> str:
    """
    Determine which factor has the greatest impact on mood.
    
    Analyzes correlations between mood and weather, meals, and sleep to find
    which factor most strongly correlates with mood changes.
    
    Args:
        data: List of [Mood, Weather, Meals, Sleep] sublists.
              Mood, Weather, Sleep are 1-10. Meals are 1-3.
        
    Returns:
        String indicating which factor has greatest impact: 'Weather', 'Meals',
        'Sleep', or 'Nothing'.
        
    Examples:
        >>> greatestImpact([[1, 1, 3, 10], [1, 1, 3, 10], [1, 1, 3, 10]])
        'Weather'
    """
    if not data:
        return "Nothing"
    
    # Calculate correlation for each factor
    moods = [entry[0] for entry in data]
    weather_values = [entry[1] for entry in data]
    meals_values = [entry[2] for entry in data]
    sleep_values = [entry[3] for entry in data]
    
    def calculate_correlation(mood_list: list[int], factor_list: list[int]) -> float:
        """Calculate simple correlation between mood and a factor."""
        if len(mood_list) != len(factor_list):
            return 0.0
        
        # Calculate means
        mood_mean = sum(mood_list) / len(mood_list)
        factor_mean = sum(factor_list) / len(factor_list)
        
        # Calculate covariance and standard deviations
        covariance = sum((mood_list[i] - mood_mean) * (factor_list[i] - factor_mean) 
                        for i in range(len(mood_list)))
        
        mood_variance = sum((mood - mood_mean) ** 2 for mood in mood_list)
        factor_variance = sum((factor - factor_mean) ** 2 for factor in factor_list)
        
        if mood_variance == 0 or factor_variance == 0:
            return 0.0
        
        correlation = covariance / ((mood_variance * factor_variance) ** 0.5)
        return abs(correlation)
    
    weather_correlation = calculate_correlation(moods, weather_values)
    meals_correlation = calculate_correlation(moods, meals_values)
    sleep_correlation = calculate_correlation(moods, sleep_values)
    
    max_correlation = max(weather_correlation, meals_correlation, sleep_correlation)
    
    # Threshold for considering something as having an impact
    if max_correlation < 0.1:
        return "Nothing"
    
    if weather_correlation == max_correlation:
        return "Weather"
    elif meals_correlation == max_correlation:
        return "Meals"
    else:
        return "Sleep"


if __name__ == "__main__":
    # Test cases
    assert greatestImpact([[1, 1, 3, 10], [1, 1, 3, 10], [1, 1, 3, 10]]) == "Weather"
    assert greatestImpact([[10, 10, 3, 10], [10, 10, 3, 10], [10, 10, 3, 10]]) == "Nothing"
    assert greatestImpact([[8, 9, 3, 10], [2, 10, 1, 9], [1, 9, 1, 8]]) == "Meals"
    assert greatestImpact([[10, 9, 3, 9], [1, 8, 3, 4], [10, 9, 2, 8], [2, 9, 3, 2]]) == "Sleep"
    print("All test cases passed!")
```
