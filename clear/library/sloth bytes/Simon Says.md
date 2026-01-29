# Simon Says

Simon asks you to perform operations on a list of numbers that **only he tells you**.

You should ignore all other instructions given.

Create a function which evaluates a list of commands (written in plain English) if the command begins with **Simon says**. Return the result as an integer.

## Examples

```
simon_says([
  "Simon says add 4",
  "Simon says add 6",
  "Then add 5"
])
output = 10

simon_says([
  "Susan says add 10",
  "Simon says add 3",
  "Simon says multiply by 8"
])
output = 24

simon_says([
  "Firstly, add 4",
  "Simeon says subtract 100" # Look at the name closely :)
])
output = 0
```

## Notes

- If no instructions are given by Simon, return `0`.
- For the sake of simplicity, there will be no command for **dividing**.
