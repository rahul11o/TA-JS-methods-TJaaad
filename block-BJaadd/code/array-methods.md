Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

   - Parameter: AS the the parameter it accepts an optional specifed seprator string.
   - Return: join() method concatenate all the available elements of an array, seprated by comma or specified seprator string and return  a new string.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.join; //"1,2,3"
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.join(", "); //"red, green, blue"
     ```
   - `join` accepts a specifed seprator string which is optional and return a new string after concatenating all the available elements of an array into single string seprated by that specified operator and if there is only one elmnents in the array then it will return the string without using the seprtaor
   - No it does not mutate the original array


3. `flat`

 - Parameter: In this methpd , parameter , which is for determining the depth upto which the array would be flatten is optinal.
   - Return: flat() method creates and return a new array which is nothing but the collection of  the elements which we got after the falttening the nested array inside the main array.
   - Example:
     ```js
     let numbers = [1, 2, 3, [4,5]];
     numbers.flat(); //[1,2,3,4,5]
    let oddNumbers = [1,3,[5,7,9],11,[[[13,15]]],17]
    oddNumbers.flat(3);// // [1, 3, 5, 7, 9, 11, 13, 15, 17]
     let colors = ['red', [[[[['green']]]]], 'blue'];
     colors.flat(Infinity); //[red, green, blue]"
     ```
   - `flat` In this methpd , parameter , which is for determining the depth upto which the array would be flatten is optinal,
   iyt creates and return a new array which is nothing but the collection of  the elements which we got after the falttening the nested array inside the main array.
   - No it does not mutate the original array


4. `push`

- Parameter: it accepts an element which will be added at the end of the given array .
   - Return: it will return the new length property upon which the push() method was called.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.push(9); //"1,2,3"
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.push("dog");//['A', 'quick', 'brown', 'fox', 'jumped', 'over', 'a', 'lazy', 'dog'];
     let colors = ['red', 'green', 'blue'];
     colors.push("yellow", "black"); // ['red', 'green', 'blue', 'yellow', 'black']
     ```
   - `push` it accepts an element which will be added at the end of the given array and then return the new length property upon which the push() method was called.
   - it mutates the original value

5. `indexOf`
- Parameter: accepts an element whose locatation you want find out.
   - Return: it will return the index of the element upon which the indexOf() method was called.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.indexOf(3); //2
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.indexOf("dog");//-1
     let colors = ['red', 'green', 'blue'];
     colors.push(); // -1
     ```
   - `indexOf` it accepts an element whose  location/index you want to locate and then return index  of the given elements  upon which the push() method was called.
   - it  does not mutates the original value
   

6. `lastIndexOf`
- Parameter: accepts an element whose locatation you want find out.
   - Return: it will return the last index of the element upon which the indexOf() method was called.
   - Example:
     ```js
     let numbers = [1, 2, 3, 7,9,3,0,5];
     numbers.indexOf(3); //5
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.lastIndexOf("fox");//4
     let colors = ['red', 'green', 'blue'];
     colors.lastIndexOf("black"); // -1
     ```
   - `indexOf` it accepts an element whose  location/index you want to locate and then return the last index  of the given elements  upon which the push() method was called.
   - it  does not mutates the original value

7. `includes` 
- Parameter: accepts a value and search for the same in entire array, it also accepts another value which dtermine where to start the search for the searchitems.
   - Return: retun true or false depending upon whether the array includes the searchitem  or not.
   - Example:
     ```js
     let numbers = [1, 2, 3, 7,9,3,0,5];
     numbers.includes(3); //true
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.includes("fox");//true
     let colors = ['red', 'green', 'blue'];
     colors.lastIndexOf("green", 9); // false
     ```
   - `includes` accepts a value and search for the same in entire array, it also accepts another value which dtermine where to start the search for the searchitems and then, etun true or false depending upon whether the array includes the searchitem  or not.
   - it  does not mutates the original value

8. `reverse`
- Parameter: 
   - Return: The reverse () method reverse an  array in place and return the referance to the same array.
     ```js
     let numbers = [1, 2, 3, 7,9,3,0,5];
     numbers.reverse(); //[5, 0, 3, 9, 7, 3, 2, 1]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.reverse();//['lazy', 'a', 'over', 'jumped', 'fox', 'brown', 'quick', 'A']
     let colors = ['red', 'green', 'blue'];
     colors.reverse(); // [ 'blue' 'red', 'green',]
     ```
   - `reverse` () method reverse an  array in place and return the referance to the same array.
   - it  mutates the original value.

9. `every`
- Parameter: as the parameter it accepts a function.
   - Return: The every method test whether all the elements in the array paas the test implemented by the provided function and depentindg upon the same it return boolean value, it return true in case all the elements passes the test otherwise false even if one of them fails to pass the test.
     ```js
     
     ```
   -`every` () method accepts a function as the parameter and it  test whether all the elements in the array paas the test implemented by the provided function and depentindg upon the same it return boolean value, it return true in case all the elements passes the test otherwise false even if one of them fails to pass the test.

10. `shift`
11. `splice`
12. `find`
13. `unshift`
14. `findIndex`
15. `filter`
16. `flat`
17. `forEach`
18. `map`
19. `pop`
20. `reduce`
21. `slice`
22. `some`
