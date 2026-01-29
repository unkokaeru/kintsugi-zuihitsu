# The Actual Memory Size of Your USB Flash Drive

> **Challenge Difficulty:** Easy | Estimated completion time: ~10 minutes

Create a function that takes the memory size (`ms`) as an argument and returns the actual memory size.

## Examples

```python
actualMemorySize("32GB")
output = "29.76GB"

actualMemorySize("2GB")
output = "1.86GB"

actualMemorySize("512MB")
output = "476MB"
```

## Notes

- The actual storage loss on a USB device is **7% of the overall memory size!**
- If the actual memory size was greater than 1 GB, round your result to two decimal places.
- If the memory size after adjustment is smaller then 1 GB, return the result in MB.
- For the purposes of this challenge, there are **1000 MB** in a **Gigabyte**.

## Solution

```python runnable
def actual_memory_size(memory_size: str) -> str:
    """Calculate the actual memory size after 7% storage loss.
    
    Args:
        memory_size: Memory size string (e.g., "32GB" or "512MB")
        
    Returns:
        Actual memory size as a string
    """
    if memory_size.endswith("GB"):
        size_gigabytes = float(memory_size[:-2])
        size_megabytes = size_gigabytes * 1000
    else:
        size_megabytes = float(memory_size[:-2])
    
    actual_megabytes = size_megabytes * 0.93
    
    if actual_megabytes >= 1000:
        actual_gigabytes = actual_megabytes / 1000
        return f"{actual_gigabytes:.2f}GB"
    else:
        return f"{int(actual_megabytes)}MB"


if __name__ == "__main__":
    print(actual_memory_size("32GB"))  # 29.76GB
    print(actual_memory_size("2GB"))  # 1.86GB
    print(actual_memory_size("512MB"))  # 476MB
```
