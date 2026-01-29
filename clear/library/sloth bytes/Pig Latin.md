# Pig Latin

Write a function that converts a sentence into pig latin.

Rules for converting to pig latin:

- For words that begin with a vowel (a, e, i, o, u), add "way".
- Otherwise, move all letters before the first vowel to the end and add "ay".
- For simplicity, no punctuation will be present in the inputs.

## Examples

```python
#Example 1
pigLatinSentence("this is pig latin")
output = "isthay isway igpay atinlay"

#Example 2
pigLatinSentence("wall street journal")
output = "allway eetstray ournaljay"
```

## Notes

All letters will be in lowercase.
