# Round-Off Error

**Round-off error** arises from the finite precision of floating-point arithmetic. Real numbers are stored with a fixed number of significant digits (e.g. 64-bit IEEE double precision gives roughly 15-16 decimal digits), so any number that cannot be represented exactly is rounded to the nearest representable value.

Unlike [[Local truncation error]] - which decreases as the step size $dt$ shrinks - round-off error accumulates with more arithmetic operations. For very small $dt$, the truncation error may decrease but the number of steps increases, causing accumulated round-off to eventually dominate.

In practice, this means there is an optimal step size: too large gives large truncation error, too small gives large accumulated round-off. For the methods in this module, round-off is not usually the binding constraint; the stability condition (see [[FTCS scheme]]) imposes a much tighter upper limit on $dt$ than round-off imposes a lower limit.

[[Local truncation error]] | [[Global truncation error]] | [[Absolute error]] | [[Order of a method]]
