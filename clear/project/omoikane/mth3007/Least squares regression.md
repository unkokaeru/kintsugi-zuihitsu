# Least Squares Regression

**Least squares regression** is, given a set of paired ==observations== $(x_{0},y_{0}),(x_{1},y_{1}),\dots,(x_{n-1},y_{n-1})$, assuming a ==linear relationship== defined by ==$y_{i}=a_{0}+a_{1}x_{i}+e$==, where $e$ is the ==error (or residual)== between the model and the observations; we then ==minimise== the ==sum of the squares of these errors==.

In practice, ==least squares regression== means minimising $S_{r}=\sum_{i=0}^{n-1}e^{ 2 }_{i}=\sum_{i=0}^{n-1}(y_{i}-a_{0}-a_{1}x_{i})^2$ as an ==error criterion==; this results in $a_{1}=\frac{n \sum x_{i}y_{i}-\sum x_{i}\sum y_{i}}{n \sum x_{i}^2 - \left( \sum x_{i} \right)^2}$ and $a_{0}=\bar{y}-a_{1}\bar{x}$.
