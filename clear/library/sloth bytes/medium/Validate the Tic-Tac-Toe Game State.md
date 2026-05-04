# Validate the Tic-Tac-Toe Game State

> **Challenge Difficulty:** Medium | Estimated completion time: ~25–35 minutes

You are given a Tic-Tac-Toe board represented as a list of **3 strings**, where each string corresponds to a row. Each row contains exactly **3 characters**, which can be:

- `"X"` → Player X
- `"O"` → Player O
- `" "` → Empty cell

Your task is to determine whether the given board state is **valid**, meaning it could have been reached by following the rules of Tic-Tac-Toe.

## Rules of Tic-Tac-Toe

1. **X always goes first, O goes second**
2. Players take turns placing one mark at a time
3. A player wins by getting **3 in a row**:
   - Horizontally
   - Vertically
   - Diagonally
4. **Once a player wins, the game ends immediately**

## Validation Requirements

A board is valid if:

- The number of X's is either equal to O's, or exactly one more
- O can never have more moves than X
- Both players cannot win simultaneously
- If X wins, X must have exactly one more move than O
- If O wins, X and O must have the same number of moves

## Examples

```python
validateTicTacToe(["X  ", "   ", "   "])
output = True
# X always goes first, so one X is valid.

validateTicTacToe(["O  ", "   ", "   "])
output = False
# O cannot make the first move.

validateTicTacToe(["X X", " O ", "   "])
output = True
# X played twice, O once.
# Alternating turns are respected.

validateTicTacToe(["XOX", " X ", "   "])
output = False
# X has 3 moves while O has 1.
# Invalid turn order.

validateTicTacToe(["XXX", "OO ", "   "])
output = True
# X wins with correct turn count (3 X, 2 O).

validateTicTacToe(["XXX", "   ", "OOO"])
output = False
# Both players cannot win in a valid game.
# The game would have stopped earlier.
```
