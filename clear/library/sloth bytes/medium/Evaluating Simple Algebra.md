# Evaluating Simple Algebra

> **Challenge Difficulty:** Medium | Estimated completion time: ~20 minutes

Given a string containing an algebraic equation, calculate and **return the value of x**.

You'll only be given equations for simple **addition** and **subtraction**.

## Examples

```python
evalAlgebra("2 + x = 19")
output = 17

evalAlgebra("4 - x = 1")
output = 3

evalAlgebra("x + 10 = 53")
output = 43

evalAlgebra("-23 + x = -20")
output = 3

evalAlgebra("10 + x = 5")
output = -5

evalAlgebra("-49 - x = -180")
output = 131

evalAlgebra("x - 22 = -56")
output = -34
```

## Solution

```python runnable
def eval_algebra(equation: str) -> int:
    """Solve a simple algebraic equation for x.
    
    Args:
        equation: String equation with x, +, -, and =
        
    Returns:
        Value of x
    """
    left, right = equation.split(" = ")
    result = int(right)
    
    parts = left.replace("- ", "-").replace("+ ", "+").split()
    
    for part in parts:
        if part == "x":
            continue
        elif "x" in part:
            coefficient = part.replace("x", "")
            if coefficient == "" or coefficient == "+":
                continue
            elif coefficient == "-":
                result += 1
            else:
                result -= int(coefficient)
        else:
            if part.startswith("+"):
                result -= int(part[1:])
            else:
                result -= int(part)
    
    if left.startswith("x"):
        return result
    elif left.endswith("x"):
        return result
    elif " x " in left:
        return result
    
    return result


if __name__ == "__main__":
    print(eval_algebra("2 + x = 19"))  # 17
    print(eval_algebra("4 - x = 1"))  # 3
    print(eval_algebra("x + 10 = 53"))  # 43
    print(eval_algebra("-23 + x = -20"))  # 3
```
