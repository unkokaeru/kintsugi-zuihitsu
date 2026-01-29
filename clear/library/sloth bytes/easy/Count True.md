# How Much is True?

> **Challenge Difficulty:** Easy | Estimated completion time: ~5 minutes

Create a function which returns the number of `true` values there are in an array.

## Examples

```python
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
```

## Notes

- Return `0` if given an empty array.
- All array items are of the type bool (`true` or `false`).

## Solution

```python runnable
def count_true(values: list[bool]) -> int:
    """Count the number of True values in a list.
    
    Args:
        values: List of boolean values
        
    Returns:
        Number of True values
    """
    return sum(values)


if __name__ == "__main__":
    print(count_true([True, False, False, True, False]))  # 2
    print(count_true([False, False, False, False]))  # 0
    print(count_true([]))  # 0
```
