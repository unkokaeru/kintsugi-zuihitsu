# Next Happy Year

> **Challenge Difficulty:** Medium | Estimated completion time: ~15 minutes

Sloth needs your help to find out the next happy year.

A **Happy Year** is the year with only _distinct digits (no duplicates)._

Create a function that takes an integer `year` and returns the **next happy year**.

## Examples

```python
happyYear(2017)
output = 2018
# 2018 is the next happy year with all numbers being different.

happyYear(1990)
output = 2013
# 2013 is the next happy year with all numbers being different.

happyYear(2021)
output = 2031
# 2031 is the next happy year with all numbers being different.
```

## Solution

```python runnable
def happy_year(year: int) -> int:
    """Find the next happy year with all distinct digits.
    
    Args:
        year: Starting year
        
    Returns:
        Next year with all unique digits
    """
    current_year = year + 1
    
    while True:
        year_string = str(current_year)
        if len(year_string) == len(set(year_string)):
            return current_year
        current_year += 1


if __name__ == "__main__":
    print(happy_year(2017))  # 2018
    print(happy_year(1990))  # 2013
    print(happy_year(2021))  # 2031
```
