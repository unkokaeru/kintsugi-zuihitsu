# Fizz Buzz

> **Challenge Difficulty:** Medium | Estimated completion time: ~15 minutes

This is a classic problem that some companies even use as a warm up before an interview.

Given an integer n, return a string array answer (1-indexed) where:

- answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
- answer[i] == "Fizz" if i is divisible by 3.
- answer[i] == "Buzz" if i is divisible by 5.
- answer[i] == i (as a string) if none of the above conditions are true.

## Examples

```python
Input: n = 3
Output: ["1","2","Fizz"]

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```

## Solution

```python runnable
def fizz_buzz(number: int) -> list[str]:
    """Generate FizzBuzz sequence up to number.
    
    Args:
        number: Upper limit (inclusive)
        
    Returns:
        List of strings with FizzBuzz rules applied
    """
    result: list[str] = []
    
    for index in range(1, number + 1):
        if index % 15 == 0:
            result.append("FizzBuzz")
        elif index % 3 == 0:
            result.append("Fizz")
        elif index % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(index))
    
    return result


if __name__ == "__main__":
    print(fizz_buzz(3))  # ["1", "2", "Fizz"]
    print(fizz_buzz(5))  # ["1", "2", "Fizz", "4", "Buzz"]
    print(fizz_buzz(15))  # ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
```
