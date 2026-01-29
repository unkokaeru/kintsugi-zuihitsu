> **Challenge Difficulty:** Medium | Estimated completion time: ~25 minutes

# Lemonade Stand

At a lemonade stand, each lemonade costs $5.

Customers are standing in a queue to buy from you, and order one at a time (in the order specified by `bills`).

Each customer will **only buy one lemonade** and pay with either a $5, $10, or $20 bill.

**You need to give each customer the right amount of change so that they end up paying $5.**

- For $5 bills: No change needed
- For $10 bills: You need to give $5 back
- For $20 bills: You need to give $15 back (best using one $10 and one $5, or three $5 bills)

Return `true` if and only if you can provide every customer with correct change.

## Examples

```python
lemonade([5, 5, 5, 10, 20])
""" First three customers pay with $5: Now you have three $5 bills
Fourth customer pays $10: You give $5 change, now have two $5 bills and one $10 bill
Fifth customer pays $20: You can give $15 change (one $10 + one $5)
"""
output = True

lemonade([5, 5, 10, 10, 20])
""" First two customers pay with $5: Now you have two $5 bills
Third customer pays $10: You give $5 change, now have one $5 bill and one $10 bill
Fourth customer pays $10: You give $5 change, now have zero $5 bills and two $10 bills
Fifth customer pays $20: You need to give $15 change but you can't because you only have $10 bills!
"""
output = False

lemonade([10, 10])
output = False

lemonade([5, 5, 10])
output = True
```

## Notes

- You don't have any change in hand at first.
- `bills` is an integer array.
- `bills[i]` will be either `5`, `10`, or `20`.
