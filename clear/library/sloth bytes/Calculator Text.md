> **Challenge Difficulty:** Medium | Estimated completion time: ~20 minutes

# Calculator Text

At school, we used to play with our calculators and send each other secret messages. The trick was to enter a special number and turn the calculator upside-down.

Like saying hello, you'd type in the calculator 07734 and turn it upside down:

![Calculator showing HELLO](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/f8c4eb19-36e5-43a6-a4df-585d81f989ae/hello_calculator.gif?t=1741666543)

Given a number, create a function that converts it into a word by turning the integer 180 degrees around.

## Examples

```python
turnCalc(707)
output = "LOL"

turnCalc(5508)
output = "BOSS"

turnCalc(3045)
output = "SHOE"

turnCalc(07734)
output = "HELLO"
```

## Number to Letter Mapping

| number | letter |
| ------ | ------ |
| 1      | I      |
| 2      | Z      |
| 3      | E      |
| 4      | H      |
| 5      | S      |
| 6      | G      |
| 7      | L      |
| 8      | B      |
| 9      | -      |
| 0      | O      |

## Notes

- Convert to uppercase words.
- Ignore dots.
