# Vowel Skewers

> **Challenge Difficulty:** Medium | Estimated completion time: ~25 minutes

An *authentic* vowel skewer is a skewer with a delicious and juicy mix of consonants and vowels. However, the way they are made must be *just right*:

- Skewers must begin and end with a **consonant**.
- Skewers must **alternate** between consonants and vowels.
- There must be an **even spacing** between each letter on the skewer, so that there is a consistent flavour throughout.

Create a function which returns whether a given vowel skewer is **authentic**.

## Examples

```python
is_authentic_skewer("B--A--N--A--N--A--S")
output = True

is_authentic_skewer("A--X--E")
output = False
# Should start and end with a consonant.

is_authentic_skewer("C-L-A-P")
output = False
# Should alternate between consonants and vowels.

is_authentic_skewer("M--A---T-E-S")
output = False
# Should have consistent spacing between letters.
```
