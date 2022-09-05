Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.charAt(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
 - Parameter: Accepts string data type
   - Return: convert the same into uppercase 
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toUpperCase(); // "ARYA STARk"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toUpperCase(); // "AQUICK FOX JUMPED OVER  A LAZY DOG"
     let houseName = 'Starks';
     houseName.toUpperCase(); // "STARKS"
     ```
   - `toUpperCase` accepts a string data type and return a new string  with same content but in uppercase.

3. `toLowerCase`
- Parameter: Accepts string data type
   - Return: convert the same into lowercase, if its already in lower case then will return untouched.
   - Example:
     ```js
     let name = "ARYA STARk";
     name.toLowerCase(); // 'Arya Stark'
     let sentance =  "A QUICK FOX JUMPED OVER  A LAZY DOG";
     sentance.toLowerCase();
     let houseName = "STARKS";
     houseName.toLowerCase(); // 'Starks'
     ```
   - `toLowerCase` accepts a string data type and return a new  string but in Lowercase.

4. `trim`
- Parameter: Accepts string data type
   - Return: return a new string with all the white space removed from it.
   - Example:
     ```js
     let name = '   Arya Stark   ';
     name.trim(); // "Arya stark"
     let sentance = '       A quick brown fox jumped over a lazy dog';
     sentance.trim();// 'A quick brown fox jumped over a lazy dog'
     let houseName = 'Starks         ';
     houseName.trim(); // "Starks"
     ```
   
   - `trim` accepts a string data type and return a new string with all the white space removed from it.

5. `trimEnd`
- Parameter: Accepts string data type
   - Return: return a new string with all the white space removed from end or right side of the string.
   - Example:
     ```js
     let name = '   Arya Stark   ';
     name.trimEnd(); // "   Arya stark"
     let sentance = 'A quick brown fox jumped over a lazy dog     ';
     sentance.trimEnd();// 'A quick brown fox jumped over a lazy dog'
     let houseName = '     Starks';
     houseName.trimEnd(); // "     Starks"
     ```
   
   - `trimEnd` accepts a string data type and return a new string with all the white space removed from end or right side of the string.

6. `trimStart`
- Parameter: Accepts string data type
   - Return: return a new string with all the white space removed from start or left side of the string.
   - Example:
     ```js
     let name = '   Arya Stark   ';
     name.trimStart(); // 'Arya Stark   '
     let sentance = 'A quick brown fox jumped over a lazy dog     ';
     sentance.trimStart();// 'A quick brown fox jumped over a lazy dog     ';
     let houseName = '     Starks';
     houseName.trimStart(); // 'Starks'
     ```
   
   - `trimStart` accepts a string data type and return a new string with all the white space removed from start or left side of the string.

7. `concat`
- Parameter: Accepts string data type
   - Return: return a new, concatenated string , this new string is the concatenation of calling string and the string passed as an arguments.
   - Example:
     ```js
     let name = 'Arya';
     name.concat(" ", "stark");  // 'Arya Stark   '
     "My name is".concat(" ", "khan");
     ```
   
   - `concat` accepts a string data type and return a new, concatenated string , this new string is the concatenation of calling string and the string passed as an arguments.

8. `endsWith`
- Parameter: Accepts a character(string) and look weather the main string ends with this chosen character(string) or not, it also accept a number value as an optional parameter
   - Return: return true or false upon checking, true if its the string ends with that specified character or else false
   - Example:
     ```js
     let name = 'Arya';
     name.endsWith("a");// true
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.endsWith("quick" , 7);// true
     let houseName = 'Starks';
     houseName.endsWith("s"); // true
     ```
     
   
   -  `endsWith` Accepts a character(string) and look weather the main string ends with this chosen character(string) or not, it also accept a number value as an optional parameter, return true or false upon checking, true if its the string ends with that specified character or else false.

9. `includes`
- Parameter: Accepts a character(string) and look weather the main string includes this chosen character(string) or not, it also accept a number value as an optional parameter
   - Return: return true or false upon checking, true if its the string inludes that specified character or else false
   - Example:
     ```js
     let name = 'Arya';
     name.includes("a");// true
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.includes("quick" , 2);// true
     let houseName = 'Starks';
     houseName.includes("s"); // true
     ```
   -  `includes` Accepts a character(string) and look weather the main string includes this chosen character(string) or not, it also accept a number value as an optional parameter, return true or false upon checking, true if its the string includes that specified character or else false.


10. `indexOf`
- Parameter: Accepts a character(string) , and an optionl value in number data type
   - Return: return the index of first occurance of the specified string
   - Example:
     ```js
     let name = 'Arya';
     name.indexOf("a");// 3
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.indexOf("quick" , 2);// 2
     let houseName = 'starks';
     houseName.indexOf("s", 4); // 5
     ```
   -  `indexOf` Accepts a character(string) , and an optionl value in number data type and return the index of first occurance of the specified string

   
11. `lastIndexOf`
- Parameter: Accepts a character(string) , and an optionl value in number data type
   - Return: return the index of last occurance of the specified string
   - Example:
     ```js
     let name = 'arya';
     name.lastIndexOf("a");// 3
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.lastIndexOf("quick" , 2);// 2
     let houseName = 'starks';
     houseName.lastIndexOf("s", 4); // 0
     ```
   -  `indexOf` Accepts a character(string) , and an optionl value in number data type and return the index of first occurance of the specified string

12. `padEnd`
- Parameter: Accepts a number and an optional value
   - Return: return the padded string whose length would be equal to the number passed as an argument only if the length of the number paased is greater than the length of  calling string or else the new returned string would be same. . The padding is tarted from the end of the strng. 
   - Example:
     ```js
     let name = 'Arya';
     name.padEnd(8);// 'Arya    '
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.padEnd(70, 70);// 'A quick brown fox jumped over a lazy dog707070707070707070707070707070'
     let houseName = 'starks';
     houseName.padEnd(18, "s"); // 'starksssssssssssss'
     ```
   `padEnd`-  Accepts a number and an optional value and return the padded string whose length would be equal to the number passed as an argument only if the length of the number paased is greater than the length of  calling string or else the new returned string would be same. 

13. `padStart`
- Parameter: Accepts a number and an optional value
   - Return: return the padded string whose length would be equal to the number passed as an argument only if the length of the number paased is greater than the length of  calling string or else the new returned string would be same. The padding is tarted from the start of the strng. 
   - Example:
     ```js
     let name = 'Arya';
     name.padStart(8);// '    Arya'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.padStart(70, 70);// '707070707070707070707070707070A quick brown fox jumped over a lazy dog'
     let houseName = 'starks';
     houseName.padStart(18, "s"); //'ssssssssssssstarks'
     ```
   `padStart`-  Accepts a number and an optional value and return the padded string whose length would be equal to the number passed as an argument only if the length of the number paased is greater than the length of  calling string or else the new returned string would be same. The padding is tarted from the start of the strng. 

14. `repeat`
- Parameter:An integer between 0 and +Infinity, indicating the number of times to repeat the string.
   - Return: A new string containing the specified number of copy string.
   - Example:
     ```js
     let name = 'Arya';
     name.repeat(8);//'AryaAryaAryaAryaAryaAryaAryaArya'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.repeat(0);// " "
     let houseName = 'starks';
     houseName.repeat( 9); //'starksstarksstarksstarksstarksstarksstarksstarksstarks'
     ```
    `repeat` Accept an integer between 0 and +Infinity, indicating the number of times to repeat the string and a new string containing the specified number of copy string.
   

15. `replace`


16. `slice`
- Parameter: Accepts a number value as an index of the  first character which you want to extract from the calling string in order to make a nwew string, also accepts second number  which is optional, for excluding the index of the first unwanted charcter in newly made string 
   - Return: A new string as an excerpt of the calling string is returned
   - Example:
     ```js
     let name = 'Arya';
     name.slice(2);//'ya'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.slice(9, 23);//'rown fox jumpe'
     let houseName = 'A quick brown fox jumped over a lazy dog';
     houseName.slice( -8, -23); //" "
     ```
    `slice` Accepts a number value as an index of the  first character which you want to extract from the calling string in order to make a nwew string, also accepts second number  which is optional, for excluding the index of the first unwanted charcter in newly made string and return a new string as an excerpt of the calling string
   

17. `split`
18. `substring`
