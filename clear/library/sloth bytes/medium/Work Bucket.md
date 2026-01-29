# Word Buckets

> **Challenge Difficulty:** Medium | Estimated completion time: ~25 minutes

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

## Solution

```python runnable
def split_into_buckets(phrase: str, bucket_size: int) -> list[str]:
    """
    Divide a phrase into word buckets with each bucket containing n or fewer characters.
    
    Only full words are included in each bucket. Spaces count as characters.
    
    Args:
        phrase: String phrase to divide into buckets.
        bucket_size: Maximum number of characters per bucket.
        
    Returns:
        List of strings, each containing words that fit within bucket_size.
        Returns empty list if any word is too large for the bucket.
        
    Examples:
        >>> split_into_buckets("she sells sea shells by the sea", 10)
        ['she sells', 'sea shells', 'by the sea']
    """
    words = phrase.split()
    
    # Check if any word is too large for the bucket
    for word in words:
        if len(word) > bucket_size:
            return []
    
    buckets = []
    current_bucket = []
    current_length = 0
    
    for word in words:
        word_length = len(word)
        
        # Calculate the length if we add this word
        if current_bucket:
            # Need to account for space before the word
            needed_length = current_length + 1 + word_length
        else:
            needed_length = word_length
        
        if needed_length <= bucket_size:
            current_bucket.append(word)
            current_length = needed_length
        else:
            # Start a new bucket
            if current_bucket:
                buckets.append(" ".join(current_bucket))
            current_bucket = [word]
            current_length = word_length
    
    # Add the last bucket
    if current_bucket:
        buckets.append(" ".join(current_bucket))
    
    return buckets


if __name__ == "__main__":
    # Test cases
    assert split_into_buckets("she sells sea shells by the sea", 10) == ["she sells", "sea shells", "by the sea"]
    assert split_into_buckets("the mouse jumped over the cheese", 7) == ["the", "mouse", "jumped", "over", "the", "cheese"]
    assert split_into_buckets("fairy dust coated the air", 20) == ["fairy dust coated", "the air"]
    assert split_into_buckets("a b c d e", 2) == ["a", "b", "c", "d", "e"]
    assert split_into_buckets("supercalifragilistic", 10) == []
    print("All test cases passed!")
```
