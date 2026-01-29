# Nom Nom Numbers

A number can **"eat"** the number to its **right** if it's **larger** than that number.

When it eats, it becomes the **sum** of both numbers.

Keep repeating this process from **left to right** until no more eating can happen.

## Examples

```python
nom_nom([5, 3, 7])
output = [15]

nom_nom([5, 3, 9])
output = [8, 9]

nom_nom([1, 2, 3])
output = [1, 2, 3]

nom_nom([2, 1, 3])
output = [3, 3]

nom_nom([8, 5, 9])
output = [22]

nom_nom([6, 5, 6, 100])
output = [17, 100]
```
