# Cinemas

> **Challenge Difficulty:** Medium | Estimated completion time: ~25 minutes

Given an array of seats, return the maximum number of new people which can be seated, as long as there is at least a gap of **2 seats** between people.

- Empty seats are given as `0`.
- Occupied seats are given as `1`.
- Don't move any seats which are already occupied, even if they are less than 2 seats apart. Consider only the gaps between new seats and existing seats.

## Examples

```python
maximumSeating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0])
output = 2
# [1, 0, 0, 1, 0, 0, 1, 0, 0, 1] 2 new people were seated!

maximumSeating([0, 0, 0, 0])
output = 2
# [1, 0, 0, 1] 2 new people were seated!

maximumSeating([1, 0, 0, 0, 0, 1])
output = 0
# There is no way to have a gap of at least 2 chairs when adding someone else.

maximumSeating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0])
output = 2

maximumSeating([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
output = 4
```

## Solution

```python runnable
def maximum_seating(seats: list[int]) -> int:
    """Calculate maximum number of people that can be seated with 2-seat gaps.
    
    Args:
        seats: List where 0 is empty and 1 is occupied
        
    Returns:
        Maximum number of new people that can be seated
    """
    seats_copy = seats.copy()
    count = 0
    
    for index in range(len(seats_copy)):
        if seats_copy[index] == 0:
            left_ok = index == 0 or seats_copy[index - 1] == 0
            left_two_ok = index < 2 or seats_copy[index - 2] == 0
            right_ok = index == len(seats_copy) - 1 or seats_copy[index + 1] == 0
            right_two_ok = index >= len(seats_copy) - 2 or seats_copy[index + 2] == 0
            
            if left_ok and left_two_ok and right_ok and right_two_ok:
                seats_copy[index] = 1
                count += 1
    
    return count


if __name__ == "__main__":
    print(maximum_seating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0]))  # 2
    print(maximum_seating([0, 0, 0, 0]))  # 2
    print(maximum_seating([1, 0, 0, 0, 0, 1]))  # 0
    print(maximum_seating([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))  # 4
```
