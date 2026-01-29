# Remove the Computer Virus

> **Challenge Difficulty:** Medium | Estimated completion time: ~20 minutes

Your computer might have been infected by a virus! Create a function that finds the viruses in `files` and removes them from your computer.

## Examples

```python
removeVirus("PC Files: spotifysetup.exe, virus.exe, dog.jpg")
output = "PC Files: spotifysetup.exe, dog.jpg"

removeVirus("PC Files: antivirus.exe, cat.pdf, lethalmalware.exe, dangerousvirus.exe ")
output = "PC Files: antivirus.exe, cat.pdf"

removeVirus("PC Files: notvirus.exe, funnycat.gif")
output = "PC Files: notvirus.exe, funnycat.gif")
```

## Notes

- Bad files will contain "virus" or "malware", but "antivirus" and "notvirus" will not be viruses.
- Return `"PC Files: Empty"` if there are no files left on the computer.

## Solution

```python runnable
def removeVirus(files_string: str) -> str:
    """
    Remove virus and malware files from a computer files string.
    
    Files containing 'virus' or 'malware' are removed, except files
    containing 'antivirus' or 'notvirus' which are safe.
    
    Args:
        files_string: String starting with 'PC Files: ' followed by comma-separated filenames.
        
    Returns:
        String with virus/malware files removed, or 'PC Files: Empty' if no files remain.
        
    Examples:
        >>> removeVirus("PC Files: spotifysetup.exe, virus.exe, dog.jpg")
        'PC Files: spotifysetup.exe, dog.jpg'
    """
    prefix = "PC Files: "
    files_part = files_string[len(prefix):].strip()
    
    if not files_part:
        return "PC Files: Empty"
    
    file_list = [file.strip() for file in files_part.split(",")]
    clean_files = []
    
    for filename in file_list:
        filename_lower = filename.lower()
        is_virus = ("virus" in filename_lower or "malware" in filename_lower)
        is_safe = ("antivirus" in filename_lower or "notvirus" in filename_lower)
        
        if not is_virus or is_safe:
            clean_files.append(filename)
    
    if not clean_files:
        return "PC Files: Empty"
    
    return prefix + ", ".join(clean_files)


if __name__ == "__main__":
    # Test cases
    assert removeVirus("PC Files: spotifysetup.exe, virus.exe, dog.jpg") == "PC Files: spotifysetup.exe, dog.jpg"
    assert removeVirus("PC Files: antivirus.exe, cat.pdf, lethalmalware.exe, dangerousvirus.exe ") == "PC Files: antivirus.exe, cat.pdf"
    assert removeVirus("PC Files: notvirus.exe, funnycat.gif") == "PC Files: notvirus.exe, funnycat.gif"
    assert removeVirus("PC Files: virus.exe, malware.exe") == "PC Files: Empty"
    print("All test cases passed!")
```
