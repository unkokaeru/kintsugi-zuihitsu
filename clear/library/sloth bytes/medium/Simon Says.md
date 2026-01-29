# Simon Says

> **Challenge Difficulty:** Medium | Estimated completion time: ~20 minutes

Simon asks you to perform operations on a list of numbers that **only he tells you**.

You should ignore all other instructions given.

Create a function which evaluates a list of commands (written in plain English) if the command begins with **Simon says**. Return the result as an integer.

## Examples

```python
simon_says([
  "Simon says add 4",
  "Simon says add 6",
  "Then add 5"
])
output = 10

simon_says([
  "Susan says add 10",
  "Simon says add 3",
  "Simon says multiply by 8"
])
output = 24

simon_says([
  "Firstly, add 4",
  "Simeon says subtract 100" # Look at the name closely :)
])
output = 0
```

## Notes

- If no instructions are given by Simon, return `0`.
- For the sake of simplicity, there will be no command for **dividing**.

## Solution

```python runnable
def simon_says(commands: list[str]) -> int:
    """
    Evaluate commands that begin with 'Simon says' and return the result.
    
    Only commands starting with 'Simon says' are executed. All other commands
    are ignored.
    
    Args:
        commands: List of command strings in plain English.
        
    Returns:
        Integer result after applying all valid Simon commands, starting from 0.
        
    Examples:
        >>> simon_says(["Simon says add 4", "Simon says add 6", "Then add 5"])
        10
        >>> simon_says(["Susan says add 10", "Simon says add 3", "Simon says multiply by 8"])
        24
    """
    result = 0
    
    for command in commands:
        if command.startswith("Simon says "):
            # Extract the operation part after "Simon says "
            operation = command[11:]
            tokens = operation.split()
            
            if len(tokens) >= 2:
                action = tokens[0]
                try:
                    value = int(tokens[1])
                    
                    if action == "add":
                        result += value
                    elif action == "subtract":
                        result -= value
                    elif action == "multiply":
                        result *= value
                except ValueError:
                    # If value is not a valid integer, skip this command
                    continue
    
    return result


if __name__ == "__main__":
    # Test cases
    assert simon_says(["Simon says add 4", "Simon says add 6", "Then add 5"]) == 10
    assert simon_says(["Susan says add 10", "Simon says add 3", "Simon says multiply by 8"]) == 24
    assert simon_says(["Firstly, add 4", "Simeon says subtract 100"]) == 0
    assert simon_says([]) == 0
    assert simon_says(["Simon says add 5", "Simon says subtract 2", "Simon says multiply by 3"]) == 9
    print("All test cases passed!")
```
