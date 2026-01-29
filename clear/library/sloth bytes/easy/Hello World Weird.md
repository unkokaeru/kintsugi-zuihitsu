# Hello World Weird

> **Challenge Difficulty:** Easy | Estimated completion time: ~5 minutes

Write "hello world" in the weirdest way you can.

Output should simply say "hello world"

## Solution

```python runnable
import base64

encoded = base64.b64encode(b"hello world").decode()
print(base64.b64decode(encoded).decode())
```
