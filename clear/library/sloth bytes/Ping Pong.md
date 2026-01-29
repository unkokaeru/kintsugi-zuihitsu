# Ping Pong!

A game of table tennis almost always sounds like _Ping!_ followed by _Pong!_

You know that Player 2 won if you hear _Pong!_ as the last sound (since Player 1 didn't return the ball back).

Given an array of _Ping!_, create a function that inserts _Pong!_ in between each element. Also:

- If `win` equals `true`, end the list with _Pong!_
- If `win` equals `false`, end the list with _Ping!_

## Examples

```
#Example 1
pingPong(["Ping!"], True)
output = ["Ping!", "Pong!"]

#Example 2
pingPong(["Ping!", "Ping!"], False)
output = ["Ping!", "Pong!", "Ping!"]

#Example 3
pingPong(["Ping!", "Ping!", "Ping!"], True)
output = ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
```

## Notes

- Player 1 serves the ball and makes _Ping!_.
- Return an array of strings.
