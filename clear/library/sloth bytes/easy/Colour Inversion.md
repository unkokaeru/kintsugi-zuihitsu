# Invert Colors

> **Challenge Difficulty:** Easy | Estimated completion time: ~5 minutes

Create a function that inverts the `rgb` values of a given list.

## Examples

```python
color_invert([255, 255, 255])
output = [0, 0, 0]
# [255, 255, 255] is the color white.
# The opposite is [0, 0, 0], which is black.

color_invert([0, 0, 0])
output = [255, 255, 255]

color_invert([165, 170, 221])
output = [90, 85, 34]
```

## Notes

- Must return a list.
- 255 is the max value of a single color channel.

## Solution

```python runnable
def color_invert(color_values: list[int]) -> list[int]:
    """Invert the RGB values of a color.
    
    Args:
        color_values: List of three RGB values (0-255)
        
    Returns:
        List of inverted RGB values
    """
    return [255 - value for value in color_values]


if __name__ == "__main__":
    print(color_invert([255, 255, 255]))  # [0, 0, 0]
    print(color_invert([0, 0, 0]))  # [255, 255, 255]
    print(color_invert([165, 170, 221]))  # [90, 85, 34]
```
