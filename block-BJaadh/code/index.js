// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101))

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));

// - Add two new words in the strings array "called" and "sentance"
newStrings = [...strings];
 console.log(newStrings.push("called" , "sentance"))
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(newStrings.join(" "));
// - Remove the first word in the array (strings)
console.log(newStrings.shift());

// - Find all the words that contain 'is' use string method 'includes'
for (let elem of strings){
  if(elem.includes("is") === true){
    console.log(elem)
  }
}
// - Find all the words that contain 'is' use string method 'indexOf'
for (let elem of strings){
  if(elem.indexOf("is") !== -1){
    console.log(elem)
  }
}
// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(numbers.every(function(number){
  return  number % 3 === 0;
 }));

// -  Sort Array from smallest to largest
let orderedNumber = [...numbers];
console.log(orderedNumber.sort(function(a,b){
   return a - b;
  }
));

// - Remove the last word in strings
let removedLastWord = [...strings];
removedLastWord.pop();

// - Find largest number in numbers
    let max = numbers[0];
    for(i = 0; i < numbers.length; i++){
      if(numbers[i] > max){
        max = numbers[i];
      }
    }
    console.log (max)
// - Find longest string in strings

function findLongeststring (arr){
  let longeststring ="";
  for(let elem of strings){
    if(elem.length > longeststring.length ){
      longeststring = elem;
    }
  }
   return longeststring;
 
}

// - Find all the even numbers
 let evenNumbers = numbers.filter(function(num){
      return num % 2 === 0;
})

// - Find all the odd numbers
let oddNumbers = numbers.filter(function(num){
  return num % 2 !== 0;
})

// - Place a new word at the start of the array use (unshift)
let newWordAtString = [...strings];
newWordAtString.unshift("that &");

// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(numbers.indexOf(18), numbers.indexOf(11) + 1 ));

// - Make a subset of strings array ['a','collection']
console.log(strings.slice(strings.indexOf("a"), strings.indexOf("collection") + 1 ));
// - Replace 12 & 18 with 1221 and 1881
let index12 = numbers.indexOf(12);
let index18 = numbers.indexOf(18);
if (index12 !== -1  && index18 !== -1){
   numbers[index12] = 1221
   numbers[index18] = 1881;
}

// - Replace words in strings array with the length of the word
let wordLength = [];
for(let elem of strings){
 wordLength.push(elem.length)
}

// - Find the sum of the length of words using above question
let sum = 0;
for(let elem of wordLength){
  sum = sum + elem;
}

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
function findNameWithJ(arr){
  let nameWithj = [];
  for(let elem of  arr){
    if(elem.firstname.includes("J")){
      nameWithj.push(elem.firstname)
    }
  }
  return nameWithj;
}

// - Create new array with only first name
let onlyFirstName = [];
for(let elem of customers){
  onlyFirstName.push(elem.firstname)
}

// - Create new array with all the full names (ex: "Joe Blogs")
let fullName = [];
for(let elem of customers){
  fullName.push(elem.firstname + " " + elem.lastname)
}

// - Sort the array created above alphabetically
fullName.sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
let nameWithVowel =[];
for (let elem of customers){
  if(elem.firstname.includes("a")){
    nameWithVowel.push(elem.firstname)
  } else if(elem.firstname.includes("e")){
    nameWithVowel.push(elem.firstname)
  } else if(elem.firstname.includes("i")){
    nameWithVowel.push(elem.firstname)
  } else if(elem.firstname.includes("o")){
    nameWithVowel.push(elem.firstname)
  } else if(elem.firstname.includes("u")){
    nameWithVowel.push(elem.firstname)
  } 
}