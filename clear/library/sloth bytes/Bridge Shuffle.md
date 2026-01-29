# Bridge Shuffle

Create a function to **bridge shuffle** two arrays.

To **bridge shuffle**, you interleave the elements from both arrays in an alternating fashion:

```python
array1 = ["A", "A", "A"]
array2 = ["B", "B", "B"]

shuffled_array = ["A", "B", "A", "B", "A", "B"]
```

This can still work with two arrays of uneven length. We simply tack on the extra elements from the longer array:

```python
array1 = ["C", "C", "C", "C"]
array2 = ["D"]

shuffled_array = ["C", "D", "C", "C", "C"]
```

## Examples

```python
bridgeShuffle(["A", "A", "A"], ["B", "B", "B"])
output = ["A", "B", "A", "B", "A", "B"]

bridgeShuffle(["C", "C", "C", "C"], ["D"])
output = ["C", "D", "C", "C", "C"]

bridgeShuffle([1, 3, 5, 7], [2, 4, 6])
output = [1, 2, 3, 4, 5, 6, 7]
```

## Notes

- Elements in both arrays can be strings or integers.
- If two arrays are of unequal length, add the additional elements of the longer array to the end of the shuffled array.
- Always start your shuffle with the first element of Array 1.
