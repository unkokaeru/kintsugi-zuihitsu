# Dependable Jobs Schedule

You're given a number of jobs and a list of dependencies.  
Each job is labeled from `0` to `jobs - 1`.  
Each dependency `[a, b]` means **job** `a` **can only start after job** `b` **is finished**.

Return `true` if all jobs can be finished, or `false` if there's a circular dependency.

## Examples

```python
finishAll(2, [[1, 0]])
output = True

finishAll(2, [[1, 0], [0, 1]])
output = False
## job 1 depends on job 0
## job 0 also depends on job 1
## → circular dependency, cannot complete either job

finishAll(3, [[1, 0], [2, 1]])
output = True
## job 0 → job 1 → job 2
## no cycles, all jobs can be finished in order

finishAll(1, [])
output = true
## only one job (0) with no dependencies
## → can be completed immediately

finishAll(11, [[6, 10], [4, 3], [9, 2], [2, 3], [6, 1], [2, 8], [10, 1], [10, 2], [5, 3], [0, 10], [7, 4], [6, 1]])
output = true
```
