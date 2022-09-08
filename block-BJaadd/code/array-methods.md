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
   - `includes` accepts a value and search for the same in entire array, it also accepts another value which dtermine where to start the search for the searchitems and then, return true or false depending upon whether the array includes the searchitem  or not.
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
 - it does not mutate .
 
10. `shift`
- Parameter: 
   - Return: The shift() method returns the removed element of the the array on which it were called upon.
     ```js
     let numbers = [1, 2, 3, 7,9,3,0,5];
     numbers.shift(); // 1
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.shift();//"A"
     let colors = ['red', 'green', 'blue'];
     colors.shift(); //"red"
     ```
   - `shift`() The shift() method removes the first element from an arrya and returns that removed element . it changes the content and lenght of the aaray upon which it were called. it will return undefined if you try calling it on an empty array.
- it mutates the original array.

11. `splice`
- Parameter: Accepts three different parameter, out of which second and third is optional, first value is the index of the array from where the splice method will start changing the array, second value is again number data type which tells the count of element to be deleted from the start(first parameter) of the array and the last value is the elemnt which would be added to aaray beginning fromn start.
   - Return: The splice() method returns an array containing the deleted element.
     ```js
     let numbers = [1, 2, 3, 7,9,3,0,5];
     numbers.shift(5,2,10,11,12); // [3, 0]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.splice(1,3,"slow","red","kangaroo");//['quick', 'brown', 'fox']
     let colors = ['red', 'green', 'blue'];
     colors.splice(1); // ['green', 'blue']
     ```
   - `shift`() method accepts three different parameter, out of which second and third is optional, first value is the index of the array from where the splice method will start changing the array, second value is again number data type which tells the count of element to be deleted from the start(first parameter) of the array and the last value is the elemnt which would be added to aaray beginning fromn start, and then returns an array containing the deleted element, If no elements are removed, an empty array is returned.
- it mutates the original array.

12. `find`
13. `unshift`
- Parameter: it accepts an element which will be added at the very start of the given array .
   - Return: it will return the new length property upon which the unshift() method was called.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.unshift(9); //4
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.unshift("result-");//9
     let colors = ['red', 'green', 'blue'];
     colors.unshift("yellow", "black"); // 5
     ```
   - `unshift` it accepts an element which will be added at the beginning of the given array and then return the new length property upon which the push() method was called.
   - it mutates the original value

14. `findIndex`
15. `filter`
16. `flat`
- Parameter: Flat() method accept an optional parameter in the number data type which specify how deep a nested array structure should be flattened .
   - Return: reurn a new array with the sub arrayb element concatenated into it.
     ```js
     let numbers = [1, 2, [3, 7,9],3,0,5];
     numbers.flat(); // [1, 2, 3, 7, 9, 3, 0, 5]
     
     let colors = ['red', [[[['green']]]], 'blue'];
     colors.flat(4); // ['red', 'green', 'blue']
     
     ```
   - `flat`()  Flat() method accept an optional parameter in the number data type which specify how deep a nested array structure should be flattened and return a new array with the sub arrayb element concatenated into it.
- it does not mutates the original array.


17. `forEach`
18. `map`
- Parameter: as the parameter it accepts a callback function.
   - Return: it construct and returns a new array , the results of the callbackfn are  the element of this new array.
     ```js
     //examples
     
     ```
   - `map` calls a provided function for each elements in an array ,in order and construct a new array from the results.
- it does not mutates the original array.

19. `pop`
- Parameter: 
   - Return: The pop() method returns the removed element of the the array on which it were called upon.
     ```js
     let numbers = [1, 2, 3, 7,9,3,0,5];
     numbers.pop(); // 5
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.pop();//"lazy"
     let colors = ['red', 'green', 'blue'];
     colors.pop(); //"blue"
     ```
   - `pop`() The pop() method removes the last element from an arrya and returns that removed element . it changes the content and lenght of the aaray upon which it were called. it will return undefined if you try calling it on an empty array.
- it mutates the original array.

20. `reduce`
21. `slice`
- Parameter: It accepts two value as parameter, both are optional, the first value is an integer indicating the index in the array from where the extraction will start, and the second value tells the index of the first value which wont get extracted.
   - Return: A new array containing the extracted elements.
     ```js
     let numbers = [1, 2, 3, 7,9,3,0,5];
     numbers.slice(); //  [1, 2, 3, 7,9,3,0,5]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.slice(2,6);//['brown', 'fox', 'jumped', 'over']
     let colors = ['red', 'green', 'blue'];
     colors.slice(-2,0); //[]
     ```
   - `pop`()It accepts two value as parameter, both are optional, the first value is an integer indicating the index in the array from where the extraction will start, and the second value tells the index of the first value which wont get extracted, and then
    return anew array containing the extracted elements.
- it does not mutates the original array.

22. `some`
