# Calculator Text

> **Challenge Difficulty:** Medium | Estimated completion time: ~20 minutes

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

## Solution

```python runnable
def turn_calc(number: int) -> str:
    """Convert calculator number to upside-down text.
    
    Args:
        number: Number to convert
        
    Returns:
        Upside-down text representation
    """
    mapping = {
        "0": "O",
        "1": "I",
        "2": "Z",
        "3": "E",
        "4": "H",
        "5": "S",
        "6": "G",
        "7": "L",
        "8": "B",
        "9": "-"
    }
    
    number_string = str(number).replace(".", "")
    reversed_string = number_string[::-1]
    
    return "".join(mapping[digit] for digit in reversed_string)


if __name__ == "__main__":
    print(turn_calc(707))  # LOL
    print(turn_calc(5508))  # BOSS
    print(turn_calc(3045))  # SHOE
    print(turn_calc(7734))  # HELLO
```
