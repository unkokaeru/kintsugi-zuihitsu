# Birthday Cake Candles

> **Challenge Difficulty:** Easy | Estimated completion time: ~5 minutes

You are in charge of the cake for a child's birthday. It will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles.

**Your task is to count how many candles are the tallest.**

## Examples

```python
birthdayCakeCandles([4,4,1,3])
output = 2
// The tallest candles are 4. There are 2 candles with this height, so the function should return 2.

birthdayCakeCandles([1, 1, 1, 1])
output = 4
// All candles are the same height, so all are the tallest.

birthdayCakeCandles([])
output = 0
// No candles, so nothing to blow out.
```

## Solution

```python runnable
def birthday_cake_candles(candles: list[int]) -> int:
    """Count how many candles are the tallest.
    
    Args:
        candles: List of candle heights
        
    Returns:
        Number of candles that have the maximum height
    """
    if not candles:
        return 0
    
    max_height = max(candles)
    return candles.count(max_height)


if __name__ == "__main__":
    print(birthday_cake_candles([4, 4, 1, 3]))  # 2
    print(birthday_cake_candles([1, 1, 1, 1]))  # 4
    print(birthday_cake_candles([]))  # 0
```
