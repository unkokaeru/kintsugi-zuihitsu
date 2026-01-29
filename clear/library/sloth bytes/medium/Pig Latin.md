# Pig Latin

> **Challenge Difficulty:** Medium | Estimated completion time: ~20 minutes

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

## Solution

```python runnable
def pig_latin_sentence(sentence: str) -> str:
    """Convert a sentence to pig latin.
    
    Args:
        sentence: Input sentence in lowercase
        
    Returns:
        Pig latin version of the sentence
    """
    vowels = "aeiou"
    words = sentence.split()
    pig_latin_words = []
    
    for word in words:
        if word[0] in vowels:
            pig_latin_words.append(word + "way")
        else:
            first_vowel_index = 0
            for index, char in enumerate(word):
                if char in vowels:
                    first_vowel_index = index
                    break
            pig_latin_words.append(word[first_vowel_index:] + word[:first_vowel_index] + "ay")
    
    return " ".join(pig_latin_words)


if __name__ == "__main__":
    print(pig_latin_sentence("this is pig latin"))  # isthay isway igpay atinlay
    print(pig_latin_sentence("wall street journal"))  # allway eetstray ournaljay
```
