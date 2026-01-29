# Making a Box

> **Challenge Difficulty:** Medium | Estimated completion time: ~15 minutes

Create a function that creates a box based on dimension n.

## Examples

```python
makeBox(5) ➞ [
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
] 5x5 box

makeBox(3) ➞ [
  "###",
  "# #",
  "###"
] 3x3 box

makeBox(2) ➞ [
  "##",
  "##"
] 2x2 box

makeBox(1) ➞ [
  "#"
] 1x1 box
```

## Solution

```python runnable
def make_box(dimension: int) -> list[str]:
    """Create a box with given dimension.
    
    Args:
        dimension: Size of the box
        
    Returns:
        List of strings representing the box
    """
    if dimension == 1:
        return ["#"]
    
    result = []
    
    result.append("#" * dimension)
    
    for _ in range(dimension - 2):
        result.append("#" + " " * (dimension - 2) + "#")
    
    result.append("#" * dimension)
    
    return result


if __name__ == "__main__":
    print(make_box(5))
    print(make_box(3))
    print(make_box(2))
    print(make_box(1))
```
