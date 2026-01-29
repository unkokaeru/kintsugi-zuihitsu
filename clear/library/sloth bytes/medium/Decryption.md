# Message from Space

> **Challenge Difficulty:** Medium | Estimated completion time: ~30 minutes

You have received an encrypted message from space. Your task is to decrypt the message with the following simple rules:

- Message string will consist of capital letters, numbers, and brackets only.
- When there's a block of code inside the brackets, such as `[10AB]`, it means you need to repeat the letters **AB** for **10 times**.
- Message can be embedded in multiple layers of blocks.
- Final decrypted message will only consist of capital letters.

Create a function that takes encrypted message `str` and returns the decrypted message.

## Examples

```python
spaceMessage("ABCD")
output = "ABCD"

spaceMessage("AB[3CD]")
output = "ABCDCDCD"
# "AB" = "AB"
# "[3CD]" = "CDCDCD"
# Combine both = "ABCDCDCD"

spaceMessage("IF[2E]LG[5O]D")
output = "IFEELGOOOOOD"
```

## Solution

```python runnable
def space_message(message: str) -> str:
    """Decrypt a message with bracketed repetition patterns.
    
    Args:
        message: Encrypted message with patterns like [3AB]
        
    Returns:
        Decrypted message
    """
    stack: list[str] = []
    current_string = ""
    current_number = ""
    
    for char in message:
        if char.isdigit():
            current_number += char
        elif char == "[":
            stack.append(current_string)
            stack.append(current_number)
            current_string = ""
            current_number = ""
        elif char == "]":
            repeat_count = int(stack.pop())
            previous_string = stack.pop()
            current_string = previous_string + current_string * repeat_count
        else:
            current_string += char
    
    return current_string


if __name__ == "__main__":
    print(space_message("ABCD"))  # ABCD
    print(space_message("AB[3CD]"))  # ABCDCDCD
    print(space_message("IF[2E]LG[5O]D"))  # IFEELGOOOOOD
```
