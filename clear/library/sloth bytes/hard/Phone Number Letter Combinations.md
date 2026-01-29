> **Challenge Difficulty:** Hard | Estimated completion time: ~45 minutes

# Phone Number Letter Combinations

Given a string of digits (from `'2'` to `'9'`), return **all possible letter combinations** that the digits could represent, using the mapping on a telephone keypad:

![Telephone keypad](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/84268104-74e5-49a9-9444-fb816b039d1e/Telephone-keypad2.svg.png?t=1759815001)

If the input is an empty string, return an empty list.

You may return the results in any order.

## Examples

```python
def letterCombinations("23")
output = ["ad","ae","af","bd","be","bf","cd","ce","cf"]

def letterCombinations("")
output = []

def letterCombinations("2")
output = ["a","b","c"]

def letterCombinations("27")
output = ["ap","aq","ar","as","bp","bq","br","bs","cp","cq","cr","cs"]

def letterCombinations("234")
output = [
    "adg","adh","adi","aeg","aeh","aei","afg","afh","afi",
    "bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi",
    "cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"
]

def letterCombinations("79")
output = [ "pw","px","py","pz","qw","qx","qy","qz", "rw","rx","ry","rz", "sw","sx","sy","sz"]
```
