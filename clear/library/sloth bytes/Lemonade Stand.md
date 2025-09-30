|   |
|---|
|## Lemonade Stand|
|At a lemonade stand, each lemonade costs $5.|
|Customers are standing in a queue to buy from you, and order one at a time (in the order specified by `bills`).|
|Each customer will **only buy one lemonade** and pay with either a $5, $10, or $20 bill.|
|**You need to give each customer the right amount of change so that they end up paying $5.**|
|- For $5 bills: No change needed<br>    <br>- For $10 bills: You need to give $5 back<br>    <br>- For $20 bills: You need to give $15 back (best using one $10 and one $5, or three $5 bills)|
|Return `true` if and only if you can provide every customer with correct change.|
|### Examples|
|```<br>lemonade([5, 5, 5, 10, 20])<br>""" First three customers pay with $5: Now you have three $5 bills<br>Fourth customer pays $10: You give $5 change, now have two $5 bills and one $10 bill<br>Fifth customer pays $20: You can give $15 change (one $10 + one $5)<br>"""<br>output = True<br><br>lemonade([5, 5, 10, 10, 20])<br>""" First two customers pay with $5: Now you have two $5 bills<br>Third customer pays $10: You give $5 change, now have one $5 bill and one $10 bill<br>Fourth customer pays $10: You give $5 change, now have zero $5 bills and two $10 bills<br>Fifth customer pays $20: You need to give $15 change but you can't because you only have $10 bills!<br>"""<br>output = False<br><br>lemonade([10, 10])<br>output = False<br><br>lemonade([5, 5, 10])<br>output = True<br>```|
|### Notes|
|- You don't have any change in hand at first.<br>    <br>- `bills` is an integer array.<br>    <br>- `bills[i]` will be either `5`, `10`, or `20`.|