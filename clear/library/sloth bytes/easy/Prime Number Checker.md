# Prime Number Checker

> **Challenge Difficulty:** Easy | Estimated completion time: ~10 minutes

Develop a small program that checks whether a number entered by the user is a prime number or not.

This is a very simple program for beginners!

If you have experience be creative with it or try it with a new language.

## Solution

```python runnable
def is_prime(num: int) -> bool:
    """Check if a number is prime.
    
    Args:
        num: Number to check
        
    Returns:
        True if the number is prime, False otherwise
    """
    if num < 2:
        return False
    if num == 2:
        return True
    if num % 2 == 0:
        return False
    
    for i in range(3, int(num ** 0.5) + 1, 2):
        if num % i == 0:
            return False
    
    return True


if __name__ == "__main__":
    test_numbers = [2, 3, 4, 17, 20, 29, 100, 97]
    for num in test_numbers:
        result = "is prime" if is_prime(num) else "is not prime"
        print(f"{num} {result}")
```
