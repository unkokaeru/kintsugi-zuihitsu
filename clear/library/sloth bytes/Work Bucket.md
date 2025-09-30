|   |
|---|
|## Word Buckets|
|Write a function that divides a phrase into word buckets, with each bucket containing `n` or fewer characters. Only include full words inside each bucket.|
|### Examples|
|```<br>split_into_buckets("she sells sea shells by the sea", 10)<br>output = ["she sells", "sea shells", "by the sea"]<br><br>split_into_buckets("the mouse jumped over the cheese", 7)<br>output = ["the", "mouse", "jumped", "over", "the", "cheese"]<br><br>split_into_buckets("fairy dust coated the air", 20)<br>output = ["fairy dust coated", "the air"]<br><br>split_into_buckets("a b c d e", 2)<br>output = ["a", "b", "c", "d", "e"]<br>```|
|### **Notes**|
|- Spaces count as one character.<br>    <br>- Trim beginning and end spaces for each word bucket (see final example).<br>    <br>- If buckets are too small to hold a single word, return an empty list: `[]`<br>    <br>- The final goal isn't to return just the words with a length equal (or lower) to the given `n`, but to return the entire given phrase bucketized (if possible).|