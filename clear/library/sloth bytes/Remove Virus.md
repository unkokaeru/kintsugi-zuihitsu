> **Challenge Difficulty:** Medium | Estimated completion time: ~20 minutes

# Remove the Computer Virus

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
