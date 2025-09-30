|   |
|---|
|## Message from Space|
|You have received an encrypted message from space. Your task is to decrypt the message with the following simple rules:|
|- Message string will consist of capital letters, numbers, and brackets only.<br>    <br>- When there's a block of code inside the brackets, such as `[10AB]`, it means you need to repeat the letters **AB** for **10 times**.<br>    <br>- Message can be embedded in multiple layers of blocks.<br>    <br>- Final decrypted message will only consist of capital letters.|
|Create a function that takes encrypted message `str` and returns the decrypted message.|
|### **Examples**|
|```<br>spaceMessage("ABCD")<br>output = "ABCD"<br><br>spaceMessage("AB[3CD]")<br>output = "ABCDCDCD"<br># "AB" = "AB"<br># "[3CD]" = "CDCDCD"<br># Combine both = "ABCDCDCD"<br><br>spaceMessage("IF[2E]LG[5O]D")<br>output = "IFEELGOOOOOD"<br>```|