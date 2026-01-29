# Calculate Damage - Beginner

> **Challenge Difficulty:** Easy | Estimated completion time: ~5 minutes

Create a function that takes damage and speed (attacks per second) and returns the amount of damage after a given time.

## Examples

```python
damage(40, 5, "second") ➞ 200

damage(100, 1, "minute") ➞ 6000

damage(2, 100, "hour") ➞ 720000
```

## Notes

Return "invalid" if damage or speed is negative.

## Solution

```python runnable
def damage(damage_per_attack: int, speed: int, time: str) -> int | str:
    """Calculate total damage over a time period.
    
    Args:
        damage_per_attack: Damage per attack
        speed: Attacks per second
        time: Time unit (second, minute, or hour)
        
    Returns:
        Total damage dealt, or "invalid" if parameters are negative
    """
    if damage_per_attack < 0 or speed < 0:
        return "invalid"
    
    time_multipliers = {
        "second": 1,
        "minute": 60,
        "hour": 3600
    }
    
    return damage_per_attack * speed * time_multipliers[time]


if __name__ == "__main__":
    print(damage(40, 5, "second"))  # 200
    print(damage(100, 1, "minute"))  # 6000
    print(damage(2, 100, "hour"))  # 720000
```
