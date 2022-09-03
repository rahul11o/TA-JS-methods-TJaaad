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
     "My name is".concat( "khan");
     ```
   
   - `trimStart` accepts a string data type and return a new string with all the white space removed from start or left side of the string.
8. `endsWith`
9. `includes`
10. `indexOf`
11. `lastIndexOf`
12. `padEnd`
13. `padStart`
14. `repeat`
15. `replace`
16. `slice`
17. `split`
18. `substring`
