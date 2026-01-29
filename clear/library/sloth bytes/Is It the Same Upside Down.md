# Is It the Same Upside Down

The number 6090609 has a special property: if you turn the number upside down (imagine rotating your screen 180 degrees), you get 6090609 again.

Write a function that takes a string on the digits 0, 6, 9 and returns `true` if the number is the same upside down or `false` otherwise.

## Examples

```
sameUpsidedown("6090609")
output = true

sameUpsidedown("9669")
output = false
# Becomes 6996 when upside down.

sameUpsidedown("9")
output = false

sameUpsidedown("0")
output = true

sameUpsidedown("6090609")
output = true

sameUpsidedown("60906096090609")
output = true

sameUpsidedown("966909669")
output = false
# Becomes 699606699 when upside down.

sameUpsidedown("96666660999999")
output = false
```
