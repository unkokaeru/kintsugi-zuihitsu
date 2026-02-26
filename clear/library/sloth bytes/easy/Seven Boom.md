# Seven Boom

> **Challenge Difficulty:** Easy | Estimated completion time: ~5 minutes

Create a function that takes an array of numbers and for every `7` found, add one `"Boom!"` to your result. If no `7` is found anywhere, return `"there is no 7 in the array"`.

Check every digit of every number, not just whether the number equals 7.

## Examples

```python
sevenBoom([1, 2, 3, 4, 5, 6, 7])
output = "Boom!"
// One 7 found → one "Boom!"

sevenBoom([8, 6, 33, 100])
output = "there is no 7 in the array"
// No 7s found anywhere.

sevenBoom([2, 55, 60, 97, 86])
output = "Boom!"
// 97 contains one 7 → one "Boom!"

sevenBoom([7, 77, 100])
output = "Boom! Boom! Boom!"
// 7 has one 7, 77 has two 7s → three total
```
