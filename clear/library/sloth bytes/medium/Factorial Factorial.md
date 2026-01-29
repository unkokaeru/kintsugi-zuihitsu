# Factorial of Factorials

> **Challenge Difficulty:** Medium | Estimated completion time: ~15 minutes

Create a function that takes an integer `n` and returns the **factorial of factorials**. See below examples for a better understanding:

## Examples

```python
fact_of_fact(4)
output = 288
// 4! * 3! * 2! * 1! = 288

fact_of_fact(5)
output = 34560

fact_of_fact(6)
output = 24883200
```

## Solution

```python runnable
def fact_of_fact(number: int) -> int:
    """Calculate the factorial of factorials.
    
    Args:
        number: Input number
        
    Returns:
        Product of all factorials from 1! to number!
    """
    def factorial(value: int) -> int:
        if value <= 1:
            return 1
        result = 1
        for index in range(2, value + 1):
            result *= index
        return result
    
    total = 1
    for index in range(1, number + 1):
        total *= factorial(index)
    
    return total


if __name__ == "__main__":
    print(fact_of_fact(4))  # 288
    print(fact_of_fact(5))  # 34560
    print(fact_of_fact(6))  # 24883200
```
