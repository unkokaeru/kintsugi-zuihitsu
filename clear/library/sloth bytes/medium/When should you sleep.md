# When Should You Go to Sleep?

> **Challenge Difficulty:** Medium | Estimated completion time: ~25 minutes

You're setting an alarm for the next morning and know how long you want to sleep.  
Your job is to figure out **what time you need to go to bed** to get that amount of sleep.

Each input has two parts:

1. The **alarm time** (when you'll wake up).
2. The **sleep duration** (how long you want to sleep).

Return the time you should go to bed — in **24-hour format** (`"HH:MM"`).

## Examples

```python
bedTime(["07:50", "07:50"])
output = ["00:00"]

bedTime(["06:15", "10:00"], ["08:00", "10:00"], ["09:30", "10:00"])
output = ["20:15", "22:00", "23:30"]


bedTime(["05:45", "04:00"], ["07:10", "04:30"])
output = ["01:45", "02:40"]
```
