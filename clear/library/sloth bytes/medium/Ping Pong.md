# Ping Pong

> **Challenge Difficulty:** Medium | Estimated completion time: ~15 minutes

A game of table tennis almost always sounds like _Ping!_ followed by _Pong!_

You know that Player 2 won if you hear _Pong!_ as the last sound (since Player 1 didn't return the ball back).

Given an array of _Ping!_, create a function that inserts _Pong!_ in between each element. Also:

- If `win` equals `true`, end the list with _Pong!_
- If `win` equals `false`, end the list with _Ping!_

## Examples

```python
#Example 1
pingPong(["Ping!"], True)
output = ["Ping!", "Pong!"]

#Example 2
pingPong(["Ping!", "Ping!"], False)
output = ["Ping!", "Pong!", "Ping!"]

#Example 3
pingPong(["Ping!", "Ping!", "Ping!"], True)
output = ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
```

## Notes

- Player 1 serves the ball and makes _Ping!_.
- Return an array of strings.

## Solution

```python runnable
def pingPong(ping_array: list[str], win: bool) -> list[str]:
    """
    Insert 'Pong!' between each 'Ping!' element and determine the final sound.
    
    Args:
        ping_array: List of strings containing 'Ping!' elements.
        win: Boolean indicating if Player 2 won (True) or Player 1 won (False).
        
    Returns:
        List with 'Pong!' inserted between each 'Ping!' and appropriate ending.
        
    Examples:
        >>> pingPong(["Ping!"], True)
        ['Ping!', 'Pong!']
        >>> pingPong(["Ping!", "Ping!"], False)
        ['Ping!', 'Pong!', 'Ping!']
    """
    result = []
    
    for ping_sound in ping_array:
        result.append(ping_sound)
        result.append("Pong!")
    
    # Remove the last "Pong!" if Player 1 won
    if not win:
        result.pop()
    
    return result


if __name__ == "__main__":
    # Test cases
    assert pingPong(["Ping!"], True) == ["Ping!", "Pong!"]
    assert pingPong(["Ping!", "Ping!"], False) == ["Ping!", "Pong!", "Ping!"]
    assert pingPong(["Ping!", "Ping!", "Ping!"], True) == ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
    print("All test cases passed!")
```
