> **Challenge Difficulty:** Medium | Estimated completion time: ~25 minutes

# Word Buckets

Write a function that divides a phrase into word buckets, with each bucket containing `n` or fewer characters. Only include full words inside each bucket.

## Examples

```python
split_into_buckets("she sells sea shells by the sea", 10)
output = ["she sells", "sea shells", "by the sea"]

split_into_buckets("the mouse jumped over the cheese", 7)
output = ["the", "mouse", "jumped", "over", "the", "cheese"]

split_into_buckets("fairy dust coated the air", 20)
output = ["fairy dust coated", "the air"]

split_into_buckets("a b c d e", 2)
output = ["a", "b", "c", "d", "e"]
```

## Notes

- Spaces count as one character.
- Trim beginning and end spaces for each word bucket (see final example).
- If buckets are too small to hold a single word, return an empty list: `[]`
- The final goal isn't to return just the words with a length equal (or lower) to the given `n`, but to return the entire given phrase bucketized (if possible).
