# Prime Number Checker

> **Challenge Difficulty:** Easy | Estimated completion time: ~10 minutes

Develop a small program that checks whether a number entered by the user is a prime number or not.

This is a very simple program for beginners!

If you have experience be creative with it or try it with a new language.

## Solution

```python runnable
def is_prime(number: int) -> bool:
    """Check if a number is prime.
    
    Args:
        number: Number to check
        
    Returns:
        True if the number is prime, False otherwise
    """
    if number < 2:
        return False
    if number == 2:
        return True
    if number % 2 == 0:
        return False
    
    for divisor in range(3, int(number ** 0.5) + 1, 2):
        if number % divisor == 0:
            return False
    
    return True


if __name__ == "__main__":
    test_numbers = [2, 3, 4, 17, 20, 29, 100, 97]
    for number in test_numbers:
        result = "is prime" if is_prime(number) else "is not prime"
        print(f"{number} {result}")
```
